<template >
  <v-container>
    <v-col>
      <v-row>
        <v-col cols="12">
          <v-card class="mx-auto pa-3" elevation="5">
            <v-row>
              <v-col cols="auto">
                <v-avatar color="blue-grey" size="150">
                  <span
                    class="white--text display-4"
                  >{{cur_event.tencongty.substring(0, 1).toUpperCase()}}</span>
                </v-avatar>
              </v-col>
              <v-col>
                <v-row>
                  <v-col style="padding: 0px 15px 0px 15px">
                    <component :transition="'scale-transition'" :is="'div'" hide-on-leave>
                      <v-skeleton-loader v-if="loading" type="article"></v-skeleton-loader>
                      <h3>{{cur_event.tensukien}}</h3>
                      <h5>{{cur_event.tencongty}}</h5>
                    </component>
                  </v-col>
                  <v-col align="end" style="padding: 0px 15px 0px 15px">
                    <v-dialog v-model="dialog" persistent max-width="600px">
                      <template v-slot:activator="{ on }">
                        <!-- <v-btn color="primary" dark v-on="on">Open Dialog</v-btn> -->
                        <v-btn class="ma-2" outlined small fab color="indigo" v-on="on">
                          <v-icon>mdi-pencil</v-icon>
                        </v-btn>
                      </template>

                      <v-card>
                        <v-card-title>
                          <span class="headline">Chỉnh sửa thông tin Sự kiện</span>
                        </v-card-title>
                        <v-card-text>
                          <v-container>
                            <v-row>
                              <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="edit_item.ten" label="Tên sự kiện*" required></v-text-field>
                              </v-col>
                              <v-col cols="12" sm="6" md="4">
                                <v-text-field
                                  v-model="edit_item.congty"
                                  label="Tên công ty"
                                  disabled
                                  required
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12" sm="6" md="4">
                                <v-text-field
                                  label="Legal last name*"
                                  hint="example of persistent helper text"
                                  persistent-hint
                                  required
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12">
                                <v-text-field label="Email*" required></v-text-field>
                              </v-col>
                              <v-col cols="12">
                                <v-text-field label="Password*" type="password" required></v-text-field>
                              </v-col>
                              <v-col cols="12" sm="6">
                                <v-select
                                  :items="['0-17', '18-29', '30-54', '54+']"
                                  label="Age*"
                                  required
                                ></v-select>
                              </v-col>
                              <v-col cols="12" sm="6">
                                <v-autocomplete
                                  :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                                  label="Interests"
                                  multiple
                                ></v-autocomplete>
                              </v-col>
                            </v-row>
                          </v-container>
                          <small>*indicates required field</small>
                        </v-card-text>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                          <v-btn color="blue darken-1" text @click="save">Save</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </v-col>
                </v-row>
                <v-divider></v-divider>
                <v-row>
                  <v-col style="padding: 0px 15px 0px 15px">
                    <strong>Ngày đăng tin:</strong>
                    {{edit_item.ngaytao.split("T")[0]}}
                  </v-col>
                  <v-col align="end" style="padding: 0px 15px 0px 15px;  color: gray;">
                    <strong>Ngày bắt đầu:</strong>
                    {{edit_item.ngaybatdau.split("T")[0]}}
                  </v-col>
                </v-row>
                <v-row>
                  <v-col style="padding: 0px 15px 0px 15px">
                    <strong>Đã ứng tuyển:</strong>

                    {{SLungtuyen}}
                  </v-col>
                  <v-col align="end" style="padding: 0px 15px 0px 15px;  color: gray;">
                    <strong>Ngày kết thúc:</strong>
                    {{edit_item.ngayketthuc.split("T")[0]}}
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="9">
          <v-card class="mx-auto pa-5" elevation="5">
            <v-row>
              <v-col>
                <div class="title font-weight-black" style="color:#01579B">Thông tin chung</div>
                <v-divider></v-divider>
                <v-row>
                  <v-col>
                    <div>
                      <b>Đối tượng tuyển:</b>
                      {{edit_item.doituong}}
                    </div>
                  </v-col>
                  <v-col align="end">
                    <div></div>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <div>
                      <b>Thời gian:</b>
                      {{edit_item.ngaybatdau.split("T")[0]}}
                    </div>
                  </v-col>
                  <v-col align="end">
                    <div>
                      <b>Địa điểm:</b>
                      {{edit_item.diadiem}}
                    </div>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <div>
                      <b>Số lượng tuyển:</b>
                      {{edit_item.soluongtuyen}}
                    </div>
                  </v-col>
                  <v-col align="end">
                    <div>
                      <b>Mức lương:</b>
                      {{edit_item.mucluong}} VNĐ/Giờ
                    </div>
                  </v-col>
                </v-row>
                <br />
                <div class="title font-weight-black" style="color:#01579B">Yêu cầu</div>
                <v-divider></v-divider>
                <div>
                  <p>{{edit_item.yeucau}}</p>
                </div>
                <br />
                <div class="title font-weight-black" style="color:#01579B">Mô tả</div>
                <v-divider></v-divider>
                <div>
                  <p>{{edit_item.mota}}</p>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="pa-3" elevation="3">
            <v-btn
              class="mt-2"
              block
              color="pink"
              :dark="!daungtuyen"
              @click="ungtuyen"
              :disabled="daungtuyen"
            >Ứng tuyển ngay</v-btn>
            <v-btn class="mt-2" block outlined color="indigo">Thêm vào yêu thích</v-btn>
            <v-divider></v-divider>
            <div class="text-center">
              <v-btn class="ma-2" outlined fab color="blue darken-3">
                <v-icon>mdi-facebook</v-icon>
              </v-btn>
              <v-btn class="ma-2" outlined fab color="blue">
                <v-icon>mdi-twitter</v-icon>
              </v-btn>
            </div>
          </v-card>

          <br />

          <v-card class="pa-3" elevation="3">
            <div class="title font-weight-black" style="color:#01579B">Công ty đang tuyển</div>
            <v-divider></v-divider>
            <div>
              <v-list>
                <v-list-item @click>
                  <v-list-item-content>
                    <v-list-item-title>Công ty SHPT</v-list-item-title>
                    <v-list-item-subtitle>Tên sự kiện abc</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item @click>
                  <v-list-item-content>
                    <v-list-item-title>Công ty SHPT</v-list-item-title>
                    <v-list-item-subtitle>Tên sự kiện abc</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item @click>
                  <v-list-item-content>
                    <v-list-item-title>Công ty SHPT</v-list-item-title>
                    <v-list-item-subtitle>Tên sự kiện abc</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item @click>
                  <v-list-item-content>
                    <v-list-item-title>Công ty SHPT</v-list-item-title>
                    <v-list-item-subtitle>Tên sự kiện abc</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </div>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="9">
          <!-- <v-card class="mx-auto" elevation="5">
            <v-toolbar>
              <v-toolbar-title
                class="title font-weight-black"
                style="color:#01579B"
              >Sự kiện tương tự</v-toolbar-title>

              <v-spacer></v-spacer>

            </v-toolbar>

            <v-list two-line>
              <v-list-item-group v-model="selected"  active-class="pink--text">
                <template v-for="(item, index) in items">
                  <v-list-item :key="item.title">
                    <template v-slot:default="{ active, toggle }">
                      <v-list-item-content>
                        <v-list-item-title v-text="item.title"></v-list-item-title>
                        <v-list-item-subtitle class="text--primary" v-text="item.headline"></v-list-item-subtitle>
                        <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
                      </v-list-item-content>

                      <v-list-item-action>
                        <v-list-item-action-text v-text="item.action"></v-list-item-action-text>
                        <v-icon v-if="!active" color="grey lighten-1">mdi-star</v-icon>

                        <v-icon v-else color="yellow">mdi-new</v-icon>
                      </v-list-item-action>
                    </template>
                  </v-list-item>
                  <v-divider v-if="index + 1 < items.length" :key="index"></v-divider>
                </template>
              </v-list-item-group>
            </v-list>
          </v-card>-->
        </v-col>
      </v-row>
    </v-col>
    <div style="margin-bottom:150px"></div>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    daungtuyen: false,
    SLungtuyen: 0,
    loading: true,
    dialog: false,
    edit_item: {},
    cur_event: {},
    cur_pg: {}
  }),
  methods: {
    reload(id) {
      axios
        .get(`http://localhost:5000/api/event?_id=` + id)
        .then(response => {
          if (
            response.data.confirmation != "success" ||
            response.data.data.length == 0
          ) {
            // this.$router.push({
            //   path: "Page404",
            //   query: { id: id, mess: "Không_tìm_thấy_EVENT_có_id_này" }
            // });
          }
          this.cur_event = response.data.data[0];
          this.edit_item = { ...this.cur_event };
          this.loading = false;
        })
        .catch(e => {
          this.errors.push(e);
          // this.$router.push({
          //   path: "Page404",
          //   query: { id: id, mess: "Có_lỗi_xảy_ra" }
          // });
        });

      axios
        .get(`http://localhost:5000/api/apply?eventid=` + id)
        .then(response => {
          this.SLungtuyen = response.data.data.length;
          response.data.data[0].forEach(element => {
            if (element.obPG.email == this.$store.state.cur_user.email)
              this.daungtuyen = true;
          });
        })
        .catch(e => {
          this.errors.push(e);
        });

      axios
        .get(
          `http://localhost:5000/api/PG?email=` +
            this.$store.state.cur_user.email
        )
        .then(response => {
          this.cur_pg = response.data.data[0];
        })
        .catch(e => {
          this.errors.push(e);
        });
    },
    save() {
      this.dialog = false;
      this.cur_event = { ...this.edit_item };
    },
    ungtuyen() {
      console.log("----------------------------------------------------");

      let today = new Date();

      var ob_ungtuyen = {
        eventid: this.edit_item._id,
        pgid: this.$store.state.cur_user.email,
        ngayapply: today.toISOString(),
        obSukien: this.edit_item,
        obPG: this.cur_pg,
        duyet: false,
        mua: false
      };
      axios
        .post(`http://localhost:5000/api/apply/`, ob_ungtuyen, {
          headers: {
            "content-type": "application/json"
          }
        })
        .then(response => {
          console.log(response);
          if (response.data.confirmation == "add success") {
            this.$dialog
              .alert("Thêm thành công!", { okText: "Tiếp tục" })
              .then(function(dialog) {});
            this.daungtuyen = true;
            // this.reload();
            return true;
          } else {
            this.$dialog
              .alert("Thêm thất bại!", { okText: "Tiếp tục" })
              .then(function(dialog) {});
            return false;
          }
        })
        .catch(e => {
          this.$dialog
            .alert("Thêm thất bại!", { okText: "Tiếp tục" })
            .then(function(dialog) {});
          console.log(e);
          return false;
        });
    }
  },
  mounted() {
    this.reload(this.$route.query.id);
  }
};
</script>