import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './deposit.reducer';

export const DepositDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const depositEntity = useAppSelector(state => state.samgw.deposit.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="depositDetailsHeading">
          <Translate contentKey="samgwApp.samDeposit.detail.title">Deposit</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{depositEntity.id}</dd>
          <dt>
            <span id="studentId">
              <Translate contentKey="samgwApp.samDeposit.studentId">Student Id</Translate>
            </span>
          </dt>
          <dd>{depositEntity.studentId}</dd>
          <dt>
            <span id="transferId">
              <Translate contentKey="samgwApp.samDeposit.transferId">Transfer Id</Translate>
            </span>
          </dt>
          <dd>{depositEntity.transferId}</dd>
          <dt>
            <span id="status">
              <Translate contentKey="samgwApp.samDeposit.status">Status</Translate>
            </span>
          </dt>
          <dd>{depositEntity.status}</dd>
          <dt>
            <span id="createdAt">
              <Translate contentKey="samgwApp.samDeposit.createdAt">Created At</Translate>
            </span>
          </dt>
          <dd>{depositEntity.createdAt ? <TextFormat value={depositEntity.createdAt} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
          <dt>
            <span id="updatedAt">
              <Translate contentKey="samgwApp.samDeposit.updatedAt">Updated At</Translate>
            </span>
          </dt>
          <dd>{depositEntity.updatedAt ? <TextFormat value={depositEntity.updatedAt} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
        </dl>
        <Button tag={Link} to="/deposit" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/deposit/${depositEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default DepositDetail;
