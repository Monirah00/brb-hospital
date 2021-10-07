import React from 'react'

function Header() {
    return (
        <div>
            <section className='Header-Bg'>
                <div className='Header-title'>
                    <h2 className='Header-h2'>Book & Appointment</h2>
                    <p className='Header-p'>Care Line <span className='HelpNum'>10647</span></p>
                    <button className='btn btn-info Header-btn'>Excellent Services</button>
                    <button className='btn btn-info Header-btn'>Qualified Doctors</button>
                    

                </div>
            </section>
        </div>
    )
}

export default Header
