<template>
  <div class="white">
    <b-container>
      <v-card>
        <div class="display-1" align="center" justify="center" style="color:#34495e;">Tìm nhân sự event</div>
         <br>
        <div align="center" justify="center">
          <v-btn class="m-1" rounded outlined color="primary">Tạo hồ sơ PG/PB</v-btn>
        </div>
        <br>
        <v-tabs centered color="#34495e">
          <v-tab>PG loại I</v-tab>
          <v-tab>PG loại II</v-tab>
          <v-tab>PG loại III</v-tab>

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
                  <div>
                    <v-card class="d-flex flex-wrap justify-center" flat tile>
                      <v-card
                        style="color:#34495e;"
                        class="ma-5"
                        elevation="5"
                        colored-border
                        v-for="n in PGS"
                        :key="n"
                      >
                        <div>
                          <b-col class="text-center">
                            <v-avatar
                              class="handhover"
                              @click="$router.push({ path: 'me', query: { email:n.email } })"
                              size="120"
                              style="margin-bottom:5px;"
                            >
                              <img
                                style="object-fit: cover"
                                :src="`http://localhost:5000/api/photo/${n.avatar}`"
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
                  <div>
                    <v-card class="d-flex flex-wrap justify-center" flat tile>
                      <v-card
                        style="color:#34495e;"
                        class="ma-5"
                        elevation="5"
                        colored-border
                        v-for="n in PGS"
                        :key="n"
                      >
                        <div>
                          <b-col class="text-center">
                            <v-avatar
                              class="handhover"
                              @click="$router.push({ path: 'me', query: { email:n.email } })"
                              size="120"
                              style="margin-bottom:5px;"
                            >
                              <img
                                style="object-fit: cover"
                                :src="`http://localhost:5000/api/photo/${n.avatar}`"
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
                  <div>
                    <v-card class="d-flex flex-wrap justify-center" flat tile>
                      <v-card
                        style="color:#34495e;"
                        class="ma-5"
                        elevation="5"
                        colored-border
                        v-for="n in PGS"
                        :key="n"
                      >
                        <div>
                          <b-col class="text-center">
                            <v-avatar
                              class="handhover"
                              @click="$router.push({ path: 'me', query: { email:n.email } })"
                              size="120"
                              style="margin-bottom:5px;"
                            >
                              <img
                                style="object-fit: cover"
                                :src="`http://localhost:5000/api/photo/${n.avatar}`"
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
                    </v-card>
                  </div>
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
  name: "PG",
  data: () => {
    return {
      PGS: []
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
