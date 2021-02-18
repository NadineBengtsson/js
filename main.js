let greeting= alert("Hola, bienvenido a LicitAI");

let numero= parseInt(prompt("Ingrese numero de licitacion"));
let organismo=[
    {id:"organismo1", 
    name: "AFIP"},
    {id:"organismo2", 
    name: "ANSES"},
    {id:"organismo3", 
    name: "CNDC"},
    {id:"organismo4", 
    name: "ARSAT"}];

let estados= [
        {id:"status1", 
        name: "estado inicial"},
        {id:"status2", 
        name: "avanzado"},
        {id: "status3", 
        name:"demorado"}]; 
    
function licitacion(){
  this.numero = numeros;
  this.organismo = organismos;
  this.id = id;
};

console.log(licitacion);

function Estado(){
        this.name = estado;
        this.id = id;
};
const nuevoStatus = new Estado(estado="finalizado", id="status4");

function nuevaLicitacion(){
    let nuevoNumero= prompt("Ingresar numero de licitacion");
    let nuevoOrganismo =prompt("Ingresar numero de licitacion");
    return (new pliego (nuevoNumero, nuevoOrganismo, options.name = "estado inicial") 
)};

const searchEstado = estados.find(status => status === "estado inicial"); 

const VerificarEstado=() => {
    if (licitacion == "") {
        console.log("no se ingreso")
    } else {}};

for (const licitacion of organismo) {
    let contendor = document.createElement('div');
    contendor.innerHTML = licitacion
    nuevaLicitacion.appendChild(div);
}




