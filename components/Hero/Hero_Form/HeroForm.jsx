import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { setModelOptions, setVinData } from '../../../redux/actions';

// comps
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import {
  faMagnifyingGlass,
  faCar,
  faWallet,
  faMap,
  faMapMarkerAlt,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import Inputcard from './Input__Card/InputCard';

// mock data
import data from '../../../asset/hero_form_data.json';

// helpers
import { getAllModels, getVinInfo } from '../../../helpers/api-calls/dot-calls';

export default function Heroform({}) {
  const [buying, setBuying] = useState(true);
  const [formClass, setFormClass] = useState('is-buying');
  const [formName, setFormName] = useState('buying');

  const inputData = useSelector((state) => state.modelOptionReducer.inputs);

  const router = useRouter();
  const dispatch = useDispatch();

  // use Redux for these
  const [buyingFormData, setBuyingFormData] = useState({
    make: 'All',
    model: 'all',
    price: 'no price',
    distance: 30,
    zip_code: 11111,
  });

  const [sellingFormData, setSellingFormData] = useState({
    vin: 'n/a',
    plate: 'n/a',
    state: 'co',
  });

  const icons = [faMagnifyingGlass, faCar, faWallet, faMap, faMapMarkerAlt];

  const handleClick = (e) => {
    setBuying(!buying);
    setFormClass(`is-${e.target.name}`);
    setFormName(e.target.name);
  };

  const handleChange = (e) => {
    const key = e.target.name.toLowerCase().replace(' ', '_');
    buying
      ? setBuyingFormData({ ...buyingFormData, [key]: e.target.value })
      : setSellingFormData({ ...sellingFormData, [key]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (e.target.name.includes('buying')) {
      // dispatch action here
    } else {
      // submit selling
      const promise = await getVinInfo(sellingFormData.vin);
      dispatch(setVinData(promise));
      router.push('/sell/details');
    }
  };

  useEffect(() => {
    if (buyingFormData.make !== 'All') {
      getAllModels(buyingFormData.make).then(async (results) => {
        dispatch(setModelOptions(results));
      });
    }
  }, [buyingFormData.make]);

  return (
    <div className='HeroForm'>
      <Nav variant='tabs' defaultActiveKey='/home'>
        <Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={handleClick} active={buying} name='buying'>
              Buy your car
            </Nav.Link>
          </Nav.Item>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={handleClick} active={!buying} name='selling'>
            Sell your car
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Form name={formName} className={formClass} onSubmit={handleSubmit}>
        {buying ? (
          <>
            {inputData.map((d, i) => {
              return (
                <Inputcard
                  key={d.label}
                  type={d.type}
                  icon={icons[i]}
                  cid={d.cid}
                  label={d.label}
                  options={d.options}
                  arrow={faChevronDown}
                  changeFunc={handleChange}
                  make={buyingFormData.make}
                />
              );
            })}
            <div>
              <Button variant='primary' type='submit'>
                Search
              </Button>
            </div>
          </>
        ) : (
          <>
            <Inputcard
              key='VIN'
              type={'text'}
              icon={faCar}
              cid={'vinControl'}
              label={'VIN'}
              options={null}
              changeFunc={handleChange}
            />
            <span>or</span>
            <Inputcard
              key='License Plate'
              type={'text'}
              icon={faCar}
              cid={'plateControl'}
              label={'License Plate'}
              options={null}
              changeFunc={handleChange}
            />
            <Inputcard
              key='State'
              type={'select'}
              icon={faCar}
              cid={'stateControl'}
              label={'State'}
              options={['WI', 'CO', 'MI']}
              arrow={faChevronDown}
              changeFunc={handleChange}
            />
            <div>
              <Button variant='primary' type='submit'>
                Search
              </Button>
            </div>
          </>
        )}
      </Form>
    </div>
  );
}
