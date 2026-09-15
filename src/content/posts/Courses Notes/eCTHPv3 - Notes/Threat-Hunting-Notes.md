---
title: "eCTHPv3 Threat Hunting Notes"
published: 2026-09-14
description: "نوتس شاملة لكورس صيد التهديدات (eCTHB v3) بالعربي: أساسيات صيد التهديدات، الصيد في الشبكة، صيد النقاط النهائية والبرمجيات الخبيثة، والصيد باستخدام Sysmon"
image: "eCTHPv3.jpg"

tags:
  - "Threat Hunting"
  - "eCTHP"
  - "Sysmon"
  - "Malware Analysis"
  - "Network Security"
category: "Courses Notes"
lang: "ar"
---

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
.ecthb-rtl-notes{
    --bg: #120d0d;
    --panel: #1a1414;
    --panel-2: #211919;
    --border: #362727;
    --text: #f0e8e6;
    --text-dim: #bfa39d;
    --accent: #e8664f;
    --accent-2: #f2c14e;
    --danger: #ef6a6a;
    --code-bg: #0f0a0a;
    --radius: 12px;
  }
.ecthb-rtl-notes *{ box-sizing: border-box; }
.ecthb-rtl-notes{
    margin:0; padding:0;
    background: var(--bg);
    color: var(--text);
    font-family: 'Cairo', 'Segoe UI', Tahoma, sans-serif;
    direction: rtl;
    text-align: right;
    line-height: 1.9;
    font-size: 17px;
  }
.ecthb-rtl-notes .wrap{
    max-width: 1000px;
    margin: 0 auto;
    padding: 40px 24px 100px;
  }
