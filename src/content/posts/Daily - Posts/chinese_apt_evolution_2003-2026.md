---
title: "From Comment Crew to the Typhoons: How Chinese State-Aligned Cyber Operations Evolved, 2003–2026"
published: 2026-10-11
description: "An analysis of the evolution of Chinese state-aligned cyber operations from 2003 to 2026."
category: "Daily - Posts"
---

*By Amr Abdel Hamide · October 2026 · Threat intelligence analysis*

## Why the Chinese story is hard to tell

# From Comment Crew to the Typhoons: How Chinese State-Aligned Cyber Operations Evolved, 2003–2026

By Amr Abdel Hamide · October 2026 · Threat intelligence analysis

## Why the Chinese story is hard to tell

There are simply a lot of Chinese cyber operations. Dozens of clusters, a tangle of overlapping names and a steady drip of indictments make it easy to lump everything into one blob called APT China, and the blob hides the interesting part. Over about twenty years the work moved from a military unit stealing blueprints, to a civilian intelligence service renting out freelancers, to something quieter and stranger: operators sitting inside telecom switches, firewalls and utility networks for years, with no obvious data to steal.

I’ll follow that arc in five phases, from the first big espionage waves around 2003 to the covert device networks, appliance implants and AI-driven operations of 2025 and 2026. In each phase I keep asking the same three things. Who was doing the work? How did they get in and stay? And what pushed them to change? I’ll stay with behavior and patterns, add MITRE ATT&CK mappings where the public record supports them, and rely only on public government, court and vendor sources.

A few warnings first. The phase boundaries are mine, and real history spills over them all the time. A lot of the 2025 and 2026 material is recent, still moving and sometimes secondary, so the source list separates primary documents from commentary. And one disclosure: the AI-orchestrated case near the end comes from a report by Anthropic, the company that makes Claude. I flag it where it shows up.

## Key judgments

These are my assessments, not the sources’. The confidence levels reflect how strong and how independent the public evidence is, and “high” doesn’t mean certain.

| # | Judgment | Confidence | Main basis |
| --- | --- | --- | --- |
| 1 | Chinese state cyber work has shifted from PLA-run intellectual property theft toward an MSS- and MPS-directed ecosystem of contractors and front companies. | High | DOJ cases from 2014 to 2025, the 2018 APT10 indictment, the 2024 i-Soon leak, and the 2025 advisory naming three Chinese firms |
| 2 | A significant set of actors, most clearly Volt Typhoon, has been pre-positioning in critical infrastructure, and the plausible purpose is disruption in a crisis rather than data theft. | High on the access, moderate on the purpose | AA24-038A (a high-confidence agency assessment) and the KV botnet takedown; intent is inferred from behavior |
| 3 | Salt Typhoon gave a Chinese service persistent visibility into some communications, including lawful-intercept systems at US carriers. | High on the compromise, moderate on its scale | US agencies, Treasury sanctions and carrier statements; victim counts vary widely |
| 4 | Internet-facing edge devices are now the main way in, and covert networks of compromised devices are the standard infrastructure. | Moderate to high | AA24-038A, AA25-239A, AA26-113A, the APT40 advisory and FIRESTARTER; visibility bias is possible |
| 5 | Chinese vulnerability-disclosure rules probably give the state early access to bug details, but a link to a surge in zero-day use isn’t established. | Low to moderate | Microsoft’s 2022 analysis against Recorded Future’s 2025 data and the Atlantic Council’s findings |
| 6 | Contractors blur the line between state and criminal activity, so ransomware and espionage can share an access path. | Moderate to high | APT41, the 2020 Guangdong case, the i-Soon indictment, and Storm-2603’s use of ToolShell |
| 7 | AI is speeding up operations rather than creating a new class of attack, but the public evidence for China rests on a single vendor report. | Low | Anthropic’s November 2025 report, where the vendor describes its own platform |
| 8 | Public attribution is strongest where governments act formally and weakest for appliance implants and vendor-only clusters, and Beijing’s counter-accusations can’t be checked independently either. | High | Formal cases compared with FIRESTARTER; Beijing’s responses, covered below |

## Who is who: names and sponsors

Chinese groups collect names the way other clusters collect malware. Mandiant’s APT numbers, CrowdStrike’s animals, Microsoft’s weather (the Typhoons), Cisco Talos’s UAT labels, Google’s UNC numbers and a pile of research handles all overlap. Treat the table as a working map, not a ruling.

| Cluster | Also tracked as | Assessed sponsor |
| --- | --- | --- |
| APT1 | Comment Crew, Comment Panda, Shanghai Group | PLA Unit 61398 (Mandiant, 2013; DOJ, 2014) |
| Elderwood | Beijing Group (Dell SecureWorks) | Unattributed in public documents; widely linked to China |
| Deep Panda | Sakula/OPM-era cluster | Assessed Chinese; Beijing blamed criminals |
| APT10 | menuPass, Stone Panda, Potassium, Red Apollo | MSS Tianjin State Security Bureau, via Huaying Haitai (DOJ) |
| APT41 | Winnti, Barium, Wicked Panda | Chengdu 404 Network Technology and individuals (DOJ); espionage plus crime |
| APT40 | Hainan-based cluster; Haikou in earlier reporting | MSS Hainan State Security Department (ASD-led advisory, 2024) |
| Mustang Panda | Twill Typhoon, RedDelta, TA416, Earth Preta, Tantalum | Paid by the PRC government to develop its PlugX variant (DOJ court documents, 2025) |
| APT27 | Emissary Panda, Lucky Mouse, Bronze Union; Linen Typhoon in 2025 Microsoft reporting | Contractors working for MSS and MPS (DOJ, 2025) |
| APT31 | Violet Typhoon, Zirconium, Judgment Panda, Bronze Vinewood | MSS Hubei State Security Department, via front company Wuhan Xiaoruizhi (US and UK, 2024) |
| Hafnium | Silk Typhoon (Microsoft’s current name) | MSS-linked (2021 allied attribution) |
| Storm-0558 | | PRC-affiliated (CSRB); MSS link reported |
| Volt Typhoon | | PRC state-sponsored (CISA and partners) |
| Salt Typhoon | GhostEmperor, OPERATOR PANDA, RedMike, UNC5807, Earth Estries, Glowworm | Firms supplying MSS and PLA (NSA-led advisory, 2025) |
| Flax Typhoon | Raptor Train botnet | Tied to Integrity Technology Group (US Treasury; advisory coverage) |
| UNC5221 | BRICKSTORM operators; UTA0178 | China-nexus (Mandiant) |
| UAT-4356 | Storm-1849; ArcaneDoor / FIRESTARTER | Not officially attributed; China link suggested by Censys |
| i-Soon (Anxun) | A contractor, not a cluster | Sells to MPS and MSS (DOJ, 2025) |

A few of those rows collide, and I can’t fully untangle them. Silk Typhoon is Microsoft’s successor label for Hafnium, yet coverage of the March 2025 indictments attaches the same label to the APT27 defendants. One outlet lists UNC5221 as an alias while Mandiant tracks it separately. Microsoft’s own 2025 reporting maps Linen Typhoon to APT27. In each case two reasonable vendors disagree, and I’d rather say so than pick a winner.

## Who runs what: the PLA, the MSS, the MPS and the contractors

Four kinds of actor matter, and the balance between them is most of this story.

The PLA ran the early industrial-scale campaigns. First it used the Third Department (3PLA), where Unit 61398’s Second Bureau sat. After the December 2015 reorganization the work moved to the Strategic Support Force, which folded space, cyber, electronic and psychological warfare into one command. The Ministry of State Security, a civilian intelligence service organized in regional bureaus, took over much of the commercial and strategic collection. The Ministry of Public Security, which handles internal security and surveillance, became a customer in its own right, buying stolen data and training its own officers.

Around all of them sits a market of private contractors and front companies: Huaying Haitai in Tianjin, Chengdu 404 and Sichuan Silence in Sichuan province, i-Soon in Chengdu, Sichuan Juxinhe, Beijing Huanyu Tianqiong, Sichuan Zhixin Ruijie, Integrity Technology Group. Reporting keeps coming back to Sichuan, and Chengdu in particular, as a hack-for-hire hub. Regional state security bureaus turn up behind the fronts as well: Tianjin for APT10, Hubei for APT31, Hainan for APT40. That regional structure is one reason the clusters look so different from each other.

CFR’s Adam Segal described the post-2015 shift as industrial espionage moving out of the PLA and over to the MSS. ASPI’s analysts read it the same way: the PLA turned toward building combat capability, while the MSS made use of the gaps in the 2015 US-China agreement. For attribution this is a headache. Contractors sell to several customers and reuse each other’s tools, so a clean line from tool to sponsor rarely exists. The quartermaster theory in Phase 4 is one attempt to explain the shared exploits.

## Phase 1: The first waves (2003–2010)

The early cases read like a list of firsts, each a little bigger than the last.

Titan Rain gave the field its vocabulary. Foreign Policy summarized it as an ongoing series of intrusions that US investigators found in 2004 inside the Defense, State, Energy and Homeland Security departments and at defense contractors, with terabytes of data pulled out. They traced it to computers in Guangdong. Beijing denied it, and the Chinese military was widely suspected anyway. A 2007 report tied related activity to the British Foreign Office. Operation Shady RAT ran from 2006 against dozens of targets, and McAfee later put the number above 70 organizations.

Then came GhostNet. In March 2009 Canadian researchers reported that the operation had infiltrated at least 1,295 computers in 103 countries. It focused on governments, especially in South and Southeast Asia, and on Tibetan exile institutions, including the Dalai Lama’s offices. One account described a woman who was stopped by Chinese intelligence officers on her way back to Tibet and shown transcripts of her online conversations. The control panel was in Chinese. Even so, the researchers said they couldn’t conclusively tie GhostNet to the Chinese government, and left open a criminal or private operation. It’s a useful reminder of how tentative attribution was back then.

In January 2010 Google disclosed Operation Aurora, and the conversation changed. The intrusion hit Google and, by Google’s account, more than twenty other companies. Later counts reached 34 or more, with Adobe, Juniper and Rackspace confirming they were targeted and the press naming Yahoo, Northrop Grumman, Morgan Stanley and Dow Chemical. The delivery was an Internet Explorer zero-day (CVE-2010-0249) that installed the Hydraq remote access trojan. McAfee named the operation after a folder called Aurora in the attackers’ code.

McAfee’s Dmitri Alperovitch said the real prize was source code: repositories at technology, security and defense companies that, as he put it, were wide open. The attackers took at least some of Google’s source code, probed its Perforce revision system and went after the Gmail accounts of Chinese human rights activists. They also reportedly reached Google accounts that held court-ordered US wiretap data, which in hindsight foreshadows the lawful-intercept access Salt Typhoon would win fourteen years later.

Symantec’s 2012 paper on what it called Elderwood tied Aurora to a long series of campaigns on one shared platform. The group used at least eleven zero-days between 2010 and 2014, three of them inside a single thirty-day window in May 2012, mostly in Internet Explorer and Adobe Flash. It liked watering holes, where attackers plant exploit code on sites a target audience visits, and it hit second-tier defense suppliers first so they could serve as stepping stones to the big contractors. Symantec’s Orla Cox contrasted it with Stuxnet’s four zero-days and said this group seemed to find eight. The leading theory for the supply was source code taken in earlier breaches. A year after Aurora, McAfee described Night Dragon, aimed at big energy companies such as Royal Dutch Shell and Baker Hughes.

Looking back over the decade, the pattern is steady. Spear-phishing and watering holes open the door, custom remote access tools hold it open, and the targets drift from governments and dissidents toward technology, defense and energy firms. The goal is information, and attribution is still tentative.

**ATT&CK:** T1566 (spear-phishing), T1189 (drive-by compromise), T1203 (exploitation for client execution), T1071 (web protocols for command and control), T1005 (data from local system), T1213 (data from information repositories, such as source code).

## Phase 2: Industrial-scale theft (2006–2015)

In February 2013 Mandiant published the report that changed the public conversation. It said a group it called APT1, known elsewhere as Comment Crew, had broken into at least 141 organizations across 20 industries since 2006, mostly in English-speaking countries, and had stolen hundreds of terabytes of data. That meant technology blueprints, manufacturing processes, test results, business plans, pricing documents, partnership agreements and the emails and contact lists of senior staff. Once inside, the group kept coming back over months or years to take more. The playbook was ordinary and it worked: a spear-phishing email, a backdoor calling home to command-and-control servers, then patient expansion. Mandiant stressed that its numbers were a lower bound, built only from incidents it had personally investigated.

The attribution is what made the report famous. Mandiant traced the activity to four large networks in Shanghai, two of them in Pudong, where PLA Unit 61398 sits in a 12-story building on Datong Road. In nearly every observed session, operators connected to victim networks through Remote Desktop from Shanghai IP addresses, using systems set to Simplified Chinese keyboard layouts. The report estimated the unit had hundreds, perhaps thousands, of staff, and concluded that either a secret organization was operating right outside Unit 61398’s gates, or APT1 was Unit 61398. It added that APT1 was one of more than twenty such groups.

China’s foreign ministry dismissed the report as groundless, searches for the unit were blocked on Sina Weibo, and a BBC crew filming near its headquarters was detained. Critics like Jeffrey Carr argued that proximity wasn’t proof. Mandiant itself admitted it had no smoking gun, and said it published anyway in the hope of raising the cost of the unit’s operations.

Governments responded. In May 2014 a federal grand jury in Pennsylvania indicted five Unit 61398 officers, Wang Dong, Sun Kailiang, Wen Xinyu, Huang Zhenyu and Gu Chunhui, on 31 counts covering hacking, trade secret theft and economic espionage between 2006 and 2014. The indictment is unusually concrete about the commercial angle. Westinghouse had its design information targeted while it was negotiating a nuclear power plant deal with a Chinese state-owned enterprise. SolarWorld lost cost, pricing and strategy information while it was fighting Chinese solar competitors. United States Steel was hit while it was taking part in trade cases, and Alcoa, Allegheny Technologies and the United Steelworkers union were also named.

Some of the detail is almost intimate. Wang allegedly stole hostnames and descriptions of US Steel computers, then went looking for the vulnerable servers on that list. Huang, according to the indictment, spent 2006 to at least 2009 programming a secret database for a state-owned company to hold corporate intelligence on the iron and steel industries, including American firms. The foreign ministry’s reply was that Chinese government and military personnel had never engaged in online theft of trade secrets.

Then the targets changed. In 2015 attackers stole records from the Office of Personnel Management on about 21.5 million current, former and prospective federal employees and contractors. The haul included SF-86 background investigation forms, which describe family members, foreign contacts and even psychological details, and fingerprints for about 5.6 million people (OPM first said 1.1 million, then revised the figure after finding archived records). Bloomberg reported that a Chinese group was behind both OPM and the Anthem insurance breach, and Symantec said the group behind Anthem had access to the shared Elderwood framework. CrowdStrike pointed at Deep Panda, and the Sakula remote access trojan tied the two cases together.

China said criminals did it. The Obama administration never publicly blamed Beijing, and experts noted that all three breaches (OPM, Anthem and Premera) went after personnel records, not financial data. The point wasn’t money. It was a map of who works for the US government and who they know.

The diplomatic answer came on 25 September 2015. Barack Obama and Xi Jinping agreed that neither government would conduct or knowingly support cyber-enabled theft of intellectual property, trade secrets or other confidential business information for competitive advantage. It followed an April 2015 executive order that made economic sanctions available, and a visible threat of using them. PIIE pointed out at the time that China hadn’t promised to hold individuals accountable. In December the PLA created the Strategic Support Force. CrowdStrike’s Dmitri Alperovitch later said Chinese activity of this kind tapered off for about a year, then returned in full force.

**ATT&CK:** T1566.001 (spear-phishing attachment), T1021.001 (remote desktop), T1560 (archive collected data), T1041 (exfiltration over C2), T1583.001 (acquire domains), T1087 (account discovery).

## Phase 3: Handing the work to the MSS and its contractors (2015–2019)

What came back after 2015 looked different. It was quieter, more commercial in its cover story, and it often traveled through somebody else’s network.

The campaign that defined the period is Operation Cloud Hopper, attributed to APT10. Instead of attacking large enterprises one at a time, the group compromised their managed service providers and moved down into client environments from there. PwC and BAE Systems documented it in April 2017, and the UK’s NCSC took the unusual step of telling organizations to demand evidence instead of accepting their providers’ assurances. Providers were reluctant to tell clients they’d been hit, and even those who spotted the intrusion found it hard to evict the attackers. Reuters later named affected providers including Fujitsu, Tata Consultancy Services, NTT Data, Dimension Data and Computer Sciences Corp, and earlier reporting added IBM and HPE. The group reportedly went after MSP remote management portals directly, using legitimate administrator credentials.

In December 2018 the Justice Department indicted two men, Zhu Hua (online handle Godkiller) and Zhang Shilong (Atreexp). According to the indictment they worked for Huaying Haitai, a company in Tianjin, and acted in association with the MSS’s Tianjin State Security Bureau. Prosecutors said the group broke into more than 45 technology companies and government agencies between 2006 and 2018. It compromised a service provider with offices in New York and clients in at least a dozen countries (Brazil, Canada, Finland, France, Germany, India, Japan, Sweden, Switzerland, the UAE, the UK and the US), and stole personal information on more than 100,000 US Navy personnel from over 40 computers.

