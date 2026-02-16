import './Contact.css'
import Header from '../components/Header'

function Contact() {
  return (
    <div className="contact-page">
      <Header />
      
      <div className="contact-content">
        <h1 className="contact-title">Contact Me</h1>
        
        <div className="contact-section">
          <div className="contact-info">
            <h2>Get In Touch</h2>
            <p>Feel free to reach out if you have any questions or would like to work together.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <strong>Email:</strong>
                <p>your.email@example.com</p>
              </div>
              <div className="contact-item">
                <strong>Phone:</strong>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
          </div>
          
          <form className="contact-form">
            <input type="text" placeholder="Your Name" className="form-input" />
            <input type="email" placeholder="Your Email" className="form-input" />
            <textarea placeholder="Your Message" className="form-textarea" rows={5}></textarea>
            <button type="submit" className="form-button">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
