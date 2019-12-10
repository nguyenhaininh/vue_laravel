<template>
    <v-list-item>
        <v-list-item-avatar>
            <v-img :src="avatar"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
            <v-list-item-title>Ninh Nguyen</v-list-item-title>
        </v-list-item-content>
    </v-list-item>
</template>

<script>
    export default {
        data() {
            return {
                avatar: '/images/avatar.jpg',
            }
        }
    }
</script>
