const quizList = [
  {
    id: 0,
    slug: 'the-x-files',
    img: 'https://static.tvmaze.com/uploads/images/medium_portrait/62/155392.jpg',
    title: 'The X-Files',
    description: 'Aliens, conspiracy, test your knowledge on the tv show The X-Files !',
    questions: [
      {
        id: 0,
        questionTitle: 'What organization do Mulder and Scully work in ?',
        responses: [
          {
            id: 1,
            responseTitle: 'CIA',
          },
          {
            id: 2,
            responseTitle: 'FBI',
          },
          {
            id: 3,
            responseTitle: 'NSA',
          },
        ],
        correctAnswer: 'FBI',
      },
      {
        id: 1,
        questionTitle: 'What is the name of their immediate supervisor ?',
        responses: [
          {
            id: 1,
            responseTitle: 'John Doggett',
          },
          {
            id: 2,
            responseTitle: 'Walter Skinner',
          },
          {
            id: 3,
            responseTitle: 'Monica Reyes',
          },
        ],
        correctAnswer: 'Walter Skinner',
      },
      {
        id: 2,
        questionTitle: 'What are the names of Mulder\'s three friends ?',
        responses: [
          {
            id: 1,
            responseTitle: 'Melvin Frohike, John Fitzgerald Byers, Richard « Ringo » Langly',
          },
          {
            id: 2,
            responseTitle: 'John Doggett, Alex Krycek, Monica Reyes',
          },
          {
            id: 3,
            responseTitle: 'Jeffrey Spender, Eve Adelys Harlow, James « Jimmy » Bond',
          },
        ],
        correctAnswer: 'Melvin Frohike, John Fitzgerald Byers, Richard « Ringo » Langly',
      },
      {
        id: 3,
        questionTitle: 'Who plays Dana Scully ?',
        responses: [
          {
            id: 1,
            responseTitle: 'Sarah Michelle Gellar',
          },
          {
            id: 2,
            responseTitle: 'Gillian Anderson',
          },
          {
            id: 3,
            responseTitle: 'Nicole Kidman',
          },
        ],
        correctAnswer: 'Gillian Anderson',
      },
      {
        id: 4,
        questionTitle: 'What is written on the famous poster in Mulder\'s office ?',
        responses: [
          {
            id: 1,
            responseTitle: 'We are not alone',
          },
          {
            id: 2,
            responseTitle: 'They`re here !',
          },
          {
            id: 3,
            responseTitle: 'I want to believe',
          },
        ],
        correctAnswer: 'I want to believe',
      },
      {
        id: 5,
        questionTitle: 'How many X-Files films have hit theaters ?',
        responses: [
          {
            id: 1,
            responseTitle: '0',
          },
          {
            id: 2,
            responseTitle: '1',
          },
          {
            id: 3,
            responseTitle: '2',
          },
        ],
        correctAnswer: '2',
      },
      {
        id: 6,
        questionTitle: 'Who created The X-Files ?',
        responses: [
          {
            id: 1,
            responseTitle: 'Chris Carter',
          },
          {
            id: 2,
            responseTitle: 'Joss Whedon',
          },
          {
            id: 3,
            responseTitle: 'Rod Serling',
          },
        ],
        correctAnswer: 'Chris Carter',
      },
      {
        id: 7,
        questionTitle: 'What is the name of the 2001 spinoff series of The X-Files ?',
        responses: [
          {
            id: 1,
            responseTitle: 'The X-Files: I Want to Believe',
          },
          {
            id: 2,
            responseTitle: 'The Lone Gunmen',
          },
          {
            id: 3,
            responseTitle: 'The X-Files: Here they come',
          },
        ],
        correctAnswer: 'The Lone Gunmen',
      },
      {
        id: 8,
        questionTitle: 'What is the first aire date of The X-Files  ?',
        responses: [
          {
            id: 1,
            responseTitle: '1983',
          },
          {
            id: 2,
            responseTitle: '1993',
          },
          {
            id: 3,
            responseTitle: '2003',
          },
        ],
        correctAnswer: '1993',
      },
      {
        id: 9,
        questionTitle: 'Who is the series\' primary villain of The X-Files ?',
        responses: [
          {
            id: 1,
            responseTitle: 'Cigarette Smoking Man',
          },
          {
            id: 2,
            responseTitle: 'Alex Krycek',
          },
          {
            id: 3,
            responseTitle: 'Jeffrey Spender',
          },
        ],
        correctAnswer: 'Cigarette Smoking Man',
      },
    ],
  },
  {
    id: 1,
    slug: 'the-good-wife',
    img: 'https://static.tvmaze.com/uploads/images/medium_portrait/59/148163.jpg',
    title: 'The Good Wife',
    description: 'Trials, politics, test your knowledge on the tv show The Good Wife !',
    questions: [
      {
        id: 0,
        questionTitle: 'Who plays Alicia Florrick ?',
        responses: [
          {
            id: 1,
            responseTitle: 'Julianna Margulies',
          },
          {
            id: 2,
            responseTitle: 'Christine Baranski',
          },
          {
            id: 3,
            responseTitle: 'Archie Panjabi',
          },
        ],
        correctAnswer: 'Julianna Margulies',
      },
      {
        id: 1,
        questionTitle: 'How many seasons are there ?',
        responses: [
          {
            id: 1,
            responseTitle: '6',
          },
          {
            id: 2,
            responseTitle: '7',
          },
          {
            id: 3,
            responseTitle: '8',
          },
        ],
        correctAnswer: '7',
      },
      {
        id: 2,
        questionTitle: 'Who created The Good Wife ?',
        responses: [
          {
            id: 1,
            responseTitle: 'Robert King & Michelle King',
          },
          {
            id: 2,
            responseTitle: 'Tony Scott',
          },
          {
            id: 3,
            responseTitle: 'Ridley Scott',
          },
        ],
        correctAnswer: 'Robert King & Michelle King',
      },
      {
        id: 3,
        questionTitle: 'What is the name of Peter Florrick\'s campaign manager ?',
        responses: [
          {
            id: 1,
            responseTitle: 'Jackie Florrick',
          },
          {
            id: 2,
            responseTitle: 'Eli Gold',
          },
          {
            id: 3,
            responseTitle: 'Marissa Gold',
          },
        ],
        correctAnswer: 'Eli Gold',
      },
      {
        id: 4,
        questionTitle: 'Which brilliant lawyer is known to often make observations at inappropriate times ?',
        responses: [
          {
            id: 1,
            responseTitle: 'Diane Lockhart',
          },
          {
            id: 2,
            responseTitle: 'Will Gardner',
          },
          {
            id: 3,
            responseTitle: 'Elsbeth Tascioni',
          },
        ],
        correctAnswer: 'Elsbeth Tascioni',
      },
      {
        id: 5,
        questionTitle: 'What is Diane Lockhart\' husband Kurt McVeigh job ?',
        responses: [
          {
            id: 1,
            responseTitle: 'Lawyer',
          },
          {
            id: 2,
            responseTitle: 'Firearms expert',
          },
          {
            id: 3,
            responseTitle: 'Policeman',
          },
        ],
        correctAnswer: 'Firearms expert',
      },
      {
        id: 6,
        questionTitle: 'Which character was in Law School with Alicia ?',
        responses: [
          {
            id: 1,
            responseTitle: 'Will Gardner',
          },
          {
            id: 2,
            responseTitle: 'Cary Agos',
          },
          {
            id: 3,
            responseTitle: 'Louis Canning',
          },
        ],
        correctAnswer: 'Will Gardner',
      },
      {
        id: 7,
        questionTitle: 'Investigator Kalinda Sharma is also known as ...',
        responses: [
          {
            id: 1,
            responseTitle: 'Liz Lawrence',
          },
          {
            id: 2,
            responseTitle: 'Leela Tahiri',
          },
          {
            id: 3,
            responseTitle: 'Lucca Quinn',
          },
        ],
        correctAnswer: 'Leela Tahiri',
      },
      {
        id: 8,
        questionTitle: 'Which recurring character,  often compared to O.J. Simpson, has allegedly murdered multiple women ?',
        responses: [
          {
            id: 1,
            responseTitle: 'Colin Sweeney',
          },
          {
            id: 2,
            responseTitle: 'Lemond Bishop',
          },
          {
            id: 3,
            responseTitle: 'Neil Gross',
          },
        ],
        correctAnswer: 'Colin Sweeney',
      },
      {
        id: 9,
        questionTitle: 'In season 4, Alicia starts a new firm. With whom ?',
        responses: [
          {
            id: 1,
            responseTitle: 'Diane Lockhart',
          },
          {
            id: 2,
            responseTitle: 'Cary Agos',
          },
          {
            id: 3,
            responseTitle: 'Will Gardner',
          },
        ],
        correctAnswer: 'Cary Agos',
      },
    ],
  },
  {
    id: 2,
    slug: 'the-good-fight',
    img: 'https://static.tvmaze.com/uploads/images/medium_portrait/89/224401.jpg',
    title: 'The Good Fight',
    description: 'Trials, politics, test your knowledge on the tv show The Good Fight !',
    questions: [
      {
        id: 0,
        questionTitle: 'yfyg985  ?',
        responses: [
          {
            id: 1,
            responseTitle: 'Julianna Margulies',
          },
          {
            id: 2,
            responseTitle: 'Christine Baranski',
          },
          {
            id: 3,
            responseTitle: 'Archie Panjabi',
          },
        ],
        correctAnswer: 'Julianna Margulies',
      },
      {
        id: 1,
        questionTitle: 'drfygtuhij ?',
        responses: [
          {
            id: 1,
            responseTitle: '6',
          },
          {
            id: 2,
            responseTitle: '7',
          },
          {
            id: 3,
            responseTitle: '8',
          },
        ],
        correctAnswer: '7',
      },
      {
        id: 2,
        questionTitle: '4952',
        responses: [
          {
            id: 1,
            responseTitle: '496512',
          },
          {
            id: 2,
            responseTitle: '864',
          },
          {
            id: 3,
            responseTitle: 'qs',
          },
        ],
        correctAnswer: '496512',
      },
    ],
  },
  {
    id: 3,
    slug: 'desperate-housewives',
    img: 'https://static.tvmaze.com/uploads/images/medium_portrait/4/11549.jpg',
    title: 'Desperate Housewives',
    description: 'Drama, gossip, test your knowledge of our favorite Wisteria Lane\'s desperate housewives !',
    questions: [
      {
        id: 0,
        questionTitle: 'yfyg985  ?',
        responses: [
          {
            id: 1,
            responseTitle: 'Julianna Margulies',
          },
          {
            id: 2,
            responseTitle: 'Christine Baranski',
          },
          {
            id: 3,
            responseTitle: 'Archie Panjabi',
          },
        ],
        correctAnswer: 'Julianna Margulies',
      },
      {
        id: 1,
        questionTitle: 'drfygtuhij ?',
        responses: [
          {
            id: 1,
            responseTitle: '6',
          },
          {
            id: 2,
            responseTitle: '7',
          },
          {
            id: 3,
            responseTitle: '8',
          },
        ],
        correctAnswer: '7',
      },
      {
        id: 2,
        questionTitle: '4952',
        responses: [
          {
            id: 1,
            responseTitle: '496512',
          },
          {
            id: 2,
            responseTitle: '864',
          },
          {
            id: 3,
            responseTitle: 'qs',
          },
        ],
        correctAnswer: '496512',
      },
    ],
  },
  {
    id: 4,
    slug: 'orange-is-the-new-black',
    img: 'https://static.tvmaze.com/uploads/images/medium_portrait/40/100577.jpg',
    title: 'Orange is the new black',
    description: 'Drama, gossip, test your knowledge of our favorite Wisteria Lane\'s desperate housewives !',
    questions: [
      {
        id: 0,
        questionTitle: 'yfyg985  ?',
        responses: [
          {
            id: 1,
            responseTitle: 'Julianna Margulies',
          },
          {
            id: 2,
            responseTitle: 'Christine Baranski',
          },
          {
            id: 3,
            responseTitle: 'Archie Panjabi',
          },
        ],
        correctAnswer: 'Julianna Margulies',
      },
      {
        id: 1,
        questionTitle: 'drfygtuhij ?',
        responses: [
          {
            id: 1,
            responseTitle: '6',
          },
          {
            id: 2,
            responseTitle: '7',
          },
          {
            id: 3,
            responseTitle: '8',
          },
        ],
        correctAnswer: '7',
      },
      {
        id: 2,
        questionTitle: '4952',
        responses: [
          {
            id: 1,
            responseTitle: '496512',
          },
          {
            id: 2,
            responseTitle: '864',
          },
          {
            id: 3,
            responseTitle: 'qs',
          },
        ],
        correctAnswer: '496512',
      },
    ],
  },
  {
    id: 5,
    slug: 'downton-abbey',
    img: 'https://static.tvmaze.com/uploads/images/medium_portrait/1/4601.jpg',
    title: 'Downton Abbey',
    description: 'Drama, gossip, test your knowledge of our favorite Wisteria Lane\'s desperate housewives !',
    questions: [
      {
        id: 0,
        questionTitle: 'yfyg985  ?',
        responses: [
          {
            id: 1,
            responseTitle: 'Julianna Margulies',
          },
          {
            id: 2,
            responseTitle: 'Christine Baranski',
          },
          {
            id: 3,
            responseTitle: 'Archie Panjabi',
          },
        ],
        correctAnswer: 'Julianna Margulies',
      },
      {
        id: 1,
        questionTitle: 'drfygtuhij ?',
        responses: [
          {
            id: 1,
            responseTitle: '6',
          },
          {
            id: 2,
            responseTitle: '7',
          },
          {
            id: 3,
            responseTitle: '8',
          },
        ],
        correctAnswer: '7',
      },
      {
        id: 2,
        questionTitle: '4952',
        responses: [
          {
            id: 1,
            responseTitle: '496512',
          },
          {
            id: 2,
            responseTitle: '864',
          },
          {
            id: 3,
            responseTitle: 'qs',
          },
        ],
        correctAnswer: '496512',
      },
    ],
  },
  {
    id: 6,
    slug: 'the-simpsons',
    img: 'https://static.tvmaze.com/uploads/images/medium_portrait/61/153516.jpg',
    title: 'The Simpsons',
    description: 'Drama, gossip, test your knowledge of our favorite Wisteria Lane\'s desperate housewives !',
    questions: [
      {
        id: 0,
        questionTitle: 'yfyg985  ?',
        responses: [
          {
            id: 1,
            responseTitle: 'Julianna Margulies',
          },
          {
            id: 2,
            responseTitle: 'Christine Baranski',
          },
          {
            id: 3,
            responseTitle: 'Archie Panjabi',
          },
        ],
        correctAnswer: 'Julianna Margulies',
      },
      {
        id: 1,
        questionTitle: 'drfygtuhij ?',
        responses: [
          {
            id: 1,
            responseTitle: '6',
          },
          {
            id: 2,
            responseTitle: '7',
          },
          {
            id: 3,
            responseTitle: '8',
          },
        ],
        correctAnswer: '7',
      },
      {
        id: 2,
        questionTitle: '4952',
        responses: [
          {
            id: 1,
            responseTitle: '496512',
          },
          {
            id: 2,
            responseTitle: '864',
          },
          {
            id: 3,
            responseTitle: 'qs',
          },
        ],
        correctAnswer: '496512',
      },
    ],
  },
  {
    id: 7,
    slug: 'the-adventures-of-tom-sawyer',
    img: 'https://static.tvmaze.com/uploads/images/medium_portrait/9/24770.jpg',
    title: 'The Adventures of Tom Sawyer',
    description: 'Drama, gossip, test your knowledge of our favorite Wisteria Lane\'s desperate housewives !',
    questions: [
      {
        id: 0,
        questionTitle: 'yfyg985  ?',
        responses: [
          {
            id: 1,
            responseTitle: 'Julianna Margulies',
          },
          {
            id: 2,
            responseTitle: 'Christine Baranski',
          },
          {
            id: 3,
            responseTitle: 'Archie Panjabi',
          },
        ],
        correctAnswer: 'Julianna Margulies',
      },
      {
        id: 1,
        questionTitle: 'drfygtuhij ?',
        responses: [
          {
            id: 1,
            responseTitle: '6',
          },
          {
            id: 2,
            responseTitle: '7',
          },
          {
            id: 3,
            responseTitle: '8',
          },
        ],
        correctAnswer: '7',
      },
      {
        id: 2,
        questionTitle: '4952',
        responses: [
          {
            id: 1,
            responseTitle: '496512',
          },
          {
            id: 2,
            responseTitle: '864',
          },
          {
            id: 3,
            responseTitle: 'qs',
          },
        ],
        correctAnswer: '496512',
      },
    ],
  },
  {
    id: 8,
    slug: 'malcolm-in-the-mddle',
    img: 'https://static.tvmaze.com/uploads/images/medium_portrait/4/11763.jpg',
    title: 'Malcolm in the Middle',
    description: 'Drama, gossip, test your knowledge of our favorite Wisteria Lane\'s desperate housewives !',
    questions: [
      {
        id: 0,
        questionTitle: 'yfyg985  ?',
        responses: [
          {
            id: 1,
            responseTitle: 'Julianna Margulies',
          },
          {
            id: 2,
            responseTitle: 'Christine Baranski',
          },
          {
            id: 3,
            responseTitle: 'Archie Panjabi',
          },
        ],
        correctAnswer: 'Julianna Margulies',
      },
      {
        id: 1,
        questionTitle: 'drfygtuhij ?',
        responses: [
          {
            id: 1,
            responseTitle: '6',
          },
          {
            id: 2,
            responseTitle: '7',
          },
          {
            id: 3,
            responseTitle: '8',
          },
        ],
        correctAnswer: '7',
      },
      {
        id: 2,
        questionTitle: '4952',
        responses: [
          {
            id: 1,
            responseTitle: '496512',
          },
          {
            id: 2,
            responseTitle: '864',
          },
          {
            id: 3,
            responseTitle: 'qs',
          },
        ],
        correctAnswer: '496512',
      },
    ],
  },
  {
    id: 9,
    slug: 'glee',
    img: 'https://static.tvmaze.com/uploads/images/original_untouched/356/890803.jpg',
    title: 'Glee',
    description: 'Drama, gossip, test your knowledge of our favorite Wisteria Lane\'s desperate housewives !',
    questions: [
      {
        id: 0,
        questionTitle: 'yfyg985  ?',
        responses: [
          {
            id: 1,
            responseTitle: 'Julianna Margulies',
          },
          {
            id: 2,
            responseTitle: 'Christine Baranski',
          },
          {
            id: 3,
            responseTitle: 'Archie Panjabi',
          },
        ],
        correctAnswer: 'Julianna Margulies',
      },
      {
        id: 1,
        questionTitle: 'drfygtuhij ?',
        responses: [
          {
            id: 1,
            responseTitle: '6',
          },
          {
            id: 2,
            responseTitle: '7',
          },
          {
            id: 3,
            responseTitle: '8',
          },
        ],
        correctAnswer: '7',
      },
      {
        id: 2,
        questionTitle: '4952',
        responses: [
          {
            id: 1,
            responseTitle: '496512',
          },
          {
            id: 2,
            responseTitle: '864',
          },
          {
            id: 3,
            responseTitle: 'qs',
          },
        ],
        correctAnswer: '496512',
      },
    ],
  },
];

export default quizList;
