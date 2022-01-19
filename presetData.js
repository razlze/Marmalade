function presetData() {
  console.log('greetings');
  database.ref('company1').set({
    name: 'The Cool Company',
    code: 'JEKSOD',
    interviewers: {
      user1: {
        name: 'Razi',
        lastName: 'Syed'
      },
      user2: {
        name: 'Connie',
        lastName: 'Wang'
      },
      user3: {
        name: 'Jenna',
        lastName: 'Xiao'
      },
      user4: {
        name: 'Victoria',
        lastName: 'Li'
      },
      user5: {
        name: 'Harry',
        lastName: 'Potter'
      },
      user6: {
        name: 'Ron',
        lastName: 'Weasley'
      },
      user7: {
        name: 'Hermione',
        lastName: 'Granger'
      }
    },
    positions: {
      positionA: {
        title: 'Marketing Director',
        desc: '',
        interviewers: ['user1', 'user2', 'user3'],
        candidates: {
          candidate01: {
            name: 'Isaac Newton',
            interviewTime: '',
            notes: '',
            rating: '',
            complete: false,
            chosen: false
          },
          candidate02: {
            name: 'Marie Curie',
            interviewTime: '',
            notes: '',
            rating: '',
            complete: false,
            chosen: false
          },
          candidate03: {
            name: 'Louis Pasteur',
            interviewTime: '',
            notes: '',
            rating: '',
            complete: false,
            chosen: false
          },
          candidate04: {
            name: 'Albert Einstein',
            interviewTime: '',
            notes: '',
            rating: '',
            complete: false,
            chosen: false
          },
          candidate05: {
            name: 'Galileo Galilei',
            interviewTime: '',
            notes: '',
            rating: '',
            complete: false,
            chosen: false
          },
          candidate06: {
            name: 'Charles Darwin',
            interviewTime: '',
            notes: '',
            rating: '',
            complete: false,
            chosen: false
          },
          candidate07: {
            name: 'Nikola Tesla',
            interviewTime: '',
            notes: '',
            rating: '',
            complete: false,
            chosen: false
          }
        }
      },
      positionB: {
        title: 'Graphic Designer',
        desc: '',
        interviewers: ['user4','user5','user6'],
        candidates: {
          candidate01: {
            name: 'Rabindranath Tagore',
            interviewTime: '',
            notes: '',
            rating: '',
            complete: false,
            chosen: false
          },
          candidate02: {
            name: 'Yoko Ono',
            interviewTime: '',
            notes: '',
            rating: '',
            complete: false,
            chosen: false
          },
          candidate03: {
            name: 'Andy Warhol',
            interviewTime: '',
            notes: '',
            rating: '',
            complete: false,
            chosen: false
          },
          candidate04: {
            name: 'Bob Ross',
            interviewTime: '',
            notes: '',
            rating: '',
            complete: false,
            chosen: false
          },
          candidate05: {
            name: 'Gloria Vanderbilt',
            interviewTime: '',
            notes: '',
            rating: '',
            complete: false,
            chosen: false
          },
          candidate06: {
            name: 'Salvador Dali',
            interviewTime: '',
            notes: '',
            rating: '',
            complete: false,
            chosen: false
          },
          candidate07: {
            name: 'Jean-Michel Basquiat',
            interviewTime: '',
            notes: '',
            rating: '',
            complete: false,
            chosen: false
          },
          candidate08: {
            name: 'Claude Monet',
            interviewTime: '',
            notes: '',
            rating: '',
            complete: false,
            chosen: false
          },
          candidate09: {
            name: 'Jackson Pullock',
            interviewTime: '',
            notes: '',
            rating: '',
            complete: false,
            chosen: false
          },
          candidate10: {
            name: "Georgia O'Keeffe",
            interviewTime: '',
            notes: '',
            rating: '',
            complete: false,
            chosen: false
          },
          candidate11: {
            name: 'Diego Rivera',
            interviewTime: '',
            notes: '',
            rating: '',
            complete: false,
            chosen: false
          }
        }
      },
      positionC: {
        title: 'CMO',
        desc: '',
        interviewers: ['user2','user6'],
        candidates: {
          candidate01: {
            name: 'Bill Gates',
            interviewTime: '',
            notes: '',
            rating: '',
            complete: false,
            chosen: false
          },
          candidate02: {
            name: 'Jeff Bezos',
            interviewTime: '',
            notes: '',
            rating: '',
            complete: false,
            chosen: false
          },
          candidate03: {
            name: 'Mark Zuckerberg',
            interviewTime: '',
            notes: '',
            rating: '',
            complete: false,
            chosen: false
          },
          candidate04: {
            name: 'Steve Jobs',
            interviewTime: '',
            notes: '',
            rating: '',
            complete: false,
            chosen: false
          },
          candidate05: {
            name: 'Elon Musk',
            interviewTime: '',
            notes: '',
            rating: '',
            complete: false,
            chosen: false
          }
        }
      },
      positionD: {
        title: 'Events Coordinator',
        desc: '',
        interviewers: ['user7'],
        candidates: {
          candidate01: {
            name: 'William Shakespeare',
            interviewTime: '',
            notes: '',
            rating: '',
            complete: false,
            chosen: false
          },
          candidate02: {
            name: 'George Orwell',
            interviewTime: '',
            notes: '',
            rating: '',
            complete: false,
            chosen: false
          },
          candidate03: {
            name: 'Jane Austen',
            interviewTime: '',
            notes: '',
            rating: '',
            complete: false,
            chosen: false
          },
          candidate04: {
            name: 'J.K. Rowling',
            interviewTime: '',
            notes: '',
            rating: '',
            complete: false,
            chosen: false
          },
          candidate05: {
            name: 'Ernest Hemingway',
            interviewTime: '',
            notes: '',
            rating: '',
            complete: false,
            chosen: false
          },
          candidate06: {
            name: 'Neil Gaiman',
            interviewTime: '',
            notes: '',
            rating: '',
            complete: false,
            chosen: false
          },
          candidate07: {
            name: 'John Steinbeck',
            interviewTime: '',
            notes: '',
            rating: '',
            complete: false,
            chosen: false
          },
          candidate08: {
            name: 'Mark Twain',
            interviewTime: '',
            notes: '',
            rating: '',
            complete: false,
            chosen: false
          },
          candidate09: {
            name: 'Antoine de Saint-Exupéry',
            interviewTime: '',
            notes: '',
            rating: '',
            complete: false,
            chosen: false
          },
          candidate10: {
            name: 'Virginia Woolf',
            interviewTIme: '',
            notes: '',
            rating: '',
            complete: false,
            chosen: false
          }
        }
      },
      positionE: {
        title: 'IB Coordinator',
        desc: '',
        interviewers: ['user3','user4','user6'],
        candidates: {
          candidate01: {
            name: 'John Powell',
            interviewTime: '',
            notes: '',
            rating: '',
            complete: false,
            chosen: false
          },
          candidate02: {
            name: 'Hans Zimmer',
            interviewTime: '',
            notes: '',
            rating: '',
            complete: false,
            chosen: false
          },
          candidate03: {
            name: 'Joe Hisaishi',
            interviewTime: '',
            notes: '',
            rating: '',
            complete: false,
            chosen: false
          },
          candidate04: {
            name: 'Lin-Manuel Miranda',
            interviewTime: '',
            notes: '',
            rating: '',
            complete: false,
            chosen: false
          },
          candidate05: {
            name: 'Alan Menken',
            interviewTime: '',
            notes: '',
            rating: '',
            complete: false,
            chosen: false
          },
          candidate06: {
            name: 'Michael Giacchino',
            interviewTime: '',
            notes: '',
            rating: '',
            complete: false,
            chosen: false
          },
          candidate07: {
            name: 'Leonard Bernstein',
            interviewTime: '',
            notes: '',
            rating: '',
            complete: false,
            chosen: false
          },
          candidate08: {
            name: 'Christophe Beck',
            interviewTime: '',
            notes: '',
            rating: '',
            complete: false,
            chosen: false
          }
        }
      }
    }
  });
}
