import { useState } from 'react'
import './Home.css'
import Header from '../components/Header'

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right')
  const [isAnimating, setIsAnimating] = useState(false)
  const images = ['/photo1.jpg', '/photo2.jpg', '/photo3.jpg', '/photo4.jpg']

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setSlideDirection('right')
    setCurrentSlide((prev) => (prev + 1) % images.length)
    setTimeout(() => setIsAnimating(false), 600)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setSlideDirection('left')
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
    setTimeout(() => setIsAnimating(false), 600)
  }

  return (
    <div className="home">
      <Header />

      <div className='About-Me'>
        <div className='About-Me-div'>
          <h1>About Me</h1>
          <p className='about-me-text'>My name is Tatevik Ghazaryan and I was born in Yerevan. <br />I am a makeup artist, I started my journey in in Yervan and I was majoring Art in pedagogical university, later on in 2015 I started to learn how to do makeup and in 2019 I came to the USA. Covid struck 2 months after I came to the USA it was very difficult, but later I made freinds I started to get used to this life. Now I am continuing my journey and I am a makeup artist and I am happy to share my work with you.</p>
        </div>
        <img src="/Project-img.jpg" alt="Project" className='project-img1'/>
      </div>

      <div className='My-Work'>
          <p className='Some-Work'>Some Of My Work</p>
          <div className='slider-container'>
            <button className='slider-button prev-button' onClick={prevSlide}>&#8249;</button>
            <div className='slider-wrapper'>
              <img 
                src={images[currentSlide]} 
                alt={`Work ${currentSlide + 1}`} 
                className={`slider-image slide-${slideDirection}`}
                key={currentSlide}
              />
            </div>
            <button className='slider-button next-button' onClick={nextSlide}>&#8250;</button>
          </div>
      </div>

    </div>
  )
}

export default Home

