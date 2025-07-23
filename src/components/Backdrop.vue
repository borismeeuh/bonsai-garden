<template>
  <section class="min-h-screen relative py-80" id="background">
    <div
      class="space-y-12 max-w-7xl mx-auto"
      data-speed="0.7"
      data-lag="0.1"
      id="images-container"
    >
      <div class="flex gap-12 h-1/2">
        <div class="w-1/3">
          <img
            src="/src/images/bonsai-1.jpg"
            alt="Bonsai 1"
            class="w-full h-full object-cover shadow-lg"
          />
        </div>
        <div class="w-2/3">
          <img
            src="/src/images/bonsai-8.png"
            alt="Bonsai 2"
            class="w-full h-full object-cover shadow-lg"
          />
        </div>
      </div>

      <div class="flex gap-12 h-1/2">
        <div class="w-2/3">
          <img
            src="/src/images/bonsai-3.jpg"
            alt="Bonsai 3"
            class="w-full h-full object-cover shadow-lg"
          />
        </div>
        <div class="w-1/3">
          <img
            src="/src/images/bonsai-4.png"
            alt="Bonsai 4"
            class="w-full h-full object-cover shadow-lg"
          />
        </div>
      </div>

      <div class="flex gap-12 h-1/2">
        <div class="w-1/3">
          <img
            src="/src/images/bonsai-5.png"
            alt="Bonsai 1"
            class="w-full h-full object-cover shadow-lg"
          />
        </div>
        <div class="w-2/3">
          <img
            src="/src/images/bonsai-5.png"
            alt="Bonsai 2"
            class="w-full h-full object-cover shadow-lg"
          />
        </div>
      </div>
    </div>
    <div
      class="absolute top-50 w-1/1 text-sand flex flex-col items-center justify-center"
    >
      <div class="text-8xl font-display font-extralight">Bonsai Garden</div>
      <div class="text-2xl font-display font-extralight">
        A GSAP & Tailwind project
      </div>
    </div>
  </section>
</template>