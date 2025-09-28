import React from 'react'
import './StudentReview.css'
import quotes from '../Assets/double-quotes.svg'

export const StudentReview = () => {
  return (
    <div className='studentreview'>
      <div className="reviews-header">
        <h2>Success Stories from Our Students</h2>
        <p>Join thousands of students who have achieved their target IELTS scores with our proven methods.</p>
      </div>
      
      <div className="reviews-grid">
        <div className="review-card">
          <div className="review-rating">
            <div className="stars">★★★★★</div>
          </div>
          <div className="review-content">
            <img src={quotes} alt="quotes" className="quotes-icon" />
            <p>"The AI speaking practice was incredible! I improved from 6.5 to 8.5 in just 3 months. The real-time feedback helped me identify exactly what I needed to work on."</p>
          </div>
          <div className="review-author">
            <h4>Sarah Chen</h4>
            <p>China • Band 8.5</p>
          </div>
        </div>

        <div className="review-card">
          <div className="review-rating">
            <div className="stars">★★★★★</div>
          </div>
          <div className="review-content">
            <img src={quotes} alt="quotes" className="quotes-icon" />
            <p>"Outstanding platform! The mock tests were exactly like the real exam. My tutor was amazing and helped me achieve my dream score of 9.0. Highly recommended!"</p>
          </div>
          <div className="review-author">
            <h4>Ahmed Hassan</h4>
            <p>Egypt • Band 9.0</p>
          </div>
        </div>

        <div className="review-card">
          <div className="review-rating">
            <div className="stars">★★★★★</div>
          </div>
          <div className="review-content">
            <img src={quotes} alt="quotes" className="quotes-icon" />
            <p>"The comprehensive approach really works. From writing analysis to speaking practice, everything is covered. I felt completely prepared for the actual test."</p>
          </div>
          <div className="review-author">
            <h4>Maria Rodriguez</h4>
            <p>Spain • Band 8.0</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentReview