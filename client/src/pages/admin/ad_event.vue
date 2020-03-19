  
<template>
  <v-tabs fixed-tabs>
    <v-tab>Đang chờ ({{events.length}})</v-tab>
    <v-tab>Đã duyệt ({{events_duyet.length}})</v-tab>
    <v-tab>Đã hủy ({{events_huy.length}})</v-tab>
    <v-tab-item>
      <v-data-table :headers="headers" :items="events" class="elevation-1">
        <template v-slot:item.action="{ item }">
          <!-- <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
          <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>-->

          <v-btn style=" margin-right: 3px;" color="success" @click="Duyet(item)" dark>Duyệt</v-btn>
          <v-btn color="grey darken-1" @click="Huy(item)" dark>Hủy</v-btn>
        </template>
        <template v-slot:no-data>
          <h4>Không có dữ liệu hiển thị</h4>
          <!-- <v-btn color="primary" @click="initialize">Thêm mới</v-btn> -->
        </template>
      </v-data-table>
    </v-tab-item>
    <v-tab-item>
      <v-data-table :headers="headers" :items="events_duyet" class="elevation-1">
        <template v-slot:item.action="{ item }">
          <!-- <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
          <v-icon small @click="deleteItem(item)">mdi-delete</v-icon> -->
          <v-btn style=" margin-right: 3px;" color="pink" @click="HuyDuyet(item)" dark>Bỏ Duyệt</v-btn>
          <v-btn color="grey darken-1" @click="Huy(item)" dark>Hủy</v-btn>
        </template>
        <template v-slot:no-data>
          <h4>Không có dữ liệu hiển thị</h4>
          <!-- <v-btn color="primary" @click="initialize">Thêm mới</v-btn> -->
        </template>
      </v-data-table>
    </v-tab-item>
    <v-tab-item>
      <v-data-table :headers="headers" :items="events_huy" class="elevation-1">
        <template v-slot:item.action="{ item }">
         <v-btn color="blue lighten-1" @click="BoHuy(item)" dark>Khôi phục</v-btn>
        </template>
        <template v-slot:no-data>
          <h4>Không có dữ liệu hiển thị</h4>
          <!-- <v-btn color="primary" @click="initialize">Thêm mới</v-btn> -->
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
    events: [],
    events_duyet: [],
    events_huy: [],
    dialog: false,
    headers: [
      // {
      //   text: "ID",
      //   align: "left",
      //   value: "_id"
      // },
      // {
      //   text: "Event ID",
      //   align: "left",
      //   value: "mid"
      // },
      { text: "Người tạo", value: "nguoitao" },
      { text: "Tên sự kiện", value: "tensukien" },
      { text: "Địa điểm", value: "diadiem" },
      { text: "Ngày tạo", value: "ngaytao" },
      // { text: "Ngày bắt đầu", value: "ngaybatdau" },
      { text: "Công ty", value: "tencongty" },

      { text: "Actions", value: "action" }
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      eventid: "",
      eventname: "",
      eventpass: "",
      type: ""
    },
    defaultItem: {
      eventid: "",
      eventname: "",
      eventpass: "",
      type: ""
    },
    event_types: ["Admin", "event", "PB", "PG", "Quản lý", "Nhà tuyển dụng"]
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
      this.events=[];
        this.events_duyet=[];
          this.events_huy=[];
          
      axios
        .get(`http://localhost:5000/api/event`)
        .then(response => {
          this.desserts = response.data.data;
          this.events = this.desserts.filter(
            o => o.duyet == false && o.huy == false
          );
          this.events_duyet = this.desserts.filter(
            o => o.duyet == true && o.huy == false
          );
          this.events_huy = this.desserts.filter(o => o.huy == true);
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
        .confirm("Bạn có muốn xóa event " + item.eventname + " ?", {
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
          .get(`http://localhost:5000/api/event/remove?id=` + item._id)
          .then(response => {
            console.log(response.data);
            if (response.data.confirmation == "success") {
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
        .post(`http://localhost:5000/api/event/update/` + item._id, item, {
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
      if (this.editedItem.eventid == "") {
        console.log("eventid null");
        return;
      }
      console.log(this.editedItem);
      axios
        .post(`http://localhost:5000/api/event/`, this.editedItem, {
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
    Duyet(item) {
 
      item.duyet = true;
      axios
        .post("http://localhost:5000/api/event/update/" + item._id, item, {
          headers: {
            "content-type": "application/json"
          }
        })
        .then(response => {
          console.log(response.data)
          if (response.data.confirmation == "update success") {
            this.$dialog
              .alert("Duyệt thành công!", { okText: "Tiếp tục" })
              .then(function(dialog) {});
            this.reload();
          } else {
            this.$dialog
              .alert("Duyệt thất bại!", { okText: "Tiếp tục" })
              .then(function(dialog) {});
          }
        })
        .catch(e => {
          this.$dialog
            .alert("Duyệt thất bại!", { okText: "Tiếp tục" })
            .then(function(dialog) {});
        });
    },
    HuyDuyet(item) {
 
      item.duyet = false;
      axios
        .post("http://localhost:5000/api/event/update/" + item._id, item, {
          headers: {
            "content-type": "application/json"
          }
        })
        .then(response => {
          console.log(response.data)
          if (response.data.confirmation == "update success") {
            this.$dialog
              .alert("Bỏ Duyệt thành công!", { okText: "Tiếp tục" })
              .then(function(dialog) {});
            this.reload();
          } else {
            this.$dialog
              .alert("Bỏ Duyệt thất bại!", { okText: "Tiếp tục" })
              .then(function(dialog) {});
          }
        })
        .catch(e => {
          this.$dialog
            .alert("Bỏ Duyệt thất bại!", { okText: "Tiếp tục" })
            .then(function(dialog) {});
        });
    },
    Huy(item) {
      item.huy = true;
      axios
        .post("http://localhost:5000/api/event/update/" + item._id, item, {
          headers: {
            "content-type": "application/json"
          }
        })
        .then(response => {
          if (response.data.confirmation == "update success") {
            this.$dialog
              .alert("Hủy thành công!", { okText: "Tiếp tục" })
              .then(function(dialog) {});
            this.reload();
          } else {
            this.$dialog
              .alert("Hủy thất bại!", { okText: "Tiếp tục" })
              .then(function(dialog) {});
          }
        })
        .catch(e => {
          this.$dialog
            .alert("Hủy thất bại!", { okText: "Tiếp tục" })
            .then(function(dialog) {});
        });
    },
     BoHuy(item) {
      item.huy = false;
      axios
        .post("http://localhost:5000/api/event/update/" + item._id, item, {
          headers: {
            "content-type": "application/json"
          }
        })
        .then(response => {
          if (response.data.confirmation == "update success") {
            this.$dialog
              .alert("Khôi phục thành công!", { okText: "Tiếp tục" })
              .then(function(dialog) {});
            this.reload();
          } else {
            this.$dialog
              .alert("Khôi phục thất bại!", { okText: "Tiếp tục" })
              .then(function(dialog) {});
          }
        })
        .catch(e => {
          this.$dialog
            .alert("Khôi phục thất bại!", { okText: "Tiếp tục" })
            .then(function(dialog) {});
        });
    }
  }
};
</script>