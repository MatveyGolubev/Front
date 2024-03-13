<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue';

</script>


<template>
  <div class="container flex flex-col max-w-screen-xl min-h-screen mx-auto">
    <Header/>
    <main class="my-auto">
      <div class="  flex flex-col justify-center items-center ">
        <img src="/public/404.png" alt="404" class="w-96 h-54 mb-4">
        <p class="text-center text-white font-sans" style="font-size: 44px;">Страница не найдена</p>
        <p class="text-center text-gray-500 font-extralight" style="font-size: 18px;">
          Возможно, запрошенная страница <br> временно не доступна или удалена
        </p>
        <button class="mt-4 text-white text-3xl">На главную</button>
      </div>
    </main>
    <Footer/>
  </div>
</template>



<style scoped>

</style>
