
---
title: "From Defacement to PLCs: How Iranian State-Aligned Cyber Operations Evolved, 2009–2026"
published: 2026-10-09
description: "An analysis of the evolution of Iranian state-aligned cyber operations from website defacement to attacks targeting industrial control systems."
category: "Daily - Posts"
---
*By Amr Abdel Hamide (Badglitch) · October 2026 · Threat intelligence analysis*

## Why this piece exists

Most write-ups on Iranian threat actors are built around a single group or a single campaign. That is useful when you are defending against that campaign this week, but it hides the more interesting story. Over roughly fifteen years, Iranian operations changed shape in ways that say a lot about how a mid-sized state builds, tests and adapts cyber capability under sanctions and military pressure.

This article follows that arc in five phases, from hacktivist-branded DDoS in 2011 to today’s mix of espionage, wipers, hack-and-leak, industrial control system (ICS) tampering and AI-assisted social engineering. For each phase I look at what the actors did, how they did it (with MITRE ATT&CK mappings where the public record supports them), and what seems to have pushed them to change. The goal is analytical, not operational: I describe behaviors and patterns rather than tooling recipes, and I only reference details that come from public government or vendor reporting.

Two caveats up front. First, the phase boundaries are my framing, not the actors’. Activity overlaps heavily, and I flag the overlaps where they matter. Second, much of the 2026 reporting is recent, fast-moving and partly vendor-sourced. Where I lean on secondary write-ups I say so, and the source list at the end separates primary from secondary material.

## Who is who: a note on names

Naming is the first trap. Vendors track overlapping clusters under their own taxonomies, and one operator can carry half a dozen names. The table is a working map, not a ruling, so check it against each vendor’s current taxonomy before you rely on it.

| Cluster | Also tracked as | Assessed sponsor |
| --- | --- | --- |
| APT34 | OilRig, Helix Kitten, Hazel Sandstorm | Iranian state (MOIS commonly cited) |
| APT35 | Charming Kitten, Phosphorus, Mint Sandstorm, TA453, Newscaster, Ajax Security Team | IRGC-aligned |
| APT42 | Overlaps APT35 in some reporting; Mandiant tracks it separately | Iranian state; focus on dissidents, activists, researchers |
| MuddyWater | Seedworm, Mango Sandstorm | MOIS |
| Void Manticore | Handala (persona), Banished Kitten, Storm-0842, Red Sandstorm, Homeland Justice, Karma | MOIS |
| CyberAv3ngers | Storm-0784, Hydro Kitten, Shahid Kaveh Group, UNC5691, Bauxite | IRGC Cyber-Electronic Command |
| Pioneer Kitten | Fox Kitten, UNC757, Parisite | Contractor serving state interests, with its own financial motives (CISA) |
| Screening Serpens | UNC1549, Smoke Sandstorm | Iran-nexus |

## Who runs what: IRGC, MOIS and contractors

Two state bodies sit behind most of the activity in this article, and knowing which one is driving a cluster helps predict what it will do. Clusters commonly tied to the IRGC (APT35, APT42, APT33 and CyberAv3ngers) lean toward influence operations, dissident targeting, aerospace and defense collection and, in the ICS case, signaling through disruption. Clusters commonly tied to the MOIS (MuddyWater, Void Manticore and, in most reporting, APT34) lean toward regional espionage and toward destructive operations run behind a hacktivist mask. A third category, contractors such as Pioneer Kitten, works for state interests but also sells access for its own profit.

These assignments are assessments, not org charts. Vendors disagree at the margins, clusters share tooling and access, and the sponsor line gets harder to draw as the collaboration described in Phase 5 grows.

## Prelude: the 2010 shock

The story starts before the first phase. Stuxnet was discovered at the Natanz enrichment plant in June 2010. No government has claimed it, but it is widely reported as a US-Israeli project and is credited with destroying more than 1,000 centrifuges. Newsweek reported at the time that Symantec estimated over 60,000 computers in Iran had been infected.

Iran’s response was institutional as much as technical. Newsweek reported that autumn on a Cyber Army linked to the Revolutionary Guard, and on 120 Basij members sent for training that included psychological operations and protection against internet spying. Iran also launched a cyber defense headquarters (Tech Monitor). In 2013 the head of US Air Force Space Command, Gen. William Shelton, said Natanz had clearly provoked a reaction from Tehran, which had stepped up its cyber efforts and would grow into a serious capability.

I read the early phases as shaped by this event: capability built in a hurry, aimed at retaliation and signaling, and willing to accept effects that were visible and sometimes clumsy.

