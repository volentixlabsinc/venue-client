<template>
  <div>
      <h2> Step 3. Choose a signature from below </h2>
      <AvailableSignatures />
   </div>
</template>


<script>
    // import {retrieveSignatures  } from "../service/signatures";

    import AvailableSignatures from "../../../../components/AvailableSignatures.vue"
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
                checkProfile(this.userId, 1)
                .then(response => {
                    if(!response.found  ) {
                        scope.error = true; 
                    } else {
                           scope.$emit('userIdAndForum', {
                            userId: this.userId,
                            forumId: 1 
                          })
                        scope.error = false;                    
                    }
                })
            },
            copySignatureCode: function(sigNumber) {  
               this.$emit('can-continue', {value: true});
              
                this.$store.dispatch('changeActiveUserForumSignatureAction', SignaturesFull[sigNumber]);

            }
        },
        mounted() {
            // var forumId = this.$store.getters.getActiveUserForum.forumId;
            // var forumProfileId = this.$store.getters.getActiveUserForum.forumProfileId; 
            // retrievSignatures(false, forumId, forumProfileId)
            //  .then(response => {
            //      this.signatures = response.signatures; 
            //  })
            this.$emit('can-continue', {value: true});
            // if(!this.$v.$invalid) {
            //     this.$emit('can-continue', {value: true});
            // } else {
            //     this.$emit('can-continue', {value: false});
            // }
        },
        components: {
            AvailableSignatures
        }
    }

</script>

<style scoped>

div {
    width: 100%;
   
}


form {
     max-width: 525px;
}

</style>