Deputy Attorney General Rod Rosenstein said the case mattered because the defendants targeted MSPs. FireEye’s Ben Read said an indictment might pause operations but probably wouldn’t stop them, and he was right. The MSP trick would come back in 2025 in a cloud-flavored version.

The second signature actor of the period is APT41, which scrambled every category. Mandiant’s John Hultquist described a group that ran global espionage alongside a criminal venture, tracing it to 2012, when individual members focused on video games before expanding into espionage most likely directed by the state. In September 2020 the Justice Department unsealed charges against five Chinese nationals. Zhang Haoran and Tan Dailin were accused of hacking since at least 2011 with spear-phishing and supply chain attacks while stealing and selling video game currency. Jiang Lizhi, Qian Chuan and Fu Qiang worked for Chengdu 404 Network Technology, which advertised itself as a white-hat security company with clients in the public security and military sectors.

The charges covered more than 100 victims, including government networks in India and Vietnam, and supply chain attacks that included CCleaner, ShadowPad and the 2019 ASUS ShadowHammer backdoor. Prosecutors said the defendants stole source code, code-signing certificates, customer data and personal information. Two Malaysian businessmen who allegedly ran the gaming marketplace Sea Gamer Mall were arrested in Malaysia on 14 September. Deputy Attorney General Jeffrey Rosen said that, ideally, he’d be thanking Chinese law enforcement for cooperating and the five hackers would now be in custody. FireEye had said that explicit financial targeting was unusual for Chinese state groups, which matters later, when contractors start selling to ministries.

The model deserves a name: a civilian intelligence service, a front company with engineers on payroll, and a cover story of ordinary IT services. It would come back bigger.

**ATT&CK:** T1199 (trusted relationship), T1078 (valid accounts), T1195.002 (compromise software supply chain), T1553.002 (code signing), T1566, T1021.

## Phase 4: Zero-days, edge devices and cloud keys (2020–2023)

By 2021 the interesting work had moved to vulnerabilities and identity.

On 2 March 2021 Microsoft released emergency fixes for four Exchange zero-days (CVE-2021-26855, -26857, -26858 and -27065), collectively known as ProxyLogon, and attributed their use to Hafnium. Volexity’s analysis suggests exploitation began as early as 6 January. The chain allowed pre-authentication remote code execution on Exchange 2013, 2016 and 2019 with nothing more than an open port 443. Once Microsoft published its patches, more than ten other groups piled in, along with ransomware and cryptomining operators, and a proof of concept spread. Early estimates put the campaign at around 30,000 US organizations and hundreds of thousands worldwide, and the FBI has since said Hafnium targeted more than 60,000 US organizations and successfully compromised over 12,700 of them. Microsoft’s original profile described Hafnium as having previously targeted infectious disease researchers, law firms, universities, defense contractors, think tanks and NGOs, and the first wave hit US think tanks.

On 19 July 2021 NATO, the EU, Australia, New Zealand and Japan joined the US in publicly attributing the campaign to China’s MSS, in a coordinated statement that also described contract hackers who ran extortion and cryptojacking on the side. The FBI, NSA and CISA released an advisory listing about 50 Chinese TTPs the same day. One defendant has actually reached a US courtroom, which is rare. Xu Zewei was arrested at Milan’s airport on 3 July 2025, a nine-count indictment covering Hafnium-related intrusions between February 2020 and June 2021 was unsealed on 8 July, and he was extradited to Houston in late April 2026, where he pleaded not guilty. He says police arrested the wrong man, and China’s foreign ministry opposed the extradition. Reporting on the indictment says he worked for a Shanghai company, Shanghai Powerock Network, and acted for the Shanghai State Security Bureau. That detail comes from secondary coverage, so check it against the court filing.

The most unsettling case of the period may be Storm-0558. In May and June 2023 a PRC-affiliated actor read the Exchange Online mailboxes of 22 organizations and more than 500 individuals, including senior US officials such as the Secretary of Commerce. It did this with authentication tokens it had forged using a Microsoft consumer signing key created in 2016. Combined with another flaw, the key gave it access to essentially any Exchange Online account in the world. The State Department asked Microsoft to investigate on 16 June after noticing the activity.

Microsoft’s September 2023 blog post said the key was probably taken from a crash dump captured in 2021. The Cyber Safety Review Board’s April 2024 report concluded that Microsoft still didn’t know how or when the key was obtained, and criticized the company for leaving that inaccurate post uncorrected until 12 March 2024. The board called the intrusion preventable and blamed a cascade of avoidable errors and a corporate culture that put security second. A key that should have been retired in 2021 stayed valid until 2023, because of other infrastructure changes under way at the time.

Sophos supplied a third angle. Its account of five years of sustained attacks on its own edge devices tied the activity to clusters including Volt Typhoon, APT31 and APT41, and noted that after the company hardened its newer appliances, attackers turned to older ones that no longer received patches. The overlap fed what analysts call the quartermaster theory: the idea that a central body hands out exploits to several groups. I find it plausible but unproven, since a market of contractors buying from the same suppliers would produce the same overlap. A separate story from December 2024 helps here. Treasury sanctioned the contractor Sichuan Silence Information Technology, and prosecutors indicted a Chinese national who allegedly developed a zero-day exploit for Sophos firewalls while working there.

**ATT&CK:** T1190 (public-facing application), T1505.003 (web shell), T1606 (forge web credentials), T1078.004 (cloud accounts), T1584.008 (compromise network devices).

## Phase 5: Pre-positioning, telecoms, appliances and covert networks (2023–2026)

### Volt Typhoon: waiting inside the grid

Microsoft exposed Volt Typhoon in May 2023, and the activity dated back to at least mid-2021, including intrusions in Guam. In February 2024 CISA, the NSA, the FBI and allied agencies followed with advisory AA24-038A. They assessed with high confidence that the actors were pre-positioning on IT networks so they could move laterally to operational technology and disrupt functions in a crisis. In some victim environments the footholds had lasted at least five years.

Living off the land was the hallmark: built-in administrative tools and valid accounts instead of custom malware. In some intrusions the actors went quiet and came back four and nine months after initial access. Four sectors were confirmed: communications, energy, transportation, and water and wastewater. Each intrusion was tailored to its target after a good deal of reconnaissance beforehand.

The actors hid behind the KV botnet, a covert network of end-of-life Cisco and NETGEAR small-office routers that Lumen’s Black Lotus Labs disclosed in December 2023. In January 2024 a court-authorized US operation deleted the malware from the hijacked routers and cut their link to Volt Typhoon infrastructure. Agencies warned that the actor would rebuild, and as of 2026 there’s no public confirmation that the group has been fully evicted from US critical infrastructure. The goal here isn’t data. It’s optionality, the ability to switch something off later.

### Salt Typhoon: the telecom hack

Salt Typhoon went after the backbone itself. It became public in fall 2024, though investigators had been tracking it for months. At least nine US carriers were reportedly compromised, including AT&T, Verizon, T-Mobile, Lumen, Charter, Consolidated Communications and Windstream. The actors reached the CALEA lawful-intercept systems that let carriers hand wiretap data to law enforcement, along with call records and location data. One US senator called it the worst telecommunications hack in American history. AT&T and Verizon said in late December 2024 that they had removed the intruders, though government researchers warned the actors may have been inside some networks for one to two years.

The response came in steps. On 17 January 2025 Treasury sanctioned Sichuan Juxinhe Network Technology as a direct participant, along with Yin Kecheng, and separately sanctioned Integrity Technology Group. In April 2025 the FBI offered a $10 million reward for information on the operators.

The joint advisory AA25-239A, published on 27 August 2025 by CISA, the NSA, the FBI and international partners, widened the picture. It says the actors target telecommunications, government, transportation, lodging and military infrastructure networks globally, and that they often modify routers to keep long-term access. They didn’t need zero-days. They used known, sometimes years-old flaws in exposed edge devices from Cisco, Ivanti and Palo Alto Networks, then moved with built-in tools such as PowerShell, SNMP, WMIC and PsExec. A declassified DHS memo cited by Nextgov said a US state’s National Guard systems were compromised.

The advisory also tied the activity to three Chinese companies, Sichuan Juxinhe Network Technology, Beijing Huanyu Tianqiong Information Technology and Sichuan Zhixin Ruijie Network Technology. They supply products and services to the MSS and PLA, and the UK’s NCSC describes them as part of a commercial cyber ecosystem.

