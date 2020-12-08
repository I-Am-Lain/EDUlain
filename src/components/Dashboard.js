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
            <div className='dashboard container-fluid'>


                <div class="row">
                    <div class="col-sm">
                        One of three columns
                    </div>
                    <div class="col-sm">
                        One of three columns
                    </div>
                    <div class="col-sm">
                        One of three columns
                    </div>
                </div>

                <div class="progress">
                    <div class="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                </div>


            </div>
        )
    }
}

export default connect(state => ({ auth: state.auth }))(Dashboard)