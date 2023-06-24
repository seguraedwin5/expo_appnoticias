import * as React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';


const LeftContent = props => <Avatar.Icon {...props} icon="book-open-variant"  />

const Noticia = ({title , content , style}) => (
  <Card style={style}>
    <Card.Title title={title} left={LeftContent} />
    <Card.Content >
      <Text variant="bodyMedium">{content}</Text>
    </Card.Content>
    <Card.Actions>
      <Button buttonColor='black'>Ok</Button>
    </Card.Actions>
  </Card>
);


export default Noticia;