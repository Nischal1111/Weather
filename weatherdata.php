<?php

include 'weather.php';                               
$name='Liverpool';                      
date_default_timezone_set("Europe/London");                 
$apikey='3b78646e607ef8339ad00a4028c8f6d1';
$url='https://api.openweathermap.org/data/2.5/weather?q='.$name.'&units=metric&appid='.$apikey;
$data=json_decode(file_get_contents($url),true);
$temperature=$data['main']['temp'];
$icon=$data['weather'][0]['icon'];
$description=$data['weather'][0]['description'];
$pressure=$data['main']['pressure'];
$humidity=$data['main']['humidity'];
$windspeed=$data['wind']['speed'];
$winddirection=$data['wind']['deg'];
$date = date('Y-m-d H:i:s');
?>

<?php
$database="insert into WEATHER values('$name','$temperature','$description','$pressure','$humidity','$windspeed','$winddirection','$date');";
if(mysqli_query($conn,$database)){
}
else{
    echo "try again";
}
?>

<?php
$display="select * from WEATHER order by date desc limit 1";
$link=mysqli_query($conn,$display);
$fetch=mysqli_fetch_assoc($link);
print json_encode($fetch);
?>


<?php
$link->free_result();
$conn->close();