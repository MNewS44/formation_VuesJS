<template>
  <div id="app">
    <LoginForm title="Authentification" />
  </div>
</template>

<script>
import LoginForm from './components/LoginForm.vue';

export default {
  name: 'App',
  components: {
    LoginForm
  }
}
</script>

<style>
@import './assets/base.css';
</style>
