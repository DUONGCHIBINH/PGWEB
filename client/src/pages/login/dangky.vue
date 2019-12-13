<template>
  <v-container>
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1">Bạn là ai</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="e1 > 2" step="2">Thông tin cơ bản</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="3">Điều khoản</v-stepper-step>
      </v-stepper-header>
      <v-stepper-items>
        <v-stepper-content step="1">
          <b-container class="p-0">
            <v-item-group v-model="usertype">
              <v-container>
                <v-row>
                  <v-col v-for="n in listtype" :key="n" cols="12" md="3">
                    <v-item v-slot:default="{ active, toggle }">
                      <v-card
                        elevation="5"
                        class="nentrangfocus"
                        color="white"
                        style="padding-top:10px;"
                        dark
                        @click="toggle"
                      >
                        <v-img contain height="200" :src="n.ima"></v-img>

                        <v-card-title>
                          <span class="title text--primary">{{n.name}}</span>
                        </v-card-title>
                        <v-card-subtitle class="text--primary">{{n.cap}}</v-card-subtitle>

                        <v-card-actions>
                          <v-btn v-if="active" block color="secondary" dark>Đã chọn {{n.name}}</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-item>
                  </v-col>
                </v-row>
                <!-- <v-row>
                    <v-spacer></v-spacer>
                          <v-chip v-if="usertype!=null" class="ma-1" color="pink" label text-color="white">
                            <v-icon left>mdi-label</v-icon>Xin chào {{listtype[usertype].name}} mới!
                          </v-chip>
                           <v-spacer></v-spacer>
                </v-row>-->
              </v-container>
            </v-item-group>
          </b-container>
          <v-row>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              :disabled="usertype!=null ? disabled : ''"
              @click="e1 = 2"
            >Tiếp theo</v-btn>
            <v-spacer></v-spacer>
          </v-row>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-row>
            <v-col></v-col>
            <v-col cols="12" md="6">
              <v-form ref="form" v-model="formval">
                <v-text-field
                  v-model="user.name"
                  :counter="60"
                  :rules="nameRules"
                  label="Họ và tên"
                  required
                ></v-text-field>

                <v-text-field
                  label="Số điện thoại"
                  :rules="[v => !!v || 'Vui lòng nhập']"
                  v-model="user.phone"
                  required
                ></v-text-field>
                <v-text-field disabled v-model="user.email" label="Email"></v-text-field>
                <v-select
                  v-model="user.gioitinh"
                  :items="['Nam','Nữ']"
                  :rules="[v => !!v || 'Vui lòng nhập']"
                  label="Giới tính"
                  required
                ></v-select>
              </v-form>
            </v-col>
            <v-col></v-col>
          </v-row>
          <v-row>
            <v-spacer></v-spacer>
            <v-btn text @click="e1 = 1">Quay lại</v-btn>
            <v-btn color="primary" @click="validatethongtin">Tiếp theo</v-btn>
            <v-spacer></v-spacer>
          </v-row>
        </v-stepper-content>

        <v-stepper-content step="3">
          <v-row>
            <v-col></v-col>
            <v-col cols="12" md="10">
              <v-form ref="formdieukhoan" v-model="valid" lazy-validation>
                <v-card>
                  <v-card-title>A. Thỏa thuận sử dụng chung</v-card-title>
                  <v-card-text
                    class="text--primary"
                  >Bạn vui lòng đọc kỹ các Điều khoản & Điều kiện này trước khi truy nhập và sử dụng dịch vụ trên website. Bằng việc sử dụng dịch vụ của chúng tôi có nghĩa là bạn chấp thuận Điều Khoản & Điều Kiện này, bạn đồng ý bị ràng buộc bởi các quy định về sử dụng Dịch vụ trên Website.</v-card-text>
                  <v-card-title>B. Quyền và trách nhiệm của Người sử dụng</v-card-title>
                  <v-card-text class="text--primary">
                    <p>Người sử dụng đều đồng ý không dùng trang web vì bất kỳ những điều dưới đây:</p>
                    <p>• Đăng tài liệu vi phạm bất kỳ quy định pháp luật hiện hành nào.</p>
                    <p>• Đăng tài liệu theo cách thức có thể xâm phạm đến bản quyền, thương hiệu, bí mật thương mại hoặc quyền sở hữu trí tuệ của người khác hay xâm phạm đến sự bảo mật, danh tiếng, hoặc quyền cá nhân của người khác.</p>
                    <p>• Đăng bất cứ thông tin tiểu sử hoặc thông tin nào không đầy đủ, giả mạo hoặc không chính xác, không phải là hồ sơ chính xác.</p>
                  </v-card-text>
                </v-card>

                <v-checkbox
                  v-model="checkbox"
                  :rules="[v => !!v || 'Đồng ý để tiếp tục!']"
                  label="Tôi đồng ý với những điều khoản trên"
                  required
                ></v-checkbox>
              </v-form>
            </v-col>
            <v-col></v-col>
          </v-row>
          <v-row>
            <v-spacer></v-spacer>
            <v-btn text @click="e1 = 2">Quay lại</v-btn>
            <v-btn color="primary" @click="validate">Hoàn thành</v-btn>
            <v-spacer></v-spacer>
          </v-row>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
    <div style="margin-top: 125px;"></div>
  </v-container>
