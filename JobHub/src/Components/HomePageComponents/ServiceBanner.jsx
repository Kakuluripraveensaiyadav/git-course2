import React from "react";

const ServiceBanner = () => {
  const styles = {
    Service_banner: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem",
      gap: "2rem",
      flexWrap: "wrap", // For responsiveness
    },
    Service_bannerImage: {
      flex: 1,
      textAlign: "center",
    },
    Service_bannerImageImg: {
      width: "100%",
      height: "auto",
      borderRadius: "10px",
    },
    Service_bannerContent: {
      flex: 1,
      textAlign: "center",
    },
    Service_bannerContentH1: {
      fontSize: "2.5rem",
      marginBottom: "1rem",
      color: "White",
    },
    Service_bannerContentP: {
      fontSize: "1.2rem",
      color: "rgb(255 189 32)",
      marginBottom: "1.5rem",
    },
    Service_exploreButton: {
      padding: "10px 30px",
      backgroundColor: "#ffbd20",
      color: "#000",
      border: "none",
      borderRadius: "40px",
      fontSize: "1.2rem",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
    Service_exploreButtonHover: {
      backgroundColor: "#e6a619",
    },
  };

  return (
    <section style={styles.Service_banner}>
      <div style={styles.Service_bannerImage}>
        <img
          style={styles.Service_bannerImageImg}
          src="/Services.png"
          alt="Banner"
        />
      </div>
      <div style={styles.Service_bannerContent}>
        <h1 style={styles.Service_bannerContentH1}>Explore Amazing Opportunities</h1>
        <p style={styles.Service_bannerContentP}>
          Discover the best opportunities that match your skills and
          preferences. Take the next step in your career journey today.
        </p>
        <button
          style={styles.Service_exploreButton}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor = styles.exploreButtonHover.backgroundColor)
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor = styles.exploreButton.backgroundColor)
          }
        >
          Explore
        </button>
      </div>
    </section>
  );
};

export default ServiceBanner;
