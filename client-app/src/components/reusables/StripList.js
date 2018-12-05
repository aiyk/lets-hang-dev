import React from 'react'
import stripimg from '../../assets/users/1.jpg'

export default function StripList() {
    return (
        <ul className="items-strip nice-scroll scroll">
            <li className="strip-item">
                <div className="strip-img">
                    <img src={stripimg} alt='user' />
                </div>
                <div className="strip-data">
                    <div className="strip-primary-data">Ikechukwu Ekwe</div>
                </div>
            </li>
        </ul>
    )
}
