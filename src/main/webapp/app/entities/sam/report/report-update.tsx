import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, Translate, translate, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IReport } from 'app/shared/model/sam/report.model';
import { TypeOfStar } from 'app/shared/model/enumerations/type-of-star.model';
import { getEntity, updateEntity, createEntity, reset } from './report.reducer';

export const ReportUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const reportEntity = useAppSelector(state => state.samgw.report.entity);
  const loading = useAppSelector(state => state.samgw.report.loading);
  const updating = useAppSelector(state => state.samgw.report.updating);
  const updateSuccess = useAppSelector(state => state.samgw.report.updateSuccess);
  const typeOfStarValues = Object.keys(TypeOfStar);
  const handleClose = () => {
    props.history.push('/report' + props.location.search);
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(props.match.params.id));
    }
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  const saveEntity = values => {
    values.createdAt = convertDateTimeToServer(values.createdAt);
    values.updatedAt = convertDateTimeToServer(values.updatedAt);

    const entity = {
      ...reportEntity,
      ...values,
    };

    if (isNew) {
      dispatch(createEntity(entity));
    } else {
      dispatch(updateEntity(entity));
    }
  };

  const defaultValues = () =>
    isNew
      ? {
          createdAt: displayDefaultDateTime(),
          updatedAt: displayDefaultDateTime(),
        }
      : {
          star: 'ONE',
          ...reportEntity,
          createdAt: convertDateTimeFromServer(reportEntity.createdAt),
          updatedAt: convertDateTimeFromServer(reportEntity.updatedAt),
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="samgwApp.samReport.home.createOrEditLabel" data-cy="ReportCreateUpdateHeading">
            <Translate contentKey="samgwApp.samReport.home.createOrEditLabel">Create or edit a Report</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? (
                <ValidatedField
                  name="id"
                  required
                  readOnly
                  id="report-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label={translate('samgwApp.samReport.studentId')}
                id="report-studentId"
                name="studentId"
                data-cy="studentId"
                type="text"
                validate={{
                  required: { value: true, message: translate('entity.validation.required') },
                  validate: v => isNumber(v) || translate('entity.validation.number'),
                }}
              />
              <ValidatedField
                label={translate('samgwApp.samReport.lessonId')}
                id="report-lessonId"
                name="lessonId"
                data-cy="lessonId"
                type="text"
                validate={{
                  required: { value: true, message: translate('entity.validation.required') },
                  validate: v => isNumber(v) || translate('entity.validation.number'),
                }}
              />
              <ValidatedField
                label={translate('samgwApp.samReport.comment')}
                id="report-comment"
                name="comment"
                data-cy="comment"
                type="text"
              />
              <ValidatedField label={translate('samgwApp.samReport.star')} id="report-star" name="star" data-cy="star" type="select">
                {typeOfStarValues.map(typeOfStar => (
                  <option value={typeOfStar} key={typeOfStar}>
                    {translate('samgwApp.TypeOfStar.' + typeOfStar)}
                  </option>
                ))}
              </ValidatedField>
              <ValidatedField
                label={translate('samgwApp.samReport.createdAt')}
                id="report-createdAt"
                name="createdAt"
                data-cy="createdAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
                validate={{
                  required: { value: true, message: translate('entity.validation.required') },
                }}
              />
              <ValidatedField
                label={translate('samgwApp.samReport.updatedAt')}
                id="report-updatedAt"
                name="updatedAt"
                data-cy="updatedAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
                validate={{
                  required: { value: true, message: translate('entity.validation.required') },
                }}
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/report" replace color="info">
                <FontAwesomeIcon icon="arrow-left" />
                &nbsp;
                <span className="d-none d-md-inline">
                  <Translate contentKey="entity.action.back">Back</Translate>
                </span>
              </Button>
              &nbsp;
              <Button color="primary" id="save-entity" data-cy="entityCreateSaveButton" type="submit" disabled={updating}>
                <FontAwesomeIcon icon="save" />
                &nbsp;
                <Translate contentKey="entity.action.save">Save</Translate>
              </Button>
            </ValidatedForm>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default ReportUpdate;
