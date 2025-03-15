<template>
    <div class="footer">
        <p>© {{ currentYear }} Allan Coding</p>
    </div>
</template>
<style scoped>
.footer {
    width: 100%;
    text-align: center;
    padding: 10px 0;
}
</style>
<script>
export default {
    data() {
        return {
            currentYear: new Date().getFullYear()
        };
    }
};
</script>