interface IState{
    next(ticket: Ticket): number | null;
    add(ticket: Ticket, quantity: number): void;
}

// Context
class Ticket{
    private state: IState;
    quantity: number;
    readonly limit: number;
    private number: number;

    constructor(limit: number){
        this.quantity = 0;
        this.limit = limit;
        this.number = 0;
        this.state = new EmptyState();
    }

    get getNumber(): number{
        return this.number++;
    }
    set setState(state: IState){
        this.state = state;
    }

    get getState(){
        return this.state;
    }

    next(): number | null{
        return this.state.next(this);
    }

    add(quantity: number): void{
        this.state.add(this, quantity);
    } 
}

// Estados
class EmptyState implements IState{
    
    next(ticket: Ticket): null {
        return null;
    }

    add(ticket: Ticket, quantity: number): void {
        if((ticket.quantity + quantity) < ticket.limit){
            ticket.quantity += quantity;
            ticket.setState = new WithDataState();
        }else if((ticket.quantity + quantity) === ticket.limit){
            ticket.quantity += quantity;
            ticket.setState = new FullState();
        }
    }

}
class WithDataState implements IState{
    next(ticket: Ticket): number {
        ticket.quantity--;
        if(ticket.quantity<=0){
            ticket.setState = new EmptyState();
        }
        return ticket.getNumber;
      
    }
    add(ticket: Ticket, quantity: number): void {
        if((ticket.quantity + quantity) < ticket.limit){
            ticket.quantity += quantity;
            ticket.setState = new WithDataState();
        }else if((ticket.quantity + quantity) === ticket.limit){
            ticket.quantity += quantity;
            ticket.setState = new FullState();
        }
    }
}

class FullState implements IState{
    next(ticket: Ticket): number {
        ticket.quantity--;
        if(ticket.quantity <=0)
            ticket.setState = new EmptyState();
        else
            ticket.setState = new WithDataState();
        return ticket.getNumber;
    }
    add(ticket: Ticket, quantity: number): void {
        console.log("Cupo lleno");
    }
}

const ticket = new Ticket(5);
console.log(ticket.getState);
console.log(ticket.next());
ticket.add(6);
console.log(ticket.getState);
console.log(ticket.next());
ticket.add(4);
console.log(ticket.getState);
console.log(ticket.next());
console.log(ticket.next());
ticket.add(3);
console.log(ticket.getState);
ticket.add(1);
console.log(ticket.next());
console.log(ticket.getState);
console.log(ticket.next());
console.log(ticket.next());
console.log(ticket.next());
console.log(ticket.next());
console.log(ticket.getState);
