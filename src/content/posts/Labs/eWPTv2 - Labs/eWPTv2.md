---
title: "eWAPT v2 Course Labs Roadmap"
published: 2026-09-19
description: "A structured roadmap of 70 labs on TryHackMe and PortSwigger covering the eWAPT v2 course, from web fundamentals and Burp Suite to XSS and SQL injection."
tags: [eWPTv2, Labs, TryHackMe, PortSwigger, Web Application Security, Web Security, Penetration Testing, Enumeration]
category: Labs
draft: false
---


## Overview

This roadmap supports the **eWAPT v2** course with hands-on labs on TryHackMe and PortSwigger, organized into 8 sections that follow the course flow: how the web works, web hacking fundamentals, Burp Suite, XSS, SQL injection, and the supporting pentesting tools.

The roadmap was put together by **Netriders Academy**, with the labs curated by **Ahmed Sultan**. Pair it with my [eWPTv2 Study Notes](https://bad-glitch.github.io/posts/courses-notes/ewptv2---notes/ewptv2-notes/) for the theory behind each topic. Every link opens the lab directly.

| | |
|---|---|
| **Total labs** | 70 |
| **TryHackMe** | 32 |
| **PortSwigger Web Security Academy** | 38 |
| **Sections** | 8 |

> **Note:** two rooms, Burp Suite: The Basics and SQL Injection Lab, appear in more than one section because they support more than one topic, so the total counts each appearance. TryHackMe also occasionally moves rooms between free and paid, so if you find a lab that is locked, let me know and I will update the list.


## Section Map

| # | Section | Focus | Labs |
|:-:|---|---|:-:|
| 01 | How the Web Works | DNS, HTTP, and the request/response cycle | 4 |
| 02 | Web Hacking Fundamentals | Burp Suite, OWASP Top 10, and first exploitation | 5 |
| 03 | Introduction to Web Hacking | Content discovery, authentication bypass, and injection basics | 6 |
| 04 | Burp Suite | Repeater, Intruder, and extensions | 5 |
| 05 | XSS & Web Security | Reflected, stored, DOM-based, and context-based XSS | 28 |
| 06 | SQL Injection | From fundamentals to UNION and Blind SQLi | 16 |
| 07 | Extra Lab | Supplementary practice | 1 |
| 08 | Pentesting Tools | Nmap, Metasploit, John the Ripper, Nessus, and Hydra | 5 |

## Suggested Learning Path

1. **Foundations:** How the Web Works -> Web Hacking Fundamentals -> Introduction to Web Hacking
2. **Core tooling:** Burp Suite
3. **Attack techniques:** XSS & Web Security -> SQL Injection
4. **Supporting tools:** Pentesting Tools, which can be studied alongside the earlier sections
5. **Bonus:** Extra Lab

**PortSwigger difficulty levels:** Apprentice -> Practitioner -> Expert. If you are new to XSS or SQL injection, complete the Apprentice labs in each subsection before attempting the harder ones.


---


## 01. How the Web Works

**Focus:** DNS, HTTP, and the request/response cycle  
**Labs:** 4

Before attacking a web application, understand how it works: DNS resolution, HTTP in detail, and how a browser and server exchange data from end to end.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [DNS in Detail](https://tryhackme.com/room/dnsindetail) | TryHackMe |
| 2 | [HTTP in Detail](https://tryhackme.com/room/httpindetail) | TryHackMe |
| 3 | [How Websites Work](https://tryhackme.com/room/howwebsiteswork) | TryHackMe |
| 4 | [Putting It All Together](https://tryhackme.com/room/puttingitalltogether) | TryHackMe |


## 02. Web Hacking Fundamentals

**Focus:** Burp Suite, OWASP Top 10, and first exploitation  
**Labs:** 5

Your first hands-on exposure to web attacks: getting comfortable with Burp Suite, working through the OWASP Top 10 and Juice Shop, exploiting file upload vulnerabilities, and a first CTF-style machine to tie it together.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Burp Suite: The Basics](https://tryhackme.com/room/burpsuitebasics) | TryHackMe |
| 2 | [OWASP Top 10 - 2021](https://tryhackme.com/room/owasptop102021) | TryHackMe |
| 3 | [OWASP Juice Shop](https://tryhackme.com/room/owaspjuiceshop) | TryHackMe |
| 4 | [Upload Vulnerabilities](https://tryhackme.com/room/uploadvulns) | TryHackMe |
| 5 | [Pickle Rick](https://tryhackme.com/room/picklerick) | TryHackMe |


## 03. Introduction to Web Hacking

**Focus:** Content discovery, authentication bypass, and injection basics  
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


## 04. Burp Suite

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


## 05. XSS & Web Security

**Focus:** Reflected, stored, DOM-based, and context-based XSS  
**Labs:** 28

The largest section in the roadmap. Start with the TryHackMe rooms for XSS and CORS fundamentals, then work through the PortSwigger XSS track: DOM-based sinks, injection contexts, filter bypasses, exploitation techniques like cookie theft and CSRF via XSS, and CSP bypass.


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
| 20 | [Reflected XSS in canonical link tag](https://portswigger.net/web-security/cross-site-scripting/contexts/lab-canonical-link-tag) | Expert |
| 21 | [XSS into a JavaScript string with single quote and backslash escaped](https://portswigger.net/web-security/cross-site-scripting/contexts/lab-javascript-string-single-quote-backslash-escaped) | Practitioner |
| 22 | [XSS into a JavaScript string with angle brackets and double quotes HTML-encoded and single quotes escaped](https://portswigger.net/web-security/cross-site-scripting/contexts/lab-javascript-string-angle-brackets-double-quotes-encoded-single-quotes-escaped) | Practitioner |
| 23 | [XSS in an onclick event with angle brackets and double quotes HTML-encoded and single quotes and backslash escaped](https://portswigger.net/web-security/cross-site-scripting/contexts/lab-onclick-event-angle-brackets-double-quotes-html-encoded-single-quotes-backslash-escaped) | Practitioner |
| 24 | [XSS in a JavaScript template literal with angle brackets, single, double quotes, backslash and backticks Unicode-escaped](https://portswigger.net/web-security/cross-site-scripting/contexts/lab-javascript-template-literal-angle-brackets-single-double-quotes-backslash-backticks-escaped) | Practitioner |


### PortSwigger - Exploiting XSS

| # | Lab | Level |
|:-:|---|:-:|
| 25 | [Exploiting XSS to steal cookies](https://portswigger.net/web-security/cross-site-scripting/exploiting/lab-stealing-cookies) | Practitioner |
| 26 | [Exploiting XSS to capture passwords](https://portswigger.net/web-security/cross-site-scripting/exploiting/lab-capturing-passwords) | Practitioner |
| 27 | [Exploiting XSS to perform CSRF](https://portswigger.net/web-security/cross-site-scripting/exploiting/lab-perform-csrf) | Practitioner |


### PortSwigger - Content Security Policy

| # | Lab | Level |
|:-:|---|:-:|
| 28 | [Reflected XSS protected by CSP, with CSP bypass](https://portswigger.net/web-security/cross-site-scripting/content-security-policy/lab-csp-bypass) | Expert |


## 06. SQL Injection

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


## 07. Extra Lab

**Focus:** Supplementary practice  
**Labs:** 1

An additional room that complements the core roadmap.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Common Attacks](https://tryhackme.com/room/commonattacks) | TryHackMe |


## 08. Pentesting Tools

**Focus:** Nmap, Metasploit, John the Ripper, Nessus, and Hydra  
**Labs:** 5

The essential tools that support every web assessment: port and service scanning with Nmap, exploitation with Metasploit, password cracking with John the Ripper, vulnerability scanning with Nessus, and online password attacks with Hydra.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Further Nmap](https://tryhackme.com/room/furthernmap) | TryHackMe |
| 2 | [Metasploit: Introduction](https://tryhackme.com/room/metasploitintro) | TryHackMe |
| 3 | [John The Ripper: The Basics](https://tryhackme.com/room/johntheripperbasics) | TryHackMe |
| 4 | [Nessus](https://tryhackme.com/room/rpnessusredux) | TryHackMe |
| 5 | [Hydra](https://tryhackme.com/room/hydra) | TryHackMe |


---

## Tips for Getting the Most Out of These Labs

- **Take notes** on every lab: the payload, the request, and the reasoning behind it, so you can come back to them later.
- **Avoid walkthroughs** until you have genuinely tried on your own. PortSwigger's hints and solutions are there for when you are stuck, not as a first step.
- **Repeat labs** a few days later without looking at the solution. This is what makes the knowledge stick.
- **Learn XSS by context:** for each PortSwigger XSS lab, identify where your input lands (HTML, attribute, JavaScript string, DOM sink) before choosing a payload. This habit is what the exam tests.

> These labs are for learning and practice in authorized environments only. Never test any technique on systems you do not own or have explicit permission to test.
