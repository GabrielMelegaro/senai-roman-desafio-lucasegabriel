import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

class Main extends Component {
    constructor() {
        super();
        this.state = {
            temas: [], 
        };
    }

    componentDidMount() {
        this._carregarTemas();
    }

    _carregarTemas = async () => {
        await fetch('http://192.168.6.220:5000/api/temas')
            .then(resposta => resposta.json())
            .then(data => this.setState({temas: data}))
            .catch(erro => console.warn(erro));
    };

    render() {
        return (
            <FlatList
              data={this.state.temas}
              keyExtractor={item => item.idTema}
              renderItem={({item}) => (
                  <View>
                      <Text>{item.temas}</Text>
                  </View>
              )}
            />
        );
    }
}

const styles = StyleSheet.create({
    tabBarEstilizacao:
    {width: 25, height: 25, tintColor: 'white'}
})

export default Main;