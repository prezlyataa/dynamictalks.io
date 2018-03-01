import React from 'react';

export const config = {
  eventAddress: {
    addressLines: [
      'ITEA HUB',
      '79018, Львів, вул. Героїв УПА, 80'
    ],
    googleMapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.683742244445!2d23.990492951681013!3d49.829608979293404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ae77e64398c81%3A0xa1e0acfdc00dfddd!2sITEA+Hub!5e0!3m2!1sen!2sus!4v1511097076401" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
  },



  eventDate: {
    city: 'Львів',
    time: '2017-12-02T10:00',
    timeString: '2 грудня, 2017'
  },

  externalEndpoints: {
    registrationUrl: 'https://goo.gl/forms/x9AwECPkGUwCQm4Y2',
    materialsUrl: 'https://dynamictalks.io/public-materials',
    vacanciesUrl: 'https://www.griddynamics.com/careers',
    icalUrl: '/JS_Dynamic_Talks_meetup_Dec_2017.ics',
    youtube: 'https://goo.gl/CsBDhE',
    slack: 'https://dynamictalks.slack.com/join/shared_invite/enQtMjU0OTkwNjY0MjYzLTQxZmJkNjk2OTZjNTQ1OTc4N2ExYmQwZDZjYTBlYWUyNzA2NmJjMDc0ZGIxZWQ3OTkyNmZjMDQxN2RmNzA2ODc',
    facebook: 'https://www.facebook.com/dynamictalks/'

  },

  speakers: [
    {
      name: 'Ігор Томов',
      position: 'UI engineer / Grid Dynamics',
      topic: 'How We Lost Server Side Rendering, and Why We Should Concern About That',
      specialGuest: false,
      link: 'https://www.linkedin.com/in/igor-tomov-b0584675',
      imageSrc: 'images/speakers/it.jpg',
      bullets: [
        'Evolution from Web sites to Web applications',
        'The pitfalls of lack of Server Side Rendering',
        'Which tools you can use for SSR nowadays'
      ]
    },
    {
      name: 'Володимир Фльонц',
      position: 'Розробник ProZorro, засновник ГО «Електронна демократія», IT-євангеліст',
      topic: 'Чи можна електрифікувати демократію?',
      specialGuest: true,
      link: 'https://www.linkedin.com/in/flyonts',
      imageSrc: 'images/speakers/vf.jpg',
      bullets: [
        'Електронні вибори — це перше, що згадують обговорюючи електронну демократію майбутнього',
        'Моделі електронних голосувань, що вже використовуються в світі, та тих що тільки вважаються перспектвними',
        'Проведемо практичне голосування за системою Prêt à Voter та розберемо три офіційних інтернет-голосування, що вже відбулись в Україні'
      ]
    },
    {
      name: 'Дмитро Вербовий',
      position: 'UI engineer / Grid Dynamics',
      topic: 'Key things every front-end developer should know about HTTP/2. Why is it important to migrate?',
      specialGuest: false,
      link: 'https://www.linkedin.com/in/dmytro-verbovyi-867bb34b',
      imageSrc: 'images/speakers/dv_2.jpg',
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
