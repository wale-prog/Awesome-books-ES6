const navigation = () => {
  const contact = document.querySelector('.contact');
  const list = document.getElementById('top-books');
  const addNew = document.querySelector('.add-new');
  const navList = document.querySelectorAll('.nav-list-item');

  for (let i = 0; i < navList.length; i += 1) {
    navList[i].addEventListener('click', (event) => {
      if (event.target.innerText === 'List') {
        list.classList.remove('hidden');
        contact.classList.add('hidden');
        addNew.classList.add('hidden');
      } else if (event.target.innerText === 'Add new') {
        list.classList.add('hidden');
        contact.classList.add('hidden');
        addNew.classList.remove('hidden');
      } else if (event.target.innerText === 'Contact') {
        list.classList.add('hidden');
        contact.classList.remove('hidden');
        addNew.classList.add('hidden');
      }
    });
  }
};

export default navigation;