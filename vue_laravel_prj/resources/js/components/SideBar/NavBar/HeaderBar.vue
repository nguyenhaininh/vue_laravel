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

        <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
        >
<!--            <UserAccount />-->
<!--            <v-divider></v-divider>-->
<!--            <v-list dense>-->
<!--                <Notification />-->
<!--&lt;!&ndash;                <AnotherActionBar />&ndash;&gt;-->
<!--&lt;!&ndash;                <SettingLanguage />&ndash;&gt;-->
<!--            </v-list>-->
        </v-navigation-drawer>
    </v-toolbar>
</template>

<script>
    import UserAccount from "./LeftSideBar/UserAccount";
    import Notification from "./LeftSideBar/Notification";
    import AnotherActionBar from "./LeftSideBar/AnotherActionBar";
    import SettingLanguage from "./LeftSideBar/SettingLanguage";

    export default {
        components: {
            UserAccount,
            Notification,
            AnotherActionBar,
            SettingLanguage
        },
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
