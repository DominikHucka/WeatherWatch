import * as React from 'react';
import '../css/dataCard.css';


interface DataCardProps {
    description: string;
    img: string;
}


const DataCard: React.FC<DataCardProps> = ({ description, img }) => {
    return <div>
        <div className="card" style={{ width: "10rem", height: "5rem" }}>
            <img src={"image/" + img} className="card-img-top" alt="..." style={{height: "auto", width:"50px"}} />
            {/* <img src="/image/wind.png" alt="" /> */}
            <div className="card-body">
                <p className="card-text">{description}</p>
            </div>
        </div>
    </div>
}


export default DataCard;