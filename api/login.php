<?php
    include('dbconn.php');
    $user = $_GET['user'];
    $pwd = $_GET['pwd'];
    $sql = "select * from admin where user='{$user}'";
    $result = $conn->query($sql);
    if($result->num_rows > 0){
        $data = mysqli_fetch_assoc($result);
        if($data['pwd'] == $pwd){
            $msg= 0;
        }else{
            $msg=2;
        }
    }else{
        $msg= 1;
    }
    echo json_encode($msg);
?>