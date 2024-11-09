<template>
  <div class="financy__graph-right">
    <div class="financy__profit">
      <h2 class="financy__profit-title">Как зарабатывать больше?</h2>
      <main-card class="financy__item">
        <template #numerate>
          <span class="financy__numerate">1</span>
        </template>
        <template #header>
          <span class="financy__card-title">Популярные вложения</span>
        </template>
        <template #link>
          <router-link to="/">
            <button class="financy__link">Перейти</button>
          </router-link>
        </template>
      </main-card>
      <main-card class="financy__item">
        <template #numerate>
          <span class="financy__numerate">2</span>
        </template>
        <template #header>
          <span class="financy__card-title">Акции, краткосрочные вложения</span>
        </template>
        <template #link>
          <router-link to="/">
            <button class="financy__link">Перейти</button>
          </router-link>
        </template>
      </main-card>
      <main-card class="financy__item">
        <template #numerate>
          <span class="financy__numerate">3</span>
        </template>
        <template #header>
          <span class="financy__card-title">Вклады, долгосрочные инвестиции</span>
        </template>
        <template #link>
          <router-link to="/">
            <button class="financy__link">Перейти</button>
          </router-link>
        </template>
      </main-card>
    </div>
  </div>
</template>
<script setup lang="ts">
import MainCard from '@/components/feature_main/MainCard.vue'
</script>