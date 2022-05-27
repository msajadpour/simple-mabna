import * as React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Header from '../components/header/header';
import SymbolsList from './sybmolsList/sybmolsList';
import SymbolDetail from './symbolDetail/symbolDetail';


const Pages:React.FC = () => {
    return(
        <Router>
            <Header />
            <Switch>
                <Route exact path="/">
                    <SymbolsList />
                </Route>
                <Route exact path="/Detail/:id">
                    <SymbolDetail />
                </Route>
                <Route path="*" >
                    <SymbolsList />
                </Route>
            </Switch>
        </Router>
    )
}
export default Pages;