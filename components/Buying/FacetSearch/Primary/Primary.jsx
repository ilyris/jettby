import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import InputCard from "../../../Hero/Hero_Form/Input__Card/InputCard";
import { Form } from "react-final-form";
import Button from "../../../inputs/Button/Button";
import { getAllModels } from "../../../../helpers/api-calls/dot-calls";
import {
  faMagnifyingGlass,
  faCar,
  faWallet,
  faMap,
  faMapMarkerAlt,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

export default function Primary(props) {
  const listingData = useSelector((state) => state.listings);
  const inputData = useSelector((state) => state.modelOptionReducer.inputs);

  const [searchingFormData, setSearchingFromData] = useState({
    make: "All",
    model: "All",
    price: "no price",
    distance: 30,
    zip_code: 11111,
  });

  useEffect(() => {
    if (searchingFormData.make !== "All") {
      getAllModels(searchingFormData.make).then(async (results) => {
        dispatch(setModelOptions(results));
      });
    }
  }, [searchingFormData.make]);

  const handleChange = (e) => {
    const key = e.target.name.toLowerCase().replace(" ", "_");
    setSearchingFromData({ ...searchingFormData, [key]: e.target.value });
  };

  const handleSubmit = (e) => {
    console.log(e);
  };

  return (
    <div>
      <Form
        initialValues={{
          make: searchingFormData.make,
          model: searchingFormData.model,
          price: searchingFormData.price,
          distance: searchingFormData.distance,
          zip_code: searchingFormData.zip_code,
        }}
        onSubmit={handleSubmit}
        render={({ handleSubmit, values, form }) => (
          <form
            className="SearchForm"
            onSubmit={handleSubmit}
            // onChange={() => onChange(form)}
            // onBlur={() => onChange(form)}
          >
            <div>
              <Button
                type={"button"}
                name={"next"}
                variant={"primary"}
                onClick={(e) => console.log(e)}
                text={"Search"}
                // disabled={hasError}
              />
            </div>
            <>
              {inputData.map((d, i) => {
                return (
                  <InputCard
                    key={d.label}
                    type={d.type}
                    cid={d.cid}
                    label={d.label}
                    options={d.options}
                    selected={listingData[d.label.toLowerCase()]}
                    arrow={faChevronDown}
                    changeFunc={handleChange}
                    make={
                      searchingFormData.make == "All"
                        ? inputData[1].options
                        : searchingFormData.make
                    }
                  />
                );
              })}
            </>
          </form>
        )}
      />
    </div>
  );
}