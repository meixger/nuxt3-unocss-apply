<template>
  <div class="test1">.test1</div>
  <div class="test2">.test2</div>

  <p class="mt-4 text-center">
    Why is <code>.test1</code> centered but <code>.test2</code> is not?
    <br />
    Disabling <code>cssnano</code> in <code>nuxt.config.ts</code> would resolve the error.
  </p>
</template>

<style>
.test1 {
  @apply bg-slate-200;
  @apply text-center;
}

.test2 {
  @apply text-center;
  @apply bg-slate-200;
}

/* resulting bundle:
.test1{--un-bg-opacity:1;background-color:rgba(226,232,240,var(--un-bg-opacity));text-align:center}
.test2{--un-bg-opacity:1;background-color:rgba(226,232,240,var(--un-bg-opacity))}
*/
</style>