<template>
    <footer class="footer">
      <div class="footer-content">
        <p>&copy; 2025 Yemek Menüsü</p>
        <div class="social-links">
          <a href="#" target="_blank" class="social-link">Facebook</a>
          <a href="#" target="_blank" class="social-link">Instagram</a>
          <a href="#" target="_blank" class="social-link">Twitter</a>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "Footer",
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #343a40;
    color: #fff;
    padding: 20px;
    text-align: center;
    border-radius: 15px; /* Kenarları yuvarlak yapmak için ekledik */
    box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.1); /* Hafif gölge ekledik */
  }
  
  .footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .social-links {
    margin-top: 10px;
  }
  
  .social-link {
    margin: 0 10px;
    color: #fff;
    text-decoration: none;
    font-size: 1.1em;
  }
  
  .social-link:hover {
    color: #f8d7da;
  }
  </style>
  