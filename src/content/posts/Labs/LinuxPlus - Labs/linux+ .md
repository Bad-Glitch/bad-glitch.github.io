---
title: "Linux+ Course Labs "
published: 2026-09-19
description: "A structured roadmap of 27 hands-on labs on TryHackMe and KodeKloud covering the Linux+ course, from command line fundamentals to storage management and troubleshooting."
tags: [Linux+, CompTIA, Labs, TryHackMe, KodeKloud, Linux]
category: Labs
draft: false
---


## Overview

This roadmap supports the **Linux+** course with hands-on labs on TryHackMe and KodeKloud, organized into 9 sections that follow the course flow: Linux fundamentals, the shell, system internals, package management, networking, users and permissions, automation, storage, and a final troubleshooting scenario.

The roadmap was put together by **Netriders Academy**, with the labs curated by **Ahmed Sultan**. Every link opens the lab directly.

| | |
|---|---|
| **Total labs** | 27 |
| **TryHackMe** | 8 |
| **KodeKloud** | 19 |
| **Sections** | 9 |

> **Note:** TryHackMe occasionally moves rooms between free and paid, and KodeKloud's free labs may require you to sign in. If you find a lab that is locked, let me know and I will update the list.


## Section Map

| # | Section | Focus | Labs |
|:-:|---|---|:-:|
| 01 | Linux Fundamentals & Core Concepts | Command line basics and hands-on Linux investigation | 8 |
| 02 | Shell & System Basics | The shell, the bash prompt, and the vi editor | 4 |
| 03 | System Internals | The Linux kernel, kernel modules, and the boot process | 2 |
| 04 | Package Management | RPM/YUM and DPKG/APT | 2 |
| 05 | Networking & DNS | DNS, network configuration, and remote access | 3 |
| 06 | Users, Permissions & Security | Account management, permissions, and ownership | 2 |
| 07 | Automation & Services | Scheduled jobs and systemd services | 2 |
| 08 | Storage Management | Partitions, filesystems, and LVM | 3 |
| 09 | Final Practice & Troubleshooting | A capstone troubleshooting scenario | 1 |

## Suggested Learning Path

1. **Foundations:** Linux Fundamentals & Core Concepts -> Shell & System Basics
2. **Under the hood:** System Internals -> Package Management
3. **Administration:** Networking & DNS -> Users, Permissions & Security -> Automation & Services -> Storage Management
4. **Capstone:** Final Practice & Troubleshooting

The sections follow the order of the course, so working through them in sequence is the easiest path. The investigation rooms at the end of the first section make a good second pass once you have finished the administration topics.


---


## 01. Linux Fundamentals & Core Concepts

**Focus:** Command line basics and hands-on Linux investigation  
**Labs:** 8

Start with the TryHackMe Linux Fundamentals trilogy to get comfortable with the command line, then move on to investigation-style rooms that show how Linux behaves under real conditions: incident surface, process analysis, logs, and live analysis.


