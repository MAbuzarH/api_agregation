// ParcelFormCard.js
"use client";
import React, { useState } from "react";
import Select, { Options } from "react-select";

const ParcelFormCard = () => {
  // Define options for status, carrier companies, cities, countries, and states using react-select format
  interface Option {
    value: string;
    label: string;
  }

  const [selectedStatus, setStatus] = useState<Option | null | any>(null);
  const [selectedCarrierCompany, setCarrierCompany] = useState<
    Option | null | any
  >(null);
  const [selectedCity, setCity] = useState<Option | null>(null);
  const [selectedCountry, setCountry] = useState<Option | null>(null);
  const [selectedState, setState] = useState<Option | null>(null);

  const [selectEarliestShipDate, setSelectEarliestShipDate] =
    useState<boolean>(false);
  const [selectShipmentOrigin, setSelectShipmentOrigin] =
    useState<boolean>(false);
  const [verifyTN, setVerifyTN] = useState<boolean>(false);
  const [selectMinMaxWeight, setSelectMinMaxWeight] = useState<boolean>(false);
  const [minWeight, setMinWeight] = useState<string>("");
  const [maxWeight, setMaxWeight] = useState<string>("");

  // Define options for status and carrier company
  const statusOptions: Option[] = [
    { value: "in-transit", label: "In Transit" },
    { value: "delivered", label: "Delivered" },
    // Add more status options as needed
  ];

  const carrierCompanyOptions: Option[] = [
    { value: "company1", label: "Company 1" },
    { value: "company2", label: "Company 2" },
    // Add more carrier company options as needed
  ];

  const cityOptions: Option[] = [
    { value: "city1", label: "City 1" },
    { value: "city2", label: "City 2" },
    // Add more city options as needed
  ];

  const countryOptions: Option[] = [
    { value: "country1", label: "Country 1" },
    { value: "country2", label: "Country 2" },
    // Add more country options as needed
  ];

  const stateOptions: Option[] = [
    { value: "state1", label: "State 1" },
    { value: "state2", label: "State 2" },
    // Add more state options as needed
  ];

  return (
    <div className=" px-2 py-2 ">
      {/* City Picker */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          City
        </label>
        <Select
          options={cityOptions}
          onChange={(selectedOption) => setCity(selectedOption)}
          value={selectedStatus}
        />
      </div>

      {/* Country Picker */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Country
        </label>
        <Select
          options={countryOptions}
          onChange={(selectedOption) => setCountry(selectedOption)}
        />
      </div>

      {/* State Picker */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          State
        </label>
        <Select
          options={stateOptions}
          onChange={(selectedOption) => setState(selectedOption)}
        />
      </div>

      {/* Status Selector */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Status
        </label>
        <Select
          options={statusOptions}
          onChange={(selectedOption) => setStatus(selectedOption?.value)}
        />
      </div>

      {/* Carrier Company Selector */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Carrier Company
        </label>
        <Select
          options={carrierCompanyOptions}
          onChange={(selectedOption) =>
            setCarrierCompany(selectedOption?.value)
          }
        />
      </div>

      {/* Checkboxes */}
      <div className="mb-4">
        {/* <label className="block text-gray-700 text-sm font-bold mb-2">Additional Options:</label> */}

        {/* Select Earliest Ship Date */}
        <div className="mb-2">
          <input
            type="checkbox"
            checked={selectEarliestShipDate}
            onChange={() => setSelectEarliestShipDate(!selectEarliestShipDate)}
          />
          <span className="ml-2">Select earliest ship date</span>
        </div>

        {/* Select Shipment Origin */}
        <div className="mb-2">
          <input
            type="checkbox"
            checked={selectShipmentOrigin}
            onChange={() => setSelectShipmentOrigin(!selectShipmentOrigin)}
          />
          <span className="ml-2">Select shipment origin</span>
        </div>

        {/* Verify TN Checkbox */}
        <div className="mb-2">
          <input
            type="checkbox"
            checked={verifyTN}
            onChange={() => setVerifyTN(!verifyTN)}
          />
          <span className="ml-2">
            Verify the TN hasn't yet been tracked (WMT)
          </span>
        </div>

        {/* Select Min/Max Weight Checkbox */}
        <div className="mb-2">
          <input
            type="checkbox"
            checked={selectMinMaxWeight}
            onChange={() => setSelectMinMaxWeight(!selectMinMaxWeight)}
          />
          <span className="ml-2">Select min/max weight</span>
        </div>

        {/* Min Weight Input */}
        {selectMinMaxWeight && (
          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold">
              Min Weight (lbs)
            </label>
            <input
              type="text"
              value={minWeight}
              onChange={(e) => setMinWeight(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        )}

        {/* Max Weight Input */}
        {selectMinMaxWeight && (
          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold">
              Max Weight (lbs)
            </label>
            <input
              type="text"
              value={maxWeight}
              onChange={(e) => setMaxWeight(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        )}
      </div>
      <div className="flex text-sm font-light mt-2 flex-col items-center justify-center">
        <p>Any issues or questions?</p>
        <p>Contact example@123.com</p>
      </div>
    </div>
  );
};

export default ParcelFormCard;
