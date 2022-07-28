// class SaleContext{
//     constructor(strategy) {
//         this.strategy = strategy;
//     }

//     setStrategy(strategy) {
//         this.strategy = strategy;
//     }

//     calculate(amount) {
//         return this.strategy.calculate(amount);
//     }
// }

// class RegularSaleStrategy{
//     constructor(tax){
//         this.tax = tax;
//     }

//     calculate(amount) {
//         return amount + (amount * this.tax);
//     }
// }

// class DiscountSaleStrategy{
//     constructor(tax, discount) {
//         this.tax = tax;
//         this.discount = discount;
//     }

//     calculate(amount) {
//         return amount + (amount * this.tax) - this.discount;
//     }
// }

// class ForeignSaleStrategy{
//     calculate(amount) {
//         return amount * this.getDollarPrice();
//     }

//     getDollarPrice(){
//         return 20;
//     }
// }

// const regularSale = new RegularSaleStrategy(0.16);
// const discountSale = new DiscountSaleStrategy(0.16, 3);
// const foreignSale = new ForeignSaleStrategy();
// const sale = new SaleContext(regularSale);
// console.log(sale.calculate(10))

// sale.setStrategy(discountSale);

// console.log(sale.calculate(10));

// sale.setStrategy(foreignSale);

// console.log(sale.calculate(10));

// Explicación práctica

class InfoContext{
    constructor(strategy, data, element){
        this.setStrategy(strategy);
        this.data = data;
        this.element = element;
    }

    setStrategy(strategy){
        this.strategy = strategy;
    }

    show(){
        this.strategy.show(this.data, this.element);
    }
}

class ListStrategy{
    show(data, element){
        element.innerHTML = data.reduce((ac, i) => {
            return ac + 
                    `<div> 
                        <h2>${i.name}</h2> 
                        <p>${i.country}</p> 
                    </div>
                <hr>`; 
            }, 
        "");
    }
}

const data = [
    {
        name: "Delirium tremens",
        country: "Bélgica",
        info: "La cerveza artesana belga Delirium Tremens tiene todo lo que una cerveza belga de estilo strong blond necesita.",
        img: "https://www.delirium.be/themes/custom/delirium/assets/img/beers/beer_delirium_tremens_bottle.png"
    },
    {
        name: "Budweiser budvar checa",
        country: "República Checa",
        info: "Las cervezas checas son conocidas como las mejores Pilsen del mundo y esto es debido a la calidad de sus materias primas autóctonas. ",
        img: "https://previews.123rf.com/images/monticello/monticello1403/monticello140300019/26389901-budweiser-budvar-una-de-las-cervezas-de-mayor-venta-en-la-rep-checa-exporta-a-m%C3%A1s-de-60-pa%C3%ADses-que-s.jpg"
    },    {
        name: "Guiness",
        country: "Irlanda",
        info: "Ninguna Stout del mundo ha tenido tanto éxito como la Guinness.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Guinness_7686a.jpg/245px-Guinness_7686a.jpg"
    },
];

class DetailedListStrategy{
    show(data, element){
         element.innerHTML = data.reduce((ac, e)=>{
     
            return ac + `<div>
                    <h2>${e.name}</h2> 
                    <p>${e.country}<p>
                    <p>${e.info}</p>
                </div>
            <hr>`;
        }, "");

    }
}

class ListWithImageStrategy{
    show(data, element){
         element.innerHTML = data.reduce((ac, e)=>{
                return ac + `<div>
                        <img width="10%" src="${e.img}">
                        <h2>${e.name.toUpperCase()}</h2> 
                        <p>${e.country}<p>
                        <p>${e.info}</p>
                    </div>
                <hr>`;
        }, "");

    }
}

const strategies = [
    new ListStrategy(),
    new DetailedListStrategy(),
    new ListWithImageStrategy()
];

const info = new InfoContext(new ListStrategy, data, content);
info.show();

slcOptions.addEventListener("change", (event) => {
    const op = event.target.value;
    info.setStrategy(strategies[op]);
    info.show();
})