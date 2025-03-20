<style scoped>
@import url("assets/css/contact.css");
</style>

<template>
    <div class="page">
        <Content title="Contact Me">
            <div class="center">
                <form @submit.prevent="submitForm">
                    <label for="name">Name:</label><br/>
                    <input type="text" id="name" placeholder="Rick" autocapitalize="words" @input="capitalizeWords(); handleInput();" v-model="form.name" required>
                    <label for="email">Email:</label><br/>
                    <input type="email" id="email" placeholder="rolling.astley@gmail.com" @input="handleInput" v-model="form.email" required>
                    <label for="subject">Subject:</label><br/>
                    <input type="text" id="subject" placeholder="I'm Never!" @input="capitalizeWords(); handleInput();" v-model="form.subject" required>
                    <label for="message">Message:</label><br/>
                    <textarea id="message" rows="5" v-model="form.message" @input="capitalizeSentences(); handleInput();" placeholder="Gonna give you up." required></textarea><br/>
                    <div class="list">
                        <button type="submit" class="button green green-border" @click="$event.target.blur()">Send</button>
                        <span :class="{ 'show': fadeOut }">{{ message }}</span>
                    </div>
                </form>
            </div>
        </Content>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const { $setTitle } = useNuxtApp();
$setTitle('Contact');

const form = ref({
    name: '',
    email: '',
    subject: '',
    message: ''
});

const message = ref('');
const fadeOut = ref(true);

const submitForm = async () => {
    try {
        fadeOut.value = true;
        message.value = 'Sending...';
        const response = await fetch('/.netlify/functions/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form.value)
        });
        if (response.ok) {
            message.value = 'Message sent successfully!';
            deleteFormFields();
        } else {
            message.value = 'Failed to send message.';
        }
    } catch (error) {
        message.value = 'An error occurred: ' + error.message;
    }
};

const deleteFormFields = async () => {
    const fields = ['name', 'email', 'subject', 'message'];
    for (const field of fields) {
        while (form.value[field].length > 0) {
            form.value[field] = form.value[field].slice(0, -1);
            await new Promise(resolve => setTimeout(resolve, 50));
        }
    }
};

const handleInput = () => {
    fadeOut.value = false;
    setTimeout(() => {
        message.value = '';
    }, 1000);
};

const capitalizeWords = () => {
    form.value.name = form.value.name.replace(/\b\w/g, c => c.toUpperCase());
    form.value.subject = form.value.subject.replace(/\b\w/g, c => c.toUpperCase());
};

const capitalizeSentences = () => {
    form.value.message = form.value.message.replace(/(^\s*\w|[.!?]\s+\w)/g, match => match.toUpperCase());
};
</script>