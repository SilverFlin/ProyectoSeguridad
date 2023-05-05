<template>
  <div class="py-24 bg-white sm:py-32">
    <div class="px-6 mx-auto max-w-7xl lg:px-8">
      <div class="max-w-2xl mx-auto lg:mx-0 lg:max-w-none">
        <p class="text-base font-semibold leading-7 text-indigo-600">Hola</p>
        <h1
          class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
        >
          Encriptador
        </h1>
        <div
          class="grid max-w-xl grid-cols-1 gap-8 py-32 mt-10 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-12"
        >
          <!-- <div class="columns-"> -->
          <div class="col-span-5">
            <EncryptItem />
          </div>
          <div
            class="ml-8 inline-block h-[250px] min-h-[1em] w-0.5 self-stretch bg-neutral-300 opacity-100 dark:opacity-50"
          ></div>

          <div class="col-span-5">
            <DecryptItem />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import EncryptItem from "../components/Encrypt/EncryptItem.vue";
import DecryptItem from "../components/Encrypt/DecryptItem.vue";
</script>
