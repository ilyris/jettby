import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Form from 'react-bootstrap/Form';
import { useSelector } from 'react-redux';
import Option from '../../../inputs/Option';

import {
  getZip,
  getCoordinates,
  returnZip,
} from '../../../../helpers/api-calls/map-calls';

export default function Inputcard({
  type,
  icon,
  cid,
  label,
  options = [],
  arrow = null,
  changeFunc,
}) {
  const [zipState, setZipState] = useState();

  const modelList = useSelector(
    (state) => state.modelOptionReducer.inputs[1].options
  );

  // Get zipCode
  useEffect(() => {
    getCoordinates(getZip);
  }, []);

  const getZip = async (position) => {
    const { latitude, longitude } = position.coords;
    let zipReturned = returnZip(latitude, longitude);
    zipReturned.then((res) => {
      return setZipState(res);
    });
  };

  return (
    <div className='InputCard' data-key={label}>
      <div className='icon'>
        <FontAwesomeIcon icon={icon} />
      </div>
      <Form.Group className='HeroForm--form__group' controlId={cid}>
        <Form.Label>{label}</Form.Label>
        {type === 'select' ? (
          <div className='select-container'>
            <Form.Select name={label} onChange={changeFunc}>
              {label === 'Model'
                ? modelList.map((model) => {
                    return <Option value={model} />;
                  })
                : options.map((option) => {
                    return <Option value={option} />;
                  })}
            </Form.Select>
            {arrow !== null && (
              <FontAwesomeIcon className='select-icon' icon={arrow} />
            )}
          </div>
        ) : (
          <Form.Control
            name={label}
            type='text'
            placeholder={zipState}
            onChange={changeFunc}
          />
        )}
      </Form.Group>
    </div>
  );
}
