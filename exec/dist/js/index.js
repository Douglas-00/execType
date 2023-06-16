"use strict";
const menuTree = [
    {
        id: 'home',
        label: 'Página Inicial',
        link: '/',
        menuSupId: null
    },
    {
        id: 'register',
        label: 'Cadastros',
        link: '/register',
        menuSupId: null
    },
    {
        id: 'people',
        label: 'Pessoa',
        link: '/register/people',
        menuSupId: 'register'
    },
    {
        id: 'car',
        label: 'Carro',
        link: '/register/car',
        menuSupId: 'register'
    },
    {
        id: 'store',
        label: 'Loja',
        link: '/register/store',
        menuSupId: 'register'
    },
    {
        id: 'internalStore',
        label: 'Loja Interna',
        link: '/register/store/internal',
        menuSupId: 'store'
    },
    {
        id: 'externalStore',
        label: 'Loja Externa',
        link: '/register/store/external',
        menuSupId: 'store'
    },
    {
        id: 'report',
        label: 'Relatórios',
        link: '/report',
        menuSupId: null
    },
];
function getMenu(menuId, menuTree) {
    const mainMenu = menuTree.find((menu) => menu.id === menuId); //a função executa um filtro para encontrar o id passado
    if (!mainMenu) {
        return [];
    }
    const subMenus = menuTree
        .filter((menu) => menu.menuSupId === menuId) //Executa um filtro para encontrar todos submenus pertencentes ao menuId
        .map((subMenu) => getMenu(subMenu.id, menuTree)); // Retorna um novo objeto com informações do submenu e seus submenus.
    return {
        id: mainMenu.id,
        label: mainMenu.label,
        link: mainMenu.link,
        subMenus,
    };
}
// teste
const result = getMenu('home', menuTree);
//   const result: MenuItem | null = getMenu('register', menuTree);
//   const result: MenuItem | null = getMenu('store', menuTree);
//   const result: MenuItem | null = getMenu('', menuTree); //nullo retorna array vazio
console.log(result);
