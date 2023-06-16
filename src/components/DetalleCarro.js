import { Component } from "react";

const styles = {
    carro: {

        backgroundColor: '#fff',
        position: 'absolute',
        marginTop: 30,
        boxShadow: '1px 5px 5px rgb(0,0,0,0.3)',
        borderRadius: '5px',
        width: '300px',
        right: 50,

    },
    ul: {

        margin: 0,
        padding: 0,
    },
    producto: {

        listStyleType: 'none',
        display: 'flex', // convierte el elemento en un flex container (contenedor flexible)
        justifyContent: 'space-between', // alinea horizontalmente los elementos del carro
        alignItems: 'center', // alinea verticalmente los elementos del carro
        padding: '25px 20px',
        borderBottom: 'solid 1px #aaa', // borde inferior de 1px de color #aaa

    }
}
class DetalleCarro extends Component {
    render() {
        const { carro } = this.props // destructuring de props para obtener el carro de App.js
        return (
            <div style={styles.carro}>

                <ul style={styles.ul}>
                    {carro.map(x => // map es un metodo de los arrays que recibe una funcion, en este caso la funcion recibe un parametro, x, la funcion retorna un li por cada elemento del array carro
                        <li style={styles.producto} key={x.name}>   {/* li es un elemento de lista */} {/* styles.producto es un objeto */} {/* key es un prop que recibe el componente DetalleCarro desde Carro.js */}
                            <img alt={x.name} src={x.img} width='50' height='32' /> {/* img es un prop que recibe el componente DetalleCarro desde Carro.js */}
                            {x.name} <span>{x.cantidad}</span> {/* x es un prop que recibe el componente DetalleCarro desde Carro.js */}
                        </li>)} {/* x es un prop que recibe el componente DetalleCarro desde Carro.js */} {/* key es un prop que recibe el componente DetalleCarro desde Carro.js */} {/* map es un metodo de los arrays que recibe una funcion, en este caso la funcion recibe un parametro, x, la funcion retorna un li por cada elemento del array carro */}
                </ul>
            </div>
        )
    }
}
export default DetalleCarro