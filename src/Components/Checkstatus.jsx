import React from 'react'
import { useOnline } from 'rooks'
import isOfflyn from './isOfflyn.webp'
import Isonline from './Isonline.jpg'

function Checkstatus() {
    const isOnline = useOnline();
    return (
        <div>

            {
                isOnline ?

                    <div>
                        <img style={{ width: "100%" }} src={Isonline} />

                    </div> :
                    <div>
                        <img style={{ width: "100%", height: "600px" }} src={isOfflyn} />

                    </div>

            }

        </div>
    )
}

export default Checkstatus