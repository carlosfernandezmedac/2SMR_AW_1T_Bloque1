
<?php 
    $n1 = intval($_GET['valor1']);
    $n2 = intval($_GET['valor2']);

    if ($n1 > $n2) {
    echo "El número mayor es ($n1)";
    } else {
    echo "El número mayor es ($n2)";
    }
?>

