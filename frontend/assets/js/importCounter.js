'use strict';

fetch('/api/company')
    .then((response) => response.json())
    .then((data) => {

        document.getElementById('cocaColaCounter').innerHTML = data['cola'];
        document.getElementById('bpCounter').innerHTML = data['bp'];
        document.getElementById('starbucksCounter').innerHTML = data['starbucks'];
        document.getElementById('philipmorrisCounter').innerHTML = data['philipmorris'];
        document.getElementById('mcdonaldsCounter').innerHTML = data['mcdonalds'];
        document.getElementById('nestleCounter').innerHTML = data['nestle'];
        document.getElementById('pepsiCounter').innerHTML = data['pepsi'];
        document.getElementById('unileverCounter').innerHTML = data['unilever'];
        document.getElementById('pgCounter').innerHTML = data['proctergamble'];
        document.getElementById('monsantoCounter').innerHTML = data['monsanto'];
        document.getElementById('mondelezCounter').innerHTML = data['mondelez'];
        document.getElementById('marsCounter').innerHTML = data['mars'];

    })

    .catch();
