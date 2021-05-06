import React, { useEffect, useState, Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Homepage from './Homepage/homepage';
import Preferences from './PreferencesPage/preferences';
import ArticlePage from './ArticlePage/articlepage';

const NewsTiles = (): JSX.Element => {
  return (
    <div>
      <Homepage />
      {/* <Preferences /> */}
      {/* <ArticlePage /> */}
    </div>
  );
};

export default NewsTiles;
