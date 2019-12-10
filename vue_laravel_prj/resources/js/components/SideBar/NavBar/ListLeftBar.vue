<template>
    <UserAccount />
    <v-divider></v-divider>
    <v-list dense>
        <Notification />
        <AnotherActionBar />
        <SettingLanguage />
    </v-list>
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
        }
    }
</script>
