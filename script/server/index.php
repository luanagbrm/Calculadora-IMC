<?php

    Header('Location: ../../view/resultado.html');
    session_start();
    
    require_once('../../model/Imc.php');

    $imc = new Imc($_POST['input__peso'],$_POST['input__altura']);
    $_SESSION['imc'] = serialize($imc);

?>