<template>
  <div class="container">
    <h1>Search Meals</h1>

    
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Search for a meal..."
      @input="searchMeal"
    />

    
    <div v-if="meals.length > 0" class="meals">
      <div v-for="meal in meals" :key="meal.idMeal" class="meal-item">
        <router-link :to="'/meal/' + meal.idMeal"> 
          <img :src="meal.strMealThumb" :alt="meal.strMeal" />
          <h2>{{ meal.strMeal }}</h2>
        </router-link>
      </div>
    </div>

    
    <div v-else-if="searchQuery && !meals.length">
      <p>No meals found for "{{ searchQuery }}"</p>
    </div>

   
    <div v-else>
      <p>Start searching for meals by typing in the search bar!</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      searchQuery: '',  
      meals: [],        
    };
  },
  methods: {
    
    async searchMeal() {
      if (this.searchQuery.trim() === '') {
       
        this.meals = [];
        return;
      }

      try {
        
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${this.searchQuery}`);
        
        
        this.meals = response.data.meals || []; 
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
  margin-bottom: 20px;
}

input {
  width: 80%;
  padding: 10px;
  font-size: 1em;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.meals {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.meal-item {
  text-align: center;
  width: 150px;
}

.meal-item img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
}

.meal-item h2 {
  margin-top: 10px;
  font-size: 1.2em;
}

p {
  font-size: 1.2em;
  color: #666;
}
</style>
