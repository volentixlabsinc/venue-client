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
            <th/>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="FORUM">bitcointalk.org</td>
            <td data-label="USERNAME">Sandra</td>
            <td data-label="USER ID">332584</td>
            <td data-label="STATUS"><i class="fa fa-check" style="color:white"/> Verified </td>
            <td class="button"><button @click="startOnBoarding('bitcointalk')" class="btn btn-outline"> Change Signature</button></td>
          </tr>



        </tbody>
      </table>
    </div>
  </main>
</template>


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
  text-align: inherit;
}

table {
  border-collapse: collapse;
  border-radius: 0.3em;
  width: 100%;
  border: solid 0px #94a8b6;
  border-collapse: collapse;
  border-spacing: 0;
  font: normal 13px Arial, sans-serif;
}

table th {
  background-color: #303140;
}

table th,
table td {
  border: solid 1px #94a8b6;
  padding: 10px;
  padding: 0.625em;
  text-align: center;
}

.btn-outline {
  background-color: transparent;
  border: #94a8b6 1px solid;
  border-radius: 50px;
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
  table thead {
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

  table tr {
    border-bottom: none;
    border-left: none;
    border-right: none;
    display: block;
  }
  table td::before {
    content: attr(data-label);
    float: left;
    color: #94a8b6;
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
