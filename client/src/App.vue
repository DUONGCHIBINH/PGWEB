<template>
  <!-- App.vue -->

  <v-app>
    <!-- <v-navigation-drawer app> -->
    <!-- -->
    <!-- </v-navigation-drawer> -->
    <Toolbar />
    <!-- Sizes your content based upon application components -->
    <!-- <v-content>
    
         <v-container fluid>
       
        <router-view>
          
        </router-view>
      </v-container>
    </v-content> -->

    <router-view>
          
        </router-view>

    <!--Footer -->
     <Footer/>
    
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Toolbar from "./layouts/Toolbar";
import Footer from "./layouts/Footer";

export default {
  name: "App",
  components: {
    HelloWorld,
    Toolbar,
    Footer,
  },

  data: () => ({
    drawer: null,
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
  })
};
</script>

<style>

 @import "~bootstrap/dist/css/bootstrap.css";
 @import "~bootstrap-vue/dist/bootstrap-vue.css";
  @import "../public/css/mystyle.css";

</style>