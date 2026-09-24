---
title: "OSCP+ Prep: Full Labs"
published: 2026-09-19
description: "A complete OSCP+ preparation roadmap: %d TryHackMe labs across 20 course modules, plus a bonus section of additional free platforms (Hack The Box, OverTheWire, PentesterLab, CyberDefenders, VulnHub, picoCTF, WebGoat, DVWA) to round out your practice."
tags: [OSCP, Labs, TryHackMe, Hack The Box, OverTheWire, Penetration Testing, Active Directory, Privilege Escalation, Web Security, Password Attacks]
category: Labs
draft: false
---

## Overview

This is the complete lab roadmap for **OSCP+ preparation** on this blog, in two parts:

- **Part 1 - Course Modules:** 171 TryHackMe labs across 20 numbered modules, following an OSCP+ preparation course from an introduction to cybersecurity through Active Directory, cloud security, and real-world capstone scenarios.
- **Part 2 - Bonus Platforms:** a curated set of additional free platforms and labs worth adding once you have worked through the modules, including Hack The Box's Starting Point track (25 machines), the OverTheWire wargames (10 wargames), PentesterLab, CyberDefenders, VulnHub, picoCTF, local vulnerable apps (WebGoat, DVWA), and 77 additional PortSwigger Web Security Academy labs covering topics the module-based roadmap doesn't reach (access control, CSRF, file upload, business logic, deserialization, and more).

Everything here was put together to be worked through in order: finish the modules first, then use Part 2 to keep practicing without the guardrails of a guided room.

This roadmap was prepared by **Amr Abd El-Hamide** for **Netriders Academy**. The bonus platforms in Part 2 are independent, community-run resources, not part of the Netriders Academy course material.

| | |
|---|---|
| **Total course labs (Part 1)** | 171 |
| **Bonus platforms (Part 2)** | 9 (including 77 extra PortSwigger labs) |
| **Platform (Part 1)** | TryHackMe |
| **Modules covered** | 20 |

> **Note:** modules are numbered as in the original course material, so the numbering has gaps (modules 2 and 20-22 were not provided and are not covered here). A handful of rooms appear in more than one module because they are relevant to more than one topic; each appearance is counted. Free-tier availability on every platform below can change over time, so if you find something locked or moved, let me know and I will update the post.

# Part 1: Course Modules

## Module Map

| Module | Title | Focus | Labs |
|:-:|---|---|:-:|
| 01 | Introduction to Cybersecurity | Security principles and the pentesting mindset | 5 |
| 03 | Report Writing for Penetration Testers | Communicating findings clearly and professionally | 3 |
| 04 | Information Gathering | Scoping, reconnaissance, and Nmap | 20 |
| 05 | Vulnerability Scanning | Identifying and prioritizing vulnerabilities | 8 |
| 06 | Introduction to Web Applications | How web applications are built and how they behave | 14 |
| 07 | Common Web Application Attacks | Path traversal, file inclusion, upload flaws, and command injection | 10 |
| 08 | SQL Injection Attacks | Manual and automated SQL and NoSQL injection | 12 |
| 09 | Client-Side Attacks | Social engineering, phishing, and mobile security | 11 |
| 10 | Locating Public Exploits | OSINT and search-driven exploit discovery | 3 |
| 11 | Fixing Exploits | Adapting public exploits and understanding memory internals | 12 |
| 12 | Antivirus Evasion | AV, EDR, and XDR evasion techniques | 11 |
| 13 | Password Attacks | Hashing, cracking, and credential harvesting | 13 |
| 14 | Windows Privilege Escalation | From standard user to SYSTEM | 9 |
| 15 | Linux Privilege Escalation | From standard user to root | 7 |
| 16 | Port Redirection and SSH Tunneling | Pivoting traffic through compromised hosts | 4 |
| 17 | Tunneling Through Deep Packet Inspection | Traffic analysis and evading inspection | 8 |
| 18 | Metasploit Framework | Exploitation and post-exploitation with Metasploit | 8 |
| 19 | Active Directory Introduction and Enumeration | AD authentication, breaching, and enumeration | 7 |
| 23 | AWS: Attacking Cloud Infrastructure | Cloud security fundamentals and common pitfalls | 3 |
| 24 | Real World Scenarios | Capstone-style, end-to-end engagements | 3 |

## Suggested Learning Path

Work through the modules in numerical order; the course is built so each one relies on the skills from the ones before it.

1. **Getting started:** Module 1 (Introduction) -> Module 3 (Report Writing) -> Module 4 (Information Gathering) -> Module 5 (Vulnerability Scanning)
2. **Web applications:** Module 6 -> Module 7 -> Module 8 (SQL Injection) -> Module 9 (Client-Side Attacks)
3. **Exploitation:** Module 10 (Locating Public Exploits) -> Module 11 (Fixing Exploits) -> Module 12 (Antivirus Evasion)
4. **Post-exploitation:** Module 13 (Password Attacks) -> Module 14 (Windows PrivEsc) -> Module 15 (Linux PrivEsc)
5. **Network and tooling:** Module 16 (Port Redirection & Tunneling) -> Module 17 (Deep Packet Inspection) -> Module 18 (Metasploit)
6. **Active Directory and beyond:** Module 19 (AD Introduction) -> Module 23 (AWS Cloud) -> Module 24 (Real World Scenarios)


---


## Module 01 - Introduction to Cybersecurity

**Focus:** Security principles and the pentesting mindset  
**Labs:** 5

