---
title: "Secure AI Systems Engineering"
published: 2026-09-19
description: "Secure AI Systems Engineering — eAIS Module 3 notes."
tags: [eAIS, AI Security, Secure AI, AI Engineering, Security]
category: "Courses Notes"
course: "eAIS"
module: 3
draft: false
---
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Module 3: هندسة أنظمة الـ AI الآمنة (Secure AI Systems Engineering)</title>
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
    <span class="kicker">eAIS · Module 3 · Study Notes</span>
    <h1>هندسة أنظمة الـ AI الآمنة</h1>
    <p class="lede">نوتس مذاكرة منظمة تغطي هندسة ضوابط أمان الـ AI عمليًا: تأمين الـ prompts والمخرجات، استدعاء الأدوات، RAG والـ embeddings، المعمارية الآمنة، ونموذج النضج — مع سيناريوهات واقعية وlab تصميم كامل.</p>
    <div class="tags">
      <span class="tag">Secure Architecture</span>
      <span class="tag">RAG Security</span>
      <span class="tag">Tool Invocation</span>
      <span class="tag">DLP</span>
      <span class="tag">Governance &amp; Maturity</span>
    </div>
  </div>


<nav class="toc"><div class="toc-title">محتويات الموديول</div><div class="toc-grid">
<a class="toc-item" href="#sec1"><span class="toc-num">1</span><span>أساسيات أمان الـ AI (Part I: AI Security Foundations)</span></a>
<a class="toc-item" href="#sec2"><span class="toc-num">2</span><span>أمان الـ Prompt والمدخلات (Part II: Prompt and Input Security)</span></a>
<a class="toc-item" href="#sec3"><span class="toc-num">3</span><span>أمان المخرجات وDLP (Part III: Output Security and DLP)</span></a>
<a class="toc-item" href="#sec4"><span class="toc-num">4</span><span>استدعاء الأدوات الآمن (Part IV: Secure Tool Invocation)</span></a>
<a class="toc-item" href="#sec5"><span class="toc-num">5</span><span>أمان RAG والمعرفة (Part V: RAG and Knowledge Security)</span></a>
<a class="toc-item" href="#sec6"><span class="toc-num">6</span><span>الـ Embeddings وقواعد بيانات الـ Vector (Part VI: Embeddings and Vector Databases)</span></a>
<a class="toc-item" href="#sec7"><span class="toc-num">7</span><span>المعمارية الآمنة والتنفيذ (Part VII: Secure Architecture and Implementation)</span></a>
<a class="toc-item" href="#sec8"><span class="toc-num">8</span><span>السيناريوهات، الـ Labs، والحوكمة (Part VIII: Scenarios, Labs, and Governance)</span></a>
<a class="toc-item" href="#sec9"><span class="toc-num">9</span><span>تعمّق إضافي (Additional Deep Dive)</span></a>
<a class="toc-item" href="#summary"><span class="toc-num toc-num-plain">•</span><span>الخلاصة العامة للموديول</span></a>
</div></nav>

