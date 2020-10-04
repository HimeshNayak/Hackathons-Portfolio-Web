window.onscroll=function(){
    const docScrollTop=document.documentElement.scrollTop;

    if(window.innerWidth>991){
        if(docScrollTop>500){
            document.querySelector("header").classList.add("fixed");
        }
        else{
            document.querySelector("header").classList.remove("fixed");
	    }  
        }
}


//navbar links

const navbar = document.querySelector(".navbar");
        a=navbar.querySelectorAll("a");

        a.forEach(function(element){
            element.addEventListener("click",function(){
                for(let i=0; i<a.length; i++){
                    a[i].classList.remove("active");
                }
                this.classList.add("active")
            })
        })

//ham-burger

const hamBurger=document.querySelector(".ham-burger");
hamBurger.addEventListener("click",function(){
    document.querySelector(".navbar").classList.toggle("show");  
})

//Members Data
const members = [
    'Sarthak Khandelwal',    
	'Himesh Nayak',
    'Haresh Nayak',
    'Parv Sharma',
    'Kshitij Garg',
    'Harsh Goyal',
    'Rahul Gandhi',
    'Shubham Rawal',
    'Dhruv Pasricha',
  ];

  const membersPosition = [
    'Web Developer',
	'App Developer',
    'ML Enthusiast',
    'Web Developer',
    'Web Developer',
    'Web Developer',
    'Web Developer',
    'Web Developer',
    'Web Developer'
  ];

  const imageMember = [
    'sarthak.jpg',
	'himesh.jpg',
    'haresh.jpg',
    'parv.jpg',
    'kshitij.jpg',
    'harsh.jpg',
    'rahul.jpg',
    'shubham.jpg',
    'dhruv.jpg'
  ];

  const skillsHead = [
    'Frontend Web Development, Competitive Programming',
	'App Development, Full Stack Web Development, Competitive Programming, and More...',
    'App Development, Web Development, Competitive Programming, and More...',
    'Frontend Web Development, Backend Web Development, Competitive Programming, and More...',
    'Frontend Web Development',
    'Frontend Web Development, Backend Web Development, Competitive Programming',
    'Frontend Web Development, Backend Web Development, Competitive Programming, and More...',
    'Frontend Web Development, Competitive Programming',
    'Frontend Web Development, Competitive Programming',
  ];

  const skills = [
    ['Android Studio, Java, Flutter', 'HTML, CSS, Javascript, NodeJs', 'C, C++, Python, Dart', 'Google Cloud'],
    ['Flutter', 'HTML, CSS, Bootstrap', 'C, C++, Python, Dart, R', 'Machine Learning'],
    ['HTML, CSS, Bootstrap', 'NodeJs, MongoDB, Javascript', 'C, C++', 'Semantic-UI', 'DOM', 'JQuery'],
    ['HTML, CSS', 'C++'],
    ['HTML, CSS, Javasript'],
    ['HTML, CSS, Bootstrap','Javascript, JQuery, NodeJs, Express', 'C, C++, Python'],
    ['Android Studio', 'HTML', 'JavaScript', 'CSS'],
    ['Machine Learning', 'Flutter', 'HTML', 'CSS'],
    ['HTML', 'CSS','JAVAscript', 'NodeJs'],
    ['HTML, CSS, Bootstrap', 'JavaScript, NodeJs, ExpressJs, MySQL', 'C, C++', 'ORM (Sequelize)'],
    ['HTML, CSS', 'C, C++'],
    ['HTML, CSS','C, C++'],
    'HTML, CSS, C++',
	'Android Studio, Java, Flutter, HTML, CSS, Javascript, NodeJs, C, C++, Python, Dart, Google Cloud',
    'Flutter, HTML, CSS, Bootstrap, C, C++, Python, Dart, R, Machine Learning',
    'HTML, CSS, Bootstrap, DOM, NodeJs, MongoDB, Javascript, JQuery, C, C++, Semantic-UI',
    'HTML, CSS, Javasript',
    'HTML, CSS, Bootstrap, Javascript, JQuery, NodeJs, Express, C, C++, Python',
    'Android Studio, HTML, JavaScript, CSS',
    'Machine Learning, Flutter, HTML, CSS',
    'HTML, CSS, JAVAscript, NodeJs',
    'HTML, CSS, Bootstrap, JavaScript, NodeJs, ExpressJs, MySQL, C, C++, ORM (Sequelize)',
    'HTML, CSS, C, C++',
    'HTML, CSS, C, C++',
  ];

  const linkedin = [
    'sarthak-khandelwal-bb2825194',
	'himeshnayak015',
    'hareshnayak08',
    'parv-sharma-3ba3991a1',
    'kshitij-garg-3b4229194',
    'harsh-goyal-195255b9',
    '',
    'shubham-rawal-1195371a8',
    'dhruvpasricha',
  ];

  const github = [
    'HellVolhard07',
    'HimeshNayak',
    'hareshnayak',
    'PSCoder10462',
    'Kshitij-24',
    'harshgoyal7065',
    'rgtechno',
    'shubham-rawal',
    'dhruv-pasricha',
  ];

  const email = [
    'itsmevasu84',
    'himeshnayak015',
    'sketchharry01',
    'pscoder10462',
    'shitizgarg24',
    'harsh.student99',
    'rahulg1701s',
    'shubhamrawal2001',
    'dpdhruv123',
  ];

