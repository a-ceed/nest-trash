'use strict';

// Функция для получения значения "rating" по "title"
function getRatingByTitle(data, title) {
        console.log("title", title)
        for (var i = 0; i < data.length; i++) {
                if (data[i].title === title) {
                        return data[i].rating;
                }
        }
        return null; // Если объект с указанным "title" не найден
}

fetch('/api/votes')
    .then((response) => response.json())
    .then((data) => {
            console.log("data", data)
            // Маппинг "title" элементов на их id
            var elementsMap = {
                    'cola': 'cocaColaCounter',
                    'bp': 'bpCounter',
                    'starbucks': 'starbucksCounter',
                    'philipmorris': 'philipmorrisCounter',
                    'mcdonalds': 'mcdonaldsCounter',
                    'nestle': 'nestleCounter',
                    'pepsi': 'pepsiCounter',
                    'unilever': 'unileverCounter',
                    'proctergamble': 'pgCounter',
                    'monsanto': 'monsantoCounter',
                    'mondelez': 'mondelezCounter',
                    'mars': 'marsCounter'
            };

            // Установка значений "rating" для элементов на странице
            for (var key in elementsMap) {
                    console.log("elementsMap", elementsMap)
                    var elementId = elementsMap[key];
                    var rating = getRatingByTitle(data, key);
                    if (rating !== null) {
                            document.getElementById(elementId).innerHTML = rating;
                    } else {
                            console.log('Объект с указанным "title" не найден');
                    }
            }
    })
    .catch(error => console.error('Ошибка при выполнении запроса:', error));

