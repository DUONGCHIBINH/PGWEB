<template>
  <div>
    <b-container>
      <b-row class="mb-4">
        <b-col cols="4" class="text-center">
          <v-avatar size="150">
            <img
              src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t34.0-12/16176889_112685309244626_578204711_n.jpg?_nc_cat=1&_nc_oc=AQkcPteDHtjHzJNGiL76rRGYmVMa7U-_khRzk0Vk-zeJd-Wqe2pqNuXhwtkHYfGR846-e6bBT5MbS0t29DmAKnjk&_nc_ht=scontent.fsgn5-5.fna&oh=981053b18a347d6ec0c2b4561370a76d&oe=5DCB8E28"
              alt="John"
            />
          </v-avatar>
        </b-col>
        <b-col>
          <!-- style="background-color:blue" -->
          <b-row align-v="center" align-h="start">
            <b-col sm="*">
              <div class="font-weight-light display-1">Dương Chí Bình</div>
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
          </b-row>

          <b-row align-v="center" align-h="start">
            <b-col sm="*">
              <div class="font-weight-regular subtitle-1 mr-5">
                <b>23</b> sự kiện
              </div>
            </b-col>
            <b-col sm="*">
              <div class="font-weight-regular subtitle-1 mr-5">
                <b>420</b> lượt mua
              </div>
            </b-col>
            <b-col sm="*">
              <div class="font-weight-regular subtitle-1 mr-5">
                <b>730</b> theo dõi
              </div>
            </b-col>
          </b-row>
          <br />
          <b-row align-v="center" align-h="start">
            <b-col sm="*">
              <div class="font-weight-regular subtitle-1 mr-5">
                Làm việc tại:
                <b>Học viện hàng không</b>
              </div>
            </b-col>
          </b-row>
          <b-row align-v="center" align-h="start">
            <b-col sm="*">
              <div class="font-weight-regular subtitle-1 mr-5">
                Ngày sinh:
                <b>15/7/1996</b>
              </div>
            </b-col>
          </b-row>
          <b-row align-v="center" align-h="start">
            <b-col sm="*">
              <div class="font-weight-regular subtitle-1 mr-5">
                Sống tại:
                <b>Q.8 Tp.HCM</b>
              </div>
            </b-col>
          </b-row>
          <b-row align-v="center" align-h="start">
            <b-col sm="*">
              <div class="font-weight-regular subtitle-1 mr-5">
                Đến từ:
                <b>Lâm Đồng</b>
              </div>
            </b-col>
          </b-row>

          <b-row align-v="center" align-h="start">
            <b-col sm="*">
              <div class="font-weight-regular subtitle-1 mr-5">
                Đã tham gia từ:
                <b>11/11/2019</b>
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
                      <h4>Tiêu đề sự kiện</h4>
                      <p>Miêu tả chi tiết sự kiện diễn ra</p>
                      <p
                        class="mb-0"
                      >Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio.</p>
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
                      <p>Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.</p>

                      <p>Suspendisse feugiat. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In hac habitasse platea dictumst. Fusce ac felis sit amet ligula pharetra condimentum.</p>

                      <p>Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Nam commodo suscipit quam. In consectetuer turpis ut velit. Sed cursus turpis vitae tortor. Aliquam eu nunc.</p>

                      <p>Etiam ut purus mattis mauris sodales aliquam. Ut varius tincidunt libero. Aenean viverra rhoncus pede. Duis leo. Fusce fermentum odio nec arcu.</p>

                      <p
                        class="mb-0"
                      >Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.</p>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card flat>
                    <v-card-text>
                      <p>Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.</p>

                      <p
                        class="mb-0"
                      >Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.</p>
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
        </v-tabs-items>
      </v-card>

      <div style="margin-bottom:150px"></div>
    </b-container>
  </div>
</template>


<script>
export default {
  data() {
    return {
      tab: null,
      items: ["Sự kiện đã tham gia", "Hình ảnh", "Thông tin"],
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    };
  }
};
</script>
