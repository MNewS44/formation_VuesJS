<template>
    <div id="details-film">
        <ul class="films">
            <v-card class="mx-auto my-12" max-width="300">
                <img :src="url + item.poster_path" />
                <v-card-title> {{ item.original_title }} </v-card-title>
                <v-card-text>
                    <dl>
                        <dt>Release date</dt>
                        <dd>{{ item.release_date }}</dd>
                        <dt>Note</dt>
                        <dd>{{ item.vote_average }}</dd>
                    </dl>
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
    name: 'detailsFilm',
    data() {
        return {
            item: {},
            input: "",
            url: "https://image.tmdb.org/t/p/w500/"
        }
    },
    methods: {

        fetchOneData() {
            const url = `https://api.themoviedb.org/3/movie/${this.$route.params.id}?language=fr-FR`;
            console.log("url = ", url);
            axios.get(url, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzM2NjQ4MmY2N2QxMWM2NWQxM2U5ZWRjMDhiYTk4NyIsInN1YiI6IjY1MjNkY2EzYWI1ZTM0MDBlMWQ0OGQ3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KaSFEkg-YIMxh95PyXcWPd2opp7AITsdUj_r8daUMN4`
                }
            })
                .then(response => {
                    console.log(response.data);
                    this.item = response.data;
                })
                .catch(error => {
                    console.error(error);
                });
        },
    },
    mounted() {
        console.log("id =", this.$route.params.id);
        this.fetchOneData();
    }

}
</script>