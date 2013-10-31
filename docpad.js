module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "DrupalCamp Floripa",
      description: "O Drupal Camp Floripa é um evento de tecnologia com foco em Drupal.",
      date: "15 e 16 de Novembro",
      // If your event is free, just comment this line
      price: "R$30",
      venue: "Taller",
      address: "R. Laurindo Januário da Silveira, 1297 - Lagoa da Conceição, Florianópolis - SC, Brazil",
      city: "Florianópolis",
      state: "Santa Catarina"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    callToAction: {
        text: "Inscreva-se",
        link: "https://drupalcampfloripa2013.eventbrite.pt/"
    },

    // "Fork me on GitHub", if you don't want this, just remove the forkButton property
    // forkButton: {
    //     repository: "https://github.com/braziljs/conf-boilerplate"
    // },

    // Site info
    site: {
      theme: "dcfloripa",
      url: "floripa2013.drupal.org.br",
      googleanalytics: ""
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'location',
      'speakers',
      'schedule',
      // 'sponsors',
      'partners',
      'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "Sobre o evento",
      location: "Local",
      speakers: "Palestrantes",
      schedule: "Programação",
      sponsors: "Patrocínio",
      partners: "Realização",
      contact: "Contato"
    },

    // The entire schedule
    schedule: [
      {
        name: "Check-in",
        time: "13h40"
      },
      {
        name: "Leonardo Silva",
        photo: "themes/dcfloripa/img/xulispa.jpg",
        bio: "Usa o Drupal como ferramenta de ampliação dos trabalhos desde 2006 e em 2008 se afirmou desenvolvedor web. Também integra a equipe de mantenedores do site Drupal Brasil. Formado em música, teatro, circo e produção cultural, é entusiasta em novas tecnologias e software livre.",
        // company: "Taller Web Solutions",
        link: {
          href: "http://github.com/xulispa",
          text: "@xulispa"
        },
        presentation: {
          title: "Drupal Zero - Como fazer um blog ou site institucional sem saber programar!",
          description: "Voltada para quem não conhece o Drupal, a palestra aborda os conceitos primários, o que é, como funciona, requisitos para instalação e uso e estrutura de arquivos. Durante a apresentação é feito um site institucional, com blog e formulário de contato, de maneira interativa, onde os participantes têm a oportunidade de aprender, com a mão na massa, a fazer o site sem precisar saber programação.",
          time: "14h00"
        }
      },
      {
        name: "Rodrigo Panchniack",
        photo: "themes/dcfloripa/img/rodrigo.jpg",
        bio: "Coder desde os 8 anos de idade e aprendiz errático de Perl e Drupal. Bacharel em Filosofia (2003) e Mestre em Linguística (2005) pela Universidade Federal de Santa Catarina. Foi estagiário de doutorado na Universidade de Lisboa (2006-2007) e professor em cursos públicos e privados, para graduação e pós. Gosta dos coelhos, da semântica lexical e da expressão back end, no bom sentido. As vezes despeja códigos no drupal.org e no cpan.org. Apelidado carinhosamente de Panicat!",
        // company: "Taller Web Solutions",
        link: {
          href: "http://twitter.com/panchniack",
          text: "@panchniack"
        },
        presentation: {
          title: "Live Test",
          description: "A medida que o projeto cresce, novas funcionalidades podem prejudicar as anteriores. Para avançar com segurança, é necessário realizar testes de regressão, mas fazer isso manualmente é tão arriscado quando a roleta russa. Por isso, esta palestra apresenta o Self Test, um módulo Drupal infalível para a automatização de testes, com base em gherkin, watir, git hook e ruby.",
          time: "15h00"
        }
      },
      {
        name: "Coffee-break",
        time: "16h00"
      },
      {
        name: "Leandro Nunes",
        photo: "themes/dcfloripa/img/leandro.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        // company: "Itelios",
        link: {
          href: "http://twitter.com/littlechuck",
          text: "@littlechuck"
        },
        presentation: {
          title: "Cache no Drupal",
          description: "A idéia é demonstrar de maneira geral como o cache do drupal funciona, e algumas dicas e práticas para melhorar o desempenho do seu site.",
          time: "17h00"
        }
      },
      {
        name: "Nick Vidal",
        photo: "themes/dcfloripa/img/nick.jpg",
        bio: "Engenheiro da Computação pela UFRGS (Universidade Federal do Rio Grande do Sul). Bastante ativo na comunidade de Software Livre e da comunidade Web, tendo participado como palestrante, voluntário e organizador de diversos eventos, tais como FISL, Latinoware, Consegi e World Wide Web Conference 2013. Membro da comunidade Drupal, tendo participado na DrupalCamp São Paulo, DrupalCamp Porto Alegre e DrupalCon Portland.",
        // company: "",
        link: {
          href: "http://twitter.com/nickvidal",
          text: "@nickvidal"
        },
        presentation: {
          title: "MailMaid: integrando email e a Web para uma colaboração ágil.",
          description: "MailMaid é uma distribuição Drupal que integra email e a Web para facilitar a colaboração. A vantagem do email é que ele é um meio de comunicação extremamente popular e fácil de usar. Porém, é difícil gerenciar um projeto via email, principalmente quanto existem diversas threads e pessoas. É neste ponto que a integração com a Web torna-se vantajosa.",
          time: "18h00"
        }
      },
      {
        name: "Handrus Stephan Nogueira",
        photo: "themes/dcfloripa/img/handrus.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        // company: "Ci&T",
        link: {
          href: "http://github.com/handrus",
          text: "@handrus"
        },
        presentation: {
          title: "Testes de performance",
          description: "Qual a diferença entre testes de stress e carga? Como posso planejar meus testes de performance? Que ferramentas utilizar para verificar a performance do meu site? E como desenvolver com performance em mente? Nessa palestra essas perguntas serão discutidas, e algumas abordagens demonstradas. Um hands-on com muita discussão.",
          time: "19h00"
        }
      }
    ],

    // List of Sponsors
    /*sponsors: [
      {
        name: "Eventick",
        logo: "themes/dcfloripa/img/sponsor.png",
        url: "http://eventick.com.br"
      }
    ],*/

    // List of Partners
    partners: [
      {
        name: "Taller",
        logo: "themes/dcfloripa/img/taller_logo.png",
        url: "http://taller.net.br"
      }
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    }
  }
};
