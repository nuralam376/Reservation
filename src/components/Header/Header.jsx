import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from "react-date-range";
import { useState } from "react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
    const [destination, setDestination] = useState("");
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
    ]);

    const [openDate, setOpenDate] = useState(false);
    const [openOptions, setOpenOptions] = useState(false);
    const [option, setOption] = useState({
        adult: 1,
        children: 0,
        room: 1
    });
    const navigate = useNavigate();


    const handleSearch = () => {
        navigate("/hotels", { state : {destination, date, option }});
    };

    const handleOption = (name, operation) => {
        setOption(prev => ({
            ...prev,
            [name] : operation === "i" ? option[name] + 1 : option[name] - 1
        }));
    };

  return (
    <div className="header">
        <div className={
            type === "list" ? "headerContainer listMode" : "headerContainer"
        }>
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
            {type !== "list" &&   <div className="headerSearch">
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon = {faBed} className="headerIcon"/>
                    <input
                        type = "text"
                        placeholder="Where are you going?"
                        className="headerSearchInput"
                        onChange={e => setDestination(e.target.value)}
                    />
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon = {faCalendarDays} className="headerIcon"/>
                    <span 
                        className="headerSearchText" 
                        onClick={() => setOpenDate(!openDate)}
                    >
                        {`${format(date[0]?.startDate, "MM/dd/yyyy")} to ${format(date[0]?.endDate, "MM/dd/yyyy")}`}
                    </span>
                    { openDate && 
                        <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            minDate={new Date()}
                            className="date"
                        /> 
                    }
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon = {faPerson} className="headerIcon"/>
                    <span 
                        className="headerSearchText"
                        onClick={() => setOpenOptions(!openOptions)}
                    >
                        {`${option.adult} adult ${option.children} children ${option.room} room`}
                    </span>
                    {openOptions && 
                        <div className="options">
                            <div className="optionItem">
                                <span className="optionText">Adult</span>
                                <div className="optionCounter">
                                <button 
                                    disabled={option.adult <= 1}
                                    className="optionCounterButton"
                                    onClick={() => handleOption("adult", "d")}
                                >
                                    -
                                </button>
                                <span className="optionCounterNumber">{option.adult}</span>
                                <button 
                                    className="optionCounterButton"
                                    onClick = {() => handleOption("adult", "i")}
                                >
                                    +
                                </button>
                                </div>
                            </div>
                            <div className="optionItem">
                            <span className="optionText">Children</span>
                            <div className="optionCounter">
                                <button 
                                    disabled={option.children <= 0 }
                                    className="optionCounterButton"
                                    onClick={() => handleOption("children" , "d")}
                                >
                                    -
                                </button>
                                <span className="optionCounterNumber">{option.children}</span>
                                <button 
                                    className="optionCounterButton"
                                    onClick={() => handleOption("children", "i")}
                                >
                                    +
                                </button>
                            </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">Room</span>
                                <div className="optionCounter">
                                    <button
                                        disabled = {option.room <= 1} 
                                        className="optionCounterButton"
                                        onClick={() => handleOption("room", "d")}
                                    >
                                        -
                                    </button>
                                    <span className="optionCounterNumber">{option.room}</span>
                                    <button  
                                        className="optionCounterButton"
                                        onClick = {() => handleOption("room", "i")}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    }
                </div>
                <div className="headerSearchItem">
                    <button className="headerBtn" onClick={handleSearch}>
                        Search
                    </button>
                </div>
            </div>}
        </div>
    </div>
  )
}

export default Header