<template>
  <div class="px-6 py-32 bg-white lg:px-8">
    <div class="max-w-3xl mx-auto text-base leading-7 text-gray-700">
      <p class="text-base font-semibold leading-7 text-indigo-600">
        Introdución
      </p>
      <h1
        class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
      >
        Navegar de forma segura...
      </h1>
      <p class="mt-6 text-xl leading-8">
      El navegar de forma segura tiene muchos requisitos ya que el usuario se expone a 
      demasiados riesgos al navegar por internet ya que no toma en cuenta o no conoce los ataques 
      de los cuales puede ser víctima y sin tener noción de esto.
      </p>
      <div class="max-w-2xl mt-10">
        <p>
          A continuación se exponen algunas rutinas de navegación que pueden reducir de manera significativa el riesgo de fraude electrónico. Estos hábitos de navegación son buenas prácticas que se deben llevar a cabo en todo momento al navegar por Internet.
        </p>
        <ul role="list" class="max-w-xl mt-8 space-y-8 text-gray-600">
          <li class="flex gap-x-3">
            <CheckCircleIcon
              class="flex-none w-5 h-5 mt-1 text-indigo-600"
              aria-hidden="true"
            />
            <span
              ><strong class="font-semibold text-gray-900">Datos personales</strong>
              El guardado o uso de información en sitios los cuales quedan almacenados es lo más común hoy en dia ya que
              por facilitar algún proceso o agilizar alguna acción deciden dejar su información personal guardada, nunca lo hagas.</span
            >
          </li>
          <li class="flex gap-x-3">
            <CheckCircleIcon
              class="flex-none w-5 h-5 mt-1 text-indigo-600"
              aria-hidden="true"
            />
            <span
              ><strong class="font-semibold text-gray-900">Cookies de terceros</strong> Anim
              Nunca aceptes cookies de terceros en páginas en las cuales no sean de confianza</span
            >
          </li>
          <li class="flex gap-x-3">
            <CheckCircleIcon
              class="flex-none w-5 h-5 mt-1 text-indigo-600"
              aria-hidden="true"
            />
            <span
              ><strong class="font-semibold text-gray-900">Usar VPN</strong> Ac
             Siempre navega de forma anónima escondiendo tu dirección IP</span
            >
          </li>
        </ul>
        <p class="mt-8">
         
        </p>
        <h2 class="mt-16 text-2xl font-bold tracking-tight text-gray-900">
          Encriptacion AES
        </h2>
        <p class="mt-6">
          Definido por el Instituto Nacional de Estándares y Tecnología (NIST National Institute of Standards and Technology) bajo la Publicación de Estándares Federales de Procesamiento de Información 197 (FIPS PUB 197), el Estándar de cifrado avanzado (AES) especifica un algoritmo criptográfico aprobado por FIPS que se puede utilizar para proteger los datos electrónicos.

        </p>
        
         
        <p class="mt-10">
          El algoritmo AES es un cifrado de bloque simétrico que puede cifrar y descifrar datos. Como se muestra en la Figura 1, el cifrado convierte los datos (texto legible) en un formato ininteligible llamado texto cifrado, mientras que el descifrado convierte este texto cifrado en texto legible original. El algoritmo AES puede usar claves criptográficas de 128, 192 o 256 bits para cifrar y descifrar datos en bloques de 128 bits.



        </p>
      </div>
     
     
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/vue/20/solid";
</script>
