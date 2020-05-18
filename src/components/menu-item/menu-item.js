import React from 'react';
import './menu-item.scss'

const Item = ({item, url, size}) => {
    return(
        <div className={`${size} menu-item`}>   
            <div style={{backgroundImage:`url(${url})`}} className='background-image'/>
            <div className='content'>
                <h1 className='title'>{item}</h1>
                <div className='subtitle'>SHOP NOW</div>
            </div>
        </div>
    )
}

export default Item;