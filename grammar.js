/* Dữ liệu HSK — grammar. Sửa nội dung học tại đây. */
var grammar = {
  hsk1: [
    {
      id: "g1-1",
      title: "Câu khẳng định với 是 (shì) - Là",
      structure: "A + 是 + B",
      explanation: "Đây là cấu trúc câu cơ bản nhất trong tiếng Trung. 是 (shì) tương đương 'là' trong tiếng Việt, dùng để khẳng định 'A là B'. 是 không thay đổi theo ngôi như tiếng Anh (am/is/are).",
      examples: [
        { hanzi: "我是学生。", pinyin: "Wǒ shì xuésheng.", meaning: "Tôi là học sinh." },
        { hanzi: "他是老师。", pinyin: "Tā shì lǎoshī.", meaning: "Anh ấy là giáo viên." },
        { hanzi: "这是书。", pinyin: "Zhè shì shū.", meaning: "Đây là sách." },
        { hanzi: "她是我的朋友。", pinyin: "Tā shì wǒ de péngyou.", meaning: "Cô ấy là bạn của tôi." }
      ]
    },
    {
      id: "g1-2",
      title: "Câu phủ định với 不 (bù) - Không",
      structure: "Chủ ngữ + 不 + Động từ/Tính từ",
      explanation: "不 (bù) được đặt trước động từ hoặc tính từ để phủ định. Quy tắc biến điệu quan trọng: khi 不 đứng trước thanh 4, nó đọc thành thanh 2 (bú). Ví dụ: 不去 đọc là 'bú qù', 不是 đọc là 'bú shì'.",
      examples: [
        { hanzi: "我不去。", pinyin: "Wǒ bú qù.", meaning: "Tôi không đi." },
        { hanzi: "他不是中国人。", pinyin: "Tā bú shì Zhōngguó rén.", meaning: "Anh ấy không phải người Trung Quốc." },
        { hanzi: "今天不冷。", pinyin: "Jīntiān bù lěng.", meaning: "Hôm nay không lạnh." },
        { hanzi: "我不喜欢咖啡。", pinyin: "Wǒ bù xǐhuan kāfēi.", meaning: "Tôi không thích cà phê." }
      ]
    },
    {
      id: "g1-3",
      title: "Câu hỏi Yes/No với 吗 (ma)",
      structure: "Câu khẳng định + 吗?",
      explanation: "Cách tạo câu hỏi đơn giản nhất: chỉ cần thêm 吗 (ma) vào cuối câu khẳng định. Câu trả lời thường dùng động từ chính (有/没有, 是/不是, 喜欢/不喜欢).",
      examples: [
        { hanzi: "你好吗?", pinyin: "Nǐ hǎo ma?", meaning: "Bạn khỏe không?" },
        { hanzi: "你是学生吗?", pinyin: "Nǐ shì xuésheng ma?", meaning: "Bạn có phải là học sinh không?" },
        { hanzi: "他来吗?", pinyin: "Tā lái ma?", meaning: "Anh ấy có đến không?" },
        { hanzi: "你喜欢中国菜吗?", pinyin: "Nǐ xǐhuan Zhōngguó cài ma?", meaning: "Bạn có thích món Trung Quốc không?" }
      ]
    },
    {
      id: "g1-4",
      title: "Đại từ nghi vấn 什么 (shénme) - Cái gì",
      structure: "什么 + Danh từ / Động từ + 什么",
      explanation: "什么 (shénme) dùng để hỏi về vật, sự việc, có nghĩa là 'gì, cái gì'. Lưu ý: vị trí của 什么 trong câu hỏi tiếng Trung ở chỗ thông tin cần hỏi (giống như vị trí của câu trả lời).",
      examples: [
        { hanzi: "这是什么?", pinyin: "Zhè shì shénme?", meaning: "Đây là cái gì?" },
        { hanzi: "你叫什么名字?", pinyin: "Nǐ jiào shénme míngzi?", meaning: "Bạn tên là gì?" },
        { hanzi: "你吃什么?", pinyin: "Nǐ chī shénme?", meaning: "Bạn ăn gì?" },
        { hanzi: "你做什么工作?", pinyin: "Nǐ zuò shénme gōngzuò?", meaning: "Bạn làm công việc gì?" }
      ]
    },
    {
      id: "g1-5",
      title: "Đại từ nghi vấn 谁 (shéi) - Ai",
      structure: "谁 + Động từ / Động từ + 谁 / 是 + 谁",
      explanation: "谁 (shéi) dùng để hỏi về người. Vị trí của 谁 trong câu cũng giống như vị trí của câu trả lời.",
      examples: [
        { hanzi: "他是谁?", pinyin: "Tā shì shéi?", meaning: "Anh ấy là ai?" },
        { hanzi: "谁是你的老师?", pinyin: "Shéi shì nǐ de lǎoshī?", meaning: "Ai là giáo viên của bạn?" },
        { hanzi: "你找谁?", pinyin: "Nǐ zhǎo shéi?", meaning: "Bạn tìm ai?" }
      ]
    },
    {
      id: "g1-6",
      title: "Đại từ nghi vấn 哪 (nǎ) và 哪儿 (nǎr)",
      structure: "哪 + Lượng từ + Danh từ / Động từ + 哪儿",
      explanation: "哪 (nǎ) hỏi về 'cái nào' trong nhiều lựa chọn, thường đi kèm lượng từ. 哪儿 (nǎr) hoặc 哪里 (nǎlǐ) hỏi về 'ở đâu'.",
      examples: [
        { hanzi: "你是哪国人?", pinyin: "Nǐ shì nǎ guó rén?", meaning: "Bạn là người nước nào?" },
        { hanzi: "你在哪儿?", pinyin: "Nǐ zài nǎr?", meaning: "Bạn ở đâu?" },
        { hanzi: "她去哪儿?", pinyin: "Tā qù nǎr?", meaning: "Cô ấy đi đâu?" },
        { hanzi: "哪个是你的?", pinyin: "Nǎ ge shì nǐ de?", meaning: "Cái nào là của bạn?" }
      ]
    },
    {
      id: "g1-7",
      title: "Cấu trúc sở hữu với 的 (de)",
      structure: "A + 的 + B = B của A",
      explanation: "的 (de) biểu thị quan hệ sở hữu, có nghĩa là 'của'. A là chủ sở hữu, B là vật/người được sở hữu. Lưu ý: với người thân và mối quan hệ thân mật, có thể bỏ 的 (我妈妈, 我朋友).",
      examples: [
        { hanzi: "我的书", pinyin: "wǒ de shū", meaning: "sách của tôi" },
        { hanzi: "老师的电脑", pinyin: "lǎoshī de diànnǎo", meaning: "máy tính của giáo viên" },
        { hanzi: "他的朋友", pinyin: "tā de péngyou", meaning: "bạn của anh ấy" },
        { hanzi: "我妈妈 (= 我的妈妈)", pinyin: "wǒ māma", meaning: "mẹ tôi (có thể bỏ 的)" }
      ]
    },
    {
      id: "g1-8",
      title: "Phó từ 很 (hěn) với tính từ",
      structure: "Chủ ngữ + 很 + Tính từ",
      explanation: "Trong tiếng Trung, tính từ trực tiếp làm vị ngữ mà KHÔNG cần 是. Phó từ 很 (rất) thường được dùng để cân bằng câu, kể cả khi không thực sự muốn nhấn mạnh 'rất'. Không có 很, câu có thể mang ý so sánh.",
      examples: [
        { hanzi: "我很好。", pinyin: "Wǒ hěn hǎo.", meaning: "Tôi (rất) khỏe." },
        { hanzi: "今天很热。", pinyin: "Jīntiān hěn rè.", meaning: "Hôm nay (rất) nóng." },
        { hanzi: "汉语很难。", pinyin: "Hànyǔ hěn nán.", meaning: "Tiếng Trung (rất) khó." },
        { hanzi: "她很漂亮。", pinyin: "Tā hěn piàoliang.", meaning: "Cô ấy (rất) đẹp." }
      ]
    },
    {
      id: "g1-9",
      title: "Số từ + Lượng từ + Danh từ",
      structure: "Số từ + Lượng từ + Danh từ",
      explanation: "Khi đếm danh từ trong tiếng Trung, BẮT BUỘC phải có lượng từ giữa số và danh từ. Mỗi loại danh từ có lượng từ riêng. 个 (gè) là lượng từ phổ biến và đa năng nhất.",
      examples: [
        { hanzi: "一个人", pinyin: "yí ge rén", meaning: "một người" },
        { hanzi: "两本书", pinyin: "liǎng běn shū", meaning: "hai quyển sách" },
        { hanzi: "三杯茶", pinyin: "sān bēi chá", meaning: "ba cốc trà" },
        { hanzi: "五块钱", pinyin: "wǔ kuài qián", meaning: "năm đồng tiền" }
      ]
    },
    {
      id: "g1-10",
      title: "二 (èr) và 两 (liǎng) - Cả hai đều là 'hai'",
      structure: "二 dùng để đếm số / 两 dùng trước lượng từ",
      explanation: "Đây là điểm dễ nhầm cho người mới học. 二 (èr) dùng cho số học và số thứ tự (số hai, tháng hai). 两 (liǎng) dùng khi đếm vật cụ thể với lượng từ (hai cái, hai người).",
      examples: [
        { hanzi: "二月", pinyin: "èr yuè", meaning: "tháng hai (số thứ tự)" },
        { hanzi: "两个人", pinyin: "liǎng ge rén", meaning: "hai người (đếm)" },
        { hanzi: "二十", pinyin: "èr shí", meaning: "hai mươi (số đếm)" },
        { hanzi: "两本书", pinyin: "liǎng běn shū", meaning: "hai quyển sách (đếm)" }
      ]
    },
    {
      id: "g1-11",
      title: "Câu với 有 (yǒu) - Có",
      structure: "Khẳng định: A + 有 + B / Phủ định: A + 没有 + B",
      explanation: "有 (yǒu) có nghĩa là 'có' (sở hữu hoặc tồn tại). Phủ định CHỈ dùng 没有 (méiyǒu), KHÔNG dùng 不有.",
      examples: [
        { hanzi: "我有一个弟弟。", pinyin: "Wǒ yǒu yí ge dìdi.", meaning: "Tôi có một em trai." },
        { hanzi: "我没有钱。", pinyin: "Wǒ méiyǒu qián.", meaning: "Tôi không có tiền." },
        { hanzi: "你有时间吗?", pinyin: "Nǐ yǒu shíjiān ma?", meaning: "Bạn có thời gian không?" },
        { hanzi: "桌子上有书。", pinyin: "Zhuōzi shàng yǒu shū.", meaning: "Trên bàn có sách." }
      ]
    },
    {
      id: "g1-12",
      title: "Câu với 在 (zài) - Ở, đang ở",
      structure: "Chủ ngữ + 在 + Địa điểm",
      explanation: "在 (zài) chỉ vị trí, có nghĩa 'ở đâu đó'. Đây là động từ, không phải giới từ trong cấu trúc này.",
      examples: [
        { hanzi: "我在家。", pinyin: "Wǒ zài jiā.", meaning: "Tôi ở nhà." },
        { hanzi: "她在学校。", pinyin: "Tā zài xuéxiào.", meaning: "Cô ấy ở trường." },
        { hanzi: "书在桌子上。", pinyin: "Shū zài zhuōzi shàng.", meaning: "Sách ở trên bàn." },
        { hanzi: "你在哪儿?", pinyin: "Nǐ zài nǎr?", meaning: "Bạn ở đâu?" }
      ]
    },
    {
      id: "g1-13",
      title: "Hỏi tuổi với 几岁 và 多大",
      structure: "Trẻ em: 几岁? / Người lớn: 多大?",
      explanation: "Tiếng Trung phân biệt cách hỏi tuổi theo độ tuổi. 几岁 (jǐ suì) dùng cho trẻ em dưới 10 tuổi. 多大 (duō dà) dùng cho người lớn hoặc thanh thiếu niên. Với người cao tuổi, dùng 多大年纪 (duō dà niánjì) để lịch sự.",
      examples: [
        { hanzi: "你几岁?", pinyin: "Nǐ jǐ suì?", meaning: "Em mấy tuổi? (hỏi trẻ em)" },
        { hanzi: "你多大?", pinyin: "Nǐ duō dà?", meaning: "Bạn bao nhiêu tuổi?" },
        { hanzi: "我二十岁。", pinyin: "Wǒ èrshí suì.", meaning: "Tôi hai mươi tuổi." },
        { hanzi: "我女儿五岁。", pinyin: "Wǒ nǚ'ér wǔ suì.", meaning: "Con gái tôi 5 tuổi." }
      ]
    },
    {
      id: "g1-14",
      title: "Hỏi giờ với 几点 (jǐ diǎn)",
      structure: "现在 + 几点? / Số + 点 + Số + 分",
      explanation: "几点 (jǐ diǎn) dùng để hỏi mấy giờ. Trả lời: số + 点 (giờ) + số + 分 (phút). 半 (bàn) = ba mươi (rưỡi), 一刻 (yí kè) = mười lăm phút.",
      examples: [
        { hanzi: "现在几点?", pinyin: "Xiànzài jǐ diǎn?", meaning: "Bây giờ mấy giờ?" },
        { hanzi: "现在三点。", pinyin: "Xiànzài sān diǎn.", meaning: "Bây giờ 3 giờ." },
        { hanzi: "七点半", pinyin: "qī diǎn bàn", meaning: "7 giờ rưỡi (7:30)" },
        { hanzi: "九点一刻", pinyin: "jiǔ diǎn yí kè", meaning: "9 giờ 15 phút" }
      ]
    },
    {
      id: "g1-15",
      title: "Hỏi giá với 多少钱 (duōshao qián)",
      structure: "Vật + 多少钱? / Số + 块/元",
      explanation: "多少钱 (duōshao qián) hỏi 'bao nhiêu tiền'. Trong văn nói dùng 块 (kuài), văn viết dùng 元 (yuán). Cả hai cùng nghĩa.",
      examples: [
        { hanzi: "这个多少钱?", pinyin: "Zhège duōshao qián?", meaning: "Cái này bao nhiêu tiền?" },
        { hanzi: "十块钱。", pinyin: "Shí kuài qián.", meaning: "Mười đồng." },
        { hanzi: "一本书多少钱?", pinyin: "Yì běn shū duōshao qián?", meaning: "Một quyển sách bao nhiêu tiền?" }
      ]
    },
    {
      id: "g1-16",
      title: "Hỏi ngày, thứ với 几月几号 và 星期几",
      structure: "今天 + 几月几号? / 今天 + 星期几?",
      explanation: "Cách hỏi ngày tháng và thứ trong tuần. Lưu ý thứ tự ngày tháng trong tiếng Trung: NĂM → THÁNG → NGÀY (ngược với tiếng Việt).",
      examples: [
        { hanzi: "今天几月几号?", pinyin: "Jīntiān jǐ yuè jǐ hào?", meaning: "Hôm nay là ngày mấy tháng mấy?" },
        { hanzi: "今天五月十号。", pinyin: "Jīntiān wǔ yuè shí hào.", meaning: "Hôm nay là 10 tháng 5." },
        { hanzi: "今天星期几?", pinyin: "Jīntiān xīngqī jǐ?", meaning: "Hôm nay là thứ mấy?" },
        { hanzi: "今天星期一。", pinyin: "Jīntiān xīngqī yī.", meaning: "Hôm nay là thứ Hai." }
      ]
    },
    {
      id: "g1-17",
      title: "Cấu trúc 喜欢 (xǐhuan) - Thích",
      structure: "Chủ ngữ + 喜欢 + Danh từ / Động từ",
      explanation: "喜欢 (xǐhuan) có thể đi với danh từ (thích vật) hoặc động từ (thích làm gì). Phủ định: 不喜欢.",
      examples: [
        { hanzi: "我喜欢咖啡。", pinyin: "Wǒ xǐhuan kāfēi.", meaning: "Tôi thích cà phê." },
        { hanzi: "我喜欢看电影。", pinyin: "Wǒ xǐhuan kàn diànyǐng.", meaning: "Tôi thích xem phim." },
        { hanzi: "他不喜欢我。", pinyin: "Tā bù xǐhuan wǒ.", meaning: "Anh ấy không thích tôi." },
        { hanzi: "你喜欢什么?", pinyin: "Nǐ xǐhuan shénme?", meaning: "Bạn thích cái gì?" }
      ]
    },
    {
      id: "g1-18",
      title: "Cấu trúc 想 (xiǎng) - Muốn",
      structure: "Chủ ngữ + 想 + Động từ",
      explanation: "想 (xiǎng) đứng trước động từ biểu thị mong muốn. Khác với 要 (yào) mang nghĩa quyết tâm hơn, 想 nhẹ nhàng hơn.",
      examples: [
        { hanzi: "我想喝水。", pinyin: "Wǒ xiǎng hē shuǐ.", meaning: "Tôi muốn uống nước." },
        { hanzi: "我想去中国。", pinyin: "Wǒ xiǎng qù Zhōngguó.", meaning: "Tôi muốn đi Trung Quốc." },
        { hanzi: "你想吃什么?", pinyin: "Nǐ xiǎng chī shénme?", meaning: "Bạn muốn ăn gì?" },
        { hanzi: "我不想睡觉。", pinyin: "Wǒ bù xiǎng shuìjiào.", meaning: "Tôi không muốn ngủ." }
      ]
    },
    {
      id: "g1-19",
      title: "Trợ động từ 会 (huì) - Biết (kỹ năng)",
      structure: "Chủ ngữ + 会 + Động từ",
      explanation: "会 (huì) chỉ kỹ năng/khả năng học được (nói, đọc, viết, lái xe...). Phủ định: 不会.",
      examples: [
        { hanzi: "我会说汉语。", pinyin: "Wǒ huì shuō Hànyǔ.", meaning: "Tôi biết nói tiếng Trung." },
        { hanzi: "他会开车。", pinyin: "Tā huì kāi chē.", meaning: "Anh ấy biết lái xe." },
        { hanzi: "我不会游泳。", pinyin: "Wǒ bú huì yóuyǒng.", meaning: "Tôi không biết bơi." },
        { hanzi: "你会写汉字吗?", pinyin: "Nǐ huì xiě Hànzì ma?", meaning: "Bạn biết viết chữ Hán không?" }
      ]
    },
    {
      id: "g1-20",
      title: "Trợ động từ 能 (néng) - Có thể",
      structure: "Chủ ngữ + 能 + Động từ",
      explanation: "能 (néng) chỉ khả năng hoặc điều kiện cho phép thực hiện hành động. Khác 会 (kỹ năng học được), 能 chỉ tình huống có thể làm hay không.",
      examples: [
        { hanzi: "我能去。", pinyin: "Wǒ néng qù.", meaning: "Tôi có thể đi." },
        { hanzi: "你能帮我吗?", pinyin: "Nǐ néng bāng wǒ ma?", meaning: "Bạn có thể giúp tôi không?" },
        { hanzi: "我不能喝酒。", pinyin: "Wǒ bù néng hē jiǔ.", meaning: "Tôi không thể uống rượu." }
      ]
    },
    {
      id: "g1-21",
      title: "Câu mệnh lệnh và đề nghị với 请 (qǐng)",
      structure: "请 + Động từ + ...",
      explanation: "请 (qǐng) là cách lịch sự để mời, yêu cầu hoặc đề nghị, tương đương 'please' tiếng Anh.",
      examples: [
        { hanzi: "请坐。", pinyin: "Qǐng zuò.", meaning: "Mời ngồi." },
        { hanzi: "请喝茶。", pinyin: "Qǐng hē chá.", meaning: "Mời uống trà." },
        { hanzi: "请问,你叫什么名字?", pinyin: "Qǐngwèn, nǐ jiào shénme míngzi?", meaning: "Xin hỏi, bạn tên là gì?" }
      ]
    },
    {
      id: "g1-22",
      title: "Cấu trúc 也 (yě) - Cũng",
      structure: "Chủ ngữ + 也 + Động từ/Tính từ",
      explanation: "也 (yě) có nghĩa 'cũng', biểu thị sự GIỐNG NHAU giữa các đối tượng. Đặt SAU chủ ngữ và TRƯỚC động từ/tính từ. KHÔNG đặt 也 đầu câu. Phủ định: 也 + 不/没 (cũng không / cũng chưa). Đây là phó từ rất phổ biến trong giao tiếp.",
      examples: [
        { hanzi: "我也是学生。", pinyin: "Wǒ yě shì xuésheng.", meaning: "Tôi cũng là học sinh." },
        { hanzi: "他也喜欢咖啡。", pinyin: "Tā yě xǐhuan kāfēi.", meaning: "Anh ấy cũng thích cà phê." },
        { hanzi: "我也不知道。", pinyin: "Wǒ yě bù zhīdào.", meaning: "Tôi cũng không biết." }
      ]
    },
    {
      id: "g1-23",
      title: "Cấu trúc 都 (dōu) - Đều, tất cả",
      structure: "Chủ ngữ (số nhiều) + 都 + Động từ/Tính từ",
      explanation: "都 (dōu) có nghĩa 'đều, tất cả', đặt SAU chủ ngữ và TRƯỚC động từ. Dùng khi chủ ngữ là số nhiều.",
      examples: [
        { hanzi: "我们都是学生。", pinyin: "Wǒmen dōu shì xuésheng.", meaning: "Chúng tôi đều là học sinh." },
        { hanzi: "他们都喜欢中国菜。", pinyin: "Tāmen dōu xǐhuan Zhōngguó cài.", meaning: "Họ đều thích món Trung Quốc." },
        { hanzi: "我们都不知道。", pinyin: "Wǒmen dōu bù zhīdào.", meaning: "Chúng tôi đều không biết." }
      ]
    },
    {
      id: "g1-24",
      title: "Phó từ 太...了 (tài...le) - Quá...",
      structure: "太 + Tính từ + 了",
      explanation: "Cấu trúc 太...了 biểu thị mức độ cao, có thể mang ý khen ngợi tích cực hoặc phàn nàn tiêu cực tùy ngữ cảnh.",
      examples: [
        { hanzi: "太好了!", pinyin: "Tài hǎo le!", meaning: "Tuyệt quá!" },
        { hanzi: "太贵了!", pinyin: "Tài guì le!", meaning: "Đắt quá!" },
        { hanzi: "太累了。", pinyin: "Tài lèi le.", meaning: "Mệt quá." },
        { hanzi: "今天太冷了。", pinyin: "Jīntiān tài lěng le.", meaning: "Hôm nay lạnh quá." }
      ]
    },
    {
      id: "g1-25",
      title: "Trợ từ thì 了 (le) cuối câu - Thay đổi tình huống",
      structure: "Câu + 了",
      explanation: "了 đặt CUỐI CÂU biểu thị thay đổi trạng thái hoặc tình huống mới (khác với 了 sau động từ chỉ hành động đã hoàn thành - sẽ học ở HSK 2). Lưu ý: KHÔNG nhầm với 了 sau động từ. Câu 'Trời mưa rồi' nhấn mạnh tình huống mới (trước không mưa, giờ mưa).",
      examples: [
        { hanzi: "下雨了。", pinyin: "Xià yǔ le.", meaning: "Trời mưa rồi." },
        { hanzi: "我饿了。", pinyin: "Wǒ è le.", meaning: "Tôi đói rồi." },
        { hanzi: "他来了。", pinyin: "Tā lái le.", meaning: "Anh ấy đến rồi." },
        { hanzi: "天气热了。", pinyin: "Tiānqì rè le.", meaning: "Trời nóng lên rồi." }
      ]
    },
    {
      id: "g1-26",
      title: "Đại từ nghi vấn 怎么样 (zěnmeyàng) - Thế nào",
      structure: "Chủ ngữ + 怎么样? / Câu + 怎么样?",
      explanation: "怎么样 dùng để HỎI Ý KIẾN, ĐÁNH GIÁ về một sự vật/sự việc, tương đương 'thế nào', 'ra sao'. Đặt CUỐI CÂU. Khác với 怎么 (cách nào), 怎么样 hỏi về tình trạng/chất lượng. KHÔNG cần 吗 ở cuối khi đã có 怎么样.",
      examples: [
        { hanzi: "你怎么样?", pinyin: "Nǐ zěnmeyàng?", meaning: "Bạn thế nào?" },
        { hanzi: "这个菜怎么样?", pinyin: "Zhège cài zěnmeyàng?", meaning: "Món này thế nào?" },
        { hanzi: "今天天气怎么样?", pinyin: "Jīntiān tiānqì zěnmeyàng?", meaning: "Thời tiết hôm nay ra sao?" },
        { hanzi: "我们去吃饭,怎么样?", pinyin: "Wǒmen qù chīfàn, zěnmeyàng?", meaning: "Chúng ta đi ăn cơm, thế nào?" }
      ]
    },
    {
      id: "g1-27",
      title: "Hỏi mức độ với 多 + Tính từ",
      structure: "Chủ ngữ + 多 + Tính từ?",
      explanation: "Cấu trúc '多 + Tính từ' dùng để HỎI VỀ MỨC ĐỘ. Thường gặp: 多大 (lớn cỡ nào, mấy tuổi), 多高 (cao bao nhiêu), 多远 (xa bao nhiêu), 多长 (dài bao lâu/bao xa). Đặt SAU chủ ngữ. Đây là một trong những cách hỏi về số lượng/kích thước phổ biến nhất.",
      examples: [
        { hanzi: "你多大?", pinyin: "Nǐ duō dà?", meaning: "Bạn bao nhiêu tuổi?" },
        { hanzi: "你的孩子多大?", pinyin: "Nǐ de háizi duō dà?", meaning: "Con bạn mấy tuổi?" },
        { hanzi: "他多高?", pinyin: "Tā duō gāo?", meaning: "Anh ấy cao bao nhiêu?" },
        { hanzi: "你的学校多远?", pinyin: "Nǐ de xuéxiào duō yuǎn?", meaning: "Trường bạn xa bao nhiêu?" }
      ]
    }
  ],
  hsk2: [
    {
      id: "g2-1",
      title: "Cấu trúc so sánh với 比 (bǐ)",
      structure: "A + 比 + B + Tính từ (+ Mức độ)",
      explanation: "比 (bǐ) so sánh hai đối tượng. KHÔNG dùng 很/非常 với cấu trúc 比, mà dùng các từ chỉ mức độ như 一点 (một chút), 得多 (nhiều hơn nhiều), 多了 (nhiều hơn).",
      examples: [
        { hanzi: "我比你高。", pinyin: "Wǒ bǐ nǐ gāo.", meaning: "Tôi cao hơn bạn." },
        { hanzi: "今天比昨天热。", pinyin: "Jīntiān bǐ zuótiān rè.", meaning: "Hôm nay nóng hơn hôm qua." },
        { hanzi: "汉语比英语难一点。", pinyin: "Hànyǔ bǐ Yīngyǔ nán yìdiǎn.", meaning: "Tiếng Trung khó hơn tiếng Anh một chút." },
        { hanzi: "他比我大三岁。", pinyin: "Tā bǐ wǒ dà sān suì.", meaning: "Anh ấy hơn tôi 3 tuổi." }
      ]
    },
    {
      id: "g2-2",
      title: "So sánh phủ định: 没有 (méiyǒu) + Tính từ",
      structure: "A + 没有 + B + (那么) + Tính từ",
      explanation: "Để nói 'A không bằng B' (không = nhau), dùng 没有. Có thể thêm 那么 (nàme) - 'như thế', để nhấn mạnh.",
      examples: [
        { hanzi: "我没有他高。", pinyin: "Wǒ méiyǒu tā gāo.", meaning: "Tôi không cao bằng anh ấy." },
        { hanzi: "今天没有昨天热。", pinyin: "Jīntiān méiyǒu zuótiān rè.", meaning: "Hôm nay không nóng bằng hôm qua." },
        { hanzi: "汉语没有英语那么难。", pinyin: "Hànyǔ méiyǒu Yīngyǔ nàme nán.", meaning: "Tiếng Trung không khó như tiếng Anh." }
      ]
    },
    {
      id: "g2-3",
      title: "So sánh ngang bằng: A 跟 B 一样",
      structure: "A + 跟 + B + 一样 + (Tính từ)",
      explanation: "跟...一样 (gēn...yíyàng) biểu thị hai đối tượng GIỐNG NHAU. Có thể thêm tính từ phía sau để chỉ rõ giống ở khía cạnh nào (vd: 一样高 - cao như nhau, 一样大 - lớn như nhau). Có thể thay 跟 bằng 和. Phủ định: 跟...不一样 (không giống). Đây là cấu trúc so sánh ngang bằng cơ bản nhất, khác với 比 (so sánh hơn-kém).",
      examples: [
        { hanzi: "我跟他一样高。", pinyin: "Wǒ gēn tā yíyàng gāo.", meaning: "Tôi cao bằng anh ấy." },
        { hanzi: "这个跟那个一样。", pinyin: "Zhège gēn nàge yíyàng.", meaning: "Cái này giống cái kia." },
        { hanzi: "我跟你不一样。", pinyin: "Wǒ gēn nǐ bù yíyàng.", meaning: "Tôi không giống bạn." }
      ]
    },
    {
      id: "g2-4",
      title: "Trợ từ 了 sau động từ - Hành động đã hoàn thành",
      structure: "Động từ + 了 + (Tân ngữ)",
      explanation: "了 ngay SAU ĐỘNG TỪ biểu thị hành động đã xảy ra/hoàn thành. KHÁC với 了 cuối câu (thay đổi tình huống). Phủ định: 没(有) + Động từ (KHÔNG dùng 了).",
      examples: [
        { hanzi: "我吃了一个苹果。", pinyin: "Wǒ chī le yí ge píngguǒ.", meaning: "Tôi đã ăn một quả táo." },
        { hanzi: "他买了三本书。", pinyin: "Tā mǎi le sān běn shū.", meaning: "Anh ấy đã mua ba quyển sách." },
        { hanzi: "我没买书。", pinyin: "Wǒ méi mǎi shū.", meaning: "Tôi đã không mua sách." },
        { hanzi: "你吃饭了吗?", pinyin: "Nǐ chī fàn le ma?", meaning: "Bạn đã ăn cơm chưa?" }
      ]
    },
    {
      id: "g2-5",
      title: "Trợ từ kinh nghiệm 过 (guo) - Đã từng",
      structure: "Động từ + 过 + (Tân ngữ)",
      explanation: "过 (guo) sau động từ biểu thị KINH NGHIỆM đã từng làm gì đó (ít nhất một lần) trong quá khứ. Phủ định: 没(有) + Động từ + 过.",
      examples: [
        { hanzi: "我去过北京。", pinyin: "Wǒ qù guo Běijīng.", meaning: "Tôi đã từng đi Bắc Kinh." },
        { hanzi: "他吃过中国菜。", pinyin: "Tā chī guo Zhōngguó cài.", meaning: "Anh ấy đã từng ăn món Trung Quốc." },
        { hanzi: "我没看过这个电影。", pinyin: "Wǒ méi kàn guo zhège diànyǐng.", meaning: "Tôi chưa từng xem phim này." },
        { hanzi: "你学过汉语吗?", pinyin: "Nǐ xué guo Hànyǔ ma?", meaning: "Bạn đã từng học tiếng Trung chưa?" }
      ]
    },
    {
      id: "g2-6",
      title: "Cấu trúc 正在 (zhèngzài) - Đang làm",
      structure: "(正)在 + Động từ + (呢)",
      explanation: "正在 / 在 / 呢 đều biểu thị hành động ĐANG TIẾP DIỄN. Có thể kết hợp 正在...呢 để nhấn mạnh. Phủ định: 没(有) + 在 + Động từ.",
      examples: [
        { hanzi: "我正在吃饭。", pinyin: "Wǒ zhèngzài chīfàn.", meaning: "Tôi đang ăn cơm." },
        { hanzi: "他在看书呢。", pinyin: "Tā zài kàn shū ne.", meaning: "Anh ấy đang đọc sách." },
        { hanzi: "妈妈在做饭。", pinyin: "Māma zài zuò fàn.", meaning: "Mẹ đang nấu cơm." },
        { hanzi: "我没在睡觉。", pinyin: "Wǒ méi zài shuìjiào.", meaning: "Tôi không phải đang ngủ." }
      ]
    },
    {
      id: "g2-7",
      title: "Trợ từ 着 (zhe) - Trạng thái duy trì",
      structure: "Động từ + 着",
      explanation: "着 sau động từ biểu thị TRẠNG THÁI đang được duy trì (khác với 正在 là HÀNH ĐỘNG đang diễn ra). Thường dùng với động từ chỉ tư thế: 坐, 站, 躺, 拿, 穿...",
      examples: [
        { hanzi: "他坐着看书。", pinyin: "Tā zuò zhe kàn shū.", meaning: "Anh ấy ngồi đọc sách. (vừa ngồi vừa đọc)" },
        { hanzi: "门开着。", pinyin: "Mén kāi zhe.", meaning: "Cửa đang mở." },
        { hanzi: "她穿着红色的衣服。", pinyin: "Tā chuān zhe hóngsè de yīfu.", meaning: "Cô ấy mặc quần áo màu đỏ." }
      ]
    },
    {
      id: "g2-8",
      title: "Liên từ 因为...所以... (vì...nên...)",
      structure: "因为 + Lý do, 所以 + Kết quả",
      explanation: "因为 (yīnwèi) dẫn ra nguyên nhân, 所以 (suǒyǐ) dẫn ra kết quả. Có thể dùng cả hai hoặc chỉ một trong hai. Khi dùng cả hai, dấu phẩy ngăn cách.",
      examples: [
        { hanzi: "因为下雨,所以我不去。", pinyin: "Yīnwèi xiàyǔ, suǒyǐ wǒ bú qù.", meaning: "Vì trời mưa nên tôi không đi." },
        { hanzi: "因为很累,所以我休息。", pinyin: "Yīnwèi hěn lèi, suǒyǐ wǒ xiūxi.", meaning: "Vì rất mệt nên tôi nghỉ ngơi." },
        { hanzi: "因为他生病了,所以没来上班。", pinyin: "Yīnwèi tā shēngbìng le, suǒyǐ méi lái shàngbān.", meaning: "Vì anh ấy bị bệnh nên đã không đi làm." }
      ]
    },
    {
      id: "g2-9",
      title: "Liên từ 虽然...但是... (mặc dù...nhưng...)",
      structure: "虽然 + Mệnh đề 1, 但是 + Mệnh đề 2",
      explanation: "虽然 (suīrán) - 但是 (dànshì) biểu thị quan hệ tương phản. Có thể chỉ dùng 但是 mà không cần 虽然.",
      examples: [
        { hanzi: "虽然累,但是很开心。", pinyin: "Suīrán lèi, dànshì hěn kāixīn.", meaning: "Tuy mệt nhưng rất vui." },
        { hanzi: "虽然下雨,但是我还是去。", pinyin: "Suīrán xiàyǔ, dànshì wǒ háishi qù.", meaning: "Mặc dù trời mưa nhưng tôi vẫn đi." },
        { hanzi: "他虽然年轻,但是很聪明。", pinyin: "Tā suīrán niánqīng, dànshì hěn cōngming.", meaning: "Anh ấy tuy trẻ nhưng rất thông minh." }
      ]
    },
    {
      id: "g2-10",
      title: "Câu hỏi chính phản: 是不是 / 有没有",
      structure: "Khẳng định + 不/没 + Khẳng định ?",
      explanation: "Câu hỏi chính phản (正反问句) là một cách hỏi cơ bản trong tiếng Trung, dùng cấu trúc V + 不 + V hoặc 是不是, 有没有. Tương đương 'có...không'. KHÔNG cần dùng 吗 ở cuối câu. Phủ định trước thì dùng 没 cho động từ trạng thái/sở hữu (有), 不 cho các động từ khác. Mang sắc thái thông tục, tự nhiên hơn 吗.",
      examples: [
        { hanzi: "你是不是中国人?", pinyin: "Nǐ shì bu shì Zhōngguó rén?", meaning: "Bạn có phải là người Trung Quốc không?" },
        { hanzi: "你有没有时间?", pinyin: "Nǐ yǒu méiyǒu shíjiān?", meaning: "Bạn có thời gian không?" },
        { hanzi: "你去不去?", pinyin: "Nǐ qù bu qù?", meaning: "Bạn đi hay không đi?" },
        { hanzi: "好不好?", pinyin: "Hǎo bù hǎo?", meaning: "Được không?" }
      ]
    },
    {
      id: "g2-11",
      title: "Cấu trúc 给 (gěi) - Cho/đưa",
      structure: "Chủ ngữ + 给 + Người nhận + Động từ + Vật",
      explanation: "给 có hai vai trò chính: (1) ĐỘNG TỪ CHÍNH với nghĩa 'cho, đưa' (我给他一本书 - Tôi đưa cho anh ấy một cuốn sách); (2) GIỚI TỪ đặt trước người nhận, đứng trước động từ chính (我给妈妈打电话 - Tôi gọi điện cho mẹ). Phủ định 不 đặt trước 给.",
      examples: [
        { hanzi: "我给你一本书。", pinyin: "Wǒ gěi nǐ yì běn shū.", meaning: "Tôi cho bạn một quyển sách." },
        { hanzi: "请给我水。", pinyin: "Qǐng gěi wǒ shuǐ.", meaning: "Xin cho tôi nước." },
        { hanzi: "我给妈妈打电话。", pinyin: "Wǒ gěi māma dǎ diànhuà.", meaning: "Tôi gọi điện cho mẹ." },
        { hanzi: "他给我写了一封信。", pinyin: "Tā gěi wǒ xiě le yì fēng xìn.", meaning: "Anh ấy đã viết cho tôi một lá thư." }
      ]
    },
    {
      id: "g2-12",
      title: "Cấu trúc 离 (lí) - Cách",
      structure: "A + 离 + B + 远/近 / Khoảng cách",
      explanation: "离 (lí) biểu thị khoảng cách giữa hai địa điểm hoặc thời điểm. Khác với 从 (cóng - từ).",
      examples: [
        { hanzi: "我家离学校很近。", pinyin: "Wǒ jiā lí xuéxiào hěn jìn.", meaning: "Nhà tôi rất gần trường học." },
        { hanzi: "北京离上海很远。", pinyin: "Běijīng lí Shànghǎi hěn yuǎn.", meaning: "Bắc Kinh rất xa Thượng Hải." },
        { hanzi: "现在离九点还有十分钟。", pinyin: "Xiànzài lí jiǔ diǎn hái yǒu shí fēnzhōng.", meaning: "Bây giờ còn 10 phút nữa là 9 giờ." }
      ]
    },
    {
      id: "g2-13",
      title: "Cấu trúc 从...到... (từ...đến...)",
      structure: "从 + Điểm bắt đầu + 到 + Điểm kết thúc",
      explanation: "从...到... biểu thị KHOẢNG từ đâu đến đâu, dùng cho cả thời gian (从早到晚 - từ sáng đến tối) và không gian/địa điểm (从北京到上海 - từ Bắc Kinh đến Thượng Hải). Có thể chỉ dùng 从 hoặc 到 độc lập. Đặt ĐẦU CÂU hoặc giữa câu.",
      examples: [
        { hanzi: "我从家到学校走路。", pinyin: "Wǒ cóng jiā dào xuéxiào zǒulù.", meaning: "Tôi đi bộ từ nhà đến trường." },
        { hanzi: "从早上八点到晚上六点。", pinyin: "Cóng zǎoshang bā diǎn dào wǎnshang liù diǎn.", meaning: "Từ 8 giờ sáng đến 6 giờ tối." },
        { hanzi: "从北京到上海要多长时间?", pinyin: "Cóng Běijīng dào Shànghǎi yào duō cháng shíjiān?", meaning: "Từ Bắc Kinh đến Thượng Hải mất bao lâu?" }
      ]
    },
    {
      id: "g2-14",
      title: "Bổ ngữ trạng thái với 得 (de)",
      structure: "Động từ + 得 + Tính từ/Bổ ngữ",
      explanation: "得 (de) nối động từ với mô tả về cách/mức độ thực hiện hành động đó. Nếu có tân ngữ: lặp lại động từ. VD: 他说汉语说得很好.",
      examples: [
        { hanzi: "他跑得很快。", pinyin: "Tā pǎo de hěn kuài.", meaning: "Anh ấy chạy rất nhanh." },
        { hanzi: "你说得很好。", pinyin: "Nǐ shuō de hěn hǎo.", meaning: "Bạn nói rất hay." },
        { hanzi: "她唱歌唱得不错。", pinyin: "Tā chànggē chàng de búcuò.", meaning: "Cô ấy hát khá hay." },
        { hanzi: "我睡得不好。", pinyin: "Wǒ shuì de bù hǎo.", meaning: "Tôi ngủ không ngon." }
      ]
    },
    {
      id: "g2-15",
      title: "Bổ ngữ kết quả: 完, 到, 见, 懂",
      structure: "Động từ + Bổ ngữ kết quả",
      explanation: "Một số động từ thường được thêm bổ ngữ kết quả để chỉ rõ kết quả hành động: 完 (xong), 到 (đạt được), 见 (cảm nhận được), 懂 (hiểu).",
      examples: [
        { hanzi: "我吃完了。", pinyin: "Wǒ chī wán le.", meaning: "Tôi đã ăn xong." },
        { hanzi: "我看见他了。", pinyin: "Wǒ kàn jiàn tā le.", meaning: "Tôi đã nhìn thấy anh ấy." },
        { hanzi: "我听懂了。", pinyin: "Wǒ tīng dǒng le.", meaning: "Tôi nghe hiểu rồi." },
        { hanzi: "我没买到票。", pinyin: "Wǒ méi mǎi dào piào.", meaning: "Tôi đã không mua được vé." }
      ]
    },
    {
      id: "g2-16",
      title: "一边...一边... (vừa...vừa...)",
      structure: "一边 + Động từ 1 + 一边 + Động từ 2",
      explanation: "一边...一边... (yìbiān...yìbiān...) biểu thị HAI HÀNH ĐỘNG đang xảy ra đồng thời. Cả hai vế thường có cùng chủ ngữ. Khác với 又...又... (HSK 3 - tính chất song song), 一边...一边... chỉ DÀNH CHO HÀNH ĐỘNG cụ thể như ăn, uống, nói... Văn nói có thể rút gọn thành 边...边...",
      examples: [
        { hanzi: "我一边吃饭一边看电视。", pinyin: "Wǒ yìbiān chīfàn yìbiān kàn diànshì.", meaning: "Tôi vừa ăn cơm vừa xem TV." },
        { hanzi: "他一边走一边说话。", pinyin: "Tā yìbiān zǒu yìbiān shuōhuà.", meaning: "Anh ấy vừa đi vừa nói." },
        { hanzi: "她一边唱歌一边跳舞。", pinyin: "Tā yìbiān chànggē yìbiān tiàowǔ.", meaning: "Cô ấy vừa hát vừa nhảy." }
      ]
    },
    {
      id: "g2-17",
      title: "再 (zài) - Lại, lần nữa (tương lai)",
      structure: "再 + Động từ",
      explanation: "再 dùng cho việc lặp lại trong TƯƠNG LAI hoặc chưa xảy ra. (Khác 又 (yòu) - đã lặp lại trong quá khứ).",
      examples: [
        { hanzi: "请再说一遍。", pinyin: "Qǐng zài shuō yí biàn.", meaning: "Xin nói lại một lần nữa." },
        { hanzi: "明天再来吧。", pinyin: "Míngtiān zài lái ba.", meaning: "Mai lại đến nhé." },
        { hanzi: "我再吃一点。", pinyin: "Wǒ zài chī yìdiǎn.", meaning: "Tôi ăn thêm chút nữa." }
      ]
    },
    {
      id: "g2-18",
      title: "就 (jiù) - Ngay, liền, là",
      structure: "Chủ ngữ + 就 + Động từ",
      explanation: "就 có nhiều nghĩa: 'ngay', 'liền', nhấn mạnh sự nhanh chóng hoặc chắc chắn của hành động.",
      examples: [
        { hanzi: "我马上就来。", pinyin: "Wǒ mǎshàng jiù lái.", meaning: "Tôi đến ngay đây." },
        { hanzi: "我就是王老师。", pinyin: "Wǒ jiù shì Wáng lǎoshī.", meaning: "Tôi chính là cô Vương." },
        { hanzi: "下课就走。", pinyin: "Xià kè jiù zǒu.", meaning: "Tan học là đi luôn." }
      ]
    },
    {
      id: "g2-19",
      title: "已经...了 (yǐjīng...le) - Đã...rồi",
      structure: "已经 + Động từ/Tính từ + 了",
      explanation: "已经 (yǐjīng) nhấn mạnh hành động/trạng thái ĐÃ XẢY RA hoặc đạt đến mức nào đó, thường đi kèm 了 ở cuối câu. Phủ định: 还没 (chưa). Câu hỏi: 已经...了吗 (đã...chưa). Đặt SAU chủ ngữ và TRƯỚC động từ.",
      examples: [
        { hanzi: "他已经走了。", pinyin: "Tā yǐjīng zǒu le.", meaning: "Anh ấy đã đi rồi." },
        { hanzi: "我已经吃饭了。", pinyin: "Wǒ yǐjīng chīfàn le.", meaning: "Tôi đã ăn cơm rồi." },
        { hanzi: "现在已经十点了。", pinyin: "Xiànzài yǐjīng shí diǎn le.", meaning: "Bây giờ đã 10 giờ rồi." }
      ]
    },
    {
      id: "g2-20",
      title: "要 (yào) - Sẽ, cần, muốn",
      structure: "Chủ ngữ + 要 + Động từ / Danh từ",
      explanation: "要 (yào) có nhiều nghĩa: muốn (dứt khoát hơn 想), cần, sắp/sẽ (tương lai gần). Phủ định: 不要 (đừng) hoặc 不想 (không muốn).",
      examples: [
        { hanzi: "我要这个。", pinyin: "Wǒ yào zhège.", meaning: "Tôi muốn cái này." },
        { hanzi: "我要去中国。", pinyin: "Wǒ yào qù Zhōngguó.", meaning: "Tôi sẽ đi Trung Quốc." },
        { hanzi: "不要走!", pinyin: "Bú yào zǒu!", meaning: "Đừng đi!" },
        { hanzi: "下雨了,要带伞。", pinyin: "Xià yǔ le, yào dài sǎn.", meaning: "Trời mưa rồi, cần mang ô." }
      ]
    },
    {
      id: "g2-21",
      title: "可以 (kěyǐ) - Có thể (xin phép)",
      structure: "Chủ ngữ + 可以 + Động từ",
      explanation: "可以 (kěyǐ) chỉ sự CHO PHÉP, được phép làm gì đó (về mặt quy định, lễ phép). Khác với 能 (khả năng vật lý/điều kiện) và 会 (kỹ năng đã học). Phủ định: 不可以 (không được phép) hoặc 不能 (không thể). Trong câu hỏi xin phép thường dùng 可以...吗?",
      examples: [
        { hanzi: "我可以进来吗?", pinyin: "Wǒ kěyǐ jìnlái ma?", meaning: "Tôi có thể vào không?" },
        { hanzi: "你可以走了。", pinyin: "Nǐ kěyǐ zǒu le.", meaning: "Bạn có thể đi rồi." },
        { hanzi: "这里不可以抽烟。", pinyin: "Zhèlǐ bù kěyǐ chōuyān.", meaning: "Ở đây không được hút thuốc." }
      ]
    },
    {
      id: "g2-22",
      title: "为什么 (wèishénme) - Tại sao",
      structure: "为什么 + Động từ?",
      explanation: "为什么 hỏi LÝ DO, nguyên nhân của hành động/sự việc. Đặt SAU chủ ngữ và TRƯỚC động từ. Câu trả lời thường dùng 因为 (yīnwèi - bởi vì) hoặc 因为...所以... (bởi vì...nên...). Khác với 怎么 (hỏi cách thức), 为什么 hỏi nguyên nhân.",
      examples: [
        { hanzi: "你为什么不来?", pinyin: "Nǐ wèishénme bù lái?", meaning: "Tại sao bạn không đến?" },
        { hanzi: "为什么这么贵?", pinyin: "Wèishénme zhème guì?", meaning: "Tại sao đắt thế?" },
        { hanzi: "你为什么学汉语?", pinyin: "Nǐ wèishénme xué Hànyǔ?", meaning: "Tại sao bạn học tiếng Trung?" }
      ]
    },
    {
      id: "g2-23",
      title: "怎么 (zěnme) - Thế nào, làm sao",
      structure: "怎么 + Động từ?",
      explanation: "怎么 hỏi cách thức, phương pháp. Khác với 怎么样 (zěnmeyàng) hỏi 'thế nào, ra sao' (đánh giá).",
      examples: [
        { hanzi: "怎么走?", pinyin: "Zěnme zǒu?", meaning: "Đi thế nào?" },
        { hanzi: "这个汉字怎么写?", pinyin: "Zhège Hànzì zěnme xiě?", meaning: "Chữ Hán này viết thế nào?" },
        { hanzi: "你怎么样?", pinyin: "Nǐ zěnmeyàng?", meaning: "Bạn thế nào? (hỏi tình hình)" }
      ]
    },
    {
      id: "g2-24",
      title: "有点儿 (yǒudiǎnr) vs 一点儿 (yìdiǎnr)",
      structure: "有点儿 + Tính từ (tiêu cực) / Tính từ + 一点儿",
      explanation: "有点儿 đứng TRƯỚC tính từ, mang nghĩa than phiền, hơi không như ý. 一点儿 đứng SAU tính từ trong so sánh, hoặc làm 'một chút'.",
      examples: [
        { hanzi: "今天有点儿冷。", pinyin: "Jīntiān yǒudiǎnr lěng.", meaning: "Hôm nay hơi lạnh." },
        { hanzi: "这个有点儿贵。", pinyin: "Zhège yǒudiǎnr guì.", meaning: "Cái này hơi đắt." },
        { hanzi: "请便宜一点儿。", pinyin: "Qǐng piányi yìdiǎnr.", meaning: "Xin rẻ hơn một chút." },
        { hanzi: "我比他高一点儿。", pinyin: "Wǒ bǐ tā gāo yìdiǎnr.", meaning: "Tôi cao hơn anh ấy một chút." }
      ]
    },
    {
      id: "g2-25",
      title: "Lượng từ thường gặp HSK 2",
      structure: "Số + Lượng từ + Danh từ",
      explanation: "Mỗi danh từ có lượng từ riêng. Học thuộc các lượng từ phổ biến: 个 (chung), 本 (sách), 张 (giấy/bàn/vé), 件 (áo/việc), 杯 (cốc), 瓶 (chai), 只 (con vật), 辆 (xe), 双 (đôi).",
      examples: [
        { hanzi: "三本书", pinyin: "sān běn shū", meaning: "ba quyển sách" },
        { hanzi: "一张票", pinyin: "yì zhāng piào", meaning: "một tấm vé" },
        { hanzi: "两件衣服", pinyin: "liǎng jiàn yīfu", meaning: "hai chiếc áo" },
        { hanzi: "一杯咖啡", pinyin: "yì bēi kāfēi", meaning: "một cốc cà phê" },
        { hanzi: "一只猫", pinyin: "yì zhī māo", meaning: "một con mèo" }
      ]
    },
    {
      id: "g2-26",
      title: "把 (bǎ) - Câu chữ Bả (cơ bản)",
      structure: "Chủ ngữ + 把 + Tân ngữ + Động từ + Bổ ngữ",
      explanation: "Câu chữ 把 nhấn mạnh tác động/kết quả lên tân ngữ. Tân ngữ phải XÁC ĐỊNH (cụ thể, biết rõ). Sau động từ thường có bổ ngữ (了, 完, ở đâu đó...).",
      examples: [
        { hanzi: "我把书放在桌子上。", pinyin: "Wǒ bǎ shū fàng zài zhuōzi shàng.", meaning: "Tôi đặt sách lên bàn." },
        { hanzi: "请把门关上。", pinyin: "Qǐng bǎ mén guān shàng.", meaning: "Xin hãy đóng cửa lại." },
        { hanzi: "我把作业做完了。", pinyin: "Wǒ bǎ zuòyè zuò wán le.", meaning: "Tôi đã làm xong bài tập." }
      ]
    },
    {
      id: "g2-27",
      title: "Cách dùng 第 (dì) - Số thứ tự",
      structure: "第 + Số + Lượng từ + Danh từ",
      explanation: "第 dùng để biểu thị SỐ THỨ TỰ (thứ nhất, thứ hai...). Đặt TRƯỚC số đếm. Sau số đếm thường có lượng từ. Khác với số đếm thông thường (一, 二) chỉ số lượng, 第一, 第二 chỉ vị trí thứ tự.",
      examples: [
        { hanzi: "我是第一名。", pinyin: "Wǒ shì dì yī míng.", meaning: "Tôi là người thứ nhất." },
        { hanzi: "这是我第三次来中国。", pinyin: "Zhè shì wǒ dì sān cì lái Zhōngguó.", meaning: "Đây là lần thứ ba tôi đến Trung Quốc." },
        { hanzi: "他坐在第二排。", pinyin: "Tā zuò zài dì èr pái.", meaning: "Anh ấy ngồi ở hàng thứ hai." },
        { hanzi: "请翻到第十页。", pinyin: "Qǐng fān dào dì shí yè.", meaning: "Xin lật đến trang thứ 10." }
      ]
    },
    {
      id: "g2-28",
      title: "Cấu trúc 觉得 (juéde) - Cảm thấy, nghĩ rằng",
      structure: "Chủ ngữ + 觉得 + Mệnh đề/Tính từ",
      explanation: "觉得 biểu thị cảm xúc, ý kiến chủ quan của người nói. Sau 觉得 có thể là tính từ hoặc cả một mệnh đề. Tương đương 'cảm thấy', 'nghĩ rằng', 'thấy là'. Phủ định: 不觉得 (không cảm thấy/nghĩ rằng).",
      examples: [
        { hanzi: "我觉得这个菜很好吃。", pinyin: "Wǒ juéde zhège cài hěn hǎochī.", meaning: "Tôi thấy món này rất ngon." },
        { hanzi: "你觉得怎么样?", pinyin: "Nǐ juéde zěnmeyàng?", meaning: "Bạn thấy thế nào?" },
        { hanzi: "我觉得汉语很有意思。", pinyin: "Wǒ juéde Hànyǔ hěn yǒu yìsi.", meaning: "Tôi thấy tiếng Trung rất thú vị." },
        { hanzi: "他觉得有点累。", pinyin: "Tā juéde yǒudiǎn lèi.", meaning: "Anh ấy thấy hơi mệt." }
      ]
    },
    {
      id: "g2-29",
      title: "Cấu trúc 要...了 (sắp...rồi)",
      structure: "(快/就) + 要 + Động từ/Mệnh đề + 了",
      explanation: "Cấu trúc biểu thị hành động/sự việc SẮP XẢY RA trong tương lai gần. Có thể thêm 快 (sắp - chung chung) hoặc 就 (sắp - cụ thể, có thời gian). Tương đương 'sắp...rồi'. KHÔNG dùng được với cụm thời gian xa (vd: '明天要下雨了' KHÔNG đúng).",
      examples: [
        { hanzi: "火车要开了。", pinyin: "Huǒchē yào kāi le.", meaning: "Tàu sắp khởi hành rồi." },
        { hanzi: "快要下雨了。", pinyin: "Kuài yào xiàyǔ le.", meaning: "Trời sắp mưa rồi." },
        { hanzi: "我就要回家了。", pinyin: "Wǒ jiù yào huí jiā le.", meaning: "Tôi sắp về nhà rồi." },
        { hanzi: "他快要二十岁了。", pinyin: "Tā kuài yào èrshí suì le.", meaning: "Anh ấy sắp 20 tuổi rồi." }
      ]
    }
  ],
  hsk3: [
    {
      id: "g3-1",
      title: "Câu chữ 把 (bǎ) - Nâng cao",
      structure: "Chủ ngữ + 把 + Tân ngữ + Động từ + Bổ ngữ",
      explanation: "Câu chữ 把 nhấn mạnh kết quả/tác động lên tân ngữ. Tân ngữ phải XÁC ĐỊNH (cụ thể, đã biết). Sau động từ BẮT BUỘC có bổ ngữ (了, 完, 在...). Lưu ý: phủ định và trợ động từ (能/会/想) đặt TRƯỚC 把.",
      examples: [
        { hanzi: "我把书放在桌子上。", pinyin: "Wǒ bǎ shū fàng zài zhuōzi shàng.", meaning: "Tôi đặt sách lên bàn." },
        { hanzi: "请把门关上。", pinyin: "Qǐng bǎ mén guān shàng.", meaning: "Xin hãy đóng cửa lại." },
        { hanzi: "他把作业做完了。", pinyin: "Tā bǎ zuòyè zuò wán le.", meaning: "Anh ấy đã làm xong bài tập." },
        { hanzi: "我没把钥匙带来。", pinyin: "Wǒ méi bǎ yàoshi dài lái.", meaning: "Tôi không mang chìa khóa đến." }
      ]
    },
    {
      id: "g3-2",
      title: "Câu bị động với 被 (bèi)",
      structure: "Chủ ngữ + 被 + (Tác nhân) + Động từ + Bổ ngữ",
      explanation: "被 (bèi) tạo câu bị động, tương đương 'bị/được'. Có thể lược bỏ tác nhân. Câu bị động trong tiếng Trung thường mang sắc thái không mong muốn (xấu, tiêu cực). Phủ định: 没被 (KHÔNG dùng 不被).",
      examples: [
        { hanzi: "杯子被他打破了。", pinyin: "Bēizi bèi tā dǎ pò le.", meaning: "Cái cốc bị anh ấy làm vỡ." },
        { hanzi: "蛋糕被吃完了。", pinyin: "Dàngāo bèi chī wán le.", meaning: "Bánh đã bị ăn hết." },
        { hanzi: "我的钱包被偷了。", pinyin: "Wǒ de qiánbāo bèi tōu le.", meaning: "Ví tôi bị trộm rồi." }
      ]
    },
    {
      id: "g3-3",
      title: "Bổ ngữ kết quả mở rộng (开, 上, 下, 走, 在)",
      structure: "Động từ + Bổ ngữ kết quả",
      explanation: "Một số bổ ngữ kết quả phổ biến: 开 (mở/tách ra), 上 (đóng/lên trên), 下 (xuống/giữ lại), 走 (đi mất), 在 (ở). Mỗi bổ ngữ thay đổi nghĩa của động từ chính.",
      examples: [
        { hanzi: "请打开窗户。", pinyin: "Qǐng dǎ kāi chuānghu.", meaning: "Xin mở cửa sổ." },
        { hanzi: "请关上门。", pinyin: "Qǐng guān shàng mén.", meaning: "Xin đóng cửa." },
        { hanzi: "他记下电话号码。", pinyin: "Tā jì xià diànhuà hàomǎ.", meaning: "Anh ấy ghi lại số điện thoại." },
        { hanzi: "他拿走了我的书。", pinyin: "Tā ná zǒu le wǒ de shū.", meaning: "Anh ấy đã lấy đi sách của tôi." }
      ]
    },
    {
      id: "g3-4",
      title: "Bổ ngữ xu hướng đơn (来 / 去)",
      structure: "Động từ + 来/去",
      explanation: "来 (lái) = hướng về phía người nói. 去 (qù) = hướng ra xa khỏi người nói. Dùng để chỉ hướng di chuyển của hành động.",
      examples: [
        { hanzi: "请进来。", pinyin: "Qǐng jìn lái.", meaning: "Xin mời vào (hướng về tôi)." },
        { hanzi: "他出去了。", pinyin: "Tā chū qù le.", meaning: "Anh ấy đã đi ra ngoài." },
        { hanzi: "请上来。", pinyin: "Qǐng shàng lái.", meaning: "Xin lên đây." },
        { hanzi: "拿来一杯水。", pinyin: "Ná lái yì bēi shuǐ.", meaning: "Lấy một cốc nước (đến đây)." }
      ]
    },
    {
      id: "g3-5",
      title: "Bổ ngữ xu hướng kép (上来, 下去, 出来...)",
      structure: "Động từ + Hướng + 来/去",
      explanation: "Kết hợp hướng (上/下/进/出/回...) với 来/去 tạo bổ ngữ phức hợp. Ví dụ: 走过来 (đi tới), 跑出去 (chạy ra ngoài), 拿回来 (mang về đây).",
      examples: [
        { hanzi: "他走过来了。", pinyin: "Tā zǒu guò lái le.", meaning: "Anh ấy đã đi đến." },
        { hanzi: "孩子跑出去了。", pinyin: "Háizi pǎo chū qù le.", meaning: "Đứa trẻ đã chạy ra ngoài." },
        { hanzi: "请把书拿回来。", pinyin: "Qǐng bǎ shū ná huí lái.", meaning: "Xin mang sách trở lại đây." }
      ]
    },
    {
      id: "g3-6",
      title: "Bổ ngữ khả năng (得/不 + Bổ ngữ)",
      structure: "Động từ + 得/不 + Bổ ngữ kết quả/xu hướng",
      explanation: "Biểu thị có thể hay không thể đạt được kết quả nào đó. 得 = có thể, 不 = không thể. Khác với 能 (tổng thể), bổ ngữ khả năng nhấn mạnh kết quả cụ thể.",
      examples: [
        { hanzi: "我看得懂中文。", pinyin: "Wǒ kàn de dǒng Zhōngwén.", meaning: "Tôi đọc hiểu được tiếng Trung." },
        { hanzi: "他听不懂。", pinyin: "Tā tīng bu dǒng.", meaning: "Anh ấy nghe không hiểu." },
        { hanzi: "我吃不完。", pinyin: "Wǒ chī bu wán.", meaning: "Tôi ăn không hết." },
        { hanzi: "你看得见吗?", pinyin: "Nǐ kàn de jiàn ma?", meaning: "Bạn nhìn thấy được không?" }
      ]
    },
    {
      id: "g3-7",
      title: "Bổ ngữ số lượng và thời lượng",
      structure: "Động từ + (了) + Số + Lượng từ + (Tân ngữ)",
      explanation: "Đặt thời lượng/số lần SAU động từ. Nếu có tân ngữ là người/đại từ: Động từ + Tân ngữ + Thời lượng. Nếu là vật: Động từ + (了) + Thời lượng + 的 + Tân ngữ.",
      examples: [
        { hanzi: "我学了三年汉语。", pinyin: "Wǒ xué le sān nián Hànyǔ.", meaning: "Tôi đã học tiếng Trung 3 năm." },
        { hanzi: "我等了你一个小时。", pinyin: "Wǒ děng le nǐ yí ge xiǎoshí.", meaning: "Tôi đã đợi bạn một tiếng." },
        { hanzi: "他来过两次。", pinyin: "Tā lái guo liǎng cì.", meaning: "Anh ấy đã đến 2 lần." }
      ]
    },
    {
      id: "g3-8",
      title: "一边...一边... (vừa...vừa...)",
      structure: "一边 + Động từ 1 + 一边 + Động từ 2",
      explanation: "Biểu thị hai hành động xảy ra ĐỒNG THỜI bởi cùng một chủ thể. Hai động từ thường có mối liên hệ tự nhiên (không loại trừ nhau).",
      examples: [
        { hanzi: "他一边吃饭一边看电视。", pinyin: "Tā yìbiān chīfàn yìbiān kàn diànshì.", meaning: "Anh ấy vừa ăn cơm vừa xem TV." },
        { hanzi: "我一边走一边想。", pinyin: "Wǒ yìbiān zǒu yìbiān xiǎng.", meaning: "Tôi vừa đi vừa suy nghĩ." },
        { hanzi: "她一边唱歌一边跳舞。", pinyin: "Tā yìbiān chànggē yìbiān tiàowǔ.", meaning: "Cô ấy vừa hát vừa nhảy." }
      ]
    },
    {
      id: "g3-9",
      title: "如果...就... (nếu...thì...)",
      structure: "如果 + Điều kiện, (那) 就 + Kết quả",
      explanation: "Biểu thị quan hệ giả thiết-kết quả. 如果 (rúguǒ) = nếu, 就 (jiù) = thì. Có thể dùng 要是 (yàoshi) thay 如果 trong văn nói.",
      examples: [
        { hanzi: "如果下雨,我就不去。", pinyin: "Rúguǒ xiàyǔ, wǒ jiù bú qù.", meaning: "Nếu trời mưa thì tôi không đi." },
        { hanzi: "如果你忙,就不用来。", pinyin: "Rúguǒ nǐ máng, jiù búyòng lái.", meaning: "Nếu bạn bận thì không cần đến." },
        { hanzi: "要是有时间,我们就一起吃饭。", pinyin: "Yàoshi yǒu shíjiān, wǒmen jiù yìqǐ chīfàn.", meaning: "Nếu có thời gian thì chúng ta cùng ăn cơm." }
      ]
    },
    {
      id: "g3-10",
      title: "只要...就... (chỉ cần...là...)",
      structure: "只要 + Điều kiện + 就 + Kết quả",
      explanation: "Biểu thị điều kiện đủ tối thiểu để đạt được kết quả. Khác 只有...才... (chỉ khi...mới...) là điều kiện cần thiết.",
      examples: [
        { hanzi: "只要努力,就能成功。", pinyin: "Zhǐyào nǔlì, jiù néng chénggōng.", meaning: "Chỉ cần cố gắng là sẽ thành công." },
        { hanzi: "只要你来,我就高兴。", pinyin: "Zhǐyào nǐ lái, wǒ jiù gāoxìng.", meaning: "Chỉ cần bạn đến là tôi vui." },
        { hanzi: "只要不下雨,我们就去公园。", pinyin: "Zhǐyào bú xiàyǔ, wǒmen jiù qù gōngyuán.", meaning: "Chỉ cần không mưa là chúng tôi đi công viên." }
      ]
    },
    {
      id: "g3-11",
      title: "越来越 (yuè lái yuè) - Càng ngày càng",
      structure: "Chủ ngữ + 越来越 + Tính từ/Động từ tâm lý",
      explanation: "Biểu thị MỨC ĐỘ TĂNG DẦN theo thời gian. Sau 越来越 KHÔNG dùng 很/非常 (vì 越来越 đã chứa nghĩa mức độ). Thường dùng với tính từ và động từ tâm lý (喜欢, 爱, 恨...). Khác với 越...越... (chỉ tỷ lệ giữa hai sự việc), 越来越 chỉ sự thay đổi theo thời gian.",
      examples: [
        { hanzi: "天气越来越冷。", pinyin: "Tiānqì yuè lái yuè lěng.", meaning: "Thời tiết ngày càng lạnh." },
        { hanzi: "我越来越喜欢中国。", pinyin: "Wǒ yuè lái yuè xǐhuan Zhōngguó.", meaning: "Tôi ngày càng thích Trung Quốc." },
        { hanzi: "他的汉语越来越好。", pinyin: "Tā de Hànyǔ yuè lái yuè hǎo.", meaning: "Tiếng Trung của anh ấy ngày càng tốt." }
      ]
    },
    {
      id: "g3-12",
      title: "越...越... (càng...càng...)",
      structure: "越 + Tính từ/Động từ A + 越 + Tính từ/Động từ B",
      explanation: "Biểu thị hai sự việc tăng tiến cùng nhau: A càng tăng thì B càng tăng. A và B có thể cùng chủ ngữ hoặc khác chủ ngữ.",
      examples: [
        { hanzi: "雨越下越大。", pinyin: "Yǔ yuè xià yuè dà.", meaning: "Mưa càng lúc càng to." },
        { hanzi: "我越想越生气。", pinyin: "Wǒ yuè xiǎng yuè shēngqì.", meaning: "Tôi càng nghĩ càng tức giận." },
        { hanzi: "她越长越漂亮。", pinyin: "Tā yuè zhǎng yuè piàoliang.", meaning: "Cô ấy càng lớn càng xinh đẹp." }
      ]
    },
    {
      id: "g3-13",
      title: "一...就... (vừa...là...)",
      structure: "一 + Hành động/Sự kiện 1 + 就 + Hành động/Sự kiện 2",
      explanation: "Biểu thị hai hành động xảy ra LIÊN TIẾP nhau, hành động 2 xảy ra ngay sau hành động 1. Có thể cùng chủ ngữ hoặc khác chủ ngữ.",
      examples: [
        { hanzi: "我一回家就睡觉。", pinyin: "Wǒ yì huí jiā jiù shuìjiào.", meaning: "Tôi vừa về nhà là đi ngủ." },
        { hanzi: "他一看见我就笑。", pinyin: "Tā yí kànjiàn wǒ jiù xiào.", meaning: "Anh ấy vừa nhìn thấy tôi là cười." },
        { hanzi: "天一黑,我就回家。", pinyin: "Tiān yì hēi, wǒ jiù huí jiā.", meaning: "Trời vừa tối là tôi về nhà." }
      ]
    },
    {
      id: "g3-14",
      title: "先...然后... / 先...再... (trước...sau đó...)",
      structure: "先 + Hành động 1 + 然后/再 + Hành động 2",
      explanation: "Biểu thị thứ tự thực hiện hành động. 然后 (ránhòu) thường dùng cho việc đã xảy ra. 再 (zài) thường dùng cho việc sẽ xảy ra trong tương lai.",
      examples: [
        { hanzi: "先吃饭,然后做作业。", pinyin: "Xiān chīfàn, ránhòu zuò zuòyè.", meaning: "Ăn cơm trước, sau đó làm bài tập." },
        { hanzi: "你先洗手,再吃饭。", pinyin: "Nǐ xiān xǐ shǒu, zài chīfàn.", meaning: "Bạn rửa tay trước rồi mới ăn cơm." }
      ]
    },
    {
      id: "g3-15",
      title: "为了 (wèile) - Vì, để",
      structure: "为了 + Mục đích, Chủ ngữ + Động từ",
      explanation: "为了 dẫn ra mục đích, đứng đầu câu. Khác 因为 (vì lý do/nguyên nhân), 为了 chỉ mục tiêu cần đạt.",
      examples: [
        { hanzi: "为了健康,我每天运动。", pinyin: "Wèile jiànkāng, wǒ měitiān yùndòng.", meaning: "Vì sức khỏe, tôi vận động mỗi ngày." },
        { hanzi: "为了考试,他每天学习。", pinyin: "Wèile kǎoshì, tā měitiān xuéxí.", meaning: "Để thi, anh ấy học mỗi ngày." },
        { hanzi: "为了你,我什么都愿意。", pinyin: "Wèile nǐ, wǒ shénme dōu yuànyì.", meaning: "Vì em, anh sẵn lòng làm tất cả." }
      ]
    },
    {
      id: "g3-16",
      title: "对...感兴趣 (cảm thấy hứng thú với...)",
      structure: "Chủ ngữ + 对 + Đối tượng + 感兴趣",
      explanation: "Cấu trúc cố định để diễn tả sự quan tâm/yêu thích. 对 (duì) là giới từ chỉ đối tượng. Phủ định: 不感兴趣 hoặc 没兴趣.",
      examples: [
        { hanzi: "我对中国文化感兴趣。", pinyin: "Wǒ duì Zhōngguó wénhuà gǎn xìngqù.", meaning: "Tôi thấy hứng thú với văn hóa Trung Quốc." },
        { hanzi: "他对音乐很感兴趣。", pinyin: "Tā duì yīnyuè hěn gǎn xìngqù.", meaning: "Anh ấy rất thích âm nhạc." },
        { hanzi: "我对运动不感兴趣。", pinyin: "Wǒ duì yùndòng bù gǎn xìngqù.", meaning: "Tôi không hứng thú với thể thao." }
      ]
    },
    {
      id: "g3-17",
      title: "Trợ từ 地 (de) - Bổ trợ trạng ngữ",
      structure: "Tính từ/Phó từ + 地 + Động từ",
      explanation: "地 (de) nối tính từ hoặc phó từ với động từ, biến chúng thành trạng ngữ chỉ cách thức. Phân biệt: 的 (sở hữu) + danh từ, 地 (cách thức) + động từ, 得 (mức độ) sau động từ.",
      examples: [
        { hanzi: "请慢慢地说。", pinyin: "Qǐng mànman de shuō.", meaning: "Xin nói chậm chậm." },
        { hanzi: "他认真地学习。", pinyin: "Tā rènzhēn de xuéxí.", meaning: "Anh ấy học tập một cách nghiêm túc." },
        { hanzi: "孩子们高兴地跑过来。", pinyin: "Háizimen gāoxìng de pǎo guò lái.", meaning: "Bọn trẻ chạy đến một cách vui vẻ." }
      ]
    },
    {
      id: "g3-18",
      title: "差点儿 (chàdiǎnr) - Suýt nữa",
      structure: "差点儿 + (没) + Động từ",
      explanation: "Diễn tả sự việc rất gần xảy ra nhưng chưa xảy ra. Lưu ý: với việc KHÔNG mong muốn, 差点儿 và 差点儿没 có nghĩa GIỐNG nhau (đều = suýt). Với việc MONG muốn, 差点儿 = suýt không, 差点儿没 = suýt không xảy ra (kết quả là đã xảy ra).",
      examples: [
        { hanzi: "我差点儿迟到了。", pinyin: "Wǒ chàdiǎnr chídào le.", meaning: "Tôi suýt nữa thì đến muộn (nhưng đã không muộn)." },
        { hanzi: "他差点儿摔倒了。", pinyin: "Tā chàdiǎnr shuāidǎo le.", meaning: "Anh ấy suýt ngã (nhưng không ngã)." },
        { hanzi: "我差点儿没赶上车。", pinyin: "Wǒ chàdiǎnr méi gǎn shàng chē.", meaning: "Tôi suýt nữa thì lỡ xe (nhưng đã kịp)." }
      ]
    },
    {
      id: "g3-19",
      title: "几乎 (jīhū) - Gần như, hầu như",
      structure: "几乎 + Động từ/Tính từ",
      explanation: "Biểu thị mức độ rất gần với một mức nào đó. Khác 差点儿 (chỉ một sự kiện cụ thể), 几乎 thường mô tả trạng thái chung.",
      examples: [
        { hanzi: "我几乎每天都学汉语。", pinyin: "Wǒ jīhū měitiān dōu xué Hànyǔ.", meaning: "Tôi hầu như ngày nào cũng học tiếng Trung." },
        { hanzi: "他几乎没吃东西。", pinyin: "Tā jīhū méi chī dōngxi.", meaning: "Anh ấy hầu như không ăn gì." },
        { hanzi: "教室几乎都满了。", pinyin: "Jiàoshì jīhū dōu mǎn le.", meaning: "Phòng học gần như đã đầy." }
      ]
    },
    {
      id: "g3-20",
      title: "应该 (yīnggāi) - Nên, phải",
      structure: "Chủ ngữ + 应该 + Động từ",
      explanation: "应该 biểu thị nghĩa vụ, lời khuyên ('nên làm gì'). Cũng có thể mang nghĩa suy đoán ('chắc là, hẳn là'). Phủ định: 不应该.",
      examples: [
        { hanzi: "你应该多休息。", pinyin: "Nǐ yīnggāi duō xiūxi.", meaning: "Bạn nên nghỉ ngơi nhiều hơn." },
        { hanzi: "我们应该帮助他。", pinyin: "Wǒmen yīnggāi bāngzhù tā.", meaning: "Chúng ta nên giúp anh ấy." },
        { hanzi: "他应该已经到了。", pinyin: "Tā yīnggāi yǐjīng dào le.", meaning: "Anh ấy hẳn là đã đến rồi." }
      ]
    },
    {
      id: "g3-21",
      title: "其实 (qíshí) - Thực ra, kỳ thực",
      structure: "其实 + Mệnh đề",
      explanation: "Đứng đầu câu hoặc giữa câu để bộc lộ sự thật khác với những gì người ta tưởng. Mang sắc thái đính chính/làm rõ.",
      examples: [
        { hanzi: "其实我不喜欢咖啡。", pinyin: "Qíshí wǒ bù xǐhuan kāfēi.", meaning: "Thực ra tôi không thích cà phê." },
        { hanzi: "他看起来生气,其实没生气。", pinyin: "Tā kàn qǐlái shēngqì, qíshí méi shēngqì.", meaning: "Anh ấy trông có vẻ giận, thực ra không giận." },
        { hanzi: "其实这件事很简单。", pinyin: "Qíshí zhè jiàn shì hěn jiǎndān.", meaning: "Thực ra việc này rất đơn giản." }
      ]
    },
    {
      id: "g3-22",
      title: "还是 (háishi) - Vẫn / Hay là",
      structure: "1. Vẫn: Chủ ngữ + 还是 + Động từ/Tính từ\n2. Hay là: A + 还是 + B?",
      explanation: "还是 có 2 nghĩa chính: (1) 'vẫn' (giống 还), (2) 'hay là' trong câu lựa chọn. Trong câu hỏi lựa chọn, KHÔNG dùng 吗.",
      examples: [
        { hanzi: "你喝茶还是咖啡?", pinyin: "Nǐ hē chá háishi kāfēi?", meaning: "Bạn uống trà hay cà phê?" },
        { hanzi: "他还是不来。", pinyin: "Tā háishi bù lái.", meaning: "Anh ấy vẫn không đến." },
        { hanzi: "我们坐公共汽车还是坐地铁?", pinyin: "Wǒmen zuò gōnggòng qìchē háishi zuò dìtiě?", meaning: "Chúng ta đi xe buýt hay tàu điện ngầm?" }
      ]
    },
    {
      id: "g3-23",
      title: "一点儿也不/没 (chẳng...gì cả)",
      structure: "一点儿 + 也/都 + 不/没 + Động từ/Tính từ",
      explanation: "Cấu trúc nhấn mạnh phủ định tuyệt đối, 'hoàn toàn không', 'chẳng chút nào'. 也 và 都 có thể thay thế nhau.",
      examples: [
        { hanzi: "我一点儿也不累。", pinyin: "Wǒ yìdiǎnr yě bú lèi.", meaning: "Tôi chẳng mệt chút nào." },
        { hanzi: "他一点儿都不知道。", pinyin: "Tā yìdiǎnr dōu bù zhīdào.", meaning: "Anh ấy chẳng biết gì cả." },
        { hanzi: "这个菜一点儿也不辣。", pinyin: "Zhège cài yìdiǎnr yě bú là.", meaning: "Món này chẳng cay chút nào." }
      ]
    },
    {
      id: "g3-24",
      title: "让/叫 (ràng/jiào) - Để, bảo (câu cầu khiến)",
      structure: "Chủ ngữ + 让/叫 + Người + Động từ",
      explanation: "Câu cầu khiến: yêu cầu/cho phép ai đó làm gì. 让 mang nghĩa lịch sự hơn (để, cho phép). 叫 mang nghĩa mệnh lệnh hơn (bảo, sai khiến).",
      examples: [
        { hanzi: "妈妈让我去买菜。", pinyin: "Māma ràng wǒ qù mǎi cài.", meaning: "Mẹ bảo tôi đi mua rau." },
        { hanzi: "请让我看看。", pinyin: "Qǐng ràng wǒ kànkan.", meaning: "Xin để tôi xem." },
        { hanzi: "老师叫他回答问题。", pinyin: "Lǎoshī jiào tā huídá wèntí.", meaning: "Cô giáo bảo anh ấy trả lời câu hỏi." }
      ]
    },
    {
      id: "g3-25",
      title: "终于 (zhōngyú) - Cuối cùng",
      structure: "Chủ ngữ + 终于 + Động từ + (了)",
      explanation: "Biểu thị một sự việc cuối cùng cũng xảy ra sau thời gian dài chờ đợi/nỗ lực. Thường đi kèm 了 cuối câu để nhấn mạnh sự kết thúc.",
      examples: [
        { hanzi: "我终于找到工作了!", pinyin: "Wǒ zhōngyú zhǎodào gōngzuò le!", meaning: "Cuối cùng tôi cũng tìm được việc làm!" },
        { hanzi: "他终于来了。", pinyin: "Tā zhōngyú lái le.", meaning: "Cuối cùng anh ấy cũng đến." },
        { hanzi: "我们终于到了。", pinyin: "Wǒmen zhōngyú dào le.", meaning: "Cuối cùng chúng tôi cũng đến." }
      ]
    },
    {
      id: "g3-26",
      title: "用 (yòng) - Dùng để, bằng (giới từ)",
      structure: "Chủ ngữ + 用 + Công cụ + Động từ + Tân ngữ",
      explanation: "用 trong câu này hoạt động như giới từ, chỉ công cụ/phương tiện thực hiện hành động. Có thể là động từ độc lập (dùng) hoặc giới từ. Phủ định: 不用 đặt trước 用 (我不用筷子吃 - Tôi không dùng đũa ăn).",
      examples: [
        { hanzi: "我用筷子吃饭。", pinyin: "Wǒ yòng kuàizi chīfàn.", meaning: "Tôi dùng đũa ăn cơm." },
        { hanzi: "请用中文回答。", pinyin: "Qǐng yòng Zhōngwén huídá.", meaning: "Xin trả lời bằng tiếng Trung." },
        { hanzi: "他用手机看新闻。", pinyin: "Tā yòng shǒujī kàn xīnwén.", meaning: "Anh ấy dùng điện thoại xem tin tức." }
      ]
    },
    {
      id: "g3-27",
      title: "Cấu trúc 又...又... (vừa...vừa...)",
      structure: "Chủ ngữ + 又 + Tính từ/Động từ A + 又 + Tính từ/Động từ B",
      explanation: "Biểu thị hai đặc điểm/hành động ĐỒNG THỜI tồn tại. Hai vế phải CÙNG TÍNH CHẤT (cùng tích cực hoặc cùng tiêu cực). Khác với 一边...一边... (chỉ hành động đồng thời), 又...又... dùng cả cho tính chất tĩnh và động. Phổ biến hơn 既...又... (HSK 4) trong văn nói.",
      examples: [
        { hanzi: "这个苹果又大又甜。", pinyin: "Zhège píngguǒ yòu dà yòu tián.", meaning: "Quả táo này vừa to vừa ngọt." },
        { hanzi: "她又聪明又漂亮。", pinyin: "Tā yòu cōngming yòu piàoliang.", meaning: "Cô ấy vừa thông minh vừa xinh đẹp." },
        { hanzi: "他又会唱歌又会跳舞。", pinyin: "Tā yòu huì chànggē yòu huì tiàowǔ.", meaning: "Anh ấy vừa biết hát vừa biết múa." },
        { hanzi: "今天又冷又下雨。", pinyin: "Jīntiān yòu lěng yòu xiàyǔ.", meaning: "Hôm nay vừa lạnh vừa mưa." }
      ]
    },
    {
      id: "g3-28",
      title: "Cấu trúc 像...一样 (giống như, như là)",
      structure: "A + 像 + B + 一样 + (Tính từ)",
      explanation: "Cấu trúc SO SÁNH biểu thị A giống B. Có thể thêm tính từ phía sau để chỉ rõ giống về điểm gì. Phủ định: 不像...一样 (không giống như). Khác với 跟...一样 (đối tượng giống nhau hoàn toàn), 像...一样 mang tính ẩn dụ/ví von hơn.",
      examples: [
        { hanzi: "他像他爸爸一样高。", pinyin: "Tā xiàng tā bàba yíyàng gāo.", meaning: "Anh ấy cao giống bố." },
        { hanzi: "她笑得像花儿一样。", pinyin: "Tā xiào de xiàng huār yíyàng.", meaning: "Cô ấy cười như hoa." },
        { hanzi: "时间像水一样过得很快。", pinyin: "Shíjiān xiàng shuǐ yíyàng guò de hěn kuài.", meaning: "Thời gian trôi nhanh như nước." },
        { hanzi: "我不像他一样喜欢运动。", pinyin: "Wǒ bú xiàng tā yíyàng xǐhuan yùndòng.", meaning: "Tôi không thích thể thao như anh ấy." }
      ]
    },
    {
      id: "g3-29",
      title: "Giới từ 关于 (guānyú) - Về, liên quan đến",
      structure: "关于 + Đối tượng/Chủ đề + Mệnh đề",
      explanation: "Giới từ chỉ chủ đề/phạm vi của câu, tương đương 'về', 'liên quan đến'. Đặt ĐẦU CÂU hoặc đầu cụm danh từ. Khác với 对 (đối với - chỉ hướng tác động), 关于 chỉ chủ đề được thảo luận.",
      examples: [
        { hanzi: "关于这个问题,我想说几句话。", pinyin: "Guānyú zhège wèntí, wǒ xiǎng shuō jǐ jù huà.", meaning: "Về vấn đề này, tôi muốn nói vài câu." },
        { hanzi: "我看了一本关于中国历史的书。", pinyin: "Wǒ kàn le yì běn guānyú Zhōngguó lìshǐ de shū.", meaning: "Tôi đã đọc một cuốn sách về lịch sử Trung Quốc." },
        { hanzi: "关于他的事情,我不太清楚。", pinyin: "Guānyú tā de shìqing, wǒ bú tài qīngchu.", meaning: "Về chuyện của anh ấy, tôi không rõ lắm." }
      ]
    }
  ],
  hsk4: [
    {
      id: "g4-1",
      title: "不但...而且... (không những...mà còn...)",
      structure: "不但 + Mệnh đề 1, 而且 + Mệnh đề 2",
      explanation: "Cấu trúc liên kết tăng tiến, biểu thị vế sau bổ sung và nâng cao thêm so với vế trước. Khi hai vế CÙNG chủ ngữ, 不但 đặt SAU chủ ngữ. Khi KHÁC chủ ngữ, 不但 đặt TRƯỚC chủ ngữ. Có thể thay 而且 bằng 也, 还, 并且. Lưu ý: nếu là phủ định kép thì dùng 不但不/不但没有 ở vế đầu để tạo nghĩa mạnh hơn.",
      examples: [
        { hanzi: "她不但漂亮,而且聪明。", pinyin: "Tā búdàn piàoliang, érqiě cōngming.", meaning: "Cô ấy không những đẹp mà còn thông minh." },
        { hanzi: "这个菜不但好吃,而且便宜。", pinyin: "Zhège cài búdàn hǎochī, érqiě piányi.", meaning: "Món này không những ngon mà còn rẻ." },
        { hanzi: "不但我会去,我妹妹也会去。", pinyin: "Búdàn wǒ huì qù, wǒ mèimei yě huì qù.", meaning: "Không những tôi đi, em gái tôi cũng đi." },
        { hanzi: "他不但没有道歉,反而生气了。", pinyin: "Tā búdàn méiyǒu dàoqiàn, fǎn'ér shēngqì le.", meaning: "Anh ấy không những không xin lỗi mà còn tức giận." }
      ]
    },
    {
      id: "g4-2",
      title: "既...又... (vừa...vừa...)",
      structure: "Chủ ngữ + 既 + Tính từ/Động từ A + 又 + Tính từ/Động từ B",
      explanation: "Biểu thị một chủ thể có HAI ĐẶC ĐIỂM/HÀNH ĐỘNG cùng tồn tại. Khác với 一边...一边... (hai hành động đồng thời), 既...又... thường dùng cho TÍNH CHẤT hoặc TRẠNG THÁI tĩnh. Hai vế phải có TÍNH CHẤT TƯƠNG ĐƯƠNG (cùng tích cực hoặc cùng tiêu cực).",
      examples: [
        { hanzi: "这个房子既漂亮又便宜。", pinyin: "Zhège fángzi jì piàoliang yòu piányi.", meaning: "Căn nhà này vừa đẹp vừa rẻ." },
        { hanzi: "她既会唱歌,又会跳舞。", pinyin: "Tā jì huì chànggē, yòu huì tiàowǔ.", meaning: "Cô ấy vừa biết hát vừa biết múa." },
        { hanzi: "学习汉语既有意思又有用。", pinyin: "Xuéxí Hànyǔ jì yǒu yìsi yòu yǒuyòng.", meaning: "Học tiếng Trung vừa thú vị vừa hữu ích." }
      ]
    },
    {
      id: "g4-3",
      title: "无论...都... (dù...cũng...)",
      structure: "无论 + Câu hỏi/Lựa chọn, (Chủ ngữ) + 都/也 + Động từ",
      explanation: "Cấu trúc nhượng bộ tuyệt đối: bất kể tình huống thế nào, kết quả vẫn không thay đổi. Sau 无论 phải là CÂU HỎI (有谁/什么/哪) hoặc cụm LỰA CHỌN (是A还是B). KHÔNG dùng câu khẳng định sau 无论. Có thể thay 无论 bằng 不管 (thông tục hơn).",
      examples: [
        { hanzi: "无论多忙,他都坚持锻炼。", pinyin: "Wúlùn duō máng, tā dōu jiānchí duànliàn.", meaning: "Dù bận thế nào, anh ấy vẫn kiên trì tập luyện." },
        { hanzi: "无论是谁,都要遵守规则。", pinyin: "Wúlùn shì shéi, dōu yào zūnshǒu guīzé.", meaning: "Dù là ai cũng phải tuân thủ quy tắc." },
        { hanzi: "不管下不下雨,我都要去。", pinyin: "Bùguǎn xià bú xiàyǔ, wǒ dōu yào qù.", meaning: "Dù mưa hay không tôi cũng sẽ đi." }
      ]
    },
    {
      id: "g4-4",
      title: "尽管...但是/可是... (mặc dù...nhưng...)",
      structure: "尽管 + Mệnh đề 1, 但是/可是/还是 + Mệnh đề 2",
      explanation: "Biểu thị quan hệ nhượng bộ - chuyển ý. Khác với 虽然...但是... (giống nghĩa), 尽管 mang sắc thái VĂN VIẾT HƠN và nhấn mạnh sự thật của vế đầu. Sau 尽管 thường là sự việc KHÁCH QUAN, có thật.",
      examples: [
        { hanzi: "尽管下大雨,他还是来了。", pinyin: "Jǐnguǎn xià dàyǔ, tā háishi lái le.", meaning: "Mặc dù mưa to, anh ấy vẫn đến." },
        { hanzi: "尽管很累,但是我很高兴。", pinyin: "Jǐnguǎn hěn lèi, dànshì wǒ hěn gāoxìng.", meaning: "Dù mệt nhưng tôi rất vui." },
        { hanzi: "尽管时间很短,我们还是完成了任务。", pinyin: "Jǐnguǎn shíjiān hěn duǎn, wǒmen háishi wánchéng le rènwu.", meaning: "Mặc dù thời gian ngắn, chúng tôi vẫn hoàn thành nhiệm vụ." }
      ]
    },
    {
      id: "g4-5",
      title: "即使...也... (cho dù...cũng...)",
      structure: "即使 + Giả thiết, (Chủ ngữ) + 也 + Hành động",
      explanation: "Biểu thị giả thiết-nhượng bộ về sự việc CHƯA xảy ra (hoặc khó xảy ra). Khác với 虽然 (sự việc đã có thật), 即使 nói về điều giả định trong tương lai. Có thể thay bằng 就算 trong văn nói.",
      examples: [
        { hanzi: "即使下雨,我也要去。", pinyin: "Jíshǐ xiàyǔ, wǒ yě yào qù.", meaning: "Cho dù trời mưa, tôi cũng sẽ đi." },
        { hanzi: "即使你不告诉我,我也会知道。", pinyin: "Jíshǐ nǐ bú gàosu wǒ, wǒ yě huì zhīdào.", meaning: "Cho dù em không nói, tôi cũng sẽ biết." },
        { hanzi: "就算很贵,我也要买。", pinyin: "Jiùsuàn hěn guì, wǒ yě yào mǎi.", meaning: "Cho dù đắt, tôi cũng sẽ mua." }
      ]
    },
    {
      id: "g4-6",
      title: "由于 (yóuyú) - Do, vì",
      structure: "由于 + Nguyên nhân, (所以) + Kết quả",
      explanation: "Liên từ chỉ NGUYÊN NHÂN, mang sắc thái TRANG TRỌNG/VĂN VIẾT hơn 因为. Đặt ở ĐẦU CÂU. Vế sau có thể có 所以, 因此, 因而. Lưu ý: 由于 KHÔNG dùng được ở vế sau (khác với 因为 có thể dùng cả 因为...的关系).",
      examples: [
        { hanzi: "由于天气不好,飞机晚点了。", pinyin: "Yóuyú tiānqì bù hǎo, fēijī wǎndiǎn le.", meaning: "Do thời tiết xấu, máy bay bị trễ." },
        { hanzi: "由于工作太忙,他没来。", pinyin: "Yóuyú gōngzuò tài máng, tā méi lái.", meaning: "Do công việc quá bận, anh ấy không đến." },
        { hanzi: "由于努力学习,他考上了大学。", pinyin: "Yóuyú nǔlì xuéxí, tā kǎoshàng le dàxué.", meaning: "Nhờ chăm chỉ học tập, anh ấy đã thi đỗ đại học." }
      ]
    },
    {
      id: "g4-7",
      title: "因此 / 因而 (do đó, vì thế)",
      structure: "Câu nguyên nhân, 因此/因而 + Câu kết quả",
      explanation: "Liên từ chỉ KẾT QUẢ. 因此 phổ biến hơn, dùng cả văn nói lẫn văn viết. 因而 chỉ dùng văn viết, kết quả mang tính LOGIC chặt chẽ. Đứng đầu vế thứ hai. Khác với 所以 (thông dụng), 因此/因而 trang trọng hơn.",
      examples: [
        { hanzi: "他生病了,因此没来上课。", pinyin: "Tā shēngbìng le, yīncǐ méi lái shàngkè.", meaning: "Anh ấy bị ốm, do đó không đến lớp." },
        { hanzi: "雨下得很大,因此比赛取消了。", pinyin: "Yǔ xià de hěn dà, yīncǐ bǐsài qǔxiāo le.", meaning: "Mưa to, vì thế trận đấu bị hủy." }
      ]
    },
    {
      id: "g4-8",
      title: "只有...才... (chỉ có...mới...)",
      structure: "只有 + Điều kiện duy nhất + 才 + Kết quả",
      explanation: "Biểu thị ĐIỀU KIỆN CẦN THIẾT DUY NHẤT - không có điều kiện này thì không có kết quả. Khác với 只要...就... (điều kiện đủ tối thiểu), 只有...才... nhấn mạnh tính DUY NHẤT của điều kiện.",
      examples: [
        { hanzi: "只有努力,才能成功。", pinyin: "Zhǐyǒu nǔlì, cáinéng chénggōng.", meaning: "Chỉ có nỗ lực mới thành công được." },
        { hanzi: "只有十八岁以上才能开车。", pinyin: "Zhǐyǒu shíbā suì yǐshàng cáinéng kāichē.", meaning: "Chỉ có trên 18 tuổi mới được lái xe." },
        { hanzi: "只有亲眼看到,我才会相信。", pinyin: "Zhǐyǒu qīnyǎn kàn dào, wǒ cái huì xiāngxìn.", meaning: "Chỉ khi tận mắt thấy tôi mới tin." }
      ]
    },
    {
      id: "g4-9",
      title: "除了...以外,还/都/也... (ngoài...ra, còn/đều...)",
      structure: "除了 + Đối tượng + 以外, ... + 还/都/也 + ...",
      explanation: "Có 2 nghĩa quan trọng: (1) BAO GỒM cả → dùng 还 (Ngoài X, còn cả Y); (2) NGOẠI TRỪ → dùng 都 (Trừ X ra, mọi thứ đều...). Phân biệt theo 还/也 hay 都. Có thể lược bỏ 以外.",
      examples: [
        { hanzi: "除了汉语,我还会说英语。", pinyin: "Chúle Hànyǔ, wǒ hái huì shuō Yīngyǔ.", meaning: "Ngoài tiếng Trung, tôi còn biết nói tiếng Anh." },
        { hanzi: "除了他以外,大家都来了。", pinyin: "Chúle tā yǐwài, dàjiā dōu lái le.", meaning: "Trừ anh ấy ra, mọi người đều đã đến." },
        { hanzi: "除了周末,我天天都工作。", pinyin: "Chúle zhōumò, wǒ tiāntiān dōu gōngzuò.", meaning: "Trừ cuối tuần, ngày nào tôi cũng làm việc." }
      ]
    },
    {
      id: "g4-10",
      title: "非...不可 (nhất định phải...)",
      structure: "Chủ ngữ + 非 + Động từ + 不可",
      explanation: "Cấu trúc phủ định kép tạo nghĩa khẳng định MẠNH MẼ - nhất định phải làm gì đó, không thể không làm. Có thể thay bằng 非...不行 hoặc thêm 不能/不行. Mang sắc thái QUYẾT TÂM cao.",
      examples: [
        { hanzi: "我非去不可。", pinyin: "Wǒ fēi qù bùkě.", meaning: "Tôi nhất định phải đi." },
        { hanzi: "这件事我非做不可。", pinyin: "Zhè jiàn shì wǒ fēi zuò bùkě.", meaning: "Việc này tôi nhất định phải làm." },
        { hanzi: "他非要买这个不可。", pinyin: "Tā fēiyào mǎi zhège bùkě.", meaning: "Anh ấy nhất định phải mua cái này." }
      ]
    },
    {
      id: "g4-11",
      title: "好像 (hǎoxiàng) - Dường như, hình như",
      structure: "Chủ ngữ + 好像 + Mệnh đề (+ 似的/一样)",
      explanation: "Biểu thị sự PHỎNG ĐOÁN không chắc chắn (dường như, hình như) hoặc SO SÁNH (giống như). Có thể thêm 似的 (shìde) hoặc 一样 (yíyàng) ở cuối câu để nhấn mạnh sự so sánh.",
      examples: [
        { hanzi: "他好像生病了。", pinyin: "Tā hǎoxiàng shēngbìng le.", meaning: "Hình như anh ấy bị ốm." },
        { hanzi: "她好像很高兴的样子。", pinyin: "Tā hǎoxiàng hěn gāoxìng de yàngzi.", meaning: "Cô ấy có vẻ rất vui." },
        { hanzi: "他笑得好像花儿一样。", pinyin: "Tā xiào de hǎoxiàng huār yíyàng.", meaning: "Cô ấy cười như hoa." }
      ]
    },
    {
      id: "g4-12",
      title: "看起来 / 听起来 (trông có vẻ / nghe có vẻ)",
      structure: "Chủ ngữ + 看/听/吃/闻 + 起来 + Tính từ/Mệnh đề",
      explanation: "Cấu trúc 'V + 起来' biểu thị NHẬN ĐỊNH/CẢM NHẬN dựa trên giác quan tương ứng. 看起来 (trông), 听起来 (nghe), 吃起来 (ăn vào), 闻起来 (ngửi). Có thể đặt đầu câu hoặc giữa câu.",
      examples: [
        { hanzi: "她看起来很年轻。", pinyin: "Tā kàn qǐlái hěn niánqīng.", meaning: "Cô ấy trông rất trẻ." },
        { hanzi: "这个主意听起来不错。", pinyin: "Zhège zhǔyì tīng qǐlái búcuò.", meaning: "Ý tưởng này nghe có vẻ hay." },
        { hanzi: "这个菜吃起来很香。", pinyin: "Zhège cài chī qǐlái hěn xiāng.", meaning: "Món này ăn vào rất thơm." }
      ]
    },
    {
      id: "g4-13",
      title: "一方面...另一方面... (một mặt...mặt khác...)",
      structure: "一方面 + Vế 1, (另)一方面 + Vế 2",
      explanation: "Biểu thị việc xem xét vấn đề từ HAI KHÍA CẠNH song song. Hai vế thường có quan hệ tương đương hoặc bổ sung lẫn nhau. Mang sắc thái VĂN VIẾT/PHÂN TÍCH.",
      examples: [
        { hanzi: "学习汉语,一方面是为了工作,另一方面是为了兴趣。", pinyin: "Xuéxí Hànyǔ, yìfāngmiàn shì wèile gōngzuò, lìng yìfāngmiàn shì wèile xìngqù.", meaning: "Học tiếng Trung, một mặt là vì công việc, mặt khác vì sở thích." },
        { hanzi: "他一方面工作,另一方面学习。", pinyin: "Tā yìfāngmiàn gōngzuò, lìng yìfāngmiàn xuéxí.", meaning: "Anh ấy một mặt đi làm, mặt khác đi học." }
      ]
    },
    {
      id: "g4-14",
      title: "于是 (yúshì) - Thế là, do đó",
      structure: "Câu 1, 于是 + Câu 2",
      explanation: "Liên từ chỉ HÀNH ĐỘNG TIẾP NỐI một cách tự nhiên/tất yếu sau sự việc trước. Khác với 所以 (chỉ kết quả logic), 于là biểu thị CHUỖI HÀNH ĐỘNG. Đứng đầu vế thứ hai.",
      examples: [
        { hanzi: "天突然下雨了,于是我们回家了。", pinyin: "Tiān tūrán xiàyǔ le, yúshì wǒmen huí jiā le.", meaning: "Trời đột nhiên mưa, thế là chúng tôi về nhà." },
        { hanzi: "他听了我的话,于是同意了。", pinyin: "Tā tīng le wǒ de huà, yúshì tóngyì le.", meaning: "Anh ấy nghe lời tôi, thế là đồng ý." }
      ]
    },
    {
      id: "g4-15",
      title: "不过 (búguò) - Nhưng, có điều",
      structure: "Câu 1, 不过 + Câu 2",
      explanation: "Liên từ chỉ sự CHUYỂN Ý NHẸ NHÀNG hơn 但是. Vế sau là điều BỔ SUNG, ĐÍNH CHÍNH cho vế trước, chứ không hoàn toàn đối lập. Mang sắc thái mềm mỏng, lịch sự.",
      examples: [
        { hanzi: "这家店不错,不过有点贵。", pinyin: "Zhè jiā diàn búcuò, búguò yǒudiǎn guì.", meaning: "Cửa hàng này được, có điều hơi đắt." },
        { hanzi: "我会去,不过会迟到一点儿。", pinyin: "Wǒ huì qù, búguò huì chídào yìdiǎnr.", meaning: "Tôi sẽ đi, nhưng sẽ đến trễ chút." }
      ]
    },
    {
      id: "g4-16",
      title: "拿...来说 (lấy...làm ví dụ)",
      structure: "拿/就 + Đối tượng + 来说",
      explanation: "Cấu trúc dẫn ra ví dụ cụ thể từ một đối tượng. Đứng ĐẦU CÂU, sau đó là phần phân tích/mô tả về đối tượng đó. Tương đương 'lấy X mà nói', 'đối với X mà nói'.",
      examples: [
        { hanzi: "拿我来说,我每天都学习。", pinyin: "Ná wǒ láishuō, wǒ měitiān dōu xuéxí.", meaning: "Lấy tôi mà nói, tôi học mỗi ngày." },
        { hanzi: "就汉语来说,语法不太难。", pinyin: "Jiù Hànyǔ láishuō, yǔfǎ bú tài nán.", meaning: "Nói về tiếng Trung, ngữ pháp không khó lắm." }
      ]
    },
    {
      id: "g4-17",
      title: "至于 (zhìyú) - Còn về phần",
      structure: "Câu 1。至于 + Đối tượng mới, + Mệnh đề",
      explanation: "Dùng để CHUYỂN CHỦ ĐỀ sang một khía cạnh/đối tượng khác có liên quan. Đứng đầu câu mới. Tương đương 'còn về phần', 'còn đối với'.",
      examples: [
        { hanzi: "我同意你的看法。至于具体方法,我们再讨论。", pinyin: "Wǒ tóngyì nǐ de kànfǎ. Zhìyú jùtǐ fāngfǎ, wǒmen zài tǎolùn.", meaning: "Tôi đồng ý với ý kiến của bạn. Còn về phương pháp cụ thể, chúng ta bàn sau." },
        { hanzi: "至于他来不来,我不知道。", pinyin: "Zhìyú tā lái bu lái, wǒ bù zhīdào.", meaning: "Còn về việc anh ấy có đến không, tôi không biết." }
      ]
    },
    {
      id: "g4-18",
      title: "在...看来 (theo...mà thấy/nói)",
      structure: "在 + Người + 看来, + Quan điểm/Nhận định",
      explanation: "Cấu trúc cố định để dẫn ra QUAN ĐIỂM CHỦ QUAN của ai đó. Tương đương 'theo X mà thấy', 'theo quan điểm của X'. Đứng đầu câu, sau đó là nội dung quan điểm.",
      examples: [
        { hanzi: "在我看来,这个问题很简单。", pinyin: "Zài wǒ kànlái, zhège wèntí hěn jiǎndān.", meaning: "Theo tôi thấy, vấn đề này rất đơn giản." },
        { hanzi: "在他看来,学习最重要。", pinyin: "Zài tā kànlái, xuéxí zuì zhòngyào.", meaning: "Theo anh ấy, học tập quan trọng nhất." },
        { hanzi: "在年轻人看来,这是一种时尚。", pinyin: "Zài niánqīng rén kànlái, zhè shì yì zhǒng shíshàng.", meaning: "Trong mắt giới trẻ, đây là một xu hướng." }
      ]
    },
    {
      id: "g4-19",
      title: "尤其是 (yóuqí shì) - Đặc biệt là, nhất là",
      structure: "Câu chung。尤其是 + Đối tượng/Tình huống cụ thể",
      explanation: "Dùng để NHẤN MẠNH một trường hợp đặc biệt trong tổng thể đã đề cập. Tương đương 'đặc biệt là', 'nhất là'. Có thể đứng đầu câu hoặc giữa câu.",
      examples: [
        { hanzi: "我喜欢水果,尤其是苹果。", pinyin: "Wǒ xǐhuan shuǐguǒ, yóuqí shì píngguǒ.", meaning: "Tôi thích trái cây, đặc biệt là táo." },
        { hanzi: "夏天很热,尤其是中午。", pinyin: "Xiàtiān hěn rè, yóuqí shì zhōngwǔ.", meaning: "Mùa hè rất nóng, nhất là buổi trưa." }
      ]
    },
    {
      id: "g4-20",
      title: "Cấu trúc 是...的 (nhấn mạnh thông tin)",
      structure: "Chủ ngữ + 是 + (Thời gian/Nơi/Cách thức/Người) + Động từ + 的",
      explanation: "Cấu trúc 是...的 dùng để NHẤN MẠNH một thông tin cụ thể (thời gian, địa điểm, cách thức, mục đích...) của một sự việc đã xảy ra TRONG QUÁ KHỨ. KHÔNG dùng cho tương lai. Tân ngữ có thể đặt trước hoặc sau 的.",
      examples: [
        { hanzi: "我是昨天来的。", pinyin: "Wǒ shì zuótiān lái de.", meaning: "Tôi đến vào hôm qua. (Nhấn mạnh thời gian)" },
        { hanzi: "他是从北京来的。", pinyin: "Tā shì cóng Běijīng lái de.", meaning: "Anh ấy đến từ Bắc Kinh. (Nhấn mạnh nơi xuất phát)" },
        { hanzi: "我是坐飞机来的。", pinyin: "Wǒ shì zuò fēijī lái de.", meaning: "Tôi đến bằng máy bay. (Nhấn mạnh phương tiện)" },
        { hanzi: "这本书是我买的。", pinyin: "Zhè běn shū shì wǒ mǎi de.", meaning: "Cuốn sách này là tôi mua. (Nhấn mạnh người thực hiện)" }
      ]
    },
    {
      id: "g4-21",
      title: "Phó từ 究竟 / 到底 (rốt cuộc, cuối cùng)",
      structure: "Chủ ngữ + 究竟/到底 + Câu hỏi",
      explanation: "Dùng trong CÂU HỎI để nhấn mạnh sự sốt ruột, truy vấn đến cùng (tương đương 'rốt cuộc'). 到底 thông tục hơn, 究竟 trang trọng hơn. Đặt SAU chủ ngữ và TRƯỚC từ để hỏi (谁/什么/哪/怎么/为什么/几).",
      examples: [
        { hanzi: "你到底想做什么?", pinyin: "Nǐ dàodǐ xiǎng zuò shénme?", meaning: "Cuối cùng thì bạn muốn làm gì?" },
        { hanzi: "他究竟去哪儿了?", pinyin: "Tā jiūjìng qù nǎr le?", meaning: "Rốt cuộc anh ấy đã đi đâu?" },
        { hanzi: "这件事到底是真的还是假的?", pinyin: "Zhè jiàn shì dàodǐ shì zhēn de háishi jiǎ de?", meaning: "Việc này rốt cuộc là thật hay giả?" }
      ]
    },
    {
      id: "g4-22",
      title: "Cấu trúc 不是...就是... (không phải...thì là...)",
      structure: "不是 + A + 就是 + B",
      explanation: "Biểu thị HAI KHẢ NĂNG, chắc chắn 1 trong 2 đúng (không có lựa chọn thứ 3). Mang sắc thái KHẲNG ĐỊNH MẠNH. Có thể dùng cho người, vật, sự kiện.",
      examples: [
        { hanzi: "他不是去图书馆,就是去公园。", pinyin: "Tā bú shì qù túshūguǎn, jiùshì qù gōngyuán.", meaning: "Anh ấy không phải đi thư viện thì là đi công viên." },
        { hanzi: "周末我不是看书,就是看电影。", pinyin: "Zhōumò wǒ bú shì kàn shū, jiùshì kàn diànyǐng.", meaning: "Cuối tuần tôi không đọc sách thì xem phim." },
        { hanzi: "这事不是他做的,就是她做的。", pinyin: "Zhè shì bú shì tā zuò de, jiùshì tā zuò de.", meaning: "Việc này không phải anh ấy làm thì là cô ấy làm." }
      ]
    },
    {
      id: "g4-23",
      title: "Bổ ngữ trạng thái với 得 (de) - Mở rộng",
      structure: "Động từ + 得 + Bổ ngữ trạng thái (Tính từ/Cụm từ)",
      explanation: "Cấu trúc 得 nâng cao mô tả mức độ/cách thức của hành động. Khi có TÂN NGỮ, phải LẶP LẠI ĐỘNG TỪ: Động từ + Tân ngữ + Động từ + 得 + Bổ ngữ. Phủ định: Động từ + 得 + 不 + Bổ ngữ (không dùng 不得).",
      examples: [
        { hanzi: "他跑得很快。", pinyin: "Tā pǎo de hěn kuài.", meaning: "Anh ấy chạy rất nhanh." },
        { hanzi: "她说汉语说得非常流利。", pinyin: "Tā shuō Hànyǔ shuō de fēicháng liúlì.", meaning: "Cô ấy nói tiếng Trung rất lưu loát." },
        { hanzi: "今天我睡得不好。", pinyin: "Jīntiān wǒ shuì de bù hǎo.", meaning: "Hôm nay tôi ngủ không ngon." },
        { hanzi: "他高兴得跳了起来。", pinyin: "Tā gāoxìng de tiào le qǐlái.", meaning: "Anh ấy vui đến nỗi nhảy lên." }
      ]
    },
    {
      id: "g4-24",
      title: "Cụm 跟...一样 / 不一样 (giống/khác)",
      structure: "A + 跟/和 + B + (不)一样 + (Tính từ)",
      explanation: "So sánh hai đối tượng GIỐNG NHAU hoặc KHÁC NHAU. Có thể thêm tính từ phía sau để chỉ rõ giống/khác ở khía cạnh nào. Có thể thay 跟 bằng 和.",
      examples: [
        { hanzi: "我的书包跟你的一样。", pinyin: "Wǒ de shūbāo gēn nǐ de yíyàng.", meaning: "Cặp của tôi giống cặp của bạn." },
        { hanzi: "他的想法跟我的不一样。", pinyin: "Tā de xiǎngfǎ gēn wǒ de bù yíyàng.", meaning: "Suy nghĩ của anh ấy khác tôi." },
        { hanzi: "今天的天气跟昨天一样冷。", pinyin: "Jīntiān de tiānqì gēn zuótiān yíyàng lěng.", meaning: "Thời tiết hôm nay lạnh như hôm qua." }
      ]
    },
    {
      id: "g4-25",
      title: "Cấu trúc 比...还/更 (so sánh hơn)",
      structure: "A + 比 + B + 还/更 + Tính từ + (Số lượng/Mức độ)",
      explanation: "Câu so sánh 比 nâng cao có thêm 还/更 nhấn mạnh mức độ hơn nữa. Sau tính từ có thể thêm cụm chỉ MỨC ĐỘ chênh lệch như 一点儿, 一些, 多了, 得多, hoặc số lượng cụ thể (3 岁, 10 公斤). KHÔNG dùng 很/非常 trong câu so sánh.",
      examples: [
        { hanzi: "他比我还高。", pinyin: "Tā bǐ wǒ hái gāo.", meaning: "Anh ấy còn cao hơn tôi." },
        { hanzi: "今天比昨天更冷。", pinyin: "Jīntiān bǐ zuótiān gèng lěng.", meaning: "Hôm nay lạnh hơn hôm qua." },
        { hanzi: "我比他大三岁。", pinyin: "Wǒ bǐ tā dà sān suì.", meaning: "Tôi hơn anh ấy 3 tuổi." },
        { hanzi: "这个比那个贵得多。", pinyin: "Zhège bǐ nàge guì de duō.", meaning: "Cái này đắt hơn cái kia nhiều." }
      ]
    },
    {
      id: "g4-26",
      title: "随着 (suízhe) - Cùng với, theo",
      structure: "随着 + Sự thay đổi/Tiến trình, + Mệnh đề",
      explanation: "Biểu thị sự thay đổi xảy ra ĐỒNG THỜI/THEO một quá trình khác. Sau 随着 thường là cụm danh từ chỉ thời gian, công nghệ, sự phát triển... Đứng ĐẦU CÂU. Mang sắc thái VĂN VIẾT.",
      examples: [
        { hanzi: "随着时间的过去,我越来越喜欢这里。", pinyin: "Suízhe shíjiān de guòqù, wǒ yuè lái yuè xǐhuan zhèlǐ.", meaning: "Theo thời gian, tôi ngày càng thích nơi này." },
        { hanzi: "随着科技的发展,生活越来越方便。", pinyin: "Suízhe kējì de fāzhǎn, shēnghuó yuè lái yuè fāngbiàn.", meaning: "Cùng với sự phát triển của công nghệ, cuộc sống ngày càng tiện lợi." },
        { hanzi: "随着年龄的增长,他变得更加成熟。", pinyin: "Suízhe niánlíng de zēngzhǎng, tā biàn de gèngjiā chéngshú.", meaning: "Theo tuổi tác tăng lên, anh ấy trở nên trưởng thành hơn." }
      ]
    },
    {
      id: "g4-27",
      title: "然而 (rán'ér) - Tuy nhiên, nhưng",
      structure: "Câu 1。然而 + Câu 2 (chuyển ý)",
      explanation: "Liên từ chỉ sự CHUYỂN Ý mạnh, tương đương 'tuy nhiên', 'thế nhưng'. Mang sắc thái TRANG TRỌNG/VĂN VIẾT hơn 但是, 可是. Đứng đầu vế thứ hai. Thường dùng trong văn bản nghị luận, báo chí.",
      examples: [
        { hanzi: "他很努力,然而成绩却不理想。", pinyin: "Tā hěn nǔlì, rán'ér chéngjì què bù lǐxiǎng.", meaning: "Anh ấy rất nỗ lực, tuy nhiên kết quả lại không như ý." },
        { hanzi: "我们做了充分准备,然而还是失败了。", pinyin: "Wǒmen zuò le chōngfèn zhǔnbèi, rán'ér háishi shībài le.", meaning: "Chúng tôi đã chuẩn bị đầy đủ, tuy nhiên vẫn thất bại." },
        { hanzi: "这个想法很好,然而难以实现。", pinyin: "Zhège xiǎngfǎ hěn hǎo, rán'ér nányǐ shíxiàn.", meaning: "Ý tưởng này rất hay, tuy nhiên khó thực hiện." }
      ]
    },
    {
      id: "g4-28",
      title: "Cấu trúc 动词 + 看 (thử ...xem)",
      structure: "Động từ + 看 / Động từ + 看看 / Động từ + 一下 + 看",
      explanation: "看 đặt SAU động từ tạo nghĩa 'thử ... xem'. Có thể lặp lại 看看 hoặc thêm 一下 để mềm hơn. Tương đương 'thử nghiệm', 'làm thử'. Lưu ý: KHÁC với 看 = nhìn/xem độc lập. Trong cấu trúc này, 看 đã hư hóa thành ngữ pháp.",
      examples: [
        { hanzi: "你尝尝看,味道怎么样?", pinyin: "Nǐ chángchang kàn, wèidào zěnmeyàng?", meaning: "Bạn nếm thử xem, vị thế nào?" },
        { hanzi: "我试试看能不能修好。", pinyin: "Wǒ shìshi kàn néng bù néng xiū hǎo.", meaning: "Tôi thử xem có sửa được không." },
        { hanzi: "你想想看这样做对不对。", pinyin: "Nǐ xiǎngxiang kàn zhèyàng zuò duì bú duì.", meaning: "Bạn thử nghĩ xem làm như vậy có đúng không." },
        { hanzi: "用一下看,看好不好用。", pinyin: "Yòng yíxià kàn, kàn hǎo bù hǎo yòng.", meaning: "Dùng thử xem, xem có dễ dùng không." }
      ]
    },
    {
      id: "g4-29",
      title: "Cấu trúc 把...当作... (coi...như là...)",
      structure: "Chủ ngữ + 把 + A + 当作/当成 + B",
      explanation: "Cấu trúc đặc biệt biểu thị COI A NHƯ LÀ B / xem A là B. 当作 và 当成 có thể thay thế nhau, ý nghĩa giống nhau. Mang tính nhận thức/đánh giá chủ quan.",
      examples: [
        { hanzi: "他把我当作好朋友。", pinyin: "Tā bǎ wǒ dàngzuò hǎo péngyou.", meaning: "Anh ấy coi tôi là bạn tốt." },
        { hanzi: "我们把学校当成家。", pinyin: "Wǒmen bǎ xuéxiào dàngchéng jiā.", meaning: "Chúng tôi coi trường học như nhà." },
        { hanzi: "请不要把我的话当作玩笑。", pinyin: "Qǐng búyào bǎ wǒ de huà dàngzuò wánxiào.", meaning: "Xin đừng coi lời tôi nói là đùa." }
      ]
    }
  ],
  hsk5: [
    {
      id: "g5-1",
      title: "万一 (wànyī) - Lỡ, vạn nhất",
      structure: "万一 + Tình huống bất ngờ, (就) + Hậu quả/Phương án",
      explanation: "Biểu thị một tình huống bất lợi có XÁC SUẤT THẤP nhưng vẫn đáng đề phòng. Mạnh hơn 如果 (nếu) - mang sắc thái lo lắng, dự phòng. Đặt ở ĐẦU CÂU. Thường đi kèm 怎么办 (làm sao) hoặc 就 + giải pháp.",
      examples: [
        { hanzi: "万一下雨,我们就改天去。", pinyin: "Wànyī xiàyǔ, wǒmen jiù gǎitiān qù.", meaning: "Lỡ trời mưa, chúng ta đổi sang ngày khác." },
        { hanzi: "万一他不来怎么办?", pinyin: "Wànyī tā bù lái zěnme bàn?", meaning: "Lỡ anh ấy không đến thì làm sao?" },
        { hanzi: "带把伞吧,万一下雨呢。", pinyin: "Dài bǎ sǎn ba, wànyī xiàyǔ ne.", meaning: "Mang theo cái ô đi, lỡ mưa thì sao." }
      ]
    },
    {
      id: "g5-2",
      title: "宁可...也不... (thà...chứ không...)",
      structure: "宁可 + Phương án A + 也不 + Phương án B",
      explanation: "Biểu thị sự LỰA CHỌN ưu tiên A hơn B trong tình huống bất đắc dĩ. Khi cả hai phương án đều không lý tưởng, người nói chọn A vì A ít tệ hơn. Có thể thay 宁可 bằng 宁愿. Mang sắc thái QUYẾT ĐOÁN, kiên định.",
      examples: [
        { hanzi: "我宁可走路,也不坐他的车。", pinyin: "Wǒ nìngkě zǒulù, yě bú zuò tā de chē.", meaning: "Tôi thà đi bộ chứ không ngồi xe của anh ấy." },
        { hanzi: "他宁可饿着,也不吃这种食物。", pinyin: "Tā nìngkě è zhe, yě bù chī zhè zhǒng shíwù.", meaning: "Anh ấy thà nhịn đói chứ không ăn loại đồ ăn này." },
        { hanzi: "宁愿失败,也不放弃尝试。", pinyin: "Nìngyuàn shībài, yě bú fàngqì chángshì.", meaning: "Thà thất bại chứ không từ bỏ thử nghiệm." }
      ]
    },
    {
      id: "g5-3",
      title: "与其...不如... (thay vì...chi bằng...)",
      structure: "与其 + Phương án A, 不如 + Phương án B",
      explanation: "So sánh hai phương án và CHỌN PHƯƠNG ÁN B (sau 不如) là tốt hơn. Khác với 宁可...也不... (chọn A bất đắc dĩ), 与其...不如... mang nghĩa B THẬT SỰ TỐT HƠN A. Mang tính lời khuyên.",
      examples: [
        { hanzi: "与其等他,不如自己去。", pinyin: "Yǔqí děng tā, bùrú zìjǐ qù.", meaning: "Thay vì đợi anh ấy, chi bằng tự đi." },
        { hanzi: "与其抱怨,不如行动。", pinyin: "Yǔqí bàoyuàn, bùrú xíngdòng.", meaning: "Thay vì than phiền, chi bằng hành động." },
        { hanzi: "与其买新的,不如修理旧的。", pinyin: "Yǔqí mǎi xīn de, bùrú xiūlǐ jiù de.", meaning: "Thay vì mua mới, chi bằng sửa cái cũ." }
      ]
    },
    {
      id: "g5-4",
      title: "一旦...就... (một khi...là...)",
      structure: "一旦 + Sự kiện kích hoạt, (chủ ngữ) + 就 + Kết quả",
      explanation: "Biểu thị một khi điều kiện xảy ra thì kết quả LẬP TỨC theo sau, mang tính TẤT YẾU và KHÔNG THỂ ĐẢO NGƯỢC. Sự kiện sau 一旦 thường là điều có thể xảy ra trong tương lai. Khác với 一...就... (hai hành động liên tiếp đơn giản), 一旦 nhấn mạnh tính NGHIÊM TRỌNG/QUAN TRỌNG.",
      examples: [
        { hanzi: "一旦决定,就不要后悔。", pinyin: "Yídàn juédìng, jiù búyào hòuhuǐ.", meaning: "Một khi đã quyết định thì đừng hối hận." },
        { hanzi: "一旦失去,就再也找不回来了。", pinyin: "Yídàn shīqù, jiù zài yě zhǎo bù huílái le.", meaning: "Một khi đã mất thì không tìm lại được nữa." },
        { hanzi: "一旦养成习惯,就很难改变。", pinyin: "Yídàn yǎngchéng xíguàn, jiù hěn nán gǎibiàn.", meaning: "Một khi đã thành thói quen thì rất khó thay đổi." }
      ]
    },
    {
      id: "g5-5",
      title: "Cấu trúc 在...下 (dưới...)",
      structure: "在 + Cụm danh từ (sự giúp đỡ/lãnh đạo/tình huống) + 下, + Mệnh đề",
      explanation: "Cấu trúc cố định biểu thị ĐIỀU KIỆN/HOÀN CẢNH ảnh hưởng đến hành động. Cụm giữa 在 và 下 thường là: 帮助下 (sự giúp đỡ), 领导下 (lãnh đạo), 支持下 (hỗ trợ), 影响下 (ảnh hưởng), 情况下 (tình huống). Văn viết.",
      examples: [
        { hanzi: "在老师的帮助下,我考上了大学。", pinyin: "Zài lǎoshī de bāngzhù xià, wǒ kǎoshàng le dàxué.", meaning: "Dưới sự giúp đỡ của cô giáo, tôi đã đỗ đại học." },
        { hanzi: "在大家的努力下,问题解决了。", pinyin: "Zài dàjiā de nǔlì xià, wèntí jiějué le.", meaning: "Nhờ sự nỗ lực của mọi người, vấn đề đã được giải quyết." },
        { hanzi: "在这种情况下,我们必须谨慎。", pinyin: "Zài zhè zhǒng qíngkuàng xià, wǒmen bìxū jǐnshèn.", meaning: "Trong tình huống này, chúng ta phải thận trọng." }
      ]
    },
    {
      id: "g5-6",
      title: "对...来说 (đối với...mà nói)",
      structure: "对 + Đối tượng + 来说, + Quan điểm/Tình trạng",
      explanation: "Cấu trúc cố định để dẫn ra QUAN ĐIỂM/TÌNH TRẠNG từ góc nhìn của một đối tượng cụ thể. Đặt ở ĐẦU CÂU. Khác với 在...看来 (chỉ là quan điểm cá nhân), 对...来说 mở rộng cho cả tình trạng khách quan đối với đối tượng đó.",
      examples: [
        { hanzi: "对我来说,健康最重要。", pinyin: "Duì wǒ láishuō, jiànkāng zuì zhòngyào.", meaning: "Đối với tôi, sức khỏe là quan trọng nhất." },
        { hanzi: "对学生来说,考试压力很大。", pinyin: "Duì xuésheng láishuō, kǎoshì yālì hěn dà.", meaning: "Đối với học sinh, áp lực thi cử rất lớn." },
        { hanzi: "对外国人来说,汉字很难写。", pinyin: "Duì wàiguó rén láishuō, Hànzì hěn nán xiě.", meaning: "Đối với người nước ngoài, chữ Hán rất khó viết." }
      ]
    },
    {
      id: "g5-7",
      title: "Cấu trúc 是否 (yes/no - phải hay không)",
      structure: "Chủ ngữ + 是否 + Động từ/Tính từ",
      explanation: "Tương đương 'có ... không' / 'phải hay không phải' nhưng MANG SẮC THÁI VĂN VIẾT/TRANG TRỌNG. Thường dùng trong câu hỏi gián tiếp, báo cáo, văn bản chính thức. KHÔNG dùng 吗 ở cuối câu khi đã có 是否.",
      examples: [
        { hanzi: "他是否会来,我不清楚。", pinyin: "Tā shìfǒu huì lái, wǒ bù qīngchu.", meaning: "Anh ấy có đến hay không, tôi không rõ." },
        { hanzi: "请告诉我您是否同意。", pinyin: "Qǐng gàosu wǒ nín shìfǒu tóngyì.", meaning: "Vui lòng cho tôi biết ngài có đồng ý hay không." },
        { hanzi: "我们正在考虑是否接受这个建议。", pinyin: "Wǒmen zhèngzài kǎolǜ shìfǒu jiēshòu zhège jiànyì.", meaning: "Chúng tôi đang cân nhắc có nên chấp nhận đề nghị này không." }
      ]
    },
    {
      id: "g5-8",
      title: "Cấu trúc 不见得 (chưa chắc, không hẳn)",
      structure: "Chủ ngữ + 不见得 + Động từ/Tính từ",
      explanation: "Biểu thị sự PHẢN BÁC NHẸ NHÀNG, không đồng tình hoàn toàn. Tương đương 'chưa chắc', 'không hẳn'. Lịch sự hơn 不一定. Thường dùng để đáp lại quan điểm của người khác. Có thể đứng đầu câu hoặc giữa câu.",
      examples: [
        { hanzi: "贵的不见得就是好的。", pinyin: "Guì de bú jiànde jiùshì hǎo de.", meaning: "Đắt chưa chắc đã tốt." },
        { hanzi: "他说的不见得是真的。", pinyin: "Tā shuō de bú jiànde shì zhēn de.", meaning: "Điều anh ấy nói chưa chắc là thật." },
        { hanzi: "学得多不见得就学得好。", pinyin: "Xué de duō bú jiànde jiù xué de hǎo.", meaning: "Học nhiều chưa chắc đã học giỏi." }
      ]
    },
    {
      id: "g5-9",
      title: "宁愿...也要... (thà...cũng phải...)",
      structure: "宁愿 + Hy sinh + 也要 + Mục tiêu",
      explanation: "Biểu thị sự QUYẾT TÂM cao - sẵn sàng chịu hy sinh để đạt mục tiêu. Khác 宁可...也不... (tránh điều xấu hơn), 宁愿...也要... nhấn mạnh KHÁT VỌNG đạt được. Mang sắc thái mạnh mẽ, kiên định.",
      examples: [
        { hanzi: "我宁愿辛苦一点,也要把工作做好。", pinyin: "Wǒ nìngyuàn xīnkǔ yìdiǎn, yě yào bǎ gōngzuò zuò hǎo.", meaning: "Tôi thà vất vả một chút cũng phải làm tốt công việc." },
        { hanzi: "她宁愿不睡觉,也要把书看完。", pinyin: "Tā nìngyuàn bú shuìjiào, yě yào bǎ shū kàn wán.", meaning: "Cô ấy thà không ngủ cũng phải đọc xong sách." },
        { hanzi: "他宁愿放弃高薪,也要追求梦想。", pinyin: "Tā nìngyuàn fàngqì gāo xīn, yě yào zhuīqiú mèngxiǎng.", meaning: "Anh ấy thà bỏ lương cao cũng phải theo đuổi ước mơ." }
      ]
    },
    {
      id: "g5-10",
      title: "通过 (tōngguò) - Thông qua, qua",
      structure: "通过 + Phương tiện/Cách thức/Quá trình, + Mệnh đề kết quả",
      explanation: "Giới từ chỉ PHƯƠNG TIỆN/CÁCH THỨC để đạt được điều gì đó. Sau 通过 là cụm danh từ hoặc danh động từ. Khác với 用 (dùng vật cụ thể) hay 经过 (trải qua thời gian/quá trình), 通过 nhấn mạnh CƠ CHẾ/PHƯƠNG TIỆN.",
      examples: [
        { hanzi: "通过努力,他实现了梦想。", pinyin: "Tōngguò nǔlì, tā shíxiàn le mèngxiǎng.", meaning: "Thông qua nỗ lực, anh ấy đã thực hiện được ước mơ." },
        { hanzi: "我们通过网络保持联系。", pinyin: "Wǒmen tōngguò wǎngluò bǎochí liánxì.", meaning: "Chúng tôi giữ liên lạc qua mạng." },
        { hanzi: "通过这次经验,我学到了很多。", pinyin: "Tōngguò zhè cì jīngyàn, wǒ xuédào le hěn duō.", meaning: "Qua lần kinh nghiệm này, tôi đã học được nhiều." }
      ]
    },
    {
      id: "g5-11",
      title: "本来 (běnlái) - Vốn dĩ, lẽ ra",
      structure: "Chủ ngữ + 本来 + Mệnh đề (+ 但是/可是 + Tình hình thực tế)",
      explanation: "Biểu thị (1) Trạng thái BAN ĐẦU/VỐN DĨ; (2) Kế hoạch ban đầu nhưng KHÔNG xảy ra như dự kiến (có chuyển ý). Có thể đứng đầu câu hoặc giữa câu. Phân biệt với 原来 (mới nhận ra sự thật).",
      examples: [
        { hanzi: "我本来想去,但是太累了。", pinyin: "Wǒ běnlái xiǎng qù, dànshì tài lèi le.", meaning: "Tôi vốn dĩ muốn đi, nhưng mệt quá." },
        { hanzi: "她本来是老师,后来当了医生。", pinyin: "Tā běnlái shì lǎoshī, hòulái dāng le yīshēng.", meaning: "Cô ấy vốn là giáo viên, sau đó trở thành bác sĩ." },
        { hanzi: "本来这件事很简单。", pinyin: "Běnlái zhè jiàn shì hěn jiǎndān.", meaning: "Vốn dĩ việc này rất đơn giản." }
      ]
    },
    {
      id: "g5-12",
      title: "原来 (yuánlái) - Hóa ra, thì ra",
      structure: "原来 + Sự thật vừa nhận ra",
      explanation: "Biểu thị NHẬN RA SỰ THẬT đã tồn tại nhưng trước đó không biết. Mang sắc thái 'aha moment'. Khác 本来 (vốn là, trạng thái ban đầu), 原来 nhấn mạnh sự PHÁT HIỆN. Còn có nghĩa 'ban đầu, ngày trước'.",
      examples: [
        { hanzi: "原来你也在这里!", pinyin: "Yuánlái nǐ yě zài zhèlǐ!", meaning: "Hóa ra bạn cũng ở đây!" },
        { hanzi: "原来他是我的同学。", pinyin: "Yuánlái tā shì wǒ de tóngxué.", meaning: "Thì ra anh ấy là bạn cùng lớp của tôi." },
        { hanzi: "我原来住在北京。", pinyin: "Wǒ yuánlái zhù zài Běijīng.", meaning: "Trước đây tôi sống ở Bắc Kinh." }
      ]
    },
    {
      id: "g5-13",
      title: "幸亏 (xìngkuī) - May mà, may sao",
      structure: "幸亏 + Sự kiện may mắn, + Kết quả tốt",
      explanation: "Biểu thị sự MAY MẮN khi một điều kiện thuận lợi đã giúp tránh được hậu quả xấu. Đặt ĐẦU CÂU. Vế sau thường có 不然/否则 (nếu không thì). Tương đương 'may mà', 'may sao'.",
      examples: [
        { hanzi: "幸亏你帮忙,不然我就麻烦了。", pinyin: "Xìngkuī nǐ bāngmáng, bùrán wǒ jiù máfan le.", meaning: "May mà có bạn giúp, không thì tôi gặp rắc rối." },
        { hanzi: "幸亏带了伞,不然就被淋湿了。", pinyin: "Xìngkuī dài le sǎn, bùrán jiù bèi línshī le.", meaning: "May mà mang ô, không thì đã bị ướt." },
        { hanzi: "幸亏发现得早。", pinyin: "Xìngkuī fāxiàn de zǎo.", meaning: "May mà phát hiện sớm." }
      ]
    },
    {
      id: "g5-14",
      title: "Cấu trúc 不仅...而且... (không chỉ...mà còn...)",
      structure: "不仅 + Mệnh đề 1, 而且 + Mệnh đề 2",
      explanation: "Phiên bản TRANG TRỌNG/VĂN VIẾT của 不但...而且... Cấu trúc tăng tiến nhấn mạnh thêm thông tin ở vế thứ hai. Có thể thay 而且 bằng 还/也. Khi cùng chủ ngữ, 不仅 đặt SAU chủ ngữ; khi khác chủ ngữ, đặt TRƯỚC chủ ngữ.",
      examples: [
        { hanzi: "他不仅会说汉语,而且说得很流利。", pinyin: "Tā bùjǐn huì shuō Hànyǔ, érqiě shuō de hěn liúlì.", meaning: "Anh ấy không chỉ biết nói tiếng Trung mà còn nói rất lưu loát." },
        { hanzi: "这个产品不仅质量好,价格也合理。", pinyin: "Zhège chǎnpǐn bùjǐn zhìliàng hǎo, jiàgé yě hélǐ.", meaning: "Sản phẩm này không chỉ chất lượng tốt mà giá cũng hợp lý." },
        { hanzi: "不仅我去,我们全家都去。", pinyin: "Bùjǐn wǒ qù, wǒmen quán jiā dōu qù.", meaning: "Không chỉ tôi đi, cả nhà tôi đều đi." }
      ]
    },
    {
      id: "g5-15",
      title: "Phó từ 简直 (jiǎnzhí) - Đơn giản là, thật là",
      structure: "Chủ ngữ + 简直 + Tính từ/Mệnh đề (thường có 太...了 hoặc 不...)",
      explanation: "Biểu thị sự PHÓNG ĐẠI/CẢM THÁN mạnh mẽ - hoàn toàn đến mức không thể tin được. Tương đương 'thật là', 'đến nỗi'. Thường đi kèm với cấu trúc 太...了 hoặc cấu trúc phủ định mạnh. Mang sắc thái cảm xúc cao.",
      examples: [
        { hanzi: "这个消息简直太好了!", pinyin: "Zhège xiāoxi jiǎnzhí tài hǎo le!", meaning: "Tin này thật là tuyệt vời!" },
        { hanzi: "他简直不敢相信自己的耳朵。", pinyin: "Tā jiǎnzhí bù gǎn xiāngxìn zìjǐ de ěrduo.", meaning: "Anh ấy đơn giản là không dám tin vào tai mình." },
        { hanzi: "这道题简直太难了。", pinyin: "Zhè dào tí jiǎnzhí tài nán le.", meaning: "Bài này thật là quá khó." }
      ]
    },
    {
      id: "g5-16",
      title: "Cấu trúc 是...是... (cứ là... nhưng...)",
      structure: "Chủ ngữ + 是 + Tính từ/Động từ + 是 + Tính từ/Động từ + (但是/可是)",
      explanation: "Cấu trúc đặc biệt biểu thị NHƯỢNG BỘ - đồng ý điểm A nhưng có ý kiến khác. Tương đương 'X thì X đấy, nhưng...'. Phía sau thường có 但是/可是/不过. Mang sắc thái thừa nhận một phần nhưng còn ý phản biện.",
      examples: [
        { hanzi: "便宜是便宜,但是质量不好。", pinyin: "Piányi shì piányi, dànshì zhìliàng bù hǎo.", meaning: "Rẻ thì rẻ đấy, nhưng chất lượng không tốt." },
        { hanzi: "好看是好看,可是太贵了。", pinyin: "Hǎokàn shì hǎokàn, kěshì tài guì le.", meaning: "Đẹp thì đẹp đấy, nhưng đắt quá." },
        { hanzi: "去是想去,不过没时间。", pinyin: "Qù shì xiǎng qù, búguò méi shíjiān.", meaning: "Đi thì muốn đi, nhưng không có thời gian." }
      ]
    },
    {
      id: "g5-17",
      title: "Cấu trúc 难免 (khó tránh khỏi)",
      structure: "Chủ ngữ + 难免 + (会) + Sự việc tất yếu",
      explanation: "Biểu thị một sự việc TẤT YẾU/KHÔNG THỂ TRÁNH KHỎI dù không mong muốn. Sau 难免 thường là việc TIÊU CỰC nhẹ. Có thể thêm 会 sau 难免. Mang sắc thái chấp nhận thực tế.",
      examples: [
        { hanzi: "学外语难免会犯错误。", pinyin: "Xué wàiyǔ nánmiǎn huì fàn cuòwù.", meaning: "Học ngoại ngữ khó tránh khỏi mắc lỗi." },
        { hanzi: "刚开始工作,难免有些紧张。", pinyin: "Gāng kāishǐ gōngzuò, nánmiǎn yǒuxiē jǐnzhāng.", meaning: "Mới bắt đầu làm việc, khó tránh hơi căng thẳng." },
        { hanzi: "人和人之间难免会有矛盾。", pinyin: "Rén hé rén zhījiān nánmiǎn huì yǒu máodùn.", meaning: "Giữa người với người khó tránh có mâu thuẫn." }
      ]
    },
    {
      id: "g5-18",
      title: "Cấu trúc 看来 (xem ra, có vẻ)",
      structure: "看来, + Mệnh đề suy đoán",
      explanation: "Biểu thị sự SUY ĐOÁN dựa trên những gì quan sát được. Khác với 好像 (mơ hồ), 看来 dựa trên BẰNG CHỨNG cụ thể nên chắc chắn hơn. Đặt đầu câu hoặc sau chủ ngữ. Tương đương 'xem ra', 'có vẻ'.",
      examples: [
        { hanzi: "看来他不会来了。", pinyin: "Kànlái tā bú huì lái le.", meaning: "Xem ra anh ấy sẽ không đến." },
        { hanzi: "看来这件事不简单。", pinyin: "Kànlái zhè jiàn shì bù jiǎndān.", meaning: "Có vẻ việc này không đơn giản." },
        { hanzi: "看来我们得改变计划了。", pinyin: "Kànlái wǒmen děi gǎibiàn jìhuà le.", meaning: "Xem ra chúng ta phải thay đổi kế hoạch." }
      ]
    },
    {
      id: "g5-19",
      title: "Cấu trúc 算是 (suànshì) - Coi như, kể là",
      structure: "Chủ ngữ + 算是 + Đặc điểm/Phân loại",
      explanation: "Biểu thị sự PHÂN LOẠI/ĐÁNH GIÁ tương đối. Tương đương 'coi như là', 'có thể tính là'. Mang sắc thái khiêm tốn, không khẳng định tuyệt đối. Thường dùng để định vị ai/cái gì trong một nhóm.",
      examples: [
        { hanzi: "他算是我最好的朋友。", pinyin: "Tā suànshì wǒ zuì hǎo de péngyou.", meaning: "Anh ấy coi như bạn thân nhất của tôi." },
        { hanzi: "这算是一次成功的尝试。", pinyin: "Zhè suànshì yí cì chénggōng de chángshì.", meaning: "Đây kể là một lần thử nghiệm thành công." },
        { hanzi: "我的汉语算是不错的。", pinyin: "Wǒ de Hànyǔ suànshì búcuò de.", meaning: "Tiếng Trung của tôi coi như là khá." }
      ]
    },
    {
      id: "g5-20",
      title: "Trợ từ ngữ khí 罢了 (bàle) - Chỉ vậy thôi",
      structure: "Mệnh đề + 罢了 (有时 + 不过/只是 + Mệnh đề + 罢了)",
      explanation: "Trợ từ ngữ khí cuối câu mang nghĩa GIẢM NHẸ - chỉ là vậy thôi, không có gì đáng kể. Thường đi kèm 不过/只是/无非 ở đầu câu. Văn viết và văn nói lịch sự. Tương đương 'mà thôi'.",
      examples: [
        { hanzi: "我只是开个玩笑罢了。", pinyin: "Wǒ zhǐshì kāi gè wánxiào bàle.", meaning: "Tôi chỉ đùa thôi." },
        { hanzi: "他不过是说说罢了,别当真。", pinyin: "Tā búguò shì shuōshuo bàle, bié dàngzhēn.", meaning: "Anh ấy chỉ nói chơi thôi, đừng coi là thật." },
        { hanzi: "这只是一个建议罢了。", pinyin: "Zhè zhǐshì yí gè jiànyì bàle.", meaning: "Đây chỉ là một gợi ý thôi." }
      ]
    },
    {
      id: "g5-21",
      title: "Phó từ 居然 / 竟然 (jūrán/jìngrán) - Không ngờ, lại",
      structure: "Chủ ngữ + 居然/竟然 + Mệnh đề bất ngờ",
      explanation: "Biểu thị sự NGẠC NHIÊN cao độ về một điều bất ngờ, vượt ngoài dự đoán. 居然 nhấn mạnh sự kinh ngạc của người nói; 竟然 trang trọng hơn. Đặt SAU chủ ngữ và TRƯỚC động từ. Sự việc có thể tích cực hoặc tiêu cực.",
      examples: [
        { hanzi: "他居然把这件事忘了!", pinyin: "Tā jūrán bǎ zhè jiàn shì wàng le!", meaning: "Không ngờ anh ấy lại quên việc này!" },
        { hanzi: "她竟然一个人完成了所有工作。", pinyin: "Tā jìngrán yí gè rén wánchéng le suǒyǒu gōngzuò.", meaning: "Không ngờ cô ấy một mình hoàn thành tất cả công việc." },
        { hanzi: "这么简单的题,他竟然不会做。", pinyin: "Zhème jiǎndān de tí, tā jìngrán bú huì zuò.", meaning: "Bài đơn giản thế này mà anh ấy lại không làm được." }
      ]
    },
    {
      id: "g5-22",
      title: "毕竟 (bìjìng) - Suy cho cùng, dù sao",
      structure: "毕竟 + Lý do quan trọng (giải thích tại sao thông cảm)",
      explanation: "Biểu thị việc DẪN RA LÝ DO CƠ BẢN/QUAN TRỌNG để giải thích, thường đi với sự thông cảm. Khác 到底 (truy vấn), 毕竟 nhấn mạnh sự THẬT KHÁCH QUAN không thể bỏ qua. Đặt đầu câu hoặc sau chủ ngữ.",
      examples: [
        { hanzi: "孩子还小,毕竟不懂事。", pinyin: "Háizi hái xiǎo, bìjìng bù dǒngshì.", meaning: "Trẻ con còn nhỏ, dù sao cũng chưa hiểu chuyện." },
        { hanzi: "他毕竟是新来的,需要时间适应。", pinyin: "Tā bìjìng shì xīn lái de, xūyào shíjiān shìyìng.", meaning: "Anh ấy dù sao cũng mới đến, cần thời gian thích nghi." },
        { hanzi: "毕竟事实就是事实。", pinyin: "Bìjìng shìshí jiùshì shìshí.", meaning: "Suy cho cùng, sự thật vẫn là sự thật." }
      ]
    },
    {
      id: "g5-23",
      title: "Cấu trúc 经过 (jīngguò) - Trải qua",
      structure: "经过 + Cụm danh từ/Quá trình, + Kết quả",
      explanation: "Giới từ chỉ TRẢI QUA một quá trình/thời gian/sự kiện trước khi đạt kết quả. Sau 经过 thường là cụm chỉ thời gian dài hoặc nỗ lực. Khác 通过 (phương tiện/cách thức), 经过 nhấn mạnh THỜI GIAN/QUÁ TRÌNH trải qua.",
      examples: [
        { hanzi: "经过半年的努力,他通过了考试。", pinyin: "Jīngguò bànnián de nǔlì, tā tōngguò le kǎoshì.", meaning: "Trải qua nửa năm nỗ lực, anh ấy đã thi đỗ." },
        { hanzi: "经过讨论,我们做出了决定。", pinyin: "Jīngguò tǎolùn, wǒmen zuòchū le juédìng.", meaning: "Sau khi thảo luận, chúng tôi đã ra quyết định." },
        { hanzi: "经过这次失败,他变得更坚强了。", pinyin: "Jīngguò zhè cì shībài, tā biàn de gèng jiānqiáng le.", meaning: "Trải qua thất bại này, anh ấy trở nên kiên cường hơn." }
      ]
    },
    {
      id: "g5-24",
      title: "Cấu trúc 否则 / 不然 (nếu không thì)",
      structure: "Mệnh đề điều kiện, 否则/不然 + Hậu quả",
      explanation: "Liên từ chỉ HẬU QUẢ tiêu cực nếu không thực hiện điều kiện ở vế trước. 否则 trang trọng hơn (văn viết); 不然 thông tục hơn (văn nói). Tương đương 'nếu không thì'. Đứng đầu vế thứ hai.",
      examples: [
        { hanzi: "你要努力学习,否则会落后。", pinyin: "Nǐ yào nǔlì xuéxí, fǒuzé huì luòhòu.", meaning: "Bạn phải chăm chỉ học, nếu không sẽ tụt hậu." },
        { hanzi: "快点走,不然就迟到了。", pinyin: "Kuài diǎn zǒu, bùrán jiù chídào le.", meaning: "Đi nhanh lên, không thì sẽ muộn." },
        { hanzi: "记得带钥匙,否则进不了门。", pinyin: "Jìde dài yàoshi, fǒuzé jìn bù liǎo mén.", meaning: "Nhớ mang chìa khóa, nếu không thì không vào được cửa." }
      ]
    },
    {
      id: "g5-25",
      title: "Cấu trúc 似的 (shìde) - Giống như, tựa như",
      structure: "Cụm so sánh + 似的 (thường đi với 像/好像)",
      explanation: "Trợ từ kết thúc CỤM SO SÁNH, tương đương 'giống như', 'như là'. Thường đi với 像 hoặc 好像 ở đầu cụm. Đặt SAU đối tượng được so sánh. Có thể thay bằng 一样 nhưng 似的 mang tính ẩn dụ hơn.",
      examples: [
        { hanzi: "她笑得像花儿似的。", pinyin: "Tā xiào de xiàng huār shìde.", meaning: "Cô ấy cười như hoa." },
        { hanzi: "他高兴得像孩子似的。", pinyin: "Tā gāoxìng de xiàng háizi shìde.", meaning: "Anh ấy vui như đứa trẻ." },
        { hanzi: "天气热得像夏天似的。", pinyin: "Tiānqì rè de xiàng xiàtiān shìde.", meaning: "Thời tiết nóng như mùa hè." }
      ]
    },
    {
      id: "g5-26",
      title: "Cấu trúc 哪怕...也... (cho dù...cũng...)",
      structure: "哪怕 + Giả thiết cực đoan, + (Chủ ngữ) + 也 + Hành động",
      explanation: "Biểu thị nhượng bộ TRONG TÌNH HUỐNG CỰC ĐOAN/khó khăn nhất, kết quả vẫn không thay đổi. Mạnh hơn 即使...也... vì 哪怕 đặt giả thiết ở MỨC ĐỘ tối đa. Mang sắc thái QUYẾT TÂM cao độ.",
      examples: [
        { hanzi: "哪怕只有一线希望,我也不会放弃。", pinyin: "Nǎpà zhǐyǒu yíxiàn xīwàng, wǒ yě bú huì fàngqì.", meaning: "Cho dù chỉ có một tia hy vọng, tôi cũng không từ bỏ." },
        { hanzi: "哪怕走遍全世界,我也要找到你。", pinyin: "Nǎpà zǒubiàn quán shìjiè, wǒ yě yào zhǎodào nǐ.", meaning: "Cho dù đi khắp thế giới, tôi cũng phải tìm thấy em." },
        { hanzi: "哪怕再难,我们也要坚持下去。", pinyin: "Nǎpà zài nán, wǒmen yě yào jiānchí xiàqu.", meaning: "Cho dù khó đến đâu, chúng ta cũng phải kiên trì." }
      ]
    },
    {
      id: "g5-27",
      title: "Giới từ 凭 (píng) - Dựa vào, căn cứ vào",
      structure: "凭 + Cơ sở/Bằng chứng, + Mệnh đề",
      explanation: "Giới từ chỉ CƠ SỞ/CĂN CỨ để làm điều gì đó, tương đương 'dựa vào', 'căn cứ vào'. Có thể là khả năng, kinh nghiệm, bằng chứng, giấy tờ. Đặt ĐẦU CÂU hoặc trước động từ. Cũng có thể đứng độc lập trong câu hỏi: 凭什么 (dựa vào đâu).",
      examples: [
        { hanzi: "凭他的能力,一定能成功。", pinyin: "Píng tā de nénglì, yídìng néng chénggōng.", meaning: "Với năng lực của anh ấy, nhất định sẽ thành công." },
        { hanzi: "请凭票入场。", pinyin: "Qǐng píng piào rùchǎng.", meaning: "Xin xuất trình vé để vào." },
        { hanzi: "你凭什么这样说我?", pinyin: "Nǐ píng shénme zhèyàng shuō wǒ?", meaning: "Bạn dựa vào đâu nói tôi như vậy?" },
        { hanzi: "凭借多年的经验,他解决了问题。", pinyin: "Píngjiè duō nián de jīngyàn, tā jiějué le wèntí.", meaning: "Nhờ kinh nghiệm nhiều năm, anh ấy đã giải quyết được." }
      ]
    },
    {
      id: "g5-28",
      title: "Phó từ 索性 (suǒxìng) - Luôn thể, đành",
      structure: "Chủ ngữ + 索性 + Hành động quyết đoán",
      explanation: "Phó từ biểu thị QUYẾT ĐỊNH DỨT KHOÁT khi đối mặt với tình huống không thuận lợi - 'đã đến nước này thì làm luôn cho xong'. Tương đương 'luôn thể', 'đành', 'thôi thì'. Đặt SAU chủ ngữ và TRƯỚC động từ. Mang sắc thái thông tục.",
      examples: [
        { hanzi: "时间不多了,我索性不睡觉了。", pinyin: "Shíjiān bù duō le, wǒ suǒxìng bú shuìjiào le.", meaning: "Không còn nhiều thời gian, tôi đành không ngủ luôn." },
        { hanzi: "下雨了,索性在家看书吧。", pinyin: "Xiàyǔ le, suǒxìng zài jiā kàn shū ba.", meaning: "Trời mưa rồi, thôi thì ở nhà đọc sách vậy." },
        { hanzi: "既然来了,我索性玩个痛快。", pinyin: "Jìrán lái le, wǒ suǒxìng wán gè tòngkuai.", meaning: "Đã đến rồi, tôi chơi luôn cho thỏa thích." }
      ]
    },
    {
      id: "g5-29",
      title: "Cấu trúc 一来...二来... (một là...hai là...)",
      structure: "一来 + Lý do 1, 二来 + Lý do 2 (+ 三来 + Lý do 3)",
      explanation: "Cấu trúc liệt kê NHIỀU LÝ DO/MỤC ĐÍCH song song. Tương đương 'một là...hai là...'. Có thể mở rộng thành 三来, 四来. Mang sắc thái logic, dùng để giải thích nhiều khía cạnh cùng lúc. Phổ biến trong văn nói tự nhiên.",
      examples: [
        { hanzi: "我学汉语,一来为了工作,二来为了兴趣。", pinyin: "Wǒ xué Hànyǔ, yīlái wèile gōngzuò, èrlái wèile xìngqù.", meaning: "Tôi học tiếng Trung, một là vì công việc, hai là vì sở thích." },
        { hanzi: "去那里旅游,一来风景好,二来吃的便宜。", pinyin: "Qù nàlǐ lǚyóu, yīlái fēngjǐng hǎo, èrlái chī de piányi.", meaning: "Đi du lịch đó, một là cảnh đẹp, hai là đồ ăn rẻ." },
        { hanzi: "我没去,一来太累,二来没时间。", pinyin: "Wǒ méi qù, yīlái tài lèi, èrlái méi shíjiān.", meaning: "Tôi không đi, một là quá mệt, hai là không có thời gian." }
      ]
    },
    {
      id: "g5-30",
      title: "Liên từ 何况 (hékuàng) - Huống chi, huống hồ",
      structure: "Câu 1 (đã đủ mạnh)。何况 + Câu 2 (mức độ cao hơn)",
      explanation: "Liên từ tăng tiến mạnh, biểu thị 'việc A đã vậy, huống chi việc B (mạnh hơn)'. Đặt đầu vế thứ hai. Thường đi với 都 hoặc 也. Mang sắc thái VĂN VIẾT/TRANG TRỌNG. Khác với 而且 (bổ sung), 何况 nhấn mạnh sự BẤT KHẢ KHÁNG của lý lẽ.",
      examples: [
        { hanzi: "连我都不会,何况是孩子呢?", pinyin: "Lián wǒ dōu bú huì, hékuàng shì háizi ne?", meaning: "Đến tôi còn không biết, huống chi là đứa trẻ?" },
        { hanzi: "大人都受不了,何况是小孩?", pinyin: "Dàrén dōu shòu bù liǎo, hékuàng shì xiǎohái?", meaning: "Người lớn còn chịu không nổi, huống chi trẻ con?" },
        { hanzi: "他汉语很好,更何况是中国人。", pinyin: "Tā Hànyǔ hěn hǎo, gèng hékuàng shì Zhōngguó rén.", meaning: "Tiếng Trung của anh ấy giỏi, huống chi là người Trung Quốc." }
      ]
    }
  ],
  hsk6: [
    {
      id: "g6-1",
      title: "凡是...都... (phàm là...đều...)",
      structure: "凡是 + Đối tượng/Tình huống + 都 + Mệnh đề",
      explanation: "Cấu trúc TUYỆT ĐỐI HÓA - không có ngoại lệ. Sau 凡是 là phạm vi/tiêu chí, sau 都 là tính chất/quy tắc áp dụng cho TẤT CẢ. Mang sắc thái khẳng định mạnh, văn viết. Không thể bỏ 都/全部. Tương đương 'phàm là', 'hễ là'.",
      examples: [
        { hanzi: "凡是来过这里的人,都说好。", pinyin: "Fánshì lái guo zhèlǐ de rén, dōu shuō hǎo.", meaning: "Phàm là người đã đến đây, đều khen tốt." },
        { hanzi: "凡是有困难,都可以找我。", pinyin: "Fánshì yǒu kùnnan, dōu kěyǐ zhǎo wǒ.", meaning: "Hễ có khó khăn, đều có thể tìm tôi." },
        { hanzi: "凡是值得做的事,都值得做好。", pinyin: "Fánshì zhídé zuò de shì, dōu zhídé zuò hǎo.", meaning: "Phàm là việc đáng làm, đều đáng làm cho tốt." }
      ]
    },
    {
      id: "g6-2",
      title: "向来 / 从来 (xưa nay, từ trước đến giờ)",
      structure: "Chủ ngữ + 向来/从来 + (不/没) + Động từ/Tính từ",
      explanation: "Phó từ chỉ sự VIỆC KÉO DÀI từ quá khứ đến hiện tại không thay đổi. 向来 thường đi với câu KHẲNG ĐỊNH (xưa nay vẫn vậy); 从来 thường đi với câu PHỦ ĐỊNH 不/没 (từ trước đến giờ chưa từng). Đặt sau chủ ngữ, trước động từ.",
      examples: [
        { hanzi: "他向来很认真。", pinyin: "Tā xiànglái hěn rènzhēn.", meaning: "Anh ấy xưa nay rất nghiêm túc." },
        { hanzi: "我从来没去过那里。", pinyin: "Wǒ cónglái méi qù guo nàlǐ.", meaning: "Tôi chưa từng đến đó bao giờ." },
        { hanzi: "她从来不撒谎。", pinyin: "Tā cónglái bù sāhuǎng.", meaning: "Cô ấy chưa bao giờ nói dối." }
      ]
    },
    {
      id: "g6-3",
      title: "Liên từ 而 (ér) - Mà, nhưng, và",
      structure: "Vế A + 而 + Vế B (đối lập/tăng tiến/song song)",
      explanation: "Liên từ VĂN NGÔN/TRANG TRỌNG có nhiều ý nghĩa: (1) Đối lập nhẹ - nhưng; (2) Tiếp nối - và; (3) Tăng tiến - rồi còn. Đặt giữa hai vế, KHÔNG đứng đầu vế. Thường dùng trong văn viết, báo chí, văn học.",
      examples: [
        { hanzi: "他聪明而勤奋。", pinyin: "Tā cōngming ér qínfèn.", meaning: "Anh ấy thông minh và cần cù." },
        { hanzi: "工作虽多而不忙。", pinyin: "Gōngzuò suī duō ér bù máng.", meaning: "Công việc tuy nhiều nhưng không bận." },
        { hanzi: "为人民利益而奋斗。", pinyin: "Wèi rénmín lìyì ér fèndòu.", meaning: "Phấn đấu vì lợi ích của nhân dân." }
      ]
    },
    {
      id: "g6-4",
      title: "Liên từ 反而 (fǎn'ér) - Trái lại, ngược lại",
      structure: "Câu 1 (kỳ vọng A), 反而 + Vế ngược với kỳ vọng",
      explanation: "Biểu thị KẾT QUẢ NGƯỢC với mong đợi/dự đoán. Khác với 但是 (chỉ chuyển ý thông thường), 反而 nhấn mạnh sự BẤT NGỜ TRÁI CHIỀU. Thường đi với 不但不/不但没 ở vế trước. Đứng sau chủ ngữ vế hai.",
      examples: [
        { hanzi: "下雨后,天气反而更热了。", pinyin: "Xiàyǔ hòu, tiānqì fǎn'ér gèng rè le.", meaning: "Sau khi mưa, thời tiết trái lại còn nóng hơn." },
        { hanzi: "他不但没生气,反而笑了。", pinyin: "Tā búdàn méi shēngqì, fǎn'ér xiào le.", meaning: "Anh ấy không những không giận mà ngược lại còn cười." },
        { hanzi: "运动后我反而觉得有精神。", pinyin: "Yùndòng hòu wǒ fǎn'ér juéde yǒu jīngshen.", meaning: "Sau khi tập thể dục, tôi trái lại thấy có tinh thần hơn." }
      ]
    },
    {
      id: "g6-5",
      title: "况且 (kuàngqiě) - Hơn nữa, vả lại",
      structure: "Lý do 1, 况且 + Lý do bổ sung mạnh hơn",
      explanation: "Liên từ DẪN RA LÝ DO BỔ SUNG để củng cố quan điểm đã nêu. Khác 而且 (tăng tiến trung tính), 况且 nhấn mạnh lý do MỚI mạnh hơn nữa. Văn viết. Thường ở đầu vế bổ sung.",
      examples: [
        { hanzi: "时间太晚了,况且我也累了。", pinyin: "Shíjiān tài wǎn le, kuàngqiě wǒ yě lèi le.", meaning: "Thời gian muộn rồi, hơn nữa tôi cũng mệt rồi." },
        { hanzi: "这本书很贵,况且我已经有了。", pinyin: "Zhè běn shū hěn guì, kuàngqiě wǒ yǐjīng yǒu le.", meaning: "Sách này đắt, vả lại tôi đã có rồi." },
        { hanzi: "工作辛苦,况且收入也不高。", pinyin: "Gōngzuò xīnkǔ, kuàngqiě shōurù yě bù gāo.", meaning: "Công việc vất vả, hơn nữa thu nhập cũng không cao." }
      ]
    },
    {
      id: "g6-6",
      title: "Cấu trúc 至于 (zhìyú) nâng cao",
      structure: "至于 + (说) + Mệnh đề khuếch đại / phủ định",
      explanation: "Ngoài nghĩa 'còn về phần' (HSK 4), 至于 ở HSK 6 mang thêm nghĩa MỨC ĐỘ - thường trong câu phủ định 'không đến nỗi'. Cấu trúc 不至于 = không đến mức như vậy. Diễn tả người nói cho rằng tình hình KHÔNG NGHIÊM TRỌNG đến vậy.",
      examples: [
        { hanzi: "他不至于这么生气吧?", pinyin: "Tā bú zhìyú zhème shēngqì ba?", meaning: "Anh ấy không đến mức tức giận thế chứ?" },
        { hanzi: "事情还不至于那么糟糕。", pinyin: "Shìqing hái bú zhìyú nàme zāogāo.", meaning: "Tình hình chưa đến mức tệ như vậy." },
        { hanzi: "至于失败,我倒不害怕。", pinyin: "Zhìyú shībài, wǒ dào bú hàipà.", meaning: "Còn về thất bại, tôi không sợ." }
      ]
    },
    {
      id: "g6-7",
      title: "Cấu trúc 以...为... (lấy...làm...)",
      structure: "以 + A + 为 + B",
      explanation: "Cấu trúc văn ngôn cố định mang nghĩa 'lấy A làm B' / 'coi A là B'. A là phương tiện/đối tượng, B là vai trò/chức năng. Thường dùng trong văn viết, các cụm cố định: 以...为主 (lấy...làm chính), 以...为荣 (lấy...làm vinh), 以...为例 (lấy...làm ví dụ).",
      examples: [
        { hanzi: "这家公司以科技为主。", pinyin: "Zhè jiā gōngsī yǐ kējì wéi zhǔ.", meaning: "Công ty này lấy công nghệ làm chính." },
        { hanzi: "我们应以努力为荣。", pinyin: "Wǒmen yīng yǐ nǔlì wéi róng.", meaning: "Chúng ta nên lấy sự nỗ lực làm vinh dự." },
        { hanzi: "以中国为例,经济发展很快。", pinyin: "Yǐ Zhōngguó wéi lì, jīngjì fāzhǎn hěn kuài.", meaning: "Lấy Trung Quốc làm ví dụ, kinh tế phát triển rất nhanh." }
      ]
    },
    {
      id: "g6-8",
      title: "Cấu trúc 不得不 (không thể không)",
      structure: "Chủ ngữ + 不得不 + Động từ",
      explanation: "Phủ định kép tạo nghĩa khẳng định MẠNH MẼ về sự BẮT BUỘC. Diễn tả việc làm vì hoàn cảnh ép buộc, không có lựa chọn khác. Mang sắc thái BẤT ĐẮC DĨ. Khác với 必须 (phải làm chủ động), 不得不 nhấn mạnh sự ÉP BUỘC từ ngoại cảnh.",
      examples: [
        { hanzi: "因为下雨,我们不得不取消活动。", pinyin: "Yīnwèi xiàyǔ, wǒmen bùdébù qǔxiāo huódòng.", meaning: "Vì trời mưa, chúng tôi không thể không hủy hoạt động." },
        { hanzi: "他不得不接受这个事实。", pinyin: "Tā bùdébù jiēshòu zhège shìshí.", meaning: "Anh ấy không thể không chấp nhận sự thật này." },
        { hanzi: "为了生活,他不得不努力工作。", pinyin: "Wèile shēnghuó, tā bùdébù nǔlì gōngzuò.", meaning: "Vì cuộc sống, anh ấy buộc phải chăm chỉ làm việc." }
      ]
    },
    {
      id: "g6-9",
      title: "Cấu trúc 以便 / 以免 (để tiện / để tránh)",
      structure: "Mệnh đề 1, 以便 / 以免 + Mục đích",
      explanation: "Liên từ chỉ MỤC ĐÍCH ở vế sau. 以便 = để tiện, để có thể (mục đích tích cực); 以免 = để tránh, kẻo (mục đích tiêu cực). Văn viết, trang trọng. Đứng đầu vế thứ hai.",
      examples: [
        { hanzi: "请提前告诉我,以便我做准备。", pinyin: "Qǐng tíqián gàosu wǒ, yǐbiàn wǒ zuò zhǔnbèi.", meaning: "Xin báo trước cho tôi, để tôi tiện chuẩn bị." },
        { hanzi: "早点出发,以免迟到。", pinyin: "Zǎo diǎn chūfā, yǐmiǎn chídào.", meaning: "Đi sớm chút, kẻo bị muộn." },
        { hanzi: "记下电话号码,以便联系。", pinyin: "Jì xià diànhuà hàomǎ, yǐbiàn liánxì.", meaning: "Ghi lại số điện thoại để tiện liên lạc." }
      ]
    },
    {
      id: "g6-10",
      title: "Cấu trúc 鉴于 (jiànyú) - Xét thấy, do",
      structure: "鉴于 + Tình hình/Lý do, + Quyết định/Hành động",
      explanation: "Liên từ trang trọng dùng dẫn ra LÝ DO/CĂN CỨ trước khi đưa ra kết luận, quyết định. Văn viết chính thức (báo chí, công văn). Đứng đầu câu. Tương đương 'xét thấy', 'căn cứ vào'.",
      examples: [
        { hanzi: "鉴于天气不好,会议推迟了。", pinyin: "Jiànyú tiānqì bù hǎo, huìyì tuīchí le.", meaning: "Xét thấy thời tiết xấu, cuộc họp bị hoãn." },
        { hanzi: "鉴于他的贡献,我们决定奖励他。", pinyin: "Jiànyú tā de gòngxiàn, wǒmen juédìng jiǎnglì tā.", meaning: "Xét đến đóng góp của anh ấy, chúng tôi quyết định khen thưởng." },
        { hanzi: "鉴于以上理由,我同意这个方案。", pinyin: "Jiànyú yǐshàng lǐyóu, wǒ tóngyì zhège fāng'àn.", meaning: "Căn cứ vào những lý do trên, tôi đồng ý với phương án này." }
      ]
    },
    {
      id: "g6-11",
      title: "Cấu trúc 总而言之 (zǒng'éryánzhī) - Tóm lại",
      structure: "总而言之 / 总之, + Kết luận tổng quát",
      explanation: "Cụm từ TỔNG KẾT sau khi đã trình bày nhiều ý. 总而言之 trang trọng (văn viết); 总之 thông dụng hơn. Đứng đầu câu kết luận. Có thể dùng các biến thể: 总的来说, 综上所述.",
      examples: [
        { hanzi: "总而言之,这是一次成功的会议。", pinyin: "Zǒng'éryánzhī, zhè shì yí cì chénggōng de huìyì.", meaning: "Tóm lại, đây là một cuộc họp thành công." },
        { hanzi: "总之,我们要团结一致。", pinyin: "Zǒngzhī, wǒmen yào tuánjié yízhì.", meaning: "Tóm lại, chúng ta phải đoàn kết nhất trí." },
        { hanzi: "总的来说,这个项目进展顺利。", pinyin: "Zǒng de láishuō, zhège xiàngmù jìnzhǎn shùnlì.", meaning: "Nhìn chung, dự án này tiến triển thuận lợi." }
      ]
    },
    {
      id: "g6-12",
      title: "Cấu trúc 何尝 (hécháng) - Nào có, đâu phải",
      structure: "Chủ ngữ + 何尝 + (不) + Động từ/Tính từ",
      explanation: "Phó từ VĂN NGÔN dùng trong CÂU HỎI TU TỪ để KHẲNG ĐỊNH mạnh ngược lại. 何尝不... = chính là... rồi (khẳng định mạnh). Tương đương 'nào phải không', 'làm gì có chuyện không...'. Mang sắc thái cảm xúc.",
      examples: [
        { hanzi: "我何尝不想去呢?", pinyin: "Wǒ hécháng bù xiǎng qù ne?", meaning: "Tôi nào phải không muốn đi đâu? (= Tôi rất muốn đi)" },
        { hanzi: "他何尝不知道这件事?", pinyin: "Tā hécháng bù zhīdào zhè jiàn shì?", meaning: "Anh ấy nào phải không biết việc này? (= Anh ấy biết rõ)" },
        { hanzi: "我何尝忘记过你?", pinyin: "Wǒ hécháng wàngjì guo nǐ?", meaning: "Tôi nào có quên em? (= Chưa từng quên)" }
      ]
    },
    {
      id: "g6-13",
      title: "Cấu trúc 莫非 (mòfēi) - Lẽ nào, chẳng lẽ",
      structure: "莫非 + Mệnh đề suy đoán + (不成?)",
      explanation: "Phó từ VĂN NGÔN diễn tả SUY ĐOÁN có chút bất ngờ/lo lắng. Tương đương 'lẽ nào', 'chẳng lẽ'. Đứng đầu câu. Đôi khi đi kèm 不成 ở cuối câu để nhấn mạnh thêm. Sắc thái: nửa hỏi nửa khẳng định.",
      examples: [
        { hanzi: "莫非他生病了?", pinyin: "Mòfēi tā shēngbìng le?", meaning: "Lẽ nào anh ấy bị ốm rồi?" },
        { hanzi: "莫非你不想去?", pinyin: "Mòfēi nǐ bù xiǎng qù?", meaning: "Chẳng lẽ bạn không muốn đi?" },
        { hanzi: "这么晚还不来,莫非出了什么事?", pinyin: "Zhème wǎn hái bù lái, mòfēi chū le shénme shì?", meaning: "Muộn thế này còn chưa đến, lẽ nào có chuyện gì?" }
      ]
    },
    {
      id: "g6-14",
      title: "Cấu trúc 总算 (zǒngsuàn) - Cuối cùng cũng",
      structure: "Chủ ngữ + 总算 + Mệnh đề + (了)",
      explanation: "Phó từ biểu thị một điều mong đợi LÂU CUỐI CÙNG cũng đạt được, kèm sự nhẹ nhõm/thỏa mãn. Khác 终于 (trung tính), 总算 mang thêm cảm xúc CHỦ QUAN sau gian truân. Đặt sau chủ ngữ, trước động từ.",
      examples: [
        { hanzi: "我总算明白了。", pinyin: "Wǒ zǒngsuàn míngbai le.", meaning: "Cuối cùng tôi cũng hiểu rồi." },
        { hanzi: "经过努力,他总算成功了。", pinyin: "Jīngguò nǔlì, tā zǒngsuàn chénggōng le.", meaning: "Sau bao cố gắng, cuối cùng anh ấy cũng thành công." },
        { hanzi: "他总算肯说话了。", pinyin: "Tā zǒngsuàn kěn shuōhuà le.", meaning: "Cuối cùng anh ấy cũng chịu nói." }
      ]
    },
    {
      id: "g6-15",
      title: "Cấu trúc 不料 (búliào) - Không ngờ",
      structure: "Câu 1, 不料 + Sự việc bất ngờ",
      explanation: "Liên từ chỉ TÌNH HUỐNG XẢY RA NGOÀI DỰ ĐOÁN. Khác 没想到 (thông tục), 不料 trang trọng hơn (văn viết). Vế trước thường là dự định/kỳ vọng, vế sau là kết quả ngoài ý muốn. Đứng đầu vế thứ hai.",
      examples: [
        { hanzi: "我准备出门,不料下起了大雨。", pinyin: "Wǒ zhǔnbèi chūmén, búliào xià qǐ le dàyǔ.", meaning: "Tôi định ra ngoài, không ngờ trời mưa to." },
        { hanzi: "本以为他会拒绝,不料他同意了。", pinyin: "Běn yǐwéi tā huì jùjué, búliào tā tóngyì le.", meaning: "Vốn tưởng anh ấy sẽ từ chối, không ngờ lại đồng ý." },
        { hanzi: "我去找他,不料他出门了。", pinyin: "Wǒ qù zhǎo tā, búliào tā chūmén le.", meaning: "Tôi đến tìm anh ấy, không ngờ anh ấy ra ngoài rồi." }
      ]
    },
    {
      id: "g6-16",
      title: "Cấu trúc 倒 (dào) - Trái lại, ngược lại (nhẹ)",
      structure: "Chủ ngữ + 倒 + Tính từ/Mệnh đề (ngược với mong đợi)",
      explanation: "Phó từ chỉ điều TRÁI VỚI DỰ ĐOÁN một cách NHẸ NHÀNG. Khác 反而 (mạnh, trái chiều rõ rệt), 倒 mang sắc thái nhẹ, đôi khi mỉa mai nhẹ. Đặt sau chủ ngữ, trước động từ. Còn dùng để nhượng bộ tạm thời: 倒是.",
      examples: [
        { hanzi: "你说得倒容易,做起来很难。", pinyin: "Nǐ shuō de dào róngyì, zuò qǐlái hěn nán.", meaning: "Bạn nói thì dễ, làm thì khó." },
        { hanzi: "这件衣服倒不贵。", pinyin: "Zhè jiàn yīfu dào bú guì.", meaning: "Cái áo này hóa ra không đắt." },
        { hanzi: "他倒是很热心。", pinyin: "Tā dàoshì hěn rèxīn.", meaning: "Anh ấy thì rất nhiệt tình (so với mong đợi)." }
      ]
    },
    {
      id: "g6-17",
      title: "Cấu trúc 偏偏 (piānpiān) - Lại cứ, không hiểu sao lại",
      structure: "Chủ ngữ + 偏偏 + Mệnh đề (ngoài ý muốn / cố ý làm khác)",
      explanation: "Phó từ biểu thị (1) sự việc XẢY RA NGÓ ÝI MUỐN của người nói; (2) ai đó CỐ Ý làm khác. Mang sắc thái BỰC BỘI/KHÓ CHỊU. Đặt sau chủ ngữ. Khác 居然 (kinh ngạc trung tính), 偏偏 mang cảm xúc tiêu cực.",
      examples: [
        { hanzi: "我想休息,他偏偏要我去工作。", pinyin: "Wǒ xiǎng xiūxi, tā piānpiān yào wǒ qù gōngzuò.", meaning: "Tôi muốn nghỉ ngơi, anh ấy lại cứ bắt tôi đi làm." },
        { hanzi: "我急着出门,偏偏下起了雨。", pinyin: "Wǒ jí zhe chūmén, piānpiān xià qǐ le yǔ.", meaning: "Tôi đang vội ra ngoài, không hiểu sao lại đổ mưa." },
        { hanzi: "大家都同意,偏偏他反对。", pinyin: "Dàjiā dōu tóngyì, piānpiān tā fǎnduì.", meaning: "Mọi người đều đồng ý, mỗi anh ấy lại phản đối." }
      ]
    },
    {
      id: "g6-18",
      title: "Cấu trúc 与...有关 / 无关 (có/không liên quan)",
      structure: "A + 与/和/跟 + B + 有关 / 无关",
      explanation: "Cấu trúc cố định biểu thị MỐI LIÊN HỆ giữa hai sự vật. Có thể thay 与 bằng 和/跟 (thông tục). Trong văn viết thường dùng 与. Có thể thêm phó từ mức độ: 密切相关 (liên quan mật thiết), 毫无关系 (không có quan hệ gì).",
      examples: [
        { hanzi: "这件事与我无关。", pinyin: "Zhè jiàn shì yǔ wǒ wúguān.", meaning: "Việc này không liên quan đến tôi." },
        { hanzi: "健康与饮食有关。", pinyin: "Jiànkāng yǔ yǐnshí yǒuguān.", meaning: "Sức khỏe có liên quan đến chế độ ăn." },
        { hanzi: "他的成功与努力密切相关。", pinyin: "Tā de chénggōng yǔ nǔlì mìqiè xiāngguān.", meaning: "Thành công của anh ấy liên quan mật thiết đến nỗ lực." }
      ]
    },
    {
      id: "g6-19",
      title: "Cấu trúc 一来...二来... (thứ nhất...thứ hai...)",
      structure: "一来 + Lý do 1, 二来 + Lý do 2 (+ 三来...)",
      explanation: "Cấu trúc liệt kê NHIỀU LÝ DO cùng dẫn đến một kết luận. Nhấn mạnh việc cân nhắc đa chiều trước khi đưa ra quyết định. Văn viết và văn nói trang trọng. Có thể mở rộng đến 三来.",
      examples: [
        { hanzi: "我不想去,一来太远,二来太贵。", pinyin: "Wǒ bù xiǎng qù, yīlái tài yuǎn, èrlái tài guì.", meaning: "Tôi không muốn đi, thứ nhất quá xa, thứ hai quá đắt." },
        { hanzi: "学汉语,一来兴趣,二来工作需要。", pinyin: "Xué Hànyǔ, yīlái xìngqù, èrlái gōngzuò xūyào.", meaning: "Học tiếng Trung, một là vì sở thích, hai là vì công việc cần." },
        { hanzi: "搬家,一来房子小,二来交通不便。", pinyin: "Bānjiā, yīlái fángzi xiǎo, èrlái jiāotōng bú biàn.", meaning: "Chuyển nhà, một là nhà chật, hai là giao thông bất tiện." }
      ]
    },
    {
      id: "g6-20",
      title: "Cấu trúc 索性 (suǒxìng) - Cứ thế, dứt khoát",
      structure: "Chủ ngữ + 索性 + Hành động dứt khoát",
      explanation: "Phó từ biểu thị quyết định DỨT KHOÁT/CỰC ĐOAN sau khi đã cân nhắc. Tương đương 'cứ thế', 'thôi thì'. Mang sắc thái: vì tình hình đã vậy, quyết định đi đến cùng. Tương tự 干脆 nhưng 索性 mang tính cảm xúc hơn.",
      examples: [
        { hanzi: "既然不能睡了,索性起来工作。", pinyin: "Jìrán bùnéng shuì le, suǒxìng qǐlái gōngzuò.", meaning: "Đã không ngủ được, thôi thì dậy làm việc." },
        { hanzi: "天气太热,索性把空调打开。", pinyin: "Tiānqì tài rè, suǒxìng bǎ kōngtiáo dǎkāi.", meaning: "Trời nóng quá, dứt khoát bật điều hòa lên." },
        { hanzi: "等不到他,我索性走了。", pinyin: "Děng bú dào tā, wǒ suǒxìng zǒu le.", meaning: "Không đợi được anh ấy, tôi cứ thế đi luôn." }
      ]
    },
    {
      id: "g6-21",
      title: "Cấu trúc 难道 (nándào) - Chẳng lẽ, lẽ nào",
      structure: "难道 + Mệnh đề + (吗/不成)?",
      explanation: "Phó từ NHẤN MẠNH SỰ NGẠC NHIÊN/PHẢN ĐỐI trong câu hỏi tu từ. Câu hỏi có 难道 không cần trả lời - tự thân nó đã là KHẲNG ĐỊNH NGƯỢC LẠI. Có thể đi kèm 吗 ở cuối hoặc 不成 (cổ điển). Đứng đầu câu hoặc sau chủ ngữ.",
      examples: [
        { hanzi: "难道你不知道吗?", pinyin: "Nándào nǐ bù zhīdào ma?", meaning: "Chẳng lẽ bạn không biết sao? (= Bạn phải biết)" },
        { hanzi: "难道这就是真相?", pinyin: "Nándào zhè jiùshì zhēnxiàng?", meaning: "Lẽ nào đây là sự thật?" },
        { hanzi: "我难道还能骗你不成?", pinyin: "Wǒ nándào hái néng piàn nǐ bùchéng?", meaning: "Lẽ nào tôi còn lừa bạn được sao?" }
      ]
    },
    {
      id: "g6-22",
      title: "Cấu trúc 何况 (hékuàng) - Huống hồ, huống chi",
      structure: "Lập luận 1, 何况 + Lập luận mạnh hơn nữa",
      explanation: "Liên từ TĂNG TIẾN MẠNH - đưa ra trường hợp cực đoan hơn để củng cố lý lẽ. Tương đương 'huống hồ', 'huống chi'. Vế đầu thường có 连...都/也. Mang sắc thái suy luận từ A đến A+, mạnh hơn 而且.",
      examples: [
        { hanzi: "连他都不会,何况我呢?", pinyin: "Lián tā dōu bú huì, hékuàng wǒ ne?", meaning: "Đến anh ấy còn không biết, huống chi là tôi?" },
        { hanzi: "大人都觉得难,何况是孩子。", pinyin: "Dàrén dōu juéde nán, hékuàng shì háizi.", meaning: "Người lớn còn thấy khó, huống chi là trẻ con." },
        { hanzi: "这话连朋友都不能说,何况是陌生人。", pinyin: "Zhè huà lián péngyou dōu bùnéng shuō, hékuàng shì mòshēng rén.", meaning: "Lời này đến bạn còn không thể nói, huống chi với người lạ." }
      ]
    },
    {
      id: "g6-23",
      title: "Cấu trúc 不免 (bùmiǎn) - Không khỏi, không tránh được",
      structure: "Chủ ngữ + 不免 + Cảm xúc/Phản ứng tự nhiên",
      explanation: "Phó từ chỉ phản ứng/cảm xúc TỰ NHIÊN, không thể tránh khỏi trong tình huống nào đó. Khác 难免 (sự việc khó tránh khỏi nói chung), 不免 nhấn mạnh CẢM XÚC chủ quan tất yếu. Sắc thái nhẹ nhàng hơn 必然.",
      examples: [
        { hanzi: "听到这个消息,他不免有些失望。", pinyin: "Tīng dào zhège xiāoxi, tā bùmiǎn yǒuxiē shīwàng.", meaning: "Nghe tin này, anh ấy không khỏi có chút thất vọng." },
        { hanzi: "看到这种情况,我不免担心起来。", pinyin: "Kàn dào zhè zhǒng qíngkuàng, wǒ bùmiǎn dānxīn qǐlái.", meaning: "Thấy tình huống này, tôi không khỏi lo lắng." },
        { hanzi: "第一次见面,大家不免有些紧张。", pinyin: "Dì yī cì jiànmiàn, dàjiā bùmiǎn yǒuxiē jǐnzhāng.", meaning: "Lần đầu gặp mặt, mọi người không khỏi căng thẳng." }
      ]
    },
    {
      id: "g6-24",
      title: "Cấu trúc 一...而... (vừa...đã...)",
      structure: "Chủ ngữ + 一 + Động từ A + 而 + Động từ B",
      explanation: "Cấu trúc văn ngôn cho thấy hai hành động xảy ra GẦN NHAU và liên quan logic. Tương đương 'vừa A đã B'. Văn viết, mang tính trang trọng. Phổ biến trong các cụm cố định: 一目了然, 一举两得, 一蹴而就 (làm xong ngay tức khắc).",
      examples: [
        { hanzi: "他一看就明白了。", pinyin: "Tā yí kàn jiù míngbai le.", meaning: "Anh ấy vừa nhìn đã hiểu." },
        { hanzi: "成功不可能一蹴而就。", pinyin: "Chénggōng bù kěnéng yí cù ér jiù.", meaning: "Thành công không thể đạt được trong chốc lát." },
        { hanzi: "这件事一目了然。", pinyin: "Zhè jiàn shì yí mù liǎo rán.", meaning: "Việc này nhìn là biết ngay." }
      ]
    },
    {
      id: "g6-25",
      title: "Trợ từ ngữ khí 嘛 (ma) - Mà",
      structure: "Mệnh đề + 嘛 (cuối câu)",
      explanation: "Trợ từ ngữ khí có nhiều chức năng: (1) Khẳng định điều rõ ràng - 'mà'; (2) Nhắc nhở nhẹ nhàng; (3) Yêu cầu/đề nghị (làm dịu giọng). KHÔNG dùng trong văn viết trang trọng. Mang tính KHẨU NGỮ thân mật. Phân biệt với 吗 (câu hỏi).",
      examples: [
        { hanzi: "你说就说嘛。", pinyin: "Nǐ shuō jiù shuō ma.", meaning: "Bạn nói thì nói đi mà." },
        { hanzi: "这不是很简单嘛!", pinyin: "Zhè bú shì hěn jiǎndān ma!", meaning: "Cái này đơn giản mà!" },
        { hanzi: "有问题就提出来嘛。", pinyin: "Yǒu wèntí jiù tí chūlái ma.", meaning: "Có vấn đề thì cứ nêu ra mà." }
      ]
    },
    {
      id: "g6-26",
      title: "Cấu trúc trùng điệp ABAB / AABB (làm thử / nhấn mạnh)",
      structure: "Động từ trùng điệp: 看看, 想想, 试试 / 来来回回, 干干净净",
      explanation: "Hai dạng trùng điệp tiếng Trung: (1) ABAB cho động từ 1-2 âm tiết - làm gì đó NGẮN/NHẸ, mang nghĩa thử; (2) AABB cho tính từ - NHẤN MẠNH, sinh động hóa. Lưu ý: tính từ đã trùng điệp (好好) KHÔNG dùng kèm 很/非常.",
      examples: [
        { hanzi: "你试试这件衣服。", pinyin: "Nǐ shìshi zhè jiàn yīfu.", meaning: "Bạn thử mặc cái áo này xem." },
        { hanzi: "我们讨论讨论这个问题。", pinyin: "Wǒmen tǎolùn tǎolùn zhège wèntí.", meaning: "Chúng ta thảo luận một chút về vấn đề này." },
        { hanzi: "把房间打扫得干干净净。", pinyin: "Bǎ fángjiān dǎsǎo de gānganjìngjìng.", meaning: "Quét phòng sạch sẽ tinh tươm." },
        { hanzi: "他高高兴兴地回家了。", pinyin: "Tā gāogāoxìngxìng de huí jiā le.", meaning: "Anh ấy vui vẻ phấn khởi về nhà." }
      ]
    }
  ]
};
