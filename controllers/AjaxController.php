<?php 
require_once('../models/Server.php');

class AjaxController{
    
    public function sumarUno($numero){
        $calculator = new Calculator();
        $resultado = $calculator->sumar($numero, 1);
        echo json_encode($resultado);
    }
    
    
}  

// recibiendo solicitud AJAX
if($_SERVER['REQUEST_METHOD']==='POST'){
    
    $ajax = new AjaxController();
    $ajax->sumarUno($_POST['number']);
}

?>