import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity , Button, StyleSheet, TextInput} from 'react-native';



class App extends Component {
 constructor(props){
   super(props);
   this.state ={
    TextPhrase: '',
    img: require('./src/biscoito.png')

     
   };
   this.brokeBiscuit = this.brokeBiscuit.bind(this)

   this.phrases = [
"The fortune you seek is in another cookie.",
" A closed mouth gathers no feet.",
"A conclusion is simply the place where you got tired of thinking.",
"A cynic is only a frustrated optimist.",
"A foolish man listens to his heart. A wise man listens to cookies.",
"You will die alone and poorly dressed.",
"A fanatic is one who can't change his mind, and won't change the subject.",
"If you look back, you'll soon be going that way.",
"You will live long enough to open many fortune cookies.",
"An alien of some sort will be appearing to you shortly."

   ]

}

brokeBiscuit(){
  let random = Math.floor(Math.random() * this.phrases.length);

  this.setState({
    TextPhrase: ' "' + this.phrases[random] + '" ',
    img: require('./src/biscoitoAberto.png')
  })

 }
  render() { 
    return ( 

      <View style={styles.container}>
        <Image  
        source={this.state.img}
        style={styles.img}
        />

        <Text style={styles.textoFrase}>
{this.state.TextPhrase}
        </Text>
<TouchableOpacity style={styles.button} onPress={this.brokeBiscuit}>
  <View style={styles.btnArea}>
    <Text style={styles.btnText}>
    Fortune Cookie Sayings
    </Text>
  </View>
</TouchableOpacity>

      </View>

     );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop:20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: 250,
    height: 250
  },
  textoFrase:{
    fontSize: 20,
    color:'#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  button: {
    width: 230,
    height: 50,
    borderWidth:2,
    borderColor: '#dd7b22',
    borderRadius: 25,


  },
  btnArea:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22'
  }
})
 
export default App;











