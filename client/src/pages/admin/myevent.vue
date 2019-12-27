<template>
  <v-container class="ma-0 pa-0">
    <v-col class="ma-0 pa-0">
      <v-row>
        <h3>Sự kiện của tôi</h3>
      </v-row>
      <v-row>
        <v-col cols="2">
          <v-layout fill-height>
            <v-navigation-drawer v-model="drawer"  permanent>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title >Sự kiện</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
                         <v-list dense>
                <v-list-item v-for="item in items" :key="item.title" link>
                  <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-navigation-drawer>
          </v-layout>
        </v-col>

        <v-col></v-col>
      </v-row>
    </v-col>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    drawer: {},
    items: [
      { title: "Home", icon: "dashboard" },
      { title: "About", icon: "question_answer" }
    ],
    model: 1
  })
};
</script>