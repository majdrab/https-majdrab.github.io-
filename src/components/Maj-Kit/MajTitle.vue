<template>
    <component :is="is" class="maj-title">
        <slot></slot>
    </component>
</template>

<script>
export default {
  name: "MajTitle",
  props: {
    is: { type: String, default: "h3" },
  }
}
</script>

<style lang="scss">
h1.maj-title  {
  font-size: 3rem;
  line-height: 3.6rem;
  font-weight: 500;
}
h2.maj-title  {
  font-size: 2rem;
  line-height: 2.4rem;
  font-weight: 500;
}
h3.maj-title  {
  font-size: 1.6rem;
  line-height: 1.92rem;
  font-weight: 400;
}
h4.maj-title  {
  font-size: 1.5rem;
  line-height: 1.8rem;
  font-weight: 500;
}
</style>
