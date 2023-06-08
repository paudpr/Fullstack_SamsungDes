<?php
// Conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "SamsungDes";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
	die("Conexión fallida: " . $conn->connect_error);
}

// Recuperar datos del formulario
$nombre = $_POST["nombre"];
$apellido1 = $_POST["apellido1"];
$apellido2 = $_POST["apellido2"];
$email = $_POST["email"];
$login = $_POST["login"];
$password = $_POST["password"];

// Validar el formato del email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
	echo "<script>alert('El email no tiene un formato válido'); window.location.href='index.html';</script>";
	exit;
}

// Validar la longitud de la contraseña
if (strlen($password) < 4 || strlen($password) > 8) {
	echo "<script>alert('La contraseña debe tener entre 4 y 8 caracteres'); window.location.href='index.html';</script>";
	exit;
}

// Verificar si el email ya existe en la base de datos
$sql = "SELECT * FROM usuarios WHERE email = '$email'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
	echo "<script>alert('El email ya está registrado'); window.location.href='index.html';</script>";
	exit;
}

// Insertar datos en la tabla usuarios
$sql = "INSERT INTO usuarios (nombre, apellido1, apellido2, email, login, password) 
		VALUES ('$nombre', '$apellido1', '$apellido2', '$email', '$login', '$password')";

if ($conn->query($sql) === TRUE) {
	echo "<script>alert('Registro completado con éxito'); window.location.href='index.html';</script>";
} else {
	echo "Error: " . $sql . "<br>" . $conn->error;
}

// $var = "SELECT COUNT(*) FROM usuarios";
// $i = 0;
// while  ($i < $var) //comprobar
// {
// 	$name_table = @mysql_query("SELECT nombre FROM usuarios WHERE id = $i"); // 
// 	echo $name_table;
// 	$i++;	
// }

$conn->close();
?>
