export default defineNuxtPlugin((nuxtApp) => {
    const router = useRouter();
    let lastPath = router.currentRoute.value.path;

    nuxtApp.hook('page:transition:finish', () => {
        const currentPath = router.currentRoute.value.path;
        if (currentPath !== lastPath) {
            document.getElementById("home")?.scrollTo({ top: 0, behavior: 'smooth' });
        }
        lastPath = currentPath;
    });
});
