import React, { useEffect } from 'react';
import StickyHeader from './Stickyheader';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../Styles/Detect.css';
import '../Styles/Stickyheader.css';

const DetectPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="detect-container">
      <StickyHeader />
      <div className="detection-area">
        <div className="media-container">
          <div className="media-box" data-aos="zoom-out" data-aos-duration="500" data-aos-once="true">
            <h2>Real video/picture</h2>
            <div className="upload-area" data-aos="zoom-out" data-aos-duration="500" data-aos-once="true">
              <input type="file" id="real-media" hidden />
              <label htmlFor="real-media">Click to upload</label>
            </div>
            <button className="action-button download" data-aos="zoom-out" data-aos-duration="500" data-aos-once="true">
              Download
              <img src="/download.svg" alt="Download" className="button-icon" />
            </button>
          </div>

          <div className="media-box" data-aos="zoom-out" data-aos-duration="500" data-aos-once="true">
            <h2>Deep fake video/picture</h2>
            <div className="upload-area" data-aos="zoom-out" data-aos-duration="500" data-aos-once="true">
              <input type="file" id="fake-media" hidden />
              <label htmlFor="fake-media">Click to upload</label>
            </div>
            <button className="action-button share" data-aos="zoom-out" data-aos-duration="500" data-aos-once="true">
              Share
              <img src="/share.svg" alt="Share" className="button-icon" />
            </button>
          </div>
        </div>
      </div>

      <div className="corner-icons">
        <img src="/Brain.svg" alt="" className="corner-icon left" data-aos="fade-up" data-aos-duration="500" data-aos-once="true" />
        <img src="/Brain-1.svg" alt="" className="corner-icon right" data-aos="fade-up" data-aos-duration="500" data-aos-once="true" />
      </div>
    </div>
  );
};

export default DetectPage;
