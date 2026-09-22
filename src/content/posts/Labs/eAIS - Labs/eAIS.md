---
title: "eAIS Course Labs Roadmap: AI Security"
published: 2026-09-19
description: "A structured roadmap of 27 TryHackMe labs covering the eAIS course, from AI/ML security fundamentals to prompt injection, supply chain security, RAG security, and MLOps."
tags: [eAIS, Labs, TryHackMe, AI Security, LLM Security, Prompt Injection]
category: Labs
draft: false
---


## Overview

This roadmap supports the **eAIS** course (AI Security) with hands-on TryHackMe labs, organized into 6 sections that follow how an AI system is actually attacked and defended: fundamentals, threat modeling, prompt injection, supply chain security, RAG security, and MLOps and pipeline security. Every link opens the lab directly.

| | |
|---|---|
| **Total labs** | 27 |
| **Platform** | TryHackMe |
| **Sections** | 6 |

> **Note:** the original list included the Unindexed Challenge room twice; it is listed once here. TryHackMe also occasionally moves rooms between free and paid, so if you find a lab that is locked, let me know and I will update the list.


## Section Map

| # | Section | Focus | Labs |
|:-:|---|---|:-:|
| 01 | AI & ML Security Fundamentals | Core concepts of AI/ML threats, models, data, and forensics | 5 |
| 02 | Threat Modeling & Securing AI Systems | Threat modeling, LLM security, and reconnaissance against AI systems | 5 |
| 03 | Prompt Injection & LLM Attacks | Prompt injection, jailbreaking, and defenses | 5 |
| 04 | AI Supply Chain Security | Understanding and securing the AI supply chain | 5 |
| 05 | RAG Security | Retrieval-Augmented Generation security and data poisoning | 4 |
| 06 | MLOps & Pipeline Security | Pipeline automation, source code, and CI/CD security | 3 |

## Suggested Learning Path

1. **Foundations:** AI & ML Security Fundamentals
2. **Security engineering:** Threat Modeling & Securing AI Systems
3. **The core attack class:** Prompt Injection & LLM Attacks
4. **Beyond the model:** AI Supply Chain Security -> RAG Security
5. **The engineering side:** MLOps & Pipeline Security

AI security is a young field that borrows heavily from traditional web and application security, so if a room assumes prior knowledge of concepts like injection attacks or CI/CD, it is worth pairing this roadmap with the fundamentals covered in the web application and DevSecOps labs elsewhere on this blog.


---


## 01. AI & ML Security Fundamentals

**Focus:** Core concepts of AI/ML threats, models, data, and forensics  
**Labs:** 5

