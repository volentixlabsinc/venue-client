<template>
  <div>
      <h2> Step 1) Navigate to your profile  </h2>

      <img src='/img/onboarding/bitcointalk/step1a.png' />


       <p>
       </p>


  </div>
</template>


<script>

    export default {
        props: ['clickedNext', 'currentStep'],

        mounted() {
            console.log('PROPSSS AREE', this.props)
          this.$emit('can-continue', {value: true});

            // if(!this.$v.$invalid) {
            //     this.$emit('can-continue', {value: true});
            // } else {
            //     this.$emit('can-continue', {value: false});
            // }
        }
    }

</script>
