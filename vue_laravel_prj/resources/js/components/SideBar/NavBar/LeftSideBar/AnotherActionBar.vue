<template>
    <v-list>
        <v-list-item v-for="item in items" :key="item.title" link>
            <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
    </v-list>
</template>

<script>
    export default {
        data() {
            return {
                items: [
                    { title: 'Manager Posts', icon: 'fas fa-blog' },
                    { title: 'Manager Password', icon: 'fas fa-key' },
                ],
            }
        }
    }
</script>
