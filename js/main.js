//* Для слайдера
let number_img= 1 ;

//* Для сортировки шин
    let sorting_cards = document.getElementById('sorting_cards');
    // let type_sirt = document.getElementById();
    // По размеру
    let width = false ;
    let height = false ;
    let diametr = false ;
    // По марке авто
    let brand  = false ;
    let model = false; 
    let year_of_issue = false ;
    let equipment  = false ;

    let itog_prise = 0 ;
document.getElementById('button_slader').addEventListener('click',function(e){

    x = e.target.attributes.value.value ;

    // Изменит цвет у кнопок
    for( let i = 0 ; i < e.target.parentNode.children.length ; i++ ){
        e.target.parentNode.children[i].style.backgroundColor='var(--rgb-white)';
    };
    e.target.style.backgroundColor='var(--rgb-orange)';

    // Вывод в консоль для проверок нажатий
    console.log();

    if(x == 1){console.log(1)};
    if(x == 2){console.log(2)};
    if(x == 3){console.log(3)};

});

function sorting_tires() {
    (async () => {
        sorting_cards.innerHTML = '';

		//// Поиск JSON файла 
		let fileUrl = 'demoDataTires.json';
		let response = await fetch(fileUrl);
		let DB = await response.json(); // читаем ответ в формате JSON

        // Все параметры шин
		// OwnWheels(`${DB['tires'].sku}`,`${DB['tires'].sku-post}`,`${DB['tires'].name}`,`${DB['tires'].brand}`,`${DB['tires'].model}`,`${DB['tires'].width}`,`${DB['tires'].profile}`,`${DB['tires'].diamert}`,`${DB['tires'].indexNagr}`,`${DB['tires'].indexSpeed}`,`${DB['tires'].spike}`,`${DB['tires'].season}`,`${DB['tires'].typeAuto}`,`${DB['tires'].country}`,`${DB['tires'].DateV}`,`${DB['tires'].diler}`,`${DB['tires'].idDiler}`,`${DB['tires'].demo}`,`${DB['tires'].townDiler}`,`${DB['tires'].optPrice}`,`${DB['tires'].ownPrice}`,`${DB['tires'].remains}`,`${DB['tires'].dateRenewRemains}`,`${DB['tires'].imgProd}`);

		//// Выдача категории с номером карточки
		let cntCardInCategory = 0 ;

		// //* Создание карточки по количесву категорий в JSON файле
		for (let i = 0; i < DB['tires'].length; i++) {      
	        //* Создание карточек
	        sorting_cards.innerHTML += `
                <div class='cards' 
                width='${DB['tires'][i].width}' 
                height='${DB['tires'][i].profile}' 
                diametr='${DB['tires'][i].diamert}' 
                brand='${DB['tires'][i].brand}' 
                model='${DB['tires'][i].model}'
                dataremake='${DB['tires'][i].dateRenewRemains}'
                equipment='';>
                    <div class='cards_imd'><img src="${DB['tires'][i].imgProd}"/></div>
                    <div>
                        <div class='cards_name'>${DB['tires'][i].name}</div>
                        <div class='cards_additional_kit'>
                            <div>Бесплатный ремонт шины</div>
                            <div>Бесплатный шиномонтаж</div>
                        </div>
                        <div class='cards_botton'>
                            <div class='cards_prise'>
                                <div>${DB['tires'][i].ownPrice}</div>
                                <div id='itog_prise' style='color:black;'>0</div>    
                            </div>
                            <div class='cards_amount'>
                                <button class="switches" type="button" onclick="this.nextElementSibling.stepDown()">-</button>
                                <input type="number" min="1" value="1" value='4' class="raz" />шт. 
	        				    <button class="switches" type="button" onclick="this.previousElementSibling.stepUp()">+</button>
                            </div>
                            <div class='cards_in_busket_all'>
                                <div id='cards_bye'>Купить в 1 клик</div>
                                <div id='cards_in_busket'>В корзину</div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
	        cntCardInCategory++;
        };

        console.log(sorting_cards.children.length);

        if( width != false){
            for (let i=0; i != sorting_cards.children.length ; i++){
                if(Number(sorting_cards.children[i].attributes.width.value) !== Number(width)){
                    sorting_cards.children[i].remove();
                };
            };
        };
        if( height != false){
            for (let i=0; i != sorting_cards.children.length ; i++){
                if(Number(sorting_cards.children[i].attributes.height.value) !== Number(height)){
                    sorting_cards.children[i].remove();
                };
            };
        };
        if( diametr != false){
            for (let i=0; i != sorting_cards.children.length ; i++){
                if(Number(sorting_cards.children[i].attributes.diametr.value) !== Number(diametr)){
                    sorting_cards.children[i].remove();
                };
            };
        };
	})();
};

function myNewFunction(sel) {
    if(sel.classList.contains('tyre_width')){
        width = sel.options[sel.selectedIndex].value;
    }
    if(sel.classList.contains('tyre_height')){
        height = sel.options[sel.selectedIndex].value;
    }
    if(sel.classList.contains('tyre_diametr')){
        diametr = sel.options[sel.selectedIndex].value
    }
};

sorting_tires();