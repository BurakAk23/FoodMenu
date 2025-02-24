<template>
    <div>
        <h1>Random Meals</h1>
      <div class="product-grid">
        
        
        <div 
          v-for="(meal, index) in meals" 
          :key="meal.idMeal" 
          class="product"
          :style="{ order: orderList[index] }"
        >
        <router-link :to="'/meal/' + meal.idMeal">
            <img :src="meal.strMealThumb" alt="Yemek Resmi" class="product-image" />
            <p class="product-name">{{ meal.strMeal }}</p>
        </router-link>

        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        meals: [],
        orderList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 
      };
    },
    methods: {
      async fetchMeals() {
        this.meals = [];
        for (let i = 0; i < 12; i++) {
          try {
            const response = await axios.get("https://www.themealdb.com/api/json/v1/1/random.php");
            this.meals.push(response.data.meals[0]); 
          } catch (error) {
            console.error("Veri çekme hatası:", error);
          }
        }
      }
    },
    mounted() {
      this.fetchMeals(); 
    }
  };
  </script>
  
  <style>

.product-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  grid-template-rows: auto; 
  gap: 15px;
  width: 100%;
  max-width: 1200px; 
  margin: 0 auto; 
  padding: 15px;
  box-sizing: border-box;
}

.product-image {
  max-width: 100%;
  width: 150px; 
  height: 150px; 
  object-fit: cover; 
  border-radius: 8px; 
}

.product-name {
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
  color: #333;
  text-transform: capitalize; 
}


  </style>
  