<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>LAB Fullstack</title>
	<link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
<?php

// Realizar la conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "SamsungDes";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
	die("Conexión fallida: " . $conn->connect_error);
}

// Realizar la consulta para obtener los usuarios
$sql = "SELECT * FROM usuarios";
$result = $conn->query($sql);

// Verificar si hay registros
if ($result->num_rows > 0) {
    echo "<table>";
    echo "<tr><th>Nombre</th><th>Primer Apellido</th><th>Segundo Apellido</th><th>Email</th><th>Login</th></tr>";
    
    // Mostrar los usuarios en la tabla
    while ($row = $result->fetch_assoc()) {
        echo "<tr>";
        echo "<td>" . $row["nombre"] . "</td>";
        echo "<td>" . $row["apellido1"] . "</td>";
        echo "<td>" . $row["apellido2"] . "</td>";
        echo "<td>" . $row["email"] . "</td>";
        echo "<td>" . $row["login"] . "</td>";
        echo "</tr>";
    }
    
    echo "</table>";
} else {
    echo "No se encontraron usuarios.";
}

$conn->close();
?>
</body>
</html>