import * as React from 'react';
import '../css/sidebar.css';

interface SideBarProps {
    // showSideBar: () => void;
}



const SideBar: React.FC<SideBarProps> = () => {
    // let overlaySideBar = React.useRef<HTMLDivElement>(null);


    // const handleClick = () => {
    //     overlaySideBar.current?.classList.add('d-none');
    //     showSideBar();
    // }




    return (
        <div className='overlay'>
            <h2>hello</h2>
            <div>x</div>
        </div>
        
    )

}


export default SideBar;