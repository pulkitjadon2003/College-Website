let main = document.querySelector('.content')

let content = [
    {heading:'Electronics Circuits Lab, Shahnon Block',description:'The Electronics Circuits Lab is the basic and the core laboratory, which introduces a student to the world of electronic circuits and equipment. This laboratory focuses on the skills of designing, developing, and testing a wide range of electronic circuits using test and measuring instruments. There is a series of breadboard stations where students build various electronic circuits to study the theory behind the fundamental building blocks of electronic systems',img:'./images/Labs/Electronics Circuit Lab.jpg'},

    {heading:'Digital Signal Processing/ Software Simulation Lab, Shahnon Block',
    description:'Digital Signal Processing (DSP) is concerned with the representation of signals as a sequence of numbers and the operations carried out on the signals to extract specific information contained in them. DSP Laboratory can be des    cribed as the processing of signals using digital techniques or digital computers. The objective of this laboratory is to enable the students to simulate and experiment with digital signals and systems and apply the theory they have studied in DSP courses. Students can implement DSP algorithms using different computational platforms and DSP tools.',
    img:'./images/Labs/Digital Signal Processing.jpg'},
    
    {heading:'Mini Project Lab, Shahnon Block',
    description:'A mini-project is a problem that has to be solved in the laboratory by applying the theory and manual skills learned from recently completed set experiments. The students are required to plan, carry out and interpret the experiment. They are encouraged to explore their knowledge and ideas laterally to find a practical solution to the problem. The project lab is exclusively designed for students for motivating and executing hobby projects and Mini projects in their all academic years with extended support from the faculties and the department.',
    img:'./images/Labs/Mini Project Lab.jpg'},

    {heading:'Optical Communication Lab, Shahnon Block',
    description:'In the Optical Communication lab, students get hands-on experience in the design and analysis of optical communication systems. The Lab is equipped with fibre optic trainer kits and modules to enable the study of components of an optical communication system.',
    img:'./images/Labs/Optical Communication Lab.jpg'},

    {heading:'Microwave & Antenna Engineering Lab, Shahnon Block',
    description:'This laboratory aims to familiarize the students about the various antennas used in microwave range. The students are able to measure the radiation pattern (in E & H planes) with rotating antenna platforms, dipole antennas, Yagi-Uda antennas, horn antennas and parabolic reflectors. It is also equipped with microwave bench including various wave guide components for carrying out experiments on microwave techniques (Gunn diode, isolator, Klystron power supply, PIN modulator, slotted line, directional coupler, variable and fixed attenuator, frequency meter, circulator, movable short, matched terminal etc.).',
    img:'./images/Labs/Microwave & Antenna Engineering Lab.jpg'},

    {heading:'VLSI Lab, Shahnon Block',
    description:'VLSI LAB was setup in the year 1997 in the department of Electronics and Communication Engineering (ECE). This lab is equipped with the standard VLSI EDA tools and hardware resources. The lab facility includes course lab for course projects, assignments and research. VLSI Lab consists of total 15 good qualities PC with power backup. Some good VLSI books and VLSI materials inside the lab help the students, researchers and all enthusiasts to acquire all the much needed concepts to deal with different practical experiments. </br> The focus of this lab is widely spread towards different pros and cons of the entire upgrading VLSI domain. Development works at different levels like digital VLSI simulation, circuits & system design and research in some recent trends like error correcting codes have been extensively being carried out.',
    img:'./images/Labs/VLSI Lab.jpg'},

    {heading:'PCB Design Lab, Shahnon Block',
    description:'The major objective of this laboratory is to select and use appropriate test equipment and procedures from a wide range of possibilities; to analyze and interpret test results and measurements on electric circuits, in terms of theoretical models. The laboratory can also be used to predict the performance of electric circuits from device characteristics and to design an electronic printed circuit board for a specific application using industry-standard software.',
    img:'./images/Labs/PCB Design Lab.jpg'},


    {heading:'Electronic Measurement & Instrumentation Lab, Shahnon Block',
    description:'Measurement lab in the Electronics department Is established to provide students the practical, elementary as well as comprehensive knowledge about instrumentation. A wide variety of sensors and transducers',
    onclick:'https://www.itmgoi.in/',
    img:'./images/Labs/Electronic Measurement & Instrumentation Lab.jpg '},

]

let data = ''
content.forEach((elem)=>{
    data += `<div class="card">
                <div class="card-content">
                    <h2 class="card-heading">${elem.heading}</h2>
                    <p class="card-paragraph">${elem.description}</p>
                </div>
                <div class="card-image">
                    <img src= '${elem.img}' alt="Card Image">
                </div>
            </div>`
})

main.innerHTML = data;