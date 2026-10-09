---
title: "From Defacement to PLCs: How Iranian State-Aligned Cyber Operations Evolved, 2009–2026"
published: 2026-10-09
description: "An analysis of the evolution of Iranian state-aligned cyber operations from website defacement to attacks targeting industrial control systems."
category: "Daily - Posts"
---
*By Amr Abdel Hamide (Badglitch) · October 2026 · Threat intelligence analysis*
## Why bother with a fifteen-year view?

Most writing about Iranian hackers is organized around a single group or a single campaign. That makes sense if you’re the one defending against it this week. But zoom out and a different story shows up, one you can’t see from inside any single incident: in about fifteen years, Iranian operations went from defacing websites to changing what an industrial controller shows its operators. That isn’t a smooth curve of getting better. It’s a series of lurches, each one tied to something happening in the world.

This article walks through that arc in five phases, starting with hacktivist-branded DDoS in 2011 and ending with today’s blend of espionage, wipers, hack-and-leak, industrial control system (ICS) tampering and AI-assisted social engineering. In each phase I ask the same three questions. What did the actors do? How did they do it, down to the MITRE ATT&CK techniques where the public record allows that? And what pushed them to change? I stay at the level of behavior and pattern, not tooling recipes, and everything here comes from public government or vendor reporting.

Two warnings before we start. The phase boundaries are my own framing, and the real history overlaps and doubles back on itself, so I point out the places where it does. And a lot of the 2026 material is fresh, fast-moving and partly vendor-sourced. When I’m leaning on a secondary write-up, I say so, and the source list at the end separates primary material from the rest.

## Who is who: a note on names

Names are the first trap. Every vendor keeps its own taxonomy, the clusters overlap, and a single operator can easily turn up under half a dozen labels. Treat the table below as a working map, not a ruling, and check it against each vendor’s current naming before you lean on it.

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

Two state bodies sit behind most of what follows, and knowing which one is steering a cluster helps you guess what it will do next. The IRGC-linked clusters (APT35, APT42, APT33 and CyberAv3ngers) tend toward influence operations, dissident targeting, aerospace and defense collection and, in the ICS case, disruption as a message. The MOIS-linked ones (MuddyWater, Void Manticore and, in most reporting, APT34) tend toward regional espionage and toward destructive operations carried out behind a hacktivist mask. Then there’s a third group that doesn’t fit neatly: contractors like Pioneer Kitten, who work for state interests but also sell access to make money on the side.

Please read these assignments as assessments, not org charts. Vendors disagree at the edges, clusters share tooling and access, and the sponsor line only gets harder to draw as the collaboration described in Phase 5 grows.

## Prelude: the 2010 shock

The story really starts a little before Phase 1. In June 2010, Stuxnet was discovered at the Natanz enrichment plant. No government has claimed it, but it’s widely reported as a US-Israeli project and credited with destroying more than 1,000 centrifuges. Newsweek reported at the time that Symantec’s estimate put the number of infected computers in Iran above 60,000.

Tehran’s response was as much institutional as technical. That autumn Newsweek wrote about a Cyber Army tied to the Revolutionary Guard, and about 120 Basij members sent off for training that covered psychological operations and protection against internet spying. Iran also stood up a cyber defense headquarters (Tech Monitor). By 2013 the head of US Air Force Space Command, Gen. William Shelton, was saying out loud that Natanz had clearly provoked a reaction, that Iran had stepped up its cyber effort, and that it would grow into a serious capability.

My own reading is that this episode shaped everything that came next. The early phases look like capability assembled in a hurry, pointed at retaliation and signaling, and quite willing to accept effects that were loud and sometimes clumsy.

## Phase 1: Noise with a message (2009–2013)

The early years belong to operations wearing hacktivist costumes, with effects that were hard to miss and shallow underneath: defacements and distributed denial of service. The one everybody remembers is Operation Ababil. According to the Council on Foreign Relations, major US banks went down at the same time in September 2012, and a group calling itself the Izz ad-Din al-Qassam Cyber Fighters took credit. The 2016 US indictment, as BankInfoSecurity reported it, puts the DDoS activity between December 2011 and May 2013. It started sporadically, then settled into a rhythm of several attacks a week, usually midweek.

