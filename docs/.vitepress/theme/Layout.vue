<script setup>
import DefaultTheme from "vitepress/theme";
import { useData } from "vitepress";

// Pages whose images show the example characters' portraits set `aiPortrait: true`; those portraits were made with
// FLUX, so those pages say so. The home page carries the same note in its own text.
const { frontmatter, lang } = useData();
const NOTES = {
  "pt-BR": "Os retratos dos personagens de exemplo nestas imagens foram gerados com IA (FLUX.1 schnell). O resto das imagens mostra a interface real do módulo, e as artes das fichas foram desenhadas em código.",
  "en-US": "The portraits of the example characters in these images were generated with AI (FLUX.1 schnell). Everything else in them is the module's real interface, and the sheet artwork is drawn in code."
};
</script>

<template>
  <DefaultTheme.Layout>
    <template #doc-footer-before>
      <p v-if="frontmatter.aiPortrait" class="ai-note">{{ NOTES[lang] ?? NOTES["en-US"] }}</p>
    </template>
  </DefaultTheme.Layout>
</template>

<style scoped>
.ai-note {
  margin: 32px 0 0;
  padding: 10px 14px;
  border-left: 3px solid var(--vp-c-brand-1);
  border-radius: 4px;
  background: var(--vp-c-bg-soft);
  font-size: 13px;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}
</style>
