<template>
  <div>
     <form>
       <ul>
          <li v-for="sig in signatures" :key="sig.id">
              <div>
                <img :src="sig.image" />
                <button type="button" v-clipboard:copy="sig.code"
                    v-clipboard:success="() => onCopy(sig)">COPY CODE</button>
             </div>
          </li>
        </ul>
      </form>  
      <ModalWidget v-if="showModal" @close="showModal = false" :request="'confirmCopy'"/>
  </div>
</template>

<script>
import ModalWidget from "~/components/ModalWidget.vue";
import copiedSignature from '~/components/copiedSignature.vue'


    const BITCOINTALK_FORUM_ID = 1
    
export default {
<<<<<<< HEAD
    // props: {
    //     signatures: {
    //         type: Array,
    //         default: [{"id":9,"name":"BitcoinTalk Test Signature 7","image":"/img/onboarding/sig1.png","code":"Men never remember, but women never forget","verification_code":"eRycp9ln","usage_count":0,"forum_site_name":"bitcointalk.org","forum_user_name":"dannyl","forum_userid":"2093382"},{"id":8,"name":"BitcoinTalk Test Signature 6","image":"/img/onboarding/sig2.png","code":"A friend walks in when everyone else walks out","verification_code":"eRycp9ln","usage_count":0,"forum_site_name":"bitcointalk.org","forum_user_name":"dannyl","forum_userid":"2093382"},{"id":7,"name":"BitcoinTalk Test Signature 5","image":"/img/onboarding/sig3.png","code":"Follow love and it will flee, flee love and it will follow","verification_code":"eRycp9ln","usage_count":0,"forum_site_name":"bitcointalk.org","forum_user_name":"dannyl","forum_userid":"2093382"},{"id":6,"name":"BitcoinTalk Test Signature 4","image":"/img/onboarding/sig4.png","code":"In teaching others we teach ourselves","verification_code":"eRycp9ln","usage_count":1,"forum_site_name":"bitcointalk.org","forum_user_name":"dannyl","forum_userid":"2093382"},{"id":5,"name":"BitcoinTalk Test Signature 3","image":"","code":"Knowledge comes, but wisdom lingers","verification_code":"eRycp9ln","usage_count":0,"forum_site_name":"bitcointalk.org","forum_user_name":"dannyl","forum_userid":"2093382"},{"id":3,"name":"BitcoinTalk Test Signature 2","image":"/img/onboarding/sig6.png","code":"When in Rome, do as the Romans","verification_code":"eRycp9ln","usage_count":2,"forum_site_name":"bitcointalk.org","forum_user_name":"dannyl","forum_userid":"2093382"},{"id":1,"name":"BitcoinTalk Test Signature 1","image":"/img/onboarding/sig7.png","code":"The pen is mightier than the sword","verification_code":"eRycp9ln","usage_count":0,"forum_site_name":"bitcointalk.org","forum_user_name":"dannyl","forum_userid":"2093382"}]
    //     }
    // },
    components: {
        ModalWidget,
        copiedSignature
    },
    data() {
        return {
        signatures: [{"id":9,"name":"BitcoinTalk Test Signature 7","image":"/img/onboarding/sig1.png","code":"Men never remember, but women never forget","verification_code":"eRycp9ln","usage_count":0,"forum_site_name":"bitcointalk.org","forum_user_name":"dannyl","forum_userid":"2093382"},{"id":8,"name":"BitcoinTalk Test Signature 6","image":"/img/onboarding/sig2.png","code":"A friend walks in when everyone else walks out","verification_code":"eRycp9ln","usage_count":0,"forum_site_name":"bitcointalk.org","forum_user_name":"dannyl","forum_userid":"2093382"},{"id":7,"name":"BitcoinTalk Test Signature 5","image":"/img/onboarding/sig3.png","code":"Follow love and it will flee, flee love and it will follow","verification_code":"eRycp9ln","usage_count":0,"forum_site_name":"bitcointalk.org","forum_user_name":"dannyl","forum_userid":"2093382"},{"id":6,"name":"BitcoinTalk Test Signature 4","image":"/img/onboarding/sig4.png","code":"In teaching others we teach ourselves","verification_code":"eRycp9ln","usage_count":1,"forum_site_name":"bitcointalk.org","forum_user_name":"dannyl","forum_userid":"2093382"},{"id":5,"name":"BitcoinTalk Test Signature 3","image":"","code":"Knowledge comes, but wisdom lingers","verification_code":"eRycp9ln","usage_count":0,"forum_site_name":"bitcointalk.org","forum_user_name":"dannyl","forum_userid":"2093382"},{"id":3,"name":"BitcoinTalk Test Signature 2","image":"/img/onboarding/sig6.png","code":"When in Rome, do as the Romans","verification_code":"eRycp9ln","usage_count":2,"forum_site_name":"bitcointalk.org","forum_user_name":"dannyl","forum_userid":"2093382"},{"id":1,"name":"BitcoinTalk Test Signature 1","image":"/img/onboarding/sig7.png","code":"The pen is mightier than the sword","verification_code":"eRycp9ln","usage_count":0,"forum_site_name":"bitcointalk.org","forum_user_name":"dannyl","forum_userid":"2093382"}],
        showModal: false
        }
    },
=======
    props: {
        signatures: {
            type: Array,
            default: [{"id":9,"name":"BitcoinTalk Test Signature 7","image":"/img/onboarding/sig1.png","code":"Men never remember, but women never forget","verification_code":"eRycp9ln","usage_count":0,"forum_site_name":"bitcointalk.org","forum_user_name":"dannyl","forum_userid":"2093382"},{"id":8,"name":"BitcoinTalk Test Signature 6","image":"/img/onboarding/sig2.png","code":"A friend walks in when everyone else walks out","verification_code":"eRycp9ln","usage_count":0,"forum_site_name":"bitcointalk.org","forum_user_name":"dannyl","forum_userid":"2093382"},{"id":7,"name":"BitcoinTalk Test Signature 5","image":"/img/onboarding/sig3.png","code":"Follow love and it will flee, flee love and it will follow","verification_code":"eRycp9ln","usage_count":0,"forum_site_name":"bitcointalk.org","forum_user_name":"dannyl","forum_userid":"2093382"},{"id":6,"name":"BitcoinTalk Test Signature 4","image":"/img/onboarding/sig4.png","code":"In teaching others we teach ourselves","verification_code":"eRycp9ln","usage_count":1,"forum_site_name":"bitcointalk.org","forum_user_name":"dannyl","forum_userid":"2093382"},{"id":5,"name":"BitcoinTalk Test Signature 3","image":"","code":"Knowledge comes, but wisdom lingers","verification_code":"eRycp9ln","usage_count":0,"forum_site_name":"bitcointalk.org","forum_user_name":"dannyl","forum_userid":"2093382"},{"id":3,"name":"BitcoinTalk Test Signature 2","image":"/img/onboarding/sig6.png","code":"When in Rome, do as the Romans","verification_code":"eRycp9ln","usage_count":2,"forum_site_name":"bitcointalk.org","forum_user_name":"dannyl","forum_userid":"2093382"},{"id":1,"name":"BitcoinTalk Test Signature 1","image":"/img/onboarding/sig7.png","code":"The pen is mightier than the sword","verification_code":"eRycp9ln","usage_count":0,"forum_site_name":"bitcointalk.org","forum_user_name":"dannyl","forum_userid":"2093382"}]
        }
    },
    components: {
        ModalWidget,
        copiedSignature
    },
    data() {
        return {
        signatures: [{"id":9,"name":"BitcoinTalk Test Signature 7","image":"/img/onboarding/sig1.png","code":"Men never remember, but women never forget","verification_code":"eRycp9ln","usage_count":0,"forum_site_name":"bitcointalk.org","forum_user_name":"dannyl","forum_userid":"2093382"},{"id":8,"name":"BitcoinTalk Test Signature 6","image":"/img/onboarding/sig2.png","code":"A friend walks in when everyone else walks out","verification_code":"eRycp9ln","usage_count":0,"forum_site_name":"bitcointalk.org","forum_user_name":"dannyl","forum_userid":"2093382"},{"id":7,"name":"BitcoinTalk Test Signature 5","image":"/img/onboarding/sig3.png","code":"Follow love and it will flee, flee love and it will follow","verification_code":"eRycp9ln","usage_count":0,"forum_site_name":"bitcointalk.org","forum_user_name":"dannyl","forum_userid":"2093382"},{"id":6,"name":"BitcoinTalk Test Signature 4","image":"/img/onboarding/sig4.png","code":"In teaching others we teach ourselves","verification_code":"eRycp9ln","usage_count":1,"forum_site_name":"bitcointalk.org","forum_user_name":"dannyl","forum_userid":"2093382"},{"id":5,"name":"BitcoinTalk Test Signature 3","image":"","code":"Knowledge comes, but wisdom lingers","verification_code":"eRycp9ln","usage_count":0,"forum_site_name":"bitcointalk.org","forum_user_name":"dannyl","forum_userid":"2093382"},{"id":3,"name":"BitcoinTalk Test Signature 2","image":"/img/onboarding/sig6.png","code":"When in Rome, do as the Romans","verification_code":"eRycp9ln","usage_count":2,"forum_site_name":"bitcointalk.org","forum_user_name":"dannyl","forum_userid":"2093382"},{"id":1,"name":"BitcoinTalk Test Signature 1","image":"/img/onboarding/sig7.png","code":"The pen is mightier than the sword","verification_code":"eRycp9ln","usage_count":0,"forum_site_name":"bitcointalk.org","forum_user_name":"dannyl","forum_userid":"2093382"}],
        showModal: false
        }
    },
>>>>>>> 449e8186c6d8f4dbc0ff5e6bca89d5ba830e1265
    methods: {
        onCopy: function (sig) {
            this.$store.commit('signatureCopied', sig.id)
            this.showModal = true;
        },
        
    },
    created () {
        console.log('created', this.signatures)
    }
    
}
</script>

<style scoped>

div {
    width: 100%;
}
ul {
    padding: 0;
    list-style-type: none;
}
li {
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius:5px;
    margin-bottom:10px;
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
     max-width: 100%;
}

</style>

