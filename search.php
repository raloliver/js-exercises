<?php
    $listNames[]= "Israel";
    $listNames[]= "Fernanda";
    $listNames[]= "Laura";
    $listNames[]= "Antonio";
    $listNames[]= "Valesca";
    $listNames[]= "Ral";
    $listNames[]= "Rael";
    $listNames[]= "Rafael";
    $listNames[]= "Matheus";

    $name       = $_REQUEST["name"];
    $suggestion = "";

    if ($name !== "") {
        $name   = strtolower($name);
        $len    = strlen($name);

        foreach ($listNames as $fixedName) {
            if (stristr($name, substr($fixedName, 0, $len))) {
                if ($suggestion === "") {
                    $suggestion=$fixedName;
                } else {
                    $suggestion .= ", $fixedName";
                }

            }
        }
    }

    echo $suggestion === "" ? "No suggestion" : $suggestion;
 ?>
