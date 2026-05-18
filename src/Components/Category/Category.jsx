import React from 'react'

export default function Category() {
    return (
        <div>
            <Link to={`/Category/${Category?.name}`} className={`bg-white overflow-hidden rounded-3xl shadow-xl group  hover:-translate-y-2 cursor-pointer ${index % 2 == 0 ? "hover:rotate-1" : "hover:-rotate-1"} transform transition duration-300  `} >
                <div className="w-full">
                    <img className='overflow-hidden h-52  sm:h-40  w-full     ' src={`https://flagcdn.com/w320/${area?.code}.png`} alt="" srcset="" />
                </div>
                <div className="p-3">
                    <h1 key={area?.name} className='text-2xl font-semibold group-hover:text-main transition  text-center'>   {area?.name}</h1>
                </div>
            </Link>

        </div>
    )
}
