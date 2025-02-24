<template>
    <header class="header">
      <div class="logo">
        <h1 class="logo-text">Yemek Menüsü</h1>
      </div>
      <nav class="nav">
        <router-link to="/" class="nav-link">Ana Sayfa</router-link>
        <router-link to="/category" class="nav-link">Kategoriler</router-link>

      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: "Header",
  };
  </script>
  
  <style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #343a40;
    padding: 10px 20px;
    color: #fff;
    border-radius: 15px; /* Kenarları yuvarlak yapmak için ekledik */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Hafif gölge ekledik */
  }
  
  .logo {
    display: flex;
    align-items: center;
  }
  
  .logo-image {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
  
  .logo-text {
    font-size: 1.5em;
    font-weight: bold;
  }
  
  .nav {
    display: flex;
  }
  
  .nav-link {
    margin-left: 20px;
    color: #fff;
    text-decoration: none;
    font-size: 1.1em;
  }
  
  .nav-link:hover {
    color: #f8d7da;
  }
  </style>
  