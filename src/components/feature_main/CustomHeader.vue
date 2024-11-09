<script setup lang="ts">
import "@/assets/styles/feature_main/main_header.scss"

</script>

<template>
  <div class="content__wrapper header__content">
    <div class="header__list-left">
      <img src="@/assets/images/logo.png">
    </div>
    <ul class="header__list">
      <li class="header__item">
        <RouterLink to="/" class="header__link">Главная</RouterLink>
      </li>
      <li class="header__item">
        <RouterLink to="/" class="header__link">Операции</RouterLink>
      </li>
      <li class="header__item">
        <RouterLink to="/" class="header__link">Платежи</RouterLink>
      </li>
      <li class="header__item">
        <RouterLink to="/" class="header__link">Бонусы</RouterLink>
      </li>
      <li class="header__item header__item-last"></li>
    </ul>
</div>
</template>
