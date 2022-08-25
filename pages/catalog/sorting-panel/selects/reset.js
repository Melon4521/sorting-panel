export default function reset(myJson, arrAll) {
    let maxPrice = document.getElementById('MaxPriceCard').attributes.value;
    let select = document.getElementById('selectGroup');

    document.getElementById('MaxPriceCard').innerHTML = `${maxPrice.textContent}`;
    document.getElementById('MenuPriceRange').value = document.getElementById('MenuPriceRange').max;
    document.getElementById('pagenPage').children[0].innerHTML = '1';

    arrAll = [];

    for (let i = 0; i < myJson.tires.length; i++) { // Генерация всех индексов товаров
        arrAll.push(i)
    };

    for (let i = 0; i < select.children.length; i++) { // Добавление в массив не подходящих по значению
        if (select.children[i].children[0].children[0].children[2].value != 0){
            select.children[i].children[0].children[0].children[2].value = 0;
            console.log('resets');
        };
    };

    return arrAll = arrAll;
};