<h1>Module 3: هندسة أنظمة الـ AI الآمنة (Secure AI Systems Engineering)</h1>
<blockquote>
<p>نوتس مذاكرة منظمة لثالث موديول في كورس eAIS — هنا الكورس بيتحول من "إزاي تهاجم" لـ "إزاي تبني وتحمي" أنظمة الـ AI هندسيًا، بضوابط عملية بتتطبّق خارج الموديل نفسه.</p>
</blockquote>
<hr />
<h2 id="sec1"><span class="num">1</span><span class="htext">أساسيات أمان الـ AI (Part I: AI Security Foundations)</span></h2>
<h3>ليه أنظمة الـ AI محتاجة هندسة أمنية؟</h3>
<p>اللغة الطبيعية بقت واجهة تطبيق. المحتوى الخارجي يقدر يأثر على سلوك النظام. المخرجات المولَّدة ممكن تقود workflows تجارية. الـ agents ممكن تضخّم الأخطاء والإساءة. الضوابط التقليدية لسه مهمة.</p>
<h3>أمان الـ AI = أمان التطبيقات + إضافات</h3>
<p>الهوية (Identity) لسه هي الأساس. التفويض (Authorization) لسه إلزامي. تصنيف البيانات لسه مهم. الـ logging والمراقبة لسه مطلوبين. الـ AI بتقدّم مخاطر مدخل وسياق جديدة.</p>
<h3>المبدأ الأساسي</h3>
<p>الموديل ممكن يقترح أفعال. التطبيق لازم يفرض السياسة. الـ workflow لازم يتحقق من المخرجات. المنصة لازم تفوّض الوصول للبيانات. الـ SOC لازم يراقب أنماط الإساءة.</p>
<h3>الأصول الأساسية في أنظمة الـ AI</h3>
<p>تعليمات النظام والسياسات. مدخلات المستخدم والمحتوى المرفوع. تاريخ المحادثة والذاكرة. مستندات RAG وفهارس الـ vector. اعتمادات الأدوات ووصول الـ APIs.</p>
<h3>حدود الثقة الأساسية (Primary Trust Boundaries)</h3>
<p>من المستخدم للتطبيق. من التطبيق للموديل. من الموديل لموصّل الأداة (tool connector). من مخزن RAG لسياق الـ prompt. من مخرج الموديل لتنفيذ الـ workflow.</p>
<h3>نمط فشل شائع 1: خلط الثقة</h3>
<p>المحتوى غير الموثوق بيندمج مع التعليمات الموثوقة. الموديل بيعامل النص المسترجَع كسلطة (authority). الـ prompt injection بيبقى تأثير على مستوى التحكم (control-plane). قواعد الأمان بتتكتب فوقها من نص محقون. عزل السياق مفقود.</p>
<h3>نمط فشل شائع 2: التشابه بدل التصريح</h3>
<p>البحث الدلالي بيرجّع مستندات غير مصرَّح بيها. التشابه بيتم الخلط بينه وبين التصريح (permission). مستندات حساسة بتدخل سياق الـ prompt. الخرج بيسرّب معلومات مقيَّدة. تفويض RAG مفقود.</p>
<h3>نمط فشل شائع 3: تنفيذ تلقائي غير آمن</h3>
<p>خرج الموديل بيتنفّذ تلقائيًا. باراميترات خطيرة بتتقبل. workflow بيكتب على أنظمة إنتاج. مفيش approval gate موجود. سجل التدقيق (audit trail) ناقص.</p>
<h3>الدفاع بالعمق (Defense in Depth) لأنظمة الـ AI</h3>
<p>التحقق من المدخل. تحصين الـ prompt. عزل السياق. التفويض عند الاسترجاع والتنفيذ. التحقق من الخرج والمراقبة.</p>
<h3>أسئلة الـ Threat Modeling</h3>
<p>إيه البيانات اللي الموديل يقدر يشوفها؟ إيه التعليمات الموثوقة؟ أنهي أدوات الموديل يقدر يطلبها؟ أنهي مخرجات بتأثر على أنظمة حقيقية؟ فين المهاجم يقدر يحقن محتوى؟</p>
<h3>رسم تدفق البيانات (Data Flow Mapping)</h3>
<div class="code-wrap"><pre><code>طلب المستخدم يدخل التطبيق → التطبيق بيجمّع سياق الـ prompt → 
RAG بيسترجع مستندات → الموديل بيولّد رد → 
الأفعال بتتحقق، تتوافق عليها، وتتنفّذ
</code></pre></div>
<h3>الثوابت الأمنية (Security Invariants)</h3>
<p>المحتوى غير الموثوق مايقدرش يغيّر السياسة. المستندات المسترجَعة بيانات مرجعية بس. خرج الموديل عمره ما بيتوثق فيه تلقائيًا. الأدوات ممنوعة افتراضيًا (deny by default). الأفعال الحساسة تحتاج موافقة خارجية.</p>
<h3>فئات المخاطر</h3>
<p>Prompt injection. كشف بيانات حساسة. استرجاع غير مصرَّح. استدعاء أدوات غير آمن. تسميم قاعدة المعرفة.</p>
<h3>فئات التأثير</h3>
<p>فقدان السرية. اختراق السلامة (integrity). فعل غير مصرَّح. تعطّل تشغيلي. فشل الامتثال والتدقيق.</p>
<h3>عائلات الضوابط الأمنية للـ AI</h3>
<p>ضوابط وقائية (Preventive). ضوابط كاشفة (Detective). ضوابط تصحيحية (Corrective). ضوابط حوكمة (Governance). ضوابط اختبار وضمان (Testing and assurance).</p>
<h3>أهمية SOC</h3>
<p>راقب الـ prompts الغير عادية. نبّه على نداءات الأدوات المرفوضة. اكتشف محاولات الاسترجاع المفرطة. تتبّع تنقيات DLP. حقّق في مؤشرات الـ prompt injection.</p>
<h3>نمط تصميم آمن</h3>
<p>افصل التعليمات، البيانات، والأفعال. استخدم بوابات سياسة deterministic. قيّد وصول الأدوات. تحقق من الخرج قبل الاستخدام. سجّل كل قرار حساس.</p>
<h3>أسئلة مراجعة (Quiz)</h3>
<p>ليه اللغة الطبيعية بتزود سطح الهجوم؟ ليه سلوك الموديل مش حدود أمنية؟ فين المفروض التفويض يتفرض؟ ليه محتوى RAG غير موثوق؟ إيه اللي المفروض يتسجّل؟</p>
<p>سمّي 3 حدود ثقة في نظام AI. إيه الفرق بين بيانات مرجعية وبيانات تعليمات؟ ليه نظام AI آمن محتاج فحوصات منطق عمل (business logic)؟ إزاي خرج الموديل يقدر يبقى خطر إنتاجي؟ أنهي فريق بيمتلك المراقبة؟</p>
<hr />
<h2 id="sec2"><span class="num">2</span><span class="htext">أمان الـ Prompt والمدخلات (Part II: Prompt and Input Security)</span></h2>
<h3>نظرة عامة على أمان الـ Prompt</h3>
<p>الـ prompts ممكن تحمل نية المستخدم. الـ prompts كمان ممكن تحمل تعليمات عدائية. الملفات المرفوعة ممكن تحتوي تعليمات مخفية. المحتوى المسترجَع ممكن يتلاعب في سلوك الموديل. الضوابط لازم تصنّف كل مدخل حسب مستوى الثقة.</p>
<h3>المدخلات الموثوقة</h3>
<p>تعليمات النظام. قواعد المطوّر. سياسة أمان معتمدة. إعدادات التطبيق. قيود workflow تمت مراجعتها.</p>
<h3>المدخلات غير الموثوقة</h3>
<p>prompts المستخدم. مستندات مرفوعة. صفحات ويب. إيميلات وتذاكر (tickets). ردود الأدوات والمحتوى المسترجَع.</p>
<h3>الـ Direct Prompt Injection</h3>
<p>المستخدم بيطلب مباشرة تجاهل التعليمات. المستخدم بيطلب الـ prompts المخفية. المستخدم بيطلب تجاوز سياسة. المستخدم بيحاول إرباك الدور (role confusion). المستخدم بيضغط على الموديل لتجاوز القواعد.</p>
<h3>الـ Indirect Prompt Injection</h3>
<p>نص خبيث جوه مستند. تعليمات عدائية في صفحة ويب. خرج أداة فيه أوامر للموديل. محتوى إيميل بيوجّه الـ assistant. صفحة قاعدة معرفة فيها توجيهات مخفية.</p>
<h3>أهداف التحقق من المدخل (Input Validation)</h3>
<p>ارفض صيغ غير مدعومة. قيّد حجم الملف وطول المحتوى. طبّع الترميز (normalize encoding). شيل الـ metadata الخطيرة. امنع إساءة استخدام الـ parser.</p>
<h3>أمان رفع الملفات</h3>
<p>افحص عن malware. استخدم parsers آمنة. شيل المحتوى النشط (active content). قيّد أنواع الملفات. سجّل أحداث الاستيعاب والمعالجة.</p>
<h3>أهداف تحصين الـ Prompt (Prompt Hardening)</h3>
<p>حدد نطاق الـ assistant. اذكر قواعد الأمان بوضوح. علّم المحتوى الخارجي كغير موثوق. اوصف التعامل مع التعارضات. اطلب رفض الطلبات غير الآمنة.</p>
<h3>تصميم الـ System Prompt</h3>
<p>الدور والمهمة. السلوكيات المسموحة والممنوعة. حدود التعامل مع البيانات. قواعد استخدام الأدوات. قواعد التصعيد وعدم اليقين.</p>
<h3>قيود تحصين الـ Prompt</h3>
<p>نص الـ prompt مش طبقة إنفاذ. المهاجمين يقدروا يجربوا تنويعات كتير. الحقن غير المباشر ممكن يكون مخفي. الموديلات ممكن تتبع سياق مضلِّل. الضوابط الخارجية لسه مطلوبة.</p>
<blockquote>
<p>هنا نقطة أساسية جدًا: <strong>تحصين الـ prompt (مهما كان قوي) مش بديل عن ضوابط خارجية deterministic — هو طبقة إضافية بس، مش الحل الوحيد.</strong></p>
</blockquote>
<h3>عزل السياق (Context Isolation)</h3>
<p>خلّي التعليمات الموثوقة منفصلة. حدد المحتوى المسترجَع بوضوح. علّم المحتوى غير الموثوق. امنع مدخل المستخدم من الكتابة فوق السياسة. مرّر بس السياق المطلوب.</p>
<h3>علامات السياق (Context Labels)</h3>
<p>تعليمة النظام. طلب المستخدم. مرجع مسترجَع. خرج أداة. ملخّص ذاكرة.</p>
<h3>نمط بناء الـ Prompt</h3>
<p>ابدأ بالسياسة الموثوقة. أضف قواعد مطوّر خاصة بالمهمة. أضف طلب المستخدم بعد التنقية. أضف محتوى مرجعي موصوف. أضف قواعد وقيود الخرج.</p>
<h3>حالات اختبار الـ Prompt Injection</h3>
<p>تجاهل التعليمات السابقة. اكشف الـ system prompt المخفي. عامل نص المستند كتعليمات مدير. استخدم النص المسترجَع لنداء أداة. تجاوز workflow الموافقة.</p>
<h3>تسجيل الـ Prompt (Logging)</h3>
<p>سجّل ميتاداتا طلب المستخدم. سجّل إصدار السياسة. سجّل ملخّص الاسترجاع. سجّل طلبات الأدوات. تجنّب تسجيل الأسرار أو محتوى حساس مفرط.</p>
<h3>التعامل مع الطلبات الغامضة</h3>
<p>اسأل أسئلة توضيحية. قيّد نطاق الفعل. تجنّب أفعال ذات صلاحية على أساس التخمين. صعّد للمراجعة البشرية. سجّل مسار القرار.</p>
<h3>أمان الذاكرة (Memory Security)</h3>
<p>حدد نطاق الذاكرة حسب المستخدم والـ tenant. أنهِ صلاحية الذاكرة القديمة. تحقق من الذاكرة قبل إعادة الاستخدام. عمرك ما تخزّن أسرار في الذاكرة. عطّل الذاكرة للمهام عالية الخطورة.</p>
<h3>مخاطر تاريخ المحادثة</h3>
<p>محتوى محقون قديم ممكن يفضل موجود. السياق السابق يقدر يأثر على مهام جديدة. معلومات حساسة ممكن تتكرر. دور المستخدم يقدر يتغيّر بمرور الوقت. حدود الجلسة لازم تُفرض.</p>
<h3>مراقبة إساءة استخدام المدخل</h3>
<p>محاولات jailbreak متكررة. إغراق بـ prompts ضخمة. رفع ملفات مشبوهة. طلبات لتعليمات مخفية. لغة دور أو سياسة غير متوقّعة.</p>
<h3>أسئلة مراجعة (Quiz)</h3>
<p>إيه هو الـ direct prompt injection؟ إيه هو الـ indirect prompt injection؟ ليه الملفات المرفوعة لازم تكون غير موثوقة؟ إيه اللي عزل السياق بيمنعه؟ ليه تحصين الـ prompt مش كافي؟</p>
<p>سمّي ترتيب آمن لبناء الـ prompt. إيه اللي المفروض يتسجّل لأحداث الـ prompt؟ إزاي المفروض الذاكرة تتحدد نطاقها؟ إيه اللي بيخلي محتوى الويب خطير؟ إمتى المفروض النظام يصعّد؟</p>
<hr />
<h2 id="sec3"><span class="num">3</span><span class="htext">أمان المخرجات وDLP (Part III: Output Security and DLP)</span></h2>
<h3>نظرة عامة على أمان المخرجات</h3>
<p>الخرج المولَّد ممكن يكون غلط. الخرج المولَّد ممكن يسرّب بيانات. الخرج المولَّد ممكن يطلب أفعال غير آمنة. الخرج المولَّد ممكن يبان منظّم لكن لسه غير آمن. لازم التحقق يحصل قبل الاستخدام في مراحل لاحقة.</p>
<h3>مخاطر الخرج الأساسية</h3>
<p>إرشاد ناتج عن hallucination. تسريب بيانات حساسة. كشف غير مصرَّح. أتمتة غير آمنة. خرج منظّم (structured) مشوَّه.</p>
<h3>الـ Hallucination كخطر أمني</h3>
<p>أوامر غلط. APIs وهمية. خطوات علاج غير صحيحة. تفسير أدلة خاطئ. نصيحة تشغيلية غير آمنة.</p>
<h3>ضوابط التأصيل (Grounding Controls)</h3>
<p>استخدم مصادر موثوقة. اعرض استشهادات أو مصدر المعلومة (provenance). اطلب لغة تعبّر عن عدم اليقين. اطلب مراجعة بشرية للإرشادات عالية التأثير. اختبر التعليمات التشغيلية قبل الاستخدام.</p>
<h3>مخاطر الخرج الحساس</h3>
<p>اعتمادات في الردود. مفاتيح API في السياق. بيانات عملاء أو موظفين. تفاصيل بنية داخلية. تقارير سرية.</p>
<h3>أهداف فحص DLP</h3>
<p>الأسرار والتوكينز. الـ PII والبيانات المنظَّمة (regulated). البيانات المالية. الكود المصدري والمفاتيح. السياسات الداخلية والسجلات السرية.</p>
<h3>فلترة الخرج</h3>
<p>امنع البيانات الحساسة. نقّي الأسرار. اقمع الإجراءات غير الآمنة. صعّد المحتوى عالي الخطورة. سجّل قرارات السياسة.</p>
<h3>فوائد الخرج المنظَّم (Structured Output)</h3>
<p>التحقق من الـ schema. حقول مُعرَّفة النوع (typed fields). قوائم سماح للحقول (allowlists). تحليل أكتر أمانًا. workflows موثوقة لاحقًا.</p>
<h3>قيود الخرج المنظَّم</h3>
<p>JSON صحيح لسه ممكن يكون ضار. التفويض لسه مطلوب. منطق العمل (business logic) لسه مطلوب. الأفعال الحساسة لسه محتاجة موافقة. اللوجات لسه إلزامية.</p>
<blockquote>
<p><strong>نقطة أساسية:</strong> خرج JSON صحيح شكليًا مش معناه إنه آمن أو مصرَّح له — الـ schema validation بيحل مشكلة الشكل بس، مش السياسة أو الصلاحية.</p>
</blockquote>
<h3>مبادئ تصميم الـ Schema</h3>
<p>استخدم أسماء حقول صريحة. استخدم enums لأنواع الأفعال. قيّد النص الحر لما يكون ممكن. حدد أطوال قصوى. ارفض الحقول غير المعروفة.</p>
<h3>مسار التحقق من الخرج (Output Validation Pipeline)</h3>
<div class="code-wrap"><pre><code>توليد الرد → التحقق من الـ schema → تشغيل DLP → 
تطبيق التفويض → الإفراج عن الرد أو التصعيد
</code></pre></div>
<h3>اعتدال المحتوى (Content Moderation)</h3>
<p>اكتشف محتوى مخالف للسياسة. اكتشف تعليمات غير آمنة. اكتشف طلبات تحويل خبيثة. صعّد الحالات غير المؤكَّدة. خلّي الاعتدال منفصل عن حكم الموديل.</p>
<h3>مصدر الرد (Response Provenance)</h3>
<p>تتبّع المستندات المصدرية. تتبّع معرّفات الاسترجاع. تتبّع إصدار السياسة. تتبّع مخرجات الأدوات المستخدَمة. تتبّع نتيجة التحقق النهائية.</p>
<h3>معايير المراجعة البشرية</h3>
<p>تعليمات تشغيلية عالية التأثير. محتوى حساس قانونيًا أو للامتثال. توصيات حوادث أمنية. تغييرات الصلاحيات. اتصالات خارجية.</p>
<h3>التعامل مع الخرج بمبدأ Fail-Closed</h3>
<p>ارفض الـ schema غير الصحيح. امنع بيانات غير مصرَّحة. متنفّذش أفعال غير آمنة. أرجع تفسير آمن. أخطر خط أنابيب المراقبة.</p>
<h3>ضبط DLP</h3>
<p>ابدأ بالاكتشافات عالية الثقة. راجع النتائج الإيجابية الكاذبة. وسّع الأنماط الحساسة. اضبط حسب فئات بيانات العمل. قِس عدد التسريبات اللي اتمنعت.</p>
<h3>مراقبة إساءة استخدام الخرج</h3>
<p>محاولات استخراج أسرار متكررة. prompts لتصدير بيانات ضخمة. طلبات لتعليمات داخلية. لغة تجاوز سياسة. تنقيات ردود غير عادية.</p>
<h3>أسئلة مراجعة (Quiz)</h3>
<p>ليه الخرج الواثق (confident) مش بالضرورة صحيح؟ إيه اللي DLP المفروض يفحصه؟ ليه الخرج المنظَّم لسه محتاج تفويض؟ إمتى المفروض المراجعة البشرية تكون إلزامية؟ إيه معنى fail-closed؟</p>
<p>سمّي 3 ضوابط للتحقق من الخرج. إيه الميتاداتا اللي بتدعم الـ provenance؟ إزاي تضبط DLP؟ إيه اللي بيخلي أمر مولَّد خطير؟ فين المفروض التحقق من الخرج يشتغل؟</p>
<hr />
<h2 id="sec4"><span class="num">4</span><span class="htext">استدعاء الأدوات الآمن (Part IV: Secure Tool Invocation)</span></h2>
<h3>نظرة عامة على استدعاء الأدوات</h3>
<p>أنظمة الـ AI ممكن تنادي APIs. أنظمة الـ AI ممكن تستعلم قواعد بيانات. أنظمة الـ AI ممكن تنشئ تذاكر. أنظمة الـ AI ممكن تبعت رسائل. أنظمة الـ AI ممكن تغيّر أنظمة لو مسموح لها.</p>
<h3>ليه وصول الأدوات خطر عالي</h3>
<p>الـ prompt injection يقدر يحفّز أفعال. الموديل ممكن يختار الأداة الغلط. الباراميترات ممكن تكون خطيرة. التفويض ممكن يتم تجاوزه. الأفعال ممكن تكون غير قابلة للتراجع.</p>
<h3>الموديل المفروض يطلب، مش ينفّذ</h3>
<p>الموديل بيقترح فعل. التطبيق بيتحقق من الاقتراح. فحوصات السياسة بتفوّض الفعل. الموافقة بتُطلب لما تكون لازمة. التنفيذ بيتم عن طريق كود متحكَّم فيه.</p>
<blockquote>
<p>هنا الفكرة الجوهرية للجزء كله: <strong>الموديل مقترِح، مش منفِّذ. الفصل ده هو خط الدفاع الأول ضد إساءة استخدام الأدوات.</strong></p>
</blockquote>
<h3>قوائم السماح للدوال (Function Allowlists)</h3>
<p>حدد الدوال المسموحة. ارفض الدوال غير المعروفة. افصل أدوات القراءة عن الكتابة. حدد إصدار عقود الدوال (function contracts). راجع التغييرات قبل الإصدار.</p>
<h3>فئات الدوال</h3>
<p>بحث للقراءة فقط. إنشاء تذاكر. إرسال إشعارات. إدارة الحسابات. تعديل البنية التحتية.</p>
<h3>أمثلة أدوات خطيرة</h3>
<p>تنفيذ أمر shell. حذف سجلات. إنشاء مستخدم admin. تصدير كل البيانات. تعديل سياسة أمنية.</p>
<h3>تصميم أدوات آمن</h3>
<p>دوال صغيرة محدودة النطاق. عقود باراميترات صريحة. اعتمادات بأقل صلاحية. حدود معدل (rate limits). تسجيل تدقيق قوي.</p>
<h3>التحقق من الباراميترات</h3>
<p>تحقق من الأنواع. تحقق من الطول. تحقق من الصيغ. امنع الحروف الخطيرة. قيّد نطاق الاستعلام.</p>
<h3>فحوصات منطق العمل (Business Logic)</h3>
<p>تأكد من دور الطالب. تأكد من ملكية الهدف. تأكد من غرض الفعل. تأكد من نافذة التغيير (change window). تأكد من تصنيف البيانات.</p>
<h3>إنفاذ التفويض</h3>
<p>استخدم تدفق هوية التطبيق. تحقق من صلاحيات المستخدم. تحقق من حدود الـ tenant. تحقق من نطاق المورد. تحقق من شروط السياسة.</p>
<h3>بوابات الموافقة (Approval Gates)</h3>
<p>إعادة تعيين الباسورد. تغييرات الصلاحيات. تصدير البيانات. تعديلات الإنتاج. الاتصالات الخارجية.</p>
<h3>التعامل مع خرج الأدوات</h3>
<p>عامل خرج الأداة كغير موثوق. تحقق من ردود الأداة. متعاملش مع خرج الأداة كتعليمة. فلتر خرج الأداة الحساس. سجّل ميتاداتا رد الأداة.</p>
<h3>التعامل مع أخطاء الأدوات</h3>
<p>فشل بشكل آمن (fail closed). أرجع رسالة خطأ آمنة. متكشفش stack trace. تجنّب تسريب التوكينز. نبّه على الأخطاء المتكررة.</p>
<h3>اعتمادات الأدوات</h3>
<p>عمرك ما تعرض اعتمادات للموديل. خزّن الاعتمادات في مدير أسرار (secrets manager). استخدم service principals محدودة النطاق. دوّر الاعتمادات. راقب استخدام الاعتمادات.</p>
<h3>ضوابط حلقة الـ Agent</h3>
<p>قيّد عدد الخطوات. قيّد معدل نداءات الأدوات. أوقف عند الفشل المتكرر. اطلب موافقة للتصعيد. حدد أقصى تكلفة ووقت.</p>
<h3>مسار استدعاء الأداة</h3>
<div class="code-wrap"><pre><code>طلب فعل من الموديل → التحقق من الـ schema → قائمة سماح الدوال → 
التحقق من الباراميترات → فحص التفويض → الموافقة والتنفيذ
</code></pre></div>
<h3>حقول تسجيل الأدوات</h3>
<p>هوية المستخدم. الدالة المطلوبة. ملخّص الباراميترات. نتيجة التفويض. قرار الموافقة. نتيجة التنفيذ.</p>
<h3>مراقبة إساءة استخدام الأدوات</h3>
<p>أفعال مرفوضة متكررة. محاولات تصعيد صلاحيات. تسلسلات دوال غير متوقّعة. استكشاف عبر الـ tenants. أفعال على أهداف عالية القيمة.</p>
<h3>أسئلة مراجعة (Quiz)</h3>
<p>ليه الأدوات المفروض تكون ممنوعة افتراضيًا؟ إيه هو الـ function allowlisting؟ ليه التحقق من الباراميترات مطلوب؟ أنهي أفعال محتاجة موافقة؟ ليه خرج الأداة لازم يكون غير موثوق؟</p>
<p>إيه اللي المفروض يتسجّل لنداءات الأدوات؟ إزاي حدود حلقة الـ agent بتقلل المخاطر؟ فين المفروض الاعتمادات تعيش؟ إيه معنى fail closed للأدوات؟ إزاي الـ SOC يقدر يكتشف إساءة استخدام الأدوات؟</p>
<hr />
<h2 id="sec5"><span class="num">5</span><span class="htext">أمان RAG والمعرفة (Part V: RAG and Knowledge Security)</span></h2>
<h3>نظرة عامة على RAG</h3>
<p>المستخدم بيقدّم استعلام. النظام بيصنع embedding. البحث الـ vector بيسترجع مستندات. المستندات بتدخل سياق الـ prompt. الموديل بيولّد رد مبني على أساس (grounded).</p>
<h3>ليه RAG بتغيّر ملف المخاطر</h3>
<p>المحتوى المسترجَع بيبقى مدخل. مستندات المؤسسة بتدخل السياق. التحكم في الوصول بيبقى تحكم في الاسترجاع. المحتوى المسموم يقدر يستمر. التشابه يقدر يعبر حدود الأمان.</p>
<h3>التشابه مش تصريح (Similarity Is Not Authorization)</h3>
<p>البحث الـ vector بيلاقي محتوى مرتبط. المحتوى المرتبط ممكن يكون مقيَّد. المستخدم ممكن ميكونش عنده صلاحية. الموديل مايقدرش يستنتج التفويض. الاسترجاع لازم يفرض RBAC.</p>
<blockquote>
<p><strong>دي أهم نقطة في الجزء كله:</strong> التشابه الدلالي (Similarity) مبني على المعنى، مش على الصلاحية. نظام RAG من غير RBAC عند الاسترجاع بيفترض إن "كل حاجة مرتبطة = كل حاجة مسموحة" — وده غلط جوهريًا.</p>
</blockquote>
<h3>تهديد RAG رقم 1: Indirect Prompt Injection</h3>
<p>نص خبيث جوه مستندات. المستند بيتسترجع بالبحث الدلالي. النص بيتحط في السياق. الموديل بيتبع التعليمة العدائية. عزل السياق والفلترة مطلوبين.</p>
<h3>تهديد RAG رقم 2: تسميم قاعدة المعرفة (Knowledge Base Poisoning)</h3>
<p>المهاجم بيضيف محتوى خبيث. خط أنابيب الاستيعاب (ingestion) بيفهرس المحتوى. المحتوى المسموم بيأثر على إجابات مستقبلية. التلاعب بيستمر مع الوقت. الموافقة على المصدر مطلوبة.</p>
<h3>تهديد RAG رقم 3: استرجاع غير مصرَّح</h3>
<p>مستند مقيَّد بيبقى شبيه بالاستعلام. البحث بيرجّع المستند. بيانات حساسة بتظهر في الرد. DLP ممكن تمسك التسريب متأخر. تفويض الاسترجاع المفروض يمنعه من الأساس.</p>
<h3>تهديد RAG رقم 4: استخراج بيانات (Data Exfiltration)</h3>
<p>المستخدم بيسأل أسئلة واسعة. RAG بيسترجع chunks حساسة كتير. الموديل بيلخّص بيانات سرية. الخرج بيتخطى حدود الوصول الأصلية. نطاق الاستعلام وDLP مطلوبين.</p>
<h3>تهديد RAG رقم 5: خلط الـ Tenants (Tenant Mixing)</h3>
<p>فهرس vector مشترك بيخزّن tenants متعددة. فلتر الميتاداتا مفقود أو غلط. مستندات من tenant تاني بتتسترجع. الرد بيسرّب بيانات عبر الـ tenants. عزل الـ tenant إلزامي.</p>
<h3>أمان الاستيعاب (Ingestion Security)</h3>
<p>افحص الملفات المرفوعة. تحقق من مستودع المصدر. نظّف الميتاداتا. شيل التعليمات المخفية لما يكون ممكن. اعتمد المصادر الموثوقة.</p>
<h3>مصدر المستند (Document Provenance)</h3>
<p>النظام المصدري. المالك والتصنيف. توقيت الاستيعاب. الإصدار والـ hash. ميتاداتا سياسة الوصول.</p>
<h3>مخاطر التقسيم (Chunking Risks)</h3>
<p>الـ chunks بتفقد السياق الأمني. العناوين ممكن تتفصل عن المحتوى. علامات التصنيف ممكن ما تنتقلش. الـ chunks الصغيرة ممكن تسرّب أجزاء. ميتاداتا الـ chunk لازم تتبع كل chunk.</p>
<h3>ضوابط الاسترجاع</h3>
<p>فلتر حسب صلاحيات المستخدم. فلتر حسب الـ tenant. فلتر حسب التصنيف. قيّد نتائج top-k. اطلب قائمة سماح للمصادر.</p>
<h3>بناء سياق RAG</h3>
<p>أضف بس الـ chunks المصرَّح بيها. علّم المحتوى كمرجع. افصل النص المسترجَع عن التعليمات. قيّد حجم التوكِنز. اشمل مصدر المعلومة (provenance).</p>
<h3>ضوابط خرج RAG</h3>
<p>استشهد بمصادر مصرَّح بيها. طبّق DLP. تجنّب كشف نص المستند المخفي. متجاوبش أبعد من البيانات المسموحة. صعّد حالات التفويض غير المؤكَّدة.</p>
<h3>مراقبة RAG</h3>
<p>حجم استرجاع عالي. استعلامات مقيَّدة متكررة. محاولات استرجاع مرفوضة. توزيع مصادر غير عادي. مؤشرات تسميم.</p>
<h3>الاستجابة لحوادث RAG</h3>
<p>احفظ لوجات الـ prompt والاسترجاع. حدد المصادر المتأثرة. شيل أو اعزل المحتوى المسموم. أعد بناء الفهارس المتأثرة. أخطر أصحاب البيانات.</p>
<h3>اختبار RAG</h3>
<p>مستندات حقن prompt. مقالات معرفة مسمومة. أدوار مستخدم غير مصرَّحة. استعلامات عبر الـ tenants. prompts استخراج بيانات حساسة.</p>
<h3>أسئلة مراجعة (Quiz)</h3>
<p>ليه المحتوى المسترجَع غير موثوق؟ ليه التشابه مش تصريح؟ إيه هو knowledge base poisoning؟ ليه الاستيعاب حدود أمنية؟ إزاي المفروض الـ chunks تحمل التصنيف؟</p>
<p>إزاي المفروض لوجات RAG تدعم التحقيق؟ أنهي فلاتر المفروض تشتغل قبل الاسترجاع؟ ليه DLP مش بديل عن التفويض؟ إيه هو tenant mixing؟ إزاي تختبر إساءة استخدام RAG؟</p>
<hr />
<h2 id="sec6"><span class="num">6</span><span class="htext">الـ Embeddings وقواعد بيانات الـ Vector (Part VI: Embeddings and Vector Databases)</span></h2>
<h3>نظرة عامة على الـ Embeddings</h3>
<p>النص بيتحول لمتجهات رقمية. المعنى المتشابه بيولّد متجهات قريبة. المتجهات بتمكّن البحث الدلالي. الـ embeddings بتأثر على الاسترجاع. الـ embeddings ممكن تمثّل معنى حساس.</p>
<h3>نظرة عامة على قاعدة بيانات الـ Vector</h3>
<p>بتخزّن الـ embeddings. بتشغّل بحث تشابه. بترجّع chunks مرتبطة. بتدعم RAG والبحث الدلالي. بتبقى طبقة بيانات AI حرجة.</p>
<h3>قواعد بيانات Vector الشائعة</h3>
<p>FAISS للفهرسة المحلية. ChromaDB لـ workflows التطوير. Qdrant لخدمات البحث الـ vector. Weaviate للتطبيقات الدلالية. Pinecone للبحث الـ vector المُدار.</p>
<h3>أصول قاعدة بيانات الـ Vector</h3>
<p>متجهات الـ embedding. أجزاء المستندات (chunks). الميتاداتا والعلامات. إعدادات الفهرس. مفاتيح API واعتمادات الخدمة.</p>
<h3>مخاطر قاعدة بيانات الـ Vector</h3>
<p>وصول استعلام غير مصرَّح. استيعاب غير مصرَّح. تجاوز فلتر الميتاداتا. استرجاع عبر الـ tenants. تسميم الفهرس.</p>
<h3>التحكم في الوصول لمخازن الـ Vector</h3>
<p>وثّق هوية كل عميل. فوّض عمليات القراءة والكتابة. افصل أدوار الاستعلام عن الاستيعاب. قيّد الـ APIs الإدارية. استخدم فهارس محدَّدة النطاق لكل tenant عند الحاجة.</p>
<h3>أمان الميتاداتا</h3>
<p>علامات التصنيف. معرّفات الـ tenant. مالكي المستندات. معرّفات النظام المصدري. قواعد الاحتفاظ والتعامل.</p>
<h3>تسميم الفهرس (Index Poisoning)</h3>
<p>محتوى خبيث بيتحول لـ embedding. المتجهات بتتضاف للفهرس. البحث بيسترجع المحتوى الخبيث. الموديل بيتأثر بالنتائج المسمومة. الموافقة على الاستيعاب بتقلل الخطر.</p>
<h3>اعتبارات خصوصية الـ Embeddings</h3>
<p>المتجهات ممكن تكشف معلومات دلالية. الـ embeddings ممكن تدعم مخاطر استنتاج العضوية (membership inference). الـ embeddings بترث اعتبارات تصنيف البيانات. التخزين لسه محتاج تحكم وصول. الاحتفاظ لازم يتبع قواعد البيانات المصدرية.</p>
<h3>التشفير والنقل</h3>
<p>استخدم TLS لوصول الـ API. شفّر المتجهات المخزَّنة. احمِ النسخ الاحتياطية. احمِ اعتمادات الخدمة. تحكم في وحدات التحكم الإدارية.</p>
<h3>مراقبة استعلامات الـ Vector</h3>
<p>حجم استعلام عالي. مواضيع حساسة متكررة. استكشاف حدود الـ tenant. توسّع غير عادي في top-k. استعلامات من عملاء غير متوقّعين.</p>
<h3>تقسيم مخازن الـ Vector</h3>
<p>افصل البيئات. افصل الـ tenants. افصل مستويات الحساسية. افصل بيانات الاختبار عن الإنتاج. استخدم مفاتيح API محدَّدة النطاق.</p>
<h3>Checklist تحصين مخزن الـ Vector</h3>
<p>RBAC معدّ. مفاتيح API متجدِّدة (rotated). قيود شبكة مطبَّقة. فلاتر الميتاداتا مفروضة. لوجات التدقيق مفعَّلة.</p>
<h3>ضوابط خط أنابيب الـ Embedding</h3>
<p>التحقق من المصدر. تصنيف المحتوى. نشر ميتاداتا الـ chunk. تسجيل توليد الـ embedding. الموافقة على تحديث الفهرس.</p>
<h3>الاستجابة لحوادث قاعدة بيانات الـ Vector</h3>
<p>عطّل المفتاح المخترَق. صدّر لوجات التدقيق ذات الصلة. حدد المتجهات المسمومة. شيل الـ chunks المتأثرة. أعد بناء الفهرس لو محتاج.</p>
<h3>اختبار أمان الـ Vector</h3>
<p>محاولات استعلام غير مصرَّحة. اختبارات تجاوز فلتر الميتاداتا. اختبارات إدخال مسموم. اختبارات استرجاع عبر الـ tenants. اختبارات استخراج مواضيع حساسة.</p>
<h3>أسئلة مراجعة (Quiz)</h3>
<p>إيه هو الـ embedding؟ ليه الـ embeddings ممكن تكون حساسة؟ إيه اللي قاعدة بيانات الـ vector بترجّعه؟ ليه الميتاداتا لازم تتبع الـ chunks؟ إزاي المتجهات ممكن تتسمم؟</p>
<p>أنهي عمليات محتاجة RBAC؟ ليه نفصل أدوار الاستعلام والاستيعاب؟ إيه اللي لوجات قاعدة بيانات الـ vector المفروض تلتقطه؟ إزاي تختبر عزل الـ tenant؟ ليه نشفّر تخزين الـ vector؟</p>
<hr />
<h2 id="sec7"><span class="num">7</span><span class="htext">المعمارية الآمنة والتنفيذ (Part VII: Secure Architecture and Implementation)</span></h2>
<h3>المعمارية المرجعية الآمنة للـ AI</h3>
<p>مزوّد الهوية (Identity provider). بوابة تطبيق الـ AI. طبقة تنسيق السياسة (Policy orchestration). خدمة استرجاع RAG. خدمة موصّل الأدوات. خط أنابيب DLP والمراقبة.</p>
<h3>ضوابط طبقة الهوية</h3>
<p>توثيق قوي. وصول مشروط (Conditional access). هوية المستخدم وworkload. تخطيط الأدوار (role mapping). ضوابط الجلسة.</p>
<h3>ضوابط بوابة التطبيق (Application Gateway)</h3>
<p>التحقق من المدخل. تحديد معدل الطلبات (rate limiting). إنفاذ سياسة الـ prompt. التحكم في حدود الجلسة. إنشاء أحداث التدقيق.</p>
<h3>ضوابط تنسيق السياسة (Policy Orchestration)</h3>
<p>قواعد تجميع السياق. قواعد وصول الأدوات. قواعد التحقق من الخرج. workflows الموافقة. التعامل مع الاستثناءات.</p>
<h3>ضوابط خدمة RAG</h3>
<p>قوائم سماح المصادر. فلاتر استرجاع RBAC. فلاتر الـ tenant. فلاتر التصنيف. تتبّع مصدر المعلومة.</p>
<h3>ضوابط موصّل الأدوات</h3>
<p>قائمة سماح الدوال. التحقق من الباراميترات. تفويض خارجي. بوابات الموافقة. تسجيل التنفيذ.</p>
<h3>طبقة التحكم في الخرج</h3>
<p>التحقق من الـ schema. فحص DLP. فلترة المحتوى. طابور المراجعة البشرية. الإفراج عن الرد النهائي.</p>
<h3>طبقة المراقبة</h3>
<p>اكتشافات إساءة استخدام الـ prompt. اكتشافات إساءة استخدام RAG. اكتشافات إساءة استخدام الأدوات. ربط أحداث DLP. لوحات فرز الحوادث (incident triage).</p>
<h3>Checklist البناء الآمن</h3>
<p>اكتمال threat model. اكتمال تصنيف البيانات. مراجعة قوالب الـ prompt. مراجعة صلاحيات RAG. مراجعة نطاقات الأدوات.</p>
<h3>Checklist النشر الآمن</h3>
<p>الأسرار مخزَّنة بأمان. وصول الشبكة مقيَّد. الـ logging مفعَّل. DLP مفعَّل. بوابات الموافقة اتُختبرت.</p>
<h3>Checklist العمليات الآمنة</h3>
<p>راجع اللوجات بانتظام. اضبط الاكتشافات. راجع قوائم سماح الأدوات. راجع استيعاب المصادر. نفّذ اختبارات red team دورية.</p>
<h3>ملكية الضوابط (Control Ownership)</h3>
<p>معمارية الأمان بتمتلك تصميم السياسة. AppSec بتمتلك مراجعة التنفيذ. فريق المنصة بيمتلك ضوابط البنية التحتية. أصحاب البيانات بيعتمدوا المصادر. الـ SOC بيراقب الإساءة.</p>
<h3>إدارة التغيير (Change Management)</h3>
<p>راجع تغييرات الـ prompt. راجع تغييرات عقد الأداة. راجع تغييرات مصدر RAG. راجع تغييرات سياسة DLP. راجع تغييرات الموديل أو المزوّد.</p>
<h3>جاهزية الإصدار (Release Readiness)</h3>
<p>دليل اختبار أمني. قرارات قبول المخاطر. خطة تراجع (rollback). تغطية مراقبة. دليل استجابة حوادث (playbook).</p>
<h3>مجالات تركيز الـ Red Team للـ AI</h3>
<p>Prompt injection. تسريب بيانات. إساءة استخدام أدوات. تسميم RAG. استرجاع عبر الـ tenants.</p>
<h3>مجالات تركيز الـ Blue Team</h3>
<p>تغطية الـ telemetry. ضبط التنبيهات. استعلامات threat hunting. إجراء التحقيق. خطة الاحتواء.</p>
<h3>أسئلة مراجعة (Quiz)</h3>
<p>فين المفروض إنفاذ السياسة يعيش؟ مين بيعتمد مصادر بيانات RAG؟ ليه موصّلات الأدوات منفصلة؟ إيه اللي المفروض الـ gateway يتحقق منه؟ إيه اللي المفروض الـ SOC يراقبه؟</p>
<p>إيه اللي بينتمي لجاهزية الإصدار؟ إزاي ضوابط التغيير بتنطبق على الـ prompts؟ أنهي فريق بيمتلك ضبط DLP؟ ليه نختبر بوابات الموافقة؟ إزاي نتائج الـ red team بتغذّي الهندسة؟</p>
<hr />
<h2 id="sec8"><span class="num">8</span><span class="htext">السيناريوهات، الـ Labs، والحوكمة (Part VIII: Scenarios, Labs, and Governance)</span></h2>
<h3>8 سيناريوهات واقعية للمناقشة</h3>
<p><strong>سيناريو 1: تسريب بيانات HR</strong> — موظف بيسأل أسئلة واسعة عن الرواتب. RAG بيسترجع ملفات HR مقيَّدة. الموديل بيلخّص نطاقات رواتب سرية. تفويض الاسترجاع كان مفقود. <strong>الحل:</strong> فلاتر RBAC وDLP.</p>
<p><strong>سيناريو 2: مقالة قاعدة معرفة خبيثة</strong> — المهاجم بيعدّل مقالة في قاعدة المعرفة. المقالة بتقول للـ assistant يتجاهل السياسة. RAG بيسترجع المقالة لاستعلام شائع. الموديل بيتبع المحتوى المحقون. <strong>الحل:</strong> موافقة على الاستيعاب وعزل السياق.</p>
<p><strong>سيناريو 3: إعادة تعيين باسورد غير آمنة</strong> — المستخدم بيطلب من الـ assistant إعادة تعيين حساب تنفيذي. الموديل بينادي أداة الحساب مباشرة. مفيش approval gate موجود. إساءة استخدام صلاحيات بتحصل. <strong>الحل:</strong> التفويض وworkflow موافقة.</p>
<p><strong>سيناريو 4: علاج تقني وهمي</strong> — الموديل بيولّد أمر firewall غير صحيح. المحلل بينسخ الأمر للإنتاج. انقطاع خدمة بيحصل. الخرج ما اتراجعش أو اتاختبرش. <strong>الحل:</strong> التحقق من الـ runbook.</p>
<p><strong>سيناريو 5: استرجاع عبر الـ Tenants</strong> — مخزن vector مشترك فيه tenants متعددة. فلتر الميتاداتا بيفشل. الاستعلام بيسترجع chunk من tenant تاني. بيانات سرية بتتسرّب. <strong>الحل:</strong> اختبارات عزل الـ tenant.</p>
<p><strong>سيناريو 6: سر في تاريخ الـ Prompt</strong> — المستخدم بيلزق مفتاح API في الشات. ذاكرة المحادثة بتخزّن السر. رد لاحق بيكرر القيمة الحساسة. الذاكرة ما اتفلترتش. <strong>الحل:</strong> DLP وسياسة ذاكرة.</p>
<p><strong>سيناريو 7: حقن عبر خرج أداة</strong> — API خارجي بيرجّع نص عدائي. الموديل بيعامل خرج الـ API كتعليمة. الـ assistant بيغيّر خطة الفعل. خرج الأداة كان موثوق. <strong>الحل:</strong> توسيم وتحقق من الخرج.</p>
<p><strong>سيناريو 8: إساءة استخدام حلقة الـ Agent</strong> — الـ agent بيحاول أفعال مرفوضة باستمرار. الحلقة بتستمر بأدوات بديلة. اللوجات بتمتلئ بمحاولات صلاحية متكررة. مفيش حد للحلقة موجود. <strong>الحل:</strong> حدود خطوات وتنبيه.</p>
<h3>إعداد الـ Lab</h3>
<p>اختار use case لـ AI assistant. ارسم تدفق البيانات. حدد المستخدمين والأدوار. حدد مصادر البيانات. حدد الأدوات والأفعال.</p>
<h3>خطوة الـ Lab 1: حدود الثقة</h3>
<p>حدد حدود المستخدم-للتطبيق. حدد حدود التطبيق-للموديل. حدد حدود RAG-للسياق. حدد حدود الأداة-للموديل. حدد حدود الخرج-للفعل.</p>
<h3>خطوة الـ Lab 2: التهديدات</h3>
<p>اذكر مخاطر prompt injection. اذكر مخاطر تسريب بيانات. اذكر مخاطر إساءة استخدام أدوات. اذكر مخاطر تسميم RAG. اذكر فجوات المراقبة.</p>
<h3>خطوة الـ Lab 3: الضوابط</h3>
<p>حدد ضوابط المدخل. حدد ضوابط السياق. حدد ضوابط الاسترجاع. حدد ضوابط الأدوات. حدد ضوابط الخرج.</p>
<h3>خطوة الـ Lab 4: الاكتشافات</h3>
<p>تنبيهات إساءة استخدام الـ prompt. تنبيهات نداءات أدوات مرفوضة. تنبيهات استرجاع حساس. أحداث تنقية DLP. تنبيهات استعلام عبر الـ tenants.</p>
<h3>خطوة الـ Lab 5: الأدلة</h3>
<p>رسم بياني للمعمارية. جدول threat model. checklist الضوابط. أمثلة لوجات. ملاحظات قبول المخاطر.</p>
<h3>مستويات نضج أمان الـ AI (Maturity Model)</h3>
<div class="table-wrap"><table>
<thead>
<tr>
<th>المستوى</th>
<th>الوصف</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>المستوى 1</strong></td>
<td>استخدام أساسي للـ AI. ضوابط محدودة. مفيش threat model رسمي. تسجيل محدود. اعتماد كبير على حذر المستخدم</td>
</tr>
<tr>
<td><strong>المستوى 2</strong></td>
<td>فلترة مدخل وخرج. قوالب prompt أساسية. بعض ضوابط DLP. مراجعة يدوية للعمل عالي الخطورة. حوكمة RAG محدودة</td>
</tr>
<tr>
<td><strong>المستوى 3</strong></td>
<td>عزل السياق. تفويض RAG. قوائم سماح الأدوات. التحقق من الـ schema. اختبار أمني قبل الإصدار</td>
</tr>
<tr>
<td><strong>المستوى 4</strong></td>
<td>مراقبة وتنبيهات. workflows موافقة. DLP مؤتمت. مصادر بيانات محكومة. أدلة استجابة حوادث</td>
</tr>
<tr>
<td><strong>المستوى 5</strong></td>
<td>red teaming مستمر. ضمان مؤتمت. حوكمة مخاطر AI. ضوابط دورة حياة الموديل والـ prompt. نتائج أمنية مقيسة</td>
</tr>
</tbody>
</table></div>
<h3>أسئلة الحوكمة</h3>
<p>مين بيمتلك مخاطر الـ AI؟ مين بيعتمد مصادر البيانات؟ مين بيراجع الـ prompts؟ مين بيعتمد وصول الأدوات؟ مين بيراقب الحوادث؟</p>
<h3>متطلبات السياسة</h3>
<p>سياسة تصنيف البيانات. سياسة الـ prompt والسياق. سياسة استيعاب RAG. سياسة استدعاء الأدوات. سياسة الخرج وDLP.</p>
<h3>مقاييس للتتبع (Metrics)</h3>
<p>محاولات prompt injection. نداءات أدوات مرفوضة. حظر DLP. محاولات استرجاع غير مصرَّحة. زمن معالجة نتائج AI.</p>
<h3>أخطاء شائعة</h3>
<p>الثقة العمياء في المستندات المسترجَعة. إعطاء الموديلات أدوات ذات صلاحية. استخدام RAG من غير تفويض. معاملة JSON كأمان. تخطي المراقبة.</p>
<h3>الـ Checklist النهائي</h3>
<p>اكتمال threat model. تنفيذ عزل السياق. تفويض الاسترجاع مفروض. وصول الأدوات بأقل صلاحية. التحقق من الخرج وDLP مفعَّلين.</p>
<h3>الأسئلة النهائية</h3>
<p>إيه أهم ضابط لحالة استخدامك؟ فين المهاجمين يقدروا يحقنوا محتوى؟ أنهي أفعال محتاجة موافقة؟ أنهي مصادر بيانات المفروض تُستبعد؟ إيه المفروض الـ SOC يراقبه أولًا؟</p>
<h3>ملخّص الكورس (Course Recap)</h3>
<p>أمان الـ AI الفعلي محتاج ضوابط هندسية. الموديل مش محرك السياسة. RAG لازم تفرض تفويض. استخدام الأدوات لازم يتحكم فيه خارجيًا. المراقبة بتقفل الحلقة.</p>
<h3>الخطوات الجاية</h3>
<p>نفّذ ورشة threat model واحدة لـ AI. راجع مساعدات الـ AI الحالية. اعمل checklist أمان AI. أضف اكتشافات SOC. جدول اختبار دوري.</p>
<hr />
<h2 id="sec9"><span class="num">9</span><span class="htext">تعمّق إضافي (Additional Deep Dive)</span></h2>
<h3>قاعدة التصميم: المنع الافتراضي (Default Deny)</h3>
<p>الأدوات غير المعروفة بترفض. مستودعات المصادر غير المعروفة ما بتتفهرسش. حقول الخرج غير المعروفة بترفض. أدوار المستخدم غير المعروفة ما بتاخدش بيانات ذات صلاحية.</p>
<h3>قاعدة التصميم: أقل سياق (Least Context)</h3>
<p>استرجع بس الـ chunks الضرورية. مرّر بس خصائص المستخدم المطلوبة. اشمل بس التاريخ المرتبط بالمهمة. اعرض الحد الأدنى من بيانات رد الأداة.</p>
<h3>مدخلات قبول المخاطر (Risk Acceptance Inputs)</h3>
<p>صاحب العمل التجاري. فئة البيانات المتأثرة. المخاطر المتبقية (Residual risk). ضوابط تعويضية مؤقتة. تاريخ المراجعة.</p>
<h3>قاعدة التصميم: الإنفاذ الخارجي (External Enforcement)</h3>
<p>الموديل مايفوّضش. الموديل مايوافقش. الموديل ما بيقررش مدة الاحتفاظ. الموديل مايتخطاش التصنيف.</p>
<blockquote>
<p><strong>دي أهم قاعدة في الكورس كله بصراحة:</strong> أي قرار أمني حساس (تفويض، موافقة، احتفاظ، تصنيف) لازم يتاخد بره الموديل، في كود deterministic — الموديل مصدر اقتراح، مش مصدر قرار.</p>
</blockquote>
<h3>قاعدة التصميم: قرارات قابلة للملاحظة (Observable Decisions)</h3>
<p>سجّل إصدار السياسة. سجّل نتيجة الاسترجاع. سجّل قرار الأداة. سجّل فعل DLP. سجّل نتيجة الموافقة.</p>
<h3>اختبار Prompt Injection</h3>
<p>prompts jailbreak مباشرة. تعليمات مستندات مخفية. حقن عبر خرج أداة. حقن تعليمات عبر صفحة ويب. اختبارات استمرارية الذاكرة.</p>
<h3>اختبار أمان RAG</h3>
<p>استعلامات بدور غير مصرَّح. استعلامات عزل الـ tenant. استرجاع مستندات مسمومة. محاولات تجاوز قائمة سماح المصادر. اختبارات فلتر التصنيف.</p>
<h3>اختبار أمان الأدوات</h3>
<p>طلب دالة غير معروفة. طلب باراميتر خطير. طلب تصعيد صلاحيات. محاولة تجاوز موافقة. حلقة أفعال مرفوضة متكررة.</p>
<h3>اختبار أمان الخرج</h3>
<p>مخالفة الـ schema. محاولة توليد سر. محاولة تلخيص حساس. توليد أمر غير آمن. ادعاء تقني غير مدعوم.</p>
<h3>أفكار تنبيهات SOC</h3>
<p>jailbreaks متكررة. نداءات أدوات مرفوضة. حجم استرجاع عالي. تنقيات DLP. شذوذات تحديث فهرس الـ vector.</p>
<hr />
<h2 id="summary"><span class="htext">الخلاصة العامة للموديول</span></h2>
<h3>مراجعة سريعة: أهم النقاط</h3>
<div class="table-wrap"><table>
<thead>
<tr>
<th>#</th>
<th>الجزء</th>
<th>النقطة الأساسية</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>إعداد الكورس</td>
<td>حدد النطاق والجمهور وإيقاع التقديم قبل ما تبدأ</td>
</tr>
<tr>
<td>2</td>
<td>أساسيات أمان الـ AI</td>
<td>ارسم أسطح هجوم خاصة بالـ AI وافصل الموثوق عن غير الموثوق</td>
</tr>
<tr>
<td>3</td>
<td>أمان الـ Prompt والمدخلات</td>
<td>حصّن الـ prompts، اعزل السياق، وعامل كل مدخل كغير موثوق</td>
</tr>
<tr>
<td>4</td>
<td>أمان المخرجات وDLP</td>
<td>تحقق من مخرجات الموديل وامنع تسريب البيانات الحساسة</td>
</tr>
<tr>
<td>5</td>
<td>استدعاء الأدوات الآمن</td>
<td>حدد، صنّف، تحقق، فوّض، وراقب كل نداء أداة</td>
</tr>
<tr>
<td>6</td>
<td>أمان RAG والمعرفة</td>
<td>التشابه مش تصريح — فرض RBAC على الاسترجاع</td>
</tr>
<tr>
<td>7</td>
<td>الـ Embeddings وقواعد بيانات الـ Vector</td>
<td>احمِ مخازن الـ vector من التسميم وخلط الـ tenants</td>
</tr>
<tr>
<td>8</td>
<td>المعمارية الآمنة والتنفيذ</td>
<td>صمّم الحدود، الملكية، والضوابط قبل النشر</td>
</tr>
<tr>
<td>9</td>
<td>السيناريوهات، الـ Labs، والحوكمة</td>
<td>حوّل كل ضابط لـ checklist قابل للتكرار والتدقيق</td>
</tr>
</tbody>
</table></div>
<h3>الكورس اكتمل</h3>
<p>كل ضابط في الكورس ده بيترجم لسؤال واحد: <strong>مين بيمتلك الحد ده، وإزاي بيتفرض؟</strong></p>
<p>خد الـ checklists دي وطبّقها على أنظمتك بتاعتك.</p>
<hr />
<p><em>نهاية نوتس الموديول الثالث</em></p>
  <div class="footer-note">نهاية نوتس الموديول الثالث — Module 3: Secure AI Systems Engineering</div>

</div>
</body>
</html>
