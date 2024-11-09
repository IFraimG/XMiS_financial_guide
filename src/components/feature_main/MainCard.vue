<script setup lang="ts">
import "@/assets/styles/feature_main/main_main.scss"

</script>
<template>
    <div class="main__left-card">
        <h2>
            <slot name="header"></slot>
        </h2>
        <slot name="content"></slot>
        <slot name="link"></slot>
    </div>
</template>
