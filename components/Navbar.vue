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
      <a href="/">Home</a>
      <a href="#about">About</a>
      <a href="portfolio">Portfolio</a>
      <a href="websites">Websites</a>
      <a href="contact">Contact</a>
    </div>
    <a href="/" class="logo">
      <img src="/logos/allancoding.png" id="main-logo" alt="Logo" />
      Allan Coding!
    </a>
  </div>
</template>