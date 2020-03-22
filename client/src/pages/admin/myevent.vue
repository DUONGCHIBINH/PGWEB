<template>
  <v-container class="ma-0 pa-0" fill-height>
    <v-col class="ma-0 pa-0">
      <v-row>
        <v-col>
          <h3>Sự kiện của tôi</h3>
        </v-col>
      </v-row>
      <v-card elevation="5">
        <v-row>
          <v-col cols="4">
            <v-card>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>
                    <strong>Sự kiện</strong>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <component :transition="'scale-transition'" :is="'div'" hide-on-leave>
                <v-skeleton-loader v-if="event_loading" type="list-item"></v-skeleton-loader>
                <v-skeleton-loader v-if="event_loading" type="list-item"></v-skeleton-loader>
                <v-skeleton-loader v-if="event_loading" type="list-item"></v-skeleton-loader>
                <v-skeleton-loader v-if="event_loading" type="list-item"></v-skeleton-loader>
                <v-skeleton-loader v-if="event_loading" type="list-item"></v-skeleton-loader>
                <v-skeleton-loader v-if="event_loading" type="list-item"></v-skeleton-loader>
                <v-skeleton-loader v-if="event_loading" type="list-item"></v-skeleton-loader>

                <v-list dense>
                  <v-list-item-group>
                    <v-list-item
                      v-for="item in events"
                      :key="item.mid"
                      link
                      @click="eventclick(item._id)"
                    >
                      <v-list-item-content>
                        <v-list-item-title>{{ item.tensukien }}</v-list-item-title>
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
              <v-tab>Ứng tuyển ({{ungtuyen.length}})</v-tab>
              <v-tab>Đã duyệt ({{daduyet.length}})</v-tab>
              <v-tab>Đã lấy thông tin ({{damua.length}})</v-tab>
              <v-tab-item>
                <v-data-table :headers="headers" :items="ungtuyen" class="elevation-1">
                  <template v-slot:item.action="{ item }">
                    <v-btn color="success" @click="Duyet(item)">Duyệt</v-btn>
                  </template>
                  <template v-slot:no-data>
                    <v-btn color="primary">Chưa có dữ liệu</v-btn>
                  </template>
                </v-data-table>
              </v-tab-item>

              <v-tab-item>
                <v-data-table :headers="headers" :items="daduyet" class="elevation-1">
                  <template v-slot:item.action="{ item }">
                    <v-btn style=" margin-right: 3px;" color="grey darken-1" @click="Huy(item)" dark >Hủy</v-btn>                    
                    <v-btn color="pink" @click="momo(item)" dark>Mua</v-btn>
                  </template>
                  <template v-slot:no-data>
                    <v-btn color="primary">Chưa có dữ liệu</v-btn>
                  </template>
                </v-data-table>
                <v-col>
                  <v-row>
                    <v-spacer></v-spacer>
                    <v-btn color="teal" @click="momo" dark>Lấy tất cả</v-btn>
                    <v-spacer></v-spacer>
                  </v-row>
                </v-col>
              </v-tab-item>

              <v-tab-item>
                <v-data-table :headers="headers" :items="damua" class="elevation-1">
                  <template v-slot:item.action="{ item }">
                    <v-btn color="pink" @click="Xem" dark>Xem</v-btn>
                  </template>
                  <template v-slot:no-data>
                    <v-btn color="primary">Chưa có dữ liệu</v-btn>
                  </template>
                </v-data-table>
              </v-tab-item>
            </v-tabs>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-container>
