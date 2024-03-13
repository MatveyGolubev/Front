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
            <div
                class="flex flex-col items-start py-10 pr-20 pl-9 bg-black rounded-3xl border-solid shadow-2xl border-[3px] border-sky-300 border-opacity-80 max-md:px-5 max-md:max-w-full"
            >
              <div
                  class="justify-center py-4 pl-4 text-center whitespace-nowrap border border-black border-solid leading-[116%] rounded-[100px]"
              >
                На платформе ПрактикУм
              </div>
              <div class="mt-7 text-3xl leading-8 max-md:max-w-full">
                Обучение сотрудников новым<br />профессиям и навыкам
              </div>
              <div class="mt-8 text-lg leading-6 max-md:max-w-full">
                Программы из основного каталога Нетологии<br />для развития в своей или
                смежной профессии
              </div>
              <div
                  class="flex gap-5 justify-between pr-10 mt-14 max-w-full leading-[156%] w-[475px] max-md:flex-wrap max-md:pr-5 max-md:mt-10"
              >
                <div class="flex flex-col self-start">
                  <div>Длительность</div>
                  <div class="mt-5">От 1 до 24 месяцев</div>
                </div>
                <div class="flex flex-col">
                  <div class="whitespace-nowrap">Формат обучения</div>
                  <div class="mt-5">Синхронный и ассинхронный</div>
                </div>
              </div>
              <div
                  class="justify-center px-12 py-3 mt-20 text-right whitespace-nowrap border border-solid bg-sky-300 bg-opacity-80 border-sky-300 border-opacity-80 leading-[162.5%] rounded-[60px] text-slate-800 max-md:px-5 max-md:mt-10"
              >
                <button class="bg-teal-400 border border-teal-400 text-black font-bold py-2.5 px-6 rounded-full mr-4 transition duration-300 ease-in-out transform hover:bg-black hover:text-white hover:scale-100">узнать подробности</button>
              </div>
            </div>
          </section>
          <h1 class="text-3xl md:text-5xl lg:text-4xl font-bold mb-4 text-white">Индивидуальные <br> программы <br> обучения по запросу</h1>
          <section>
            <div class="flex z-10 gap-5 justify-between items-start self-center px-5 mt-0 w-full text-xl leading-7 text-white max-w-[1557px] max-md:flex-wrap max-md:max-w-full">
              <div class="flex-auto self-end mt-40 max-md:mt-10 max-md:max-w-full">
                Если задача нестандартная и готовые решения<br />не подходят,
                мы разработаем индивидуальные<br />программы обучения с учётом
                особенностей<br />отрасли и конкретных бизнес-задач.
              </div>
              <img src="/public/Rectangle 9576.png" alt="Изображение" class="flex-1 self-start w-full aspect-[3.13] max-md:max-w-full">
            </div>
            <div
                class="flex gap-5 justify-between self-center px-5 mt-20 max-w-full text-2xl leading-7 text-white w-[1240px] max-md:flex-wrap max-md:mt-10"
            >
              <div class="flex gap-5 self-start">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/33435c794695c2ce58d17c8f046efcd43dae5f622aab40863467cac7b751ab8e?apiKey=41148165468143928125b3e46ef2cb50&"
                    class="shrink-0 self-start w-10 aspect-square"
                />
                <div class="flex-auto">Создаём программы<br />по нужным темам с нуля</div>
              </div>
              <div class="flex gap-5">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/eaeb42a02e48573aaad173e7d70f0d8b656dea1a97b3947494199dbd93508dca?apiKey=41148165468143928125b3e46ef2cb50&"
                    class="shrink-0 self-start w-10 aspect-square"
                />
                <div class="w-[290px]">
                  Адаптируем теорию<br />под уровень знаний<br />участников
                </div>
              </div>
              <div class="flex gap-5 my-auto">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6738d58ee154666136167b0aabc234e92a6ea0f0d839c5d7bd99407530a20b3b?apiKey=41148165468143928125b3e46ef2cb50&"
                    class="shrink-0 self-start w-10 aspect-square"
                />
                <div class="flex-auto">
                  Строим практику на реальных задачах<br />вашей компании
                </div>
              </div>
            </div>
          </section>
          <section style="background-image: url('/public/image 53.png'); background-size: cover; background-position: center;">
            <div class="relative justify-center py-11 pr-20 pl-10 mt-4 mb-4 max-w-full bg-transparent w-[1180px] max-md:px-5">
              <div class="absolute inset-0 bg-white bg-opacity-80 rounded-3xl"></div>
              <div class="flex gap-5 max-md:flex-col max-md:gap-0">
                <div class="flex flex-col w-[73%] max-md:ml-0 max-md:w-full">
                  <div class="flex relative flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                    <div class="text-4xl font-bold leading-10 text-black max-md:max-w-full">
                      Оставьте заявку — мы поможем<br />сформировать программу<br />обучения под ваши задачи
                    </div>
                    <div class="justify-center self-start px-12 py-5 mt-12 ml-6 text-2xl font-medium leading-6 text-right whitespace-nowrap border-opacity-80 rounded-[60px] text-zinc-950 max-md:px-5 max-md:mt-10 max-md:ml-2.5">
                      <button class="bg-teal-400 border border-teal-400 text-black font-bold py-2.5 px-6 rounded-full transition duration-300 ease-in-out transform hover:bg-black hover:text-white hover:scale-100">Оставить заявку</button>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col ml-5 w-[27%] max-md:ml-0 max-md:w-full">
                  <img src="/public/image 66.png" alt="Изображение" class="shrink-0 max-w-full rounded-full aspect-square w-[244px] max-md:mt-10">
                </div>
              </div>
            </div>
          </section>
          <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white">Привлекая ведущих <br> экспертов</h1>
          <section>
            <div
                class="mt-16 text-6xl font-semibold text-white leading-[60px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-10"
            >
              Работаем по схеме,<br />удобной клиентам
            </div>
            <div
                class="flex gap-5 justify-between items-start pr-20 mt-28 w-full text-2xl leading-7 text-white max-md:flex-wrap max-md:pr-5 max-md:mt-10 max-md:max-w-full"
            >
              <div class="flex gap-5">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b451e22bd56e338794281eeee098e5159e720a4eeaeb237b1986d6076a7b7b7?apiKey=41148165468143928125b3e46ef2cb50&"
                    class="shrink-0 self-start w-10 aspect-square"
                />
                <div>Вы оставляете<br />заявку на сайте</div>
              </div>
              <div class="flex gap-5">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a283017e85e29f38ed9fdffe4bed3dabd1f07e04d4f66e06f9e06e7759db2f7d?apiKey=41148165468143928125b3e46ef2cb50&"
                    class="shrink-0 self-start w-10 aspect-square"
                />
                <div class="w-[271px]">Мы перезваниваем<br />и уточняем детали</div>
              </div>
              <div class="flex gap-5 self-stretch">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6af7a4229e2b7302672a0be0becd7308b369f03711a5ba4bbf510be70474e2f2?apiKey=41148165468143928125b3e46ef2cb50&"
                    class="shrink-0 self-start w-10 aspect-square"
                />
                <div class="flex-auto">
                  Изучаем задачи бизнеса<br />и потребности ваших<br />сотрудников
                </div>
              </div>
            </div>
            <div class="mt-20 max-md:pr-5 max-md:mt-10 max-md:max-w-full">
              <div class="flex gap-5 max-md:flex-col max-md:gap-0">
                <div class="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                  <div class="flex grow gap-5 text-2xl leading-7 text-white max-md:mt-10">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1daf5cdc3b90844bcdedfac3d12143c5a69f48206cfd0d657285cd55cd582778?apiKey=41148165468143928125b3e46ef2cb50&"
                        class="shrink-0 self-start w-10 aspect-square"
                    />
                    <div class="flex-auto">
                      Подбираем подходящий<br />формат обучения исходя<br />из ваших
                      целей<br />и возможностей
                    </div>
                  </div>
                </div>
                <div class="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <div class="flex gap-5 text-2xl leading-7 text-white max-md:mt-10">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/874b153e70b7666584bec0c769969acb34b8d390c782ae4b7f636a550014d881?apiKey=41148165468143928125b3e46ef2cb50&"
                        class="shrink-0 self-start w-10 aspect-square"
                    />
                    <div class="flex-auto">
                      Вместе определяем бизнес‑метрики<br />эффективности обучения
                    </div>
                  </div>
                </div>
                <div class="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <div class="flex gap-5 text-2xl leading-7 text-white max-md:mt-10">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b76d2c34982575a26761a14bf99b261922167833141efc25b95e80e653c40fe?apiKey=41148165468143928125b3e46ef2cb50&"
                        class="shrink-0 self-start w-10 aspect-square"
                    />
                    <div class="flex-auto">
                      Заключаем договор<br />и проводим обучение
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section >
            <div class="flex flex-col pt-14 w-full bg-black max-md:max-w-full">
              <div class="flex flex-col ml-56 max-w-full w-[826px]">
                <div
                    class="text-6xl font-bold leading-[57.64px] max-md:max-w-full max-md:text-4xl"
                >
                  Запишитесь на консультацию
                </div>
                <div class="mt-6 text-2xl leading-8 max-md:max-w-full">
                  Мы перезвоним и поможем сформировать<br />эффективную программу под ваши
                  задачи
                </div>
              </div>
              <div
                  class="flex overflow-hidden relative z-10 flex-col justify-center items-end px-16 py-20 mt-14 -mb-9 w-full text-base min-h-[686px] max-md:px-5 max-md:mt-10 max-md:mb-2.5 max-md:max-w-full"
              >
                <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c37023ce4f82254875e396ddb0f9578f3ff0c9aa9b581d150635287a0f6f50c7?apiKey=41148165468143928125b3e46ef2cb50&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c37023ce4f82254875e396ddb0f9578f3ff0c9aa9b581d150635287a0f6f50c7?apiKey=41148165468143928125b3e46ef2cb50&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c37023ce4f82254875e396ddb0f9578f3ff0c9aa9b581d150635287a0f6f50c7?apiKey=41148165468143928125b3e46ef2cb50&width=300 300w, https://cdn.builder.io/api/v1/image/assets/TEMP/c37023ce4f82254875e396ddb0f9578f3ff0c9aa9b581d150635287a0f6f50c7?apiKey=41148165468143928125b3e46ef2cb50&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c37023ce4f82254875e396ddb0f9578f3ff0c9aa9b581d150635287a0f6f50c7?apiKey=41148165468143928125b3e46ef2cb50&width=500 500w"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c37023ce4f82254875e396ddb0f9578f3ff0c9aa9b581d150635287a0f6f50c7?apiKey=41148165468143928125b3e46ef2cb50"
                    class="object-contain self-start max-w-full max-h-[226px] max-md:mt-10"
                />
                <div class="flex-grow-0">
                  <button
                      class="justify-center flex mt-10 py-4 px-10 rounded-full border-solid border-[3px] border-sky-300 border-opacity-80 bg-sky-300 bg-opacity-80 max-md:max-w-full max-md:mt-10 max-md:mb-10"
                  >
                    <div class="flex gap-4 justify-center max-md:flex-col">
                      <span class="max-md:hidden">Запишитесь на консультацию</span>
                      <span class="max-md:hidden">+7 (495) 109-41-80</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer/>
    </div>
  </div>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
