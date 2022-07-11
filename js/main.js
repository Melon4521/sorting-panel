let number_img= 1 ;

document.getElementById('button_slader').addEventListener('click',function(e){

    for( let i = 0 ; i < e.target.parentNode.children.length ; i++ ){
        e.target.parentNode.children[i].style.backgroundColor='var(--rgb-white)';
    }

    e.target.style.backgroundColor='var(--rgb-orange)';

});