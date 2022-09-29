import PropTypes from 'prop-types';
import Button from "./Button";
import {useLocation} from 'react-router-dom' // This allows us to look at the route we are currently on 


const Header = ({title, onAdd,showAdd}) => {     // OnAdd prop pass to App.js to show form on this button click


const location = useLocation()

    return (
        <header className={'header'}>
            <h1>{title}</h1>
           
{/* When close change color to red when open stay lime */}
{/* Add a condition for uselocation  if location dot pathname is equal to '/' then use && will go ahead show the button*/}

        { location.pathname ==='/' && <Button 
          color={showAdd ? 'red' : 'lime'}
          text={showAdd ? 'Close' : 'Add'} 
          onClick={onAdd}

          />   }
  
        </header>
    )
}




Header.defaultProps ={
    title: "Task Tracker",
}
Header.prototype ={
    title: PropTypes.string.isRequired
}


export default Header
