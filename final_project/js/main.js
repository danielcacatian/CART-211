//Init the Variables
// APRIL TIMELINE ////////////////////////////////////////////////////////////
let aprilText = document.querySelector(`#april_text`);
let moreAprilText = document.querySelector(`#additonal_april_text`);
let aprilBTN = document.querySelector(`#april_btn`);
let aprilImage = document.querySelector(`#aprilImage`);
let aprilTitle = document.querySelector(`#april_title`);

aprilBTN.onclick = function() {
  let mySrc = aprilImage.getAttribute(`src`);
  //conditional
  if (mySrc === `https://images.unsplash.com/photo-1431540015161-0bf868a2d407?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1000&q=80`) {
    //Image
    aprilImage.setAttribute(`src`, `https://images.unsplash.com/photo-1530025809667-1f4bcff8e60f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80`);
    //Main text
    aprilText.style.top = `-100%`;
    aprilText.style.opacity = `0`;
    //Additional text
    moreAprilText.style.top = `70px`;
    moreAprilText.style.color = `black`;
    moreAprilText.style.textShadow = `0 0 0 transparent`;
    //Button text
    aprilBTN.textContent = `↑ Go back ↑`
  } else {
    //Image
    aprilImage.setAttribute(`src`, `https://images.unsplash.com/photo-1431540015161-0bf868a2d407?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1000&q=80`);
    //Main text
    aprilText.style.top = `0`;
    aprilText.style.opacity = `1`;
    //Additional text
    moreAprilText.style.top = `50vh`;
    moreAprilText.style.color = `transparent`;
    moreAprilText.style.textShadow = `0 0 8px rgba(0,0,0,0.5)`;
    //Button text
    aprilBTN.textContent = `↓ Read more ↓`;
  }

}
