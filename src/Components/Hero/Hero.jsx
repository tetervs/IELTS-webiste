import React from 'react'
import './Hero.css'
import study from '../Assets/girl.jpg'
import star from '../Assets/star.png'

export const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <div className="rating">
                <p><img src={star} alt="" /><img src={star} alt="" /><img src={star} alt="" /><img src={star} alt="" /><img src={star} alt="" /> Trusted by 10,000+ students</p>
            </div>
            <div className="main-text">
                <h1>Master ILETS with</h1>
                <h1 className='gradient-text'>Expert Guidance</h1>
            </div>
            <div className="text">
                <p>Achieve your target band score with our comprehensive IELTS preparation program. AI-powered practice, expert tutoring, and proven strategies.</p>
            </div>
            <div className="hero-buttons">
                <button className="primary-btn">Start Free Trial</button>
                <button className="secondary-btn">Watch Demo</button>
            </div>
             <div className="stats">
                <div className="stat-item">
                    <h3>9.0</h3>
                    <p>Average Band Score</p>
                </div>
                <div className="stat-item">
                    <h3>95%</h3>
                    <p>Success Rate</p>
                </div>
                <div className="stat-item">
                    <h3>30+</h3>
                    <p>Expert Tutors</p>
                </div>
            </div>
        </div>
        <div className="hero-right">
            <div className="stats-right">
                <div className="stat-item-top-left">
                    <h3>Band 8.5</h3>
                    <p>Average Score</p>
                </div>
                <img src={study} alt="Student studying" className="hero-image" />
                <div className="stat-item-bottom-right">
                    <h3>24/7</h3>
                    <p>AI Support</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero