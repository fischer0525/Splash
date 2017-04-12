import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';


$(function() {
  let reactApp = document.getElementById("splash")
  if(reactApp){
    ReactDOM.render(
      <Splash />,
      reactApp
    );
  };
});