Two details make Ababil more interesting than a standard DDoS story. First, the traffic mostly came from thousands of compromised servers instead of home PCs, which is how peaks around 75 Gbps were reported, far above what the typical botnet of that era could push. Second, the group announced its targets and dates in advance, in public posts. Real capability wrapped in deliberate theater: keep that combination in mind, because it keeps coming back.

The stated reason was outrage over an anti-Islam video. Plenty of experts read that as a pretext and saw sanctions and Stuxnet as the more plausible drivers. In March 2016 the Department of Justice indicted seven Iranians, whom CFR ties to the IRGC, and Treasury sanctions followed later. Tehran denied any involvement throughout.

One more detail for the ICS crowd. The same indictment alleged that one defendant pulled status information (water levels, temperature, sluice gate status) from the control systems of the Bowman Avenue Dam in New York. Iranian interest in operational technology is a lot older than most people assume.

**ATT&CK:** T1498 and T1499 (network and endpoint denial of service); defacement maps to T1491.

## Phase 2: From noise to destruction (2012–2016)

Shamoon is where things change. On 15 August 2012, Saudi Aramco was hit by malware that stole credentials, wiped data and blocked rebooting, taking out around 35,000 computers (CFR). The master boot record was overwritten with an image of a burning US flag. A group calling itself the Cutting Sword of Justice claimed responsibility, US intelligence sources pointed at Iran, and Iranian leadership denied it.

The engineering is what makes Shamoon worth studying. Later analysis describes three pieces: a dropper, a wiper and a module for remote control. The wiper didn’t fire on demand. It ran on a preset trigger. Kaspersky found that the 2012 kill timer matched the exact time the claimed attackers had given for the start of the destruction, and the 2016 variant was set to start wiping at 8:45 pm local time on 17 November. The practical point for defenders is an uncomfortable one: if the destructive moment was scheduled, the implant had probably been sitting inside for a long time before it.

How did they get in? As far as public analysis goes, probably phishing. Palo Alto’s look at the 2016 wave, reported by The Register, concluded that the administrator credentials embedded in the wiper were too strong to have been guessed, and so were probably harvested. That variant also reused a legitimate disk driver under a trial licence, which forced the authors to set infected machines’ clocks back to August 2012 for the wiping to work (FireEye, via The Register). Saudi CERT counted at least 22 institutions affected in that wave, and further waves are reported in January 2017 and December 2018, which is why Shamoon refuses to stay inside my phase boundary.

As for motive, CFR notes that Iran may have been answering a wiper (called, fittingly, Wiper) that hit its oil ministry and the National Iranian Oil Company in April 2012. Others point to the July 2012 oil embargo, though that is informed speculation. The sources also disagree about RasGas: CFR puts the attack within two weeks of Aramco, Cylera says November 2012. I’d call that timing unsettled.

**ATT&CK:** T1566 (probable initial access), T1561.002 (disk structure wipe), T1485 (data destruction).

## Phase 3: Quiet access, long campaigns (2016–2020)

Around 2016 the center of gravity shifts from spectacle to staying power. Two threads run through the period.

**Stealing credentials with a human touch.** In March 2019 Microsoft’s Digital Crimes Unit took control of 99 domains used by Phosphorus (APT35, Charming Kitten), a group it had been tracking since 2013. Microsoft described spear-phishing of personal accounts, sometimes through fake social profiles, using lookalike sites that borrowed well-known brand names. Later that year, between August and September 2019, MSTIC counted more than 2,700 attempts to identify consumer email accounts and 241 accounts actually attacked. ClearSky assessed with medium-high confidence that this matched its own findings, and the targets included a US presidential campaign. Later reporting adds conference-themed lures and Telegram-based operator notifications (Google TAG, via SOCRadar), plus a mailbox-scraping tool called HYPERSCRAPE in 2022 (Google TAG, via a secondary summary). Certfa documented the persona game: pose as a journalist, build rapport, and only then send the link. Trust first, payload later is still this group’s signature.

**Walking in through the edge.** ClearSky’s Fox Kitten report described a campaign of roughly three years against IT, telecom, oil and gas, aviation, government and security firms, mostly through VPN and RDP services. The flaws were in Pulse Secure (CVE-2019-11510), Palo Alto GlobalProtect (CVE-2019-1579), Fortinet FortiOS (CVE-2018-13379) and Citrix (CVE-2019-19781), reportedly exploited within hours of public disclosure. ClearSky tied the campaign to APT34 with medium-high probability and to APT33 and APT39 with medium probability, which was one of the first public hints that Iranian clusters shared access.

In September 2020, CISA and the FBI (AA20-259A) described a related actor, Pioneer Kitten (UNC757), exploiting Pulse Secure, Citrix NetScaler and F5 flaws. Their tradecraft was almost boringly plain: tunneling with Chisel, a set of web shells (CISA’s malware analysis report covered 19 files, including China Chopper components and an FRP build), and no direct privilege escalation that anyone observed. They got by on credentials. CISA also noted that the actor seems to work as a contractor for Iranian interests while chasing its own financial gain, and CrowdStrike reported that the group was selling access to compromised networks.

Destructive intent hadn’t gone anywhere, either. SC Magazine’s coverage of the Fox Kitten findings relays a belief that Iranian actors abused VPNs to deploy the ZeroCleare and Dustman wipers against energy and industrial organizations. I’d treat that as a reported assessment, not a proven chain.

**ATT&CK:** T1566, T1190, T1133 (external remote services), T1078 (valid accounts), T1505.003 (web shell), T1572 (protocol tunneling).

## Phase 4: Industrialized N-day exploitation (2020–2023)

By 2021 the playbook had been polished into something close to a routine: watch for fresh public vulnerabilities, exploit them fast, keep the access, and decide later what to do with it. CISA, the FBI, Australia’s ACSC and the UK’s NCSC laid it out together in AA21-321A (November 2021). An Iranian government-sponsored group had been exploiting Fortinet flaws (CVE-2018-13379, CVE-2020-12812, CVE-2019-5591) since at least March 2021, and Microsoft Exchange ProxyShell (CVE-2021-34473) since at least October 2021, for initial access, ahead of follow-on operations that included data exfiltration, ransomware and extortion. Defenders saw Task Scheduler changes (T1053.005) and new accounts on domain controllers. Picus’s breakdown of the advisory adds forced BitLocker activation to encrypt data, which is a neat trick: the victim’s own tooling does the damage.

The November 2022 advisory, AA22-320A, shows the same opportunism. The actors exploited Log4Shell on an unpatched VMware Horizon server (initial access in February 2022), grabbed a service account and installed XMRig mining software.

Look at those outcomes side by side. Espionage-ready access in one case, extortion in another, cryptomining in a third. To me that says access itself was the product, and what happened next was decided case by case. It also means the line between state and criminal behavior starts to blur, since ransomware and mining are financial moves inside state-linked operations. That theme comes back hard in 2026.

One more case belongs here, because it shows what a destructive operation looks like from the inside. According to the joint CISA and FBI advisory AA22-264A (September 2022), Iranian state actors operating as HomeLand Justice hit the Government of Albania in July 2022 with a ransomware-style file encryptor and disk-wiping malware. The FBI assessed that they had first gotten into the network about 14 months earlier. Between May and June they moved laterally, ran reconnaissance and harvested credentials. When defenders started responding to the ransomware, the actors switched to a version of ZeroCleare, and a second wave in September reused similar tools and techniques. HomeLand Justice claimed the July attack on 18 July.

The lesson is dwell time: a year of quiet access came before the visible damage. Some vendor summaries add that a separate MOIS-linked espionage cluster held the access first and then handed it to Void Manticore for the destructive phase. I couldn’t confirm that handoff in the advisory text I reviewed, so I treat it as a secondary claim.

