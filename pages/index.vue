<template>
  <div>
    <v-app>
      <v-main class="main-container">
        <v-container class="container">
          <v-form class="form">
            <v-text-field label="Username" v-model="username"></v-text-field>
            <v-text-field label="Password" v-model="password" type="password"></v-text-field>
            <v-btn>Login</v-btn>
          </v-form>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const username = ref('');
const password = ref('');

const adjustViewport = () => {
  const viewportHeight = window.innerHeight;
  document.documentElement.style.setProperty('--vh', `${viewportHeight * 0.01}px`);
};

const handleResize = () => {
  const viewportHeight = window.innerHeight;
  const mainContainer = document.querySelector('.main-container');

  if (window.visualViewport.height < window.visualViewport.scale * window.innerHeight) {
    // Keyboard is open, adjust the form position
    mainContainer.style.paddingTop = `${viewportHeight / 2}px`;
  } else {
    // Keyboard is closed, reset the form position
    mainContainer.style.paddingTop = '0px';
  }
};

onMounted(() => {
  window.addEventListener('resize', adjustViewport);
  window.addEventListener('resize', handleResize);
  adjustViewport();
  handleResize();
});

onUnmounted(() => {
  window.removeEventListener('resize', adjustViewport);
  window.removeEventListener('resize', handleResize);
});
</script>

<style>
html, body {
  margin: 0;
  height: 100%;
  overflow: hidden;
}

.v-application {
  height: 100%;
}

.main-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(var(--vh, 1vh) * 100);
  transition: padding-top 0.3s ease;
}

.container {
  max-width: 300px;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.form {
  display: flex;
  flex-direction: column;
}
</style>
