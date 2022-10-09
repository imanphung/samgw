import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Mint from './mint';
import MintDetail from './mint-detail';
import MintUpdate from './mint-update';
import MintDeleteDialog from './mint-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={MintUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={MintUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={MintDetail} />
      <ErrorBoundaryRoute path={match.url} component={Mint} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={MintDeleteDialog} />
  </>
);

export default Routes;
