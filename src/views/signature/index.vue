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
            <th>FORUM</th>
            <th>USERNAME</th>
            <th>USER ID</th>
            <th>STATUS</th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td data-label="FORUM">-</td>
            <td data-label="USERNAME">-</td>
            <td data-label="USER ID">-</td>
            <td data-label="STATUS"><i class="far fa-times-circle" style="color:red;"></i></td>
            <td data-label="" class="button"><button @click="startOnBoarding('bitcointalk')" class="btn btn-outline"> Add Signature</button></td>
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
.main {
    display: flex;
    width: 100%;
    color: white;
}
.container {
    width: 95%;
    display: flex;
    flex-direction: column;
    text-align:inherit;
}

table {
  border-collapse: collapse;
  border-radius: 0.3em;
  width: 100%;
  border: solid 0px #94A8B6;
  border-collapse: collapse;
  border-spacing: 0;
  font: normal 13px Arial, sans-serif;
}

table th {
    background-color: #303140;
}

table th,
table td {
    border: solid 1px #94A8B6;
    padding: 10px;
    padding: .625em;
    text-align: center;
}

.btn-outline {
    background-color:transparent; 
    border: #94A8B6 1px solid;
    border-radius:50px; 
}

@media only screen and (max-width: 600px) {
table {
  border-collapse: collapse;
  border-radius: 0.3em;
  width: 100%;
  border: none;
  border-collapse: collapse;
  border-spacing: 0;
  font: normal 13px Arial, sans-serif;
}
table thead{
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
    position: absolute;
}
table td {
    display: block;
    text-align: right;
    border-left: none;
    border-right: none;
    border-bottom: none;
    margin: 0px 10px 0px 10px;
  }

table  tr {
    border-bottom: none;
    border-left: none;
    border-right: none;
    display: block;
}
table td::before {
    content: attr(data-label);
    float: left;
    color: #94A8B6;
  }
.button {
    display: flex;
    justify-content: center;
}
.btn-outline {
    align-self: center;
}
}
</style>
