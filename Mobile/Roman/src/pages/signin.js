import React, {Component} from 'react';

import {
    Text,
    TextInput,
    View,
    TouchableOpacity,
    AsyncStorage
    } from 'react-native';

class SignIn extends Component {
    static navigationOptions ={
        header: null,
    };

    constructor(){
        super();
        this.state = {
            email: 'e@gmail.com',
            senha: '123123',
        };
    }

    _realizarLogin = async () => {
        await fetch('http://192.168.6.220:5000/api/usuario',{
            method: 'POST',
            headers: {
                Accept : 'application/json',
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({
                email: this.state.email,
                senha: this.state.senha,
            }),
        })
        .then(resposta => resposta.json())
        .then(data => this._irParaHome(data.token))
        .catch(erro => console.warn(erro));
    };

    _irParaHome = async (tokenAReceber) => {
        if(tokenAReceber != null){
            try {
                await AsyncStorage.setItem('@roman:token', tokenAReceber);
                this.props.navigation.navigate('MainNavigator');
            } catch (error) {
                console.warn(error)
            }
        }
    }

    render(){
        return(
            <View>
                <TextInput
                placeholder="email"
                onChangeText={email => this.setState({email})}
                value={this.state.email}
                />
                <TextInput
                placeholder="senha"
                onChangeText={senha => this.setState({senha})}
                value={this.state.senha}
                />
                <TouchableOpacity onPress={this._realizarLogin}>
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default SignIn;