**ATT&CK:** T1190, T1053.005, T1136.002 (domain account creation), T1486 (data encrypted for impact), T1496 (resource hijacking).

## Phase 5: Hybrid operations in a hot conflict (2023–2026)

**Where things stand.** Trellix telemetry shows observed Iranian cyber activity up 77% between October 2025 and March 2026. It rose 14% in January even with a nationwide internet blackout inside Iran, dipped in February, then jumped 37% in March after the strikes of 28 February (vendor reporting calls the US and Israeli operations Epic Fury and Roaring Lion). S2W’s April 2026 landscape report follows ten active clusters from 2024 onward (APT42, APT34, MuddyWater, CyberAv3ngers, BladedFeline, Peach Sandstorm, Storm-2035, Void Manticore, APT35 and Pioneer Kitten) and finds government and energy the most targeted sectors.

### Industrial control systems

CyberAv3ngers first made headlines in November 2023, when it compromised at least 75 Unitronics PLC and HMI devices and defaced their screens with anti-Israel messaging. That looked like a show of access more than an attempt to hurt anyone physically (Securonix). By 2024 the group had a custom malware framework for Linux-based IoT and industrial devices called IOCONTROL (Rewterz).

Then came 2026. Joint advisory AA26-097A, issued on 7 April by the FBI, CISA, NSA, EPA, DOE and US Cyber Command and expanded on 22 July, says Iranian-affiliated actors have been attacking internet-exposed programmable logic controllers since at least March 2026. Some victims across water, energy and government suffered operational disruption and financial loss. Reporting names Rockwell Automation Allen-Bradley devices (CompactLogix, Micro850) as the main target, with Siemens and Schneider equipment also in scope (SafeBreach).

What stands out is what the method lacks: zero-days. The actors rented infrastructure, loaded the vendor’s own engineering software (Studio 5000 Logix Designer), connected straight to exposed controllers, pulled project files and manipulated the data shown on HMI and SCADA displays. The July update added exfiltration of project files using PLC configuration software on leased third-party infrastructure. The advisory points defenders to traffic on ports 44818, 2222, 102, 502 and 22 (modems). One vendor write-up also ties the activity to CVE-2021-22681, an authentication bypass in Logix controllers, but I’d treat that as secondary.

There’s an attribution lesson tucked into this. The advisory notes strong resemblance to earlier CyberAv3ngers (UNC5691) activity but, per Securonix, stops short of formally renaming the group. Behavioral similarity and an official name are different levels of evidence, and a careful write-up keeps them apart.

**ICS ATT&CK:** T0883 (internet accessible device), T0845 (program upload), T0832 (manipulation of view).

### Destruction and influence: Void Manticore and Handala

Void Manticore moved from the Homeland Justice persona in Albania (2022) to Handala, which appeared in December 2023, shortly after the 7 October attacks (FortiGuard). The persona offers cover as a pro-Palestinian hacktivist outfit, while the operation behind it looks thoroughly professional: targeted phishing, web shells for persistence, data theft, and then a custom wiper. A Rewterz analysis says the wiper overwrites files, corrupts the MBR and can be launched remotely from a domain controller, so a single privileged foothold is enough to hit an entire estate. The same analysis notes sloppier opsec, with some activity traced to Iranian IP addresses instead of anonymizing VPNs.

2026 has been its busiest year yet. The FBI seized Handala’s clearnet domains on 19 March, the group resurfaced on a new domain within days, and on 24 March the FBI published an alert describing malware tied to Handala and Void Manticore. The FBI also describes social engineering over messaging platforms to deliver Windows malware to dissidents, opposition figures and journalists, and has offered up to $10 million for information on the operators (Security Affairs). Handala claimed a destructive attack on Stryker, and the company confirmed a malicious file designed to conceal activity inside its systems (StackCyber). The group also claimed access to the FBI director’s personal email, and the FBI told Reuters those accounts were targeted. Other claims, like destroying 6 petabytes of data across Dubai government bodies, remain unverified. A careful analyst should say so every single time.

