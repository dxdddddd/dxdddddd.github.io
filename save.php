<!DOCTYPE html>
<html>
<head>
<body>
<?php   
  foreach ($_POST as $key => $value){echo "<li>{$key} : {$value} </li>";}
?>
</body>
</head>
</html>