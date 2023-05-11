<template>
  <div class="columns-2">
    <div class="col-span-2">
      <label for="encriptar" class="text-sm font-medium leading-6 text-gray-900"
        >Desencriptar</label
      >
      <input
        type="text"
        name="encriptar"
        id="encriptar"
        class="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="asdlkasjdaslk"
        v-model="hash"
      />
      <input
        type="text"
        name="resultado-encriptar"
        id="resultado-encriptar"
        class="w-full mt-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        v-model="textoDesencriptado"
      />
    </div>
    <div class="flex justify-start">
      <button
        type="button"
        class="px-3 py-2 ml-12 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm mt-14 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        @click="desencriptar"
      >
        Desencriptar
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { desencriptarRequest } from "../../modules/EncryptServices";

const hash = ref("");
const textoDesencriptado = ref("");

async function desencriptar() {
  await desencriptarRequest(hash.value)
    .then((res) => {
      const texto = res.data.texto;
      textoDesencriptado.value = texto;
    })
    .catch(() => {
      alert("Inicia Sesión");
    });
}
</script>
