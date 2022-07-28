
interface Strategy{
    login(user: string, password: string) : boolean;
}


class LoginContext{
    private strategy: Strategy;

    constructor(strategy: Strategy){
        this.strategy = strategy; 
    }

    setStrategy(strategy: Strategy){
        this.strategy = strategy;
    }

    login(user: string, password: string){
        return this.strategy.login(user, password);
    }
}

class LoginDBStrategy implements Strategy{
    login(user: string, password: string) : boolean{
        console.log("usamos base de datos");
        
        if(user === "admin" && password === "entra"){
            return true;
        }

        return false;
    }
}

class LoginServiceStrategy implements Strategy{
    login(user: string, password: string) : boolean{
        console.log("nos dirigimos a un servicio de autentificación");
        
        if(user === "admin" && password === "entra"){
            return true;
        }

        return false;
    }
}

class LoginGoogleStrategy implements Strategy{
    login(user: string, password: string) : boolean{
        console.log("usamos google");
        if(user === "admin" && password === "entra"){
            return true;
        }

        return false;
    }
}

const auth = new LoginContext(new LoginDBStrategy());
auth.login("admin","entra");
auth.setStrategy(new LoginServiceStrategy());
auth.login("admin","entra");
auth.setStrategy(new LoginGoogleStrategy());
auth.login("admin","entra");

