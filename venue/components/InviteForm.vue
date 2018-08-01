<template>
  <section>
    <div class="card">
      <header class="card-header">
        <h2 class="card-header-title">{{ "Invite a friend" }}</h2>
      </header>
      <div class="card-content">
        <div>{{ "Invite form" }}</div>
        <b-field>
          <b-input type="password" placeholder="Your friend's email"/>
          <p class="control">
            <button class="button is-primary">Search</button>
          </p>
        </b-field>
        <hr>
        <b-field>
          <b-input type="password" placeholder="Referral link"/>
          <p class="control">
            <button class="button is-primary">Copy link</button>
          </p>
        </b-field>
      </div>
    </div>
  </section>
</template>


<script>
</script>

<style scoped>
form > a {
  text-decoration: underline;
}
</style>
