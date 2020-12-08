import React from 'react'
import { connect } from 'react-redux'


class Dashboard extends React.Component {
    
    componentDidMount(){
        if (!this.props.auth){
            this.props.history.push('/login')
        }
    }

    render(){
        return(
            <div className='dashboard'>
                <p>hey hey hey!</p>
                <p>I'm a naughty dashboard</p>
            </div>
        )
    }
}

export default connect(state => ({ auth: state.auth }))(Dashboard)