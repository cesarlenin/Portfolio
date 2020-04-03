'use strict';
function aboutMeTemplate () {
  return `
  <header>
    <img class="circle" src="img/myPic.jpg" alt="Image of Cesar Morales">
    <h1>Cesar Lenin Morales</h1>
    <h2>I’m currently a student 
      <br>on the Software Engineering Bootcamp at Thinkful.</h2>
  </header>

  <div clas="info">
  <section class="about-me">
    <h3>About me</h3>
    <p>I love coding because the work I do there is something I can proudly stamp my name on and feel proud about.
    Encountering roadblocks and overcoming them gives me a sense of euphoria.
    I like a challenge and the feeling of overcoming one is something that keeps me coming back.
    <br>When I’m not coding, I am most likely working out or reading. As a workout, I like lifting weights or practicing Brazilian Jiu-Jitsu.
    For reading I like self-development/business books and manga.
    And on occasion I relax watching anime, riding my motorcycle or going on long hikes.</p>
  </section>

  <section class="contact">
    <h3>Contact</h3>
    <div class="contact-links">
    <a class="contact-link" href="https://gist.github.com/cesarlenin" target="_blank">
      <i class="fa fa-fw fa-2x fa-linkedin-square middle" ></i>
      <span>LinkedIn</span>  
    </a> 

    <a class="contact-link" href="https://gist.github.com/cesarlenin" target="_blank">
      <i class="fa fa-fw fa-2x fa-github-square middle"></i>
      <span>GitHub</span>  
    </a> 

    <a class="contact-link" href="mailto:cesarlenin2@live.com" target="_blank">
      <i class="fa fa-fw fa-2x fa-envelope-square middle"></i>
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
    <h2>Here is some of the work I done</h2>
  </header>
  <section class= "project">
    <a class= "img" href="https://thinkful-ei-narwhal.github.io/Quiz-App_Cesar_Yousef/" target="_blank">
      <img src="img/QuizApp.png" alt="Quiz App image" class= "resize"> 
    </a> 

    <h3>Quiz App</h3>

    <div>
      <svg class="tech-icon" viewBox="0 0 128 128">
        <path fill="#4b4b4b" d="M19.569 27l8.087 89.919 36.289 9.682 36.39-9.499 8.096-90.102h-88.862zm72.041 20.471l-.507 5.834-.223 2.695h-42.569l1.017 12h40.54l-.271 2.231-2.615 28.909-.192 1.69-22.79 6.134v-.005l-.027.012-22.777-5.916-1.546-17.055h11.168l.791 8.46 12.385 3.139.006-.234v.012l12.412-2.649 1.296-13.728h-38.555l-2.734-30.836-.267-3.164h55.724000000000004l-.266 2.471zM27.956 1.627h5.622v5.556h5.144v-5.556h5.623v16.822h-5.623v-5.633h-5.143v5.633h-5.623v-16.822zM51.738 7.206h-4.95v-5.579h15.525v5.579h-4.952v11.243h-5.623v-11.243zM64.777 1.627h5.862l3.607 5.911 3.603-5.911h5.865v16.822h-5.601v-8.338l-3.867 5.981h-.098l-3.87-5.981v8.338h-5.502v-16.822zM86.513 1.627h5.624v11.262h7.907v5.561h-13.531v-16.823z"></path>
      </svg>
      <svg class="tech-icon" viewBox="0 0 128 128">
        <path fill="#4b4b4b" d="M19.67 26l8.069 90.493 36.206 10.05 36.307-10.063 8.078-90.48h-88.66zm69.21 50.488l-2.35 21.892.009 1.875-22.539 6.295v.001l-.018.015-22.719-6.225-1.537-17.341h11.141l.79 8.766 12.347 3.295-.004.015v-.032l12.394-3.495 1.308-14.549h-25.907000000000004l-.222-2.355-.506-5.647-.265-2.998h27.886000000000003l1.014-11h-42.473l-.223-2.589-.506-6.03-.265-3.381h55.597l-.267 3.334-2.685 30.154"></path><path fill="#4b4b4b" d="M89 14.374l-7.149-8.374h7.149v-5h-16v4.363l8.39 7.637h-8.39v5h16zM70 14.374l-6.807-8.374h6.807v-5h-15v4.363l7.733 7.637h-7.733v5h15zM52 13h-8v-7h8v-5h-14v17h14z"></path>
      </svg>
      <svg class="tech-icon" viewBox="0 0 128 128">
        <path fill="#4b4b4b" d="M2 1v125h125v-125h-125zm66.119 106.513c-1.845 3.749-5.367 6.212-9.448 7.401-6.271 1.44-12.269.619-16.731-2.059-2.986-1.832-5.318-4.652-6.901-7.901l9.52-5.83c.083.035.333.487.667 1.071 1.214 2.034 2.261 3.474 4.319 4.485 2.022.69 6.461 1.131 8.175-2.427 1.047-1.81.714-7.628.714-14.065-.001-10.115.046-20.188.046-30.188h11.709c0 11 .06 21.418 0 32.152.025 6.58.596 12.446-2.07 17.361zm48.574-3.308c-4.07 13.922-26.762 14.374-35.83 5.176-1.916-2.165-3.117-3.296-4.26-5.795 4.819-2.772 4.819-2.772 9.508-5.485 2.547 3.915 4.902 6.068 9.139 6.949 5.748.702 11.531-1.273 10.234-7.378-1.333-4.986-11.77-6.199-18.873-11.531-7.211-4.843-8.901-16.611-2.975-23.335 1.975-2.487 5.343-4.343 8.877-5.235l3.688-.477c7.081-.143 11.507 1.727 14.756 5.355.904.916 1.642 1.904 3.022 4.045-3.772 2.404-3.76 2.381-9.163 5.879-1.154-2.486-3.069-4.046-5.093-4.724-3.142-.952-7.104.083-7.926 3.403-.285 1.023-.226 1.975.227 3.665 1.273 2.903 5.545 4.165 9.377 5.926 11.031 4.474 14.756 9.271 15.672 14.981.882 4.916-.213 8.105-.38 8.581z"></path>
      </svg>
    </div> 


    <p>Quiz app is a simple game where users can test their knowledge.
    It tracks the current question and answer to provide feedback to the user.
    That being the total score, the number of questions correct/incorrect and correct answer.</p>
    
    <div class="buttons">
      <a class="link-button" href="https://github.com/thinkful-ei-narwhal/Quiz-App_Cesar_Yousef" target="_blank">View Code</a>
              
      <a class="link-button" href="https://thinkful-ei-narwhal.github.io/Quiz-App_Cesar_Yousef/" target="_blank">View Project</a>
    </div>
  </section>
    `;
}

function handleNav(){
  $('nav').on('click','.icon', function (event){
    event.preventDefault();
    closeNav();
  });
}

function closeNav(){
  var x = document.getElementById('myLinks');
  if (x.className === 'links') {
    x.className += ' open';
  } else {
    x.className = 'links';
  }
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
}

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

function handlePorfolio () {
  handleNav();
  handleView();
  render();
}

$(handlePorfolio);