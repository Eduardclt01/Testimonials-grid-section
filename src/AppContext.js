import React from "react";

export const AppContext = React.createContext(null);

export const AppContextWrapper = (props) => {
  // ---------- State ----------
  var [state, setState] = React.useState({
    testimonials: {
      0: {
        name: 'John',
        role: 'Software Enigeneer',
        heading: 'Lol',
        content: 'Content',
        theme: 'purple'
      },
      1: {
        name: 'Eduard',
        role: 'Front end dev',
        heading: 'Lol',
        content: 'Content',
        theme: 'grey'
      },
      2: {
        name: 'Peter',
        role: 'Water drinker',
        heading: 'Lol',
        content: 'Content',
        theme: 'white'
      },
      3: {
        name: 'Spiderman',
        role: 'Cookie eater',
        heading: 'Lol',
        content: 'Content',
        theme: 'dark-grey'
      },
      4: {
        name: 'Batman',
        role: 'No role',
        heading: 'Lol',
        content: 'Content',
        theme: 'white'
      }
    }
  });

  function setBillAmount(amount) {
    setState(function(state) {
      return {
        ...state,
        test: amount
      };
    });
  }


  const [actions, setAppActions] = React.useState({

  });

  return (
    <AppContext.Provider value={{ state, actions }}>
      {props.children}
    </AppContext.Provider>
  );
};
