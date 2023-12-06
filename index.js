const body = document.body;
document.addEventListener('DOMContentLoaded', () => {
  // light-dark mode
  const descriptions = document.querySelectorAll('.hero__desc');
  const tags = document.querySelectorAll(".fade-in");
  for(let i=0;i<tags.length;i++){
    if(i%2==0){
      tags[i].classList.add("fade-in-even");
    }
    else{
      tags[i].classList.add("fade-in-odd");
    }
  }
  function showDescription(index) {
    const currentDescription = descriptions[index];
    descriptions.forEach(description => {
      if (description !== currentDescription) {
        description.style.display = 'none';
      }
    });
    currentDescription.style.display = 'block';
  }

  let index = 0;
  showDescription(index);
  setInterval(() => {
    index = (index + 1) % descriptions.length;
    showDescription(index);
  }, 4000);
  
})

function toggleDarkMode() {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    document.documentElement.style.setProperty('--background', '#000000');
    document.documentElement.style.setProperty('--foreground', '#e5e5e5');
  }
  else {
    document.documentElement.style.setProperty('--background', '#e5e5e5');
    document.documentElement.style.setProperty('--foreground', '#000000');
  }
}

// fade-in scroll effect
document.addEventListener("scroll", function() {
  var pageTop = document.documentElement.scrollTop;
  var pageBottom = pageTop + window.innerHeight;
  var tags = document.querySelectorAll(".fade-in");

  tags.forEach(function(tag) {
    if (tag.getBoundingClientRect().top+20 < pageBottom) {
      tag.classList.add("visible");
    } else {
      tag.classList.remove("visible");
    }
  });
});
  
  