The Canadian Cyber Centre and FBI added a case study. In mid-February 2025, likely Salt Typhoon actors used a critical Cisco IOS XE flaw (CVE-2023-20198, CVSS 10.0) to reach three devices at a Canadian telecom, retrieve configuration files, and modify at least one to set up a GRE tunnel for traffic collection. The counts don’t agree. Vendor summaries citing the FBI talk about 600 organizations in more than 80 countries, 200 of them in the US, while other coverage says more than 200 organizations in total. I’d treat the exact numbers as soft. The point of all this access, as one analysis put it, is to let Chinese intelligence identify and track communications worldwide.

### Silk Typhoon and the IT supply chain

The same year, the supply chain trick came back in a cloud costume. In December 2024 intruders broke into the US Treasury Department, reportedly after stealing a key from BeyondTrust, a remote support provider, and exploiting flaws in BeyondTrust and PostgreSQL. They read workstations at the Office of Foreign Assets Control and the Office of the Treasury Secretary. Bloomberg’s sources attributed it to Silk Typhoon, and the March 2025 indictments tied the defendant Yin Kecheng to it from September to December 2024.

Microsoft’s 5 March 2025 report described how Silk Typhoon had shifted since late 2024. It now went after IT solutions, including remote monitoring and management firms, privileged access management and cloud application providers, using stolen API keys and credentials to reach those providers’ downstream customers. Once in, it moved from on-premises systems into the cloud: dumping Active Directory, stealing passwords from key vaults, escalating privileges, then abusing service principals and OAuth applications with admin permissions to pull email, OneDrive and SharePoint data through the Microsoft Graph API. Microsoft noted that the group understood cloud deployments well enough to move laterally and exfiltrate data quickly. Sectors included state and local government, IT services, healthcare, legal services, higher education, defense, NGOs and energy. It’s Cloud Hopper again, with API keys instead of MSP portals.

### ToolShell: three groups, one zero-day

In July 2025 Eye Security spotted zero-day attacks on on-premises SharePoint servers. The flaws, first demonstrated at Pwn2Own Berlin by Viettel Cyber Security researchers, became ToolShell (CVE-2025-49704 and -49706, with the patch-bypass bugs CVE-2025-53770 and -53771). Researchers concluded exploitation began as early as 7 July, aimed at a major Western government, and intensified on 18 and 19 July, with roughly 100 organizations compromised by the weekend.

Microsoft said two Chinese state actors, Linen Typhoon and Violet Typhoon, and a third China-based actor, Storm-2603, used the flaws. Microsoft maps Linen Typhoon to APT27 and Violet Typhoon to APT31. Storm-2603, which Microsoft describes as China-based, used them to deploy ransomware, and Microsoft documented Warlock deployments starting on 18 July. CISA added the CVE to its Known Exploited Vulnerabilities catalog, a proof of concept appeared on GitHub, and the flaws let attackers steal the server’s cryptographic keys, which means patching alone isn’t enough.

In October, Symantec reported that Chinese actors also used ToolShell against a Middle East telecom and two African government bodies, with tools including Zingdoor, ShadowPad and KrustyLoader. It saw overlap with activity it attributes to Glowworm, a Salt Typhoon alias, but said it lacked the evidence for a firm attribution.

### Appliance implants: Ivanti, BRICKSTORM and FIRESTARTER

The edge of the network is where Chinese operators now spend their patience. In December 2023, Mandiant reported that a cluster it called UNC5221 had exploited two zero-days in Ivanti Connect Secure VPN appliances and deployed as many as five malware families to get around authentication. Volexity counted more than 1,700 compromised devices by 15 January 2024, and Ivanti said mass exploitation started around 11 January, one day after it disclosed the flaws.

Mandiant then followed BRICKSTORM, a Go backdoor, through 2025. Its September 2025 analysis found that UNC5221 and related suspected China-nexus clusters stayed undetected inside victims for 393 days on average, a dwell time that often exceeded log retention and erased the evidence of how they got in. The actor consistently targeted VMware vCenter and ESXi, often after planting BRICKSTORM on a network appliance, and installed a malicious Java servlet filter on the vCenter web interface. In at least one case it got in through a zero-day. Hivepro’s summary adds that the actors cloned virtual domain controllers and password vaults and went after the cloud mailboxes of developers, sysadmins and executives.

The purpose, in Mandiant’s reading, is the striking part: stolen data likely feeds the development of new zero-days and creates pivot points into downstream customers. The victims are SaaS firms, legal practices, business process outsourcers and technology companies. Intelligence about vulnerabilities is itself the product.

FIRESTARTER, disclosed on 23 April 2026 in a joint malware analysis report from CISA and the UK’s NCSC, shows what pre-positioning on a device looks like. The custom backdoor targets Cisco Firepower and Secure Firewall devices running ASA or FTD software. It survives reboots and firmware updates by manipulating the Cisco Service Platform mount list (CSP_MOUNT_LIST) and restoring the original file after it runs, so only a hard power disconnect clears it. CISA found it on at least one US federal agency firewall that had been implanted before Cisco’s September 2025 patches were applied, and updated Emergency Directive 25-03 to require core dumps, checks and hard resets by 30 April. Cisco recommended reimaging devices where compromise is suspected.

Cisco Talos attributes the backdoor to the actor it tracks as UAT-4356 (also called Storm-1849), the operator of the earlier ArcaneDoor campaign. In the material I reviewed, neither CISA, the NCSC nor Cisco named a country, though some outlets, SecurityWeek among them, call the campaign China-linked, and Censys earlier cited evidence of a China-based actor behind ArcaneDoor while cautioning that definitive conclusions were hard. CISA also said it hadn’t confirmed the date of initial exploitation but assessed the compromise happened in early September 2025, before the agency applied patches under Emergency Directive 25-03. For those reasons I’ve kept this case apart from the formally attributed ones.

### The contractor economy, exposed

In February 2024 an anonymous leak put internal documents from the Chengdu firm i-Soon on GitHub: clients, rates, tools, even complaints about low pay. It showed how Chinese authorities contract hacking out to smaller firms, partly to hide official operations and keep plausible deniability.

In March 2025 the Justice Department charged 12 people: two MPS officers, eight i-Soon employees, and two APT27 members, Yin Kecheng and Zhou Shuai. According to the indictment, the i-Soon staff worked at the direction of the MPS and MSS and on their own initiative from at least 2016 to 2023, and the ministries paid handsomely for stolen data. By the DOJ’s account, i-Soon charged the MSS and MPS roughly $10,000 to $75,000 for each email inbox it successfully exploited, and the State Department’s Rewards for Justice program is offering up to $10 million for information on the company, its employees and the MPS officers. i-Soon trained MPS officers to hack on their own and sold phishing, password cracking and intrusion tools. Victims included US-based critics and dissidents of the PRC, a large US religious organization, the foreign ministries of several Asian governments, and US federal and state agencies, including Treasury in late 2024.

The charges said Zhou’s hacking career goes back to at least 2007 and Yin’s to at least 2013, and that the two scanned for zero-days, leased servers to hide their addresses, installed web shells and used PlugX. The DOJ seized i-Soon’s main domain. A research report suggests the firm is effectively dead as a contractor after the leak, though the model it represents clearly isn’t.

### Covert networks and AI-driven operations

On 23 April 2026, CISA, the UK’s NCSC, the NSA, the FBI and allied agencies published AA26-113A, Defending Against China-Nexus Covert Networks of Compromised Devices. It describes a shift away from individually procured infrastructure toward large networks of compromised routers, cameras, recorders, NAS devices, firewalls and other IoT equipment, used for reconnaissance, command and control and exfiltration. The NCSC assessed that most China-nexus actors now use such networks and that several actors may share one, and said there is evidence the networks are created and maintained by Chinese information security companies. Reports differ on how many agencies signed: some coverage says twelve agencies from nine countries, while the NCSC’s own release speaks of the NCSC and 15 international partners. The advisory cites Raptor Train, which infected more than 200,000 devices in 2024 and is tied to Integrity Technology Group, and the KV botnet.

Analysts call the consequence IOC extinction: infrastructure rotates so fast that static IP blocklists lose most of their value. A February 2026 CISA directive reportedly requires federal agencies to inventory unsupported edge devices within three months, begin replacing them within a year and finish within 18 months.

Then there is the AI case. In November 2025 Anthropic reported that in mid-September it had detected and disrupted an espionage operation by a Chinese state-sponsored group it designated GTG-1002, with high confidence in the attribution. The operators built an autonomous framework around Claude Code and MCP tools, split the work into pieces that looked harmless on their own, and aimed it at roughly 30 entities, including large technology companies, financial institutions, chemical manufacturers and government agencies. Anthropic’s investigation validated a handful of successful intrusions.

