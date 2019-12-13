<template>
    <v-toolbar>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-btn href="/" class="d-flex align-center" height="60" text>
            <v-img class="shrink" height="50" width="50" :src="logo" />
            <v-img class="shrink" height="30" width="100" :src="logo_title" />
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-toolbar-items>
            <v-btn class="hidden-sm-and-down" href="/life-story" text>Chuyện cuộc sống</v-btn>
            <v-btn class="hidden-sm-and-down" href="/working-story" text>Chuyện công việc</v-btn>
            <v-menu offset-y>
                <template v-slot:activator="{ on }">
                    <v-btn
                        class="hidden-sm-and-down"
                        v-on="on"
                        text
                    >
                        Chuyện học
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item
                        v-for="study in studies"
                        :key="study.title"
                        @click="() => {}"
                        :href="study.link"
                    >
                        <v-list-item-title>{{ study.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
            <v-btn class="hidden-sm-and-down" href="/discuss" text>Thảo luận</v-btn>
            <v-btn class="hidden-sm-and-down" href="/login" text>Đăng nhập</v-btn>
            <v-btn class="hidden-sm-and-down" href="/register" text>Đăng ký</v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
    export default {
        data() {
            return {
                drawer: null,
                studies: [
                    { title: 'Học tiếng nhật', link: '/japanese' },
                    { title: 'Học lập trình', link: '/coding' },
                    { title: 'Học nấu ăn', link: '/cooking' }
                ],
                logo: '/images/logo.png',
                logo_title: '/images/logo-title.png',
            }
        }
    }
</script>
