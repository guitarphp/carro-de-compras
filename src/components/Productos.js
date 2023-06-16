import { Component } from "react"
import Producto from "./Producto"

const styles = {
    productos: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
}

class Productos extends Component {
    render() {
        const { productos, agregarAlcarro } = this.props // productos es un prop que recibe el componente Productos desde App.js y agregarAlcarro es una funcion que recibe el componente Productos desde App.js
        return (
            <div style={styles.productos}>
                {productos.map((producto => // producto es un prop que recibe el componente Producto desde Productos.js
                    <Producto
                        agregarAlcarro={agregarAlcarro} // agregarAlcarro es una funcion que recibe el componente Producto desde App.js
                        key={producto.name} // key es un prop que recibe el componente Producto desde Productos.js
                        producto={producto} // producto es un prop que recibe el componente Producto desde Productos.js
                    />)
                )}
            </div>
        )
    }
}
export default Productos