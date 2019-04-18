<?php
    include('dbconn.php');
    $ppid = $_GET['ppid'];
    $trademark = $_GET['trademark'];
    // $versions = $_GET['versions'];
    // $color = $_GET['color'];
    // $memory = $_GET['memory'];
    $num = $_GET['num'];
    $price = $_GET['price'];
    $img = $_GET['img'];
    $login = $_GET['login'];
    // $sql = "insert into car (listid,carname,carnum,carprice,carpic,login) values({$ppid},{$trademark},{$num},{$price},{$img},{$login})";
    $sql = "insert into car(listid,carname,carnum,carprice,carpic,login) values({$ppid},'{$trademark}',{$num},{$price},'{$img}','{$login}');";
    $result = $conn->query($sql);
    if($conn->affected_rows){
        echo 'true';
    }else{
        echo 'false';
    }
?>