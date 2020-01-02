<template>
  <v-container>
    <v-card>
      <br />
      <div
        class="display-1"
        align="center"
        justify="center"
        style="color:#34495e;"
      >Tạo sự kiện, việc làm bạn đang muốn tuyển dụng</div>

      <v-card-text>
        <v-form ref="form">
          <v-container>
            <v-row>
              <v-col cols="12" sm="8" md="8">
                <v-text-field
                  v-model="editedItem.userid"
                  label="Tên sự kiện"
                  :rules="[rules.required]"
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="4" md="4">
                <v-text-field
                  v-model="editedItem.userpass"
                  label="Tên công ty (hoặc người đại diện)"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="8" md="8">
                <v-text-field v-model="editedItem.username" label="Địa điểm tổ chức"></v-text-field>
              </v-col>

              <v-col cols="12" sm="4" md="4">
                <v-text-field v-model="editedItem.userpass" label="Email liên hệ"></v-text-field>
              </v-col>

              <v-col cols="12" sm="4" md="4">
                <v-text-field v-model="editedItem.userpass" label="Số lượng tuyển"></v-text-field>
              </v-col>

              <v-col cols="12" sm="4" md="4">
                <v-text-field  v-model="editedItem.userpass" label="Mức lương" suffix="VNĐ/1 giờ"></v-text-field>
              </v-col>

              <v-col cols="12" sm="4" md="4">
                <!-- <v-combobox
                v-model="editedItem.type"
                :items="['PG','PB','Quản lý']"
                label="Đối tượng tuyển"
                ></v-combobox>-->

                <v-combobox
                  v-model="editedItem.doituong"
                  :items="['PG','PB','Quản lý']"
                  label="Đối tượng cần tuyển"
                  multiple
                  small-chips
                >
                  <template v-slot:selection="data">
                    <v-chip
                      :key="JSON.stringify(data.item)"
                      v-bind="data.attrs"
                      :input-value="data.selected"
                      :disabled="data.disabled"
                      @click:close="data.parent.selectItem(data.item)"
                    >
                      <v-avatar
                        class="accent white--text"
                        left
                        v-text="data.item.slice(0, 1).toUpperCase()"
                      ></v-avatar>
                      {{ data.item }}
                    </v-chip>
                  </template>
                </v-combobox>
              </v-col>

              <v-col cols="12" sm="3" md="3">
                <v-menu
                  v-model="menudatebd"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="datebd" 
                      label="Ngày bắt đầu"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="datebd" @input="menudatebd = false"></v-date-picker>
                </v-menu>
              </v-col>
              <v-col cols="12" sm="3" md="3">
                <v-menu
                  v-model="menudatekt"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="datekt"
                      label="Ngày kết thúc"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="datekt" @input="menudatekt = false"></v-date-picker>
                </v-menu>
              </v-col>

              <v-col cols="12" sm="3" md="3">
                <v-text-field label="Thời gian bắt đầu"  value="08:00:00" type="time"></v-text-field>
              </v-col>
              <v-col cols="12" sm="3" md="3">
                <v-text-field label="Thời gian kết thúc" value="18:00:00" type="time"></v-text-field>
              </v-col>

              <v-col cols="12" sm="12" md="12">
                <v-textarea label="Mô tả công việc" auto-grow outlined></v-textarea>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-textarea label="Yêu cầu công việc" auto-grow outlined></v-textarea>
              </v-col>
              <v-col cols="12" sm="8" md="8">
                <v-checkbox label="Bạn có đồng ý với các điều khoản của chúng tôi" value="true"></v-checkbox>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-btn color="blue lighten-1" outlined text @click="submit">Đăng ngay</v-btn>
                <v-spacer></v-spacer>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card-text>

      <v-card-actions></v-card-actions>
    </v-card>
    <br />
    <br />
    <br />
    <div class="ma-10"></div>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  computed: {},

  data: () => ({
    menudatekt: false,
    datebd: new Date().toISOString().substr(0, 10),
    datekt: new Date().toISOString().substr(0, 10),
    menudatebd: false,


    rules: {
      required: value => !!value || "Required."
    },

    editedItem: {
      tensukien: "",
      tencongty: "",
      diadiem: "",
      email: "",
      soluongtuyen: "",
      mucluong: "",
      doituong: [],
      ngaybatdau: "",
      ngayketthuc: "",
      thoigianbatdau: "",
      thoigianketthuc: "",
      mota: "",
      yeucau: ""
    }
  }),

  computed: {},

  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        //ham save o day
        var today = new Date().toISOString().substr(0, 10);
        // this.edit_item.ngaytao = today.getDate() +"/"+today.getMonth() +"/"+ today.getFullYear();
        // this.editedItem.ngaytao = today;
        console.log(this.datebd);
        console.log(this.timekt);
        var temp = {
          thongtinchung: null,
          nguoitao: {},
          dsapply: [],
          trangthai: "chờ duyệt",
          type: "bình thường",
          mid: "id001",
          duyet: false,
          ngaytao: today
        };

        temp.nguoitao = this.$store.state.cur_userdb;
        temp.thongtinchung = this.editedItem;

        // axios
        //   .post(`http://localhost:5000/api/event/`, temp, {
        //     headers: {
        //       "content-type": "application/json"
        //     }
        //   })
        //   .then(response => {
        //     console.log(response.data.confirmation);
        //     if (response.data.confirmation == "add success") {
        //       this.$dialog
        //         .alert("Thêm thành công!", { okText: "Tiếp tục" })
        //         .then(function(dialog) {});
        //       // this.reload();
        //       return true;
        //     } else {
        //       this.$dialog
        //         .alert("Thêm thất bại!", { okText: "Tiếp tục" })
        //         .then(function(dialog) {});
        //       return false;
        //     }
        //   })
        //   .catch(e => {
        //     this.$dialog
        //       .alert("Thêm thất bại!", { okText: "Tiếp tục" })
        //       .then(function(dialog) {});
        //     console.log(e);
        //     return false;
        //   });
      }
    }
  }
};
</script>