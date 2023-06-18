<?php

    session_start();
    require_once('../../model/Imc.php');

    $imc = unserialize($_SESSION['imc']);
    
    $dados = $imc->array();

    Header('Content-Type: application/json');
    echo json_encode($dados);

?>