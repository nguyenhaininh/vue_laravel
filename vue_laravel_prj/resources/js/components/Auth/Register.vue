<template>
    <v-container fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md8>
                <v-card class="elevation-12">
                    <v-toolbar dark color="blue">
                        <v-toolbar-title>Register</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form>
                            <v-alert :value="userExists" color="error" icon="warning">
                                This user already exists, try a different set of data.
                            </v-alert>

                            <v-text-field
                                name="login"
                                v-model="username"
                                label="Name"
                                :rules="[rules.required]"
                            ></v-text-field>

                            <v-text-field
                                name="email"
                                v-model="email"
                                label="Email"
                                :rules="[rules.required, rules.email]"
                            ></v-text-field>

                            <v-text-field
                                name="password"
                                label="Password"
                                :rules="[rules.required]"
                                type="password"
                                v-model="password"
                            ></v-text-field>

                            <v-text-field
                                name="password"
                                label="Confirm Password"
                                :rules="[rules.required]"
                                type="password"
                                v-model="confirm_password"
                                :error="!valid()"
                            ></v-text-field>

                            <v-checkbox
                                v-model="checkbox"
                                label="Remember Me"
                                :rules="[v => !!v]"
                            ></v-checkbox>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn to="/login" rounded color="primary" dark>Login</v-btn>
                        <v-btn rounded color="success" @click.prevent="register()">
                            Register
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "register",
        data: () => ({
            checkbox: false,
            userExists: false,
            username: '',
            email: '',
            password: "",
            confirm_password: "",
            rules: {
                required: value => !!value || "Required",
                email: value => {
                    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    return pattern.test(value) || "Invalid e-mail.";
                }
            }
        }),
        methods: {
            register() {
                if (this.valid()) {
                    this.$store.dispatch('REGISTER', {
                        username: this.username,
                        email: this.email,
                        password: this.password
                    })
                        .then(({ status }) => {
                            this.$store.commit("SET_NOTIFICATION", {
                                display: true,
                                text: 'Your account has been successfully created! you can now login.',
                                alertClass: "danger"
                            });

                            this.$router.push('/login')
                        })
                        .catch (error => {
                            this.userExists = true;
                        })
                }
            },
            valid() {
                return this.password === this.confirm_password;
            }
        }
    };
</script>
