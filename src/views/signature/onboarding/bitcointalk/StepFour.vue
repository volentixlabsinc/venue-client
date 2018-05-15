<template>
  <div>
      <div >
      <h2> Step 4) Copy the code below and paste it into your forum signature. Click verify. </h2>
      <input type="textarea" rows="4" cols="50" 
      v-model="message"
       disabled
      v-clipboard:copy="message"
      v-clipboard:success="onCopy"
      v-clipboard:error="onError"
      >


      <div class="buttons">
          <button  
      v-clipboard:copy="message"
      v-clipboard:success="onCopy"
      v-clipboard:error="onError" 
      class="btn btn-primary">Copy</button>
          <button class="btn btn-danger" @click="verify">Verify</button>
      </div>
        </div>
        
  </div>
</template>


<script>
import  {createSignature} from '../../../../service/signatures';

    export default {
        data() {
            return {
                message: "",
                check:false
            }
        },
        props: ['clickedNext', 'currentStep'],

        mounted() {
          this.$emit('can-continue', {value: true});
           var fetchedMessage = this.$store.state.signatures.activeUserForum.activeSignature.code; 
          if(fetchedMessage) {
              this.message= fetchedMessage;
          } else {
              userId = ''
          }

            // if(!this.$v.$invalid) {
            //     this.$emit('can-continue', {value: true});
            // } else {
            //     this.$emit('can-continue', {value: false});
            // }
        },
        methods: {
                onCopy: function (e) {
        this.$swal(
  'You just copied: ',
   e.text)              
    },
    onError: function (e) {
      alert('Failed to copy texts')
    },
    verify: function () {
        console.log('Verifying')
        var forum_profile_id = this.$store.state.signatures.activeUserForum.forumProfileId; 
        var signature_id = this.$store.state.signatures.activeUserForum.activeSignature.id; 

        createSignature(forum_profile_id ,signature_id, true)
        .then(res=>{
                   if (res.success === true) {
            this.$swal({
              title: 'Signature Placement Verified',
              text: 'You can now start posting and earning VTX',
              icon: 'success',
              button: {
                text: 'ok',
                className: 'btn-primary',
                closeModal: true
              }
            }).then(() => {

              this.$router.push('/onboarding/finished')
            })
          } else {
            this.$swal({
              title: 'The signature was not found',
              text: 'Unfortunately the signature was not found',
              icon: 'error',
              button: {
                text: 'OK',
                className: 'btn-primary',
                closeModal: true
              }
            })
          }

        })

    }, 
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