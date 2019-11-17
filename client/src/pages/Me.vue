<template>
  <div class="white">
    <b-container>
      <b-row class="mb-4">
        <b-col cols="4" class="text-center">
          <v-avatar size="150">
            <img
              style="object-fit: cover"
              :src="`https://picsum.photos/500/300?image=${PG.data[0].avatar * 5 + 10}`"
              alt="AVATAR"
            />
          </v-avatar>
          <br />
          <br />
          <b-col sm="12">
            <v-btn class="ma-2" tile outlined color="success">
              <v-icon left>mdi-phone</v-icon>Liên hệ
            </v-btn>
          </b-col>
        </b-col>
        <b-col>
          <!-- style="background-color:blue" -->
          <b-row align-v="center" align-h="start">
            <b-col sm="*">
              <div class="font-weight-light display-1">{{PG.data[0].ten}}</div>
            </b-col>
            <b-col sm="1">
              <v-btn text icon color="pink">
                <v-icon>mdi-heart</v-icon>
              </v-btn>
            </b-col>
            <b-col sm="2">
              <v-btn class="ma-2" outlined small fab color="indigo">
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
            </b-col>
            <!-- <b-col sm="3">
              <v-btn class="ma-2" tile outlined color="success">
                <v-icon left>mdi-phone</v-icon>Liên hệ
              </v-btn>
            </b-col>-->
          </b-row>

          <b-row align-v="center" align-h="start">
            <b-col sm="*">
              <div class="font-weight-regular subtitle-1 mr-5">
                <b>{{PG.data[0].sosukien }}</b> sự kiện
              </div>
            </b-col>
            <b-col sm="*">
              <div class="font-weight-regular subtitle-1 mr-5">
                <b>{{PG.data[0].soluotmua }}</b> lượt mua
              </div>
            </b-col>
            <b-col sm="*">
              <div class="font-weight-regular subtitle-1 mr-5">
                <b>{{PG.data[0].soyeuthich }}</b> theo dõi
              </div>
            </b-col>
          </b-row>
          <br />
          <b-row align-v="center" align-h="start">
            <b-col sm="*">
              <div class="font-weight-regular subtitle-1 mr-5">
                Làm việc tại:
                <b>{{PG.data[0].noilamviec }}</b>
              </div>
            </b-col>
          </b-row>
          <b-row align-v="center" align-h="start">
            <b-col sm="*">
              <div class="font-weight-regular subtitle-1 mr-5">
                Ngày sinh:
                <b>{{PG.data[0].ngaysinh.slice(0,10).split("-").reverse().join("/") }}</b>
              </div>
            </b-col>
          </b-row>
          <b-row align-v="center" align-h="start">
            <b-col sm="*">
              <div class="font-weight-regular subtitle-1 mr-5">
                Sống tại:
                <b>{{PG.data[0].songtai}}</b>
              </div>
            </b-col>
          </b-row>
          <b-row align-v="center" align-h="start">
            <b-col sm="*">
              <div class="font-weight-regular subtitle-1 mr-5">
                Đến từ:
                <b>{{PG.data[0].dentu}}</b>
              </div>
            </b-col>
          </b-row>

          <b-row align-v="center" align-h="start">
            <b-col sm="*">
              <div class="font-weight-regular subtitle-1 mr-5">
                Đã tham gia từ:
                <b>{{PG.data[0].ngaythamgia.slice(0,10).split("-").reverse().join("/") }}</b>
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
              <v-btn rounded outlined color="pink" dark>Lấy thông tin liên hệ</v-btn>
            </div>
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
      tab: null,
      PG: [],
      items: ["Sự kiện đã tham gia", "Hình ảnh", "Thông tin"],
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    };
  },
  methods: {
    reload(id) {
      axios
        .get(`http://localhost:5000/api/pg?_id=`+id)
        .then(response => {
          this.PG = response.data;
          if(this.PG.confirmation !='success' )
          {
            this.$router.push({ path: 'Page404', query: { 'id': id  , 'mess':'Không tìm thấy PG có id này'} })
          }
        })
        .catch(e => {
          this.errors.push(e);
        });
      
    },

  },
  mounted() {
    this.reload(this.$route.query.id);
  },
};
</script>
