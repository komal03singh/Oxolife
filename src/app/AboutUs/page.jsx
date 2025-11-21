import React from 'react'
import Image from 'next/image'

function AboutUs() {
  return (
    <div>
        <div className='h-screen mt-5 px-4'>
            <div className='mb-5'>
                <h1 className='text-5xl font-bold px-3 pt-4 text-center'>About Us</h1>
                <p className='text-lg font-light italic text-center'>Meet the Faces Behind the Excellence</p>
            </div>

            <div className='flex pt-10'>
                <div className='w-1/2'>
                    <h3 className='text-2xl font-semibold px-3 mb-4'>We're Expert in Respiratory Field</h3>
                    <p className='text-xl px-3'>Established in the year 2024, we, “SNK Global Consultancy Services”, are one of the leading
                        dealers of Medical Machinery In Different Brand Like Philips, Resmed and Yuwell etc. Since we
                        have more than a decade of industrial experience, we have created a niche in this domain.We deal in
                        top quality producds of renowned brands only.We at SNK Global Consultancy Services believe in
                        long term relations with our customers.
                    </p>
                </div>
                <div className='w-1/2 flex justify-center'>
                    <Image
                        src="/docTeam.avif"
                        alt="docTeam"
                        width={600}
                        height={600}
                    >
                    </Image>
                </div>
            </div>
        </div>

        <div className='h-screen '>

        </div>

    </div>
  )
}

export default AboutUs