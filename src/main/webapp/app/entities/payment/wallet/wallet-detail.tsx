import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './wallet.reducer';

export const WalletDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const walletEntity = useAppSelector(state => state.samgw.wallet.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="walletDetailsHeading">
          <Translate contentKey="samgwApp.paymentWallet.detail.title">Wallet</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{walletEntity.id}</dd>
          <dt>
            <span id="userId">
              <Translate contentKey="samgwApp.paymentWallet.userId">User Id</Translate>
            </span>
          </dt>
          <dd>{walletEntity.userId}</dd>
          <dt>
            <span id="amount">
              <Translate contentKey="samgwApp.paymentWallet.amount">Amount</Translate>
            </span>
          </dt>
          <dd>{walletEntity.amount}</dd>
          <dt>
            <span id="createdAt">
              <Translate contentKey="samgwApp.paymentWallet.createdAt">Created At</Translate>
            </span>
          </dt>
          <dd>{walletEntity.createdAt ? <TextFormat value={walletEntity.createdAt} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
          <dt>
            <span id="updatedAt">
              <Translate contentKey="samgwApp.paymentWallet.updatedAt">Updated At</Translate>
            </span>
          </dt>
          <dd>{walletEntity.updatedAt ? <TextFormat value={walletEntity.updatedAt} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
        </dl>
        <Button tag={Link} to="/wallet" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/wallet/${walletEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default WalletDetail;
