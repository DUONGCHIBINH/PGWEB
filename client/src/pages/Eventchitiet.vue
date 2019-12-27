<template >
  <v-container>
    <v-col>
      <v-row>
        <v-col cols="12">
          <v-card class="mx-auto pa-3" elevation="5">
            <v-row>
              <v-col cols="auto">
                <v-avatar color="blue-grey" size="150">
                  <span class="white--text headline">SHPT</span>
                </v-avatar>
              </v-col>
              <v-col>
                <v-row>
                  <v-col style="padding: 0px 15px 0px 15px"> 
                    <h3>Tên sự kiện</h3>
                    <h5>Công ty SHPT</h5>
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
                                <v-text-field label="Legal first name*" required></v-text-field>
                              </v-col>
                              <v-col cols="12" sm="6" md="4">
                                <v-text-field
                                  label="Legal middle name"
                                  hint="example of helper text only on focus"
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
                          <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </v-col>
                </v-row>
                <v-divider></v-divider>
                <v-row>
                  <v-col style="padding: 0px 15px 0px 15px">
                    <strong>Ngày duyệt:</strong> 12/12/2019
                  </v-col>
                </v-row>
                <v-row>
                  <v-col style="padding: 0px 15px 0px 15px">
                    <strong>Hạn ứng tuyển:</strong> 24/12/2019
                  </v-col>
                  <v-col align="end" style="padding: 0px 15px 0px 15px;  color: gray;">
                    <strong>Lượt xem:</strong> 222
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
                      <b>Đối tượng tuyển:</b> PG
                    </div>
                  </v-col>
                  <v-col align="end">
                    <div></div>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <div>
                      <b>Thời gian:</b> 31/12/2019
                    </div>
                  </v-col>
                  <v-col align="end">
                    <div>
                      <b>Địa điểm:</b> Giga mall Phạm Văn Đồng
                    </div>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <div>
                      <b>Số lượng tuyển:</b> 20
                    </div>
                  </v-col>
                  <v-col align="end">
                    <div>
                      <b>Mức lương:</b> 500k/ca/4h
                    </div>
                  </v-col>
                </v-row>
                <br />
                <div class="title font-weight-black" style="color:#01579B">Yêu cầu</div>
                <v-divider></v-divider>
                <div>
                  <p>- Chủ động trong công việc.</p>
                  <p>- Từ 22-25 tuổi.</p>
                </div>
                <br />
                <div class="title font-weight-black" style="color:#01579B">Mô tả</div>
                <v-divider></v-divider>
                <div>
                  <p>- Tư vấn, giới thiệu, bán các sản phẩm mới do công ty sản xuất tới khách hàng (sẽ được đào tạo).</p>
                  <p>- Sắp xếp, trưng bày hàng hóa tại các khu vực phụ trách trong siêu thị.</p>
                  <p>- Tổ chức sampling cho khách hàng</p>
                  <p>- Chăm sóc khách hàng cũ qua điện thoại</p>
                  <p>- Chi tiết công việc sẽ được trao đổi cụ thể trong quá trình phỏng vấn.</p>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="pa-3" elevation="3">
            <v-btn class="mt-2" block color="pink" dark>Ứng tuyển ngay</v-btn>
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
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>Công ty SHPT</v-list-item-title>
                    <v-list-item-subtitle>Tên sự kiện abc</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>Công ty SHPT</v-list-item-title>
                    <v-list-item-subtitle>Tên sự kiện abc</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item>
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
export default {
  data: () => ({
    dialog: false,
    selected: [2],
    items: [
      {
        action: "15 min",
        headline: "Brunch this weekend?",
        title: "Ali Connors",
        subtitle:
          "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
      },
      {
        action: "2 hr",
        headline: "Summer BBQ",
        title: "me, Scrott, Jennifer",
        subtitle: "Wish I could come, but I'm out of town this weekend."
      },
      {
        action: "6 hr",
        headline: "Oui oui",
        title: "Sandra Adams",
        subtitle: "Do you have Paris recommendations? Have you ever been?"
      },
      {
        action: "12 hr",
        headline: "Birthday gift",
        title: "Trevor Hansen",
        subtitle:
          "Have any ideas about what we should get Heidi for her birthday?"
      },
      {
        action: "18hr",
        headline: "Recipe to try",
        title: "Britta Holt",
        subtitle:
          "We should eat this: Grate, Squash, Corn, and tomatillo Tacos."
      }
    ]
  })
};
</script>