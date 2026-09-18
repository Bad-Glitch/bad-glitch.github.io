---
title: "OSINT Search Hub"
published: 2026-09-16
description: "أداة تفاعلية بتولّد روابط بحث مباشرة على عشرات المواقع من مجرد يوزرنيم أو إيميل أو رقم تليفون — كل حاجة شغالة جوا المتصفح من غير أي سيرفر أو تجميع بيانات"
image: "OSINT Toolkit.png"
tags:
  - "OSINT"
  - "Tools"
  - "Recon"
  - "JavaScript"
category: "Toolkits"
lang: "ar"
---

> **ملحوظة تقنية:** الصفحة دي فيها كود JavaScript شغال (مش HTML/CSS بس زي باقي البوستات). لو المحرك بتاع البلوج عندك بيمسح الـ `<script>` تلقائيًا من الماركداون (حاجة شائعة في Astro/Hugo/إلخ لأسباب أمنية)، زرار "بحث" مش هيشتغل. جرّبها بعد النشر مباشرة، ولو ملقتش تفاعل، استخدم رابط النسخة المنشورة هنا بدل تضمين الكود: **https://claude.ai/artifact/H1kbuowepJB4Z1ihQde9J5** (ممكن تحطه كـ `<iframe>` أو لينك "جرّبها مباشرة" في البوست).

<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>OSINT Search Hub</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
:root{
  --bg: #0b1210;
  --panel: #101a16;
  --panel-2: #16221c;
  --border: #24352c;
  --text: #e6f0ec;
  --text-dim: #8fa89c;
  --accent: #35d69b;
  --accent-dim: #1d7a58;
  --warn: #f2c14e;
  --danger: #ef6a6a;
  --grid-line: rgba(53,214,155,0.05);
}
:root:not([data-theme="light"]){}
@media (prefers-color-scheme: light){
  :root:not([data-theme="dark"]){
    --bg: #f4f7f5;
    --panel: #ffffff;
    --panel-2: #eef3f0;
    --border: #d7e2dc;
    --text: #12201a;
    --text-dim: #5b6e64;
    --accent: #0f9d68;
    --accent-dim: #0b7a51;
    --grid-line: rgba(15,157,104,0.06);
  }
}
:root[data-theme="light"]{
  --bg: #f4f7f5;
  --panel: #ffffff;
  --panel-2: #eef3f0;
  --border: #d7e2dc;
  --text: #12201a;
  --text-dim: #5b6e64;
  --accent: #0f9d68;
  --accent-dim: #0b7a51;
  --grid-line: rgba(15,157,104,0.06);
}
*{ box-sizing: border-box; }
body{
  margin:0; padding:0;
  background:
    linear-gradient(var(--grid-line) 1px, transparent 1px) 0 0 / 100% 34px,
    linear-gradient(90deg, var(--grid-line) 1px, transparent 1px) 0 0 / 34px 100%,
    var(--bg);
  color: var(--text);
  font-family: 'Cairo', 'Segoe UI', Tahoma, sans-serif;
  direction: rtl;
  min-height: 100vh;
}
.mono{ font-family: 'IBM Plex Mono', monospace; }
.wrap{
  max-width: 900px;
  margin: 0 auto;
  padding: 36px 20px 80px;
}
header.top{
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 22px 24px;
  margin-bottom: 22px;
  background: var(--panel);
  position: relative;
}
header.top::before{
  content: "";
  position: absolute;
  inset-inline-start: 0; top: 0; bottom: 0;
  width: 3px;
  background: var(--accent);
}
.tag{
  font-family: 'IBM Plex Mono', monospace;
  font-size: 11.5px;
  letter-spacing: 1.5px;
  color: var(--accent);
  text-transform: uppercase;
  margin-bottom: 8px;
  display: block;
}
h1{
  font-size: 22px;
  font-weight: 800;
  margin: 0 0 6px;
}
.lede{
  color: var(--text-dim);
  font-size: 14.5px;
  line-height: 1.75;
  margin: 0;
  max-width: 640px;
}
.disclaimer{
  margin-top: 14px;
  padding: 10px 14px;
  border: 1px dashed var(--border);
  border-radius: 4px;
  font-size: 12.5px;
  color: var(--text-dim);
  line-height: 1.7;
}
.disclaimer strong{ color: var(--warn); font-weight: 700; }