## Phase 1: Noise with a message (2009–2013)

The early period is dominated by hacktivist-branded operations whose effects were highly visible but shallow: defacements and distributed denial of service. The defining campaign was Operation Ababil. According to the Council on Foreign Relations, major US banks suffered simultaneous outages in September 2012, and a group calling itself the Izz ad-Din al-Qassam Cyber Fighters claimed credit. The 2016 US indictment, as reported by BankInfoSecurity, places the DDoS activity between December 2011 and May 2013, sporadic at first and then landing several times a week, typically midweek.

Two technical details stand out. The traffic came largely from thousands of compromised servers rather than home PCs, which is why peaks were reported around 75 Gbps, far beyond what typical botnets of the time delivered. And the campaign was announced in advance: the group previewed targets and dates in public posts. That mix of real capability and deliberate theater is a signature worth remembering.

The stated motive was a protest over an anti-Islam video. Many experts read that as a ruse, with sanctions and the Stuxnet operation as the more plausible drivers. In March 2016 the Department of Justice indicted seven Iranians, whom CFR links to the IRGC, and Treasury sanctions followed later. Tehran denied involvement throughout.

A footnote for ICS readers: the same indictment alleged that one defendant gathered status information (water levels, temperature, sluice gate status) from the control systems of the Bowman Avenue Dam in New York. Iranian interest in operational technology is older than most people assume.

**ATT&CK:** T1498 and T1499 (network and endpoint denial of service); defacement maps to T1491.

## Phase 2: From noise to destruction (2012–2016)

Shamoon is the pivot. On 15 August 2012, Saudi Aramco was hit by malware that stole credentials, wiped data and blocked rebooting, affecting around 35,000 computers (CFR). The master boot record was overwritten with an image of a burning US flag. A group calling itself the Cutting Sword of Justice claimed responsibility; US intelligence sources attributed the attack to Iran, and Iranian leadership denied it.

What makes Shamoon instructive is the engineering. Later analysis describes three components: a dropper, a wiper and a module for remote control. The wiper ran on a preset trigger. Kaspersky found that the 2012 kill timer matched the exact time the claimed attackers gave for the start of destruction, and the 2016 variant was configured to start wiping at 8:45 pm local time on 17 November. The practical lesson is that the destructive moment was scheduled, which implies a long period in which the implant was already inside.

Access, as far as public analysis shows, likely came through phishing. Palo Alto’s analysis of the 2016 wave, as reported by The Register, concluded that the embedded administrator credentials were too strong to have been guessed and were probably harvested. That variant also reused a legitimate disk driver under a trial licence, which forced the authors to set infected machines’ clocks back to August 2012 for the wiping to work (FireEye, via The Register). Saudi CERT reported at least 22 institutions affected in that wave, and further waves are reported in January 2017 and December 2018, which is why Shamoon straddles my phase boundary.

On motive, CFR notes Iran may have been answering a wiper (named, fittingly, Wiper) that hit its oil ministry and National Iranian Oil Company in April 2012. Others point to the July 2012 oil embargo, though that is informed speculation. Sources also disagree on RasGas: CFR places the attack within two weeks of Aramco, while Cylera says November 2012. I would treat that timing as unsettled.

**ATT&CK:** T1566 (probable initial access), T1561.002 (disk structure wipe), T1485 (data destruction).

## Phase 3: Quiet access, long campaigns (2016–2020)

Around 2016 the center of gravity moves from spectacle to persistence. Two strands define the period.

**Credential-focused social engineering.** In March 2019 Microsoft’s Digital Crimes Unit took control of 99 domains used by Phosphorus (APT35, Charming Kitten), a group it had tracked since 2013. Microsoft described spear-phishing of personal accounts, sometimes through fake social profiles, using lookalike sites that borrowed well-known brand names. Between August and September 2019, MSTIC counted more than 2,700 attempts to identify consumer email accounts and 241 accounts actually attacked; ClearSky assessed with medium-high confidence that this matched its own findings, and the targets included a US presidential campaign. Later reporting adds conference-themed lures and Telegram-based operator notifications (Google TAG, via SOCRadar) and a mailbox-scraping tool called HYPERSCRAPE in 2022 (Google TAG, via a secondary summary). Certfa documented the persona play: impersonating journalists and building rapport before sending the link. Trust first, payload later is still this group’s core craft.

