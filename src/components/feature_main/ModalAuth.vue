<script setup lang="ts">
import { defineEmits, ref } from "vue"
import "@/assets/styles/feature_main/main_modal.scss"
import MainCard from "@/components/ui/MainCard.vue"

const emit = defineEmits(["sendAuth"])

const login = ref<string>("")

const sendAuth = () => {
    emit("sendAuth", login.value)
    login.value = ""
}
</script>
<template>
    <div class="modal__wrapper">
        <div class="modal">
            <main-card class="modal__content">
                <template #header>
                    <span style="font-weight: normal">Вход в ВТБ-Банк</span>
                </template>
                <template #content>
                    <div class="modal__fields">
                        <input class="modal__input" v-model="login" type="text" placeholder="Логин">
                        <button class="modal__send" @click="sendAuth" disabled="true">></button>
                    </div>
                </template>
            </main-card>
        </div>
    </div>
</template>
