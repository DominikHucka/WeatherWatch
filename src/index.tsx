import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);


root.render(
    <React.StrictMode>
        <div className='app'>
            <App />
        </div>
    </React.StrictMode>
)