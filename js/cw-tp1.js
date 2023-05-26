document.addEventListener( 'readystatechange', ()=> {
        if (document.readyState == 'complete') {
            var A_TEMPERATURE = [];


            for (i = 0; i < 20; ++i) {
                A_TEMPERATURE.push(getRndInteger(-10, 40));
            }

            function getRndInteger(min, max) {
                return Math.floor(Math.random() * (max - min)) + min;
            }


            document.getElementById('conteneur').setAttribute('class', '');
            var O_CONTENEUR = document.getElementById('conteneur');
            var S_PRECEDENT_CLASS = '';
            var I_INDEX_TEMPERATURE = 0;
            f(S_PRECEDENT_CLASS)

            function f(S_PRECEDENT_CLASS    ) {
                let I_TEMPERATURE = A_TEMPERATURE[I_INDEX_TEMPERATURE];
                O_CONTENEUR.innerText = I_TEMPERATURE ;

                let S_NEW_CLASS = 'border-';
                let O_MESSAGE = document.getElementById('message');
                switch (true) {
                    case (-10 <= I_TEMPERATURE && I_TEMPERATURE <= 0):
                        O_MESSAGE.innerText = 'Brrrrrrr, un peu froid ce matin, mets ta cagoule !' ;
                        S_NEW_CLASS += 'blue';
                        break;
                    case (0 < I_TEMPERATURE && I_TEMPERATURE <= 20):
                        O_MESSAGE.innerText = '';
                        S_NEW_CLASS += 'green';
                        break;
                    case (20 < I_TEMPERATURE && I_TEMPERATURE <= 30):
                        O_MESSAGE.innerText = '';
                        S_NEW_CLASS += 'orange';
                        break;
                    case (30 < I_TEMPERATURE && I_TEMPERATURE <= 40):
                        O_MESSAGE.innerText = 'Caliente ! Vamos a la playa, ho hoho hoho !!';
                        S_NEW_CLASS += 'red';
                        break;
                }
                console.log(O_MESSAGE.innerText);
                if (S_PRECEDENT_CLASS[0] != ''){
                    O_CONTENEUR.classList.remove(S_PRECEDENT_CLASS[0]);
                    O_CONTENEUR.classList.add(S_NEW_CLASS);
                }else {
                    O_CONTENEUR.classList.add(S_NEW_CLASS);
                }
                S_PRECEDENT_CLASS = S_NEW_CLASS;

                if (I_INDEX_TEMPERATURE != A_TEMPERATURE.length-1)
                setTimeout(f, 2000, [S_PRECEDENT_CLASS,++I_INDEX_TEMPERATURE]);

            }
        }
    }
);