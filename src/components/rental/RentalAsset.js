import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import RentalAssets from './RentalAsset';


const RentalAssets = () => 
<div className="rental-assets">
            <h3 className="title">Assets</h3>
            <div className="row">
              <div className="col-md-6">
                <span> 
                <FontAwesomeIcon icon ="asterisk" /> Cooling
                </span>
                
                <span>
                <FontAwesomeIcon icon ="thermometer"/>Heating
                </span>

                <span>
                <FontAwesomeIcon icon ="location-arrow"/>Iron
                </span>

              </div>
              <div className="col-md-6">
                <span>
                  <FontAwesomeIcon icon ="desktop"/> Working Area</span>
                  
                <span>
                  <FontAwesomeIcon icon ="cube"/> Washing Machine 
                  </span>
                <span>
                  <FontAwesomeIcon icon ="archive"/> Dishwasher
                  </span>
              </div>
            </div>
          </div>



export default RentalAssets;
