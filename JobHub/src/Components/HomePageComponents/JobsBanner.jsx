import React from 'react';

const JobsBanner = () => {
  const Jobs_bannerStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '2rem',
    borderRadius: '10px',
  };

  const Jobs_bannerContentStyles = {
    flex: 1,
    textAlign: 'Center',
    paddingRight: '2rem',
  };

  const Jobs_headingStyles = {
    fontSize: '2.5rem',
    color: 'White',
    marginBottom: '1rem',
  };

  const Jobs_paragraphStyles = {
    fontSize: '1.2rem',
    color: 'rgb(255 189 32)',
    marginBottom: '1.5rem',
  };

  const Jobs_buttonStyles = {
    backgroundColor: '#ffbd20',
    color: 'black',
    padding: '10px 30px',
    border: 'none',
    borderRadius: '30px',
    fontSize: '1.2rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const Jobs_buttonHoverStyles = {
    backgroundColor: '#e6a619',
  };

  const Jobs_bannerImageStyles = {
    flex: 1,
    textAlign: 'center',
  };

  const Jobs_imgStyles = {
    width: '100%',
    maxWidth: '500px',
    height: 'auto',
    borderRadius: '10px',
  };

  return (
    <section style={Jobs_bannerStyles}>
      <div style={Jobs_bannerContentStyles}>
        <h1 style={Jobs_headingStyles}>Find New Job Postings</h1>
        <p style={Jobs_paragraphStyles}>
        Explore a variety of job opportunities tailored to your skills. Start your career and find the perfect fit for you in near Locations!
        </p>
        <button
          style={Jobs_buttonStyles}
          onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyles.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyles.backgroundColor)}
        >
          Explore
        </button>
      </div>
      <div style={Jobs_bannerImageStyles}>
        <img src="/New_Jobs.png" alt="Banner Image" style={Jobs_imgStyles} />
      </div>
    </section>
  );
};

export default JobsBanner;
