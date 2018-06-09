<template>
     <div class="my-signature" @click="onClickSignature">
        <div class="signature-title">
           <h3 class="signature-title-text">EDIT SIGNATURE</h3>
           <a><i class="far fa-edit"></i></a>
        </div>
    </div>
</template>



<script>

export default {
    methods: { 
    onClickSignature() {
        this.$router.push('/edit-signature')
      },
    },
}
</script>

<style scoped>

.my-signature{
    width: 100%;
    background-color: rgba(240, 248, 255, 0.3);
    box-shadow: 1px 1px 5px rgb(31, 31, 61);
    border-radius: 5px; 
}

.my-signature:hover{
    cursor: pointer;
    background-color: rgba(240, 248, 255, 0.35);
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
    padding-bottom: 0px;
    margin-top: 30px;
}
}
</style>
