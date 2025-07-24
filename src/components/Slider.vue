<template>
  <section>
    <div
      ref="horizontalWrapper"
      class="horizontal-scroll-wrapper h-screen overflow-hidden relative"
    >
      <div
        ref="horizontalSection"
        class="horizontal-scroll-section flex flex-nowrap w-max"
      >
        <div
          class="horizontal-panel min-w-screen h-screen flex flex-shrink-0 justify-center items-center"
        >
          <img
            src="/src/images/bonsai-9.png"
            alt="Bonsai 1"
            class="w-full h-full object-cover shadow-lg"
          />
        </div>
        <div
          class="horizontal-panel min-w-screen h-screen flex flex-shrink-0 justify-center items-center"
        >
          <img
            src="/src/images/bonsai-6.png"
            alt="Bonsai 1"
            class="w-full h-full object-cover shadow-lg"
          />
        </div>
        <div
          class="horizontal-panel min-w-screen h-screen flex flex-shrink-0 justify-center items-center"
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

  // Calculate the total horizontal distance needed to scroll
  // This is the total width of all panels minus the width of the viewport
  // The 'horizontalSection.value.scrollWidth' gives the total scrollable width of the flex container
  let scrollWidth = horizontalSection.value.scrollWidth - window.innerWidth;

  gsap.to(horizontalSection.value, {
    x: -scrollWidth, // Animate the X position to move left by the calculated width
    ease: "none", // Linear movement
    scrollTrigger: {
      trigger: horizontalWrapper.value, // The element that defines the vertical scroll region to pin
      start: "top top", // When the top of the wrapper hits the top of the viewport
      // The 'end' defines the vertical scroll distance over which the animation plays.
      // We make it equal to the horizontal scroll distance to ensure a 1:1 scroll.
      end: () => `+=${scrollWidth}`,
      pin: true, // Pin the wrapper in place while the horizontal scroll happens
      scrub: 1, // Smoothly link animation progress to scroll progress (1 = slight delay)
      // markers: true, // Uncomment for debugging scroll trigger points
    },
  });
});
</script>