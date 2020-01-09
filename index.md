---
layout: layout.liquid
title: Auto-Generated Social Sharing Cards in 11ty
tagline: Using @jlengstorf/get-share-image and Cloudinary
pagination:
  data: collections.blog
  size: 10
  alias: blogs
---

{%- for blog in blogs %}
- [{{blog.data.title}}]({{blog.url}})
{%- endfor -%}
