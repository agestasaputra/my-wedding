import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Navbar from "app/components/navbar";
import Footer from "app/components/footer";
import Landing from "app/pages/landing";
// import AuthenticatedRoute from "./AuthenticatedRoute";
// import UnauthenticatedRoute from "./UnauthenticatedRoute";

const Routes = ({ state, dispatch }) => {
  return (
    <React.Suspense fallback={null}>
      <Navbar state={state} dispatch={dispatch} />
      <Switch>
        {/* <Route
          path="/products/longpants/:productCode"
          component={props => (
            <ProductList {...props} state={state} dispatch={dispatch} />
          )}
        />
        <Route
          path="/products/longpants"
          component={props => (
            <ProductList {...props} state={state} dispatch={dispatch} />
          )}
        /> */}
        <Route
          path="/"
          component={props => (
            <Landing {...props} state={state} dispatch={dispatch} />
          )}
        />
      </Switch>
      <Footer />
    </React.Suspense>
  );
};

export default withRouter(Routes);
