<template>
  <div id="app">
    <div id="smooth-wrapper">
      <div id="smooth-content" class="relative">
        <Backdrop />
        <Hero />
        <Slider />
        <RotationalSlider />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Backdrop from "./components/Backdrop.vue";
import RotationalSlider from "./components/RotationalSlider.vue";
import Hero from "./components/Hero.vue";
import Slider from "./components/Slider.vue";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { onMounted } from "vue";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

onMounted(() => {
  if (
    document.querySelector("#smooth-wrapper") &&
    document.querySelector("#smooth-content")
  ) {
    ScrollSmoother.create({
      content: "#smooth-content",
      effects: true,
      smooth: 1.2,
      smoothTouch: 0.1,
      wrapper: "#smooth-wrapper",
    });
  } else {
    console.warn(
      "Smooth wrapper or content element not found, ScrollSmoother not initialized."
    );
  }

  gsap.fromTo(
    "#images-container",
    { filter: "blur(16px)" },
    {
      filter: "blur(0px)",
      ease: "none",
      scrollTrigger: {
        trigger: "#blurred-images-container",
        start: "top bottom",
        end: "40% top",
        scrub: true,
      },
    }
  );
});
</script>
