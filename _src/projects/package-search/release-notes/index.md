---
title: PACKAGE SEARCH release notes
parent: PACKAGE SEARCH
published: '2024-05-20'
status: publish
author: 'Jason Bayton'
excerpt: ''
type: project-docs
tags: 
    - 'Package Search'
    - 'bayton-projects'
layout: base.njk
eleventyNavigation:
  order: 2
  title: Release notes
---

## Release notes

<div class="support-list">
{% set first_item = true %}
{% for post in collections['Package Search'] | reverse %}
{% for tag in post.data.categories %}
{% if tag.includes("Package Search Release Notes") %}

<!-- Start the details element -->
<details {% if first_item %}open{% set first_item = false %}{% endif %}> <!-- Automatically open the first item -->
<!-- Summary element contains the title and date -->
<summary><h3><a href="{{ post.url }}">{{ post.data.eleventyNavigation.title }}</h3></a> - {{ post.data.published | dateFull }}</summary>

<!-- Content of the release note -->
<div class="release-content">
{{ post.templateContent | safe }}
</div>
</details>
<!-- End of details element -->

{% endif %}
{% endfor %}
{% endfor %}
</div>