<template>
  <v-data-table :headers="headers" :items="desserts" class="elevation-1">
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>Danh mục người dùng</v-toolbar-title>
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
                    <v-text-field v-model="editedItem.userid" label="ID"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field v-model="editedItem.username" label="Name"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field v-model="editedItem.userpass" label="Pass"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-combobox v-model="editedItem.type" :items="user_types" label="Loại user"></v-combobox>
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
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>
  </v-data-table>
</template>
<script>
import axios from "axios";

export default {
  data: () => ({
    users: [],
    dialog: false,
    headers: [
      {
        text: "ID",
        align: "left",
        value: "_id"
      },
      {
        text: "User ID",
        align: "left",
        value: "userid"
      },
      { text: "User Name", value: "username" },
      {
        text: "Type",
        align: "left",
        value: "type"
      },
      { text: "Actions", value: "action" }
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      userid: "",
      username: "",
      userpass: "",
      type: ""
    },
    defaultItem: {
      userid: "",
      username: "",
      userpass: "",
      type: ""
    },
    user_types: ["Admin", "User", "PB", "PG", "Quản lý", "Nhà tuyển dụng"]
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
    this.initialize();
  },
  mounted() {
    this.reload();
  },
  methods: {
    reload() {
      axios
        .get(`http://localhost:5000/api/user`)
        .then(response => {
          this.users = response.data;
          this.desserts = response.data.data;
        })
        .catch(e => {
          this.errors.push(e);
        });
    },
    initialize() {},

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.desserts.indexOf(item);
      if (confirm("Bạn có chắc muốn xóa dòng này?"))
        this.desserts.splice(index, 1);
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
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.themmoi();
         this.close();
    
    },
    themmoi() {
      console.log("----------------------------------------------------");
      if (this.editedItem.userid == '') {
        console.log("userid null");
        return;
      }
      console.log(this.editedItem);
      axios
        .post(`http://localhost:5000/api/user/`, this.editedItem, {
          headers: {
            "content-type": "application/json"
          }
        })
        .then(response => {
          console.log(response.data.confirmation);
          if(response.data.confirmation =='add success')
          {
            alert('Thêm thành công!');
            return true;
          }
          else {alert('Thêm KHÔNG thành công!');return false;}
        })
        .catch(e => {
          alert('Thêm KHÔNG thành công!');
          console.log(e);
          return false;
        });
    }
  }
};
</script>