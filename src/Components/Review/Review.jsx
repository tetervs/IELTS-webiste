import React from 'react'
import './Review.css'
import mic from '../Assets/mic.svg'    
import doc from '../Assets/documents-symbol.svg'
import brian from '../Assets/brain-and-head.svg'
import frnd from '../Assets/friend.svg'

export const Review = () => {
  return (
    <div className='review'>
      <div className="review-header">
        <h2>Why Choose IELTS Excellence?</h2>
      </div>
      
      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">
            <img src={mic} alt="Speaking Practice" />
          </div>
          <h3>Speaking Practice</h3>
          <p>AI-powered speaking practice with real-time feedback and pronunciation analysis.</p>
          <div className="feature-highlight">Real-time AI feedback</div>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <img src={doc} alt="Mock Tests" />
          </div>
          <h3>Mock Tests</h3>
          <p>Full-length practice tests that simulate the real IELTS exam experience.</p>
          <div className="feature-highlight">Instant results</div>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <img src={brian} alt="AI Band Score" />
          </div>
          <h3>AI Band Score</h3>
          <p>Get accurate band score predictions with detailed analysis of your performance.</p>
          <div className="feature-highlight">99% accuracy</div>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <img src={frnd} alt="Expert Tutoring" />
          </div>
          <h3>Expert Tutoring</h3>
          <p>One-on-one sessions with certified IELTS instructors for personalized guidance.</p>
          <div className="feature-highlight">Certified instructors</div>
        </div>
      </div>

      <div className="stats-section">
        <div className="stats-grid">
          <div className="stat-item">
            <h3>50K+</h3>
            <p>Students Trained</p>
          </div>
          <div className="stat-item">
            <h3>95%</h3>
            <p>Pass Rate</p>
          </div>
          <div className="stat-item">
            <h3>8.5</h3>
            <p>Average Band</p>
          </div>
          <div className="stat-item">
            <h3>24/7</h3>
            <p>AI Support</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Review   