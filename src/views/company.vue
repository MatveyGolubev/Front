<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue';
import { ref } from 'vue';
</script>


<template>
  <div>
    <div class="container flex flex-col max-w-screen-xl min-h-screen mx-auto">
      <Header/>
      <main>
        <div class="container mx-auto flex-grow max-w-screen-xl min-h-screen relative ">
          <section class="flex flex-col md:flex-row justify-between items-center">
            <div class="md:w-1/2 ml-28 mt-[-16px] ">
              <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-white">Корпоративное обучение под задачи вашего бизнеса</h1>
              <p class="text-3xl mt-16 font-extralight text-white">• Подберём и адаптируем готовые курсы или создадим индивидуальные программы под цели вашей компании</p>
              <p class="text-3xl mt-8 font-extralight text-white">• Поможем организовать обучение на корпоративной LMS‑платформе или площадке Нетологии</p>
              <p class="text-3xl mt-8 font-extralight text-white">• Предоставим доступ к HR-кабинету с гибкой системой аналитики</p>

              <!-- Кнопки -->
              <div class="flex mt-8">
                <button class="bg-teal-400 border border-teal-400 text-black font-bold py-2.5 px-6 rounded-full mr-4 transition duration-300 ease-in-out transform hover:bg-black hover:text-white hover:scale-100">Выбрать курс</button>
                <button class="bg-black border border-teal-400 text-white font-bold py-2.5 px-6 rounded-full transition duration-300 ease-in-out transform hover:bg-teal-400 hover:text-black hover:scale-100">Оставить заявку</button>
              </div>
            </div>
            <div class="md:w-1/2">
              <img src="/public/Ellipse 93.png" alt="Изображение" class="w-98 h-98 md:w-124 md:h-124 lg:w-126 lg:h-126 ml-auto">
            </div>
          </section>


          <section class="flex flex-col md:flex-row justify-between items-center">
            <div class="md:w-1/2 ml-28 mt-[158px] ">
              <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white">Разработаем индивидуальную программу обучения для <br> вашего бизнеса на основе <br> готовых или кастомных курсов</h1>
              <p class="text-3xl mt-16 font-extralight text-white">По запросу можем кастомизировать <br> курсы - обычно это занимает около недели - или разработать курс с нуля.</p>

            </div>
            <div class="md:w-1/2 relative mt-[-276px]">
              <img src="/public/Ellipse 94.png" alt="Изображение" class="w-98 h-98 md:w-124 md:h-124 lg:w-126 lg:h-126 ml-auto absolute z-10 right-1">
              <img src="/public/Ellipse 95.png" alt="Изображение" class="w-98 h-98 md:w-124 md:h-124 lg:w-126 lg:h-126 ml-auto absolute z-20 right-32">
            </div>
          </section>
          <section class="grid md:grid-cols-2 gap-x-10 items-center justify-between p-4 w-full">
            <div class="md:w-1/2 md:col-start-2 border border-teal-400 p-4 w-16 ">
              <p class="text-xs text-white">На платформе ПрактикУм</p>
              <h2 class="text-2xl font-bold text-white">
                Обучение сотрудников новым <br class="md:hidden"> профессиям и навыкам
              </h2>
              <p class="mb-4 text-white">Программы из основного каталога Нетологии для развития в своей или смежной профессии</p>
              <div class="flex items-center mb-5">
                <div>
                  <p class="text-white">Длительность:</p>
                  <p class="text-white">от 1 до 24 месяцев</p>
                </div>
                <div>
                  <p class="mr-4 text-white">Формат обучения:</p>
                  <p class="text-white">синхронный и асинхронный</p>
                </div>
              </div>
              <button class="bg-teal-400 border border-teal-400 text-black font-bold py-2.5 px-6 rounded-full mr-4 transition duration-300 ease-in-out transform hover:bg-black hover:text-white hover:scale-100">Выбрать курс</button>
            </div>
          </section>


          <section>


          </section>




        </div>
      </main>
      <Footer/>
    </div>
  </div>
</template>


<style scoped>

</style>

