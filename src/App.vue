<script setup lang="ts">
import Backdrop from "./components/Backdrop.vue";
import Hero from "./components/Hero.vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
  smooth: 1,
  effects: true,
  smoothTouch: 0.1,
});
</script>

<template>
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <Backdrop />
    </div>
  </div>
  <Hero />
</template>
