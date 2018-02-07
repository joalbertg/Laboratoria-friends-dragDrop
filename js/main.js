let begin = () => {
  let arrFriend = [{id:'0', name: 'Aracely Gutarra', uri: 'AracelyGutarra.png'},
  {id:'1', name: 'Brenda Mesias', uri: 'BrendaMesias.png'},
  {id:'2', name: 'daniela Pariona', uri: 'danielaPariona.png'},
  {id:'3', name: 'Elizabeth Alcala', uri: 'ElizabethAlcala.png'},
  {id:'4', name: 'jennifer Carmen', uri: 'jenniferCarmen.png'},
  {id:'5', name: 'karina Ramirez', uri: 'karinaRamirez.png'},
  {id:'6', name: 'Lesly Nomberto', uri: 'LeslyNomberto.png'},
  {id:'7', name: 'Ornella Ysabel Campos', uri: 'OrnellaYsabelCampos.png'},
  {id:'8', name: 'Pamela de la Cruz', uri: 'PameladelaCruz.png'},
  {id:'9', name: 'yanira Arenazas', uri: 'yaniraArenazas.png'}];

  function imgRandom() {
    return arrFriend[parseInt(Math.random() * 10)];
  }

  document.addEventListener('dragstart', drag);
  document.addEventListener('dragover', permitirDrop);
  document.addEventListener('drop', drop);

  let imgPrimary = document.getElementById('img-primary');
  let imgSelect = imgRandom();

  loadImg(imgPrimary, imgSelect.name, imgSelect.uri);
  loadNewFriends(imgSelect);

  function loadNewFriends(objImg) {
    let friends = document.getElementsByTagName('img');
    let arrImgUse = [];
    
    arrImgUse.push(objImg.id);

    [...friends].forEach(el => {
      let img = null;

      do {
        img = imgRandom();
      } while (arrImgUse.includes(img.id));

      arrImgUse.push(img.id);

      loadImg(el, img.name, img.uri);
    });
  }

  function loadImg(content, name, uri) {
    content.setAttribute('src', `img/${uri}`);
    content.setAttribute('alt', `img/${name}`);
  }

  function drag(event) {
    event.dataTransfer.setData('text', event.target.id);
  }

  function permitirDrop(event) {
    event.preventDefault();
  }

  function drop(event) {
    event.preventDefault();
    if (event.target.className === 'marco-foto') {
      let idFoto = event.dataTransfer.getData('text');
      event.target.appendChild(document.getElementById(idFoto));
    }
  }
};

window.addEventListener('load', begin);
