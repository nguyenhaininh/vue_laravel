<template>
    <v-layout row wrap>
        <v-flex xs12 md2></v-flex>
        <v-flex xs12 md7 class="pa-3">
            <v-row v-for="post in posts" :key="post.title">
                <v-col cols="4">
                    <v-img sizes="50" :aspect-ratio="16/9" :src="post.img"></v-img>
                </v-col>
                <v-col cols="8">
                    {{ post.title }}
                </v-col>
            </v-row>
        </v-flex>
        <v-flex xs12 md2 class="pa-6">
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
                    }
                ]
            }
        }
    }
</script>
