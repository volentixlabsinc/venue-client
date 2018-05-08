<template>
<main class="main">
  <div class="container">
  <h2>My Signatures</h2>
  <p>Before you can start earning VTX points you will need to copy a custom signature generated 
      by Venue and paste it in your various forum signatures. Start below:
      </p>            
<table class="zui-table">
    <thead>
        <tr>
            <th>Forum</th>
            <th>Username</th>
            <th>User ID</th>
            <th>Status</th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td><i class="far fa-times-circle" style="color:red;"></i>

</td>
            <td><button @click="startOnBoarding('bitcointalk')" class="btn btn-outline"> Add Signature</button></td>
        </tr>
        <tr>
            <td>forum.bitcoin.com</td>
            <td>PG</td>
            <td>34233</td>
            <td> <i class="fas fa-check"></i>

  </td>
            <td><button class="btn btn-outline"> Check Signature </button></td>
        </tr>


    </tbody>
</table>
</div>
</main>
</template>

<script>
import {retrievSignatures} from '../../service/signatures'

    export default {
        mounted() {
             retrievSignatures()
             .then(response => {
                 return response; 
             }) 
             .then(data => {
                 console.log('the signature are...', data)
             })
        },
        methods: {
            startOnBoarding: function(forum) {
                this.$router.push(`/onboarding/${forum}`)
            }
        }
    }
</script>

<style scoped>
table {
  border-collapse: collapse;
  border-radius: 0.3em;
}

.zui-table {
    width: 100%;
    border: solid 1px #DDEEEE;
    border-collapse: collapse;
    border-spacing: 0;
    font: normal 13px Arial, sans-serif;
}
.zui-table thead th {
        background-color: #303140;
    border: solid 1px #DDEEEE;
    color: white;
    padding: 10px;
    text-align: left;
    /* text-shadow: 1px 1px 1px #fff; */
}
.zui-table tbody td {
    border: solid 1px #DDEEEE;
    color: white;
    padding: 10px;
        text-align: left;

    /* text-shadow: 1px 1px 1px #fff; */
}

h2 {
    color:white;
}

p { 
    color:white; 
}

.btn-outline {
    background-color:transparent; 
    color:white; 
    border: white 1px solid;
    border-radius:100px; 
}
</style>
