<template>
    <div>
        <v-toolbar app>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <v-toolbar-items>
                <v-btn href="/" text>Home</v-btn>
                <v-btn href="/about" text>Gioi thieu</v-btn>
            </v-toolbar-items>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>
            <v-toolbar-items>
                <v-btn href="/login" text>Login</v-btn>
                <v-btn href="/register" text>Register</v-btn>
                <v-btn href="#" text>Language</v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </div>
</template>

