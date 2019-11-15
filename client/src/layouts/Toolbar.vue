<template>
  <div>
    <v-toolbar class="toolbar">
      <v-toolbar-title class="headline text-uppercase">
        <span>PG</span>
        <span class="font-weight-light">WORK</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn class="chumenu" href="/" text>Trang chủ</v-btn>
        <!-- <v-divider  vertical></v-divider> -->
        <v-btn class="chumenu" href="/event" text>Sự kiện</v-btn>
        <v-btn class="chumenu" href="/quanly" text>Quản lý</v-btn>
        <v-btn class="chumenu" href="/pg" text>PG/PB</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <template v-if="$vuetify.breakpoint.smAndUp">
        <v-btn class="chumenu" icon>
          <v-icon>mdi-bell-circle</v-icon>
        </v-btn>
        <v-btn class="chumenu" icon>
          <v-icon>mdi-heart-circle</v-icon>
        </v-btn>
        <v-btn class="chumenu" icon>
          <v-icon>mdi-account-circle</v-icon>
        </v-btn>
      </template>
    </v-toolbar>
  </div>
</template>

<script>
export default {};
</script>
