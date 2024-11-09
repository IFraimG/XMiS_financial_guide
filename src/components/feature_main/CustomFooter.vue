<script setup lang="ts">
import "@/assets/styles/feature_main/main_footer.scss"

</script>

<template>
  <div class="content__wrapper header__content footer__content">
    <div class="header__list-left">
      <img src="@/assets/images/logo.png">
    </div>
    <p>© 2006—2024, АО «ВТБ», лицензия ЦБ РФ № xxxx</p>
    <ul class="header__list">
      <li class="header__item">
        <RouterLink to="/" class="header__link">О нас</RouterLink>
      </li>
      <li class="header__item">
        <RouterLink to="/" class="header__link">Условия использования</RouterLink>
      </li>
      <li class="header__item">
        <RouterLink to="/" class="header__link">Контакты</RouterLink>
      </li>
      <li class="header__item">
        <RouterLink to="/" class="header__link">Политика конфидециальности</RouterLink>
      </li>
    </ul>
  </div>
</template>
