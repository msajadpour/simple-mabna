import * as React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SymbolsList from './sybmolsList/sybmolsList';
import SymbolDetail from './SymbolDetail/symbolDetail';


const Pages:React.FC = () => {
    return(
        <Router>
            <Switch>
                <Route exact path="/">
                    <SymbolsList />
                </Route>
                <Route exact path="/Detail/:id">
                    <SymbolDetail />
                </Route>
            </Switch>
        </Router>
    )
}
export default Pages;