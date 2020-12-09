//Init the Variables
// MARCH TIMELINE ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let marchText = document.querySelector(`#march_text`);
let moremarchText = document.querySelector(`#additonal_march_text`);
let marchBTN = document.querySelector(`#march_btn`);
let marchImage = document.querySelector(`#marchImage`);

marchBTN.onclick = function() {
  let mySrc = marchImage.getAttribute(`src`);
  //conditional
  if (mySrc === `images/EmptyOffice.jpg`) {
    //Image
    marchImage.setAttribute(`src`, `images/CERB.jpg`);
    //Main text
    marchText.style.top = `-100%`;
    marchText.style.opacity = `0`;
    //Additional text
    moremarchText.style.top = `80px`;
    moremarchText.style.color = `black`;
    moremarchText.style.textShadow = `0 0 0 transparent`;
    //Button text
    marchBTN.textContent = `↑ Go back ↑`
  } else {
    //Image
    marchImage.setAttribute(`src`, `images/EmptyOffice.jpg`);
    //Main text
    marchText.style.top = `0`;
    marchText.style.opacity = `1`;
    //Additional text
    moremarchText.style.top = `45vh`;
    moremarchText.style.color = `transparent`;
    moremarchText.style.textShadow = `0 0 8px rgba(0,0,0,0.5)`;
    //Button text
    marchBTN.textContent = `↓ Read more ↓`;
  }

}

// APRIL TIMELINE ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let aprilText = document.querySelector(`#april_text`);
let moreaprilText = document.querySelector(`#additonal_april_text`);
let aprilBTN = document.querySelector(`#april_btn`);
let aprilImage = document.querySelector(`#aprilImage`);

aprilBTN.onclick = function() {
  let mySrc = aprilImage.getAttribute(`src`);
  //conditional
  if (mySrc === `images/MTL.jpg`) {
    //Image
    aprilImage.setAttribute(`src`, `images/Nature.jpg`);
    //Main text
    aprilText.style.top = `-100%`;
    aprilText.style.opacity = `0`;
    //Additional text
    moreaprilText.style.top = `80px`;
    moreaprilText.style.color = `black`;
    moreaprilText.style.textShadow = `0 0 0 transparent`;
    //Button text
    aprilBTN.textContent = `↑ Go back ↑`
  } else {
    //Image
    aprilImage.setAttribute(`src`, `images/MTL.jpg`);
    //Main text
    aprilText.style.top = `0`;
    aprilText.style.opacity = `1`;
    //Additional text
    moreaprilText.style.top = `45vh`;
    moreaprilText.style.color = `transparent`;
    moreaprilText.style.textShadow = `0 0 8px rgba(0,0,0,0.5)`;
    //Button text
    aprilBTN.textContent = `↓ Read more ↓`;
  }

}

// MAY-JUNE TIMELINE ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let mayText = document.querySelector(`#may_text`);
let moremayText = document.querySelector(`#additonal_may_text`);
let mayBTN = document.querySelector(`#may_btn`);
let mayImage = document.querySelector(`#mayImage`);

mayBTN.onclick = function() {
  let mySrc = mayImage.getAttribute(`src`);
  //conditional
  if (mySrc === `images/Police.jpg`) {
    //Image
    mayImage.setAttribute(`src`, `images/BLM.jpg`);
    //Main text
    mayText.style.top = `-100%`;
    mayText.style.opacity = `0`;
    //Additional text
    moremayText.style.top = `80px`;
    moremayText.style.color = `black`;
    moremayText.style.textShadow = `0 0 0 transparent`;
    //Button text
    mayBTN.textContent = `↑ Go back ↑`
  } else {
    //Image
    mayImage.setAttribute(`src`, `images/Police.jpg`);
    //Main text
    mayText.style.top = `0`;
    mayText.style.opacity = `1`;
    //Additional text
    moremayText.style.top = `45vh`;
    moremayText.style.color = `transparent`;
    moremayText.style.textShadow = `0 0 8px rgba(0,0,0,0.5)`;
    //Button text
    mayBTN.textContent = `↓ Read more ↓`;
  }

}

// JULY-SEPTEMBER TIMELINE ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let julyText = document.querySelector(`#july_text`);
let morejulyText = document.querySelector(`#additonal_july_text`);
let julyBTN = document.querySelector(`#july_btn`);
let julyImage = document.querySelector(`#julyImage`);

julyBTN.onclick = function() {
  let mySrc = julyImage.getAttribute(`src`);
  //conditional
  if (mySrc === `images/2ndWave.jpg`) {
    //Image
    julyImage.setAttribute(`src`, `images/5G.jpg`);
    //Main text
    julyText.style.top = `-100%`;
    julyText.style.opacity = `0`;
    //Additional text
    morejulyText.style.top = `80px`;
    morejulyText.style.color = `black`;
    morejulyText.style.textShadow = `0 0 0 transparent`;
    //Button text
    julyBTN.textContent = `↑ Go back ↑`
  } else {
    //Image
    julyImage.setAttribute(`src`, `images/2ndWave.jpg`);
    //Main text
    julyText.style.top = `0`;
    julyText.style.opacity = `1`;
    //Additional text
    morejulyText.style.top = `45vh`;
    morejulyText.style.color = `transparent`;
    morejulyText.style.textShadow = `0 0 8px rgba(0,0,0,0.5)`;
    //Button text
    julyBTN.textContent = `↓ Read more ↓`;
  }

}

// OCTOBER-NOVEMBER TIMELINE ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let octoberText = document.querySelector(`#october_text`);
let moreoctoberText = document.querySelector(`#additonal_october_text`);
let octoberBTN = document.querySelector(`#october_btn`);
let octoberImage = document.querySelector(`#octoberImage`);

octoberBTN.onclick = function() {
  let mySrc = octoberImage.getAttribute(`src`);
  //conditional
  if (mySrc === `images/Elections.jpg`) {
    //Image
    octoberImage.setAttribute(`src`, `images/JoeBiden.jpg`);
    //Main text
    octoberText.style.top = `-100%`;
    octoberText.style.opacity = `0`;
    //Additional text
    moreoctoberText.style.top = `80px`;
    moreoctoberText.style.color = `black`;
    moreoctoberText.style.textShadow = `0 0 0 transparent`;
    //Button text
    octoberBTN.textContent = `↑ Go back ↑`
  } else {
    //Image
    octoberImage.setAttribute(`src`, `images/Elections.jpg`);
    //Main text
    octoberText.style.top = `0`;
    octoberText.style.opacity = `1`;
    //Additional text
    moreoctoberText.style.top = `45vh`;
    moreoctoberText.style.color = `transparent`;
    moreoctoberText.style.textShadow = `0 0 8px rgba(0,0,0,0.5)`;
    //Button text
    octoberBTN.textContent = `↓ Read more ↓`;
  }

}
