---
title: "Security+ (SY0-701) Labs"
published: 2026-09-19
description: "A structured roadmap of 104 hands-on labs on 101Labs and TryHackMe covering the Security+ (SY0-701) course, from reconnaissance and web attacks to scripting, security tools, and governance."
tags: [Security+, CompTIA, Labs, 101Labs, TryHackMe, Penetration Testing, Network Security]
category: Labs
draft: false
---


## Overview

This roadmap supports the **Security+ (SY0-701)** course with hands-on labs from 101Labs and TryHackMe, organized into 15 sections that take you from reconnaissance and network basics through web attacks, password cracking, wireless, shells and post-exploitation, scripting, and security tools, ending with governance, risk, and architecture.

The roadmap was put together by **Netriders Academy**, with the labs curated by **Ahmed Sultan**. Every link opens the lab directly.

| | |
|---|---|
| **Total labs** | 104 |
| **101Labs (CompTIA Security+ labs)** | 96 |
| **TryHackMe** | 8 |
| **Sections** | 15 |

> **Note:** four labs (hping, ARP reconnaissance, Nessus, and OpenVPN) appear in two sections because they support more than one topic, so the total counts each appearance (100 unique labs). The final review list in section 15 points back to earlier labs rather than repeating their links. TryHackMe also occasionally moves rooms between free and paid, so if you find a lab that is locked, let me know and I will update the list.


## Exam Domains at a Glance

Most labs in this roadmap are practical, so they concentrate on the threat and operations domains of SY0-701. The conceptual domains are covered mainly by section 14, alongside your study notes.

| Domain | Exam Weight | Main Sections in This Roadmap |
|---|:-:|---|
| General Security Concepts | 12% | 14 |
| Threats, Vulnerabilities, and Mitigations | 22% | 03, 05, 06, 08, 09 |
| Security Architecture | 18% | 14 |
| Security Operations | 28% | 01, 02, 04, 07, 10, 11, 12, 13 |
| Security Program Management and Oversight | 20% | 14 |


## Section Map

| # | Section | Focus | Labs |
|:-:|---|---|:-:|
| 01 | Reconnaissance & Network Basics | Information gathering and core network utilities | 12 |
| 02 | Scanning & Enumeration | IP scanners, anonymous scanning, and hping | 3 |
| 03 | Web Attacks & Vulnerabilities | Classic web attacks and the OWASP Top 10 | 15 |
| 04 | Web Tools & Exploitation | Burp Suite, cURL, Gobuster, Nikto, ZAP, and Nessus | 7 |
| 05 | Passwords, Hashing & Cracking | Hashcat, John the Ripper, and Responder | 4 |
| 06 | Wireless Attacks | Evil twin, WPS, WPA handshakes, and Wi-Fi monitoring | 6 |
| 07 | Network Tools & Traffic Analysis | Netcat, Tcpdump, Wireshark, hping, and ARP | 5 |
| 08 | Shells, Exploitation & Post-Exploitation | Reverse and bind shells, MSFvenom, and Meterpreter | 14 |
| 09 | Privilege Escalation | Enumeration for privilege escalation and process inspection | 4 |
| 10 | Linux & System Skills | Linux concepts, file operations, and VPN access | 5 |
| 11 | Scripting & Automation | Bash, Python, and PowerShell scripting | 8 |
| 12 | Security Tools & Frameworks | Hydra, SQLmap, Sn1per, BeEF, Nessus, and OpenVAS | 6 |
| 13 | OSINT & Misc Tools | Site cloning, checksums, SSH, and lab setup | 6 |
| 14 | Governance, Risk & Architecture | Security principles, cryptography, IAM, governance, and architecture | 8 |
| 15 | Advanced Topics & Final Review | Weaponizing vulnerabilities and a final review set | 1 |

## Suggested Learning Path