### Hack-and-leak: the 2024 US election

Influence-driven intrusion is the other face of Iranian activity, and 2024 produced the clearest public example. On 10 August, Politico reported that someone using the name Robert had sent it documents allegedly taken from the Trump campaign, and the campaign confirmed a breach. On 19 August the ODNI, FBI and CISA jointly attributed the hack-and-leak operation to Iran and said Iranian actors had also tried to target the Biden-Harris campaign. According to coverage of the statement, the intrusion began with phishing and moved on to attempts to break into the accounts of a senior campaign official, while the Harris campaign separately reported an unsuccessful spear-phishing attempt. CNN reported that attribution was straightforward because the techniques matched those of a well-known IRGC-affiliated group, and Computer Weekly names Mint Sandstorm (Charming Kitten) as the suspected actor, which fits the phishing-first craft from Phase 3. Iran’s UN mission rejected the claims as unsubstantiated.

Two details are worth holding onto. The agencies framed the case as part of a pattern, noting that Russian and Iranian actors had used hack-and-leak in earlier election cycles. And unlike in 2016, TechCrunch observed, news organizations mostly covered the hack itself instead of amplifying the leaked material.

### Selling access to ransomware crews

In August 2024, CISA, the FBI and the Defense Department’s cyber crime center (DC3) published AA24-241A on Pioneer Kitten, the contractor-style cluster from Phase 3 (also tracked as Fox Kitten, UNC757, Parisite, Rubidium and Lemon Sandstorm). The advisory says the group worked directly with affiliates of ALPHV/BlackCat, NoEscape and RansomHouse, handing them access to victim networks and helping with extortion in exchange for a share of the ransom. Access came through internet-facing devices. Reporting on the advisory lists Citrix NetScaler, Ivanti VPNs and Palo Alto Networks firewalls, plus cloud resources, and ties the group to US targets since 2017.

The attribution wrinkle is the most useful part. These are the same actors who obtain access in support of the Iranian government, and then partner with criminals. Arete’s summary notes that researchers believe the ransomware work is separate from, and not sanctioned by, the Iranian government, which complicates any sanctions analysis. Chainalysis has separately said it saw IRGC-affiliated ransomware actors cashing out through the Nobitex exchange (NBC News), a link that comes back below.

**ATT&CK:** T1190, and T1486 (carried out by the affiliates).

### Espionage, still the volume business

Alongside the loud operations, the quiet espionage keeps running at volume. According to Unit 42, as relayed in a forum summary, Screening Serpens (UNC1549) developed six new remote access trojan variants between February and April 2026 against targets in the US, Israel and the UAE, and likely two other Middle Eastern entities. The group has been active since at least 2022. Secondary summaries (ThreatCluster, citing Trend Micro) report that MuddyWater used a backdoor named Dindoor against a US bank and an airport, with Rclone for exfiltration; that APT42 built trust over WhatsApp before delivering malware; and that APT34 captured credentials through a malicious DLL on a domain controller. CYFIRMA’s Q2 2026 report describes OilRig living off the land alongside spear-phishing and credential harvesting.

StackCyber’s tracker adds a pattern that deserves more attention than it gets: APT34, APT35, APT39 and APT42 are assessed to be going after telecom providers, medical systems and ISPs. Those organizations hold person-level data, and the likely goal is to locate and track dissidents.

**APT33 (Peach Sandstorm): password spraying and borrowed cloud.** Microsoft has tracked password-spray campaigns by this actor against thousands of organizations since February 2023. In April and May 2024 it saw sprays against defense, space, education and government targets in the US and Australia, using a generic go-http-client user agent and signing in to confirmed accounts from commercial VPN infrastructure. The clever part was the infrastructure. The actor used compromised education-sector accounts to obtain Azure subscriptions, then hosted command and control for a custom multi-stage backdoor called Tickler (two samples, April to July 2024) inside those attacker-controlled subscriptions. In the 2023 wave, Microsoft saw AzureHound and ROADtools used for reconnaissance in Entra ID, and an Azure Arc client installed on a compromised device and linked to a subscription the actor controlled. Microsoft disrupted the fraudulent infrastructure and notified affected organizations. Between late 2021 and mid-2024 the group also ran LinkedIn personas posing as students, developers and recruiters (Microsoft’s German-language summary).

