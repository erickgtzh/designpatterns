interface IComponent {
    getDetail(): string;
}

class ProductComponent implements IComponent{
    protected name: string;

    constructor(name: string){
        this.name = name;
    }

    public getDetail(): string {
        return `${this.name}`;
    }
}

abstract class ProductDecorator implements IComponent{
    protected component: IComponent;

    constructor(component: IComponent) {
        this.component = component;
    }

    public getDetail(): string {
        return this.component.getDetail();
    }
}


class CommercialInfoProductDecorator extends ProductDecorator{
    private tradename: string;
    private brand: string;

    constructor(component: IComponent, tradename: string, brand: string){
        super(component);

        this.tradename = tradename;
        this.brand = brand;
    }

    public getDetail(): string {
        return `${this.tradename} ${this.brand} ` + super.getDetail();
    }
}

class StoreProductDecorator extends ProductDecorator{
    private price: number;

    constructor(component: IComponent, price: number){
        super(component);

        this.price = price;
    }

    public getDetail(): string {
        return super.getDetail() + ` ${this.price}`;
    }
}

class HTMLProductDecorator extends ProductDecorator{
    public getDetail(): string {
        return `<h1>Información del producto</h1>
                <p>
                    ${super.getDetail}
                </p>`;
    }
}

const productComponenet = new ProductComponent("Cerveza");
console.log(productComponenet.getDetail());

const commercialInfoProduct = new CommercialInfoProductDecorator(productComponenet, "London", "Fuller");
console.log(commercialInfoProduct.getDetail());

const storeProduct = new StoreProductDecorator(productComponenet, 16.5);
console.log(storeProduct.getDetail());

const storeProduct2 = new StoreProductDecorator(commercialInfoProduct, 15.5);
console.log(storeProduct2.getDetail());

const htmlProductDecorator = new HTMLProductDecorator(storeProduct2);
console.log(htmlProductDecorator.getDetail());