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
            email: 'g@admin.com',
            senha: '123456',
        };
    }

    _realizarLogin = async () => {
        await fetch('localhost:5000/api/usuario',{
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
            try{
                await AsyncStorage.setItem('@roman:token', tokenAReceber);
                this.props.navigation.navigate('MainNavigator');
            } catch (error) {}
        }
    };

    render(){
        return(
            <View>
                <TextInput
                placeholder="email"
                onChangeText={email => this.setState({email})}
                value={this.state.email}/>
                <TextInput
                placeholder="senha"
                onChangeText={senha => this.setState({senha})}
                value={this.state.senha}/>
                <TouchableOpacity onPress={this._realizarLogin}>
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default SignIn;