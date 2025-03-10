export default defineNuxtPlugin((nuxtApp) => {
    const title = useState('pageTitle', () => '');
  
    nuxtApp.provide('setTitle', (newTitle) => {
      title.value = newTitle;
    });
    
    useHead(() => ({
      title: title.value ? `${title.value} | Allan Coding!` : 'Allan Coding!',
      meta: [{ property: 'og:title', content: title.value ? `${title.value} | Allan Coding!` : 'Allan Coding!' }]
    }));
});