<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/Header.vue";
import { encriptarRequest } from "./modules/EncryptServices";
import { ref } from "vue";
import type { ButtonHTMLAttributes, ImgHTMLAttributes } from "vue";

const isTestBtnToggled = ref(false);
const tuHashSir = ref("");

const toggleTest = () => {
  encriptarRequest("SF")
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
  <div>
    <Header></Header>

    <RouterView />
    <div @click="toggleTest">
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
  </div>
</template>
