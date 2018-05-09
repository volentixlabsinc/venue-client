<template>
<div class="element-container" :style="[elements.username==username? 'backgound-color:white !important' : 'backgound-color:none' ]">
    <div class="top-elements">
        <div class="rank_username">
            <p class="element top-el el-rank">{{elements.rank}}</p>
            <p class="element top-el el-username">{{elements.username}}</p>
        </div>
        <div class="tokens_info">
        <p class="element top-el el-tokens">{{elements.total_tokens}} VTX</p>
        <div @click="toggleDescription=!toggleDescription"><i class="far fa-question-circle"></i></div>
        </div>
    </div>
    <div class="bottom-elements">
            <p class="empty-element"></p>
        <p class="element top-el el-total-posts">{{elements.total_posts}} posts</p>
    </div>
    <div v-if="toggleDescription && sitewide.available_tokens" class="toggled-info">
        <p>total available tokens: {{sitewide.available_tokens}}</p>
        <p>total available points: {{sitewide.available_points}}</p>
        <p>user points: {{elements.total_points}}</p>
        <p>user points represent {{pointsPercent}}% of total points</p>
        <p>{{pointsPercent}} % of {{sitewide.available_tokens}} = {{elements.total_tokens}}</p>
    </div>
    </div>
</template>

<script>
export default {
  props: {
      elements: {
          type: Object,
          default: null
      },
        sitewide: {
            type: Object,
            default: null
        },
        username: {
            type: String,
            default: ''
        }
  },
   data() {
        return {
            toggleDescription: false,
            pointsPercent: null,
            tokensPercent: null
        }
    },
    mounted() {
        this.calculatePercentages ()
    },
    methods: {
        calculatePercentages () {
            this.pointsPercent = (parseFloat(this.elements.total_points.replace(/,/g, ''))*100)/parseFloat(this.sitewide.available_points.replace(/,/g, ''));
        }
    }
}
</script>

<style scoped>
.element-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    animation: slideUp 0.5s linear 1;
}
.element-container * {
    flex-shrink: 1;
}
@keyframes slideUp{
    0%{
        transform: translateY(100px);
    }

    80%{
         transform: none
    }

    90%{
         transform: translateY(5px)
    }

    100%{
         transform: none
    }

}

.top-elements {
    height: 30px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
     font-size: 14px
}
.rank_username, .tokens_info{
    display: flex;
    align-items: center;
}
.el-rank {
    width: auto;
    text-align: left;
}
.el-username {
    text-align: left;
    padding-left: 15px;
}
.el-tokens {
    text-align: left;
}
.fa-question-circle{
    width: auto;
    padding-left: 10px;
    color: gray;
}
.bottom-elements {
    height: 20px;;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 11px;
}
.empty-element{
     width: 0px;
}
.el-total-posts {
   width: 97%;
    padding-left: 3%;
    display: flex;
    flex-direction: row !important;
    flex-wrap: nowrap;
    color: gray;
}

.toggled-info{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    font-size: 14px;
    text-align: left;
    transition: expand 5s;
}

@keyframes expand{
    0%{
        height: 0px;
    }
    100%{
         height: auto;
    }

}
.toggled-info > p {
    padding: 0px;
    margin: 0px;
}


@media only screen and (max-width: 400px) and (min-width:200px) {
    .top-elements{
        font-size: 11px
    }
    .bottom-elements{
        font-size: 10px
    }
}

@media only screen and (min-width: 900px) {
    .top-elements{
        font-size: 16px
    }
    .bottom-elements{
        font-size: 12px
    }
 @media only screen and (min-width: 800px) {
    .top-elements{
        justify-content: space-between;
    }


 }

}
</style>

