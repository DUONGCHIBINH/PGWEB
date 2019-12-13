<template>
  <div>
    <h2>User ID {{id}}</h2>
    <h1>{{value}}</h1>
    <v-btn color="success" @click="tang">tang</v-btn>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ["id"],
  computed: {
    localComputed() {
      /* ... */
    },
    // mix this into the outer object with the object spread operator
    ...mapState(["users", "value"])
  },
  methods: {
    tang() {
     //this.$store.commit("tang");
  //   console.log(  this.$store.state.cur_userdb)
    }
  }
};
</script>