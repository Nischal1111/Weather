<?php
$admin="localhost";
$username="root";
$password="";
$database_name="2228119";
$conn=mysqli_connect($admin,$username,$password,$database_name);
if($conn){
    #echo "connection sucessful";
}
else{
    echo "connection failed".mysqli_connect_error();
}
?>