**Edge-device exploitation.** ClearSky’s Fox Kitten report described a roughly three-year campaign against IT, telecom, oil and gas, aviation, government and security firms, mostly through VPN and RDP services. The flaws involved were in Pulse Secure (CVE-2019-11510), Palo Alto GlobalProtect (CVE-2019-1579), Fortinet FortiOS (CVE-2018-13379) and Citrix (CVE-2019-19781), reportedly exploited within hours of public disclosure. ClearSky linked the campaign to APT34 with medium-high probability and to APT33 and APT39 with medium probability, one of the first public hints of shared access across Iranian clusters.

In September 2020, CISA and the FBI (AA20-259A) described a related actor, Pioneer Kitten (UNC757), exploiting Pulse Secure, Citrix NetScaler and F5 flaws. The tradecraft was plain: tunneling with Chisel, a set of web shells (CISA’s malware analysis report covered 19 files, including China Chopper components and an FRP build), and no observed direct privilege escalation. They got by on credentials. CISA also noted that the actor appears to work as a contractor for Iranian interests while pursuing its own financial gain, and CrowdStrike reported that the group was selling access to compromised networks.

Destructive intent never went away either. SC Magazine’s coverage of the Fox Kitten findings relays a belief that Iranian actors abused VPNs to deploy the ZeroCleare and Dustman wipers against energy and industrial organizations. Treat that as a reported assessment rather than a proven chain.

**ATT&CK:** T1566, T1190, T1133 (external remote services), T1078 (valid accounts), T1505.003 (web shell), T1572 (protocol tunneling).

## Phase 4: Industrialized N-day exploitation (2020–2023)

By 2021 the playbook was refined: watch for fresh public vulnerabilities, exploit quickly, hold the access, decide later what to do with it. CISA, the FBI, Australia’s ACSC and the UK’s NCSC described it jointly in AA21-321A (November 2021). An Iranian government-sponsored group had been exploiting Fortinet flaws (CVE-2018-13379, CVE-2020-12812, CVE-2019-5591) since at least March 2021 and Microsoft Exchange ProxyShell (CVE-2021-34473) since at least October 2021 for initial access, ahead of follow-on operations that included data exfiltration, ransomware and extortion. Observed behavior included Task Scheduler changes (T1053.005) and new accounts on domain controllers. Picus’s breakdown of the advisory adds forced BitLocker activation to encrypt data, a neat example of turning a victim’s own tooling into the impact stage.

The November 2022 advisory AA22-320A shows the same opportunism. Actors exploited Log4Shell in an unpatched VMware Horizon server (initial access in February 2022), obtained a service account and installed XMRig mining software.

Two observations. First, the end results ranged from espionage-ready access to extortion to cryptomining, which suggests access itself was the product and the effect was decided case by case. Second, the line between state and criminal behavior gets blurry here: ransomware and mining are financial behaviors inside state-linked operations, and that theme returns strongly in 2026.

One more case belongs in this period, because it shows what a destructive operation looks like from the inside. According to the joint CISA and FBI advisory AA22-264A (September 2022), Iranian state actors operating as HomeLand Justice hit the Government of Albania in July 2022 with a ransomware-style file encryptor and disk-wiping malware. The FBI assessed that they had first gained access to the network about 14 months earlier. Between May and June the actors moved laterally, ran reconnaissance and harvested credentials. When defenders started responding to the ransomware, the actors switched to a version of ZeroCleare, and a second wave in September reused similar tools and techniques. HomeLand Justice claimed the July attack on 18 July.

The takeaway is dwell time: a year of quiet access preceded the visible attack. Some vendor summaries add that a separate MOIS-linked espionage cluster held the access before handing it to Void Manticore for the destructive phase. I could not confirm that handoff in the advisory text I reviewed, so treat it as a secondary claim.

**ATT&CK:** T1190, T1053.005, T1136.002 (domain account creation), T1486 (data encrypted for impact), T1496 (resource hijacking).

## Phase 5: Hybrid operations in a hot conflict (2023–2026)

**Context.** Trellix telemetry shows observed Iranian cyber activity up 77% between October 2025 and March 2026. It rose 14% in January despite a nationwide internet blackout in Iran, dipped in February, then surged 37% in March after the strikes of 28 February (vendor reporting refers to the US and Israeli operations as Epic Fury and Roaring Lion). S2W’s April 2026 landscape report tracks ten active clusters from 2024 onward (APT42, APT34, MuddyWater, CyberAv3ngers, BladedFeline, Peach Sandstorm, Storm-2035, Void Manticore, APT35 and Pioneer Kitten) and finds government and energy the most targeted sectors.

