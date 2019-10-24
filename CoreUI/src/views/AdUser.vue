<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col lg="8">
        <b-button @click="showpop" type="reset" size="lg" variant="info">
          <i class="fa fa-user-plus"></i> Thêm mới
        </b-button>
      </b-col>
    </b-row>
    <br />
    <b-row>
      <b-col lg="8">
        <c-table
          @row-clicked="chondong"
          :table-data="posts.data"
          :fields="fields"
          caption="<i class='fa fa-align-justify'></i> Danh sách tài khoản"
        ></c-table>
      </b-col>
      <b-col lg="4">
        <b-card>
          <div slot="header">
            <strong>Thông tin {{this.cur_user.username}}</strong>
          </div>
          <b-form action="/haha" target="_blank" method="GET">
            <b-form-group validated label="UserID" label-for="userid" description="Nhập UserID.">
              <b-form-input
                id="userid"
                type="text"
                v-model="cur_user.userid"
                placeholder="UserID.."
                required
                autocomplete="userid"
              ></b-form-input>
            </b-form-group>
            <b-form-group
              validated
              label="UserName"
              label-for="username"
              description="Nhập UserName."
            >
              <b-form-input
                id="username"
                type="text"
                v-model="cur_user.username"
                placeholder="UserName.."
                required
                autocomplete="username"
              ></b-form-input>
            </b-form-group>

            <b-form-group validated label="Type" label-for="type" description="Nhập Type.">
              <b-form-input
                id="type"
                type="text"
                v-model="cur_user.type"
                placeholder="Type.."
                required
                autocomplete="Type"
              ></b-form-input>
            </b-form-group>

            <div slot="footer">
              <b-button size="lg" variant="success" @click="capnhat">
                <i class="icon-check"></i> Cập nhật
              </b-button>
              <b-button style="margin:10px" size="lg" variant="danger" @click="xoa">
                <i class="fa fa-user-times"></i> Xóa
              </b-button>
            </div>
          </b-form>
        </b-card>
      </b-col>
    </b-row>

    <transition name="modal" padding-top:10%;>
      <div
        v-show="show"
        class="divmodal"
        @click="tatform"
        style="position: fixed;
  z-index: 9998;
  padding:50px;
  top: 0;
  left :0;
  width: 100%;
  height :100%;
  background-color: rgba(0, 0, 0, .5);
  display: block;
  opacity: .3s;"
      >
        <b-card style="
        margin:auto;
        max-width:600px">
          <div slot="header">
            <strong>Thêm mới {{this.cur_user.username}}</strong>
          </div>
          <b-form id="myform" action="/" method="GET">
            <b-form-group validated label="UserID" label-for="userid" description="Nhập UserID.">
              <b-form-input
                id="userid"
                name="userid"
                type="text"
                v-model="cur_user.userid"
                placeholder="UserID.."
                required
                autocomplete="userid"
              ></b-form-input>
            </b-form-group>
            <b-form-group
              validated
              label="UserName"
              label-for="username"
              description="Nhập UserName."
            >
              <b-form-input
                id="username"
                name="username"
                type="text"
                v-model="cur_user.username"
                placeholder="UserName.."
                required
                autocomplete="username"
              ></b-form-input>
            </b-form-group>

            <b-form-group validated label="Password" label-for="pass" description="Nhập Pass.">
              <b-form-input
                id="pass"
                name="userpass"
                type="password"
                v-model="cur_user.userpass"
                placeholder="Pass.."
                required
                autocomplete="Pass"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              validated
              label="RePassword"
              label-for="repass"
              description="Nhập lại Pass."
            >
              <b-form-input
                id="rerepass"
                type="password"
                placeholder="RePass.."
                required
                autocomplete="Pass"
              ></b-form-input>
            </b-form-group>

            <b-form-group validated label="Type" label-for="type" description="Nhập Type.">
              <b-form-input
                id="type"
                name="type"
                type="text"
                v-model="cur_user.type"
                placeholder="Type.."
                required
                autocomplete="Type"
              ></b-form-input>
            </b-form-group>

            <div slot="footer">
              <b-button size="lg" variant="success" @click="themmoi">
                <i class="fa fa-check-circle"></i> Chấp nhận
              </b-button>
              <b-button style="margin:10px" size="lg" variant="danger" @click="tatform">
                <i class="fa fa-times-circle"></i> Thoát
              </b-button>
            </div>
          </b-form>
        </b-card>
      </div>
    </transition>
  </div>
