<script>
export default {
  name: "Footer",

}
</script>

<template>
  <footer class="mt-auto ">
    <div class="p-4 md:py-8">
      <div class="sm:flex sm:items-center sm:justify-between">
        <a class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
          <img src="/log.svg" alt="logo"/>
        </a>
        <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 ">
          <li>
            <a href="#" class="footerS me-4 md:me-6">О НАС</a>
          </li>
          <li>
            <a href="#" class="footerS me-4 md:me-6">ЗАВТРАКИ</a>
          </li>
          <li>
            <a href="#" class="footerS me-4 md:me-6">ТРЕНИНГИ</a>
          </li>
          <li>
            <a href="#" class="footerS">КУРСЫ</a>
          </li>
        </ul>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
      <span class="block text-sm text-gray-500 sm:text-center dark:text-white">© 2024 Все права защищены.</span>
    </div>
  </footer>
</template>

<style scoped>

</style>