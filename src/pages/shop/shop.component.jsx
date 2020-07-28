import React from 'react';
import { Route } from 'react-router-dom';

import { connect } from 'react-redux';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

import { firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';

import {updateCollection} from '../../redux/shop/shop.actions';


const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview); 
const CollectionPageWithSpinner = WithSpinner(CollectionPage); 


class ShopPage extends React.Component{
  state = {
    loading: true
  };
  
  unsubscribeFromSnapshot = null;

  componentDidMount(){
    const { updateCollection } = this.props;
    const collectionRef = firestore.collection('collections');

    collectionRef.onSnapshot(async snapshot => {
      const collectionMap =  convertCollectionsSnapshotToMap(snapshot);
      updateCollection(collectionMap);
      this.setState({loading: false});
    });
  }

  render(){
    const { match } = this.props;
    const { loading } = this.state;
    return(
      <div className='shop-page'>
        <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isloading={loading} {...props} /> } />
    <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isloading={loading} {...props} /> } />
      </div>
    );
    
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollection : collectionMap => dispatch(updateCollection(collectionMap))
})

export default connect(null,mapDispatchToProps)(ShopPage);
