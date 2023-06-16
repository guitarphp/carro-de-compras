import { Component } from "react";

const styles = {
    logo: {
        width: '50px',
    }
}
class Logo extends Component {
    render() {
        return (
            <img style={styles.logo} src="/productos/logo192.png" alt="logo" width="50" />
        )
    }
}
export default Logo