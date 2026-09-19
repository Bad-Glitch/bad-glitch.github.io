---
title: "Network+ Course Labs"
published: 2026-09-19
description: "A structured roadmap of 30 TryHackMe labs covering the Network+ course, from networking fundamentals and protocols to traffic analysis and network security tools."
tags: [Network+, CompTIA, Labs, TryHackMe, Network Security, Networking]
category: Labs
draft: false
---


## Overview
clsl
This roadmap supports the **Network+** course with hands-on TryHackMe labs, organized into 7 sections that follow the course flow: networking fundamentals, services and protocols, security and hardening, traffic analysis, detection and monitoring tools, infrastructure, and core security tools.

The roadmap was put together by **Netriders Academy**, with the labs curated by **Ahmed Sultan**. Every link opens the lab directly.

| | |
|---|---|
| **Total labs** | 30 |
| **Platform** | TryHackMe |
| **Sections** | 7 |

> **Note:** the NetworkMiner room appears in two sections (Traffic Analysis and Core Security Tools), so the total counts it twice. TryHackMe also occasionally moves rooms between free and paid, so if you find a lab that is locked, let me know and I will update the list.


## Section Map

| # | Section | Focus | Labs |
|:-:|---|---|:-:|
| 01 | Networking Fundamentals | What a network is, LANs, the OSI model, and packets | 6 |
| 02 | Network Services & Protocols | Common services and core and secure protocols | 4 |
| 03 | Security & Hardening | Device hardening, security architecture, and monitoring | 5 |
| 04 | Traffic Analysis & Packet Inspection | Wireshark, Tcpdump, and NetworkMiner | 6 |
| 05 | Detection & Monitoring Tools | Snort and Zeek | 4 |
| 06 | Advanced Networking & Infrastructure | Virtualization, containers, and networking concepts | 3 |
| 07 | Core Security Tools | Nmap and NetworkMiner | 2 |

## Suggested Learning Path

1. **Foundations:** Networking Concepts and Networking Essentials (from section 06), then Networking Fundamentals
2. **How networks work:** Network Services & Protocols
3. **Seeing the traffic:** Traffic Analysis & Packet Inspection
4. **Protecting the network:** Security & Hardening -> Detection & Monitoring Tools
5. **Infrastructure and tooling:** Advanced Networking & Infrastructure -> Core Security Tools

The two foundational rooms in section 06 are the best warm-up for the whole roadmap, so consider doing them first even though they appear later in the list.


---


## 01. Networking Fundamentals

**Focus:** What a network is, LANs, the OSI model, and packets  
**Labs:** 6

