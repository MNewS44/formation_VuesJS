<template>
  <v-app>
    <v-container>
      <v-btn @click="showDialog" class="ma-2" color="cyan">
        Cliquez-moi
      </v-btn>
      <v-row justify="center">
        <v-dialog v-model="dialog" max-width="600">
          <v-card>
            <v-card-title class="text-h5">Dialogue Vuetify</v-card-title>
            <v-card-text>
              Valeur de la variable "agree" : {{ agree }}.
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn v-on:click="updateDisagree" color="cyan" text @click="dialog = false">Disagree</v-btn>
              <v-btn v-on:click="updateAgree" color="cyan" text @click="dialog = false">Agree</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
      <v-spacer></v-spacer>
      <div>
        <v-btn v-if="agree === true" class="ma-2" text icon color="blue lighten-2">
          <v-icon>mdi-thumb-up</v-icon>
        </v-btn>
        <v-btn v-if="agree === false" class="ma-2" text icon color="red lighten-2">
          <v-icon>mdi-thumb-down</v-icon>
        </v-btn>
      </div>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      agree: false
    };
  },
  methods: {
    showDialog() {
      this.dialog = true;
    },
    updateAgree() {
      this.agree = true;
    },
    updateDisagree() {
      this.agree = false;
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

@import './assets/base.css';
</style>