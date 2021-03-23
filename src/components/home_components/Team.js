import React from 'react'


const Team = () => (
    
    <div className='team'>
        <div className='team-content'>
            <h2>Our Team</h2>
            <hr />

            <p>
                We look just like you. We recently experienced the pain of applying for college.
            </p>

            <p>
                We are here to help.
            </p>

            <div className='the-a-team'>
                <div className='team-card'>
                    <img src='https://edurain.org/img/profile/Bryon.jpg' alt='Bryon Pierson'/>
                    <a href='/team/bryon-pierson'><span>Bryon Pierson</span></a>
                    <p><span>CEO</span></p>
                </div>

                <div className='team-card my-card'>
                    <img src='https://edurain.org/img/profile/Sabree.jpg' alt='Sabree Blackmon'/>
                    <a href='/team/sabree-blackmon'><span>Sabree Blackmon</span></a>
                    <p><span>CTO, Systems & Security</span></p>
                </div>

                <div className='team-card'>
                    <img src='https://edurain.org/img/profile/Arron.jpg' alt='Arron Zheng'/>
                    <a href='/team/arron-zheng'><span>Arron Zheng</span></a>
                    <p><span>Co-Founder, <br/> Developer</span></p>
                </div>

                <div className='team-card'>
                    <img src='https://edurain.org/img/profile/Tommy.jpg' alt='Tommy Dong'/>
                    <a href='/team/tommy-dong'><span>Tommy Dong</span></a>
                    <p><span>Developer</span></p>
                </div>

                                
                <div className='team-card my-card'>
                    <img src='https://vignette.wikia.nocookie.net/sel/images/6/65/Lain_s071.jpg/revision/latest?cb=20100513203649' alt='William Vetter'/>
                    <a href='/team/william-vetter'><span>William Vetter</span></a>
                    <p><span>Developer</span></p>
                </div>
            </div>

        </div>
    </div>

)

export default Team