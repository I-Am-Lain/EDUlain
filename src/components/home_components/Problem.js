import React from 'react'
import { Button } from 'semantic-ui-react'

import { withRouter} from 'react-router-dom';


const Problem = (props) => (
    
    <div className='problem'>
        <div className='problem-content'>
            <h2>PROBLEM: FINANCIAL AID RESOURCES ARE A NIGHTMARE TO TRAVERSE</h2>
            <hr />

            <p>
                We turn the financial aid nightmare into a quick and simple process. 
                Are you looking for financial aid for college? Are you looking for free money? 
                We can get you through the maze – whether you are a student, parent, 
                college access organization, admission officer, or college financial aid officer.
            </p>
            <Button primary onClick={() => props.history.push('/login')} >Get Aid Now!</Button>

        </div>
    </div>

)

export default withRouter(Problem)