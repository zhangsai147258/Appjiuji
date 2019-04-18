<?php
        include('simple.php');
        $type2=$_GET['type2'];
        if($type2==2){
            $sql="select * from mess order by rand() limit 4";
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