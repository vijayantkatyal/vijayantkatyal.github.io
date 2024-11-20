---
layout: post
title: How to Increase Domain Ranking using DNS
date: 2024-11-20 10:12
summary: How to Increase Domain Ranking using DNS
categories: dns
update_date: 
featured_image: 
comments: false
intro_image: 
meta_image:
---
recently bought domain [snazzymo.com](https://snazzymo.com) for a project i will be working on. thought of working on adding some credibility while i work on building and before starting blog or marketing the site.

## DNS provider

i bought domain from godaddy, let's check if i should switch to another DNS provider (like cloudflare or stick with godaddy).

have used cloudflare in many domains (for client work). by default SSL and faster DNS changes and extra layer of security is given for free.

a comparison b/w cloudflare and google DNS
[https://www.cloudflare.com/en-in/cloudflare-vs-google-dns/](https://www.cloudflare.com/en-in/cloudflare-vs-google-dns/)

cloudflare support and issue with billing using Indian credit / debit card are issues i faced in past and recently when buying domain [snazzymo.com](https://snazzymo.com) but their DNS solution is solid and free and i don't have to worry about billing in this case.

let's switch to cloudflare from godaddy

- i haven't enabled DS / DNSSEC record yet. 
- just need to update name servers

ref link: [https://developers.cloudflare.com/dns/zone-setups/full-setup/setup/](https://developers.cloudflare.com/dns/zone-setups/full-setup/setup/)

it would take some time to reflect these changes, let's wait.
it took 10 mins only.

### Enabling Email Security

- I've deleted every DNS record entry from godaddy.
- enabled SPF, DKIM and DMARC using cloudflare for email credibility and prevent malicious spam
- added DS record using cloudflare instructions. 

### Default Page

- setup github repo with pages enabled. and add own custom domain.

### Domain Ownership

submitted site via google search console

### Landing Page Meta Tags

update default page to include necessary tags for SEO indexing

~~~ html
<meta charset="UTF-8">
<meta name="theme-color" content="#000000" />
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="x-ua-compatible" content="ie=edge">
<title>SnazzyMo</title> 
<meta name="robots" content="all">
<meta name="author" content="Vijayant Katyal">
<link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="SnazzyMo">
<meta name="description" content="SnazzyMo - video interaction platform.">
<meta name="keywords" content="saas, video, interaction">  
<link rel="me" type="text/html" href="https://github.com/snazzymo" />
<link rel="me" type="text/html" href="https://snazzymo.com/blog/atom.xml" />
<link rel="me" type="text/html" href="https://x.com/vijayantkatyal" />
<link href="/blog/atom.xml" type="application/atom+xml" rel="alternate" title="SnazzyMo Blog">
<link rel="canonical" href="https://snazzymo.com/">
~~~

<br/>

### SEO Indexing

will be enabling sitemap when setting up blog (jekyll)

notes:
- make sure to use www using CNAME to avoid duplicate domain enteries.
- if blog enabled, try avoiding subdomain, instead use [snazzymo.com/blog](https://snazzymo.com/blog)





