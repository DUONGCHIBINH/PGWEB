<template>
  <v-tabs fixed-tabs>
    <v-tab>Đang hoạt động ({{pgs.length}})</v-tab>
    <v-tab>Ngừng cấp phép ({{pgs_block.length}})</v-tab>
    <v-tab-item>
      <v-data-table :headers="headers" :items="pgs" class="elevation-1">
        <template v-slot:item.action="{ item }">
          <!-- <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
          <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>-->
          <v-btn color="pink" @click="khoa(item)" dark>Khóa tài khoản</v-btn>
        </template>
        <template v-slot:no-data>
          <!-- <v-btn color="primary" @click="initialize">Thêm mới</v-btn> -->
          <h4>Không có dữ liệu hiển thị</h4>
        </template>
      </v-data-table>
    </v-tab-item>
    <v-tab-item>
      <v-data-table :headers="headers" :items="pgs_block" class="elevation-1">
        <template v-slot:item.action="{ item }">
          <!-- <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
          <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>-->
          <v-btn color="pink" @click="Mo(item)" dark>Khôi phục</v-btn>
        </template>
        <template v-slot:no-data>
          <!-- <v-btn color="primary" @click="initialize">Thêm mới</v-btn> -->
          <h4>Không có dữ liệu hiển thị</h4>
        </template>
      </v-data-table>
    </v-tab-item>
  </v-tabs>
</template>
<script>
import axios from "axios";

// import into project
import Vue from "vue";
import VuejsDialog from "vuejs-dialog";
import VuejsDialogMixin from "vuejs-dialog/dist/vuejs-dialog-mixin.min.js"; // only needed in custom components

// include the default style
import "vuejs-dialog/dist/vuejs-dialog.min.css";

// Tell Vue to install the plugin.
Vue.use(VuejsDialog);

export default {
  data: () => ({
    pgs: [],
    pgs_lọk: [],
    dialog: false,
    headers: [
      {
        text: "Email",
        align: "left",
        value: "email"
      },
      { text: "Ten", value: "ten" },
      { text: "loai", value: "loai" },
      // { text: "Số event", value: "sosukien" },
      // { text: "yêu thích", value: "soyeuthich" },
      // { text: "lượt mua", value: "soluotmua" },
      { text: "nơi làm việc", value: "noilamviec" },
      { text: "sống tại", value: "songtai" },
      { text: "Đến từ", value: "dentu" },
      { text: "ngày tham gia", value: "ngaythamgia" },
      { text: "Actions", value: "action" }
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      pgid: "",
      pgname: "",
      pgpass: "",
      type: ""
    },
    defaultItem: {
      pgid: "",
      pgname: "",
      pgpass: "",
      type: ""
    },
    pg_types: ["Admin", "pg", "PB", "PG", "Quản lý", "Nhà tuyển dụng"]
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Thêm mới" : "Cập nhật";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    // this.initialize();
  },
  mounted() {
    this.reload();
  },
  methods: {
    reload() {
      this.pgs = [];
      this.pgs_block = [];
      axios
        .get(`http://localhost:5000/api/pg`)
        .then(response => {
          this.desserts = response.data.data;
          this.pgs = this.desserts .filter(o => o.huy == false);
          this.pgs_block = this.desserts .filter(o => o.huy == true);
        })
        .catch(e => {
          this.errors.push(e);
        });
    },
    initialize() {
      this.dialog = true;
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    async deleteItem(item) {
      const index = this.desserts.indexOf(item);
      var dongy = false;
      await this.$dialog
        .confirm("Bạn có muốn xóa pg " + item.pgname + " ?", {
          okText: "Có"
        })
        .then(function(e) {
          console.log(item._id);
          dongy = true;
        })
        .catch(function() {
          console.log("Clicked on cancel");
        });
      if (dongy) {
        axios
          .get(`http://localhost:5000/api/pg/remove?id=` + item._id)
          .then(response => {
            console.log(response.data);
            if (response.data.confirmation == "remove success") {
              this.$dialog
                .alert("Xóa thành công!", { okText: "Tiếp tục" })
                .then(function(dialog) {});
              this.reload();
            } else
              this.$dialog
                .alert("Xóa thất bại!", { okText: "Tiếp tục" })
                .then(function(dialog) {});
          })
          .catch(e => {
            this.$dialog
              .alert("Xóa thất bại!", { okText: "Tiếp tục" })
              .then(function(dialog) {});
            console.log(e);
          });
      }
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 600);
    },

    async save() {
      if (this.editedIndex > -1) {
        // > -1 tương ứng với edit
        // Object.assign(this.desserts[this.editedIndex], this.editedItem);
        this.capnhat(this.editedItem);
      } //trường hợp này là add
      else {
        // this.desserts.push(this.editedItem);
        this.themmoi();
      }

      this.close();
    },
    capnhat(item) {
      axios
        .post(`http://localhost:5000/api/pg/update/` + item._id, item, {
          headers: {
            "content-type": "application/json"
          }
        })
        .then(response => {
          console.log(response.data);
          if (response.data.confirmation == "update success") {
            this.$dialog
              .alert("Cập nhật thành công!", { okText: "Tiếp tục" })
              .then(function(dialog) {});
            this.reload();
          } else
            this.$dialog
              .alert("Cập nhật thất bại!", { okText: "Tiếp tục" })
              .then(function(dialog) {});
        })
        .catch(e => {
          console.log(e);
          this.$dialog
            .alert("Cập nhật thất bại!", { okText: "Tiếp tục" })
            .then(function(dialog) {});
        });

      this.reload();
    },
    themmoi() {
      console.log("----------------------------------------------------");
      if (this.editedItem.pgid == "") {
        console.log("pgid null");
        return;
      }
      console.log(this.editedItem);
      axios
        .post(`http://localhost:5000/api/pg/`, this.editedItem, {
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
            this.reload();
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
    },
    khoa(item) {
      item.huy = true;
      axios
        .post("http://localhost:5000/api/pg/update/" + item._id, item, {
          headers: {
            "content-type": "application/json"
          }
        })
        .then(response => {
          console.log(response.data.confirmation);
          if (response.data.confirmation == "update success") {
            this.$dialog
              .alert("Khóa tài khoản thành công!", { okText: "Tiếp tục" })
              .then(function(dialog) {});
            this.reload();
          } else {
            this.$dialog
              .alert("Khóa tài khoản thất bại!", { okText: "Tiếp tục" })
              .then(function(dialog) {});
          }
        })
        .catch(e => {
          this.$dialog
            .alert("Khóa tài khoản thất bại!", { okText: "Tiếp tục" })
            .then(function(dialog) {});
          console.log(e);
        });
    },
    Mo(item) {
      item.huy = false;
      axios
        .post("http://localhost:5000/api/pg/update/" + item._id, item, {
          headers: {
            "content-type": "application/json"
          }
        })
        .then(response => {
          console.log(response.data.confirmation);
          if (response.data.confirmation == "update success") {
            this.$dialog
              .alert("Khôi phục tài khoản thành công!", { okText: "Tiếp tục" })
              .then(function(dialog) {});
            this.reload();
          } else {
            this.$dialog
              .alert("Khôi phục tài khoản thất bại!", { okText: "Tiếp tục" })
              .then(function(dialog) {});
          }
        })
        .catch(e => {
          this.$dialog
            .alert("Khôi phục tài khoản thất bại!", { okText: "Tiếp tục" })
            .then(function(dialog) {});
          console.log(e);
        });
    }
  }
};
</script>