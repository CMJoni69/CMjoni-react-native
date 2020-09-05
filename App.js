
import React, { Component } from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
  TextInput
} from 'react-native';
import axios from 'axios'
const urlAPI = 'https://jsonplaceholder.typicode.com/posts'



class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      nama: '-',
      username: '',
      password: '',
      isLogin: false,
      data: []
    }


  }
  render() {
    return (
      <View style={{ backgroundColor: "#f5f5f5", padding: 5 }}>
        <Text style={{ fontSize: 50, width: "100%", textAlign: "center" }}>{this.state.nama}</Text>
        <View style={{ width: "100%", height: 300, backgroundColor: "red", padding: 10 }}>

          {/* INPUT UNSERNAME */}
          <Text style={{ fontSize: 20, color: "white", width: "100%", textAlign: "center" }}>Username</Text>
          <TextInput
            style={{ width: '100%', backgroundColor: 'white', borderRadius: 10 }}
            value={this.state.username}
            onChangeText={(value) => this.setState({ username: value })}
          />

          {/* INPUT PASSWORD */}
          <Text style={{ fontSize: 20, color: "white", width: "100%", textAlign: "center" }}>Password</Text>
          <TextInput
            style={{ width: '100%', backgroundColor: 'white', borderRadius: 10 }}
            value={this.state.password}
            onChangeText={(value) => this.setState({ password: value })}
          />

          {/* BUTTON LOGIN */}
          {!this.state.isLogin && (<TouchableOpacity
            style={{ width: 100, height: 40, backgroundColor: 'green', borderRadius: 15, marginTop: 20 }}
            onPress={() => this.validasi(this.state.username, this.state.password)}
          >
            <Text style={{ width: '100%', textAlign: "center" }}>login</Text>
          </TouchableOpacity>)}

          {/* BUTTON LOGOUT */}
          {this.state.isLogin && (<TouchableOpacity
            style={{ width: 100, height: 40, backgroundColor: 'gray', borderRadius: 15, marginTop: 20, color: 'white' }}
            onPress={() => this.logOut()}
          >
            <Text style={{ width: '100%', textAlign: "center" }}>logout</Text>
          </TouchableOpacity>)}
        </View>

        {/* Call API */}
        <TouchableOpacity
          style={{ width: 100, height: 40, backgroundColor: 'green', borderRadius: 15, marginTop: 20 }}
          onPress={() => this.callAPIfunction()
          }
        >
          <Text style={{ width: '100%', textAlign: "center" }}>callAPI</Text>
        </TouchableOpacity>
        <Image
          style={{ height: 200, width: 200 }}
          source={{ uri: 'https://via.placeholder.com/600/92c952' }}
        />

        <View style={{ flexDirection: "row", width: "100%", backgroundColor: "orange", height: 40 }}>
          <Text style={{ backgroundColor: "#0000FF", color: "white", flex: 1, height: 20 }}>Lezar</Text>
          <Text style={{ backgroundColor: "#03942a", color: "white", flex: 1, textAlign: "center" }}>Mamzky</Text>
          <Text style={{ backgroundColor: "#94036b", color: "white", flex: 1 }}>Joni</Text>
        </View>

        <View style={{ flexDirection: "row", width: "100%", backgroundColor: "orange", height: 30 }}>

          <TouchableOpacity
            style={ddd.stylenyaButton}
            onPress={() => this.munculinPopup()}
          >
            <Text>Press me 1</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={ddd.stylenyaButton}
            onPress={() => this.validasi(this.state.username, this.state.password)}
          >
            <Text style={{ color: "white" }}>CHECK !</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={{ fontSize: 40 }}>{this.state.nama}</Text>
        </View>
      </View>
    );
  }

  munculinPopup() {
    alert('usernamenya admin')
  }
  nampilinPopup() {
    alert('usernamenya bukan admin')
  }

  validasi(uname, pw) {
    let accUsername = 'admin'
    let accPassword = 'admin'

    if (uname == accUsername && pw == accPassword) {
      this.suksesLogin()
    } else if (uname != accUsername && pw == accPassword) {
      this.usernameSalah()
    } else if (uname == accUsername && pw != accPassword) {
      this.passwordSalah()
    } else if (uname == '' && pw == '') {
      alert(' username dan password harus diisi')
    } else {
      this.gagalLogin()
    }
  }

  suksesLogin() {
    alert('sukses login')
    this.setState({ isLogin: true, nama: this.state.username })
    this.clearLogin()
  }
  gagalLogin() {
    alert('gagal login')
  }
  usernameSalah() {
    alert("username salah")
  }
  passwordSalah() {
    alert('password salah')
  }
  clearLogin() {
    this.setState({ username: "", password: '' })
  }
  logOut() {
    this.setState({ isLogin: false, nama: '-' })
  }

  callAPIfunction() {
    console.log("CALLING API .... ")
    axios.get('https://jsonplaceholder.typicode.com/posts/1').then(res => {
      alert(res.title)
      console.log(res.title)
      this.setState({ nama: res })
    })
  }
}


const ddd = StyleSheet.create({
  stylenyaButton: {
    margin: 5,
    flex: 1,
    backgroundColor: "blue"
  }
});

export default App;
