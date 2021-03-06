'use strict';

/** ******** TEMPLATE GENERATION FUNCTIONS **********/
// These functions return HTML templates
function aboutMeTemplate () {
  return `
  <header>
    <img class="circle" src="img/myPic.jpg" alt="Image of Cesar Morales">
    <h1>Cesar Lenin Morales</h1>
    <h2>I’m currently a student 
      <br>in the Software Engineering Bootcamp at Thinkful.</h2>
  </header>

  <div clas="info">
  <section class="about-me">
    <h3>About me</h3>
    <p>I love coding because the work I do is something I can proudly stamp my name on.
     Encountering roadblocks and overcoming them gives me a sense of euphoria. I like a challenge.
      The greater the struggle, the better. It is what keeps me coming back.
       I want to be part of a team to tackle bigger projects and trade knowledge with other passionate people.</p>
    <p>When I’m not coding, I am most likely reading or exercising.
     For reading, I like self-development or business books and manga. As a workout, I like lifting weights or practicing Brazilian Jiu-Jitsu.
      On occasion, I relax watching anime, riding my motorcycle or going on long hikes.</p>
  </section>

  <section class="contact">
    <h3>Contact</h3>
    <div class="contact-links">
    <a class="contact-link" href="https://www.linkedin.com/in/cesar-lenin-morales-8a8648a0/" target="_blank">
      <i class="fa fa-fw fa-2x fa-linkedin middle" ></i>
      <span>LinkedIn</span>  
    </a> 

    <a class="contact-link" href="https://github.com/cesarlenin" target="_blank">
      <i class="fa fa-fw fa-2x fa-github middle"></i>
      <span>GitHub</span>  
    </a> 

    <a class="contact-link" href="mailto:cesarlenin@protonmail.com" target="_blank">
      <i class="fa fa-fw fa-2x fa-envelope middle"></i>
      <span>Email</span>  
    </a>
    </div>
  </section>
  <div>`;
}

