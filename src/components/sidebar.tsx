import * as React from 'react';
import '../css/sidebar.css';

interface SideBarProps {
    showSideBar: () => boolean;
}



const SideBar: React.FC<SideBarProps> = ({ showSideBar }) => {
    let overlaySideBar = React.useRef<HTMLDivElement>(null);


    const handleClick = () => {
        setTimeout(()=> {
            if (showSideBar()) {
                overlaySideBar.current?.classList.add('fade-out-animation');
            } else {
                overlaySideBar.current?.classList.remove('fade-out-animation');
            }
        }, 50);
        
    }




    return (
        <div ref={overlaySideBar} className='overlay'>
            <h2>hello</h2>
            <div onClick={handleClick}>x</div>
        </div>
    )
}


export default SideBar;