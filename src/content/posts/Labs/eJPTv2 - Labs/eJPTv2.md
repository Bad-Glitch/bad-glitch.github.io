---
title: "eJPT v2 Course Labs"
published: 2026-09-19
description: "A structured roadmap of 125 labs on TryHackMe and PortSwigger covering the eJPT v2 course, from information gathering and host attacks to web application exploitation."
tags: [eJPTv2, Labs, TryHackMe, PortSwigger, Penetration Testing, Enumeration, Network Security, Web Security]
category: Labs
draft: false
---


## Overview

This roadmap supports the **eJPT v2** course with hands-on labs on TryHackMe and PortSwigger, organized into 4 sections that follow the structure of the course: information gathering and scanning, auditing and monitoring, host and network attacks, and web application attacks.

This roadmap was prepared by **Amr Abdel Hamide** for **Netriders Academy**. Pair it with my [eJPTv2 Study Notes](https://bad-glitch.github.io/posts/courses-notes/ejptv2---notes/ejpt-notes/) for the theory behind each topic. Every link opens the lab directly.

| | |
|---|---|
| **Total labs** | 125 |
| **TryHackMe** | 91 |
| **PortSwigger Web Security Academy** | 34 |
| **Sections** | 4 |

> **Note:** TryHackMe occasionally moves rooms between free and paid. If you find a lab that is locked, let me know and I will update the list.


## Section Map

| # | Section | Focus | Labs |
|:-:|---|---|:-:|
| 01 | Information Gathering & Vulnerability Scanning | Passive/active recon, OSINT, and Nmap | 13 |
| 02 | Auditing and Monitoring | Vulnerability scanners, risk, and detection frameworks | 8 |
| 03 | System & Network Host-Based Attacks | Networking, privilege escalation, Metasploit, and boot2root machines | 55 |
| 04 | Web Application Attacks | Web fundamentals, SQL injection, and XSS | 49 |

## Suggested Learning Path

1. **Start with the basics:** Information Gathering & Vulnerability Scanning
2. **Understand monitoring and auditing:** Auditing and Monitoring
3. **Host and network track:** System & Network Host-Based Attacks. Work through Networking & Basics first, then Privilege Escalation, Metasploit, and Basic Exploitation before moving on to the wider CTF collection.
4. **Web application track:** Web Application Attacks. Complete Web Basics and TryHackMe SQL injection before starting PortSwigger.

The host/network track and the web track are independent, so you can study them in either order or alternate between them.

**PortSwigger difficulty levels:** Apprentice -> Practitioner -> Expert. If you are new to a topic, complete the Apprentice labs in each subsection before attempting the harder ones.


---


## 01. Information Gathering & Vulnerability Scanning

**Focus:** Passive/active recon, OSINT, and Nmap  
**Labs:** 13

The starting point of every assessment: gathering information about the target passively and actively, using OSINT tools like Shodan and Google Dorking, and mastering Nmap and RustScan for host and service discovery.


### Reconnaissance

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Passive Reconnaissance](https://tryhackme.com/room/passiverecon) | TryHackMe |
| 2 | [Active Reconnaissance](https://tryhackme.com/room/activerecon) | TryHackMe |
| 3 | [Red Team Recon](https://tryhackme.com/room/redteamrecon) | TryHackMe |


### Nmap & Port Scanning

| # | Lab | Platform |
|:-:|---|:-:|
| 4 | [Nmap: Live Host Discovery](https://tryhackme.com/room/nmap01) | TryHackMe |
| 5 | [Nmap: Basic Port Scans](https://tryhackme.com/room/nmap02) | TryHackMe |
| 6 | [Nmap: Advanced Port Scans](https://tryhackme.com/room/nmap03) | TryHackMe |
| 7 | [Further Nmap](https://tryhackme.com/room/furthernmap) | TryHackMe |
| 8 | [Nmap](https://tryhackme.com/room/nmap) | TryHackMe |
| 9 | [RustScan](https://tryhackme.com/room/rustscan) | TryHackMe |


### OSINT

| # | Lab | Platform |
|:-:|---|:-:|
| 10 | [Shodan.io](https://tryhackme.com/room/shodan) | TryHackMe |
| 11 | [Google Dorking](https://tryhackme.com/room/googledorking) | TryHackMe |
| 12 | [Web OSINT](https://tryhackme.com/room/webosint) | TryHackMe |
| 13 | [Searchlight OSINT](https://tryhackme.com/room/searchlightosint) | TryHackMe |


## 02. Auditing and Monitoring

**Focus:** Vulnerability scanners, risk, and detection frameworks  
**Labs:** 8

Understanding how systems are audited and monitored: security principles and risk management, vulnerability scanning with Nessus and OpenVAS, and detection frameworks like MITRE ATT&CK and Yara.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Auditing and Monitoring](https://tryhackme.com/room/auditingandmonitoringse) | TryHackMe |
| 2 | [Risk Management](https://tryhackme.com/room/seriskmanagement) | TryHackMe |
| 3 | [Vulnerability Scanner Overview](https://tryhackme.com/room/vulnerabilityscanneroverview) | TryHackMe |
| 4 | [Security Principles](https://tryhackme.com/room/securityprinciples) | TryHackMe |
| 5 | [Nessus](https://tryhackme.com/room/rpnessusredux) | TryHackMe |
| 6 | [MITRE](https://tryhackme.com/room/mitre) | TryHackMe |
| 7 | [Yara](https://tryhackme.com/room/yara) | TryHackMe |
| 8 | [OpenVAS](https://tryhackme.com/room/openvas) | TryHackMe |


## 03. System & Network Host-Based Attacks

**Focus:** Networking, privilege escalation, Metasploit, and boot2root machines  
**Labs:** 55

The core hands-on section: networking fundamentals and traffic analysis, privilege escalation on Windows and Linux, exploitation with Metasploit, and a long list of boot2root machines to apply everything end to end. Start with the basic machines, then move on to the wider CTF collection.


### Networking & Basics

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Networking Concepts](https://tryhackme.com/room/networkingconcepts) | TryHackMe |
| 2 | [Networking Essentials](https://tryhackme.com/room/networkingessentials) | TryHackMe |
| 3 | [Networking Core Protocols](https://tryhackme.com/room/networkingcoreprotocols) | TryHackMe |
| 4 | [Wireshark: The Basics](https://tryhackme.com/room/wiresharkthebasics) | TryHackMe |
| 5 | [Tcpdump](https://tryhackme.com/room/tcpdump) | TryHackMe |


### Privilege Escalation & Hardening

| # | Lab | Platform |
|:-:|---|:-:|
| 6 | [Windows PrivEsc](https://tryhackme.com/room/windowsprivesc20) | TryHackMe |
| 7 | [Linux PrivEsc](https://tryhackme.com/room/linuxprivesc) | TryHackMe |
| 8 | [Linux Privilege Escalation](https://tryhackme.com/room/linprivesc) | TryHackMe |
| 9 | [Common Linux Privesc](https://tryhackme.com/room/commonlinuxprivesc) | TryHackMe |
| 10 | [Windows Local Persistence](https://tryhackme.com/room/windowslocalpersistence) | TryHackMe |
| 11 | [Linux System Hardening](https://tryhackme.com/room/linuxsystemhardening) | TryHackMe |


### Metasploit & Exploitation

| # | Lab | Platform |
|:-:|---|:-:|
| 12 | [Metasploit: Introduction](https://tryhackme.com/room/metasploitintro) | TryHackMe |
| 13 | [Metasploit: Exploitation](https://tryhackme.com/room/metasploitexploitation) | TryHackMe |
| 14 | [Meterpreter](https://tryhackme.com/room/meterpreter) | TryHackMe |


### Basic Exploitation

| # | Lab | Platform |
|:-:|---|:-:|
| 15 | [Vulnversity](https://tryhackme.com/room/vulnversity) | TryHackMe |
| 16 | [Basic Pentesting](https://tryhackme.com/room/basicpentestingjt) | TryHackMe |
| 17 | [Steel Mountain](https://tryhackme.com/room/steelmountain) | TryHackMe |


### CTF & Exploitation Labs

| # | Lab | Platform |
|:-:|---|:-:|
| 18 | [GamingServer](https://tryhackme.com/room/gamingserver) | TryHackMe |
| 19 | [OverlayFS](https://tryhackme.com/room/overlayfs) | TryHackMe |
| 20 | [Psycho Break](https://tryhackme.com/room/psychobreak) | TryHackMe |
| 21 | [Bounty Hacker](https://tryhackme.com/room/cowboyhacker) | TryHackMe |
| 22 | [CTF](https://tryhackme.com/room/ctf) | TryHackMe |
| 23 | [RootMe](https://tryhackme.com/room/rrootme) | TryHackMe |
| 24 | [Pickle Rick](https://tryhackme.com/room/picklerick) | TryHackMe |
| 25 | [c4ptur3-th3-fl4g](https://tryhackme.com/room/c4ptur3th3fl4g) | TryHackMe |
| 26 | [Library](https://tryhackme.com/room/bsidesgtlibrary) | TryHackMe |
| 27 | [Thompson](https://tryhackme.com/room/bsidesgtthompson) | TryHackMe |
| 28 | [Simple CTF](https://tryhackme.com/room/easyctf) | TryHackMe |
| 29 | [LazyAdmin](https://tryhackme.com/room/lazyadmin) | TryHackMe |
| 30 | [Anonforce](https://tryhackme.com/room/bsidesgtanonforce) | TryHackMe |
| 31 | [Ignite](https://tryhackme.com/room/ignite) | TryHackMe |
| 32 | [Wgel CTF](https://tryhackme.com/room/wgelctf) | TryHackMe |
| 33 | [Kenobi](https://tryhackme.com/room/kenobi) | TryHackMe |
| 34 | [DAV](https://tryhackme.com/room/bsidesgtdav) | TryHackMe |
| 35 | [Ninja Skills](https://tryhackme.com/room/ninjaskills) | TryHackMe |
| 36 | [Ice](https://tryhackme.com/room/ice) | TryHackMe |
| 37 | [Lian_Yu](https://tryhackme.com/room/lianyu) | TryHackMe |
| 38 | [The Cod Caper](https://tryhackme.com/room/thecodcaper) | TryHackMe |
| 39 | [Blaster](https://tryhackme.com/room/blaster) | TryHackMe |
| 40 | [Startup](https://tryhackme.com/room/startup) | TryHackMe |
| 41 | [Chill Hack](https://tryhackme.com/room/chillhack) | TryHackMe |
| 42 | [Colddbox: Easy](https://tryhackme.com/room/colddboxeasy) | TryHackMe |
| 43 | [GLITCH](https://tryhackme.com/room/glitch) | TryHackMe |
| 44 | [All in One](https://tryhackme.com/room/allinonemj) | TryHackMe |
| 45 | [Archangel](https://tryhackme.com/room/archangel) | TryHackMe |
| 46 | [Cyborg](https://tryhackme.com/room/cyborgt8) | TryHackMe |
| 47 | [Lunizz CTF](https://tryhackme.com/room/lunizzctfnd) | TryHackMe |
| 48 | [Badbyte](https://tryhackme.com/room/badbyte) | TryHackMe |
| 49 | [Team](https://tryhackme.com/room/teamcw) | TryHackMe |
| 50 | [VulnNet: Node](https://tryhackme.com/room/vulnnetnode) | TryHackMe |
| 51 | [VulnNet: Internal](https://tryhackme.com/room/vulnnetinternal) | TryHackMe |
| 52 | [Atlas](https://tryhackme.com/room/atlas) | TryHackMe |
| 53 | [VulnNet: Roasted](https://tryhackme.com/room/vulnnetroasted) | TryHackMe |
| 54 | [Cat Pictures](https://tryhackme.com/room/catpictures) | TryHackMe |
| 55 | [Mustacchio](https://tryhackme.com/room/mustacchio) | TryHackMe |


## 04. Web Application Attacks

**Focus:** Web fundamentals, SQL injection, and XSS  
**Labs:** 49

From how the web works to hands-on exploitation: web fundamentals and OWASP first, then SQL injection (TryHackMe followed by PortSwigger), and finally the full PortSwigger XSS track covering reflected, stored, DOM-based, and context-specific XSS, plus exploitation and CSP bypass.


### Web Basics

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Web Fundamentals](https://tryhackme.com/room/webfundamentals) | TryHackMe |
| 2 | [Web App Security 101](https://tryhackme.com/room/webappsec101) | TryHackMe |
| 3 | [Web Application Basics](https://tryhackme.com/room/webapplicationbasics) | TryHackMe |
| 4 | [JavaScript Essentials](https://tryhackme.com/room/javascriptessentials) | TryHackMe |
| 5 | [Burp Suite: The Basics](https://tryhackme.com/room/burpsuitebasics) | TryHackMe |
| 6 | [OWASP Top 10 - 2021](https://tryhackme.com/room/owasptop102021) | TryHackMe |
| 7 | [How Websites Work](https://tryhackme.com/room/howwebsiteswork) | TryHackMe |
| 8 | [HTTP in Detail](https://tryhackme.com/room/httpindetail) | TryHackMe |
| 9 | [OWASP Juice Shop](https://tryhackme.com/room/owaspjuiceshop) | TryHackMe |
| 10 | [DNS in Detail](https://tryhackme.com/room/dnsindetail) | TryHackMe |
| 11 | [Putting It All Together](https://tryhackme.com/room/puttingitalltogether) | TryHackMe |
| 12 | [Walking An Application](https://tryhackme.com/room/walkinganapplication) | TryHackMe |


### SQL Injection - TryHackMe

| # | Lab | Platform |
|:-:|---|:-:|
| 13 | [SQL Fundamentals](https://tryhackme.com/room/sqlfundamentals) | TryHackMe |
| 14 | [Advanced SQL Injection](https://tryhackme.com/room/advancedsqlinjection) | TryHackMe |
| 15 | [SQL Injection Lab](https://tryhackme.com/room/sqlinjectionlm) | TryHackMe |


### SQL Injection - PortSwigger: Basic

| # | Lab | Level |
|:-:|---|:-:|
| 16 | [SQL injection vulnerability in WHERE clause allowing retrieval of hidden data](https://portswigger.net/web-security/sql-injection/lab-retrieve-hidden-data) | Apprentice |
| 17 | [SQL injection vulnerability allowing login bypass](https://portswigger.net/web-security/sql-injection/lab-login-bypass) | Apprentice |


### SQL Injection - PortSwigger: Examining the Database

| # | Lab | Level |
|:-:|---|:-:|
| 18 | [Querying the database type and version on Oracle](https://portswigger.net/web-security/sql-injection/examining-the-database/lab-querying-database-version-oracle) | Practitioner |
| 19 | [Querying the database type and version on MySQL and Microsoft](https://portswigger.net/web-security/sql-injection/examining-the-database/lab-querying-database-version-mysql-microsoft) | Practitioner |
| 20 | [Listing the database contents on non-Oracle databases](https://portswigger.net/web-security/sql-injection/examining-the-database/lab-listing-database-contents-non-oracle) | Practitioner |
| 21 | [Listing the database contents on Oracle](https://portswigger.net/web-security/sql-injection/examining-the-database/lab-listing-database-contents-oracle) | Practitioner |


### SQL Injection - PortSwigger: UNION Attacks

| # | Lab | Level |
|:-:|---|:-:|
| 22 | [UNION attack: determining the number of columns](https://portswigger.net/web-security/sql-injection/union-attacks/lab-determine-number-of-columns) | Practitioner |
| 23 | [UNION attack: finding a column containing text](https://portswigger.net/web-security/sql-injection/union-attacks/lab-find-column-containing-text) | Practitioner |
| 24 | [UNION attack: retrieving data from other tables](https://portswigger.net/web-security/sql-injection/union-attacks/lab-retrieve-data-from-other-tables) | Practitioner |
| 25 | [UNION attack: retrieving multiple values in a single column](https://portswigger.net/web-security/sql-injection/union-attacks/lab-retrieve-multiple-values-in-single-column) | Practitioner |


### SQL Injection - PortSwigger: Blind

| # | Lab | Level |
|:-:|---|:-:|
| 26 | [Blind SQLi with conditional responses](https://portswigger.net/web-security/sql-injection/blind/lab-conditional-responses) | Practitioner |
| 27 | [Blind SQLi with conditional errors](https://portswigger.net/web-security/sql-injection/blind/lab-conditional-errors) | Practitioner |
| 28 | [Blind SQLi with time delays](https://portswigger.net/web-security/sql-injection/blind/lab-time-delays) | Practitioner |


### XSS - Reflected & Stored

| # | Lab | Level |
|:-:|---|:-:|
| 29 | [Reflected XSS into HTML context with nothing encoded](https://portswigger.net/web-security/cross-site-scripting/reflected/lab-html-context-nothing-encoded) | Apprentice |
| 30 | [Stored XSS into HTML context with nothing encoded](https://portswigger.net/web-security/cross-site-scripting/stored/lab-html-context-nothing-encoded) | Apprentice |


### XSS - DOM-Based

| # | Lab | Level |
|:-:|---|:-:|
| 31 | [DOM XSS in document.write sink using source location.search](https://portswigger.net/web-security/cross-site-scripting/dom-based/lab-document-write-sink) | Apprentice |
| 32 | [DOM XSS in innerHTML sink using source location.search](https://portswigger.net/web-security/cross-site-scripting/dom-based/lab-innerhtml-sink) | Apprentice |
| 33 | [DOM XSS in jQuery anchor href attribute sink using location.search source](https://portswigger.net/web-security/cross-site-scripting/dom-based/lab-jquery-href-attribute-sink) | Apprentice |
| 34 | [DOM XSS in jQuery selector sink using a hashchange event](https://portswigger.net/web-security/cross-site-scripting/dom-based/lab-jquery-selector-hash-change-event) | Apprentice |
| 35 | [DOM XSS in document.write sink using source location.search inside a select element](https://portswigger.net/web-security/cross-site-scripting/dom-based/lab-document-write-sink-inside-select-element) | Practitioner |
| 36 | [DOM XSS in AngularJS expression with angle brackets and double quotes HTML-encoded](https://portswigger.net/web-security/cross-site-scripting/dom-based/lab-angularjs-expression) | Practitioner |
| 37 | [Reflected DOM XSS](https://portswigger.net/web-security/cross-site-scripting/dom-based/lab-dom-xss-reflected) | Practitioner |
| 38 | [Stored DOM XSS](https://portswigger.net/web-security/cross-site-scripting/dom-based/lab-dom-xss-stored) | Practitioner |


### XSS - Contexts

| # | Lab | Level |
|:-:|---|:-:|
| 39 | [XSS in an attribute with angle brackets HTML-encoded](https://portswigger.net/web-security/cross-site-scripting/contexts/lab-attribute-angle-brackets-html-encoded) | Apprentice |
| 40 | [XSS in an href attribute with double quotes HTML-encoded](https://portswigger.net/web-security/cross-site-scripting/contexts/lab-href-attribute-double-quotes-html-encoded) | Apprentice |
| 41 | [XSS into a JavaScript string with angle brackets HTML-encoded](https://portswigger.net/web-security/cross-site-scripting/contexts/lab-javascript-string-angle-brackets-html-encoded) | Apprentice |
| 42 | [XSS in a HTML context with most tags and attributes blocked](https://portswigger.net/web-security/cross-site-scripting/contexts/lab-html-context-with-most-tags-and-attributes-blocked) | Practitioner |
| 43 | [XSS in a HTML context with all standard tags blocked](https://portswigger.net/web-security/cross-site-scripting/contexts/lab-html-context-with-all-standard-tags-blocked) | Practitioner |
| 44 | [XSS with some SVG markup allowed](https://portswigger.net/web-security/cross-site-scripting/contexts/lab-some-svg-markup-allowed) | Practitioner |
| 45 | [Reflected XSS in canonical link tag](https://portswigger.net/web-security/cross-site-scripting/contexts/lab-canonical-link-tag) | Expert |


### XSS - Exploitation

| # | Lab | Level |
|:-:|---|:-:|
| 46 | [Exploiting XSS to steal cookies](https://portswigger.net/web-security/cross-site-scripting/exploiting/lab-stealing-cookies) | Practitioner |
| 47 | [Exploiting XSS to capture passwords](https://portswigger.net/web-security/cross-site-scripting/exploiting/lab-capturing-passwords) | Practitioner |
| 48 | [Exploiting XSS to perform CSRF](https://portswigger.net/web-security/cross-site-scripting/exploiting/lab-perform-csrf) | Practitioner |


### XSS - Content Security Policy

| # | Lab | Level |
|:-:|---|:-:|
| 49 | [Reflected XSS protected by CSP, with CSP bypass](https://portswigger.net/web-security/cross-site-scripting/content-security-policy/lab-csp-bypass) | Expert |


---

## Tips for Getting the Most Out of These Labs

- **Take notes** on every lab: the tool, the command, and the idea behind it, so you can come back to them later.
- **Avoid walkthroughs** until you have genuinely tried on your own.
- **Repeat labs** a few days later without looking at the solution. This is what makes the knowledge stick.
- **Do the CTF machines methodically:** enumerate first, note every service and version, then exploit. The same process will carry you through the exam.

> These labs are for learning and practice in authorized environments only. Never test any technique on systems you do not own or have explicit permission to test.
