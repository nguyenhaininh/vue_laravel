<template>
    <v-container fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md8>
                <v-form>
                    <v-card class="elevation-12">
                        <v-toolbar dark color="blue">
                            <v-toolbar-title>Login Form</v-toolbar-title>
                        </v-toolbar>

                        <v-alert color="error" :value="error" icon="close">
                            The username or the password are incorrect.
                        </v-alert>

                        <v-card-text>
                            <v-form>
                                <v-text-field v-model="username" label="UserName" type="text" name="name" :rules="[rules.required]"></v-text-field>
                                <v-text-field v-model="password" label="Password" type="password" name="password" :rules="[rules.required]"></v-text-field>
                                <v-checkbox
                                    v-model="checkbox"
                                    label="Remember Me"
                                    :rules="[v => !!v]"
                                ></v-checkbox>
                            </v-form>
                        </v-card-text>

                        <v-card-actions>
                            <v-btn to="/register" rounded color="indigo" dark>Register</v-btn>
                            <v-spacer></v-spacer>
                            <v-btn rounded color="primary" dark @click.prevent="login()">Login</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-form>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "login",
        data: () => ({
            username: '',
            password: '',
            error: false,
            rules: {
                required: value => !!value || "Required",
                email: value => {
                    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    return pattern.test(value) || "Invalid e-mail.";
                }
            }
        }),
        methods: {
            login() {
                this.$store.dispatch("LOGIN", {
                    username: this.username,
                    password: this.password
                })
                    .then(success => {
                        this.$router.push("/")
                    })
                    .catch(error => {
                        this.error = true;
                    })
            }
        }
    };
</script>
