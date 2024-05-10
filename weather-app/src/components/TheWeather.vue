<script setup lang="ts">
import NameCityCard from "@/components/NameCityCard.vue"
import type { WeatherResponse } from "@/entity/WeatherResponse";
import { useWeather } from '@/services/service'
const weather = useWeather().getWeather();
let station :WeatherResponse;
weather.then(
    weather=>{
        station = weather;
    })
</script>

<template>
  <h1>Weather App</h1>
  <NameCityCard :title=station />
</template>

<style scoped></style>
