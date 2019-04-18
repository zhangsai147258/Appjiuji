<?php
        include('simple.php');
        $type=$_GET['type'];
        $login=$_GET['login'];
        if($type==0){
                $sql="select * from car where login='{$login}'";
                $result=$mysqli->query($sql);
                $num=$result->num_rows;
                if($num>0){
                    while($row=$result->fetch_assoc()){
                        $data[]=$row;
                }
              }
                echo json_encode($data);
        }else if($type==1){
                echo '1';
                $listid=$_GET['listid'];
                $shu=$_GET['shu'];
                $sql="update car set carnum='{$shu}' where login='{$login}' and listid='{$listid}'";
                $result=$mysqli->query($sql);
        }else if($type==2){
                $listid=$_GET['listid'];
                // $numa=$_GET['numa'];
                $sql="delete from car where login='{$login}' and listid='{$listid}'";
                $result=$mysqli->query($sql);
        }else if($type==3){
                $listid=$_GET['listid'];
                $price=$_GET['price'];
                $name=$_GET['name'];
                $picsrc=$_GET['picsrc'];
                $sql="select * from car where listid='{$listid}' and login='{$login}'";
                $result=$mysqli->query($sql);
                $num=$result->num_rows;
                if($num>0){
                        $row=$result->fetch_assoc();
                        $num2=$row['carnum']+1;
                        $sql="update car set carnum='{$num2}' where login='{$login}' and listid='{$listid}'";
                        $result=$mysqli->query($sql);
                }else{
                        $sql="insert into car(carpic,carname,carprice,listid,login,carnum) values('{$picsrc}','{$name}','{$price}','{$listid}','{$login}',1)";
                        $result=$mysqli->query($sql);
                }
                // $sql3="select * from car where listid='{$listid}' and login='{$login}'";
                // $result3=$mysqli->query($sql3);
                // $num3=$result3->num_rows; 
                // if($num>0){
                //         while($row=$result->fetch_assoc()){
                //                 $data[]=$row;
                //         }
                // }   
                // echo json_encode($data);
        }
        
?>