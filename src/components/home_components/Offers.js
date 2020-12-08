import React from 'react'

import OffersFileIcon from './OffersFileIcon'
import OffersFindIcon from './OffersFindIcon'
import OffersFundIcon from './OffersFundIcon'

const Offers = () => (
    
    <div className='offers'>
        <h2>WHAT WE OFFER</h2>

        <div className='offer-cards'>

            <div className='offer-card'>
                <OffersFileIcon className='offers-file-icon'/>
                <div className='offer-card-right-half'>
                    <h3>FILE</h3>
                    <p>File your FAFSA for free in five minutes 
                        on our easy-to-use platform
                    </p>
                </div>
            </div>

            <div className='offer-card'>
                <OffersFindIcon className='offers-file-icon'/>
                <div className='offer-card-right-half'>
                    <h3>FIND</h3>
                    <p>Find scholarships through our extensive database of scholarship partners</p>
                </div>
            </div>
            
            <div className='offer-card'>
                <OffersFundIcon className='offers-file-icon'/>
                <div className='offer-card-right-half'>
                    <h3>FUND</h3>
                    <p>Fund off-campus housing assistance</p>
                </div>
            </div>

        </div>
    </div>

)

export default Offers