<template>
    <div v-if="isLoggedIn === false" id="login-form">
        <form v-on:submit.prevent="login">
            <h1>{{ title }}</h1>
            <p>Remplissez ce formulaire pour vous connecter.</p>
            <hr />
            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="Entrez votre courriel" id="email" name="email" v-model="email" required />
            <label for="psw"><b>Mot de passe</b></label>
            <input type="password" placeholder="Entrez votre mot de passe" id="psw" name="psw" v-model="password"
                required />
            <p><button type="submit">Se connecter</button></p>
        </form>

    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'LoginForm',
    data() {
        return {
            email: "toto@wanadoo.fr",
            password: "password",
            //isLoggedIn: this.$store.state.isLoggedIn
        }
    },
    methods: {
        login() {
            this.$store.commit('login');
            this.$router.push('/searchFilm');
            // this.isLoggedIn = this.$store.state.isLoggedIn;
        }
    },
    computed: {
        ...mapState(['isLoggedIn', 'films']),

    },
    props: {
        title: String
    }
}
</script>