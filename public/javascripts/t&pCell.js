
      document.addEventListener("DOMContentLoaded", function () {
        const sidebarLinks = document.querySelectorAll(".sidebar ul li a");
        const contentArea = document.getElementById("content-area");

        const content = {
          records: `
           <div class="record">
     <h2>LAST 5 YEARS PLACEMENT RECORDS & STATISTICS</h2>
            <h3>MADHAV INSTITUTE OF TECHNOLOGY & SCIENCE, GWALIOR (M.P.), INDIA</h3>
            <h4>Deemed University | NAAC ACCREDITED WITH A++ GRADE</h4>
            <table>
                <thead>
                    <tr>
                        <th>Year of Passout</th>
                        <th>Total Intake</th>
                        <th>Eligible Students</th>
                        <th>Company Visited</th>
                        <th>Total Placed</th>
                        <th>Highest Salary Offered (In Lacs per annum)</th>
                        <th>Average Salary Offered (In Lacs per annum)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2024</td>
                        <td>1200</td>
                        <td>1093</td>
                        <td>58</td>
                        <td>579**</td>
                        <td>11.0 LPA</td>
                        <td>5.31 LPA</td>
                    </tr>
                    <tr>
                        <td>2023</td>
                        <td>960</td>
                        <td>895</td>
                        <td>54</td>
                        <td>635</td>
                        <td>20.16 LPA</td>
                        <td>5.09 LPA</td>
                    </tr>
                    <tr>
                        <td>2022</td>
                        <td>990</td>
                        <td>845</td>
                        <td>55</td>
                        <td>759</td>
                        <td>1.0 Crore*</td>
                        <td>6.46 LPA</td>
                    </tr>
                    <tr>
                        <td>2021</td>
                        <td>930</td>
                        <td>682</td>
                        <td>56</td>
                        <td>571</td>
                        <td>10.0 LPA</td>
                        <td>4.59 LPA</td>
                    </tr>
                    <tr>
                        <td>2020</td>
                        <td>930</td>
                        <td>734</td>
                        <td>43</td>
                        <td>526</td>
                        <td>14.35 LPA</td>
                        <td>5.78 LPA</td>
                    </tr>
                </tbody>
            </table>
            <div class="note">
                <p>*Highest CTC of Rs. 1.0 Cr and Rs. 40.0 LPA is not included in average salary offered.</p>
                <p>** Due to Market scenario 2024 batch placements are still going on</p>
            </div>
</div>
 <h2>LAST 3 YEARS INTERNSHIP RECORDS & STATISTICS</h2>
        <table class="internship-table">
            <thead>
                <tr>
                    <th>S. No.</th>
                    <th>Year</th>
                    <th>Total No. of Student</th>
                    <th>No. of Student Done Internship</th>
                    <th>No. of Students received stipend</th>
                    <th>Highest Stipend Amount in Rs. (Per Month)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1.</td>
                    <td>2024</td>
                    <td>975</td>
                    <td>873</td>
                    <td>311</td>
                    <td>1,10,000</td>
                </tr>
                <tr>
                    <td>2.</td>
                    <td>2023</td>
                    <td>997</td>
                    <td>925</td>
                    <td>229</td>
                    <td>98,000</td>
                </tr>
                <tr>
                    <td>3.</td>
                    <td>2022</td>
                    <td>621</td>
                    <td>535</td>
                    <td>170</td>
                    <td>87,000</td>
                </tr>
            </tbody>
        </table>
        
        <table class="record-table">
            <thead>
                <tr>
                    <th>Sr. No.</th>
                    <th>Internship Record</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td><a href="#">2021-22 Internship Report</a></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td><a href="#">2022-23 Internship Report</a></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td><a href="#">2023-24 Internship Report</a></td>
                </tr>
            </tbody>
        </table>
        `,
          alumni: `
           <section class="profiles">
        <div class="profile-card">
            <img src="profile1.jpg" alt="Profile 1">
            <div class="profile-text">
                <h2>Dr. Vijay Kumar Saraswat</h2>
                <h3>Member of NITI Aayog</h3>
                <p>Padma Shri (Prithvi Missile),<br> Padma Bhushan, Former Director-General, DRDO</p>
            </div>
        </div>
        <div class="profile-card">
            <img src="profile2.jpg" alt="Profile 2">
            <div class="profile-text">
                <h2>Dr. R K Shevgaonkar</h2>
                <h3>Former Director IIT Delhi</h3>
                <p>Former Vice Chancellor of University of Pune</p>
            </div>
        </div>
         <div class="profile-card">
            <img src="profile2.jpg" alt="Profile 2">
            <div class="profile-text">
                <h2>Dr. R K Shevgaonkar</h2>
                <h3>Former Director IIT Delhi</h3>
                <p>Former Vice Chancellor of University of Pune</p>
            </div>
        </div>
         <div class="profile-card">
            <img src="profile2.jpg" alt="Profile 2">
            <div class="profile-text">
                <h2>Dr. R K Shevgaonkar</h2>
                <h3>Former Director IIT Delhi</h3>
                <p>Former Vice Chancellor of University of Pune</p>
            </div>
        </div>
         <div class="profile-card">
            <img src="profile2.jpg" alt="Profile 2">
            <div class="profile-text">
                <h2>Dr. R K Shevgaonkar</h2>
                <h3>Former Director IIT Delhi</h3>
                <p>Former Vice Chancellor of University of Pune</p>
            </div>
        </div>
         <div class="profile-card">
            <img src="profile2.jpg" alt="Profile 2">
            <div class="profile-text">
                <h2>Dr. R K Shevgaonkar</h2>
                <h3>Former Director IIT Delhi</h3>
                <p>Former Vice Chancellor of University of Pune</p>
            </div>
        </div>
         <div class="profile-card">
            <img src="profile2.jpg" alt="Profile 2">
            <div class="profile-text">
                <h2>Dr. R K Shevgaonkar</h2>
                <h3>Former Director IIT Delhi</h3>
                <p>Former Vice Chancellor of University of Pune</p>
            </div>
        </div> 
        <div class="profile-card">
            <img src="profile2.jpg" alt="Profile 2">
            <div class="profile-text">
                <h2>Dr. R K Shevgaonkar</h2>
                <h3>Former Director IIT Delhi</h3>
                <p>Former Vice Chancellor of University of Pune</p>
            </div>
        </div> 
        <div class="profile-card">
            <img src="profile2.jpg" alt="Profile 2">
            <div class="profile-text">
                <h2>Dr. R K Shevgaonkar</h2>
                <h3>Former Director IIT Delhi</h3>
                <p>Former Vice Chancellor of University of Pune</p>
            </div>
        </div>
        <!-- Add more profile cards as needed -->
    </section>`,
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
