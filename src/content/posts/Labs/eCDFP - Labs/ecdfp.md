---
title: "eCDFP Lab Roadmap: Digital Forensics & Incident Response"
published: 2026-09-19
description: "A structured roadmap of 17 TryHackMe labs covering the eCDFP course, from DFIR fundamentals and Windows/Linux forensics to investigation tools, case scenarios, and EDR."
tags: [eCDFP, Labs, TryHackMe, DFIR, Digital Forensics, Incident Response]
category: Labs
draft: false
---


## Overview

This roadmap supports the **eCDFP** course (Digital Forensics & Incident Response) with hands-on TryHackMe labs, organized into 6 sections that follow the flow of a real DFIR workflow: fundamentals, system forensics, investigation tools, full case scenarios, endpoint detection, and monitoring. A section with an additional learning resource is included at the end.

The roadmap was put together by **Netriders Academy**, with the labs curated by **Ahmed Sultan**. Every link opens the lab directly.

| | |
|---|---|
| **Total labs** | 17 |
| **Platform** | TryHackMe |
| **Sections** | 6 (plus 1 extra resource) |

> **Note:** TryHackMe occasionally moves rooms between free and paid. If you find a lab that is locked, let me know and I will update the list.


## Section Map

| # | Section | Focus | Labs |
|:-:|---|---|:-:|
| 01 | DFIR Fundamentals | Core DFIR concepts, process, and legal considerations | 4 |
| 02 | Windows & Linux Forensics | Artifacts and evidence on Windows and Linux systems | 4 |
| 03 | DFIR Investigation Tools | Autopsy, KAPE, Velociraptor, and TheHive | 4 |
| 04 | Incident Investigation & Cases | Full investigation scenarios | 2 |
| 05 | Endpoint Detection & Response (EDR) | Endpoint security and EDR | 2 |
| 06 | Detection & Monitoring | Network intrusion detection with Snort | 1 |
| 07 | Extra Learning Resource | DFIR Science YouTube channel | Resource |

## Suggested Learning Path

1. **DFIR Fundamentals:** understand the process and the legal side first
2. **Windows & Linux Forensics:** learn what evidence looks like on each system
3. **DFIR Investigation Tools:** get hands-on with Autopsy, KAPE, Velociraptor, and TheHive
4. **Incident Investigation & Cases:** apply everything on full scenarios
5. **Endpoint Detection & Response (EDR):** see the same activity from the defender's tooling
6. **Detection & Monitoring:** finish with network-level detection


---


## 01. DFIR Fundamentals

**Focus:** Core DFIR concepts, process, and legal considerations  
**Labs:** 4

The starting point: what digital forensics and incident response are, how an investigation is structured, the legal considerations that apply to evidence handling, and how DFIR fits into security operations.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [DFIR: An Introduction](https://tryhackme.com/room/introductoryroomdfirmodule) | TryHackMe |
| 2 | [Intro to Digital Forensics](https://tryhackme.com/room/introdigitalforensics) | TryHackMe |
| 3 | [DFIR Process and Legal Considerations](https://tryhackme.com/room/dfirprocesslegalconsiderations) | TryHackMe |
| 4 | [Security Operations](https://tryhackme.com/room/securityoperations) | TryHackMe |


## 02. Windows & Linux Forensics

**Focus:** Artifacts and evidence on Windows and Linux systems  
**Labs:** 4

Hands-on forensic analysis of the two most common operating systems: Windows artifacts and the registry, and Linux forensics.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Windows Forensics 1](https://tryhackme.com/room/windowsforensics1) | TryHackMe |
| 2 | [Windows Forensics 2](https://tryhackme.com/room/windowsforensics2) | TryHackMe |
| 3 | [Linux Forensics](https://tryhackme.com/room/linuxforensics) | TryHackMe |
| 4 | [Registry Forensics](https://tryhackme.com/room/registry4n6) | TryHackMe |


## 03. DFIR Investigation Tools

**Focus:** Autopsy, KAPE, Velociraptor, and TheHive  
**Labs:** 4

The tools of the trade: disk analysis with Autopsy, fast artifact collection with KAPE, endpoint visibility and hunting with Velociraptor, and case management with TheHive.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Autopsy](https://tryhackme.com/room/btautopsye0) | TryHackMe |
| 2 | [KAPE](https://tryhackme.com/room/kape) | TryHackMe |
| 3 | [Velociraptor](https://tryhackme.com/room/velociraptorhp) | TryHackMe |
| 4 | [TheHive Project](https://tryhackme.com/room/thehiveproject) | TryHackMe |


## 04. Incident Investigation & Cases

**Focus:** Full investigation scenarios  
**Labs:** 2

Put the tools and techniques together in complete case scenarios, working from the evidence to a conclusion the way a real investigation would.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Disgruntled](https://tryhackme.com/room/disgruntled) | TryHackMe |
| 2 | [Critical](https://tryhackme.com/room/critical) | TryHackMe |


## 05. Endpoint Detection & Response (EDR)

**Focus:** Endpoint security and EDR  
**Labs:** 2

How endpoint security works and how EDR tooling detects and records malicious activity on a host.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Intro to Endpoint Security](https://tryhackme.com/room/introtoendpointsecurity) | TryHackMe |
| 2 | [Aurora EDR](https://tryhackme.com/room/auroraedr) | TryHackMe |


## 06. Detection & Monitoring

**Focus:** Network intrusion detection with Snort  
**Labs:** 1

A practical detection exercise: applying Snort to network traffic in a guided challenge.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Snort Challenge 2](https://tryhackme.com/room/snortchallenges2) | TryHackMe |


## 07. Extra Learning Resource

**Type:** Video content

A YouTube channel dedicated to digital forensics and incident response, useful for extra explanations and walkthroughs alongside the labs.

| # | Resource | Type |
|:-:|---|:-:|
| 1 | [DFIR Science](https://www.youtube.com/@dfirscience) | YouTube |


---

## Tips for Getting the Most Out of These Labs

- **Document your process** the way a real investigator would: what you found, where you found it, and why it matters. Good notes are part of the skill.
- **Keep a timeline** for each case scenario. Ordering events is at the heart of every investigation.
- **Avoid walkthroughs** until you have genuinely tried on your own.
- **Repeat labs** a few days later without looking at the solution. This is what makes the knowledge stick.

> These labs are for learning and practice in the provided lab environments only. Only analyze evidence and systems you are authorized to investigate.
