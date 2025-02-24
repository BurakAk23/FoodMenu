<template>
  <div class="meal-detail">
    <div v-if="loading" class="loading">Yükleniyor...</div>

    <div v-if="meal" class="meal-info">
      <h1 class="meal-title">{{ meal.strMeal }}</h1>
      <img :src="meal.strMealThumb" :alt="meal.strMeal" class="meal-image" />
      <p><strong>Category:</strong> {{ meal.strCategory }}</p>

      
      <div v-if="ingredients.length > 0">
        <h3>Ingredients:</h3>
        <p>{{ ingredients.join(', ') }}</p>  
      </div>

      <p><strong>Instructions:</strong> {{ meal.strInstructions }}</p>
    </div>

    <div v-else-if="error" class="error-message">
      <p>Ürün bilgileri yüklenirken bir hata oluştu. Lütfen tekrar deneyin.</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      meal: null,
      loading: true,
      error: false,
      ingredients: [],
    };
  },
  created() {
    this.fetchMealDetails();
  },
  methods: {
    async fetchMealDetails() {
      try {
        const mealId = this.$route.params.id; 
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
        
        if (response.data.meals) {
          this.meal = response.data.meals[0];
          this.extractIngredients();  
        } else {
          this.error = true;
        }
      } catch (error) {
        console.error('Error fetching meal details:', error);
        this.error = true;
      } finally {
        this.loading = false;
      }
    },

    extractIngredients() {
      const ingredientsList = [];
      for (let i = 1; i <= 20; i++) {  
        const ingredient = this.meal[`strIngredient${i}`];
        if (ingredient) {
          ingredientsList.push(ingredient);
        }
      }
      this.ingredients = ingredientsList;
    }
  },
};
</script>

<style scoped>
.meal-detail {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  height: 100vh; 
  padding: 20px;
  text-align: center; 
}

.meal-info {
  max-width: 800px;
  margin: 0 auto;
}

.meal-title {
  font-size: 2em;
  margin-bottom: 20px;
}

.meal-image {
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 20px;
}

.loading {
  font-size: 1.5em;
  color: #888;
}

.error-message {
  color: red;
  font-size: 1.2em;
}

ul {
  list-style-type: none; 
  padding: 0;
}

li {
  font-size: 1.2em;
  color: #555;
}
</style>
