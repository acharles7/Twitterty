

import { View, Text, Image, AppRegistry,StyleSheet } from 'react-native'
import React from 'react';
import { ListItem, Button, SearchBar, Card } from 'react-native-elements'
import twitter, {auth} from 'react-native-twitter';



export default class TwitTile extends React.Component {


tweet(){
let consumer_key: '19aTHeLpggZk82XZ19Uf4rK7a';
let consumer_secret: '1fhkYwANr9gdMdrvbwYuikrvBP4xyg1MR834aUIfyasgz4S94n';
let access_token: '547422976-0RYRArxhxwA8m91Ri0WS9We0TJPzplHvDlFGOMem';
let access_token_secret: 'A24Aj2Ghph6IHSfj4BrJYVhSgXZ8izxjbknObD8J17kjk';
const {rest, stream} = twitter(tokens);

const client = rest.get('http://twitter.com/search/');
}
  render() {

  return (

    <Card
  title='HELLO WORLD'
  style={styles.card}
  >
  <Text style={{marginBottom: 10}}>

    {this.client}
  </Text>
  <View style={styles.opinonButtonGroup}>

  <Button
    raised
    icon={{name: 'code'}}
    backgroundColor='green'
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='Positive' />
    <Button
      raised
      icon={{name: 'code'}}
      backgroundColor='red'
      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
      title='Negetive' />

  </View>
</Card>

  );
}
}

const styles = StyleSheet.create({
  opinonButtonGroup: {
    flex: 1,
    backgroundColor: '#0000',
    marginBottom: 20,
    flexDirection: 'row',
    //justifyContent: 'center',
    //alignItems: 'stretch',
  },

  card: {
    flex: 1,
    backgroundColor: '#0000',
    marginTop: 0,
    justifyContent: 'center',
    alignItems: 'stretch',
    flexDirection: 'column',
  },
});

AppRegistry.registerComponent('TwitTile', () => TwitTile);
