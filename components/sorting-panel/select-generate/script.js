export default function selectGenerate(myJson) {
    let selectGroup = document.getElementById('selectGroup'),
        minPrice = document.getElementById('MinPriceCard'),
        maxPrice = document.getElementById('MaxPriceCard'),
        MenuPriceRange = document.getElementById('MenuPriceRange')

    // for (let i = 0; i < selectGroup.children.length; i++) {
    //     let name = selectGroup.children[i].dataset.name;

    //     for (let z = 0; z < myJson.tires.length; z++) {
    //         let type = myJson.tires[z].name,
    //             sovp = 0;

    //         for (let y = 0; y < selectGroup.children[i].children[0].children[0].children[2].children.length; y++) {

    //             // console.log(selectGroup.children[i].children[0].children[0].children[2].children[y].textContent);

    //             if (selectGroup.children[i].children[0].children[0].children[2].children[y].textContent == type) {
    //                 sovp++
    //             }
    //             // console.log(selectGroup.children[i].children[0].children[0].children[2].children[y]);
    //         };

    //         if (sovp == 0) {
    //             selectGroup.children[i].children[0].children[0].children[2].innerHTML += /*html*/ `
    //             <option>${myJson.tires[z]}</option>
    //             `;
    //         }

    //     };



    //     // // Куда
    //     // console.log(selectGroup.children[i].children[0].children[0].children[2]);
    // };

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