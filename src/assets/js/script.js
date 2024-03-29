const nav = document.querySelector('.nav');
const container = document.querySelector('.container');
const skillsWrapper = document.querySelector('.skills-wrapper');
const htmlLogo = skillsWrapper.children[0];
const cssLogo = skillsWrapper.children[1];
const jsLogo = skillsWrapper.children[2];
const htmlLogoStyle = htmlLogo.style;
const cssLogoStyle = cssLogo.style;
const jsLogoStyle = jsLogo.style;

// skillset logo animation begin
function beginSkillsWrapperDefaultAnimation(){
  htmlLogoStyle.transform = 'translateX(-100px)';
  cssLogoStyle.transform = 'translateY(100px)';
  jsLogoStyle.transform = 'translateX(100px)';
  return (htmlLogoStyle && cssLogoStyle && jsLogoStyle);
}

// skillset logo animation begin
function finishedSkillsWrapperDefaultAnimation(){
  htmlLogoStyle.transform = 'translateX(0)';
  cssLogoStyle.transform = 'translateY(0)';
  jsLogoStyle.transform = 'translateX(0)';
  return (htmlLogoStyle && cssLogoStyle && jsLogoStyle);
}

beginSkillsWrapperDefaultAnimation();
// when user scroll let skillset logo come together
window.addEventListener('load', ()=>{
  if(innerHeight > skillsWrapper.offsetTop){
    finishedSkillsWrapperDefaultAnimation();
  }
})


window.addEventListener('scroll', ()=>{
  if(scrollY >= skillsWrapper.offsetTop-innerHeight){
    finishedSkillsWrapperDefaultAnimation();
  }
  else if(scrollY < skillsWrapper.offsetTop-innerHeight){
    beginSkillsWrapperDefaultAnimation();
  }
})