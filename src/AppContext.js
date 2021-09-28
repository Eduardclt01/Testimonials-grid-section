import React from "react";

export const AppContext = React.createContext(null);

export const AppContextWrapper = (props) => {
  // ---------- State ----------
  var [state, setState] = React.useState({
    testimonials: {
      0: {
        name: 'John',
        role: 'Software Enigeneer',
        heading: 'Habitant inceptos molestie, nonummy porta dis facilisis. Nascetur ad nisl Urna ultricies phasellus convallis. ',
        content: 'Risus vestibulum mattis nisi. Nascetur euismod. Per tempor id mi dictum taciti, nisi tincidunt nonummy eleifend dui sodales taciti fames parturient malesuada taciti taciti justo hymenaeos leo nulla inceptos porttitor in donec augue nunc fames penatibus at. Varius hac fringilla purus dis quis ipsum feugiat vulputate facilisi ut penatibus Sociis.',
        theme: 'purple'
      },
      1: {
        name: 'Eduard',
        role: 'Front end dev',
        heading: 'Hac. Aenean venenatis aptent senectus nulla. ',
        content: 'Risus vestibulum mattis nisi. Nascetur euismod. Per tempor id mi dictum taciti, nisi tincidunt nonummy eleifend dui sodales taciti fames parturient malesuada taciti taciti justo hymenaeos leo nulla inceptos porttitor in donec augue nunc fames penatibus at. Varius hac fringilla purus dis quis ipsum feugiat vulputate facilisi ut penatibus Sociis.',
        theme: 'grey'
      },
      2: {
        name: 'Peter',
        role: 'Water drinker',
        heading: 'Quam molestie quis natoque id sit facilisi duis class Id molestie tortor netus nisi vivamus aliquam.',
        content: 'Risus vestibulum mattis nisi. Nascetur euismod. Per tempor id mi dictum taciti, nisi tincidunt nonummy eleifend dui sodales taciti fames parturient malesuada taciti taciti justo hymenaeos leo nulla inceptos porttitor in donec augue nunc fames penatibus at. Varius hac fringilla purus dis quis ipsum feugiat vulputate facilisi ut penatibus Sociis.',
        theme: 'white'
      },
      3: {
        name: 'Spiderman',
        role: 'Cookie eater',
        heading: 'Quam molestie quis natoque id sit facilisi duis class Id molestie tortor netus nisi vivamus aliquam.',
        content: 'Risus vestibulum mattis nisi. Nascetur euismod. Per tempor id mi dictum taciti, nisi tincidunt nonummy eleifend dui sodales taciti fames parturient malesuada taciti taciti justo hymenaeos leo nulla inceptos porttitor in donec augue nunc fames penatibus at. Varius hac fringilla purus dis quis ipsum feugiat vulputate facilisi ut penatibus Sociis.',
        theme: 'dark-grey'
      },
      4: {
        name: 'Batman',
        role: 'No role',
        heading: 'Quam molestie quis natoque id sit facilisi duis class Id molestie tortor netus nisi vivamus aliquam.',
        content: 'Risus vestibulum mattis nisi. Nascetur euismod. Per tempor id mi dictum taciti, nisi tincidunt nonummy eleifend dui sodales taciti fames parturient malesuada taciti taciti justo hymenaeos leo nulla inceptos porttitor in donec augue nunc fames penatibus at. Varius hac fringilla purus dis quis ipsum feugiat vulputate facilisi ut penatibus Sociis.',
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