By Anthropic’s account the model did 80 to 90% of the tactical work, covering reconnaissance, vulnerability research, exploit writing, credential harvesting, lateral movement and data triage, with humans choosing targets and approving key steps. The company also noted a limit: Claude sometimes overstated its findings or invented results, so operators still had to check. Because this is Anthropic describing its own platform, read it as a vendor account and look for independent confirmation as it emerges.

**ATT&CK:** T1584.008 (compromise network devices), T1090 (proxy), T1059.001 (PowerShell), T1070 (indicator removal), T1572 (protocol tunneling), T1133 (external remote services), T1190, T1078, T1550.001 (application access token), T1098.001 (additional cloud credentials), T1562 (impair defenses).

## Beyond Washington: the regional campaigns

Most of what I’ve described is seen from Washington, because that’s where the indictments, advisories and breach notices get written. The neighborhood sees a different, steadier pattern, and two clusters show it best.

**Mustang Panda** (also Twill Typhoon, RedDelta, TA416, Earth Preta) is built around PlugX, a remote access trojan in use since at least 2008 that, according to US court documents, was customized for this group at the PRC government’s expense. The FBI says the group has been active since at least 2014. Its victims read like a regional map: governments in Taiwan, Hong Kong, Japan, South Korea, Mongolia, India, Myanmar, Indonesia, the Philippines, Thailand, Vietnam and Pakistan, European governments between 2021 and 2023, European shipping companies in 2024, and Chinese dissident groups.

In January 2025 the Justice Department announced a multi-month operation that deleted PlugX from about 4,258 US computers, and the method was unusual. French authorities and the French security firm Sekoia had worked out how to send the malware a self-delete command. The FBI tested it and found it didn’t disturb legitimate functions or collect content, and prosecutors obtained nine warrants in the Eastern District of Pennsylvania between August 2024 and early January 2025. Commands went out through the group’s own command-and-control server, and owners were notified through their internet providers. Many of the machines were home PCs whose owners had no idea. One vendor summary says the infection footprint spanned more than 170 countries, and PlugX had sat unnoticed on some machines for years.

**APT40** is the regional and maritime specialist. In July 2024 the Australian Signals Directorate’s ACSC led a joint advisory with agencies from the US, UK, Canada, New Zealand, Germany, Japan and South Korea. The agencies assessed that the group conducts operations for the MSS, and noted earlier reporting that it is based in Haikou, Hainan Province, taking tasking from the MSS’s Hainan State Security Department. Four Chinese nationals working with the MSS were charged in the US in 2021.

The advisory’s most useful finding for defenders is about speed. APT40 can adopt exploits for newly disclosed flaws within hours or days of public release. It routinely launches attacks from compromised small-office and home-office devices, many of them end-of-life or unpatched, so the traffic blends in with legitimate use. It plants web shells for persistence, uses Australian websites as command-and-control and moves through RDP to steal credentials. Earlier campaigns used the ScanBox reconnaissance framework and a WinRAR flaw (CVE-2023-38831) to deliver a backdoor called BOXRAT against targets in Papua New Guinea. ASD also shared two anonymized incident reports, including a July to September 2022 intrusion into an Australian organization.

One gap I should own: Taiwan sits on Mustang Panda’s target list, but I haven’t covered Taiwan-specific campaigns in depth, and a fuller regional study would.

**ATT&CK:** T1566, T1203, T1505.003 (web shell), T1021.001 (RDP), T1090 (proxy through compromised devices), T1574.002 (DLL side-loading, a common PlugX loading method).

## Political espionage: APT31 and the Wuhan front

If APT1 was about companies, APT31 is about people who annoy Beijing. On 25 March 2024 the Justice Department unsealed an indictment against seven men, Ni Gaobin, Weng Ming, Cheng Feng, Peng Yaowen, Sun Xiaohui, Xiong Wang and Zhao Guangzong. They were accused of working for APT31 (also called Zirconium, Violet Typhoon and Judgment Panda) alongside dozens of MSS officers, contractors and support staff. US officials described a front company, Wuhan Xiaoruizhi Science and Technology, which they said the Hubei State Security Department of the MSS had set up and which, per the indictment, operated from at least 2010 until January 2024. Treasury and the UK sanctioned the firm and two of the defendants, Zhao and Ni.

On paper, Wuhan XRZ is a technology consultancy with fewer than 50 staff, based in a development zone in Wuhan’s south-east. It was also the fifth time that exposés by the anonymous group IntrusionTruth were followed by a DOJ indictment. IntrusionTruth had published five reports in May 2023 linking the Hubei MSS to the company and to four of the seven defendants.

The tradecraft was quiet and effective. The group sent more than 10,000 emails with hidden tracking links which, when opened, told the sender the recipient’s location, IP addresses, network details and the devices used. Targets included every EU member of IPAC (the Inter-Parliamentary Alliance on China), 43 UK parliamentary accounts, White House staff, US senators, campaign staff, a retired senior US national security official, defense contractors, Hong Kong democracy activists and Uyghurs. Prosecutors also tied APT31 to the 2018 hack of the Norwegian government, and said that from 2017 to 2019 it gained access to seven managed service providers to reach their customers.

The indictment shows the group reacting quickly to geopolitical events. Lawfare read that as a sign of direct tasking, and contrasted it with the more mercenary i-Soon pattern. Belgium’s cyber agency separately named APT31 for an attack on a prominent Belgian politician in March 2023, and the UK’s NCSC said the group almost certainly carried out reconnaissance against British parliamentarians in 2021, though no parliamentary accounts were compromised.

The UK Electoral Commission breach, which ran from August 2021 to October 2022, is where reports diverge. The UK said a Chinese state-affiliated entity was highly likely responsible for compromising systems that held details of about 40 million voters. Reuters reported London attributing it to a second group of Chinese spies, separate from APT31, while other coverage lumps the two together. I’d keep them apart until the primary UK documents say otherwise.

**ATT&CK:** T1566.002 (spear-phishing link), T1598 (phishing for information), T1199 (trusted relationship, via MSPs), T1078.

## Where the zero-days come from: the vulnerability pipeline

The quartermaster theory needs a mechanism, and the most discussed candidate is law. China’s Regulations on the Management of Network Product Security Vulnerabilities took effect on 1 September 2021. They require vendors to report vulnerabilities to the Ministry of Industry and Information Technology’s platform within two days, forbid giving unpublished vulnerability details to overseas organizations other than the product’s vendor, and restrict the sale or public release of bug details. Dmitri Alperovitch called the two-day rule the most troubling part of the law. Microsoft’s 2022 Digital Defense Report called the regulation a major step in making zero-days a state priority and said it might let elements of the government stockpile reported vulnerabilities for weaponization.

Microsoft’s first-year review listed what that looked like in practice. Hafnium used four Exchange zero-days before the law took effect. A further Exchange zero-day, CVE-2021-42321, emerged at the Tianfu Cup, a hacking competition held in Chengdu on 16 and 17 October 2021. And Microsoft attributed four more zero-days to Chinese state-backed actors: SolarWinds (CVE-2021-35211), Zoho ManageEngine (CVE-2021-40539 and CVE-2021-44077) and Atlassian Confluence (CVE-2022-26134).

The Atlantic Council’s Dakota Cary cites MIT Technology Review’s reporting that a Tianfu Cup vulnerability was picked up by the government within a day and used against Uyghurs in Xinjiang. The Atlantic Council study describes a system that moved from encouraging voluntary disclosure to mandating disclosure to the state, with the Tianfu Cup, Matrix Cup and QiangWang Cup working as talent pipelines. It also notes that the Qihoo 360 CEO had called vulnerabilities a national resource.

The evidence cuts both ways. An Atlantic Council analysis of vendor acknowledgments, presented at Black Hat, found no visible chilling effect on Chinese researchers’ disclosures. Recorded Future’s December 2025 review says observed Chinese zero-day use fell from twelve in 2023 to five in 2024, that the Tianfu Cup wasn’t held publicly in 2024, and that the Matrix Cup shared almost no exploit details, while cautioning that limited visibility could explain part of the drop.

That fits what the Salt Typhoon and APT40 advisories say: known flaws, used fast. A state that controls the pipeline doesn’t need to burn a zero-day on every target. It can save them for the BRICKSTORM-style long game, where, as Mandiant notes, stolen data feeds the next zero-day. Microsoft adds a number for defenders: on average an exploit appears in the wild 14 days after public disclosure, a generous window compared with APT40’s hours.

## The phone problem

Salt Typhoon turned a network problem into a personal one. Reporting at the time said phone numbers belonging to Donald Trump and JD Vance were among those targeted through Verizon, along with prominent Capitol Hill figures and staffers on Kamala Harris’s campaign, and that the actors reportedly collected audio calls of some US officials. The lawful-intercept access meant the systems built to hand wiretap data to police could hand it to a foreign service. And metadata alone (who called whom, when and from where) maps relationships and routines.

