export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook('page:transition:finish', () => {
        document.getElementById("home").scrollTo({ top: 0, behavior: 'smooth' });
    });
});