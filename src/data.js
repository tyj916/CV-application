import { v4 as uuidv4 } from 'uuid';

export const cvInfo = {
  generalInfo: {
    name: 'John Doe',
    email: 'example@email.com',
    phoneNumber: '0123456789',
    location: 'Somewhere on the earth',
  },
  educationInfos: [
    {
      id: uuidv4(),
      schoolName: 'Home Sweet Home',
      degree: 'Bachelor of Unemployed',
      fieldOfStudy: 'Eat Sleep Play Study Workout Repeat',
      dateStart: '2023-02-01',
      dateEnd: '',
    },
    {
      id: uuidv4(),
      schoolName: 'Some University',
      degree: 'Bachelor of Information Technology',
      fieldOfStudy: 'Cyber Security and Forensics and Computer Science',
      dateStart: '2018-07-01',
      dateEnd: '2020-03-18',
    },
  ],
  practicalInfos: [
    {
      id: uuidv4(),
      companyName: 'A Good Company',
      positionTitle: 'E-Commerce Executive',
      responsibility: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus pariatur, fugiat quo dolorem maiores minima assumenda delectus consequatur consectetur placeat necessitatibus repudiandae dolores accusamus saepe eos aliquid, exercitationem incidunt expedita.',
      dateStart: '2021-03-01',
      dateEnd: '2023-01-31',
    },
    {
      id: uuidv4(),
      companyName: 'A Good Company',
      positionTitle: 'Web Developer',
      responsibility: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus pariatur, fugiat quo dolorem maiores minima assumenda delectus consequatur consectetur placeat necessitatibus repudiandae dolores accusamus saepe eos aliquid, exercitationem incidunt expedita.',
      dateStart: '2020-03-01',
      dateEnd: '2021-02-28',
    },
  ]
};