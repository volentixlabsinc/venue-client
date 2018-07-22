<template>
  <div>
    <form>
      <ul>
        <li v-for="sig in signatures" :key="sig.id">
          <div>
            <img :src="sig.image" >
            <button v-clipboard:copy="sig.code" v-clipboard:success="() => $emit('copied', sig.id)" 
                    class="button is-primary is-small is-outlined" type="button">{{ $t('buttons.btn_copy_code') }}</button>
          </div>
        </li>
      </ul>
    </form>  
  </div>
</template>

<script>
export default {
  props: {
    signatures: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style scoped>
div {
  width: 100%;
}
ul {
  padding: 0;
  list-style-type: none;
}
li {
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 5px;
  margin-bottom: 10px;
}

li img {
  width: 100%;
  flex: 0 2 auto;
  border-radius: 5px;
}

li button {
  float: right;
}

form {
  max-width: 100%;
}
</style>
