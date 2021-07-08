<?php

$db = 'leaflet';
$user = 'root';
$pass = '';
$host = 'localhost';

$dns = "mysql:host=$host;dbname=$db;charset=utf8mb4";
$connection;

try {
  $connection = new PDO($dns, $user, $pass);
  $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $ex) {
  die("Error connecting to DB: " . $ex->getMessage());
}

$query = "select * from restaurants";
$statement = $connection->prepare($query);

try {
  $statement->execute();
} catch(PDOException $ex) {
  die("Error returning restaurants: " . $ex->getMessage());
}

$rows = $statement->fetchAll(PDO::FETCH_ASSOC);
$json = json_encode($rows);

header('Content-Type: application/json');
echo $json;

?>