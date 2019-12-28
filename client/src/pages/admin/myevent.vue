<template>
  <v-container class="ma-0 pa-0" fill-height>
    <v-col class="ma-0 pa-0">
      <v-row>
        <h3>Sự kiện của tôi</h3>
      </v-row>
      <v-row>
        <v-col cols="2">
          <v-card>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>
                  <strong>Sự kiện</strong>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <component :transition="'scale-transition'" :is="'div'" hide-on-leave>
              <v-skeleton-loader v-if="event_loading" type="list-item"></v-skeleton-loader>
              <v-skeleton-loader v-if="event_loading" type="list-item"></v-skeleton-loader>
              <v-skeleton-loader v-if="event_loading" type="list-item"></v-skeleton-loader>
              <v-skeleton-loader v-if="event_loading" type="list-item"></v-skeleton-loader>
              <v-skeleton-loader v-if="event_loading" type="list-item"></v-skeleton-loader>
              <v-skeleton-loader v-if="event_loading" type="list-item"></v-skeleton-loader>
              <v-skeleton-loader v-if="event_loading" type="list-item"></v-skeleton-loader>

              <v-list dense>
                <v-list-item-group>
                  <v-list-item
                    v-for="item in events"
                    :key="item.mid"
                    link
                    @click="eventclick(item._id)"
                  >
                    <v-list-item-content>
                      <v-list-item-title>{{ item.ten }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </component>
          </v-card>
        </v-col>
        <v-divider vertical></v-divider>
        <v-col>
          <v-tabs fixed-tabs color="#34495e">
            <v-tab>Ứng tuyển</v-tab>
            <v-tab>Đã duyệt</v-tab>
            <v-tab>Đã lấy thông tin</v-tab>
            <v-tab-item>
              <v-data-table :headers="headers" :items="ungtuyen" class="elevation-1">
                <template v-slot:item.action="{ item }">
                  <v-btn color="success">Duyệt</v-btn>
                </template>
                <template v-slot:no-data>
                  <v-btn color="primary">Chưa có dữ liệu</v-btn>
                </template>
              </v-data-table>
            </v-tab-item>


            <v-tab-item>
               <v-data-table :headers="headers" :items="ungtuyen" class="elevation-1">
                <template v-slot:item.action="{ item }">
                  <v-btn color="pink">Lấy thông tin</v-btn>
                </template>
                <template v-slot:no-data>
                  <v-btn color="primary">Chưa có dữ liệu</v-btn>
                </template>
              </v-data-table>
            </v-tab-item>


            <v-tab-item>
                    <v-data-table :headers="headers" :items="ungtuyen" class="elevation-1">
               
                <template v-slot:no-data>
                  <v-btn color="primary">Chưa có dữ liệu</v-btn>
                </template>
              </v-data-table>
            </v-tab-item>
          </v-tabs>
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>
<script>
import axios from "axios";
export default {
  data: () => ({
    drawer: {},
    event_loading: true,
    items: [
      { title: "Home", icon: "dashboard" },
      { title: "About", icon: "question_answer" }
    ],
    events: [],
    ungtuyen: [],
    headers: [
      { text: "Ten", value: "ten" },
      { text: "loai", value: "loai" },
      { text: "Số event", value: "sosukien" },
      { text: "yêu thích", value: "soyeuthich" },
      { text: "lượt mua", value: "soluotmua" },
      { text: "nơi làm việc", value: "noilamviec" },
      { text: "sống tại", value: "songtai" },

      { text: "Actions", value: "action" }
    ]
  }),
  methods: {
    reload() {
      axios
        .get(`http://localhost:5000/api/event`)
        .then(response => {
          this.events = response.data.data;
          this.event_loading = false;
        })
        .catch(e => {
          this.errors.push(e);
        });
    },
    eventclick(id) {
      // alert(id);
      axios
        .get(`http://localhost:5000/api/pg`)
        .then(response => {
          this.ungtuyen = response.data.data;
        })
        .catch(e => {
          this.errors.push(e);
        });
    }
  },
  mounted() {
    this.reload();
  }
};
</script>