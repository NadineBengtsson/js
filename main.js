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

function licitacion(){
  this.numero = numeros;
  this.organismo = organismos;
  this.id = id;
};

console.log(licitacion);
let options= [
    {id:"status1", 
    name: "estado inicial"},
    {id:"status2", 
    name: "avanzado"},
    {id: "status3", 
    name:"demorado"}]; 

function Estados(){
        this.name = estado;
        this.id = id;
};
const nuevoStatus = new Estados(estado="finalizado", id="status4");

function nuevaLicitacion(){
    let nuevoNumero= prompt("Ingresar numero de licitacion");
    let nuevoOrganismo =prompt("Ingresar numero de licitacion");
    return (
        new pliego = (nuevoNumero, nuevoOrganismo, options.name = "estado inicial") 
)};

const searchEstado = options.find(status => status === "estado inicial"); 
const filterEstado2 = options.filter(status => status.includes("avanzado"));

const VerificarEstado=() => {
    if (licitacion == "") {
        console.log("no se ingreso")
    } else {}};






