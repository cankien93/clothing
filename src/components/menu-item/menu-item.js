import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.scss'

const Item = ({item, imageUrl, size, history, linkUrl, match}) => {
    return(
        <div className={`${size} menu-item`} onClick={()=>history.push(`${match.url}${linkUrl}`)}>   
            <div style={{backgroundImage:`url(${imageUrl})`}} className='background-image'/>
            <div className='content'>
                <h1 className='title'>{item}</h1>
                <div className='subtitle'>SHOP NOW</div>
            </div>
        </div>
    )
}

export default withRouter(Item);