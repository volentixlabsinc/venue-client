<template>
  <div>
     <form>
       <ul>
          <li>
              <div>
                <img src="/img/onboarding/sig1.png" />
                <button type="button" v-clipboard:copy="signatures[0].code"
                    v-clipboard:success="() => onCopy(signatures[0])">COPY CODE</button>
             </div>
          </li>
          <li>
              <div>
                <img src="/img/onboarding/sig2.png" />
                <button type="button" v-clipboard:copy="signatures[1].code"
                    v-clipboard:success="() => onCopy(signatures[1])">COPY CODE</button>
             </div>
          </li>
          <li>
              <div>
                <img src="/img/onboarding/sig3.png" />
                <button type="button" v-clipboard:copy="signatures[2].code"
                    v-clipboard:success="() => onCopy(signatures[2])">COPY CODE</button>
             </div>
          </li>
          <li>
              <div>
                <img src="/img/onboarding/sig4.png" />
                <button type="button" v-clipboard:copy="signatures[3].code"
                    v-clipboard:success="() => onCopy(signatures[3])">COPY CODE</button>
             </div>
          </li>
          <li>
              <div>
                <img src="/img/onboarding/sig5.png" />
                <button type="button" v-clipboard:copy="signatures[4].code"
                    v-clipboard:success="() => onCopy(signatures[4])">COPY CODE</button>
             </div>
          </li>
        </ul>
      </form>  
  </div>
</template>

<script>
    module.exports = {
        data: function() {
            return {
            signatures: [{"id":9,"name":"BitcoinTalk Test Signature 7","image":"/img/onboarding/sig1.png","code":"Men never remember, but women never forget","verification_code":"eRycp9ln","usage_count":0,"forum_site_name":"bitcointalk.org","forum_user_name":"dannyl","forum_userid":"2093382"},{"id":8,"name":"BitcoinTalk Test Signature 6","image":"/img/onboarding/sig2.png","code":"A friend walks in when everyone else walks out","verification_code":"eRycp9ln","usage_count":0,"forum_site_name":"bitcointalk.org","forum_user_name":"dannyl","forum_userid":"2093382"},{"id":7,"name":"BitcoinTalk Test Signature 5","image":"/img/onboarding/sig3.png","code":"Follow love and it will flee, flee love and it will follow","verification_code":"eRycp9ln","usage_count":0,"forum_site_name":"bitcointalk.org","forum_user_name":"dannyl","forum_userid":"2093382"},{"id":6,"name":"BitcoinTalk Test Signature 4","image":"/img/onboarding/sig4.png","code":"In teaching others we teach ourselves","verification_code":"eRycp9ln","usage_count":1,"forum_site_name":"bitcointalk.org","forum_user_name":"dannyl","forum_userid":"2093382"},{"id":5,"name":"BitcoinTalk Test Signature 3","image":"","code":"Knowledge comes, but wisdom lingers","verification_code":"eRycp9ln","usage_count":0,"forum_site_name":"bitcointalk.org","forum_user_name":"dannyl","forum_userid":"2093382"},{"id":3,"name":"BitcoinTalk Test Signature 2","image":"/img/onboarding/sig6.png","code":"When in Rome, do as the Romans","verification_code":"eRycp9ln","usage_count":2,"forum_site_name":"bitcointalk.org","forum_user_name":"dannyl","forum_userid":"2093382"},{"id":1,"name":"BitcoinTalk Test Signature 1","image":"/img/onboarding/sig7.png","code":"The pen is mightier than the sword","verification_code":"eRycp9ln","usage_count":0,"forum_site_name":"bitcointalk.org","forum_user_name":"dannyl","forum_userid":"2093382"}]
            }
        },
        methods: {
            onCopy: function (sig) {
                alert('You just copied: ' + sig.code)

                // TODO Only dispatching here so step 4 in the onboarding flow still works.
                this.$store.dispatch('changeActiveUserForumSignatureAction', sig);
            }
        }
    }
</script>

<style scoped>

div {
    width: 100%;
}

li {
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius:5px;
    margin:10px;
}

li img {
    width: 100%;
    flex: 0 2 auto;
    border-radius: 5px;
}

li button {
    float: right
}

form {
     max-width: 525px;
}

</style>

