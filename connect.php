<?php
class Database {
    private $servername = "localhost";
    private $username = "root";
    private $password = "";
    private $database = "cho";
    private $conn;

    public function __construct() {
        $this->connect();
    }

    private function connect() {
        $this->conn = mysqli_connect($this->servername, $this->username, $this->password, $this->database);
        if (!$this->conn) {
            die('Connection failed: ' . mysqli_connect_error());
        }
    }

    public function executeQuery($sql) {
        $result = mysqli_query($this->conn, $sql);
        if (!$result) {
            die('Query failed: ' . mysqli_error($this->conn));
        }
        return $result;
    }

    public function closeConnection() {
        if ($this->conn) {
            mysqli_close($this->conn);
        }
    }
}
