---
title: "eCPPT v3 Course Labs Roadmap"
published: 2026-09-19
description: "A structured roadmap of 137 labs on TryHackMe and PortSwigger covering the eCPPT v3 course, from reconnaissance and web hacking to Active Directory and red team fundamentals."
tags: [eCPPTv3, Labs, TryHackMe, PortSwigger, Active Directory, Penetration Testing, Web Security, Web Application Security]
category: Labs
draft: false
---


## Overview

This roadmap supports the **eCPPT v3** course with hands-on labs on TryHackMe and PortSwigger, organized into 12 sections that follow the course's own structure, from PowerShell and reconnaissance through web hacking, Active Directory, and red team engagement fundamentals.

The roadmap was put together by **Netriders Academy**, with the labs curated by **Amr Abdel Hamide**. Every link opens the lab directly.

| | |
|---|---|
| **Total labs** | 137 |
| **TryHackMe** | 94 |
| **PortSwigger Web Security Academy** | 43 |
| **Sections** | 12 |

> **Note:** the original list included a number of duplicate entries across sections (the same room referenced more than once); duplicates have been removed here. TryHackMe also occasionally moves rooms between free and paid, so if you find a lab that is locked, let me know and I will update the list.


## Section Map

| # | Section | Focus | Labs |
|:-:|---|---|:-:|
| 01 | Reconnaissance & OSINT | PowerShell, passive/active recon, and Nmap | 16 |
| 02 | How the Web Works | DNS, HTTP, and the request/response cycle | 4 |
| 03 | Web Hacking Fundamentals | Burp Suite, OWASP Top 10, and first exploitation | 5 |
| 04 | Introduction to Web Hacking | Content discovery, authentication bypass, and command injection | 6 |
| 05 | Burp Suite | Repeater, Intruder, and extensions | 5 |
| 06 | XSS (Cross-Site Scripting) | Reflected, stored, DOM-based, and advanced context-based XSS | 33 |
| 07 | SQL Injection | From fundamentals to UNION and Blind SQLi | 16 |
| 08 | System & Network: Host-Based Attacks | Networking, Windows/Linux privesc, and Active Directory | 34 |
| 09 | Red Team Fundamentals | Engagement structure, threat intel, OPSEC, and C2 | 5 |
| 10 | Initial Access | Recon, weaponization, password attacks, and phishing | 4 |
| 11 | Planning and Scoping | Pentesting fundamentals, engagement scoping, and governance | 3 |
| 12 | Post-Compromise | Situational awareness, enumeration, privesc, lateral movement, and exfiltration | 6 |

## Suggested Learning Path

1. **Foundations:** Reconnaissance & OSINT -> How the Web Works
2. **Web application track:** Web Hacking Fundamentals -> Introduction to Web Hacking -> Burp Suite -> XSS -> SQL Injection
3. **Systems and Active Directory track:** System & Network: Host-Based Attacks
4. **Red team engagement track:** Red Team Fundamentals -> Planning and Scoping -> Initial Access -> Post-Compromise

The web application track and the systems/AD track can be studied in parallel; the red team engagement track ties both together and is best done last, once you understand both the technical attacks and the AD environment they are used against.

**PortSwigger difficulty levels:** Apprentice -> Practitioner -> Expert. If you are new to XSS or SQL injection, complete the Apprentice labs in each subsection before attempting the harder ones.


---


## 01. Reconnaissance & OSINT

**Focus:** PowerShell, passive/active recon, and Nmap  
**Labs:** 16

Building the toolkit you will lean on throughout the course: PowerShell for pentesters, passive and active reconnaissance, and a full Nmap track, plus OSINT tools like Shodan and Google Dorking.