**MuddyWater: legitimate remote tools as the implant.** Rather than lead with custom malware, MuddyWater has repeatedly delivered legitimate remote monitoring and management (RMM) software. Harfang Lab described a campaign escalating since late 2023 that used the Atera Agent, with agents registered under free trials using compromised mailboxes, installers hosted on free file-sharing sites, and spear-phishing emails that kept getting better. Once installed, the Atera web console handed the operator file transfer and an interactive shell. Immersive Labs reports that between October 2023 and April 2024 the group used stolen credentials to take over live Atera accounts and ran command and control through them, instead of creating its own. Malwation reports a shift in February 2024 across Atera, ScreenConnect, Advanced Monitoring Tool and MeshCentral. The defensive headache is that these tools are signed and legitimate, so allowlisting and egress monitoring matter more than signatures.

**ATT&CK:** T1110.003 (password spraying), T1583 (acquire infrastructure), T1219 (remote access tools).

### Blurred lines and AI

Tenable’s March 2026 analysis, drawing on Check Point, says MOIS-affiliated actors increasingly operate under cover of criminal infrastructure, and notes a rise in exploitation of IP cameras with known vulnerabilities. Put that next to the Pioneer Kitten history and you get what I think is the strongest continuity thread since 2020: state intent pursued through criminal means.

The AI story builds in steps. In early 2024 Microsoft and OpenAI described LLM use as a productivity aid for scripting, phishing help and reconnaissance. In January 2025, Google’s GTIG reported that Iranian actors were the heaviest government users of Gemini, with more than ten groups observed and APT42 accounting for over 30% of Iranian use. They researched defense experts and dissidents, studied public vulnerabilities and drafted phishing lures, and Iranian information-operations actors made up about three quarters of that category. By February 2026 GTIG said APT42 was using Gemini as an engineering platform to speed up development of specialized tools. Across all of this, Google has not seen a breakthrough capability. The realistic reading is that AI helps these actors work faster and at larger scale, not that it unlocks something new.

### The other side of the ledger: operations against Iran

The story isn’t one-directional, and an honest account of Iranian TTPs has to include what is done to Iran, because it shapes the incentives. Predatory Sparrow (Gonjeshke Darande) is a pro-Israel group widely believed to have ties to Israeli intelligence services, though none of that is confirmed. Its record includes a July 2021 attack on Iran’s railway system, gas station outages in 2021 and again in December 2023, and, per NBC News, a 2022 attack on an Iranian steel mill that caused a large fire.

In June 2025, during the Israel–Iran exchange of strikes, it hit two sanctions-linked financial targets in two days. On 17 June it claimed to have destroyed data at Bank Sepah, an IRGC-linked state bank. Customers reported being unable to access accounts, and some branches closed temporarily. On 18 June it went after Nobitex, Iran’s largest crypto exchange. NBC News and Elliptic describe roughly $90 million sent to addresses nobody holds keys for, effectively burned, and Nobitex said it had identified unauthorized access to its internal communications and part of its hot wallet. Exchange assets reportedly fell from about $1.8 billion to just over $100 million. The group framed both hits as strikes on sanctions evasion, which lines up with Chainalysis’s earlier observation about IRGC-linked ransomware actors using Nobitex.

For a threat-intel reader, the relevance is circular. Stuxnet helped create Iran’s offensive units, and strikes on Iranian infrastructure plausibly keep feeding the retaliation cycle behind the 2026 surge described above. Every Predatory Sparrow attribution rests on the group’s own claims and press reporting, so keep them labeled that way.

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

