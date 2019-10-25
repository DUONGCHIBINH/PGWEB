<template>
  <div class="grey lighten-5">
    <!-- banner -->
    <v-carousel cycle height="400" hide-delimiter-background show-arrows-on-hover>
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet :color="colors[i]" height="100%">
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">Slide {{ slide }}</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <!-- end banner -->
    <br />

    <!-- banner -->

    <v-row class="fill-height" align="center" justify="center">
      <div class="display-1">SỰ KIỆN GẦN ĐÂY</div>
    </v-row>

    <!-- timeline -->
    <div class="pa-10">
      <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
        <v-timeline-item
          v-for="(item, i) in items"
          :key="i"
          :color="item.color"
          :icon="item.icon"
          fill-dot
        >
        
          <v-card :color="item.color" :elevation="10" dark>
            <v-card-title class="title">Sự kiện {{i+1}}</v-card-title>
            <v-card-text class="white text--primary">
              <p>Thông tin về sự kiện, Địa điểm, thời gian, Nhà tuyển dụng, ..... Thông tin về sự kiện, Địa điểm, thời gian, Nhà tuyển dụng, ..... Thông tin về sự kiện, Địa điểm, thời gian, Nhà tuyển dụng, .....</p>
              <v-btn :color="item.color" class="mx-0" outlined>Đăng ký</v-btn>
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4"
      ],
      slides: ["Sự kiện", "PG", "PB", "Giới thiệu", "Quảng cáo"],
      items: [
        {
          color: "red lighten-2",
          icon: "mdi-star"
        },
        {
          color: "purple darken-1",
          icon: "mdi-book-variant"
        },
        {
          color: "green lighten-1",
          icon: "mdi-airballoon"
        },
        {
          color: "indigo",
          icon: "mdi-buffer"
        }
      ]
    };
  }
};
</script>
