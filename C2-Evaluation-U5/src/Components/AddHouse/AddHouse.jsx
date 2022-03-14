import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Rentals } from "../Rentals/Rentals";

export const AddHouse = () => {
  const obj = {
    name: "",
    ownerName: "",
    address: "",
    areaCode: "",
    rent: "",
    tenent: "",
  };
  const [formdata, setFormdata] = useState(obj);
  const [getDatadb, setgetDatadb] = useState([]);

  const handleChange = (e) => {
    const tenent =
      e.target.id === "married" && e.target.checked === true
        ? "marred"
        : "bachelor";

    const { id, value } = e.target;

    if (id === "married" || id === "bachelor") {
      setFormdata({ ...formdata, tenent: tenent });
    } else {
      setFormdata({ ...formdata, [id]: value });
    }
  };

  //useeffect

  useEffect(() => {
    getData();
  }, []);

  //server
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:8080/houses", formdata).then(() => {
      alert("Data saved successfully");
      getData();
    });
  };

  //getdata

  const getData = () => {
    axios.get("http://localhost:8080/houses").then((res) => {
      setgetDatadb(res.data);
    });
  };
  return (
    <>
      <div className="addHouseContainer">
        <form onSubmit={handleSubmit}>
          <label>name</label>
          <input
            type="text"
            className="name"
            id="name"
            required
            onChange={handleChange}
          />
          <br />
          <label>ownerName</label>
          <input
            type="text"
            className="ownerName"
            id="ownerName"
            required
            onChange={handleChange}
          />
          <br />
          <label>address</label>
          <input
            type="text"
            className="address"
            id="address"
            required
            onChange={handleChange}
          />
          <br />
          <label>areaCode</label>
          <input
            type="text"
            className="areaCode"
            id="areaCode"
            required
            onChange={handleChange}
          />
          <br />
          <label>rent</label>
          <input
            type="text"
            className="rent"
            id="rent"
            required
            onChange={handleChange}
          />
          <br />
          <label>preferredTenant</label>
          <br />
          <label>bachelor</label>
          <input
            type="checkbox"
            className="bachelor"
            id="bachelor"
            onChange={handleChange}
          />
          <br />
          <label>married</label>
          <input
            type="checkbox"
            className="married"
            id="married"
            onChange={handleChange}
          />
          <br />
          <label>image</label>
          <input
            type="text"
            className="image"
            id="image"
            onChange={handleChange}
          />
          <br />
          <input className="submitBtn" type="submit" />
        </form>
      </div>

      {/* <Rentals getDatadb={getDatadb} /> */}
    </>
  );
};
