<template>
  <div class="columns-2">
    <div class="ml-10 mt-14">
      <button
        type="button"
        class="px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Encriptar
      </button>
    </div>
    <div class="col-span-2">
      <label for="encriptar" class="text-sm font-medium leading-6 text-gray-900"
        >Encriptar</label
      >
      <input
        type="text"
        name="encriptar"
        id="encriptar"
        class="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="SilverFlin"
      />
      <input
        type="text"
        name="resultado-encriptar"
        id="resultado-encriptar"
        class="mt-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
    </div>
  </div>
</template>

<script setup lang="ts"></script>