### Linux Fundamentals

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Linux Fundamentals Part 1](https://tryhackme.com/room/linuxfundamentalspart1) | TryHackMe |
| 2 | [Linux Fundamentals Part 2](https://tryhackme.com/room/linuxfundamentalspart2) | TryHackMe |
| 3 | [Linux Fundamentals Part 3](https://tryhackme.com/room/linuxfundamentalspart3) | TryHackMe |


### Investigation & Analysis

| # | Lab | Platform |
|:-:|---|:-:|
| 4 | [Linux Incident Surface](https://tryhackme.com/room/linuxincidentsurface) | TryHackMe |
| 5 | [Linux Process Analysis](https://tryhackme.com/room/linuxprocessanalysis) | TryHackMe |
| 6 | [Linux Logs Investigations](https://tryhackme.com/room/linuxlogsinvestigations) | TryHackMe |
| 7 | [Linux Live Analysis](https://tryhackme.com/room/linuxliveanalysis) | TryHackMe |
| 8 | [IronShade](https://tryhackme.com/room/ironshade) | TryHackMe |


## 02. Shell & System Basics

**Focus:** The shell, the bash prompt, and the vi editor  
**Labs:** 4

Working confidently in the shell is the foundation of everything else: navigating and using the command line, customizing the bash prompt, and editing files with vi.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Working with the Shell](https://kodekloud.com/pages/free-labs/linux/working-with-the-shell) | KodeKloud |
| 2 | [Linux Bash Prompt](https://kodekloud.com/pages/free-labs/linux/linux-bash-prompt) | KodeKloud |
| 3 | [Working with the Shell II](https://kodekloud.com/pages/free-labs/linux/working-with-shell-ii) | KodeKloud |
| 4 | [Vi Editor](https://kodekloud.com/pages/free-labs/linux/vi-editor) | KodeKloud |


## 03. System Internals

**Focus:** The Linux kernel, kernel modules, and the boot process  
**Labs:** 2

What sits underneath the operating system: the Linux kernel, loadable kernel modules, the boot process, and file types.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Linux Kernel](https://kodekloud.com/pages/free-labs/linux/linux-kernel) | KodeKloud |
| 2 | [Linux Kernel Modules, Boot and File Types](https://kodekloud.com/pages/free-labs/linux/linux-kernel-modules-boot-and-filetypes) | KodeKloud |


## 04. Package Management

**Focus:** RPM/YUM and DPKG/APT  
**Labs:** 2

Installing, updating, and removing software on both major Linux families: Red Hat-based systems with RPM and YUM, and Debian-based systems with DPKG and APT.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [YUM and RPM](https://kodekloud.com/pages/free-labs/linux/yum-and-rpm) | KodeKloud |
| 2 | [DPKG and APT](https://kodekloud.com/pages/free-labs/linux/dpkg-and-apt) | KodeKloud |


## 05. Networking & DNS

**Focus:** DNS, network configuration, and remote access  
**Labs:** 3

Configuring and troubleshooting Linux networking: DNS resolution, network basics, and secure remote access and file transfer with SSH and SCP.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [DNS](https://kodekloud.com/pages/free-labs/linux/dns) | KodeKloud |
| 2 | [Network Basics](https://kodekloud.com/pages/free-labs/linux/network-basics) | KodeKloud |
| 3 | [SSH and SCP](https://kodekloud.com/pages/free-labs/linux/ssh-and-scp) | KodeKloud |


## 06. Users, Permissions & Security

**Focus:** Account management, permissions, and ownership  
**Labs:** 2

Controlling who can do what: managing user accounts and groups, and understanding file permissions and ownership.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Account Management](https://kodekloud.com/pages/free-labs/linux/account-management) | KodeKloud |
| 2 | [Permissions and Ownership](https://kodekloud.com/pages/free-labs/linux/permissions-and-ownership) | KodeKloud |


## 07. Automation & Services

**Focus:** Scheduled jobs and systemd services  
**Labs:** 2

Automating tasks with cron jobs and managing services with systemd.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Cron Jobs](https://kodekloud.com/pages/free-labs/linux/cronjob) | KodeKloud |
| 2 | [Systemd Services](https://kodekloud.com/pages/free-labs/linux/systemd-services) | KodeKloud |


## 08. Storage Management

**Focus:** Partitions, filesystems, and LVM  
**Labs:** 3

Managing disks the way an administrator does: creating partitions, working with filesystems, and using Logical Volume Manager (LVM) for flexible storage.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Partitions](https://kodekloud.com/pages/free-labs/linux/partitions) | KodeKloud |
| 2 | [Filesystems](https://kodekloud.com/pages/free-labs/linux/filesystems) | KodeKloud |
| 3 | [LVM](https://kodekloud.com/pages/free-labs/linux/lvm) | KodeKloud |


## 09. Final Practice & Troubleshooting

**Focus:** A capstone troubleshooting scenario  
**Labs:** 1

Bring everything together with a troubleshooting scenario. If you feel rusty after finishing, revisit Linux Fundamentals Part 1 from the first section as a quick refresher.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Final Troubleshooting Scenario](https://kodekloud.com/pages/free-labs/linux/final-troubleshooting-scenario) | KodeKloud |


---

## Tips for Getting the Most Out of These Labs

- **Type every command yourself** instead of copying and pasting. Muscle memory in the shell is the goal.
- **Take notes** on every lab: the command, its options, and what it does, so you can come back to them later.
- **Break things on purpose** (in the lab environment) and then fix them. This is the best preparation for troubleshooting questions.
- **Repeat labs** a few days later without looking at the solution. This is what makes the knowledge stick.

> These labs are for learning and practice in the provided lab environments only.
