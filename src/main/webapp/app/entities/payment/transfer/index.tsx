import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Transfer from './transfer';
import TransferDetail from './transfer-detail';
import TransferUpdate from './transfer-update';
import TransferDeleteDialog from './transfer-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={TransferUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={TransferUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={TransferDetail} />
      <ErrorBoundaryRoute path={match.url} component={Transfer} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={TransferDeleteDialog} />
  </>
);

export default Routes;
