import React, { Component } from 'react';
import '../Css/Body.css';
import {
  showMessage
} from '../Js/Body';


class Body extends Component {
  render() {
    return (
      <div>
      <div className="menu col-6">
    
    <div className="box1">

                <form>

                    <h2>INPUT PERSONAL INFORMATION</h2>
                  <div className="row">
                    <div className="col-25">
                      <label for="fname">Name</label>
                    </div>
                    <div className="col-75">
                      <input type="text"id="name"/>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-25">
                      <label for="lname">Age</label>
                    </div>
                    <div className="col-75">
                      <input type="number"  id="age" />
                    </div>
                  </div>
                    <div className="row">
                        <div className="col-25">
                          <label for="lname">Gender</label>
                        </div>
                        <div className="col-75">
                                <input type="radio"  name="gender" value="male"/> Male
                                <input type="radio"  name="gender" value="female"/> Female
                                </div>
                      </div>
                
                
                  <div className="row">
                    <input type="button" onClick={showMessage} value="submit" />
                  </div>
                </form>
              
  </div>
</div>

<div className="main col-6">
        <div className="box1">
                    <h2>DISPLAY PERSONAL INFORMATION</h2>
                  <div className="row">
                    <div className="col-25">
                      <label for="fname">Name</label>
                    </div>
                    <div className="col-75">
                     
                      <span id = "display_name"></span>
                     
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-25">
                      <label for="lname">Age</label>
                    </div>
                    <div className="col-75">
                        <span id = "display_age"></span>
                    </div>
                  </div>
                  <div className="row">
                        <div className="col-25">
                          <label for="lname">Gender</label>
                        </div>
                        <div className="col-75">
                            <span id = "result"></span>
                        </div>
                 </div>
            </div> 
 </div>
      </div>
        
    );
  }
}

export default Body;
