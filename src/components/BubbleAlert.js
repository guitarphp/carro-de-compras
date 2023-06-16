import { Component } from "react";

const styles = {
    bubbleAlert: {
        backgroundColor: '#E9725A',
        borderRadius: '15px',
        padding: '2px 10px',
        fontSize: '0.9rem',
        color: '#fff',
        width: '20px',
    }
}
class BubbleAlert extends Component {
    getNumber(n) { // Funcion que recibe un parametro n (numero) 
        if (!n) { return '' }  // Si n es falso, retorna un string vacío
        return n > 9 ? '9+' : n // Si n es mayor a 9, retorna '9+', sino retorna n
    }
    render() {
        const { value } = this.props // value es un prop que recibe el componente BubbleAlert desde Carro.js
        return (
            <span style={styles.bubbleAlert}>
                {this.getNumber(value)} {/* Llama a la funcion getNumber */}
            </span>
        )
    }
}
export default BubbleAlert