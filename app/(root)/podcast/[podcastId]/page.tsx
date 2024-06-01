import React from 'react'

const PodCastDetails = ({params}: {params: {podcastId: string}}) => {
  return (
    <div className='text-white'>{params.podcastId}</div>
  )
}

export default PodCastDetails