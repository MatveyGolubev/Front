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
          <section>
            <div class="grid grid-cols-2 gap-8">
              <div class="relative z-10 md:order-2">
                <p class="text-3xl font-bold text-white mb-6">Добро пожаловать в <br> ПрактикУм</p>
                <p class="text-lg mb-8" style="color: #94A3B8;">Будем рады видеть вас на наших Деловых завтраках и <br> Тренингах</p>
                <div class="form-container">
                  <button type="button"
                          class="flex items-center justify-center text-white bg-gradient-to-r from-[#26A69A] to-transparent hover:from-[#4285F4] hover:to-transparent hover:bg-opacity-90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 dark:focus:ring-[#4285F4]/55 me-2 mb-4"
                          style="width: 100%; max-width: 470px; transition: background-color 0.3s ease; border-radius: 20px;">
                    <svg class="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                         viewBox="0 0 18 19">
                      <path fill-rule="evenodd"
                            d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                            clip-rule="evenodd"/>
                    </svg>
                    Sign in with Google
                  </button>

                  <div class="relative z-10 md:order-2">
                    <div class="flex flex-col 2">
                      <label style="color: #E4E4E7;" for="Email">Email</label>

                      <InputText id="username" v-model="value" toggleMask class="rounded-lg w-4/6 h-10 py-1 px-1/4 mb-8" style="background-color: black; border-radius: 20px;" placeholder="example@email.com" />
                    </div>
                  </div>
                  <div class="relative z-10 md:order-2">
                    <div class="flex flex-col 2">
                      <label style="color: #E4E4E7;" for="Password">Пароль</label>
                      <Password v-model="value" toggleMask class="rounded-lg w-4/6 h-12 py-1 px-1/4 mb-4" style="background-color: black;" />
                    </div>
                  </div>
                  <div class="relative z-10 md:order-2">
                    <div class="flex flex-col 2">
                      <label style="color: #E4E4E7;" for="Password">Повторить пароль</label>
                      <Password v-model="value" toggleMask class="rounded-lg w-4/6 h-12 py-1 px-1/4 mb-4" style="background-color: black;" />
                    </div>
                  </div>
                  <div class="flex items-center mb-4">
                    <div class="inline-flex items-center">
                      <label class="relative flex items-center p-1/4 rounded-full cursor-pointer" htmlFor="remember-me">
                        <input type="checkbox"
                               class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-50"
                               id="remember-me"/>
                        <span
                            class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                     stroke="currentColor" stroke-width="1">
                  <path fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"></path>
                </svg>
              </span>
                      </label>
                      <label class="mt-px font-light text-gray-400 cursor-pointer select-none" htmlFor="remember-me">
                        <p class="flex font-sans  p-2 text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                          Запомнить меня
                        </p>
                      </label>
                    </div>
                  </div>
                </div>
                <div class="flex items-center mb-4">
                  <button class="bg-teal-400 text-black font-bold py-2.5 px-6 rounded-full w-38 transition duration-300 ease-in-out transform hover:bg-black hover:text-white hover:scale-100">Зарегистрироваться</button>
                </div>
                <p class="text-gray-400 text-sm">У вас уже есть аккаунт? <a href="#" class="text-blue-500 hover:underline">Войти</a></p>
              </div>
              <div class="col-span-2 md:col-span-1 relative z-10 md:order-1">
                <img src="/public/vhod.png" alt="Entrance" class="w-4/5 mx-auto">
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

</style>
