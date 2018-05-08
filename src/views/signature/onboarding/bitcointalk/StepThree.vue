<template>
  <div>
      <h2> Step 3) Choose a signature from below </h2>

      <ul>
     <form>
          <li v-for="sig in signatures">
              Name: {{sig.name}} <input name="signature" type="radio"> 


          </li>
          </form>

          <p>
              [center][b][size=8pt][url=http://volentix.com/][u]     V O L E N T I X[/u][/url]   █   [url=http://volentix.com/]Decentralized Change[/url]   █   [url=http://volentix.com/]3rd Party DAPP Platform[/url]
[url=http://volentix.com/]▬ •  VENUE  • ▬  Social Rewards Platform[/url]   █   [url=]ANN[/url]   [url=https://twitter.com/VolentixDAO/]TWITTER[/url]   [url=]TELEGRAM[/url]   █   [url=http://volentix.com/]▬ • VDEX • ▬  Decentralized Exchange[/url]
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬    ( V ) BETA TESTER  |  Designed by Zpectrum    ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬[/size][/b][/center]

          </p>
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
            var forumId = this.$store.getters.getActiveUserForum.forumId;
            var forumProfileId = this.$store.getters.getActiveUserForum.forumProfileId; 
            retrievSignatures(forumId, forumProfileId)
             .then(response => {
                 this.signatures = response.signatures; 
             })
        
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
ul {
    list-style:none !important; 
}
</style>

