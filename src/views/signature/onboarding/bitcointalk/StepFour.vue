<template>
  <div>
      <div >
      <h2> Step 4) Copy the code below and paste it into your forum signature. Click verify. </h2>
      <input type="textarea" rows="4" cols="50" placeholder="When in Rome, do as the Romans" value="When in Rome, do as the Romans">

      </input>
      <div class="buttons">
          <button class="btn btn-primary">Copy</button>
          <button class="btn btn-danger" @click="showAlert">Verify</button>
      </div>
        </div>
        
  </div>
</template>


<script>

    export default {
        data() {
            return {
                check:false
            }
        },
        props: ['clickedNext', 'currentStep'],

        mounted() {
            console.log('PROPSSS AREE', this.props)
          this.$emit('can-continue', {value: true});

            // if(!this.$v.$invalid) {
            //     this.$emit('can-continue', {value: true});
            // } else {
            //     this.$emit('can-continue', {value: false});
            // }
        },
        methods: {
        showAlert(){
            this.$router.push('/onboarding/finished')
            // check = true;
        //     // Use sweetalret2
        //     this.$swal('Hello Vue world!!!');
         }
    }
    }

</script>
<style scoped>
div {
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    
}

input {
    height:100px;
    width: 50%;
    font-size:16px;
    padding: 10px;
}

.buttons {
    width:100%;
    display:flex;
    flex-direction:row;

}
</style>