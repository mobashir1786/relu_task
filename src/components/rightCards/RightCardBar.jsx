import React from 'react';
import './cardbar.css';
import paintingData from '../../assets/paintingData';

const RightCardBar = () => {
    return (
        <div className='rightcarsbar'>
            {
                paintingData.map((n) => (
                    <div className="rightcard" style={{ backgroundImage: `URL(${n.backImg})` }} key={n.id}>
                        <img src={n.profilePic} alt="xyz" />
                        <div className='cardDetails'>
                            <div className='cardDetailname'>{n.name}</div>
                            <div className='cardDetailId'>@thewildwithyou</div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default RightCardBar
