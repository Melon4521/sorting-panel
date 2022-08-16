export default function selectGenerate(myJson) {
    let selectGroup = document.getElementById('selectGroup'),
        minPrice = document.getElementById('MinPriceCard'),
        maxPrice = document.getElementById('MaxPriceCard'),
        MenuPriceRange = document.getElementById('MenuPriceRange')

    for (let i = 0; i < selectGroup.children.length; i++) { //Пробежка по всем селектам
        let name = selectGroup.children[i].dataset.name;

        for (let y = 0; y < selectGroup.children[i].children[0].children.length; y++) {
            // Пробежка по каждому оптиону в селекте
            let sovp = 0;
            console.log(selectGroup.children[i].children[0].children);
            for (let x = 0; x < myJson.tires.length; x++) { // Пробежка по JSon товаров
                // console.log(myJson.tires[x][name]);

                if (selectGroup.children[i].children[0].children[y].textContent == myJson.tires[x][name]) {
                    sovp++
                }

                // console.log(selectGroup.children[i].children[0].children.length);
            };
            // console.log(selectGroup.children[i].children[0].children[y].textContent , sovp)
        };
        // if (sovp ==0){
        //     console.log(selectGroup.children[i].children[0].children)
        // }
        console.log('===================================================================================================================================================================');
    };

    for (let i = 0; i < myJson.tires.length; i++) {

        // Отоброжаемый текст ОТ и ДО
        if (
            (Number(myJson.tires[i].price) < Number(minPrice.textContent)) ||
            (Number(myJson.tires[i].price) > Number(maxPrice.textContent)) ||
            (minPrice.attributes.value.value == 'false') ||
            (maxPrice.attributes.value.value == 'false')
        ) {

            if (
                (minPrice.attributes.value.value == 'false') ||
                (maxPrice.attributes.value.value == 'false')
            ) {
                minPrice.attributes.value.value = `${myJson.tires[i].price}`;
                maxPrice.attributes.value.value = `${myJson.tires[i].price}`;
                minPrice.innerHTML = `${myJson.tires[i].price}`;
                maxPrice.innerHTML = `${myJson.tires[i].price}`;
            } else if (myJson.tires[i].price < Number(minPrice.textContent)) {
                minPrice.innerHTML = `${myJson.tires[i].price}`;
            } else {
                maxPrice.attributes.value.value = `${myJson.tires[i].price}`;
                maxPrice.innerHTML = `${myJson.tires[i].price}`;
            };
        };

        // Параметры Value 
        if (
            (MenuPriceRange.min == false) || (MenuPriceRange.max == false) ||
            (Number(MenuPriceRange.min) > Number(myJson.tires[i].price)) || (Number(MenuPriceRange.max) < Number(myJson.tires[i].price))
        ) {
            if (
                (MenuPriceRange.min == false) ||
                (MenuPriceRange.max == false)
            ) {
                MenuPriceRange.min = `${myJson.tires[i].price}`;
                MenuPriceRange.max = `${myJson.tires[i].price}`;
                MenuPriceRange.value = `${myJson.tires[i].price}`;
            } else if (Number(MenuPriceRange.min) > Number(myJson.tires[i].price)) {
                MenuPriceRange.min = `${myJson.tires[i].price}`;
            } else {
                MenuPriceRange.max = `${myJson.tires[i].price}`;
                MenuPriceRange.value = `${myJson.tires[i].price}`;
            };
        };
    };
};