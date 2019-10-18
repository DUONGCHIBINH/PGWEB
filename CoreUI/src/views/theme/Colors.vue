<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col lg="8">
        <c-table
          :table-data="items"
          :fields="fields"
          caption="<i class='fa fa-align-justify'></i> Danh sách tài khoản"
        ></c-table>
      </b-col>
      <b-col lg="4">
        <b-card>
          <div slot="header">
            <strong>Normal</strong> Form
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
              label="UserPass"
              label-for="userpass"
              description="Nhập UserPass."
            >
              <b-form-input
                id="userpass"
                type="text"
                placeholder="UserPass.."
                required
                autocomplete="userpass"
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
import { shuffleArray } from "@/shared/utils";
import cTable from "../base/Table";

const someData = () =>
  shuffleArray([
    {
      username: "Samppa Nori",
      registered: "2012/01/01",
      role: "Member",
      status: "Active",
      _rowVariant: "success"
    },
    {
      username: "Estavan Lykos",
      registered: "2012/02/01",
      role: "Staff",
      status: "Banned",
      _rowVariant: "danger"
    },
    {
      username: "Chetan Mohamed",
      registered: "2012/02/01",
      role: "Admin",
      status: "Inactive",
      _rowVariant: "info"
    },
    {
      username: "Derick Maximinus",
      registered: "2012/03/01",
      role: "Member",
      status: "Pending"
    },
    {
      username: "Friderik Dávid",
      registered: "2012/01/21",
      role: "Staff",
      status: "Active"
    },
    {
      username: "Yiorgos Avraamu",
      registered: "2012/01/01",
      role: "Member",
      status: "Active"
    },
    {
      username: "Avram Tarasios",
      registered: "2012/02/01",
      role: "Staff",
      status: "Banned"
    },
    {
      username: "Quintin Ed",
      registered: "2012/02/01",
      role: "Admin",
      status: "Inactive"
    },
    {
      username: "Enéas Kwadwo",
      registered: "2012/03/01",
      role: "Member",
      status: "Pending"
    },
    {
      username: "Agapetus Tadeáš",
      registered: "2012/01/21",
      role: "Staff",
      status: "Active"
    },
    {
      username: "Carwyn Fachtna",
      registered: "2012/01/01",
      role: "Member",
      status: "Active"
    },
    {
      username: "Nehemiah Tatius",
      registered: "2012/02/01",
      role: "Staff",
      status: "Banned"
    },
    {
      username: "Ebbe Gemariah",
      registered: "2012/02/01",
      role: "Admin",
      status: "Inactive"
    },
    {
      username: "Eustorgios Amulius",
      registered: "2012/03/01",
      role: "Member",
      status: "Pending"
    },
    {
      username: "Leopold Gáspár",
      registered: "2012/01/21",
      role: "Staff",
      status: "Active"
    },
    {
      username: "Pompeius René",
      registered: "2012/01/01",
      role: "Member",
      status: "Active"
    },
    {
      username: "Paĉjo Jadon",
      registered: "2012/02/01",
      role: "Staff",
      status: "Banned"
    },
    {
      username: "Micheal Mercurius",
      registered: "2012/02/01",
      role: "Admin",
      status: "Inactive"
    },
    {
      username: "Ganesha Dubhghall",
      registered: "2012/03/01",
      role: "Member",
      status: "Pending"
    },
    {
      username: "Hiroto Šimun",
      registered: "2012/01/21",
      role: "Staff",
      status: "Active"
    },
    {
      username: "Vishnu Serghei",
      registered: "2012/01/01",
      role: "Member",
      status: "Active"
    },
    {
      username: "Zbyněk Phoibos",
      registered: "2012/02/01",
      role: "Staff",
      status: "Banned"
    },
    {
      username: "Einar Randall",
      registered: "2012/02/01",
      role: "Admin",
      status: "Inactive"
    },
    {
      username: "Félix Troels",
      registered: "2012/03/21",
      role: "Staff",
      status: "Active"
    },
    {
      username: "Aulus Agmundr",
      registered: "2012/01/01",
      role: "Member",
      status: "Pending"
    }
  ]);

export default {
  name: "colors",
  components: { cTable, ColorTheme },
  data: () => {
    return {
      items: someData,
      itemsArray: someData(),
      fields: [
        { key: "username", label: "User", sortable: true },
        { key: "registered" },
        { key: "role" },
        { key: "status", sortable: true }
      ]
    };
  }
};
</script>
