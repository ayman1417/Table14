import axios from 'axios'
import React, { useEffect, useState } from 'react'
import areasFlags from '../../helper/areasFlags ';
import Area from '../../Components/Area/Area';
export default function Areas() {
  const [areas, setAreas] = useState();



  return (
    <div className='p-7 mx-auto'>
      {/* <h1 className="text-2xl font-bold "> asad</h1> */}
      <div className='grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
        {
          (areasFlags?.map((area, index) => {
            return (
              <Area area={area} index={index} />
            )
          }))
        }
      </div>
      {/* <button onClick={getAreas}>click me</button> */}
    </div>
  )
}
