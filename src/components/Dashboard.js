import React from 'react'
import { connect } from 'react-redux'
import Button from 'react-bootstrap/Button'

import EditProfile from './EditProfile'
import DeleteModal from './DeleteModal'
import UploadModal from './UploadModal'
import Form from 'react-bootstrap/Form'

import HousingModal from './HousingModal'


class Dashboard extends React.Component {

    state = {
        editShow: false,
        fafsaShow: false,
        deleteShow: false,
        housingShow: false
    }
    
    componentDidMount(){
        if (!this.props.auth){
            this.props.history.push('/login')
        }
    }

    // might want componentWillUnmount for turning Profile Edit into a drop-down type of thing
    // in case a user opens it, and then comes back

    render(){
        return(
            <div className='dashboard container-fluid'>

                <div class="card" style={{width: '32rem'}}>
                    <img style={{height: '25rem'}} src="https://cdn.proschoolonline.com/wp-content/uploads/2019/03/6-types-of-people-you-must-add-to-your-network.jpg" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h2 class="card-title">Edit Profile</h2>
                        <p class="card-text">Tell us more about you.... ;)</p>
                        <Button variant="primary" onClick={() => this.setState({ editShow: true})}>
                            Sounds non-invasive!
                        </Button>

                        <EditProfile show={this.state.editShow} onHide={() => this.setState({editShow: false})} />
                        {/* <Link to="/" class="btn btn-primary" >Sounds non-invasive!</Link> */}
                    </div>
                </div>

                <div class="card" style={{width: '32rem'}}>
                    <img style={{height: '25rem'}} src="https://www.mrflemingscience.com/uploads/5/7/1/1/57111759/paper-airplanes-shutterstock-43792207-800x460_orig.jpg" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h2 class="card-title">E-File FAFSA</h2>
                        <p class="card-text">Send your FAFSA in minutes :)</p>

                        <Button variant="primary" onClick={() => this.setState({ fafsaShow: true})}>
                            Let's do it
                        </Button>

                        <UploadModal show={this.state.fafsaShow} onHide={() => this.setState({fafsaShow: false})} />
                        {/* <Link to="/FAFSA" class="btn btn-primary">Let's do it!</Link> */}
                    </div>
                </div>

                <div class="card" style={{width: '32rem'}}>
                    <img style={{height: '25rem'}} src="https://i2-prod.mirror.co.uk/incoming/article9536038.ece/ALTERNATES/s615/1_Grim-Reaper.jpg" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h2 class="card-title">Find Housing</h2>
                        <p class="card-text">yes plz</p>
                        <Button variant="primary" onClick={() => this.setState({ housingShow: true})}>
                            Let's Go!!!
                        </Button>

                        <HousingModal auth={this.props.auth} show={this.state.housingShow} onHide={() => this.setState({housingShow: false})} />
                    </div>
                </div>

                {/* <div class="progress">
                    <div class="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                </div> */}


            </div>
        )
    }
}

export default connect(state => ({ auth: state.auth }))(Dashboard)