### Industrial control systems

CyberAv3ngers first made headlines in November 2023, when it compromised at least 75 Unitronics PLC and HMI devices and defaced screens with anti-Israel messaging, apparently a show of access rather than an attempt at physical harm (Securonix). By 2024 the group had a custom malware framework for Linux-based IoT and industrial devices called IOCONTROL (Rewterz).

Then came 2026. Joint advisory AA26-097A, issued on 7 April by the FBI, CISA, NSA, EPA, DOE and US Cyber Command and expanded on 22 July, says Iranian-affiliated actors have been attacking internet-exposed programmable logic controllers since at least March 2026, with operational disruption and financial loss at some victims across water, energy and government. Reporting names Rockwell Automation Allen-Bradley devices (CompactLogix, Micro850) as the main target, with Siemens and Schneider equipment also in scope (SafeBreach).

The method is notable for what it lacks: no zero-days. The actors rented infrastructure, loaded the vendor’s own engineering software (Studio 5000 Logix Designer), connected directly to exposed controllers, pulled project files and manipulated the data shown on HMI and SCADA displays. The July update added exfiltration of project files using PLC configuration software on leased third-party infrastructure. The advisory points defenders to traffic on ports 44818, 2222, 102, 502 and 22 (modems). One vendor write-up also ties the activity to CVE-2021-22681, an authentication bypass in Logix controllers; treat that as secondary.

There is an attribution lesson in the details. The advisory notes strong resemblance to earlier CyberAv3ngers (UNC5691) activity but, per Securonix, stops short of formally renaming the group. Behavioral similarity and an official name are different levels of evidence, and an article should keep them apart.

**ICS ATT&CK:** T0883 (internet accessible device), T0845 (program upload), T0832 (manipulation of view).

### Destruction and influence: Void Manticore and Handala

Void Manticore moved from the Homeland Justice persona in Albania (2022) to Handala, which emerged in December 2023, shortly after the 7 October attacks (FortiGuard). The persona gives cover as a pro-Palestinian hacktivist group while the operation itself looks professional: targeted phishing, web shells for persistence, data theft, then a custom wiper. A Rewterz analysis says the wiper overwrites files and corrupts the MBR and can be run remotely from a domain controller, so one privileged foothold is enough to hit an entire estate. The same analysis notes sloppier opsec, with some activity traced to Iranian IP addresses instead of anonymizing VPNs.

2026 has been its busiest year. The FBI seized Handala’s clearnet domains on 19 March; the group resurfaced on a new domain within days, and on 24 March the FBI published an alert describing malware tied to Handala and Void Manticore. The FBI also describes social engineering over messaging platforms to deliver Windows malware to dissidents, opposition figures and journalists, and has offered up to $10 million for information on the operators (Security Affairs). Handala claimed a destructive attack on Stryker, and the company confirmed a malicious file designed to conceal activity inside its systems (StackCyber). The group also claimed access to the FBI director’s personal email, and the FBI told Reuters those accounts were targeted. Other claims, such as destroying 6 petabytes of data across Dubai government bodies, remain unverified, and a careful analyst should say so every time.

### Hack-and-leak: the 2024 US election

Influence-oriented intrusion is the other face of Iranian activity, and 2024 gave the clearest public case. On 10 August, Politico reported that someone using the name Robert had sent it documents allegedly taken from the Trump campaign, and the campaign confirmed a breach. On 19 August the ODNI, FBI and CISA jointly attributed the hack-and-leak operation to Iran and said Iranian actors had also tried to target the Biden-Harris campaign. According to coverage of the statement, the intrusion began with phishing followed by attempts to break into the accounts of a senior campaign official, and the Harris campaign separately reported an unsuccessful spear-phishing attempt. CNN reported that attribution was straightforward because the techniques matched those of a well-known IRGC-affiliated group, and Computer Weekly names Mint Sandstorm (Charming Kitten) as the suspected actor, which fits the phishing-first craft described in Phase 3. Iran’s UN mission rejected the claims as unsubstantiated.

Two details are worth keeping. The agencies presented the case as part of a pattern, noting that Russian and Iranian actors had used hack-and-leak in earlier election cycles. And, unlike 2016, TechCrunch observed that news organizations mostly covered the hack itself instead of amplifying the leaked material.

### Selling access to ransomware crews

