import react from "react";
import {Link} from 'react-router-dom';

function Nav(){
    return(
        <nav className="container-fluid">
            <div className="row ">
                    <Link to="/">Start</Link>
                
                    <Link className="item-box row" to="/burgers">
                        <div className="col-6">

                        <img src={`${process.env.PUBLIC_URL}/img/menu_icon/burgers.png`} className="img-fluid"/>
                        </div>
                        <div className="col-6 d-flex align-items-center">

                        <h5 className="text-left text-align pt-2  text-title">Burgery</h5>
                        </div>
                        
                        </Link>
                    <Link className="item-box row" to="/drinks">
                    <div className="col-6">
                        <img src={`${process.env.PUBLIC_URL}/img/menu_icon/drinks.png`} className="img-fluid"/>
                        </div>
                        <div className="col-6 d-flex align-items-center">
                        <h5 className="text-center px-3 text-title">Napoje</h5>
                        </div>
                        </Link>
               
                
          
                
                   
              
            </div>
        </nav>
    )
}
export default Nav;