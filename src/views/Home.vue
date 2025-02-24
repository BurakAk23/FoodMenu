<template>
  <Header/>
    <div class="home">
      <Categories/>
      <SearchMeal/>
      <RandomMeals/>
    </div>
  <Footer/>
  </template>
  
  <script>
  import Categories from '@/components/Categories.vue';
  import RandomMeals from '@/components/RandomMeals.vue';
  import SearchMeal from '@/components/SearchMeal.vue';
  import Header from './Header.vue'
  import Footer from './Footer.vue'
  
  export default {
    components: {
      RandomMeals,
      Categories,
      SearchMeal,
      Header,
      Footer
    }
  }
  </script>