<template>
    <div id="login-form">
        <form v-if="loggedIn === false" v-on:submit.prevent="isLoggedIn">
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
        <ul v-else class="films">

        </ul>
    </div>
</template>

<script>
export default {
    name: 'LoginForm',
    data() {
        return {
            email: "toto@wanadoo.fr",
            password: "password",
            loggedIn: false
        }
    },
    methods: {
        isLoggedIn() {
            console.log("loggedIn AVANT = ", this.loggedIn);
            this.loggedIn = !this.loggedIn;
            console.log("loggedIn APRES = ", this.loggedIn);
        }
    },
    props: {
        title: String
    }
}
</script>