import { disconnect } from 'process';
import * as React from 'react';



interface SideBarProps {
    // showSideBar: () => void;
    data: any;
}


const SideBar: React.FC<SideBarProps> = ({data}) => {
    const test = () => {
        console.log(test)
        data;
    }



    return (
        <div>hello</div>
    ) 
    
}


export default SideBar;