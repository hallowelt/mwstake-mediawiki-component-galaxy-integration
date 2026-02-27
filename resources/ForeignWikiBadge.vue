<template>
  <div
      v-if="sourceWiki"
      class="foreign-wiki-badge"
      :class="{ 'foreign-wiki-badge--light-text': sourceWiki.color?.lightText }"
      :style="sourceWiki.color ? { color: sourceWiki.color.background } : { color: '#747474' }"
  >
    <span class="foreign-wiki-badge__icon" :style="sourceWiki.color ? { backgroundColor: sourceWiki.color.background } : { backgroundColor: '#747474' }"></span>
    <span class="foreign-wiki-badge__text">{{ sourceWiki.display_text }}</span>
  </div>
</template>

<script>


const ForeignWikiBadge = {
  name: 'InstanceBadge',
  props: {
    sourceWiki: {
      type: Object,
      default: null
    }
  }
};
mws.galaxyIntegration.vue.ForeignWikiBadge = ForeignWikiBadge;

module.exports = ForeignWikiBadge;

</script>