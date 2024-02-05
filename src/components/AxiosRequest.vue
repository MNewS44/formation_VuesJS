<template>
    <div>
        <button @click="fetchData">Fetch Data</button>
        <div v-if="data">
            <h2>{{ data.original_title }}</h2>
            <p>{{ data.overview }}</p>
        </div>
    </div>
</template>



<script>
import axios from 'axios';
export default {
    name: 'ItemDetail',
    data() {
        return {
            data: null,
            // __TOKEN__: "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzM2NjQ4MmY2N2QxMWM2NWQxM2U5ZWRjMDhiYTk4NyIsInN1YiI6IjY1MjNkY2EzYWI1ZTM0MDBlMWQ0OGQ3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KaSFEkg-YIMxh95PyXcWPd2opp7AITsdUj_r8daUMN4"
        };
    },
    methods: {
        fetchData() {
            // Utilisation d'Axios pour effectuer une requête GET
            axios.get('https://api.themoviedb.org/3/movie/933131?language=fr-FR', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzM2NjQ4MmY2N2QxMWM2NWQxM2U5ZWRjMDhiYTk4NyIsInN1YiI6IjY1MjNkY2EzYWI1ZTM0MDBlMWQ0OGQ3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KaSFEkg-YIMxh95PyXcWPd2opp7AITsdUj_r8daUMN4` // Add the Bearer token here
                    // 'Authorization': `Bearer ${__TOKEN__}`, // Add the Bearer token here
                },
            })
                .then(response => {
                    // Gérez la réponse de l'API ici
                    console.log(response.data);
                    this.data = response.data;
                })
                .catch(error => {
                    console.error(error);
                });
        },
    },
};
</script > 
                                                                                                  