<template>
  <div class="card">
    <div class="card-content">
      <div class="level">
        <div class="is-size-3">{{ $t('titles.earn_vtx') }}</div>
        <figure class="image is-64x64">
          <img src="~/assets/VTX-Token-icon-new.png">
        </figure>
      </div>
      <div class="content">
        <div class="is-size-4">{{ $t('messages.join_bitcointalk') }}</div>
      </div>
    </div>
    <div class="card-footer">
      <div class="card-footer-item">
        <a @click="onclickJoin">{{ $t('nav.sign_up') }}</a>
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

<style>
.card-footer-item > a {
  text-transform: uppercase;
}
</style>
