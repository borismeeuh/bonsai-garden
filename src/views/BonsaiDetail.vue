<template>
    <section class="py-16 px-24">
        <h1 class="text-sand text-8xl font-display font-extralight">{{ formattedId }}</h1>
    </section>
</template>

<script setup lang="ts">
import { formatId } from '../composables/FormatId'

const props = defineProps({
  id: String
})

const formattedId = formatId(props.id)
</script>