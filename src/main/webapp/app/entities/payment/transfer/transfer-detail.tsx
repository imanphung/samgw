import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './transfer.reducer';

export const TransferDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const transferEntity = useAppSelector(state => state.samgw.transfer.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="transferDetailsHeading">
          <Translate contentKey="samgwApp.paymentTransfer.detail.title">Transfer</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{transferEntity.id}</dd>
          <dt>
            <span id="fromUserId">
              <Translate contentKey="samgwApp.paymentTransfer.fromUserId">From User Id</Translate>
            </span>
          </dt>
          <dd>{transferEntity.fromUserId}</dd>
          <dt>
            <span id="toUserId">
              <Translate contentKey="samgwApp.paymentTransfer.toUserId">To User Id</Translate>
            </span>
          </dt>
          <dd>{transferEntity.toUserId}</dd>
          <dt>
            <span id="amount">
              <Translate contentKey="samgwApp.paymentTransfer.amount">Amount</Translate>
            </span>
          </dt>
          <dd>{transferEntity.amount}</dd>
          <dt>
            <span id="createdAt">
              <Translate contentKey="samgwApp.paymentTransfer.createdAt">Created At</Translate>
            </span>
          </dt>
          <dd>{transferEntity.createdAt ? <TextFormat value={transferEntity.createdAt} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
          <dt>
            <span id="updatedAt">
              <Translate contentKey="samgwApp.paymentTransfer.updatedAt">Updated At</Translate>
            </span>
          </dt>
          <dd>{transferEntity.updatedAt ? <TextFormat value={transferEntity.updatedAt} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
        </dl>
        <Button tag={Link} to="/transfer" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/transfer/${transferEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default TransferDetail;
