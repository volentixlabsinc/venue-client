<template>
  <div class="container">
  <h2>Bordered Table</h2>
  <p>The .table-bordered class adds borders on all sides of the table and the cells:</p>            
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
            <td>DeMarcus Cousins</td>
            <td>C</td>
            <td>6'11"</td>
            <td>08-13-1990</td>
            <td>$4,917,000</td>
        </tr>
        <tr>
            <td>Isaiah Thomas</td>
            <td>PG</td>
            <td>5'9"</td>
            <td>02-07-1989</td>
            <td>$473,604</td>
        </tr>


    </tbody>
</table>
</div>

</template>


<style scoped>
table {
  border-collapse: collapse;
  border-radius: 0.3em;
}

.zui-table {
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
    /* text-shadow: 1px 1px 1px #fff; */
}
</style>
