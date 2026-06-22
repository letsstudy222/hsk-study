/* Service Worker - HSK 学习
   Chiến lược:
   - Precache "app shell" cùng origin (index.html, data/*.js, icon, manifest).
   - Runtime: cache-first cho MỌI GET http(s) (kể cả CDN: React/Babel/Tailwind/
     Supabase/Google Fonts). Lần đầu mở online sẽ tải & lưu dần -> sau đó offline chạy được.
   - Bỏ qua request tới Supabase REST (đồng bộ tiến độ) -> luôn đi mạng, không cache.
   Đổi CACHE_VERSION mỗi lần ra bản mới để buộc cập nhật.
*/
const CACHE_VERSION = "hsk-v3";
const PRECACHE = [
  ".",
  "index.html",
  "manifest.json",
  "config.js",
  "hsk1.js", "hsk2.js", "hsk3.js", "hsk4.js", "hsk5.js", "hsk6.js",
  "grammar.js", "readings.js", "sentences.js",
  "icon-180.png", "icon-192.png", "icon-512.png",
  "icon-maskable-192.png", "icon-maskable-512.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_VERSION).then((c) =>
      // addAll fail toàn bộ nếu 1 file lỗi -> dùng từng cái để bền hơn
      Promise.all(PRECACHE.map((u) => c.add(u).catch(() => null)))
    ).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.protocol !== "http:" && url.protocol !== "https:") return;

  // Không cache lệnh gọi dữ liệu Supabase (đồng bộ tiến độ): luôn đi mạng.
  if (url.hostname.endsWith(".supabase.co")) return;

  e.respondWith(
    caches.match(req).then((hit) => {
      if (hit) {
        // Có trong cache: trả ngay, đồng thời cập nhật ngầm (stale-while-revalidate)
        fetch(req).then((res) => {
          if (res && (res.ok || res.type === "opaque")) {
            caches.open(CACHE_VERSION).then((c) => c.put(req, res.clone()));
          }
        }).catch(() => {});
        return hit;
      }
      // Chưa có: lấy mạng rồi lưu lại (opaque cho CDN cross-origin)
      return fetch(req).then((res) => {
        if (res && (res.ok || res.type === "opaque")) {
          const copy = res.clone();
          caches.open(CACHE_VERSION).then((c) => c.put(req, copy));
        }
        return res;
      }).catch(() => {
        // Offline & không có cache: nếu là điều hướng trang -> trả index.html
        if (req.mode === "navigate") return caches.match("index.html");
        return new Response("", { status: 504, statusText: "Offline" });
      });
    })
  );
});
