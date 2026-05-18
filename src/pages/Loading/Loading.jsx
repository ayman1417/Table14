import { Spinner } from '@heroui/react'
import React from 'react'
export default function Loading() {
    return (
        <div className='h-screen flex justify-center items-center w-full'>

            <Spinner  color='warning'    label="Loading"  size="lg" labelColor="warning" />

        </div>
    )
}