.tabs{
  display: flex;
  gap: 2px;
  margin-bottom: 0;
}
.tab-btn{
  flex: 1;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: .5px;
  padding: 12px 10px;
  background: var(--panel-2);
  border: 1px solid var(--border);
  border-bottom: none;
  color: var(--text-dim);
  cursor: pointer;
  transition: color .15s, background .15s;
}
.tab-btn:first-child{ border-radius: 4px 0 0 0; }
.tab-btn:last-child{ border-radius: 0 4px 0 0; }
.tab-btn.active{
  color: var(--accent);
  background: var(--panel);
  border-bottom: 1px solid var(--panel);
  position: relative;
  top: 1px;
}
.tab-btn:not(.active):hover{ color: var(--text); }

.panel{
  border: 1px solid var(--border);
  border-radius: 0 0 4px 4px;
  background: var(--panel);
  padding: 22px;
  margin-bottom: 20px;
}
.search-row{
  display: flex;
  gap: 10px;
  margin-bottom: 6px;
}
.search-row input{
  flex: 1;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 15px;
  padding: 12px 14px;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 4px;
  color: var(--text);
  direction: ltr;
  text-align: left;
}
.search-row input:focus{
  outline: none;
  border-color: var(--accent);
}
.search-row button{
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 700;
  font-size: 13.5px;
  letter-spacing: .5px;
  padding: 0 22px;
  background: var(--accent);
  color: var(--bg);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: filter .15s, transform .1s;
}
.search-row button:hover{ filter: brightness(1.08); }
.search-row button:active{ transform: scale(.98); }
.hint{
  font-size: 12px;
  color: var(--text-dim);
  margin: 0 0 4px;
}

.count-bar{
  display:flex;
  align-items:center;
  justify-content: space-between;
  margin: 18px 0 10px;
  padding-top: 16px;
  border-top: 1px solid var(--border);
}
.count-bar .n{
  font-family: 'IBM Plex Mono', monospace;
  font-size: 12.5px;
  color: var(--text-dim);
}
.count-bar .n strong{ color: var(--accent); }
.open-all{
  font-family: 'IBM Plex Mono', monospace;
  font-size: 12.5px;
  font-weight: 700;
  padding: 7px 14px;
  background: transparent;
  border: 1px solid var(--accent-dim);
  color: var(--accent);
  border-radius: 4px;
  cursor: pointer;
}
.open-all:hover{ background: rgba(53,214,155,0.08); }
.open-all:disabled{ opacity: .4; cursor: not-allowed; }

.results{
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  gap: 8px;
}
.site-card{
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 10px 12px;
  background: var(--panel-2);
  border: 1px solid var(--border);
  border-radius: 4px;
  text-decoration: none;
  color: var(--text);
  transition: border-color .15s, transform .1s;
}
.site-card:hover{ border-color: var(--accent); transform: translateY(-1px); }
.site-card .name{
  font-size: 13.5px;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.site-card .go{
  font-family: 'IBM Plex Mono', monospace;
  font-size: 11px;
  color: var(--accent);
  flex-shrink: 0;
}
.site-card.manual{
  opacity: .8;
}
.site-card.manual .go{ color: var(--warn); }

.group-title{
  font-family: 'IBM Plex Mono', monospace;
  font-size: 11.5px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--text-dim);
  margin: 22px 0 8px;
}
.group-title:first-of-type{ margin-top: 4px; }

.empty-state{
  text-align: center;
  padding: 40px 20px;
  color: var(--text-dim);
  font-size: 13.5px;
}

footer{
  text-align: center;
  color: var(--text-dim);
  font-size: 12px;
  margin-top: 30px;
}

