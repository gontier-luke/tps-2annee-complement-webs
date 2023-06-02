<!DOCTYPE html>
<html lang="fr">
<head>
    <link rel="stylesheet" href="../css/cw-tp1.css">
    <link rel="stylesheet" href="../css/cw-tp2.css">
    <link rel="stylesheet" href="../css/navigation.css">
</head>
<body>
    <script src="../js/cw-tp2.js"></script>
    <div class="row navigation"><a title="TD 1" alt="td 1" href="../tp1">TD 1</a> - Navigation - <a title="TD 3" alt="td 3" href="../tp3">TD 3</a></div>

    <h1>Températures</h1>
    <div role="navigation" class="row">
        <div class="onglet active" onclick="a()">En direct</div>
        <div class="onglet " onclick="a()">Historique</div>
    </div>
    <div id="direct" class="conteneur active" aria-live="assertive">

    </div>
    <div id="historique" class="conteneur" aria-live="assertive" >
        <div class="header row">
            <div class="left" >Température en C°</div>
            <div class="right">Message</div>
        </div>

    </div>
</body>

</html>