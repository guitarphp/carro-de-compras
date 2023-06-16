import { Component } from "react";
import BubbleAlert from "./BubbleAlert";
import DetalleCarro from "./DetalleCarro";

const styles = {
    carro: {
        backgroundColor: '#359A2C',
        color: '#fff',
        border: 'none',
        padding: '15px',
        borderRadius: '15px',
        cursor: 'pointer',
        transition: 'all 0.3s ease-in-out',
        fontSize: '15px',
    },
    bubble: {
        position: 'relative',
        left: 12,
        top: 20,
    }
}

class Carro extends Component {
    render() {
        const {
            carro, // carro es un prop que recibe el componente Carro desde App.js
            esCarroVisible, // esCarroVisible es un prop que recibe el componente Carro desde App.js
            mostrarCarro // mostrarCarro es una funcion que recibe el componente Carro desde App.js
        } = this.props
        const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0) // reduce es un metodo de los arrays que recibe una funcion y un valor inicial, en este caso la funcion recibe dos parametros, acc y el, acc es el acumulador y el es el elemento, el valor inicial es 0, la funcion retorna la suma del acumulador y la cantidad de cada elemento del array carro, el 0 es el valor inicial del acumulador    
        return (
            <div>
                <span style={styles.bubble}> {/* span es un contenedor de elementos en linea */} {/* styles.bubble es un objeto */}
                    {cantidad !== 0 // Si cantidad es distinto de 0, retorna el componente BubbleAlert, sino retorna null} 
                        ? <BubbleAlert value={cantidad} />
                        : null} {/* Si cantidad es distinto de 0, retorna el componente BubbleAlert, sino retorna null */}
                </span>

                <button onClick={mostrarCarro} style={styles.carro}>
                    Carro
                </button>
                {esCarroVisible ? <DetalleCarro carro={carro} /> : null} {/* Si esCarroVisible es true, retorna el componente DetalleCarro, sino retorna null */} {/* carro es un prop que recibe el componente DetalleCarro desde Carro.js */} {/* esCarroVisible es un prop que recibe el componente DetalleCarro desde Carro.js */}
            </div>
        )
    }
}
export default Carro