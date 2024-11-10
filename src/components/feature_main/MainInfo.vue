<template>
  <div class="content__wrapper main__content">
    <div class="main__left">
      <main-card class="main__cash">
        <template #header>
          Все счета
        </template>
        <template #content>
          <h1>{{ balanceNum }} {{ balanceNum2 }}, {{ balanceNumOst }} ₽</h1>
        </template>
        <template #link></template>
      </main-card>
      <main-card class="main__expense">
        <template #header>
          Ваши доходы за последние полгода
        </template>
        <template #content>
          <div class="main__expense-list">
          <div class="box__info box__info-blue">
            <p>Начисление зарплаты 700000 ₽</p>
          </div>
          <div class="box__info box__info-pink">
            <p>Кэшбек 3 400 ₽</p>
          </div>
          <div class="box__info box__info-green">
            <p>Пополнения 65 000 ₽</p>
          </div>
          <div class="box__info box__info-blue">
            <p>Переводы 11 000 ₽</p>
          </div>
          <div class="box__info box__info-pink">
            <p>Инвестиции 80 000 ₽</p>
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
              <p>Доступность</p>
            </div>
            <div class="box__info box__info-pink">
              <p>Быстродействие</p>
            </div>
            <div class="box__info box__info-blue">
              <p>Открытость</p>
            </div>
          </div>
        </template>
        <template #link></template>
      </main-card>
    </div>
    <div class="main__right">
      <main-card class="main__finance">
        <template #header>Анализ доходов и сбережений</template>
        <template #content>
          <p class="main__text-info">Можно заработать {{ borrow }} ₽ на вложениях</p>
        </template>
        <template #link>
          <router-link to="/financy">
            <button class="main__link">Перейти</button>
        </router-link>
        </template>
      </main-card>
      <!-- <main-card class="main__finance">
        <template #header>Инвестируйте и зарабатывайте</template>
        <template #content>
          <p class="main__text-info">Можно заработать 65907 ₽ на вложениях</p>
        </template>
        <template #link>
          <a :href="testLink" target="_blank">
            <button class="main__link">Перейти</button>
          </a>
        </template>
      </main-card> -->
      <main-card class="main__props">
        <template #header>Реквизиты</template>
        <template #content>
          <p class="main__text-info">Номер счёта хххх хххх хххх хххх</p>
          <p class="main__text-info">ИНН</p>
          <p class="main__text-info">БИК 1111111111</p>
          <p class="main__text-info">ИНН Банка 1111111111</p>
          <p class="main__text-info">КПП Банка 111111111</p>
          <p class="main__text-info">Корпоративный счет 11111111111111111</p>
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

const balanceNum = Math.floor(Math.random() * (999 - 100 + 1)) + 100
const balanceNum2 = Math.floor(Math.random() * (999 - 100 + 1)) + 100
const balanceNumOst = Math.floor(Math.random() * (99 - 10 + 1)) + 10
const borrow = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000

</script>
