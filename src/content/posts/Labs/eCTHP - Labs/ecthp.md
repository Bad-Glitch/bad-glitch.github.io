---
title: "eCTHP v2 Course Labs Roadmap: Threat Hunting"
published: 2026-09-19
description: "A structured roadmap of 73 TryHackMe labs covering the eCTHP v2 course, from threat hunting fundamentals and detection engineering to Splunk, network analysis tools, and endpoint monitoring."
tags: [eCTHPv2, Labs, TryHackMe, Threat Hunting, SIEM, Splunk, Incident Response]
category: Labs
draft: false
---


## Overview

This roadmap supports the **eCTHP v2** course (Threat Hunting Professional) with hands-on TryHackMe labs, organized into 7 sections: fundamentals, threat hunting and detection, hunting operations and incident response, logs and SIEM with Splunk, network security and analysis, network analysis tools, and endpoint security monitoring. A references section at the end collects cheat sheets and further reading.

The roadmap was put together by **Netriders Academy**, with the labs curated by **Ahmed Sultan**. Every link opens the lab directly.

| | |
|---|---|
| **Total labs** | 73 |
| **Platform** | TryHackMe |
| **Sections** | 7 (plus references) |

> **Note:** two rooms, Windows Event Logs and Windows Internals, appear in more than one section because they support more than one topic, so the total counts each appearance. TryHackMe also occasionally moves rooms between free and paid, so if you find a lab that is locked, let me know and I will update the list.


## Section Map

| # | Section | Focus | Labs |
|:-:|---|---|:-:|
| 01 | Fundamentals & Intro | Logs, threat modeling, risk, vulnerability management, and frameworks | 12 |
| 02 | Threat Hunting & Detection | Threat emulation and detection engineering | 12 |
| 03 | Threat Hunting Operations & IR | Hunting across the attack chain and the incident response lifecycle | 11 |
| 04 | Logs & SIEM (Splunk) | Log analysis and Splunk investigations | 12 |
| 05 | Network Security & Analysis | Network analysis, security protocols, and architecture | 5 |
| 06 | Tools: Traffic, IDS & Packet Analysis | NetworkMiner, Snort, Zeek, Wireshark, and TShark | 14 |
| 07 | Endpoint Security Monitoring | Windows internals, Sysinternals, event logs, and osquery | 7 |
| 08 | References | Cheat sheets and further reading | 7 links |

## Suggested Learning Path

1. **Foundations:** Fundamentals & Intro
2. **Data sources:** Logs & SIEM (Splunk) -> Endpoint Security Monitoring
3. **Network visibility:** Network Security & Analysis -> Tools: Traffic, IDS & Packet Analysis
4. **Detection:** Threat Hunting & Detection
5. **Operations:** Threat Hunting Operations & IR, which ties the earlier sections together in real hunting and response scenarios

Logs, endpoint, and network data are the raw material for every hunt, so getting comfortable with them first makes the detection and hunting sections much easier to follow.


---


## 01. Fundamentals & Intro

**Focus:** Logs, threat modeling, risk, vulnerability management, and frameworks  
**Labs:** 12

The groundwork for threat hunting: Windows event logs and internals, an introduction to threat hunting and threat modeling, risk and vulnerability management, and the frameworks (MITRE ATT&CK, Yara, MISP) that give hunters a shared language.