The official advice was blunt. In early December 2024 the FBI and CISA urged Americans to use end-to-end encrypted apps, pointing out that texts between iPhone and Android aren’t end-to-end encrypted. On 18 December CISA published mobile guidance for highly targeted people, telling them to assume that communications between mobile devices and internet services, on government and personal devices alike, are at risk of interception or manipulation.

The list was practical. It named end-to-end encrypted messaging such as Signal, phishing-resistant multifactor authentication, a PIN on the carrier account to guard against SIM swapping, automatic updates and current hardware, plus, for Android, devices with long update commitments and encrypted RCS. CISA’s Jeff Greene said no single solution eliminates the risk. For ordinary users the lesson is smaller but real: sometimes the weakest link is the carrier, not the handset.

## Where the state ends and crime begins

Chinese operations have always had a messy relationship with crime, and the contractor model made it messier. APT41 is the textbook case. It began with video-game currency theft around 2012 and kept both businesses running side by side. The 2020 indictments describe hacking to steal source code and facilitate ransomware schemes, alongside sales of in-game goods through Sea Gamer Mall. In July 2021 allied governments said the contract hackers behind the Hafnium-era activity also ran extortion and cryptojacking on the side. The 2025 i-Soon indictment says its staff worked for the MPS and MSS and also on their own initiative. And a case charged in July 2020 involved two hackers who worked with the Guangdong State Security Department of the MSS while also targeting victims worldwide for personal profit. In at least one instance they tried to extort cryptocurrency from a victim by threatening to release its stolen source code.

Storm-2603, which Microsoft describes as China-based, used the SharePoint ToolShell flaws to deploy ransomware. Microsoft documented Warlock, and other reporting also attaches LockBit and Babuk to the actor, with no known links to other Chinese actors. And BankInfoSecurity, describing the January 2025 Treasury action, called Sichuan a burgeoning hack-for-hire market.

The practical consequence for defenders is that a ransomware incident doesn’t rule out a state-linked intruder, and a state-linked intrusion doesn’t rule out a criminal side business. Treat access as the asset, and ask who else might have bought it. Deputy Attorney General Jeffrey Rosen’s remark that he’d ideally be thanking Chinese law enforcement for custody of the five APT41 defendants also shows how little cooperation prosecutors expect.

## The five phases at a glance

| Phase | Main sponsor | Initial access | Signature | Example |
| --- | --- | --- | --- | --- |
| 1. 2003–2010 | PLA (suspected) | Spear-phishing, watering holes, zero-days | Custom remote access tools, source-code theft | Titan Rain, GhostNet, Aurora |
| 2. 2006–2015 | PLA Unit 61398 | Spear-phishing, RDP | Mass theft of IP and personnel data | APT1, OPM |
| 3. 2015–2019 | MSS and front companies | Trusted relationships (MSPs), supply chain | Contractor operations, crime blended with espionage | APT10, APT41 |
| 4. 2020–2023 | MSS-linked contractors | Zero-days, stolen keys | Exchange, token forgery, edge devices | Hafnium, Storm-0558 |
| 5. 2023–2026 | MSS, PLA, MPS and suppliers | Known edge-device flaws, stolen API keys | Pre-positioning, appliance implants, covert networks | Volt, Salt, Silk, FIRESTARTER |

## What stayed the same, and what changed

Some things barely moved. Spear-phishing never went away. Targets still track the Chinese government’s stated priorities, from technology, steel and energy to dissidents, think tanks and foreign ministries. Denial is a constant, from the 2009 GhostNet reply to the foreign ministry’s dismissal of Mandiant in 2013 and its blanket rejection of the 2014 indictment. And one pattern runs through the whole story: access that outlasts any single mission, whether it’s APT1’s months-long revisits, Volt Typhoon’s five years or BRICKSTORM’s 393 days.

The changes are bigger. The people doing the work went from a military unit with a known address to a market of contractors, front companies and freelancers who sell to several ministries. The targets went from intellectual property and personnel records to the infrastructure itself: telecom routers, lawful-intercept systems, identity services, firewalls, utilities. The hiding places moved too, from Shanghai IP ranges and Chinese keyboard layouts to compromised home routers that rotate faster than defenders can list them.

The way in changed as well. The Elderwood-era zero-day stockpile gave way to known edge-device flaws used at scale, with zero-days saved for the best targets, plus the occasional stolen cloud key or API key. And operators stopped copying files and leaving. They now embed in devices that don’t run endpoint tools and that survive patches.

Governments changed too. Where there was once a single indictment and a diplomatic agreement, there are now indictments in 2014, 2018, 2020 and 2025, allied attribution statements, court-ordered botnet takedowns, Treasury sanctions on companies, rewards of up to $10 million and binding directives on edge devices.

## How they got caught

Chinese operators aren’t careless, but their mistakes are strikingly human, and a surprising amount of public attribution comes from them.

Some of it is habit. Mandiant tied APT1 to Shanghai by watching operators connect over Remote Desktop from Shanghai IP ranges with Simplified Chinese keyboard layouts. Some of it is leftover scaffolding: Aurora is named after a folder path in the attackers’ code, Elderwood after a variable in theirs, GhostNet’s control dashboard was in Chinese, and the APT10 indictment lists the defendants’ online handles (Godkiller and Atreexp) next to their real names.

Front companies leave paper trails. They register domains, rent offices and hire staff, and IntrusionTruth’s reports on Wuhan XRZ and the Hubei MSS came out in May 2023, with the indictment following in March 2024. The i-Soon leak showed clients, prices and tools, down to complaints about pay. APT41’s video-game business and its Malaysian partners are what produced two arrests in September 2020.

Defenders have also started using the operators’ own channels against them: the KV botnet and PlugX operations turned the attackers’ command infrastructure into the means of cleanup. And plenty of cases begin with victims who looked closely. The State Department raised the alarm that led to the Storm-0558 investigation, and a US federal agency’s forensic work surfaced FIRESTARTER.

It cuts the other way too. BRICKSTORM’s average dwell time of 393 days exceeded many organizations’ log retention, which erased the evidence of how the actors got in. Good operators lose stealth when they’re exposed, but they win much of it back by waiting longer than defenders keep logs.

## Beijing’s answer: denial, counter-accusation and what can’t be checked

This article leans on Western governments, courts and companies, because that’s where most public detail comes from. A fair account also has to say what Beijing says back, and how much of it can be tested.

The standard response is denial. China’s foreign ministry dismissed Mandiant’s 2013 report as groundless and called the 2014 indictment fabricated, and it answered with figures of its own: Chinese reporting at the time cited CNCERT data showing 2,077 US-based command servers controlling about 1.18 million hosts in China between 19 March and 18 May 2014. When Xu Zewei was extradited from Italy in 2026, the foreign ministry opposed it and said cases are being fabricated against Chinese citizens, while Xu himself says police arrested the wrong man. Chinese reports on Volt Typhoon went further and described it as a US invention, which TechRadar summarized as a claim that the group was a CIA asset. I haven’t read those Chinese-language reports myself.

Beijing has also started naming names. In April 2025 the Harbin public security bureau accused three NSA personnel, and implicated the University of California and Virginia Tech, in cyberattacks on systems tied to the Asian Winter Games in February 2025. According to Xinhua’s report as relayed by CSO, Chinese teams counted 170,864 attacks from US-based IP addresses (63.24% of the total) and attributed them to the NSA’s Tailored Access Operations office. The national virus-response center NCVERC published a related report.

On 19 October 2025 the Ministry of State Security said on WeChat that the NSA had hacked the National Time Service Center, which produces Beijing Time. It claimed the operation began in 2022 with a vulnerability in the messaging service of a foreign phone brand, which exposed staff devices, and that 42 types of special cyberattack weapons were used against the center’s networks in 2023 and 2024. China said it cut the attack chain, and added that the US is accusing others of what it does itself. The US Embassy didn’t immediately comment, and reporting at the time noted the claims couldn’t be independently confirmed.

How should a threat-intel reader weigh this? I’d make three points. First, intelligence services do spy on each other, and a Chinese accusation of US hacking doesn’t contradict the Western findings on Chinese groups. Both can be true. Second, the two sets of claims differ in what outsiders can check. The Western cases mix court documents with named defendants, telemetry from competing private companies and statements from many governments, which can contradict one another, as the Salt Typhoon counts show. The Chinese claims, in the material I reviewed, come from state bodies themselves (the MSS, a municipal police bureau and a state-linked response center), with no independent verification so far. Third, neither side’s classified evidence is open to audit, so every attribution in this article ends somewhere in trust.

