import Link from 'next/link'
import React from 'react'

function News({ title, description, urlToImage, url }) {
    return (
        <div className='mb-3'>
            <Link href={url}><div className='  text-xl font-bold mb-2 text-blue-500 cursor-pointer'>{title}</div></Link>
            <img src={urlToImage} alt="img" className='w-[100%]' />
            <p className='text-gray-700'>{description}</p>
        </div>
    )
}

export default News