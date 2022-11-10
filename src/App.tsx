import reactLogo from './assets/react.svg'
import './App.css'

import {Card} from "./components";
import {useCounter} from "ahooks";

function App() {
    const [count, {inc, dec}] = useCounter(0);

    return (
        <div className="App">
            <div className={'flex flex-row justify-center'}>
                <a href="https://vitejs.dev" target="_blank">
                    <img src="/vite.svg" className="logo" alt="Vite logo"/>
                </a>
                <a href="https://reactjs.org" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card flex flex-col justify-between">
                <text className={'text-xl'}>count is {count}</text>
                <div className={'my-4 space-x-4'}>
                    <button onClick={() => inc()}>
                        inc
                    </button>
                    <button onClick={() => dec()}>
                        dec
                    </button>
                </div>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
            <div>
                <Card content={'foo bar'}/>
            </div>
        </div>
    )
}

export default App
