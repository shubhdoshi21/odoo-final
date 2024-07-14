import React, { useEffect } from "react";
import style from "../module/aboutus.module.css";
import rise from "../assets/rise.webp"
const About = () => {
  return (
    <div className={style.about_body}>
      <div className={style.outer}>
        <div className="teamTitle">
          
        </div>
        <div className={style.divide}>
          <div className={style.about_block}>
            <div className={style.abt_container1}>
              <div className={style.tag1}>The Rise</div>
              <div className={style.abt11}><img src={rise} /></div>
              <div className={style.abt1}>
              Founded in 2024, Elite Library emerged from a passion for knowledge and a commitment to fostering lifelong learning. Our journey began as a modest collection of books in a small town, nurtured by a community that valued education and intellectual growth. Over the years, we expanded our reach, driven by the belief that access to information should be universal. Today, Elite Library boasts an extensive collection of over 100,000 titles, spanning various genres and disciplines. Our rise is a testament to the dedication of our team and the unwavering support of our patrons, who have been integral to our success.
              </div>
            </div>
            <div className={style.abt_container}>
              <div className={style.tag2}>The Vision</div>
              <div className={style.abt21}><img src={rise} /></div>
              <div className={style.abt2}>
              At Elite Library, our vision is to become a beacon of knowledge and a hub for intellectual engagement. We aim to inspire and empower individuals by providing access to diverse resources that cater to the interests and needs of our community. Our commitment to excellence is reflected in our carefully curated collections, state-of-the-art facilities, and innovative programs. We envision a future where Elite Library is not just a repository of books but a dynamic space for learning, creativity, and collaboration. By embracing technology and fostering a culture of inclusivity, we strive to make knowledge accessible to everyone, everywhere.
              </div>
            </div>
            <div className={style.abt_container}>
              <div className={style.tag3}>The Reason</div>
              <div className={style.abt31}><img src={rise} /></div>
              <div className={style.abt3}>
              The core reason behind the establishment of Elite Library lies in our belief that knowledge is the foundation of progress. We understand that in an ever-changing world, access to information is crucial for personal and societal growth. Elite Library was created to bridge the gap between individuals and the wealth of knowledge available, ensuring that everyone has the opportunity to learn, grow, and succeed. Our dedicated team works tirelessly to provide a welcoming environment where curiosity is encouraged, and learning is celebrated. We are driven by the desire to create a community of informed and empowered individuals who can make meaningful contributions to society.
              </div>
            </div>
            <div className={style.abt_container}>
              <div className={style.tag4}>The Future</div>
              <div className={style.abt41}><img src={rise} /></div>
              <div className={style.abt4}>
              Looking ahead, the future of Elite Library is bright and full of possibilities. We are committed to evolving with the times, continuously enhancing our offerings to meet the changing needs of our patrons. Our plans include expanding our digital library, introducing more interactive and virtual learning experiences, and fostering partnerships with educational institutions and cultural organizations. We envision Elite Library as a cornerstone of our community, a place where people of all ages and backgrounds can come together to explore, learn, and grow. As we move forward, our focus will remain on innovation, inclusivity, and excellence, ensuring that Elite Library continues to be a trusted source of knowledge and inspiration for generations to come.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;