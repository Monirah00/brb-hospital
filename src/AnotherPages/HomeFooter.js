import React from "react";

function HomeFooter() {
  return (
    <div>
      <div className="HomeTop">
        <div className="rowHomeTop">
          <div className="colum-4">
            <h2 className='text-center text-white'>WHY CHOOSE US?</h2>
                <button className='btn btn-info btnHomeFooter'>Great Infrastructure</button>
                <button className='btn btn-info btnHomeFooter'>Qualified Doctors</button>
                <button className='btn btn-info btnHomeFooter'>Emergency Departments</button>
                <button className='btn btn-info btnHomeFooter'> Excellent Services</button>
          </div>
          <div className="colum-4">
          <div className='bg'>
              <h2 className=''>Book & Appoinment</h2>
              <p>Care Line <span className='HelpNum'>10647</span></p>

          </div>

          </div>
        
        </div>
      </div>
    </div>
  );
}

export default HomeFooter;