In August 2024, CISA, the FBI and the Defense Department’s cyber crime center (DC3) published AA24-241A on Pioneer Kitten, the contractor-style cluster from Phase 3 (also tracked as Fox Kitten, UNC757, Parisite, Rubidium and Lemon Sandstorm). The advisory says the group worked directly with affiliates of ALPHV/BlackCat, NoEscape and RansomHouse, giving them access to victim networks and helping with extortion in return for a share of the ransom. Initial access came through internet-facing devices: reporting on the advisory lists Citrix NetScaler, Ivanti VPNs and Palo Alto Networks firewalls, plus cloud resources, and ties the group to US targets since 2017.

The attribution detail is the useful part. The same actors obtain access in support of the Iranian government and then partner with criminals; Arete’s summary notes that researchers believe the ransomware work is separate from, and not sanctioned by, the Iranian government, which complicates any sanctions analysis. Chainalysis has separately said it saw IRGC-affiliated ransomware actors cashing out through the Nobitex exchange (NBC News), a link that returns below.

**ATT&CK:** T1190, and T1486 (carried out by the affiliates).

### Espionage, still the volume business

According to Unit 42, as relayed in a forum summary, Screening Serpens (UNC1549) developed six new remote access trojan variants between February and April 2026 against targets in the US, Israel and the UAE, and likely two other Middle Eastern entities. The group has been active since at least 2022. Secondary summaries (ThreatCluster, citing Trend Micro) report that MuddyWater used a backdoor named Dindoor against a US bank and an airport, with Rclone for exfiltration; that APT42 built trust over WhatsApp before delivering malware; and that APT34 captured credentials through a malicious DLL on a domain controller. CYFIRMA’s Q2 2026 report describes OilRig living off the land alongside spear-phishing and credential harvesting.

StackCyber’s tracker adds a pattern that deserves more attention: APT34, APT35, APT39 and APT42 are assessed to be going after telecom providers, medical systems and ISPs, organizations that hold person-level data, probably to locate and track dissidents.

**APT33 (Peach Sandstorm): password spraying and borrowed cloud infrastructure.** Microsoft has tracked password-spray campaigns by this actor against thousands of organizations since February 2023. In April and May 2024 it saw sprays against defense, space, education and government targets in the US and Australia, using a generic go-http-client user agent and signing in to confirmed accounts from commercial VPN infrastructure. The notable move was infrastructure: the actor used compromised education-sector accounts to obtain Azure subscriptions, then hosted command and control for a custom multi-stage backdoor called Tickler (two samples, April to July 2024) inside those attacker-controlled subscriptions. In the 2023 wave, Microsoft saw AzureHound and ROADtools used for reconnaissance in Entra ID, and an Azure Arc client installed on a compromised device and linked to a subscription the actor controlled. Microsoft disrupted the fraudulent infrastructure and notified affected organizations. Between late 2021 and mid-2024 the group also ran LinkedIn personas posing as students, developers and recruiters (Microsoft’s German-language summary).

**MuddyWater: legitimate remote tools as the implant.** Instead of shipping custom malware first, MuddyWater has repeatedly delivered legitimate remote monitoring and management (RMM) software. Harfang Lab described a campaign escalating since late 2023 that used the Atera Agent, with agents registered under free trials using compromised mailboxes, installers hosted on free file-sharing sites, and spear-phishing emails of improving quality. Once installed, the Atera web console gave the operator file transfer and an interactive shell. Immersive Labs reports that between October 2023 and April 2024 the group used stolen credentials to take over live Atera accounts and used them as command and control instead of creating its own. Malwation reports a February 2024 shift across Atera, ScreenConnect, Advanced Monitoring Tool and MeshCentral. The defensive problem is that these tools are signed and legitimate, so allowlisting and egress monitoring matter more than signatures.

**ATT&CK:** T1110.003 (password spraying), T1583 (acquire infrastructure), T1219 (remote access tools).

### Blurred lines and AI

Tenable’s March 2026 analysis, drawing on Check Point, says MOIS-affiliated actors increasingly operate under cover of criminal infrastructure, and it notes a rise in exploitation of IP cameras with known vulnerabilities. Combined with the Pioneer Kitten history, state intent pursued through criminal means is the strongest continuity thread since 2020.

On AI, the public record builds in steps. Microsoft and OpenAI described LLM use in early 2024 as a productivity aid for scripting, phishing help and reconnaissance. Google’s GTIG reported in January 2025 that Iranian actors were the heaviest government users of Gemini, with more than ten groups observed and APT42 accounting for over 30% of Iranian use. They researched defense experts and dissidents, studied public vulnerabilities and drafted phishing lures, and Iranian information-operations actors made up about three quarters of that category. By February 2026 GTIG said APT42 was using Gemini as an engineering platform to speed up development of specialized tools. In none of this has Google seen a breakthrough capability. The realistic reading is that AI helps these actors work faster and at larger scale, not that it unlocks something new.

