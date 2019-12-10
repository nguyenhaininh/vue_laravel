<template>
    <v-list-item link>
        <v-list-item-icon>
            <v-icon>fas fa-globe</v-icon>
        </v-list-item-icon>
        <v-list-item>
            <v-menu left bottom>
                <template v-slot:activator="{ on }">
                    <v-list-item-title v-on="on">Language</v-list-item-title>
                </template>
                <v-list>
                    <v-list-item
                        v-for="language in languages"
                        :key="language.title"
                        @click="() => {}"
                    >
                        <v-list-item-avatar>
                            <v-img :src="language.avatar"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-title>{{ language.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-list-item>
    </v-list-item>
</template>

<script>
    export default {
        data() {
            return {
                languages: [
                    { title: 'Vietnamese', avatar: '/images/flags/flag_vi.png'},
                    { title: 'English', avatar: '/images/flags/flag_en.png' },
                    { title: 'Japanese', avatar: '/images/flags/flag_jp.png'}
                ],
            }
        }
    }
</script>
