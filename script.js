function breakText() {
  var h1 = document.querySelector("h1");
  var h1Text = h1.textContent;
  var splittedText = h1Text.split("");
  var halfValue = splittedText.length / 2;

  var clutter = "";

  splittedText.forEach((elem, idx) => {
    if(idx < halfValue){
      clutter += `<span class="start">${elem}</span>`;
    }else{
      clutter += `<span class="end">${elem}</span>`;
    }
  });

  h1.innerHTML = clutter;
}

breakText();

gsap.from("h1 .start", {
    y: 70,
    delay: 0.5,
    duration: 0.6,
    opacity: 0,
    stagger: 0.15,
})

gsap.from("h1 .end", {
    y: 70,
    delay: 0.5,
    duration: 0.6,
    opacity: 0,
    stagger: -0.15,
})