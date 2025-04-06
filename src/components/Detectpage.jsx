import React, { useEffect, useState } from "react";
import StickyHeader from "./Stickyheader";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Styles/Detect.css";
import "../Styles/Stickyheader.css";

const DetectPage = () => {
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  const handleCheckScore = () => {
    setIsProcessing(true);

    // Simulate processing delay (3 seconds)
    setTimeout(() => {
      setIsProcessing(false);
    }, 3000);
  };

  return (
    <div className="detect-container">
      <StickyHeader />
      <div className="detection-area">
        <div className="media-container">
          <div
            className="media-box"
            data-aos="zoom-out"
            data-aos-duration="500"
            data-aos-once="true"
          >
            <h2>Real video/picture</h2>
            <div
              className="upload-area"
              data-aos="zoom-out"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <input type="file" id="real-media" hidden />
              <label htmlFor="real-media">Click to upload</label>
            </div>
          </div>

          <div
            className="media-box"
            data-aos="zoom-out"
            data-aos-duration="500"
            data-aos-once="true"
          >
            <h2>Deep fake video/picture</h2>
            <div
              className="upload-area"
              data-aos="zoom-out"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <input type="file" id="fake-media" hidden />
              <label htmlFor="fake-media">Click to upload</label>
            </div>
          </div>
        </div>

        {/* Updated Check Score Button */}
        <button
          className={`action-button px-6 py-3 rounded-lg text-white font-semibold transition 
            ${
              isProcessing
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          onClick={handleCheckScore}
          disabled={isProcessing}
          data-aos="zoom-out"
          data-aos-duration="500"
          data-aos-once="true"
          style={{ marginTop: "20px", marginBottom: "40px" }} // Added margin
        >
          {isProcessing ? "Processing..." : "Check Score"}
        </button>
      </div>

      <div className="corner-icons">
        <img
          src="/Brain.svg"
          alt=""
          className="corner-icon left"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-once="true"
        />
        <img
          src="/Brain-1.svg"
          alt=""
          className="corner-icon right"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-once="true"
        />
      </div>

      <div className="copyright border-t border-gray-300 text-center mt-8 py-4 bg-gray-50 shadow-md">
        <p className="text-gray-700 text-sm">
          ©2024 All Rights Reserved. This site is protected by the Google Privacy Policy and Terms of Service apply.
        </p>
      </div>
    </div>
  );
};

export default DetectPage;
