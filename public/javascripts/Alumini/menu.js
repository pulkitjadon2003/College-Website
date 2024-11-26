document.addEventListener("DOMContentLoaded", function () {
  const sidebarLinks = document.querySelectorAll(".sidebar ul li p");
  const contentArea = document.getElementById("content-area");

  const content = {
    portal: `
       <p class="para">
         <b>Alumni of ITM Gwalior</b>
        <br> <br>

The alumni of ITM Gwalior represent a strong and dynamic community, spread across various industries and regions around the world. These former students have carried forward the institute’s legacy of excellence, making significant contributions to their respective fields, whether in engineering, management, entrepreneurship, or the public sector. They are known not only for their professional achievements but also for their commitment to giving back to the society and staying connected with the institution.
<br><br>
ITM Gwalior maintains a close relationship with its alumni, organizing regular events, meetups, and professional networking opportunities. Alumni play a vital role in mentoring current students, offering career guidance, and providing valuable industry insights. Their success stories serve as an inspiration to the student body, fostering a culture of ambition, innovation, and social responsibility.
<br><br>
The institute’s alumni network is one of its strongest assets, creating a bond between the past, present, and future students. Their continued engagement ensures that the ITM community grows stronger, helping to uphold the institute’s reputation as a premier center for education and research.
      </p>

  



 

<div class="alumni-info">
  <div>
      <h2>25000+</h2>
      <p>Alumni</p>
  </div>
  <div>
      <h2>16</h2>
      <p>Discipline</p>
  </div>
  <div>
      <h2>50+</h2>
      <p>Department</p>
  </div>
  <div>
      <h2>2000+</h2>
      <p>International Students</p>
  </div>
  <div>
      <h2>16</h2>
      <p>Countries Alumni</p>
  </div>
</div>

<!-- Creative Image Collage -->
<div class="collage-container">
  <div class="collage-item1">
      <img src="../images/Alumini/_DSC2825.JPG" alt="Image 1">
  </div>
  <div class="collage-item2">
      <img src="../images/Alumini/DSC_0291.jpg" alt="Image 2">
  </div>
  <div class="collage-item3">
      <img src="../images/Alumini/DSC_2299.JPG" alt="Image 3">
  </div>
  <div class="collage-item4">
      <img src="../images/Alumini/DSC_2335.JPG" alt="Image 4">
  </div>
  <div class="collage-item5">
      <img src="../images/Alumini/DSC_9772.JPG" alt="Image 5">
  </div>
  <div class="collage-item6">
      <img src="../images/Alumini/alumin1.png" alt="Image 6">
  </div>
  <div class="collage-item7">
      <img src="../images/Alumini/alumni2.png" alt="Image 7">
  </div>
  <div class="collage-item8">
      <img src="../images/Alumini/alumni3.png" alt="Image 8">
  </div>
</div>
<div class="site-link">
<h2>For more details: </h2>
<a href="https://www.itmalumni.in">Click Here</a>
</div>

       
         `,

    mentor: `
     

<div class="chapters">
  <h2>Alumni Meet Chapters</h2>
  <table>
              <thead>
                  <tr>
                      <th>Sr. No.</th>
                      <th>Chapters</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>1.</td>
                      <td><a href="https://www.itmgoi.in/alumni/Videos/Alumni%20Mentorship%20Program/SACHIIN%20GUPTA.mp4">Mr. Sachiin Gupta, Engineering Manager, veritas Technologies Pune</a></td>
                  </tr>
                    <tr>
                      <td>2.</td>
                      <td>
      <a href="https://www.itmgoi.in/alumni/Videos/Alumni%20Mentorship%20Program/KUNAL%20BHALLA.mp4" >Mr. Kunal Bhalla, Enterprise Daata Architect, Natwest Group</a>
                      </td>
                  </tr>
                    <tr>
                      <td>3.</td>
                      <td><a href="https://www.itmgoi.in/alumni/Videos/Alumni%20Mentorship%20Program/JATIN%20SHRIVASTAVA.mp4">Mr. Jatin Shrivastava, Sr. Product Manager, Waisi Limited</a></td>
                  </tr>
                  <tr>
                      <td>4.</td>
                      <td><a href="../docs/Alumini/doc/Alumni Mentorship Program-2024.pdf">Alumni Mentorship Meeting</a></td>
                  </tr>
              </tbody>
          </table>
</div>

    `,
    testimonials: `
    
     <div class="chapters">
  <h2>Alumni life Membership Video Testimonial</h2>
  <p>The Role of ITM Support in My Membership Decision:Alumini Stories</p>
  <table>
              <thead>
                  <tr>
                      <th>Sr. No.</th>
                      <th>Alumini Stories</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>1.</td>
                      <td>
                      <a href="https://www.itmgoi.in/alumni/Videos/Alumni%20Association%20Membership/Ms%20Deepika%20Sharma.mp4">Ms. Deepika Sharma</a></td>
                  </tr>
                    <tr>
                      <td>2.</td>
                      <td>
      <a href="https://www.itmgoi.in/alumni/Videos/Alumni%20Association%20Membership/Ms%20Deepika%20Sharma.mp4" >Mr. Abhishek Kumar</a>

                      </td>
                  </tr>
                    <tr>
                      <td>3.</td>
                      <td>
      <a href="https://www.itmgoi.in/alumni/Videos/Alumni%20Association%20Membership/satyam%20gupta.mp4" >Mr. Satyam Gupta</a>
                      
                      </td>
                  </tr>
                  <tr>
                      <td>4.</td>
                      <td>
      <a href="https://www.itmgoi.in/alumni/Videos/Alumni%20Association%20Membership/kumar%20sanket.mp4" >Mr. Kumar Sanket</a>
      
                      
                      </td>
                  </tr>
              </tbody>
          </table>
</div>
 
  `,

    chapter: `

   
<div class="chapters">
  <h2>Alumni Meet Chapters</h2>
  <table>
              <thead>
                  <tr>
                      <th>Sr. No.</th>
                      <th>Chapters</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>1.</td>
                      <td><a href="https://www.itmgoi.in/alumni/Videos/Alumni%20Meet%20All%20Three%20Chapter/Alumni%20Meet%202024%20Pune%20Chapter.mp4">Alumni Meet 2024 (Pune Chapter)</a></td>
                  </tr>
                    <tr>
                      <td>2.</td>
                      <td>
      <a href="https://www.itmgoi.in/alumni/Videos/Alumni%20Meet%20All%20Three%20Chapter/Alumni%20Meet%202020%20Banglore%20Chapter.mp4" >Alumni Meet 2020 (Banglore Chapter)</a>
                      </td>
                  </tr>
                    <tr>
                      <td>3.</td>
                      <td><a href="https://www.itmgoi.in/alumni/Videos/Alumni%20Meet%20All%20Three%20Chapter/Alumni%20Meet%202019%20Delhi%20Chapter.mp4">Alumni Meet 2019 (Delhi Chapter)</a></td>
                  </tr>
              </tbody>
          </table>
</div>



`,

    speaks: `
     <div class="card-container-speak">
<div class="card-speak">
<div class="card-content-speak">
<h2>Rishabh Khandelwal</h2>
<p>CS - ITM (Placed in INFOSYS)</p>
<p>Why we choose college? For good training, exposure of industries and yes company visiting to our campus. That what is about itm Tap cell heart of our institution. Training on most updated technology enhancing our technical skills.</p>
<!-- Add more details as needed -->
</div>
<img src="../images/Alumini/alumini_2018_image1.png" alt="Person Image">
</div>
</div>
       <div class="card-container-speak">
<div class="card-speak">
<div class="card-content-speak">
<h2>Paran Verma</h2>
<p>CS - ITM (Placed in INFOSYS)</p>
<p>I always aspired to pursue my Engineering in Computer Science at ITM. And now in these past 04 years, I have realized my dream every day. I am extremely grateful to the faculty and management with whose undivided support I have been able to successfully accomplish my program in a very progressive environment. The guidance I have received at every milestone has helped me thrive in my best abilities. I would also like to extend my sincere thanks to TAP cell that has been very effective and instrumental in the placement processes. It has been a fulfilling and rewarding journey at ITM which provided me a great platform to a promising career.</p>
<!-- Add more details as needed -->
</div>
<img src="../images/Alumini/alumini_2018_image2.png" alt="Person Image">
</div>
</div>           <div class="card-container-speak">
<div class="card-speak">
<div class="card-content-speak">
<h2>Poorvi Agrawal</h2>
<p>CS - ITM (Placed in Reflex Solution)</p>
<p>The journey of ITM has been a very wonderful experience . Without the support of teachers , my journey won’t be possible . And also , the Trainings conducted by TAP CELL played a major role in improving my skills and personality . So I would like to thank each and every teacher who supported me and guided me throughout these 4yrs and helped me grow . Thank You

</p>
<!-- Add more details as needed -->
</div>
<img src="../images/Alumini/alumini_2018_image3.png" alt="Person Image">
</div>
</div>           <div class="card-container-speak">
<div class="card-speak">
<div class="card-content-speak">
<h2>Uma Prateek Mishra</h2>
<p>CS - ITM (Placed in INFOSYS & WIPRO)</p>
<p>ITM has changed my life completely. I have learnt lot of new things in this beautiful journey of 4 years. Tap cell has always been so supportive and provided the best platform to achieve my goals. I would like to thank ITM ,Tapcell and all the faculties for being the part of my success.</p>
<!-- Add more details as needed -->
</div>
<img src="../images/Alumini/alumini_2018_image4.png" alt="Person Image">
</div>
</div>           <div class="card-container-speak">
<div class="card-speak">
<div class="card-content-speak">
<h2>Himanshu Punjabi</h2>
<p>(Placed in IBM )</p>
<p>Proud to be a part of ITMGOI, getting placed in IBM is like a dream come true to me. My efforts, parent's blessings and teacher's fruitful guidance helped me achieve my goal. Tap cell has been very instrumental in my preparation. The training not just enhanced my technical skills but also developed my logical as well as communication skills. Being in ITM has been the most wonderful and memorable phase of my life.</p>
<!-- Add more details as needed -->
</div>
<img src="../images/Alumini/alumini_2017_image9.png" alt="Person Image">
</div>
</div>           <div class="card-container-speak">
<div class="card-speak">
<div class="card-content-speak">
<h2>MOHINI JAIN</h2>
<p>(Placed in IBM , INFOSYS , WIPRO )</p>
<p>It gives me immense pleasure to pursue engineering from an institute that provides ample opportunities for each student to get placed in top IT companies. 4 years in college provided us with not only academics but also various training modules which helped us boost our confidence at each step. Thanks to all the TAP cell officials and teachers for such great guidance. These years were a golden period of my life.</p>
<!-- Add more details as needed -->
</div>
<img src="../images/Alumini/alumini_2017_image6.png" alt="Person Image">
</div>
</div>           <div class="card-container-speak">
<div class="card-speak">
<div class="card-content-speak">
<h2>Diksha Bhadauria</h2>
<p>CS - ITM (Placed in Capgemini )</p>
<p>Thank you ITM for providing me an opportunity to explore career opportunity at India’s one of the most reputed tech firm, Capgemini. It is the hard work of our Tap Cell which provides us opportunities and resources to ensure an appropriate start to their career.</p>
<!-- Add more details as needed -->
</div>
<img src="../images/Alumini/alumini_2017_image1.png" alt="Person Image">
</div>
</div>           <div class="card-container-speak">
<div class="card-speak">
<div class="card-content-speak">
<h2>Akanksha Dixit
</h2>
<p>(Placed in Capital AIM )</p>
<p>It feels very special to got placement. TAPCELL is very supportive for giving guidelines and training related to placements. It was my best decision to take admission in ITM .</p>
<!-- Add more details as needed -->
</div>
<img src="../images/Alumini/alumini_2017_image2.png" alt="Person Image">
</div>
</div>           <div class="card-container-speak">
<div class="card-speak">
<div class="card-content-speak">
<h2>Priya Shandilya</h2>
<p>CS - ITM (Placed in INFOSYS)</p>
<p>I am happy and my dream came true when I got placed before the end of my final year and that was made possible by my Training and placement department and the incredibly supportive and understanding faculties of ITM. Thank you TAPCELL and ITM for making me employable .</p>
<!-- Add more details as needed -->
</div>
<img src="../images/Alumini/alumini_2017_image3.png" alt="Person Image">
</div>
</div>
      `,
      events:`
      <div class="chapters">
  <h2>Alumni Events</h2>
  <table>
              <thead>
                  <tr>
                      <th>Sr. No.</th>
                      <th>Events</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>1.</td>
                      <td><a href="../docs/Alumini/Alumni Expert Talk on Computer Programming and Trending Technologies.pdf">Alumni Expert Talk on Computer Programming and Trending Technologies</a></td>
                  </tr>
                    <tr>
                      <td>2.</td>
                      <td><a href="../docs/Alumini/Alumni Expert Talk on Generative AI and Its Tool.pdf" >Alumni Expert Talk on Generative AI and Its Tool</a>
                      </td>
                  </tr>
                    <tr>
                      <td>3.</td>
                      <td><a href="../docs/Alumini/Alumni Meet-2019.pdf">Alumni Meet-2019</a></td>
                  </tr>
                  <tr>
                      <td>4.</td>
                      <td><a href="../docs/Alumini/Alumni Meet-2020.pdf">Alumni Meet-2020</a></td>
                  </tr>
                  <tr>
                      <td>5.</td>
                      <td><a href="../docs/Alumini/Alumni Meet-2021.pdf">Alumni Meet-2021</a></td>
                  </tr>
                  <tr>
                      <td>6.</td>
                      <td><a href="../docs/Alumini/Alumni Meet-2022.pdf">Alumni Meet-2022</a></td>
                  </tr>
                  <tr>
                      <td>7.</td>
                     <td><a href="../docs/Alumini/Alumni Meet-2023.pdf">Alumni Meet-2023</a></td>
                  </tr>
                  <tr>
                      <td>8.</td>
                      <td><a href="../docs/Alumini/Alumni Meet-2024.pdf">Alumni Meet-2024</a></td>
                  </tr>
              </tbody>
          </table>
</div>
      `,

      achieve:`
      <div class="achieve">
      <img src="../images/Alumini/Alumni-Noticed.jpg">
      </div>

      `,
      back:`
      <div class="chapters">
                
                <h2>Alumni Engagement:</h2>
                <p>The ITM Alumni Association (ITMAA) is a registered alumni association that actively contributes to the development of the institution through various forms of support, including financial contributions and other services. Formally registered on March 12th, 2021, under the Madhya Pradesh Societies Registration Act, 1973, with registration certificate No. 02/42/01/25050/21, ITMAA operates within a legally recognized framework governed by predefined rules and regulations outlined in its byelaws.
Purpose and Objectives of the Alumni Association:
The primary purpose of ITMAA is to maintain connections between the alumni, staff, and students of the institute. The association aims to keep alumni informed about the institute's vision, mission, and values while fostering a sense of community among the alumni network.
</p>
    
                <h2>Objectives:</h2>
                <ul>
                    <li>Experience Sharing: Facilitate alumni sharing to aid professional development of current students.</li>
                    <li>Career Guidance: Assist current students in making informed decisions about their education and career paths through alumni mentorship.</li>
                    <li>Internships and Placements: Leverage alumni networks for internships and placements.
</li>
                    <li>Institute Development: Seek guidance and support from alumni to contribute to the overall development of the institute.</li>
                    <p>ITMAA is dedicated to fostering a supportive community that enhances the institute’s development and maintains strong alumni connections, thereby creating a lasting impact through collaborative efforts, networking opportunities, and contributions that drive continuous growth and success for both the institute and its alumni.
</p>
                </ul>
    
                <h2>Impact of the Alumni Association:</h2>
                <ul>
                    <li>The Alumni Portal: The institute has partnered with Coherendz India Private Limited to create a dedicated alumni portal, accessible via http://itmalumni.in and the "My Alumni Network" app. This platform enables two-way communication between alumni and current students, fostering stronger ties with the alma mater. Key features include:</li>
                    <li>Establishing communication links between alumni, students, and the institute's administration.</li>
                    <li>Providing a forum for alumni to share ideas on academic, cultural, and social issues.
</li>
                    <li>Facilitating alumni mentorship programs and networks to support student development.
</li>
                   
                </ul>

               

               
                <h2>Alumni Engagement:</h2>
                <ul>
                    <a href="../docs/Alumini/5.4_Alumni_Engagement.pdf" target="_blank">View</a>
                </ul>
                
            </div>
      `
  };

  sidebarLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      sidebarLinks.forEach((link) => link.classList.remove("active"));
      this.classList.add("active");

      const selectedContent = this.getAttribute("data-content");
      contentArea.innerHTML = content[selectedContent];
    });
  });
});




// Enter full-screen mode
function enterFullscreen(videoId) {
var video = document.getElementById(videoId);
if (video.requestFullscreen) {
video.requestFullscreen();
} else if (video.mozRequestFullScreen) {
// Firefox
video.mozRequestFullScreen();
} else if (video.webkitRequestFullscreen) {
// Chrome and Safari
video.webkitRequestFullscreen();
} else if (video.msRequestFullscreen) {
// IE/Edge
video.msRequestFullscreen();
}
}