<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/Header.vue";
import { encriptar } from "./modules/EncryptServices";
import { ref } from "vue";
import type { ButtonHTMLAttributes, ImgHTMLAttributes } from "vue";

const isTestBtnToggled = ref(false);
const tuHashSir = ref("");

const toggleTest = () => {
  encriptar("SF")
    .then((res) => {
      console.log(res);
      isTestBtnToggled.value = !isTestBtnToggled.value;
      tuHashSir.value = `Tu hash: ${res.data.texto}`;
    })
    .catch(() => {
      tuHashSir.value = "Error xd";
    });
};
</script>

<template>
  <Header></Header>

  <div @click="toggleTest" class="inline-block">
    <img
      style="height: 100px; width: 100px"
      v-if="isTestBtnToggled"
      src="@/assets/images/cute-cat.gif"
    />
    <img
      style="height: 100px; width: 100px"
      v-if="!isTestBtnToggled"
      src="@/assets//images/kitty-cat-sandwich.gif"
    />
    <p>{{ tuHashSir }}</p>
  </div>

  <RouterView />
</template>
