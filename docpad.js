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
      'contact',
      'partners'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "Sobre o evento",
      location: "Local",
      speakers: "Palestrantes",
      schedule: "Programação",
      sponsors: "Patrocínio",
      partners: "Realização",
      contact: "Contato",
      time: "Horário",
      slot: "Slot",
      description: "Descrição"
    },

    // The entire schedule
    schedule: [
      {
        name: "Check-in",
        time: "15/11 - 13h40"
      },
      {
        name: "Leonardo Silva",
        photo: "themes/dcfloripa/img/xulispa.jpg",
        bio: "Usa o Drupal como ferramenta de ampliação dos trabalhos desde 2006 e em 2008 se afirmou desenvolvedor web. Também integra a equipe de mantenedores do site Drupal Brasil. Formado em música, teatro, circo e produção cultural, é entusiasta em novas tecnologias e software livre.",
        company: "Taller",
        link: {
          href: "http://github.com/xulispa",
          text: "@xulispa"
        },
        presentation: {
          title: "Drupal Zero - Como fazer um blog ou site institucional sem saber programar!",
          description: "Voltada para quem não conhece o Drupal, a palestra aborda os conceitos primários, o que é, como funciona, requisitos para instalação e uso e estrutura de arquivos. Durante a apresentação é feito um site institucional, com blog e formulário de contato, de maneira interativa, onde os participantes têm a oportunidade de aprender, com a mão na massa, a fazer o site sem precisar saber programação.",
          time: "15/11 - 14h"
        }
      },
      {
        name: "Rodrigo Panchniack",
        photo: "themes/dcfloripa/img/rodrigo.jpg",
        bio: "Coder desde os 8 anos de idade e aprendiz errátido de Perl e Drupal. Bacharel em Filosofia (2003) e Mestre em Linguística (2005) pela Universidade Federal de Santa Catarina. Foi estagiário de doutorado no Grupo de Computação do Conhecimento Léxico-gramatical da Universidade de Lisboa (2006-2007) e professor em cursos públicos e privados, para graduação e pós. Gosta dos coelhos, das palavras e da expressão back end, no bom sentido. De vez em quando, despeja códigos no drupal.org e no cpan.org.",
        company: "Taller",
        link: {
          href: "http://www.cce.ufsc.br/~fernandesrp/",
          text: "pagina pessoal"
        },
        presentation: {
          title: "Live Test",
          description: "A medida que o projeto cresce, novas funcionalidades podem prejudicar as anteriores. Para avançar com segurança, é necessário realizar testes de regressão, mas fazer isso manualmente é tão arriscado quando a roleta russa. Por isso, esta palestra apresenta o Self Test, um módulo Drupal infalível para a automatização de testes, com base em gherkin, watir, git hook e ruby.",
          time: "15/11 - 15h30"
        }
      },
      {
        name: "Coffee-break",
        time: "15/11 - 17h"
      },
      {
        name: "Leandro Nunes",
        photo: "themes/dcfloripa/img/leandro.jpg",
        bio: "Trabalha com web há longos anos, é entusiasta de software livre e é apaixonado por drupal. Já minitrou palestras em Drupalcamps pela américa latina, e contribui com a comunidade Drupal através de módulos, patches e traduções. Santista fanático, gosta de video games e de programar.",
        company: "Itelios",
        link: {
          href: "https://twitter.com/lnunesbr",
          text: "@lnunesbr"
        },
        presentation: {
          title: "Cache no Drupal",
          description: "A idéia é demonstrar de maneira geral como o cache do drupal funciona, e algumas dicas e práticas para melhorar o desempenho do seu site.",
          time: "15/11 - 17h30"
        }
      },
      {
        name: "Rafael Caceres",
        photo: "themes/dcfloripa/img/rafael.png",
        bio: "Graduado em ciências da computação, trabalha com web desde 2001 e com Drupal, desde 2008. Evangelizador Lean e Ágil, é Co-Fundador e Diretor de Estratégias da Taller. Desenvolvedor e consultor, trabalhou em alguns dos maiores sites brasileiros de Drupal.",
        company: "Taller",
        link: {
          href: "http://github.com/rafaelcaceres",
          text: "@rafaelcaceres"
        },
        presentation: {
          title: "Entity API, drupal do jeito certo",
          description: "Entity é a abstração de conteúdo que foi introduzida no drupal 7. Essa abstração permite que fields sejam anexados somente a bundles, como no drupal 6, mas a qualquer entity. E isso não é tudo. Esse workshop visa dar uma introdução básica ao conceito de Entity, desde o trabalho com Entities do core até a criação de nossas próprias. Além disso, será mostrado como estender as classes e controllers das entities, como criar interfaces administrativas rápido é fácil, como criar visualizações e como ter um acesso mais orientado a objetos a isso tudo. Pre-requisitos: Notebook/Laptop",
          time: "15/11 - 15h às 18h"
        }
      },
      {
        name: "Encerramento",
        time: "15/11 - 19h"
      },
      {
        name: "Check-in",
        time: "16/11 - 13h40"
      },
      {
        name: "Nick Vidal",
        photo: "themes/dcfloripa/img/nick.jpg",
        bio: "Engenheiro da Computação pela UFRGS (Universidade Federal do Rio Grande do Sul). Bastante ativo na comunidade de Software Livre e da comunidade Web, tendo participado como palestrante, voluntário e organizador de diversos eventos, tais como FISL, Latinoware, Consegi e World Wide Web Conference 2013. Membro da comunidade Drupal, tendo participado na DrupalCamp São Paulo, DrupalCamp Porto Alegre e DrupalCon Portland.",
        company: "MailMaid",
        link: {
          href: "http://twitter.com/nickvidal",
          text: "@nickvidal"
        },
        presentation: {
          title: "MailMaid: integrando email e a Web para uma colaboração ágil.",
          description: "MailMaid é uma distribuição Drupal que integra email e a Web para facilitar a colaboração. A vantagem do email é que ele é um meio de comunicação extremamente popular e fácil de usar. Porém, é difícil gerenciar um projeto via email, principalmente quanto existem diversas threads e pessoas. É neste ponto que a integração com a Web torna-se vantajosa.",
          time: "16/11 - 14h"
        }
      },
      {
        name: "Handrus Stephan Nogueira",
        photo: "themes/dcfloripa/img/handrus.jpg",
        bio: "Apaixonado por web e open-source, trabalha com suas duas paixões a 10 anos sendo 6 deles com metodologias ágeis.Evangelista de testes automatizados, Drupal e de metodologias ágeis atualmente trabalha como Arquiteto de Softwares na CI&T, empresa Brasileira com presença global.",
        company: "Ci&T",
        link: {
          href: "http://twitter.com/handrus",
          text: "@handrus"
        },
        presentation: {
          title: "Testes de performance",
          description: "Qual a diferença entre testes de stress e carga? Como posso planejar meus testes de performance? Que ferramentas utilizar para verificar a performance do meu site? E como desenvolver com performance em mente? Nessa palestra essas perguntas serão discutidas, e algumas abordagens demonstradas. Um hands-on com muita discussão.",
          time: "16/11 - 15h30"
        }
      },
      {
        name: "Coffee-break",
        time: "16/11 - 17h"
      },
      {
        name: "Vinicius Freitas",
        photo: "themes/dcfloripa/img/vini.jpg",
        bio: "Gosta de software, pessoas e negócios. Especificamente, de como o software pode ajudar pessoas em seus negócios. Isso o levou a estudar Sistemas de Informação e logo a entrar no mundo da web. Depois de quatro projetos no primeiro emprego, juntou os esforços com outros três amigos que se dedicam ao conceito de uma \"empresa ágil\" e criar \"killer web apps\". É um geek empreendedor viciado em soluções.",
        company: "Taller",
        // link: {
        //   href: "",
        //   text: ""
        // },
        presentation: {
          title: "Proximity Search com Drupal, Search API, Solr e Google Places",
          description: "",
          time: "16/11 - 17h30"
        }
      },
      {
        name: "Sebastian Ferrari",
        photo: "themes/dcfloripa/img/sebas.jpg",
        bio: "Desenvolvedor Web Drupal desde 2005. Especializado em criação e consultoria de portais de muita audiência e com grande quantidade de conteúdo usando Drupal como CMS e Framework. Membro da comunidade Drupal desde 2009 como \"Organization Member\", onde contribui com módulos e patches para melhorar ou corrigir módulos de outros contribuidores.",
        company: "Taller",
        link: {
          href: "https://twitter.com/sebas5384",
          text: "@sebas5384"
        },
        presentation: {
          title: "Desenvolvimento Drupal em equipe",
          description: "A criação de um site com Drupal, pode ser feita por um “drupaleiro” com o mínimo de processos para publicar novas funcionalidades ou melhorias... tudo bem! Mas, o que acontece quando trabalhamos com um time com diferentes skills, por exemplo, um front-end, dois devs de backend e um tester? Aí coisa pode ficar feia, então, se você ou seu time, gasta mais tempo tendo que lidar com problemas como, aparente perda de funcionalidades, problemas que surgem “do nada”, publicação de novas funcionalidades em um site já em produção... sem contar a manutenção de longo prazo, que fica quase impossível de manter. Aprenda a implementar alguns processos e utilização de ferramentas disponíveis que ajudam a garantir a eficiência do time, entregando código de qualidade. Pre-requisitos: Notebook/Laptop com GIT instalado.",
          time: "16/11 - 15h às 18h"
        }
      },
      {
        name: "Encerramento",
        time: "16/11 - 19h"
      },
    ],

    // List of Sponsors
    /*sponsors: [
      {
        name: "",
        logo: "themes/dcfloripa/img/sponsor.png",
        url: "http://example.com"
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
