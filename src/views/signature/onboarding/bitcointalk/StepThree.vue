<template>
  <div>
      <h2> Step 3) Choose a signature from below </h2>
      <ul>
     <form>
          <li>
             <img src="/img/onboarding/sig1.png"> 
             <input name="signature" type="radio"
             @click="updateActiveSig(0)"
             > 
          </li>
          <li>
             <img src="/img/onboarding/sig2.png"> 
             <input name="signature" type="radio"
             @click="updateActiveSig(1)"
             > 
          </li>
          <li>
             <img src="/img/onboarding/sig3.png"> 
             <input name="signature" type="radio"
             @click="updateActiveSig(2)"
             > 
          </li>
          <li>
             <img src="/img/onboarding/sig4.png"> 
             <input name="signature" type="radio"
             @click="updateActiveSig(3)"
             > 
          </li>
          <li>
             <img src="/img/onboarding/sig5.png"> 
             <input name="signature" type="radio"
             @click="updateActiveSig(4)"
             > 
          </li>
          </form>   
      </ul>
  </div>
</template>


<script>
    import {retrievSignatures  } from "../../../../service/signatures";
    const SignaturesFull = [{"id":9,"name":"BitcoinTalk Test Signature 7","image":"static/img/signature_img.png","code":"Men never remember, but women never forget","verification_code":"eRycp9ln","usage_count":0,"forum_site_name":"bitcointalk.org","forum_user_name":"dannyl","forum_userid":"2093382"},{"id":8,"name":"BitcoinTalk Test Signature 6","image":"static/img/signature_img.png","code":"A friend walks in when everyone else walks out","verification_code":"eRycp9ln","usage_count":0,"forum_site_name":"bitcointalk.org","forum_user_name":"dannyl","forum_userid":"2093382"},{"id":7,"name":"BitcoinTalk Test Signature 5","image":"static/img/signature_img.png","code":"Follow love and it will flee, flee love and it will follow","verification_code":"eRycp9ln","usage_count":0,"forum_site_name":"bitcointalk.org","forum_user_name":"dannyl","forum_userid":"2093382"},{"id":6,"name":"BitcoinTalk Test Signature 4","image":"static/img/signature_img.png","code":"In teaching others we teach ourselves","verification_code":"eRycp9ln","usage_count":1,"forum_site_name":"bitcointalk.org","forum_user_name":"dannyl","forum_userid":"2093382"},{"id":5,"name":"BitcoinTalk Test Signature 3","image":"","code":"Knowledge comes, but wisdom lingers","verification_code":"eRycp9ln","usage_count":0,"forum_site_name":"bitcointalk.org","forum_user_name":"dannyl","forum_userid":"2093382"},{"id":3,"name":"BitcoinTalk Test Signature 2","image":"static/img/signature_img.png","code":"When in Rome, do as the Romans","verification_code":"eRycp9ln","usage_count":2,"forum_site_name":"bitcointalk.org","forum_user_name":"dannyl","forum_userid":"2093382"},{"id":1,"name":"BitcoinTalk Test Signature 1","image":"static/img/signature_img.png","code":"The pen is mightier than the sword","verification_code":"eRycp9ln","usage_count":0,"forum_site_name":"bitcointalk.org","forum_user_name":"dannyl","forum_userid":"2093382"}]; 
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
            updateActiveSig: function(sigNumber) {  
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

