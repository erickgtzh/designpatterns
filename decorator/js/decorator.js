class ProductComponent {
    constructor(name) {
        this.name = name;
    }

    getDetail() {
        return `${this.name}`;
    }
}

class ProductDecorator{
    constructor(productComponent){
        this.productComponent = productComponent;
    }

    getDetail() {
        return this.productComponent.getDetail();
    }
}

class StoreProductDecorator extends ProductDecorator{
    constructor(productComponent, price){
        super(productComponent);
        
        this.price = price;
    }

    getDetail() {
        return super.getDetail() + ` ${this.price}`;
    }
}

class HTMLProductDecorator extends ProductDecorator {
    getDetail(){
        return `<h1>Información del producto</h1>
        <p>${super.getDetail()}</p>`
    }
}

class CommercialInfoProductDecorator extends ProductDecorator{
    constructor(productComponent, tradename, brand){
        super(productComponent);

        this.tradename = tradename;
        this.brand = brand;
    }

    getDetail(){
        return `${this.tradename} ${this.brand} ` + super.getDetail();
    }
}

const productComponent = new ProductComponent("Cerveza");
console.log(productComponent.getDetail());

const commercialInfoProduct = new CommercialInfoProductDecorator(productComponent, "London", "Londonense");
console.log(commercialInfoProduct.getDetail());

const storeProduct = new StoreProductDecorator(productComponent, 15.5);
console.log(storeProduct.getDetail())

const htmlProductDecorator = new HTMLProductDecorator(storeProduct);
myDiv.innerHTML = htmlProductDecorator.getDetail();