<template>
  <div class="animated fadeIn">
       <v-container>
    <v-layout text-center wrap>
      <v-flex xs12>
        <img class="navbar-brand-full" src="img/PGlogo.png"  height="180" alt="CoreUI Logo">
      </v-flex>
      <v-flex >
        <h4 class="display-4 font-weight-bold mb-3">Chào mừng đến với PG Works</h4>
        <h3 class="subheading font-weight-regular">
          Cộng đồng dành riêng cho tuyển dụng nhân sự event
          <br />Tham gia với chúng tôi
          <a
            href="https://www.facebook.com/binh.duongchi.9"
            target="_blank"
          >PG Works</a>
        </h3>
      </v-flex>

    

    </v-layout>
  </v-container>
  </div>
</template>

<script>

import { Callout } from '@coreui/vue'

export default {
  name: 'about',
  components: {
    Callout
  },
  data: function () {
    return {
      selected: 'Month',
    }
  },
  methods: {
    flag (value) {
      return 'flag-icon flag-icon-' + value
    }
  }
}
</script>

<style>
  /* IE fix */
  #card-chart-01, #card-chart-02 {
    width: 100% !important;
  }
</style>
