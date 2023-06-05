import './App.css';

import Header from "./components/Header";
import Demo from "./components/Demo";

export default function App() {
    return (
        <main>
            <div className='main'>
                <div className='gradient' />
            </div>

            <div className='app'>
                <Header />
                <Demo />
            </div>
        </main>
    )
}
