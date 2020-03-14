<template>
  <v-data-table :headers="headers" :items="desserts" class="elevation-1">
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>Danh mục sự kiện</v-toolbar-title>
        <v-divider class="mx-6" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="800px">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark class="mb-2" v-on="on">Thêm mới</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field v-model="editedItem.eventid" label="ID"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field v-model="editedItem.eventname" label="Name"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field v-model="editedItem.eventpass" label="Pass"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-combobox v-model="editedItem.type" :items="event_types" label="Loại event"></v-combobox>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>

    <template v-slot:item.action="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
      <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Thêm mới</v-btn>
    </template>
  </v-data-table>
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
      { text: "Ngày bắt đầu", value: "ngaybatdau" },

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
      axios
        .get(`http://localhost:5000/api/event`)
        .then(response => {
          this.events = response.data;
          this.desserts = response.data.data;
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
    }
  }
};
</script>