<template>
    <div>
        <v-sheet>
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

            <v-navigation-drawer
                v-model="drawer"
                absolute
                temporary
            >
                <v-list-item>
                    <v-list-item-avatar>
                        <v-img :src="avatar"></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title>Ninh Nguyen</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-divider></v-divider>

                <v-list dense>
                    <v-list-item>
                        <v-list-item-icon>
                            <v-badge overlap color="orange" v-model="show">
                                <template v-slot:badge>
                                    <span>6</span>
                                </template>
                                <v-icon>{{ notification.icon }}</v-icon>
                            </v-badge>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>{{ notification.title }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item v-for="item in items" :key="item.title" link>
                        <v-list-item-icon>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item link>
                        <v-list-item-icon>
                            <v-icon>fas fa-globe</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
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
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>
        </v-sheet>
    </div>
</template>

<script>
    export default {

        data() {
            return {
                drawer: null,
                url: '',
                items: [
                    { title: 'Manager Posts', icon: 'fas fa-blog' },
                    { title: 'Manager Password', icon: 'fas fa-key' },
                ],
                languages: [
                    { title: 'Vietnamese', avatar: '/images/flags/flag_vi.png'},
                    { title: 'English', avatar: '/images/flags/flag_en.png' },
                    { title: 'Japanese', avatar: '/images/flags/flag_jp.png'}
                ],
                notification: {
                    title: 'Notifications',
                    icon: 'fas fa-bell'
                },
                avatar: '/images/avatar.jpg',
                logo: '/images/logo.png',
                logo_title: '/images/logo-title.png',
                show: true,
                studies: [
                    { title: 'Học tiếng nhật', link: '/japanese' },
                    { title: 'Học lập trình', link: '/coding' },
                    { title: 'Học nấu ăn', link: '/cooking' }
                ]
            }
        }
    }
</script>
