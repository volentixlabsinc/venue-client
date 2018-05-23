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
    import { checkProfile,createForumProfile  } from "../../../../service/signatures";
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
                this.$emit('can-continue', {value: true});

                //forum profile create?
                const scope = this; 
                checkProfile(this.userId, 1)
                .then(response => {
                    if(!response.found  ) {
                        scope.error = true; 
                    } else {
                        // Inform that the user account was found
                        this.$swal({
                            text: "User account found"
                        })
                        const forumProfile = response.exists;
                        if(!forumProfile) {
                            //create profile
                            scope.createForumProfile(this.userId,1)
                            .then(res => {
                                console.log('Creating Forum Proile', res)
                            })
                        } else {
                            //retrieveForumProflie
                          retrieveForumProfiles("1", this.userId)
                           .then( response => {
                             var activeUserForum = this.$store.state.activeUserForum; 
                             var activeUserForumUpdate = Object.assign({activeUserForum},
                            {
                             userId: this.userId,
                             forumId: 1,
                             forumProfileId: response.forum_profiles[0].id
                              })   
                             scope.$store.dispatch('changeActiveUserForumAction', activeUserForumUpdate);
                         })
                        }

                       
                        scope.error = false; 
                     
                    }
                })
            },
            createForumProfile: function(profile_url, forum_id){
                createForumProfile(profile_url, forum_id, true)
                  .then(res => {
                        var activeUserForum = this.$store.state.activeUserForum; 
                             var activeUserForumUpdate = Object.assign({activeUserForum},
                            {
                             userId: this.userId,
                             forumId: 1,
                             forumProfileId: res.forum_profiles[0].id
                              })   
                             scope.$store.dispatch('changeActiveUserForumAction', activeUserForumUpdate);
                 
                      console.log('CREATIG FORUM PROFILE ANDD.....',res)
                      this.$emit('can-continue', {value: true});


                  })
                  .then(()=> {
                           this.$swal({
                          text: "User account found"
                      })
                  })
                  .catch(err => {
                      console.log("Something went wrong", err)
                  })

            }
        },
        mounted() {
          var userIdState = this.$store.state.signatures.activeUserForum.userId; 
          if(userIdState) {
              this.userId = userIdState
          } else {
              this.userId = ''
          }
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