'use client'

import dynamic from 'next/dynamic'

const ReactPlayer = dynamic(() => import('react-player'), {
  ssr: false,
  loading: () => (
    <div className="w-full aspect-video bg-gray-800 flex items-center justify-center">
      <div className="text-white">Cargando reproductor...</div>
    </div>
  )
})

interface VideoPlayerProps {
  src: string
  title?: string
  poster?: string
}

export default function VideoPlayer({ src, title, poster }: VideoPlayerProps) {
  return (
    <div className="relative bg-black rounded-lg overflow-hidden aspect-video">
      <ReactPlayer
        url={src}
        controls
        width="100%"
        height="100%"
        playing={false}
        light={poster}
      />
      {title && (
        <div className="absolute top-4 left-4 z-10">
          <h3 className="text-white text-xl font-bold drop-shadow-lg">{title}</h3>
        </div>
      )}
    </div>
  )
}
