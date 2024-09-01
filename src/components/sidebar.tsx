import * as React from 'react';
import '../css/sidebar.css';

interface SideBarProps {
    showSideBar: () => void;
}


const SideBar: React.FC<SideBarProps> = () => {
    const test = () => {
        console.log(test)
    }



    return (
        <div ref={overlay} className='overlay'>
            <h2>hello</h2>
        </div>
    ) 
    
}


export default SideBar;