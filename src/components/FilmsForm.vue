<template>
    <div v-if="isLogin === true" id="list-film">
        <ul class="films">
            <v-card v-for="(item, index) in films" :key="index" class="mx-auto my-12" max-width="374"
                @click="detailFilm(item.id)">

                <v-img width="250" :src="url + item.poster_path" />
                <v-card-title> {{ item.original_title }} </v-card-title>

                <v-card-text>
                    <v-row align="center" class="mx-0">
                        <dt>Release date</dt>
                        <dd>{{ item.release_date }}</dd>
                        <dt>Note</dt>
                        <dd>{{ item.vote_average }}</dd>
                    </v-row>
                    <p class="plot">
                        {{ item.overview }}
                    </p>
                </v-card-text>
            </v-card>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'fetchFilms',
    data() {
        return {
            films: [],
            input: "",
            url: "https://image.tmdb.org/t/p/w500/"
        }
    },

    computed: {
        isLogin() {
            return this.$store.state.isLoggedIn;
        }
    },
    methods: {

        fetchData() {
            axios.get('https://api.themoviedb.org/3/movie/popular?language=fr-FR&page=1', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzM2NjQ4MmY2N2QxMWM2NWQxM2U5ZWRjMDhiYTk4NyIsInN1YiI6IjY1MjNkY2EzYWI1ZTM0MDBlMWQ0OGQ3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KaSFEkg-YIMxh95PyXcWPd2opp7AITsdUj_r8daUMN4`
                },
            })
                .then(response => {
                    console.log(response.data.results);
                    this.films = response.data.results;
                })
                .catch(error => {
                    console.error(error);
                });
        },
        detailFilm(id) {
            console.log("Appel du détail pour ", id);
            this.$router.push({ name: 'detailsFilm', params: { id: id } });
        }
    },
    mounted() {
        this.fetchData();
    }
}
</script>