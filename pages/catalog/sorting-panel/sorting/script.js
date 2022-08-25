export default function sortingEvents(myJson, page, arrAll) {

    console.clear();
    let arrSuperfluous = []; // Массив лишних индексо
    arrAll = []

    for (let i = 0; i < myJson.tires.length; i++) { // Генерация всех индексов товаров
        arrAll.push(i)
    };

    let selectAll = document.getElementById('selectGroup'), // Группа селектов
        maxPrice = +(document.getElementById('MaxPriceCard').attributes.value.value),
        inputRangeValue = document.getElementById('MaxPriceCard').textContent;

    for (let i = 0; i < selectAll.children.length; i++) { // Добавление в массив не подходящих по значению
        let type = selectAll.children[i].dataset.name, // Тип , дата-name (brand , w , h , r ...) 
            qualification = selectAll.children[i].children[0].children[0].children[2].value; // Получение value текущего select'a 

        if (qualification != 0) {
            for (let z = 0; z < myJson.tires.length; z++) {
                if (myJson.tires[z][`${type}`] != qualification) {
                    arrSuperfluous.push(z)
                };
            };
        };
    };

    if (+(inputRangeValue) != +(maxPrice)) {
        for (let z = 0; z < myJson.tires.length; z++) {
            if (+(myJson.tires[z].price) >= +(inputRangeValue)) {
                arrSuperfluous.push(z);
            };
        };
    };

    arrAll = arrAll.filter(e => !~arrSuperfluous.indexOf(e)); // Удаление ненужного

    let lastPage = Math.ceil(arrAll.length / 10);
    document.getElementById('pagenPage').children[1].innerHTML = `${lastPage}`;
    document.getElementById('pagenPage').children[0].innerHTML = '1';

    console.log('Номера удалившихся :', arrSuperfluous); // Номера карточек которые удалятся
    console.log('Номера оставшихся :', arrAll); // Остатки , номера которые будут выводится

    return arrAll = arrAll;
};