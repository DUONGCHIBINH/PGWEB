<template>
  <div class="white">
    <b-container>
      <v-card>
      
        <div class="display-1" align="center" justify="center" style="color:#34495e;">Tìm quản lý</div>
       
        <v-tabs centered color="#34495e">
          <v-tab>Quản lý loại I</v-tab>
          <v-tab>Quản lý loại II</v-tab>
          <v-tab>Quản lý loại III</v-tab>

          <v-tab-item>
            <b-container>
              <b-row align-h="center">
                <b-col cols="10" align-h="center">
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
                <b-col class="pa-0 ma-0"></b-col>
                <!-- Sự kiện hiện ở trong cols này -->
                <b-col cols="12">
                  <div >
                    <v-card class="d-flex flex-wrap justify-center"  flat tile>
                      <v-card style="color:#34495e;" class="ma-5" elevation="5" colored-border  v-for="n in 10" :key="n" >
                        <div>
                          <b-col class="text-center">
                            <v-avatar size="120" style="margin-bottom:5px;">
                              <img
                                style="object-fit: cover"
                                src="https://assets.entrepreneur.com/content/3x2/2000/20160425134600-mark-zuckerberg-facebook-mobile-world-congress-ceo-technology-barcelona.jpeg"
                                alt="AVATAR"
                              />
                            </v-avatar>

                            <div class="caption font-weight-bold">Nguyễn Văn A</div>
                            <div style="color:gray" class="caption">Quản lý</div>

                            <b-row class="pa-0">
                              <b-col>
                                <v-icon color="#34495e" small>mdi-party-popper</v-icon>
                                <div class="caption font-weight-bold">123</div>
                              </b-col>
                              <b-col>
                                <v-icon color="#34495e" small>mdi-heart</v-icon>
                                <div class="caption font-weight-bold">123</div>
                              </b-col>
                              <b-col>
                                <v-icon color="#34495e" small>mdi-arrow-down-bold-hexagon-outline</v-icon>
                                <div class="caption font-weight-bold">123</div>
                              </b-col>
                            </b-row>
                            <b-row>
                               <b-col class="pa-0">
                                <v-btn class="ma-0" small outlined  color="success">
                                  <v-icon>mdi-phone</v-icon>
                                </v-btn>
                              </b-col>
                              <b-col class="pa-0">
                                <v-btn class="ma-0" small outlined  color="pink">
                                  <v-icon>mdi-heart</v-icon>
                                </v-btn>
                              </b-col>
                            </b-row>
                          </b-col>
                        </div>
                      </v-card>
                    </v-card>
                  </div>
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
export default {};
</script>
