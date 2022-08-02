class DocumentContext {
    constructor(){
        this.content = "";
        this.state = new BlankState();
    }

    setState(state) {
        this.state = state;
    }

    write(text) {
        this.state.write(this, text);
    }
}

class BlankState {
    write(documentContext, text) {
        documentContext.content = text;
        documentContext.setState(new WithContentState());
    }
    
}

class WithContentState{
    write(documentContext, text) {
        documentContext.content += " " + text;
    }
}

class ApprovedState{
    write(documentContext, text) {
        console.log("Documento aprobado");
    }
}

const doc = new DocumentContext();
console.log(doc.state);
doc.write("PEPITO");
console.log(doc.content);
console.log(doc.state);

doc.write("ESTO");
doc.write("SE");
doc.write("AGREGA");
console.log(doc.content);

doc.setState(new ApprovedState());
console.log(doc.state);
doc.write("SE");
doc.write("AGREGA");
doc.write("MAS");
console.log(doc.content);

doc.setState(new WithContentState());
console.log(doc.state);
doc.write("NO QUE NO");
console.log(doc.content);