### PowerShell

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Windows PowerShell](https://tryhackme.com/room/windowspowershell) | TryHackMe |
| 2 | [PowerShell for Pentesters](https://tryhackme.com/room/powershellforpentesters) | TryHackMe |
| 3 | [PowerShell](https://tryhackme.com/room/powershell) | TryHackMe |


### Reconnaissance

| # | Lab | Platform |
|:-:|---|:-:|
| 4 | [Passive Reconnaissance](https://tryhackme.com/room/passiverecon) | TryHackMe |
| 5 | [Active Reconnaissance](https://tryhackme.com/room/activerecon) | TryHackMe |
| 6 | [Red Team Recon](https://tryhackme.com/room/redteamrecon) | TryHackMe |


### Nmap

| # | Lab | Platform |
|:-:|---|:-:|
| 7 | [Nmap: Live Host Discovery](https://tryhackme.com/room/nmap01) | TryHackMe |
| 8 | [Nmap: Basic Port Scans](https://tryhackme.com/room/nmap02) | TryHackMe |
| 9 | [Nmap: Advanced Port Scans](https://tryhackme.com/room/nmap03) | TryHackMe |
| 10 | [Further Nmap](https://tryhackme.com/room/furthernmap) | TryHackMe |
| 11 | [Nmap](https://tryhackme.com/room/nmap) | TryHackMe |
| 12 | [RustScan](https://tryhackme.com/room/rustscan) | TryHackMe |


### OSINT

| # | Lab | Platform |
|:-:|---|:-:|
| 13 | [Shodan.io](https://tryhackme.com/room/shodan) | TryHackMe |
| 14 | [Google Dorking](https://tryhackme.com/room/googledorking) | TryHackMe |
| 15 | [Web OSINT](https://tryhackme.com/room/webosint) | TryHackMe |
| 16 | [Searchlight OSINT](https://tryhackme.com/room/searchlightosint) | TryHackMe |


## 02. How the Web Works

**Focus:** DNS, HTTP, and the request/response cycle  
**Labs:** 4

Before attacking a web application, understand how it actually works: DNS resolution, HTTP in detail, and how a browser and server exchange data end to end.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [DNS in Detail](https://tryhackme.com/room/dnsindetail) | TryHackMe |
| 2 | [HTTP in Detail](https://tryhackme.com/room/httpindetail) | TryHackMe |
| 3 | [How Websites Work](https://tryhackme.com/room/howwebsiteswork) | TryHackMe |
| 4 | [Putting It All Together](https://tryhackme.com/room/puttingitalltogether) | TryHackMe |


## 03. Web Hacking Fundamentals

**Focus:** Burp Suite, OWASP Top 10, and first exploitation  
**Labs:** 5

Your first hands-on exposure to web attacks: getting comfortable with Burp Suite, working through the OWASP Top 10 and Juice Shop, exploiting file upload vulnerabilities, and a first CTF-style box to tie it together.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Burp Suite: The Basics](https://tryhackme.com/room/burpsuitebasics) | TryHackMe |
| 2 | [OWASP Top 10 - 2021](https://tryhackme.com/room/owasptop102021) | TryHackMe |
| 3 | [OWASP Juice Shop](https://tryhackme.com/room/owaspjuiceshop) | TryHackMe |
| 4 | [Upload Vulnerabilities](https://tryhackme.com/room/uploadvulns) | TryHackMe |
| 5 | [Pickle Rick](https://tryhackme.com/room/picklerick) | TryHackMe |


## 04. Introduction to Web Hacking

**Focus:** Content discovery, authentication bypass, and command injection  
**Labs:** 6

Core web attack techniques: walking an application methodically, discovering hidden content, bypassing authentication, enumerating subdomains, and exploiting OS command injection and SQL injection.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Walking An Application](https://tryhackme.com/room/walkinganapplication) | TryHackMe |
| 2 | [Content Discovery](https://tryhackme.com/room/contentdiscovery) | TryHackMe |
| 3 | [Authentication Bypass](https://tryhackme.com/room/authenticationbypass) | TryHackMe |
| 4 | [Subdomain Enumeration](https://tryhackme.com/room/subdomainenumeration) | TryHackMe |
| 5 | [OS Command Injection](https://tryhackme.com/room/oscommandinjection) | TryHackMe |
| 6 | [SQL Injection Lab](https://tryhackme.com/room/sqlinjectionlm) | TryHackMe |


## 05. Burp Suite

**Focus:** Repeater, Intruder, and extensions  
**Labs:** 5

A deeper pass on Burp Suite: Repeater for manual testing, Intruder for automated attacks, and the other modules and extensions that make it the core tool of every web pentester.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Burp Suite: The Basics](https://tryhackme.com/room/burpsuitebasics) | TryHackMe |
| 2 | [Burp Suite: Repeater](https://tryhackme.com/room/burpsuiterepeater) | TryHackMe |
| 3 | [Burp Suite: Intruder](https://tryhackme.com/room/burpsuiteintruder) | TryHackMe |
| 4 | [Burp Suite: Other Modules](https://tryhackme.com/room/burpsuiteom) | TryHackMe |
| 5 | [Burp Suite: Extensions](https://tryhackme.com/room/burpsuiteextensions) | TryHackMe |


## 06. XSS (Cross-Site Scripting)

**Focus:** Reflected, stored, DOM-based, and advanced context-based XSS  
**Labs:** 33

The largest section in the roadmap. Start with the TryHackMe rooms for the fundamentals of XSS and CORS, then work through the full PortSwigger XSS track: contexts, DOM-based sinks, filter and CSP bypasses, client-side template injection, and exploitation techniques like cookie theft and CSRF via XSS.


### TryHackMe

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Advanced XSS](https://tryhackme.com/room/axss) | TryHackMe |
| 2 | [XSS](https://tryhackme.com/room/xss) | TryHackMe |
| 3 | [CORS & SOP](https://tryhackme.com/room/corsandsop) | TryHackMe |


### PortSwigger - Reflected & Stored XSS

| # | Lab | Level |
|:-:|---|:-:|
| 4 | [Reflected XSS into HTML context with nothing encoded](https://portswigger.net/web-security/cross-site-scripting/reflected/lab-html-context-nothing-encoded) | Apprentice |
| 5 | [Stored XSS into HTML context with nothing encoded](https://portswigger.net/web-security/cross-site-scripting/stored/lab-html-context-nothing-encoded) | Apprentice |


### PortSwigger - DOM-Based XSS

| # | Lab | Level |
|:-:|---|:-:|
| 6 | [DOM XSS in document.write sink using source location.search](https://portswigger.net/web-security/cross-site-scripting/dom-based/lab-document-write-sink) | Apprentice |
| 7 | [DOM XSS in innerHTML sink using source location.search](https://portswigger.net/web-security/cross-site-scripting/dom-based/lab-innerhtml-sink) | Apprentice |
| 8 | [DOM XSS in jQuery anchor href attribute sink using location.search source](https://portswigger.net/web-security/cross-site-scripting/dom-based/lab-jquery-href-attribute-sink) | Apprentice |
| 9 | [DOM XSS in jQuery selector sink using a hashchange event](https://portswigger.net/web-security/cross-site-scripting/dom-based/lab-jquery-selector-hash-change-event) | Apprentice |
| 10 | [DOM XSS in document.write sink using source location.search inside a select element](https://portswigger.net/web-security/cross-site-scripting/dom-based/lab-document-write-sink-inside-select-element) | Practitioner |
| 11 | [DOM XSS in AngularJS expression with angle brackets and double quotes HTML-encoded](https://portswigger.net/web-security/cross-site-scripting/dom-based/lab-angularjs-expression) | Practitioner |
| 12 | [Reflected DOM XSS](https://portswigger.net/web-security/cross-site-scripting/dom-based/lab-dom-xss-reflected) | Practitioner |
| 13 | [Stored DOM XSS](https://portswigger.net/web-security/cross-site-scripting/dom-based/lab-dom-xss-stored) | Practitioner |


### PortSwigger - XSS Contexts

| # | Lab | Level |
|:-:|---|:-:|
| 14 | [XSS in an attribute with angle brackets HTML-encoded](https://portswigger.net/web-security/cross-site-scripting/contexts/lab-attribute-angle-brackets-html-encoded) | Apprentice |
| 15 | [XSS in an href attribute with double quotes HTML-encoded](https://portswigger.net/web-security/cross-site-scripting/contexts/lab-href-attribute-double-quotes-html-encoded) | Apprentice |
| 16 | [XSS into a JavaScript string with angle brackets HTML-encoded](https://portswigger.net/web-security/cross-site-scripting/contexts/lab-javascript-string-angle-brackets-html-encoded) | Apprentice |
| 17 | [XSS in a HTML context with most tags and attributes blocked](https://portswigger.net/web-security/cross-site-scripting/contexts/lab-html-context-with-most-tags-and-attributes-blocked) | Practitioner |
| 18 | [XSS in a HTML context with all standard tags blocked](https://portswigger.net/web-security/cross-site-scripting/contexts/lab-html-context-with-all-standard-tags-blocked) | Practitioner |
| 19 | [XSS with some SVG markup allowed](https://portswigger.net/web-security/cross-site-scripting/contexts/lab-some-svg-markup-allowed) | Practitioner |
| 20 | [XSS in canonical link tag](https://portswigger.net/web-security/cross-site-scripting/contexts/lab-canonical-link-tag) | Expert |
| 21 | [XSS into a JavaScript string with single quote and backslash escaped](https://portswigger.net/web-security/cross-site-scripting/contexts/lab-javascript-string-single-quote-backslash-escaped) | Practitioner |
| 22 | [XSS into a JavaScript string with angle brackets and double quotes HTML-encoded and single quotes escaped](https://portswigger.net/web-security/cross-site-scripting/contexts/lab-javascript-string-angle-brackets-double-quotes-encoded-single-quotes-escaped) | Expert |
| 23 | [XSS in an onclick event with angle brackets and double quotes HTML-encoded and single quotes and backslash escaped](https://portswigger.net/web-security/cross-site-scripting/contexts/lab-onclick-event-angle-brackets-double-quotes-html-encoded-single-quotes-backslash-escaped) | Expert |
| 24 | [XSS in a JavaScript template literal with angle brackets, single, double quotes, backslash and backticks Unicode-escaped](https://portswigger.net/web-security/cross-site-scripting/contexts/lab-javascript-template-literal-angle-brackets-single-double-quotes-backslash-backticks-escaped) | Expert |
| 25 | [Reflected XSS with event handlers and href attributes blocked](https://portswigger.net/web-security/cross-site-scripting/contexts/lab-event-handlers-and-href-attributes-blocked) | Practitioner |
| 26 | [Reflected XSS with some SVG markup allowed](https://portswigger.net/web-security/cross-site-scripting/contexts/lab-some-svg-markup-allowed) | Practitioner |
| 27 | [Reflected XSS in a JavaScript URL with some characters blocked](https://portswigger.net/web-security/cross-site-scripting/contexts/lab-javascript-url-some-characters-blocked) | Expert |


### PortSwigger - Client-Side Template Injection

| # | Lab | Level |
|:-:|---|:-:|
| 28 | [Client-side template injection with AngularJS sandbox escape without strings](https://portswigger.net/web-security/cross-site-scripting/contexts/client-side-template-injection/lab-angular-sandbox-escape-without-strings) | Expert |
| 29 | [Client-side template injection with AngularJS sandbox escape and CSP](https://portswigger.net/web-security/cross-site-scripting/contexts/client-side-template-injection/lab-angular-sandbox-escape-and-csp) | Expert |


### PortSwigger - Exploiting XSS

| # | Lab | Level |
|:-:|---|:-:|
| 30 | [Exploiting XSS to steal cookies](https://portswigger.net/web-security/cross-site-scripting/exploiting/lab-stealing-cookies) | Practitioner |
| 31 | [Exploiting XSS to capture passwords](https://portswigger.net/web-security/cross-site-scripting/exploiting/lab-capturing-passwords) | Practitioner |
| 32 | [Exploiting XSS to perform CSRF](https://portswigger.net/web-security/cross-site-scripting/exploiting/lab-perform-csrf) | Practitioner |


### PortSwigger - Content Security Policy

| # | Lab | Level |
|:-:|---|:-:|
| 33 | [Bypassing CSP with policy injection](https://portswigger.net/web-security/content-security-policy/lab-csp-bypass) | Expert |


## 07. SQL Injection

**Focus:** From fundamentals to UNION and Blind SQLi  
**Labs:** 16

SQL injection from the ground up on TryHackMe, then applied on PortSwigger through UNION attacks and the early stages of Blind SQL injection.


### TryHackMe

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [SQL Fundamentals](https://tryhackme.com/room/sqlfundamentals) | TryHackMe |
| 2 | [Advanced SQL Injection](https://tryhackme.com/room/advancedsqlinjection) | TryHackMe |
| 3 | [SQL Injection Lab](https://tryhackme.com/room/sqlinjectionlm) | TryHackMe |


### PortSwigger - Basic

| # | Lab | Level |
|:-:|---|:-:|
| 4 | [SQL injection vulnerability in WHERE clause allowing retrieval of hidden data](https://portswigger.net/web-security/sql-injection/lab-retrieve-hidden-data) | Apprentice |
| 5 | [SQL injection vulnerability allowing login bypass](https://portswigger.net/web-security/sql-injection/lab-login-bypass) | Apprentice |


### PortSwigger - Examining the Database

| # | Lab | Level |
|:-:|---|:-:|
| 6 | [Querying the database type and version on Oracle](https://portswigger.net/web-security/sql-injection/examining-the-database/lab-querying-database-version-oracle) | Practitioner |
| 7 | [Querying the database type and version on MySQL and Microsoft](https://portswigger.net/web-security/sql-injection/examining-the-database/lab-querying-database-version-mysql-microsoft) | Practitioner |
| 8 | [Listing the database contents on non-Oracle databases](https://portswigger.net/web-security/sql-injection/examining-the-database/lab-listing-database-contents-non-oracle) | Practitioner |
| 9 | [Listing the database contents on Oracle](https://portswigger.net/web-security/sql-injection/examining-the-database/lab-listing-database-contents-oracle) | Practitioner |


### PortSwigger - UNION Attacks

| # | Lab | Level |
|:-:|---|:-:|
| 10 | [UNION attack: determining the number of columns](https://portswigger.net/web-security/sql-injection/union-attacks/lab-determine-number-of-columns) | Practitioner |
| 11 | [UNION attack: finding a column containing text](https://portswigger.net/web-security/sql-injection/union-attacks/lab-find-column-containing-text) | Practitioner |
| 12 | [UNION attack: retrieving data from other tables](https://portswigger.net/web-security/sql-injection/union-attacks/lab-retrieve-data-from-other-tables) | Practitioner |
| 13 | [UNION attack: retrieving multiple values in a single column](https://portswigger.net/web-security/sql-injection/union-attacks/lab-retrieve-multiple-values-in-single-column) | Practitioner |


### PortSwigger - Blind SQL Injection

| # | Lab | Level |
|:-:|---|:-:|
| 14 | [Blind SQLi with conditional responses](https://portswigger.net/web-security/sql-injection/blind/lab-conditional-responses) | Practitioner |
| 15 | [Blind SQLi with conditional errors](https://portswigger.net/web-security/sql-injection/blind/lab-conditional-errors) | Practitioner |
| 16 | [Blind SQLi with time delays](https://portswigger.net/web-security/sql-injection/blind/lab-time-delays) | Practitioner |


## 08. System & Network: Host-Based Attacks

**Focus:** Networking, Windows/Linux privesc, and Active Directory  
**Labs:** 34

The largest technical section: networking fundamentals, traffic analysis, exploitation with Metasploit, privilege escalation on both Windows and Linux, system hardening, and a full Active Directory attack chain from enumeration to persistence and recovery.


### Networking & Traffic Analysis

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Networking Concepts](https://tryhackme.com/room/networkingconcepts) | TryHackMe |
| 2 | [Networking Essentials](https://tryhackme.com/room/networkingessentials) | TryHackMe |
| 3 | [Networking Core Protocols](https://tryhackme.com/room/networkingcoreprotocols) | TryHackMe |
| 4 | [Network Security Protocols](https://tryhackme.com/room/networksecurityprotocols) | TryHackMe |
| 5 | [Wireshark: The Basics](https://tryhackme.com/room/wiresharkthebasics) | TryHackMe |
| 6 | [Tcpdump](https://tryhackme.com/room/tcpdump) | TryHackMe |


### Exploitation & Post-Exploitation

| # | Lab | Platform |
|:-:|---|:-:|
| 7 | [Metasploit: Introduction](https://tryhackme.com/room/metasploitintro) | TryHackMe |
| 8 | [Metasploit: Exploitation](https://tryhackme.com/room/metasploitexploitation) | TryHackMe |
| 9 | [Meterpreter](https://tryhackme.com/room/meterpreter) | TryHackMe |
| 10 | [Blue](https://tryhackme.com/room/blue) | TryHackMe |
| 11 | [Moniker Link](https://tryhackme.com/room/monikerlink) | TryHackMe |


### Windows Privilege Escalation & Hardening

| # | Lab | Platform |
|:-:|---|:-:|
| 12 | [Windows Fundamentals 1](https://tryhackme.com/room/windowsfundamentals1xbx) | TryHackMe |
| 13 | [Windows Fundamentals 2](https://tryhackme.com/room/windowsfundamentals2x0x) | TryHackMe |
| 14 | [Windows Fundamentals 3](https://tryhackme.com/room/windowsfundamentals3xzx) | TryHackMe |
| 15 | [Windows PrivEsc](https://tryhackme.com/room/windowsprivesc20) | TryHackMe |
| 16 | [Windows Local Persistence](https://tryhackme.com/room/windowslocalpersistence) | TryHackMe |


### Linux Privilege Escalation & Hardening

| # | Lab | Platform |
|:-:|---|:-:|
| 17 | [Linux Privilege Escalation](https://tryhackme.com/room/linprivesc) | TryHackMe |
| 18 | [Common Linux Privesc](https://tryhackme.com/room/commonlinuxprivesc) | TryHackMe |
| 19 | [Linux PrivEsc](https://tryhackme.com/room/linuxprivesc) | TryHackMe |
| 20 | [Linux System Hardening](https://tryhackme.com/room/linuxsystemhardening) | TryHackMe |
| 21 | [Intro to Security Architecture](https://tryhackme.com/room/introtosecurityarchitecture) | TryHackMe |


### Active Directory

| # | Lab | Platform |
|:-:|---|:-:|
| 22 | [Active Directory Basics](https://tryhackme.com/room/winadbasics) | TryHackMe |
| 23 | [AD Enumeration](https://tryhackme.com/room/adenumeration) | TryHackMe |
| 24 | [Exploiting AD](https://tryhackme.com/room/exploitingad) | TryHackMe |
| 25 | [Breaching AD](https://tryhackme.com/room/breachingad) | TryHackMe |
| 26 | [Persisting AD](https://tryhackme.com/room/persistingad) | TryHackMe |
| 27 | [Lateral Movement and Pivoting](https://tryhackme.com/room/lateralmovementandpivoting) | TryHackMe |
| 28 | [Credential Harvesting](https://tryhackme.com/room/credharvesting) | TryHackMe |
| 29 | [Recovering Active Directory](https://tryhackme.com/room/recoveringactivedirectory) | TryHackMe |
| 30 | [Active Directory Hardening](https://tryhackme.com/room/activedirectoryhardening) | TryHackMe |
| 31 | [Attacktive Directory](https://tryhackme.com/room/attacktivedirectory) | TryHackMe |
| 32 | [The Lay of the Land](https://tryhackme.com/room/thelayoftheland) | TryHackMe |
| 33 | [LDAP Injection](https://tryhackme.com/room/ldapinjection) | TryHackMe |
| 34 | [Red Team Capstone Challenge](https://tryhackme.com/room/redteamcapstonechallenge) | TryHackMe |


## 09. Red Team Fundamentals

**Focus:** Engagement structure, threat intel, OPSEC, and C2  
**Labs:** 5

How a red team engagement is actually run: fundamentals and engagement planning, working with threat intelligence, operational security (OPSEC), and an introduction to command and control (C2) infrastructure.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Red Team Fundamentals](https://tryhackme.com/room/redteamfundamentals) | TryHackMe |
| 2 | [Red Team Engagements](https://tryhackme.com/room/redteamengagements) | TryHackMe |
| 3 | [Red Team Threat Intel](https://tryhackme.com/room/redteamthreatintel) | TryHackMe |
| 4 | [OPSEC](https://tryhackme.com/room/opsec) | TryHackMe |
| 5 | [Intro to C2](https://tryhackme.com/room/introtoc2) | TryHackMe |


## 10. Initial Access

**Focus:** Recon, weaponization, password attacks, and phishing  
**Labs:** 4

Getting the first foothold: reconnaissance geared toward an engagement, weaponizing payloads, password attacks, and phishing as an initial access vector.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Red Team Recon](https://tryhackme.com/room/redteamrecon) | TryHackMe |
| 2 | [Weaponization](https://tryhackme.com/room/weaponization) | TryHackMe |
| 3 | [Password Attacks](https://tryhackme.com/room/passwordattacks) | TryHackMe |
| 4 | [Phishing](https://tryhackme.com/room/phishingyl) | TryHackMe |


## 11. Planning and Scoping

**Focus:** Pentesting fundamentals, engagement scoping, and governance  
**Labs:** 3

The groundwork before any technical work begins: pentesting fundamentals, planning and scoping an engagement, and understanding cyber governance and regulation.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Pentesting Fundamentals](https://tryhackme.com/room/pentestingfundamentals) | TryHackMe |
| 2 | [Red Team Engagements](https://tryhackme.com/room/redteamengagements) | TryHackMe |
| 3 | [Cyber Governance & Regulation](https://tryhackme.com/room/cybergovernanceregulation) | TryHackMe |


## 12. Post-Compromise

**Focus:** Situational awareness, enumeration, privesc, lateral movement, and exfiltration  
**Labs:** 6

What happens after the initial foothold: building situational awareness, enumerating for privilege escalation, persisting, pivoting laterally, and exfiltrating data.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [The Lay of the Land](https://tryhackme.com/room/thelayoftheland) | TryHackMe |
| 2 | [Enumeration (Privilege Escalation)](https://tryhackme.com/room/enumerationpe) | TryHackMe |
| 3 | [Windows PrivEsc](https://tryhackme.com/room/windowsprivesc20) | TryHackMe |
| 4 | [Windows Local Persistence](https://tryhackme.com/room/windowslocalpersistence) | TryHackMe |
| 5 | [Lateral Movement and Pivoting](https://tryhackme.com/room/lateralmovementandpivoting) | TryHackMe |
| 6 | [Data Exfiltration](https://tryhackme.com/room/dataxexfilt) | TryHackMe |


---


## Red Team Tooling Reference

Beyond the labs above, the original course material includes a curated set of red team tools organized by phase of an engagement. These are reference links, not labs, kept here for convenience.

> These links point to shortened LinkedIn redirect URLs from the original course material. Shortened links can rot or be tracked, so replace them with the tools' direct GitHub or official pages before publishing.


### Reconnaissance

- [RustScan](https://lnkd.in/ebvRfBNy)
- [NmapAutomator](https://lnkd.in/gu5wxzf6)
- [AutoRecon](https://lnkd.in/g3DeG6YT)
- [Amass](https://lnkd.in/e7V569N5)
- [CloudEnum](https://lnkd.in/ePHDeGZv)
- [Recon-NG](https://lnkd.in/edwaXFjS)
- [AttackSurfaceMapper](https://lnkd.in/ebbcj6Rm)
- [DNSDumpster](https://dnsdumpster.com/)

### Initial Access

- [SprayingToolKit](https://lnkd.in/eBSAPz5z)
- [o365Recon](https://lnkd.in/eJwCx-Ga)
- [Psudohash](https://lnkd.in/gcaxV6fR)
- [CredMaster](https://lnkd.in/gtMEDVuS)
- [DomainPasswordSpray](https://lnkd.in/guWj4TYv)
- [TheSprayer](https://lnkd.in/gZVuQYiv)
- [TREVORspray](https://lnkd.in/gHgcbjgV)

### Delivery

- [o365AttackToolKit](https://lnkd.in/etCCYi8y)
- [EvilGinx2](https://lnkd.in/eRDPvwUg)
- [GoPhish](https://lnkd.in/ea26dfNg)
- [PwnAuth](https://lnkd.in/eqecM7de)
- [Modlishka](https://lnkd.in/eds-dR5C)

### Command and Control

- [PoshC2](https://lnkd.in/eqSJUDji)
- [Sliver](https://lnkd.in/ewN9Nday)
- [SILENTTRINITY](https://lnkd.in/eeZGbYMs)
- [Empire](https://lnkd.in/egAPa8gY)
- [AzureC2Relay](https://lnkd.in/efmh2t3g)
- [Havoc C2](https://lnkd.in/gEFp2iym)
- [Mythic C2](https://lnkd.in/gnCGwfWk)

### Credential Dumping

- [MimiKatz](https://lnkd.in/etEGfvJK)
- [HekaTomb](https://lnkd.in/eJx5Ugu5)
- [SharpLAPS](https://lnkd.in/eA28n9FT)
- [Net-GPPPassword](https://lnkd.in/e3CTez5A)
- [PyPyKatz](https://lnkd.in/eeb5b6Tz)

### Privilege Escalation

- [SharpUp](https://lnkd.in/etR2Pe_n)
- [MultiPotato](https://lnkd.in/eq53PXcJ)
- [PEASS](https://lnkd.in/eWA66akh)
- [Watson](https://lnkd.in/eZfYMSMX)
- [Bat-Potato](https://lnkd.in/gjziyG8q)

### Defense Evasion

- [Villain](https://lnkd.in/gquyGFm5)
- [EDRSandBlast](https://lnkd.in/e8g8zYFT)
- [SPAWN (Cobalt Strike BOF)](https://lnkd.in/e223PbqZ)
- [NetLoader](https://lnkd.in/ef5wCD4y)
- [KillDefenderBOF](https://lnkd.in/eVd54HUp)
- [ThreatCheck](https://lnkd.in/eHvSPakR)
- [Freeze](https://lnkd.in/eNUh3zCi)
- [GadgetToJScript](https://lnkd.in/egPQBBXJ)

### Persistence

- [SharPyShell](https://lnkd.in/eXm8h8Bj)
- [SharpStay](https://lnkd.in/erRbeFMj)
- [SharpEventPersist](https://lnkd.in/e_kJFNiB)

### Lateral Movement

- [SCShell](https://lnkd.in/e256fC8B)
- [MoveKit](https://lnkd.in/eR-NUu_U)
- [Impacket](https://lnkd.in/euG4hTTs)

### Exfiltration

- [SharpExfiltrate](https://lnkd.in/eGC4BKRN)
- [DNSExfiltrator](https://lnkd.in/epJ-s6gp)
- [Egress-Assess](https://lnkd.in/eXGFPQRJ)


---

## Tips for Getting the Most Out of These Labs

- **Take notes** on every lab: the tool, the command, and the idea behind it, so you can come back to them later.
- **Avoid walkthroughs** until you have genuinely tried on your own.
- **Repeat labs** a few days later without looking at the solution. This is what makes the knowledge stick.
- **Treat the Active Directory subsection as a single narrative**: enumeration, breaching, exploiting, lateral movement, and persistence build on each other, so work through them in order rather than jumping around.

> These labs and tools are for learning and practice in authorized environments only. Never test any technique or tool on systems you do not own or have explicit permission to test.
