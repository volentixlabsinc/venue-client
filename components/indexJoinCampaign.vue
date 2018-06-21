<template>

  <div class="card ">
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <h1 class="title">EARN VTX!</h1>
        </div>
        <div class="media-left">
          <figure class="image is-64x64">
            <img src="~/static/img/logos/VTX-Token-icon-new.png">
          </figure>
        </div>
      </div>
      <div class="content">
        <h1 class="is-size-4 has-text-grey">Join the bitcointalk signature campaign</h1>
        <a class="button is-primary" @click="onclickJoin">SIGN UP</a>
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
