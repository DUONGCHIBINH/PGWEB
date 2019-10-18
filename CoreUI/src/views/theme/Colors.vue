<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col lg="8">
        <c-table
          :rowClicked="rowclick"
          :table-data="posts.data"
          :fields="fields"
          caption="<i class='fa fa-align-justify'></i> Danh sách tài khoản"
        ></c-table>
      </b-col>
      <b-col lg="4">
        <b-card>
          <div slot="header">
            <strong>Thông tin</strong> 
          </div>
          <b-form action="goole.com">
            <b-form-group validated label="UserID" label-for="userid" description="Nhập UserID.">
              <b-form-input
                id="userid"
                type="text"
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
                placeholder="UserName.."
                required
                autocomplete="username"
              ></b-form-input>
            </b-form-group>
          
          
            <b-form-group
              validated
              label="Type"
              label-for="userpass"
              description="Nhập Type."
            >
              <b-form-input
                id="type"
                type="text"
                placeholder="Type.."
                required
                autocomplete="type"
              ></b-form-input>
            </b-form-group>
            <div slot="footer">
              <b-button type="submit" size="sm" variant="primary">
                <i class="fa fa-dot-circle-o"></i> Chấp nhận
              </b-button>
              <b-button type="reset" size="sm" variant="danger">
                <i class="fa fa-ban"></i> Reset
              </b-button>
            </div>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import ColorTheme from "./ColorTheme";

//binh

import cTable from "../base/Table";

import axios from 'axios';


export default {
  name: "colors",
  components: { cTable, ColorTheme },
  data: () => {
    return {
      fields: [
        { key: "_id", label: "ID"},
      { key: "userid", label: "Userid", sortable: true },
      { key: "username", label: "Username", sortable: true },
      { key: "type", label: "Type", sortable: true },
      ],
      posts: [],
      errors: []
    };
  },
  methods: {
    rowclick(row){
      console.log('123'+row);
    }
  },
  

  mounted(){
    axios.get(`http://localhost:5000/api/user`)
    .then(response => {
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }

};


</script>
