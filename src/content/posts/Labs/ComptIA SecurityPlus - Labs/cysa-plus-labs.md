---
title: "CySA+ (CS0-003) Lab Roadmap: A Structured Practice Guide"
published: 2026-09-19
description: "A structured roadmap of 74 TryHackMe labs covering the full CompTIA CySA+ (CS0-003) exam, organized into 14 sections and mapped to the exam domains."
tags: [CySA+, CompTIA, Labs, TryHackMe, SOC, SIEM, Incident Response, Threat Hunting, Vulnerability Management]
category: Labs
draft: false
---


## Overview

This roadmap covers the full **CompTIA CySA+ (CS0-003)** exam through hands-on TryHackMe labs. Each section is mapped to the exam domain it supports, and the labs inside each section are ordered from foundations to more advanced topics. Every link opens the lab directly.

The roadmap was put together by **Netriders Academy**, with the labs curated by **Ahmed Sultan**. Pair it with my [CySA+ Study Notes](https://bad-glitch.github.io/posts/courses-notes/cysa-003---notes/cysa-plus-notes/) for the theory behind each topic.

| | |
|---|---|
| **Total labs** | 74 |
| **Platform** | TryHackMe |
| **Sections** | 14 |
| **Exam coverage** | CompTIA CySA+ (CS0-003) |

> **Note:** TryHackMe occasionally changes which rooms are free and which require a subscription. If you find a lab that is locked, let me know and I will update the list.


## Exam Domains at a Glance

| Domain | Exam Weight | Sections in This Roadmap |
|---|:-:|---|
| Domain 1 - Security Operations | 33% | 01, 02, 04, 05, 08, 09, 10, 11, 13 |
| Domain 2 - Vulnerability Management | 30% | 03, 12 |
| Domain 3 - Incident Response and Management | 20% | 06, 07 |
| Domain 4 - Reporting and Communication | 17% | Covered in the theory notes (no dedicated labs) |


## Section Map

| # | Section | Exam Domain | Labs |
|:-:|---|---|:-:|
| 01 | System Internals & Windows | Domain 1 - Security Operations | 7 |
| 02 | SIEM, Log Analysis & Monitoring | Domain 1 - Security Operations | 10 |
| 03 | Secure Development & AppSec | Domain 2 - Vulnerability Management | 4 |
| 04 | Networking & Traffic Analysis | Domain 1 - Security Operations | 5 |
| 05 | Security Operations (SOC) | Domain 1 - Security Operations | 9 |
| 06 | Incident Response | Domain 3 - Incident Response and Management | 6 |
| 07 | Digital Forensics | Domain 3 - Incident Response and Management | 10 |
| 08 | Threat Hunting | Domain 1 - Security Operations | 4 |
| 09 | Threat Intelligence | Domain 1 - Security Operations | 3 |
| 10 | Threat Modeling & Detection Engineering | Domain 1 - Security Operations | 6 |
| 11 | Malware & Reverse Engineering | Domain 1 - Security Operations | 1 |
| 12 | Vulnerability Management | Domain 2 - Vulnerability Management | 7 |
| 13 | Cryptography | Domain 1 - Security Operations | 1 |
| 14 | Extra Labs | Supplementary | 1 |

## Suggested Learning Path

1. **Foundations:** System Internals & Windows → Networking & Traffic Analysis → SIEM & Log Analysis
2. **Security operations:** SOC → Threat Intelligence → Threat Hunting → Threat Modeling & Detection Engineering
3. **Vulnerability management:** Vulnerability Management → Secure Development & AppSec
4. **Response and investigation:** Incident Response → Digital Forensics → Malware & Reverse Engineering
5. **Wrap-up:** Cryptography → Extra Labs


---


## 01. System Internals & Windows

**Exam Domain:** Domain 1 - Security Operations  
**Labs:** 7

Understand how Windows works under the hood: processes, Sysinternals tools, event logs, PowerShell, and Active Directory basics. This is the baseline knowledge every analyst needs before investigating an endpoint.

| # | Lab | Platform |
|:-:|---|:-:|
| 01 | [Windows Internals](https://tryhackme.com/room/btwindowsinternals) | TryHackMe |
| 02 | [Sysinternals](https://tryhackme.com/room/btsysinternalssg) | TryHackMe |
| 03 | [Windows Event Logs](https://tryhackme.com/room/windowseventlogs) | TryHackMe |
| 04 | [Osquery: The Basics](https://tryhackme.com/room/osqueryf8) | TryHackMe |
| 05 | [Active Directory Basics](https://tryhackme.com/room/winadbasics) | TryHackMe |
| 06 | [Windows PowerShell](https://tryhackme.com/room/windowspowershell) | TryHackMe |
| 07 | [Windows Internals (Advanced)](https://tryhackme.com/room/windowsinternals) | TryHackMe |


## 02. SIEM, Log Analysis & Monitoring

**Exam Domain:** Domain 1 - Security Operations  
**Labs:** 10

Collecting, searching, and correlating logs. Covers log fundamentals, SIEM concepts, and a full Splunk track from basics to SPL and data manipulation.

| # | Lab | Platform |
|:-:|---|:-:|
| 08 | [Splunk: Basics](https://tryhackme.com/room/splunk101) | TryHackMe |
| 09 | [Splunk 2](https://tryhackme.com/room/splunk2gcd5) | TryHackMe |
| 10 | [Log Fundamentals](https://tryhackme.com/room/logsfundamentals) | TryHackMe |
| 11 | [Introduction to SIEM](https://tryhackme.com/room/introtosiem) | TryHackMe |
| 12 | [Intro to Logs](https://tryhackme.com/room/introtologs) | TryHackMe |
| 13 | [Log Operations](https://tryhackme.com/room/logoperations) | TryHackMe |
| 14 | [Intro to Log Analysis](https://tryhackme.com/room/introtologanalysis) | TryHackMe |
| 15 | [Splunk: Exploring SPL](https://tryhackme.com/room/splunkexploringspl) | TryHackMe |
| 16 | [Splunk: Setting up a SOC Lab](https://tryhackme.com/room/splunklab) | TryHackMe |
| 17 | [Splunk: Data Manipulation](https://tryhackme.com/room/splunkdatamanipulation) | TryHackMe |


## 03. Secure Development & AppSec

**Exam Domain:** Domain 2 - Vulnerability Management  
**Labs:** 4

Finding vulnerabilities in code and dependencies with static analysis (SAST), dynamic analysis (DAST), and software composition analysis.

| # | Lab | Platform |
|:-:|---|:-:|
| 18 | [Dependency Management](https://tryhackme.com/room/dependencymanagement) | TryHackMe |
| 19 | [SAST](https://tryhackme.com/room/sast) | TryHackMe |
| 20 | [DAST (ZAP)](https://tryhackme.com/room/dastzap) | TryHackMe |
| 21 | [Code Analysis](https://tryhackme.com/room/codeanalysis) | TryHackMe |


## 04. Networking & Traffic Analysis

**Exam Domain:** Domain 1 - Security Operations  
**Labs:** 5

Network visibility and traffic analysis with Wireshark, Tcpdump, and Nmap, plus the role of firewalls and intrusion detection systems.

| # | Lab | Platform |
|:-:|---|:-:|
| 22 | [Wireshark: The Basics](https://tryhackme.com/room/wiresharkthebasics) | TryHackMe |
| 23 | [Nmap](https://tryhackme.com/room/nmap) | TryHackMe |
| 24 | [Tcpdump](https://tryhackme.com/room/tcpdump) | TryHackMe |
| 25 | [Firewall Fundamentals](https://tryhackme.com/room/firewallfundamentals) | TryHackMe |
| 26 | [IDS Fundamentals](https://tryhackme.com/room/idsfundamentals) | TryHackMe |


## 05. Security Operations (SOC)

**Exam Domain:** Domain 1 - Security Operations  
**Labs:** 9

How a SOC operates day to day: search skills, core security principles, tactical detection, threat intelligence for SOC teams, Sigma rules, and SOAR automation.

| # | Lab | Platform |
|:-:|---|:-:|
| 27 | [Search Skills](https://tryhackme.com/room/searchskills) | TryHackMe |
| 28 | [SOC Fundamentals](https://tryhackme.com/room/socfundamentals) | TryHackMe |
| 29 | [Security Principles](https://tryhackme.com/room/securityprinciples) | TryHackMe |
| 30 | [Fixit](https://tryhackme.com/room/fixit) | TryHackMe |
| 31 | [Slingshot](https://tryhackme.com/room/slingshot) | TryHackMe |
| 32 | [Tactical Detection](https://tryhackme.com/room/tacticaldetection) | TryHackMe |
| 33 | [Threat Intelligence for SOC](https://tryhackme.com/room/threatintelligenceforsoc) | TryHackMe |
| 34 | [Sigma](https://tryhackme.com/room/sigma) | TryHackMe |
| 35 | [SOAR](https://tryhackme.com/room/soar) | TryHackMe |


## 06. Incident Response

**Exam Domain:** Domain 3 - Incident Response and Management  
**Labs:** 6

The full incident response lifecycle, step by step: preparation, identification and scoping, containment, eradication and remediation, and lessons learned.

| # | Lab | Platform |
|:-:|---|:-:|
| 36 | [Incident Response Fundamentals](https://tryhackme.com/room/incidentresponsefundamentals) | TryHackMe |
| 37 | [Preparation](https://tryhackme.com/room/preparation) | TryHackMe |
| 38 | [Identification and Scoping](https://tryhackme.com/room/identificationandscoping) | TryHackMe |
| 39 | [Intel Creation and Containment](https://tryhackme.com/room/intelcreationandcontainment) | TryHackMe |
| 40 | [Eradication and Remediation](https://tryhackme.com/room/eradicationandremediation) | TryHackMe |
| 41 | [Lessons Learned](https://tryhackme.com/room/lessonslearned) | TryHackMe |


## 07. Digital Forensics

**Exam Domain:** Domain 3 - Incident Response and Management  
**Labs:** 10

Evidence analysis using memory forensics, disk forensics, and malware triage tooling: CyberChef, CAPA, REMnux, FLARE VM, Volatility, Redline, and Autopsy.

| # | Lab | Platform |
|:-:|---|:-:|
| 42 | [CyberChef: The Basics](https://tryhackme.com/room/cyberchefbasics) | TryHackMe |
| 43 | [CAPA: The Basics](https://tryhackme.com/room/capabasics) | TryHackMe |
| 44 | [REMnux: Getting Started](https://tryhackme.com/room/remnuxgettingstarted) | TryHackMe |
| 45 | [FLARE VM: Arsenal of Tools](https://tryhackme.com/room/flarevmarsenaloftools) | TryHackMe |
| 46 | [Volatility](https://tryhackme.com/room/volatility) | TryHackMe |
| 47 | [Investigating Windows](https://tryhackme.com/room/investigatingwindows) | TryHackMe |
| 48 | [Windows Forensics 2](https://tryhackme.com/room/windowsforensics2) | TryHackMe |
| 49 | [Redline](https://tryhackme.com/room/btredlinejoxr3d) | TryHackMe |
| 50 | [Autopsy](https://tryhackme.com/room/btautopsye0) | TryHackMe |
| 51 | [Disk Analysis & Autopsy](https://tryhackme.com/room/autopsy2ze0) | TryHackMe |


## 08. Threat Hunting

**Exam Domain:** Domain 1 - Security Operations  
**Labs:** 4

Proactively hunting for adversaries across the attack chain, from the initial foothold through pivoting to the end game.

| # | Lab | Platform |
|:-:|---|:-:|
| 52 | [Introduction to Threat Hunting](https://tryhackme.com/room/introductiontothreathunting) | TryHackMe |
| 53 | [Threat Hunting: Foothold](https://tryhackme.com/room/threathuntingfoothold) | TryHackMe |
| 54 | [Threat Hunting: Pivoting](https://tryhackme.com/room/threathuntingpivoting) | TryHackMe |
| 55 | [Threat Hunting: Endgame](https://tryhackme.com/room/threathuntingendgame) | TryHackMe |


## 09. Threat Intelligence

**Exam Domain:** Domain 1 - Security Operations  
**Labs:** 3

Turning raw indicators into actionable intelligence, including investigations of payment collection and typosquatting campaigns and sharing intel with MISP.

| # | Lab | Platform |
|:-:|---|:-:|
| 56 | [Payment Collectors](https://tryhackme.com/room/paymentcollectors) | TryHackMe |
| 57 | [Typosquatters](https://tryhackme.com/room/typosquatters) | TryHackMe |
| 58 | [MISP](https://tryhackme.com/room/misp) | TryHackMe |


## 10. Threat Modeling & Detection Engineering

**Exam Domain:** Domain 1 - Security Operations  
**Labs:** 6

Modeling threats, emulating adversary behavior with Atomic Red Team, mapping to MITRE ATT&CK, and writing detections with Yara.

| # | Lab | Platform |
|:-:|---|:-:|
| 59 | [Threat Modelling](https://tryhackme.com/room/threatmodelling) | TryHackMe |
| 60 | [Atomic Red Team](https://tryhackme.com/room/atomicredteam) | TryHackMe |
| 61 | [Atomic Bird Goes Purple #1](https://tryhackme.com/room/atomicbirdone) | TryHackMe |
| 62 | [Atomic Bird Goes Purple #2](https://tryhackme.com/room/atomicbirdtwo) | TryHackMe |
| 63 | [MITRE](https://tryhackme.com/room/mitre) | TryHackMe |
| 64 | [Yara](https://tryhackme.com/room/yara) | TryHackMe |


## 11. Malware & Reverse Engineering

**Exam Domain:** Domain 1 - Security Operations  
**Labs:** 1

Recognizing the techniques malware authors use to resist analysis.

| # | Lab | Platform |
|:-:|---|:-:|
| 65 | [Anti-Reverse Engineering](https://tryhackme.com/room/antireverseengineering) | TryHackMe |


## 12. Vulnerability Management

**Exam Domain:** Domain 2 - Vulnerability Management  
**Labs:** 7

The vulnerability management lifecycle: scanning with Nessus and OpenVAS, understanding and exploiting vulnerabilities, and a capstone that ties it together.

| # | Lab | Platform |
|:-:|---|:-:|
| 66 | [Vulnerability Scanner Overview](https://tryhackme.com/room/vulnerabilityscanneroverview) | TryHackMe |
| 67 | [Vulnerabilities 101](https://tryhackme.com/room/vulnerabilities101) | TryHackMe |
| 68 | [Exploiting a Vulnerability](https://tryhackme.com/room/exploitingavulnerabilityv2) | TryHackMe |
| 69 | [Vulnerability Capstone](https://tryhackme.com/room/vulnerabilitycapstone) | TryHackMe |
| 70 | [Nessus](https://tryhackme.com/room/rpnessusredux) | TryHackMe |
| 71 | [OpenVAS](https://tryhackme.com/room/openvas) | TryHackMe |
| 72 | [Zero Logon](https://tryhackme.com/room/zer0logon) | TryHackMe |


## 13. Cryptography

**Exam Domain:** Domain 1 - Security Operations  
**Labs:** 1

Public key cryptography concepts that underpin PKI, TLS, and certificate-based authentication.

| # | Lab | Platform |
|:-:|---|:-:|
| 73 | [Public Key Cryptography](https://tryhackme.com/room/publickeycrypto) | TryHackMe |


## 14. Extra Labs

**Exam Domain:** Supplementary  
**Labs:** 1

Additional practice that complements the core roadmap.

| # | Lab | Platform |
|:-:|---|:-:|
| 74 | [Tardigrade](https://tryhackme.com/room/tardigrade) | TryHackMe |


---

## Tips for Getting the Most Out of These Labs

- **Take notes** on every lab: the tool, the query or command, and the idea behind it, so you can come back to them later.
- **Avoid walkthroughs** until you have genuinely tried on your own.
- **Repeat labs** a few days later without looking at the solution. This is what makes the knowledge stick.
- **Map each lab to its exam domain** to reinforce your preparation, and focus extra time on Domain 1 and Domain 2, which together make up most of the exam.

> These labs are for learning and practice in authorized environments only. Never test any technique on systems you do not own or have explicit permission to test.
