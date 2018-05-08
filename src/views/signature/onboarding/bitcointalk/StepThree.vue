<template>
  <div>
      <h2> Step 3) Choose a signature from below </h2>

      <ul>
     <form>
       
          <li>
             <img src="/img/onboarding/sig1.png"> <input name="signature" type="radio"> 
          </li>
          <li>
             <img src="/img/onboarding/sig2.png"> <input name="signature" type="radio"> 
          </li>
          <li>
             <img src="/img/onboarding/sig3.png"> <input name="signature" type="radio"> 
          </li>
          <li>
             <img src="/img/onboarding/sig4.png"> <input name="signature" type="radio"> 
          </li>
          <li>
             <img src="/img/onboarding/sig5.png"> <input name="signature" type="radio"> 
          </li>
       
          </form>

          
      </ul>




  </div>
</template>


<script>
    import {retrievSignatures  } from "../../../../service/signatures";
    export default {
        data() {
            return {
                userId: '',
                error: null,
                signatures : []
            }
        }, 
        props: ['clickedNext', 'currentStep'],
        methods: {
            validateId: function(){
                const scope = this; 
               console.log(scope);

                checkProfile(this.userId, 1)
                .then(response => {
                    if(!response.found  ) {
                        scope.error = true; 
                    } else {
                        console.log('Success!!!', scope)
                           scope.$emit('userIdAndForum', {
                            userId: this.userId,
                            forumId: 1 
                          })
                        scope.error = false; 
                     
                    }
                })
            }
        },
        mounted() {
            // var forumId = this.$store.getters.getActiveUserForum.forumId;
            // var forumProfileId = this.$store.getters.getActiveUserForum.forumProfileId; 
            // retrievSignatures(forumId, forumProfileId)
            //  .then(response => {
            //      this.signatures = response.signatures; 
            //  })
        
            this.$emit('can-continue', {value: true});

            // if(!this.$v.$invalid) {
            //     this.$emit('can-continue', {value: true});
            // } else {
            //     this.$emit('can-continue', {value: false});
            // }
        }
    }

</script>

<style scoped>

div {
    width: 100%;
   
}
li{
     width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding:5px;
    border: 1px solid #efefef;
    border-radius:5px;
    margin:5px;
}

input[type=radio]
{
  /* Double-sized Checkboxes */
  -ms-transform: scale(2); /* IE */
  -moz-transform: scale(2); /* FF */
  -webkit-transform: scale(2); /* Safari and Chrome */
  -o-transform: scale(2); /* Opera */
  padding: 10px;
}

form{
     
}

</style>