// images
// name
// position - blah blah
// span me skills
// =====================
//  PORTFOLIO CARDS
// =====================
var portfs = document.getElementById("portf");
for(var i=0; i<9; i++){
  
  portfs.innerHTML += '<div class="box">\
            <div class="icon col">\
              <img src="images/sarthak.jpg" alt="" class="col-sm-5 col-md-5 rounded-circle">\
            </div>\
            <h5>'+ members[i] +'</h5>\
            <p>'+ skills[i] +'</p>\
            <div class="overlay">\
              <a href=""><span class="fa fa-plus"></span></a>\
              <h4>'+ members[i] +'</h4>\
            </div>\
          </div>'
}

// ***************************************Adding to Firebase*******************************************************

const fname= document.getElementById("fullName");
const femail= document.getElementById("fullEmail");
const msg= document.getElementById("mess");
const abc= document.getElementById("butn");

const jname= document.getElementById("joinName");
const jemail= document.getElementById("joinEmail");
const jgit= document.getElementById("joinGit");
const jlink= document.getElementById("joinLink");
const jskill= document.getElementById("joinSkill");
const jexp= document.getElementById("joinExp");
const jidea= document.getElementById("joinIdea");
const defg = document.getElementById("joinbutn");

//const database = firebase.database();
const rootRef = database.ref("contactus");


abc.addEventListener("click", (e) => {
  e.preventDefault();
  const autoId = rootRef.push().key
  rootRef.child(autoId).set({
    full_name: fname.value,
    full_email: femail.value,
    message: mess.value
  })
});

const databasejoin = firebase.database();
const rootRefjoin = databasejoin.ref("joinus");

defg.addEventListener("click", (e) =>{
  e.preventDefault();
  const autoIdjoin= rootRefjoin.push().key
   rootRefjoin.child(autoIdjoin).set({
     join_name: jname.value,
     join_email: jemail.value,
     join_git: jgit.value,
     join_linkedIn: jlink.value,
     join_Skill: jskill.value,
     join_experience: jexp.value,
     join_idea: jidea.value,

})
});




const projectsHead = [
	'goDev()\; Website',
	'Heal App, goDev()\; App, goDev()\; Website, Techeez Clan App, Techeez Clan Website, POVS App, Chanakya Website', 
	'Machine Learning Classification, Yoga Pose identification, goDev()\; App, Rock Paper Scissors, Heal App, Chanakya Website, goDev()\; Website',
	'Chanakya Website, Pets App, goDev()\; Website',
	'',
	'goDev()\; Website',
	'Expenser, goDev()\; Website',
	'Library Data Management, goDev()\; Website',
	'Tic Tac Toe,  goDev()\; Website '];
  
//=====================
//  PORTFOLIO CARDS
// =====================

var portfs = document.getElementById("portf");
for(var i=0; i<9; i++){

  portfs.innerHTML += '<div class="box">\
            <div class="icon col">\
              <img src="images/' + imageMember[i]  + '" alt="" class="col-sm-5 col-md-5 rounded-circle">\
            </div>\
            <h5>'+ members[i] +'</h5>\
            <p>'+ skillsHead[i] +'</p>\
            <div class="overlay">\
              <span class="fa fa-address-card" onclick = "showCardOverlay('+ i +')"></span>\
              <h4 style="color:white;">'+ skills[i] +'</h4>\
            </div>\
          </div>';
}

function showCardOverlay(i){
  var card = document.getElementById("cardOverlay");
	card.innerHTML += '\
		<div class="wrapper">\
		<div class="left">\
			<img src="images/'+ imageMember[i] +'" alt="user" width="100">\
			<h4>'+ members[i]+'</h4>\
			<p>\
			<ul>\
				<li>'+ membersPosition[i] +'</li>\
			</ul>\
			</p>\
			<div class="social_media">\
				<ul>\
					<li><a href="https://linkedin.com/in/'+ linkedin[i] +'"><i class="fab fa-linkedin"></i></a></li>\
					<li><a href="https://github.com/'+ github[i] +'"><i class="fab fa-github"></i></a></li>\
					<li><a href="mailto:'+ email[i] +'@gmail.com"><i class="fa fa-paper-plane"></i></a></li>\
				</ul>\
					<li><h5><button onclick="off()" style="background-color: #FEBD0A; color:white; border:none; border-radius:10px; margin="10px">Visit other Profiles</h5></button><li>\
			</div>\
		</div>\
		<div class="right">\
			<div class="info">\
				<h3>Information</h3>\
				<div class="info_data">\
					<div class="data">\
						<h4>Email</h4>\
						<p>' + email[i] +'</p>\
					</div>\
					<div class="data">\
						<h4>Github</h4>\
						<p>'+ github[i] +'</p>\
					</div>\
					<div class="data">\
						<h4>Linkedin</h4>\
						<p>'+ linkedin[i] +'</p>\
					</div>\
				</div>\
			</div>\
			<div class="projects">\
				<h3>Projects</h3>\
					<h6 style="text-decoration:none;">'+ projectsHead[i] +'</h6>\
			</div>\
		</div>\
		</div>';
  document.getElementById("cardOverlay").style.display = "block";
}

function off() {
  document.getElementById("cardOverlay").style.display = "none";
}
