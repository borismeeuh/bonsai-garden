<template>
  <section class="relative pt-80 pb-24">
    <div
      class="top-50 w-full text-sand flex flex-col items-center justify-center"
    >
      <div class="text-8xl font-display font-extralight">About Bonsai</div>
      <div
        class="text-2xl font-display font-extralight w-1/2"
        ref="scrambledParagraph"
      >
        Bonsai is the art of growing miniature trees in containers, a practice
        that originated in China and was later refined in Japan. The term
        "bonsai" itself is a Japanese word meaning "tray planting." The primary
        goal of this art form is not to stunt the tree's growth, but to
        cultivate a small, aesthetically pleasing tree that captures the essence
        and natural beauty of a full-sized tree in the wild.
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { gsap } from "gsap";
import { onMounted, ref } from "vue";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, SplitText);

const scrambledParagraph = ref<HTMLElement>(null);

onMounted(() => {
  const mySplitText = new SplitText(scrambledParagraph.value, {
    type: "words",
  });

  gsap.from(mySplitText.words, {
    opacity: 0,
    y: 20,
    stagger: 0.05,
    ease: "power2.out",
    scrollTrigger: {
      trigger: scrambledParagraph.value,
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });
});
</script>