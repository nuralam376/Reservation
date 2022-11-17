import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from "react-date-range";
import { useState } from "react";

const Header = () => {
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
    ]);

    const [openDate, setOpenDate] = useState(false);

  return (
    <div className="header">
        <div className="headerContainer">
            <div className="headerList">
                <div className="headerListItem active">
                    <FontAwesomeIcon icon={faBed}/>
                    <span>Stays</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon = {faPlane} />
                    <span>Flights</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon = {faCar} />
                    <span>Car Rentals</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon = {faBed} />
                    <span>Attractions</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon = {faTaxi} />
                    <span>Airport Taxis</span>
                </div>
            </div>
            <h1 className="headerTitle">A lifetime of discounts? It's Genius</h1>
            <p className="headerDesc">
                Get rewarded for your travels - unlock instant savings of 10% or more with a free booking account
            </p>
            <button className="headerBtn">Sign In / Register</button>
            <div className="headerSearch">
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon = {faBed} className="headerIcon"/>
                    <input
                        type = "text"
                        placeholder="Where are you going?"
                        className="headerSearchInput"
                    />
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon = {faCalendarDays} className="headerIcon"/>
                    <span className="headerSearchText" onClick={() => setOpenDate(!openDate)}>date to date</span>
                    { openDate && <DateRange
                        editableDateInputs={true}
                        onChange={item => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        className="date"
                    /> }
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon = {faPerson} className="headerIcon"/>
                    <span className="headerSearchText">2 adults 2 children 1 room</span>
                </div>
                <div className="headerSearchItem">
                    <button className="headerBtn">Search</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header