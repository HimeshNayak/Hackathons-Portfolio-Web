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
                    document.querySelector(".navbar").classList.toggle("show");  

            })
        })

//ham-burger

const hamBurger=document.querySelector(".ham-burger");
hamBurger.addEventListener("click",function(){
    document.querySelector(".navbar").classList.toggle("show");  
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
    ['HTML, CSS, Bootstrap, DOM', 'NodeJs, MongoDB, Javascript, JQuery', 'C, C++', 'Semantic-UI'],
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

//=====================
//  PORTFOLIO CARDS
// =====================
var portfs = document.getElementById("portf");
for(var i=0; i<9; i++){

  portfs.innerHTML += '<div class="box">\
            <div class="icon col">\
              <img src="images/'+ imageMember[i]'" alt="" class="col-sm-5 col-md-5 rounded-circle">\
            </div>\
            <h5>'+ members[i] +'</h5>\
            <h6>'+ membersPosition[i] +'</h6>\
            <div class="overlay">\
              <a href=""><span class="fa fa-address-card"></span></a>\
              <h5>'+ skills[i] +'</h5>\
            </div>\
          </div>'
}

// ***************************************Adding to Firebase*******************************************************

const fname= document.getElementById("fullName");
const femail= document.getElementById("fullEmail");
const msg= document.getElementById("mess");
const sendContact= document.getElementById("butn");

const jname= document.getElementById("joinName");
const jemail= document.getElementById("joinEmail");
const jgit= document.getElementById("joinGit");
const jlink= document.getElementById("joinLink");
const jskill= document.getElementById("joinSkill");
const jexp= document.getElementById("joinExp");
const jidea= document.getElementById("joinIdea");
const sendJoin = document.getElementById("joinbutn");
