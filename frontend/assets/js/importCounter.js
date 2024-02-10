'use strict';

fetch('https://stat.internationaltrashaward.org/company')
    .then((response) => response.json())
    .then((data) => {

        document.getElementById('cocaColaCounter').innerHTML = data['Coca-cola'];
        document.getElementById('bpCounter').innerHTML = data['BP'];
        document.getElementById('starbucksCounter').innerHTML = data['Starbucks'];
        document.getElementById('philipmorrisCounter').innerHTML = data['PhilipM'];
        document.getElementById('mcdonaldsCounter').innerHTML = data['McDonalds'];
        document.getElementById('nestleCounter').innerHTML = data['Nestle'];
        document.getElementById('pepsiCounter').innerHTML = data['Pepsi'];
        document.getElementById('unileverCounter').innerHTML = data['Unilever'];
        document.getElementById('pgCounter').innerHTML = data['ProcterG'];
        document.getElementById('monsantoCounter').innerHTML = data['Monsanto'];
        document.getElementById('mondelezCounter').innerHTML = data['Mondelez'];
        document.getElementById('marsCounter').innerHTML = data['Mars'];

    })

    .catch();
