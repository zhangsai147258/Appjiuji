<?php
        include('simple.php');
        $type=$_GET['type'];
        if($type==0){
            $sql="select * from second";
            $result=$mysqli->query($sql);
            $num=$result->num_rows;
            if($num>0){
                while($row=$result->fetch_assoc()){
                    $data[]=$row;
            }
        }
        echo json_encode($data);
        }
        
        
?>