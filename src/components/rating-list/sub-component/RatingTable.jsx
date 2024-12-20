import React from 'react'
import { PrflImage } from '../../../assets/images'

const RatingTable = () => {
  return (
    <>
    <div className="card rtnglist-card">
    <div className="thhdng-chng">
          <h3>Rating</h3>
        </div>
        <div className="rating-list">
            <ul>
            {Array(6).fill(1).map((item,idx)=>{
              return(
                <li>
                    <div className="employrtng-card">
                    <div className='rtngtp-timing'>
                             <p>50 min ago</p>
                        </div>
                        <div className="rtng-prfl-sec">
                        <span
                  style={{ backgroundImage: `url(${PrflImage})` }}
                ></span>
                        </div>
                      <div className="rtngrght-sec">
                        <h3>Niki Jonas</h3>
                        <div className='ratng-points'>
                            <span className='active'><i class="fa fa-star" aria-hidden="true"></i></span>
                            <span className='active'><i class="fa fa-star" aria-hidden="true"></i></span>
                            <span className='active'><i class="fa fa-star" aria-hidden="true"></i></span>
                            <span className='active'><i class="fa fa-star" aria-hidden="true"></i></span>
                            <span className='active'><i class="fa fa-star" aria-hidden="true"></i></span>
                         </div>
                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                      </div>
                    </div>
                    </li>
                       )
                    })}
                    </ul>
        </div>
    </div>
    </>
  )
}

export default RatingTable