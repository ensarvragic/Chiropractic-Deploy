import '../Styles/blog.css'

export default function Blog({handleShowModal}) {
    return (
      <div className="blog-section">
        <div className="blog-content">
          <h1 className="blog-title">Need Help? Meet The New You Today</h1>
          <p className="blog-text">
            Jason enters his 7th year as Chiropractor at our Dee Why clinic. With
            a passion for health and performance, forged in some of the best
            clinics in Australia and the UK, he thrives on the positive outcomes
            his patients experience.
          </p>
          <p className="blog-text">
            With certainty through rigorous testing, Jason is always looking
            toward that next level of vitality – for you, and your family.
          </p>
          <button className="blog-consultation-btn" onClick={handleShowModal}>Book A Consultation</button>
        </div>
        <div className="blog-video-container">
          <iframe
            src="https://www.youtube.com/embed/XvYeHDnvfPw"
            title="Revolutionary Technique Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="blog-video"
          ></iframe>
        </div>
      </div>
    );
  }