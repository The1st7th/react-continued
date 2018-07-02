import React from 'react';
import PropTypes from 'prop-types';
import image from '../assets/images/download.jpeg';

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
        </div>
      <p><em>{props.issue}</em></p>
      <hr/>
    </div>
  );
}
Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string
};
export default Ticket;
