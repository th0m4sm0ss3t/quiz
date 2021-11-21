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
        questionTitle: 'What is the name of the TV show of which The Good Fight is a spin off ?',
        responses: [
          {
            id: 1,
            responseTitle: 'The Good Wife',
          },
          {
            id: 2,
            responseTitle: 'The Good Lawyer',
          },
          {
            id: 3,
            responseTitle: 'The Good Life',
          },
        ],
        correctAnswer: 'The Good Wife',
      },
      {
        id: 1,
        questionTitle: 'Maia Rindell is related to Diane Lockhart. In which way ?',
        responses: [
          {
            id: 1,
            responseTitle: 'She is Diane\'s daughter.',
          },
          {
            id: 2,
            responseTitle: 'She is Diane\'s goddaughter.',
          },
          {
            id: 3,
            responseTitle: 'She is Diane\'s sister.',
          },
        ],
        correctAnswer: 'She is Diane\'s goddaughter.',
      },
      {
        id: 2,
        questionTitle: 'The firm set in The Good Fight, is known to be a prestigious ... firm.',
        responses: [
          {
            id: 1,
            responseTitle: 'African American–owned',
          },
          {
            id: 2,
            responseTitle: 'Female-owned',
          },
          {
            id: 3,
            responseTitle: 'Disabled-own',
          },
        ],
        correctAnswer: 'African American–owned',
      },
      {
        id: 3,
        questionTitle: 'Who are the investigators of Reddick, Boseman & Lockhart ?',
        responses: [
          {
            id: 1,
            responseTitle: 'Kalinda Sharma & Blake Calamar',
          },
          {
            id: 2,
            responseTitle: 'Kalinda Sharma & Marissa Gold',
          },
          {
            id: 3,
            responseTitle: 'Marissa Gold & Jay Dipersia',
          },
        ],
        correctAnswer: 'Marissa Gold & Jay Dipersia',
      },
      {
        id: 4,
        questionTitle: 'Which character suffers from long covid and hallucinations ?',
        responses: [
          {
            id: 1,
            responseTitle: 'Jay Dipersia',
          },
          {
            id: 2,
            responseTitle: 'Liz Reddick',
          },
          {
            id: 3,
            responseTitle: 'Adrian Boseman',
          },
        ],
        correctAnswer: 'Jay Dipersia',
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
        questionTitle: 'The TV show starts with a tragic event, which one ?',
        responses: [
          {
            id: 1,
            responseTitle: 'A murder',
          },
          {
            id: 2,
            responseTitle: 'A suicide',
          },
          {
            id: 3,
            responseTitle: 'A kidnapping',
          },
        ],
        correctAnswer: 'A suicide',
      },
      {
        id: 1,
        questionTitle: 'Who created Desperate Housewives ?',
        responses: [
          {
            id: 1,
            responseTitle: 'Marc Cherry',
          },
          {
            id: 2,
            responseTitle: 'Ryan Murphy',
          },
          {
            id: 3,
            responseTitle: 'Joss Whedon',
          },
        ],
        correctAnswer: 'Marc Cherry',
      },
      {
        id: 2,
        questionTitle: 'In which fictionnal street is set the show ?',
        responses: [
          {
            id: 1,
            responseTitle: 'Wisteria Lane',
          },
          {
            id: 2,
            responseTitle: 'Fairview',
          },
          {
            id: 3,
            responseTitle: 'Eagle State',
          },
        ],
        correctAnswer: 'Wisteria Lane',
      },
      {
        id: 3,
        questionTitle: 'With wich character\'s voice all episodes start & end with ?',
        responses: [
          {
            id: 1,
            responseTitle: 'Lynette Scavo',
          },
          {
            id: 2,
            responseTitle: 'Mary Alice Young',
          },
          {
            id: 3,
            responseTitle: 'Bree Van de Kamp',
          },
        ],
        correctAnswer: 'Mary Alice Young',
      },
      {
        id: 4,
        questionTitle: 'Who are the 4 central characters of the show ?',
        responses: [
          {
            id: 1,
            responseTitle: 'Susan Mayer, Edie Britt, Bree Van de Kamp & Gabrielle Solis',
          },
          {
            id: 2,
            responseTitle: 'Betty Applewhite, Edie Britt, Bree Van de Kamp &  Katherine Mayfair',
          },
          {
            id: 3,
            responseTitle: 'Susan Mayer, Lynette Scavo, Bree Van de Kamp & Gabrielle Solis',
          },
        ],
        correctAnswer: 'Susan Mayer, Lynette Scavo, Bree Van de Kamp & Gabrielle Solis',
      },
      {
        id: 5,
        questionTitle: 'With wich character Gabrielle Solis has an affair in season 1 ?',
        responses: [
          {
            id: 1,
            responseTitle: 'Orson Hodge',
          },
          {
            id: 2,
            responseTitle: 'John Rowland',
          },
          {
            id: 3,
            responseTitle: 'Dave Williams',
          },
        ],
        correctAnswer: 'John Rowland',
      },
      {
        id: 6,
        questionTitle: 'The fifth season has a time period jumping. How many years ?',
        responses: [
          {
            id: 1,
            responseTitle: '5 years',
          },
          {
            id: 2,
            responseTitle: '3 years',
          },
          {
            id: 3,
            responseTitle: '10 years',
          },
        ],
        correctAnswer: '5 years',
      },
      {
        id: 7,
        questionTitle: 'Lynette\'s kids have a particular sign. Wich one ?',
        responses: [
          {
            id: 1,
            responseTitle: 'They are all boys',
          },
          {
            id: 2,
            responseTitle: 'Their names all start with the letter "P"',
          },
          {
            id: 3,
            responseTitle: 'They are quadruplets',
          },
        ],
        correctAnswer: 'Their names all start with the letter "P"',
      },
      {
        id: 8,
        questionTitle: 'One of the four main characters has a drinking problem. Wich one ?',
        responses: [
          {
            id: 1,
            responseTitle: 'Bree Van de Kamp',
          },
          {
            id: 2,
            responseTitle: 'Susan Mayer',
          },
          {
            id: 3,
            responseTitle: 'Gabrielle Solis',
          },
        ],
        correctAnswer: 'Bree Van de Kamp',
      },
      {
        id: 9,
        questionTitle: 'Wich well known artist composed the Theme music of Desperate Housewives ?',
        responses: [
          {
            id: 1,
            responseTitle: 'Hans Zimmer',
          },
          {
            id: 2,
            responseTitle: 'Danny Elfman',
          },
          {
            id: 3,
            responseTitle: 'John Williams',
          },
        ],
        correctAnswer: 'Danny Elfman',
      },
    ],
  },
  {
    id: 4,
    slug: 'orange-is-the-new-black',
    img: 'https://static.tvmaze.com/uploads/images/medium_portrait/40/100577.jpg',
    title: 'Orange is the new black',
    description: 'Test your knowledge of our favorite Litchfield inmates !',
    questions: [
      {
        id: 0,
        questionTitle: 'OITNB is based on P. Kerman experience. Wich character of the show is based on her ?',
        responses: [
          {
            id: 1,
            responseTitle: 'Poussey Washington',
          },
          {
            id: 2,
            responseTitle: 'Piper Chapman',
          },
          {
            id: 3,
            responseTitle: 'Polly Harper',
          },
        ],
        correctAnswer: 'Julianna Margulies',
      },
      {
        id: 1,
        questionTitle: 'Who performs the show\'s theme song "You\'ve Got Time" ?',
        responses: [
          {
            id: 1,
            responseTitle: 'Regina Spektor',
          },
          {
            id: 2,
            responseTitle: 'Kelly Clarkson',
          },
          {
            id: 3,
            responseTitle: 'SIA',
          },
        ],
        correctAnswer: 'Regina Spektor',
      },
      {
        id: 2,
        questionTitle: 'What was the nickname given to Piper by Suzanne in season 1 ?',
        responses: [
          {
            id: 1,
            responseTitle: 'Dandelion',
          },
          {
            id: 2,
            responseTitle: 'Daisy',
          },
          {
            id: 3,
            responseTitle: 'Sunflower',
          },
        ],
        correctAnswer: 'Dandelion',
      },
      {
        id: 3,
        questionTitle: 'In season 1, Piper is at conflict with Red. What does she give her to make up with her ?',
        responses: [
          {
            id: 1,
            responseTitle: 'Money',
          },
          {
            id: 2,
            responseTitle: 'A lotion to help Red\'s back problems',
          },
          {
            id: 3,
            responseTitle: 'Drug',
          },
        ],
        correctAnswer: 'A lotion to help Red\'s back problems',
      },
      {
        id: 4,
        questionTitle: 'In season 1 Sophia Burset swallows the head of a bobblehead dog, why ?',
        responses: [
          {
            id: 1,
            responseTitle: 'The prison cut in half her dosages of estrogen',
          },
          {
            id: 2,
            responseTitle: 'The prison wants to put her in the SHU',
          },
          {
            id: 3,
            responseTitle: 'The prison wants removes her from the prison\'s hairdressing room',
          },
        ],
        correctAnswer: 'The prison cut in half her dosages of estrogen',
      },
      {
        id: 5,
        questionTitle: 'Which surgery undergoes character Tiffany "Pennsatucky" Doggett ?',
        responses: [
          {
            id: 1,
            responseTitle: 'Oral surgery (teeth)',
          },
          {
            id: 2,
            responseTitle: 'Eyes surgery',
          },
          {
            id: 3,
            responseTitle: 'Leg surgery',
          },
        ],
        correctAnswer: 'Oral surgery (teeth)',
      },
      {
        id: 6,
        questionTitle: 'Which inmate was released from Litchfield, but later on comes back into the prison ?',
        responses: [
          {
            id: 1,
            responseTitle: 'Dayanara "Daya" Diaz',
          },
          {
            id: 2,
            responseTitle: 'Caroline "Big Boo" Black',
          },
          {
            id: 3,
            responseTitle: 'Tasha "Taystee" Jefferson',
          },
        ],
        correctAnswer: 'Tasha "Taystee" Jefferson',
      },
      {
        id: 7,
        questionTitle: 'Which character breaks off her relationship with Nicky after feeling that she has been cheating on her "fiancé" ?',
        responses: [
          {
            id: 1,
            responseTitle: 'Alex Vause',
          },
          {
            id: 2,
            responseTitle: 'Lorna Morello',
          },
          {
            id: 3,
            responseTitle: 'Cindy Hayes',
          },
        ],
        correctAnswer: 'Lorna Morello',
      },
      {
        id: 7,
        questionTitle: 'Which inmate is Marisol "Flaca" Gonzales\'s bestfriend ?',
        responses: [
          {
            id: 1,
            responseTitle: 'Aleida Diaz',
          },
          {
            id: 2,
            responseTitle: 'Gloria Mendoza',
          },
          {
            id: 3,
            responseTitle: 'Maritza Ramos',
          },
        ],
        correctAnswer: 'Maritza Ramos',
      },
      {
        id: 8,
        questionTitle: 'Which Corrections Officer at Litchfield is called "Pornstache" by the inmates ?',
        responses: [
          {
            id: 1,
            responseTitle: 'George Mendez',
          },
          {
            id: 2,
            responseTitle: 'John Bennett',
          },
          {
            id: 3,
            responseTitle: 'Sam Healy',
          },
        ],
        correctAnswer: 'George Mendez',
      },
      {
        id: 9,
        questionTitle: 'Which event lead to the prison`s riot ?',
        responses: [
          {
            id: 1,
            responseTitle: 'John Bennett\'s death',
          },
          {
            id: 2,
            responseTitle: 'Poussey\'s death',
          },
          {
            id: 3,
            responseTitle: 'Norma Romano\'s death',
          },
        ],
        correctAnswer: 'Poussey\'s death',
      },
    ],
  },
  {
    id: 5,
    slug: 'downton-abbey',
    img: 'https://static.tvmaze.com/uploads/images/medium_portrait/1/4601.jpg',
    title: 'Downton Abbey',
    description: 'Test your knowledge of Downton Abbey\'s universe !',
    questions: [
      {
        id: 0,
        questionTitle: 'In wich country is set Downton Abbey ?',
        responses: [
          {
            id: 1,
            responseTitle: 'In the USA',
          },
          {
            id: 2,
            responseTitle: 'In the UK',
          },
          {
            id: 3,
            responseTitle: 'In Spain',
          },
        ],
        correctAnswer: 'In the UK',
      },
      {
        id: 1,
        questionTitle: 'The plot of season 1 starts on the day of a famous event. Wich one ?',
        responses: [
          {
            id: 1,
            responseTitle: 'The sinking of the Titanic',
          },
          {
            id: 2,
            responseTitle: 'The beginning of World War 1',
          },
          {
            id: 3,
            responseTitle: 'The beginning of World War 2',
          },
        ],
        correctAnswer: 'The sinking of the Titanic',
      },
      {
        id: 2,
        questionTitle: 'How are called the Domestics ?',
        responses: [
          {
            id: 1,
            responseTitle: 'The "Downstairs"',
          },
          {
            id: 2,
            responseTitle: 'The "Little People"',
          },
          {
            id: 3,
            responseTitle: 'The "Help"',
          },
        ],
        correctAnswer: 'The "Downstairs"',
      },
      {
        id: 3,
        questionTitle: 'How many children does the Crawley\'s family count ?',
        responses: [
          {
            id: 1,
            responseTitle: '4 daughters',
          },
          {
            id: 2,
            responseTitle: '2 daughters',
          },
          {
            id: 3,
            responseTitle: '3 daughters',
          },
        ],
        correctAnswer: '3 daughters',
      },
      {
        id: 4,
        questionTitle: 'What was Tom Branson\'s job at Downton Abbey before he marrys Lady Sybil ?',
        responses: [
          {
            id: 1,
            responseTitle: 'He was the Crawley family chauffeur',
          },
          {
            id: 2,
            responseTitle: 'He was the Crawley family cook',
          },
          {
            id: 3,
            responseTitle: 'He was the Crawley family gardener',
          },
        ],
        correctAnswer: 'He was the Crawley family chauffeur',
      },
      {
        id: 5,
        questionTitle: 'Wich member of the Crawley family is famous for their quotes ?',
        responses: [
          {
            id: 1,
            responseTitle: 'Cora Crawley',
          },
          {
            id: 2,
            responseTitle: 'Robert Crawley',
          },
          {
            id: 3,
            responseTitle: 'Violet Crawley',
          },
        ],
        correctAnswer: 'Violet Crawley',
      },
      {
        id: 6,
        questionTitle: 'Who marry John Bates ?',
        responses: [
          {
            id: 1,
            responseTitle: 'Anna May Smith',
          },
          {
            id: 2,
            responseTitle: 'Sarah O\'Brien',
          },
          {
            id: 3,
            responseTitle: 'Daisy Mason',
          },
        ],
        correctAnswer: 'Anna May Smith',
      },
      {
        id: 7,
        questionTitle: 'Who\'s the cook at Downton Abbey ?',
        responses: [
          {
            id: 1,
            responseTitle: 'Daisy Mason',
          },
          {
            id: 2,
            responseTitle: 'Beryl Patmore',
          },
          {
            id: 3,
            responseTitle: 'Anna May Smith',
          },
        ],
        correctAnswer: 'Beryl Patmore',
      },
      {
        id: 8,
        questionTitle: 'Which daughter of the family does Carson have a special affection for ?',
        responses: [
          {
            id: 1,
            responseTitle: 'Lady Mary',
          },
          {
            id: 2,
            responseTitle: 'Lady Edith',
          },
          {
            id: 3,
            responseTitle: 'Lady Sybil',
          },
        ],
        correctAnswer: 'Lady Mary',
      },
      {
        id: 9,
        questionTitle: 'During Cora\'s pregnancy, Miss O\'Brien deliberately lashes out on her. How ?',
        responses: [
          {
            id: 1,
            responseTitle: 'By poisoning her food',
          },
          {
            id: 2,
            responseTitle: 'By attacking her',
          },
          {
            id: 3,
            responseTitle: 'By moving a piece of dropped soap from under the tub for Cora to slip on',
          },
        ],
        correctAnswer: 'Lady Mary',
      },
    ],
  },
  {
    id: 6,
    slug: 'the-simpsons',
    img: 'https://static.tvmaze.com/uploads/images/medium_portrait/61/153516.jpg',
    title: 'The Simpsons',
    description: 'Test your knowledge of the most famous Tv Show family !',
    questions: [
      {
        id: 0,
        questionTitle: 'Wich kid is the older ?',
        responses: [
          {
            id: 1,
            responseTitle: 'Maggie Simpson',
          },
          {
            id: 2,
            responseTitle: 'Lisa Simpson',
          },
          {
            id: 3,
            responseTitle: 'Bart Simpson',
          },
        ],
        correctAnswer: 'Bart Simpson',
      },
      {
        id: 1,
        questionTitle: 'In what year did The Simpsons start being broadcasting ?',
        responses: [
          {
            id: 1,
            responseTitle: '1989',
          },
          {
            id: 2,
            responseTitle: '1999',
          },
          {
            id: 3,
            responseTitle: '1992',
          },
        ],
        correctAnswer: '1989',
      },
      {
        id: 2,
        questionTitle: 'Who created The Simpsons ?',
        responses: [
          {
            id: 1,
            responseTitle: 'Matt Groening',
          },
          {
            id: 2,
            responseTitle: 'Trey Parker',
          },
          {
            id: 3,
            responseTitle: 'Justin Roiland',
          },
        ],
        correctAnswer: 'Matt Groening',
      },
      {
        id: 3,
        questionTitle: 'Where is located the show ?',
        responses: [
          {
            id: 1,
            responseTitle: 'In Springfield',
          },
          {
            id: 2,
            responseTitle: 'In Summerfield',
          },
          {
            id: 3,
            responseTitle: 'In Winterfield',
          },
        ],
        correctAnswer: 'In Springfield',
      },
      {
        id: 4,
        questionTitle: 'How many related movie(s) exist ?',
        responses: [
          {
            id: 1,
            responseTitle: '2',
          },
          {
            id: 2,
            responseTitle: '0',
          },
          {
            id: 3,
            responseTitle: '1',
          },
        ],
        correctAnswer: '1',
      },
      {
        id: 5,
        questionTitle: 'What is the name of the fast food chain in the series created by Krusty the Clown ?',
        responses: [
          {
            id: 1,
            responseTitle: 'Krusty Burger',
          },
          {
            id: 2,
            responseTitle: 'Krusty BBQ',
          },
          {
            id: 3,
            responseTitle: 'Krusty HotDog',
          },
        ],
        correctAnswer: 'Krusty Burger',
      },
      {
        id: 6,
        questionTitle: 'What instrument does Lisa play ?',
        responses: [
          {
            id: 1,
            responseTitle: 'The saxophone',
          },
          {
            id: 2,
            responseTitle: 'The trumpet',
          },
          {
            id: 3,
            responseTitle: 'The flute',
          },
        ],
        correctAnswer: 'The saxophone',
      },
      {
        id: 7,
        questionTitle: 'Where does Homer work ?',
        responses: [
          {
            id: 1,
            responseTitle: 'The nuclear power plant',
          },
          {
            id: 2,
            responseTitle: 'Moe\'s Tavern',
          },
          {
            id: 3,
            responseTitle: 'Springfield Elementary School',
          },
        ],
        correctAnswer: 'The nuclear power plant',
      },
      {
        id: 8,
        questionTitle: 'What sound does Homer is known for ?',
        responses: [
          {
            id: 1,
            responseTitle: '"Wubba lubba dub dub"',
          },
          {
            id: 2,
            responseTitle: '"D\'oh !"',
          },
          {
            id: 3,
            responseTitle: '"M\'Kay..."',
          },
        ],
        correctAnswer: 'D\'oh!',
      },
    ],
  },
  {
    id: 7,
    slug: 'the-adventures-of-tom-sawyer',
    img: 'https://static.tvmaze.com/uploads/images/medium_portrait/9/24770.jpg',
    title: 'The Adventures of Tom Sawyer',
    description: 'Adventures, pirates, test your knowledge of Tom Sawyer !',
    questions: [
      {
        id: 0,
        questionTitle: 'Who wrote the novel on which the story is based ?',
        responses: [
          {
            id: 1,
            responseTitle: 'Robert Louis Stevenson',
          },
          {
            id: 2,
            responseTitle: 'Mark Twain',
          },
          {
            id: 3,
            responseTitle: 'Jules Verne',
          },
        ],
        correctAnswer: 'Mark Twain',
      },
      {
        id: 1,
        questionTitle: 'Where does the story take place ?',
        responses: [
          {
            id: 1,
            responseTitle: 'Saint-Petersburg, Missouri',
          },
          {
            id: 2,
            responseTitle: 'Springfield, Missouri',
          },
          {
            id: 3,
            responseTitle: 'Kansas-City, Missouri',
          },
        ],
        correctAnswer: 'Saint-Petersburg, Missouri',
      },
      {
        id: 2,
        questionTitle: 'At the beginnig of the stoy Tom is punished, what must he repaint ?',
        responses: [
          {
            id: 1,
            responseTitle: 'A palisade',
          },
          {
            id: 2,
            responseTitle: 'A wall',
          },
          {
            id: 3,
            responseTitle: 'A chair',
          },
        ],
        correctAnswer: 'A palisade',
      },
      {
        id: 2,
        questionTitle: 'Who is Tom\'s bestfriend ?',
        responses: [
          {
            id: 1,
            responseTitle: 'Joe Harper',
          },
          {
            id: 2,
            responseTitle: 'Ben Rodgers',
          },
          {
            id: 3,
            responseTitle: 'Huckleberry Finn',
          },
        ],
        correctAnswer: 'Huckleberry Finn',
      },
      {
        id: 3,
        questionTitle: 'Which character arrives in a hot air balloon ?',
        responses: [
          {
            id: 1,
            responseTitle: 'Arthur O\'Connor',
          },
          {
            id: 2,
            responseTitle: 'Mike',
          },
          {
            id: 3,
            responseTitle: 'Jim Hollis',
          },
        ],
        correctAnswer: 'Arthur O\'Connor',
      },
      {
        id: 4,
        questionTitle: 'Who is the story\'s vilain ?',
        responses: [
          {
            id: 1,
            responseTitle: 'Mr. Dobbins',
          },
          {
            id: 2,
            responseTitle: 'Injun Joe',
          },
          {
            id: 3,
            responseTitle: 'Muff Potter',
          },
        ],
        correctAnswer: 'Injun Joe',
      },
    ],
  },
  {
    id: 8,
    slug: 'malcolm-in-the-mddle',
    img: 'https://static.tvmaze.com/uploads/images/medium_portrait/4/11763.jpg',
    title: 'Malcolm in the Middle',
    description: 'Test your knowledge of the craziest family of America !',
    questions: [
      {
        id: 0,
        questionTitle: 'What is the family\'s lastname  ?',
        responses: [
          {
            id: 1,
            responseTitle: 'Parker',
          },
          {
            id: 2,
            responseTitle: 'Smith',
          },
          {
            id: 3,
            responseTitle: 'We don\'t know',
          },
        ],
        correctAnswer: 'We don\'t know',
      },
      {
        id: 1,
        questionTitle: 'Malcolm is placed in a class for gifted student. What is the class name ?',
        responses: [
          {
            id: 1,
            responseTitle: 'Krelboynes',
          },
          {
            id: 2,
            responseTitle: 'Genius',
          },
          {
            id: 3,
            responseTitle: 'Brains',
          },
        ],
        correctAnswer: 'Krelboynes',
      },
      {
        id: 2,
        questionTitle: 'Wich character is sent to a military school ?',
        responses: [
          {
            id: 1,
            responseTitle: 'Francis',
          },
          {
            id: 2,
            responseTitle: 'Reese',
          },
          {
            id: 3,
            responseTitle: 'Jamie',
          },
        ],
        correctAnswer: 'Francis',
      },
      {
        id: 3,
        questionTitle: 'Where does Lois work ?',
        responses: [
          {
            id: 1,
            responseTitle: 'At Kmart',
          },
          {
            id: 2,
            responseTitle: 'At Lucky Aide drugstore',
          },
          {
            id: 3,
            responseTitle: 'At Walmart',
          },
        ],
        correctAnswer: 'At Lucky Aide drugstore',
      },
      {
        id: 4,
        questionTitle: 'What is Dewey good at ?',
        responses: [
          {
            id: 1,
            responseTitle: 'Music',
          },
          {
            id: 2,
            responseTitle: 'Acting',
          },
          {
            id: 3,
            responseTitle: 'Singing',
          },
        ],
        correctAnswer: 'Music',
      },
      {
        id: 5,
        questionTitle: 'In Season 2, Hal suddenly resigns to devote himself to what he considers his primary vocation. What is it ?',
        responses: [
          {
            id: 1,
            responseTitle: 'Painting',
          },
          {
            id: 2,
            responseTitle: 'Athletic walking',
          },
          {
            id: 3,
            responseTitle: 'Bowling',
          },
        ],
        correctAnswer: 'Painting',
      },
      {
        id: 6,
        questionTitle: 'Who\'s Piama Tananahaakna ?',
        responses: [
          {
            id: 1,
            responseTitle: 'A friend of Lois',
          },
          {
            id: 2,
            responseTitle: 'Francis\' wife',
          },
          {
            id: 3,
            responseTitle: 'Reese\'s girlfriend',
          },
        ],
        correctAnswer: 'Francis\' wife',
      },
      {
        id: 7,
        questionTitle: 'What is the name of the man in charge of the Marlin Academy military school ?',
        responses: [
          {
            id: 1,
            responseTitle: 'Commander Spangler',
          },
          {
            id: 2,
            responseTitle: 'Commander Spankler',
          },
          {
            id: 3,
            responseTitle: 'Commander Strangler',
          },
        ],
        correctAnswer: 'Commander Spangler',
      },
      {
        id: 8,
        questionTitle: 'Who are the owners of the ranch-hotel named "Grotto" ?',
        responses: [
          {
            id: 1,
            responseTitle: 'Otto & Gretchen Mannkusser',
          },
          {
            id: 2,
            responseTitle: 'Otto & Greta Mannkusser',
          },
          {
            id: 3,
            responseTitle: 'Oliver & Gretchen Mannkusser',
          },
        ],
        correctAnswer: 'Otto & Gretchen Mannkusser',
      },
      {
        id: 9,
        questionTitle: 'In season 3, Francis leaves military school. Where is he going ?',
        responses: [
          {
            id: 1,
            responseTitle: 'In Canada',
          },
          {
            id: 2,
            responseTitle: 'In Alaska',
          },
          {
            id: 3,
            responseTitle: 'To his parent\'s house',
          },
        ],
        correctAnswer: 'In Alaska',
      },
    ],
  },
  {
    id: 9,
    slug: 'glee',
    img: 'https://static.tvmaze.com/uploads/images/original_untouched/356/890803.jpg',
    title: 'Glee',
    description: 'Music, hight school, test your knowledge of our favorite Lima students !',
    questions: [
      {
        id: 0,
        questionTitle: 'Who created Glee ?',
        responses: [
          {
            id: 1,
            responseTitle: 'Ian Brennan, Brad Falchuk, Ryan Murphy',
          },
          {
            id: 2,
            responseTitle: 'Mark Stone & Trey Parker',
          },
          {
            id: 3,
            responseTitle: 'Marc Cherry',
          },
        ],
        correctAnswer: 'Ian Brennan, Brad Falchuk, Ryan Murphy',
      },
      {
        id: 1,
        questionTitle: 'In what year did the series first air ?',
        responses: [
          {
            id: 1,
            responseTitle: '2009',
          },
          {
            id: 2,
            responseTitle: '2010',
          },
          {
            id: 3,
            responseTitle: '2013',
          },
        ],
        correctAnswer: '2009',
      },
      {
        id: 2,
        questionTitle: 'What is the name of the person in charge of glee ?',
        responses: [
          {
            id: 1,
            responseTitle: 'Sue Sylvester',
          },
          {
            id: 2,
            responseTitle: 'Will Schuester',
          },
          {
            id: 3,
            responseTitle: 'Jesse St. James',
          },
        ],
        correctAnswer: 'Will Schuester',
      },
      {
        id: 3,
        questionTitle: 'Kurt had to change school because he was bullied. Which school was he transferred to ?',
        responses: [
          {
            id: 1,
            responseTitle: 'The Dalton Academy',
          },
          {
            id: 2,
            responseTitle: 'Carmel High',
          },
          {
            id: 3,
            responseTitle: 'NYADA',
          },
        ],
        correctAnswer: 'The Dalton Academy',
      },
      {
        id: 4,
        questionTitle: 'Who plays Carmen Tibideaux, the director of NYADA ?',
        responses: [
          {
            id: 1,
            responseTitle: 'Demi Lovato',
          },
          {
            id: 2,
            responseTitle: 'Kristin Chenoweth',
          },
          {
            id: 3,
            responseTitle: 'Whoopi Goldberg',
          },
        ],
        correctAnswer: 'Whoopi Goldberg',
      },
      {
        id: 5,
        questionTitle: 'In season 5, one actor of the show wrote the script of the episode "Old Dogs, New Tricks". Who ?',
        responses: [
          {
            id: 1,
            responseTitle: 'Chris Colfer',
          },
          {
            id: 2,
            responseTitle: 'Darren Criss',
          },
          {
            id: 3,
            responseTitle: 'Cory Monteith',
          },
        ],
        correctAnswer: 'Chris Colfer',
      },
      {
        id: 6,
        questionTitle: 'Which song is the anthem of the series ?',
        responses: [
          {
            id: 1,
            responseTitle: 'We are the champions',
          },
          {
            id: 2,
            responseTitle: 'Don\'t Stop Believin',
          },
          {
            id: 3,
            responseTitle: 'Teenage Dream',
          },
        ],
        correctAnswer: 'Don\'t Stop Believin',
      },
      {
        id: 7,
        questionTitle: 'What talk-show is host by Brittany S. Pierce ?',
        responses: [
          {
            id: 1,
            responseTitle: '"Fondue for Two"',
          },
          {
            id: 2,
            responseTitle: '"Raclette for Two"',
          },
          {
            id: 3,
            responseTitle: '"Tartiflette for Two"',
          },
        ],
        correctAnswer: '"Fondue for Two"',
      },
      {
        id: 8,
        questionTitle: 'For what reason does Becky Jackson join the Cheerios ?',
        responses: [
          {
            id: 1,
            responseTitle: 'Like Sue Sylvester\'s sister, she has down syndrom',
          },
          {
            id: 2,
            responseTitle: 'She bribes Sue Sylvester',
          },
          {
            id: 3,
            responseTitle: 'She blackmails Sue Sylvester',
          },
        ],
        correctAnswer: 'Like Sue\'s sister, she has down syndrom',
      },
      {
        id: 9,
        questionTitle: 'What is the name by which Elliott Gilbert is introduced ?',
        responses: [
          {
            id: 1,
            responseTitle: '"Awesomechild"',
          },
          {
            id: 2,
            responseTitle: '"Starchild"',
          },
          {
            id: 3,
            responseTitle: '"Heavenchild"',
          },
        ],
        correctAnswer: '"Starchild"',
      },
    ],
  },
];

export default quizList;
