<template>
  <v-container>
    <!-- <v-card class="mx-auto" max-width="344" loading  elevation="5">
      <v-card-title>Đang xử lý giao dịch...</v-card-title>
    </v-card>-->
    <v-alert v-if="suscess" text type="success">
      <h3 class="headline">{{mess}}</h3>
      <div>{{info}}</div>

      <v-divider class="my-4 success" style="opacity: 0.22"></v-divider>
      <p>{{madonhang}}</p>
      <p>{{magiaodich}}</p>
      <p>{{sotien}}</p>
    </v-alert>
    <v-alert v-if="!suscess" text type="error">
      <h3 class="headline">{{mess}}</h3>
      <div>{{info}}</div>

      <v-divider class="my-4 error" style="opacity: 0.22"></v-divider>
      <p>{{madonhang}}</p>
      <p>{{magiaodich}}</p>
      <p>{{sotien}}</p>
    </v-alert>
    <v-row>
      <v-btn :to="{name: 'home'}" class="ma-4" x-large  color="primary">Trang chủ</v-btn>
      <v-spacer></v-spacer>
      <v-btn :to="{name: 'pg'}" class="ma-4" x-large outlined color="info">PG</v-btn>
      <v-btn :to="{name: 'pg'}" class="ma-4" x-large outlined color="info">Pb</v-btn>
      <v-btn :to="{name: 'quanly'}" class="ma-4" x-large outlined color="info">quản lý</v-btn>
      <v-spacer></v-spacer>
        <v-btn :to="{name: 'mythanhtoan'}" class="ma-4" x-large dark color="teal">Quản lý thanh toán</v-btn>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "Auth0Callback",
  data() {
    return {
      mess: "",
      info: "",
      madonhang: "",
      magiaodich: "",
      sotien: "",
      suscess: true
    };
  },
  mounted() {
    this.reload();
  },
  methods: {
    reload() {
      if (
        this.$route.query.errorCode == "0" &&
        this.$route.query.message == "Success"
      ) {
        //thanh cong
        this.suscess = true;
        this.mess = this.$route.query.localMessage;
        this.info = this.$route.query.orderInfo;
        this.madonhang = "Mã đơn hàng: " + this.$route.query.orderId;
        this.magiaodich = "Mã giao dịch: " + this.$route.query.transId;
        this.sotien = "Số tiền: " + this.$route.query.amount;
        // +this.$route.query.orderInfo;
        //  alert(this.$route.query.errorCode+"|")
      } else {
        //  alert(this.$route.query.localMessage)
        this.suscess = false;
        this.mess = this.$route.query.localMessage;
        this.info = this.$route.query.orderInfo;
        this.madonhang = "Mã đơn hàng: " + this.$route.query.orderId;
        this.magiaodich = "Mã giao dịch: " + this.$route.query.transId;
        this.sotien = "Số tiền: " + this.$route.query.amount;
      }
    }
  }
};
</script>
