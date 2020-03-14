<template>
  <div>
    <b-container>
      <b-row class="mb-4">
        <b-col cols="4" class="text-center">
          <v-avatar size="150">
            <img
              style="object-fit: cover"
              :src="`http://localhost:5000/api/photo/${cur_PG.avatar}`"
              alt="AVATAR"
            />
          </v-avatar>
          <br />
          <br />
          <b-col sm="12">
            <v-btn class="ma-2" tile outlined color="success" @click="momo">
              <v-icon left>mdi-phone</v-icon>Liên hệ
            </v-btn>
          </b-col>
        </b-col>
        <b-col>
          <!-- style="background-color:blue" -->
          <b-row align-v="center" align-h="start">
            <b-col sm="*">
              <div class="font-weight-light display-1">{{cur_PG.ten}}</div>
            </b-col>
            <b-col sm="1">
              <v-btn text icon color="pink">
                <v-icon>mdi-heart</v-icon>
              </v-btn>
            </b-col>
            <b-col sm="2">
              <!-- <v-btn class="ma-2" outlined small fab color="indigo">
                <v-icon>mdi-pencil</v-icon>
              </v-btn>-->
              <v-dialog v-model="dialog" persistent max-width="600px">
                <template v-slot:activator="{ on }">
                  <!-- <v-btn color="primary" dark v-on="on">Open Dialog</v-btn> -->
                  <v-btn class="ma-2" outlined small fab color="indigo" v-on="on">
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="headline">Chỉnh sửa thông tin</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field v-model="edit_item.ten" label="Họ và tên*" required></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-menu
                            ref="menu"
                            v-model="menu"
                            :close-on-content-click="false"
                            :return-value.sync="date"
                            transition="scale-transition"
                            offset-y
                            min-width="290px"
                          >
                            <template v-slot:activator="{ on }">
                              <v-text-field
                                v-model="edit_item.ngaysinh"
                                label="Ngày sinh"
                                prepend-icon
                                readonly
                                v-on="on"
                              ></v-text-field>
                            </template>
                            <v-date-picker v-model="edit_item.ngaysinh" no-title scrollable>
                              <v-spacer></v-spacer>
                              <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                              <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                            </v-date-picker>
                          </v-menu>
                        </v-col>

                        <v-col cols="12" sm="6" md="4">
                          <v-text-field v-model="edit_item.dentu" label="Đến từ" required></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field v-model="edit_item.songtai" label="Đang sống tại" required></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="edit_item.noilamviec"
                            label="Làm việc tại"
                            required
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" sm="6" md="4">
                          <v-text-field v-model="edit_item.sdt" label="Số điện thoại*" required></v-text-field>
                        </v-col>
                        <!-- 
                        <v-col cols="12" sm="6">
                          <v-select
                            :items="['18','19','20','21','22','23','24',]"
                            label="Age*"
                            required
                          ></v-select>
                        </v-col>-->
                      </v-row>
                    </v-container>
                    <small>* là những trường bắt buộc</small>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                    <v-btn color="blue darken-1" text @click="save">Save</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </b-col>

            <b-col sm="2">
              <!-- <v-btn class="ma-2" outlined small fab color="indigo">
                <v-icon>mdi-pencil</v-icon>
              </v-btn>-->
              <v-dialog v-model="dialogAVT" persistent max-width="600px">
                <template v-slot:activator="{ on }">
                  <!-- <v-btn color="primary" dark v-on="on">Open Dialog</v-btn> -->
                  <v-btn class="ma-2" outlined small fab color="indigo" v-on="on">
                    <v-icon>mdi-account-circle</v-icon>
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="headline">Cập nhật ảnh đại diện</span>
                  </v-card-title>
                  <v-card-text>
                    <v-form>
                      <v-container>
                        <v-row>
                          <v-col cols="12" sm="8" md="8">
                            <v-file-input
                              v-model="AVTImg"
                              accept="image/png, image/jpeg, image/bmp"
                              placeholder="Tải lên ảnh đại diện"
                              prepend-icon="mdi-camera"
                              label="Avatar"
                              required
                            ></v-file-input>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-form>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="dialogAVT = false">Close</v-btn>
                    <v-btn color="blue darken-1" text @click="saveAVT">Save</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </b-col>
          </b-row>

          <b-row align-v="center" align-h="start">
            <b-col sm="*">
              <div class="font-weight-regular subtitle-1 mr-5">
                <b>{{cur_PG.sosukien }}</b> sự kiện
              </div>
            </b-col>
            <b-col sm="*">
              <div class="font-weight-regular subtitle-1 mr-5">
                <b>{{cur_PG.soluotmua }}</b> lượt mua
              </div>
            </b-col>
            <b-col sm="*">
              <div class="font-weight-regular subtitle-1 mr-5">
                <b>{{cur_PG.soyeuthich }}</b> theo dõi
              </div>
            </b-col>
          </b-row>
          <br />
          <b-row align-v="center" align-h="start">
            <b-col sm="*">
              <div class="font-weight-regular subtitle-1 mr-5">
                Làm việc tại:
                <b>{{cur_PG.noilamviec }}</b>
              </div>
            </b-col>
          </b-row>
          <b-row align-v="center" align-h="start">
            <b-col sm="*">
              <div class="font-weight-regular subtitle-1 mr-5">
                Ngày sinh:
                <b>{{ (cur_PG.ngaysinh!=null)?cur_PG.ngaysinh.split("T")[0]:'' }}</b>
              </div>
            </b-col>
          </b-row>
          <b-row align-v="center" align-h="start">
            <b-col sm="*">
              <div class="font-weight-regular subtitle-1 mr-5">
                Sống tại:
                <b>{{cur_PG.songtai}}</b>
              </div>
            </b-col>
          </b-row>
          <b-row align-v="center" align-h="start">
            <b-col sm="*">
              <div class="font-weight-regular subtitle-1 mr-5">
                Đến từ:
                <b>{{cur_PG.dentu}}</b>
              </div>
            </b-col>
          </b-row>

          <b-row align-v="center" align-h="start">
            <b-col sm="*">
              <div class="font-weight-regular subtitle-1 mr-5">
                Đã tham gia từ:
                <b>{{ (cur_PG.ngaythamgia!=null)?cur_PG.ngaythamgia.split("T")[0]:'' }}</b>
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>

      <!-- Tab -->

      <v-card>
        <v-tabs v-model="tab" background-color="transparent" centered>
          <v-tab v-for="item in items" :key="item">{{ item }}</v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item>
            <v-card>
              <v-tabs vertical>
                <v-tab>
                  <v-icon left>mdi-party-popper</v-icon>Sự kiện 1
                </v-tab>
                <v-tab>
                  <v-icon left>mdi-party-popper</v-icon>Sự kiện 2
                </v-tab>
                <v-tab>
                  <v-icon left>mdi-party-popper</v-icon>Sự kiện 3
                </v-tab>

                <v-tab-item>
                  <v-card flat>
                    <v-card-text>
                      <h4>Khai trương Công ty PG-Work</h4>
                      <br />
                      <h6>Nhà tuyển dụng</h6>
                      <div>
                        <a class="mr-2" href>PG-Work team</a>
                      </div>
                      <br />
                      <h6>Giới thiệu</h6>
                      <p>Sự kiện giới thiệu ra mắt Công ty PG-Work họp báo</p>
                      <h6>Địa điểm</h6>
                      <p>quận 1</p>
                      <h6>Thời gian</h6>
                      <p>7giờ sáng đến 5giờ chiều</p>
                      <h6>PG tham gia</h6>
                      <div>
                        <a class="mr-2" href>Đức Anh</a>
                        <a class="mr-2" href>Ngọc Lợi</a>
                        <a class="mr-2" href>Duy Khiêm</a>
                        <a class="mr-2" href>Chí Bình</a>
                      </div>
                      <br />
                      <h6>Hình ảnh</h6>
                      <v-container fluid style=" padding:0px">
                        <v-row>
                          <v-col v-for="n in 9" :key="n" class="d-flex child-flex" cols="2">
                            <v-card flat tile class="d-flex">
                              <v-img
                                :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                                :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                                aspect-ratio="1"
                                class="grey lighten-2"
                              >
                                <template v-slot:placeholder>
                                  <v-row class="fill-height ma-0" align="center" justify="center">
                                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                  </v-row>
                                </template>
                              </v-img>
                            </v-card>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card flat>
                    <v-card-text>
                      <h4>Ra mắt VinFast</h4>
                      <br />
                      <h6>Nhà tuyển dụng</h6>
                      <div>
                        <a class="mr-2" href>VinFast event</a>
                      </div>
                      <br />
                      <h6>Giới thiệu</h6>
                      <p>Sự kiện giới thiệu ra mắt Công ty PG-Work họp báo</p>
                      <h6>Địa điểm</h6>
                      <p>quận 1</p>
                      <h6>Thời gian</h6>
                      <p>7giờ sáng đến 5giờ chiều</p>
                      <h6>PG tham gia</h6>
                      <div>
                        <a class="mr-2" href>Đức Anh</a>
                        <a class="mr-2" href>Ngọc Lợi</a>
                        <a class="mr-2" href>Duy Khiêm</a>
                        <a class="mr-2" href>Chí Bình</a>
                      </div>
                      <br />
                      <h6>Hình ảnh</h6>
                      <v-container fluid style=" padding:0px">
                        <v-row>
                          <v-col v-for="n in 9" :key="n" class="d-flex child-flex" cols="2">
                            <v-card flat tile class="d-flex">
                              <v-img
                                :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                                :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                                aspect-ratio="1"
                                class="grey lighten-2"
                              >
                                <template v-slot:placeholder>
                                  <v-row class="fill-height ma-0" align="center" justify="center">
                                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                  </v-row>
                                </template>
                              </v-img>
                            </v-card>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card flat>
                    <v-card-text>
                      <h4>Ra mắt Heniken</h4>
                      <br />
                      <h6>Nhà tuyển dụng</h6>
                      <div>
                        <a class="mr-2" href>Heniken q2</a>
                      </div>
                      <br />
                      <h6>Giới thiệu</h6>
                      <p>Sự kiện giới thiệu ra mắt bia HENIKEN mới</p>
                      <h6>Địa điểm</h6>
                      <p>quận 1</p>
                      <h6>Thời gian</h6>
                      <p>7giờ sáng đến 5giờ chiều</p>
                      <h6>PG tham gia</h6>
                      <div>
                        <a class="mr-2" href>Đức Anh</a>
                        <a class="mr-2" href>Ngọc Lợi</a>
                        <a class="mr-2" href>Duy Khiêm</a>
                        <a class="mr-2" href>Chí Bình</a>
                      </div>
                      <br />
                      <h6>Hình ảnh</h6>
                      <v-container fluid style=" padding:0px">
                        <v-row>
                          <v-col v-for="n in 9" :key="n" class="d-flex child-flex" cols="2">
                            <v-card flat tile class="d-flex">
                              <v-img
                                :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                                :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                                aspect-ratio="1"
                                class="grey lighten-2"
                              >
                                <template v-slot:placeholder>
                                  <v-row class="fill-height ma-0" align="center" justify="center">
                                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                  </v-row>
                                </template>
                              </v-img>
                            </v-card>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
              </v-tabs>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-container fluid>
              <v-row>
                <v-col v-for="n in 9" :key="n" class="d-flex child-flex" cols="3">
                  <v-card flat tile class="d-flex">
                    <v-img
                      :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                      :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                      aspect-ratio="1"
                      class="grey lighten-2"
                    >
                      <template v-slot:placeholder>
                        <v-row class="fill-height ma-0" align="center" justify="center">
                          <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                        </v-row>
                      </template>
                    </v-img>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-tab-item>
          <v-tab-item>
            <br />
            <br />
            <div class="text-center">
              <v-btn @click="momo" outline color="pink" dark>Lấy thông tin liên hệ</v-btn>
            </div>
            <br />
            <br />
          </v-tab-item>
        </v-tabs-items>
      </v-card>

      <div style="margin-bottom:150px"></div>
    </b-container>
  </div>