### The other side of the ledger: operations against Iran

The story is not one-directional, and an honest account of Iranian TTPs has to include what is done to Iran, because it shapes the incentives. Predatory Sparrow (Gonjeshke Darande) is a pro-Israel group widely believed to have ties to Israeli intelligence services; none of that is confirmed. Its record includes a July 2021 attack on Iran’s railway system, gas station outages in 2021 and again in December 2023, and, per NBC News, a 2022 attack on an Iranian steel mill that caused a large fire.

In June 2025, during the Israel–Iran exchange of strikes, it hit two sanctions-linked financial targets in two days. On 17 June it claimed to have destroyed data at Bank Sepah, an IRGC-linked state bank; customers reported being unable to access accounts and some branches closed temporarily. On 18 June it targeted Nobitex, Iran’s largest crypto exchange. NBC News and Elliptic describe roughly $90 million sent to addresses nobody holds keys for, effectively burned, and Nobitex said it had identified unauthorized access to its internal communications and part of its hot wallet. Exchange assets reportedly fell from about $1.8 billion to just over $100 million. The group framed both hits as strikes on sanctions evasion, which matches Chainalysis’s earlier observation about IRGC-linked ransomware actors using Nobitex.

For a threat-intel reader the relevance is circular. Stuxnet helped create Iran’s offensive units, and strikes on Iranian infrastructure plausibly keep feeding the retaliation cycle behind the 2026 surge described above. All of the Predatory Sparrow attributions rest on the group’s own claims and press reporting, so keep them labeled that way.

**ATT&CK:** T1566 (including messaging platforms), T1190, T1133, T1021.001 (RDP), T1110.003 (password spraying), T1219 (remote access tools), T1567.002 (exfiltration to cloud storage, typical of Rclone use), T1561.002, T1485, plus ICS techniques above.

## The five phases at a glance

| Phase | Initial access | Tooling and persistence | Impact |
| --- | --- | --- | --- |
| 1. 2009–2013 | Not applicable (traffic from compromised servers) | Public announcements, hacktivist persona | T1498, T1499, T1491 |
| 2. 2012–2016 | T1566 (probable) | Dropper, wiper and control module; preset trigger | T1561.002, T1485 |
| 3. 2016–2020 | T1566, T1190, T1133 | T1078, T1505.003, T1572 | Collection and access sales |
| 4. 2020–2023 | T1190 | T1053.005, T1136.002 | T1486, T1496 |
| 5. 2023–2026 | T1566, T1190, T1133, T1021.001, ICS T0883 | Living off the land, Rclone, domain-controller wiper execution | T1561.002, T1485, T0832 |

## What stayed the same, and what changed

Some things barely moved. Social engineering remained the entry point of choice, from fake journalists in 2019 to WhatsApp rapport in 2026. Public vulnerabilities, exploited fast, kept supplying access. Legitimate tools did the heavy lifting, whether that was Chisel in 2020, RDP in 2021 or Studio 5000 in 2026. Front personas, from the Cutting Sword of Justice to Handala, kept providing deniability. And the timing of escalations tracked geopolitics closely: sanctions and Stuxnet before Ababil and Shamoon, October 2023 before Handala, the February 2026 strikes before the March surge.

What changed is just as telling:

- **The target domain.** Effects moved from websites and workstations to physical processes. The distance between a 2012 bank DDoS and a 2026 PLC manipulation is large.
- **Organization.** Public reporting now shows handoffs between espionage and destructive clusters, contractors with their own financial motives, and state operators working through criminal infrastructure.
- **Tempo and tooling.** AI assistance and ready-made exploits compress the time from disclosure to exploitation.
- **Operational discipline.** There are signs of weaker opsec, including activity traced back to Iranian IP addresses, alongside heavier pressure from law enforcement: indictments in 2016, Microsoft’s domain seizure in 2019, FBI seizures in 2026. Personas get taken down and come back under new names.

## Attribution and confidence

Public attribution is uneven, and it is worth grading it. Confidence is highest where there is a formal government action: the Ababil indictment and the joint CISA and FBI advisories. Shamoon’s attribution rests on US intelligence sources and has been denied by Tehran. Cluster-to-cluster links, such as Fox Kitten to APT34, come with vendor-assigned medium-high or medium confidence and should be quoted that way. Hacktivist claims, including the Dubai data-destruction numbers, deserve the lowest confidence until independently verified. Finally, remember that naming differs by vendor, and that sources sometimes disagree on basic facts, as with the RasGas timing or the frequency of Ababil attacks.