</template>
<script>
import axios from "axios";

export default {
  data: () => ({
    e1: 1,
    nameRules: [
      v => !!v || "Name is required"
      // v => v.length <= 60 || "Name must be less than 10 characters"
    ],
    formval: false,
    user: [{ name: "" }, { phone: "" }, { gioitinh: "" }, { email: "" }],

    usertype: null,
    listtype: [
      {
        name: "PG",
        cap: "Promotion Girl",
        ima: require("../../assets/dangky/pg.png")
      },
      {
        name: "PB",
        cap: "Promotion Girl",
        ima: require("../../assets/dangky/pb1.png")
      },
      {
        name: "Quản lý",
        cap: "Promotion Girl",
        ima: require("../../assets/dangky/quanly2.png")
      },
      {
        name: "Nhà tuyển dụng",
        cap: "Promotion Girl",
        ima: require("../../assets/dangky/congty1.png")
      }
    ],
    editedItem: {
      userid: "",
      username: "",
      email: "",
      hoten: "",
      sdt: "",
      gioitinh: "",
      type: ""
    },
   
  }),
  
  mounted() {
    this.reload();
  },
  methods: {
    reload() {
      axios
        .get(
          `http://localhost:5000/api/user?email=` +
            this.$store.state.cur_user.email
        )
        .then(response => {
          if (response.data.data.length == 1) {
            this.$router.push({ path: "/home" });
          }
        })
        .catch(e => {
          this.errors.push(e);
        });

      this.user.name = this.$store.state.cur_user.name;
      this.user.email = this.$store.state.cur_user.email;
    },
    validate() {
      if (this.$refs.formdieukhoan.validate()) {
       
        this.editedItem.hoten = this.user.name;
          this.editedItem.sdt = this.user.phone;
             this.editedItem.gioitinh = this.user.gioitinh;
                this.editedItem.email = this.user.email;
                   this.editedItem.type = this.usertype;
        axios
          .post(`http://localhost:5000/api/user/`, this.editedItem, {
            headers: {
              "content-type": "application/json"
            }
          })
          .then(response => {
            console.log(response.data.confirmation);
            if (response.data.confirmation == "add success") {
              this.$dialog
                .alert("Đăng ký thành công!", { okText: "Tiếp tục" })
                .then(function(dialog) {                   
                });
            this.$router.push({ path: "/home" });
            //  this.reload();
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
    validatethongtin() {
      if (this.$refs.form.validate()) {
        this.e1 = 3;
      }
    }
  }
};
</script>
<style>
.nentrangfocus:focus {
  background-color: white;
}
</style>