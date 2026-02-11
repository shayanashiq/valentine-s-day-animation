'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

interface Sparkle {
  id: number
  x: number
  y: number
  delay: number
}

interface FloatingHeart {
  id: number
  x: number
  left: number
  delay: number
  duration: number
}

export function ValentineAnimation() {
  const [scene, setScene] = useState(0)
  const [sparkles, setSparkles] = useState<Sparkle[]>([])
  const [hearts, setHearts] = useState<FloatingHeart[]>([])
  const [isPlaying, setIsPlaying] = useState(true)

  // Create sparkle particles
  useEffect(() => {
    const newSparkles = Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: i * 0.1,
    }))
    setSparkles(newSparkles)
  }, [])

  // Create floating hearts
  useEffect(() => {
    const newHearts = Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      left: Math.random() * 80 + 10,
      delay: i * 0.3,
      duration: Math.random() * 2 + 3,
    }))
    setHearts(newHearts)
  }, [])

  // Auto-progress scenes
  useEffect(() => {
    if (!isPlaying) return

    const timer = setInterval(() => {
      setScene((prev) => (prev + 1) % 5)
    }, 4000)

    return () => clearInterval(timer)
  }, [isPlaying])

  const handleSceneClick = () => {
    setScene((prev) => (prev + 1) % 5)
  }

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-pink-50 via-rose-50 to-pink-50 flex items-center justify-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating hearts background */}
        {hearts.map((heart) => (
          <div
            key={`heart-${heart.id}`}
            className="absolute text-rose-300 opacity-20 text-4xl pointer-events-none"
            style={{
              left: `${heart.left}%`,
              top: '-20px',
              animation: `slideUp ${heart.duration}s linear infinite`,
              animationDelay: `${heart.delay}s`,
            }}
          >
            ❤️
          </div>
        ))}

        {/* Sparkles */}
        {sparkles.map((sparkle) => (
          <div
            key={`sparkle-${sparkle.id}`}
            className="absolute w-2 h-2 bg-rose-400 rounded-full pointer-events-none"
            style={{
              left: `${sparkle.x}%`,
              top: `${sparkle.y}%`,
              opacity: 0.6,
              animation: `twinkle 3s ease-in-out infinite`,
              animationDelay: `${sparkle.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Main content container */}
      <div
        className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4"
        onClick={handleSceneClick}
      >
        {/* Scene 1: Teddy Bear Intro */}
        {scene === 0 && (
          <div
            key="scene-0"
            className="absolute inset-0 flex flex-col items-center justify-center animate-fade-in-scale"
          >
             <p className=" animate-pulse md:mt-5  text-5xl font-bold text-rose-600 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
             FALAK
             💕
             </p>
            <div className="relative w-48 h-48 mb-8 animate-float">
              <Image
                src="/teddy-bear.png"
                alt="Teddy Bear"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
            <h1 className="text-5xl animate-pulse md:text-6xl font-bold text-rose-600 text-center mb-4 ">
              Happy Valentine's Day
            </h1>
            <p className="text-xl text-rose-500 text-center max-w-md animate-fade-in-up">
              A special celebration for a special person.To the one who makes my world go 'round—Happy Valentine's Day. I love you more than words can say.
            </p>
          </div>
        )}

        {/* Scene 2: Doll Appearance */}
        {scene === 1 && (
          <div
            key="scene-1"
            className="absolute inset-0 flex flex-col items-center justify-center"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-2xl">
              <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto animate-slide-in-left">
                <Image
                  src="/teddy-bear.png"
                  alt="Teddy Bear"
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </div>
              <div className="text-md text-rose-500 text-center max-w-md animate-fade-in-up">
                <span className="font-bold text-rose-600 text-3xl ">FALAK
                  <span className='animate-pulse'>💕</span></span>
                <p>Every day with you feels like a celebration, but today is extra special. Happy Valentine’s Day to the person who holds my heart. ❤️</p>
              </div>
              <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto animate-slide-in-right">
                <Image
                  src="/doll.png"
                  alt="Doll"
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-rose-600 text-center mt-12 animate-fade-in-up">
              Together, We Create Magic
            </h2>
            <p className="text-lg text-rose-500 text-center mt-4 max-w-md animate-fade-in-up">
              Every moment with you is special.I’ve really enjoyed the time we’ve spent together, and I’m so glad I get to spend today with you. Happy Valentine's Day! 😊
            </p>
          </div>
        )}

        {/* Scene 3: Couple Bears */}
        {scene === 2 && (
          <div
            key="scene-2"
            className="absolute inset-0 flex flex-col items-center justify-center animate-fade-in-scale"
          >
            <div className="relative w-56 h-56 md:w-72 md:h-72 mb-8 animate-float-slow">
              <Image
                src="/couple-bears.png"
                alt="Couple Bears Hugging"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-rose-600 text-center mb-4 animate-fade-in-up">
              Love is in the Air
            </h2>
            <p className="text-lg text-rose-500 text-center max-w-md animate-fade-in-up">
              Surrounded by endless affection and warmth
            </p>
          </div>
        )}

        {/* Scene 4: Heart Celebration */}
        {scene === 3 && (
          <div
            key="scene-3"
            className="absolute inset-0 flex flex-col items-center justify-center"
          >
            <div className="relative mb-12">
              <div className="text-9xl animate-heartbeat">❤️</div>
              <div className="absolute top-4 -right-8 text-5xl animate-rotate-sparkle"
                style={{ animationDelay: '0s' }}>
                ✨
              </div>
              <div className="absolute top-12 -left-12 text-5xl animate-rotate-sparkle"
                style={{ animationDelay: '0.2s' }}>
                ✨
              </div>
              <div className="absolute -bottom-4 left-1/2 text-5xl animate-rotate-sparkle"
                style={{ animationDelay: '0.4s' }}>
                ✨
              </div>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-rose-600 text-center mb-4 animate-fade-in-up">
              Forever & Always
            </h2>
            <p className="text-xl text-rose-500 text-center max-w-md animate-fade-in-up">
              You make every day a celebration.
              I’m so lucky to have you as my partner and my best friend. Thank you for making my life so much brighter just by being in it.
            </p>
          </div>
        )}

        {/* Scene 5: Final Message */}
        {scene === 4 && (
          <div
            key="scene-4"
            className="absolute inset-0 flex flex-col items-center justify-center animate-fade-in-scale"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl md:mb-12">
              <div className="flex flex-col items-center animate-slide-in-left">
                <div className="relative w-32 h-32 md:w-40 md:h-40 mb-4">
                  <Image
                    src="/teddy-bear.png"
                    alt="Teddy Bear"
                    fill
                    className="object-contain drop-shadow-xl"
                  />
                </div>
                <p className="text-center text-rose-600 font-semibold">Warmth</p>
              </div>
              <div className="flex flex-col items-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <div className="text-8xl mb-4 animate-heartbeat">💕</div>
                <p className="text-center text-rose-600 font-semibold">Love</p>
              </div>
              <div className="flex flex-col items-center animate-slide-in-right">
                <div className="relative w-32 h-32 md:w-40 md:h-40 mb-4">
                  <Image
                    src="/doll.png"
                    alt="Doll"
                    fill
                    className="object-contain drop-shadow-xl"
                  />
                </div>
                <p className="text-center text-rose-600 font-semibold">Beauty</p>
              </div>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-rose-600 text-center mb-4 animate-pulse"
              style={{ animationDelay: '0.2s' }}>
              To My Special Someone
            </h2>
            <p className="text-lg text-rose-500 text-center max-w-2xl mb-8 animate-fade-in-up"
              style={{ animationDelay: '0.3s' }}>
              You are the sweetest, most wonderful person in my life. Thank you for filling each day with joy,
              laughter, and endless love. Happy Valentine's Day! 💕
            </p>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-8 py-3 bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: '0.4s' }}
            >
              {isPlaying ? 'Pause' : 'Play'} Animation
            </button>
          </div>
        )}
      </div>

      {/* Scene indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setScene(i)}
            className={`h-3 rounded-full transition-all duration-300 ${
              scene === i
                ? 'w-8 bg-rose-500'
                : 'w-3 bg-rose-300 hover:bg-rose-400'
            }`}
          />
        ))}
      </div>

      {/* Instructions */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20 text-center mb-3">
        <p className="text-rose-600 text-sm md:text-base font-medium">
          Click anywhere or use dots to navigate • ❤️
        </p>
      </div>

      {/* Custom styles for animations */}
      <style jsx>{`
        @keyframes slideUp {
          to {
            transform: translateY(100vh);
          }
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.5);
          }
        }
      `}</style>
    </div>
  )
}
