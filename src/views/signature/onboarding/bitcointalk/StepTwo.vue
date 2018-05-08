<template>
  <div>
      <h2> Step 2) Grab your user ID and verify it below </h2>
     <div class="input-group mb-3">
  
  <div class="input-group-append2">
    <input v-model="userId" type="text"  placeholder="Your user id" >
    <button @click="validateId" class="btn btn-primary" type="button">Validate User ID</button>
        <span v-if="error" style="color:red;">  
        <i class="fas fa-times-circle"></i> Try Again
        </span>
            <span v-if="!error" style="color:transparent; ">  
    <!-- <i class="fas fa-check"></i> Click next below -->
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

<style scoped>
.input-group-append2 {
    width: 100%;
    display: flex;
    justify-content:center;
    align-items:center;
}

input {
    font-size: 16px;
    border-radius:5px;
    height: 20px;
    box-shadow:none;
    padding: 10px;
    font-family: Roboto;
}
button {
    border-radius:5px;
}
</style>