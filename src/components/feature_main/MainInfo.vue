<template>
  <div class="content__wrapper main__content">
    <div class="main__left">
      <main-card class="main__cash">
        <template #header>
          Все счета
        </template>
        <template #content>
          <h1>107 840, 91 ₽</h1>
        </template>
        <template #link></template>
      </main-card>
      <main-card class="main__expense">
        <template #header>
          Ваши траты за последние полгода
        </template>
        <template #content>
          <div class="main__expense-list">
          <div class="box__info box__info-blue">
            <p>Кафе 2 870 ₽</p>
          </div>
          <div class="box__info box__info-green">
            <p>Переводы 1 500 ₽</p>
          </div>
        </div>
        </template>
        <template #link></template>
      </main-card>
      <main-card class="main__bonus">
        <template #header>
          Бонусы по VTB API
        </template>
        <template #content>
          <div class="main__bonus-list">
          <div class="box__info box__info-blue">
            <p>От 600 ₽ на каждую дату</p>
          </div>
          <div class="box__info box__info-pink">
            <p>Покупай кофе и еду</p>
          </div>
          <div class="box__info box__info-blue">
            <p>Кэшбэк до 30% на развлечения</p>
          </div>
        </div>
        </template>
        <template #link></template>
      </main-card>
    </div>
    <div class="main__right">
      <main-card class="main__finance">
        <template #header>Анализ финансов</template>
        <template #content>
          <p class="main__text-info">Можно заработать 65907 ₽ на вложениях</p>
        </template>
        <template #link>
          <router-link to="/financy">
            <button class="main__link">Кнопка</button>
        </router-link>
        </template>
      </main-card>
      <main-card class="main__finance">
        <template #header>Инвестируйте и зарабатывайте</template>
        <template #content>
          <p class="main__text-info">Можно заработать 65907 ₽ на вложениях</p>
        </template>
        <template #link>
          <a :href="testLink" target="_blank">
            <button class="main__link">Кнопка</button>
          </a>
        </template>
      </main-card>
      <main-card class="main__props">
        <template #header>Реквизиты</template>
        <template #content>
          <p class="main__text-info">Номер договора xxxx</p>
        </template>
      </main-card>
      <main-card class="main__details">
        <template #header>Детали счета</template>
        <template #content>
          <div class="main__details-list" v-for="(item, index) of detailsList" :key="index">
            <router-link class="main__details-item" :to="item.link">
              <p>{{ item.title }}</p>
              <p>></p>
            </router-link>
          </div>
        </template>
      </main-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import "@/assets/styles/feature_main/main_main.scss"
import MainCard from "@/components/feature_main/MainCard.vue"

const detailsList = [
  { title: "Лимиты на переводы, снятия и пополнения", link: "/" },
  { title: "Тарифы", link: "/" },
  { title: "Выписка по счету", link: "/" },
  { title: "Заказать справку", link: "/" },
  { title: "Защита карт", link: "/" },
]

const testLink = "https://www.vtb.ru/personal/investicii/open/"

</script>
