$(document).ready(function () {

    //Выгружаем товары в лист товаров на странице shopping_cart.html
    let good = new Good('goods');
    good.render();

    //добавляем обработчик на кнопку очищения формы
    $('input.clear_shopping_cart').on('click', function () {
            let $clearBtn = $('input.clear_shopping_cart');
            let $Elem = $clearBtn.parents().find('form#shopping').find('div.amountGood');
            $($Elem).each(function () {
                $(this).text('0');
            });
    });

    //добавляем обработчик на кнопку отправки формы
    $('a.continue_shopping').on('click', function () {
        //извлекаем все данные из списка товаров
        let $idElem = $(this).parents().find('form#shopping').find('div.table_shopping');
        let $arrY;

        let session = {
            'screens':[],
            'state': true
        };
        $($idElem).each(function () {
            let id_product = $(this).attr('data-id');
            let product_name = $(this).find('span.nazvanie_tovara').text();
            let price = $(this).find('div.good_price').text();
            let count = $(this).find('input.price_good').val();
            //console.log( id_product,product_name,price,count);
            
            if (id_product !== undefined) {
                session.screens.push({'id_product': `${id_product}`,'product_name': `${product_name}`,'price': `${price}`,'count': `${count}`});
            }
        });
        localStorage.setItem('session',JSON.stringify(session));
        $arrY = JSON.parse(localStorage.getItem('session'));
        console.log($arrY);

        //заменяем изображение корины в главном меню и добавляем количество товара
        let $corzina = $('img.corzina');
        $corzina.attr('src','../img/red_corzina.png');



        let $countDiv = $('<div />', {
            class: 'countDiv',
            text: `(...)`
        });

        $corzina.before($countDiv);
    })

});