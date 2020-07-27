import React from 'react';
import { Route } from 'react-router-dom';


import CollectionsOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../../components/collection/collection.component.jsx'

const ShopPage = ({match}) => {
    // console.log('match', match)
    return (
    <div>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId` } component={CollectionPage} />
    </div>
    )
}



export default ShopPage;