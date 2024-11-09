<script setup lang="ts">
import { onMounted, ref, watchEffect } from "vue"

import CustomHeader from "@/components/feature_main/CustomHeader.vue"
import MainInfo from "@/components/feature_main/MainInfo.vue"
import CustomFooter from "@/components/feature_main/CustomFooter.vue"
import ModalAuth from "@/components/feature_main/ModalAuth.vue"

import "@/assets/styles/feature_main/main_home.scss"

const isAuth = ref<boolean | null>(null)

onMounted(() => {
  // запрос
  setTimeout(() => {
    isAuth.value = true
  }, 3000)
  
})

watchEffect(() => {
  if (isAuth.value) {
      document.body.style.overflow = "auto"
  } else document.body.style.overflow = "hidden"
})


const setAuth = (login: string) => {
  console.log(login);
  if (login.length == 0) {
    
  } else {
    // запрос
    isAuth.value = true
  }
}

</script>

<template>
  <div class="home__wrapper">
    <modal-auth @sendAuth="setAuth" v-if="isAuth == null || !isAuth" />
    <div class="home">
      <div class="header__wrapper">
        <div class="header">
            <custom-header />
        </div>
      </div>
      <div class="main__wrapper">
        <div class="main">
          <main-info />
        </div>
      </div>
      <div class="footer__wrapper">
        <div class="footer">
          <custom-footer />
        </div>
      </div>
    </div>
  </div>
</template>