Some things barely moved. Social engineering stayed the entry point of choice, from fake journalists in 2019 to WhatsApp rapport in 2026. Public vulnerabilities, exploited fast, kept supplying access. Legitimate tools did the heavy lifting, whether that was Chisel in 2020, RDP in 2021 or Studio 5000 in 2026. Front personas, from the Cutting Sword of Justice to Handala, kept providing deniability. And escalations kept tracking geopolitics closely: sanctions and Stuxnet before Ababil and Shamoon, October 2023 before Handala, the February 2026 strikes before the March surge.

What changed is just as telling.

- **The target.** Effects moved from websites and workstations to physical processes. The distance between a 2012 bank DDoS and a 2026 PLC manipulation is enormous.
- **The organization.** Vendor reporting increasingly describes handoffs between espionage and destructive clusters, contractors with their own financial motives, and state operators working through criminal infrastructure.
- **The tempo.** AI assistance and ready-made exploits shrink the time between disclosure and exploitation.
- **The discipline.** There are signs of weaker opsec, including activity traced back to Iranian IP addresses, and heavier pressure from law enforcement: indictments in 2016, Microsoft’s domain seizure in 2019, FBI seizures in 2026. Personas get taken down and come back under new names.

## Attribution and confidence

Public attribution is uneven, so it’s worth grading it. Confidence is highest where a government took formal action: the Ababil indictment and the joint CISA and FBI advisories. Shamoon’s attribution rests on US intelligence sources, and Tehran has denied it. Cluster-to-cluster links, like Fox Kitten to APT34, come with vendor-assigned medium-high or medium confidence and should be quoted that way. Hacktivist claims, including the Dubai data-destruction numbers, deserve the lowest confidence until someone independent verifies them. And keep in mind that naming differs by vendor and that sources sometimes disagree on basic facts, as with the RasGas timing or how often the Ababil attacks hit.

## Defensive implications

If I had to boil fifteen years down to a short to-do list, it would look like this.

- **Patch internet-facing devices in days, not weeks.** VPNs, firewalls and mail servers have been the way in during nearly every phase since 2019.
- **Protect people as well as systems.** Use phishing-resistant MFA (hardware keys) for at-risk users, and treat messaging apps as phishing channels, not just email.
- **Harden domain controllers and get ready for wipers.** Alert on boot-record writes, mass execution over admin shares, and bulk actions through device-management tools. CISA has published guidance on hardening Windows domains and Intune.
- **Hunt for quiet persistence.** Look for tunneling tools such as Chisel and FRP, web shells on edge devices, unexpected scheduled tasks, new domain accounts and large outbound transfers with sync tools like Rclone.
- **Take PLCs off the internet.** If you can’t, put them behind gateways, require MFA for remote access, disable unused services, and keep offline backups of PLC logic. Physical Run-mode switches block remote logic changes. Watch for project downloads and uploads from unexpected hosts, plus MQTT over TLS (8883) and DNS-over-HTTPS from OT segments, which relate to IOCONTROL.

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

A reminder before I speculate: these are judgments, not findings.

- Exposed PLCs will stay attractive for as long as they stay exposed, because the attack needs no exploit at all.
- Handoff and criminal-cover models are likely to spread, which will keep attribution slow and contested.
- In the near term, AI will mostly improve the scale and polish of social engineering instead of inventing new attack classes.
- Personas will keep regenerating after takedowns, so tracking infrastructure habits will outlast tracking brand names.
- Data-rich sectors like telecom, health and ISPs will stay priority espionage targets, because they feed dissident tracking.

## Limits of this analysis

Public reporting reflects what vendors and governments can see and choose to disclose, so it over-represents victims in well-monitored sectors and countries. Several 2026 details here come from secondary summaries or from vendor reporting that hasn’t been widely corroborated yet, and advisories like AA26-097A are still being updated. The ATT&CK identifiers are my own mappings from the described behavior, so check them against the current ATT&CK version before publication.

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