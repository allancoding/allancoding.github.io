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
        <div class="esc" id="navEsc" @click="checkShow">
            <span v-for="link in navLinks" :key="link.text">
                <router-link :to="link.to" exact-active-class="green" onclick="toggleNavbar(true, 100)">{{ link.text }}</router-link>
            </span>
        </div>
    </div>
    <a href="/" class="logo">
        <NuxtImg src="/logos/allancoding.png" id="main-logo" alt="Logo" format="webp" quality="100" />
        Allan Coding!
    </a>
  </div>
</template>

<script>
export default {
    data() {
        return {
            navLinks: [
                { text: 'Home', to: '/' },
                { text: 'Portfolio', to: '/portfolio' },
                { text: 'Websites', to: '/websites' },
                { text: 'Contact', to: '/contact' }
            ]
        };
    },
    methods: {
        checkShow: function () {
            let navbarLinks = document.getElementById('navbarLinks');
            var linkElements = navbarLinks.getElementsByTagName('a');
            if (navbarLinks.classList.contains('responsive')) {
                for (let i = 0; i < linkElements.length; i++) {
                    linkElements[i].classList.add("show");
                    console.log(linkElements[i]);
                }
            }
        }
    },
    setup() {
        useHead({
            script: [
                { src: '/js/navbar.js', defer: true }
            ]
        });
    }
}
</script>

<style scoped>
.navbar {
    overflow: hidden;
    position: sticky;
    top: 0;
    z-index: 1000;
    animation: fadeIn 1s forwards;
}

.navbar a {
    float: left;
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

.navbar a:active, .links *:active{
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

@media screen and (max-width: 650px) {
    .links {
        float: left;
        display: block !important;
        margin-top: 52px;
        position: relative;
    }

    .navbar a { 
        float: none; 
        position: sticky;
        text-align: left;
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

    .navbar .esc {
        position: absolute;
    }

    .navbar .esc span{
        display: block;
        transform: translateX(-100%);
        transition: transform 0.5s ease-in-out;
    }

    .navbar .esc span a {
        padding: 14px 20px;
    }

    .navbar .responsive span.show {
        transform: translateX(5px);
    }
}
</style>