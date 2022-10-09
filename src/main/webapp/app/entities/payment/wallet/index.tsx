import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Wallet from './wallet';
import WalletDetail from './wallet-detail';
import WalletUpdate from './wallet-update';
import WalletDeleteDialog from './wallet-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={WalletUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={WalletUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={WalletDetail} />
      <ErrorBoundaryRoute path={match.url} component={Wallet} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={WalletDeleteDialog} />
  </>
);

export default Routes;
