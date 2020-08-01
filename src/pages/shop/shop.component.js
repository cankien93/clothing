import React from 'react';
import { Route } from 'react-router-dom';
import {connect} from 'react-redux';

import CollectionsOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../../components/collection/collection.component.jsx'
import WithSpinner from '../../components/with-spinner/with-spinner.component.jsx'

import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils'

import {updateCollections} from '../../redux/shop/shop.actions'

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    state = {
        loading: true
    }
    unsubscribeFromSnapshot = null;
    
    componentDidMount(){
        const {update} = this.props;
        const collectionRef = firestore.collection('collections');

        collectionRef.get().then(snapshot => {
            const collectionMap = convertCollectionsSnapshotToMap(snapshot);
            update(collectionMap);
            this.setState({
                loading: false
            })
        })
    }

    render(){
        const {match} = this.props;
        const {loading} = this.state;
        return (
            <div>
                <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props}/>} />
                <Route path={`${match.path}/:collectionId` } render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props}/>} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    update: collectionMap => dispatch(updateCollections(collectionMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);