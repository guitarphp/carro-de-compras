import { Component } from "react";

const styles = {
    titulo: {
        marginBottom: '40px',
    }
}

class Titulo extends Component {
    render() {
        return (
            <h1 style={styles.titulo}>Tienda de Compras</h1>
        )
    }
}
export default Titulo