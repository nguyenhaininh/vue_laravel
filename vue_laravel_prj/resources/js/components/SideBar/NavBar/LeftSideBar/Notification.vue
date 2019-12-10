<template>
    <v-list-item>
        <v-list-item-avatar>
            <v-img :src="avatar"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
            <v-list-item-title>Ninh Nguyen</v-list-item-title>
        </v-list-item-content>
    </v-list-item>
<!--    <v-list-item>-->
<!--        <v-list-item-icon>-->
<!--            <v-badge overlap color="orange" v-model="show">-->
<!--                <template v-slot:badge>-->
<!--                    <span>6</span>-->
<!--                </template>-->
<!--                <v-icon>{{ notification.icon }}</v-icon>-->
<!--            </v-badge>-->
<!--        </v-list-item-icon>-->
<!--        <v-list-item-content>-->
<!--            <v-list-item-title>{{ notification.title }}</v-list-item-title>-->
<!--        </v-list-item-content>-->
<!--    </v-list-item>-->
</template>

<script>
    export default {
        data() {
            return {
                notification: {
                    title: 'Notifications',
                    icon: 'fas fa-bell'
                },
                show: true,
                avatar: '/images/avatar.jpg',
            }
        }
    }
</script>
