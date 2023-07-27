export default {
  links: [{
    label: 'Accueil',
    link: {name: 'home'},
  }, {
    label: 'Portfolio',
    link: {name: 'portfolio'},
    submenu: [{
      label: 'Projets Personnels',
      link: {name: 'portfolio-filtered', params: {filter: 'personal'}},
    },{
      label: 'Projets Openclassrooms',
      link: {name: 'portfolio-filtered', params: {filter: 'openclassrooms'}},
    }]
  }, {
    label: 'Contact',
    link: {name: 'contact'},
  }],
  socialMedia: [{
    icon: 'fab fa-github-alt',
    label: 'Github',
    link: {path: 'https://github.com/vanessa-lanquetin', external: true},
  }, {
    icon: 'fab fa-linkedin',
    label: 'Linkedin',
    link: {path: 'https://fr.linkedin.com/in/vanessa-lanquetin', external: true},
  }]
}