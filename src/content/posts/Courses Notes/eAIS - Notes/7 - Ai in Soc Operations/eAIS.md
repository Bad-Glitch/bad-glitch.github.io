---
id: "eais-module-7"
title: "AI in the SOC"
published: 2026-09-21
category: "Courses Notes"
course: "eAIS"
module: 7
---
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Module 7: الذكاء الاصطناعي في مركز العمليات الأمنية (AI in the SOC)</title>
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
    <span class="kicker">eAIS · Module 7 · Study Notes</span>
    <h1>الذكاء الاصطناعي في مركز العمليات الأمنية (AI in the SOC)</h1>
    <p class="lede">نوتس مذاكرة منظمة من منظور محلل SOC: إزاي الـ AI فعليًا بيشتغل جوه SIEM وEDR وUEBA، إزاي تقرا تنبيه مولَّد من AI ودرجات المخاطر بثقة، وإزاي تستخدم الـ Generative AI في الفرز والتحقيق والتقارير من غير ما تفقد السيطرة كمحلل.</p>
    <div class="tags">
      <span class="tag">SIEM &amp; SOAR</span>
      <span class="tag">UEBA</span>
      <span class="tag">Anomaly Detection</span>
      <span class="tag">EDR</span>
      <span class="tag">Generative AI for SOC</span>
    </div>
  </div>


<nav class="toc"><div class="toc-title">محتويات الموديول</div><div class="toc-grid">
<a class="toc-item" href="#sec1"><span class="toc-num">1</span><span>إيه هو الذكاء الاصطناعي؟</span></a>
<a class="toc-item" href="#sec2"><span class="toc-num">2</span><span>AI مقابل Machine Learning مقابل Automation</span></a>
<a class="toc-item" href="#sec3"><span class="toc-num">3</span><span>إزاي الـ AI بيتستخدم في مراكز SOC الحديثة</span></a>
<a class="toc-item" href="#sec4"><span class="toc-num">4</span><span>مصطلحات AI وML الشائعة اللي هتشوفها في أدوات SOC</span></a>
<a class="toc-item" href="#sec5"><span class="toc-num">5</span><span>فهم اكتشاف الشذوذ (Anomaly Detection)</span></a>
<a class="toc-item" href="#sec6"><span class="toc-num">6</span><span>إزاي أنظمة الـ SIEM بتستخدم AI للتنبيه والربط</span></a>
<a class="toc-item" href="#sec7"><span class="toc-num">7</span><span>تفسير التنبيهات ودرجات المخاطر المولَّدة من AI</span></a>
<a class="toc-item" href="#sec8"><span class="toc-num">8</span><span>إزاي الـ EDR بيستخدم AI لاكتشاف السلوك الخبيث</span></a>
<a class="toc-item" href="#sec9"><span class="toc-num">9</span><span>استخدام AI للمساعدة في الفرز وترتيب أولوية الحالات</span></a>
<a class="toc-item" href="#sec10"><span class="toc-num">10</span><span>إزاي مراكز SOC بتستخدم Generative AI</span></a>
<a class="toc-item" href="#sec11"><span class="toc-num">11</span><span>كتابة Prompts فعّالة لفرز التنبيهات</span></a>
<a class="toc-item" href="#sec12"><span class="toc-num">12</span><span>استخدام GenAI للمساعدة في التحقيقات</span></a>
<a class="toc-item" href="#sec13"><span class="toc-num">13</span><span>استخدام GenAI للتقارير والتوثيق</span></a>
<a class="toc-item" href="#sec14"><span class="toc-num">14</span><span>تحيّز الـ AI، الإيجابيات الكاذبة، ورقابة المحلل</span></a>
<a class="toc-item" href="#sec15"><span class="toc-num">15</span><span>إزاي موديلات الـ ML المخصَّصة بتُستخدم في مراكز SOC</span></a>
<a class="toc-item" href="#summary"><span class="toc-num toc-num-plain">•</span><span>الخلاصة العامة للموديول</span></a>
</div></nav>

