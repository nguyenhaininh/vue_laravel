<template>
    <v-app>
        <Header />

        <v-content>
            <v-container class="my-5">
                <router-view />
            </v-container>
        </v-content>

        <Footer></Footer>
    </v-app>
</template>

<script>
    import Header from '@/js/components/Header.vue';
    import Footer from '@/js/components/Footer.vue';

    export default {
        name: 'null',
        components: {
            Header,
            Footer
        }
    };
</script>
