import * as React from 'react';
import '../css/dataCard.css';


interface DataCardProps {
    value: string;
    img: string;
    title: string;
}


const DataCard: React.FC<DataCardProps> = ({ value, img, title }) => {
    return <div>
        <div className="card" style={{ width: "10rem", height: "6rem" }}>
            <div className='description'>
                <img src={"image/" + img} className="card-img-top" alt="..." style={{ height: "auto", width: "40px" }} />
                <span style={{ fontSize: "16px" }}>{title}</span>
            </div>
            {/* <img src="/image/wind.png" alt="" /> */}
            <div className="card-body">
                <p className="card-text">{value}</p>
            </div>
        </div>
    </div>
}


export default DataCard;