import { useState } from "react";
import { DateRange } from "react-date-range";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import "./Hotels.css";
import { format } from "date-fns";
import SearchItem from "../../components/SearchItem/SearchItem";

const Hotels = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [option,setOption] = useState(location.state.option);
  const [openDate, setOpenDate] = useState(false);
  return (
    <div>
      <Navbar />
      <Header type = "list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <lable>Destination</lable>
              <input placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <lable>Check in date</lable>
              <span onClick = {() => setOpenDate(!openDate)}>
                {`${format(date[0].startDate, "MM/dd/yyyy")}-${format(date[0].endDate, "MM/dd/yyyy")}`}
              </span>
              {openDate && 
                <DateRange 
                  onChange={item => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              }
            </div>
            <div className="lsItem">
              <lable>Options</lable>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">Min Price <small>per night</small></span>
                  <input type = "number" className="lsOptionInput" min={0} placeholder={0} />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Max price <small>per night</small></span>
                  <input type = "number" className="lsOptionInput" min={0} />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input type="number" className = "lsOptionInput" min = {1} placeholder={option.adult} />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input type = "number" className="lsOptionInput" min = {0} placeholder={option.children} />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input type = "number" className="lsOptionInput" min = {1} placeholder= {option.room} />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hotels