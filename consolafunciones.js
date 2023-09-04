/*Para ver todo el contenido del Array => verropa()*/
function verropa() {
for (let i = 0; i < ropa.length; i++) {
    console.log("imagen: " + ropa[i].imagen);
    console.log("nombre: " + ropa[i].nombre);
    console.log("precio: " + ropa[i].precio)
}}

/*Para ver todo lo que son remeras*/
function buscarremeras() {
    let ropita = confirm("Ver todos los modelos de remeras")
    let casacas = ropa.filter(remeras => remeras.categoria === "remeras")
    console.table(casacas)
}

/*Para ver todo lo que son pantalones*/
function buscarpantalones() {
    let ropita = confirm("Ver todos los modelos de pantalones")
    let lompa = ropa.filter(pantalones => pantalones.categoria === "pantalones")
    console.table(lompa)
}

/*Para ver todo lo que son zapatillas*/
function buscarzapatillas() {
    let ropita = confirm("Ver todos los modelos de zapatillas")
    let zapas = ropa.filter(zapatillas => zapatillas.categoria === "zapatillas")
    console.table(zapas)
}

/*Para buscar una prenda por su nombre*/
function buscarropa() {
    let prenda = prompt("Buscar: ")
    let respuesta = ropa.find((ropa) => ropa.nombre === prenda)
    console.log(respuesta)
}

/*Para ver la bolsa de compra*/
function totaldecompra() {
    let totalbolsa = bolsa.reduce((acc, bolsa) => acc + bolsa.precio, 0)
    confirm("El total es de: " + totalbolsa)
    console.table(bolsa)
    console.warn("El total es de: " + totalbolsa)
}

/*Para finalizar la compra*/
function findelacompra() {
    let fin = confirm("¿Comprar?")
    if(fin === true) {
        confirm("Gracias, que lo disfrute, vuelva pronto.")
    } else {
        console.warn("Mire más ropa...") 
        console.table(ropa)
    }
}




