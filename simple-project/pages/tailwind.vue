<template>
  <div>
    <h1 class="m-4 bg-red font-sans hover:font-serif text-sm">Tailwind</h1>
    <h1 class="font-sans">Font Family</h1>
    <h1 class="font-serif">Font Family</h1>
    <h1 class="font-mono">Font Family</h1>
    <br />
    <p class="text-xs text-red-600/[0.5]">Font size</p>
    <p class="text-sm leading-[40px]">Font size</p>
    <p class="text-lg">Font size</p>
    <p class="text-2xl">Font size</p>
    <br />
    <h3 class="antialiased">Font Smoothing</h3>
    <h3 class="subpixel-antialiased">Font Smoothing</h3>
    <br />
    <p class="font-[600]">Font Weight</p>
    <div class="p-5 bg-gray-600 text-center">Padding</div>
    <br />
    <div class="flex justify-center items-center">
      <div
        class="w-8 h-8 border-4 border-gray-400 rounded-full animate-spin"
      ></div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
