import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import InputCard from "../../../Hero/Hero_Form/Input__Card/InputCard";
import Button from "../../../inputs/Button/Button";
import { getAllModels } from "../../../../helpers/api-calls/dot-calls";
import { getListings } from "../../../../redux/features/listing/listings";
import { setModelOptions } from "../../../../redux/actions";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function Primary(props) {
  const listingData = useSelector((state) => state.listings);
  const inputData = useSelector((state) => state.modelOptionReducer.inputs);

  const dispatch = useDispatch();
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
    e.preventDefault();
    dispatch(
      getListings({
        make: searchingFormData.make,
        model: searchingFormData.model,
        price: searchingFormData.price,
        distance: searchingFormData.distance,
        zip_code: searchingFormData.zip_code,
      })
    );
  };

  return (
    <div>
      <form
        className="SearchForm"
        onSubmit={handleSubmit}
        // onChange={() => onChange(form)}
        // onBlur={() => onChange(form)}
      >
        <div>
          <Button
            type={"submit"}
            name={"next"}
            variant={"primary"}
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
    </div>
  );
}
