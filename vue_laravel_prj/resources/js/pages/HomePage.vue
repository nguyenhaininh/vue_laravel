<template>
    <v-layout row wrap>
        <v-flex xs12 md1></v-flex>
        <v-flex xs12 md8 class="pa-3">
            <v-row v-for="post in posts" :key="post.title" class="grey lighten-4">
                <v-col cols="4">
                    <v-img height="200" width="250" :src="post.img"></v-img>
                </v-col>
                <v-col cols="8">
                    <h4 class="headline">{{ post.title }}</h4>
                    <v-divider></v-divider>
                    <br>
                    <p>Hello everybody, my name is Ninh Nguyen.</p>
                </v-col>
            </v-row>
        </v-flex>
        <v-flex xs12 md2 class="pa-6 hidden-sm-and-down">
            Test
        </v-flex>
        <v-flex xs12 md1></v-flex>
    </v-layout>
</template>

<script>
    export default {
        data() {
            return {
                posts: [
                    {
                        title: 'Post1',
                        img: '/images/pho.jpg'
                    },
                    {
                        title: 'Post2',
                        img: '/images/pho.jpg'
                    },
                    {
                        title: 'Post3',
                        img: '/images/pho.jpg'
                    },
                    {
                        title: 'Post4',
                        img: '/images/pho.jpg'
                    },
                    {
                        title: 'Post5',
                        img: '/images/pho.jpg'
                    },
                    {
                        title: 'Post6',
                        img: '/images/pho.jpg'
                    },
                    {
                        title: 'Post7',
                        img: '/images/pho.jpg'
                    }
                ]
            }
        }
    }
</script>
