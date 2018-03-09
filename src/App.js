import React, {Component} from 'react';
import styles from './App.scss';
import DefaultView from "./views/defaultview/DefaultView";

class App extends Component {

    render() {
        return (
            <main className={styles.container}>
                <DefaultView/>
            </main>
        );
    }
}

export default App;
