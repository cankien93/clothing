import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect';
import {compose} from 'redux'

import WithSpinner from '../../components/with-spinner/with-spinner.component.jsx';
import CollectionPage from '../../components/collection/collection.component.jsx';
import {selectIsCollectionLoaded} from '../../redux/shop/shop.selector.js'

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionLoaded(state)
})

const CollectionContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);

export default CollectionContainer;