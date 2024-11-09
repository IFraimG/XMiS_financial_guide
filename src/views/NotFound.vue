<template>
    <div class="notfound">
      <h1>На этой странице ничего нет. Вы будете отправлены на главную страницу через ({{ time }}) секунд</h1>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watchEffect } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()
const time = ref<number>(5)

onMounted(() => {
    const timer = setInterval(() => {
        time.value--
    }, 1000)

    watchEffect(() => {
    if (time.value <= 0) {
        clearInterval(timer)
        router.push("/")
    }
})
})
</script>