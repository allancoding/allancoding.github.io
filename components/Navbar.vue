<template>
  <div class="navbar transparent" id="navbar">
    <a
      href="javascript:void(0);"
      class="icon"
      id="navbarIcon"
      onclick="toggleNavbar()"
    >
      <Icon name="charm:menu-hamburger" />
    </a>
    <div class="links" id="navbarLinks">
      <router-link to="/" exact-active-class="green">Home</router-link>
      <router-link to="/portfolio" exact-active-class="green">Portfolio</router-link>
      <router-link to="/websites" exact-active-class="green">Websites</router-link>
      <router-link to="/contact" exact-active-class="green">Contact</router-link>
    </div>
    <a href="/" class="logo">
      <img src="/logos/allancoding.png" id="main-logo" alt="Logo" />
      Allan Coding!
    </a>
  </div>
</template>

<style scoped>
.navbar {
    overflow: hidden;
    position: sticky;
    top: 0;
    z-index: 1000;
    animation: fadeIn 1s forwards;
}

.navbar a {
    float: right;
    display: block;
    color: #F4030B;
    text-shadow: 0 0 20px #F4030B, 0 0 20px #F4030B;
    text-align: center;
    padding: 14px 20px;
    text-decoration: none;
    transition: color 0.2s ease;
}

.navbar a:hover, .navbar .icon {
    color: #00ff00;
    text-shadow: 0 0 10px #00ff00, 0 0 30px #00ff00;
}

.navbar .icon {
    display: none;
}

.navbar .icon span {
    margin-top: 6px;
    width: 1.25em !important;
    height: 1.25em !important;
}

.navbar .icon:active {
    color: #F4030B;
}

.navbar a:active {
    -webkit-tap-highlight-color: transparent;
}

.navbar .links {
    display: flex;
    justify-content: flex-end;
}

.navbar .logo {
    position: absolute;
    padding: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.navbar .logo img {
    width: auto;
    cursor: pointer;
    margin: 5px 15px;
    transition: all 0.2s ease;
    height: 42px;
}

.navbar .logo:hover img {
    filter: drop-shadow(0 0 8px #00ff00);
}

@media screen and (max-width: 600px) {
    .links {
        height: 0;
        overflow: hidden;
        transition: height 0.5s ease-in-out;
        float: left;
        display: block !important;
        margin-top: 52px;
    }

    .navbar a { 
        float: none; 
        position: sticky;
        text-align: left; 
        display: none;
    }
    
    .navbar .icon {
        display: block;
        position: relative;
        right: 0;
        float: right;
        padding: 10px 20px;
        cursor: pointer;
        top: 0;
    }
    
    .navbar .responsive a {
        display: block;
        transform: translateX(-100%);
        transition: transform 0.5s ease-in-out;
        padding: 14px 20px;
    }

    .navbar .responsive a.show {
        transform: translateX(5px);
    }
}
</style>