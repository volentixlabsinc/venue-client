<template>
<div class="forum">
<h3 class="forum-title">BITCOIN TALK <a  @click="onClickSignautre()"><i class="far fa-edit"></i></a></h3>

<!-- <div class="forum_info">
    <h3>Total tokens</h3>
    <h3>{{forumInfo.VTX_Tokens}}</h3>
</div>

<div class="forum_info">
    <h3>Forum UserId</h3>
    <h3>{{forumInfo.forumUserId}}</h3>
</div>
<div class="forum_info">
    <h3>My total Points</h3>
    <h3>{{forumInfo.totalPosts}}</h3>
</div> -->
</div>
</template>

<script>
export default {
  props: {
    forumInfo: {
      type: Object
    }
  },
  methods: {
      onClickSignautre() {
        this.$router.push('/signature')
      }
  }
}
</script>

<style scoped>
.forum {
    height: 100%;
    width: 100%;
    display:flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: wrap;
}


.forum-title{
  width: 80%;
  text-align: left;
  display: flex;
  justify-content: space-between;
}

.forum_info{
 width: 30%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin: 5px;
  background-color: rgba(0, 0, 0, 0.1);
}
.forum_info>h3{
  margin: 0px;
}
.fa-edit {
    color:white !important;
}
@media only screen and (min-width: 600px) {
.forum {
    align-items: flex-start;
}
}
</style>
