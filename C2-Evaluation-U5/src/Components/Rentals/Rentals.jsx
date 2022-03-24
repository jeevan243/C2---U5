import "./Rentals.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export const Rentals = ({}) => {
  const [getDatadb, setgetDatadb] = useState([]);

  useEffect(() => {
    getData();

    return () => {};
  }, []);

  const getData = () => {
    axios.get("http://localhost:8080/houses").then((res) => {
      setgetDatadb(res.data);
    });
  };

  //
  const sortById = () => {
    getDatadb.sort(function (a, b) {
      return b.id - a.id;
    });
    setgetDatadb(...getDatadb);
  };
  const sortByAsc = () => {
    getDatadb.sort(function (a, b) {
      return a.rent - b.rent;
    });
    setgetDatadb([...getDatadb]);
  };
  const sortByDesc = () => {
    getDatadb.sort(function (a, b) {
      return b.rent - a.rent;
    });
    setgetDatadb([...getDatadb]);
    //  console.log(data);
  };
  const sortAreaAsc = () => {
    getDatadb.sort(function (a, b) {
      return a.areaCode - b.areaCode;
    });
    setgetDatadb([...getDatadb]);
  };
  const sortByAreaDsc = () => {
    getDatadb.sort(function (a, b) {
      return b.areaCode - a.areaCode;
    });
    setgetDatadb([...getDatadb]);
  };

  //
  return (
    <div className="rentalContainer">
      <div className="sortingButtons">
        <button className="sortById" onClick={sortById}>
          Sort by ID
        </button>
        <button className="sortByRentAsc" onClick={sortByAsc}>
          Rent Low to high
        </button>
        <button className="sortByRentDesc" onClick={sortByDesc}>
          Rent High to low
        </button>
        <button className="sortByAreaAsc" onClick={sortAreaAsc}>
          Area Low to high
        </button>
        <button className="sortByAreaDesc" onClick={sortByAreaDsc}>
          Area High to Low
        </button>
      </div>
      <input
        className="searchAddress"
        type="text"
        placeholder="Search Address"
      />
      <table className="table" border="1">
        <thead>
          <tr>
            <th>Sl.no.</th>
            <th>Name</th>
            <th>Owner Name</th>
            <th>Address</th>
            <th>Area Code</th>
            <th>Rent</th>
            <th>Available For</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {getDatadb.map((house, index) => {
            return (
              <tr key={house.id} className="houseDetails">
                <td className="houseId">{house.id}</td>
                <td className="houseName">{house.name} </td>
                <td className="ownersName">{house.ownerName}</td>
                <td className="address">{house.address}</td>
                <td className="areaCode">{house.areaCode}</td>
                <td className="rent">{house.rent}</td>
                <td className="preferredTenants">
                  {/* Show text Both or Bachelors or Married based on values */}
                  {house.tenent}
                </td>
                <td className="houseImage">
                  <img src={house.image} alt="house" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
