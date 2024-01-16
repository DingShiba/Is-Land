<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import HomePage from '@/views/page0/index-old.vue'


gsap.registerPlugin(ScrollTrigger);

const main = ref();
let ctx;

onMounted(() => {
  ctx = gsap.context((self) => {
    const boxes = self.selector('.box');
    boxes.forEach((box) => {
      gsap.to(box, {
        x: 150,

        scrollTrigger: {
          trigger: box,
          start: 'bottom bottom',
          markers: true,

          scrub: true,
        },
      });
    });
  }, main.value); // <- Scope!
});

onUnmounted(() => {
  ctx.revert(); // <- Easy Cleanup!
});
</script>

<template id="app">
  <div id="app" class="main-container">
    <!--    <home-page></home-page>-->

    <section class="area-1 flex-center column blue">
      <h1>Basic ScrollTrigger in VueJS</h1>
      <h2>Scroll down to see the magic happen!!</h2>
    </section>
    <div class="section flex-center column" ref="main">
      <div class="box">box</div>
      <div class="box">box</div>
      <div class="box">box</div>
    </div>
    <section class="section flex-center orange column">
      <h1>The End!</h1>
      <h2>
        For more information visit:&nbsp;
        <a
            href="https://greensock.com/scrolltrigger/"
            target="_blank"
            rel="noreferrer"
        >
          greensock.com/scrolltrigger/
        </a>
      </h2>
    </section>
  </div>
</template>
<style scoped lang="less">
.main-container{
  height: 100vh;
}
</style>
