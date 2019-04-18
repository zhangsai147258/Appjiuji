<?php
header('content-type:text/html;charset=utf-8');
$mysqli=new mysqli('localhost','root','root','webapp');
if($mysqli->connect_errno){
    die();
};
 $mysqli->set_charset('utf8');

 $page=$_GET['page'];
 $start=($page-1)*2;
 $sql="select * from limlted order by Id desc limit $start,2";
 $result=$conn->query($sql);
 if($result->num_rows>0){
     while($row=$result->fetch_assoc()){
         $list[]=$row;
     }
     $data["list"]=$list;
     $data["list"]=1;
 }else{
     $data["list"]=0;
 }
 echo json_encode($data);

//  $type=$_GET['type'];
//  if($type==0){
//      $sql="select * from limlted";
//      $result=$mysqli->query($sql);
//      $num=$result->num_rows;
//      if($num>0){
//          while($row=$result->fetch_assoc()){
//              $data[]=$row;
//      }
//  }
//  echo json_encode($data);
//  }
?>