## Defensive implications

The history points to a short list of priorities:

- **Patch internet-facing devices in days, not weeks.** VPNs, firewalls and mail servers have been the entry point in nearly every phase since 2019.
- **Protect people as well as systems.** Use phishing-resistant MFA (hardware keys) for at-risk users, and treat messaging apps as phishing channels, not just email.
- **Harden domain controllers and prepare for wipers.** Alert on boot-record writes, mass execution over admin shares, and bulk actions through device-management tools. CISA has published guidance on hardening Windows domains and Intune.
- **Hunt for quiet persistence.** Look for tunneling tools such as Chisel and FRP, web shells on edge devices, unexpected scheduled tasks, new domain accounts and large outbound transfers with sync tools like Rclone.
- **Take PLCs off the internet.** Where that is not possible, put devices behind gateways, require MFA for remote access, disable unused services, and keep offline backups of PLC logic. Physical Run-mode switches block remote logic changes. Monitor project downloads and uploads from unexpected hosts, plus MQTT over TLS (8883) and DNS-over-HTTPS from OT segments, which relate to IOCONTROL.

## Detection ideas

These are behavior-level hunting ideas drawn from the activity above. They are starting points to adapt to your own telemetry, not finished rules, and none depends on a specific indicator.

| Behavior | Where to look | ATT&CK |
| --- | --- | --- |
| Many failed sign-ins across many accounts from one source, then a success from commercial VPN space | Entra ID and Azure sign-in logs | T1110.003 |
| New Azure subscriptions, tenants or Azure Arc connections created by a compromised account | Azure activity logs | T1583 |
| Unapproved RMM agents (Atera, ScreenConnect, Level, MeshCentral) installed from emailed or file-shared MSI packages | EDR, proxy, software inventory | T1219 |
| New admin accounts, web shells or config changes on VPNs, firewalls and mail servers after a public CVE drops | Appliance and web server logs | T1190, T1505.003 |
| Chisel- or FRP-style tunnels and new outbound SSH from workstations | EDR, NetFlow | T1572 |
| New scheduled tasks or domain accounts shortly after edge exploitation | Windows events 4698 and 4720 | T1053.005, T1136.002 |
| Raw disk writes, boot-record changes, mass execution over admin shares, GPO or device-management tools | EDR, domain controller logs | T1561.002 |
| Large outbound transfers using sync tools such as Rclone | Proxy, NetFlow | T1567.002 |
| Engineering software talking to controllers from unexpected hosts, project uploads or downloads, PLC ports (44818, 2222, 102, 502) reachable from the internet or leased hosts | OT network monitoring, firewall logs | T0883, T0845 |
| MQTT over TLS (8883) or DNS-over-HTTPS from OT segments | Firewall, DNS logs | IOCONTROL-related |
| A new contact building rapport on a messaging app, then sending an archive or installer | User reports, mobile security tooling | T1566 |

Turn each row into a Sigma rule or a hunting query against your own log sources. The behaviors are stable; the field names are not.

## Outlook

These are my judgments, not findings.

- Exposed PLCs will stay attractive for as long as they are exposed, because the attack needs no exploit at all.
- Handoff and criminal-cover models are likely to spread, and they will keep attribution slow and contested.
- AI will mostly improve the scale and polish of social engineering rather than create new attack classes in the near term.
- Personas will keep regenerating after takedowns, so tracking infrastructure habits will be more durable than tracking brand names.
- Data-rich sectors such as telecom, health and ISPs will remain priority espionage targets because they serve dissident tracking.

## Limits of this analysis

Public reporting reflects what vendors and governments can see and choose to disclose, so it over-represents victims in well-monitored sectors and countries. Several 2026 details here come from secondary summaries or from vendor reporting that has not yet been widely corroborated, and advisories such as AA26-097A are still being updated. ATT&CK identifiers are my mappings from the described behavior and should be checked against the current ATT&CK version before publication.

## Sources

**Primary and near-primary**

