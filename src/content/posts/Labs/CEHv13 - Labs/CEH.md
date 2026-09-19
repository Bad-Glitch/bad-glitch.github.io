---
title: "CEH Free Labs: A Structured Practice Guide"
published: 2026-09-19
description: "A curated list of 120 free labs on TryHackMe and PortSwigger, organized into 16 sections and mapped to CEH modules, with a suggested order of completion."
tags: [CEH, Labs, TryHackMe, PortSwigger, Penetration Testing, Web Security, Network Security, Enumeration]
category: Labs
draft: false
---


## Overview

This collection is organized to help you practice the **CEH** curriculum hands-on. Each section is mapped to its CEH module, and the labs inside each section progress from fundamentals to more advanced topics. Every link opens the lab directly.

| | |
|---|---|
| **Total labs** | 120 |
| **TryHackMe** | 99 |
| **PortSwigger Web Security Academy** | 21 |
| **Sections** | 16 |

> **Note:** TryHackMe occasionally moves rooms between free and paid. If you find a lab that is locked, let me know and I will update the list.


## Section Map

| # | Section | CEH Module | Labs |
|:-:|---|---|:-:|
| 01 | Reconnaissance & OSINT | Module 02 - Footprinting and Reconnaissance | 7 |
| 02 | Scanning & Enumeration (Nmap) | Module 03 & 04 - Scanning Networks / Enumeration | 6 |
| 03 | Vulnerability Assessment | Module 05 - Vulnerability Analysis | 3 |
| 04 | Networking & Protocols | Foundation - Networking Fundamentals | 6 |
| 05 | Web Fundamentals | Foundation - Web Fundamentals | 8 |
| 06 | Web Hacking & OWASP | Module 13 & 14 - Hacking Web Servers / Web Applications | 8 |
| 07 | SQL Injection | Module 15 - SQL Injection | 24 |
| 08 | Burp Suite | Module 14 - Hacking Web Applications (Tooling) | 5 |
| 09 | Exploitation & Metasploit | Module 06 - System Hacking | 3 |
| 10 | Privilege Escalation | Module 06 - System Hacking | 6 |
| 11 | Packet Analysis & IDS | Module 08 & 12 - Sniffing / Evading IDS, Firewalls & Honeypots | 10 |
| 12 | Malware & Reverse Engineering | Module 07 - Malware Threats | 10 |
| 13 | Cryptography | Module 20 - Cryptography | 4 |
| 14 | CTF & Practice Machines | Practice - End-to-End Application | 9 |
| 15 | Cloud | Module 19 - Cloud Computing | 7 |
| 16 | Wireless & IoT | Module 16 & 18 - Hacking Wireless Networks / IoT & OT | 4 |

## Suggested Learning Path

1. **Foundations:** Networking & Protocols → Web Fundamentals
2. **Information gathering and scanning:** Recon & OSINT → Scanning (Nmap) → Vulnerability Assessment
3. **Web:** Web Hacking & OWASP → Burp Suite → SQL Injection
4. **Exploitation:** Metasploit → Privilege Escalation
5. **Defense and analysis:** Packet Analysis & IDS → Malware & RE → Cryptography
6. **End-to-end practice:** CTF & Practice Machines
7. **Additional topics:** Cloud → Wireless & IoT


---


## 01. Reconnaissance & OSINT

**CEH Module:** Module 02 - Footprinting and Reconnaissance  
**Labs:** 7

