import React from 'react'
import { Button } from '../ui/button'

const FeaturedCampaign = () => {
    return (
        <div className='h-[100dvh] w-[100dvw] flex pt-[4.5rem] bg-cover bg-[url("https://wesvet.com/wp-content/uploads/2020/03/shutterstock_196561442.jpg")] bg-opacity-10'>
            <div className='flex flex-col h-full w-full items-center justify-end pb-10 text-3xl font-bold space-y-10'>
                <span className='bg-white px-5 py-3 rounded-xl'>Help Alice Treat the Rescued Dogs! Be a part of his Mission!</span>
                <Button className='mb-10' size="lg" variant="btn">Donate Now</Button>
            </div>

        </div>
    )
}

export default FeaturedCampaign