The starting point for AI security: understanding threats to AI and ML systems, how models and their data can be attacked, the basics of prompt engineering from a security angle, and an introduction to AI forensics.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [AI/ML Security Threats](https://tryhackme.com/room/aimlsecuritythreats) | TryHackMe |
| 2 | [AI Security Threats](https://tryhackme.com/room/aisecuritythreats) | TryHackMe |
| 3 | [AI Models & Data](https://tryhackme.com/room/aimodelsdata) | TryHackMe |
| 4 | [Prompt Engineering for AI Security](https://tryhackme.com/room/promptengineeringaisec) | TryHackMe |
| 5 | [AI Forensics](https://tryhackme.com/room/aiforensics) | TryHackMe |


## 02. Threat Modeling & Securing AI Systems

**Focus:** Threat modeling, LLM security, and reconnaissance against AI systems  
**Labs:** 5

Applying security engineering to AI: how to secure AI systems and large language models, how to threat model an AI system, and how reconnaissance and assessment work when the target is an AI system rather than a traditional application.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Securing AI Systems](https://tryhackme.com/room/securingaisystems) | TryHackMe |
| 2 | [LLM Security](https://tryhackme.com/room/llmsecurity) | TryHackMe |
| 3 | [AI Threat Modelling](https://tryhackme.com/room/aithreatmodelling) | TryHackMe |
| 4 | [AI System Reconnaissance](https://tryhackme.com/room/aisystemreconnaissance) | TryHackMe |
| 5 | [AI Threat Modelling: Assessment](https://tryhackme.com/room/aithreatmodellingassessment) | TryHackMe |


## 03. Prompt Injection & LLM Attacks

**Focus:** Prompt injection, jailbreaking, and defenses  
**Labs:** 5

The core attack class against large language models: injecting malicious instructions into prompts, jailbreaking safety guardrails, and understanding how prompt-level defenses work, reinforced with two hands-on challenge rooms.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Prompt Injection](https://tryhackme.com/room/promptinjectionls) | TryHackMe |
| 2 | [Jailbreaking](https://tryhackme.com/room/jailbreaking) | TryHackMe |
| 3 | [Prompt Defence](https://tryhackme.com/room/promptdefence) | TryHackMe |
| 4 | [LLMborghini](https://tryhackme.com/room/llmborghini) | TryHackMe |
| 5 | [White Rabbit](https://tryhackme.com/room/whiterabbit) | TryHackMe |


## 04. AI Supply Chain Security

**Focus:** Understanding and securing the AI supply chain  
**Labs:** 5

AI systems depend on a long chain of models, datasets, and dependencies. This section covers how that supply chain works, the attack vectors within it, how to secure it, and two hands-on challenges to apply the concepts.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Understanding AI Supply Chains](https://tryhackme.com/room/understanding-ai-supplychains) | TryHackMe |
| 2 | [Supply Chain Attack Vectors](https://tryhackme.com/room/supplychain-attack-vectors) | TryHackMe |
| 3 | [Securing the AI Supply Chain](https://tryhackme.com/room/securing-the-ai-supplychain) | TryHackMe |
| 4 | [Payload](https://tryhackme.com/room/payload) | TryHackMe |
| 5 | [Checkpoint](https://tryhackme.com/room/checkpoint) | TryHackMe |


## 05. RAG Security

**Focus:** Retrieval-Augmented Generation security and data poisoning  
**Labs:** 4

Security for Retrieval-Augmented Generation (RAG) systems: the fundamentals of RAG security, how data poisoning attacks work against RAG pipelines, a hands-on challenge room, and a capstone-style room to lock down an AI system end to end.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [RAG Security Fundamentals](https://tryhackme.com/room/ragsecurityfundamentals) | TryHackMe |
| 2 | [Data Poisoning in RAG Systems](https://tryhackme.com/room/datapoisoninginragsystems) | TryHackMe |
| 3 | [Unindexed Challenge](https://tryhackme.com/room/unindexedchallenge) | TryHackMe |
| 4 | [Lockdown AI](https://tryhackme.com/room/lockdownai) | TryHackMe |


## 06. MLOps & Pipeline Security

**Focus:** Pipeline automation, source code, and CI/CD security  
**Labs:** 3

Securing the engineering side of AI systems: automating and securing ML pipelines, keeping source code secure, and applying security practices to CI/CD for AI and ML projects.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Intro to Pipeline Automation](https://tryhackme.com/room/introtopipelineautomation) | TryHackMe |
| 2 | [Source Code Security](https://tryhackme.com/room/sourcecodesecurity) | TryHackMe |
| 3 | [CI/CD and Build Security](https://tryhackme.com/room/cicdandbuildsecurity) | TryHackMe |


---

## Tips for Getting the Most Out of These Labs

- **Think in terms of the AI system, not just the model.** Attacks land in the data pipeline, the supply chain, the prompt, and the surrounding application just as often as in the model itself.
- **Take notes** on every lab: the prompt, the payload, and the reasoning behind it, so you can come back to them later.
- **Compare AI attacks to their classic counterparts.** Prompt injection mirrors command injection, and data poisoning mirrors supply chain compromise. Spotting the parallel makes the new material easier to retain.
- **Repeat labs** a few days later without looking at the solution. This is what makes the knowledge stick.

> These labs are for learning and practice in the provided lab environments only. Never test prompt injection, jailbreaking, or supply chain attack techniques against AI systems you do not own or have explicit permission to test.
