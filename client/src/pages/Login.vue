<template>
    <v-container>
      <v-slide-y-transition mode="out-in">
     
          <v-layout row wrap align-center>
            <v-flex xs12 sm8 offset-sm2 md6 offset-md3 lg4 offset-lg4>
                 <br>
        <br>
              <v-card style="margin-bottom:200px;" elevation="5">
                <!-- <div class="pa-3">
                  Đăng nhập
                </div>
                <hr> -->
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">Chào các bạn đến với PGWork</h3>
                    </div>
                </v-card-title>
                <v-card-text>
                  Đăng nhập tiện lợi hơn với mạng xã hội
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="success" block  @click="auth0Login()">Đăng nhập với gmail</v-btn>
                   <v-spacer></v-spacer>
                </v-card-actions>
                     <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue" block dark  @click="auth0Login()">Đăng nhập với Facebook</v-btn>
                   <v-spacer></v-spacer>
                </v-card-actions>
                     <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn  block  dark @click="auth0Login()">Đăng nhập với Github</v-btn>
                   <v-spacer></v-spacer>
                </v-card-actions>
                             
              </v-card>
            </v-flex>
          </v-layout>
        </v-slide-y-transition>
      </v-container>

</template>
<script>

import Store from '../store/store'

export default {
    name: 'Login',
    methods: {
        auth0Login(){
            // this.$store.dispatch('auth0Login');
             Store.dispatch('auth0Login');
            console.log('we are in auth0Login');
        },
    },
    }
</script>