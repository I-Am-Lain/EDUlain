import React from 'react'
import { Button } from 'semantic-ui-react'


const Solution = (props) => (
    
    <div className='solution'>
        <div className='solution-content'>
            <h2>THE SOLUTION</h2>
            <hr />
            
            <p>
                EDUrain provides you with a one-stop software to apply for financial aid, 
                scholarships, grants and off-campus housing. We did all the hard work. 
                All you have to do is use our App to click your way into an extremely accessible financial aid process! 
            </p>
            <Button style={{width: '15em'}} primary onClick={() => props.history.push('/login')} > Sign Up Free </Button>
        </div>
    </div>

)

export default Solution