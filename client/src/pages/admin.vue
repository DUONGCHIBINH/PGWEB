<template>
  <v-content class="bg-white">
    <v-layout fill-height>
      <v-navigation-drawer permanent>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">Quản trị</v-list-item-title>
            <v-list-item-subtitle>V.2.1</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list dense nav>
          <v-list-item v-for="item in items" :key="item.title" link :to="item.link">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
   <v-content style=" margin-bottom: 125px;">
        <v-container >
        <router-view></router-view>
      </v-container>
   </v-content>
    </v-layout>
  </v-content>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard", link: "/admin/1" },
        { title: "Người dùng", icon: "mdi-image", link: "/admin/aduser" },
        { title: "PG/PB", icon: "mdi-help-box", link: "/admin/3" },
        { title: "Quản lý", icon: "mdi-help-box", link: "/admin/4" },
        { title: "Sự kiện", icon: "mdi-help-box", link: "/admin/5" },
        { title: "Thanh toán", icon: "mdi-help-box", link: "/admin/6" }
      ],
      right: null
    };
  }
};
</script>