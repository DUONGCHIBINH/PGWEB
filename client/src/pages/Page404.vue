<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="6">
          <div class="clearfix">
            <h1 class="float-left display-3 mr-4">404</h1>
            <h4 class="pt-3">Đã có lỗi xảy ra.</h4>
            <p class="text-muted">Không tìm thấy trang này.</p>
          </div>
          <b-input-group>
            <b-input-group-prepend>
              <b-input-group-text>
                <v-icon>mdi-search</v-icon>
              </b-input-group-text>
            </b-input-group-prepend>
            <input
              id="prependedInput"
              class="form-control"
              size="16"
              type="text"
              placeholder="Bạn muốn tìm gì?"
            />
            <b-input-group-append>
              <b-button variant="info">Tìm</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Page404"
};
</script>

