interface Menu {
    id: string;
    label: string;
    link: string;
    menuSupId: string|null;
  }
  
  interface MenuItem {
    id: string;
    label: string;
    link: string;
    subMenus?: MenuItem[];
  }
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
]


function getMenu(menuId: string, menuTree: Menu[]): MenuItem | null {
    const mainMenu: Menu | undefined = menuTree.find((menu: Menu) => menu.id === menuId);//a função executa um filtro para encontrar o id passado
    if (!mainMenu) {
      return [];
    }
  
    const subMenus: MenuItem[] = menuTree
      .filter((menu: Menu) => menu.menuSupId === menuId)//Executa um filtro para encontrar todos submenus pertencentes ao menuId
      .map((subMenu: Menu) => getMenu(subMenu.id, menuTree));// Retorna um novo objeto com informações do submenu e seus submenus.
  
    return {
      id: mainMenu.id,
      label: mainMenu.label,
      link: mainMenu.link,
      subMenus,
    };
  }
  
  // teste
  const result: MenuItem | null = getMenu('home', menuTree);
//   const result: MenuItem | null = getMenu('register', menuTree);
//   const result: MenuItem | null = getMenu('store', menuTree);
//   const result: MenuItem | null = getMenu('', menuTree); //nullo retorna array vazio
  console.log(result);
