<template>
  <div>
      <h2> Step 2) Grab your user ID and verify it below </h2>
     <div class="input-group mb-3">
  <input v-model="userId" type="text" class="form-control" placeholder="Your user id" aria-label="Recipient's username" aria-describedby="basic-addon2">
  <div class="input-group-append">
    <button @click="validateId" class="btn btn-outline-secondary" type="button">Validate User ID</button>
    <span v-if="error" style="color:red;">  
       <i class="fas fa-times-circle"></i> Try Again
    </span>
        <span v-if="!error" style="color:green; ">  
   <i class="fas fa-check"></i> Click next below
    </span>
  </div>
</div>



       <p>
         <img src='/img/onboarding/bitcointalk/step1b.png' />

       </p>


  </div>
</template>


<script>
    import { checkProfile  } from "../../../../service/signatures";
        import { retrieveForumProfiles  } from "../../../../service/forum";

    export default {
        data() {
            return {
                userId: '',
                error: undefined
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
                        retrieveForumProfiles(1, this.userId)
                         .then( response => {
                            scope.$store.dispatch('changeActiveUserForumAction', {
                            userId: this.userId,
                            forumId: 1,
                            forumProfileId: response.forum_profiles[0].id
                           });
                         })
                        scope.error = false; 
                     
                    }
                })
            }
        },
        mounted() {
        
          this.$emit('can-continue', {value: true});

            // if(!this.$v.$invalid) {
            //     this.$emit('can-continue', {value: true});
            // } else {
            //     this.$emit('can-continue', {value: false});
            // }
        }
    }

</script>