@media (max-width: 520px){
  .search-row{ flex-direction: column; }
  .results{ grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); }
}
</style>
</head>
<body>
<div class="wrap">

  <header class="top">
    <span class="tag mono">OSINT SEARCH HUB</span>
    <h1>أداة توليد روابط البحث السريع</h1>
    <p class="lede">
      دوّس يوزرنيم أو إيميل أو رقم تليفون، وهتولدلك روابط بحث مباشرة لكل موقع بيدعم صيغة بحث ثابتة —
      تفتحها في تابات، وتراجع النتائج بعينك. مفيش أي بحث أو جمع بيانات بيحصل من ورا ظهرك.
    </p>
    <div class="disclaimer">
      <strong>ملحوظة:</strong> الأداة دي بس بتبني روابط، مفيش سكرابينج ولا تجميع نتائج. استخدمها في أبحاث
      شرعية بس (تحقق من هويتك، تحقيق مهني، حماية حسابك) وفي إطار القانون وشروط استخدام كل موقع.
    </div>
  </header>

  <div class="tabs">
    <button class="tab-btn active mono" data-tab="username">USERNAME</button>
    <button class="tab-btn mono" data-tab="email">EMAIL</button>
    <button class="tab-btn mono" data-tab="phone">PHONE</button>
  </div>

  <div class="panel">
    <div class="search-row">
      <input type="text" id="query" placeholder="اكتب هنا..." autocomplete="off" spellcheck="false">
      <button id="searchBtn" class="mono">بحث</button>
    </div>
    <p class="hint mono" id="hintText">مثال: john_doe123</p>

    <div class="count-bar" id="countBar" style="display:none;">
      <span class="n mono">النتيجة: <strong id="resultCount">0</strong> موقع</span>
      <button class="open-all mono" id="openAllBtn">فتح أول 8 في تابات ↗</button>
    </div>

    <div id="resultsArea">
      <div class="emple-state empty-state">دوّس بحث عشان تشوف روابط المواقع.</div>
    </div>
  </div>

  <footer class="mono">Client-side link generator only — no scraping, no data collection.</footer>
</div>

<script>
// ---- Site definitions ----
// {name, build(query) -> url}. "manual" true means: no direct-search pattern, just opens the tool's homepage.
const USERNAME_SITES = [
  {n:"GitHub", u:q=>`https://github.com/${q}`},
  {n:"X / Twitter", u:q=>`https://x.com/${q}`},
  {n:"Instagram", u:q=>`https://instagram.com/${q}`},
  {n:"Reddit", u:q=>`https://www.reddit.com/user/${q}`},
  {n:"TikTok", u:q=>`https://www.tiktok.com/@${q}`},
  {n:"YouTube", u:q=>`https://www.youtube.com/@${q}`},
  {n:"Facebook", u:q=>`https://www.facebook.com/${q}`},
  {n:"LinkedIn", u:q=>`https://www.linkedin.com/in/${q}`},
  {n:"Pinterest", u:q=>`https://www.pinterest.com/${q}`},
  {n:"Twitch", u:q=>`https://www.twitch.tv/${q}`},
  {n:"Steam", u:q=>`https://steamcommunity.com/id/${q}`},
  {n:"Telegram", u:q=>`https://t.me/${q}`},
  {n:"Medium", u:q=>`https://medium.com/@${q}`},
  {n:"Patreon", u:q=>`https://www.patreon.com/${q}`},
  {n:"SoundCloud", u:q=>`https://soundcloud.com/${q}`},
  {n:"Vimeo", u:q=>`https://vimeo.com/${q}`},
  {n:"GitLab", u:q=>`https://gitlab.com/${q}`},
  {n:"npm", u:q=>`https://www.npmjs.com/~${q}`},
  {n:"Dev.to", u:q=>`https://dev.to/${q}`},
  {n:"Product Hunt", u:q=>`https://www.producthunt.com/@${q}`},
  {n:"Imgur", u:q=>`https://imgur.com/user/${q}`},
  {n:"Flickr", u:q=>`https://www.flickr.com/people/${q}`},
  {n:"DeviantArt", u:q=>`https://www.deviantart.com/${q}`},
  {n:"Tumblr", u:q=>`https://${q}.tumblr.com`},
  {n:"About.me", u:q=>`https://about.me/${q}`},
  {n:"Keybase", u:q=>`https://keybase.io/${q}`},
  {n:"Replit", u:q=>`https://replit.com/@${q}`},
  {n:"CodePen", u:q=>`https://codepen.io/${q}`},
  {n:"HackerNews", u:q=>`https://news.ycombinator.com/user?id=${q}`},
  {n:"Kaggle", u:q=>`https://www.kaggle.com/${q}`},
  {n:"Behance", u:q=>`https://www.behance.net/${q}`},
  {n:"Dribbble", u:q=>`https://dribbble.com/${q}`},
  {n:"Letterboxd", u:q=>`https://letterboxd.com/${q}`},
  {n:"Goodreads", u:q=>`https://www.goodreads.com/${q}`},
  {n:"Sherlock (meta-search)", u:q=>`https://sherlockeye.io/`, manual:true},
  {n:"WhatsMyName (meta-search)", u:q=>`https://whatsmyname.app/`, manual:true},
  {n:"Namechk (meta-search)", u:q=>`https://namechk.com/`, manual:true},
];