</template>

<script>
//binh

import cTable from "./base/Table";

import axios from "axios";

import Vue from "vue";
import VuejsDialog from "vuejs-dialog";
import VuejsDialogMixin from "vuejs-dialog/dist/vuejs-dialog-mixin.min.js"; // only needed in custom components
import "vuejs-dialog/dist/vuejs-dialog.min.css";
Vue.use(VuejsDialog);

export default {
  name: "AdUser",
  components: { cTable },
  data: () => {
    return {
      fields: [
        { key: "_id", label: "ID" },
        { key: "userid", label: "Userid", sortable: true },
        { key: "username", label: "Username", sortable: true },
        { key: "type", label: "Type", sortable: true }
      ],
      posts: [],
      errors: [],
      cur_user: [],
      show: true
    };
  },
  methods: {
    chondong(row) {
      this.cur_user = { ...row };
    },
    resetform() {
      this.cur_user._id = "";
      this.cur_user.userid = "";
      this.cur_user.username = "";
      this.cur_user.userpass = "";
      this.cur_user.type = "";
    },
    showpop() {
      if (this.show == true) this.show = false;
      else this.show = true;

      this.resetform();
    },
    tatform(e) {
      //console.log(e.target.nodeName);
      if (e.target.nodeName == "BUTTON") this.show = false;
      if (e.target.className == "divmodal") this.show = false;
    },
    reload() {
      axios
        .get(`http://localhost:5000/api/user`)
        .then(response => {
          this.posts = response.data;
        })
        .catch(e => {
          this.errors.push(e);
        });
    },
    capnhat() {
      console.log("----------------------------------------------------");
      console.log(this.cur_user);
      axios
        .post(
          `http://localhost:5000/api/user/update/` + this.cur_user._id,
          this.cur_user,
          {
            headers: {
              "content-type": "application/json"
            }
          }
        )
        .then(response => {
          console.log(response.data);
          this.reload();
       
          this.$dialog.alert("Cập nhật thành công!",{okText: "Tiếp tục"}).then(function(dialog) {});
        })
        .catch(e => {
          console.log(e);
          this.$dialog.alert("Cập nhật KHÔNG thành công!",{okText: "Tiếp tục"}).then(function(dialog) {});
        });

      this.reload();
    },
    themmoi() {
      console.log("----------------------------------------------------");

      var temp = {
        userid: this.cur_user.userid,
        username: this.cur_user.username,
        userpass: this.cur_user.userpass,
        type: this.cur_user.type
      };
      console.log(temp);
      axios
        .post(`http://localhost:5000/api/user/`, temp, {
          headers: {
            "content-type": "application/json"
          }
        })
        .then(response => {
          console.log(response.data);
          this.show = false;
          this.reload();
        })
        .catch(e => {
          console.log(e);
        });

      this.reload();
    },
    async xoa() {
      var dongy = false;
      await this.$dialog
        .confirm("Bạn có muốn xóa user " + this.cur_user.username + " ?")
        .then(function(e) {
          console.log("Clicked on OK");
          dongy = true;
        })
        .catch(function() {
          console.log("Clicked on cancel");
        });
      if (dongy) {
        axios
          .get(`http://localhost:5000/api/user/remove?id=` + this.cur_user._id)
          .then(response => {
            console.log(response.data);
            this.resetform();
            this.reload();
          })
          .catch(e => {
            console.log(e);
          });
      }
    }
  },

  mounted() {
    this.reload();
    this.show = false;
  }
};

//form modal
</script>
