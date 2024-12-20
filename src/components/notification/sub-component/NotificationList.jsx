import React from 'react'
import { ProfilePic } from '../../../assets/images';

const NotificationList = () => {
  return (
    <>
     <div className="card">
         <div className="notification-list">
            <ul>
            {Array(10)
              .fill(1)
              .map((item, idx) => {
                return (
                <li>
                   <div className="noty-td">
                   <div className="noty-td-lft">
                    <div className="notiprfl-img">
                    <span
                              style={{ backgroundImage: `url(${ProfilePic})` }}
                            ></span>
                    </div>
                    <div className='noty-td--descrp'>
                    <h3>Emma</h3>
                    <p>Lorem ipsum dolor sit amet...</p>
                    </div>
                    </div>
                      <span className='notidate-dtls'>19 min ago</span>
                    </div> 
                </li>
                
            );
        })}
                </ul>
          </div>
         </div>
    </>
  )
}

export default NotificationList