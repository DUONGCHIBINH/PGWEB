<template>
  <v-container>
    <v-card>
      <v-container>
        <v-form ref="form1" v-model="formval" lazy-validation>
          <v-container>
            <v-col>
              <div
                class="display-1"
                align="center"
                justify="center"
                style="color:#34495e;"
              >Tạo sự kiện, việc làm bạn đang muốn tuyển dụng</div>

              <v-row>
                <v-col cols="8">
                  <v-text-field
                    v-model="edit_item.ten"
                    :rules="[v => !!v || 'Vui lòng nhập']"
                    :counter="200"
                    label="Nhập tên sự kiện"
                    required
                  ></v-text-field>
                </v-col>
                <v-col  cols="4">
                  <v-text-field
                    v-model="edit_item.diadiem"
                    :rules="[v => !!v || 'Vui lòng nhập']"
                    :counter="200"
                    label="Địa điểm tổ chức"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-text-field
                    v-model="name_company"
                    :rules="[v => !!v || 'Vui lòng nhập']"
                    :counter="200"
                    label="Tên Công ty đại diện"
                    required
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="email"
                    :rules="[v => !!v || 'Vui lòng nhập']"
                    label="E-mail"
                    required
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-menu
                    ref="menu"
                    v-model="menu"
                    :close-on-content-click="false"
                    :return-value.sync="date"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="edit_item.ngaydienra"
                        label="Chọn ngày tổ chức sự kiện"
                        :rules="[v => !!v || 'Vui lòng nhập']"
                        prepend-icon
                        readonly
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="edit_item.ngaydienra" no-title scrollable>
                      <v-spacer></v-spacer>
                      <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                      <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                    </v-date-picker>
                  </v-menu>
                </v-col>
              </v-row>

              <v-row>
                <v-col></v-col>
                <v-col></v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-select
                    v-model="type_bg"
                    :items="number"
                    :rules="[v => !!v || 'Vui lòng nhập']"
                    label="Chọn số lượng PG/PB bạn cần"
                    required
                  ></v-select>
                </v-col>
                <v-col>
                  <v-select
                    v-model="select"
                    :items="salary"
                    :rules="[v => !!v || 'Vui lòng nhập']"
                    label="Chọn mức lương bạn trả cho 1h"
                    required
                  ></v-select>
                </v-col>
                <v-col>
                  <v-select
                    v-model="count_bg"
                    :items="items"
                    :rules="[v => !!v || 'Vui lòng nhập']"
                    label="Chọn loại PG/PB bạn cần"
                    required
                  ></v-select>
                </v-col>
              </v-row>

              <v-textarea
                outlined
                v-model="description"
                :counter="500"
                label="Mô tả về sự kiện"
                :rules="[v => !!v || 'Vui lòng nhập']"
                required
              ></v-textarea>

              <v-checkbox
                v-model="checkbox"
                :rules="[v => !!v || 'Đồng ý để tiếp tục!']"
                label="Bạn có đồng ý với các điều khoản của chúng tôi"
                required
              ></v-checkbox>

              <v-btn class="mr-4" @click="submit" color="primary">Tạo mới</v-btn>
              <v-btn @click="clear">Xóa</v-btn>
            </v-col>
          </v-container>
        </v-form>
      </v-container>
    </v-card>
    <br />
    <br />
    <br />
    <div class="ma-10"></div>
  </v-container>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";

import axios from "axios";
export default {
  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date);
    }
  },


  //scrip cho calendar
  // date: () => ({
  //   date: new Date().toISOString().substr(0, 10),
  //   menu: false,
  //   modal: false,
  //   menu2: false,
  // }),

  data: () => ({

    formval: false,
    edit_item: {
      type: "",
      mid: "",
      ten: "",
      diadiem: "",
      mieutacv: "",
      ngaydienra: "",
      ngaytao: null,
      loai: "",
      congty: "",
      soluongtuyen: "",
      trangthai: "",
      mucluong: "",
      duyet: ""
    },

    name: "",
    email: "",
    type_bg: null,
    count_bg: null,
    items: ["PG/PB loại 1", "PG/PB loại 2", "PG/PB loại 3"],
    number: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20
    ],
    salary: [50000, 100000, 150000, 200000],
    checkbox: false
  }),



  computed: {
    checkboxErrors() {
      const errors = [];
      if (!this.$v.checkbox.$dirty) return errors;
      !this.$v.checkbox.checked && errors.push("Vui lòng chọn đồng ý để tiếp tục");
      return errors;
    },
    selectErrors() {
      const errors = [];
      if (!this.$v.select.$dirty) return errors;
      !this.$v.select.required && errors.push("Mục này không được để trống");
      return errors;
    },
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Name must be at most 10 characters long");
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
    name_eventErrors() {
      const errors = [];
      if (!this.$v.name_event.$dirty) return errors;
      !this.$v.name_event.maxLength &&
        errors.push("Không dài quá 200 kí tự");
      !this.$v.name_event.required && errors.push("Mục này không được để trống");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Vui lòng nhập đúng Email");
      !this.$v.email.required && errors.push("E-mail không được để trống");
      return errors;
    }
  },

  methods: {
    submit() {
      if (this.$refs.form1.validate()) {
        //ham save o day
        var today= new Date();
       // this.edit_item.ngaytao = today.getDate() +"/"+today.getMonth() +"/"+ today.getFullYear(); 
       this.edit_item.ngaytao = today;
        console.log(this.editedItem);
        axios
          .post(`http://localhost:5000/api/event/`, this.edit_item, {
            headers: {
              "content-type": "application/json"
            }
          })
          .then(response => {
            console.log(response.data.confirmation);
            if (response.data.confirmation == "add success") {
              this.$dialog
                .alert("Thêm thành công!", { okText: "Tiếp tục" })
                .then(function(dialog) {});
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
    clear() {
      this.$v.$reset();
      this.name_event = "";
      this.location = "";
      this.name_company = "";
      this.description = "";
      this.name = "";
      this.email = "";
      this.select = null;
      this.count_bg = null;
      this.type_bg = null;
      this.date = null;
      this.checkbox = false;
    }
  }
};
</script>