</template>


<script>
import axios from "axios";
export default {
  data() {
    return {
      AVTImg: null,
      dialogm1: "",
      dialog: false,
      dialogAVT: false,
      tab: null,
      edit_item: {},
      cur_PG: {},
      items: ["Sự kiện đã tham gia", "Hình ảnh", "Thông tin"],
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    };
  },
  methods: {
    reload(id) {
      axios
        .get(`http://localhost:5000/api/pg?email=` + id)
        .then(response => {
          if (
            response.data.confirmation != "success" ||
            response.data.data.length == 0
          ) {
            this.$router.push({
              path: "Page404",
              query: { id: id, mess: "Không_tìm_thấy_PG_có_id_này" }
            });
          }
          this.cur_PG = response.data.data[0];
          this.edit_item = { ...this.cur_PG };
        })
        .catch(e => {
          this.errors.push(e);
          this.$router.push({
            path: "Page404",
            query: { id: id, mess: "Có_lỗi_xảy_ra" }
          });
        });
    },
    save() {
      this.dialog = false;
      this.cur_PG = { ...this.edit_item };
      //save o day

      axios
        .post(
          "http://localhost:5000/api/pg/update/" + this.cur_PG._id,
          this.cur_PG,
          {
            headers: {
              "content-type": "application/json"
            }
          }
        )
        .then(response => {
          console.log(response.data);
          this.$dialog
            .alert("Cập nhật thành công!", { okText: "Tiếp tục" })
            .then(function(dialog) {});
        })
        .catch(e => {
          this.$dialog
            .alert("Cập nhật thất bại!", { okText: "Tiếp tục" })
            .then(function(dialog) {});
        });

      this.dialog = false;
    },
    saveAVT() {
      if (this.AVTImg == null) return;

      let data = new FormData();
      data.append("file", this.AVTImg, this.AVTImg.name);
      axios
        .post(
          "http://localhost:5000/api/photo/" +
            this.cur_PG.email +
            "_avt." +
            this.AVTImg.name.split(".").pop(),
          data,
          {
            headers: {
              accept: "application/json",
              "Accept-Language": "en-US,en;q=0.8",
              "Content-Type": `multipart/form-data; boundary=${data._boundary}`
            }
          }
        )
        .then(response => {
          this.cur_PG.avatar =
            this.cur_PG.email + "_avt." + this.AVTImg.name.split(".").pop();

          axios
            .post(
              "http://localhost:5000/api/pg/update/" + this.cur_PG._id,
              this.cur_PG,
              {
                headers: {
                  "content-type": "application/json"
                }
              }
            )
            .then(response => {
              console.log(response.data);
              this.$dialog
                .alert("Cập nhật thành công!", { okText: "Tiếp tục" })
                .then(function(dialog) {});
            })
            .catch(e => {
              this.$dialog
                .alert("Cập nhật thất bại!", { okText: "Tiếp tục" })
                .then(function(dialog) {});
            });
        })
        .catch(error => {
          this.$dialog
            .alert("Cập nhật thất bại!", { okText: "Tiếp tục" })
            .then(function(dialog) {});
        });

      this.dialogAVT = false;
      this.cur_PG.avatar = "avt.png";
      //  this.cur_PG.avatar = this.cur_PG.email+'_avt.'+this.AVTImg.name.split('.').pop();
    },
    momo() {
      // this.$router.push({ path: 'https://test-payment.momo.vn/gw_payment/payment/qr', query: { partnerCode: 'MOMOAOBT20191229',accessKey: 'QIomPPOMzVHXcXMY', orderId:'orderid123', requestId:'orderid123',amount:'99999' ,requestType:'captureMoMoWallet'} })
      window.location.href =
        "https://test-payment.momo.vn/gw_payment/payment/qr?partnerCode=MOMOBKUN20180529&accessKey=klm05TvNBzhg7h7j&requestId=1578020735&amount=99999&orderId=1578020735&signature=752c9232f58958387dfc9c89dd73a6a3e87c98e584abfb52b4bb9909cc784eb7&requestType=captureMoMoWallet";

      //   var order ={
      //   "accessKey": "QIomPPOMzVHXcXMY",
      //   "partnerCode": "MOMOAOBT20191229",
      //   "requestType": "captureMoMoWallet",
      //   "notifyUrl": "https://momo.vn",
      //   "returnUrl": "https://momo.vn",
      //   "orderId": "test01",
      //   "amount": "99999",
      //   "orderInfo": "testinfo",
      //   "requestId": "test01",
      //   "extraData": "name=binh",
      //   "signature": "72818b03fe10e467414287b6eeb1973017db2cabf38ba67dbc0edb6f3beda34c"
      // };

      //     var order ={
      //     "orderId": "test01",

      //     "orderInfo": "testinfo",
      //     "requestId": "test01",
      //     "extraData": "name=binh",
      //   };
      //   var request = 'orderId=pg'+(new Date).toTimeString()+ '&requestId=pg'+(new Date).toTimeString()+ '&orderInfo=Lấy thông tin '+this.cur_PG.ten + '&extraData=pgid='+this.cur_PG._id
      //   alert(request);
      //   axios
      //     .get(`http://localhost:5000/momo?`+request)
      //     .then(response => {
      //       if(response.date!='')
      //  window.location.href = response.data;

      //     })
      //     .catch(e => {
      //       this.errors.push(e);
      //        this.$router.push({
      //           path: "Page404",
      //           query: { id: id, mess: "Có_lỗi_xảy_ra" }
      //         });
      //     });
    }
  },
  mounted() {
    this.reload(this.$route.query.email);
  }
};
//.slice(0,10).split("-").reverse().join("/")
</script>
