
   const activePage = window.location.pathname;
   const navLinks = document.querySelectorAll('nav a').forEach(link => {
      if (link.href.includes(`${activePage}`)) {
         link.classList.add('active');
         console.log(link);
      }
   })

   const industriesMenu = document.querySelector('#entertainment-link').addEventListener('click', () => {
      document.querySelector('#entertainment-subsector').classList.add('display');
      });