</template>
<script>
import axios from "axios";
export default {
  data: () => ({
    drawer: {},
    cur_event:'',
    event_loading: true,
    items: [
      { title: "Home", icon: "dashboard" },
      { title: "About", icon: "question_answer" }
    ],
    events: [],
    applies: [],
    ungtuyen: [],
    daduyet: [],
    damua: [],
    headers: [
      {
        text: "Email",
        align: "left",
        value: "obPG.email"
      },
      { text: "Ten", value: "obPG.ten" },
      { text: "loai", value: "obPG.loai" },
      // { text: "Số event", value: "sosukien" },
      // { text: "yêu thích", value: "soyeuthich" },
      // { text: "lượt mua", value: "soluotmua" },
      { text: "nơi làm việc", value: "obPG.noilamviec" },
      { text: "sống tại", value: "obPG.songtai" },
      { text: "Actions", value: "action" }
    ]
  }),
  methods: {
    reload() {
      this.events =[];
      this.ungtuyen = [];
      this.daduyet = [];
      this.damua = [];
      this.applies=[];
      axios
        .get(
          `http://localhost:5000/api/event?nguoitao=` +
            this.$store.state.cur_user.email
        )
        .then(response => {
          this.events = response.data.data;
          this.event_loading = false;
       
        })
        .catch(e => {
          this.errors.push(e);
        });
      axios
        .get(
          `http://localhost:5000/api/apply?obPG.email=` +
            this.$store.state.cur_user.email
        )
        .then(response => {
          this.applies = response.data.data;
         this.eventclick(this.cur_event);
        })
        .catch(e => {
          this.errors.push(e);
        });
    },
    eventclick(id) {
      this.ungtuyen = [];
      this.daduyet = [];
      this.damua = [];
      this.cur_event = id;
      this.applies.forEach(e => {
        if (e.obSukien._id == id && e.duyet == false && e.mua == false)
          this.ungtuyen.push(e);
        if (e.obSukien._id == id && e.duyet == true && e.mua == false)
          this.daduyet.push(e);
        if (e.obSukien._id == id && e.duyet == true && e.mua == true)
          this.damua.push(e);
      });
    },
    Xem() {
      this.$router.push("mythanhtoan");
    },
    Duyet(item) {
     
     item.duyet=true;
     axios
     .post('http://localhost:5000/api/apply/update/'+item._id,item,{
          headers: {
            "content-type": "application/json"
          }
        })        
        .then(response => {

          if (response.data.confirmation == "update success") {
           this.$dialog
                .alert("Duyệt thành công!", { okText: "Tiếp tục" })
                .then(function(dialog) { 
                            
                });
                this.reload();
               
          } else {
           this.$dialog
                .alert("Duyệt thất bại!", { okText: "Tiếp tục" })
                .then(function(dialog) {});
          }
        })
        .catch(e => {
         this.$dialog
                .alert("Duyệt thất bại!", { okText: "Tiếp tục" })
                .then(function(dialog) {});  
        });



      
     
    },
    Huy(item) {
     

     item.duyet=false;
     axios
     .post('http://localhost:5000/api/apply/update/'+item._id,item,{
          headers: {
            "content-type": "application/json"
          }
        })        
        .then(response => {

          if (response.data.confirmation == "update success") {
           this.$dialog
                .alert("Hủy thành công!", { okText: "Tiếp tục" })
                .then(function(dialog) {
                  
                 
                });
                 this.reload();
          } else {
           this.$dialog
                .alert("Hủy thất bại!", { okText: "Tiếp tục" })
                .then(function(dialog) {});
          }
        })
        .catch(e => {
         this.$dialog
                .alert("Hủy thất bại!", { okText: "Tiếp tục" })
                .then(function(dialog) {});  
        });



      
     
    },
    momo(apply) {
      // this.$router.push({ path: 'https://test-payment.momo.vn/gw_payment/payment/qr', query: { partnerCode: 'MOMOAOBT20191229',accessKey: 'QIomPPOMzVHXcXMY', orderId:'orderid123', requestId:'orderid123',amount:'99999' ,requestType:'captureMoMoWallet'} })
      // window.location.href = 'https://test-payment.momo.vn/gw_payment/payment/qr?partnerCode=MOMO&accessKey=F8BBA842ECF85&requestId=MM87419&amount=1100&orderId=MM87419&signature=90e946d6a3e74b228b685e9ce6d5283f3b9404f205746532e2991d2da89d430b&requestType=captureMoMoWallet'
      //   alert(name);
      //  return;
var today = new Date();
      let GD= 
      {
        applyid: apply._id,
        obapply:apply,
        nguoitao:this.$store.state.cur_user.email,
        trangthai:'Chờ',
        thanhcong:false,
        ngaytao:today,
        sotien:99999,
      }

       
      let req = {
        requestId: "ID007",
        amount: 99000,
        orderId: "ID007",
        orderInfo: "Thông tin liên hệ với " + name,
        extraData: "name=binh"
      };
      axios

        .get(`http://localhost:5000/api/momo`, { params: req })
        .then(response => {
          if (response.data.errorCode != 0) {
            //   alert(response.data.localMessage);
            console.log(response.data);
          } else {
            //  alert(response.data.localMessage);
            // console.log(response.data)
            window.open(response.data.payUrl, "_blank");

            GD.obmomo = response.data;

            ///luu giao dich
             axios
     .post('http://localhost:5000/api/gd',GD,{
          headers: {
            "content-type": "application/json"
          }
        })        
        .then(response => {

          if (response.data.confirmation == "add success") {
           this.$dialog
                .alert("Lưu giao dịch thành công!", { okText: "Tiếp tục" })
                .then(function(dialog) {
                  
                 
                });
                 this.reload();
          } else {
           this.$dialog
                .alert("Lưu giao dịch thất bại!", { okText: "Tiếp tục" })
                .then(function(dialog) {});
          }
        })
        .catch(e => {
         this.$dialog
                .alert("Lưu giao dịch thất bại!", { okText: "Tiếp tục" })
                .then(function(dialog) {});  
        });





          }
        })
        .catch(e => {
          this.errors.push(e);
        });
    }
  },
  mounted() {
    this.reload();
  }
};
</script>