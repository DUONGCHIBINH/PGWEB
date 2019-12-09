<template>
  <div>
    <v-toolbar class="toolbar">
      <v-toolbar-title class="headline text-uppercase">
        <span>PG</span>
        <span class="font-weight-light">WORK</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn class="chumenu" :to="{name: 'home'}" text>Trang chủ</v-btn>
        <!-- <v-divider  vertical></v-divider> -->
        <v-btn class="chumenu" :to="{name: 'sukien'}" text>Sự kiện</v-btn>
        <v-btn class="chumenu" :to="{name: 'quanly'}" text>Quản lý</v-btn>
        <v-btn class="chumenu" :to="{name: 'pg'}" text>PG/PB</v-btn>
        <v-btn class="chumenu" :to="{name: 'ducanh'}" text>ducanh</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <template v-if="$vuetify.breakpoint.smAndUp">
        <v-btn class="chumenu" icon>
          <v-icon>mdi-bell-circle</v-icon>
        </v-btn>
        <v-btn class="chumenu" icon>
          <v-icon >mdi-heart-circle</v-icon>
        </v-btn>
        <v-btn class="chumenu" :to="{name: 'admin'}" icon>
          <v-icon>mdi-account-circle</v-icon>
        </v-btn>
          <v-btn  v-if="this.$store.state.userIsAuthorized"  class="chumenu" icon>
          <v-icon @click="logout">mdi-logout</v-icon>
        </v-btn>
      </template>
    </v-toolbar>
  </div>
</template>

<script>
import Store from '../store/store'
export default {

  methods: {
    logout(){
      Store.dispatch('auth0Logout');
      console.log('logging out');
    }
  },
};
</script>
