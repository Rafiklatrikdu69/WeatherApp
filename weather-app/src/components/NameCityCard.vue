<script setup lang="ts">
import type { WeatherResponse } from '@/entity/WeatherResponse';

defineProps<{
  title?: WeatherResponse
}>()
</script>
<template>
  <h1>{{ title?.coord.lon}}</h1>
</template>
<style></style>