function projectsTemplate () {
  return `
  <header>
    <h1>Projects</h1>
    <h2>Listed below are projects I've completed.</h2>
  </header>
  <section class= "project">

  <div class="imgContainer">
    <a class= "img" href="https://thinkful-ei-narwhal.github.io/Quiz-App_Cesar_Yousef/" target="_blank">
      <img src="img/QuizApp.png" alt="Quiz App image" class= "image"> 
      <span class= "viewProjectHover"> View Project</span> 
    </a> 
  </div>

    <h3>Quiz App</h3>

    <div>
      <svg class="tech-icon" viewBox="0 0 128 128">
        <path fill="#4b4b4b" d="M19.569 27l8.087 89.919 36.289 9.682 36.39-9.499 8.096-90.102h-88.862zm72.041 20.471l-.507 5.834-.223 2.695h-42.569l1.017 12h40.54l-.271 2.231-2.615 28.909-.192 1.69-22.79 6.134v-.005l-.027.012-22.777-5.916-1.546-17.055h11.168l.791 8.46 12.385 3.139.006-.234v.012l12.412-2.649 1.296-13.728h-38.555l-2.734-30.836-.267-3.164h55.724000000000004l-.266 2.471zM27.956 1.627h5.622v5.556h5.144v-5.556h5.623v16.822h-5.623v-5.633h-5.143v5.633h-5.623v-16.822zM51.738 7.206h-4.95v-5.579h15.525v5.579h-4.952v11.243h-5.623v-11.243zM64.777 1.627h5.862l3.607 5.911 3.603-5.911h5.865v16.822h-5.601v-8.338l-3.867 5.981h-.098l-3.87-5.981v8.338h-5.502v-16.822zM86.513 1.627h5.624v11.262h7.907v5.561h-13.531v-16.823z"></path>
      </svg>
      <svg class="tech-icon" viewBox="0 0 128 128">
        <path fill="#4b4b4b" d="M19.67 26l8.069 90.493 36.206 10.05 36.307-10.063 8.078-90.48h-88.66zm69.21 50.488l-2.35 21.892.009 1.875-22.539 6.295v.001l-.018.015-22.719-6.225-1.537-17.341h11.141l.79 8.766 12.347 3.295-.004.015v-.032l12.394-3.495 1.308-14.549h-25.907000000000004l-.222-2.355-.506-5.647-.265-2.998h27.886000000000003l1.014-11h-42.473l-.223-2.589-.506-6.03-.265-3.381h55.597l-.267 3.334-2.685 30.154"></path><path fill="#4b4b4b" d="M89 14.374l-7.149-8.374h7.149v-5h-16v4.363l8.39 7.637h-8.39v5h16zM70 14.374l-6.807-8.374h6.807v-5h-15v4.363l7.733 7.637h-7.733v5h15zM52 13h-8v-7h8v-5h-14v17h14z"></path>
      </svg>
      <svg class="tech-icon" viewBox="0 0 148 148">
        <path fill="#4b4b4b" d="M2 1v125h125v-125h-125zm66.119 106.513c-1.845 3.749-5.367 6.212-9.448 7.401-6.271 1.44-12.269.619-16.731-2.059-2.986-1.832-5.318-4.652-6.901-7.901l9.52-5.83c.083.035.333.487.667 1.071 1.214 2.034 2.261 3.474 4.319 4.485 2.022.69 6.461 1.131 8.175-2.427 1.047-1.81.714-7.628.714-14.065-.001-10.115.046-20.188.046-30.188h11.709c0 11 .06 21.418 0 32.152.025 6.58.596 12.446-2.07 17.361zm48.574-3.308c-4.07 13.922-26.762 14.374-35.83 5.176-1.916-2.165-3.117-3.296-4.26-5.795 4.819-2.772 4.819-2.772 9.508-5.485 2.547 3.915 4.902 6.068 9.139 6.949 5.748.702 11.531-1.273 10.234-7.378-1.333-4.986-11.77-6.199-18.873-11.531-7.211-4.843-8.901-16.611-2.975-23.335 1.975-2.487 5.343-4.343 8.877-5.235l3.688-.477c7.081-.143 11.507 1.727 14.756 5.355.904.916 1.642 1.904 3.022 4.045-3.772 2.404-3.76 2.381-9.163 5.879-1.154-2.486-3.069-4.046-5.093-4.724-3.142-.952-7.104.083-7.926 3.403-.285 1.023-.226 1.975.227 3.665 1.273 2.903 5.545 4.165 9.377 5.926 11.031 4.474 14.756 9.271 15.672 14.981.882 4.916-.213 8.105-.38 8.581z"></path>
      </svg >


      <svg width="2.5em" viewBox="0 0 228 228"preserveAspectRatio="xMidYMid meet">
        <g transform="translate(0.000000,240.000000) scale(0.100000,-0.100000)" fill="#4b4b4b" stroke="none">
          <path d="M1285 2140 c-45 -100 -12 -233 79 -325 61 -60 125 -87 221 -93 68 -489 -1 132 18 28 12 62 33 75 47 l23 26 -25 -7 c-124 -33 -192 -28 -282 21 -123 67 -185 157 -196 285 l-7 73 -20 -45z"/><path d="M982 2063 c-34 -52 -62 -146 -62 -204 0 -173 123 -370 286 -456 232 -123 522 -61 647 137 l22 35 -25 -17 c-105 -74 -167 -99 -265 -105 -126 -9 -254 35 -380 130 -145 109 -214 271 -195 458 4 35 6 65 5 67 -1 1 -16 -19 -33 -45z"/><path d="M624 1947 c-106 -140 -130 -322 -70 -512 37 -116 89 -198 191 -300 101 -102 181 -152 300 -192 71 -24 96 -27 225 -27 128 -1 154 2 219 23 125 41 279 160 327 253 14 27 12 27 -50 -16 -117 -80 -244 -112 -405 -103 -126 7 -234 42 -344 111 -111 69 -174 123 -232 196 -111 142 -158 312 -137 499 7 58 11 106 9 107 -1 1 -16 -17 -33 -39z"/><path d="M645 726 c-81 -36 -138 -137 -139 -247 -1 -124 37 -148 236 -148 118 -1 127 0 132 19 3 11 9 29 12 40 4 15 1 20 -15 20 -26 0 -26 -2 4 94 36 112 17 184 -58 219 -42 20 -130 22 -172 3z m130 -88 c25 -19 27 -26 22 -67 -4 -25 -14 -71 -24 -101 l-18 -55 -57 0 c-41 0 -62 6 -77 19 -25 23 -26 34 -6 111 26 102 96 143 160 93z"/> <path d="M1991 605 c-36 -52 -68 -95 -73 -95 -4 0 -8 9 -8 20 0 17 -7 20 -50 20 -27 0 -50 -1 -50 -3 0 -2 7 -28 16 -57 10 -33 14 -75 12 -107 l-5 -53 43 0 c43 0 44 1 66 53 12 28 56 97 98 152 42 55 86 115 98 133 l23 32 -53 0 -54 0 -63 -95z"/> <path d="M1353 641 c-23 -11 -48 -30 -57 -43 -26 -40 -47 -111 -49 -165 -2 -43 2 -57 21 -75 20 -20 34 -23 131 -26 104 -4 109 -3 115 17 19 66 26 60 -76 63 -88 3 -93 4 -96 26 -3 22 -1 22 97 22 60 0 102 4 106 11 4 6 9 36 12 68 5 50 3 60 -19 86 -21 24 -34 29 -84 32 -43 3 -70 -1 -101 -16z"/> <path d="M966 642 c-10 -16 -36 -176 -36 -222 0 -73 19 -84 145 -88 l103 -4 16 74 c8 40 24 112 34 161 l19 87 -42 0 -42 0 -22 -102 c-32 -149 -26 -138 -77 -138 l-44 0 0 48 c0 26 7 74 15 107 8 33 14 66 15 73 0 13 -75 18 -84 4z"/><path d="M1630 645 c0 -3 -13 -69 -30 -147 -16 -77 -30 -147 -30 -155 0 -9 13 -13 40 -13 33 0 40 4 45 23 3 12 14 64 25 116 12 52 23 98 26 103 3 4 47 8 99 8 92 0 93 0 88 23 -11 44 -20 47 -144 47 -66 0 -119 -2 -119 -5z"/><path d="M376 533 c-3 -10 -14 -60 -26 -112 -22 -104 -40 -141 -71 -141 -20 0 -23 -4 -33 -53 -6 -26 -5 -27 38 -27 61 0 92 14 111 50 12 22 75 272 75 296 0 2 -20 4 -44 4 -34 0 -46 -4 -50 -17z"/>
        </g>
      </svg>
    </div> 


    <p>Quiz app is a game for anyone that wants to test their knowledge.
     The game tracks the user's current progression, as well as whether the user has selected the correct or incorrect answer.
      Then it will display that information after each question has been answered.
        At the end the user will be provided with their score and how many questions they got correct or incorrect.
         I made this as a tool to help me study for future tests.</p>
    
    <div class="buttons">
      <a class="link-button" href="https://github.com/thinkful-ei-narwhal/Quiz-App_Cesar_Yousef" target="_blank">View Code</a>
              
      <a class="link-button" href="https://thinkful-ei-narwhal.github.io/Quiz-App_Cesar_Yousef/" target="_blank">View Project</a>
    </div>
  </section>
    `;
}

/** ******** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag
function render(view){
  if(!view){
    view= 1;
  }
  $('main').html(choiceTemplate(view));
}

function choiceTemplate (view) {
  if (view === 1) {
    return aboutMeTemplate();
  }else{
    return projectsTemplate ();
  } 
}

/** ******** NAVIGATION FUNCTION(S) **********/

// This function conditionally replaces the class of myLinks
function closeNav(){
  var x = document.getElementById('myLinks');
  if (x.className === 'links') {
    x.className += ' open';
  } else {
    x.className = 'links';
  }
}

/** ******** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)
function handleNav(){
  $( '.icon').click(function(event) {
    event.preventDefault();
    closeNav();
  });
}

function handleView(){
  $('nav').on('click','.about', function (event){
    event.preventDefault();
    let view= 1;
    closeNav();
    render(view);
  });

  $('nav').on('click','.projects', function (event){
    event.preventDefault();
    let view= 2;
    closeNav();
    render(view);
  });

  $('nav').on('click','.home', function (event){
    event.preventDefault();
    let view= 1;
    render(view);
  });
}

function handlePorfolio () {
  handleNav();
  handleView();
  render();
}

$(handlePorfolio);