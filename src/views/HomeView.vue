<template>
  <div class="container mx-auto py-28 px-6 flex-grow relative">
    <h1 class="text-5xl font-bold mb-4 text-white"
        style=" font-size: 65px; font-weight: 600; line-height: 62px; letter-spacing: -2px; text-align: left;">Юлия
      Сивчук</h1>
    <div class="grid grid-cols-2 gap-8">
      <div class="col-span-2 md:col-span-1 relative z-10">
        <div class="border-b border-white mb-8 w-5/12"></div>
        <div class="text-gray-300">
          <p class="text-2xl text-background: #BEBEC1;"
             style="font-family: Montserrat; font-size: 32px; font-weight: 400; line-height: 45px; letter-spacing: 0px; text-align: left;">
            Инстаграм в новой реальности</p>
          <p class="text-2xl font-extralight mb-6 text-background: #BEBEC1;"
             style="font-family: Montserrat; font-size: 32px; font-weight: 400; line-height: 45px; letter-spacing: 0px; text-align: left;">
            Как быстро и бесплатно получить клиентов <br> в 2023 году.</p>
        </div>

        <div class="mb-4">
          <ul class="list-none space-y-3">
            <li class="mt-10 flex items-center font-extralight text-gray-400"
                style="font-family: Montserrat; font-size: 24px; font-weight: 400; line-height: 35px; letter-spacing: 0px; text-align: left;">
              <img class="mr-2 w-6 h-auto" src="/approve.svg">Блогер-маркетолог и эксперт по<br> продажам через личный
              бренд
            </li>
            <li class="flex items-center font-extralight text-gray-400"
                style="font-family: Montserrat; font-size: 24px; font-weight: 400; line-height: 35px; letter-spacing: 0px; text-align: left;">
              <img class="mr-2 w-6 h-auto" src="/approve.svg"> Опыт более 6 лет
            </li>
          </ul>
        </div>

        <button class="mt-2 rounded-full bg-red-700 text-black font-semibold py-4 px-8 border-2 border-#81E7EBCC"
                style="font-family: Montserrat; font-size: 18px; font-weight: 600; line-height: 28px; letter-spacing: -0.2px; text-align: left;"
                id="signupButton">
          Записаться на завтрак
        </button>
      </div>
      <div class="hidden md:block md:col-span-1 relative z-10 image-container">
        <img src="/Mobile.png" alt="Mobile" class="md:ml-auto">
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
button {
  background-color: #81E7EBCC;
  border-color: #81E7EBCC;
  transform: translateY(36px);
  transition: background-color 0.3s ease;
  position: relative;
  overflow: hidden;
}

button::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300%;
  height: 300%;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;
  transition: all 0.6s;
}

button:hover::before {
  width: 0;
  height: 0;
}

button:hover {
  background-color: transparent;
  color: white;
  z-index: 1;
}

.image-container {
  position: relative;
  overflow: hidden;
  transform: translateY(-240px) translateX(-36px);
}

.image-container::before,
.image-container::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle, rgba(0, 174, 255, 0.3), rgba(0, 174, 255, 0) 62%);
  z-index: -1;
  animation: animateGradient 5s linear infinite alternate;
}

@keyframes animateGradient {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}
</style>
