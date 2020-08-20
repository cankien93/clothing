import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {compose} from 'redux';

import WithSpinner from '../../components/with-spinner/with-spinner.component.jsx';
import CollectionsOverview from '../../components/collection-overview/collection-overview.component';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selector.js';




const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});

 const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;