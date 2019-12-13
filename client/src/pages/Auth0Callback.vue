<template>
  <v-container>
    <v-card class="mx-auto" max-width="344" loading  elevation="5">
      <v-card-title>Đang xác thực tài khoản...</v-card-title>
    </v-card>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "Auth0Callback",
  data() {
    return {};
  } ,
  mounted() {
     this.reload();
  },
  methods: {
    reload(){
    
    axios
      .get(`http://localhost:5000/api/user?email=`+this.$store.state.cur_user.email)
      .then(response => {
        if(response.data.data.length !=1){
           this.$router.push({path: "/dangky"})
        }
        else{
          //console.log(response.data.data[0]);
          //  this.$store.dispatch('updateuserdb',response.data.data[0]);  
            localStorage.setItem('cur_userdb', JSON.stringify(response.data.data[0]));
            this.$router.push({path: "/home"});
        }
      })
      .catch(e => {
        this.errors.push(e);
      });
   
    }
  },
  }
</script>
