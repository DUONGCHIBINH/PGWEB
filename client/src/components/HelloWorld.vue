<template>
  <v-container>
    <v-layout text-center wrap>
      <v-flex xs12>
        <v-img :src="require('../assets/PGlogo_color.png')" class="my-3" contain height="200"></v-img>
      </v-flex>

      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">Chào mừng đến với PG Works</h1>
        <p class="subheading font-weight-regular">
          Cộng đồng dành riêng cho tuyển dụng nhân sự event
          <br />Tham gia với chúng tôi
          <a
            href="https://www.facebook.com/binh.duongchi.9"
            target="_blank"
          >PG Works</a>
        </p>
      </v-flex>

      <v-flex mb-5 xs12>
        <h2 class="headline font-weight-bold mb-3">Tại sao chọn PG Works?</h2>

        <v-layout justify-center>
          <a
            v-for="(next, i) in whatsNext"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >{{ next.text }}</a>
        </v-layout>
      </v-flex>

      <v-flex xs12 mb-5>
        <h2 class="headline font-weight-bold mb-3">Thông tin thêm</h2>

        <v-layout justify-center>
          <a
            v-for="(link, i) in importantLinks"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >{{ link.text }}</a>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    
    importantLinks: [
      {
        text: "Documentation",
        href: "#"
      },
      {
        text: "Chat",
        href: "#"
      },
      {
        text: "Zalo",
        href: "#"
      },
      {
        text: "Twitter",
        href: "#"
      },
      {
        text: "Facebook",
        href: "#"
      }
    ],
    whatsNext: [
      {
        text: "Link 1",
        href: "#"
      },
      {
        text: "Link 2",
        href: "#"
      },
      {
        text: "Link 3",
        href: "#"
      }
    ]
  })
};
</script>
