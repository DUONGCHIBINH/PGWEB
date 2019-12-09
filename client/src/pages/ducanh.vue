<template>
  <form>
  <div
          class="display-1"
          align="center"
          justify="center"
          style="color:#34495e;"
        >Tạo sự kiện, việc làm bạn đang muốn tuyển dụng</div>
    <v-text-field
      v-model="name"
      :error-messages="nameErrors"
      :counter="200"
      label="Nhập tên sự kiện"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="name"
      :error-messages="nameErrors"
      :counter="200"
      label="Địa điểm tổ chức"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="name"
      :error-messages="nameErrors"
      :counter="200"
      label="Mô tả về sự kiện"
      required  
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="name"
      :error-messages="nameErrors"
      :counter="200"
      label="Tên Công ty địa diện"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="email"
      :error-messages="emailErrors"
      label="E-mail"
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>
    <v-select
      v-model="select"
      :items="number"
      :error-messages="selectErrors"
      label="Chọn số lượng PG/PB bạn cần"
      required
      @change="$v.select.$touch()"
      @blur="$v.select.$touch()"
    ></v-select>
    <v-select
      v-model="select"
      :items="salary"
      :error-messages="selectErrors"
      label="Chọn mức lương bạn trả cho 1h"
      required
      @change="$v.select.$touch()"
      @blur="$v.select.$touch()"
    ></v-select>
    <v-select
      v-model="select"
      :items="items"
      :error-messages="selectErrors"
      label="Chọn loại PG/PB bạn cần"
      required
      @change="$v.select.$touch()"
      @blur="$v.select.$touch()"
    ></v-select>

    <v-row>
    <v-col cols="12" sm="6" md="4">
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
            prepend-icon=""
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

    <v-checkbox
      v-model="checkbox"
      :error-messages="checkboxErrors"
      label="Bạn có đồng ý với các điều khoản của chúng tôi"
      required
      @change="$v.checkbox.$touch()"
      @blur="$v.checkbox.$touch()"
    ></v-checkbox>

    <v-btn class="mr-4" @click="submit">submit</v-btn>
    <v-btn @click="clear">clear</v-btn>
  </form>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'

  export default {
    computed: {
      computedDateFormatted () {
        return this.formatDate(this.date)
      },
      
    },
    mixins: [validationMixin],

    validations: {
      name: { required, maxLength: maxLength(200) },
      email: { required, email },
      select: { required },
      checkbox: {
        checked (val) {
          return val
        },
      },
    },

    //scrip cho calendar
    // date: () => ({
    //   date: new Date().toISOString().substr(0, 10),
    //   menu: false,
    //   modal: false,
    //   menu2: false,
    // }),

    data: () => ({
      name: '',
      email: '',
      select: null,
      items: [
        'PG/PB loại 1',
        'PG/PB loại 2',
        'PG/PB loại 3'
      ],
      number:[
        1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20
      ],
      salary:[
        50000,100000,150000,200000
      ],
      checkbox: false,
    }),

    computed: {
      checkboxErrors () {
        const errors = []
        if (!this.$v.checkbox.$dirty) return errors
        !this.$v.checkbox.checked && errors.push('You must agree to continue!')
        return errors
      },
      selectErrors () {
        const errors = []
        if (!this.$v.select.$dirty) return errors
        !this.$v.select.required && errors.push('Item is required')
        return errors
      },
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
        !this.$v.name.required && errors.push('Name is required.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      },
    },

    methods: {
      submit () {
        this.$v.$touch()
      },
      clear () {
        this.$v.$reset()
        this.name = ''
        this.email = ''
        this.select = null
        this.checkbox = false
      },
    },
  }
  
</script>