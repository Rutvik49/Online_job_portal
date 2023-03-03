import React,{ useState } from 'react'
import {Style} from '../../../components/style/filterStyle'
import ProfileCard from '../../../components/ProfileCard'
var data = require("./filterRole.json");
var locations = require("./filterLocation.json");

const Filter = () => {
  const [Role, setRole] = useState("");
  const [location, setLocation] = useState("");
  const onChange = (event) => {
    setRole(event.target.value);
  };
  const onSearch = (searchTerm) => {
    setRole(searchTerm)
    console.log(searchTerm);
  };
  const onLocationChange = (event) => {
    setLocation(event.target.value);
  };
  const onLocationSearch = (searchTerm) => {
    setLocation(searchTerm)
    console.log(searchTerm);
  };

  return (
    <div style={{ marginBottom: '2%' }}>
      <Style className="container" style={{ marginBottom: '2%' }}>
        <span className="s1">Filter Employes</span>
        <input type="text" className="Skill" placeholder="By Role" value={Role} onChange={onChange} />
        <div className="dropdown1">
          {data
            .filter((item) => {
              const searchTerm = Role.toLowerCase();
              const fullName = item.full_name.toLowerCase();

              return (
                searchTerm &&
                fullName.startsWith(searchTerm) &&
                fullName !== searchTerm
              );
            })
            .slice(0, 10)
            .map((item) => (
              <div
                onClick={() => onSearch(item.full_name)}
                className="dropdown-row"
                key={item.full_name}
              >
                {item.full_name}
              </div>
            ))}
        </div>
        <input type="text" className="Location" placeholder="By Location" value={location} onChange={onLocationChange} />
        <div className="dropdown2">
          {locations
            .filter((item) => {
              const searchTerm = location.toLowerCase();
              const fullName = item.full_name.toLowerCase();

              return (
                searchTerm &&
                fullName.startsWith(searchTerm) &&
                fullName !== searchTerm
              );
            })
            .slice(0, 10)
            .map((item) => (
              <div
                onClick={() => onLocationSearch(item.full_name)}
                className="dropdown-row"
                key={item.full_name}
              >
                {item.full_name}
              </div>
            ))}
        </div>
        <button>Apply</button>
      </Style>
      <ProfileCard
        top="1%"
        name="rajat chaudhary"
        role="mern developer"
        location="ahmedabad"
        bio="i am a expert mern developer"
      />
      <ProfileCard
        top="1%"
        name="rajat chaudhary"
        role="mern developer"
        location="ahmedabad"
        bio="i am a expert mern developer"
      />
      <ProfileCard
        top="1%"
        name="rajat chaudhary"
        role="mern developer"
        location="ahmedabad"
        bio="i am a expert mern developer"
      />
      <ProfileCard
        top="1%"
        name="rajat chaudhary"
        role="mern developer"
        location="ahmedabad"
        bio="i am a expert mern developer"
      />
      <ProfileCard
        top="1%"
        name="rajat chaudhary"
        role="mern developer"
        location="ahmedabad"
        bio="i am a expert mern developer"
      />
    </div>
  )
}

export default Filter
