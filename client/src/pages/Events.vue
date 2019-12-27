<template>
  <div class="white">
    <b-container>
      <v-card>
        <div
          class="display-1"
          align="center"
          justify="center"
          style="color:#34495e;"
        >Tìm sự kiện, việc làm mới nhất</div>
        <br>
        <div align="center" justify="center">
          <v-btn class="m-1" rounded outlined color="primary">Tạo hồ sơ nhà tuyển dụng</v-btn>
          <v-btn class="m-1" rounded outlined color="success"  :to="{name: 'createEvent'}"  >Đăng việc</v-btn>
        </div>
        <br>

        <v-tabs centered color="#34495e">
          <v-tab>Full time</v-tab>
          <v-tab>Part time</v-tab>
          <v-tab>Freelance</v-tab>

          <v-tab-item>
            <b-container>
              <b-row align-h="center">
                <b-col cols="9" align-h="center">
                  <v-card height="50px" class="text-center" elevation="3">
                    <v-toolbar dense>
                      <v-text-field
                        hide-details
                        prepend-icon="mdi-magnify"
                        single-line
                        color="#34495e"
                      ></v-text-field>
                      <v-btn icon>
                        <v-icon>mdi-filter-menu</v-icon>
                      </v-btn>
                    </v-toolbar>
                  </v-card>
                </b-col>
              </b-row>

              <b-row>
                <b-col></b-col>
                <!-- Sự kiện hiện ở trong cols này -->
                <b-col cols="9">
                  <v-alert
                    v-for="n in posts"
                    :key="n"
                    prominent
                    type="info"
                    icon="mdi-crown-outline"
                    color="cyan"
                    border="left"
                    elevation="5"
                    colored-border
                  >
                    <v-row style="  max-height: 4.5em; " align="center">
                      <v-col sm="9">
                        <h6>{{n.ten}} ( {{ n.ngaydienra.slice(0,10).split("-").reverse().join("/") }} )</h6>

                        <p style="font-size:14px">
                          tại
                          <strong>{{n.diadiem}}</strong>
                          - {{n.congty}}
                        </p>
                      </v-col>
                      <v-col align="end">
                        <div
                          style="font-size:14px; opacity:0.33"
                        >{{ (new Date()).getDate() - n.ngaytao.slice(0,10).split("-")[2] ==0?'Hôm nay': (new Date()).getDate() - n.ngaytao.slice(0,10).split("-")[2]+" ngày trước" }}</div>
                      </v-col>
                    </v-row>
                    <v-divider class="info" style="opacity: 0.22; margin:0"></v-divider>
                    <v-row align="center">
                      <v-col class="grow">
                        <div class="text2line" style="font-size:15px;">{{n.mieutacv}}</div>
                      </v-col>
                      <v-col class="shrink">
                        <v-btn color="pink" style="color:white" :to="{name: 'eventchitiet'}" >Xem ngay</v-btn>
                      </v-col>
                    </v-row>
                  </v-alert>
                </b-col>
                <b-col></b-col>
              </b-row>
            </b-container>
          </v-tab-item>
          <v-tab-item>
            <b-container>
              <b-row align-h="center">
                <b-col cols="8" align-h="center">
                  <v-card height="50px" class="text-center" elevation="3">
                    <v-toolbar dense>
                      <v-text-field
                        hide-details
                        prepend-icon="mdi-magnify"
                        single-line
                        color="#34495e"
                      ></v-text-field>
                      <v-btn icon>
                        <v-icon>mdi-filter-menu</v-icon>
                      </v-btn>
                    </v-toolbar>
                  </v-card>
                </b-col>
              </b-row>

              <b-row>
                <b-col></b-col>
                <!-- Sự kiện hiện ở trong cols này -->
                <b-col cols="8">
                  <v-alert
                    v-for="n in 2"
                    :key="n"
                    prominent
                    type="info"
                    icon="mdi-crown-outline"
                    color="cyan"
                    border="left"
                    elevation="5"
                    colored-border
                  >
                    <v-row style="  max-height: 4.5em; " align="center">
                      <v-col sm="9">
                        <h6>Sự kiện {{n}}</h6>

                        <p style="font-size:14px">
                          tại
                          <strong>123/2 ABC</strong> - phường 1, Thủ Đức, HCM
                        </p>
                      </v-col>
                      <v-col align="end">
                        <div style="font-size:14px; opacity:0.33">cách đây 2 ngày</div>
                      </v-col>
                    </v-row>
                    <v-divider class="info" style="opacity: 0.22; margin:0"></v-divider>
                    <v-row align="center">
                      <v-col class="grow">
                        <div
                          class="text2line"
                          style="font-size:15px;"
                        >Công ty ABC cần tuyển 12 PG thời vụ, khai trương ra mắt sự kiện abc. Yêu cầu abc xyz. Thưởng thêm cho Pg tích cực, chi tiết xin liên hệ số dien thoai</div>
                      </v-col>
                      <v-col class="shrink">
                        <v-btn color="pink">Xem ngay</v-btn>
                      </v-col>
                    </v-row>
                  </v-alert>
                </b-col>
                <b-col></b-col>
              </b-row>
            </b-container>
          </v-tab-item>
          <v-tab-item>
            <b-container>
              <b-row align-h="center">
                <b-col cols="8" align-h="center">
                  <v-card height="50px" class="text-center" elevation="3">
                    <v-toolbar dense>
                      <v-text-field
                        hide-details
                        prepend-icon="mdi-magnify"
                        single-line
                        color="#34495e"
                      ></v-text-field>
                      <v-btn icon>
                        <v-icon>mdi-filter-menu</v-icon>
                      </v-btn>
                    </v-toolbar>
                  </v-card>
                </b-col>
              </b-row>

              <b-row>
                <b-col></b-col>
                <!-- Sự kiện hiện ở trong cols này -->
                <b-col cols="8">
                  <v-alert
                    v-for="n in 4"
                    :key="n"
                    prominent
                    type="info"
                    icon="mdi-crown-outline"
                    color="cyan"
                    border="left"
                    elevation="5"
                    colored-border
                  >
                    <v-row style="  max-height: 4.5em; " align="center">
                      <v-col sm="9">
                        <h6>Sự kiện {{n}}</h6>

                        <p style="font-size:14px">
                          tại
                          <strong>123/2 ABC</strong> - phường 1, Thủ Đức, HCM
                        </p>
                      </v-col>
                      <v-col align="end">
                        <div style="font-size:14px; opacity:0.33">cách đây 2 ngày</div>
                      </v-col>
                    </v-row>
                    <v-divider class="info" style="opacity: 0.22; margin:0"></v-divider>
                    <v-row align="center">
                      <v-col class="grow">
                        <div
                          class="text2line"
                          style="font-size:15px;"
                        >Công ty ABC cần tuyển 12 PG thời vụ, khai trương ra mắt sự kiện abc. Yêu cầu abc xyz. Thưởng thêm cho Pg tích cực, chi tiết xin liên hệ số dien thoai</div>
                      </v-col>
                      <v-col class="shrink">
                        <v-btn color="pink">Xem ngay</v-btn>
                      </v-col>
                    </v-row>
                  </v-alert>
                </b-col>
                <b-col></b-col>
              </b-row>
            </b-container>
          </v-tab-item>
        </v-tabs>
      </v-card>

      <div style="margin-bottom:150px"></div>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Event",
  data: () => {
    return {
      posts: []
    };
  },
  methods: {
    reload() {
      axios
        .get(`http://localhost:5000/api/event`)
        .then(response => {
          this.posts = response.data.data;
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
