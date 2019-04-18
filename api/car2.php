<?php
        include('simple.php');
        $page=$_GET['page'];
        $shu=($page-1)*2;
        $sql="select * from car2 order by id limit $shu,2";
        $result=$mysqli->query($sql);
        $num=$result->num_rows;
        if($num>0){
        while($row=$result->fetch_assoc()){
            $data[]=$row;
        }
        $arr=array('code'=>1,"data"=>$data);
        // print_r($data);
        }else{
        $arr=array('code'=>0,"data"=>'已无内容加载');
        }
        echo json_encode($arr);
        
        
        
?>