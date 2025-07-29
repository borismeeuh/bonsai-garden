<template>
    <section class="py-16 flex flex-col gap-8">
         <div class="flex flex-col items-center">
            <div class="text-8xl font-display text-sand font-extralight text-center w-1/2">Bonsai pots</div>
            <div
                class="text-2xl font-display text-sand font-extralight w-1/2"
                ref="scrambledParagraph"
            >
                Choosing the right bonsai pot is essential to both the health 
                and visual balance of a bonsai tree. It should complement the 
                tree's shape and style while providing proper drainage and root 
                space. The pot's colour, texture, and proportions all contribute 
                to the overall harmony, making it a key element in the art of 
                bonsai display.
            </div>
        </div>

        <div ref="rotationalSliderWrapper" class="relative h-screen flex items-center justify-center">
            <!-- <div class="h-full w-screen absolute">
                <img src="/src/images/bonsai-6.png" alt="Witte bonsai pot" class="w-full h-full object-cover blur-lg">
            </div> -->
            <div ref="rotationalSlider" class="circle-container w-[80vh] h-[80vh] rounded-full relative">
                <div class="image-item w-[25vh] h-[25vh] rounded-full overflow-hidden absolute">
                    <img src="/src/images/potten/pot-ovaal-wit.png" alt="Witte bonsai pot" class="w-full h-full object-cover">
                </div>
                
                <div class="image-item w-[25vh] h-[25vh] rounded-full overflow-hidden absolute">
                    <img src="/src/images/potten/pot-rechthoek-blauw.png" alt="Witte bonsai pot" class="w-full h-full object-cover">
                </div>
                
                <div class="image-item w-[25vh] h-[25vh] rounded-full overflow-hidden absolute">
                    <img src="/src/images/potten/pot-rechthoek-bruin.png" alt="Witte bonsai pot" class="w-full h-full object-cover">
                </div>
                
                <div class="image-item w-[25vh] h-[25vh] rounded-full overflow-hidden absolute">
                    <img src="/src/images/potten/pot-rechthoek-grijs.png" alt="Witte bonsai pot" class="w-full h-full object-cover">
                </div>
                
                <div class="image-item w-[25vh] h-[25vh] rounded-full overflow-hidden absolute">
                    <img src="/src/images/potten/pot-rond-groen.png" alt="Witte bonsai pot" class="w-full h-full object-cover">
                </div>
            </div>
        </div>

        <br><br><br><br><br><br><br>
        <br><br><br><br><br><br><br>
        <br><br><br><br><br><br><br>
        <br><br><br><br><br><br><br>
        <br><br><br><br><br><br><br>
        <br><br><br><br><br><br><br>
        <br><br><br><br><br><br><br>
        <br><br><br><br><br><br><br>
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText)

const rotationalSliderWrapper = ref<HTMLElement | null>(null)
const rotationalSlider = ref<HTMLElement | null>(null)
const scrambledParagraph = ref<HTMLElement>(null);

onMounted(() => {
    configureRotationSlider()
    scrambleText()
})

const configureRotationSlider = () => {
    if (!rotationalSliderWrapper.value || !rotationalSlider.value) {
    console.warn("Rotational slider elements not found for animation.")
    return
  }

  const imageItems = Array.from(rotationalSlider.value.querySelectorAll('.image-item')) as HTMLElement[]

  if (imageItems.length === 0) {
    console.warn("No image items found inside the rotational slider.")
    return
  }

  const numImages = imageItems.length
  const containerWidth = rotationalSlider.value.offsetWidth
  const itemWidth = imageItems[0].offsetWidth 

  const radius = containerWidth / 2

  // 1 Initiële positionering van afbeeldingen in een cirkel 
  imageItems.forEach((imgEl, i) => {
    const angle = (i / numImages) * 360
    const angleRad = angle * (Math.PI / 180)

    gsap.set(imgEl, {
      x: radius * Math.cos(angleRad) + (containerWidth / 2) - (itemWidth / 2),
      y: radius * Math.sin(angleRad) + (containerWidth / 2) - (itemWidth / 2),
      rotation: angle + 90,
      opacity: 0,
    })
  })

  // 2 Hoofdrotatie animatie van de cirkel bij scrollen
  gsap.to(rotationalSlider.value, {
    rotation: 360, 
    ease: "none",  
    scrollTrigger: {
      trigger: rotationalSliderWrapper.value, 
      start: "top top",
      end: "bottom top",
      pin: true,       
      scrub: 1,        
    }
  })

gsap.to(imageItems, { 
        opacity: 1,
        duration: 1, 
        stagger: {
            each: 1, 
            from: "end", 
        },
        ease: "power1.inOut", 
        scrollTrigger: {
            trigger: rotationalSliderWrapper.value,
            start: "top top", 
            end: "bottom top", 
            scrub: 1, 
        }
    });
}

const scrambleText = () => {
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
}
</script>