class AppSample extends HTMLElement {
    constructor() {
        super();
        console.log("Creando el componente");
        
        const oImport = 
        document.querySelector('link[rel="import"]').import;
        const oElem = oImport.querySelector("#tp1");
        this.attachShadow({mode: "open"})
            // .innerHTML = "<h1>Componente 1</h1>";
            .innerHTML = oElem.innerHTML;
    }
}

// dentro de customElements pueden definirse los nombres de los componentes que creemos. En el método "define" pasamos un string con el nombre de la etiqueta que usaremos luego en el código html, y luego la clase que queramos que sea referenciada por el componente.
customElements
    .define("app-sample", AppSample);