<?php
        include('simple.php');
        $type4=$_GET['type4'];
        if($type4==4){
            $sql="select * from comment order by rand() limit 3";
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