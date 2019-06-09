import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import List from './views/List'
import {GET_PHOTOS} from './service';
import './style.scss';

function Gallery(props) {

  const { setPhotos, photos } = props;

  useEffect(()=>{
    GET_PHOTOS()
      .then(photos => {
        setPhotos(photos);
      })
      .then()


  }, []);

  return (
    <div className="gallery">
      <List photos={photos} />
    </div>
  );
}

const mapStateToProps = state => ({
  photos: state.gallery.photos
});

const mapDispatchToProps = dispatch => ({
  setPhotos: photos => dispatch({type: 'SET_PHOTOS', photos})
});

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
