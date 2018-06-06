<template>
     <div class="my-signature">
        <div class="signature-title">
           <h3 class="signature-title-text">CURRENT SIGNATURE</h3>
           <a  @click="onClickSignautre"><i class="far fa-edit"></i></a>
        </div>
    </div>
</template>



<script>

export default {
    methods: { 
    onClickSignautre() {
        this.$router.push('/edit-signature')
      },
    },
}
</script>

<style scoped>

.my-signature{
    width: 100%;
    display: flex;
    flex-direction:column;
    padding-bottom: 30px;
}


.signature-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 10px;
}
.signature-title-text {
    padding: 0px;
    margin: 10px;
    text-align: left;
}

@media only screen and (min-width: 800px) {
.my-signature{
    width: 100%;
}
}
</style>
