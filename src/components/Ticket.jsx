import React from 'react';
import PropTypes from 'prop-types';
import image from '../assets/images/download.jpeg';
import Moment from 'moment';

function Ticket(props){
  return (
    <div>
         <style jsx global>{`
          // div {
          //   background-color: red;
          // }
          .background {
            width:300px;
            height:300px;
            // background-color: blue;
            // background-image: url(${image});
          }
        `}</style>
        <div className = "background" > 
        <h3 >{props.location} - {props.names}</h3>
        {/* <h4>{displayTimeOpen(props.timeOpen)} ago</h4> */}
        <h4>{props.formattedWaitTime}</h4>
        </div>
      <p><em>{props.issue}</em></p>
      <hr/>
    </div>
  );
}
function displayTimeOpen(timeOpen) {
  return timeOpen.from(new Moment(), true);
}
Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired,
};
export default Ticket;
