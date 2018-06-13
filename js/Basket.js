class Basket
{
    constructor(idBasket)
    {
        this.id = idBasket;

        this.countGoods = 0; //Общее кол-во товаров в корзине
        this.amount = 0; //Общая стоимость товаров
        this.basketItems = []; //Массив для хранения товаров

        //Получаем уже добавленные в корзину товары
        //this.getBasket();
    }

    /**
     * Получаем список товаров для корзины и формируем сразу в HTML
     */
    render()
    {

    }

    // getBasket()
    // {
    //     let appendId = `#${this.id}_items`;
    //     //let self = this;
    //     $.ajax({
    //         type: 'GET',
    //         url: './json/basket_get.json',
    //         context: this,
    //         success: function (data) {
    //             let $basketData = $('<div />', {
    //                 id: 'basket_data'
    //             });
    //
    //             this.countGoods = data.basket.length-1;
    //             this.amount = data.amount;
    //
    //             for (let key in data.basket)
    //             {
    //                 this.basketItems.push(data.basket[key]);
    //             }
    //
    //             $basketData.append(`<p>Всего товаров: ${this.countGoods}</p>`);
    //             $basketData.append(`<p>Общая сумма: ${this.amount}</p>`);
    //             $basketData.appendTo(appendId);
    //         }
    //         ,
    //         error: function (error) {
    //             console.log('Произошла ошибка при получении данных', error);
    //         },
    //         dataType: 'json'
    //     });
    // }

    // add(id_product, price){
    //     let basketNewItem = {
    //         id_product,
    //         price //price: price
    //     };
    //
    //     this.basketItems.push(basketNewItem);
    //     this.countGoods++;
    //     this.amount += price; //this.amount = this.amount + price;
    //     this.refresh(); //Перерисовываем корзину
    // }
    //
    // //TODO - удаление товара из корзины
    // remove(idProduct){
    //
    //     //Нужна проверка на наличие данного товара в корзине!
    //     for (let key in this.basketItems) {
    //         let idKey = this.basketItems[key].id_product;
    //         if (idKey === idProduct) {
    //             let delElem = this.basketItems[key];
    //             let priceDel = this.basketItems[key].price;
    //             this.basketItems.splice($.inArray(delElem,this.basketItems),1);
    //             this.countGoods--;
    //             this.amount = this.amount - priceDel;
    //             break;
    //         };
    //     }
    //     this.refresh();
    // }
    //
    // refresh()
    // {
    //     let $basketData = $('#basket_data');
    //     $basketData.empty(); //Очищаем содержимое контейнера
    //     $basketData.append(`<p>Всего товаров: ${this.countGoods}</p>`);
    //     $basketData.append(`<p>Общая сумма: ${this.amount}</p>`);
    // }
}