export default function sortingEvents() {
    let allItem = document.getElementById('Right'),
        maxPrice = document.getElementById('MaxPriceCard').attributes.value.value;

    for (let i = 0; i < allItem.children.length; i++) {

        console.log(i, Number(allItem.children[i].attributes[3].value) > Number(maxPrice), Number(allItem.children[i].attributes[3].value), Number(maxPrice));
        if (Number(allItem.children[i].attributes[3].value) > Number(maxPrice)) {
            allItem.children[i].style.display='none';
        };
    };
};