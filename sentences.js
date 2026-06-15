/* ============================================================
   DỮ LIỆU "CÂU MỖI NGÀY" (每日一句)
   Mỗi câu gồm:
     id        : mã câu (duy nhất)
     hanzi     : câu tiếng Trung
     pinyin    : phiên âm (có dấu thanh)
     meaning   : nghĩa tiếng Việt
     tag       : nhãn phân loại (励志 / 谚语 / 流行语 / 日常 / 名言 ...)
     note      : ghi chú cách dùng / vì sao hay (tiếng Việt)
     words     : tách theo TỪ / CỤM — [{ w: hán, p: pinyin, m: nghĩa }]
     structure : giải thích CẤU TRÚC câu (tiếng Việt)

   ➜ Muốn thêm câu trend mới: copy một khối { ... } rồi sửa nội dung,
     nhớ đặt id khác nhau. Thêm bao nhiêu câu cũng được.
   ============================================================ */
var sentences = [
  {
    id: "s001",
    hanzi: "只要你愿意努力,就没有什么是做不到的。",
    pinyin: "Zhǐyào nǐ yuànyì nǔlì, jiù méiyǒu shénme shì zuò bu dào de.",
    meaning: "Chỉ cần bạn sẵn lòng nỗ lực, thì chẳng có gì là không làm được.",
    tag: "励志",
    note: "Mẫu câu động viên rất phổ biến. Vế sau dùng 是…的 để nhấn mạnh.",
    words: [
      { w: "只要", p: "zhǐyào", m: "chỉ cần" },
      { w: "你", p: "nǐ", m: "bạn" },
      { w: "愿意", p: "yuànyì", m: "sẵn lòng, muốn" },
      { w: "努力", p: "nǔlì", m: "nỗ lực" },
      { w: "就", p: "jiù", m: "thì (liền)" },
      { w: "没有什么", p: "méiyǒu shénme", m: "chẳng có gì" },
      { w: "是…的", p: "shì…de", m: "(khung nhấn mạnh)" },
      { w: "做不到", p: "zuò bu dào", m: "không làm được" }
    ],
    structure: "Cấu trúc điều kiện 只要…就… (chỉ cần… thì…): vế 只要 nêu điều kiện đủ, vế 就 nêu kết quả. Cụm 没有什么…的 = 'chẳng có gì là…', trong đó 做不到 là bổ ngữ khả năng dạng phủ định của 做 (làm) + 到 (đạt được)."
  },
  {
    id: "s002",
    hanzi: "无论遇到多大的困难,我们都不应该轻易放弃。",
    pinyin: "Wúlùn yùdào duō dà de kùnnan, wǒmen dōu bù yīnggāi qīngyì fàngqì.",
    meaning: "Bất kể gặp khó khăn lớn đến đâu, chúng ta đều không nên dễ dàng bỏ cuộc.",
    tag: "励志",
    note: "无论…都… dùng để nói 'dù… cũng…', rất hay trong văn nói lẫn viết.",
    words: [
      { w: "无论", p: "wúlùn", m: "bất kể, dù" },
      { w: "遇到", p: "yùdào", m: "gặp phải" },
      { w: "多大", p: "duō dà", m: "lớn đến đâu" },
      { w: "的", p: "de", m: "(trợ từ định ngữ)" },
      { w: "困难", p: "kùnnan", m: "khó khăn" },
      { w: "我们", p: "wǒmen", m: "chúng ta" },
      { w: "都", p: "dōu", m: "đều" },
      { w: "不应该", p: "bù yīnggāi", m: "không nên" },
      { w: "轻易", p: "qīngyì", m: "dễ dàng, tùy tiện" },
      { w: "放弃", p: "fàngqì", m: "từ bỏ" }
    ],
    structure: "Cấu trúc 无论…都… (bất kể… đều…): sau 无论 thường là một từ nghi vấn hoặc cụm chỉ mức độ (ở đây là 多大 'lớn đến đâu'), vế sau bắt buộc có 都 hoặc 也. 轻易 bổ nghĩa cho động từ 放弃."
  },
  {
    id: "s003",
    hanzi: "与其抱怨现在的生活,不如努力去改变它。",
    pinyin: "Yǔqí bàoyuàn xiànzài de shēnghuó, bùrú nǔlì qù gǎibiàn tā.",
    meaning: "Thay vì than vãn cuộc sống hiện tại, chẳng thà nỗ lực thay đổi nó.",
    tag: "励志",
    note: "与其…不如… dùng để so sánh hai lựa chọn và nghiêng về vế sau.",
    words: [
      { w: "与其", p: "yǔqí", m: "thay vì" },
      { w: "抱怨", p: "bàoyuàn", m: "than vãn, oán trách" },
      { w: "现在", p: "xiànzài", m: "hiện tại" },
      { w: "的", p: "de", m: "(trợ từ)" },
      { w: "生活", p: "shēnghuó", m: "cuộc sống" },
      { w: "不如", p: "bùrú", m: "chẳng thà, không bằng" },
      { w: "努力", p: "nǔlì", m: "nỗ lực" },
      { w: "去", p: "qù", m: "đi (làm gì đó)" },
      { w: "改变", p: "gǎibiàn", m: "thay đổi" },
      { w: "它", p: "tā", m: "nó" }
    ],
    structure: "Cấu trúc lựa chọn 与其 A,不如 B (thay vì A, chẳng thà B): người nói bác bỏ A và chọn B. 去 ở đây chỉ hướng tới hành động (去改变 = đi mà thay đổi)."
  },
  {
    id: "s004",
    hanzi: "机会总是留给那些有准备的人。",
    pinyin: "Jīhuì zǒngshì liú gěi nàxiē yǒu zhǔnbèi de rén.",
    meaning: "Cơ hội luôn dành cho những người có sự chuẩn bị.",
    tag: "名言",
    note: "Câu nói nổi tiếng, hay dùng để nhắc nhở sự chuẩn bị.",
    words: [
      { w: "机会", p: "jīhuì", m: "cơ hội" },
      { w: "总是", p: "zǒngshì", m: "luôn luôn" },
      { w: "留给", p: "liú gěi", m: "để lại cho, dành cho" },
      { w: "那些", p: "nàxiē", m: "những… (số nhiều)" },
      { w: "有准备", p: "yǒu zhǔnbèi", m: "có chuẩn bị" },
      { w: "的人", p: "de rén", m: "người mà…" }
    ],
    structure: "Câu trần thuật cơ bản. 留给 là động từ + 给 (cho), chỉ đối tượng tiếp nhận. 有准备的人 là cụm danh từ với định ngữ: 有准备 + 的 + 人 ('người (mà) có chuẩn bị')."
  },
  {
    id: "s005",
    hanzi: "世上无难事,只怕有心人。",
    pinyin: "Shìshàng wú nánshì, zhǐ pà yǒuxīnrén.",
    meaning: "Trên đời không có việc gì khó, chỉ sợ người có lòng (quyết tâm).",
    tag: "谚语",
    note: "Tục ngữ kinh điển. 无 = 没有 (văn viết). 有心人 = người có quyết tâm.",
    words: [
      { w: "世上", p: "shìshàng", m: "trên đời" },
      { w: "无", p: "wú", m: "không có (văn viết)" },
      { w: "难事", p: "nánshì", m: "việc khó" },
      { w: "只", p: "zhǐ", m: "chỉ" },
      { w: "怕", p: "pà", m: "sợ" },
      { w: "有心人", p: "yǒuxīnrén", m: "người có lòng/quyết tâm" }
    ],
    structure: "Hai vế đối nhau kiểu tục ngữ. Vế 1 dùng 无 (= 没有) mang màu văn ngôn. Vế 2 '只怕…' = 'chỉ e/sợ là…', nhấn rằng yếu tố quyết định là con người."
  },
  {
    id: "s006",
    hanzi: "越是着急,越容易出错。",
    pinyin: "Yuè shì zháojí, yuè róngyì chūcuò.",
    meaning: "Càng sốt ruột thì càng dễ mắc lỗi.",
    tag: "日常",
    note: "Mẫu 越…越… cực kỳ thông dụng để diễn tả 'càng… càng…'.",
    words: [
      { w: "越是", p: "yuè shì", m: "càng" },
      { w: "着急", p: "zháojí", m: "sốt ruột, vội" },
      { w: "越", p: "yuè", m: "càng" },
      { w: "容易", p: "róngyì", m: "dễ" },
      { w: "出错", p: "chūcuò", m: "mắc lỗi, sai" }
    ],
    structure: "Cấu trúc 越 A 越 B (càng A càng B): mức độ của B tăng theo A. Có thể nói 越是…越… để nhấn mạnh hơn 越…越…."
  },
  {
    id: "s007",
    hanzi: "他一回到家,就迫不及待地打开了电脑。",
    pinyin: "Tā yì huí dào jiā, jiù pòbùjídài de dǎkāi le diànnǎo.",
    meaning: "Anh ấy vừa về đến nhà là vội vàng mở máy tính ngay.",
    tag: "日常",
    note: "Mẫu 一…就… diễn tả 'vừa… là (liền)…'. 迫不及待 = nóng lòng không đợi được.",
    words: [
      { w: "他", p: "tā", m: "anh ấy" },
      { w: "一", p: "yì", m: "vừa, hễ" },
      { w: "回到家", p: "huí dào jiā", m: "về đến nhà" },
      { w: "就", p: "jiù", m: "là (liền)" },
      { w: "迫不及待", p: "pòbùjídài", m: "nóng lòng, không đợi được" },
      { w: "地", p: "de", m: "(trợ từ trạng ngữ)" },
      { w: "打开", p: "dǎkāi", m: "mở (ra)" },
      { w: "了", p: "le", m: "(trợ từ hoàn thành)" },
      { w: "电脑", p: "diànnǎo", m: "máy tính" }
    ],
    structure: "Cấu trúc 一 A 就 B (vừa A là B ngay): hai hành động nối tiếp sát nhau. 迫不及待地 + động từ: thành ngữ làm trạng ngữ nhờ trợ từ 地."
  },
  {
    id: "s008",
    hanzi: "之所以选择这条路,是因为我相信它值得。",
    pinyin: "Zhīsuǒyǐ xuǎnzé zhè tiáo lù, shì yīnwèi wǒ xiāngxìn tā zhídé.",
    meaning: "Sở dĩ tôi chọn con đường này, là vì tôi tin nó xứng đáng.",
    tag: "励志",
    note: "之所以…是因为… đảo kết quả lên trước, nguyên nhân ra sau — nghe trang trọng.",
    words: [
      { w: "之所以", p: "zhīsuǒyǐ", m: "sở dĩ" },
      { w: "选择", p: "xuǎnzé", m: "lựa chọn" },
      { w: "这条路", p: "zhè tiáo lù", m: "con đường này" },
      { w: "是因为", p: "shì yīnwèi", m: "là vì" },
      { w: "我", p: "wǒ", m: "tôi" },
      { w: "相信", p: "xiāngxìn", m: "tin tưởng" },
      { w: "它", p: "tā", m: "nó" },
      { w: "值得", p: "zhídé", m: "đáng, xứng đáng" }
    ],
    structure: "Cấu trúc nhân quả đảo 之所以 (kết quả) 是因为 (nguyên nhân): nêu kết quả trước rồi mới giải thích lý do, dùng nhiều trong văn viết và phát biểu."
  },
  {
    id: "s009",
    hanzi: "即使前面困难重重,我也会坚持走下去。",
    pinyin: "Jíshǐ qiánmiàn kùnnan chóngchóng, wǒ yě huì jiānchí zǒu xiàqù.",
    meaning: "Dù phía trước trùng trùng khó khăn, tôi vẫn sẽ kiên trì đi tiếp.",
    tag: "励志",
    note: "即使…也… = 'dù… cũng…' (giả định). 走下去 = đi tiếp (xu hướng tiếp diễn).",
    words: [
      { w: "即使", p: "jíshǐ", m: "dù, cho dù" },
      { w: "前面", p: "qiánmiàn", m: "phía trước" },
      { w: "困难重重", p: "kùnnan chóngchóng", m: "khó khăn trùng điệp" },
      { w: "我", p: "wǒ", m: "tôi" },
      { w: "也", p: "yě", m: "cũng, vẫn" },
      { w: "会", p: "huì", m: "sẽ" },
      { w: "坚持", p: "jiānchí", m: "kiên trì" },
      { w: "走下去", p: "zǒu xiàqù", m: "đi tiếp" }
    ],
    structure: "Cấu trúc nhượng bộ giả định 即使…也… (dù… vẫn…). 走 + 下去 là bổ ngữ xu hướng chỉ hành động tiếp tục ('đi tiếp', 'tiếp tục đi')."
  },
  {
    id: "s010",
    hanzi: "这道菜不但好吃,而且做起来也很简单。",
    pinyin: "Zhè dào cài búdàn hǎochī, érqiě zuò qǐlái yě hěn jiǎndān.",
    meaning: "Món này không những ngon, mà làm cũng rất đơn giản.",
    tag: "日常",
    note: "不但…而且… = 'không những… mà còn…'. 做起来 = 'làm thì/ khi làm'.",
    words: [
      { w: "这道菜", p: "zhè dào cài", m: "món ăn này" },
      { w: "不但", p: "búdàn", m: "không những" },
      { w: "好吃", p: "hǎochī", m: "ngon" },
      { w: "而且", p: "érqiě", m: "mà còn" },
      { w: "做起来", p: "zuò qǐlái", m: "làm thì (khi làm)" },
      { w: "也", p: "yě", m: "cũng" },
      { w: "很简单", p: "hěn jiǎndān", m: "rất đơn giản" }
    ],
    structure: "Cấu trúc tăng tiến 不但…而且… (không những… mà còn…). 做起来 dùng bổ ngữ xu hướng 起来 mang nghĩa 'khi bắt tay vào làm/ đánh giá việc làm', lượng từ 道 dùng cho món ăn."
  },
  {
    id: "s011",
    hanzi: "听君一席话,胜读十年书。",
    pinyin: "Tīng jūn yì xí huà, shèng dú shí nián shū.",
    meaning: "Nghe ngài (bạn) nói một câu, còn hơn đọc sách mười năm.",
    tag: "谚语",
    note: "Tục ngữ khen lời nói có giá trị. 君 = cách xưng hô lịch sự thời xưa (ngài).",
    words: [
      { w: "听", p: "tīng", m: "nghe" },
      { w: "君", p: "jūn", m: "ngài, bạn (kính ngữ cổ)" },
      { w: "一席话", p: "yì xí huà", m: "một席 lời (một phen trò chuyện)" },
      { w: "胜", p: "shèng", m: "hơn, thắng" },
      { w: "读", p: "dú", m: "đọc" },
      { w: "十年书", p: "shí nián shū", m: "sách mười năm" }
    ],
    structure: "Câu tục ngữ đối nhau, dùng nhiều từ văn ngôn. 胜 (= hơn) so sánh vế trước với vế sau. 一席话 là cách nói cổ chỉ 'một cuộc/phen trò chuyện'."
  },
  {
    id: "s012",
    hanzi: "在哪里跌倒,就在哪里站起来。",
    pinyin: "Zài nǎlǐ diēdǎo, jiù zài nǎlǐ zhàn qǐlái.",
    meaning: "Vấp ngã ở đâu thì đứng dậy ở đó.",
    tag: "励志",
    note: "Dùng 哪里…就…哪里 để chỉ 'ở đâu… thì ở đó…'. Câu rất hay để tự nhủ.",
    words: [
      { w: "在哪里", p: "zài nǎlǐ", m: "ở đâu" },
      { w: "跌倒", p: "diēdǎo", m: "vấp ngã" },
      { w: "就", p: "jiù", m: "thì" },
      { w: "在哪里", p: "zài nǎlǐ", m: "ở đó (lặp lại)" },
      { w: "站起来", p: "zhàn qǐlái", m: "đứng dậy" }
    ],
    structure: "Dùng cùng một từ nghi vấn 哪里 ở cả hai vế để biểu thị quan hệ tương ứng ('chỗ nào… thì chỗ đó…'). 站起来 = 站 + 起来 (bổ ngữ xu hướng chỉ động tác từ thấp lên cao)."
  },
  {
    id: "s013",
    hanzi: "努力不一定成功,但放弃一定失败。",
    pinyin: "Nǔlì bù yídìng chénggōng, dàn fàngqì yídìng shībài.",
    meaning: "Nỗ lực chưa chắc thành công, nhưng bỏ cuộc thì chắc chắn thất bại.",
    tag: "流行语",
    note: "Câu truyền cảm hứng phổ biến trên mạng. 不一定 = chưa chắc; 一定 = chắc chắn.",
    words: [
      { w: "努力", p: "nǔlì", m: "nỗ lực" },
      { w: "不一定", p: "bù yídìng", m: "chưa chắc" },
      { w: "成功", p: "chénggōng", m: "thành công" },
      { w: "但", p: "dàn", m: "nhưng" },
      { w: "放弃", p: "fàngqì", m: "bỏ cuộc" },
      { w: "一定", p: "yídìng", m: "chắc chắn" },
      { w: "失败", p: "shībài", m: "thất bại" }
    ],
    structure: "Hai vế tương phản nối bằng 但 (nhưng). Cặp đối lập 不一定 (chưa chắc) ↔ 一定 (chắc chắn) tạo nhịp đối, dễ nhớ — đặc trưng của câu 'quote' trên mạng."
  },
  {
    id: "s014",
    hanzi: "不是我不想帮你,而是我真的没有时间。",
    pinyin: "Búshì wǒ bù xiǎng bāng nǐ, érshì wǒ zhēn de méiyǒu shíjiān.",
    meaning: "Không phải tôi không muốn giúp bạn, mà là tôi thật sự không có thời gian.",
    tag: "日常",
    note: "不是…而是… dùng để đính chính: phủ định cái này, khẳng định cái kia.",
    words: [
      { w: "不是", p: "búshì", m: "không phải" },
      { w: "我", p: "wǒ", m: "tôi" },
      { w: "不想", p: "bù xiǎng", m: "không muốn" },
      { w: "帮你", p: "bāng nǐ", m: "giúp bạn" },
      { w: "而是", p: "érshì", m: "mà là" },
      { w: "真的", p: "zhēn de", m: "thật sự" },
      { w: "没有时间", p: "méiyǒu shíjiān", m: "không có thời gian" }
    ],
    structure: "Cấu trúc đính chính 不是 A,而是 B (không phải A, mà là B): bác bỏ A, làm rõ B mới là sự thật. Rất hữu ích khi giải thích/biện minh."
  },
  {
    id: "s015",
    hanzi: "只有亲身经历过,才能真正理解其中的辛苦。",
    pinyin: "Zhǐyǒu qīnshēn jīnglì guo, cáinéng zhēnzhèng lǐjiě qízhōng de xīnkǔ.",
    meaning: "Chỉ khi đích thân trải qua, mới thật sự hiểu được nỗi vất vả trong đó.",
    tag: "名言",
    note: "只有…才… = 'chỉ có… mới…' (điều kiện cần duy nhất).",
    words: [
      { w: "只有", p: "zhǐyǒu", m: "chỉ có, chỉ khi" },
      { w: "亲身", p: "qīnshēn", m: "đích thân" },
      { w: "经历过", p: "jīnglì guo", m: "đã trải qua" },
      { w: "才能", p: "cáinéng", m: "mới có thể" },
      { w: "真正", p: "zhēnzhèng", m: "thật sự" },
      { w: "理解", p: "lǐjiě", m: "hiểu" },
      { w: "其中", p: "qízhōng", m: "trong đó" },
      { w: "的辛苦", p: "de xīnkǔ", m: "sự vất vả" }
    ],
    structure: "Cấu trúc điều kiện cần 只有…才… (chỉ có… mới…): vế 只有 nêu điều kiện duy nhất, vế 才 nêu kết quả. 过 sau động từ chỉ kinh nghiệm đã từng."
  },
  {
    id: "s016",
    hanzi: "宁可慢一点儿,也不要出错。",
    pinyin: "Nìngkě màn yìdiǎnr, yě búyào chūcuò.",
    meaning: "Thà chậm một chút, chứ đừng để sai.",
    tag: "日常",
    note: "宁可…也不… = 'thà… chứ không…', dùng khi chọn cái ít tệ hơn.",
    words: [
      { w: "宁可", p: "nìngkě", m: "thà rằng" },
      { w: "慢", p: "màn", m: "chậm" },
      { w: "一点儿", p: "yìdiǎnr", m: "một chút" },
      { w: "也不要", p: "yě búyào", m: "cũng đừng" },
      { w: "出错", p: "chūcuò", m: "sai sót" }
    ],
    structure: "Cấu trúc chọn lựa 宁可 A,也不(要) B (thà A chứ không B): người nói chấp nhận A để tránh B. Đây là cách diễn đạt quyết tâm/ưu tiên."
  },
  {
    id: "s017",
    hanzi: "幸亏你提醒了我,要不然我就忘了。",
    pinyin: "Xìngkuī nǐ tíxǐng le wǒ, yàoburán wǒ jiù wàng le.",
    meaning: "May mà bạn nhắc tôi, không thì tôi đã quên rồi.",
    tag: "日常",
    note: "幸亏…要不然… = 'may mà… không thì…'. Diễn tả sự may mắn thoát điều xấu.",
    words: [
      { w: "幸亏", p: "xìngkuī", m: "may mà, may nhờ" },
      { w: "你", p: "nǐ", m: "bạn" },
      { w: "提醒了我", p: "tíxǐng le wǒ", m: "đã nhắc tôi" },
      { w: "要不然", p: "yàoburán", m: "nếu không thì" },
      { w: "我就忘了", p: "wǒ jiù wàng le", m: "tôi đã quên rồi" }
    ],
    structure: "Cấu trúc 幸亏…(要不然)… : vế 幸亏 nêu điều may mắn, vế 要不然 nêu hậu quả xấu giả định đã tránh được. 要不然 có thể thay bằng 不然/否则."
  },
  {
    id: "s018",
    hanzi: "无论结果如何,我都为自己努力过而感到骄傲。",
    pinyin: "Wúlùn jiéguǒ rúhé, wǒ dōu wèi zìjǐ nǔlì guo ér gǎndào jiāo'ào.",
    meaning: "Bất kể kết quả ra sao, tôi đều tự hào vì mình đã từng nỗ lực.",
    tag: "励志",
    note: "如何 = 'ra sao' (văn viết của 怎么样). 为…而… = 'vì… mà…'.",
    words: [
      { w: "无论", p: "wúlùn", m: "bất kể" },
      { w: "结果", p: "jiéguǒ", m: "kết quả" },
      { w: "如何", p: "rúhé", m: "ra sao, thế nào" },
      { w: "我都", p: "wǒ dōu", m: "tôi đều" },
      { w: "为", p: "wèi", m: "vì" },
      { w: "自己", p: "zìjǐ", m: "bản thân" },
      { w: "努力过", p: "nǔlì guo", m: "đã từng nỗ lực" },
      { w: "而", p: "ér", m: "mà (nối)" },
      { w: "感到骄傲", p: "gǎndào jiāo'ào", m: "cảm thấy tự hào" }
    ],
    structure: "Kết hợp 无论…都… với cụm 为 X 而 Y (vì X mà Y). 如何 là cách nói trang trọng của 怎么样. 过 chỉ kinh nghiệm đã từng."
  },
  {
    id: "s019",
    hanzi: "与其说他是老师,不如说他更像一位朋友。",
    pinyin: "Yǔqí shuō tā shì lǎoshī, bùrú shuō tā gèng xiàng yí wèi péngyou.",
    meaning: "Nói anh ấy là thầy, chẳng bằng nói anh ấy giống một người bạn hơn.",
    tag: "日常",
    note: "Biến thể 与其说…不如说… dùng để 'nói cho đúng hơn là…'.",
    words: [
      { w: "与其说", p: "yǔqí shuō", m: "nói rằng… thì" },
      { w: "他是老师", p: "tā shì lǎoshī", m: "anh ấy là thầy" },
      { w: "不如说", p: "bùrú shuō", m: "chẳng bằng nói" },
      { w: "更像", p: "gèng xiàng", m: "giống… hơn" },
      { w: "一位朋友", p: "yí wèi péngyou", m: "một người bạn" }
    ],
    structure: "Biến thể của 与其…不如…: thêm 说 thành 与其说 A,不如说 B = 'thay vì nói A, nói B thì đúng hơn'. 更 (hơn) làm rõ mức độ so sánh."
  },
  {
    id: "s020",
    hanzi: "哪怕只有百分之一的希望,我们也要尽百分之百的努力。",
    pinyin: "Nǎpà zhǐyǒu bǎifēnzhīyī de xīwàng, wǒmen yě yào jìn bǎifēnzhībǎi de nǔlì.",
    meaning: "Dù chỉ có một phần trăm hy vọng, chúng ta cũng phải dốc một trăm phần trăm nỗ lực.",
    tag: "励志",
    note: "哪怕…也… = 'dù… cũng…'. 百分之一 / 百分之百 là cách đọc phần trăm.",
    words: [
      { w: "哪怕", p: "nǎpà", m: "dù cho" },
      { w: "只有", p: "zhǐyǒu", m: "chỉ có" },
      { w: "百分之一", p: "bǎifēnzhīyī", m: "một phần trăm" },
      { w: "的希望", p: "de xīwàng", m: "hy vọng" },
      { w: "我们也要", p: "wǒmen yě yào", m: "chúng ta cũng phải" },
      { w: "尽", p: "jìn", m: "dốc hết" },
      { w: "百分之百", p: "bǎifēnzhībǎi", m: "một trăm phần trăm" },
      { w: "的努力", p: "de nǔlì", m: "nỗ lực" }
    ],
    structure: "Cấu trúc nhượng bộ 哪怕…也… (dù… cũng…). Cách đọc phần trăm: 百分之 + số (百分之一 = 1%, 百分之百 = 100%). Hai con số đối nhau tạo hiệu ứng nhấn mạnh."
  },
  {
    id: "s021",
    hanzi: "时间一长,你就会发现习惯的力量有多大。",
    pinyin: "Shíjiān yì cháng, nǐ jiù huì fāxiàn xíguàn de lìliàng yǒu duō dà.",
    meaning: "Thời gian dài ra, bạn sẽ phát hiện sức mạnh của thói quen lớn đến nhường nào.",
    tag: "名言",
    note: "Mẫu 一…就… với tính từ (一长 = 'một khi dài ra'). 有多大 = 'lớn đến đâu'.",
    words: [
      { w: "时间", p: "shíjiān", m: "thời gian" },
      { w: "一长", p: "yì cháng", m: "(một khi) dài ra" },
      { w: "你就会", p: "nǐ jiù huì", m: "bạn sẽ" },
      { w: "发现", p: "fāxiàn", m: "phát hiện" },
      { w: "习惯", p: "xíguàn", m: "thói quen" },
      { w: "的力量", p: "de lìliàng", m: "sức mạnh" },
      { w: "有多大", p: "yǒu duō dà", m: "lớn đến đâu" }
    ],
    structure: "Mẫu 一 + tính từ,就… diễn tả 'hễ… (đạt mức nào đó) là…'. Cụm nghi vấn 有多大 ('to đến mức nào') ở đây không hỏi mà dùng để cảm thán/nhấn mạnh."
  },
  {
    id: "s022",
    hanzi: "做人要懂得感恩,有福的人往往都懂得知足。",
    pinyin: "Zuòrén yào dǒngde gǎn'ēn, yǒufú de rén wǎngwǎng dōu dǒngde zhīzú.",
    meaning: "Làm người phải biết biết ơn; người có phúc thường đều biết đủ.",
    tag: "名言",
    note: "懂得 + động từ = 'biết (cách)…'. 往往 = 'thường thường'.",
    words: [
      { w: "做人", p: "zuòrén", m: "làm người" },
      { w: "要", p: "yào", m: "phải, cần" },
      { w: "懂得", p: "dǒngde", m: "biết (cách)" },
      { w: "感恩", p: "gǎn'ēn", m: "biết ơn" },
      { w: "有福的人", p: "yǒufú de rén", m: "người có phúc" },
      { w: "往往", p: "wǎngwǎng", m: "thường, hay" },
      { w: "都", p: "dōu", m: "đều" },
      { w: "知足", p: "zhīzú", m: "biết đủ, hài lòng" }
    ],
    structure: "Hai mệnh đề liên quan về ý. 懂得 + V = 'biết (cách) làm gì'. 往往 là phó từ tần suất ('thường thường'), khác 常常 ở chỗ 往往 gắn với quy luật/khái quát."
  },
  {
    id: "s023",
    hanzi: "这件事说起来容易,做起来却很难。",
    pinyin: "Zhè jiàn shì shuō qǐlái róngyì, zuò qǐlái què hěn nán.",
    meaning: "Việc này nói thì dễ, nhưng làm lại rất khó.",
    tag: "日常",
    note: "说起来/做起来 = 'nói thì/làm thì'. 却 = 'lại' (chuyển ý nhẹ).",
    words: [
      { w: "这件事", p: "zhè jiàn shì", m: "việc này" },
      { w: "说起来", p: "shuō qǐlái", m: "nói thì" },
      { w: "容易", p: "róngyì", m: "dễ" },
      { w: "做起来", p: "zuò qǐlái", m: "làm thì" },
      { w: "却", p: "què", m: "lại, nhưng" },
      { w: "很难", p: "hěn nán", m: "rất khó" }
    ],
    structure: "Dùng cặp 说起来…做起来… (nói thì… làm thì…) để đối lập lời nói với hành động. 却 là phó từ chuyển ý, đứng trước động từ/tính từ, nhấn sự trái ngược."
  },
  {
    id: "s024",
    hanzi: "一个人能走多远,取决于他和谁同行。",
    pinyin: "Yí gè rén néng zǒu duō yuǎn, qǔjué yú tā hé shéi tóngxíng.",
    meaning: "Một người đi được bao xa, tùy thuộc vào việc anh ta đồng hành cùng ai.",
    tag: "名言",
    note: "取决于 = 'tùy thuộc vào'. Câu quote phổ biến về bạn đồng hành.",
    words: [
      { w: "一个人", p: "yí gè rén", m: "một người" },
      { w: "能走多远", p: "néng zǒu duō yuǎn", m: "đi được bao xa" },
      { w: "取决于", p: "qǔjué yú", m: "tùy thuộc vào" },
      { w: "他", p: "tā", m: "anh ta" },
      { w: "和谁", p: "hé shéi", m: "cùng ai" },
      { w: "同行", p: "tóngxíng", m: "đồng hành" }
    ],
    structure: "Cụm chủ ngữ là một mệnh đề ('一个人能走多远'). 取决于 là động từ mang nghĩa 'quyết định bởi/tùy vào', sau nó là tân ngữ. 多远 ('bao xa') ở đây dùng khái quát chứ không hỏi."
  },
  {
    id: "s025",
    hanzi: "别人怎么看你并不重要,重要的是你怎么看自己。",
    pinyin: "Biérén zěnme kàn nǐ bìng bù zhòngyào, zhòngyào de shì nǐ zěnme kàn zìjǐ.",
    meaning: "Người khác nhìn bạn thế nào không quan trọng, quan trọng là bạn nhìn mình ra sao.",
    tag: "流行语",
    note: "并不 = 'hoàn toàn không' (nhấn phủ định). 重要的是… = 'điều quan trọng là…'.",
    words: [
      { w: "别人", p: "biérén", m: "người khác" },
      { w: "怎么看你", p: "zěnme kàn nǐ", m: "nhìn bạn thế nào" },
      { w: "并不重要", p: "bìng bù zhòngyào", m: "không hề quan trọng" },
      { w: "重要的是", p: "zhòngyào de shì", m: "điều quan trọng là" },
      { w: "你怎么看自己", p: "nǐ zěnme kàn zìjǐ", m: "bạn nhìn mình thế nào" }
    ],
    structure: "Đối lập hai mệnh đề. 并 đặt trước 不 để nhấn mạnh phủ định ('chẳng/hề không'). Cấu trúc 重要的是… ('cái quan trọng là…') dùng 的 danh hóa, làm chủ ngữ nhấn mạnh."
  },
  {
    id: "s026",
    hanzi: "趁着年轻,多去看看这个世界吧。",
    pinyin: "Chèn zhe niánqīng, duō qù kànkan zhège shìjiè ba.",
    meaning: "Nhân lúc còn trẻ, hãy đi ngắm nhìn thế giới này nhiều hơn.",
    tag: "流行语",
    note: "趁着 = 'nhân lúc, thừa dịp'. 吧 ở cuối tạo lời khuyên nhẹ nhàng.",
    words: [
      { w: "趁着", p: "chèn zhe", m: "nhân lúc" },
      { w: "年轻", p: "niánqīng", m: "trẻ" },
      { w: "多", p: "duō", m: "nhiều (hơn)" },
      { w: "去看看", p: "qù kànkan", m: "đi ngắm/xem thử" },
      { w: "这个世界", p: "zhège shìjiè", m: "thế giới này" },
      { w: "吧", p: "ba", m: "(trợ từ đề nghị)" }
    ],
    structure: "趁(着) + cụm = 'nhân lúc…': nắm lấy thời cơ. Động từ lặp 看看 làm dịu ngữ khí ('xem thử/ngắm chút'). 吧 cuối câu biến câu thành lời khuyên/đề nghị."
  },
  {
    id: "s027",
    hanzi: "成功的路上并不拥挤,因为坚持的人并不多。",
    pinyin: "Chénggōng de lù shàng bìng bù yōngjǐ, yīnwèi jiānchí de rén bìng bù duō.",
    meaning: "Con đường thành công không hề chật chội, vì người kiên trì vốn không nhiều.",
    tag: "流行语",
    note: "Câu quote động lực rất phổ biến. 因为 nêu lý do cho vế trước.",
    words: [
      { w: "成功的路上", p: "chénggōng de lù shàng", m: "trên đường thành công" },
      { w: "并不拥挤", p: "bìng bù yōngjǐ", m: "không hề chật chội" },
      { w: "因为", p: "yīnwèi", m: "bởi vì" },
      { w: "坚持的人", p: "jiānchí de rén", m: "người kiên trì" },
      { w: "并不多", p: "bìng bù duō", m: "không hề nhiều" }
    ],
    structure: "Câu nhân quả với 因为 đặt ở vế sau (kết quả trước, lý do sau). Lặp 并不 (không hề) hai lần tạo nhịp đối, giàu tính 'khẩu hiệu' — kiểu câu lan truyền trên mạng."
  },
  {
    id: "s028",
    hanzi: "慢慢来,比较快。",
    pinyin: "Mànman lái, bǐjiào kuài.",
    meaning: "Cứ từ từ, lại nhanh hơn.",
    tag: "流行语",
    note: "Câu ngắn nhưng 'chất', ý: vội vàng hỏng việc, làm chắc lại nhanh. 慢慢来 rất hay dùng.",
    words: [
      { w: "慢慢", p: "mànman", m: "từ từ, chậm rãi" },
      { w: "来", p: "lái", m: "(làm) đi, tiến hành" },
      { w: "比较", p: "bǐjiào", m: "tương đối, lại" },
      { w: "快", p: "kuài", m: "nhanh" }
    ],
    structure: "Câu khẩu ngữ ngắn, dùng nghịch lý để gây ấn tượng. 慢慢来 ('cứ từ từ') là cụm cố định động viên người khác bình tĩnh; 来 thay cho động từ cụ thể đã hiểu ngầm."
  },
  {
    id: "s029",
    hanzi: "你之所以累,是因为你想要的太多。",
    pinyin: "Nǐ zhīsuǒyǐ lèi, shì yīnwèi nǐ xiǎng yào de tài duō.",
    meaning: "Sở dĩ bạn mệt, là vì thứ bạn muốn quá nhiều.",
    tag: "流行语",
    note: "Lại một mẫu 之所以…是因为…. 想要的 = 'thứ (mà) muốn' (cụm 的 danh hóa).",
    words: [
      { w: "你", p: "nǐ", m: "bạn" },
      { w: "之所以", p: "zhīsuǒyǐ", m: "sở dĩ" },
      { w: "累", p: "lèi", m: "mệt" },
      { w: "是因为", p: "shì yīnwèi", m: "là vì" },
      { w: "想要的", p: "xiǎng yào de", m: "thứ muốn có" },
      { w: "太多", p: "tài duō", m: "quá nhiều" }
    ],
    structure: "Cấu trúc nhân quả đảo 之所以…是因为…. 想要的 dùng 的 để danh hóa cụm động từ ('cái/thứ mà (bạn) muốn'), làm chủ ngữ cho 太多."
  },
  {
    id: "s030",
    hanzi: "真正厉害的人,往往都很低调。",
    pinyin: "Zhēnzhèng lìhai de rén, wǎngwǎng dōu hěn dīdiào.",
    meaning: "Người thật sự giỏi giang thường đều rất khiêm nhường (kín tiếng).",
    tag: "流行语",
    note: "低调 = 'kín tiếng, không phô trương' — từ rất 'hot' trong tiếng Trung hiện đại.",
    words: [
      { w: "真正", p: "zhēnzhèng", m: "thật sự" },
      { w: "厉害", p: "lìhai", m: "lợi hại, giỏi" },
      { w: "的人", p: "de rén", m: "người mà…" },
      { w: "往往", p: "wǎngwǎng", m: "thường" },
      { w: "都", p: "dōu", m: "đều" },
      { w: "很低调", p: "hěn dīdiào", m: "rất kín tiếng" }
    ],
    structure: "Chủ ngữ là cụm danh từ có định ngữ dài: 真正厉害 + 的 + 人. Phó từ tần suất 往往 + 都 nhấn tính quy luật ('thường thì đều…'). 低调 là tính từ vị ngữ với 很."
  }
];
if (typeof window !== 'undefined') window.sentences = sentences;
