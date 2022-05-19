import {BrowserRouter, Switch, Route} from "react-router-dom";
import Coin from "./Coin";
import Coins from "./Coins";

function Router() {
    return <BrowserRouter>
        <Switch>
            <Route path="/:coinId">
                <Coin></Coin>
            </Route>
            <Route path="/">
                <Coins></Coins>
            </Route>
        </Switch>
    </BrowserRouter>
}

export default Router;