import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';

import  CollectionPreview  from '../collection-preview/collection.preview.js';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';

import './collection-overview.component';

const CollectionsOverview = ({ collections }) =>(
    <div className='collection-overview'>
        {collections.map(({id, ...otherProperty})=>(
            <CollectionPreview key={id} {...otherProperty} />)) 
        }
    </div>
)
const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})
export default connect(mapStateToProps)(CollectionsOverview)
