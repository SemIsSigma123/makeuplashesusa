import './TrainingAndCourses.css'
import Header from '../components/Header'

function TrainingAndCourses() {
  return (
    <div className="training-page">
      <Header />
      
      <div className="training-content">
        <h1 className="training-title">Training And Courses</h1>
        
        <div className="courses-section">
          <div className="course-card">
            <h2>Course Title 1</h2>
            <p>Description of the course goes here. Learn valuable skills and advance your career.</p>
            <button className="course-button">Learn More</button>
          </div>
          
          <div className="course-card">
            <h2>Course Title 2</h2>
            <p>Description of the course goes here. Learn valuable skills and advance your career.</p>
            <button className="course-button">Learn More</button>
          </div>
          
          <div className="course-card">
            <h2>Course Title 3</h2>
            <p>Description of the course goes here. Learn valuable skills and advance your career.</p>
            <button className="course-button">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrainingAndCourses
