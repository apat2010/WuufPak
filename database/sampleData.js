

const chat = {
  wuufPakId: 1111,
  conversation: [
      {
        profileId: 1234,
        comment: 'Anyone want to get silly at the park today?',
        date: '10 Feb 2021',

      },
      {
        profileId: 2211,
        comment: 'Sorry, I cant. My dad is going for a run. Maybe tomorrow?',
        date: '11 Feb 2021',
      },
      {
        profileId: 3333,
        comment: 'Whats going on People?',
        date: '11 Feb 2021',
      },

    ]
}


const feed = [
  {
    profileId: 12345,
    posts: [
      {
      profileId: 3333,
      body: 'Just had an ice cream at DoggosCream. Delicious! Would recommend',
      date: '13 Feb 2021',
      likes: 10,
      comments: [
        {
          profileId: '2211',
          comment: ' Wow! That sounds amazing. Need to check it out!',
          date: '13 Feb 2021',
          likes: '0',
        },
      ]
    },
    {
      profileId: 4369,
      body: 'Wow! Crazy day at the park! Cant way to go back on Thursday',
      date: '12 Feb 2021',
      likes: 10,
      comments: [
        {
          profileId: '2211',
          comment: ' Wow! That sounds amazing. Need to check it out!',
          date: '13 Feb 2021',
          likes: '0',
        },
      ]
    },
    {
      profileId: 2222,
      body: 'There are squirrels outside! You gotta check this out!',
      date: '11 Feb 2021',
      likes: 10,
      comments: [
        {
          profileId: '2211',
          comment: ' Wow! That sounds amazing. Need to check it out!',
          date: 'TBD',
          likes: '0',
        },
      ]
    },
    {
      profileId: 3333,
      body: 'Do they ever stop watching the bachelor',
      date: '10 Feb 2021',
      likes: 10,
      comments: [
        {
          profileId: '2211',
          comment: ' Wow! That sounds amazing. Need to check it out!',
          date: 'TBD',
          likes: '0',
        },
      ]
    },
    {
      profileId: 5678,
      body: 'Wow! Crazy day at the park! Cant way to go back on Thursday',
      date: '10 Feb 2021',
      likes: 10,
      comments: [
        {
          profileId: '2211',
          comment: ' Wow! That sounds amazing. Need to check it out!',
          date: 'TBD',
          likes: '0',
        },
      ]
    },
    {
      profileId: 1111,
      body: 'Wow! Crazy day at the park! Cant way to go back on Thursday',
      date: '10 Feb 2021',
      likes: 10,
      comments: [
        {
          profileId: '2211',
          comment: ' Wow! That sounds amazing. Need to check it out!',
          date: 'TBD',
          likes: '0',
        },
      ]
    },

  ]
  },
];

 const users = [
  {
    id: 12345,
    username: 'barks4dayz',
    profilePic: 'TBD',
    firstName: 'Ron',
    lastName: 'Johnson',
    email: 'appleTree5@gmail.com',
    city: 'Seattle',
    state: 'WA',
    petsInfo: {
      name: 'Bullet',
      breed: 'German Shepherd',
      age: '1',
      energyLvl: 'Average Joe',
    },
    wuufPakIds: [1111, 2222, 3333],
    currentLoc: {
      latitude: '47.670521',
      longitude: '-122.342198',
    }
  },
  {
    id: 4369,
    username: 'SirBarksAlot',
    profilePic: 'TBD',
    firstName: 'Tami',
    lastName: 'Johnson',
    email: 'appleTree5@gmail.com',
    city: 'Seattle',
    state: 'WA',
    petsInfo: {
      name: 'Ginger',
      breed: 'Australian Shepherd',
      age: '4',
      energyLvl: 'Average Joe',
    },
    wuufPakIds: [2222],
    currentLoc: {
      latitude: '47.670523',
      longitude: '-122.342195',
    }
  },
  {
    id: 2211,
    username: 'pup4Lyfe',
    profilePic: 'TBD',
    firstName: 'Sam',
    lastName: 'Johnson',
    email: 'appleSTree5@gmail.com',
    city: 'Seattle',
    state: 'WA',
    petsInfo: {
      name: 'Roger',
      breed: 'American Staffordshire',
      age: '1',
      energyLvl: 'Cool Cucumber',
    },
    wuufPakIds: [2222],
    currentLoc: {
      latitude: '47.670526',
      longitude: '-122.342196',
    }
  },
  {
    id: 3333,
    username: 'MrNibbles1',
    profilePic: 'TBD',
    firstName: 'Tom',
    lastName: 'Johnson',
    email: 'sappleTree5@gmail.com',
    city: 'Seattle',
    state: 'WA',
    petsInfo: {
      name: 'Scout',
      breed: 'German Shepherd/American Staffordshire',
      age: '2',
      energyLvl: 'Energizer Bunny',
    },
    wuufPakIds: [1111, 2222, 3333],
    currentLoc: {
      latitude: '47.670520',
      longitude: '-122.342197',
    }
  },
  {
    id: 1111,
    username: 'sunsetChaser12',
    profilePic: 'TBD',
    firstName: 'Tina',
    lastName: 'Johnson',
    email: 'sapplesTree5@gmail.com',
    city: 'Seattle',
    state: 'WA',
    petsInfo: {
      name: 'Zion',
      breed: 'Yorkie',
      age: '5',
      energyLvl: 'Energizer Bunny',
    },
    wuufPakIds: [1111],
    currentLoc: {
      latitude: '47.670559',
      longitude: '-122.342188',
    }
  },
  {
    id: 5678,
    username: 'chewwyDude74',
    profilePic: 'TBD',
    firstName: 'Sara',
    lastName: 'Johnson',
    email: 'sappleTree5@gmail.com',
    city: 'Seattle',
    state: 'WA',
    petsInfo: {
      name: 'Arty',
      breed: 'German Shepherd',
      age: '5',
      energyLvl: 'Average Joe',
    },
    wuufPakIds: [1111, 2222, 3333],
    currentLoc: {
      latitude: '47.670559',
      longitude: '-122.342188',
    }
  },
  {
    id: 7777,
    username: 'troubleMaker16',
    profilePic: 'TBD',
    firstName: 'Taylor',
    lastName: 'Johnson',
    email: 'sappleTree5@gmail.com',
    city: 'Seattle',
    state: 'WA',
    petsInfo: {
      name: 'Milo',
      breed: 'Beagle',
      age: '4',
      energyLvl: 'Average Joe',
    },
    wuufPakIds: [1111, 2222],
    currentLoc: {
      latitude: '47.670521',
      longitude: '-122.342198',
    }
  },
  {
    id: 9999,
    username: 'sassyGirl13',
    profilePic: 'TBD',
    firstName: 'Sara',
    lastName: 'Johnson',
    email: 'sappleTree5@gmail.com',
    city: 'Seattle',
    state: 'WA',
    petsInfo: {
      name: 'Penny',
      breed: 'Golden Retriever',
      age: '5',
      energyLvl: 'Average Joe',
    },
    wuufPakIds: [1111, 3333],
    currentLoc: {
      latitude: '47.670525',
      longitude: '-122.342194',
    }
  },
  {
    id: 8888,
    username: 'msSophistication',
    profilePic: 'TBD',
    firstName: 'Sara',
    lastName: 'Johnson',
    email: 'sappleTree5@gmail.com',
    city: 'Seattle',
    state: 'WA',
    petsInfo: {
      name: 'Betty',
      breed: 'Cavalier King Charles Spaniel',
      age: '5',
      energyLvl: 'Cool Cucumber',
    },
    wuufPakIds: [3333],
    currentLoc: {
      latitude: '47.670522',
      longitude: '-122.342197',
    }
  }
 ]

const pak = [
  {
    id: 1111,
    name: 'RowdyBunch',
    profiles: [1234, 2211,3333]
  },
  {
    id: 2222,
    name: 'RowdyBunch',
    profiles: [1234, 2211,3333]
  },
  {
    id: 3333,
    name: 'RowdyBunch',
    profiles: [1234, 2211,3333]
  }
];

module.exports = {chat, feed, users, pak};


