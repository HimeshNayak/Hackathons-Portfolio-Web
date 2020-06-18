window.onscroll=function(){
    const docScrollTop=document.documentElement.scrollTop;

    if(window.innerWidth>991){
        if(docScrollTop>100){
            document.querySelector("header").classList.add("fixed")
        }
        else{
            document.querySelector("header").classList.remove("fixed")

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

//Members Data
const members = [
    'Himesh Nayak',
    'Haresh Nayak',
    'Parv Sharma',
    'Sarhtak Kh.',
    'Kshitij Garg',
    'Harsh Goyal',
    'Rahul Gandhi',
    'Shubham Rawal',
    'Dhruv Pasricha',
  ];

  const membersPosition = [
    'App Developer',
    'ML Enthusiast',
    'Web Developer',
    'Web Developer',
    'Web Developer',
    'Web Developer',
    'Web Developer',
    'Web Developer',
    'Web Developer'
  ];

  const imageMember = [
    'himesh.jpg',
    'haresh.jpg',
    'parv.png',
    'sarthak.png',
    'kshitij.png',
    'harsh.png',
    'rahul.png',
    'shubham.png',
    'dhruv.jpg'
  ];

  const skillsHead = [
    ['App Development','Full Stack Web Development', 'Programming languages', 'Others'],
    ['App Development', 'Web Development', 'Programming Languages', 'Others',],
    ['Frontend Web Development','Backend Web Development', 'Programming languages', 'Others'],
    ['Frontend Web Development', 'Programming Languages'],
    ['Frontend Web Development'],
    ['Frontend Web Development', 'Backend Web Development', 'Programming Languages'],
    ['Frontend Web Development','Backend Web Development', 'Programming languages', 'Others'],
    ['Frontend Web Development', 'Programming languages'],
    ['Frontend Web Development', 'Programming languages'],
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
  ];

  const linkedin = [
    'himeshnayak015',
    'hareshnayak08',
    'parv-sharma-3ba3991a1',
    'sarthak-khandelwal-bb2825194',
    'kshitij-garg-3b4229194',
    'harsh-goyal-195255b9',
    '',
    'shubham-rawal-1195371a8',
    'dhruvpasricha',
  ];

  const github = [
    'HimeshNayak',
    'hareshnayak',
    'PSCoder10462',
    'HellVolhard07',
    'Kshitij-24',
    'harshgoyal7065',
    'rgtechno',
    'shubham-rawal',
    'dhruv-pasricha',
  ];

  const email = [
    'himeshnayak015',
    'sketchharry01',
    'pscoder10462',
    'itsmevasu84',
    'shitijgarg24',
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




