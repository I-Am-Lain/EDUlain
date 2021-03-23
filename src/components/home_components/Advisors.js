import React from 'react'


const Advisors = () => (
    
    <div className='advisors'>
        <div className='advisors-content'>
            <div className='advisors-card-bg'>
                <h2>OUR ADVISORS</h2>
                <hr />

                <p>
                    Our advisors range from Industry Experts to 
                    Admissions Directors. We’re always looking for 
                    accomplished members to join our Board.
                </p>
            </div>
            
            <div className='advisors-container'>
                <div className='advisors-card'>
                    <img src='https://edurain.org/img/profile/Greg.jpg' alt='Greg Taylor'/>
                    <h3>Greg Taylor</h3>
                    <p><span>Former Vice President Operations Fontbonne university</span></p>
                </div>

                <div className='advisors-card'>
                    <img src='https://edurain.org/img/profile/Aaron.jpg' alt='Joshua Walehwa'/>
                    <h3>Aaron Burcell</h3>
                    <p>VP of Growth at Goldman Sachs</p>
                </div>

                <div className='advisors-card'>
                    <img src='https://edurain.org/img/profile/Marie.jpg' alt='Marie Thornton'/>
                    <h3>Marie Thornton</h3>
                    <p><span>Former Admissions Officer Ranken Technical College</span></p>
                </div>
            </div>


            <div className='advisors-container'>
                <div className='advisors-card'>
                    <img src='https://edurain.org/img/profile/Al.jpg' alt='Al Nolan'/>
                    <h3>Al Nolan</h3>
                    <p><span>Solution Architect at Bottle Rocket</span></p>
                </div>
                
                <div className='advisors-card'>
                    <img src='https://edurain.org/img/profile/Susan.jpg' alt='Susan McLaughlin'/>
                    <h3>Susan McLaughlin</h3>
                    <p><span>Former VP of Marketing at Charter</span></p>
                </div>

                <div className='advisors-card'>
                    <img src='https://edurain.org/img/profile/Jennifer.jpg' alt='Jennifer Bardot'/>
                    <h3>Jennifer Bardot</h3>
                    <p><span>Asst. VP Business Banking at Enterprise Bank & Trust</span></p>
                </div>
            </div>


            <div className='sponsors-container'>
                <img src='https://edurain.org/img/logos/stl-dba.jpg' style={{height: '200px'}} alt='St. Louis DBA'/>
                <img src='https://edurain.org/img/logos/balsa-logo.png' style={{height: '200px'}} alt='The Balsa Foundation'/>
                <img src='https://edurain.org/img/logos/impact-ventures.png' style={{height: '200px'}} alt='Impact Ventures'/>
                <img src='https://edurain.org/img/logos/iten-logo.png' style={{height: '150px'}} alt='I T E N'/>
                <img src='https://edurain.org/img/logos/skandalaris.png' style={{height: '150px'}} alt='Skandalaris Center'/>
            </div>


        </div>
    </div>

)

export default Advisors