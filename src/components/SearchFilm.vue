<template>
    <div v-if="isLogin === true" id="search-film"> <!---->
        <form v-on:submit.prevent="searchFilms">
            <label for="search">Rechercher :</label>
            <input v-model="input" id="search" type="text">
            <button>Submit</button>
        </form>
        <div>
            <p v-if="this.$store.state.filteredFilms.length === 1">{{ this.$store.state.filteredFilms.length }} film
                trouvé
            </p>
            <p v-else-if="this.$store.state.filteredFilms.length > 1">{{ this.$store.state.filteredFilms.length }} films
                trouvés
            </p>
        </div>
        <ul class="films">
            <li v-for="(item, index) in    filteredFilms   " :key="index" class="film card">
                <img class="poster" :src="item.poster" />
                <p class="title">
                    {{ item.title }}
                    <!--span v-for="(star, j) in item.metascore" :key="j" class="rating">★</span-->
                    <span class="rating" v-bind="getScore('{{item.metascore}}')"></span>
                </p>
                <dl>
                    <dt>Release date</dt>
                    <dd>{{ item.released }}</dd>
                    <dt>Director</dt>
                    <dd>{{ item.director }}</dd>
                    <dt>Actors</dt>
                    <dd>{{ item.actors }}</dd>
                </dl>
                <p class="plot">
                    {{ item.plot }}
                </p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'SearchFilm',
    data() {
        return {
            // numberResults: this.$store.state.films.length,
            films: this.$store.state.films,
            //isLoggedIn: this.$store.state.isLoggedIn,
            input: ""
        }
    },
    computed: {
        isLogin() {
            return this.$store.state.isLoggedIn;
        },
        filteredFilms() {
            return this.$store.state.filteredFilms;
        }
    },
    methods: {
        searchFilms() {
            //            console.log("searchFilms appelé");
            this.$store.commit('filter', this.input);

        },
        getScore(metascore) {
            console.log("getScore appelé avec ", metascore);
            if (metascore < 20) return "";
            else if (metascore < 40) return "★";
            else if (metascore < 60) return "★★";
            else if (metascore < 80) return "★★★";
            else if (metascore < 100) return "★★★★";
            else if (metascore === 100) return "★★★★★";
        }
    },

    watch: {
        query() {
            this.films = this.$store.state.films;
        }
    },
    props: {
        title: String
    }
}
</script>