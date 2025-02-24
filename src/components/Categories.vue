<template>
  <div class="container">
    <h1>Meal Categories</h1>
    <div class="categories">
      <div 
        v-for="category in categories" 
        :key="category.strCategory" 
        @click="fetchMeals(category.strCategory)"
        class="category-item"
      >
        <img :src="category.strCategoryThumb" :alt="category.strCategory" />
        <h2>{{ category.strCategory }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      categories: [],
    };
  },
  mounted() {
    this.getCategories();
  },
  methods: {
    async getCategories() {
      try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
        this.categories = response.data.categories;
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    },
    fetchMeals(category) {
      this.$router.push({ name: 'MealsPage', params: { category } });
    },
  },
};
</script>

<style scoped>


h1 {
  font-size: 2em;
  margin-bottom: 30px;
}

.categories {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
}

.category-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  width: 150px;
}

.category-item img {
  width: 100%;
  height: 100px;
  object-fit: cover;
  border-radius: 10px;
}

.category-item h2 {
  margin-top: 10px;
  font-size: 1.2em;
}
</style>