<h1>Module 7: الذكاء الاصطناعي في مركز العمليات الأمنية (AI in the SOC)</h1>
<blockquote>
<p>نوتس مذاكرة منظمة لسابع موديول في كورس eAIS — هنا التركيز على منظور المحلل: إزاي الـ AI فعليًا بيشتغل جوه أدوات SOC اليومية (SIEM، EDR، UEBA)، إزاي تقرا تنبيه مولَّد من AI بثقة، وإزاي تستخدم الـ Generative AI في الفرز والتحقيق والتقارير من غير ما تفقد السيطرة كمحلل.</p>
</blockquote>
<hr />
<h2 id="sec1"><span class="num">1</span><span class="htext">إيه هو الذكاء الاصطناعي؟</span></h2>
<h3>تعريفات أساسية</h3>
<blockquote>
<p><strong>NIST:</strong> نظام مبني على آلة يقدر، مقابل مجموعة أهداف محدَّدة من الإنسان، يعمل توقعات، توصيات، أو قرارات بتأثر على بيئات حقيقية أو افتراضية.</p>
<p><strong>ISO/IEC 22989:2022:</strong> نظام مهندَس بينتج مخرجات زي محتوى، توقعات، توصيات، أو قرارات لمجموعة أهداف محدَّدة من الإنسان.</p>
</blockquote>
<h3>المفاهيم الأساسية</h3>
<p><strong>محاكاة الذكاء البشري:</strong> تعلّم واستدلال | حل مشاكل | فهم اللغة</p>
<p><strong>Narrow AI (ذكاء ضيّق):</strong> نطاق محدود، خاص بمهمة معينة | غير واعٍ (non-sentient) | بيشغّل الأنظمة الحقيقية النهارده</p>
<p><strong>Artificial General Intelligence (AGI):</strong> مفهوم نظري | ذكاء واعٍ لذاته | لسه ما اتحققش</p>
<p><strong>Machine Learning (ML):</strong> بيتعلم من مجموعات بيانات ضخمة | بيتوقع ويتحسّن مع الوقت | Supervised / Unsupervised</p>
<blockquote>
<p>الـ AI هو المحاكاة الواسعة للذكاء البشري — والـ ML هو المحرك المدفوع بالبيانات ورا معظم القدرات الحديثة.</p>
</blockquote>
<h3>الذكاء الاصطناعي التوليدي (Generative AI)</h3>
<p>خوارزميات بتنشئ محتوى عن طريق النمذجة التوليدية — صور، نصوص، موسيقى، فيديوهات، وأكتر. بتطابق أنماط وخصائص بيانات التدريب.</p>
<p><strong>Generative Adversarial Network (GAN):</strong></p>
<div class="table-wrap"><table>
<thead>
<tr>
<th>المكوّن</th>
<th>الوظيفة</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Generator</strong></td>
<td>بينشئ بيانات صناعية جديدة</td>
</tr>
<tr>
<td><strong>Discriminator</strong></td>
<td>بيقيّم البيانات من الـ generator</td>
</tr>
</tbody>
</table></div>
<p>الشبكتين بيشتغلوا ضد بعض لحد ما الـ discriminator يعجز يميّز البيانات المزيَّفة من الحقيقية — وده بينتج خرج واقعي جدًا.</p>
<h3>الـ Large Language Models (LLMs)</h3>
<p>نوع من الـ Generative AI متدرِّب على مجموعات نصوص ضخمة — كتب، مقالات، مدونات، شبكات اجتماعية، وأكتر. بيتعلم أنماط اللغة، القواعد، الصياغة، والسياق. متخصص في محاكاة محتوى من صنع الإنسان. توليد النص — بيتوقع الكلمة الجاية من السياق.</p>
<p><strong>استخدامات شائعة في الأمان:</strong> Chatbots محادثية تفاعلية | إنشاء محتوى نصي | تلخيص بيانات لوجات الأمان</p>
<h3>مثال واقعي: AI، ML، وGenerative AI في الفعل</h3>
<p><strong>السيناريو:</strong> إنت أصلًا بتستخدم الثلاثة كل يوم — دي أماكن ظهور كل نوع فعليًا في منتجات حقيقية.</p>
<ol>
<li><strong>Machine Learning</strong> – فلتر السبام في مزوّد الإيميل بتاعك بيتعلم من مليارات الرسائل المصنَّفة عشان ينقل الـ phishing لـ Junk تلقائيًا — بيتحسّن كل ما سبام جديد يظهر.</li>
<li><strong>Narrow AI</strong> – محركات توصيات Netflix وYouTube بتتوقع إيه اللي هتتفرّج عليه بعد كده. قوية، لكن مصمَّمة لمهمة واحدة — من غير وعي عام.</li>
<li><strong>Generative AI / LLM</strong> – ChatGPT وMicrosoft Copilot بيولّدوا إيميلات، كود، وملخصات لوجات من prompt — نفس التقنية اللي كمان بتشغّل الـ deepfakes الواقعية.</li>
</ol>
<hr />
<h2 id="sec2"><span class="num">2</span><span class="htext">AI مقابل Machine Learning مقابل Automation</span></h2>
<h3>ليه المصطلحات دي بتتلخبط</h3>
<ol>
<li><strong>لغة موردين غير متسقة</strong> – الموردين بيستخدموا المصطلحات بالتبادل في التسويق.</li>
<li><strong>الأدوات بتخلط الثلاثة</strong> – منتج واحد غالبًا بيجمع أتمتة، ML، وAI.</li>
<li><strong>المحللين بيشوفوا المخرجات</strong> – إنت بتشوف النتائج، مش الآليات الداخلية.</li>
<li><strong>الوضوح بيبني الحكم</strong> – فهم الفرق بيحسّن الثقة والقرارات.</li>
</ol>
<h3>لبنات البناء</h3>
<p><strong>Automation (الأتمتة) — أبسط مفهوم:</strong></p>
<p>بينفّذ أفعال محدَّدة مسبقًا | بيتبع تعليمات صريحة | مفيش تعلّم أو استدلال متضمَّن | متوقّع وقابل للتكرار</p>
<div class="code-wrap"><pre><code>If X happens, then do Y.
</code></pre></div>
<p>مفيش تفكير. مجرد قواعد — بتتنفّذ بالظبط، كل مرة.</p>
<p><strong>Machine Learning (ML):</strong></p>
<p>خوارزميات متدرِّبة عشان تاخد قرارات أو توقعات — من غير برمجة صريحة.</p>
<div class="table-wrap"><table>
<thead>
<tr>
<th>النوع</th>
<th>الوصف</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Supervised</strong></td>
<td>متدرِّب على بيانات مصنَّفة — مثلًا صور كلاب، قطط، خيول متصنَّفة قبل التدريب</td>
</tr>
<tr>
<td><strong>Unsupervised</strong></td>
<td>بيلاقي أنماط مخفية — لازم يكتشف بنية في بيانات غير مصنَّفة بنفسه</td>
</tr>
<tr>
<td><strong>Reinforcement</strong></td>
<td>بيتعلم بالتجربة والخطأ — متدرِّب عبر نظام مكافآت بيوجّه السلوك</td>
</tr>
</tbody>
</table></div>
<p><strong>Artificial Intelligence — المصطلح الشامل:</strong></p>
<p>الفئة الواسعة للسلوك الذكي.</p>
<ul>
<li><strong>بيشمل قواعد، ML، وأنظمة استدلال</strong> – مجموعة شاملة بتمتد لتقنيات كتير</li>
<li><strong>بينتج توصيات أو قرارات</strong> – بيحوّل البيانات لمخرجات قابلة للتنفيذ</li>
<li><strong>غالبًا بيساعد البشر</strong> – بيدعم المحللين مش بيستبدلهم</li>
<li><strong>سلوك واعٍ بالسياق</strong> – بيكيّف المخرجات حسب الهدف المطروح</li>
</ul>
<h3>إزاي بيشتغلوا مع بعض في SOC</h3>
<div class="code-wrap"><pre><code>1. ML → يحدد سلوك غير عادي أو خطير
2. AI → بيربط ويفسّر النتائج
3. Automation → بينفّذ ردود محدَّدة مسبقًا
4. Analysts → بيراقبوا، يتحققوا، ويقرروا
</code></pre></div>
<p>كل طبقة بتغذي التانية — لكن المحلل البشري فاضل متحكم في القرار النهائي.</p>
<h3>مثال واقعي: تنبيه واحد، ثلاث تقنيات</h3>
<p><strong>السيناريو:</strong> حساب موظف بيسجّل دخول من دولة جديدة الساعة 3 الفجر. لاحظ إزاي الأتمتة، الـ ML، والـ AI كل واحدة لعبت دور مختلف في نفس الحادثة.</p>
<ol>
<li><strong>الأتمتة عملت كده:</strong> playbook SOAR محدَّد مسبقًا بيتفعّل: لأن الدخول من قايمة geo محجوبة، بيفرض إعادة توثيق MFA تلقائيًا ويفتح تذكرة. If/then بحت — مفيش تفكير.</li>
<li><strong>الـ ML عملت كده:</strong> موديل UEBA علّم الدخول كشاذ — المستخدم ده عمره ما سجّل دخول من الدولة دي أو في الساعة دي. قيّم السلوك كخطر عالي بناءً على خط الأساس المتعلَّم.</li>
<li><strong>الـ AI عملت كده:</strong> مساعد الـ AI ربط الدخول بمنح OAuth خطير وقاعدة inbox، وكتب ملخّص بلغة واضحة: "على الأرجح استيلاء على الحساب." المحلل أكّد وتصرّف.</li>
</ol>
<hr />
<h2 id="sec3"><span class="num">3</span><span class="htext">إزاي الـ AI بيتستخدم في مراكز SOC الحديثة</span></h2>
<h3>المشهد العام</h3>
<p>الـ AI والـ ML في الدفاع السيبراني مش حاجة جديدة. <strong>الاستخدامات النموذجية:</strong> workflows أتمتة متنوعة | اكتشاف والاستجابة للتهديدات | اكتشاف شذوذ</p>
<p>الـ AI المستقل (Generative AI) نسبيًا جديد.</p>
<p><strong>القوة الدافعة:</strong> حجم وتعقيد التهديدات في تصاعد منذ سنين | أدوات الدفاع بتتطور بالتوازي | <strong>الهدف: تعزيز وتحسين — مش بالضرورة استبدال</strong></p>
<h3>فين بيظهر</h3>
<ol>
<li><strong>Behavior Analytics</strong> – بيكتشف الانحرافات عن سلوك المستخدمين والكيانات العادي</li>
<li><strong>Advanced Phishing Detection</strong> – بيرصد محاولات phishing متطورة وتهربية</li>
<li><strong>SIEM / SOAR</strong> – بيثري الاكتشافات ويقود استجابة منظَّمة</li>
</ol>
<h3>أهداف الـ AI</h3>
<ol>
<li><strong>تعزيز وتحسين</strong> – رفع العمليات والقدرات الحالية — بما فيها اكتشاف التهديدات المتطورة</li>
<li><strong>تسهيل المهام</strong> – الشغل المدفوع بالبشر بيبقى أسرع وأكفأ</li>
<li><strong>تقليل عبء المحلل</strong> – توفير وقت واهتمام للتحقيق ذو القيمة الأعلى</li>
</ol>
<h3>مثال واقعي: الـ AI في شفت SOC حقيقي</h3>
<p><strong>السيناريو:</strong> إيميل phishing عدّى الـ gateway ومستخدم دوس على اللينك. إليك إزاي الأدوات المدعومة بالـ AI بتدعم المحلل من البداية للنهاية.</p>
<ol>
<li><strong>Advanced Phishing Detection</strong> – موديل الـ ML بتاع منصة الإيميل رصد دومين مرسِل مشابه ولغة غير عادية، وسحب الرسالة بأثر رجعي من كل الـ inboxes — حتى بعد التسليم.</li>
<li><strong>Behavior Analytics (UEBA)</strong> – دقايق بعد الضغطة، الـ endpoint بدأ يفحص أجهزة داخلية. موديل السلوك علّمه كغير طبيعي لجهاز المستخدم ده ورفع درجة خطره.</li>
<li><strong>SIEM / SOAR + AI Copilot</strong> – الـ SIEM ربط إشارات الإيميل، الهوية، والـ endpoint في حادثة واحدة. مساعد AI لخّص سلسلة الهجوم واقترح: اعزل الجهاز، أعد تعيين الباسورد.</li>
</ol>
<hr />
<h2 id="sec4"><span class="num">4</span><span class="htext">مصطلحات AI وML الشائعة اللي هتشوفها في أدوات SOC</span></h2>
<h3>ليه المصطلحات دي مهمة</h3>
<ol>
<li><strong>التنبيهات بتستخدم مصطلحات AI/ML</strong> – أدوات SOC بتعرض الكلمات دي مباشرة في التنبيهات.</li>
<li><strong>مش محتاج تبني موديلات</strong> – الهدف التعرف عليها، مش بناؤها.</li>
<li><strong>التعرف بيبني الثقة</strong> – المصطلحات المألوفة بتخلي الفرز أسرع.</li>
<li><strong>المصطلحات بتشرح "إزاي"</strong> – بتكشف إزاي الاكتشاف اتعمل.</li>
</ol>
<h3>مصطلحات البيانات والتدريب</h3>
<div class="table-wrap"><table>
<thead>
<tr>
<th>المصطلح</th>
<th>المعنى</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Training data</strong></td>
<td>بيانات تاريخية مُستخدَمة لتعلّم الأنماط</td>
</tr>
<tr>
<td><strong>Features</strong></td>
<td>نقاط البيانات اللي الموديل بيقيّمها</td>
</tr>
<tr>
<td><strong>Baseline</strong></td>
<td>شكل السلوك "الطبيعي"</td>
</tr>
<tr>
<td><strong>Telemetry</strong></td>
<td>بيانات خام مجمَّعة من الأنظمة</td>
</tr>
</tbody>
</table></div>
<h3>مصطلحات الموديل والاكتشاف</h3>
<div class="table-wrap"><table>
<thead>
<tr>
<th>المصطلح</th>
<th>المعنى</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Model</strong></td>
<td>مُتعرّف الأنماط المتدرِّب</td>
</tr>
<tr>
<td><strong>Classification</strong></td>
<td>تصنيف النشاط لفئات</td>
</tr>
<tr>
<td><strong>Anomaly</strong></td>
<td>سلوك بينحرف عن الطبيعي</td>
</tr>
<tr>
<td><strong>Inference</strong></td>
<td>استخدام موديل لتحليل بيانات جديدة</td>
</tr>
</tbody>
</table></div>
<h3>مصطلحات التقييم والثقة</h3>
<div class="table-wrap"><table>
<thead>
<tr>
<th>المصطلح</th>
<th>المعنى</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Risk score</strong></td>
<td>مقياس نسبي للقلق</td>
</tr>
<tr>
<td><strong>Severity</strong></td>
<td>مستوى الأولوية</td>
</tr>
<tr>
<td><strong>Confidence score</strong></td>
<td>مدى تأكد الموديل</td>
</tr>
<tr>
<td><strong>Threshold</strong></td>
<td>النقطة اللي التنبيه بيتفعّل عندها</td>
</tr>
</tbody>
</table></div>
<h3>مصطلحات خاصة بالـ SOC</h3>
<div class="table-wrap"><table>
<thead>
<tr>
<th>المصطلح</th>
<th>المعنى</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>UEBA</strong></td>
<td>User and Entity Behavior Analytics</td>
</tr>
<tr>
<td><strong>Drift</strong></td>
<td>سلوك بيتغيّر مع الوقت</td>
</tr>
<tr>
<td><strong>False positive</strong></td>
<td>نشاط حميد اتعلَّم كمشبوه</td>
</tr>
<tr>
<td><strong>Human-in-the-loop</strong></td>
<td>إشراف المحلل على القرارات</td>
</tr>
</tbody>
</table></div>
<h3>مصطلحات الـ Generative AI</h3>
<div class="table-wrap"><table>
<thead>
<tr>
<th>المصطلح</th>
<th>المعنى</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>LLM</strong></td>
<td>موديل AI متدرِّب على نص ضخم عشان يولّد ويفهم اللغة</td>
</tr>
<tr>
<td><strong>Context</strong></td>
<td>معلومات إضافية بتوجّه الرد (تنبيهات، لوجات، جداول زمنية)</td>
</tr>
<tr>
<td><strong>Completion / Response</strong></td>
<td>الخرج المولَّد من الموديل</td>
</tr>
<tr>
<td><strong>Prompt</strong></td>
<td>المدخل أو التعليمة المديّة للموديل</td>
</tr>
<tr>
<td><strong>Token</strong></td>
<td>جزء من النص الموديل بيعالجه (كلمات أو أجزاء كلمات)</td>
</tr>
<tr>
<td><strong>Hallucination</strong></td>
<td>خرج بيسمع واثق لكنه غير صحيح / غير مدعوم</td>
</tr>
<tr>
<td><strong>Guardrails</strong></td>
<td>ضوابط بتحدد إيه الموديل يقدر يشوفه أو يعمله</td>
</tr>
</tbody>
</table></div>
<h3>مثال واقعي: قراءة تنبيه حقيقي، مصطلح بمصطلح</h3>
<div class="code-wrap"><pre><code>⛛ ALERT — UEBA / Anomalous Sign-in
Model: UEBA-Identity-v3
Classification: Impossible Travel
Baseline: Cairo, 08:00–17:00 workdays
Anomaly: Login from new ASN, 03:12 local
Features: Geo, ASN, device, hour, velocity
Risk score: 87 / 100
Confidence: 0.92
Severity: High (&gt; threshold 70)
Inference: بيانات telemetry جديدة اتقيّمت لحظيًا
</code></pre></div>
<p><strong>إيه اللي المصطلحات دي بتعنيه في التنبيه ده:</strong></p>
<ul>
<li><strong>Baseline</strong> → مدينة وساعات المستخدم الطبيعية</li>
<li><strong>Anomaly</strong> → دخول الساعة 3 الفجر من الخارج اللي كسر الخط ده</li>
<li><strong>Features</strong> → نقاط البيانات اللي الموديل وزنها</li>
<li><strong>Risk / Confidence</strong> → قد إيه ده مقلق + قد إيه الموديل متأكد</li>
<li><strong>Severity / Threshold</strong> → ليه بعتلك تنبيه — لأنه عدّى الـ 70</li>
<li><strong>Inference</strong> → الموديل بيقيّم telemetry جديدة تمامًا بشكل حي</li>
</ul>
<hr />
<h2 id="sec5"><span class="num">5</span><span class="htext">فهم اكتشاف الشذوذ (Anomaly Detection)</span></h2>
<h3>طيف مناهج الاكتشاف</h3>
<div class="table-wrap"><table>
<thead>
<tr>
<th>النوع</th>
<th>الوصف</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Signature</strong></td>
<td>بيطابق مؤشرات معروفة سيئة</td>
</tr>
<tr>
<td><strong>Rules</strong></td>
<td>منطق if/then صريح</td>
</tr>
<tr>
<td><strong>Behavior</strong></td>
<td>بيتعلم النشاط الطبيعي</td>
</tr>
<tr>
<td><strong>Anomalies</strong></td>
<td>بيعلّم الانحراف عن الطبيعي</td>
</tr>
</tbody>
</table></div>
<blockquote>
<p>Signatures منفصلة/مميَّزة (discrete). الشذوذ مش كده.</p>
</blockquote>
<h3>إيه هو اكتشاف الشذوذ</h3>
<ol>
<li><strong>بيكتشف الانحراف عن الطبيعي</strong> – بيعلّم اللي مش متماشي مع النمط الراسخ</li>
<li><strong>مبني على أنماط تاريخية</strong> – بيتعلم من اللي البيئة عادةً بتعمله</li>
<li><strong>غالبًا مدعوم بـ ML</strong> – موديلات machine learning بترسم خط الأساس</li>
<li><strong>بيركّز على "غير عادي"</strong> – بيبرز الغريب — مش بالضرورة الخبيث</li>
</ol>
<h3>فين اكتشاف الشذوذ قوي</h3>
<p><strong>تهديدات جديدة</strong> — مثال: malware أو تقنية هجوم جديدة. محطة عمل بتعمل اتصالات خارجية لدومين مفيهوش سمعة سيئة معروفة، باستخدام برنامج شرعي.</p>
<blockquote>
<p><strong>رأي المحلل:</strong> "مش معروف-سيء — لكن جديد، نادر، وغير عادي كفاية عشان يستاهل تحقيق."</p>
</blockquote>
<p><strong>تغييرات سلوكية</strong> — مثال: إساءة استخدام اعتماد بيبدأ بهدوء. مستخدم بيدخل مرة في اليوم بدأ يدخل أكتر، بيتحرك تدريجيًا برّه الساعات الطبيعية.</p>
<blockquote>
<p><strong>رأي المحلل:</strong> "مفيش قاعدة اتكسرت — لكن السلوك بيتغيّر بالطريقة اللي الهجمات غالبًا بتبدأ بيها."</p>
</blockquote>
<p><strong>نشاط بطيء وهادي</strong> — مثال: حركة جانبية (lateral movement) عبر أيام/أسابيع. حساب مخترَق بيلمس نظام جديد كل يوم؛ نقل البيانات فاضل صغير ونادر.</p>
<blockquote>
<p><strong>رأي المحلل:</strong> "المهاجمين بيفضلوا تحت الرادار — اكتشاف الشذوذ بيمسك اللي الحدود (thresholds) بتفوّته."</p>
</blockquote>
<h3>اعتبارات لمحلل SOC</h3>
<p><strong>ليه الشذوذ بيولّد إيجابيات كاذبة:</strong> برمجيات أو workflows جديدة | نشاط إداري أو صيانة | سلوك لأول مرة أو نادر | بيئات بتتغيّر</p>
<p><strong>إزاي تتعامل مع الشذوذ:</strong> نقطة بداية، مش حكم نهائي | تحقق باللوجات والسياق | ابحث عن أدلة مؤيِّدة | وثّق الاستنتاجات بوضوح</p>
<blockquote>
<p>تذكّر: اكتشاف الشذوذ بيكون كويس بقد ما خط الأساس بتاعه كويس.</p>
</blockquote>
<h3>مثال واقعي: تحقيق حقيقي في الشذوذ</h3>
<p><strong>السيناريو:</strong> حساب مستخدم في المالية بهدوء بدأ ينزّل كميات كبيرة من SharePoint الساعة 2 الفجر — مفيش قاعدة اتكسرت تقنيًا.</p>
<ol>
<li><strong>خط الأساس اتعلَّم</strong> – الموديل عارف إن المستخدم ده بيسحب ~50 MB/يوم، 9-5، من 3 مواقع.</li>
<li><strong>شذوذ اتكتشف</strong> – الليلة: 4 GB اتسحبوا الساعة 02:00 من 20 موقع جديد — بعيد جدًا عن خط الأساس.</li>
<li><strong>تنبيه اترفع</strong> – UEBA اتفعّل: درجة خطر 91، خطورة عالية. مش "معروف-سيء" — بس غير عادي.</li>
<li><strong>المحلل تحقّق</strong> – اللوجات أظهرت توكِن OAuth جديد + IP أجنبي → أكّد استيلاء على الحساب.</li>
</ol>
<hr />
<h2 id="sec6"><span class="num">6</span><span class="htext">إزاي أنظمة الـ SIEM بتستخدم AI للتنبيه والربط</span></h2>
<h3>المشكلة اللي أنظمة الـ SIEM بتحلها</h3>
<p>حجم لوجات وأحداث ضخم | بيانات أكتر من أي فريق بشري يقدر يقراها | الربط اليدوي مش قابل للتوسّع — ضم الإشارات باليد بطيء جدًا | إشارات كتير ضعيفة لوحدها — حدث واحد نادرًا ما بيحكي القصة كاملة | المحللين محتاجين تنبيهات أفضل — أقل، أعلى دقة، مش ضوضاء أكتر</p>
<h3>فين الـ AI بيتدخّل</h3>
<ol>
<li><strong>اكتشاف سلوك غير عادي</strong> – بيبرز نشاط خطير أو شاذ</li>
<li><strong>تقييم الأحداث والكيانات</strong> – بيدّي درجة خطر للمستخدمين، الأجهزة، والأحداث</li>
<li><strong>تقليل ضوضاء التنبيهات</strong> – بيجمّع ويقمع الإشارات منخفضة القيمة</li>
<li><strong>ترتيب أولوية الاهتمام</strong> – بيحط أكتر العناصر إثارة للقلق فوق</li>
</ol>
<h3>اعتبارات لمحلل SOC</h3>
<p><strong>إيه اللي المحللين بيشوفوه عمليًا:</strong> تنبيهات أقل وأعلى جودة | تنبيهات مربوطة بمستخدمين أو أجهزة | درجات خطر أو ثقة | ملخصات سياقية</p>
<p><strong>مسؤوليات المحلل:</strong> الـ AI بيقترح — المحللين بيؤكّدوا | الربط مش بيثبت النية | الإيجابيات الكاذبة لسه بتحصل | التحقق من الأدلة مطلوب دايمًا</p>
<hr />
<h2 id="sec7"><span class="num">7</span><span class="htext">تفسير التنبيهات ودرجات المخاطر المولَّدة من AI</span></h2>
<h3>إيه اللي "تنبيهات مولَّدة من AI" فعليًا بتعنيه</h3>
<p>الـ AI في SOC بيتستخدم أساسًا عشان: يكتشف سلوك شاذ | يربط إشارات ضعيفة عبر مصادر البيانات | يدّي درجات خطر أو ثقة</p>
<blockquote>
<p><strong>مش حوادث نهائية:</strong> التنبيهات دي تقييمات احتمالية — مش حقائق. معظم تنبيهات الـ AI بتجاوب على سؤال واحد: "قد إيه ده غير عادي أو خطير مقارنةً بالطبيعي؟"</p>
</blockquote>
<h3>إيه اللي المحلل فعليًا بيشوفه</h3>
<p><strong>عناصر شائعة عبر الأدوات:</strong> عنوان أو وصف التنبيه | الكيانات المتضمَّنة (مستخدم، جهاز، IP، عملية) | نافذة زمنية وتكرار | أدلة داعمة / إشارات مساهمة | درجة خطر / خطورة / ثقة</p>
<p><strong>إزاي كل مورّد بيسمّيها:</strong>
- <strong>Splunk:</strong> Risk Score • Notable Event • Risk Object
- <strong>Elastic:</strong> ML Anomaly Score • Anomaly Severity
- <strong>أنظمة SIEM عمومًا:</strong> High / Medium / Low + درجة رقمية</p>
<blockquote>
<p><strong>تحوّل في العقلية:</strong> حقّق في ليه الموديل قلقان — مش بس إيه اللي حصل.</p>
</blockquote>
<h3>الإيجابيات الكاذبة الشائعة وليه بتحصل</h3>
<p><strong>أسباب شائعة جدًا:</strong> برمجيات جديدة أو نشاط تحديث (patching) | admins بيتصرفوا بشكل مختلف عن المعتاد | دخول لأول مرة، أجهزة جديدة، سفر | مصادر بيانات ناقصة أو ضوضائية</p>
<p><strong>ليه الـ AI بيعلّمها:</strong> خطوط الأساس لسه ما اتكيّفتش | الموديلات بتفضّل الحساسية عن اليقين | "غير عادي" ≠ "خبيث" | وثّق، اديّ feedback، اتعلّم الأنماط الحميدة</p>
<blockquote>
<p><strong>مسؤولية المحلل:</strong> وثّق الإيجابيات الكاذبة واعرف الأنماط الحميدة المتكررة.</p>
</blockquote>
<h3>الخلاصة الأساسية لمحلل مستوى 1</h3>
<ul>
<li>تنبيهات الـ AI نقاط بداية، مش استنتاجات</li>
<li>درجات المخاطر بتساعد في الترتيب — هي مش اللي بتقرر</li>
<li>تحقق دايمًا باللوجات والسياق</li>
</ul>
<blockquote>
<p><strong>عامل الـ AI كمحلل مبتدئ عمره ما بينام.</strong></p>
</blockquote>
<hr />
<h2 id="sec8"><span class="num">8</span><span class="htext">إزاي الـ EDR بيستخدم AI لاكتشاف السلوك الخبيث</span></h2>
<h3>إيه اللي الـ EDR بيلاحظه على الـ Endpoint</h3>
<p>مراقبة مستمرة لنشاط الـ endpoint | تنفيذ العمليات وعلاقات الأب-الابن | حجج سطر الأوامر وتنفيذ السكربتات | سلوك الملفات، الـ registry، والذاكرة | اتصالات شبكية خارجة من العمليات</p>
<blockquote>
<p><strong>الفكرة الأساسية:</strong> الـ EDR مش بس بيسأل "الملف ده سيء؟" هو بيسأل "السلوك ده سيء؟"</p>
</blockquote>
<h3>ليه الاكتشاف المبني على السلوك مطلوب</h3>
<ol>
<li><strong>الـ Malware بيتغيّر باستمرار</strong> – الـ hashes وأسماء الملفات بتتغيّر مع كل نسخة</li>
<li><strong>Living-off-the-land</strong> – أدوات شرعية (PowerShell، WMI) بتُستخدم بشكل خبيث</li>
<li><strong>السمعة (Reputation) مش موثوقة</strong> – سمعة الملف لوحدها بتفوّت تهديدات جديدة</li>
<li><strong>الحرفية (Tradecraft) ثابتة</strong> – سلوك المهاجم أكتر ثباتًا من الـ malware بتاعه</li>
</ol>
<h3>شكل تنبيه EDR مدعوم بالـ AI</h3>
<ol>
<li><strong>الاكتشاف والتقنية</strong> – اكتشاف مُسمّى مرسوم على MITRE ATT&amp;CK</li>
<li><strong>الخطورة / الثقة</strong> – قد إيه خطير وقد إيه الموديل متأكد</li>
<li><strong>الـ Endpoint والمستخدم</strong> – أنهي جهاز وحساب اتأثروا</li>
<li><strong>الجدول الزمني للأفعال</strong> – التسلسل المرتَّب لإيه اللي حصل</li>
<li><strong>شجرة العمليات المرئية</strong> – سلسلة الأب-الابن للتنفيذ</li>
</ol>
<h3>الـ AI في منتجات EDR</h3>
<p><strong>Microsoft Defender for Endpoint:</strong> اكتشافات مبنية على السلوك | Attack Surface Reduction + ML</p>
<p><strong>Elastic Endpoint Security:</strong> حماية malware سلوكية مدفوعة بـ ML | اكتشاف شذوذ على العمليات</p>
<p><strong>CrowdStrike:</strong> Behavioral Indicators of Attack (IOAs) | اكتشاف ومنع مبني على ML</p>
<h3>الخلاصة الأساسية — EDR</h3>
<ul>
<li>AI الخاص بالـ EDR بيركّز على سلوك المهاجم، مش الملفات بس</li>
<li>اكتشاف السلوك بيشتغل عبر نسخ الـ malware المختلفة</li>
<li>أشجار العمليات أدوات تحقيق حرجة</li>
</ul>
<blockquote>
<p>المحللين بيؤكّدوا ويضعوا سياق لكل اكتشاف.</p>
</blockquote>
<hr />
<h2 id="sec9"><span class="num">9</span><span class="htext">استخدام AI للمساعدة في الفرز وترتيب أولوية الحالات</span></h2>
<h3>مشكلة الفرز اللي الـ AI بيساعد في حلها</h3>
<ol>
<li><strong>حجم عالي، وقت محدود</strong> – تنبيهات أكتر من اللي المحللين يقدروا يشتغلوا عليها</li>
<li><strong>مش كل التنبيهات متساوية</strong> – الخطر بيتفاوت بشكل كبير عبر الطابور</li>
<li><strong>الفرز اليدوي مش قابل للتوسّع</strong> – الترتيب البشري بس مش هيلحق</li>
<li><strong>إبراز الشغل المهم</strong> – الـ AI بيرفع العناصر الأعلى قيمة لفوق</li>
</ol>
<h3>إزاي الـ AI بيساعد في الفرز والترتيب</h3>
<p><strong>إيه اللي الـ AI بيعمله:</strong> تقييم خطر وترتيب ثقة | سياق سلوكي وخط أساس | ربط عبر التنبيهات والكيانات | إعادة ترتيب أولوية مستمرة</p>
<p><strong>إيه اللي المحللين بيشوفوه عمليًا:</strong> طوابير تنبيهات أو حالات مرتَّبة | كيانات عالية الخطر مُبرزة | ملخصات سياقية للنشاط | أفعال جاية مقترَحة</p>
<h3>الفرز بالـ AI في الأدوات</h3>
<p><strong>Splunk:</strong> Risk-Based Alerting (RBA) | درجات خطر الكيانات</p>
<p><strong>Elastic Security:</strong> مستويات خطورة التنبيهات | درجات شذوذ ML</p>
<p><strong>Microsoft Sentinel:</strong> تجميع الحوادث | تعيين الخطورة</p>
<h3>الخلاصة الأساسية — الفرز</h3>
<ul>
<li>الـ AI بيقلل ضوضاء الفرز</li>
<li>ترتيب الأولوية ديناميكي، مش ثابت</li>
<li>الحكم البشري يفضل أساسي</li>
</ul>
<blockquote>
<p>خلّي الـ AI يرتّب الطابور — إنت تقرر إيه اللي مهم.</p>
</blockquote>
<hr />
<h2 id="sec10"><span class="num">10</span><span class="htext">إزاي مراكز SOC بتستخدم Generative AI</span></h2>
<h3>مراجعة تشغيلية سريعة للـ Generative AI</h3>
<p>بيولّد محتوى جديد من أنماط متعلَّمة | بيشتغل مع نصوص، كود، استعلامات، وملخصات | أقوى في المهام كثيفة اللغة | بيعزّز المحللين — مش بيستبدل محركات الاكتشاف</p>
<blockquote>
<p><strong>اتبع السياسة!</strong> الـ Generative AI بيلمس بيانات حساسة. اتبع دايمًا سياسة الأداة المعتمَدة والتعامل مع البيانات الخاصة بمؤسستك قبل ما تلزق أي حاجة.</p>
</blockquote>
<h3>حالات استخدام شائعة لـ SOC</h3>
<ol>
<li><strong>تلخيص التنبيهات والحالات</strong> – بيحوّل الضوضاء الخام لملخصات قابلة للقراءة</li>
<li><strong>شرح اللوجات والأحداث</strong> – بيشرح إيه اللي سطر log فعليًا بيعنيه</li>
<li><strong>مساعدة الاستعلام والبحث</strong> – بيساعد في بناء وتحسين SPL/KQL/EQL</li>
<li><strong>قاعدة المعرفة والـ Runbooks</strong> – بيبرز الإجراء الصح بسرعة</li>
</ol>
<h3>الـ Generative AI في الفرز والتحقيقات</h3>
<p><strong>إيه اللي بيعمله:</strong> بيلخّص الجداول الزمنية للنشاط | بيبرز الكيانات والأفعال الأساسية | بيقترح محاور تحقيقية | بيقلل وقت الفهم</p>
<p><strong>ليه ده بيساعد المحلل:</strong> وقت أقل في قراءة لوجات خام | سياق أسرع على أجهزة مش مألوفة | دفعة نحو الخطوة الجاية الأفضل | وقت أكتر للقرارات الحقيقية</p>
<h3>أمثلة أدوات حقيقية</h3>
<p><strong>Microsoft Security Copilot:</strong> ملخصات حوادث | مساعدة استعلام | إرشاد تحقيق</p>
<p><strong>Elastic:</strong> تفسيرات تنبيهات | ملخصات تحقيق</p>
<p><strong>Splunk:</strong> بحث وتفسيرات مدعومة بـ AI | دعم توليد SPL</p>
<p><strong>منصات إدارة الحالات:</strong> صياغة تقارير | ملاحظات حالات وتسليم</p>
<hr />
<h2 id="sec11"><span class="num">11</span><span class="htext">كتابة Prompts فعّالة لفرز التنبيهات</span></h2>
<h3>ليه الـ Prompts مهمة وإيه اللي بيخليها فعّالة</h3>
<p><strong>ليه الـ prompts مهمة:</strong> ردود الـ GenAI بتعتمد على المدخل | prompts غامضة → إجابات غامضة | prompts كويسة بتوفّر وقت تحقيق | المحللين يفضلوا مسؤولين</p>
<p><strong>إيه اللي بيخلي الـ prompt فعّال:</strong> مهمة أو هدف واضح | سياق ذو صلة متضمَّن | أسئلة محددة مطروحة | نطاق مناسب</p>
<h3>مقارنة: Prompt ضعيف مقابل فعّال</h3>
<p><strong>ضعيف:</strong> "Is this alert bad?"
<strong>فعّال:</strong> "Summarize the behavior that triggered this alert."</p>
<p><strong>ضعيف:</strong> "Explain this log."
<strong>فعّال:</strong> "Explain why this process execution might be suspicious in a SOC context."</p>
<blockquote>
<p>الـ prompts الفعّالة بتطلب تفسير وسياق — مش حكم بنعم/لا.</p>
</blockquote>
<h3>Prompts جاهزة يستخدمها المحللين أثناء الفرز</h3>
<div class="code-wrap"><pre><code>&quot;Summarize the key events in this alert&quot;
&quot;Explain why this behavior is unusual&quot;
&quot;What MITRE ATT&amp;CK techniques might align with this activity?&quot;
&quot;What additional logs would help validate this alert?&quot;
</code></pre></div>
<h3>الـ Guardrails وأفضل الممارسات</h3>
<p><strong>اعمل ده:</strong> تحقق من خرج الـ AI مقابل اللوجات | عامل الردود كإرشاد، مش حقيقة | وثّق القرارات بكلماتك الخاصة | خلّي إنسان في الحلقة</p>
<p><strong>تجنّب ده:</strong> عمرك ما تلزق بيانات حساسة من غير داعي | متثقش في خرج بيسمع واثق | متسيبش الـ AI تاخد القرار النهائي | متتخطاش التحقق من الأدلة</p>
<h3>الخلاصة الأساسية لمحللي SOC</h3>
<ul>
<li>الـ prompts بتشكّل فايدة الـ AI</li>
<li>اطلب تفسيرات، مش أحكام</li>
<li>السياق بيحسّن النتائج</li>
</ul>
<blockquote>
<p>المحللين يفضلوا مسؤولين.</p>
</blockquote>
<hr />
<h2 id="sec12"><span class="num">12</span><span class="htext">استخدام GenAI للمساعدة في التحقيقات</span></h2>
<h3>فين الـ GenAI بتتوضّع في التحقيقات</h3>
<ol>
<li><strong>بيساعد في الفهم</strong> – بيساعدك تفهم النشاط — مش بيكتشفه</li>
<li><strong>بيشتغل جنب SIEM وEDR</strong> – بيكمّل، عمره ما بيستبدل، محركات الاكتشاف</li>
<li><strong>أفضل استخدام بعد التنبيه</strong> – بيبدأ يشتغل بمجرد ما حاجة اتفعّلت</li>
<li><strong>بيدعم اتخاذ القرار</strong> – بيدّي المحلل مدخلات أفضل عشان يقرر</li>
</ol>
<h3>مهام تحقيق شائعة GenAI بتدعمها</h3>
<p>تلخيص الجداول الزمنية للتنبيهات | شرح اللوجات وسلوك العمليات | ربط النشاط بتقنيات الهجوم | تحديد محاور تحقيقية</p>
<blockquote>
<p><strong>القيمة:</strong> الـ GenAI بيضغط ساعات من القراءة اليدوية لدقايق من السياق — عشان تقضي وقتك في القرار، مش فك التشفير.</p>
</blockquote>
<h3>أمثلة Prompts عملية للتحقيقات</h3>
<div class="code-wrap"><pre><code>&quot;Summarize the sequence of events for this host&quot;
&quot;Explain why this process chain might indicate malicious behavior&quot;
&quot;Which MITRE ATT&amp;CK techniques align with this activity?&quot;
&quot;What evidence would confirm or refute this hypothesis?&quot;
</code></pre></div>
<h3>أمثلة أدوات في بيئات SOC حقيقية</h3>
<p><strong>Microsoft Security Copilot:</strong> ملخصات تحقيق | رسم تقنيات التهديد</p>
<p><strong>Elastic AI Assistant:</strong> تفسيرات تنبيهات | اقتراحات استعلام ومحاور</p>
<p><strong>Splunk AI features:</strong> مساعدة بحث | دعم تفسير لوجات</p>
<h3>Guardrails: استخدام GenAI بأمان</h3>
<p><strong>دايمًا:</strong> تحقق مقابل الأدلة الخام | خلّي البشر في حلقة القرار | شكّك في خرج يسمع واثق | أكّد قبل ما تتصرف</p>
<p><strong>عمرك ما:</strong> تشارك بيانات حساسة من غير داعي | تقبل الخرج كحقيقة | تخلي GenAI يقفل حالة لوحده | تتخطى فحص اللوج الخام</p>
<blockquote>
<p>راقب الخرج الواثق لكن الغلط — تحقق، وبعدين ثق.</p>
</blockquote>
<h3>الخلاصة الأساسية لمحللي SOC</h3>
<ul>
<li>فهم أسرع لنشاط معقّد</li>
<li>عبء معرفي أقل أثناء التحقيقات</li>
<li>توثيق وتسليم أفضل</li>
</ul>
<blockquote>
<p>المحللين يفضلوا مسؤولين.</p>
</blockquote>
<h3>مثال واقعي: قراءة تنبيه antivirus حقيقي</h3>
<div class="code-wrap"><pre><code>⛛ SIEM ALERT — Symantec AntiVirus • EventCode 51
08/19/2018 22:24:47 PM  LogName=Application  SourceName=Symantec AntiVirus
EventCode=51  EventType=2  Type=Error  ComputerName=MKRAEUS-L.froth.ly
TaskCategory=The operation completed successfully.  OpCode=None
RecordNumber=7098  Keywords=Classic
Message= Security Risk Found! Backdoor.PsEmpire in File:
C:\Users\MalloryKraeusen\AppData\Local\Packages\Microsoft.Microsoft
Edge_8wekyb3d8bbwe\AC\#!001\MicrosoftEdge\Cache\PUZ8SSL4\
BRUCE%20BIRTHDAY%20HAPPY%20HOUR%20PICS[1].lnk
by: Auto-Protect scan.  Action: Cleaned by Deletion.
Action Description: The file was deleted successfully.
</code></pre></div>
<p><strong>إزاي تقراه:</strong></p>
<ul>
<li><strong>Backdoor.PsEmpire</strong> – اسم التهديد — backdoor خاص بـ PowerShell Empire C2</li>
<li><strong>.lnk في cache الـ Edge</strong> – اختصار خبيث اتوصّل عبر إغراء ويب/تحميل</li>
<li><strong>MKRAEUS-L / MalloryKraeusen</strong> – الجهاز والمستخدم المتأثرين للتحقيق حولهم</li>
<li><strong>Cleaned by Deletion</strong> – الـ AV عالج تلقائيًا — لكن حقّق في المصدر</li>
</ul>
<p><strong>خطوة المحلل الجاية:</strong> ابحث عن التنفيذ، الاستمرارية (persistence)، وC2 على الشبكة.</p>
<hr />
<h2 id="sec13"><span class="num">13</span><span class="htext">استخدام GenAI للتقارير والتوثيق</span></h2>
<h3>فين الـ GenAI بتتناسب في التوثيق</h3>
<ol>
<li><strong>صياغة ملخصات الحوادث</strong> – بيحوّل النتائج لمسودة أولى بسرعة</li>
<li><strong>تنظيم ملاحظات الحالة</strong> – بينظّم ملاحظات فوضوية لشكل نظيف</li>
<li><strong>الوضوح والاتساق</strong> – بيوحّد النبرة والمصطلحات</li>
<li><strong>إعادة الكتابة حسب الجمهور</strong> – بيعيد صياغة التفاصيل التقنية للمديرين أو الزملاء</li>
</ol>
<h3>أمثلة Prompts عملية للتقارير</h3>
<div class="code-wrap"><pre><code>&quot;Summarize this incident for a SOC handoff&quot;
&quot;Rewrite these findings in plain language&quot;
&quot;Create an executive-level incident summary&quot;
&quot;Structure these notes into a clear timeline&quot;
</code></pre></div>
<h3>أمثلة أدوات SOC</h3>
<p><strong>منصات إدارة الحالات:</strong> صياغة ملخصات حالات | ملاحظات تسليم المحللين</p>
<p><strong>Microsoft Security Copilot:</strong> ملخصات حوادث | تقارير تنفيذية</p>
<p><strong>تكاملات SIEM:</strong> workflows من تنبيه لتقرير | ملخصات مؤتمتة</p>
<h3>الـ Guardrails وأفضل الممارسات</h3>
<p><strong>اعمل ده:</strong> تحقق من كل المحتوى المولَّد من AI | حافظ على ملكية تقاريرك | خلّي الحقائق مبنية على أدلة | راجع وعدّل قبل الإرسال</p>
<p><strong>تجنّب ده:</strong> عمرك ما تخلي الـ AI يخترع حقائق | متنسخش بيانات حساسة بشكل أعمى | متبعتش مسودة غير مراجَعة | متحوّلش المساءلة لطرف تاني</p>
<h3>تلخيص البيانات والتقارير — العائد</h3>
<p>بيانات من مصادر متعددة، بتتلخّص بسهولة | بيبرز النتائج الأساسية، الاتجاهات، والثغرات | توفير وقت عن طريق الأتمتة — بيقلل MTTD (متوسط وقت الاكتشاف) | المحللين بيراجعوا/يعدّلوا بدل ما يكتبوا من الصفر | تقارير سهلة التخصيص لجماهير مختلفة</p>
<p><strong>مثال Prompt:</strong></p>
<div class="code-wrap"><pre><code>&quot;Look at the network and authentication logs from the past 7 hours. 
Tell me which anomalies you see.&quot;
</code></pre></div>
<p>Prompt واحد → تحديد نمط، إبراز، ومسودة تقرير أولى المحلل بس بيراجعها.</p>
<h3>الخلاصة الأساسية لمحللي SOC</h3>
<ul>
<li>الـ GenAI بيحسّن السرعة والاتساق</li>
<li>أفضل استخدام للصياغة وإعادة الكتابة</li>
<li>الدقة والحكم يفضلوا بشريين</li>
</ul>
<blockquote>
<p>جودة التوثيق مهمة.</p>
</blockquote>
<hr />
<h2 id="sec14"><span class="num">14</span><span class="htext">تحيّز الـ AI، الإيجابيات الكاذبة، ورقابة المحلل</span></h2>
<h3>الـ AI قوي، مش مثالي</h3>
<p>الـ AI متدرِّب على بيانات تاريخية | الموديلات بتعكس البيانات وخيارات التصميم | الـ AI بينتج احتمالات، مش حقائق | الأخطاء متوقّعة، مش فشل</p>
<blockquote>
<p><strong>"All models are wrong, but some are useful."</strong> شغلانتك إنك تمسك الغلط منهم.</p>
</blockquote>
<h3>شكل التحيّز وليه الإيجابيات الكاذبة شائعة</h3>
<p><strong>شكل التحيّز في AI الخاص بـ SOC:</strong> بيانات تدريب متحيّزة أو ناقصة | البيئات بتتغيّر أسرع من الموديلات | تمثيل زايد لبعض السلوكيات | نقاط عمياء في الرؤية</p>
<p><strong>ليه الإيجابيات الكاذبة شائعة:</strong> غير عادي ≠ خبيث | برمجيات أو workflows جديدة | نشاط إداري | سلوك لأول مرة أو نادر</p>
<h3>أمثلة حقيقية من أدوات SOC</h3>
<ol>
<li><strong>الـ EDR بيعلّم سكربتات admin</strong> – أتمتة/PowerShell شرعي بيبان خبيث</li>
<li><strong>تنبيهات SIEM أثناء الصيانة</strong> – ارتفاعات شذوذ أثناء نوافذ الـ patching</li>
<li><strong>تنبيهات هوية على السفر</strong> – رحلات شرعية بتحفّز "impossible travel"</li>
<li><strong>انحراف خط الأساس مع الوقت (Drift)</strong> – تحولات طبيعية، الموديل لسه ما لحقش</li>
</ol>
<h3>دور المحلل في الرقابة</h3>
<ol>
<li><strong>تحقق بالأدلة</strong> – أكّد خرج الـ AI مقابل اللوجات الخام</li>
<li><strong>قدّم السياق الناقص</strong> – ضيف اللي الموديل ما يقدرش يشوفه</li>
<li><strong>اعرف الإيجابيات الكاذبة المتكررة</strong> – اتعلّم الأنماط الحميدة</li>
<li><strong>امنع الثقة العمياء</strong> – احمِ نفسك من إرهاق التنبيهات (alert fatigue)</li>
</ol>
<h3>الخلاصة الأساسية لمحللي SOC</h3>
<ul>
<li>تحيّز الـ AI والإيجابيات الكاذبة طبيعية</li>
<li>الدرجات بتوجّه، مش بتقرر</li>
<li>الأدلة دايمًا بتكسب</li>
</ul>
<blockquote>
<p>الرقابة البشرية أساسية.</p>
</blockquote>
<hr />
<h2 id="sec15"><span class="num">15</span><span class="htext">إزاي موديلات الـ ML المخصَّصة بتُستخدم في مراكز SOC</span></h2>
<h3>إيه معنى "Custom ML Models" في SOC</h3>
<p>موديلات مبنية لبيئة أو مشكلة محددة | متدرِّبة على بيانات خاصة بالمؤسسة | بتكمّل الاكتشافات المقدَّمة من الموردين | بتُستخدم لما الاكتشافات العامة مش كافية</p>
<blockquote>
<p><strong>الفكرة:</strong> الاكتشافات الجاهزة عارفة التهديدات بشكل عام. الموديلات المخصَّصة عارفة بيئتك تحديدًا.</p>
</blockquote>
<h3>ليه مراكز SOC بتستخدم موديلات مخصَّصة</h3>
<p><strong>ليه تبني بتاعك:</strong> بيئات وworkflows فريدة | إيجابيات كاذبة عالية من الموديلات العامة | أنماط تهديد خاصة بالمؤسسة | حاجة لمنطق اكتشاف مخصَّص</p>
<p><strong>حالات استخدام شائعة:</strong> اكتشاف شذوذ سلوك المستخدم | إساءة استخدام حسابات الخدمة | مراقبة التهديد الداخلي | أنماط هجوم نادرة أو بطيئة وهادية</p>
<h3>إيه اللي المحللين المفروض يتوقعوه</h3>
<ul>
<li>التنبيهات بتبان شبيهة باكتشافات AI تانية</li>
<li>الدرجات ومستويات الثقة لسه بتنطبق</li>
<li>الإيجابيات الكاذبة لسه بتحصل</li>
</ul>
<blockquote>
<p>تحقق المحلل مطلوب دايمًا.</p>
</blockquote>
<hr />
<h2 id="summary"><span class="htext">الخلاصة العامة للموديول</span></h2>
<h3>المحاور اللي غطّيناها:</h3>
<p>من أساسيات الـ AI/ML/Generative AI، لإزاي بيتدمجوا في أدوات SOC اليومية (SIEM، EDR، UEBA)، لإزاي تقرا تنبيهات الـ AI بثقة، لاستخدام الـ Generative AI بأمان في الفرز والتحقيق والتقارير، ووصولًا لفهم تحيّز الـ AI ورقابة المحلل والموديلات المخصَّصة.</p>
<h3>الخلاصة النهائية</h3>
<blockquote>
<p><strong>اعرف المصطلحات • ثق في خط الأساس • خلّي الإنسان في الحلقة.</strong></p>
</blockquote>
<hr />
<p><em>نهاية نوتس الموديول السابع</em></p>
  <div class="footer-note">نهاية نوتس الموديول السابع — Module 7: AI in the SOC</div>

</div>
</body>
</html>
