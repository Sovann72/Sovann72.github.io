const nav = document.querySelector('.nav');
const container = document.querySelector('.container');
const skillsWrapper = document.querySelector('.skills-wrapper');
const htmlLogo = skillsWrapper.children[0];
const cssLogo = skillsWrapper.children[1];
const jsLogo = skillsWrapper.children[2];
const htmlLogoStyle = htmlLogo.style;
const cssLogoStyle = cssLogo.style;
const jsLogoStyle = jsLogo.style;

function beginSkillsWrapperDefaultAnimation(){
  htmlLogoStyle.transform = 'translateX(-100px)';
  cssLogoStyle.transform = 'translateY(100px)';
  jsLogoStyle.transform = 'translateX(100px)';
  return (htmlLogoStyle && cssLogoStyle && jsLogoStyle);
}
function finishedSkillsWrapperDefaultAnimation(){
  htmlLogoStyle.transform = 'translateX(0)';
  cssLogoStyle.transform = 'translateY(0)';
  jsLogoStyle.transform = 'translateX(0)';
  return (htmlLogoStyle && cssLogoStyle && jsLogoStyle);
}




window.addEventListener('load', ()=>{
  // beginSkillsWrapperDefaultAnimation();
  if(innerWidth < 1024){ //1024 breakpoint
    finishedSkillsWrapperDefaultAnimation();

    if (innerWidth < 680){
      beginSkillsWrapperDefaultAnimation();
      window.addEventListener('scroll', ()=>{
        if(scrollY >= skillsWrapper.offsetTop-innerHeight){
          finishedSkillsWrapperDefaultAnimation();
        }
        else if(scrollY < skillsWrapper.offsetTop-innerHeight){
          beginSkillsWrapperDefaultAnimation();
        }
      })
    }
  }
  else {
    finishedSkillsWrapperDefaultAnimation();
  }
})