The starting point: what networking is, how local area networks work, the OSI model, how data is broken into packets and frames, and how networks are extended.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [What Is Networking?](https://tryhackme.com/room/whatisnetworking) | TryHackMe |
| 2 | [Intro to LAN](https://tryhackme.com/room/introtolan) | TryHackMe |
| 3 | [OSI Model](https://tryhackme.com/room/osimodelzi) | TryHackMe |
| 4 | [Packets & Frames](https://tryhackme.com/room/packetsframes) | TryHackMe |
| 5 | [Extending Your Network](https://tryhackme.com/room/extendingyournetwork) | TryHackMe |
| 6 | [Intro to Networking](https://tryhackme.com/room/introtonetworking) | TryHackMe |


## 02. Network Services & Protocols

**Focus:** Common services and core and secure protocols  
**Labs:** 4

The services and protocols that make networks useful: how common network services are configured and used, the core protocols of the internet, and their secure counterparts.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Network Services](https://tryhackme.com/room/networkservices) | TryHackMe |
| 2 | [Network Services 2](https://tryhackme.com/room/networkservices2) | TryHackMe |
| 3 | [Networking Core Protocols](https://tryhackme.com/room/networkingcoreprotocols) | TryHackMe |
| 4 | [Networking Secure Protocols](https://tryhackme.com/room/networkingsecureprotocols) | TryHackMe |


## 03. Security & Hardening

**Focus:** Device hardening, security architecture, and monitoring  
**Labs:** 5

Protecting a network: hardening network devices, understanding security architecture and secure protocols, auditing and monitoring, and seeing what an attacker can learn once they are inside.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Network Device Hardening](https://tryhackme.com/room/networkdevicehardening) | TryHackMe |
| 2 | [Intro to Security Architecture](https://tryhackme.com/room/introtosecurityarchitecture) | TryHackMe |
| 3 | [Network Security Protocols](https://tryhackme.com/room/networksecurityprotocols) | TryHackMe |
| 4 | [Auditing and Monitoring](https://tryhackme.com/room/auditingandmonitoringse) | TryHackMe |
| 5 | [The Lay of the Land](https://tryhackme.com/room/thelayoftheland) | TryHackMe |


## 04. Traffic Analysis & Packet Inspection

**Focus:** Wireshark, Tcpdump, and NetworkMiner  
**Labs:** 6

Reading what is actually on the wire: traffic analysis fundamentals, a full Wireshark track (basics, packet operations, traffic analysis), command-line capture with Tcpdump, and extracting artifacts with NetworkMiner.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Traffic Analysis Essentials](https://tryhackme.com/room/trafficanalysisessentials) | TryHackMe |
| 2 | [Wireshark: The Basics](https://tryhackme.com/room/wiresharkthebasics) | TryHackMe |
| 3 | [Wireshark: Packet Operations](https://tryhackme.com/room/wiresharkpacketoperations) | TryHackMe |
| 4 | [Wireshark: Traffic Analysis](https://tryhackme.com/room/wiresharktrafficanalysis) | TryHackMe |
| 5 | [Tcpdump](https://tryhackme.com/room/tcpdump) | TryHackMe |
| 6 | [NetworkMiner](https://tryhackme.com/room/networkminer) | TryHackMe |


## 05. Detection & Monitoring Tools

**Focus:** Snort and Zeek  
**Labs:** 4

Network intrusion detection and monitoring: writing and tuning rules with Snort, applying it in guided challenges, and analyzing network activity with Zeek.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Snort](https://tryhackme.com/room/snort) | TryHackMe |
| 2 | [Snort Challenge 1](https://tryhackme.com/room/snortchallenges1) | TryHackMe |
| 3 | [Snort Challenge 2](https://tryhackme.com/room/snortchallenges2) | TryHackMe |
| 4 | [Zeek](https://tryhackme.com/room/zeekbro) | TryHackMe |


## 06. Advanced Networking & Infrastructure

**Focus:** Virtualization, containers, and networking concepts  
**Labs:** 3

Modern infrastructure: virtualization and containers, plus the Networking Concepts and Networking Essentials rooms, which are foundational and worth doing early even though they sit in this section.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Virtualization and Containers](https://tryhackme.com/room/virtualizationandcontainers) | TryHackMe |
| 2 | [Networking Concepts](https://tryhackme.com/room/networkingconcepts) | TryHackMe |
| 3 | [Networking Essentials](https://tryhackme.com/room/networkingessentials) | TryHackMe |


## 07. Core Security Tools

**Focus:** Nmap and NetworkMiner  
**Labs:** 2

Two essential tools for discovering and inspecting a network: scanning hosts, ports, and services with Nmap, and revisiting NetworkMiner for network forensics.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Nmap](https://tryhackme.com/room/nmap) | TryHackMe |
| 2 | [NetworkMiner](https://tryhackme.com/room/networkminer) | TryHackMe |


---

## Tips for Getting the Most Out of These Labs

- **Draw the network** for every scenario: devices, layers, and the path a packet takes. Networking clicks once you can picture it.
- **Take notes** on every lab: the protocol, the port, and what it does, so you can come back to them later.
- **Capture your own traffic** with Wireshark or Tcpdump while you practice. Seeing real packets makes the theory concrete.
- **Repeat labs** a few days later without looking at the solution. This is what makes the knowledge stick.

> These labs are for learning and practice in the provided lab environments only. Never capture or scan traffic on networks you do not own or have explicit permission to test.
