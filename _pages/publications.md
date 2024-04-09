---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% if site.author.googlescholar %}
  <div class="wordwrap">You can also find my research on <a href="{{site.author.googlescholar}}">Google Scholar</a>.</div><br>
{% endif %}

{% include base_path %}


---
# Journal Articles
---

{% for post in site.journal reversed %}
  {% include archive-single.html %}
{% endfor %}

<br>

---
# Conference Proceedings
---

{% for post in site.conference reversed %}
  {% include archive-single.html %}
{% endfor %}
