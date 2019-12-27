<template >
  <v-container>
    <v-col>
      <v-row>
        <v-col cols="9">
          <v-card class="mx-auto pa-3" elevation="5">
            <v-row>
              <v-col cols="auto">
                <v-avatar color="blue-grey" size="150">
                  <span class="white--text headline">SHPT</span>
                </v-avatar>
              </v-col>
              <v-col>
                <h3>Tên sự kiện</h3>
                <h5>Công ty SHPT</h5>
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
        <v-col></v-col>
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


            <br>
            
            <v-card class="pa-3" elevation="3">
              <div class="title font-weight-black" style="color:#01579B">Công ty đang tuyển</div>
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
        
        </v-col>
      </v-row>
    </v-col>
    <div style="margin-bottom:150px"></div>
  </v-container>
</template>

<script>
export default {};
</script>