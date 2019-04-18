<?php
        include('simple.php');
        $type3=$_GET['type3'];
        if($type3==3){
            $sql="select * from mess order by rand() limit 5";
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