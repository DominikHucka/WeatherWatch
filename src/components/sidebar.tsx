import * as React from 'react';
import '../css/sidebar.css';

interface SideBarProps {
    showSideBar: () => void;
}



const SideBar: React.FC<SideBarProps> = ({ showSideBar }) => {
    let overlaySideBar = React.useRef<HTMLDivElement>(null);


    const handleClick = () => {
        overlaySideBar.current?.classList.add('d-none');
        showSideBar();
    }




    return (
        <div ref={overlaySideBar} className='overlay'>
            <h2>hello</h2>
            <div onClick={handleClick}>x</div>
        </div>
        
    )

}


export default SideBar;