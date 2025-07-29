<template>
  <section>
    <div
      ref="horizontalWrapper"
      class="horizontal-scroll-wrapper overflow-hidden relative"
    >
      <div
        ref="horizontalSection"
        class="horizontal-scroll-section flex flex-nowrap w-max"
      >
        <div
          class="horizontal-panel min-w-screen h-screen flex flex-shrink-0 justify-center items-center p-16"
        >
          <img
            src="/src/images/bonsai-9.png"
            alt="Bonsai 1"
            class="w-full h-full object-cover shadow-lg"
          />
        </div>
        <div
          class="horizontal-panel min-w-screen h-screen flex flex-shrink-0 justify-center items-center p-16"
        >
          <img
            src="/src/images/bonsai-6.png"
            alt="Bonsai 1"
            class="w-full h-full object-cover shadow-lg"
          />
        </div>
        <div
          class="horizontal-panel min-w-screen h-screen flex flex-shrink-0 justify-center items-center p-16"
        >
          <img
            src="/src/images/bonsai-10.png"
            alt="Bonsai 1"
            class="w-full h-full object-cover shadow-lg"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted, ref } from "vue";

gsap.registerPlugin(ScrollTrigger);

const horizontalWrapper = ref(null);
const horizontalSection = ref(null);

onMounted(() => {
  if (!horizontalWrapper.value || !horizontalSection.value) {
    console.warn("Horizontal scrolling elements not found.");
    return;
  }

  let scrollWidth = horizontalSection.value.scrollWidth - window.innerWidth;

  gsap.to(horizontalSection.value, {
    x: -scrollWidth, 
    ease: "none", 
    scrollTrigger: {
      trigger: horizontalWrapper.value, 
      start: "top top", 
      end: () => `+=${scrollWidth}`,
      pin: true, 
      scrub: 1,
    },
  });
});
</script>