const EMAIL_SITES = [
  {n:"Have I Been Pwned", u:q=>`https://haveibeenpwned.com/account/${encodeURIComponent(q)}`},
  {n:"Gravatar profile", u:q=>`https://gravatar.com/${md5hex(q.trim().toLowerCase())}`},
  {n:"Firefox Monitor", u:q=>`https://monitor.mozilla.org/`, manual:true},
  {n:"EmailRep", u:q=>`https://emailrep.io/${encodeURIComponent(q)}`, manual:true},
  {n:"Epieos", u:q=>`https://epieos.com/`, manual:true},
  {n:"Hunter.io", u:q=>`https://hunter.io/`, manual:true},
  {n:"DeHashed", u:q=>`https://dehashed.com/`, manual:true},
  {n:"LeakCheck", u:q=>`https://leakcheck.io/`, manual:true},
  {n:"IntelligenceX", u:q=>`https://intelx.io/?s=${encodeURIComponent(q)}`},
  {n:"Holehe (GitHub tool)", u:q=>`https://github.com/megadose/holehe`, manual:true},
];

const PHONE_SITES = [
  {n:"Truecaller", u:q=>`https://www.truecaller.com/search/eg/${encodeURIComponent(q)}`},
  {n:"Sync.me", u:q=>`https://sync.me/search/?number=${encodeURIComponent(q)}`},
  {n:"NumSpy", u:q=>`https://bhattsameer.github.io/numspy/`, manual:true},
  {n:"Free Carrier Lookup", u:q=>`https://freecarrierlookup.com/`, manual:true},
  {n:"PhoneInfoga (GitHub tool)", u:q=>`https://github.com/sundowndev/PhoneInfoga`, manual:true},
  {n:"WhitePages Reverse", u:q=>`https://www.whitepages.com/phone/${encodeURIComponent(q)}`},
  {n:"That'sThem reverse phone", u:q=>`https://thatsthem.com/reverse-phone-lookup/${encodeURIComponent(q)}`},
  {n:"Spy Dialer", u:q=>`https://www.spydialer.com/`, manual:true},
];

