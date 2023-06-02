<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Test</title>
</head>
<body>
<demo-fantome role="section">

</demo-fantome>

<script>

    class DemoFantome extends HTMLElement {
        constructor() {
            // Toujours appeler super en premier dans le constructeur
            super();

            // Écrire les fonctionnalités de l'élément ici
            // Créer une racine fantôme
            let monFantome = this.attachShadow({mode: 'open'});
            //préparation de nos éléments en vue de les insérer
            let monParagraphe = document.createElement('p');
            monParagraphe.setAttribute('class','uneClasse');
            monParagraphe.textContent = "Bouhouuuuuuuu";
            let style = document.createElement('style');
            style.textContent =`
                    .uneClasse{
                       color: blue;
                    }`;
            // On injecte dans notre fantôme !
            monFantome.appendChild(style);
            monFantome.appendChild(monParagraphe);
        }
    };

    //On exploite notre DOM fantôme
    customElements.define('demo-fantome', DemoFantome);
</script>
</body>
</html>