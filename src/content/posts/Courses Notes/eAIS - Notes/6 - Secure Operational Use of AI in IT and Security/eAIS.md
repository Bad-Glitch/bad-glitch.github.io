---
id: "eais-module-6"
title: "Secure Operational Use of AI in IT and Security"
published: 2026-09-20
category: "Courses Notes"
course: "eAIS"
module: 6
---
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Module 6: الاستخدام التشغيلي الآمن للـ AI في IT وأمن المعلومات</title>
published: 2026-09-20
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Module 6: الاستخدام التشغيلي الآمن للـ AI في IT وأمن المعلومات</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
  :root{
    /* --- Calm, low-contrast dark palette with soft gradients --- */
    --bg-1: #12141C;
    --bg-2: #171B26;
    --surface: #1A1F2B;
    --surface-2: #1F2532;
    --border: #2A3140;
    --border-soft: #232936;

    --text: #D9DDE6;
    --text-soft: #C3C9D6;
    --muted: #8B93A3;

    --accent-a: #8C9EFF;   /* soft periwinkle */
    --accent-b: #6FE3C9;   /* soft mint/teal */
    --accent-grad: linear-gradient(90deg, var(--accent-a), var(--accent-b));

    --amber: #E8B979;      /* softened amber, less saturated */
    --amber-soft: rgba(232,185,121,0.09);
    --amber-border: rgba(232,185,121,0.28);

    --radius: 12px;
    --mono: 'IBM Plex Mono', 'Courier New', monospace;
  }

  * { box-sizing: border-box; }

  html, body {
    margin: 0;
    padding: 0;
    direction: rtl;
    text-align: right;
    background: var(--bg-1);
  }

  body {
    font-family: 'Cairo', 'Segoe UI', Tahoma, sans-serif;
    line-height: 2;
    font-size: 16.5px;
    color: var(--text);
    background:
      radial-gradient(1100px 500px at 15% -5%, rgba(140,158,255,0.07), transparent 60%),
      radial-gradient(900px 500px at 85% 10%, rgba(111,227,201,0.05), transparent 60%),
      linear-gradient(180deg, var(--bg-1) 0%, var(--bg-2) 100%);
    background-attachment: fixed;
  }

  .page {
    max-width: 840px;
    margin: 0 auto;
    padding: 48px 22px 100px;
  }

  /* ---------- Header banner ---------- */
  .banner {
    position: relative;
    overflow: hidden;
    background: linear-gradient(155deg, #1B2030 0%, #191E2C 55%, #1D2434 100%);
    border: 1px solid var(--border-soft);
    border-radius: 18px;
    padding: 40px 36px;
    margin-bottom: 26px;
  }
  .banner::before{
    content: "";
    position: absolute;
    inset-inline-end: -80px;
    top: -80px;
    width: 260px;
    height: 260px;
    background: radial-gradient(circle, rgba(140,158,255,0.14) 0%, transparent 70%);
    pointer-events: none;
  }
  .banner::after{
    content: "";
    position: absolute;
    inset-inline-start: -60px;
    bottom: -100px;
    width: 240px;
    height: 240px;
    background: radial-gradient(circle, rgba(111,227,201,0.10) 0%, transparent 70%);
    pointer-events: none;
  }
  .banner .kicker {
    display: inline-block;
    font-family: var(--mono);
    font-size: 12.5px;
    letter-spacing: 0.03em;
    color: #C9D3FF;
    background: rgba(140,158,255,0.10);
    border: 1px solid rgba(140,158,255,0.28);
    border-radius: 999px;
    padding: 5px 14px;
    margin-bottom: 20px;
    direction: ltr;
  }
  .banner h1 {
    margin: 0 0 14px;
    font-size: 29px;
    font-weight: 800;
    line-height: 1.55;
    background: var(--accent-grad);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: #C9D3FF; /* fallback */
  }
  .banner .lede {
    color: var(--muted);
    font-size: 15.5px;
    line-height: 1.95;
    max-width: 620px;
    margin: 0 0 24px;
  }
  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 9px;
  }
  .tag {
    font-size: 13px;
    color: #A9E8D8;
    background: rgba(111,227,201,0.07);
    border: 1px solid rgba(111,227,201,0.25);
    border-radius: 999px;
    padding: 5px 13px;
  }

  /* ---------- Table of contents ---------- */
  .toc {
    background: var(--surface);
    border: 1px solid var(--border-soft);
    border-radius: 16px;
    padding: 26px 28px 22px;
    margin-bottom: 50px;
  }
  .toc-title {
    font-weight: 700;
    font-size: 15px;
    color: var(--text-soft);
    margin-bottom: 16px;
    padding-bottom: 12px;
    border-bottom: 1px solid var(--border-soft);
  }
  .toc-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6px 18px;
  }
  .toc-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 8px;
    border-radius: 8px;
    color: var(--text-soft);
    text-decoration: none;
    font-size: 14px;
    border-bottom: none;
    transition: background 0.15s ease;
  }
  .toc-item:hover { background: rgba(140,158,255,0.06); }
  .toc-num {
    flex: none;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--mono);
    font-size: 11.5px;
    font-weight: 500;
    color: #0F1219;
    background: var(--accent-grad);
  }
  .toc-num-plain {
    background: none;
    color: var(--muted);
    font-size: 16px;
  }

  /* ---------- Typography ---------- */
  h1, h2, h3, h4 { font-weight: 700; }

  h2 {
    display: flex;
    align-items: center;
    gap: 14px;
    font-size: 21px;
    margin: 64px 0 22px;
    padding-bottom: 16px;
    border-bottom: 1px solid var(--border-soft);
    color: #EDEFF4;
  }
  h2 .num {
    flex: none;
    width: 38px;
    height: 38px;
    border-radius: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--mono);
    font-size: 15px;
    font-weight: 600;
    color: #10131C;
    background: var(--accent-grad);
  }
  h2 .htext { line-height: 1.5; }

  h3 {
    font-size: 17.5px;
    margin: 32px 0 14px;
    color: var(--accent-a);
    display: flex;
    align-items: center;
    gap: 10px;
  }
  h3::before {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--accent-grad);
    flex: none;
  }

  h4 {
    font-size: 15px;
    margin: 22px 0 10px;
    color: var(--text-soft);
  }

  p { margin: 0 0 17px; color: var(--text); }

  strong { color: #F1F3F8; font-weight: 700; }

  a { color: var(--accent-a); text-decoration: none; border-bottom: 1px dashed rgba(140,158,255,0.45); }

  hr {
    border: none;
    height: 1px;
    margin: 50px 0;
    background: linear-gradient(90deg, transparent, var(--border), transparent);
  }

  ul, ol {
    margin: 0 0 18px;
    padding-inline-start: 24px;
  }
  li { margin-bottom: 9px; color: var(--text); }
  li::marker { color: var(--accent-b); }
  li > ul, li > ol { margin-top: 9px; }

  /* ---------- Blockquotes = security / note callouts ---------- */
  blockquote {
    margin: 24px 0;
    padding: 17px 22px;
    background: var(--amber-soft);
    border: 1px solid var(--amber-border);
    border-inline-start: 3px solid var(--amber);
    border-radius: 10px;
    color: #E3D8C4;
  }
  blockquote p { margin: 0; color: inherit; line-height: 1.85; }
  blockquote strong { color: var(--amber); }

  /* ---------- Tables ---------- */
  .table-wrap {
    overflow-x: auto;
    margin: 22px 0;
    border: 1px solid var(--border-soft);
    border-radius: 12px;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 14.3px;
    min-width: 480px;
  }
  thead th {
    background: linear-gradient(180deg, var(--surface-2), var(--surface));
    color: var(--accent-a);
    font-weight: 700;
    text-align: start;
    padding: 13px 15px;
    border-bottom: 1px solid var(--border-soft);
    white-space: nowrap;
  }
  tbody td {
    padding: 12px 15px;
    border-bottom: 1px solid var(--border-soft);
    color: var(--text-soft);
    vertical-align: top;
  }
  tbody tr:last-child td { border-bottom: none; }
  tbody tr:nth-child(even) { background: rgba(255,255,255,0.012); }
  tbody tr:hover { background: rgba(140,158,255,0.035); }

  /* ---------- Code ---------- */
  code {
    font-family: var(--mono);
    font-size: 13.3px;
    background: var(--surface-2);
    border: 1px solid var(--border-soft);
    border-radius: 4px;
    padding: 2px 6px;
    direction: ltr;
    unicode-bidi: embed;
    color: var(--accent-b);
  }
  .code-wrap {
    overflow-x: auto;
    margin: 22px 0;
  }
  pre {
    background: linear-gradient(180deg, var(--surface), var(--bg-1));
    border: 1px solid var(--border-soft);
    border-inline-start: 3px solid var(--accent-a);
    border-radius: 10px;
    padding: 19px 22px;
    direction: ltr;
    text-align: left;
    margin: 0;
  }
  pre code {
    background: none;
    border: none;
    padding: 0;
    color: #BFC7D6;
    font-size: 13.3px;
    line-height: 1.75;
  }

  /* ---------- Footer ---------- */
  .footer-note {
    margin-top: 70px;
    padding-top: 26px;
    border-top: 1px solid var(--border-soft);
    color: var(--muted);
    font-size: 13.5px;
    text-align: center;
  }

  @media (max-width: 640px) {
    .page { padding: 30px 14px 70px; }
    .banner { padding: 28px 22px; }
    .banner h1 { font-size: 22px; }
    .toc-grid { grid-template-columns: 1fr; }
    h2 { font-size: 18px; gap: 10px; }
    h2 .num { width: 32px; height: 32px; font-size: 13px; }
  }
</style>
</head>
<body>
<div class="page">

  <div class="banner">
    <span class="kicker">eAIS · Module 6 · Study Notes</span>
    <h1>الاستخدام التشغيلي الآمن للـ AI في IT وأمن المعلومات</h1>
    <p class="lede">نوتس مذاكرة منظمة تغطي إزاي فرق IT وSOC وDevSecOps تستخدم أدوات الـ AI بأمان في شغلها اليومي — مبادئ الاستخدام الآمن، أنماط الفشل في كل workflow، فهم الـ Hallucinations وليه بتحصل، ومخاطر المخرجات المولَّدة قبل ما توصل لأنظمة حقيقية.</p>
    <div class="tags">
      <span class="tag">Secure AI Use</span>
      <span class="tag">AI Hallucinations</span>
      <span class="tag">Output Validation</span>
      <span class="tag">Change Management</span>
      <span class="tag">DevSecOps</span>
    </div>
  </div>


<nav class="toc"><div class="toc-title">محتويات الموديول</div><div class="toc-grid">
<a class="toc-item" href="#sec1"><span class="toc-num">1</span><span>مقدمة عن الاستخدام الآمن للـ AI</span></a>
<a class="toc-item" href="#sec2"><span class="toc-num">2</span><span>مخاطر استخدام الـ AI في IT، SOC، وDevSecOps</span></a>
<a class="toc-item" href="#sec3"><span class="toc-num">3</span><span>فهم الـ AI Hallucinations</span></a>
<a class="toc-item" href="#sec4"><span class="toc-num">4</span><span>مخاطر مخرجات الـ AI المولَّدة</span></a>
<a class="toc-item" href="#summary"><span class="toc-num toc-num-plain">•</span><span>الخلاصة العامة للموديول</span></a>
</div></nav>

<h1>Module 6: الاستخدام التشغيلي الآمن للـ AI في IT وأمن المعلومات (Secure Operational Use of AI in IT &amp; Security Workflows)</h1>
<blockquote>
<p>نوتس مذاكرة منظمة لسادس موديول في كورس eAIS — هنا بننقلب الاتجاه بالكامل: بدل ما نهاجم أنظمة الـ AI، بنتعلم إزاي فرق IT وSOC وDevSecOps تستخدم أدوات الـ AI في شغلها اليومي من غير ما تجيب لنفسها مخاطر تشغيلية حقيقية.</p>
</blockquote>
<hr />
<h2 id="sec1"><span class="num">1</span><span class="htext">مقدمة عن الاستخدام الآمن للـ AI</span></h2>
<h3>إيه هو الـ Secure AI Use؟</h3>
<blockquote>
<p>الاستخدام الآمن للـ AI بيشير للاستخدام الآمن، المتحكَّم فيه، والمسؤول لأدوات الـ AI في workflows تشغيلية.</p>
</blockquote>
<p>في الكورس ده، التركيز مش على مهاجمة أنظمة الـ AI أو استغلال تطبيقاتها. بدل كده، التركيز على إزاي فرق IT، محللي SOC، مهندسي DevSecOps، وممارسي الأمان يقدروا يستخدموا الـ AI من غير ما يقدّموا مخاطر غير ضرورية للبيئات الحقيقية.</p>
<p>الاستخدام الآمن للـ AI معناه معاملة الـ AI كمساعد، مش كسلطة — الـ AI يقدر يساعد في توليد أفكار، مسودات، أوامر، سكربتات، استعلامات، وإعدادات، لكن البشر والضوابط التشغيلية الموجودة لازم لسه هما اللي يحددوا إذا كان الخرج آمن، دقيق، مصرَّح، ومناسب.</p>
<h3>ليه الـ AI بيتستخدم في الـ Workflows التشغيلية</h3>
<p>أدوات الـ AI بتتستخدم بشكل متزايد للمساعدة في الشغل التقني اليومي، وبتحسّن السرعة والإنتاجية في المهام المتكررة أو الحساسة للوقت:</p>
<div class="table-wrap"><table>
<thead>
<tr>
<th>حالة الاستخدام</th>
<th>مثال</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>توليد سكربتات</strong></td>
<td>إنشاء سكربتات PowerShell، Bash، أو Python</td>
</tr>
<tr>
<td><strong>تحليل اللوجات</strong></td>
<td>تلخيص اللوجات أو تحديد أنماط غير عادية</td>
</tr>
<tr>
<td><strong>هندسة الاكتشاف (Detection Engineering)</strong></td>
<td>صياغة استعلامات SIEM أو قواعد اكتشاف</td>
</tr>
<tr>
<td><strong>استكشاف الأعطال (Troubleshooting)</strong></td>
<td>شرح الأخطاء أو التوصية بإصلاحات</td>
</tr>
<tr>
<td><strong>DevSecOps</strong></td>
<td>توليد فحوصات pipeline أو قوالب infrastructure-as-code</td>
</tr>
<tr>
<td><strong>عمليات الأمان</strong></td>
<td>تلخيص التنبيهات، الحوادث، أو ملاحظات التحقيق</td>
</tr>
</tbody>
</table></div>
<h3>الخطر التشغيلي الأساسي</h3>
<p>الخطر الرئيسي هو إن المستخدمين ممكن يثقوا في المخرجات المولَّدة من الـ AI بسرعة زيادة عن اللزوم. إجابة مولَّدة من AI ممكن تبان صحيحة، تسمع واثقة، وتظهر صالحة تقنيًا، لكن لسه فيها أخطاء بتخلق تأثير تشغيلي حقيقي لما تتطبَّق على أنظمة إنتاج.</p>
<p>مثلًا، مهندس ممكن يطلب من مساعد AI يولّد قاعدة firewall، إعداد Terraform، سكربت PowerShell، استعلام SIEM، أو أمر Linux — والخرج ممكن يبان مفيد، لكن لسه غلط بطرق مش واضحة من أول نظرة.</p>
<h3>أنماط الفشل الشائعة</h3>
<div class="table-wrap"><table>
<thead>
<tr>
<th>الخطر</th>
<th>المثال</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>صياغة (syntax) غير صحيحة</strong></td>
<td>أمر أو إعداد بيفشل عند التنفيذ</td>
</tr>
<tr>
<td><strong>افتراضات خطيرة</strong></td>
<td>افتراض المنطقة السحابية، الـ subnet، الخدمة، أو نموذج الصلاحيات الغلط</td>
</tr>
<tr>
<td><strong>وصول واسع زيادة عن اللزوم</strong></td>
<td>السماح بوصول أوسع من المطلوب</td>
</tr>
<tr>
<td><strong>إعدادات افتراضية غير آمنة</strong></td>
<td>تعطيل التشفير، الـ logging، التحقق، أو التوثيق</td>
</tr>
<tr>
<td><strong>أوامر مدمِّرة</strong></td>
<td>حذف ملفات، تغيير صلاحيات، أو تعديل موارد إنتاج</td>
</tr>
<tr>
<td><strong>تفسيرات مضلِّلة</strong></td>
<td>شرح واثق لتوصية غير صحيحة</td>
</tr>
</tbody>
</table></div>
<h3>الـ AI كمساعد، مش كسلطة</h3>
<p><strong>العقلية الصحيحة:</strong> workflow آمن للـ AI بيفترض إن الخرج المولَّد من AI غير موثوق لحد ما يتم التحقق منه. ده مش معناه إن الـ AI عديم الفايدة أو غير آمن افتراضيًا — معناه إن الـ AI المفروض يتستخدم زي ما بتستخدم مساعد مبتدئ أو مولّد مسودات: مفيد، سريع، ومفيد، لكن لسه محتاج مراجعة.</p>
<p>المشغّل البشري يفضل مسؤول عن قرار استخدام الخرج أو لأ. <strong>المشغّل البشري يفضل السلطة النهائية — دايمًا.</strong></p>
<h3>استخدام AI غير آمن مقابل استخدام AI آمن</h3>
<div class="table-wrap"><table>
<thead>
<tr>
<th>استخدام AI غير آمن</th>
<th>استخدام AI آمن</th>
</tr>
</thead>
<tbody>
<tr>
<td>نسخ وتشغيل أوامر مولَّدة من AI فورًا</td>
<td>مراجعة والتحقق من الأوامر قبل التنفيذ</td>
</tr>
<tr>
<td>مشاركة لوجات حساسة، اعتمادات، أو بيانات عملاء مع أدوات AI</td>
<td>تصنيف البيانات قبل استخدامها مع AI</td>
</tr>
<tr>
<td>تطبيق تغييرات بنية تحتية مولَّدة مباشرة</td>
<td>اشتراط موافقة قبل نشر التغييرات</td>
</tr>
<tr>
<td>افتراض إن خرج AI صحيح لأنه بيسمع واثق</td>
<td>التحقق المتقاطع مقابل التوثيق والمعايير الداخلية الموثوقة</td>
</tr>
<tr>
<td>عمل تغييرات من غير خطة استرجاع</td>
<td>استخدام آليات rollback واسترجاع</td>
</tr>
</tbody>
</table></div>
<h3>مبادئ الاستخدام الآمن للـ AI</h3>
<ol>
<li><strong>تحقق قبل الاستخدام</strong> – المخرجات المولَّدة من AI المفروض تتراجع وتتفحص قبل التنفيذ.</li>
<li><strong>احمِ البيانات الحساسة</strong> – البيانات المفروض تتصنّف قبل ما تتشارك مع أدوات AI.</li>
<li><strong>اختبر في بيئات آمنة</strong> – السكربتات، الاستعلامات، والإعدادات المفروض تُختبر قبل الاستخدام في الإنتاج.</li>
<li><strong>اطلب موافقة للأفعال عالية التأثير</strong> – التغييرات على البنية التحتية، الوصول، والتأثير على الإنتاج المفروض تحتاج مراجعة بشرية.</li>
<li><strong>خطط للـ Rollback</strong> – التغييرات المفروض يكون ليها مسار استرجاع لو حاجة غلطت.</li>
<li><strong>صعّد الإخفاقات</strong> – سلوك AI غير آمن، غلط، أو غير متوقّع المفروض يتم الإبلاغ عنه حسب السياسة.</li>
</ol>
<h3>ملخّص الموديول</h3>
<p>هتتعلم إزاي تستخدم الـ AI بشكل مسؤول في بيئات تشغيلية — باستكشاف حالات استخدام AI شائعة في workflows الـ IT، SOC، وDevSecOps، فهم مخاطر المخرجات المهلوَسة (hallucinated) أو غير الآمنة، وتعلّم إزاي تتحقق من الأوامر، السكربتات، الاستعلامات، والإعدادات المولَّدة من AI.</p>
<p><strong>الهدف مش تجنّب الـ AI تمامًا — الهدف هو استخدامه بأمان.</strong></p>
<p>هتطبّق كمان مبادئ إدارة تغيير آمنة، تختبر التغييرات المولَّدة من AI في بيئات متحكَّم فيها، تحدد البيانات الحساسة قبل استخدام الـ AI، وتمنع تغييرات مولَّدة من AI خطيرة من الوصول لأنظمة الإنتاج.</p>
<hr />
<h2 id="sec2"><span class="num">2</span><span class="htext">مخاطر استخدام الـ AI في IT، SOC، وDevSecOps</span></h2>
<h3>ليه خطر الـ AI مهم في الـ Workflows التشغيلية</h3>
<p>أدوات الـ AI بتتستخدم بشكل متزايد لدعم الفرق التقنية في مهام زي كتابة سكربتات، توليد إعدادات، تلخيص لوجات، شرح تنبيهات، إنشاء استعلامات SIEM، والتوصية بخطوات علاج.</p>
<p>الـ workflows دي غالبًا بتشمل أنظمة حساسة، حرجة للأعمال، أو ذات صلة بالأمان. نتيجة لكده، خرج AI غير صحيح مش مجرد غلطة بسيطة — يقدر يؤدي لنشرات فاشلة، خدمات معطَّلة، بيانات مكشوفة، اكتشافات فايتة، أو وصول غير مصرَّح.</p>
<p><strong>القضية الأساسية:</strong> الـ AI يقدر ينتج خرج يبان واثق وصحيح تقنيًا، حتى لما يكون ناقص، غير آمن، أو غلط.</p>
<h3>مخاطر الـ AI في عمليات IT</h3>
<p>في عمليات IT، الـ AI بيتستخدم عادةً لاستكشاف الأعطال، إدارة الأنظمة، الأتمتة، ودعم الإعدادات — مجالات مفيدة لمساعدة الـ AI، لكنها بتقدّم خطر تشغيلي لما المخرجات تُستخدم من غير مراجعة.</p>
<p>مثلًا: مسؤول نظام ممكن يطلب من AI يولّد أمر Linux، قاعدة firewall، سكربت PowerShell، أو إعداد سحابي. لو الخرج غلط أو غير آمن، ممكن يعطّل خدمات أو يضعّف ضوابط أمنية.</p>
<p><strong>الخطر الأساسي:</strong> تطبيق تغييرات مولَّدة من AI مباشرة على أنظمة حية من غير تحقق، اختبار، أو تخطيط rollback:</p>
<div class="table-wrap"><table>
<thead>
<tr>
<th>الخطر</th>
<th>المثال</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>تعطّل الخدمة</strong></td>
<td>الـ AI بيقترح إعادة تشغيل أو تعطيل خدمة حرجة من غير فهم الاعتماديات</td>
</tr>
<tr>
<td><strong>إعداد خاطئ (Misconfiguration)</strong></td>
<td>الـ AI بيولّد قاعدة firewall بتسمح بوصول من نطاق شبكة أوسع من المقصود</td>
</tr>
<tr>
<td><strong>فقدان بيانات</strong></td>
<td>الـ AI بيقترح أمر تنظيف ملفات بيمسح بيانات أكتر من المتوقّع</td>
</tr>
<tr>
<td><strong>تعرّض الوصول</strong></td>
<td>الـ AI بينشئ مستخدم، دور، أو صلاحية بامتيازات زايدة عن اللزوم</td>
</tr>
<tr>
<td><strong>استكشاف أعطال ضعيف</strong></td>
<td>الـ AI بيوصي بتغييرات بناءً على افتراض خاطئ عن السبب الجذري</td>
</tr>
</tbody>
</table></div>
<h3>مخاطر الـ AI في workflows الـ SOC</h3>
<p>في بيئة SOC، الـ AI ممكن يُستخدم لتلخيص التنبيهات، شرح إدخالات اللوجات، توليد قواعد اكتشاف، كتابة استعلامات SIEM، أو المساعدة في فرز الحوادث (triage).</p>
<p><strong>الخطر:</strong> الـ AI ممكن يسيء فهم الأدلة المتاحة أو ينتج استنتاجات غير دقيقة — وده ممكن يأثر على جودة التحقيق وقرارات الاستجابة.</p>
<blockquote>
<p>الـ AI المفروض يدعم المحلل، مش يستبدل حكم المحلل.</p>
</blockquote>
<div class="table-wrap"><table>
<thead>
<tr>
<th>الخطر</th>
<th>المثال</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>اكتشافات فايتة (Missed detections)</strong></td>
<td>الـ AI بيكتب استعلام ضعيف بيفشل في اكتشاف سلوك هجوم مهم</td>
</tr>
<tr>
<td><strong>إيجابيات كاذبة (False Positives)</strong></td>
<td>الـ AI بينشئ قاعدة اكتشاف واسعة زيادة بتولّد ضوضاء مفرطة</td>
</tr>
<tr>
<td><strong>سلبيات كاذبة (False Negatives)</strong></td>
<td>الـ AI بيرفض نشاط مشبوه غلط باعتباره حميد (benign)</td>
</tr>
<tr>
<td><strong>فرز غير صحيح (Incorrect Triage)</strong></td>
<td>الـ AI بيلخّص حادثة غلط، مما يخلي المحللين يرتّبوا أولوية القضية الخاطئة</td>
</tr>
<tr>
<td><strong>تشويه الأدلة</strong></td>
<td>الـ AI بيغفل تفاصيل لوج مهمة أو بيبالغ في نتائج مش مدعومة بالأدلة</td>
</tr>
</tbody>
</table></div>
<h3>مخاطر الـ AI في workflows الـ DevSecOps</h3>
<p>في DevSecOps، الـ AI ممكن يُستخدم لتوليد infrastructure-as-code، خطوات CI/CD pipeline، فحوصات أمنية، سكربتات نشر، إعدادات containers، أو توصيات علاج.</p>
<p>المخرجات دي يقدروا يأثروا مباشرة على أمان التطبيق، البنية التحتية السحابية، وpipelines نشر الإنتاج — غلطة صغيرة في إعداد مولَّد من AI ممكن تقدّم تعرّض خطير.</p>
<p><strong>الخطر:</strong> الخرج المولَّد من AI لازم يتعامل معاه زي أي تغيير كود أو إعداد تاني — يتراجع، يتختبر، يتعتمد، ويتراقب:</p>
<div class="table-wrap"><table>
<thead>
<tr>
<th>الخطر</th>
<th>المثال</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>بنية تحتية غير آمنة</strong></td>
<td>الـ AI بيولّد Terraform بينشئ storage bucket عام أو security group واسع زيادة</td>
</tr>
<tr>
<td><strong>ضوابط pipeline ضعيفة</strong></td>
<td>الـ AI بيقترح تخطي اختبارات أو تعطيل فحوصات أمنية عشان يصلّح build فاشل</td>
</tr>
<tr>
<td><strong>تعرّض أسرار (Secrets)</strong></td>
<td>أمثلة مولَّدة من AI بتشمل اعتمادات مكتوبة صراحةً (hardcoded) أو تعامل غير آمن مع التوكينز</td>
</tr>
<tr>
<td><strong>containers معدَّة بشكل خاطئ</strong></td>
<td>الـ AI بينشئ Dockerfile بيشتغل كـ root أو بيعطّل ضوابط أمنية مهمة</td>
</tr>
<tr>
<td><strong>علاج غير آمن</strong></td>
<td>الـ AI بيوصي بإصلاح سريع بيشيل العرض لكن بيضعّف الأمان</td>
</tr>
</tbody>
</table></div>
<h3>أنماط المخاطر الشائعة عبر كل الـ Workflows</h3>
<div class="table-wrap"><table>
<thead>
<tr>
<th>نمط الخطر</th>
<th>الوصف</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>خرج مهلوَس (Hallucinated)</strong></td>
<td>الـ AI بيخترع أوامر، خيارات، APIs، إعدادات، أو تفسيرات مش حقيقية أو غير قابلة للتطبيق</td>
</tr>
<tr>
<td><strong>ثقة زايدة (Overconfidence)</strong></td>
<td>الـ AI بيقدّم معلومات غير مؤكَّدة أو غلط بطريقة واثقة</td>
</tr>
<tr>
<td><strong>سياق ناقص</strong></td>
<td>الـ AI ما بيفهمش البيئة الكاملة، الاعتماديات، السياسات، أو التأثير التجاري</td>
</tr>
<tr>
<td><strong>إعدادات افتراضية غير آمنة</strong></td>
<td>الـ AI بيولّد أمثلة شغّالة لكن مش آمنة</td>
</tr>
<tr>
<td><strong>صلاحيات زايدة عن اللزوم</strong></td>
<td>الـ AI بيمنح وصول أوسع من الضروري</td>
</tr>
<tr>
<td><strong>تنفيذ أعمى (Blind Execution)</strong></td>
<td>المستخدمين بينسخوا ويشغّلوا خرج AI من غير مراجعة</td>
</tr>
<tr>
<td><strong>تعرّض بيانات حساسة</strong></td>
<td>المستخدمين بيلزقوا اعتمادات، بيانات عملاء، لوجات، كود مصدري، أو تفاصيل حوادث في أدوات AI من غير تصنيف</td>
</tr>
</tbody>
</table></div>
<h3>مثال واقعي: قاعدة Firewall غير آمنة مولَّدة من AI</h3>
<p>تخيل مهندس بيسأل مساعد AI: <strong>"Allow SSH access from the office."</strong></p>
<p>الخرج الآمن المفروض يقيّد وصول SSH لنطاق IP المكتب المعتمد المحدد وييطبّق القاعدة بس على النظام أو security group المقصود.</p>
<p><strong>اللي الـ AI ولّده فعليًا (UNSAFE):</strong></p>
<div class="code-wrap"><pre><code class="language-bash">aws ec2 authorize-security-group-ingress \
  --group-id sg-123456 \
  --protocol tcp \
  --port 22 \
  --cidr 0.0.0.0/0
</code></pre></div>
<p>الأمر ده تقنيًا ممكن يحقق "allow SSH"، لكنه بيخلق تعرّض أمني خطير عن طريق السماح بوصول SSH من الإنترنت كله.</p>
<blockquote>
<p><strong>المشكلة مش صياغة غير صحيحة — المشكلة إن القاعدة غير آمنة تشغيليًا.</strong></p>
</blockquote>
<h3>ليه خطر الـ AI مختلف عن خطر الأدوات التقليدية</h3>
<p>الأدوات التقليدية عادةً بتعمل بالظبط اللي المشغّل طلبه منها. أدوات الـ AI مختلفة لأنها بتولّد التعليمات، الأوامر، السكربتات، أو الإعدادات بنفسها.</p>
<p>ده بيقدّم طبقة جديدة من عدم اليقين — المشغّل ممكن ما يفهمش بالكامل إزاي الـ AI وصل لإجابته، إيه الافتراضات اللي عملها، أو إذا كان الخرج متماشي مع السياسة الداخلية.</p>
<p>الـ AI مش بيلغي المسؤولية التشغيلية. هو بينقل جزء من الـ workflow من الإنشاء اليدوي لخرج مولَّد، ولسه لازم يتراجع.</p>
<h3>بناء نموذج تشغيل آمن</h3>
<p>الهدف مش منع الـ AI — الهدف هو وضعه جوه نموذج تشغيل آمن:</p>
<ol>
<li><strong>التحقق من الخرج (Output validation)</strong> – تأكد إن الأوامر، السكربتات، والإعدادات المولَّدة صحيحة وآمنة.</li>
<li><strong>التحقق من مصدر موثوق (Trusted-source verification)</strong> – قارن إجابات AI مقابل التوثيق الرسمي، المعايير الداخلية، والـ runbooks.</li>
<li><strong>الموافقة البشرية (Human approval)</strong> – اطلب مراجعة قبل ما أفعال تأثر على الإنتاج تُطبَّق.</li>
<li><strong>اختبار متحكَّم فيه (Controlled testing)</strong> – اختبر التغييرات في staging، sandbox، أو بيئات مختبر قبل الاستخدام في الإنتاج.</li>
<li><strong>تخطيط Rollback</strong> – تأكد إن التغييرات ممكن تُعكس لو سببت مشاكل.</li>
<li><strong>تصنيف البيانات (Data classification)</strong> – حدد إيه المعلومات اللي يمكن ومش يمكن تُشارك مع أدوات AI.</li>
<li><strong>سياسة التصعيد (Escalation policy)</strong> – أبلغ عن سلوك AI غير آمن، إخفاقات متكررة، أو حوادث عبر العملية الصحيحة.</li>
</ol>
<h3>الخلاصة الأساسية</h3>
<p>الـ AI يقدر يكون قيّم في workflows الـ IT، SOC، وDevSecOps، لكن لازم ما يتوثقش فيه بشكل أعمى.</p>
<p>الاستخدام التشغيلي الآمن للـ AI محتاج تحقق، فحص مصدر موثوق، موافقة بشرية، اختبار آمن، تخطيط rollback، وتعامل حريص مع البيانات الحساسة.</p>
<blockquote>
<p><strong>الخطر الأكبر مش إن الـ AI ممكن يغلط — ده إن الـ AI ممكن يغلط بطريقة تبان صح وتسمع واثقة.</strong></p>
</blockquote>
<hr />
<h2 id="sec3"><span class="num">3</span><span class="htext">فهم الـ AI Hallucinations</span></h2>
<h3>إيه هو الـ AI Hallucination؟</h3>
<blockquote>
<p>AI hallucination هو خرج بيبان واثق، كامل، أو دقيق تقنيًا، لكنه فعليًا غلط، غير مدعوم، مختلَق، أو مضلِّل.</p>
</blockquote>
<p>في الـ workflows التشغيلية، الـ hallucinations خطيرة بشكل خاص لأن الخرج ممكن يبان قابل للاستخدام — أداة AI ممكن تولّد أمر، سكربت، إعداد، استعلام، تفسير، أو توصية استكشاف أعطال بتبان صالحة من أول نظرة، لكنها فعليًا مش شغالة أو مش منطبقة على بيئة الهدف.</p>
<p>الـ hallucination مش دايمًا معناها إن الإجابة كلها غلط. أحيانًا بس خيار واحد، باراميتر، علامة أمر (flag)، حقل API، شرط اكتشاف، أو افتراض واحد بيكون غلط — وده اللي بيخلي الـ hallucinations أصعب في الملاحظة.</p>
<h3>ليه الـ AI Hallucinations بتحصل</h3>
<p>الـ AI مش بيعرف تلقائيًا إذا كان الخرج صحيح لبيئتك. الـ hallucinations عادةً بتنتج عن:</p>
<ol>
<li><strong>سياق ناقص</strong> – الـ AI ما بيعرفش بيئتك، إصدارات الأدوات، السياسات، أو القيود.</li>
<li><strong>prompts غامضة</strong> – الطلب واسع زيادة أو ناقص تفاصيل محددة.</li>
<li><strong>معرفة قديمة</strong> – الـ AI ممكن يرجع لأوامر، APIs، صياغة، أو صيغ إعداد قديمة.</li>
<li><strong>أدوات/تقنيات متشابهة الشكل</strong> – الـ AI ممكن يخلط الصياغة بين أدوات، منصات، أو مزوّدي سحابة.</li>
<li><strong>التعميم الزايد (Overgeneralization)</strong> – الـ AI بيقدّم إجابة عامة مش مناسبة للنظام المحدد.</li>
<li><strong>ضغط للإجابة</strong> – الـ AI ممكن ينتج رد معقول حتى لما المفروض يقول إنه غير متأكد.</li>
</ol>
<h3>مثال: Prompt غامض بيؤدي لإعداد افتراضي غير آمن</h3>
<p>لو سألت أداة AI "اكتب قاعدة firewall عشان تسمح بـ SSH من المكتب"، ممكن تولّد أمر صالح تقنيًا — لكن لأن "من المكتب" غامضة، هتستخدم <code>0.0.0.0/0</code>.</p>
<p>مش عارفة نطاق IP المكتب المعتمد.</p>
<blockquote>
<p><strong>الـ prompts الغامضة بتسيب الـ AI يخمّن — وهيخمّن نحو الأسهل، مش الأأمن.</strong></p>
</blockquote>
<h3>الـ Hallucinations في workflows الـ IT</h3>
<div class="table-wrap"><table>
<thead>
<tr>
<th>نوع الـ Hallucination</th>
<th>المثال</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>خيار أمر وهمي</strong></td>
<td>اقتراح علامة أمر (flag) مش موجودة أصلًا</td>
</tr>
<tr>
<td><strong>اسم خدمة غلط</strong></td>
<td>التوصية بإعادة تشغيل خدمة اسمها مختلف على النظام المستهدف</td>
</tr>
<tr>
<td><strong>مسار ملف غير صحيح</strong></td>
<td>الإشارة لملف إعداد مش موجود على نظام التشغيل ده</td>
</tr>
<tr>
<td><strong>علاج غير آمن</strong></td>
<td>اقتراح إصلاح بيعطّل ضوابط أمنية أو بيكسر اعتماديات</td>
</tr>
<tr>
<td><strong>سبب جذري غلط</strong></td>
<td>تفسير انقطاع الخدمة كمشكلة DNS بينما اللوجات بتشير لفشل توثيق</td>
</tr>
</tbody>
</table></div>
<p><strong>مثال واقعي:</strong></p>
<div class="code-wrap"><pre><code>systemctl restart nginx --safe-mode
</code></pre></div>
<p>الأمر بيبان واقعي، لكن <code>systemctl</code> ما بيستخدمش خيار <code>--safe-mode</code> بالشكل ده. مشغّل بينسخ الأمر من غير فحص ممكن يضيّع وقت أو يفهم العلاج الفعلي غلط.</p>
<h3>الـ Hallucinations في workflows الـ SOC</h3>
<p>الـ hallucinations يقدروا يأثروا على فرز التنبيهات، هندسة الاكتشاف، والتحقيق في الحوادث — ده خطير لأن خرج AI ممكن يأثر على إيه اللي المحللين بيرتّبوا أولويته، يحققوا فيه، أو يرفضوه:</p>
<ol>
<li>
<p><strong>نسب هجوم Brute-Force كاذب</strong> – مساعد AI ممكن يلخّص محاولات دخول فاشلة كهجوم brute-force حتى لو الأحداث جاية من ماسح ثغرات معروف. ده يقدر يؤدي لإيجابيات كاذبة، سلبيات كاذبة، ترتيب أولوية ضعيف، وتقارير حوادث غير صحيحة.</p>
</li>
<li>
<p><strong>رفض نشاط مشبوه</strong> – ممكن يرفض نشاط PowerShell مشبوه لأنه بيطابق نمط إداري، بينما بيتجاهل معطيات سطر أوامر مشبوهة.</p>
</li>
</ol>
<h3>الـ Hallucinations في workflows الـ DevSecOps</h3>
<div class="table-wrap"><table>
<thead>
<tr>
<th>نوع الـ Hallucination</th>
<th>المثال</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>صياغة إعداد غير صحيحة</strong></td>
<td>توليد Terraform، YAML، أو JSON بيفشل في التحقق</td>
</tr>
<tr>
<td><strong>خاصية مورد غير موجودة</strong></td>
<td>استخدام حقل إعداد سحابي مش موجود أصلًا</td>
</tr>
<tr>
<td><strong>إعدادات افتراضية غير آمنة</strong></td>
<td>إنشاء وصول عام، صلاحيات ضعيفة، أو logging معطَّل</td>
</tr>
<tr>
<td><strong>منطق pipeline مكسور</strong></td>
<td>اقتراح خطوات CI/CD مش شغّالة على المنصة المختارة</td>
</tr>
<tr>
<td><strong>إصلاح أمني غير آمن</strong></td>
<td>التوصية بتغيير بيتخطى فحص أمني بدل ما يصلّح المشكلة الأساسية</td>
</tr>
</tbody>
</table></div>
<h3>ليه الـ Hallucinations صعبة الاكتشاف</h3>
<p>الـ AI hallucinations صعبة الاكتشاف لأنها غالبًا بتبان مصقولة — الرد ممكن يشمل تنسيق صحيح، تفسير واثق، وصياغة واقعية.</p>
<p>ده بيخلق مشكلة ثقة. المستخدمين ممكن يفترضوا إن إجابة منسَّقة كويس هي إجابة صحيحة.</p>
<div class="table-wrap"><table>
<thead>
<tr>
<th>العامل</th>
<th>ليه مهم</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>الثقة (Confidence)</strong></td>
<td>الـ AI ممكن يسمع متأكد حتى لما يكون غلط</td>
</tr>
<tr>
<td><strong>الصحة الجزئية</strong></td>
<td>معظم الخرج ممكن يكون صحيح، بينما تفصيلة حرجة واحدة غير آمنة</td>
</tr>
<tr>
<td><strong>التعقيد التقني</strong></td>
<td>المستخدمين ممكن مايفهموش الخرج المولَّد بالكامل قبل استخدامه</td>
</tr>
<tr>
<td><strong>ضغط الوقت</strong></td>
<td>الفرق التشغيلية ممكن تتجرّب تنسخ وتشغّل المخرجات بسرعة</td>
</tr>
<tr>
<td><strong>الأتمتة</strong></td>
<td>لو خرج AI بيتطبَّق تلقائيًا، الـ hallucinations يقدروا يوصلوا للإنتاج أسرع</td>
</tr>
</tbody>
</table></div>
<blockquote>
<p><strong>أخطر الـ hallucinations مش الغلط الواضح — هي اللي بتكون تقريبًا صح.</strong></p>
</blockquote>
<h3>Hallucination مقابل Unsafe Output</h3>
<p>خرج مش لازم يكون مهلوَس عشان يكون خطير — ممكن يكون صياغة صحيحة تمامًا لكن لسه بيخالف السياسة الأمنية:</p>
<div class="table-wrap"><table>
<thead>
<tr>
<th>النوع</th>
<th>المعنى</th>
<th>مثال</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>خرج مهلوَس (Hallucinated)</strong></td>
<td>الـ AI بيخترع أو بيسيء تمثيل حاجة</td>
<td>خيار أمر، حقل API، أو اسم حقل SIEM مش موجود</td>
</tr>
<tr>
<td><strong>خرج غير آمن (Unsafe)</strong></td>
<td>الخرج ممكن يكون صالح تقنيًا، لكن خطير في الاستخدام</td>
<td>قاعدة firewall بتسمح بـ SSH من <code>0.0.0.0/0</code></td>
</tr>
<tr>
<td><strong>خرج ناقص (Incomplete)</strong></td>
<td>الخرج بيسيب خطوات أو ضمانات مهمة برّه</td>
<td>خطة نشر من غير خطوة rollback أو نسخة احتياطية</td>
</tr>
<tr>
<td><strong>خرج غامض (Ambiguous)</strong></td>
<td>الخرج مش واضح أو مفتوح لتفسير خطير</td>
<td>"افتح الوصول مؤقتًا" من غير تحديد نطاق، مدة، أو موافقة</td>
</tr>
</tbody>
</table></div>
<h3>إزاي تقلل مخاطر الـ Hallucination</h3>
<div class="table-wrap"><table>
<thead>
<tr>
<th>الممارسة</th>
<th>الوصف</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>قدّم سياق واضح</strong></td>
<td>اشمل المنصة، الإصدار، البيئة، والقيود لما تطلب مساعدة</td>
</tr>
<tr>
<td><strong>اطلب الافتراضات</strong></td>
<td>اطلب من الـ AI يذكر إيه اللي افترضه قبل ما يدّي إجابة نهائية</td>
</tr>
<tr>
<td><strong>اطلب خطوات تحقق</strong></td>
<td>اسأل إزاي تختبر الخرج بأمان قبل استخدامه</td>
</tr>
<tr>
<td><strong>راجع التوثيق المتقاطع</strong></td>
<td>قارن الأوامر، الصياغة، وخيارات الإعداد مقابل مصادر موثوقة</td>
</tr>
<tr>
<td><strong>استخدم linters وvalidators</strong></td>
<td>تحقق من السكربتات، infrastructure-as-code، YAML، JSON، والاستعلامات بالأدوات المناسبة</td>
</tr>
<tr>
<td><strong>اختبر في sandbox</strong></td>
<td>شغّل الأوامر أو الإعدادات في بيئة متحكَّم فيها أولًا</td>
</tr>
<tr>
<td><strong>اطلب موافقة بشرية</strong></td>
<td>متسمحش لتغييرات مولَّدة من AI تُطبَّق مباشرة على الإنتاج</td>
</tr>
</tbody>
</table></div>
<h3>Prompt أفضل بيقلل الغموض</h3>
<p><strong>غامض:</strong></p>
<div class="code-wrap"><pre><code>&quot;Create a Terraform config for an S3 bucket.&quot;
</code></pre></div>
<p><strong>محسَّن:</strong></p>
<div class="code-wrap"><pre><code>&quot;Create a Terraform configuration for a private S3 bucket using AWS provider 
version 5.x. Enable encryption, block public access, and include validation 
steps. State any assumptions.&quot;
</code></pre></div>
<p>ده مش بيضمن خرج صحيح، لكنه بيقلل الغموض وبيسهّل التحقق.</p>
<h3>الخلاصة الأساسية</h3>
<p>الـ AI hallucinations هي مخرجات بتبان واثقة ممكن تكون غير صحيحة، مختلَقة، غير مدعومة، أو مضلِّلة.</p>
<p>في workflows الـ IT، SOC، وDevSecOps، الـ hallucinations يقدروا ينتجوا أوامر غير صحيحة، سكربتات مكسورة، اكتشافات ضعيفة، إعدادات غير آمنة، نشرات فاشلة، أو قرارات حوادث غير صحيحة.</p>
<blockquote>
<p><strong>الأسلوب الأأمن هو معاملة الخرج المولَّد من AI كمسودة — راجع، تحقق، قارن، اختبر، واطلب موافقة قبل ما يأثر على أنظمة حقيقية.</strong></p>
</blockquote>
<hr />
<h2 id="sec4"><span class="num">4</span><span class="htext">مخاطر مخرجات الـ AI المولَّدة</span></h2>
<h3>مخرجات AI في الـ Workflows التشغيلية</h3>
<p>في workflows الـ IT، SOC، وDevSecOps، الخرج المولَّد من AI ممكن يشمل:</p>
<div class="table-wrap"><table>
<thead>
<tr>
<th>نوع الخرج</th>
<th>مثال</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>أوامر (Commands)</strong></td>
<td>أوامر Linux، Windows، PowerShell، أو cloud CLI</td>
</tr>
<tr>
<td><strong>سكربتات (Scripts)</strong></td>
<td>سكربتات Bash، Python، أو PowerShell</td>
</tr>
<tr>
<td><strong>استعلامات (Queries)</strong></td>
<td>استعلامات SIEM، بحث لوجات، SQL، أو اكتشاف</td>
</tr>
<tr>
<td><strong>إعدادات (Configurations)</strong></td>
<td>قواعد firewall، سياسات IAM، Terraform، YAML، أو JSON</td>
</tr>
<tr>
<td><strong>توصيات (Recommendations)</strong></td>
<td>خطوات استكشاف أعطال، إرشادات علاج، أو نصايح نشر</td>
</tr>
</tbody>
</table></div>
<blockquote>
<p><strong>الخطر مش بس إن الـ AI ممكن يغلط — إنه الخرج ممكن يُستخدم قبل ما يتراجع بشكل صحيح.</strong></p>
</blockquote>
<h3>خرج الـ AI ممكن يكون واسع زيادة عن اللزوم</h3>
<p>خطر شائع هو إن الخرج المولَّد من AI ممكن يحل الطلب بطريقة أوسع من الضروري. مثلًا، لو مستخدم سأل: "Allow SSH from the office"، الـ AI ممكن يولّد قاعدة بتسمح بـ SSH من أي مكان بدل ما تقيّد الوصول لنطاق IP المكتب المعتمد.</p>
<blockquote>
<p>خرج الـ AI المفروض يتبع مبدأ أقل الصلاحيات، مش أقصى راحة.</p>
</blockquote>
<p>الخرج ممكن تقنيًا ينفّذ المهمة المطلوبة، لكنه بيعملها بطريقة غير آمنة. مشاكل مشابهة ممكن تحصل لما الـ AI يمنح صلاحيات إدارية كاملة، يفتح وصول لنطاق شبكة أوسع، أو ينشئ حسابات بصلاحيات أكتر من المطلوب.</p>
<h3>خرج الـ AI ممكن يكون مدمِّر</h3>
<p>بعض الأوامر أو السكربتات المولَّدة من AI ممكن تعدّل، تمسح، تكتب فوق، أو تعطّل موارد مهمة. ده خطير بشكل خاص لما المستخدم يشغّل الخرج من غير ما يفهم تأثيره.</p>
<p>مثلًا، أمر مولَّد من AI ممكن يمسح ملفات، يغيّر صلاحيات، يعيد تشغيل خدمات، يعطّل أدوات أمنية، يعدّل قواعد firewall، أو يستبدل ملفات إعداد.</p>
<p>حتى لو الخرج صالح تقنيًا، لسه ممكن يكون غير آمن للبيئة.</p>
<h3>خرج الـ AI ممكن يفوّت ضمانات مهمة</h3>
<p>المخرجات المولَّدة من AI غالبًا بتركّز على إتمام المهمة الفورية، لكن ممكن تسيب ضمانات تشغيلية مهمة برّه. مثلًا، الـ AI ممكن يقدّم أمر نشر من غير ما يذكر نسخ احتياطية، اختبار، موافقة، logging، أو rollback.</p>
<p>ممكن يولّد إعداد من غير ما يشرح إزاي تتحقق منه، أو يقدّم خطوة علاج من غير تحذير إنها ممكن تأثر على أنظمة الإنتاج.</p>
<blockquote>
<p>تغيير ممكن يبان بسيط بينما لسه محتاج ضوابط سليمة.</p>
</blockquote>
<h3>خرج الـ AI ممكن يخالف السياسة</h3>
<p>المخرجات المولَّدة من AI ما بتفهمش تلقائيًا سياسات مؤسستك الداخلية، معاييرها، أو متطلبات الموافقة. خرج ممكن يكون وظيفي، لكن لسه بيخالف قواعد حول الوصول، التعامل مع البيانات، النشر، أو إدارة التغيير.</p>
<ol>
<li><strong>صلاحيات زايدة عن اللزوم</strong> – التوصية بوصول admin لما القراءة فقط هي المطلوبة.</li>
<li><strong>تعامل غير آمن مع البيانات</strong> – اقتراح رفع لوجات حساسة لأداة خارجية.</li>
<li><strong>ضوابط مضعَّفة</strong> – التوصية بتعطيل التشفير، الـ logging، التوثيق، أو المراقبة.</li>
</ol>
<blockquote>
<p><strong>"بيشتغل" مش كافي — الخرج لازم كمان يكون مصرَّح، معتمد، ومتماشي مع السياسة.</strong></p>
</blockquote>
<h3>خرج الـ AI ممكن يخلق تعرّض أمني</h3>
<p>بعض المخرجات ممكن تقدّم نقاط ضعف المهاجمين يقدروا يستغلوها لاحقًا. ده يقدر يحصل لما الـ AI بيولّد إعدادات افتراضية غير آمنة، قواعد وصول ضعيفة، خدمات مكشوفة، أو تعامل سيء مع الأسرار.</p>
<p>الأمثلة بتشمل إنشاء storage bucket عام، فتح بورتات إدارية للإنترنت، منح صلاحيات wildcard، كتابة مفاتيح API صراحةً في السكربتات، أو تعطيل ضوابط أمنية مهمة.</p>
<p>الأخطاء دي ممكن ما تسببش انقطاع فوري، لكن يقدروا يزودوا الخطر الأمني على المدى الطويل.</p>
<h3>خرج الـ AI ممكن يُساء استخدامه بواسطة الأتمتة</h3>
<p>الخطر بيزيد لما الخرج المولَّد من AI يكون متصل مباشرة بالأتمتة — مثلًا، مساعد بيولّد Terraform ويطبّقه فورًا يقدر يسبب تغييرات بنية تحتية حقيقية من غير مراجعة كافية:</p>
<div class="code-wrap"><pre><code>1. المستخدم بيطلب تغيير → 2. الـ AI بيولّد الإعداد → 
3. الأتمتة بتطبّقه → 4. الغلطة بتوصل للبيئة فورًا
</code></pre></div>
<blockquote>
<p>المخرجات المولَّدة من AI ما لازمش تتطبَّق تلقائيًا في workflows حساسة — المفروض تعدّي عبر التحقق والموافقة البشرية الأول.</p>
</blockquote>
<h3>الخلاصة الأساسية</h3>
<p>المخرجات المولَّدة من AI المفروض تُعامل كمسودات، مش تعليمات نهائية.</p>
<p>المخاطر الأساسية هي إن المخرجات ممكن تكون واسعة زيادة، مدمِّرة، ناقصة ضمانات، مخالفة للسياسة، غير آمنة، أو مُطبَّقة تلقائيًا من غير مراجعة.</p>
<h3>اسأل الأسئلة دي الأول (قبل ما تستخدم خرج AI)</h3>
<div class="table-wrap"><table>
<thead>
<tr>
<th>سؤال المراجعة</th>
<th>الغرض</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>الخرج ده آمن؟</strong></td>
<td>يفحص عن أفعال ضارة أو مدمِّرة</td>
</tr>
<tr>
<td><strong>نطاقه محدَّد صح؟</strong></td>
<td>يمنع وصول زايد أو تغييرات واسعة زيادة</td>
</tr>
<tr>
<td><strong>مسموح بيه حسب السياسة؟</strong></td>
<td>يؤكّد التماشي مع القواعد الداخلية</td>
</tr>
<tr>
<td><strong>يقدر يُختبر أولًا؟</strong></td>
<td>يقلل خطر الإنتاج</td>
</tr>
<tr>
<td><strong>محتاج موافقة؟</strong></td>
<td>يضمن مراجعة بشرية قبل التأثير</td>
</tr>
<tr>
<td><strong>يقدر يترجّع؟</strong></td>
<td>يدعم الاسترجاع لو حاجة فشلت</td>
</tr>
</tbody>
</table></div>
<hr />
<h2 id="summary"><span class="htext">الخلاصة العامة للموديول</span></h2>
<h3>المحاور اللي غطّيناها:</h3>
<ol>
<li><strong>مقدمة عن الاستخدام الآمن للـ AI</strong> – الـ AI كمساعد مش سلطة، ومبادئ الاستخدام الآمن الستة</li>
<li><strong>مخاطر استخدام الـ AI في IT، SOC، وDevSecOps</strong> – أنماط الفشل في كل workflow، ونموذج التشغيل الآمن ذو الـ 7 ضوابط</li>
<li><strong>فهم الـ AI Hallucinations</strong> – ليه بتحصل، إزاي تظهر في كل workflow، وإزاي تقلل مخاطرها</li>
<li><strong>مخاطر مخرجات الـ AI المولَّدة</strong> – الأنواع الستة من المخاطر، والأسئلة الستة قبل الاستخدام</li>
</ol>
<h3>بعد إتمام الموديول، المفروض تقدر:</h3>
<ol>
<li>تفهم المخاطر التشغيلية لاستخدام الـ AI في workflows الـ IT، SOC، وDevSecOps، بما فيها الـ hallucinations، المخرجات غير الآمنة، والتنفيذ الأعمى</li>
<li>تحدد أنماط الفشل الشائعة في الأوامر، السكربتات، الإعدادات، والتوصيات المولَّدة من AI قبل ما تأثر على أنظمة حقيقية</li>
<li>تتحقق وتراجع وتقارن المخرجات المولَّدة من AI مقابل مصادر موثوقة، سياسات، خطوط أساس، ومتطلبات تشغيلية</li>
<li>تطبّق مبادئ تنفيذ آمن باستخدام إدارة التغيير، تخطيط rollback، ضوابط استرجاع، وبوابات موافقة بشرية</li>
<li>تنفّذ ضمانات عملية لمساعد Ops مدعوم بالـ AI، بما فيها التحقق من الخرج، تصنيف البيانات الحساسة، منع التغييرات غير الآمنة، وworkflows الموافقة</li>
</ol>
<hr />
<p><em>نهاية نوتس الموديول السادس</em></p>
<p><em>Alexis Ahmed — Offensive &amp; Defensive Security Instructor, AI Systems Engineer</em></p>
  <div class="footer-note">نهاية نوتس الموديول السادس — Module 6: Secure Operational Use of AI in IT &amp; Security Workflows</div>

</div>
</body>
</html>