- CISA and FBI, AA20-259A, Iran-Based Threat Actor Exploits VPN Vulnerabilities (Sept 2020): https://us-cert.cisa.gov/ncas/alerts/aa20-259a
- CISA, FBI, ACSC and NCSC, AA21-321A (Nov 2021): https://www.cisa.gov/news-events/alerts/2021/11/17/iranian-government-sponsored-apt-cyber-actors-exploiting-microsoft
- CISA and FBI, AA22-264A, Iranian State Actors Conduct Cyber Operations Against the Government of Albania (Sept 2022): https://cisa.gov/ncas/alerts/aa22-264a
- CISA and FBI, AA22-320A (Nov 2022): https://ic3.gov/CSA/2022/221121.pdf
- CISA, FBI and DC3, AA24-241A, Iran-based Cyber Actors Enabling Ransomware Attacks on US Organizations (Aug 2024): see cisa.gov advisory listing
- ODNI, FBI and CISA, Joint Statement on Iranian Election Influence Efforts (Aug 2024): https://www.cisa.gov/news-events/news/joint-odni-fbi-and-cisa-statement-iranian-election-influence-efforts
- CISA and partners, AA26-097A (Apr 2026, updated Jul 2026): see cisa.gov advisory listing
- Microsoft, New steps to protect customers from hacking (Mar 2019): https://blogs.microsoft.com/on-the-issues/2019/03/27/new-steps-to-protect-customers-from-hacking/
- Microsoft Security Blog, Peach Sandstorm password spray campaigns (Sept 2023): https://www.microsoft.com/en-us/security/blog/2023/09/14/peach-sandstorm-password-spray-campaigns-enable-intelligence-collection-at-high-value-targets/
- Microsoft Security Blog, Peach Sandstorm deploys custom Tickler malware (Aug 2024): see microsoft.com/security/blog
- Council on Foreign Relations, Compromise of Saudi Aramco and RasGas: https://www.cfr.org/cyber-operations/compromise-of-saudi-aramco-and-rasgas
- Council on Foreign Relations, Denial of service attacks against US banks in 2012–2013: https://www.cfr.org/cyber-operations/denial-of-service-attacks-against-u-s-banks-in-2012-2013
- Google GTIG, Adversarial Misuse of Generative AI (Jan 2025): https://cloud.google.com/blog/topics/threat-intelligence/adversarial-misuse-generative-ai
- Trellix, CyberThreat Report (Apr 2026): https://www.trellix.com/advanced-research-center/threat-reports/april-2026/
- S2W, Iran APT Landscape Report (Apr 2026): https://s2w.inc/en/resource/detail/1041
- Tenable, Cyber Retaliation: Analyzing Iranian Cyber Activity Following Operation Epic Fury (Mar 2026)
- CYFIRMA, APT Quarterly Report, Apr to Jun 2026: https://www.cyfirma.com/research/apt-quarterly-report-apr-to-jun-2026/

**Secondary (verify against originals before citing)**

- BankInfoSecurity, coverage of the 2016 Ababil indictment; Dark Reading and Computerworld, coverage of Operation Ababil
- Reuters (via NBC News), Newsweek (via Daily Alert) and Tech Monitor, on Iran’s post-Stuxnet buildup
- The Register (Dec 2016) and Computerworld, Shamoon coverage; Security Affairs, Shamoon 2
- SC Magazine, coverage of ClearSky’s Fox Kitten report; Security Affairs, coverage of CISA’s web shell analysis
- Picus Security, analysis of AA21-321A
- TechTarget, TechCrunch, TechRadar, CNN and Computer Weekly, coverage of the 2024 election hack-and-leak
- Arete and Alston & Bird, summaries of AA24-241A; NBC News, on Chainalysis and Nobitex
- NBC News, Intellinews, The Jewish Chronicle and Picus Security, coverage of Predatory Sparrow (June 2025)
- Harfang Lab (via SecurityOnline), Immersive Labs and Malwation, on MuddyWater RMM abuse; Computer Weekly and Infosecurity Magazine, on Tickler
- HivePro, Void Manticore threat advisory (Mar 2026); FortiGuard, Handala profile; Rewterz, Handala advisory (Mar 2026); Security Affairs, Handala UAE claims (Apr 2026); StackCyber, Iran cyber dashboard (Mar 2026)
- Securonix, CyberAv3ngers analysis; SafeBreach, AA26-097A coverage; CyberInsider, coverage of AA26-097A
- Forum summary of Unit 42 on Screening Serpens (2026); ThreatCluster summary of MuddyWater, APT42 and APT34 activity
- Microsoft and OpenAI (Feb 2024) via press coverage; Google GTIG Feb 2026 AI Threat Tracker via Frontier Enterprise
- SOCRadar and Certfa-based coverage of APT35 phishing