// Minimal MD5 (needed for Gravatar URL) — small, dependency-free implementation.
function md5hex(str){
  function rl(n,c){return (n<<c)|(n>>>(32-c));}
  function ad(x,y){var l=(x&0xFFFF)+(y&0xFFFF);var m=(x>>16)+(y>>16)+(l>>16);return (m<<16)|(l&0xFFFF);}
  function cmn(q,a,b,x,s,t){return ad(rl(ad(ad(a,q),ad(x,t)),s),b);}
  function ff(a,b,c,d,x,s,t){return cmn((b&c)|((~b)&d),a,b,x,s,t);}
  function gg(a,b,c,d,x,s,t){return cmn((b&d)|(c&(~d)),a,b,x,s,t);}
  function hh(a,b,c,d,x,s,t){return cmn(b^c^d,a,b,x,s,t);}
  function ii(a,b,c,d,x,s,t){return cmn(c^(b|(~d)),a,b,x,s,t);}
  function toWords(str){
    var words=[],len=str.length*8;
    for(var i=0;i<len;i+=8) words[i>>5]|=(str.charCodeAt(i/8)&0xFF)<<(i%32);
    return words;
  }
  function utf8(s){ return unescape(encodeURIComponent(s)); }
  str = utf8(str);
  var x = toWords(str), len = str.length*8;
  x[len>>5] |= 0x80 << (len%32);
  x[(((len+64)>>>9)<<4)+14] = len;
  var a=1732584193,b=-271733879,c=-1732584194,d=271733878;
  for(var i=0;i<x.length;i+=16){
    var oa=a,ob=b,oc=c,od=d;
    a=ff(a,b,c,d,x[i+0]||0,7,-680876936); d=ff(d,a,b,c,x[i+1]||0,12,-389564586);
    c=ff(c,d,a,b,x[i+2]||0,17,606105819); b=ff(b,c,d,a,x[i+3]||0,22,-1044525330);
    a=ff(a,b,c,d,x[i+4]||0,7,-176418897); d=ff(d,a,b,c,x[i+5]||0,12,1200080426);
    c=ff(c,d,a,b,x[i+6]||0,17,-1473231341); b=ff(b,c,d,a,x[i+7]||0,22,-45705983);
    a=ff(a,b,c,d,x[i+8]||0,7,1770035416); d=ff(d,a,b,c,x[i+9]||0,12,-1958414417);
    c=ff(c,d,a,b,x[i+10]||0,17,-42063); b=ff(b,c,d,a,x[i+11]||0,22,-1990404162);
    a=ff(a,b,c,d,x[i+12]||0,7,1804603682); d=ff(d,a,b,c,x[i+13]||0,12,-40341101);
    c=ff(c,d,a,b,x[i+14]||0,17,-1502002290); b=ff(b,c,d,a,x[i+15]||0,22,1236535329);
    a=gg(a,b,c,d,x[i+1]||0,5,-165796510); d=gg(d,a,b,c,x[i+6]||0,9,-1069501632);
    c=gg(c,d,a,b,x[i+11]||0,14,643717713); b=gg(b,c,d,a,x[i+0]||0,20,-373897302);
    a=gg(a,b,c,d,x[i+5]||0,5,-701558691); d=gg(d,a,b,c,x[i+10]||0,9,38016083);
    c=gg(c,d,a,b,x[i+15]||0,14,-660478335); b=gg(b,c,d,a,x[i+4]||0,20,-405537848);
    a=gg(a,b,c,d,x[i+9]||0,5,568446438); d=gg(d,a,b,c,x[i+14]||0,9,-1019803690);
    c=gg(c,d,a,b,x[i+3]||0,14,-187363961); b=gg(b,c,d,a,x[i+8]||0,20,1163531501);
    a=gg(a,b,c,d,x[i+13]||0,5,-1444681467); d=gg(d,a,b,c,x[i+2]||0,9,-51403784);
    c=gg(c,d,a,b,x[i+7]||0,14,1735328473); b=gg(b,c,d,a,x[i+12]||0,20,-1926607734);
    a=hh(a,b,c,d,x[i+5]||0,4,-378558); d=hh(d,a,b,c,x[i+8]||0,11,-2022574463);
    c=hh(c,d,a,b,x[i+11]||0,16,1839030562); b=hh(b,c,d,a,x[i+14]||0,23,-35309556);
    a=hh(a,b,c,d,x[i+1]||0,4,-1530992060); d=hh(d,a,b,c,x[i+4]||0,11,1272893353);
    c=hh(c,d,a,b,x[i+7]||0,16,-155497632); b=hh(b,c,d,a,x[i+10]||0,23,-1094730640);
    a=hh(a,b,c,d,x[i+13]||0,4,681279174); d=hh(d,a,b,c,x[i+0]||0,11,-358537222);
    c=hh(c,d,a,b,x[i+3]||0,16,-722521979); b=hh(b,c,d,a,x[i+6]||0,23,76029189);
    a=hh(a,b,c,d,x[i+9]||0,4,-640364487); d=hh(d,a,b,c,x[i+12]||0,11,-421815835);
    c=hh(c,d,a,b,x[i+15]||0,16,530742520); b=hh(b,c,d,a,x[i+2]||0,23,-995338651);
    a=ii(a,b,c,d,x[i+0]||0,6,-198630844); d=ii(d,a,b,c,x[i+7]||0,10,1126891415);
    c=ii(c,d,a,b,x[i+14]||0,15,-1416354905); b=ii(b,c,d,a,x[i+5]||0,21,-57434055);
    a=ii(a,b,c,d,x[i+12]||0,6,1700485571); d=ii(d,a,b,c,x[i+3]||0,10,-1894986606);
    c=ii(c,d,a,b,x[i+10]||0,15,-1051523); b=ii(b,c,d,a,x[i+1]||0,21,-2054922799);
    a=ii(a,b,c,d,x[i+8]||0,6,1873313359); d=ii(d,a,b,c,x[i+15]||0,10,-30611744);
    c=ii(c,d,a,b,x[i+6]||0,15,-1560198380); b=ii(b,c,d,a,x[i+13]||0,21,1309151649);
    a=ii(a,b,c,d,x[i+4]||0,6,-145523070); d=ii(d,a,b,c,x[i+11]||0,10,-1120210379);
    c=ii(c,d,a,b,x[i+2]||0,15,718787259); b=ii(b,c,d,a,x[i+9]||0,21,-343485551);
    a=ad(a,oa); b=ad(b,ob); c=ad(c,oc); d=ad(d,od);
  }
  function toHexPair(n){
    var s='', j;
    for(j=0;j<4;j++) s += ((n>>(j*8))&0xFF).toString(16).padStart(2,'0');
    return s;
  }
  return toHexPair(a)+toHexPair(b)+toHexPair(c)+toHexPair(d);
}

