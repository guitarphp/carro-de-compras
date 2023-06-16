import { Component } from 'react';
import Productos from './components/Productos';
import Layout from './components/Layout.js';
import Titulo from './components/Titulo.js';
import Navbar from './components/Navbar.js';

class App extends Component {
  state = {
    productos: [
      { name: 'Tomate', price: 1500, img: '/productos/tomate.png' },
      { name: 'Arberjas', price: 2500, img: '/productos/arbejas.png' },
      { name: 'Lechuga', price: 500, img: '/productos/lechuga.png' },
    ],
    carro: [],
    esCarroVisible: false,
  }
  agregarAlcarro = (producto) => { // arrow function
    const { carro } = this.state // destructuring  // this.state.carro es un arreglo de objetos que contiene los productos agregados al carrito de compras 
    if (carro.find(x => x.name === producto.name)) { // find() busca un elemento en el arreglo y retorna el elemento
      const newCarro = carro.map(x => x.name === producto.name
        ? ({ // map() recorre el arreglo
          ...x, // spread operator  // retorna el objeto producto encontrado en el arreglo carro y le agrega la propiedad cantidad 
          cantidad: x.cantidad + 1 // agrega la propiedad cantidad al objeto producto y le suma 1
        }) : x) // si no encuentra el elemento, retorna el mismo objeto sin modificar
      return this.setState({ carro: newCarro }) // setState() actualiza el estado del componente 
    }
    return this.setState({ // setState() actualiza el estado del componente 
      carro: this.state.carro.concat({  // concat() agrega un elemento al final del arreglo y retorna el arreglo
        ...producto, // spread operator 
        cantidad: 1 // agrega la propiedad cantidad al objeto producto y le asigna 1
      })
    })
  }
  mostrarCarro = () => { // arrow function 
    if (!this.state.carro.length) { // si el arreglo carro esta vacio 
      return // no hace nada
    }
    this.setState({ esCarroVisible: !this.state.esCarroVisible }) // setState() actualiza el estado del componente  // this.state.esCarroVisible es un booleano que indica si el carrito de compras esta visible o no 
  }
  render() {
    const { esCarroVisible } = this.state // destructuring  // this.state.esCarroVisible es un booleano que indica si el carrito de compras esta visible o no
    return (
      <div>
        <Navbar
          carro={this.state.carro}
          esCarroVisible={esCarroVisible}
          mostrarCarro={this.mostrarCarro} /> {/* pasar el arreglo carro como propiedad al componente Navbar */} {/* pasar el booleano esCarroVisible como propiedad al componente Navbar */} {/* pasar la funcion mostrarCarro como propiedad al componente Navbar */}
        <Layout>
          <Titulo />
          <Productos
            agregarAlcarro={this.agregarAlcarro} // pasar la funcion agregarAlcarro como propiedad al componente Productos
            productos={this.state.productos} // pasar el arreglo productos como propiedad al componente Productos
          />
        </Layout>
      </div>
    )
  }
}

export default App;
