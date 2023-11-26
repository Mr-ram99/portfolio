document.addEventListener('DOMContentLoaded', () => {
  const descriptions = document.querySelectorAll('.hero__desc');
  const theme = document.getElementById('theme');
  const themeMobile = document.getElementById('theme-mobile');
  console.log(themeMobile)
  const intial_bg = getComputedStyle(document.documentElement).getPropertyValue('--background')
  if (intial_bg == '#e5e5e5') {
    theme.classList.add('light');
    theme.checked = true;
    themeMobile.classList.add('light');
    themeMobile.checked = true;
  }

  theme.addEventListener('click', () => {
    theme.classList.toggle('light');
    if (theme.classList.contains('light')) {
      document.documentElement.style.setProperty('--background', '#e5e5e5');
      document.documentElement.style.setProperty('--foreground', '#000000');
    }
    else {
      document.documentElement.style.setProperty('--background', '#000000');
      document.documentElement.style.setProperty('--foreground', '#e5e5e5');
    }
  })

  themeMobile.addEventListener('click', () => {
    themeMobile.classList.toggle('light');
    if (themeMobile.classList.contains('light')) {
      document.documentElement.style.setProperty('--background', '#e5e5e5');
      document.documentElement.style.setProperty('--foreground', '#000000');
    }
    else {
      document.documentElement.style.setProperty('--background', '#000000');
      document.documentElement.style.setProperty('--foreground', '#e5e5e5');
    }
  })

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
