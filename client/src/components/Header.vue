<template>
  <header
    class="sticky top-0 z-50 bg-gradient-to-r from-cyan-50 to-transparent"
  >
    <nav
      class="flex items-center justify-between p-6 mx-auto max-w-7xl lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <RouterLink to="/" class="-m-1.5 p-1.5">
          <span class="sr-only">CodeLeap</span>
          <img class="w-auto h-8" src="../../img/gato2.jpg" alt="" />
        </RouterLink>
      </div>
      <div class="flex lg:hidden">
        <button type="button" @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="w-6 h-6" aria-hidden="true" />
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <RouterLink
          v-for="item in navigation"
          :key="item.name"
          :to="item.href"
          class="text-sm font-semibold leading-6 text-gray-900"
          >{{ item.name }}</RouterLink
        >
      </div>

      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <a v-if="!isLoggedIn" @click="actualizarSesion" href="/auth/google"
          >Log in <span aria-hidden="true">&rarr;</span></a
        >

        <a v-if="isLoggedIn" href="/auth/logout"
          >Log out <span aria-hidden="true">X</span></a
        >
        <img
          v-if="isLoggedIn"
          class="inline-block w-10 h-10 rounded-full"
          :src="imageURL"
          crossorigin="anonymous"
          alt=""
        />
      </div>
    </nav>
    <Dialog
      as="div"
      class="lg:hidden"
      @close="mobileMenuOpen = false"
      :open="mobileMenuOpen"
    >
      <div class="fixed inset-0 z-10" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-10 w-full px-6 py-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img
              class="w-auto h-8"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </a>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
        <div class="flow-root mt-6">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="py-6 space-y-2">
              <RouterLink
                v-for="item in navigation"
                :key="item.name"
                :to="item.href"
                class="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                >{{ item.name }}</RouterLink
              >
            </div>

            <div class="py-6">
              <a
                v-if="!isLoggedIn"
                @click="actualizarSesion"
                href="/auth/google"
                >Log in <span aria-hidden="true">&rarr;</span></a
              >

              <a v-if="isLoggedIn" href="/auth/logout"
                >Log out <span aria-hidden="true">X</span></a
              >
              <img
                v-if="isLoggedIn"
                class="inline-block w-10 h-10 rounded-full"
                crossorigin="anonymous"
                :src="imageURL"
                alt=""
              />
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Dialog, DialogPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import { RouterLink } from "vue-router";
import { currentSessionRequest } from "../modules/SessionServices";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Acerca", href: "/about" },
  { name: "Encriptar", href: "/encriptar" },
];

const mobileMenuOpen = ref(false);
const isLoggedIn = ref(false);
const imageURL = ref("");
actualizarSesion();

async function actualizarSesion() {
  await currentSessionRequest()
    .then((res) => {
      console.log(res);
      imageURL.value = res.imageURL;
      if (imageURL.value) {
        isLoggedIn.value = true;
        console.log("Logged In");
      }
    })
    .catch(() => {});
}
</script>