const CONFIG = {
  username: {sites: USERNAME_SITES, placeholder: "مثال: john_doe123", hint: "مثال: john_doe123 — من غير @ أو مسافات"},
  email: {sites: EMAIL_SITES, placeholder: "example@mail.com", hint: "مثال: example@mail.com"},
  phone: {sites: PHONE_SITES, placeholder: "+201234567890", hint: "مثال: +201234567890 — بالكود الدولي لو ينفع"},
};

let currentTab = "username";
let lastResults = [];

const tabBtns = document.querySelectorAll(".tab-btn");
const queryInput = document.getElementById("query");
const hintText = document.getElementById("hintText");
const searchBtn = document.getElementById("searchBtn");
const resultsArea = document.getElementById("resultsArea");
const countBar = document.getElementById("countBar");
const resultCount = document.getElementById("resultCount");
const openAllBtn = document.getElementById("openAllBtn");

tabBtns.forEach(btn=>{
  btn.addEventListener("click", ()=>{
    tabBtns.forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    currentTab = btn.dataset.tab;
    queryInput.placeholder = CONFIG[currentTab].placeholder;
    hintText.textContent = CONFIG[currentTab].hint;
    resultsArea.innerHTML = '<div class="empty-state">دوّس بحث عشان تشوف روابط المواقع.</div>';
    countBar.style.display = "none";
    queryInput.value = "";
    queryInput.focus();
  });
});

function runSearch(){
  const q = queryInput.value.trim();
  if(!q){
    queryInput.focus();
    return;
  }
  const sites = CONFIG[currentTab].sites;
  let urls = [];
  let html = "";
  const direct = sites.filter(s=>!s.manual);
  const manual = sites.filter(s=>s.manual);

  if(direct.length){
    html += '<div class="group-title mono">روابط مباشرة — ' + direct.length + ' موقع</div><div class="results">';
    direct.forEach(s=>{
      let url;
      try{ url = s.u(q); }catch(e){ url = null; }
      if(!url) return;
      urls.push(url);
      html += `<a class="site-card" href="${url}" target="_blank" rel="noopener noreferrer">
        <span class="name">${s.n}</span><span class="go mono">فتح ↗</span>
      </a>`;
    });
    html += "</div>";
  }
  if(manual.length){
    html += '<div class="group-title mono">محتاج بحث يدوي جوا الموقع — ' + manual.length + '</div><div class="results">';
    manual.forEach(s=>{
      let url;
      try{ url = s.u(q); }catch(e){ url = null; }
      if(!url) return;
      html += `<a class="site-card manual" href="${url}" target="_blank" rel="noopener noreferrer">
        <span class="name">${s.n}</span><span class="go mono">فتح الموقع</span>
      </a>`;
    });
    html += "</div>";
  }

  resultsArea.innerHTML = html || '<div class="empty-state">مفيش مواقع لهذا النوع دلوقتي.</div>';
  lastResults = urls;
  resultCount.textContent = sites.length;
  countBar.style.display = urls.length ? "flex" : "none";
  const openCount = Math.min(8, urls.length);
  openAllBtn.textContent = `فتح أول ${openCount} في تابات ↗`;
  openAllBtn.disabled = urls.length === 0;
}

openAllBtn.addEventListener("click", ()=>{
  lastResults.slice(0,8).forEach(u=>window.open(u, "_blank", "noopener,noreferrer"));
});

searchBtn.addEventListener("click", runSearch);
queryInput.addEventListener("keydown", (e)=>{ if(e.key === "Enter") runSearch(); });
</script>
</body>
</html>
