//Array menú de congelados
const congelados= [
    {id:01,menu:"Arroyados de Primavera",unidades:6,precio:250},
    {id:02,menu:"Tequeños de Queso Llanero",unidades:8,precio:350},
    {id:03,menu:"Tequeños de Platano y Queso",unidades:8,precio:400},
    {id:04,menu:"Hamburguesa Vegana",unidades:2,precio:200},
    {id:05,menu:"Pan de Queso",unidades:2,precio:250},
    {id:06,menu:"Falafel",unidades:2,precio:200},
    {id:07,menu:"Arepa de Remolacha",unidades:2,precio:100},
    {id:08,menu:"Arepa de Calabaza",unidades:2,precio:100},
    {id:09,menu:"Arepa de Espinaca",unidades:2,precio:80},
];

//funcionalidad filtro de congelados
const findcongeladosGarza=(arr,filtro)=>{
    const menuArepa=arr.filter((el)=>{
        return el.menu.includes(filtro)
    })
    return menuArepa;
}

//Buscar Arepas

const Arepas=findcongeladosGarza(congelados,"Arepa");

let menuArepas="El menú de Arepas es el siguiente:\n"

for (let i=0;i < Arepas.length; i++){
    const itemAr= Arepas[i];
    menuArepas+=`Menú:  ${itemAr.menu} - Unidades: ${itemAr.unidades} - Precio: ${itemAr.precio}$\n`;
}


//Menú de Tequeños

const Tequeños=findcongeladosGarza(congelados,"Tequeños");
let menuTequeños="El menú de tequeños es el siguiente:\n";

for (let i=0;i < Tequeños.length; i++){
    const itemTe=Tequeños[i];
    menuTequeños+=`Menú:  ${itemTe.menu} - Unidades: ${itemTe.unidades} - Precio: ${itemTe.precio}$\n`
};

//let de congelados a string
const congeladosRecomendados= congelados.slice(0,5); // 
let congeladosRecomend = "Menú de congelados recomendados de Garza Mora:\n";

//Congelados recomendados
for (let i = 0; i < congeladosRecomendados.length; i++) {
    const itemRe = congeladosRecomendados[i];
    congeladosRecomend += `ID: ${itemRe.id} - ${itemRe.menu} - Unidades: ${itemRe.unidades} - Precio: ${itemRe.precio}$\n`;
  };

let congeladosString = "Menú de congelados de Garza Mora:\n";

for (let i = 0; i < congelados.length; i++) {
  const item = congelados[i];
  congeladosString += `Menú:  ${item.menu} - Unidades: ${item.unidades} - Precio: ${item.precio}$\n`;
};

//let de congelados por mil pesos
//crear una función para filtrar

let ofertasCongelados= "Armá tu heladera por mil pesos:\n";
let total = 0;
let items = [];
let selectedId = null;


for (let i = 0; i < congelados.length; i++) {
  
  if (total + congelados[i].precio <= 1000 && congelados[i].id !== selectedId) {
   
    total += congelados[i].precio;
   
    items.push(congelados[i].menu);
   
    selectedId = congelados[i].id;
  }
}


const menuPorMil = ofertasCongelados+ `${selectedId}: ${items.join(", ")}\n`;

//Producto más económicos
let menuSale="Menú por menos de 200 pesos:\n";
function filtrarPrecio(arr,filtro){
    return arr.filter((el)=>{
        return el.precio <= filtro
      })
    }
const económicosF= filtrarPrecio(congelados,150)
/* console.log(económicosF) */

for (let i=0;i < económicosF.length; i++){
    const itemE=económicosF[i];
    menuSale+=`Menú:  ${itemE.menu} - Unidades: ${itemE.unidades} - Precio: ${itemE.precio}$\n`;

}
//funciones con prompt
alert("Bienvenidx al menú de congelados de Garza Mora!")
const carroDeCompras=[];
const sugeridosOMenu = prompt("Ingresa si quieres ver:\n1. Menú y Sugeridos\n2. Menú y carrito de compras");

if (sugeridosOMenu === "1") {
  const seleccion = prompt("Ingresa si quieres ver:\n1. Menú completo\n2. Los 5 Recomendados\n3. Menu de Arepas\n4. Menu de Tequeños\n5. Menú todo por 1000$\n6.Personalizado\n7.Sale");
  if(seleccion==="1"){
    alert(congeladosString);
}else if (seleccion==="2"){
    alert(congeladosRecomend);

}else if (seleccion==="3"){
    alert(menuArepas)
}else if (seleccion==="4"){
    alert(menuTequeños)
    }else if (seleccion==="5"){
    alert(menuPorMil)
    }
else if (seleccion === "6") {
    const menuPersonal ={
        id: congelados.length + 1,
        menu: prompt("Ingresa el nombre del menú personalizado: "),
        unidades: parseInt(prompt("Ingresa la cantidad de unidades disponibles: ")),
        precio: parseInt(prompt("Ingresa el precio del menú personalizado: ")),
      };
      congelados.push(menuPersonal);
     
    
}else if(seleccion==="7"){
    alert(menuSale)
}

//Funcionalidad opción 2 menú separadado

} else if (sugeridosOMenu === "2") {
    const seleccionMenu = prompt("Este es nuestro Menú completo (Primera compra online tiene 10% de descuento!!):\n1. Arroyados de primavera\n2. Tequeños de queso llanero\n3. Tequeños de platano y queso\n4. Hamburguesa Vegana\n5. Pan de queso\n6.Falafel\n7.Arepa de Remolacha\n8.Arepa de Calabaza\n9.Arepa de Espinaca");
  
    agregarAlCarro(seleccionMenu);
  
  } else {
    
        alert("Opción no valida")


  }
  

  //Funcionalidad agregar al carrito


  function agregarAlCarro(seleccionMenu){
    let item;
    let precioConDescuento;
    switch(seleccionMenu){
        case "1":
            item = congelados[0];
            break;
        case "2":
            item = congelados[1];
            break;
        case "3":
            item = congelados[2];
            break;
        case "4":
            item = congelados[3];
            break;
        case "5":
            item = congelados[4];
            break;
        case "6":
            item = congelados[5];
            break;
        case "7":
            item = congelados[6];
            break;
        case "8":
            item = congelados[7];
            break;
        case "9":
            item = congelados[8];
            break;
        default:
            alert("Opción no válida");
            return;
    }
    precioConDescuento = item.precio * 0.9;
    item.precio = precioConDescuento;
    item.conDescuento = true;
    carroDeCompras.push(item);
    alert(`Añadiste al carrito: ${item.menu} ${item.unidades} Unidades ${precioConDescuento} Pesos`);
}




// Funcionalidad carrito