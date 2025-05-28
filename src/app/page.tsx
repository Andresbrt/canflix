'use client'

import { useState, useEffect } from 'react'
import VideoPlayer from '@/components/VideoPlayer'

interface Movie {
  id: string
  title: string
  description: string
  videoUrl: string
  posterUrl: string
  bannerUrl: string
  genre: string
  year: number
  rating: number
}

const movies: Movie[] = [
  {
    id: '1',
    title: 'Big Buck Bunny',
    description: 'Una divertida aventura animada sobre un conejo gigante y sus amigos del bosque en una historia llena de humor y acción.',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?w=300&h=450&fit=crop',
    bannerUrl: 'https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?w=1920&h=1080&fit=crop',
    genre: 'Animación',
    year: 2024,
    rating: 4.5
  },
  {
    id: '2',
    title: 'Elephant Dream',
    description: 'Una experiencia visual surrealista que explora los límites de la realidad.',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=450&fit=crop',
    bannerUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1920&h=1080&fit=crop',
    genre: 'Fantasía',
    year: 2024,
    rating: 4.2
  },
  {
    id: '3',
    title: 'For Bigger Blazes',
    description: 'Acción y aventura llena de persecuciones emocionantes.',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=450&fit=crop',
    bannerUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&h=1080&fit=crop',
    genre: 'Acción',
    year: 2023,
    rating: 4.7
  },
  {
    id: '4',
    title: 'Sintel',
    description: 'Una épica historia de fantasía sobre una joven guerrera.',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1509347528160-9329fb5dfd34?w=300&h=450&fit=crop',
    bannerUrl: 'https://images.unsplash.com/photo-1509347528160-9329fb5dfd34?w=1920&h=1080&fit=crop',
    genre: 'Fantasía',
    year: 2024,
    rating: 4.1
  },
  {
    id: '5',
    title: 'Tears of Steel',
    description: 'Ciencia ficción futurista sobre robots y emociones.',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=450&fit=crop',
    bannerUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1920&h=1080&fit=crop',
    genre: 'Ciencia Ficción',
    year: 2024,
    rating: 4.3
  },
  {
    id: '6',
    title: 'Subaru Adventure',
    description: 'Aventura y tecnología en una experiencia visual.',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300&h=450&fit=crop',
    bannerUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1920&h=1080&fit=crop',
    genre: 'Aventura',
    year: 2023,
    rating: 4.0
  }
]

