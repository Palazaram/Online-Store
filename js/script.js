(function(){
  document.addEventListener("DOMContentLoaded", ready);

  function ready(){
    if(ROOT_MENU !== null){
      let htmlCatalog = '';
      MENUCATALOG.forEach(({name, img, link}) => {
        
         htmlCatalog += `
            <li class="category-menu-item"> 
              <a href="${link}" class="category-menu-item-link">
                <img class="category-menu-item-img" src="${img}">
                <p class="category-menu-item-title">${name}</p>
              </a>
            </li>
          `;   
      });
    

      const html = `      
        <ul class="category-menu container">
          ${htmlCatalog}
        </ul>
      `;

      ROOT_MENU.innerHTML = html;
    }

    if(ROOT_SEED !== null){
      let SeedhtmlCatalog = '';
      SEEDCATALOG.forEach(({name, img, link}) => {
        SeedhtmlCatalog += `
          <li class="category-menu-item seed-category"> 
            <a href="${link}" class="category-menu-item-link">
              <img class="category-menu-item-img round-img" src="${img}">
              <p class="category-menu-item-title seed-title">${name}</p>
            </a>
          </li>
        `;
      });

      const Seedhtml = `      
        <ul class="category-menu container">
          ${SeedhtmlCatalog}
        </ul>
      `;

      ROOT_SEED.innerHTML = Seedhtml;
    }

    if(ROOT_PROTECTPRODUCTS !== null){
      let ProtecthtmlCatalog = '';
      PROTECTCATALOG.forEach(({name, img, link}) => {
        ProtecthtmlCatalog += `
          <li class="category-menu-item seed-category"> 
            <a href="${link}" class="category-menu-item-link">
              <img class="category-menu-item-img round-img" src="${img}">
              <p class="category-menu-item-title seed-title">${name}</p>
            </a>
          </li>
        `;
      });

      const Protecthtml = `      
        <ul class="category-menu container">
          ${ProtecthtmlCatalog}
        </ul>
      `;

      ROOT_PROTECTPRODUCTS.innerHTML = Protecthtml;
    }

  };
}());