### Fundamentals

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Windows Event Logs](https://tryhackme.com/room/windowseventlogs) | TryHackMe |
| 2 | [Windows Internals](https://tryhackme.com/room/btwindowsinternals) | TryHackMe |
| 3 | [Introduction to Threat Hunting](https://tryhackme.com/room/introductiontothreathunting) | TryHackMe |
| 4 | [Threat Modelling](https://tryhackme.com/room/threatmodelling) | TryHackMe |


### Risk & Vulnerability Management

| # | Lab | Platform |
|:-:|---|:-:|
| 5 | [Risk Management](https://tryhackme.com/room/seriskmanagement) | TryHackMe |
| 6 | [Vulnerability Management](https://tryhackme.com/room/vulnerabilitymanagementkj) | TryHackMe |
| 7 | [Nessus](https://tryhackme.com/room/rpnessusredux) | TryHackMe |
| 8 | [OpenVAS](https://tryhackme.com/room/openvas) | TryHackMe |
| 9 | [Zero Logon](https://tryhackme.com/room/zer0logon) | TryHackMe |


### Frameworks & Intelligence

| # | Lab | Platform |
|:-:|---|:-:|
| 10 | [MITRE](https://tryhackme.com/room/mitre) | TryHackMe |
| 11 | [Yara](https://tryhackme.com/room/yara) | TryHackMe |
| 12 | [MISP](https://tryhackme.com/room/misp) | TryHackMe |


## 02. Threat Hunting & Detection

**Focus:** Threat emulation and detection engineering  
**Labs:** 12

Emulating adversary behavior to test detections, then turning what you learn into detection rules: Atomic Red Team and Caldera for emulation, and detection engineering with Sigma, threat intelligence for the SOC, EDR, and SOAR automation.


### Threat Emulation

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Threat Emulation Intro](https://tryhackme.com/room/threatemulationintro) | TryHackMe |
| 2 | [Atomic Red Team](https://tryhackme.com/room/atomicredteam) | TryHackMe |
| 3 | [Caldera](https://tryhackme.com/room/caldera) | TryHackMe |
| 4 | [Atomic Bird Goes Purple #1](https://tryhackme.com/room/atomicbirdone) | TryHackMe |
| 5 | [Atomic Bird Goes Purple #2](https://tryhackme.com/room/atomicbirdtwo) | TryHackMe |


### Detection Engineering

| # | Lab | Platform |
|:-:|---|:-:|
| 6 | [Intro to Detection Engineering](https://tryhackme.com/room/introtodetectionengineering) | TryHackMe |
| 7 | [Tactical Detection](https://tryhackme.com/room/tacticaldetection) | TryHackMe |
| 8 | [Threat Intelligence for SOC](https://tryhackme.com/room/threatintelligenceforsoc) | TryHackMe |
| 9 | [Sigma](https://tryhackme.com/room/sigma) | TryHackMe |
| 10 | [Sighunt](https://tryhackme.com/room/sighunt) | TryHackMe |
| 11 | [Aurora EDR](https://tryhackme.com/room/auroraedr) | TryHackMe |
| 12 | [SOAR](https://tryhackme.com/room/soar) | TryHackMe |


## 03. Threat Hunting Operations & IR

**Focus:** Hunting across the attack chain and the incident response lifecycle  
**Labs:** 11

Hunting adversaries from initial foothold to end game, investigating threat intelligence cases, and following the full incident response lifecycle from preparation to lessons learned.


### Threat Hunting

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Threat Hunting: Foothold](https://tryhackme.com/room/threathuntingfoothold) | TryHackMe |
| 2 | [Threat Hunting: Pivoting](https://tryhackme.com/room/threathuntingpivoting) | TryHackMe |
| 3 | [Threat Hunting: Endgame](https://tryhackme.com/room/threathuntingendgame) | TryHackMe |


### Threat Intelligence Investigations

| # | Lab | Platform |
|:-:|---|:-:|
| 4 | [Payment Collectors](https://tryhackme.com/room/paymentcollectors) | TryHackMe |
| 5 | [Typosquatters](https://tryhackme.com/room/typosquatters) | TryHackMe |


### Incident Response Lifecycle

| # | Lab | Platform |
|:-:|---|:-:|
| 6 | [Preparation](https://tryhackme.com/room/preparation) | TryHackMe |
| 7 | [Identification and Scoping](https://tryhackme.com/room/identificationandscoping) | TryHackMe |
| 8 | [Intel Creation and Containment](https://tryhackme.com/room/intelcreationandcontainment) | TryHackMe |
| 9 | [Eradication and Remediation](https://tryhackme.com/room/eradicationandremediation) | TryHackMe |
| 10 | [Lessons Learned](https://tryhackme.com/room/lessonslearned) | TryHackMe |


### Case Study

| # | Lab | Platform |
|:-:|---|:-:|
| 11 | [Tardigrade](https://tryhackme.com/room/tardigrade) | TryHackMe |


## 04. Logs & SIEM (Splunk)

**Focus:** Log analysis and Splunk investigations  
**Labs:** 12

Turning raw logs into answers: log fundamentals and analysis, a full Splunk track from basics through SPL, dashboards, and data manipulation, and investigation challenges to test what you have learned.


### Log Fundamentals

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Intro to Logs](https://tryhackme.com/room/introtologs) | TryHackMe |
| 2 | [Log Operations](https://tryhackme.com/room/logoperations) | TryHackMe |
| 3 | [Intro to Log Analysis](https://tryhackme.com/room/introtologanalysis) | TryHackMe |


### Splunk

| # | Lab | Platform |
|:-:|---|:-:|
| 4 | [Splunk: Basics](https://tryhackme.com/room/splunk101) | TryHackMe |
| 5 | [Splunk 201](https://tryhackme.com/room/splunk201) | TryHackMe |
| 6 | [Splunk: Exploring SPL](https://tryhackme.com/room/splunkexploringspl) | TryHackMe |
| 7 | [Splunk: Setting up a SOC Lab](https://tryhackme.com/room/splunklab) | TryHackMe |
| 8 | [Splunk: Dashboards and Reports](https://tryhackme.com/room/splunkdashboardsandreports) | TryHackMe |
| 9 | [Splunk: Data Manipulation](https://tryhackme.com/room/splunkdatamanipulation) | TryHackMe |
| 10 | [Fixit](https://tryhackme.com/room/fixit) | TryHackMe |


### Investigation Challenges

| # | Lab | Platform |
|:-:|---|:-:|
| 11 | [Investigating with Splunk](https://tryhackme.com/room/investigatingwithsplunk) | TryHackMe |
| 12 | [Benign](https://tryhackme.com/room/benign) | TryHackMe |


## 05. Network Security & Analysis

**Focus:** Network analysis, security protocols, and architecture  
**Labs:** 5

Understanding and defending the network: analyzing Windows network activity, secure protocols, auditing and monitoring, security architecture, and a larger network challenge to apply it all.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Windows Network Analysis](https://tryhackme.com/room/windowsnetworkanalysis) | TryHackMe |
| 2 | [Network Security Protocols](https://tryhackme.com/room/networksecurityprotocols) | TryHackMe |
| 3 | [Auditing and Monitoring](https://tryhackme.com/room/auditingandmonitoringse) | TryHackMe |
| 4 | [Intro to Security Architecture](https://tryhackme.com/room/introtosecurityarchitecture) | TryHackMe |
| 5 | [Holo](https://tryhackme.com/room/hololive) | TryHackMe |


## 06. Tools: Traffic, IDS & Packet Analysis

**Focus:** NetworkMiner, Snort, Zeek, Wireshark, and TShark  
**Labs:** 14

The core network analysis toolkit for a threat hunter: traffic analysis fundamentals and NetworkMiner, intrusion detection with Snort and Zeek, and packet analysis with Wireshark and TShark, each with hands-on challenges.


### Traffic Analysis & NetworkMiner

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Traffic Analysis Essentials](https://tryhackme.com/room/trafficanalysisessentials) | TryHackMe |
| 2 | [NetworkMiner](https://tryhackme.com/room/networkminer) | TryHackMe |


### Snort

| # | Lab | Platform |
|:-:|---|:-:|
| 3 | [Snort](https://tryhackme.com/room/snort) | TryHackMe |
| 4 | [Snort Challenge 1](https://tryhackme.com/room/snortchallenges1) | TryHackMe |
| 5 | [Snort Challenge 2](https://tryhackme.com/room/snortchallenges2) | TryHackMe |


### Zeek

| # | Lab | Platform |
|:-:|---|:-:|
| 6 | [Zeek](https://tryhackme.com/room/zeekbro) | TryHackMe |
| 7 | [Zeek Exercises](https://tryhackme.com/room/zeekbroexercises) | TryHackMe |


### Wireshark

| # | Lab | Platform |
|:-:|---|:-:|
| 8 | [Wireshark: The Basics](https://tryhackme.com/room/wiresharkthebasics) | TryHackMe |
| 9 | [Wireshark: Packet Operations](https://tryhackme.com/room/wiresharkpacketoperations) | TryHackMe |
| 10 | [Wireshark: Traffic Analysis](https://tryhackme.com/room/wiresharktrafficanalysis) | TryHackMe |


### TShark

| # | Lab | Platform |
|:-:|---|:-:|
| 11 | [TShark: The Basics](https://tryhackme.com/room/tsharkthebasics) | TryHackMe |
| 12 | [TShark: CLI Wireshark Features](https://tryhackme.com/room/tsharkcliwiresharkfeatures) | TryHackMe |
| 13 | [TShark Challenge I](https://tryhackme.com/room/tsharkchallengesone) | TryHackMe |
| 14 | [TShark Challenge II](https://tryhackme.com/room/tsharkchallengestwo) | TryHackMe |


## 07. Endpoint Security Monitoring

**Focus:** Windows internals, Sysinternals, event logs, and osquery  
**Labs:** 7

Monitoring what happens on a host: endpoint security fundamentals, Windows internals, Sysinternals, event logs, and osquery, capped with two investigation exercises.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Intro to Endpoint Security](https://tryhackme.com/room/introtoendpointsecurity) | TryHackMe |
| 2 | [Windows Internals](https://tryhackme.com/room/btwindowsinternals) | TryHackMe |
| 3 | [Sysinternals](https://tryhackme.com/room/btsysinternalssg) | TryHackMe |
| 4 | [Windows Event Logs](https://tryhackme.com/room/windowseventlogs) | TryHackMe |
| 5 | [Osquery: The Basics](https://tryhackme.com/room/osqueryf8) | TryHackMe |
| 6 | [Monday Monitor](https://tryhackme.com/room/mondaymonitor) | TryHackMe |
| 7 | [Retracted](https://tryhackme.com/room/retracted) | TryHackMe |


## 08. References

Cheat sheets, workshop material, and further reading that complement the labs.

| # | Resource | Type |
|:-:|---|:-:|
| 1 | [eCTHPv2 Certification](https://elearnsecurity.com/product/ecthpv2-certification/) | Certification page |
| 2 | [Tcpdump Cheat Sheet (PacketLife)](https://packetlife.net/media/library/12/tcpdump.pdf) | Cheat sheet |
| 3 | [Wireshark Display Filters (PacketLife)](https://packetlife.net/media/library/13/Wireshark_Display_Filters.pdf) | Cheat sheet |
| 4 | [RITA Cheat Sheet (Active Countermeasures)](https://www.activecountermeasures.com/wp-content/uploads/2021/06/RITA-Cheat-Sheet.pdf) | Cheat sheet |
| 5 | [OMFW 2012 Case (Volatility Foundation)](https://downloads.volatilityfoundation.org//omfw/2012/OMFW2012_Case.pdf) | Workshop material |
| 6 | [Detecting the Elusive: Active Directory Threat Hunting (BSidesCharm 2017)](https://adsecurity.org/wp-content/uploads/2017/04/2017-BSidesCharm-DetectingtheElusive-ActiveDirectoryThreatHunting-Final.pdf) | Slides |
| 7 | [JPCERT/CC Tool Analysis Result Sheet](https://jpcertcc.github.io/ToolAnalysisResultSheet/) | Reference |


---

## Tips for Getting the Most Out of These Labs

- **Hunt with a hypothesis.** Before opening a log or a packet capture, write down what you expect to find and why. That habit is what separates hunting from browsing.
- **Take notes** on every lab: the query, the artifact, and the reasoning behind it, so you can come back to them later.
- **Save your queries.** Splunk searches, Sigma rules, and Wireshark filters you write become your personal hunting library.
- **Repeat labs** a few days later without looking at the solution. This is what makes the knowledge stick.

> These labs are for learning and practice in the provided lab environments only. Only hunt in environments and on data you are authorized to analyze.