1. **Foundations:** Linux & System Skills -> Reconnaissance & Network Basics -> Scanning & Enumeration
2. **Concepts:** Governance, Risk & Architecture, alongside your study notes
3. **Web:** Web Attacks & Vulnerabilities -> Web Tools & Exploitation
4. **Attacks and credentials:** Passwords, Hashing & Cracking -> Wireless Attacks -> Network Tools & Traffic Analysis
5. **Exploitation:** Shells, Exploitation & Post-Exploitation -> Privilege Escalation
6. **Tooling and automation:** Security Tools & Frameworks -> Scripting & Automation -> OSINT & Misc Tools
7. **Wrap-up:** Advanced Topics & Final Review

Section 10 (Linux & System Skills) is the best warm-up, since almost every other lab assumes you are comfortable in a Linux shell and connected to the lab network.


---


## 01. Reconnaissance & Network Basics

**Focus:** Information gathering and core network utilities  
**Labs:** 12

Learn the command-line tools every security professional uses to gather information and inspect a network: Nmap, Recon-ng, theHarvester, DNS tools, and the everyday utilities (ping, traceroute, netstat, ARP, ipconfig/ifconfig).

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Nmap](https://www.101labs.net/comptia-security/lab-2-nmap/) | 101Labs |
| 2 | [Recon-ng](https://www.101labs.net/comptia-security/lab-3-recon-ng/) | 101Labs |
| 3 | [Information Gathering Using theHarvester](https://www.101labs.net/comptia-security/lab-8-information-gathering-using-theharvester/) | 101Labs |
| 4 | [Nslookup](https://www.101labs.net/comptia-security/lab-16-nslookup/) | 101Labs |
| 5 | [Dig](https://www.101labs.net/comptia-security/lab-17-dig/) | 101Labs |
| 6 | [Using Traceroute in Linux](https://www.101labs.net/comptia-security/lab-11-using-traceroute-in-linux/) | 101Labs |
| 7 | [Ping and Its Various Uses](https://www.101labs.net/comptia-security/lab-12-ping-and-its-various-uses/) | 101Labs |
| 8 | [Using Netstat to View Networking Information](https://www.101labs.net/comptia-security/lab-21-using-netstat-to-view-networking-information/) | 101Labs |
| 9 | [Using ARP for Network Reconnaissance](https://www.101labs.net/comptia-security/lab-24-using-arp-for-network-reconnaissance/) | 101Labs |
| 10 | [Using ipconfig to View and Modify Network Information on Windows](https://www.101labs.net/comptia-security/lab-18-using-ipconfig-to-view-and-modify-network-information-on-windows/) | 101Labs |
| 11 | [Using ifconfig to View and Modify Network Information on Linux](https://www.101labs.net/comptia-security/lab-19-using-ifconfig-to-view-and-modify-network-information-on-linux/) | 101Labs |
| 12 | [Gathering DNS Information with DNSenum](https://www.101labs.net/comptia-security/lab-28-gathering-dns-information-with-dnsenum/) | 101Labs |


## 02. Scanning & Enumeration

**Focus:** IP scanners, anonymous scanning, and hping  
**Labs:** 3

Discovering hosts and services on a network with IP scanners, anonymous port scanning, and hping for auditing and testing network devices.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [IP Scanners](https://www.101labs.net/comptia-security/lab-23-ip-scanners/) | 101Labs |
| 2 | [Using Scanless for Easy Anonymous Port Scanning](https://www.101labs.net/comptia-security/lab-26-using-scanless-for-easy-anonymous-port-scanning/) | 101Labs |
| 3 | [hping for Security Auditing and Testing of Network Devices](https://www.101labs.net/comptia-security/lab-20-hping-for-security-auditing-and-testing-of-network-devices/) | 101Labs |


## 03. Web Attacks & Vulnerabilities

**Focus:** Classic web attacks and the OWASP Top 10  
**Labs:** 15

The most common web application attacks in practice: XSS, CSRF, directory traversal, SQL injection, and broken access control, followed by a walk through the OWASP Top 10 (A1 to A10) one lab at a time.


### Common Web Attacks

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Conducting a Cross-Site Scripting (XSS) Attack](https://www.101labs.net/comptia-security/lab-5-conducting-a-cross-site-scripting-xxs-attack/) | 101Labs |
| 2 | [Directory Traversal](https://www.101labs.net/comptia-security/lab-27-directory-traversal/) | 101Labs |
| 3 | [Cross-Site Request Forgery (CSRF)](https://www.101labs.net/comptia-security/lab-36-cross-site-request-forgery-csrf/) | 101Labs |
| 4 | [Manual SQL Injection](https://www.101labs.net/comptia-security/lab-39-manual-sql-injection/) | 101Labs |
| 5 | [Broken Access Control](https://www.101labs.net/comptia-security/lab-40-broken-access-control/) | 101Labs |


### OWASP Top 10

| # | Lab | Platform |
|:-:|---|:-:|
| 6 | [OWASP A1: OS Command Injection](https://www.101labs.net/comptia-security/lab-87-owasp-a1-os-command-injection/) | 101Labs |
| 7 | [OWASP A2: Broken Authentication and Session Management (Username Enumeration)](https://www.101labs.net/comptia-security/lab-88-owasp-a2-broken-authentication-and-session-management-username-enumeration-vulnerability/) | 101Labs |
| 8 | [OWASP A3: Sensitive Information Disclosure](https://www.101labs.net/comptia-security/lab-89-owasp-a3-sensitive-information-disclosure/) | 101Labs |
| 9 | [OWASP A4: XML External Entities (XXE)](https://www.101labs.net/comptia-security/lab-90-owasp-a4-eml-external-entities-xxe/) | 101Labs |
| 10 | [OWASP A5: Broken Access Control](https://www.101labs.net/comptia-security/lab-91-owasp-a5-broken-access-control/) | 101Labs |
| 11 | [OWASP A6: Security Misconfiguration](https://www.101labs.net/comptia-security/lab-92-owasp-a6-security-misconfiguration/) | 101Labs |
| 12 | [OWASP A7: Cross-Site Scripting (XSS)](https://www.101labs.net/comptia-security/lab-93-owasp-a7-cross-site-scripting-xss/) | 101Labs |
| 13 | [OWASP A8: Insecure Deserialization](https://www.101labs.net/comptia-security/lab-94-owasp-a8-insecure-deserialization/) | 101Labs |
| 14 | [OWASP A9: Using Components with Known Vulnerabilities](https://www.101labs.net/comptia-security/lab-95-owasp-a9-using-components-with-known-vulnerabilities/) | 101Labs |
| 15 | [OWASP A10: Unvalidated Redirects and Forwards](https://www.101labs.net/comptia-security/lab-96-owasp-top-10-a10-unvalidated-redirects-and-forwards/) | 101Labs |


## 04. Web Tools & Exploitation

**Focus:** Burp Suite, cURL, Gobuster, Nikto, ZAP, and Nessus  
**Labs:** 7

The tooling behind web testing: intercepting and manipulating requests with Burp Suite, working with cURL, discovering directories with Gobuster, and scanning for vulnerabilities with Nikto, ZAP, and Nessus.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [How to Use Burp Suite to Intercept Client-Side Requests](https://www.101labs.net/comptia-security/lab-7-how-to-use-burp-suite-to-intercept-client-side-requests/) | 101Labs |
| 2 | [Using Burp Suite's Intruder](https://www.101labs.net/comptia-security/lab-38-using-burp-suites-intruder/) | 101Labs |
| 3 | [Using cURL](https://www.101labs.net/comptia-security/lab-10-using-curl/) | 101Labs |
| 4 | [Using Gobuster to Discover Directories](https://www.101labs.net/comptia-security/lab-37-using-gobuster-to-discover-directories/) | 101Labs |
| 5 | [Web Application Vulnerability Scanning with Nikto](https://www.101labs.net/comptia-security/lab-43-web-application-vulnerability-scanning-with-nikto/) | 101Labs |
| 6 | [Web Server Vulnerability Scanning with ZAP](https://www.101labs.net/comptia-security/lab-44-web-server-vulnerability-scanning-with-zap/) | 101Labs |
| 7 | [Running a Vulnerability Scan with Nessus](https://www.101labs.net/comptia-security/lab-73-running-a-vulnerability-scan-with-nessus/) | 101Labs |


## 05. Passwords, Hashing & Cracking

**Focus:** Hashcat, John the Ripper, and Responder  
**Labs:** 4

How passwords are attacked: cracking with Hashcat and John the Ripper, and capturing password hashes on the network with Responder.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [How to Crack Passwords with Hashcat](https://www.101labs.net/comptia-security/lab-30-how-to-crack-passwords-with-hashcat/) | 101Labs |
| 2 | [Cracking Basic Hashes with John the Ripper](https://www.101labs.net/comptia-security/lab-62-cracking-basic-hashes-with-john-the-ripper/) | 101Labs |
| 3 | [More Advanced Uses of John the Ripper](https://www.101labs.net/comptia-security/lab-64-more-advanced-uses-of-john-the-ripper/) | 101Labs |
| 4 | [Capturing Password Hashes with Responder](https://www.101labs.net/comptia-security/lab-45-capturing-password-hashes-with-responder/) | 101Labs |


## 06. Wireless Attacks

**Focus:** Evil twin, WPS, WPA handshakes, and Wi-Fi monitoring  
**Labs:** 6

Wireless security in practice: evil twin attacks, WPS attacks with Reaver and Wifite, discovering networks and capturing WPA handshakes with the Aircrack-ng suite, and monitoring signals with Kismet.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Evil Twin Attack with Airgeddon](https://www.101labs.net/comptia-security/lab-9-evil-twin-attack-with-airgeddon/) | 101Labs |
| 2 | [Hack WPS with Reaver](https://www.101labs.net/comptia-security/lab-34-hack-wps-with-reaver/) | 101Labs |
| 3 | [Hacking WPS Networks with Wifite](https://www.101labs.net/comptia-security/lab-49-hacking-wps-networks-with-wifite/) | 101Labs |
| 4 | [How to Discover Nearby Wi-Fi Networks with Airodump-ng](https://www.101labs.net/comptia-security/lab-52-how-to-discover-nearby-wi-fi-networks-with-airodump-ng/) | 101Labs |
| 5 | [How to Capture a WPA Handshake File Using Airodump-ng and Aireplay-ng](https://www.101labs.net/comptia-security/lab-53-how-to-capture-a-wpa-handshake-file-using-airodump-ng-and-aireplay-ng/) | 101Labs |
| 6 | [Monitoring Wi-Fi Signals with Kismet](https://www.101labs.net/comptia-security/lab-46-monitoring-wi-fi-signals-with-kismet/) | 101Labs |


## 07. Network Tools & Traffic Analysis

**Focus:** Netcat, Tcpdump, Wireshark, hping, and ARP  
**Labs:** 5

Working with traffic directly: Netcat for connections, Tcpdump and Wireshark for capturing and inspecting packets (including credentials sent over HTTP), and hping and ARP for probing devices.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Netcat](https://www.101labs.net/comptia-security/lab-22-netcat/) | 101Labs |
| 2 | [Packet Capture with Tcpdump](https://www.101labs.net/comptia-security/lab-51-packet-capture-with-tcpdump/) | 101Labs |
| 3 | [Capturing Credentials Submitted Through HTTP with Wireshark](https://www.101labs.net/comptia-security/lab-50-capturing-credentials-submitted-through-http-with-wireshark/) | 101Labs |
| 4 | [hping for Security Auditing and Testing of Network Devices](https://www.101labs.net/comptia-security/lab-20-hping-for-security-auditing-and-testing-of-network-devices/) | 101Labs |
| 5 | [Using ARP for Network Reconnaissance](https://www.101labs.net/comptia-security/lab-24-using-arp-for-network-reconnaissance/) | 101Labs |


## 08. Shells, Exploitation & Post-Exploitation

**Focus:** Reverse and bind shells, MSFvenom, and Meterpreter  
**Labs:** 14

From getting a shell to using it: reverse and bind shells with Netcat and Socat, stabilizing shells, building payloads with MSFvenom, and working with Meterpreter, including process migration and exploiting a vulnerable FTP service.


### Netcat & Socat Shells

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Getting a Reverse Shell on a Server Through a File Upload](https://www.101labs.net/comptia-security/lab-41-getting-a-reverse-shell-on-a-server-through-a-file-upload/) | 101Labs |
| 2 | [Establishing a Reverse Shell with Netcat](https://www.101labs.net/comptia-security/lab-65-establishing-a-reverse-shell-with-netcat/) | 101Labs |
| 3 | [How to Stabilise Netcat Shells](https://www.101labs.net/comptia-security/lab-67-how-to-stabilise-netcat-shells/) | 101Labs |
| 4 | [Getting a Reverse Shell Using Socat](https://www.101labs.net/comptia-security/lab-68-getting-a-reverse-shell-using-socat/) | 101Labs |
| 5 | [Establishing a Bind Shell Using Socat](https://www.101labs.net/comptia-security/lab-69-establishing-a-bind-shell-using-socat/) | 101Labs |
| 6 | [Establishing a Stable Socat Shell](https://www.101labs.net/comptia-security/lab-70-establishing-a-stable-socat-shell/) | 101Labs |


### Metasploit & Meterpreter

| # | Lab | Platform |
|:-:|---|:-:|
| 7 | [Creating Metasploit Payloads with MSFvenom](https://www.101labs.net/comptia-security/lab-74-creating-metasploit-payloads-with-msfvenom/) | 101Labs |
| 8 | [Establishing a Reverse Shell on a Linux Target Using MSFvenom and Metasploit](https://www.101labs.net/comptia-security/lab-75-establishing-a-reverse-shell-on-a-linux-target-using-msfvenom-and-metasploit/) | 101Labs |
| 9 | [Basic Meterpreter Commands](https://www.101labs.net/comptia-security/lab-77-basic-meterpreter-commands/) | 101Labs |
| 10 | [More Advanced Meterpreter Commands](https://www.101labs.net/comptia-security/lab-78-more-advanced-meterpreter-commands/) | 101Labs |
| 11 | [How to Migrate to a Different Process on the Target Machine After Establishing a Meterpreter Shell](https://www.101labs.net/comptia-security/lab-83-how-to-migrate-to-a-different-process-on-the-target-machine-after-establishing-a-meterpreter-shell/) | 101Labs |
| 12 | [How to Establish a Meterpreter Shell on a Windows Target Using SET](https://www.101labs.net/comptia-security/lab-82-how-establish-a-meterpreter-shell-on-a-windows-target-using-set/) | 101Labs |
| 13 | [Upgrading a Limited Shell to Meterpreter Shell Using Metasploit](https://www.101labs.net/comptia-security/lab-71-upgrading-a-limited-shell-to-meterpreter-shell-using-metasploit/) | 101Labs |
| 14 | [Exploiting a Vulnerable FTP Service to Gain a Shell Using Metasploit](https://www.101labs.net/comptia-security/lab-72-exploiting-a-vulnerable-ftp-service-to-gain-a-shell-using-metasploit/) | 101Labs |


## 09. Privilege Escalation

**Focus:** Enumeration for privilege escalation and process inspection  
**Labs:** 4

Escalating privileges manually with Python and enumerating for weaknesses with WinPEAS and LinPEAS, plus using Process Explorer to find and scan suspicious processes.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Manual Privilege Escalation Using Python](https://www.101labs.net/comptia-security/lab-42-manual-privilege-escalation-using-python/) | 101Labs |
| 2 | [How to Enumerate for Privilege Escalation on a Windows Target with WinPEAS](https://www.101labs.net/comptia-security/lab-85-how-to-enumerate-for-privilege-escalation-on-a-windows-target-with-winpeas/) | 101Labs |
| 3 | [How to Enumerate for Privilege Escalation on a Linux Target with LinPEAS](https://www.101labs.net/comptia-security/lab-86-how-to-enumerate-for-privilege-escalation-on-a-linux-target-with-linpeas/) | 101Labs |
| 4 | [How to Use Process Explorer to Find and Scan Suspicious Processes for Malware](https://www.101labs.net/comptia-security/lab-57-how-to-use-process-explorer-to-find-and-scan-suspicious-processes-for-malware/) | 101Labs |


## 10. Linux & System Skills

**Focus:** Linux concepts, file operations, and VPN access  
**Labs:** 5

The Linux skills every security lab depends on: fundamental and advanced Linux operations, file operations, and connecting to an internal network with OpenVPN.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Fundamental Linux Concepts](https://www.101labs.net/comptia-security/lab-58-fundamental-linux-concepts/) | 101Labs |
| 2 | [Linux Operations: Advanced Linux Operations](https://www.101labs.net/comptia-security/lab-59-linux-operations-advanced-linux-operations/) | 101Labs |
| 3 | [Basic File Operations](https://www.101labs.net/comptia-security/lab-60-basic-file-operations/) | 101Labs |
| 4 | [Advanced File Operations](https://www.101labs.net/comptia-security/lab-61-advanced-file-operations/) | 101Labs |
| 5 | [How to Connect to an Internal Network Using OpenVPN](https://www.101labs.net/comptia-security/lab-29-how-to-connect-to-an-internal-network-using-openvpn/) | 101Labs |


## 11. Scripting & Automation

**Focus:** Bash, Python, and PowerShell scripting  
**Labs:** 8

Automating security tasks with the three most common scripting languages: Bash, Python, and PowerShell, each from introduction to more advanced use.


### Bash

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Introduction to Bash Scripting](https://www.101labs.net/comptia-security/lab-79-introduction-to-bash-scripting/) | 101Labs |
| 2 | [More Bash Scripting](https://www.101labs.net/comptia-security/lab-80-more-bash-scripting/) | 101Labs |
| 3 | [Advanced Bash Scripting](https://www.101labs.net/comptia-security/lab-81-advanced-bash-scripting/) | 101Labs |


### Python

| # | Lab | Platform |
|:-:|---|:-:|
| 4 | [Introduction to Python Scripting](https://www.101labs.net/comptia-security/lab-97-introduction-to-python-scripting/) | 101Labs |
| 5 | [More Python Scripting](https://www.101labs.net/comptia-security/lab-98-more-python-scripting/) | 101Labs |
| 6 | [More Advanced Python Scripting](https://www.101labs.net/comptia-security/lab-99-more-advanced-python-scripting/) | 101Labs |


### PowerShell

| # | Lab | Platform |
|:-:|---|:-:|
| 7 | [Introduction to Scripting with PowerShell](https://www.101labs.net/comptia-security/lab-100-introduction-to-scripting-with-powershell/) | 101Labs |
| 8 | [More Advanced Scripting with PowerShell](https://www.101labs.net/comptia-security/lab-101-more-advanced-scripting-with-powershell/) | 101Labs |


## 12. Security Tools & Frameworks

**Focus:** Hydra, SQLmap, Sn1per, BeEF, Nessus, and OpenVAS  
**Labs:** 6

Popular security tools and frameworks in action: online password attacks with Hydra, automated SQL injection with SQLmap, reconnaissance with Sn1per, browser exploitation with BeEF, and vulnerability scanning with Nessus and OpenVAS.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Hydra](https://www.101labs.net/comptia-security/lab-4-hydra/) | 101Labs |
| 2 | [Automating SQL Injection Using SQLmap](https://www.101labs.net/comptia-security/lab-6-automating-sql-injection-using-sqlmap/) | 101Labs |
| 3 | [Sn1per](https://www.101labs.net/comptia-security/lab-47-sn1per/) | 101Labs |
| 4 | [Browser Exploitation Framework (BeEF)](https://www.101labs.net/comptia-security/lab-48-browser-exploitation-framework-beef/) | 101Labs |
| 5 | [Running a Vulnerability Scan with Nessus](https://www.101labs.net/comptia-security/lab-73-running-a-vulnerability-scan-with-nessus/) | 101Labs |
| 6 | [Perform a Network Vulnerability Scan with OpenVAS](https://www.101labs.net/comptia-security/lab-33-perform-a-network-vulnerability-scan-with-openvas/) | 101Labs |


## 13. OSINT & Misc Tools

**Focus:** Site cloning, checksums, SSH, and lab setup  
**Labs:** 6

Miscellaneous but important skills: credential harvesting with site cloning, verifying integrity with MD5 checksums, connecting over SSH from Windows and Linux, and setting up your own Kali Linux virtual machine.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Credential Harvesting Using Site Cloning](https://www.101labs.net/comptia-security/lab-1-credential-harvesting-using-site-cloning/) | 101Labs |
| 2 | [How to Connect to an Internal Network Using OpenVPN](https://www.101labs.net/comptia-security/lab-29-how-to-connect-to-an-internal-network-using-openvpn/) | 101Labs |
| 3 | [Using MD5 Checksums](https://www.101labs.net/comptia-security/lab-56-using-md5-checksums/) | 101Labs |
| 4 | [How to SSH into a Server from a Windows Machine Using PuTTY](https://www.101labs.net/comptia-security/lab-13-how-to-ssh-into-a-server-from-a-windows-machine-using-putty/) | 101Labs |
| 5 | [How to SSH into a Server from a Linux Machine](https://www.101labs.net/comptia-security/lab-14-how-to-ssh-into-a-server-from-a-linux-machine/) | 101Labs |
| 6 | [How to Set Up Your Own Kali Linux Virtual Machine](https://www.101labs.net/comptia-security/lab-15-how-to-setup-your-own-kali-linux-virtual-machine/) | 101Labs |


## 14. Governance, Risk & Architecture

**Focus:** Security principles, cryptography, IAM, governance, and architecture  
**Labs:** 8

The conceptual side of Security+, covered with TryHackMe rooms: security engineering, security principles, cryptography, identity and access management, governance and regulation, vulnerability management, security architecture, and virtualization.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Security Engineer Intro](https://tryhackme.com/room/securityengineerintro) | TryHackMe |
| 2 | [Security Principles](https://tryhackme.com/room/securityprinciples) | TryHackMe |
| 3 | [Cryptography Intro](https://tryhackme.com/room/cryptographyintro) | TryHackMe |
| 4 | [IAAA and IDM](https://tryhackme.com/room/iaaaidm) | TryHackMe |
| 5 | [Cyber Governance and Regulation](https://tryhackme.com/room/cybergovernanceregulation) | TryHackMe |
| 6 | [Vulnerability Management](https://tryhackme.com/room/vulnerabilitymanagementkj) | TryHackMe |
| 7 | [Intro to Security Architecture](https://tryhackme.com/room/introtosecurityarchitecture) | TryHackMe |
| 8 | [Virtualization and Containers](https://tryhackme.com/room/virtualizationandcontainers) | TryHackMe |


## 15. Advanced Topics & Final Review

**Focus:** Weaponizing vulnerabilities and a final review set  
**Labs:** 1

One advanced lab on weaponizing vulnerabilities, followed by a final review list. Finish here by re-running the key labs from earlier sections without looking at the instructions.

| # | Lab | Platform |
|:-:|---|:-:|
| 1 | [Weaponizing Vulnerabilities](https://www.101labs.net/comptia-security/lab-110-weaponizing-vulnerabilities/) | 101Labs |


### Final Review

Re-run these labs from earlier sections without looking at the instructions. If you can complete them from memory, you are ready.

- Cross-Site Request Forgery (CSRF) (section 03)
- Web Server Vulnerability Scanning with ZAP (section 04)
- Getting a Reverse Shell on a Server Through a File Upload (section 08)
- Manual Privilege Escalation Using Python (section 09)
- Using Gobuster to Discover Directories (section 04)
- Netcat (section 07)


---

## Tips for Getting the Most Out of These Labs

- **Set up your environment first.** Build your Kali Linux virtual machine and connect over OpenVPN before starting the practical sections.
- **Take notes** on every lab: the tool, the command, and what it does, so you can come back to them later.
- **Tie each lab to an exam objective.** Ask yourself which threat, attack, or control the lab demonstrates, since that is how the exam frames it.
- **Repeat labs** a few days later without looking at the solution. This is what makes the knowledge stick.

> These labs are for learning and practice in the provided lab environments only. Never use any tool or technique, especially the wireless, password, and exploitation labs, on systems or networks you do not own or have explicit permission to test.
