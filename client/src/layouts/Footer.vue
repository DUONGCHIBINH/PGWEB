<template>
  <v-footer
    dark
    padless
    absolute
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="toolbar">
        <strong class="subheading">Số lượt online: {{online}}</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          dark
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>PGWork </strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
//  {{this.$store.state.cur_userdb.hoten}}
export default {
   props: ['online'],
   data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-google-plus',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
    created() {
       console.log("-----cur_userdb");
      console.log(this.$store.state.cur_userdb);
    },
};
</script>
