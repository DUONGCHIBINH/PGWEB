<template>
  <v-container>
    <v-card>
      <v-container>
        <form>
          <v-container>
            <v-col>
              <div
                class="display-1"
                align="center"
                justify="center"
                style="color:#34495e;"
              >Tạo sự kiện, việc làm bạn đang muốn tuyển dụng</div>

              <v-row>
                <v-col>
                  <v-text-field
                    v-model="name_event"
                    :error-messages="nameErrors"
                    :counter="200"
                    label="Nhập tên sự kiện"
                    required
                    @input="$v.name_event.$touch()"
                    @blur="$v.name_event.$touch()"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="location"
                    :error-messages="nameErrors"
                    :counter="200"
                    label="Địa điểm tổ chức"
                    required
                    @input="$v.location.$touch()"
                    @blur="$v.location.$touch()"
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-text-field
                    v-model="name_company"
                    :error-messages="nameErrors"
                    :counter="200"
                    label="Tên Công ty đại diện"
                    required
                    @input="$v.name_company.$touch()"
                    @blur="$v.name_company.$touch()"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="email"
                    :error-messages="emailErrors"
                    label="E-mail"
                    required
                    @input="$v.email.$touch()"
                    @blur="$v.email.$touch()"
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
                            v-model="date"
                            label="Chọn ngày tổ chức sự kiện"
                            prepend-icon
                            readonly
                            v-on="on"
                          ></v-text-field>
                        </template>
                        <v-date-picker v-model="date" no-title scrollable>
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
                    :error-messages="selectErrors"
                    label="Chọn số lượng PG/PB bạn cần"
                    required
                    @change="$v.type_bg.$touch()"
                    @blur="$v.type_bg.$touch()"
                  ></v-select>
                </v-col>
                <v-col>
                  <v-select
                    v-model="select"
                    :items="salary"
                    :error-messages="selectErrors"
                    label="Chọn mức lương bạn trả cho 1h"
                    required
                    @change="$v.select.$touch()"
                    @blur="$v.select.$touch()"
                  ></v-select>
                </v-col>
                <v-col>
                  <v-select
                    v-model="count_bg"
                    :items="items"
                    :error-messages="selectErrors"
                    label="Chọn loại PG/PB bạn cần"
                    required
                    @change="$v.count_bg.$touch()"
                    @blur="$v.count_bg.$touch()"
                  ></v-select>
                </v-col>
              </v-row>

              <v-textarea
                outlined
                v-model="description"
                :error-messages="nameErrors"
                :counter="500"
                label="Mô tả về sự kiện"
                required
                @input="$v.description.$touch()"
                @blur="$v.description.$touch()"
              ></v-textarea>

              <v-checkbox
                v-model="checkbox"
                :error-messages="checkboxErrors"
                label="Bạn có đồng ý với các điều khoản của chúng tôi"
                required
                @change="$v.checkbox.$touch()"
                @blur="$v.checkbox.$touch()"
              ></v-checkbox>

              <v-btn class="mr-4" @click="submit" color="primary">submit</v-btn>
              <v-btn @click="clear">clear</v-btn>
            </v-col>
          </v-container>
        </form>
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

export default {
  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date);
    }
  },
  mixins: [validationMixin],

  validations: {
    name_event: { required, maxLength: maxLength(200) },
    location: { required, maxLength: maxLength(300) },
    description: { required, maxLength: maxLength(200) },
    name_company: { required, maxLength: maxLength(200) },
    name: { required, maxLength: maxLength(200) },
    email: { required, email },
    select: { required },
    checkbox: {
      checked(val) {
        return val;
      }
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
      !this.$v.checkbox.checked && errors.push("You must agree to continue!");
      return errors;
    },
    selectErrors() {
      const errors = [];
      if (!this.$v.select.$dirty) return errors;
      !this.$v.select.required && errors.push("Item is required");
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
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    }
  },

  methods: {
    submit() {
      this.$v.$touch();
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
      this.checkbox = false;
    }
  }
};
</script>