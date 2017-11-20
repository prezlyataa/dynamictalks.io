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
    materialsUrl: 'https://dynamictalks.io/js-meetup-2-materials',
    vacanciesUrl: 'https://www.griddynamics.com/careers',
    icalUrl: '/JS_Dynamic_Talks_meetup_Dec_2017.ics'
  },

  speakers: [
    {
      name: 'Ігор Томов',
      position: 'UI engineer / Grid Dynamics',
      topic: 'How We Lost Server Side Rendering, and Why We Should Concern About That',
      specialGuest: false,
      link: 'https://www.linkedin.com/in/igor-tomov-b0584675',
      imageSrc: 'images/speakers/it.jpg',
      bullets: []
    },
    {
      name: 'Володимир Фльонц',
      position: 'Розробник ProZorro, засновник ГО «Електронна демократія», IT-євангеліст',
      topic: 'Чи можна електрифікувати демократію?',
      specialGuest: true,
      link: 'https://www.linkedin.com/in/flyonts',
      imageSrc: 'images/speakers/vf.jpg',
      bullets: []
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
  { time: '10:30', description: 'Реєстрація' },
  { time: '11:00', description: 'Відкриття, декілька слів про ідею івенту' },
  { time: '11:15', description: speakerToDescription(config.speakers[0]) },
  { time: '12:30', description: 'Кава' },
  { time: '12:45', description: speakerToDescription(config.speakers[2]) },
  { time: '14:00', description: 'Напої та снеки' },
  { time: '14:15', description: speakerToDescription(config.speakers[1]) },
  { time: '15:30', description: 'Networking' }
];

function speakerToDescription(speaker) {
  return `Доповідь «${speaker.topic}» (${speaker.name})`;
}