export default function HomePage() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const playMovie = (movie: Movie) => {
    setSelectedMovie(movie)
    setIsPlaying(true)
  }

  const closePlayer = () => {
    setIsPlaying(false)
    setSelectedMovie(null)
  }

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900 flex items-center justify-center">
        <div className="text-6xl font-bold text-red-500 animate-pulse">
          CANFLIX
        </div>
      </div>
    )
  }

  const featuredMovie = movies[0]

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Header Premium */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black via-black/80 to-transparent backdrop-blur-sm">
        <div className="flex items-center justify-between px-8 py-4">
          <div className="flex items-center space-x-8">
            <h1 className="text-4xl font-black text-red-600 cursor-pointer hover:scale-105 transform transition-transform duration-300">
              CANFLIX
            </h1>
            <nav className="hidden md:flex space-x-6">
              <button className="text-white hover:text-red-400 transition-colors duration-300 font-medium">
                Inicio
              </button>
              <button className="text-white hover:text-red-400 transition-colors duration-300 font-medium">
                Películas
              </button>
              <button className="text-white hover:text-red-400 transition-colors duration-300 font-medium">
                Series
              </button>
              <button className="text-white hover:text-red-400 transition-colors duration-300 font-medium">
                Mi Lista
              </button>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-xl hover:text-red-400 transition-colors hover:scale-110 transform duration-300">
              🔍
            </button>
            <button className="text-xl hover:text-red-400 transition-colors hover:scale-110 transform duration-300">
              🔔
            </button>
            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transform duration-300">
              <span className="text-white text-sm">👤</span>
            </div>
          </div>
        </div>
      </header>

      {/* Modal Reproductor */}
      {isPlaying && selectedMovie && (
        <div className="fixed inset-0 z-[60] bg-black bg-opacity-95 backdrop-blur-lg flex items-center justify-center p-6">
          <div className="w-full max-w-6xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-3xl font-bold text-red-500">{selectedMovie.title}</h2>
              <button
                onClick={closePlayer}
                className="text-white hover:text-red-400 text-3xl font-bold transition-colors hover:scale-110 transform"
              >
                ✕
              </button>
            </div>
            <VideoPlayer
              src={selectedMovie.videoUrl}
              poster={selectedMovie.bannerUrl}
              title={selectedMovie.title}
            />
            <div className="mt-6">
              <p className="text-gray-300 mb-4 text-lg">{selectedMovie.description}</p>
              <div className="flex items-center space-x-4">
                <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                  ⭐ {selectedMovie.rating}
                </span>
                <span className="text-gray-400">{selectedMovie.year}</span>
                <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {selectedMovie.genre}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section Premium */}
      <section 
        className="relative h-screen flex items-center bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.8) 100%), url(${featuredMovie.bannerUrl})`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70"></div>
        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-black mb-6 text-white drop-shadow-2xl">
              {featuredMovie.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed drop-shadow-lg max-w-3xl">
              {featuredMovie.description}
            </p>
            <div className="flex items-center space-x-6 mb-10">
              <span className="bg-yellow-500 text-black px-4 py-2 rounded-full font-bold text-lg shadow-lg">
                ⭐ {featuredMovie.rating}
              </span>
              <span className="text-gray-200 text-xl font-medium">{featuredMovie.year}</span>
              <span className="bg-red-600 text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg">
                {featuredMovie.genre}
              </span>
            </div>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => playMovie(featuredMovie)}
                className="bg-white text-black px-10 py-4 rounded-xl font-bold text-xl flex items-center space-x-3 hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                <span className="text-2xl">▶</span>
                <span>Reproducir</span>
              </button>
              <button className="bg-gray-800 bg-opacity-80 backdrop-blur-sm text-white px-10 py-4 rounded-xl font-bold text-xl hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-white border-opacity-20 shadow-xl">
                + Mi Lista
              </button>
              <button className="bg-gray-800 bg-opacity-80 backdrop-blur-sm text-white px-10 py-4 rounded-xl font-bold text-xl hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-white border-opacity-20 shadow-xl">
                ℹ Más Info
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tendencias Premium */}
      <section className="py-20 px-8 -mt-32 relative z-10">
        <div className="container mx-auto">
          <div className="flex items-center space-x-4 mb-12">
            <h2 className="text-4xl font-bold text-white">Tendencias Ahora</h2>
            <span className="text-3xl animate-pulse">🔥</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {movies.map((movie, index) => (
              <div
                key={movie.id}
                className="group cursor-pointer transform hover:scale-110 hover:-translate-y-2 transition-all duration-500"
                onClick={() => playMovie(movie)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-gray-800 shadow-2xl group-hover:shadow-red-500 group-hover:shadow-lg">
                  <div className="absolute top-3 left-3 z-10 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                    #{index + 1}
                  </div>
                  <img
                    src={movie.posterUrl}
                    alt={movie.title}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 shadow-2xl">
                        <span className="text-white text-2xl">▶</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-bold text-sm text-white mb-1">{movie.title}</h3>
                    <p className="text-gray-300 text-xs mb-2">{movie.year} • {movie.genre}</p>
                    <div className="flex items-center justify-between">
                      <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">
                        ⭐ {movie.rating}
                      </span>
                      <span className="text-green-400 text-xs font-bold">99% Match</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recomendadas Premium */}
      <section className="py-20 px-8 bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="container mx-auto">
          <div className="flex items-center space-x-4 mb-12">
            <span className="text-3xl">✨</span>
            <h2 className="text-4xl font-bold text-white">Recomendadas para Ti</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {movies.slice().reverse().map((movie) => (
              <div
                key={'rec-' + movie.id}
                className="group cursor-pointer transform hover:scale-110 hover:-translate-y-2 transition-all duration-500"
                onClick={() => playMovie(movie)}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl group-hover:shadow-purple-500 group-hover:shadow-lg">
                  <img
                    src={movie.posterUrl}
                    alt={movie.title}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 shadow-2xl">
                        <span className="text-white text-2xl">▶</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 bg-green-500 text-black px-2 py-1 rounded-full text-xs font-bold">
                    NUEVO
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Premium */}
      <footer className="bg-gradient-to-t from-black via-gray-900 to-black py-20 px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-black text-red-600 mb-6">CANFLIX</h2>
          <p className="text-gray-400 text-xl mb-8">Tu plataforma de streaming favorita</p>
          <div className="flex justify-center space-x-8 text-gray-500 mb-8">
            <button className="hover:text-red-400 transition-colors">Términos</button>
            <button className="hover:text-red-400 transition-colors">Privacidad</button>
            <button className="hover:text-red-400 transition-colors">Contacto</button>
            <button className="hover:text-red-400 transition-colors">Ayuda</button>
          </div>
          <p className="text-gray-600">© 2024 CANFLIX. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}