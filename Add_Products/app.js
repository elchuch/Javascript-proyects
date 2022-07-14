class productos{
    constructor(name,price,anio){
        this.name=name;
        this.precio=price;
        this.anio=anio;
    }

}

class UI{
    addProduct(producto){
        const listProduct= document.getElementById("list");
        const contenido= document.createElement('div')
        contenido.innerHTML=`
        <div class="containerProduct">
           <div class="containerList">
                <p><strong>Nombre:</strong> ${producto.name}</p> 
                <p><strong>Precio:</strong> ${producto.precio} </p>
                <p><strong>Anio:</strong> ${producto.anio}</p>
                <button name="delete">borrar</button>

           </div>


        </div>
        `;
        listProduct.appendChild(contenido);
        

    }
    resetForm(){
        document.getElementById("product-info").reset();
    }
    static deleteProduct(element){
     if(element.name==="delete"){
    element.parentElement.parentElement.parentElement.remove();

     }
    }
    showMessage(mensaje,cssClase){
        const div = document.createElement("div");
        div.className="alert";
        div.appendChild(document.createTextNode(mensaje))

    }
}

document.getElementById("product-info").addEventListener('submit',function(e){
   const name= document.getElementById('name').value;
   const price=document.getElementById('precio').value;
   const anio=document.getElementById('anio').value;
    const producto = new productos(name,price,anio);
    const ui= new UI();//  instancio la clase UI
    ui.addProduct(producto)
 ui.resetForm(); // mando a llamar a una funcion 
                            // del objeto ui,le mando un objeto prodcuto como argumento
   e.preventDefault();
   
});

document.getElementById("list").addEventListener('click',function(e){
   
   UI.deleteProduct(e.target);
});

