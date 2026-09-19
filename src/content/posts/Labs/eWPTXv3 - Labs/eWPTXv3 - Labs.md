---
title: " eWPTX-v3 - Labs"
published: 2026-09-19
description: "A structured roadmap of 84 labs on TryHackMe and PortSwigger covering authentication attacks, advanced injection, API testing, request smuggling, and SSRF."
tags: [Labs, TryHackMe, PortSwigger, Web Application Security, Web Security, Penetration Testing, Enumeration, Recon]
category: Labs
draft: false
---


## Overview

This roadmap is a hands-on path for moving from web application basics to advanced attack techniques. It is organized into 7 sections, each building on the one before it, and pairs TryHackMe rooms (for guided learning) with PortSwigger Web Security Academy labs (for realistic practice). Every link opens the lab directly.

| | |
|---|---|
| **Total labs** | 84 |
| **TryHackMe** | 39 |
| **PortSwigger Web Security Academy** | 45 |
| **Sections** | 7 (6 with labs, 1 reserved) |

> **Note:** TryHackMe occasionally moves rooms between free and paid. If you find a lab that is locked, let me know and I will update the list.


## Section Map

| # | Section | Focus | Labs |
|:-:|---|---|:-:|
| 01 | Intro to Advanced Web Application Penetration Testing | Reconnaissance, scanning, and engagement fundamentals | 9 |
| 02 | Authentication and SSO Attacks | Enumeration, brute force, session management, JWT, OAuth, and MFA bypass | 20 |
| 03 | Advanced Injection Attacks | XSS, CSRF, CORS, SQLi, NoSQLi, XXE, SSTI, LDAP, and ORM injection | 34 |
| 04 | API Penetration Testing | API recon, mass assignment, and server-side parameter pollution | 5 |
| 05 | Filter Evasion & WAF Bypass Techniques | Bypassing input filters and web application firewalls | Coming soon |
| 06 | Server-Side Attacks | HTTP request smuggling and SSRF | 12 |
| 07 | Offensive Security Tooling | Hydra, Gobuster, shells, and SQLMap | 4 |

## Suggested Learning Path

1. **Foundations:** Intro to Advanced Web Application Penetration Testing
2. **Access control weaknesses:** Authentication and SSO Attacks
3. **Core exploitation:** Advanced Injection Attacks → API Penetration Testing
4. **Advanced server-side techniques:** Server-Side Attacks
5. **Throughout:** Offensive Security Tooling, studied alongside sections 02 and 03
6. **Later:** Filter Evasion & WAF Bypass Techniques, once labs are added

**PortSwigger difficulty levels:** Apprentice → Practitioner → Expert. If you are new to a topic, do all the Apprentice labs in a section first before moving on to the harder ones.


---


## 01. Intro to Advanced Web Application Penetration Testing

**Focus:** Reconnaissance, scanning, and engagement fundamentals  
**Labs:** 9

Start here. Before attacking a web application you need a solid grasp of reconnaissance and scanning: what the target exposes, what it runs, and how a real engagement is planned.


