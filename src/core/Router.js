import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from '../components/pages/Home';
import Gallery from '../components/pages/Gallery';

import Photo from '../components/pages/Photo';
import Favorite from '../components/pages/Favorite';

export default function () {
    return (
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/gallery' exact component={Gallery} />
            <Route path='/favorite' component={Favorite} />
            <Route path='/photo/:photoId' exact component={Photo} />
            
        </Switch>
    )
}