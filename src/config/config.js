import React from 'react';

export const config = {
  eventAddress: {
    addressLines: [
      'м.Львів, вул.Галицька, 1,',
      'COMMUNA',
      'Офісний центр, вхід праворуч від стоянки, конференц-зал знаходиться ліворуч від рецепції.'
    ],
    googleMapEmbed:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.076540122793!2d24.029019415632334!3d49.84101933896939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add6dca0c9b13%3A0x2797b7e6a216b902!2z0LLRg9C70LjRhtGPINCT0LDQu9C40YbRjNC60LAsIDEsINCb0YzQstGW0LIsINCb0YzQstGW0LLRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjCwgNzkwMDA!5e0!3m2!1suk!2sua!4v1520001652497" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
  },


  titles:{
    speakers_section:'наші спікери',
    contacts_section:'Dynamic JS Talks #2'
  },

  iconUrl:{
    calendar: 'images/icon@2x.png',
    map:'images/icon copy.png'
  },

  socialNetworks : [
    {
      name: 'facebook',
      link: 'https://www.facebook.com'
    },
    {
      name: 'slack',
      link: 'https://www.slack.com'
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
    linkedIn: 'https://www.linkedin.com/company/250774/'
  },

  speakers: [
    {
      name: 'Ярослав Заблоцький',
      state:'спеціальний гість',
      position: 'Професор, керівник приватної Академії, практикуючий лікар. Власник мережі стоматологічних клінік TM "Клініка Заблоцького".' +
      'Власник одного з найдорожчих брендів в Україні у сфері професійних медичних послуг.' +
      ' Автор книги «Як я став Заблоцьким. Пригоди стоматолога в червоному метелику». Автор та ведучий  медіа-проекту про 100  заможних українців  «Як я став…». ',
      topic: 'Бізнес від нуля до мільйона',
      specialGuest: false,
      link: 'https://www.linkedin.com/in/igor-tomov-b0584675',
      imageSrc: 'images/speakers/DDV_8093 copy.jpg',
      bullets: [
      ]
    },
    {
      name: 'Володимир Фльонц',
      state:'дебют',
      position: 'Розробник ProZorro, засновник ГО «Електронна демократія», IT-євангеліст',
      topic: 'Чи можна електрифікувати демократію?',
      link: 'https://www.linkedin.com/in/flyonts',
      imageSrc: 'images/speakers/Facebook.jpg',
      bullets: [
        'Електронні вибори — це перше, що згадують обговорюючи електронну демократію майбутнього',
        'Моделі електронних голосувань, що вже використовуються в світі, та тих що тільки вважаються перспектвними',
        'Проведемо практичне голосування за системою Prêt à Voter та розберемо три офіційних інтернет-голосування, що вже відбулись в Україні'
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
  { time: '11:15-12:30', description: speakerToDescription(config.speakers[0]) },
  { time: '12:30-12:45', description: 'Кава' },
  { time: '12:45-14:00', description: speakerToDescription(config.speakers[2]) },
  { time: '14:00-14:15', description: 'Напої та снеки' },
  { time: '14:15-15:30', description: speakerToDescription(config.speakers[1]) },
  { time: '15:30', description: 'Afterparty, Networking' }
];

function speakerToDescription(speaker) {
  return (
    <div>
      <p className="name">{speaker.name}</p>
      <p className="topic">«{speaker.topic}»</p>
    </div>
  );
}