### Nmap

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Nmap: Live Host Discovery](https://tryhackme.com/room/nmap01) | TryHackMe |
| 2 | [Nmap: Basic Port Scans](https://tryhackme.com/room/nmap02) | TryHackMe |
| 3 | [Nmap: Advanced Port Scans](https://tryhackme.com/room/nmap03) | TryHackMe |
| 4 | [Nmap: Post Port Scans](https://tryhackme.com/room/nmap04) | TryHackMe |
| 5 | [Further Nmap](https://tryhackme.com/room/furthernmap) | TryHackMe |


### Reconnaissance & Engagement

| # | Lab | Platform |
|:-:|---|:-:|
| 6 | [Passive Reconnaissance](https://tryhackme.com/room/passiverecon) | TryHackMe |
| 7 | [Active Reconnaissance](https://tryhackme.com/room/activerecon) | TryHackMe |
| 8 | [Red Team Recon](https://tryhackme.com/room/redteamrecon) | TryHackMe |
| 9 | [Red Team Engagements](https://tryhackme.com/room/redteamengagements) | TryHackMe |


## 02. Authentication and SSO Attacks

**Focus:** Enumeration, brute force, session management, JWT, OAuth, and MFA bypass  
**Labs:** 20

How authentication breaks in practice: user enumeration, brute-force protection flaws, session handling, token-based mechanisms (JWT, OAuth), and multi-factor authentication bypasses. Work through the TryHackMe rooms first, then apply the techniques on PortSwigger.


### Prerequisites

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Networking Concepts](https://tryhackme.com/room/networkingconcepts) | TryHackMe |
| 2 | [HTTP in Detail](https://tryhackme.com/room/httpindetail) | TryHackMe |


### TryHackMe

| # | Lab | Platform |
|:-:|---|:-:|
| 3 | [Enumeration & Brute Force](https://tryhackme.com/room/enumerationbruteforce) | TryHackMe |
| 4 | [Session Management](https://tryhackme.com/room/sessionmanagement) | TryHackMe |
| 5 | [JWT Security](https://tryhackme.com/room/jwtsecurity) | TryHackMe |
| 6 | [OAuth Vulnerabilities](https://tryhackme.com/room/oauthvulnerabilities) | TryHackMe |
| 7 | [Multi-Factor Authentication](https://tryhackme.com/room/multifactorauthentications) | TryHackMe |
| 8 | [Hammer](https://tryhackme.com/room/hammer) | TryHackMe |


### PortSwigger - Password-Based Authentication

| # | Lab | Level |
|:-:|---|:-:|
| 9 | [Username enumeration via different responses](https://portswigger.net/web-security/authentication/password-based/lab-username-enumeration-via-different-responses) | Apprentice |
| 10 | [Username enumeration via subtly different responses](https://portswigger.net/web-security/authentication/password-based/lab-username-enumeration-via-subtly-different-responses) | Practitioner |
| 11 | [Username enumeration via response timing](https://portswigger.net/web-security/authentication/password-based/lab-username-enumeration-via-response-timing) | Practitioner |
| 12 | [Broken brute-force protection, IP block](https://portswigger.net/web-security/authentication/password-based/lab-broken-bruteforce-protection-ip-block) | Practitioner |
| 13 | [Username enumeration via account lock](https://portswigger.net/web-security/authentication/password-based/lab-username-enumeration-via-account-lock) | Practitioner |


### PortSwigger - Multi-Factor Authentication

| # | Lab | Level |
|:-:|---|:-:|
| 14 | [2FA simple bypass](https://portswigger.net/web-security/authentication/multi-factor/lab-2fa-simple-bypass) | Apprentice |
| 15 | [2FA broken logic](https://portswigger.net/web-security/authentication/multi-factor/lab-2fa-broken-logic) | Practitioner |


### PortSwigger - Other Authentication Mechanisms

| # | Lab | Level |
|:-:|---|:-:|
| 16 | [Password reset broken logic](https://portswigger.net/web-security/authentication/other-mechanisms/lab-password-reset-broken-logic) | Apprentice |
| 17 | [Brute-forcing a stay-logged-in cookie](https://portswigger.net/web-security/authentication/other-mechanisms/lab-brute-forcing-a-stay-logged-in-cookie) | Practitioner |
| 18 | [Offline password cracking](https://portswigger.net/web-security/authentication/other-mechanisms/lab-offline-password-cracking) | Practitioner |
| 19 | [Password reset poisoning via middleware](https://portswigger.net/web-security/authentication/other-mechanisms/lab-password-reset-poisoning-via-middleware) | Practitioner |
| 20 | [Password brute-force via password change](https://portswigger.net/web-security/authentication/other-mechanisms/lab-password-brute-force-via-password-change) | Practitioner |


## 03. Advanced Injection Attacks

**Focus:** XSS, CSRF, CORS, SQLi, NoSQLi, XXE, SSTI, LDAP, and ORM injection  
**Labs:** 34

The core of the roadmap: client-side attacks and the full range of injection classes. SQL injection gets the deepest coverage, from fundamentals through Blind and Out-of-Band techniques, followed by NoSQL, XXE, template, LDAP, and ORM injection.


### TryHackMe - Client-Side Attacks

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Advanced XSS](https://tryhackme.com/room/axss) | TryHackMe |
| 2 | [CSRF](https://tryhackme.com/room/csrfV2) | TryHackMe |
| 3 | [CORS & SOP](https://tryhackme.com/room/corsandsop) | TryHackMe |
| 4 | [What's Your Name?](https://tryhackme.com/room/whatsyourname) | TryHackMe |


### TryHackMe - Injection

| # | Lab | Platform |
|:-:|---|:-:|
| 5 | [SQL Fundamentals](https://tryhackme.com/room/sqlfundamentals) | TryHackMe |
| 6 | [SQL Injection Lab](https://tryhackme.com/room/sqlinjectionlm) | TryHackMe |
| 7 | [Advanced SQL Injection](https://tryhackme.com/room/advancedsqlinjection) | TryHackMe |
| 8 | [NoSQL Injection](https://tryhackme.com/room/nosqlinjectiontutorial) | TryHackMe |
| 9 | [XXE Injection](https://tryhackme.com/room/xxeinjection) | TryHackMe |
| 10 | [Server-Side Template Injection](https://tryhackme.com/room/serversidetemplateinjection) | TryHackMe |
| 11 | [LDAP Injection](https://tryhackme.com/room/ldapinjection) | TryHackMe |
| 12 | [ORM Injection](https://tryhackme.com/room/orminjection) | TryHackMe |
| 13 | [Injectics](https://tryhackme.com/room/injectics) | TryHackMe |


### PortSwigger - SQL Injection: Basic

| # | Lab | Level |
|:-:|---|:-:|
| 14 | [SQL injection vulnerability in WHERE clause allowing retrieval of hidden data](https://portswigger.net/web-security/sql-injection/lab-retrieve-hidden-data) | Apprentice |
| 15 | [SQL injection vulnerability allowing login bypass](https://portswigger.net/web-security/sql-injection/lab-login-bypass) | Apprentice |


### PortSwigger - SQL Injection: Examining the Database

| # | Lab | Level |
|:-:|---|:-:|
| 16 | [Querying the database type and version on Oracle](https://portswigger.net/web-security/sql-injection/examining-the-database/lab-querying-database-version-oracle) | Practitioner |
| 17 | [Querying the database type and version on MySQL and Microsoft](https://portswigger.net/web-security/sql-injection/examining-the-database/lab-querying-database-version-mysql-microsoft) | Practitioner |
| 18 | [Listing the database contents on non-Oracle databases](https://portswigger.net/web-security/sql-injection/examining-the-database/lab-listing-database-contents-non-oracle) | Practitioner |
| 19 | [Listing the database contents on Oracle](https://portswigger.net/web-security/sql-injection/examining-the-database/lab-listing-database-contents-oracle) | Practitioner |


### PortSwigger - SQL Injection: UNION Attacks

| # | Lab | Level |
|:-:|---|:-:|
| 20 | [UNION attack: determining the number of columns](https://portswigger.net/web-security/sql-injection/union-attacks/lab-determine-number-of-columns) | Practitioner |
| 21 | [UNION attack: finding a column containing text](https://portswigger.net/web-security/sql-injection/union-attacks/lab-find-column-containing-text) | Practitioner |
| 22 | [UNION attack: retrieving data from other tables](https://portswigger.net/web-security/sql-injection/union-attacks/lab-retrieve-data-from-other-tables) | Practitioner |
| 23 | [UNION attack: retrieving multiple values in a single column](https://portswigger.net/web-security/sql-injection/union-attacks/lab-retrieve-multiple-values-in-single-column) | Practitioner |


### PortSwigger - SQL Injection: Blind

| # | Lab | Level |
|:-:|---|:-:|
| 24 | [Blind SQLi with conditional responses](https://portswigger.net/web-security/sql-injection/blind/lab-conditional-responses) | Practitioner |
| 25 | [Blind SQLi with conditional errors](https://portswigger.net/web-security/sql-injection/blind/lab-conditional-errors) | Practitioner |
| 26 | [Visible error-based SQLi](https://portswigger.net/web-security/sql-injection/blind/lab-sql-injection-visible-error-based) | Practitioner |
| 27 | [Blind SQLi with time delays and information retrieval](https://portswigger.net/web-security/sql-injection/blind/lab-time-delays-info-retrieval) | Practitioner |
| 28 | [Blind SQLi with out-of-band interaction](https://portswigger.net/web-security/sql-injection/blind/lab-out-of-band) | Practitioner |
| 29 | [Blind SQLi with out-of-band data exfiltration](https://portswigger.net/web-security/sql-injection/blind/lab-out-of-band-data-exfiltration) | Practitioner |


### PortSwigger - SQL Injection: Filter Bypass

| # | Lab | Level |
|:-:|---|:-:|
| 30 | [SQLi with filter bypass via XML encoding](https://portswigger.net/web-security/sql-injection/lab-sql-injection-with-filter-bypass-via-xml-encoding) | Practitioner |


### PortSwigger - NoSQL Injection

| # | Lab | Level |
|:-:|---|:-:|
| 31 | [Detecting NoSQL injection](https://portswigger.net/web-security/nosql-injection/lab-nosql-injection-detection) | Apprentice |
| 32 | [Exploiting NoSQL operator injection to bypass authentication](https://portswigger.net/web-security/nosql-injection/lab-nosql-injection-bypass-authentication) | Practitioner |
| 33 | [Exploiting NoSQL injection to extract data](https://portswigger.net/web-security/nosql-injection/lab-nosql-injection-extract-data) | Practitioner |
| 34 | [Exploiting NoSQL operator injection to extract unknown fields](https://portswigger.net/web-security/nosql-injection/lab-nosql-injection-extract-unknown-fields) | Expert |


## 04. API Penetration Testing

**Focus:** API recon, mass assignment, and server-side parameter pollution  
**Labs:** 5

Testing APIs the way an attacker does: discovering endpoints through documentation, finding forgotten endpoints, abusing mass assignment, and manipulating server-side parameters.


### PortSwigger - API Testing

| # | Lab | Level |
|:-:|---|:-:|
| 1 | [Exploiting an API endpoint using documentation](https://portswigger.net/web-security/api-testing/lab-exploiting-api-endpoint-using-documentation) | Apprentice |
| 2 | [Exploiting server-side parameter pollution in a query string](https://portswigger.net/web-security/api-testing/server-side-parameter-pollution/lab-exploiting-server-side-parameter-pollution-in-query-string) | Practitioner |
| 3 | [Finding and exploiting an unused API endpoint](https://portswigger.net/web-security/api-testing/lab-exploiting-unused-api-endpoint) | Practitioner |
| 4 | [Exploiting a mass assignment vulnerability](https://portswigger.net/web-security/api-testing/lab-exploiting-mass-assignment-vulnerability) | Practitioner |
| 5 | [Exploiting server-side parameter pollution in a REST URL](https://portswigger.net/web-security/api-testing/server-side-parameter-pollution/lab-exploiting-server-side-parameter-pollution-in-rest-url) | Expert |


## 05. Filter Evasion & WAF Bypass Techniques

**Focus:** Bypassing input filters and web application firewalls  
**Labs:** Coming soon

This section is reserved. Labs covering filter evasion and WAF bypass techniques will be added in a future update.


## 06. Server-Side Attacks

**Focus:** HTTP request smuggling and SSRF  
**Labs:** 12

Attacks that abuse how servers, proxies, and back-end systems interpret requests: HTTP request smuggling across HTTP/1.1, HTTP/2, and WebSockets, and Server-Side Request Forgery (SSRF) in its basic, blind, and filter-bypass forms.


### TryHackMe - Request Smuggling

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [HTTP Request Smuggling](https://tryhackme.com/room/httprequestsmuggling) | TryHackMe |
| 2 | [HTTP/2 Request Smuggling](https://tryhackme.com/room/http2requestsmuggling) | TryHackMe |
| 3 | [WebSocket Request Smuggling](https://tryhackme.com/room/wsrequestsmuggling) | TryHackMe |
| 4 | [Request Smuggling: Browser Desync](https://tryhackme.com/room/requestsmugglingbrowserdesync) | TryHackMe |
| 5 | [El Bandito](https://tryhackme.com/room/elbandito) | TryHackMe |


### PortSwigger - SSRF

| # | Lab | Level |
|:-:|---|:-:|
| 6 | [Basic SSRF against the local server](https://portswigger.net/web-security/ssrf/lab-basic-ssrf-against-localhost) | Apprentice |
| 7 | [Basic SSRF against another back-end system](https://portswigger.net/web-security/ssrf/lab-basic-ssrf-against-backend-system) | Apprentice |
| 8 | [Blind SSRF with out-of-band detection](https://portswigger.net/web-security/ssrf/blind/lab-out-of-band-detection) | Practitioner |
| 9 | [SSRF with blacklist-based input filter](https://portswigger.net/web-security/ssrf/lab-ssrf-with-blacklist-filter) | Practitioner |
| 10 | [SSRF with filter bypass via open redirection vulnerability](https://portswigger.net/web-security/ssrf/lab-ssrf-filter-bypass-via-open-redirection) | Practitioner |
| 11 | [Blind SSRF with Shellshock exploitation](https://portswigger.net/web-security/ssrf/blind/lab-shellshock-exploitation) | Expert |
| 12 | [SSRF with whitelist-based input filter](https://portswigger.net/web-security/ssrf/lab-ssrf-with-whitelist-filter) | Expert |


## 07. Offensive Security Tooling

**Focus:** Hydra, Gobuster, shells, and SQLMap  
**Labs:** 4

The tools that speed up everything above: password attacks with Hydra, content discovery with Gobuster, shell fundamentals, and automated SQL injection with SQLMap. These can be studied alongside sections 02 and 03.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Hydra](https://tryhackme.com/room/hydra) | TryHackMe |
| 2 | [Gobuster: The Basics](https://tryhackme.com/room/gobusterthebasics) | TryHackMe |
| 3 | [Shells Overview](https://tryhackme.com/room/shellsoverview) | TryHackMe |
| 4 | [SQLMap: The Basics](https://tryhackme.com/room/sqlmapthebasics) | TryHackMe |


---

## Tips for Getting the Most Out of These Labs

- **Take notes** on every lab: the payload, the request, and the reasoning behind it, so you can come back to them later.
- **Avoid walkthroughs** until you have genuinely tried on your own. PortSwigger's hints and solutions are there for when you are stuck, not as a first step.
- **Repeat labs** a few days later without looking at the solution. This is what makes the knowledge stick.
- **Use Burp Suite** for the PortSwigger labs and get comfortable with Repeater and Intruder early. The Out-of-Band labs additionally rely on Burp Collaborator.

> These labs are for learning and practice in authorized environments only. Never test any technique on systems you do not own or have explicit permission to test.
