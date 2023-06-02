document.addEventListener( 'readystatechange', ()=> {
    if (document.readyState == 'complete') {
        var A_TEMPERATURE = [];
        var valeur = 'toto';
        var test = b().then(function (response) {
            //S'il s'agit de JSON nous pouvons l'exploiter à l'aide de json()
            return response.json();
        });


        function getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }

        var O_HISTORIQUE = document.getElementById('historique');
        var O_DIRECT = document.getElementById('direct');
        var S_PRECEDENT_CLASS = '';
        var I_INDEX_TEMPERATURE = 0;

        test.then(function (O_json) {
            A_TEMPERATURE.push(O_json['capteurs'][0]['Valeur']);
            f(S_PRECEDENT_CLASS);
        });


        function f(S_PRECEDENT_CLASS) {

            if (I_INDEX_TEMPERATURE != 0) {
                b().then(function (response) {
                    //S'il s'agit de JSON nous pouvons l'exploiter à l'aide de json()
                    return response.json().then(function (O_json) {
                        A_TEMPERATURE.push(O_json['capteurs'][0]['Valeur']);
                        console.log(A_TEMPERATURE);
                        let I_TEMPERATURE = A_TEMPERATURE[I_INDEX_TEMPERATURE];
                        c(I_TEMPERATURE);
                    })
                });
            } else {
                let I_TEMPERATURE = A_TEMPERATURE[I_INDEX_TEMPERATURE];
                c(I_TEMPERATURE);
            }

        }

        function b() {
            return fetch("https://hothothot.dog/api/capteurs/exterieur",
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    method: "GET",
                });

        }

        function c(I_TEMPERATURE) {
            let S_NEW_CLASS = 'border-';
            let S_MESSAGE;
            switch (true) {
                case (-10 <= I_TEMPERATURE && I_TEMPERATURE <= 0):
                    S_MESSAGE = 'Brrrrrrr, un peu froid ce matin, mets ta cagoule !' ;
                    S_NEW_CLASS += 'blue';
                    break;
                case (0 < I_TEMPERATURE && I_TEMPERATURE <= 20):
                    S_MESSAGE = '';
                    S_NEW_CLASS += 'green';
                    break;
                case (20 < I_TEMPERATURE && I_TEMPERATURE <= 30):
                    S_MESSAGE = '';
                    S_NEW_CLASS += 'orange';
                    break;
                case (30 < I_TEMPERATURE && I_TEMPERATURE <= 40):
                    S_MESSAGE = 'Caliente ! Vamos a la playa, ho hoho hoho !!';
                    S_NEW_CLASS += 'red';
                    break;
            }
            O_HISTORIQUE.innerHTML += '<div role="alert" class="row '+S_NEW_CLASS+'"><div class="left">'+I_TEMPERATURE+'C°</div><div>'+S_MESSAGE+'</div></div>';
            O_DIRECT.innerHTML = '<div role="alert" class="row '+S_NEW_CLASS+'"><div class="left">'+I_TEMPERATURE+'C°</div><div>'+S_MESSAGE+'</div></div>';
            S_PRECEDENT_CLASS = S_NEW_CLASS;

            setTimeout(f, 60000, [S_PRECEDENT_CLASS,++I_INDEX_TEMPERATURE]);
        }
    }
});

function a() {
    let A_ONGLETS = document.getElementsByClassName('onglet');
    let A_CONTENEURS = document.getElementsByClassName('conteneur');
    A_ONGLETS[0].classList.toggle('active');
    A_ONGLETS[1].classList.toggle('active');
    A_CONTENEURS[0].classList.toggle('active');
    A_CONTENEURS[1].classList.toggle('active')
}

