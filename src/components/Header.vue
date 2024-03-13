<script>
export default {
  name: "Header"
}
</script>

<template>
  <header>
    <nav class="w-full z-20 top-0 start-0">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/log.svg" alt="logo">

        </a>

        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button type="button"
                  class="text-sm  inline-flex items-center justify-center p-0.5 mb-2  overflow-hidden font-medium  rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
<span
    class="relative px-5 py-2 transition-all ease-in duration-200  dark:bg-black rounded-md group-hover:bg-opacity-0">
Войти
</span>
          </button>
          <button data-collapse-toggle="navbar-sticky" type="button"
                  class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="navbar-sticky" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                 viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
        <div class="items-center justify-between hidden w-full lg:flex md:w-auto md:order-1 text-white"
             id="navbar-sticky">
          <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <a href="#" class="block py-2 px-3   md:bg-transparent headerS  md:p-0 ">О
                ПРАКТИКУМ</a>
            </li>
            <li>
              <a href="#"
                 class="block py-2 px-3 md:hover:bg-transparent headerS  md:p-0  dark:text-white   md:dark:hover:bg-transparent ">МЕРОПРИЯТИЯ</a>
            </li>
            <li>
              <a href="#"
                 class="block py-2 px-3  md:hover:bg-transparent  md:p-0 headerS  dark:text-white   md:dark:hover:bg-transparent ">КУРСЫ</a>
            </li>
            <li>
              <a href="#"
                 class="block py-2 px-3  md:hover:bg-transparent headerS md:p-0 md:dark:hover:bg-transparent">КОМПАНИЯМ</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>


<style scoped>

</style>