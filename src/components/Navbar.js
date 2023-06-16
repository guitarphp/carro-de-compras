import { Component } from "react";
import Logo from "./Logo";
import Carro from "./Carro";

const styles = {
    navbar: {
        display: 'flex', // horizontal
        flexDirection: 'row', // horizontal
        alignItems: 'center', // vertical
        height: '100px', // 100px de alto
        justifyContent: 'space-between', // espacio entre los elementos
        position: 'relative',
        padding: '0 50px', // arriba y abajo 0, izq y der 50px
        boxShadow: '0 2px 3px rgb(0,0,0,0.1)', // sombra
    }
}
class Navbar extends Component {
    render() {

        const { carro, esCarroVisible, mostrarCarro } = this.props // destructuring de props para obtener el carro de App.js y la funcion esCarroVisible de App.js que muestra y oculta el carro de compras al hacer click en el icono del carro  
        return (
            <nav style={styles.navbar}> {/* nav es un contenedor de elementos de navegacion */}
                <Logo /> {/* Logo es un componente */}
                <Carro
                    carro={carro} // carro es un prop que recibe el componente Carro desde App.js
                    esCarroVisible={esCarroVisible} // esCarroVisible es un prop que recibe el componente Carro desde App.js
                    mostrarCarro={mostrarCarro} // mostrarCarro es un prop que recibe el componente Carro desde App.js

                />
            </nav>
        )
    }
}
export default Navbar