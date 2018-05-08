<template>
<div class="forum">

<h2 class="forum-title">{{forumInfo.forumSite}}</h2>
<div class="forum_info">
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
</div>
</div>
</template>

<script>
export default {
  props: {
    forumInfo: {
      type: Object
    }
  },
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
  width: 100%;
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
.forum_info>h2{
  margin: 0px;
}

@media only screen and (min-width: 600px) {
.forum {
    align-items: flex-start;
}
}
</style>
