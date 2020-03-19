<template>
  <v-container class="ma-0 pa-0" fill-height>
    <v-col class="ma-0 pa-0">
      <v-row>
        <v-col><h3>Lịch sử thanh toán</h3></v-col>
      </v-row>
      <v-card elevation="5"><v-row>
        <v-col cols="2">
          <v-card>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>
                  <strong>Giao dịch</strong>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <component :transition="'scale-transition'" :is="'div'" hide-on-leave>
              <!-- <v-skeleton-loader v-if="event_loading" type="list-item"></v-skeleton-loader>
              <v-skeleton-loader v-if="event_loading" type="list-item"></v-skeleton-loader>
              <v-skeleton-loader v-if="event_loading" type="list-item"></v-skeleton-loader>
              <v-skeleton-loader v-if="event_loading" type="list-item"></v-skeleton-loader>
              <v-skeleton-loader v-if="event_loading" type="list-item"></v-skeleton-loader>
              <v-skeleton-loader v-if="event_loading" type="list-item"></v-skeleton-loader>
              <v-skeleton-loader v-if="event_loading" type="list-item"></v-skeleton-loader>-->

              <v-list dense>
                <v-list-item-group>
                  <v-list-item
                    v-for="item in lstgiaodich"
                    :key="item"
                    link
                    @click="eventclick(item)"
                  >
                    <v-list-item-content>
                      <v-list-item-title>{{ item }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </component>
          </v-card>
        </v-col>
        <v-divider vertical></v-divider>
        <v-col>
          <v-tabs fixed-tabs color="#34495e">
            <v-tab>Thông tin</v-tab>
            <v-tab>Danh sách nhân sự</v-tab>
            <v-tab-item>
              <v-card>
                <v-col>
                  <hr />
                  <v-row>
                    <v-col>
                      <div>
                        <strong>Tên giao dịch</strong>
                      </div>
                    </v-col>
                    <v-col>
                      <div style=" text-align: right;">Giao dịch 1</div>
                    </v-col>
                  </v-row>
                  <hr />
                       <v-row>
                    <v-col>
                      <div>
                        <strong>Ngày thanh toán</strong>
                      </div>
                    </v-col>
                    <v-col>
                      <div style=" text-align: right;">25/12/2019</div>
                    </v-col>
                  </v-row>
                  <hr />
                        <v-row>
                    <v-col>
                      <div>
                        <strong>Hình thức thanh toán</strong>
                      </div>
                    </v-col>
                    <v-col>
                      <div style=" text-align: right;">captureMoMoWallet</div>
                    </v-col>
                  </v-row>
                  <hr />
                        <v-row>
                    <v-col>
                      <div>
                        <strong>Mã giao dịch</strong>
                      </div>
                    </v-col>
                    <v-col>
                      <div style=" text-align: right;">GD000123</div>
                    </v-col>
                  </v-row>
                  <hr />
                        <v-row>
                    <v-col>
                      <div>
                        <strong>Mã đơn hàng</strong>
                      </div>
                    </v-col>
                    <v-col>
                      <div style=" text-align: right;">GD000123</div>
                    </v-col>
                  </v-row>
                  <hr />
                        <v-row>
                    <v-col>
                      <div>
                        <strong>Thông tin đơn hàng</strong>
                      </div>
                    </v-col>
                    <v-col>
                      <div style=" text-align: right;">Lấy thông tin PG</div>
                    </v-col>
                  </v-row>
                  <hr />
                      <v-row>
                    <v-col>
                      <div>
                        <strong>Trạng thái</strong>
                      </div>
                    </v-col>
                    <v-col>
                      <div style=" text-align: right;">Thành công</div>
                    </v-col>
                  </v-row>
                </v-col>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-data-table :headers="headers" :items="ungtuyen" class="elevation-1">
                <template v-slot:item.action="{ item }">
                  <v-btn color="success">Chi tiết</v-btn>
                </template>
                <template v-slot:no-data>
                  <v-btn color="primary">Chưa có dữ liệu</v-btn>
                </template>
              </v-data-table>
            </v-tab-item>
          </v-tabs>
        </v-col>
      </v-row></v-card>
    </v-col>
  </v-container>
</template>
<script>
import axios from "axios";
export default {
  data: () => ({
    drawer: {},
    event_loading: true,
    items: [
      { title: "Home", icon: "dashboard" },
      { title: "About", icon: "question_answer" }
    ],
    lstgiaodich: [
      "giao dịch 1",
      "giao dịch 2",
      "giao dịch 3",
      "giao dịch 4",
      "giao dịch 5",
      "giao dịch 6",
      "giao dịch 7"
    ],
    ungtuyen: [
      {
        ten: "Tên PG 1",
        loai: "PG",
        sdt: "098123123",
        sotien: "50.000",
        trangthai: "thành công",
        action: "chitiet"
      },
      {
        ten: "Tên PG 2",
        loai: "PG",
        sdt: "098123123",
        sotien: "50.000",
        trangthai: "thành công",
        action: "chitiet"
      },
      {
        ten: "Tên PG 3",
        loai: "PG",
        sdt: "098123123",
        sotien: "50.000",
        trangthai: "thành công",
        action: "chitiet"
      },
      {
        ten: "Tên PG 4",
        loai: "PG",
        sdt: "098123123",
        sotien: "50.000",
        trangthai: "thành công",
        action: "chitiet"
      },
      {
        ten: "Tên PG 5",
        loai: "PG",
        sdt: "098123123",
        sotien: "50.000",
        trangthai: "thành công",
        action: "chitiet"
      },
      {
        ten: "Tên PG 6",
        loai: "PG",
        sdt: "098123123",
        sotien: "50.000",
        trangthai: "thành công",
        action: "chitiet"
      },
      {
        ten: "Tên PG 7",
        loai: "PG",
        sdt: "098123123",
        sotien: "50.000",
        trangthai: "thành công",
        action: "chitiet"
      }
    ],
    headers: [
      { text: "Ten", value: "ten" },
      { text: "loai", value: "loai" },
      { text: "Số điện thoại", value: "sdt" },
      { text: "Số tiền", value: "sotien" },
      { text: "Trạng thái", value: "trangthai" },
      { text: "Actions", value: "action" }
    ],
    
  }),
  methods: {
    reload() {
      // axios
      //   .get(`http://localhost:5000/api/event`)
      //   .then(response => {
      //     this.events = response.data.data;
      //     this.event_loading = false;
      //   })
      //   .catch(e => {
      //     this.errors.push(e);
      //   });
    },
    eventclick(id) {
      // alert(id);
      // axios
      //   .get(`http://localhost:5000/api/pg`)
      //   .then(response => {
      //     this.ungtuyen = response.data.data;
      //   })
      //   .catch(e => {
      //     this.errors.push(e);
      //   });
    },
    momo() {
      // this.$router.push({ path: 'https://test-payment.momo.vn/gw_payment/payment/qr', query: { partnerCode: 'MOMOAOBT20191229',accessKey: 'QIomPPOMzVHXcXMY', orderId:'orderid123', requestId:'orderid123',amount:'99999' ,requestType:'captureMoMoWallet'} })
      //   window.location.href = 'https://test-payment.momo.vn/gw_payment/payment/qr?partnerCode=MOMO&accessKey=F8BBA842ECF85&requestId=MM87419&amount=1100&orderId=MM87419&signature=90e946d6a3e74b228b685e9ce6d5283f3b9404f205746532e2991d2da89d430b&requestType=captureMoMoWallet'
    }
  },
  mounted() {
    this.reload();
  }
};
</script>