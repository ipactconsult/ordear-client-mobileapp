/*
Le contexte fournit un moyen de transmettre des données
via l'arborescence des composants sans avoir à transmettre 
manuellement les props à chaque niveau.
*/

import React, {useReducer} from "react";

export default (reducer, actions, defaultValue) => {
 const Context = React.createContext();

 const Provider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, defaultValue);
   
  const boundActions = {};
  for (let key in actions) {
    boundActions[key] = actions[key](dispatch);
  }

  return(
   <Context.Provider value={{state, ...boundActions}} >
     {children}
   </Context.Provider>
  );
};

return {Context, Provider};
};