## Attribution and confidence

Beijing has denied involvement in every episode here, and the evidence differs in strength. Confidence is highest where governments acted formally: the 2014 PLA indictment, the APT10, APT41, APT31 and i-Soon cases, the 2021 allied statement on Hafnium, and the joint advisories on Volt Typhoon, Salt Typhoon and covert networks. Vendor-only clustering deserves less weight, and counts vary widely, as Salt Typhoon’s 200 versus 600 organizations shows.

Some labels collide, as with Silk Typhoon. Some attributions are openly incomplete: FIRESTARTER is formally unattributed, GhostNet’s researchers declined to name the Chinese government in 2009, and Mandiant admitted in 2013 that its evidence was circumstantial. Storm-0558 is the reverse case, an attribution broadly accepted while the most important technical question, how the key was stolen, is still unanswered. And because contractors share tools and customers, every attribution conversation is harder than it looks from outside.

## Defensive implications

If I had to pick the lessons that hold across all five phases, I’d start with the network edge. Know every edge device you own and retire the old ones: the KV botnet ran on end-of-life routers, Salt Typhoon used years-old flaws, and FIRESTARTER survives patches. A patch doesn’t evict an implant that was already there, so keep exposed appliances on a suspected-compromise list the way you would a server, collect core dumps and images before you reboot or patch (as CISA advises for FIRESTARTER), and plan for hard power cycles and reimaging. Patch as if APT40 is watching, because the window between disclosure and exploitation can be hours. And don’t rely on IP blocklists alone. AA26-113A’s point is that infrastructure now rotates too quickly for them.

The second lesson is about trust. Cloud Hopper and Silk Typhoon are the same story ten years apart, so treat service providers as part of your attack surface: ask for evidence, limit their access, and rotate and scope API keys. Assume identity infrastructure can fail, and keep cloud audit logs long enough to investigate, since BRICKSTORM’s 393-day dwell time outlasted many organizations’ retention. Hunt for living-off-the-land activity too. Built-in tools plus valid accounts leave few files behind, so baseline normal administrative behavior and look for deviations. And if a ransomware incident starts on a vulnerable edge device, treat it as a possible state-linked intrusion until you’ve ruled that out.

Then there are the people and the special cases. Politicians, dissidents, journalists and think-tank staff get tracking-link phishing and phone targeting, so give them hardware-key MFA, encrypted messaging, a carrier PIN and a quick way to report odd emails. Sweep for PlugX and similar long-lived implants, because the FBI operation found infections that had been quiet for years on machines nobody was watching. Keep IT and OT segmented, since Volt Typhoon’s goal is lateral movement from IT into operational technology. And if you run telecom infrastructure, treat CALEA and similar lawful-intercept systems as high-value targets with their own monitoring and access limits.

## Detection ideas

These are behavior-level starting points to adapt to your own telemetry, not finished rules.

| Behavior | Where to look | ATT&CK |
| --- | --- | --- |
| New GRE tunnels, accounts or config changes on routers, firewalls and VPN gateways | Device config backups, TACACS, syslog | T1584.008, T1572 |
| Edge-device logs missing or cleared around suspicious sessions | Appliance logging, SIEM gaps | T1070 |
| Built-in tools used from unusual hosts: PowerShell, WMIC, PsExec, ntdsutil, netsh port proxying | EDR, Windows logs | T1059.001, T1003, T1090 |
| Provider or MSP accounts logging in at odd hours or from new locations | Identity and VPN logs | T1199, T1078 |
| Exchange or SharePoint web shells and unexpected child processes of IIS worker processes | Server logs, EDR | T1505.003, T1190 |
| Cryptographic key material read from SharePoint or IIS servers after a known exploit window | Server forensics, key rotation records | T1552 |
| Mail or cloud access with tokens that don’t match normal sign-in paths | Cloud audit logs | T1606 |
| New OAuth apps or service principals with admin permissions, or new passwords on existing apps | Entra ID and cloud audit logs | T1098.001, T1550.001 |
| Large Graph API reads of mail, OneDrive or SharePoint by a service principal | Cloud audit logs | T1114, T1530 |
| SSH logins to vCenter or ESXi hosts from appliances; new servlet filters in the vCenter web stack | vCenter and ESXi logs, appliance FIM | T1021.004, T1505 |
| Cisco ASA or FTD devices with unexpected CSP mount list changes or the process lina_cs | Core dumps, Cisco-supplied IOCs | T1542 |
| Traffic from your network to residential IP ranges or consumer-device ASNs | NetFlow, proxy | T1090 |
| Machine-speed reconnaissance: many scans and logins in tight bursts from one source or account | IDS, authentication logs | T1595, T1110 |
| Emails to high-risk users with tracking links or hidden images that call out to unfamiliar domains | Mail gateway, proxy logs | T1566.002, T1598 |
| Legitimate signed executables loading unexpected DLLs, plus periodic beaconing from unattended hosts (PlugX-style side-loading) | EDR, DNS and proxy logs | T1574.002, T1071 |
| Exploitation attempts against a newly disclosed edge-device flaw within hours of the advisory | WAF, appliance and NetFlow logs | T1190 |
| Traffic from SOHO or consumer devices on your own network to unusual internal management ports | NetFlow, NDR | T1090, T1021 |

## Outlook

These are my judgments, not findings.

Edge devices will stay the preferred door for as long as unsupported hardware stays online and appliances can’t be inspected by endpoint tools. Covert networks will become the default, which makes behavioral detection more important than indicators, and takedowns that use the operators’ own command channels, like the KV botnet and PlugX operations, will be tried again because they work against exposed infrastructure.

Contractor markets will survive exposure, because the demand behind them hasn’t gone anywhere and each indictment mostly reshuffles names. The line between state and criminal work will keep blurring while contractors can sell access to more than one buyer. Pre-positioning in infrastructure will remain a standing concern, because the payoff is optionality and these intrusions take years to find, and intelligence about vulnerabilities, gathered through long-dwell access to vendors and SaaS providers, will increasingly feed the next zero-day wave.

Political targets will stay a priority, and tracking-link phishing and phone-network access suggest the pressure on dissidents and legislators will continue. AI-assisted operations will grow, mostly in speed and volume rather than new techniques, with humans still checking the results.

## Limits of this analysis

Public reporting shows what governments and vendors can see and choose to release, so it overstates what happens in well-monitored sectors and countries. Several 2025 and 2026 details rest on secondary summaries, and figures differ between sources: Salt Typhoon’s victim counts (200 versus 600 organizations), the number of organizations hit by Aurora (20 or more, or 34 or more) and OPM’s 21.5 versus 22.1 million records.

The ATT&CK identifiers are my own mappings from the described behavior, so check them against the current ATT&CK version before publication. Taiwan-specific campaigns are only touched on through Mustang Panda’s target list, and a regional study would add real depth there. The zero-day trend data, including the drop from twelve to five observed Chinese zero-days between 2023 and 2024, depends on what vendors can see and attribute, so it may say as much about visibility as about behavior. China’s government rejects the attributions, and a fair reading acknowledges that some early ones, like APT1’s, rested on circumstantial evidence that later indictments strengthened but didn’t replace.

## What still rests on secondary sources

I’ve linked primary documents wherever I could find them. A few claims still depend on press or vendor summaries, and you should check them before quoting:

- The list of nine US carriers hit by Salt Typhoon, the phone-targeting details and the victim counts. The Canadian bulletin and AA25-239A are primary, but I haven’t checked every figure against them.
- The Treasury breach details, including the BeyondTrust key (Bloomberg’s reporting as relayed by SecurityWeek).
- BRICKSTORM specifics beyond Mandiant’s own summary, such as the cloning of domain controllers (HivePro).
- The KV botnet disclosure and takedown details (Lumen and press coverage).
- GTG-1002 specifics. Anthropic’s report is primary, but I worked from its summary and coverage, so read the full report before quoting numbers.
- Beijing’s counter-accusations, which I know only through English-language news coverage.
- The wording of CISA’s December 2024 mobile guidance, and the Treasury and UK sanctions notices, which I know through coverage because I couldn’t find direct links.
- Older episodes (GhostNet, Aurora, Elderwood, Titan Rain), which rest on contemporary press and vendor write-ups.

## Sources

**Primary and near-primary**

