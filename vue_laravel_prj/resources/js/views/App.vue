<template>
    <v-app>
        <v-navigation-drawer v-model="drawer" app>
            <v-list dense>
                <v-list-item link>
                    <v-list-item-action>
                        <v-icon>mdi-home</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Home</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link>
                    <v-list-item-action>
                        <v-icon>mdi-contact-mail</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Contact</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar app color="indigo" dark>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-tab href="/">Home</v-tab>
            <v-tab href="/about">About</v-tab>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>
        </v-app-bar>

        <v-content>
            <v-container>
                <router-view />
            </v-container>
        </v-content>

        <v-footer dark color="indigo">
            <v-col
                class="text-center"
                cols="12"
            >
                {{ new Date().getFullYear() }} — <strong>NinhNguyen</strong>
            </v-col>
        </v-footer>
    </v-app>
</template>

<script>
    export default {
        props: {
            source: String,
        },
        data: () => ({
            drawer: null,
        }),
    };
</script>
