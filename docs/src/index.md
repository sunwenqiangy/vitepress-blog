---
layout: home

hero:
  name: "上冬辰_技术博客"
  text: "Web前端开发，记录工作学习中的一些问题以及获得的新技能"
  # tagline: Coding comes from love, so life is wonderful.
  image:
    src: /logo/index.svg
    alt: VitePress
  actions:
    - theme: brand
      text: 博客
      link: https://blog.csdn.net/qq_41782551
    - theme: alt
      text: 关于
      link: /about.md

features:
  - icon: 
      src: /logo/concentration.svg
    title: 笔记
    details: Markdown语言，简洁高效记录每一刻
    link: https://www.baidu.com
  - icon:
      src: /logo/accumulate.svg
    title: 博客
    details: 干净整洁的博客，易于存档文件
  - icon:
      src: /logo/share.svg
    title: 文档
    details: 在线个人文档，创作中意的文档

footer: true
---
<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(
    315deg,
    #3b71f2 25%,
    #90c3f8
  );

  --vp-home-hero-image-background-image: linear-gradient(
    -45deg,
    #3b71f2 50%,
    #90c3f8 50%
  );
  --vp-home-hero-image-filter: blur(40px);
  /* 1.0.0-beta.7 及以前版本配色方案 */
  --vp-c-brand: var(--vp-c-green);
  --vp-c-brand-light: var(--vp-c-green-light);
  --vp-c-brand-lighter: var(--vp-c-green-lighter);
  --vp-c-brand-lightest: var(--vp-c-green-lightest);
  --vp-c-brand-dark: var(--vp-c-green-dark);
  --vp-c-brand-darker: var(--vp-c-green-darker);
  --vp-c-brand-darkest: var(--vp-c-green-darkest);
  --vp-c-brand-dimm-1: var(--vp-c-green-dimm-1);
  --vp-c-brand-dimm-2: var(--vp-c-green-dimm-2);
  --vp-c-brand-dimm-3: var(--vp-c-green-dimm-3);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(72px);
  }
}
</style>