<template>
  <v-app>
    <Toolbar />

    <router-view>
        </router-view>
    <!--Footer -->
     <Footer :online= luottruycap />
  </v-app>
</template>

<script>

import Toolbar from "./layouts/Toolbar";
import Footer from "./layouts/Footer";
import io from "socket.io-client";

export default {
  name: "App",
  components: {
  
    Toolbar,
    Footer,
  },

  data: function() {
    return{
      socket:io("http://localhost:5000"),
    drawer: null,
    luottruycap:0,
    items: [
      { heading: "Hệ thống" },
      { icon: "mdi-hand-peace", text: "Giới thiệu", url: "goole.com" },
      { icon: "mdi-account-circle", text: "Tài khoản" },
      { icon: "mdi-settings", text: "Cấu hình" },

      { divider: true },
      { heading: "Website" },
      { icon: "mdi-account-group", text: "User" },
      { icon: "mdi-post-outline", text: "Bài viết" },

      { divider: true },
      { icon: "mdi-logout", text: "Đăng xuất" }
    ]
  }
  },
  mounted() {
    this.socket.on("online",data =>{
      this.luottruycap = data;
    })
  },
};
</script>

<style>

 @import "~bootstrap/dist/css/bootstrap.css";
 @import "~bootstrap-vue/dist/bootstrap-vue.css";
  @import "../public/css/mystyle.css";

</style>