- Mandiant, APT1: Exposing One of China’s Cyber Espionage Units (Feb 2013): https://cs.brown.edu/courses/cs180/sources/2013_Mandiant_APT1_Report.pdf
- Mandiant/Google, Redline Drawn: China Recalculates Its Use of Cyber Espionage (2016): https://services.google.com/fh/files/misc/rpt-redline-drawn-china-espionage-en.pdf
- CISA and partners, AA24-038A, PRC State-Sponsored Actors Compromise and Maintain Persistent Access to US Critical Infrastructure (Feb 2024): https://cisa.gov/news-events/cybersecurity-advisories/aa24-038a
- CISA and partners, AA25-239A, Countering Chinese State-Sponsored Actors’ Compromise of Networks Worldwide (Aug 2025): https://www.cisa.gov/news-events/cybersecurity-advisories/aa25-239a
- CISA and partners, AA26-113A, Defending Against China-Nexus Covert Networks of Compromised Devices (Apr 2026): https://www.cisa.gov/news-events/cybersecurity-advisories/aa26-113a
- CISA and NCSC, AR26-113A, FIRESTARTER malware analysis report, and Emergency Directive 25-03 update (Apr 2026): https://www.cisa.gov/news-events/analysis-reports/ar26-113a
- Cyber Safety Review Board, Review of the Summer 2023 Microsoft Exchange Online Intrusion (Apr 2024): https://www.cisa.gov/sites/default/files/2024-04/CSRB_Review_of_the_Summer_2023_MEO_Intrusion_Final_508c.pdf
- Microsoft Threat Intelligence, Silk Typhoon targeting IT supply chain (5 Mar 2025): https://www.microsoft.com/en-us/security/blog/2025/03/05/silk-typhoon-targeting-it-supply-chain/
- Microsoft Threat Intelligence, Disrupting active exploitation of on-premises SharePoint vulnerabilities (22 Jul 2025): https://www.microsoft.com/en-us/security/blog/2025/07/22/disrupting-active-exploitation-of-on-premises-sharepoint-vulnerabilities/
- Mandiant/Google, BRICKSTORM espionage campaign (Sept 2025): https://cloud.google.com/blog/topics/threat-intelligence/brickstorm-espionage-campaign
- Canadian Centre for Cyber Security and FBI, Cyber Threat Bulletin on Salt Typhoon (2025): https://cyber.gc.ca/en/guidance/cyber-threat-bulletin-prc-cyber-actors-target-telecommunications-companies-global-cyberespionage-campaign
- US Department of Justice, five PLA officers charged (May 2014): https://www.justice.gov/opa/pr/us-charges-five-chinese-military-hackers-cyber-espionage-against-us-corporations-and-labor
- US Department of Justice, APT10 indictment (Dec 2018): https://www.justice.gov/opa/pr/two-chinese-hackers-associated-ministry-state-security-charged-global-computer-intrusion
- US Department of Justice, APT41 and Sea Gamer Mall defendants (Sept 2020): https://justice.gov/opa/pr/seven-international-cyber-defendants-including-apt41-actors-charged-connection-computer
- US Department of Justice, Guangdong State Security Department case (Jul 2020): https://www.justice.gov/opa/pr/two-chinese-hackers-working-ministry-state-security-charged-global-computer-intrusion
- US Department of Justice, APT31 indictment (Mar 2024): https://justice.gov/opa/pr/seven-hackers-associated-chinese-government-charged-computer-intrusions-targeting-perceived
- US Department of Justice, i-Soon and APT27 indictments (Mar 2025): https://www.justice.gov/opa/pr/justice-department-charges-12-chinese-contract-hackers-and-law-enforcement-officers-global
- UK NCSC, Defending against China-nexus covert networks of compromised devices (Apr 2026): https://www.ncsc.gov.uk/news/defending-against-china-nexus-covert-networks-of-compromised-devices
- Recorded Future, Executive Insights report on China’s zero-day pipeline (Dec 2025): https://assets.recordedfuture.com/Executive-Insights/eir-2025-1219.pdf
- US Treasury OFAC actions (Dec 2024, Jan 2025, Mar 2024) — via coverage below
- Anthropic, Disrupting the first reported AI-orchestrated cyber espionage campaign (Nov 2025): https://www.anthropic.com/news/disrupting-AI-espionage
- ASD’s ACSC and partners, APT40 Advisory: PRC MSS tradecraft in action (Jul 2024): https://cyber.gov.au/about-us/view-all-content/alerts-and-advisories/apt40-advisory-prc-mss-tradecraft-in-action
- US Department of Justice, operation to delete PlugX malware used by China-backed hackers (Jan 2025): https://justice.gov/opa/pr/justice-department-and-fbi-conduct-international-operation-delete-malware-used-china-backed
- US Treasury and UK government, joint sanctions on APT31 and Wuhan XRZ (Mar 2024): via coverage below; the DOJ release is linked above
- CISA, mobile communications best practices for highly targeted individuals (18 Dec 2024): see cisa.gov
- Atlantic Council, Sleight of Hand: How China Weaponizes Software Vulnerability Disclosure: https://www.atlanticcouncil.org/in-depth-research-reports/report/sleight-of-hand-how-china-weaponizes-software-vulnerability/
- Regulations on the Management of Network Product Security Vulnerabilities (China, in force 1 Sept 2021); Microsoft Digital Defense Report 2022

**Secondary (verify against originals before citing)**

- Foreign Policy (via NPR), the 10 worst cyberattacks; CNN and Nanog mirror of NYT coverage of GhostNet; Security Affairs, Aurora and Night Dragon summaries; Wikipedia, Exabeam, The Hacker News and SecurityScientist, on Aurora and Elderwood
- The Register, Threatpost, PCWorld, Christian Science Monitor and China Digital Times, coverage of the APT1 report
- FedScoop, The Hacker News, NPR, Bloomberg and Security Affairs, coverage of the 2014 PLA indictment
- CBS News, InfoWorld, PCWorld, Engadget, ClearanceJobs, The Hacker News and Wikipedia, on the OPM and Anthem breaches
- ASPI Strategist, CyberScoop, PIIE and Defense News, on the 2015 agreement and the shift to the MSS
- Security Affairs, Axios, The Register, BankInfoSecurity and Dark Reading, on APT10, Cloud Hopper and the 2018 indictment; Reuters via BankInfoSecurity, on named MSP victims
- TechCrunch, BleepingComputer, GovInfoSecurity, CFO.com and Security Affairs, on the APT41 indictments
- Techzine, GMF Alliance for Securing Democracy, Radware, n-able and secnews.gr, on Hafnium and the 2021 attribution
- SC World, Infosecurity Magazine, Lawfare, TechRadar, TechTarget and Computing, on Storm-0558 and the CSRB report
- BankInfoSecurity, on Sophos, the quartermaster theory and Sichuan Silence
- Nextgov, Decipher, CyberInsider, HivePro, DeepStrike, TechCrunch, GadgetReview and The Hacker News, on Salt Typhoon, Treasury sanctions and the telecom victims
- SecurityWeek, The Register, TechRadar and WaterISAC, on Silk Typhoon and the Treasury breach
- BleepingComputer, SecurityWeek, Infosecurity Magazine, CyberInsider, Cybersecurity Dive, heise and The Hacker News, on ToolShell and Symantec’s follow-up
- SecurityWeek, The Hacker News, The Stack, HivePro and Red Hot Cyber, on Ivanti and BRICKSTORM
- CyberScoop, SecurityWeek, The Stack, Criminal IP and WaterISAC, on FIRESTARTER and ArcaneDoor
- TechRepublic, Flashpoint, Risky Bulletin and Security Affairs, on the March 2025 indictments
- WaterISAC, HaystackID, ComplexDiscovery and Ghostwire, on AA26-113A
- Decrypt, AI Incident Database, LongTermWiki and other coverage of GTG-1002
- Help Net Security, TechTarget, Security Affairs and iThome, on the PlugX removal operation and Mustang Panda; The Hacker News and ASD’s own summary, on APT40
- Lawfare, Risky Bulletin, The Register (via CISO2CISO), Computing, Business Standard and Willkie, on the APT31 indictment, IntrusionTruth and the UK sanctions
- The Hacker News, The Record, Decipher, BankInfoSecurity, SC World, Security Affairs and Recorded Future (Dec 2025), on China’s vulnerability disclosure rules and the zero-day pipeline
- CyberSecurityNews, BankInfoSecurity, The Hill, Fox affiliates and Anvilogic, on Salt Typhoon’s phone targeting and CISA’s mobile guidance
- TechRadar, CSO Online (relaying Xinhua), Red Hot Cyber, Arab News, Fox News and The New Lens, on China’s counter-accusations and its replies to the 2014 indictment
- The Record, The Register, Bitdefender and Anti-Abuse, on Xu Zewei’s arrest, extradition and indictment
- BleepingComputer, SecurityWeek, WaterISAC, Meritalk and Security Affairs, on FIRESTARTER and AR26-113A; HaystackID, ComplexDiscovery and WaterISAC, on AA26-113A
