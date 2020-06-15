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