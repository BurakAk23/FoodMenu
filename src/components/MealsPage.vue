<template>
    <div class="container">
      <h1>{{ category }} Meals</h1>
      <div class="meals">
        <div v-for="meal in meals" :key="meal.idMeal" class="meal-item">
          <router-link :to="'/meal/' + meal.idMeal">
          <img :src="meal.strMealThumb" :alt="meal.strMeal" />
          <h2>{{ meal.strMeal }}</h2>
          </router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        meals: [],
        category: '',
      };
    },
    mounted() {
      this.category = this.$route.params.category;
      this.getMealsByCategory();
    },
    methods: {
      async getMealsByCategory() {
        try {
          const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.category}`);
          this.meals = response.data.meals;
        } catch (error) {
          console.error('Error fetching meals:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>

  
  h1 {
    font-size: 2em;
    margin-bottom: 30px;
  }
  
  .meals {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
  }
  
  .meal-item img {
  max-width: 100%;
  width: 150px;
  height: 150px; 
  object-fit: cover; 
  border-radius: 8px;
  }
  
  .meal-item h2 {
    margin-top: 10px;
    font-size: 1.2em;
  }
  </style>
  