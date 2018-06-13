/**
 * Класс для извлечения данных из json файла
 */
class Good {
    constructor() {
    }

    render() {
        let create = new CreateGood();

        //Получаем данные о товарах из json
        $.ajax({
            type: 'GET',
            url: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json',
            context: this,
            success: function (data) {
                for (let key in data) {
                    create.render(data[key].id_product, data[key].product_name, data[key].price);
                }
            },
            error: function (error) {
                console.log('Произошла ошибка при получении данных', error);
            },
            dataType: 'json'
        });

    };
}

/**
 * Класс для построения HTML структуры товаров на странице shopping_cart.html
 */
class CreateGood {
    constructor(id_product, product_name, price){
        this.id = id_product;
        this.name = product_name;
        this.price = price;
    }

    render(id_product,product_name,price){
        let url_image, alt_image;

        if (id_product === 123){
            url_image = '../img/computer.png';
            alt_image = 'computer';
        }
        if (id_product === 456){
            url_image = '../img/mouse.png';
            alt_image = 'mouse';
        }
        let $shoppingDiv = $('<div />', {
            class: 'table_shopping row block-card-goods',
            'data-id' : id_product
        });
        let $imageDiv = $('<div />', {
            class: 'colonka1 col-md-4'
        });
        let $img = $('<img />', {
            src: url_image,
            alt: alt_image
        });
        let $captionDiv = $('<div />', {
            class: 'caption_cart_tov'
        });
        let $span = $('<span />', {
            class: 'nazvanie_tovara',
            text: product_name
        });
        let $priceDiv = $('<div />', {
            class: 'yacheyka col-md-2 good_price',
            text: price,
        });
        let $countDiv = $('<div />', {
            class: 'yacheyka col-md-2'
        });
        let $input = $('<input />', {
            type: 'number',
            class: 'price_good',
            id: `shopping_${id_product}`,
            min: '1',
            max: '10',
            placeholder: '0'
        });
        let $shippingDiv = $('<div />', {
            class: 'yacheyka col-md-2',
            text: 'free'
        });
        let $amountDiv = $('<div />', {
            class: 'yacheyka col-md-1 amountGood',
            id: `product_${id_product}`,
            text: '0'
        });
        let $delDiv = $('<div />', {
            class: `yacheyka col-md-1 del_${id_product}`
        });
        let $delSimbol = $('<i />', {
            class: `fas fa-times-circle del_${id_product}`
        });

        $delSimbol.appendTo($delDiv);
        $input.appendTo($countDiv);
        $img.appendTo($imageDiv);
        $captionDiv.appendTo($imageDiv);
        $span.appendTo($captionDiv);
        $imageDiv.appendTo($shoppingDiv);
        $priceDiv.appendTo($shoppingDiv);
        $countDiv.appendTo($shoppingDiv);
        $shippingDiv.appendTo($shoppingDiv);
        $amountDiv.appendTo($shoppingDiv);
        $delDiv.appendTo($shoppingDiv);
        $('.knopki').before($shoppingDiv);

        //Обрабатываем событие увеличения-уменьшения количества товара
        let id_tovara = `#shopping_${id_product}`;
        let amount = `product_${id_product}`;

        $(id_tovara).on('click', function () {
            let count_good = parseInt(document.forms["shopping"][`shopping_${id_product}`].value);
            if (1 < count_good < 10) {
                let y = count_good * price;
                let amount_good = document.getElementById(amount);
                amount_good.innerHTML = `${y}`;
            } else {alert(`Измените количество товара! ${product_name}`);}
    });
        
        //Обрабатываем событие удаления товара
        let id_simbol = `div.del_${id_product}`;
        $(id_simbol).on('click', function () {
            let delElem = $(id_simbol).parent();
            delElem.remove();
        })

    }
}