.ecthb-rtl-notes header.hero{
    background: linear-gradient(135deg, #241a17 0%, #150f0e 100%);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 40px 32px;
    margin-bottom: 36px;
    position: relative;
    overflow: hidden;
  }
.ecthb-rtl-notes header.hero::before{
    content:"";
    position:absolute;
    inset: -40% -10% auto auto;
    width: 320px; height: 320px;
    background: radial-gradient(circle, rgba(232,102,79,0.18), transparent 70%);
    pointer-events: none;
  }
.ecthb-rtl-notes .eyebrow{
    display:inline-block;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 13px;
    letter-spacing: 0.5px;
    color: var(--accent);
    background: rgba(232,102,79,0.1);
    border: 1px solid rgba(232,102,79,0.35);
    padding: 5px 12px;
    border-radius: 999px;
    margin-bottom: 18px;
  }
.ecthb-rtl-notes h1.title{
    font-size: 32px;
    font-weight: 800;
    margin: 0 0 12px;
    line-height: 1.5;
  }
.ecthb-rtl-notes .subtitle{
    color: var(--text-dim);
    font-size: 16.5px;
    max-width: 760px;
    margin: 0;
  }
.ecthb-rtl-notes nav.toc{
    background: var(--panel);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 24px 28px;
    margin-bottom: 40px;
  }
.ecthb-rtl-notes nav.toc h2{
    margin: 0 0 16px;
    font-size: 18px;
    color: var(--accent-2);
  }
.ecthb-rtl-notes nav.toc > ul{
    margin: 0; padding-inline-start: 0;
    list-style: none;
    columns: 2;
    column-gap: 32px;
  }
.ecthb-rtl-notes nav.toc > ul > li{
    margin-bottom: 16px;
    break-inside: avoid;
  }
.ecthb-rtl-notes nav.toc a{
    color: var(--text);
    text-decoration: none;
    border-bottom: 1px dashed transparent;
    transition: border-color .15s, color .15s;
  }
.ecthb-rtl-notes nav.toc a:hover{ color: var(--accent); border-color: var(--accent); }
.ecthb-rtl-notes nav.toc a strong{ color: var(--text); }
.ecthb-rtl-notes ul.toc-sub{
    list-style: none;
    margin: 8px 0 0;
    padding-inline-start: 14px;
    border-inline-start: 2px solid var(--border);
  }
.ecthb-rtl-notes ul.toc-sub li{ margin-bottom: 6px; }
.ecthb-rtl-notes ul.toc-sub a{
    font-size: 14px;
    color: var(--text-dim);
  }
.ecthb-rtl-notes ul.toc-sub a:hover{ color: var(--accent); }
@media (max-width: 640px){
.ecthb-rtl-notes nav.toc > ul{ columns: 1; }
}
.ecthb-rtl-notes section.stage{
    margin-bottom: 52px;
  }
.ecthb-rtl-notes section.stage > h2{
    display:flex;
    align-items:center;
    gap: 14px;
    font-size: 25px;
    font-weight: 800;
    color: var(--text);
    border-bottom: 2px solid var(--border);
    padding-bottom: 14px;
    margin: 0 0 22px;
  }
.ecthb-rtl-notes section.stage > h2 .num{
    flex: 0 0 auto;
    width: 40px; height: 40px;
    display:flex; align-items:center; justify-content:center;
    background: var(--accent);
    color: #180d0a;
    border-radius: 10px;
    font-family: 'IBM Plex Mono', monospace;
    font-weight: 700;
    font-size: 17px;
  }
.ecthb-rtl-notes .subtopic{
    margin-top: 34px;
    padding-top: 28px;
    border-top: 1px dashed var(--border);
    scroll-margin-top: 20px;
  }
.ecthb-rtl-notes h3.sub-heading{
    display:flex;
    align-items:baseline;
    flex-wrap: wrap;
    gap: 10px;
    font-size: 20px;
    font-weight: 800;
    color: var(--accent);
    margin: 0 0 16px;
  }
.ecthb-rtl-notes .sub-num{
    font-family: 'IBM Plex Mono', monospace;
    font-size: 13px;
    font-weight: 700;
    color: var(--bg);
    background: var(--accent-2);
    padding: 3px 9px;
    border-radius: 999px;
  }
.ecthb-rtl-notes h3{
    font-size: 19px;
    font-weight: 700;
    color: var(--accent-2);
    margin: 28px 0 12px;
  }
.ecthb-rtl-notes h4{
    font-size: 16.5px;
    font-weight: 700;
    color: var(--text);
    margin: 22px 0 8px;
  }
.ecthb-rtl-notes p{ margin: 0 0 16px; color: var(--text); }
.ecthb-rtl-notes .dim{ color: var(--text-dim); }
.ecthb-rtl-notes ul{
    margin: 0 0 16px;
    padding-inline-start: 26px;
  }
.ecthb-rtl-notes li{ margin-bottom: 8px; }
.ecthb-rtl-notes ul ul{ margin-top: 8px; margin-bottom: 0; }
.ecthb-rtl-notes strong{ color: var(--accent-2); font-weight: 700; }
.ecthb-rtl-notes pre{
    background: var(--code-bg);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 16px 18px;
    overflow-x: auto;
    margin: 14px 0 20px;
    direction: ltr;
    text-align: left;
  }
.ecthb-rtl-notes code{
    font-family: 'IBM Plex Mono', monospace;
    font-size: 14px;
    color: #f7cdbf;
    line-height: 1.7;
  }
.ecthb-rtl-notes p code, .ecthb-rtl-notes li code, .ecthb-rtl-notes td code{
    background: rgba(232,102,79,0.12);
    color: var(--accent);
    padding: 2px 7px;
    border-radius: 5px;
    font-size: 14px;
    direction: ltr;
    display: inline-block;
  }
.ecthb-rtl-notes .table-wrap{
    overflow-x: auto;
    margin: 16px 0 24px;
    border: 1px solid var(--border);
    border-radius: 10px;
  }
.ecthb-rtl-notes table{
    width: 100%;
    border-collapse: collapse;
    font-size: 14.5px;
    background: var(--panel);
  }
.ecthb-rtl-notes thead th{
    background: var(--panel-2);
    color: var(--accent-2);
    text-align: right;
    padding: 12px 16px;
    font-weight: 700;
    border-bottom: 2px solid var(--border);
    white-space: nowrap;
  }
.ecthb-rtl-notes tbody td{
    padding: 12px 16px;
    border-bottom: 1px solid var(--border);
    vertical-align: top;
  }
.ecthb-rtl-notes tbody tr:last-child td{ border-bottom: none; }
.ecthb-rtl-notes tbody tr:hover{ background: rgba(255,255,255,0.025); }
.ecthb-rtl-notes hr.section-divider{
    border: none;
    border-top: 1px solid var(--border);
    margin: 44px 0;
  }
.ecthb-rtl-notes footer{
    text-align:center;
    color: var(--text-dim);
    font-size: 14px;
    margin-top: 60px;
    padding-top: 24px;
    border-top: 1px solid var(--border);
  }
.ecthb-rtl-notes a.back-to-top{
    display:inline-block;
    margin-top: 10px;
    font-size: 13px;
    color: var(--accent);
    text-decoration:none;
  }
</style>
<div class="ecthb-rtl-notes">
<div class="wrap">
  <header class="hero" id="top">
    <span class="eyebrow">CERTIFICATION NOTES · Threat Hunting</span>
    <h1 class="title">نوتس صيد التهديدات — من الأساسيات لحد الصيد باستخدام Sysmon</h1>
    <p class="subtitle">
      نوتس مخصصة لكورس Threat Hunting (eCTHPv3)، بتغطي 4 محاور: أساسيات صيد التهديدات (الفرضيات، المصطلحات،
      استخبارات التهديدات)، الصيد في الشبكة (تحليل الحركة، الويب شيلز)، صيد النقاط النهائية والبرمجيات الخبيثة،
      وأخيرًا الصيد العملي باستخدام Sysmon لاكتشاف حقن الشيفرة وMimikatz والماكروز الضارة.
    </p>
  </header>
  <nav class="toc">
    <h2>محتويات النوتس</h2>
    <ul>
      <li>
        <a href="#fundamentals"><strong>1. أساسيات صيد التهديدات</strong></a>
        <ul class="toc-sub">
          <li><a href="#fundamentals-1">1.1 مقدمة في صيد التهديدات</a></li><li><a href="#fundamentals-2">1.2 مصطلحات صيد التهديدات</a></li><li><a href="#fundamentals-3">1.3 استخبارات التهديدات (Threat Intelligence)</a></li><li><a href="#fundamentals-4">1.4 فرضية صيد التهديدات</a></li>
        </ul>
      </li>
      <li>
        <a href="#network-hunting"><strong>2. صيد التهديدات في الشبكة</strong></a>
        <ul class="toc-sub">
          <li><a href="#network-hunting-1">2.1 مقدمة عن صيد التهديدات في الشبكات</a></li><li><a href="#network-hunting-2">2.2 الكشف عن التسلل عبر تحليل حركة المرور</a></li><li><a href="#network-hunting-3">2.3 صيد حركة المرور المشبوهة</a></li><li><a href="#network-hunting-4">2.4 صيد الويب شيلز (Webshells)</a></li>
        </ul>
      </li>
      <li>
        <a href="#endpoint-malware"><strong>3. صيد النقاط النهائية والبرمجيات الخبيثة</strong></a>
        <ul class="toc-sub">
          <li><a href="#endpoint-malware-1">3.1 مقدمة في صيد النقاط النهائية</a></li><li><a href="#endpoint-malware-2">3.2 نظرة عامة على البرمجيات الخبيثة</a></li><li><a href="#endpoint-malware-3">3.3 معرفات الأحداث والتسجيل وأنظمة SIEM</a></li>
        </ul>
      </li>
      <li>
        <a href="#sysmon-hunting"><strong>4. الصيد باستخدام Sysmon</strong></a>
        <ul class="toc-sub">
          <li><a href="#sysmon-hunting-1">4.1 مقدمة إلى Sysmon</a></li><li><a href="#sysmon-hunting-2">4.2 صيد حقن الشيفرة باستخدام Sysmon</a></li><li><a href="#sysmon-hunting-3">4.3 صيد Mimikatz باستخدام Sysmon</a></li><li><a href="#sysmon-hunting-4">4.4 صيد الماكروز باستخدام Sysmon</a></li>
        </ul>
      </li>    </ul>
  </nav>
  <section class="stage" id="fundamentals">
    <h2><span class="num">1</span> أساسيات صيد التهديدات <span class="dim" style="font-size:14px;font-weight:400;">(Threat Hunting Fundamentals)</span></h2>
    <div class="subtopic" id="fundamentals-1">
      <h3 class="sub-heading"><span class="sub-num">1.1</span> مقدمة في صيد التهديدات
        <span class="dim" style="font-size:13px;font-weight:400;"> (Introduction to Threat Hunting)</span>
      </h3>
      <p><strong>صيد التهديدات</strong> هو ممارسة أمان استباقية تهدف لاكتشاف التهديدات اللي ممكن تكون موجودة في الشبكة بتاعت الشركة قبل ما تقدر تسبب أي ضرر. بدل ما نستنى التنبيهات من أدوات الأمان التقليدية، صيد التهديدات بيتضمن البحث النشط عن علامات النشاط الخبيث والثغرات اللي ممكن ما تتشافش.</p>
    <h3>أهداف صيد التهديدات</h3>
    <ul><li><strong>الاكتشاف المبكر</strong>: نكتشف التهديدات قبل ما تتطور وتسبب مشاكل.</li><li><strong>تقليل وقت التواجد</strong>: نقلل الوقت اللي يقدر فيه المهاجمين يفضلوا في الشبكة من غير ما نكتشفهم.</li><li><strong>فهم الخصوم</strong>: نعرف أكتر عن أساليب الهجوم اللي ممكن يستخدمها المهاجمون.</li><li><strong>تحسين وضع الأمان</strong>: نشتغل على تحسين التدابير الأمنية بناءً على النتائج اللي نكتشفها.</li></ul>
    <h3>المكونات الأساسية لصيد التهديدات</h3>
    <ul><li><strong>نهج قائم على الفرضيات</strong>: صيد التهديدات عادةً يبدأ بفرضية استنادًا على معلومات عن تهديدات حديثة أو سلوك غير عادي في الشبكة. الصيادين بيقوموا بعمل فرضيات حول طرق الهجوم ويبحثوا عن أدلة تأكد أو تنفي الفرضيات دي.</li><li><strong>جمع البيانات</strong>: من مصادر متنوعة زي ملفات السجل (سجلات الخوادم والجدران النارية)، حركة الشبكة، وبيانات الأجهزة (تغييرات الملفات وسلوك المستخدمين).</li><li><strong>الأدوات والتقنيات</strong>: <strong>SIEM</strong> بيجمع البيانات ويحللها، <strong>EDR</strong> بيقدم معلومات عن نشاط الأجهزة، ومنصات استخبارات التهديدات بتساعد في فهم التهديدات والثغرات.</li><li><strong>مؤشرات التهديد (IoCs)</strong>: تحديد مؤشرات زي عناوين IP المشبوهة أو هاش الملفات يساعد في التعرف على التهديدات.</li><li><strong>تحليل سلوكي</strong>: تحليل سلوك المستخدمين عشان نكتشف أي شذوذ ممكن يدل على نشاط خبيث، زي أوقات تسجيل دخول غير عادية.</li><li><strong>التعاون والتواصل</strong>: صيد التهديدات محتاج تعاون بين الفرق المختلفة زي فرق الاستجابة للحوادث وتكنولوجيا المعلومات.</li></ul>
    <h3>عملية صيد التهديدات</h3>
    <ul><li><strong>التحضير</strong>: إنشاء فريق لصيد التهديدات وتحديد المهام، وتطوير مصادر لاستخبارات التهديدات.</li><li><strong>تكوين الفرضيات</strong>: عمل فرضيات بناءً على معلومات استخباراتية سابقة.</li><li><strong>جمع البيانات والتحليل</strong>: جمع البيانات ذات الصلة وتحليلها لتحديد التهديدات.</li><li><strong>التحقيق</strong>: البحث عن الأنشطة المشبوهة واستخدام الأدوات لتأكيد أو دحض الفرضيات.</li><li><strong>الاستجابة</strong>: لو تم تأكيد وجود تهديد، نبدأ في عملية الاستجابة.</li><li><strong>المراجعة والتكيف</strong>: بعد كل عملية صيد، نراجع النتائج ونعدل الاستراتيجيات حسب الحاجة.</li></ul>
    <h3>فوائد صيد التهديدات</h3>
    <ul><li><strong>الدفاع الاستباقي</strong>: يحول الأمان من رد فعل إلى استباقي، مما يقلل من تأثير الهجمات.</li><li><strong>تحسين الكشف</strong>: يعزز القدرة على اكتشاف التهديدات المعروفة والجديدة.</li><li><strong>استجابة أسرع للحوادث</strong>: يوفر رؤى تساعد في التعامل بشكل أسرع مع الحوادث.</li></ul>
    <h3>التحديات في صيد التهديدات</h3>
    <ul><li><strong>مستهلكة للموارد</strong>: تتطلب وجود موظفين مدربين وأدوات، مما يجعلها مكلفة.</li><li><strong>فائض البيانات</strong>: حجم البيانات الكبير ممكن يخلي من الصعب اكتشاف التهديدات.</li><li><strong>تغير التهديدات</strong>: المهاجمون دايمًا بيتكيفوا مع أساليبهم، لازم نحدث تقنياتنا باستمرار.</li></ul>
    <h3>الخلاصة</h3>
    <p>صيد التهديدات جزء مهم من استراتيجيات الأمان الحديثة. من خلال اعتماد نهج استباقي، يمكن للمؤسسات حماية نفسها من الهجمات. ومع تغير المشهد الأمني، لازم صائدين التهديدات يطوروا مهاراتهم ومنهجياتهم باستمرار.</p>
    </div>
    <div class="subtopic" id="fundamentals-2">
      <h3 class="sub-heading"><span class="sub-num">1.2</span> مصطلحات صيد التهديدات
        <span class="dim" style="font-size:13px;font-weight:400;"> (Threat Hunting Terminology)</span>
      </h3>
      <p>في مجال Threat Hunting، فيه مجموعة من المصطلحات اللي بتكون أساسية عشان نفهم العملية بشكل أعمق.</p>
    <div class="table-wrap"><table><thead><tr><th>المصطلح</th><th>الشرح</th></tr></thead><tbody><tr><td>Indicator of Compromise (IoC)</td><td>مؤشرات الاختراق: دلائل على إن فيه هجوم أو اختراق تم أو بيحصل، زي عناوين IP مشبوهة، هاشات ملفات خبيثة، أسماء نطاقات ضارة</td></tr><tr><td>Tactics, Techniques, and Procedures (TTPs)</td><td>التكتيكات (الأهداف العامة)، التقنيات (الطرق المستخدمة)، والإجراءات (التفاصيل العملية لتنفيذ الهجوم)</td></tr><tr><td>Indicators of Attack (IoA)</td><td>مؤشرات الهجوم: علامات تشير إن فيه هجوم بيتم حاليًا، حتى لو مفيش اختراق واضح لسه</td></tr><tr><td>Threat Intelligence</td><td>استخبارات التهديدات: معلومات عن التهديدات المحتملة تساعد في التنبؤ بالتهديدات المستقبلية</td></tr><tr><td>False Positive</td><td>إيجابي كاذب: كشف نشاط على إنه تهديد وهو في الحقيقة نشاط عادي</td></tr><tr><td>False Negative</td><td>سلبي كاذب: فشل النظام في اكتشاف تهديد حقيقي، فيفضل المهاجم بدون اكتشاف</td></tr><tr><td>Kill Chain</td><td>سلسلة القتل: مراحل الهجوم اللي بيمر بيها المهاجم للوصول للهدف النهائي</td></tr><tr><td>Compromise Assessment</td><td>تقييم الاختراق: تقييم أمني لمعرفة إذا كان فيه اختراق حصل أو نشاطات خبيثة في الشبكة</td></tr><tr><td>Behavioral Analytics</td><td>تحليل السلوك: دراسة سلوك المستخدمين أو الأنظمة لاكتشاف أي شذوذ يشير لوجود تهديد</td></tr><tr><td>Endpoint Detection and Response (EDR)</td><td>أدوات بتراقب وتستجيب للتهديدات على الأجهزة النهائية</td></tr><tr><td>Hunting Hypothesis</td><td>فرضية الصيد: نظرية يبني عليها فريق الصيد بحثهم عن تهديد محتمل</td></tr><tr><td>Threat Actor</td><td>فاعل التهديد: الشخص أو المجموعة اللي بتنفذ الهجمات، سواء مجرمين إلكترونيين أو مجموعات مدعومة من دولة أو هاكرز فرديين</td></tr><tr><td>Command and Control (C2 / C&amp;C)</td><td>التحكم والسيطرة: المهاجم بيتحكم في الأجهزة المخترقة من خلال قنوات اتصال معينة</td></tr><tr><td>Lateral Movement</td><td>الحركة الجانبية: التنقل بين الأنظمة المختلفة داخل الشبكة بعد اختراق نقطة دخول، للوصول لبيانات أو أنظمة أساسية</td></tr><tr><td>Persistence</td><td>الثبات: قدرة المهاجم على الاحتفاظ بوجوده داخل النظام لفترة طويلة حتى بعد إعادة التشغيل</td></tr><tr><td>Exfiltration</td><td>تسريب البيانات: نقل البيانات الحساسة من النظام المخترق لجهة خارجية، وهو غالبًا الهدف النهائي للمهاجم</td></tr><tr><td>Privilege Escalation</td><td>تصعيد الامتيازات: محاولة المهاجم زيادة صلاحياته في النظام للوصول لمعلومات حساسة</td></tr><tr><td>Data Enrichment</td><td>إثراء البيانات: جمع وتحليل بيانات إضافية من مصادر متعددة لتحسين فهم الصياد للتهديدات</td></tr></tbody></table></div>
    </div>
    <div class="subtopic" id="fundamentals-3">
      <h3 class="sub-heading"><span class="sub-num">1.3</span> استخبارات التهديدات (Threat Intelligence)
        <span class="dim" style="font-size:13px;font-weight:400;"> (Threat Intelligence)</span>
      </h3>
      <p><strong>استخبارات التهديدات</strong> هي عملية جمع وتحليل المعلومات المتعلقة بالتهديدات الأمنية والهجمات المحتملة بهدف تحسين القدرة على الدفاع والردع. الهدف الأساسي هو تمكين المؤسسات من اتخاذ قرارات مبنية على فهم شامل للتحديات الأمنية الحالية والمستقبلية.</p>
    <h3>أنواع استخبارات التهديدات</h3>
    <div class="table-wrap"><table><thead><tr><th>النوع</th><th>الوصف</th></tr></thead><tbody><tr><td>الاستخبارات الاستراتيجية (Strategic)</td><td>تركز على التهديدات الكبيرة اللي بتأثر على المؤسسة بشكل عام، تُستخدم من المديرين وصناع القرار للتخطيط طويل المدى</td></tr><tr><td>الاستخبارات التكتيكية (Tactical)</td><td>تركز على التفاصيل التقنية زي مؤشرات الاختراق (IoCs) وتكتيكات وتقنيات المهاجمين (TTPs) لتعزيز دفاع الشبكة</td></tr><tr><td>الاستخبارات التشغيلية (Operational)</td><td>تركز على الهجمات الحالية أو المستمرة، تُستخدم من فرق الأمن والاستجابة للحوادث للتعامل مع الهجمات في الوقت الحقيقي</td></tr><tr><td>الاستخبارات التقنية (Technical)</td><td>معلومات فنية عن البرمجيات الخبيثة أو استغلالات الثغرات لفهم التكنولوجيا المستخدمة في الهجوم</td></tr></tbody></table></div>
    <h3>مصادر استخبارات التهديدات</h3>
    <div class="table-wrap"><table><thead><tr><th>المصدر</th><th>الوصف</th></tr></thead><tbody><tr><td>OSINT (Open Source Intelligence)</td><td>معلومات من مصادر مفتوحة على الإنترنت زي الأخبار والمدونات وقواعد البيانات العامة</td></tr><tr><td>HUMINT (Human Intelligence)</td><td>معلومات يجمعها البشر، زي مخبرين أو محللين داخل الشبكات أو مجموعات التهديدات</td></tr><tr><td>SIGINT (Signals Intelligence)</td><td>التنصت على إشارات الاتصالات زي رصد حركة الشبكة أو اعتراض البيانات</td></tr><tr><td>Malware Intelligence</td><td>تحليل البرمجيات الخبيثة المكتشفة لتحديد نوع الهجوم ومصدره</td></tr></tbody></table></div>
    <h3>دورة حياة استخبارات التهديدات</h3>
    <div class="table-wrap"><table><thead><tr><th>المرحلة</th><th>الوصف</th></tr></thead><tbody><tr><td>التوجيه (Direction)</td><td>تحديد الأهداف والمعلومات المطلوبة</td></tr><tr><td>جمع المعلومات (Collection)</td><td>جمع البيانات من المصادر المختلفة زي OSINT وتقارير التهديدات</td></tr><tr><td>المعالجة (Processing)</td><td>تنظيم وتصفية البيانات لتبقى مفهومة وسهلة للتحليل</td></tr><tr><td>التحليل (Analysis)</td><td>استخراج نتائج مفيدة من البيانات لتحديد التهديدات</td></tr><tr><td>التوزيع (Dissemination)</td><td>توصيل المعلومات للأطراف المعنية داخل المؤسسة</td></tr><tr><td>التغذية الراجعة (Feedback)</td><td>استقبال ملاحظات الأطراف المعنية وتعديل العملية حسب الحاجة</td></tr></tbody></table></div>
    <h3>فوائد استخبارات التهديدات</h3>
    <ul><li><strong>تحسين الدفاعات</strong>: رؤى استباقية عن التهديدات المحتملة.</li><li><strong>اكتشاف التهديدات بسرعة</strong>: اكتشاف الأنشطة الخبيثة بسرعة أكبر.</li><li><strong>الردع الفعّال</strong>: قرارات مبنية على معلومات دقيقة تحسن الاستجابة للهجمات.</li><li><strong>فهم الخصوم</strong>: معرفة أساليب وأهداف المهاجمين لتطوير استراتيجيات دفاعية فعالة.</li></ul>
    <h3>التحديات</h3>
    <ul><li><strong>حجم البيانات</strong>: كمية كبيرة يصعب تحليلها كلها.</li><li><strong>الجودة</strong>: مش كل المعلومات مفيدة أو دقيقة.</li><li><strong>التوقيت</strong>: بعض المعلومات توصل بعد فوات الأوان.</li><li><strong>التكامل</strong>: صعوبة دمج استخبارات التهديدات مع الأنظمة الأمنية الأخرى.</li></ul>
    <h3>الخلاصة</h3>
    <p>استخبارات التهديدات بتلعب دور كبير في تحسين القدرة على اكتشاف التهديدات ومنع الهجمات قبل ما تحصل، وبتساعد المؤسسات على البقاء خطوة قدام المهاجمين.</p>
    </div>
    <div class="subtopic" id="fundamentals-4">
      <h3 class="sub-heading"><span class="sub-num">1.4</span> فرضية صيد التهديدات
        <span class="dim" style="font-size:13px;font-weight:400;"> (Threat Hunting Hypothesis)</span>
      </h3>
      <p>في عملية صيد التهديدات، تعتبر الفرضية الأساس في تنظيم وتوجيه عملية البحث عن الأنشطة غير المشروعة. الفرضية هي افتراض يتم اختباره عن وجود تهديد أو نشاط غير طبيعي، وتستند إلى معلومات سابقة أو مؤشرات معينة يتم تحليلها.</p>
    <h3>ما هي فرضية صيد التهديدات؟</h3>
    <p>فرضية صيد التهديدات هي سؤال أو افتراض يقوم الباحث الأمني بصياغته بناءً على معلومات أو دلائل معينة، وتوجه عملية الصيد بحيث يسعى الباحث لإثبات أو نفي هذا الافتراض من خلال تحليل البيانات ومراقبة الأنشطة.</p>
    <h3>كيف يتم بناء الفرضية؟</h3>
    <ul><li><strong>استخبارات التهديدات</strong>: مثل التقارير حول الهجمات أو الثغرات المكتشفة حديثًا.</li><li><strong>الحوادث السابقة</strong>: أي هجمات سابقة أو ثغرات معروفة في الأنظمة.</li><li><strong>البيانات التاريخية</strong>: مراجعة وتحليل الأنماط غير الطبيعية أو النشاطات غير المعتادة.</li><li><strong>استجابة الحوادث</strong>: الفرق الأمنية قد تبني فرضيات جديدة بناءً على حوادث تعاملوا معها في الماضي.</li></ul>
    <h3>أنواع الفرضيات</h3>
    <div class="table-wrap"><table><thead><tr><th>النوع</th><th>الوصف</th><th>مثال</th></tr></thead><tbody><tr><td>فرضيات مبنية على البيانات (Data-Driven)</td><td>تنشأ من تحليل بيانات النشاطات السابقة</td><td>"زيادة محاولات تسجيل الدخول الفاشلة قد تشير إلى هجوم Brute Force"</td></tr><tr><td>فرضيات مبنية على استخبارات التهديدات (Threat Intel-Driven)</td><td>تعتمد على تقارير استخبارات تحدد نقاط الضعف أو أساليب الهجوم</td><td>"إذا اكتُشفت ثغرة حديثة في تطبيق معين، فمن المحتمل محاولة استغلالها"</td></tr><tr><td>فرضيات مبنية على المخاطر (Risk-Driven)</td><td>تعتمد على تحليل المخاطر المحتملة للخدمات أو البيانات الحساسة</td><td>"بما أن قاعدة البيانات حساسة، من المحتمل محاولة استغلال ثغرات للوصول إليها"</td></tr></tbody></table></div>
    <h3>خطوات إنشاء الفرضية</h3>
    <ul><li><strong>تحديد المشكلة</strong>: تحديد النشاط غير المعتاد الذي يجب التحقيق فيه.</li><li><strong>جمع المعلومات</strong>: من الأنظمة المختلفة مثل IDS أو سجلات الأنشطة المشبوهة.</li><li><strong>صياغة الفرضية</strong>: بناء افتراض أو تساؤل للتحقيق فيه استنادًا للبيانات.</li><li><strong>اختبار الفرضية</strong>: البحث عن أدلة تثبت أو تنفي الفرضية عبر تحليل البيانات ومراقبة النشاط.</li></ul>
    <h3>أهمية الفرضية في صيد التهديدات</h3>
    <ul><li><strong>توجيه الجهود</strong>: تركيز الجهود على نقطة معينة بدلاً من البحث العشوائي.</li><li><strong>تسريع الكشف</strong>: فرضية واضحة تسرّع عملية التحقيق واكتشاف التهديدات.</li><li><strong>تحليل قائم على الأدلة</strong>: يعتمد على تحليل منهجي يزيد من دقة النتائج.</li></ul>
    <h3>الخلاصة</h3>
    <p>الفرضية في صيد التهديدات هي الأساس الذي يعتمد عليه الباحث الأمني، وتساعد في توجيه عملية الصيد نحو نتائج دقيقة ومنظمة.</p>
    </div>
  </section>
  <hr class="section-divider">
  <section class="stage" id="network-hunting">
    <h2><span class="num">2</span> صيد التهديدات في الشبكة <span class="dim" style="font-size:14px;font-weight:400;">(Network Hunting)</span></h2>
    <div class="subtopic" id="network-hunting-1">
      <h3 class="sub-heading"><span class="sub-num">2.1</span> مقدمة عن صيد التهديدات في الشبكات
        <span class="dim" style="font-size:13px;font-weight:400;"> (Introduction to Network Hunting)</span>
      </h3>
      <p><strong>صيد التهديدات في الشبكات (Network Hunting)</strong> هو نهج استباقي للبحث عن التهديدات الأمنية داخل الشبكة قبل أن تتسبب في ضرر كبير، ويركز على البحث النشط عن التهديدات غير المعروفة أو التي لم يتم اكتشافها، على عكس الدفاعات التقليدية التي تتفاعل مع التهديدات المعروفة فقط.</p>
    <h3>ما هو صيد التهديدات في الشبكات؟</h3>
    <p>هو عملية البحث عن التهديدات المتقدمة أو المخفية التي قد تتجاوز آليات الأمان التقليدية مثل الجدران النارية وأنظمة كشف الاختراق (IDS)، ويتطلب مراقبة الشبكة بشكل مستمر وتحليل أنماط حركة المرور والسجلات.</p>
    <h3>لماذا نحتاج إلى صيد التهديدات في الشبكات؟</h3>
    <ul><li><strong>تجنب الهجمات غير المكتشفة</strong>: الأنظمة التقليدية تعتمد على التوقيعات (signatures) أو الأنماط المعروفة، وصيد التهديدات يساعد في اكتشاف الهجمات الجديدة.</li><li><strong>الكشف عن المهاجمين المتقدمين</strong>: هجمات APT تعتمد على البقاء في الشبكة فترات طويلة بدون اكتشاف؛ صيد التهديدات يهدف لكشف هذه الأنشطة المخفية.</li><li><strong>تحسين الاستجابة للحوادث</strong>: البحث النشط يعزز استجابة فريق الأمن بشكل أسرع وأدق.</li></ul>
    <h3>كيفية القيام بصيد التهديدات في الشبكات</h3>
    <ul><li><strong>جمع البيانات</strong>: من سجلات الخوادم، حركة المرور، وأنظمة كشف التسلل (IDS).</li><li><strong>تحليل البيانات</strong>: البحث عن أنشطة غير عادية، مثل زيادة غير مبررة في حركة المرور أو سلوك غير طبيعي.</li><li><strong>استخدام أدوات الصيد</strong>: مثل Wireshark وSplunk وELK Stack لتحليل البيانات وتحديد الأنماط الغير طبيعية.</li><li><strong>إنشاء فرضيات</strong>: بناءً على البيانات المحللة، مثل زيادة محاولات تسجيل الدخول الفاشلة قد تكون علامة هجوم Brute Force.</li><li><strong>البحث والتحقق</strong>: البحث في الشبكة عن أدلة تدعم أو تنفي الفرضيات والتأكد من صحة التهديدات المكتشفة.</li></ul>
    <h3>تحديات صيد التهديدات في الشبكات</h3>
    <ul><li><strong>كمية البيانات الكبيرة</strong>: يصعب تحديد التهديدات المخفية بسهولة في الشبكات الكبيرة.</li><li><strong>التعقيد التقني</strong>: المهاجمون يستخدمون تقنيات متطورة لتجنب الاكتشاف.</li><li><strong>التهديدات المتطورة</strong>: بعض الهجمات تستغرق شهورًا أو سنوات ليتم اكتشافها.</li></ul>
    <h3>فوائد صيد التهديدات في الشبكات</h3>
    <ul><li><strong>الكشف المبكر عن التهديدات</strong>: يمنع خسائر كبيرة.</li><li><strong>تعزيز الأمان</strong>: يحسّن الوضع الأمني العام للمؤسسة.</li><li><strong>الاستجابة السريعة</strong>: تقليل الضرر عند اكتشاف التهديدات مبكرًا.</li></ul>
    <h3>الخلاصة</h3>
    <p>صيد التهديدات في الشبكات نهج استباقي يعتمد على البحث والتحليل المستمر لاكتشاف التهديدات المخفية أو غير المكتشفة، مما يحسّن أمان المؤسسات ويقلل مخاطر الهجمات المتقدمة.</p>
    </div>
    <div class="subtopic" id="network-hunting-2">
      <h3 class="sub-heading"><span class="sub-num">2.2</span> الكشف عن التسلل عبر تحليل حركة المرور
        <span class="dim" style="font-size:13px;font-weight:400;"> (Intrusion Detection by Analyzing Traffic)</span>
      </h3>
      <p><strong>الكشف عن التسلل من خلال تحليل حركة المرور</strong> هو طريقة فعالة لرصد الأنشطة المشبوهة أو غير المعتادة داخل الشبكة، بالاعتماد على تحليل حركة البيانات عبر الشبكة للبحث عن أنماط غير طبيعية قد تشير إلى وجود هجوم أو تسلل.</p>
    <h3>ما هو تحليل حركة المرور للكشف عن التسلل؟</h3>
    <p>هو عملية مراقبة وفحص البيانات المارة عبر الشبكة في الوقت الفعلي أو من خلال السجلات لتحديد أي نشاط غير طبيعي، باستخدام أدوات تراقب الحزم (packets) وتحللها بناءً على التوقيعات أو السلوكيات أو أنماط معينة للتهديدات.</p>
    <h3>أهمية تحليل حركة المرور</h3>
    <ul><li><strong>رصد الأنشطة غير العادية</strong>: يكشف هجمات جارية مثل DDoS أو محاولات التسلل.</li><li><strong>الكشف عن الهجمات المستمرة</strong>: هجمات APT تحدث على فترات طويلة، والتحليل يساعد في اكتشافها.</li><li><strong>مراقبة الأنظمة الحساسة</strong>: مراقبة حركة البيانات على الأنظمة ذات الوصول المميز.</li></ul>
    <h3>مكونات نظام الكشف عن التسلل من خلال حركة المرور</h3>
    <div class="table-wrap"><table><thead><tr><th>المكون</th><th>الوصف</th></tr></thead><tbody><tr><td>التقاط البيانات (Data Capture)</td><td>باستخدام أدوات مثل Wireshark أو tcpdump لفحص الحزم</td></tr><tr><td>تحليل البيانات (Data Analysis)</td><td>البحث عن أنماط غير طبيعية مثل محاولات تسجيل دخول متكررة</td></tr><tr><td>التعرف على الأنماط (Pattern Recognition)</td><td>استخدام التوقيعات أو تحليل السلوك لتحديد الهجمات</td></tr><tr><td>تنبيه الأمان (Security Alerts)</td><td>تنبيه فريق الأمان عند اكتشاف نشاط مشبوه للتحقيق فيه</td></tr></tbody></table></div>
    <h3>أنواع أنظمة الكشف عن التسلل (IDS)</h3>
    <div class="table-wrap"><table><thead><tr><th>النوع</th><th>الوصف</th></tr></thead><tbody><tr><td>Signature-Based IDS</td><td>يعتمد على قاعدة بيانات توقيعات معروفة للتهديدات ويقارن حركة المرور بيها</td></tr><tr><td>Behavior-Based IDS</td><td>يعتمد على تحليل السلوك المعتاد للشبكة، وأي انحراف عنه يرفع تنبيه</td></tr></tbody></table></div>
    <h3>خطوات الكشف عن التسلل من خلال تحليل حركة المرور</h3>
    <ul><li><strong>مراقبة مستمرة للشبكة</strong>: باستخدام أدوات IDS أو تحليل السجلات.</li><li><strong>استخدام التوقيعات والسلوكيات</strong>: للكشف عن الهجمات المعروفة وغير الطبيعية.</li><li><strong>تحليل شامل لحزم البيانات</strong>: فحص كل حزمة بحثًا عن معلومات مشبوهة.</li><li><strong>اتخاذ إجراءات بناءً على التحليل</strong>: عزل الجهاز المصاب أو إيقاف حركة المرور المشتبه بها.</li></ul>
    <h3>تحديات الكشف عن التسلل من خلال حركة المرور</h3>
    <ul><li><strong>الكم الهائل من البيانات</strong>: يتطلب قدرات حوسبة ضخمة وتخزين كافٍ.</li><li><strong>الهجمات المتطورة</strong>: تستخدم تقنيات التشفير أو التمويه لتجنب الكشف.</li><li><strong>الإنذارات الكاذبة</strong>: تنبيهات خاطئة نتيجة تحليل غير دقيق.</li></ul>
    <h3>أدوات الكشف عن التسلل من خلال حركة المرور</h3>
    <div class="table-wrap"><table><thead><tr><th>الأداة</th><th>الوصف</th></tr></thead><tbody><tr><td>Wireshark</td><td>تحليل حركة مرور الشبكة والتقاط الحزم وفحصها بالتفصيل</td></tr><tr><td>Snort</td><td>نظام كشف تسلل يعتمد على التوقيعات للتعرف على أنماط الهجمات المعروفة</td></tr><tr><td>Bro/Zeek</td><td>تحليل سلوكي لحركة المرور للكشف عن الأنشطة غير العادية</td></tr></tbody></table></div>
    <h3>الخلاصة</h3>
    <p>الكشف عن التسلل من خلال تحليل حركة المرور عملية مهمة وحاسمة في حماية الشبكات من التهديدات المحتملة، يعتمد على مراقبة الأنشطة وتحليل الحزم لتحديد الأنماط المشبوهة، مما يمكن فرق الأمان من التدخل المبكر وتقليل الأضرار.</p>
    </div>
    <div class="subtopic" id="network-hunting-3">
      <h3 class="sub-heading"><span class="sub-num">2.3</span> صيد حركة المرور المشبوهة
        <span class="dim" style="font-size:13px;font-weight:400;"> (Suspicious Traffic Hunting)</span>
      </h3>
      <p>صيد حركة المرور المشبوهة هو عملية بتحلل حركة البيانات اللي بتمر في الشبكة علشان تدور على أي نشاط مش طبيعي أو مشبوه، ممكن يكون دليل على هجوم أو اختراق. الفكرة إنك تبقى استباقي وتكتشف المشاكل قبل ما تبقى كبيرة وتأثر على الشبكة.</p>
    <h3>فهم حركة المرور الطبيعية</h3>
    <p>قبل ما تبدأ تصطاد حركة المرور المشبوهة، لازم تبقى عارف الحركة الطبيعية في شبكتك شكلها إيه:</p>
    <ul><li><strong>نمط الحركة اليومية</strong>: هل في وقت معين بتزيد حركة البيانات بشكل طبيعي؟</li><li><strong>البروتوكولات اللي شغالة</strong>: البروتوكولات المعتادة زي HTTP وHTTPS وDNS.</li><li><strong>سلوك المستخدمين المعتاد</strong>: هل في نشاطات معينة بتحصل دايمًا بنفس الطريقة؟</li></ul>
    <p>لما تبقى عارف الطبيعي، هتبقى قادر تلاحظ بسهولة أي حاجة غريبة.</p>
    <h3>الأدوات المستخدمة في صيد الحركة المشبوهة</h3>
    <div class="table-wrap"><table><thead><tr><th>الأداة</th><th>الوصف</th></tr></thead><tbody><tr><td>Wireshark</td><td>تحلل الحزم اللي بتعدي في الشبكة وتعرضها بالتفصيل</td></tr><tr><td>Snort</td><td>تشتغل على التوقيعات (signatures) لاكتشاف التهديدات</td></tr><tr><td>Zeek (Bro)</td><td>تركز على تحليل سلوك الشبكة والكشف عن الأنشطة غير الطبيعية</td></tr></tbody></table></div>
    <h3>علامات على وجود حركة مرور مشبوهة</h3>
    <ul><li><strong>زيادة مفاجئة في حركة البيانات</strong>: ممكن يكون هجوم DDoS.</li><li><strong>بروتوكولات غريبة</strong>: بروتوكول بيتحرك في الشبكة مش مستخدم عادة.</li><li><strong>اتصالات غير متوقعة مع عناوين IP برا الشبكة</strong>: تواصل مع عناوين IP مش متعود تتعامل معاها.</li><li><strong>محاولات تسجيل دخول كتير</strong>: زي هجمات Brute Force اللي بتظهر كمحاولات فاشلة كتير.</li></ul>
    <h3>إزاي تبدأ تصيد حركة المرور المشبوهة</h3>
    <ul><li><strong>جمع البيانات</strong>: باستخدام أدوات زي Wireshark أو أي أداة IDS.</li><li><strong>تحليل البيانات</strong>: تدور على أي سلوك مش طبيعي أو غريب.</li><li><strong>افتراض فرضيات</strong>: زي "هل الزيادة دي في حركة بروتوكول معين ممكن تكون هجوم؟".</li><li><strong>التأكد من الفرضية</strong>: تشوف الحزم بالتفصيل وتدور على أي دليل يؤكد إن النشاط ده فعلاً تهديد.</li></ul>
    <h3>التحديات في صيد الحركة المشبوهة</h3>
    <ul><li><strong>الإنذارات الكاذبة</strong>: نشاط طبيعي يبان شكله غريب فيحصل إنذار كاذب.</li><li><strong>الكمية الكبيرة من البيانات</strong>: التعامل معاها محتاج أدوات قوية علشان تقدر تحللها بسرعة.</li></ul>
    <h3>المراقبة المستمرة مهمة</h3>
    <p>صيد الحركة المشبوهة مش حاجة بتعملها مرة واحدة وخلاص. الشبكة لازم تبقى تحت المراقبة طول الوقت، وتعمل تحليل للبيانات بانتظام علشان تكتشف أي تهديدات جديدة.</p>
    <h3>الخلاصة</h3>
    <p>صيد حركة المرور المشبوهة هو جزء أساسي من أمان الشبكة وبيساعد في حماية النظام من الهجمات والتهديدات.</p>
    </div>
    <div class="subtopic" id="network-hunting-4">
      <h3 class="sub-heading"><span class="sub-num">2.4</span> صيد الويب شيلز (Webshells)
        <span class="dim" style="font-size:13px;font-weight:400;"> (Hunting Webshells)</span>
      </h3>
      <p>الويب شيلز هي أدوات خطيرة يستخدمها المهاجمون للسيطرة على خوادم الويب عن بُعد، وعادةً ما تُستخدم لاستغلال الثغرات في تطبيقات الويب وتتيح للمهاجم تنفيذ أوامر على الخادم.</p>
    <h3>فهم الويب شيلز</h3>
    <ul><li><strong>ما هي الويب شيل؟</strong>: سكريبتات (غالبًا PHP أو ASP أو JSP) تُرفع إلى الخادم وتسمح للمهاجم بتنفيذ أوامر مباشرة عبر المتصفح.</li><li><strong>كيف تعمل؟</strong>: بمجرد رفعها، يمكن للمهاجم الوصول إليها من أي مكان، ما يمنحه القدرة على تنفيذ أوامر، سحب بيانات، أو تثبيت برمجيات ضارة أخرى.</li></ul>
    <h3>علامات وجود الويب شيلز</h3>
    <ul><li><strong>ملفات غير عادية أو غير متوقعة</strong>: ملفات جديدة تم رفعها بشكل غير متوقع في الدليل الجذر للموقع.</li><li><strong>تغييرات في ملفات النظام</strong>: أي تغييرات غير معروفة في الملفات الأساسية.</li><li><strong>سلوك غير معتاد</strong>: زيادة حركة مرور غير مبررة أو نشاطات خبيثة في سجلات الخادم.</li><li><strong>سجلات الوصول</strong>: طلبات GET أو POST غير عادية تشير لمحاولات الوصول للويب شيل.</li></ul>
    <h3>كيف تصطاد الويب شيلز</h3>
    <ul><li><strong>مراقبة الملفات</strong>: مراقبة الدلائل الخاصة بموقعك والتحقق من ملفات بامتدادات مشبوهة (<code>.php</code>, <code>.asp</code>, <code>.jsp</code>).</li><li><strong>تحليل سجلات الخادم</strong>: مراجعة Access Logs وError Logs عن أي نشاط غير عادي أو طلبات تشير لتنفيذ أوامر.</li><li><strong>الفحص الضوئي</strong>: استخدام أدوات فحص مثل ClamAV وMalDet للكشف عن البرمجيات الخبيثة.</li><li><strong>التدقيق في التطبيقات</strong>: فحص كود التطبيقات بحثًا عن ثغرات قد تسمح برفع الويب شيلز.</li><li><strong>التنبيهات</strong>: إعداد تنبيهات للكشف عن تغييرات غير متوقعة على الملفات أو نشاط مشبوه في سجلات الوصول.</li></ul>
    <h3>استجابة عند الكشف عن ويب شيل</h3>
    <ul><li><strong>عزل الخادم</strong>: إبعاده عن الشبكة لمنع وصول المهاجم لبيانات أخرى.</li><li><strong>تحليل الأثر</strong>: مراجعة السجلات لمعرفة متى وكيف تم رفع الويب شيل.</li><li><strong>إزالة الويب شيل</strong>: حذفه والتأكد من إزالة أي ملفات أو برامج ضارة أخرى.</li><li><strong>تحديث الأمان</strong>: تحديث جميع البرمجيات والمكتبات المستخدمة.</li><li><strong>استعادة النسخ الاحتياطية</strong>: إذا لزم الأمر، استعادة الخادم من نسخ معتمدة.</li></ul>
    <h3>تدابير وقائية</h3>
    <ul><li><strong>تأمين التطبيقات</strong>: التحقق من المدخلات وصلاحيات المستخدم.</li><li><strong>تحديث البرمجيات</strong>: تحديث النظام والتطبيقات بانتظام.</li><li><strong>تدريب الموظفين</strong>: توعية الفريق بأساليب الهجوم وكيفية التعرف على النشاطات غير العادية.</li></ul>
    <h3>الخلاصة</h3>
    <p>صيد الويب شيلز عملية حيوية لحماية الخوادم والتطبيقات من الهجمات، ومن خلال اتباع خطوات المراقبة والتحليل والاستجابة يمكن تقليل خطرها وتعزيز أمان الشبكة.</p>
    </div>
  </section>
  <hr class="section-divider">
  <section class="stage" id="endpoint-malware">
    <h2><span class="num">3</span> صيد النقاط النهائية والبرمجيات الخبيثة <span class="dim" style="font-size:14px;font-weight:400;">(Endpoint &amp; Malware Hunting)</span></h2>
    <div class="subtopic" id="endpoint-malware-1">
      <h3 class="sub-heading"><span class="sub-num">3.1</span> مقدمة في صيد النقاط النهائية
        <span class="dim" style="font-size:13px;font-weight:400;"> (Introduction to Endpoint Hunting)</span>
      </h3>
      <p>صيد النقاط النهائية هو عملية مهمة لقياس أمان الأجهزة اللي بتتصل بالشبكة، زي اللابتوبات والكمبيوترات المكتبية والهواتف، بهدف اكتشاف أي تهديدات أو هجمات ممكن تؤثر عليها قبل ما تحصل مشاكل.</p>
    <h3>فهم النقاط النهائية</h3>
    <ul><li><strong>إيه هي النقاط النهائية؟</strong>: أي جهاز يتصل بالنت، سواء لابتوب أو كمبيوتر أو سيرفر أو موبايل.</li><li><strong>ليه مهمة؟</strong>: لأنها غالبًا ما بتكون هدف رئيسي للمهاجمين.</li></ul>
    <h3>أهمية صيد النقاط النهائية</h3>
    <ul><li><strong>كشف التهديدات</strong>: تحديد التهديدات قبل ما تتسبب في مشاكل كبيرة.</li><li><strong>تحليل السلوك</strong>: اكتشاف أي نشاط غير عادي من خلال تحليل سلوك النقاط النهائية.</li><li><strong>تحسين الاستجابة</strong>: استجابة أسرع وأفضل لأي تهديد.</li></ul>
    <h3>إزاي تصيد النقاط النهائية؟</h3>
    <ul><li><strong>جمع البيانات</strong>: عن النشاط من الأجهزة، زي سجلات الأحداث والعمليات الجارية، باستخدام أدوات EDR.</li><li><strong>تحليل البيانات</strong>: البحث عن أنماط غريبة، وممكن استخدام تعلم الآلة لتسهيل الكشف.</li><li><strong>تحديد الفرضيات</strong>: بناء فرضيات عن التهديدات المحتملة بناءً على البيانات.</li><li><strong>التحقق من الفرضيات</strong>: فحص تفاصيل العمليات والنشاطات الغريبة.</li></ul>
    <h3>التحديات في صيد النقاط النهائية</h3>
    <ul><li><strong>البيانات الكبيرة</strong>: تحليل الكمية الضخمة صعب.</li><li><strong>التشفير والتقنيات الحديثة</strong>: تخلي كشف الأنشطة الضارة أصعب.</li><li><strong>الإنذارات الكاذبة</strong>: تتطلب تصفية الضوضاء وتحليل المهم.</li></ul>
    <h3>استراتيجيات لتعزيز صيد النقاط النهائية</h3>
    <ul><li><strong>استخدام أدوات متقدمة</strong>: زي EDR لتحسين كشف التهديدات وتحليل السلوك.</li><li><strong>التحديث المستمر</strong>: تحديث الأنظمة بانتظام لتقليل الثغرات.</li><li><strong>التدريب والتوعية</strong>: توعية الموظفين بطرق التعرف على الأنشطة الغريبة.</li></ul>
    <h3>استجابة سريعة للتهديدات</h3>
    <ul><li><strong>عزل النقطة النهائية</strong>: عزل الجهاز المتأثر لمنع انتشار الهجوم.</li><li><strong>تحليل الأثر</strong>: فهم كيف حصل الهجوم وتأثيره على النظام.</li><li><strong>استعادة الأنظمة</strong>: من النسخ الاحتياطية والتأكد من عدم وجود تهديدات متبقية.</li></ul>
    <h3>الخلاصة</h3>
    <p>صيد النقاط النهائية جزء أساسي من حماية الأنظمة؛ من خلال فهم كيفية عمل الأجهزة وتحليل البيانات بشكل صحيح، المؤسسات تقدر تحسن من أمانها وتقلل خطر الهجمات.</p>
    </div>
    <div class="subtopic" id="endpoint-malware-2">
      <h3 class="sub-heading"><span class="sub-num">3.2</span> نظرة عامة على البرمجيات الخبيثة
        <span class="dim" style="font-size:13px;font-weight:400;"> (Malware Overview)</span>
      </h3>
      <p>البرمجيات الخبيثة (المالوير) هي أي برنامج يتم تصميمه لأغراض ضارة، تهدف للتسبب في أضرار، سرقة معلومات، أو الحصول على السيطرة على أجهزة الكمبيوتر أو الشبكات.</p>
    <h3>أنواع المالوير</h3>
    <div class="table-wrap"><table><thead><tr><th>النوع</th><th>الوصف</th></tr></thead><tbody><tr><td>فيروسات (Viruses)</td><td>تتكاثر بإدخال نسخ من نفسها في برامج أو ملفات أخرى، تسبب أضرارًا وفقدان بيانات</td></tr><tr><td>ديدان (Worms)</td><td>تنتشر عبر الشبكات دون الحاجة لإدخال نفسها في برامج، تستهلك موارد الشبكة وتبطئ الأداء</td></tr><tr><td>تروجان (Trojans)</td><td>تظهر كبرامج شرعية لكنها تقوم بأعمال ضارة مثل سرقة المعلومات أو فتح ثغرات</td></tr><tr><td>برمجيات التجسس (Spyware)</td><td>تراقب نشاط المستخدم وتجمع معلومات حساسة دون علمه، مثل تسجيل ضغطات المفاتيح</td></tr><tr><td>برمجيات الفدية (Ransomware)</td><td>تشفّر بيانات المستخدم وتطلب فدية لفك التشفير</td></tr><tr><td>برمجيات الإعلانات (Adware)</td><td>تعرض إعلانات مزعجة وتجمع معلومات عن عادات التصفح</td></tr><tr><td>Rootkits</td><td>تخفي وجود برامج ضارة أو عمليات غير مرغوب فيها، ما يصعّب اكتشافها وإزالتها</td></tr></tbody></table></div>
    <h3>طرق انتشار المالوير</h3>
    <ul><li><strong>البريد الإلكتروني</strong>: رسائل تحتوي على مرفقات ضارة أو روابط تحميل المالوير.</li><li><strong>البرامج المقرصنة</strong>: تحميل برامج غير قانونية قد تحتوي على المالوير.</li><li><strong>الروابط الضارة</strong>: الضغط على روابط تؤدي لتحميل برمجيات خبيثة.</li><li><strong>التنزيلات من مواقع غير موثوقة</strong>: قد تؤدي لتحميل المالوير بشكل غير مقصود.</li></ul>
    <h3>أعراض الإصابة بالمالوير</h3>
    <ul><li>بطء أداء الجهاز.</li><li>ظهور نوافذ منبثقة غير طبيعية.</li><li>فقدان البيانات أو ملفات مشفرة.</li><li>إعادة توجيه المتصفح إلى مواقع غير مرغوب فيها.</li><li>رسائل تحذيرية غير عادية من برامج مكافحة الفيروسات.</li></ul>
    <h3>كيف تحمي نفسك من المالوير؟</h3>
    <ul><li>تثبيت برامج مكافحة فيروسات موثوقة وتحديثها بانتظام.</li><li>تجنب فتح المرفقات المشبوهة من مصادر غير موثوقة.</li><li>تحديث النظام والبرامج لأحدث الإصدارات.</li><li>تجنب تحميل البرمجيات من مواقع غير موثوقة.</li><li>الحذر من الروابط المشبوهة عبر البريد الإلكتروني.</li></ul>
    <h3>استجابة للمالوير</h3>
    <ul><li><strong>العزل</strong>: عزل الجهاز عن الشبكة عند الشك في الإصابة.</li><li><strong>التحليل</strong>: تحليل نوع المالوير وكيفية دخوله للنظام.</li><li><strong>الإزالة</strong>: استخدام برامج مكافحة الفيروسات لإزالته.</li><li><strong>استعادة البيانات</strong>: من النسخ الاحتياطية إذا لزم الأمر.</li></ul>
    <h3>الخلاصة</h3>
    <p>المالوير تهديد كبير للأمان السيبراني؛ من خلال التعرف على أنواعه وطرق انتشاره، يمكن للأفراد والشركات اتخاذ خطوات وقائية لحماية أنظمتهم وبياناتهم.</p>
    </div>
    <div class="subtopic" id="endpoint-malware-3">
      <h3 class="sub-heading"><span class="sub-num">3.3</span> معرفات الأحداث والتسجيل وأنظمة SIEM
        <span class="dim" style="font-size:13px;font-weight:400;"> (Event IDs, Logging and SIEMs Hunting)</span>
      </h3>
      <p>تعتبر عمليات تسجيل الأحداث ومعرفات الأحداث وأنظمة إدارة المعلومات الأمنية (SIEMs) أدوات حيوية في مجال الصيد الأمني، تساعد المتخصصين في جمع وتحليل البيانات لتحديد الأنشطة غير العادية.</p>
    <h3>معرفات الأحداث (Event IDs)</h3>
    <p>معرفات الأحداث هي رموز فريدة تُستخدم لتحديد أحداث معينة تحدث في أنظمة التشغيل أو التطبيقات، وتساعد في تصنيف وتحليل الأحداث والبحث عن أنماط معينة.</p>
    <div class="table-wrap"><table><thead><tr><th>المعرف (Windows)</th><th>الدلالة</th></tr></thead><tbody><tr><td>Event ID 4624</td><td>تسجيل دخول ناجح</td></tr><tr><td>Event ID 4625</td><td>محاولة تسجيل دخول فاشلة</td></tr><tr><td>Event ID 5140</td><td>فتح ملف مشترك</td></tr></tbody></table></div>
    <h3>التسجيل (Logging)</h3>
    <p>التسجيل هو عملية جمع البيانات المتعلقة بالأحداث التي تحدث في النظام (الوقت، المستخدم، الإجراءات).</p>
    <div class="table-wrap"><table><thead><tr><th>النوع</th><th>الوصف</th></tr></thead><tbody><tr><td>تسجيل النظام</td><td>أحداث متعلقة بنظام التشغيل</td></tr><tr><td>تسجيل التطبيق</td><td>أحداث متعلقة بالتطبيقات المثبتة</td></tr><tr><td>تسجيل الأمان</td><td>أحداث متعلقة بالأمان، مثل محاولات تسجيل الدخول</td></tr></tbody></table></div>
    <h3>أنظمة إدارة المعلومات الأمنية (SIEMs)</h3>
    <p>نظام يجمع بيانات السجلات من مصادر مختلفة (خوادم، شبكات، أجهزة أمنية) ويحللها في الوقت الحقيقي.</p>
    <ul><li><strong>جمع البيانات</strong>: من مصادر متعددة وتحليلها.</li><li><strong>تنبيه</strong>: تنبيه فرق الأمن عند اكتشاف نشاط غير عادي.</li><li><strong>التقارير</strong>: تقارير شاملة عن الأحداث الأمنية والتحليلات.</li><li><strong>فوائده</strong>: تحليل مركزي، استجابة في الوقت الحقيقي، وتسهيل التحقيقات.</li></ul>
    <h3>صيد الأحداث باستخدام SIEM</h3>
    <ul><li><strong>تحديد الأنماط</strong>: تحليل سجلات الأحداث لتحديد الأنماط المشبوهة.</li><li><strong>استخدام معرفات الأحداث</strong>: البحث عن معرفات معينة للتعرف على محاولات الهجوم.</li><li><strong>تكوين التنبيهات</strong>: تنبيهات مخصصة بناءً على الأنشطة غير العادية.</li></ul>
    <h3>التحديات</h3>
    <ul><li><strong>الكم الهائل من البيانات</strong>: معالجتها معقدة وتستغرق وقتًا.</li><li><strong>الإنذارات الكاذبة</strong>: تنبيهات غير دقيقة تشتت الانتباه.</li><li><strong>التكوين الصحيح</strong>: يتطلب خبرة لتحقيق أفضل النتائج.</li></ul>
    <h3>استراتيجيات لتحسين الصيد الأمني</h3>
    <ul><li>تحديثات دورية لأنظمة SIEM ومعرفات الأحداث.</li><li>تدريب فرق الأمن على تحليل بيانات السجلات بشكل فعال.</li><li>التعاون بين الفرق المختلفة لتعزيز الأمان والاستجابة للحوادث.</li></ul>
    <h3>الخلاصة</h3>
    <p>معرفات الأحداث والتسجيل وأنظمة SIEM أدوات أساسية في استراتيجيات الصيد الأمني، ومن خلال استخدامها بفعالية يمكن للمؤسسات تحسين قدرتها على كشف التهديدات والاستجابة لها بسرعة.</p>
    </div>
  </section>
  <hr class="section-divider">
  <section class="stage" id="sysmon-hunting">
    <h2><span class="num">4</span> الصيد باستخدام Sysmon <span class="dim" style="font-size:14px;font-weight:400;">(Sysmon-Based Hunting)</span></h2>
    <div class="subtopic" id="sysmon-hunting-1">
      <h3 class="sub-heading"><span class="sub-num">4.1</span> مقدمة إلى Sysmon
        <span class="dim" style="font-size:13px;font-weight:400;"> (Introduction to Sysmon)</span>
      </h3>
      <p><strong>Sysmon (System Monitor)</strong> هو أداة من مجموعة Sysinternals طورتها Microsoft، تُستخدم لرصد الأحداث والتغييرات في النظام وتسجيلها. تُعتبر مفيدة جدًا في الأمن السيبراني والتحليلات الجنائية، وتوفر معلومات تفصيلية حول الأنشطة على أنظمة Windows.</p>
    <h3>ما هو Sysmon؟</h3>
    <ul><li><strong>وظيفته</strong>: يسجل معلومات حول عمليات النظام، اتصالات الشبكة، وأحداث الملفات، مما يساعد في تحديد الأنشطة المشبوهة أو غير العادية.</li><li><strong>إعداده</strong>: يمكن تكوين Sysmon لتسجيل أنواع معينة من الأحداث فقط، للتركيز على الأنشطة الأكثر أهمية.</li></ul>
    <h3>الأحداث التي يتم تسجيلها</h3>
    <div class="table-wrap"><table><thead><tr><th>المعرف</th><th>الحدث</th></tr></thead><tbody><tr><td>Event ID 1</td><td>إنشاء عملية جديدة، بما في ذلك معلومات عن العملية الأم</td></tr><tr><td>Event ID 11</td><td>تغييرات في ملف، مفيدة لمراقبة الأنشطة المشبوهة</td></tr><tr><td>Event ID 3</td><td>تفاصيل اتصالات الشبكة، تساعد في تحديد أنشطة غير مصرح بها</td></tr><tr><td>Event ID 22</td><td>تتبع الاتصالات مع عناوين IP خارجية، يساعد في كشف اتصالات مشبوهة</td></tr></tbody></table></div>
    <h3>كيفية تثبيت Sysmon</h3>
    <ul><li>تحميل Sysmon من موقع Sysinternals الرسمي.</li><li>فتح موجه الأوامر (Command Prompt) كمسؤول (Administrator).</li><li>تثبيته باستخدام أمر التثبيت المرفق مع ملف تكوين مخصص (config file) لتحديد الأحداث المطلوب تسجيلها.</li></ul>
    <h3>الخلاصة</h3>
    <p>Sysmon أداة أساسية لأي عملية صيد تهديدات على مستوى الأجهزة، لأنها بتوفر رؤية تفصيلية جدًا لكل اللي بيحصل على مستوى العمليات والملفات والشبكة، وبتبقى نقطة انطلاق لأي تحليل جنائي أو كشف لهجمات متقدمة.</p>
    </div>
    <div class="subtopic" id="sysmon-hunting-2">
      <h3 class="sub-heading"><span class="sub-num">4.2</span> صيد حقن الشيفرة باستخدام Sysmon
        <span class="dim" style="font-size:13px;font-weight:400;"> (Hunting Code Injection with Sysmon)</span>
      </h3>
      <p>حقن الشيفرة هو نوع من الهجمات السيبرانية حيث يتم إدخال شيفرة ضارة في تطبيق، مما يمكن المهاجم من تنفيذ أوامر غير مصرح بها. يُعتبر استخدام Sysmon أداة فعالة في الكشف عن وتحليل مثل هذه الهجمات من خلال مراقبة الأحداث والأنشطة غير العادية في النظام.</p>
    <h3>إعداد Sysmon لمراقبة حقن الشيفرة</h3>
    <p>تأكد من تثبيت Sysmon على الأنظمة المستهدفة، واستخدم ملف تكوين مخصص لتفعيل تسجيل الأحداث التالية:</p>
    <div class="table-wrap"><table><thead><tr><th>المعرف</th><th>الحدث</th></tr></thead><tbody><tr><td>Event ID 1</td><td>إنشاء عملية جديدة</td></tr><tr><td>Event ID 5</td><td>تعيين صورة عملية جديدة</td></tr><tr><td>Event ID 10</td><td>إنشاء دالة الذاكرة</td></tr></tbody></table></div>
    <h3>المراقبة من خلال الأحداث</h3>
    <ul><li><strong>حدث إنشاء عملية (Event ID 1)</strong>: ابحث عن عمليات أُنشئت بواسطة عمليات غير معروفة أو مفاجئة؛ غالبًا ما تُستخدم أدوات مثل PowerShell أو cmd.exe لتنفيذ أوامر حقن الشيفرة.</li><li><strong>حدث تعيين صورة العملية (Event ID 5)</strong>: تحقق من الأحداث حيث يتم تحميل صور عملية غير موثوقة.</li><li><strong>حدث إنشاء دالة الذاكرة (Event ID 10)</strong>: مؤشر محتمل على هجوم حقن الشيفرة، خصوصًا لو تم إنشاء دوال جديدة في الذاكرة بشكل غير معتاد.</li></ul>
    <h3>تحليل الأحداث المشتبه بها</h3>
    <ul><li><strong>تحديد الأنماط</strong>: ابحث عن عمليات إنشاء متعددة تحدث في فترة زمنية قصيرة، وتحقق من العمليات التي تنشئ اتصالات خارجية غير عادية.</li><li><strong>استخدام الأدوات المساعدة</strong>: مثل Sysinternals Process Explorer لمراقبة العمليات الجارية والتحقق من العمليات المشبوهة.</li></ul>
    <h3>مراقبة الأنشطة الشبكية</h3>
    <ul><li><strong>Event ID 3 (اتصالات الشبكة)</strong>: تحقق من الاتصالات التي تنشئها العمليات المشتبه بها؛ وجود اتصالات غير معتادة قد يشير لمحاولة اتصال بخادم خارجي.</li></ul>
    <h3>استخدام تقنيات إضافية</h3>
    <ul><li><strong>تحليل الذاكرة</strong>: باستخدام أدوات مثل Volatility لتحديد حقن الشيفرة في العمليات.</li><li><strong>التقارير والتحليلات</strong>: إعداد تقارير دورية عن الأنشطة المشبوهة كجزء من الاستراتيجية الأمنية.</li></ul>
    <h3>التعامل مع النتائج</h3>
    <ul><li><strong>التصرف الفوري</strong>: عزل النظام المتأثر أو إجراء فحص شامل عند اكتشاف نشاط مشبوه.</li><li><strong>تحليل الجذر</strong>: فهم كيف تم تنفيذ حقن الشيفرة وتطبيق إجراءات لمنع تكراره.</li></ul>
    <h3>تحسينات مستمرة</h3>
    <ul><li>تحديث تكوين Sysmon باستمرار بناءً على التحليلات السابقة.</li><li>تدريب فريق الأمان على استخدام Sysmon بفعالية لتحسين قدراتهم في الكشف عن حقن الشيفرة.</li></ul>
    <h3>الخلاصة</h3>
    <p>Sysmon أداة قوية في صيد هجمات حقن الشيفرة من خلال قدرتها على تسجيل وتحليل الأحداث غير العادية؛ إعدادها بشكل مناسب وتحليل بياناتها بشكل دوري يعزز أمن الأنظمة وسرعة كشف التهديدات.</p>
    </div>
    <div class="subtopic" id="sysmon-hunting-3">
      <h3 class="sub-heading"><span class="sub-num">4.3</span> صيد Mimikatz باستخدام Sysmon
        <span class="dim" style="font-size:13px;font-weight:400;"> (Hunting Mimikatz with Sysmon)</span>
      </h3>
      <p><strong>Mimikatz</strong> أداة مشهورة تُستخدم لاستخراج كلمات المرور والرموز المميزة من ذاكرة Windows، وتعتبر خطرة جدًا على الأنظمة، لذا استخدام Sysmon لمراقبة الأنشطة المرتبطة بها يساعد في الكشف عن هذه الهجمات ومنعها.</p>
    <h3>إعداد Sysmon لمراقبة Mimikatz</h3>
    <p>استخدم ملف تكوين خاص يركز على الأحداث المرتبطة بعمليات Mimikatz:</p>
    <div class="table-wrap"><table><thead><tr><th>المعرف</th><th>الحدث</th></tr></thead><tbody><tr><td>Event ID 1</td><td>إنشاء عملية جديدة</td></tr><tr><td>Event ID 5</td><td>تحميل صورة العملية</td></tr><tr><td>Event ID 10</td><td>استخدام API لتهيئة دوال الذاكرة</td></tr><tr><td>Event ID 11</td><td>إغلاق عملية</td></tr></tbody></table></div>
    <h3>المراقبة من خلال الأحداث</h3>
    <ul><li><strong>حدث إنشاء عملية (Event ID 1)</strong>: ابحث عن عمليات تُنشأ بشكل غير متوقع، خاصة المرتبطة بـ <code>cmd.exe</code> أو <code>powershell.exe</code>، حيث قد تُستخدم لتشغيل Mimikatz.</li><li><strong>حدث تحميل صورة العملية (Event ID 5)</strong>: تحقق من العمليات التي تحمّل صورًا غير معروفة؛ Mimikatz غالبًا ما يعمل في سياق <code>lsass.exe</code>.</li><li><strong>حدث إعداد الذاكرة (Event ID 10)</strong>: مؤشر على استخدام Mimikatz، حيث يقوم بمسح ذاكرة <code>lsass.exe</code> لاستخراج كلمات المرور.</li></ul>
    <h3>تحليل الأنشطة</h3>
    <ul><li><strong>تحديد الأنماط</strong>: ابحث عن عمليات إنشاء متعددة في فترة زمنية قصيرة، خاصة من مستخدمين غير مصرح لهم، وتحقق من استخدام <code>mimikatz.exe</code> أو أسماء مماثلة.</li><li><strong>مراجعة الأحداث المرتبطة</strong>: استخدم Event Viewer لتحليل الأحداث والبحث عن محاولات الوصول للذاكرة.</li></ul>
    <h3>مراقبة الأنشطة الشبكية</h3>
    <ul><li><strong>Event ID 3 (اتصالات الشبكة)</strong>: تحقق من الاتصالات التي تنشئها العمليات المشتبه بها، خاصة محاولات الاتصال بخوادم خارجية.</li></ul>
    <h3>استخدام تقنيات إضافية</h3>
    <ul><li><strong>تحليل الذاكرة</strong>: باستخدام Volatility لاكتشاف Mimikatz أو أدوات مشابهة.</li><li><strong>التحليلات المتقدمة</strong>: إعداد تنبيهات عند اكتشاف عمليات مريبة أو محاولة الوصول لذاكرة <code>lsass.exe</code>.</li></ul>
    <h3>التعامل مع النتائج</h3>
    <ul><li><strong>الإجراءات الفورية</strong>: عزل النظام المتأثر أو مراجعة الأذونات عند اكتشاف نشاط مشبوه.</li><li><strong>تحليل الجذر</strong>: تحليل أسباب الهجوم واتخاذ إجراءات لمنع تكراره.</li></ul>
    <h3>تحسين مستمر</h3>
    <ul><li>تحديث تكوين Sysmon باستمرار بناءً على نتائج التحليل السابقة.</li><li>تدريب الفرق على استخدام Sysmon لكشف هجمات Mimikatz والاستجابة لها.</li></ul>
    <h3>الخلاصة</h3>
    <p>إعداد Sysmon بشكل مناسب وتحليل البيانات المسجلة يعزز القدرة على الكشف عن هجمات Mimikatz واستخراج بيانات الاعتماد؛ التفاعل السريع مع الأنشطة المريبة جزء مهم من استراتيجية الأمان الناجحة.</p>
    </div>
    <div class="subtopic" id="sysmon-hunting-4">
      <h3 class="sub-heading"><span class="sub-num">4.4</span> صيد الماكروز باستخدام Sysmon
        <span class="dim" style="font-size:13px;font-weight:400;"> (Hunting Macros with Sysmon)</span>
      </h3>
      <p>الماكروز، خصوصًا في تطبيقات مثل Microsoft Office، يمكن أن تُستخدم كوسيلة لنشر البرمجيات الضارة، حيث يستخدم المهاجمون الماكروز لتنفيذ شيفرات خبيثة دون علم المستخدم. استخدام Sysmon لمراقبة الأنشطة المتعلقة بالماكرو وسيلة فعالة لكشف التهديدات.</p>
    <h3>إعداد Sysmon لمراقبة الماكروز</h3>
    <p>استخدم ملف تكوين مخصص للتركيز على الأحداث التالية:</p>
    <div class="table-wrap"><table><thead><tr><th>المعرف</th><th>الحدث</th></tr></thead><tbody><tr><td>Event ID 1</td><td>إنشاء عملية جديدة</td></tr><tr><td>Event ID 10</td><td>تهيئة دوال الذاكرة</td></tr><tr><td>Event ID 11</td><td>إغلاق عملية</td></tr></tbody></table></div>
    <h3>المراقبة من خلال الأحداث</h3>
    <ul><li><strong>حدث إنشاء عملية (Event ID 1)</strong>: ابحث عن عمليات تُنشأ بعد فتح مستندات Office، زي <code>winword.exe</code> أو <code>excel.exe</code>، ما قد يشير لتشغيل ماكرو ضار.</li><li><strong>حدث تحميل صورة العملية (Event ID 5)</strong>: تحقق من أي عمليات تحمّل صورًا غير معروفة أو مشبوهة بعد تنفيذ الماكرو.</li><li><strong>حدث استخدام الذاكرة (Event ID 10)</strong>: تحقق من أنشطة استخدام الذاكرة بشكل غير عادي، حيث ممكن تُستخدم الماكروز لتحميل وتنفيذ شيفرات ضارة.</li></ul>
    <h3>تحليل الأنشطة المشتبه بها</h3>
    <ul><li><strong>تحديد الأنماط</strong>: ابحث عن عمليات إنشاء متعددة مرتبطة بفتح مستندات Office تشير لسلوكيات غير طبيعية.</li><li><strong>تحليل العمليات</strong>: باستخدام Process Explorer أو Process Monitor للتحقق من العمليات المشبوهة.</li></ul>
    <h3>مراقبة الأنشطة الشبكية</h3>
    <ul><li><strong>Event ID 3 (اتصالات الشبكة)</strong>: تحقق من الاتصالات التي تنشئها العمليات المشبوهة، خاصة محاولات الاتصال بخوادم خارجية لتحميل برمجيات ضارة.</li></ul>
    <h3>استخدام تقنيات إضافية</h3>
    <ul><li><strong>تحليل ملفات الماكرو</strong>: مراجعة مستندات Office والماكروز المضمنة باستخدام أدوات مثل OLETools.</li><li><strong>التحليلات المتقدمة</strong>: إعداد تنبيهات عند اكتشاف أنشطة مشبوهة، مثل تشغيل ماكرو في مستند غير معروف.</li></ul>
    <h3>التعامل مع النتائج</h3>
    <ul><li><strong>الإجراءات الفورية</strong>: عزل النظام المتأثر أو إجراء فحص شامل عند اكتشاف نشاط مشبوه.</li><li><strong>تحليل الجذر</strong>: فهم كيف استُخدم الماكرو لأغراض خبيثة.</li></ul>
    <h3>تحسين مستمر</h3>
    <ul><li>تحديث تكوين Sysmon باستمرار بناءً على التحليلات السابقة وأي تهديدات جديدة.</li><li>تدريب فريق الأمان على كشف الماكروز الضارة والاستجابة لها.</li></ul>
    <h3>الخلاصة</h3>
    <p>باستخدام Sysmon لمراقبة الأنشطة المتعلقة بالماكرو، يمكن تعزيز قدرة فريق الأمان على الكشف عن البرمجيات الضارة التي تُستخدم من خلال الماكروز، من خلال تفاعل سريع مع الأنشطة المريبة وتحليل دقيق للأحداث.</p>
    </div>
  </section>
  <hr class="section-divider">
  <section class="stage" style="margin-bottom: 0;">
    <h2 style="border-bottom:none; margin-bottom:12px;">الخلاصة</h2>
    <p>
      كدا غطينا كورس صيد التهديدات بالكامل عبر 15 موضوع مقسّمة على 4 محاور: <strong>أساسيات صيد التهديدات</strong>
      (المفهوم، المصطلحات، استخبارات التهديدات، وبناء الفرضيات)، <strong>الصيد في الشبكة</strong> (تحليل حركة
      المرور، اكتشاف التسلل، الحركة المشبوهة، وصيد الويب شيلز)، <strong>صيد النقاط النهائية والبرمجيات الخبيثة</strong>
      (أساسيات صيد الـ Endpoints، أنواع المالوير، ومعرفات الأحداث وأنظمة SIEM)، وأخيرًا <strong>الصيد باستخدام
      Sysmon</strong> كتطبيق عملي لاكتشاف حقن الشيفرة وMimikatz والماكروز الضارة. دي الأساسيات اللي أي صياد تهديدات
      (Threat Hunter) لازم يبني عليها مهاراته العملية.
    </p>
  </section>
  <footer>
    <div>نوتس صيد التهديدات — للمراجعة والاستخدام الشخصي فقط.</div>
    <a class="back-to-top" href="#top">⬆ رجوع لأعلى الصفحة</a>
  </footer>
</div>
</div>
