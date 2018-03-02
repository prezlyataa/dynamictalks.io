export const config = {
  eventAddress: {
    addressLines: [
      'м.Львів, вул.Галицька, 1,',
      'COMMUNA',
      '2-й поверх\n' +
      '(на розі Площі Ринок)'
    ],
    googleMapEmbed:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.076540122793!2d24.029019415632334!3d49.84101933896939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add6dca0c9b13%3A0x2797b7e6a216b902!2z0LLRg9C70LjRhtGPINCT0LDQu9C40YbRjNC60LAsIDEsINCb0YzQstGW0LIsINCb0YzQstGW0LLRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjCwgNzkwMDA!5e0!3m2!1suk!2sua!4v1520001652497" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
  },


  titles:{
    speakers_section:'наші спікери',
    contacts_section:'Dynamic JS Talks #2',
    partners_section:'НАШІ ПАРТНЕРИ',
    previous_speakers_section: 'ПОПЕРЕДНІ СПІКЕРИ',
    about_us:'Про нас'
  },

  iconUrl:{
    calendar: 'images/icon@2x.png',
    map:'images/icon copy.png'
  },

  socialNetworks : [
    {
      name: 'facebook',
      link: 'https://www.facebook.com/dynamictalks/'
    },
    {
      name: 'slack',
      link: 'https://griddynamics.slack.com'
    },
    {
      name:'twitter',
      link:'https://twitter.com/griddynamics'
    },
    {
      name:'instagram',
      link:'https://www.instagram.com/griddynamics_ua'
    }
  ],


  eventDate: {
    city: 'Львів',
    time: '2017-03-10T10:00',
    timeString: '10 березня, 2018'
  },

  registrationButton: {
    text: 'Реєстрація'
  },

  headerNavigationLinks: ['Хто', 'Програма', 'Коли і де', 'Про нас', 'Партнери'],

  eventInformation: {
    title: 'Dynamic js talks #2',
    slogan: 'The frontend conference for experienced developers',
    eventDate: {
      city: 'Львів',
      time: '2018-10-03T10:00',
      timeString: '10 березня, 2018',
      place: 'Львів, вул. Героїв УПА, 80'
    },
  },

  externalEndpoints: {
    registrationUrl: 'https://goo.gl/forms/x9AwECPkGUwCQm4Y2',
    materialsUrl: 'https://dynamictalks.io/public-materials',
    vacanciesUrl: 'https://www.griddynamics.com/careers',
    icalUrl: '/JS_Dynamic_Talks_meetup_Dec_2017.ics',
    youtube: 'https://goo.gl/CsBDhE',
    slack: 'https://dynamictalks.slack.com/join/shared_invite/enQtMjU0OTkwNjY0MjYzLTQxZmJkNjk2OTZjNTQ1OTc4N2ExYmQwZDZjYTBlYWUyNzA2NmJjMDc0ZGIxZWQ3OTkyNmZjMDQxN2RmNzA2ODc',
    facebook: 'https://www.facebook.com/dynamictalks/',
    linkedIn: 'https://www.linkedin.com/company/250774/',
    location:'https://www.google.com.ua/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%93%D0%B0%D0%BB%D0%B8%D1%86%D1%8C%D0%BA%D0%B0,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+79000/@49.8401876,24.0293324,17z/data=!3m1!4b1!4m5!3m4!1s0x473add6c2e097db9:0x777fab7d561f976c!8m2!3d49.8401842!4d24.0315211'
  },

  speakers: [
    {
      name: 'Георгій Подсвєтов',
      state:'',
      position: 'UI engineer / Grid Dynamics',
      topic: 'The story about good and bad decisions on the way to develop new UI platform for enterprise',
      specialGuest: false,
      link: 'https://www.linkedin.com/in/georgiy-podsvetov-86898945/',
      imageSrc: 'images/speakers/podsvyetov.jpg',
      bullets: [
        'Story how our team made impossible within one year',
        'Tough decision',
        'Thoughts on how to survive and deliver results in highly politicized environment'
      ]
    },
    {
      name: 'Володимир Воєвідка',
      state:'',
      position: 'UI engineer / Grid Dynamics',
      topic: 'Build Hybrid Web Application',
      link: 'https://www.linkedin.com/in/vovavoevidka/',
      imageSrc: 'images/speakers/vova.jpg',
      bullets: [
        'Share experience of `injection` new web application into existing enterprise infrastructure.',
        'Deliver understanding of possible issues',
        'Timeline / estimation visibility.'
      ]
    },
    {
      name: 'Ярослав Заблоцький',
      state:'спеціальний гість',
      position: 'Професор, керівник приватної Академії, практикуючий лікар. Власник мережі стоматологічних клінік TM "Клініка Заблоцького".' +
      'Власник одного з найдорожчих брендів в Україні у сфері професійних медичних послуг.' +
      ' Автор книги «Як я став Заблоцьким. Пригоди стоматолога в червоному метелику». Автор та ведучий  медіа-проекту про 100  заможних українців  «Як я став…». ',
      topic: 'Бізнес від нуля до мільйона',
      specialGuest: false,
      link: 'https://www.facebook.com/yaroslav.zablotskyy',
      imageSrc: 'images/speakers/DDV_8093 copy.jpg',
      bullets: [
      ]
    }
  ],

  previousSpeakers: [
    {
      name: 'Дмитро Вербовий',
      state:'',
      position: 'UI engineer / Grid Dynamics',
      topic: 'Key things every front-end developer should know about HTTP/2. Why is it important to migrate?',
      specialGuest: false,
      link: 'https://www.linkedin.com/in/dmytro-verbovyi-867bb34b',
      imageSrc: 'images/speakers/Facebook.jpg',
      bullets: [
        'HTTP2 is stable and actually proven in production',
        'It has set of critical features that might improve performance of your web application',
        'Lets see how we can use it with NodeJS'
      ]
    },
    {
      name: 'Дмитро Вербовий',
      state:'',
      position: 'UI engineer / Grid Dynamics',
      topic: 'Key things every front-end developer should know about HTTP/2. Why is it important to migrate?',
      specialGuest: false,
      link: 'https://www.linkedin.com/in/dmytro-verbovyi-867bb34b',
      imageSrc: 'images/speakers/Facebook.jpg',
      bullets: [
        'HTTP2 is stable and actually proven in production',
        'It has set of critical features that might improve performance of your web application',
        'Lets see how we can use it with NodeJS'
      ]
    },
    {
      name: 'Дмитро Вербовий',
      state:'',
      position: 'UI engineer / Grid Dynamics',
      topic: 'Key things every front-end developer should know about HTTP/2. Why is it important to migrate?',
      specialGuest: false,
      link: 'https://www.linkedin.com/in/dmytro-verbovyi-867bb34b',
      imageSrc: 'images/speakers/Facebook.jpg',
      bullets: [
        'HTTP2 is stable and actually proven in production',
        'It has set of critical features that might improve performance of your web application',
        'Lets see how we can use it with NodeJS'
      ]
    },
    {
      name: 'Дмитро Вербовий',
      state:'',
      position: 'UI engineer / Grid Dynamics',
      topic: 'Key things every front-end developer should know about HTTP/2. Why is it important to migrate?',
      specialGuest: false,
      link: 'https://www.linkedin.com/in/dmytro-verbovyi-867bb34b',
      imageSrc: 'images/speakers/Facebook.jpg',
      bullets: [
        'HTTP2 is stable and actually proven in production',
        'It has set of critical features that might improve performance of your web application',
        'Lets see how we can use it with NodeJS'
      ]
    },
    {
      name: 'Дмитро Вербовий',
      state:'',
      position: 'UI engineer / Grid Dynamics',
      topic: 'Key things every front-end developer should know about HTTP/2. Why is it important to migrate?',
      specialGuest: false,
      link: 'https://www.linkedin.com/in/dmytro-verbovyi-867bb34b',
      imageSrc: 'images/speakers/Facebook.jpg',
      bullets: [
        'HTTP2 is stable and actually proven in production',
        'It has set of critical features that might improve performance of your web application',
        'Lets see how we can use it with NodeJS'
      ]
    },
    {
      name: 'Дмитро Вербовий',
      state:'',
      position: 'UI engineer / Grid Dynamics',
      topic: 'Key things every front-end developer should know about HTTP/2. Why is it important to migrate?',
      specialGuest: false,
      link: 'https://www.linkedin.com/in/dmytro-verbovyi-867bb34b',
      imageSrc: 'images/speakers/Facebook.jpg',
      bullets: [
        'HTTP2 is stable and actually proven in production',
        'It has set of critical features that might improve performance of your web application',
        'Lets see how we can use it with NodeJS'
      ]
    }
  ]
};

config.agenda = [
  { time: '10:30-11:00', description: 'Реєстрація, нетворкінг' },
  { time: '11:00-11:15', description: 'Відкриття, декілька слів про ідею івенту' },
  { time: '11:15-12:30', topic: speakerToDescription(config.speakers[0]), speaker: speaker(config.speakers[0])},
  { time: '12:30-12:45', description: 'Кава' },
  { time: '12:45-14:00', topic: speakerToDescription(config.speakers[2]), speaker: speaker(config.speakers[1]) },
  { time: '14:00-14:15', description: 'Напої та снеки' },
  { time: '14:15-15:30', topic: speakerToDescription(config.speakers[1]), speaker: speaker(config.speakers[2]) },
  { time: '15:30', description: 'Afterparty, Networking' }
];

function speakerToDescription(speaker) {
  return `«${speaker.topic}»`;
}

function speaker(speaker) {
  return `${speaker.name}`;
}
