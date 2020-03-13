<template>
  <div class="grey lighten-5">
    <!-- banner -->
    <v-carousel cycle height="430" hide-delimiter-background show-arrows-on-hover>
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <!-- <v-sheet :color="colors[i]" height="100%"> -->
        <v-sheet height="100%">
          <v-img :src="banner[i]" height="430">
            <v-row class="fill-height" align="center" justify="center">
              <div class="display-3">Slide {{ slide }}</div>
            </v-row>
          </v-img>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <!-- end banner -->

    <!-- banner -->

    <!-- timeline -->

    <v-row align="center" justify="center">
      <v-col cols="10">
        <div class="pa-10">
          <v-row class="fill-height" align="center" justify="center">
            <div class="headline">NHÀ TUYỂN DỤNG HÀNG ĐẦU</div>
          </v-row>
          <br />
          <v-row class="fill-height" align="center" justify="center"> 
            <template v-for="item in 5 ">
              <v-card
                style="color:#34495e;"
                class="ma-5"
                elevation="5"
                colored-border
                height="180"
                width="150"
              >
                <div>
                  <b-col class="text-center">
                    <v-avatar
                      class="handhover"
                      @click="$router.push({ path: 'me', query: { id: 1 } })"
                      size="120"
                      style="margin-bottom:5px;"
                    >
                      <img
                        style="object-fit: cover"
                        :src="`https://picsum.photos/500/300?image=15`"
                        alt="AVATAR"
                      />
                    </v-avatar>
                    <div class="subtitle-2 font-weight-bold handhover">VinFast</div>
                  </b-col>
                </div>
              </v-card>
            </template>
          </v-row>
          <br />
          <br />
          <v-row class="fill-height" align="center" justify="center">
            <div class="headline">SỰ KIỆN ĐANG HOT</div>
          </v-row>
          <br />
          <v-row class="fill-height" align="center" justify="center">
            <v-col >
              <v-list elevation="5">
                <template v-for="item in 4">
                  <v-list-item three-line>
                    <v-list-item-avatar tile size="50">
                      <v-img height="50" src="http://localhost:5000/api/photo/sys/ntd1.png"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title>TẬP ĐOÀN VINFAST</v-list-item-title>
                      <v-list-item-subtitle>Lễ ra mắt dòng xe cao cấp thế hệ turbo 3.0, Với sự góp mặt của đông đảo nhà báo và quý khách mời</v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-action>
                      <v-list-item-action-text>27 phút trước</v-list-item-action-text>
                      <v-icon large color="red">mdi-new-box</v-icon>
                    </v-list-item-action>
                  </v-list-item>
                  <v-divider></v-divider>
                </template>
              </v-list>
            </v-col>
            <v-col>
              <v-list elevation="5">
                <template v-for="item in 4">
                  <v-list-item three-line>
                    <v-list-item-avatar tile size="50">
                      <v-img height="50" src="http://localhost:5000/api/photo/sys/ntd1.png"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title>TẬP ĐOÀN VINFAST</v-list-item-title>
                      <v-list-item-subtitle>Lễ ra mắt dòng xe cao cấp thế hệ turbo 3.0, Với sự góp mặt của đông đảo nhà báo và quý khách mời</v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-action>
                      <v-list-item-action-text>27 phút trước</v-list-item-action-text>
                      <v-icon large color="red">mdi-alert-octagram</v-icon>
                    </v-list-item-action>
                  </v-list-item>
                  <v-divider></v-divider>
                </template>
              </v-list>
            </v-col>
          </v-row>

          <br />

          <v-row class="fill-height" align="center" justify="center">
            <div class="headline">TOP PG/PB NỔI BẬT</div>
          </v-row>
          <br />
          <!-- <v-card class="d-flex flex-wrap justify-space-around" flat tile>
          
          </v-card>-->
          <v-sheet class="mx-auto" elevation="5">
            <v-slide-group show-arrows>
              <v-slide-item v-for="n in PGS.slice(0,15)" :key="n">
                <v-card style="color:#34495e;" class="ma-5" elevation="5" colored-border>
                  <div>
                    <b-col class="text-center">
                      <v-avatar
                        class="handhover"
                        @click="$router.push({ path: 'me', query: { id: n._id } })"
                        size="120"
                        style="margin-bottom:5px;"
                      >
                        <img
                          style="object-fit: cover"
                          :src="`https://picsum.photos/500/300?image=${n.avatar * 5 + 10}`"
                          alt="AVATAR"
                        />
                      </v-avatar>

                      <div class="caption font-weight-bold handhover">{{n.ten}}</div>
                      <div style="color:gray" class="caption">{{n.loai}}</div>

                      <b-row class="pa-0">
                        <b-col>
                          <v-icon color="#34495e" small>mdi-party-popper</v-icon>
                          <div class="caption font-weight-bold">{{n.sosukien}}</div>
                        </b-col>
                        <b-col>
                          <v-icon color="#34495e" small>mdi-heart</v-icon>
                          <div class="caption font-weight-bold">{{n.soyeuthich}}</div>
                        </b-col>
                        <b-col>
                          <v-icon color="#34495e" small>mdi-arrow-down-bold-hexagon-outline</v-icon>
                          <div class="caption font-weight-bold">{{n.soluotmua}}</div>
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col class="pa-0">
                          <v-btn class="ma-0" small outlined color="success">
                            <v-icon>mdi-phone</v-icon>
                          </v-btn>
                        </b-col>
                        <b-col class="pa-0">
                          <v-btn class="ma-0" small outlined color="pink">
                            <v-icon>mdi-heart</v-icon>
                          </v-btn>
                        </b-col>
                      </b-row>
                    </b-col>
                  </div>
                </v-card>
              </v-slide-item>
            </v-slide-group>
          </v-sheet>
        </div>
      </v-col>
    </v-row>

    <br id="123" />
    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => {
    return {
      PGS: [],
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4"
      ],
      slides: ["Sự kiện", "PG", "PB", "Giới thiệu", "Quảng cáo"],
      banner: [
        "http://localhost:5000/api/photo/SYS/bn1.png",
        "http://localhost:5000/api/photo/SYS/bn2.png",
        "http://localhost:5000/api/photo/SYS/bn3.png",
        "http://localhost:5000/api/photo/SYS/bn1.png",
        "http://localhost:5000/api/photo/SYS/bn1.png"
      ],
      sukien: [
        {
          color: "red lighten-2",
          icon: "mdi-star"
        },
        {
          color: "purple darken-1",
          icon: "mdi-book-variant"
        },
        {
          color: "green lighten-1",
          icon: "mdi-airballoon"
        },
        {
          color: "indigo",
          icon: "mdi-buffer"
        }
      ]
    };
  },
  methods: {
    reload() {
      axios
        .get(`http://localhost:5000/api/pg`)
        .then(response => {
          this.PGS = response.data.data;
        })
        .catch(e => {
          this.errors.push(e);
        });
    },
    avaclick() {
      alert("chaocacban");
    }
  },
  mounted() {
    this.reload();
  }
};
</script>
