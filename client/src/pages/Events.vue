<template>
 <div class="white">
    <v-card>
      <br>
       <div class="headline" align="center" justify="center" > Tìm sự kiện, công việc</div>
       <br>
    <v-tabs
      v-model="tab"
      centered
 
    >
  
      <v-tabs-slider></v-tabs-slider>

      <v-tab href="#tab-1">
        Full time  
      </v-tab>
      <v-tab href="#tab-2">
       Part time 
      </v-tab>
   <v-tab href="#tab-3">
       Freelance
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="i in 3"
        :key="i"
        :value="'tab-' + i"
      >
        <v-card >
          <v-card-text style="">{{ text }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
 </div>
</template>

<script>
export default {
 
};
</script>
