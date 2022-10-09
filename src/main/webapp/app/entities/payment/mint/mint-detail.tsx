import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './mint.reducer';

export const MintDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const mintEntity = useAppSelector(state => state.samgw.mint.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="mintDetailsHeading">
          <Translate contentKey="samgwApp.paymentMint.detail.title">Mint</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{mintEntity.id}</dd>
          <dt>
            <span id="adminId">
              <Translate contentKey="samgwApp.paymentMint.adminId">Admin Id</Translate>
            </span>
          </dt>
          <dd>{mintEntity.adminId}</dd>
          <dt>
            <span id="amount">
              <Translate contentKey="samgwApp.paymentMint.amount">Amount</Translate>
            </span>
          </dt>
          <dd>{mintEntity.amount}</dd>
          <dt>
            <span id="createdAt">
              <Translate contentKey="samgwApp.paymentMint.createdAt">Created At</Translate>
            </span>
          </dt>
          <dd>{mintEntity.createdAt ? <TextFormat value={mintEntity.createdAt} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
          <dt>
            <span id="updatedAt">
              <Translate contentKey="samgwApp.paymentMint.updatedAt">Updated At</Translate>
            </span>
          </dt>
          <dd>{mintEntity.updatedAt ? <TextFormat value={mintEntity.updatedAt} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
        </dl>
        <Button tag={Link} to="/mint" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/mint/${mintEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default MintDetail;
