import * as React from 'react';
import { Appbar } from 'react-native-paper';

const Navbar = () => (
  <Appbar.Header>
    <Appbar.BackAction onPress={() => {}} />
    <Appbar.Content title="Noticias" />
    <Appbar.Action icon="calendar" onPress={() => {}} />
    <Appbar.Action icon="magnify" onPress={() => {}} />
  </Appbar.Header>
);

export default Navbar;