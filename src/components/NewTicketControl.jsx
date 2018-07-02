import React from 'react';
import ConfirmationQuestions from './ConfirmationQuestions';
import NewTicketForm from './NewTicketForm';
import PropTypes from 'prop-types';

class NewTicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    // this.handleClick = this.handleClick.bind(this);
    this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(this);
  }
  handleTroubleshootingConfirmation(){
    this.setState({formVisibleOnPage: true});
  }

//   handleClick(){
//     console.log("hello");
//     console.log(this);
//     this.setState({formVisibleOnPage: true});
//     console.log('formVisibleOnPage is currently set to:' + this.state.formVisibleOnPage); 
//  }


  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
        currentlyVisibleContent = <NewTicketForm onNewTicketCreation={this.props.onNewTicketCreation}/>;
    } else {
        currentlyVisibleContent = <ConfirmationQuestions onTroubleshootingConfirmation={this.handleTroubleshootingConfirmation}/>;
    }
    return (
    //   <div>
    //       <ConfirmationQuestions />
    //     <p>This is the NewTicketControl component!</p>
    //     <strong onClick={this.handleClick}>Click me to change my state!</strong> 
    //   </div>
// no dom yet
<div>
{currentlyVisibleContent}
</div> 
    );
  }

}
NewTicketControl.propTypes = {
    onNewTicketCreation: PropTypes.func
  };
  
export default NewTicketControl;