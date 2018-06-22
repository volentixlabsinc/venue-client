<template>
  <div class="card">
    <div class="card-content">
      <div class="level">
        <div class="is-size-3">EARN VTX!</div>
        <figure class="image is-64x64">
          <img src="~/static/img/logos/VTX-Token-icon-new.png">
        </figure>
      </div>
      <div class="content">
        <div class="is-size-4">Join the bitcointalk signature campaign</div>
      </div>
    </div>
    <div class="card-footer">
      <div class="card-footer-item">
        <a @click="onclickJoin">SIGN UP</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onclickJoin() {
      this.$router.push("/signup");
    }
  }
};
</script>
