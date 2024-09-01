import * as React from 'react';
import '../css/sidebar.css';

interface SideBarProps {
    showSideBar(): void;
}


const SideBar: React.FC<SideBarProps> = () => {
    const showOverlay = React.useRef<HTMLDivElement>(null);


    const showSideBar = () => {
        console.log('ho ho', showSideBar)
    }


    return (
        <div ref={showOverlay} className='overlay'>
            <h2>hello</h2>
        </div>
    ) 
    
}


export default SideBar;