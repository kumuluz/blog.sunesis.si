---
layout: post
title:  "Eclipse MicroProfile 1.2 with KumuluzEE"
date:   2017-11-09
author: jmezna
categories: [KumuluzEE, Architecture]
tags: [KumuluzEE, Java EE, Microservices, Cloud-native, Eclipse MicroProfile]
---

KumuluzEE is fully compliant with the Eclipse MicroProfile 1.2 specification. It provides the implementations of the
following MicroProfile APIs:
- Config 1.1
- Health Check 1.0
- Metrics 1.0
- Fault Tolerance 1.0
- JWT Authentication 1.0

<!--more-->

All the KumuluzEE components and extensions, which are mandatory for the compliance with the MicroProfile 1.2
specification, are grouped in a profile that can be included as a single Maven dependency:

```xml
<dependency>
    <groupId>com.kumuluz.ee</groupId>
    <artifactId>kumuluzee-microProfile-1.2</artifactId>
</dependency>
```

You can use the [online pom generator](https://ee.kumuluz.com/generator/) to generate *pom* files with selected
profiles or individual Maven dependencies.

A detailed sample project, demonstrating the implementation of a microservice with KumuluzEE MicroProfile 1.2, is
available on [GitHub](https://github.com/kumuluz/kumuluzee-samples/tree/master/kumuluzee-microProfile-1.2).