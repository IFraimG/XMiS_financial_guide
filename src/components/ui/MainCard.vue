<script setup lang="ts">
import "@/assets/styles/feature_main/main_main.scss"

</script>
<template>
    <div class="main__left-card">
        <div class="main__left-card-title">
            <slot name="numerate"></slot>
            <h2>
                <slot name="header"></slot>
            </h2>
        </div>
        <slot name="content"></slot>
        <slot name="link"></slot>
    </div>
</template>