The starting point of the course: core security principles, an overview of careers in the field, an introduction to offensive security, effective searching, and a first dive into what penetration testing actually involves.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Security Principles](https://tryhackme.com/room/securityprinciples) | TryHackMe |
| 2 | [Careers in Cyber](https://tryhackme.com/room/careersincyber) | TryHackMe |
| 3 | [Offensive Security Intro](https://tryhackme.com/room/offensivesecurityintro) | TryHackMe |
| 4 | [Search Skills](https://tryhackme.com/room/searchskills) | TryHackMe |
| 5 | [Dive into Pentesting](https://tryhackme.com/room/diveintopentesting) | TryHackMe |


## Module 03 - Report Writing for Penetration Testers

**Focus:** Communicating findings clearly and professionally  
**Labs:** 3

A skill that separates a good pentester from a great one: writing clear, actionable pentest reports, reporting alerts at a SOC L1 level, and retesting to confirm that findings have actually been fixed.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Writing Pentest Reports](https://tryhackme.com/room/writingpentestreports) | TryHackMe |
| 2 | [SOC L1 Alert Reporting](https://tryhackme.com/room/socl1alertreporting) | TryHackMe |
| 3 | [Retesting](https://tryhackme.com/room/retesting) | TryHackMe |


## Module 04 - Information Gathering

**Focus:** Scoping, reconnaissance, and Nmap  
**Labs:** 20

How every engagement begins: security principles and pentesting fundamentals, planning and scoping, red team engagements and infrastructure, passive and active reconnaissance, a full Nmap track, and a first look at reconnaissance against AI systems.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Principles of Security](https://tryhackme.com/room/principlesofsecurity) | TryHackMe |
| 2 | [Pentesting Fundamentals](https://tryhackme.com/room/pentestingfundamentals) | TryHackMe |
| 3 | [Dive into Pentesting](https://tryhackme.com/room/diveintopentesting) | TryHackMe |
| 4 | [Penetration Testing Frameworks](https://tryhackme.com/room/penetrationtestingframeworks) | TryHackMe |
| 5 | [Planning and Scoping](https://tryhackme.com/room/planningandscoping) | TryHackMe |
| 6 | [Red Team Engagements](https://tryhackme.com/room/redteamengagements) | TryHackMe |
| 7 | [Guided Pentest: Infrastructure](https://tryhackme.com/room/guidedpentestinfrastructure) | TryHackMe |
| 8 | [Red Team Recon](https://tryhackme.com/room/redteamrecon) | TryHackMe |
| 9 | [Passive Reconnaissance](https://tryhackme.com/room/passiverecon) | TryHackMe |
| 10 | [Active Reconnaissance](https://tryhackme.com/room/activerecon) | TryHackMe |
| 11 | [Nmap: Live Host Discovery](https://tryhackme.com/room/nmap01) | TryHackMe |
| 12 | [Nmap: Basic Port Scans](https://tryhackme.com/room/nmap02) | TryHackMe |
| 13 | [Nmap: Advanced Port Scans](https://tryhackme.com/room/nmap03) | TryHackMe |
| 14 | [Further Nmap](https://tryhackme.com/room/furthernmap) | TryHackMe |
| 15 | [Nmap](https://tryhackme.com/room/nmap) | TryHackMe |
| 16 | [GREP](https://tryhackme.com/room/greprtp) | TryHackMe |
| 17 | [You Got Mail](https://tryhackme.com/room/yougotmail) | TryHackMe |
| 18 | [Vulnversity](https://tryhackme.com/room/vulnversity) | TryHackMe |
| 19 | [AI System Reconnaissance](https://tryhackme.com/room/aisystemreconnaissance) | TryHackMe |
| 20 | [AI Threat Modelling](https://tryhackme.com/room/aithreatmodelling) | TryHackMe |


## Module 05 - Vulnerability Scanning

**Focus:** Identifying and prioritizing vulnerabilities  
**Labs:** 8

Turning recon into a target list: understanding vulnerabilities and how scanners work, vulnerability management, network discovery and detection, scanning with OpenVAS and Nessus, and a first pass at exploitation with Metasploit.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Vulnerabilities 101](https://tryhackme.com/room/vulnerabilities101) | TryHackMe |
| 2 | [Vulnerability Scanner Overview](https://tryhackme.com/room/vulnerabilityscanneroverview) | TryHackMe |
| 3 | [Vulnerability Management](https://tryhackme.com/room/vulnerabilitymanagementkj) | TryHackMe |
| 4 | [Network Discovery & Detection](https://tryhackme.com/room/networkdiscoverydetection) | TryHackMe |
| 5 | [OpenVAS](https://tryhackme.com/room/openvas) | TryHackMe |
| 6 | [Nessus](https://tryhackme.com/room/rpnessusredux) | TryHackMe |
| 7 | [Metasploit: Exploitation](https://tryhackme.com/room/metasploitexploitation) | TryHackMe |
| 8 | [Support](https://tryhackme.com/room/support) | TryHackMe |


## Module 06 - Introduction to Web Applications

**Focus:** How web applications are built and how they behave  
**Labs:** 14

The foundation for every web attack module that follows: how websites work, HTTP and DNS in detail, protocols and servers, JavaScript essentials, session management, walking an application methodically, content discovery, subdomain enumeration, a first look at XSS, and web server attacks.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [How Websites Work](https://tryhackme.com/room/howwebsiteswork) | TryHackMe |
| 2 | [HTTP in Detail](https://tryhackme.com/room/httpindetail) | TryHackMe |
| 3 | [Protocols and Servers](https://tryhackme.com/room/protocolsandservers) | TryHackMe |
| 4 | [DNS in Detail](https://tryhackme.com/room/dnsindetail) | TryHackMe |
| 5 | [Web Application Basics](https://tryhackme.com/room/webapplicationbasics) | TryHackMe |
| 6 | [Session Management](https://tryhackme.com/room/sessionmanagement) | TryHackMe |
| 7 | [JavaScript Essentials](https://tryhackme.com/room/javascriptessentials) | TryHackMe |
| 8 | [Walking An Application](https://tryhackme.com/room/walkinganapplication) | TryHackMe |
| 9 | [Walking An Application (Legacy)](https://tryhackme.com/room/walkinganapp) | TryHackMe |
| 10 | [Content Discovery](https://tryhackme.com/room/contentdiscovery) | TryHackMe |
| 11 | [Subdomain Enumeration](https://tryhackme.com/room/subdomainenumeration) | TryHackMe |
| 12 | [XSS](https://tryhackme.com/room/xss) | TryHackMe |
| 13 | [Web Server Attacks](https://tryhackme.com/room/webserverattacks) | TryHackMe |
| 14 | [Web Server Attacks 2](https://tryhackme.com/room/webserverattacks2) | TryHackMe |


## Module 07 - Common Web Application Attacks

**Focus:** Path traversal, file inclusion, upload flaws, and command injection  
**Labs:** 10

Hands-on exploitation of common web flaws, starting with the Mr Robot CTF and moving through file path traversal, file inclusion, upload vulnerabilities, OS command injection, and two CTF-style boxes to put it all together.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Mr Robot CTF](https://tryhackme.com/room/mrrobot) | TryHackMe |
| 2 | [File Path Traversal](https://tryhackme.com/room/filepathtraversal) | TryHackMe |
| 3 | [File Inclusion](https://tryhackme.com/room/fileinc) | TryHackMe |
| 4 | [Upload Vulnerabilities](https://tryhackme.com/room/uploadvulns) | TryHackMe |
| 5 | [OS Command Injection](https://tryhackme.com/room/oscommandinjection) | TryHackMe |
| 6 | [Injectics](https://tryhackme.com/room/injectics) | TryHackMe |
| 7 | [Modern Web Stacks](https://tryhackme.com/room/modernwebstacks) | TryHackMe |
| 8 | [Daily Bugle](https://tryhackme.com/room/dailybugle) | TryHackMe |
| 9 | [Recruit Web Challenge](https://tryhackme.com/room/recruitwebchallenge) | TryHackMe |
| 10 | [Hammer](https://tryhackme.com/room/hammer) | TryHackMe |


## Module 08 - SQL Injection Attacks

**Focus:** Manual and automated SQL and NoSQL injection  
**Labs:** 12

A dedicated SQL injection track: database and SQL basics, manual injection fundamentals and practice, automating attacks with SQLMap, a look at NoSQL injection, and several CTF-style rooms to reinforce the technique.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Database and SQL Basics](https://tryhackme.com/room/databasesqlbasics) | TryHackMe |
| 2 | [SQL Fundamentals](https://tryhackme.com/room/sqlfundamentals) | TryHackMe |
| 3 | [SQL Injection Lab](https://tryhackme.com/room/sqlinjectionlm) | TryHackMe |
| 4 | [SQLi Lab](https://tryhackme.com/room/sqlilab) | TryHackMe |
| 5 | [Advanced SQL Injection](https://tryhackme.com/room/advancedsqlinjection) | TryHackMe |
| 6 | [SQLMap: The Basics](https://tryhackme.com/room/sqlmapthebasics) | TryHackMe |
| 7 | [SQLMap](https://tryhackme.com/room/sqlmap) | TryHackMe |
| 8 | [NoSQL Injection](https://tryhackme.com/room/nosqlinjectiontutorial) | TryHackMe |
| 9 | [Avengers Blog](https://tryhackme.com/room/avengers) | TryHackMe |
| 10 | [SQHell](https://tryhackme.com/room/sqhell) | TryHackMe |
| 11 | [Sequel Dump](https://tryhackme.com/room/hfb1sequeldump) | TryHackMe |
| 12 | [Prioritise](https://tryhackme.com/room/prioritise) | TryHackMe |


## Module 09 - Client-Side Attacks

**Focus:** Social engineering, phishing, and mobile security  
**Labs:** 11

Attacks that target the human rather than the machine: OSINT and search skills, understanding human attack vectors, a full phishing track including detection and simulated campaigns, mobile security, and building effective wordlists.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Search Skills](https://tryhackme.com/room/searchskills) | TryHackMe |
| 2 | [SomeSINT](https://tryhackme.com/room/somesint) | TryHackMe |
| 3 | [Human Attack Vectors](https://tryhackme.com/room/humansattackvectors) | TryHackMe |
| 4 | [Phishing Emails 1](https://tryhackme.com/room/phishingemails1tryoe) | TryHackMe |
| 5 | [Phishing (Advent of Cyber 2025)](https://tryhackme.com/room/phishing-aoc2025-h2tkye9fzU) | TryHackMe |
| 6 | [Phishing](https://tryhackme.com/room/phishingyl) | TryHackMe |
| 7 | [Spotting Phishing (Advent of Cyber 2025)](https://tryhackme.com/room/spottingphishing-aoc2025-r2g4f6s8l0) | TryHackMe |
| 8 | [Phishing: HiddenEye](https://tryhackme.com/room/phishinghiddeneye) | TryHackMe |
| 9 | [Silent Monitor](https://tryhackme.com/room/silent-monitor) | TryHackMe |
| 10 | [Mobile Security](https://tryhackme.com/room/mobilesecurity) | TryHackMe |
| 11 | [Introduction to Wordlists](https://tryhackme.com/room/introductiontowordlists) | TryHackMe |


## Module 10 - Locating Public Exploits

**Focus:** OSINT and search-driven exploit discovery  
**Labs:** 3

Finding out what has already been discovered about a target: Google Dorking, refining your search skills, and using Shodan to locate exposed systems and known vulnerabilities.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Google Dorking](https://tryhackme.com/room/googledorking) | TryHackMe |
| 2 | [Search Skills](https://tryhackme.com/room/searchskills) | TryHackMe |
| 3 | [Shodan.io](https://tryhackme.com/room/shodan) | TryHackMe |


## Module 11 - Fixing Exploits

**Focus:** Adapting public exploits and understanding memory internals  
**Labs:** 12

Public exploits rarely work out of the box. This module covers the internals you need to fix them: x86-64 architecture, Windows internals and memory, buffer overflow fundamentals, several real CVEs to practice against, and runtime detection evasion.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [x86-64 Architecture](https://tryhackme.com/room/x8664arch) | TryHackMe |
| 2 | [Windows Internals](https://tryhackme.com/room/windowsinternals) | TryHackMe |
| 3 | [Windows Memory and Processes](https://tryhackme.com/room/windowsmemoryandprocs) | TryHackMe |
| 4 | [Buffer Overflow Prep](https://tryhackme.com/room/bof1) | TryHackMe |
| 5 | [Sudo Vulnerabilities: Buffer Overflow](https://tryhackme.com/room/sudovulnsbof) | TryHackMe |
| 6 | [Tomcat (CVE-2024-50379)](https://tryhackme.com/room/tomcatcve202450379) | TryHackMe |
| 7 | [PaperCut](https://tryhackme.com/room/papercut) | TryHackMe |
| 8 | [React2Shell (CVE-2025-55182)](https://tryhackme.com/room/react2shellcve202555182) | TryHackMe |
| 9 | [Critical](https://tryhackme.com/room/critical) | TryHackMe |
| 10 | [No Name CTF](https://tryhackme.com/room/nonamectf) | TryHackMe |
| 11 | [Runtime Detection Evasion](https://tryhackme.com/room/runtimedetectionevasion) | TryHackMe |
| 12 | [Abusing Windows Internals](https://tryhackme.com/room/abusingwindowsinternals) | TryHackMe |


## Module 12 - Antivirus Evasion

**Focus:** AV, EDR, and XDR evasion techniques  
**Labs:** 11

Getting payloads past modern defenses: how antivirus, EDR, and XDR work, malware classification, obfuscation principles, PowerShell for pentesters, and hands-on signature and sandbox evasion.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Intro to Antivirus](https://tryhackme.com/room/introtoav) | TryHackMe |
| 2 | [Introduction to EDRs](https://tryhackme.com/room/introductiontoedrs) | TryHackMe |
| 3 | [XDR Introduction](https://tryhackme.com/room/xdrintroduction) | TryHackMe |
| 4 | [Malware Classification](https://tryhackme.com/room/malwareclassification) | TryHackMe |
| 5 | [Obfuscation Principles](https://tryhackme.com/room/obfuscationprinciples) | TryHackMe |
| 6 | [PowerShell for Pentesters](https://tryhackme.com/room/powershellforpentesters) | TryHackMe |
| 7 | [Signature Evasion](https://tryhackme.com/room/signatureevasion) | TryHackMe |
| 8 | [AV Evasion: Shellcode](https://tryhackme.com/room/avevasionshellcode) | TryHackMe |
| 9 | [Bypass](https://tryhackme.com/room/bypass) | TryHackMe |
| 10 | [Bypass Disable Functions](https://tryhackme.com/room/bypassdisablefunctions) | TryHackMe |
| 11 | [Sandbox Evasion](https://tryhackme.com/room/sandboxevasion) | TryHackMe |


## Module 13 - Password Attacks

**Focus:** Hashing, cracking, and credential harvesting  
**Labs:** 13

The full password attack lifecycle: hashing fundamentals and cryptography, online and offline password attacks with Hydra and John the Ripper, cracking real hashes, exploiting HackPark, recent CVEs involving credentials, and credential harvesting.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Hashing Basics](https://tryhackme.com/room/hashingbasics) | TryHackMe |
| 2 | [Hashing - Crypto 101](https://tryhackme.com/room/hashingcrypto101) | TryHackMe |
| 3 | [Public Key Cryptography](https://tryhackme.com/room/publickeycrypto) | TryHackMe |
| 4 | [Password Attacks](https://tryhackme.com/room/passwordattacks) | TryHackMe |
| 5 | [John The Ripper: The Basics](https://tryhackme.com/room/johntheripperbasics) | TryHackMe |
| 6 | [Hydra](https://tryhackme.com/room/hydra) | TryHackMe |
| 7 | [Crack The Hash](https://tryhackme.com/room/crackthehash) | TryHackMe |
| 8 | [Crack The Hash Level 2](https://tryhackme.com/room/crackthehashlevel2) | TryHackMe |
| 9 | [HackPark](https://tryhackme.com/room/hackpark) | TryHackMe |
| 10 | [Attacks on Encrypted Files (Advent of Cyber 2025)](https://tryhackme.com/room/attacks-on-ecrypted-files-aoc2025-asdfghj123) | TryHackMe |
| 11 | [Erlang/OTP SSH (CVE-2025-32433)](https://tryhackme.com/room/erlangotpsshcve202532433) | TryHackMe |
| 12 | [Outlook NTLM Leak](https://tryhackme.com/room/outlookntlmleak) | TryHackMe |
| 13 | [Credential Harvesting](https://tryhackme.com/room/credharvesting) | TryHackMe |


## Module 14 - Windows Privilege Escalation

**Focus:** From standard user to SYSTEM  
**Labs:** 9

Escalating privileges on Windows: the command line, Windows internals and memory, a full Windows PrivEsc track, the LocalPotato technique, an arena to practice against, and establishing local persistence once you have escalated.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Windows Command Line](https://tryhackme.com/room/windowscommandline) | TryHackMe |
| 2 | [Windows Internals](https://tryhackme.com/room/windowsinternals) | TryHackMe |
| 3 | [Windows Memory and Processes](https://tryhackme.com/room/windowsmemoryandprocs) | TryHackMe |
| 4 | [Windows PrivEsc](https://tryhackme.com/room/windowsprivesc20) | TryHackMe |
| 5 | [Windows 10 PrivEsc](https://tryhackme.com/room/windows10privesc) | TryHackMe |
| 6 | [LocalPotato](https://tryhackme.com/room/localpotato) | TryHackMe |
| 7 | [Abusing Windows Internals](https://tryhackme.com/room/abusingwindowsinternals) | TryHackMe |
| 8 | [Windows PrivEsc Arena](https://tryhackme.com/room/windowsprivescarena) | TryHackMe |
| 9 | [Windows Local Persistence](https://tryhackme.com/room/windowslocalpersistence) | TryHackMe |


## Module 15 - Linux Privilege Escalation

**Focus:** From standard user to root  
**Labs:** 7

The Linux side of privilege escalation: shell fundamentals, process analysis, enumeration for privesc, a full Linux PrivEsc track, and two CTF-style boxes to apply the technique end to end.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Intro to Shells](https://tryhackme.com/room/introtoshells) | TryHackMe |
| 2 | [Linux Process Analysis](https://tryhackme.com/room/linuxprocessanalysis) | TryHackMe |
| 3 | [Linux PrivEsc Enumeration](https://tryhackme.com/room/linprivenum) | TryHackMe |
| 4 | [Linux Privilege Escalation](https://tryhackme.com/room/linprivesc) | TryHackMe |
| 5 | [Common Linux Privesc](https://tryhackme.com/room/commonlinuxprivesc) | TryHackMe |
| 6 | [IronShade](https://tryhackme.com/room/ironshade) | TryHackMe |
| 7 | [Jump](https://tryhackme.com/room/jump) | TryHackMe |


## Module 16 - Port Redirection and SSH Tunneling

**Focus:** Pivoting traffic through compromised hosts  
**Labs:** 4

Moving traffic where you need it: data exfiltration, DNS manipulation, an introduction to command and control infrastructure, and Windows memory and network internals that underpin tunneling techniques.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Data Exfiltration](https://tryhackme.com/room/dataxexfilt) | TryHackMe |
| 2 | [DNS Manipulation](https://tryhackme.com/room/dnsmanipulation) | TryHackMe |
| 3 | [Intro to C2](https://tryhackme.com/room/introtoc2) | TryHackMe |
| 4 | [Windows Memory and Network](https://tryhackme.com/room/windowsmemoryandnetwork) | TryHackMe |


## Module 17 - Tunneling Through Deep Packet Inspection

**Focus:** Traffic analysis and evading inspection  
**Labs:** 8

Understanding what deep packet inspection sees: a full Wireshark track, TShark, packet and frame fundamentals, traffic analysis, Snort, and wireless security.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Wireshark: The Basics](https://tryhackme.com/room/wiresharkthebasics) | TryHackMe |
| 2 | [Wireshark](https://tryhackme.com/room/wireshark) | TryHackMe |
| 3 | [Wireshark: Packet Operations](https://tryhackme.com/room/wiresharkpacketoperations) | TryHackMe |
| 4 | [TShark: The Basics](https://tryhackme.com/room/tsharkthebasics) | TryHackMe |
| 5 | [Packets & Frames](https://tryhackme.com/room/packetsframes) | TryHackMe |
| 6 | [Wireshark: Traffic Analysis](https://tryhackme.com/room/wiresharktrafficanalysis) | TryHackMe |
| 7 | [Snort](https://tryhackme.com/room/snort) | TryHackMe |
| 8 | [Wireless Security](https://tryhackme.com/room/wirelesssecurity) | TryHackMe |


## Module 18 - Metasploit Framework

**Focus:** Exploitation and post-exploitation with Metasploit  
**Labs:** 8

A dedicated deep dive into Metasploit: introduction, exploitation, Meterpreter, the framework basics, post-exploitation, shell generation and delivery, payload generation, and scanning combined with exploitation.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Metasploit: Introduction](https://tryhackme.com/room/metasploitintro) | TryHackMe |
| 2 | [Metasploit: Exploitation](https://tryhackme.com/room/metasploitexploitation) | TryHackMe |
| 3 | [Meterpreter](https://tryhackme.com/room/meterpreter) | TryHackMe |
| 4 | [Metasploit: The Basics](https://tryhackme.com/room/metasploitthebasics) | TryHackMe |
| 5 | [Metasploit: Post-Exploitation](https://tryhackme.com/room/metasploitpostexploitation) | TryHackMe |
| 6 | [Shell Generation and Delivery](https://tryhackme.com/room/shellgenerationdelivery) | TryHackMe |
| 7 | [Metasploit: Payload Generation](https://tryhackme.com/room/metasploitpayloadgeneration) | TryHackMe |
| 8 | [Metasploit: Scanning and Exploitation](https://tryhackme.com/room/metasploitscanningandexploitation) | TryHackMe |


## Module 19 - Active Directory Introduction and Enumeration

**Focus:** AD authentication, breaching, and enumeration  
**Labs:** 7

The starting point for attacking Active Directory: how AD authentication works, an introduction to breaching AD, understanding a Windows computer from the inside, basic and authenticated enumeration, and a full breaching and enumeration exercise.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Intro to Active Directory Authentication](https://tryhackme.com/room/introtoactivedirectoryauthentication) | TryHackMe |
| 2 | [Introduction to Active Directory Breaching](https://tryhackme.com/room/introductiontoactivedirectorybreaching) | TryHackMe |
| 3 | [Inside a Computer](https://tryhackme.com/room/insideacomputer) | TryHackMe |
| 4 | [AD Basic Enumeration](https://tryhackme.com/room/adbasicenumeration) | TryHackMe |
| 5 | [AD Authenticated Enumeration](https://tryhackme.com/room/adauthenticatedenumeration) | TryHackMe |
| 6 | [Breaching AD](https://tryhackme.com/room/breachingad) | TryHackMe |
| 7 | [AD Enumeration](https://tryhackme.com/room/adenumeration) | TryHackMe |


## Module 23 - AWS: Attacking Cloud Infrastructure

**Focus:** Cloud security fundamentals and common pitfalls  
**Labs:** 3

A focused look at cloud security: an introduction to cloud security concepts, the fundamentals that apply across providers, and the common pitfalls and misconfigurations that lead to real breaches.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Introduction to Cloud Security](https://tryhackme.com/room/introductiontocloudsecurityc6) | TryHackMe |
| 2 | [Cloud Security Fundamentals](https://tryhackme.com/room/cloudsecurityfundamentals) | TryHackMe |
| 3 | [Cloud Security Pitfalls](https://tryhackme.com/room/cloudsecuritypitfalls) | TryHackMe |


## Module 24 - Real World Scenarios

**Focus:** Capstone-style, end-to-end engagements  
**Labs:** 3

The final module: full, realistic engagements that combine reconnaissance, exploitation, privilege escalation, and lateral movement into a single scenario, capped with the Wreath network for a multi-machine pivoting exercise.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Red Team Capstone Challenge](https://tryhackme.com/room/redteamcapstonechallenge) | TryHackMe |
| 2 | [Holo](https://tryhackme.com/room/hololive) | TryHackMe |
| 3 | [Wreath Network](https://tryhackme.com/room/wreath) | TryHackMe |


---

## Tips for Getting the Most Out of These Labs

- **Take detailed notes from Module 1 onward.** Report writing is Module 3 for a reason: build the habit of documenting as you go, not after you finish.
- **Repeat Module 4's reconnaissance workflow on every later CTF-style box** before looking anything up. Consistent methodology is what the exam actually tests.
- **Don't skip the "boring" modules.** Vulnerability scanning, tunneling, and report writing rarely feel as exciting as exploitation, but they are just as heavily tested.
- **Revisit privilege escalation (Modules 14 and 15) constantly.** These are the modules most worth repeating from memory, without notes, until they are automatic.

> These labs are for learning and practice in the provided lab environments only. Never test any technique on systems you do not own or have explicit permission to test.

---

# Part 2: Bonus - More Free Platforms Beyond TryHackMe

Once you've worked through the modules above, these free platforms round out your OSCP+ preparation: less hand-holding than a guided TryHackMe room, more of the ambiguity you'll face in the exam.

## A1. Hack The Box: Starting Point

**Focus:** A guided, beginner-friendly introduction to the Hack The Box platform  
**Free content:** 3 tiers, most machines free


[Hack The Box](https://www.hackthebox.com/) is the natural next step after TryHackMe's guided rooms: less hand-holding, more "figure it out." **Starting Point** is HTB's own on-ramp: a linear track of easy machines that teaches you to connect over VPN, enumerate a target, and get your first foothold. Most Starting Point machines are free; a few are VIP-only but never block your progress through the free ones. See the [official introduction to Starting Point](https://help.hackthebox.com/en/articles/6007919-introduction-to-starting-point) for how tiers work, then find each machine by name inside the Starting Point section of the HTB app.

### Tier 0: The Absolute Fundamentals

Single-step machines, each focused on connecting to and interacting with one service.

| # | Machine |
|:-:|---|
| 1 | Meow |
| 2 | Fawn |
| 3 | Dancing |
| 4 | Redeemer |
| 5 | Explosion |
| 6 | Preignition |
| 7 | Mongod |
| 8 | Synced |

### Tier 1: Fundamental Exploitation

A bit more complexity, still one primary exploitation step per machine.

| # | Machine |
|:-:|---|
| 1 | Appointment |
| 2 | Sequel |
| 3 | Crocodile |
| 4 | Responder |
| 5 | Three |
| 6 | Ignition |
| 7 | Bike |
| 8 | Funnel |
| 9 | Pennyworth |
| 10 | Tactics |

### Tier 2: Full-Fledged Machines

Multi-step machines with both a user and a root/system flag: enumerate, get a foothold, then escalate.

| # | Machine |
|:-:|---|
| 1 | Archetype |
| 2 | Oopsie |
| 3 | Vaccine |
| 4 | Unified |
| 5 | Included |
| 6 | Markup |
| 7 | Base |

## A2. OverTheWire: Wargames

**Focus:** Terminal-based, SSH-driven wargames  
**Free content:** All wargames listed below


[OverTheWire](https://overthewire.org/wargames/) is one of the oldest free platforms in the field: no browser, no VM, just SSH into a level and find the password to the next one. It needs zero setup, which makes it a great companion to run alongside any other course. Start with Bandit if you are new to Linux; the rest can be tackled roughly in the order below as your skills grow.

| # | Wargame | Focus | Level | Description |
|:-:|---|---|:-:|---|
| 1 | [Bandit](https://overthewire.org/wargames/bandit/) | Bandit | Beginner | 34 levels of Linux fundamentals: navigating the filesystem, permissions, SSH, and basic text processing. The mandatory starting point for this platform. |
| 2 | [Natas](https://overthewire.org/wargames/natas/) | Natas | Web Security | A level-based web security wargame: source code review, common web vulnerabilities, and creative bypasses, all in the browser. |
| 3 | [Leviathan](https://overthewire.org/wargames/leviathan/) | Leviathan | Beginner to Intermediate | A short wargame focused on reading and reasoning about compiled programs without access to source code. |
| 4 | [Krypton](https://overthewire.org/wargames/krypton/) | Krypton | Cryptography | Classic and modern cryptography challenges, from simple substitution ciphers to more advanced encoding schemes. |
| 5 | [Narnia](https://overthewire.org/wargames/narnia/) | Narnia | Binary Exploitation (Intro) | An introduction to binary exploitation and memory corruption on Linux. |
| 6 | [Behemoth](https://overthewire.org/wargames/behemoth/) | Behemoth | Binary Exploitation (Intermediate) | A step up from Narnia, with more advanced binary exploitation scenarios. |
| 7 | [Utumno](https://overthewire.org/wargames/utumno/) | Utumno | Advanced | Advanced binary exploitation for players who have finished Narnia and Behemoth. |
| 8 | [Maze](https://overthewire.org/wargames/maze/) | Maze | Advanced | A maze-like advanced wargame combining several exploitation techniques. |
| 9 | [Vortex](https://overthewire.org/wargames/vortex/) | Vortex | Binary Exploitation | Another binary exploitation wargame with its own progression of challenges. |
| 10 | [Manpage](https://overthewire.org/wargames/manpage/) | Manpage | Linux/Unix | Challenges built around reading and understanding Unix man pages. |

## A3. PentesterLab: Free Exercises

**Focus:** Web application vulnerabilities, with source code review  
**Free content:** A rotating set of exercises across every badge category


[PentesterLab](https://pentesterlab.com/exercises) stands out for pairing exploitation with source code review: you don't just send a payload, you see the vulnerable code and understand exactly why it's exploitable. Exercises are grouped into badges (Introduction, Unix, Essential, Web, Authentication/Authorization, API, Code Review, and more), and each badge has a mix of free and PRO-only exercises, clearly marked "Free Tier" on the exercise page. Work through the free exercises in the Introduction and Unix badges first, then dip into Web and Authentication/Authorization as you finish the web-focused roadmaps elsewhere on this blog.

## A4. Root-Me: Wide-Coverage Challenges

**Focus:** Broad, self-directed challenges across many categories  
**Free content:** The large majority of the platform


[Root-Me](https://www.root-me.org/) is a long-running, community-driven challenge platform covering web, cryptography, network, steganography, reverse engineering, and more, in a single points-based scoreboard. It has less structure than TryHackMe or a guided roadmap, which makes it a good place to go once you already know a topic and want a wide bank of realistic challenges to test yourself against.

## A5. CyberDefenders: Blue Team Practice

**Focus:** Log analysis, malware analysis, and incident response, from the defender's side  
**Free content:** A large set of downloadable challenges


Every roadmap on this blog so far leans offensive. [CyberDefenders](https://cyberdefenders.org/) is the counterweight: free, downloadable "Challenges" built around real PCAP files, disk images, and logs, each with a set of investigative questions to answer. It's excellent practice for the Digital Forensics, Threat Hunting, and CySA+-style material covered elsewhere on this blog, from the other side of the fence.

## A6. VulnHub: Downloadable Vulnerable Machines

**Focus:** Full boot2root VMs you run yourself  
**Free content:** The entire library


[VulnHub](https://www.vulnhub.com/) hosts a large, entirely free library of downloadable vulnerable virtual machines. Unlike TryHackMe or Hack The Box, there is no hosted infrastructure: you download an OVA or VMDK and run it locally in VirtualBox or VMware. That makes it slower to get started, but it's a good way to practice working entirely offline and to build comfort with setting up your own lab environment, a skill the exam labs for certifications like OSCP assume you already have.

## A7. picoCTF: Beginner-Friendly CTF Archive

**Focus:** A large, permanent archive of beginner-to-intermediate CTF challenges  
**Free content:** The entire archive, year-round


[picoCTF](https://picoctf.org/), run by Carnegie Mellon University, was built as a yearly competition for students but keeps its full archive of past challenges open year-round for free practice. It spans binary exploitation, cryptography, web exploitation, forensics, and reverse engineering, each with a difficulty rating, and is a good source of short, self-contained challenges when you want a single problem to solve in an hour rather than a full machine.

## A8. WebGoat & DVWA: Local Vulnerable Web Apps

**Focus:** OWASP Top 10 practice you run entirely on your own machine  
**Free content:** Both are fully open source


Two classic, self-hosted training applications worth having in your own lab, both free and open source:

- **[OWASP WebGoat](https://github.com/WebGoat/WebGoat)**: a deliberately insecure Java application maintained by OWASP, with guided lessons for each vulnerability class in the OWASP Top 10.
- **[DVWA (Damn Vulnerable Web Application)](https://github.com/digininja/DVWA)**: a PHP/MySQL application with adjustable difficulty levels (low, medium, high) for the same vulnerability, so you can see how the same attack needs to adapt as defenses get stronger.

Both run easily in Docker and are worth keeping around as a no-time-limit sandbox for testing a payload or technique you just learned somewhere else.


---

## A9. PortSwigger Web Security Academy: Additional Topics

**Focus:** Web vulnerability classes not already covered by the XSS and SQL injection tracks in the other roadmaps on this blog  
**Labs:** 77 across 14 topics


The web-focused roadmaps elsewhere on this blog (eWAPT v2, eCPPT v3, eJPT v2, the Advanced Web Application Pentest roadmap) already cover [PortSwigger](https://portswigger.net/web-security) labs for XSS, SQL injection, NoSQL injection, SSRF, and API testing in depth. This section fills in the rest of the Web Security Academy: access control, CSRF, file upload, business logic flaws, insecure deserialization, information disclosure, race conditions, path traversal, CORS, clickjacking, OAuth, JWT, server-side template injection, and web cache poisoning. As with the other PortSwigger sections on this blog, work through Apprentice labs in a topic before moving on to Practitioner and Expert.

### Access Control

Apprentice-to-Practitioner labs on vertical and horizontal privilege escalation, IDOR, and access control bypasses.

| # | Lab | Level |
|:-:|---|:-:|
| 1 | [Unprotected admin functionality](https://portswigger.net/web-security/access-control/lab-unprotected-admin-functionality) | Apprentice |
| 2 | [Unprotected admin functionality with unpredictable URL](https://portswigger.net/web-security/access-control/lab-unprotected-admin-functionality-with-unpredictable-url) | Apprentice |
| 3 | [User role controlled by request parameter](https://portswigger.net/web-security/access-control/lab-user-role-controlled-by-request-parameter) | Apprentice |
| 4 | [User role can be modified in user profile](https://portswigger.net/web-security/access-control/lab-user-role-can-be-modified-in-user-profile) | Apprentice |
| 5 | [URL-based access control can be circumvented](https://portswigger.net/web-security/access-control/lab-url-matching-discrepancy) | Practitioner |
| 6 | [Method-based access control can be circumvented](https://portswigger.net/web-security/access-control/lab-method-based-access-control-can-be-circumvented) | Practitioner |
| 7 | [Multi-step process with no access control on one step](https://portswigger.net/web-security/access-control/lab-multi-step-process-with-no-access-control-on-one-step) | Practitioner |
| 8 | [Referer-based access control](https://portswigger.net/web-security/access-control/lab-referer-based-access-control) | Practitioner |

### CSRF (Cross-Site Request Forgery)

Constructing CSRF attacks and bypassing the most common defenses: tokens, SameSite cookies, and Referer validation.

| # | Lab | Level |
|:-:|---|:-:|
| 1 | [CSRF vulnerability with no defenses](https://portswigger.net/web-security/csrf/lab-no-defenses) | Apprentice |
| 2 | [CSRF where token validation depends on request method](https://portswigger.net/web-security/csrf/lab-token-validation-depends-on-request-method) | Practitioner |
| 3 | [CSRF where token validation depends on token being present](https://portswigger.net/web-security/csrf/lab-token-validation-depends-on-token-being-present) | Practitioner |
| 4 | [CSRF where token is not tied to user session](https://portswigger.net/web-security/csrf/lab-token-not-tied-to-user-session) | Practitioner |
| 5 | [CSRF where token is tied to non-session cookie](https://portswigger.net/web-security/csrf/lab-token-tied-to-non-session-cookie) | Practitioner |
| 6 | [SameSite Strict bypass via client-side redirect](https://portswigger.net/web-security/csrf/lab-samesite-strict-bypass-via-client-side-redirect) | Practitioner |
| 7 | [SameSite Lax bypass via cookie refresh](https://portswigger.net/web-security/csrf/lab-samesite-lax-bypass-via-cookie-refresh) | Expert |

### File Upload Vulnerabilities

Uploading a web shell through weak validation: content-type checks, extension blacklists, path traversal, and race conditions.

| # | Lab | Level |
|:-:|---|:-:|
| 1 | [Remote code execution via web shell upload](https://portswigger.net/web-security/file-upload/lab-file-upload-remote-code-execution-via-web-shell-upload) | Apprentice |
| 2 | [Web shell upload via Content-Type restriction bypass](https://portswigger.net/web-security/file-upload/lab-file-upload-web-shell-upload-via-content-type-restriction-bypass) | Apprentice |
| 3 | [Web shell upload via path traversal](https://portswigger.net/web-security/file-upload/lab-file-upload-web-shell-upload-via-path-traversal) | Practitioner |
| 4 | [Web shell upload via extension blacklist bypass](https://portswigger.net/web-security/file-upload/lab-file-upload-web-shell-upload-via-extension-blacklist-bypass) | Practitioner |
| 5 | [Web shell upload via obfuscated file extension](https://portswigger.net/web-security/file-upload/lab-file-upload-web-shell-upload-via-obfuscated-file-extension) | Practitioner |
| 6 | [Remote code execution via polyglot web shell upload](https://portswigger.net/web-security/file-upload/lab-file-upload-remote-code-execution-via-polyglot-web-shell-upload) | Expert |

### Business Logic Vulnerabilities

Flaws that come from broken assumptions in an application's workflow rather than from a technical injection point.

| # | Lab | Level |
|:-:|---|:-:|
| 1 | [Excessive trust in client-side controls](https://portswigger.net/web-security/business-logic-vulnerabilities/lab-excessive-trust-in-client-side-controls) | Apprentice |
| 2 | [High-level logic vulnerability](https://portswigger.net/web-security/business-logic-vulnerabilities/lab-high-level-logic-vulnerability) | Apprentice |
| 3 | [Inconsistent security controls](https://portswigger.net/web-security/business-logic-vulnerabilities/lab-inconsistent-security-controls) | Apprentice |
| 4 | [Flawed enforcement of business rules](https://portswigger.net/web-security/business-logic-vulnerabilities/lab-flawed-enforcement-of-business-rules) | Practitioner |
| 5 | [Low-level logic flaw](https://portswigger.net/web-security/business-logic-vulnerabilities/lab-low-level-logic-flaw) | Practitioner |
| 6 | [Insufficient workflow validation](https://portswigger.net/web-security/business-logic-vulnerabilities/lab-insufficient-workflow-validation) | Practitioner |
| 7 | [Authentication bypass via flawed state machine](https://portswigger.net/web-security/business-logic-vulnerabilities/lab-authentication-bypass-via-flawed-state-machine) | Practitioner |
| 8 | [Infinite money logic flaw](https://portswigger.net/web-security/business-logic-vulnerabilities/lab-infinite-money-logic-flaw) | Expert |

### Insecure Deserialization

Manipulating serialized data to inject malicious objects, from basic tampering through to building a custom gadget chain.

| # | Lab | Level |
|:-:|---|:-:|
| 1 | [Modifying serialized objects](https://portswigger.net/web-security/deserialization/lab-modifying-serialized-objects) | Apprentice |
| 2 | [Modifying serialized data types](https://portswigger.net/web-security/deserialization/lab-modifying-serialized-data-types) | Practitioner |
| 3 | [Using application functionality to exploit insecure deserialization](https://portswigger.net/web-security/deserialization/lab-using-application-functionality-to-exploit-insecure-deserialization) | Practitioner |
| 4 | [Arbitrary object injection in PHP](https://portswigger.net/web-security/deserialization/lab-arbitrary-object-injection-in-php) | Practitioner |
| 5 | [Exploiting Java deserialization with Apache Commons](https://portswigger.net/web-security/deserialization/lab-exploiting-java-deserialization-with-apache-commons) | Practitioner |
| 6 | [Exploiting Python deserialization with Pickle](https://portswigger.net/web-security/deserialization/lab-exploiting-python-deserialization-with-pickle) | Practitioner |
| 7 | [Developing a custom gadget chain for Java deserialization](https://portswigger.net/web-security/deserialization/lab-developing-custom-gadget-chain-for-java-deserialization) | Expert |

### Information Disclosure

Finding sensitive data a site unintentionally reveals, through error messages, debug pages, backups, and version control history.

| # | Lab | Level |
|:-:|---|:-:|
| 1 | [Information disclosure in error messages](https://portswigger.net/web-security/information-disclosure/lab-infoleak-in-error-messages) | Apprentice |
| 2 | [Information disclosure on debug page](https://portswigger.net/web-security/information-disclosure/lab-infoleak-on-debug-page) | Apprentice |
| 3 | [Source code disclosure via backup files](https://portswigger.net/web-security/information-disclosure/lab-infoleak-via-backup-files) | Practitioner |
| 4 | [Authentication bypass via information disclosure](https://portswigger.net/web-security/information-disclosure/lab-infoleak-authentication-bypass) | Practitioner |
| 5 | [Information disclosure via version control history](https://portswigger.net/web-security/information-disclosure/lab-infoleak-via-version-control-history) | Practitioner |

### Race Conditions

Exploiting timing windows in multi-step processes, from single-endpoint races to limit-overrun and multi-endpoint attacks.

| # | Lab | Level |
|:-:|---|:-:|
| 1 | [Limit overrun race conditions](https://portswigger.net/web-security/race-conditions/lab-limit-overrun-race-conditions) | Apprentice |
| 2 | [Bypassing rate limits via race conditions](https://portswigger.net/web-security/race-conditions/lab-bypassing-rate-limits-via-race-conditions) | Practitioner |
| 3 | [Multi-endpoint race conditions](https://portswigger.net/web-security/race-conditions/lab-multi-endpoint-race-conditions) | Practitioner |
| 4 | [Single-endpoint race conditions](https://portswigger.net/web-security/race-conditions/lab-single-endpoint-race-conditions) | Practitioner |
| 5 | [Partial construction race conditions](https://portswigger.net/web-security/race-conditions/lab-partial-construction-race-conditions) | Expert |

### Path Traversal

Reading files outside a web root through directory traversal sequences, and bypassing common filters and sanitization.

| # | Lab | Level |
|:-:|---|:-:|
| 1 | [File path traversal, simple case](https://portswigger.net/web-security/file-path-traversal/lab-simple) | Apprentice |
| 2 | [File path traversal, traversal sequences blocked with absolute path bypass](https://portswigger.net/web-security/file-path-traversal/lab-absolute-path-bypass) | Practitioner |
| 3 | [File path traversal, traversal sequences stripped non-recursively](https://portswigger.net/web-security/file-path-traversal/lab-traversal-sequences-stripped-non-recursively) | Practitioner |
| 4 | [File path traversal, traversal sequences stripped with superfluous URL-decode](https://portswigger.net/web-security/file-path-traversal/lab-traversal-sequences-stripped-with-superfluous-url-decode) | Practitioner |
| 5 | [File path traversal, validation of start of path](https://portswigger.net/web-security/file-path-traversal/lab-validation-of-start-of-path) | Practitioner |
| 6 | [File path traversal, validation of file extension with null byte bypass](https://portswigger.net/web-security/file-path-traversal/lab-validation-of-file-extension-with-null-byte-bypass) | Practitioner |

### CORS (Cross-Origin Resource Sharing)

Exploiting overly permissive CORS configurations to read data across origins.

| # | Lab | Level |
|:-:|---|:-:|
| 1 | [CORS vulnerability with basic origin reflection](https://portswigger.net/web-security/cors/lab-basic-origin-reflection-attack) | Practitioner |
| 2 | [CORS vulnerability with trusted null origin](https://portswigger.net/web-security/cors/lab-trusted-null-origin) | Practitioner |
| 3 | [CORS vulnerability with trusted insecure protocols](https://portswigger.net/web-security/cors/lab-trusted-insecure-protocols) | Practitioner |

### Clickjacking

Tricking a user into clicking something different from what they perceive, and bypassing CSRF tokens and frame-buster scripts along the way.

| # | Lab | Level |
|:-:|---|:-:|
| 1 | [Basic clickjacking with CSRF token protection](https://portswigger.net/web-security/clickjacking/lab-basic-clickjacking-with-csrf-token-protection) | Apprentice |
| 2 | [Clickjacking with form input prefilled from a URL parameter](https://portswigger.net/web-security/clickjacking/lab-clickjacking-with-form-input-prefilled-from-a-url-parameter) | Apprentice |
| 3 | [Clickjacking with a frame buster script](https://portswigger.net/web-security/clickjacking/lab-clickjacking-with-a-frame-buster-script) | Practitioner |
| 4 | [Multistep clickjacking](https://portswigger.net/web-security/clickjacking/lab-multistep-clickjacking) | Practitioner |

### OAuth Authentication

Exploiting flawed OAuth 2.0 implementations, from broken redirect_uri validation to account hijacking.

| # | Lab | Level |
|:-:|---|:-:|
| 1 | [Authentication bypass via OAuth implicit flow](https://portswigger.net/web-security/oauth-authentication/lab-oauth-authentication-bypass-via-oauth-implicit-flow) | Practitioner |
| 2 | [Forced OAuth profile linking](https://portswigger.net/web-security/oauth-authentication/lab-forced-oauth-profile-linking) | Practitioner |
| 3 | [OAuth account hijacking via redirect_uri](https://portswigger.net/web-security/oauth-authentication/lab-oauth-account-hijacking-via-redirect-uri) | Practitioner |
| 4 | [Flawed CSRF protection allows OAuth account hijacking](https://portswigger.net/web-security/oauth-authentication/lab-flawed-csrf-protection-oauth-based) | Practitioner |
| 5 | [OAuth account hijacking via open redirect](https://portswigger.net/web-security/oauth-authentication/lab-oauth-account-hijacking-via-open-redirect) | Expert |

### JWT (JSON Web Tokens)

Bypassing authentication by attacking the JWT itself: unverified signatures, weak keys, and header injection.

| # | Lab | Level |
|:-:|---|:-:|
| 1 | [JWT authentication bypass via unverified signature](https://portswigger.net/web-security/jwt/lab-jwt-authentication-bypass-via-unverified-signature) | Apprentice |
| 2 | [JWT authentication bypass via flawed signature verification](https://portswigger.net/web-security/jwt/lab-jwt-authentication-bypass-via-flawed-signature-verification) | Apprentice |
| 3 | [JWT authentication bypass via weak signing key](https://portswigger.net/web-security/jwt/lab-jwt-authentication-bypass-via-weak-signing-key) | Practitioner |
| 4 | [JWT authentication bypass via jwk header injection](https://portswigger.net/web-security/jwt/lab-jwt-authentication-bypass-via-jwk-header-injection) | Practitioner |
| 5 | [JWT authentication bypass via jku header injection](https://portswigger.net/web-security/jwt/lab-jwt-authentication-bypass-via-jku-header-injection) | Practitioner |
| 6 | [JWT authentication bypass via kid header path traversal](https://portswigger.net/web-security/jwt/lab-jwt-authentication-bypass-via-kid-header-path-traversal) | Practitioner |

### Server-Side Template Injection (SSTI)

Injecting into a template engine to achieve remote code execution, from basic detection to exploiting an unknown language.

| # | Lab | Level |
|:-:|---|:-:|
| 1 | [Basic server-side template injection](https://portswigger.net/web-security/server-side-template-injection/lab-basic-server-side-template-injection) | Practitioner |
| 2 | [Server-side template injection with information disclosure via user-supplied objects](https://portswigger.net/web-security/server-side-template-injection/lab-server-side-template-injection-with-information-disclosure-via-user-supplied-objects) | Practitioner |
| 3 | [Server-side template injection in an unknown language with a documented exploit](https://portswigger.net/web-security/server-side-template-injection/lab-server-side-template-injection-in-an-unknown-language-with-a-documented-exploit) | Practitioner |

### Web Cache Poisoning

Poisoning a cache with a malicious response by exploiting unkeyed inputs: headers, query strings, and cookies.

| # | Lab | Level |
|:-:|---|:-:|
| 1 | [Web cache poisoning with an unkeyed header](https://portswigger.net/web-security/web-cache-poisoning/lab-unkeyed-header) | Practitioner |
| 2 | [Web cache poisoning with an unkeyed cookie](https://portswigger.net/web-security/web-cache-poisoning/lab-unkeyed-cookie) | Practitioner |
| 3 | [Web cache poisoning with multiple headers](https://portswigger.net/web-security/web-cache-poisoning/lab-unkeyed-query-string) | Practitioner |
| 4 | [Combining web cache poisoning vulnerabilities](https://portswigger.net/web-security/web-cache-poisoning/lab-combining-web-cache-poisoning-vulnerabilities) | Expert |

---

## How to Fit These Into Your Study Plan

- **Run OverTheWire Bandit in parallel with any course.** It needs no setup, takes 30 minutes here and there, and directly reinforces the Linux fundamentals every other roadmap on this blog assumes you already have.
- **Use Hack The Box Starting Point once you've finished a TryHackMe-based roadmap.** The lack of hand-holding is the point: it tests whether the methodology actually stuck.
- **Keep CyberDefenders in rotation if you're working through the CySA+ or DFIR roadmaps.** It's the closest free equivalent to the log and PCAP analysis those exams actually test.
- **Set up WebGoat or DVWA locally once, and leave them running.** They're the fastest way to test a technique the moment you read about it, without spinning up a TryHackMe room.

> These platforms are for learning and practice in the environments they provide only. Never test any technique on systems you do not own or have explicit permission to test.