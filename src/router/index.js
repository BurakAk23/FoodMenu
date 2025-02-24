import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Categories from '@/components/Categories.vue'
import MealsPage from '@/components/MealsPage.vue'
import SearchMeal from '@/components/SearchMeal.vue'
import MealDetailPage from '../components/MealDetailPage.vue'
import '../assets/styles.css'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/category',
    name: 'Categories',
    component: Categories,
  },
  {
    path: '/category/meals/:category',
    name: 'MealsPage',
    component: MealsPage,
    props: true,
  },
  {
    path: '/',
    name: 'SearchMeal',
    component: SearchMeal
  },
  {
    path: '/meal/:id',
    name: 'meal-detail',
    component: MealDetailPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