The first phase of any engagement: gathering information about the target, either passively or through direct interaction, using OSINT techniques, Google Dorks, and Shodan.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Passive Reconnaissance](https://tryhackme.com/room/passiverecon) | TryHackMe |
| 2 | [Active Reconnaissance](https://tryhackme.com/room/activerecon) | TryHackMe |
| 3 | [Shodan.io](https://tryhackme.com/room/shodan) | TryHackMe |
| 4 | [Google Dorking](https://tryhackme.com/room/googledorking) | TryHackMe |
| 5 | [Web OSINT](https://tryhackme.com/room/webosint) | TryHackMe |
| 6 | [Searchlight OSINT](https://tryhackme.com/room/searchlightosint) | TryHackMe |
| 7 | [Red Team Recon](https://tryhackme.com/room/redteamrecon) | TryHackMe |


## 02. Scanning & Enumeration (Nmap)

**CEH Module:** Module 03 & 04 - Scanning Networks / Enumeration  
**Labs:** 6

Discovering live hosts, scanning ports and services, and going deeper with Nmap and RustScan.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Nmap: Live Host Discovery](https://tryhackme.com/room/nmap01) | TryHackMe |
| 2 | [Nmap: Basic Port Scans](https://tryhackme.com/room/nmap02) | TryHackMe |
| 3 | [Nmap: Advanced Port Scans](https://tryhackme.com/room/nmap03) | TryHackMe |
| 4 | [Further Nmap](https://tryhackme.com/room/furthernmap) | TryHackMe |
| 5 | [Nmap](https://tryhackme.com/room/nmap) | TryHackMe |
| 6 | [RustScan](https://tryhackme.com/room/rustscan) | TryHackMe |


## 03. Vulnerability Assessment

**CEH Module:** Module 05 - Vulnerability Analysis  
**Labs:** 3

Automated vulnerability scanning with tools such as OpenVAS and Nessus, and how to interpret their results.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Vulnerability Scanner Overview](https://tryhackme.com/room/vulnerabilityscanneroverview) | TryHackMe |
| 2 | [OpenVAS](https://tryhackme.com/room/openvas) | TryHackMe |
| 3 | [Nessus](https://tryhackme.com/room/rpnessusredux) | TryHackMe |


## 04. Networking & Protocols

**CEH Module:** Foundation - Networking Fundamentals  
**Labs:** 6

The foundation you need before attempting any attack: networking concepts, core protocols, and network security.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Networking Concepts](https://tryhackme.com/room/networkingconcepts) | TryHackMe |
| 2 | [Networking Essentials](https://tryhackme.com/room/networkingessentials) | TryHackMe |
| 3 | [Networking Core Protocols](https://tryhackme.com/room/networkingcoreprotocols) | TryHackMe |
| 4 | [Network Security Protocols](https://tryhackme.com/room/networksecurityprotocols) | TryHackMe |
| 5 | [Network Security Essentials](https://tryhackme.com/room/networksecurityessentials) | TryHackMe |
| 6 | [Layer 2](https://tryhackme.com/room/layer2) | TryHackMe |


## 05. Web Fundamentals

**CEH Module:** Foundation - Web Fundamentals  
**Labs:** 8

How websites actually work: HTTP, DNS, and JavaScript. Understand the technology before you attack it.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Web Fundamentals](https://tryhackme.com/room/webfundamentals) | TryHackMe |
| 2 | [Web Application Basics](https://tryhackme.com/room/webapplicationbasics) | TryHackMe |
| 3 | [Web App Security 101](https://tryhackme.com/room/webappsec101) | TryHackMe |
| 4 | [JavaScript Essentials](https://tryhackme.com/room/javascriptessentials) | TryHackMe |
| 5 | [How Websites Work](https://tryhackme.com/room/howwebsiteswork) | TryHackMe |
| 6 | [HTTP in Detail](https://tryhackme.com/room/httpindetail) | TryHackMe |
| 7 | [DNS in Detail](https://tryhackme.com/room/dnsindetail) | TryHackMe |
| 8 | [Putting It All Together](https://tryhackme.com/room/puttingitalltogether) | TryHackMe |


## 06. Web Hacking & OWASP

**CEH Module:** Module 13 & 14 - Hacking Web Servers / Web Applications  
**Labs:** 8

Hands-on practice with the OWASP Top 10: content discovery, authentication bypass, file upload flaws, and command injection.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [OWASP Top 10 - 2021](https://tryhackme.com/room/owasptop102021) | TryHackMe |
| 2 | [OWASP Juice Shop](https://tryhackme.com/room/owaspjuiceshop) | TryHackMe |
| 3 | [Walking An Application](https://tryhackme.com/room/walkinganapplication) | TryHackMe |
| 4 | [Content Discovery](https://tryhackme.com/room/contentdiscovery) | TryHackMe |
| 5 | [Authentication Bypass](https://tryhackme.com/room/authenticationbypass) | TryHackMe |
| 6 | [Subdomain Enumeration](https://tryhackme.com/room/subdomainenumeration) | TryHackMe |
| 7 | [OS Command Injection](https://tryhackme.com/room/oscommandinjection) | TryHackMe |
| 8 | [Upload Vulnerabilities](https://tryhackme.com/room/uploadvulns) | TryHackMe |


## 07. SQL Injection

**CEH Module:** Module 15 - SQL Injection  
**Labs:** 24

From the basics to Blind, Out-of-Band, and NoSQL injection. This section is split between TryHackMe and the PortSwigger Web Security Academy. Start with TryHackMe to build the foundation, then work through PortSwigger in order.


### TryHackMe

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [SQL Fundamentals](https://tryhackme.com/room/sqlfundamentals) | TryHackMe |
| 2 | [Advanced SQL Injection](https://tryhackme.com/room/advancedsqlinjection) | TryHackMe |
| 3 | [SQL Injection Lab](https://tryhackme.com/room/sqlinjectionlm) | TryHackMe |


### PortSwigger - Basic

| # | Lab | Level |
|:-:|---|:-:|
| 1 | [SQL injection vulnerability in WHERE clause allowing retrieval of hidden data](https://portswigger.net/web-security/sql-injection/lab-retrieve-hidden-data) | Apprentice |
| 2 | [SQL injection vulnerability allowing login bypass](https://portswigger.net/web-security/sql-injection/lab-login-bypass) | Apprentice |


### PortSwigger - Examining the Database

| # | Lab | Level |
|:-:|---|:-:|
| 1 | [Querying the database type and version on Oracle](https://portswigger.net/web-security/sql-injection/examining-the-database/lab-querying-database-version-oracle) | Practitioner |
| 2 | [Querying the database type and version on MySQL and Microsoft](https://portswigger.net/web-security/sql-injection/examining-the-database/lab-querying-database-version-mysql-microsoft) | Practitioner |
| 3 | [Listing the database contents on non-Oracle databases](https://portswigger.net/web-security/sql-injection/examining-the-database/lab-listing-database-contents-non-oracle) | Practitioner |
| 4 | [Listing the database contents on Oracle](https://portswigger.net/web-security/sql-injection/examining-the-database/lab-listing-database-contents-oracle) | Practitioner |


### PortSwigger - UNION Attacks

| # | Lab | Level |
|:-:|---|:-:|
| 1 | [UNION attack: determining the number of columns](https://portswigger.net/web-security/sql-injection/union-attacks/lab-determine-number-of-columns) | Practitioner |
| 2 | [UNION attack: finding a column containing text](https://portswigger.net/web-security/sql-injection/union-attacks/lab-find-column-containing-text) | Practitioner |
| 3 | [UNION attack: retrieving data from other tables](https://portswigger.net/web-security/sql-injection/union-attacks/lab-retrieve-data-from-other-tables) | Practitioner |
| 4 | [UNION attack: retrieving multiple values in a single column](https://portswigger.net/web-security/sql-injection/union-attacks/lab-retrieve-multiple-values-in-single-column) | Practitioner |


### PortSwigger - Blind SQL Injection

| # | Lab | Level |
|:-:|---|:-:|
| 1 | [Blind SQLi with conditional responses](https://portswigger.net/web-security/sql-injection/blind/lab-conditional-responses) | Practitioner |
| 2 | [Blind SQLi with conditional errors](https://portswigger.net/web-security/sql-injection/blind/lab-conditional-errors) | Practitioner |
| 3 | [Visible error-based SQLi](https://portswigger.net/web-security/sql-injection/blind/lab-sql-injection-visible-error-based) | Practitioner |
| 4 | [Blind SQLi with time delays and information retrieval](https://portswigger.net/web-security/sql-injection/blind/lab-time-delays-info-retrieval) | Practitioner |
| 5 | [Blind SQLi with out-of-band interaction](https://portswigger.net/web-security/sql-injection/blind/lab-out-of-band) | Practitioner |
| 6 | [Blind SQLi with out-of-band data exfiltration](https://portswigger.net/web-security/sql-injection/blind/lab-out-of-band-data-exfiltration) | Practitioner |


### PortSwigger - Filter Bypass

| # | Lab | Level |
|:-:|---|:-:|
| 1 | [SQLi with filter bypass via XML encoding](https://portswigger.net/web-security/sql-injection/lab-sql-injection-with-filter-bypass-via-xml-encoding) | Practitioner |


### PortSwigger - NoSQL Injection

| # | Lab | Level |
|:-:|---|:-:|
| 1 | [Detecting NoSQL injection](https://portswigger.net/web-security/nosql-injection/lab-nosql-injection-detection) | Apprentice |
| 2 | [Exploiting NoSQL operator injection to bypass authentication](https://portswigger.net/web-security/nosql-injection/lab-nosql-injection-bypass-authentication) | Practitioner |
| 3 | [Exploiting NoSQL injection to extract data](https://portswigger.net/web-security/nosql-injection/lab-nosql-injection-extract-data) | Practitioner |
| 4 | [Exploiting NoSQL operator injection to extract unknown fields](https://portswigger.net/web-security/nosql-injection/lab-nosql-injection-extract-unknown-fields) | Expert |


## 08. Burp Suite

**CEH Module:** Module 14 - Hacking Web Applications (Tooling)  
**Labs:** 5

The core tool for any web pentester: Proxy, Repeater, Intruder, and extensions.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Burp Suite: The Basics](https://tryhackme.com/room/burpsuitebasics) | TryHackMe |
| 2 | [Burp Suite: Repeater](https://tryhackme.com/room/burpsuiterepeater) | TryHackMe |
| 3 | [Burp Suite: Intruder](https://tryhackme.com/room/burpsuiteintruder) | TryHackMe |
| 4 | [Burp Suite: Other Modules](https://tryhackme.com/room/burpsuiteom) | TryHackMe |
| 5 | [Burp Suite: Extensions](https://tryhackme.com/room/burpsuiteextensions) | TryHackMe |


## 09. Exploitation & Metasploit

**CEH Module:** Module 06 - System Hacking  
**Labs:** 3

Exploiting vulnerabilities with Metasploit and working with Meterpreter post-exploitation.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Metasploit: Introduction](https://tryhackme.com/room/metasploitintro) | TryHackMe |
| 2 | [Metasploit: Exploitation](https://tryhackme.com/room/metasploitexploitation) | TryHackMe |
| 3 | [Metasploit: Meterpreter](https://tryhackme.com/room/meterpreter) | TryHackMe |


## 10. Privilege Escalation

**CEH Module:** Module 06 - System Hacking  
**Labs:** 6

Escalating privileges on Linux and Windows, bypassing UAC, and establishing persistence.


### Linux

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Linux Privilege Escalation](https://tryhackme.com/room/linprivesc) | TryHackMe |
| 2 | [Common Linux Privesc](https://tryhackme.com/room/commonlinuxprivesc) | TryHackMe |
| 3 | [Linux PrivEsc](https://tryhackme.com/room/linuxprivesc) | TryHackMe |


### Windows

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Windows PrivEsc](https://tryhackme.com/room/windowsprivesc20) | TryHackMe |
| 2 | [Bypassing UAC](https://tryhackme.com/room/bypassinguac) | TryHackMe |
| 3 | [Windows Local Persistence](https://tryhackme.com/room/windowslocalpersistence) | TryHackMe |


## 11. Packet Analysis & IDS

**CEH Module:** Module 08 & 12 - Sniffing / Evading IDS, Firewalls & Honeypots  
**Labs:** 10

Traffic analysis with Wireshark, Tcpdump, and TShark, plus intrusion detection systems such as Snort and Zeek and how they are evaded.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Wireshark 101](https://tryhackme.com/room/wireshark) | TryHackMe |
| 2 | [Wireshark: The Basics](https://tryhackme.com/room/wiresharkthebasics) | TryHackMe |
| 3 | [Wireshark: Packet Operations](https://tryhackme.com/room/wiresharkpacketoperations) | TryHackMe |
| 4 | [Tcpdump](https://tryhackme.com/room/tcpdump) | TryHackMe |
| 5 | [TShark: The Basics](https://tryhackme.com/room/tsharkthebasics) | TryHackMe |
| 6 | [Snort](https://tryhackme.com/room/snort) | TryHackMe |
| 7 | [Snort Challenge 1](https://tryhackme.com/room/snortchallenges1) | TryHackMe |
| 8 | [IDS Fundamentals](https://tryhackme.com/room/idsfundamentals) | TryHackMe |
| 9 | [IDS Evasion](https://tryhackme.com/room/idsevasion) | TryHackMe |
| 10 | [Zeek](https://tryhackme.com/room/zeekbro) | TryHackMe |


## 12. Malware & Reverse Engineering

**CEH Module:** Module 07 - Malware Threats  
**Labs:** 10

From the history of malware to static and dynamic analysis and anti-reverse-engineering techniques.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [History of Malware](https://tryhackme.com/room/historyofmalware) | TryHackMe |
| 2 | [Malware Introductory](https://tryhackme.com/room/malmalintroductory) | TryHackMe |
| 3 | [Basic Malware RE](https://tryhackme.com/room/basicmalwarere) | TryHackMe |
| 4 | [REMnux v2](https://tryhackme.com/room/malremnuxv2) | TryHackMe |
| 5 | [Basic Dynamic Analysis](https://tryhackme.com/room/basicdynamicanalysis) | TryHackMe |
| 6 | [Advanced Dynamic Analysis](https://tryhackme.com/room/advanceddynamicanalysis) | TryHackMe |
| 7 | [Static Analysis](https://tryhackme.com/room/staticanalysis1) | TryHackMe |
| 8 | [Advanced Static Analysis](https://tryhackme.com/room/advancedstaticanalysis) | TryHackMe |
| 9 | [Anti-Reverse Engineering](https://tryhackme.com/room/antireverseengineering) | TryHackMe |
| 10 | [MalDoc](https://tryhackme.com/room/maldoc) | TryHackMe |


## 13. Cryptography

**CEH Module:** Module 20 - Cryptography  
**Labs:** 4

Cryptography fundamentals, common encryption types, and cracking hashes.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Cryptography for Dummies](https://tryhackme.com/room/cryptographyfordummies) | TryHackMe |
| 2 | [Encryption - Crypto 101](https://tryhackme.com/room/encryptioncrypto101) | TryHackMe |
| 3 | [Crack The Hash](https://tryhackme.com/room/crackthehash) | TryHackMe |
| 4 | [Crack The Hash Level 2](https://tryhackme.com/room/crackthehashlevel2) | TryHackMe |


## 14. CTF & Practice Machines

**CEH Module:** Practice - End-to-End Application  
**Labs:** 9

Full machines where you apply everything you have learned: recon, exploitation, and privilege escalation. Best tackled after finishing the previous sections.

| # | Machine | OS | Difficulty | Platform |
|:-:|---|:-:|:-:|:-:|
| 1 | [Vulnversity](https://tryhackme.com/room/vulnversity) | Linux | Easy | TryHackMe |
| 2 | [Basic Pentesting](https://tryhackme.com/room/basicpentestingjt) | Linux | Easy | TryHackMe |
| 3 | [Steel Mountain](https://tryhackme.com/room/steelmountain) | Windows | Easy | TryHackMe |
| 4 | [Kenobi](https://tryhackme.com/room/kenobi) | Linux | Easy | TryHackMe |
| 5 | [RootMe](https://tryhackme.com/room/rootme) | Linux | Easy | TryHackMe |
| 6 | [Pickle Rick](https://tryhackme.com/room/picklerick) | Linux | Easy | TryHackMe |
| 7 | [Simple CTF](https://tryhackme.com/room/simplectf) | Linux | Easy | TryHackMe |
| 8 | [Lazy Admin](https://tryhackme.com/room/lazyadmin) | Linux | Easy | TryHackMe |
| 9 | [Ignite](https://tryhackme.com/room/ignite) | Linux | Easy | TryHackMe |


## 15. Cloud

**CEH Module:** Module 19 - Cloud Computing  
**Labs:** 7

Cloud security fundamentals, AWS, Infrastructure as Code, and VPC attacks.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Introduction to Cloud Security](https://tryhackme.com/room/introductiontocloudsecurityc6) | TryHackMe |
| 2 | [Cloud 101 (AWS)](https://tryhackme.com/room/cloud101aws) | TryHackMe |
| 3 | [Cloud-based IaC](https://tryhackme.com/room/cloudbasediac) | TryHackMe |
| 4 | [Azure DevSecOps](https://tryhackme.com/room/azuredevsecops) | TryHackMe |
| 5 | [Attacking and Defending VPCs](https://tryhackme.com/room/attackingdefendingvpcs) | TryHackMe |
| 6 | [Eyes Wide Shut](https://tryhackme.com/room/eyeswideshut) | TryHackMe |
| 7 | [Can You GA](https://tryhackme.com/room/canyouga) | TryHackMe |


## 16. Wireless & IoT

**CEH Module:** Module 16 & 18 - Hacking Wireless Networks / IoT & OT  
**Labs:** 4

Attacking wireless networks, printers, and IoT devices.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [WiFi Hacking 101](https://tryhackme.com/room/wifihacking101) | TryHackMe |
| 2 | [Printer Hacking 101](https://tryhackme.com/room/printerhacking101) | TryHackMe |
| 3 | [IoT Intro](https://tryhackme.com/room/iotintro) | TryHackMe |
| 4 | [Royal Router](https://tryhackme.com/room/hfb1royalrouter) | TryHackMe |


---

## Tips for Getting the Most Out of These Labs

- **Take notes** on every lab: the tool, the command, and the idea behind it, so you can come back to them later.
- **Avoid walkthroughs** until you have genuinely tried on your own.
- **Repeat labs** a few days later without looking at the solution. This is what makes the knowledge stick.
- **Map each lab to its CEH module** to reinforce your exam preparation.

> These labs are for learning and practice in authorized environments only. Never test any technique on systems you do not own or have explicit permission to test.
