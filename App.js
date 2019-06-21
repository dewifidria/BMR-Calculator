import React, { Component } from 'react';
import { Image,View,Text,TextInput,ScrollView,Button,TouchableOpacity } from 'react-native';

export default class App extends Component {

	constructor(props) {
		super(props)

		this.state = {
      hasil:0,
      height:0,
      weight:0,
      age:0
		}
  }
  
  bmr(jk){
   if(jk=='m'){
      this.setState({
       hasil:parseFloat((88.362 + (13.397 * this.state.weight)) + (4.799 * this.state.height) - (5.677 * this.state.age)).toFixed(2)
      });
   } else {
      this.setState({
       hasil:parseFloat(447.593 + (9.247 * this.state.weight) + (3.098 * this.state.height) - (4.330 * this.state.age)).toFixed(2)
      });
   }
  }

  reset(){
    this.setState({
      hasil:0,
      height:0,
      weight:0,
      age:0
    });
  }


  render() {
    
    return (
      // utama
      <View style={{flex:1, flexDirection:'column', padding:5}}>

        {/* data */}
        

          {/* jeniskelamin */}
          <View style={{flex:1, flexDirection:'row', alignItems:'center'}}>
            <View  style={{flex:1, flexDirection:'column', padding:2}}>
              {/* male */}
              <TouchableOpacity onPress={()=> this.bmr('m')}>
                <Image
                  style={{width: 50, height: 50}}
                  source={require('./male.png')}
                />
              </TouchableOpacity>
            </View>

            <View  style={{flex:1, flexDirection:'column',alignItems:'center', padding:2}}>
              {/* female */}
            <TouchableOpacity onPress={()=> this.bmr('l')}>
              <Image
                style={{width: 50, height: 50}}
                source={require('./female.png')}
              />
            </TouchableOpacity>
            </View>

          </View>

          {/* tinggi */}
          <View style={{flex:1, flexDirection:'column', margin:2, borderColor:'blue', borderWidth:2, alignItems:'center'}}>
            <TextInput
              style={{fontSize:24}}
              placeholder="0"
              onChangeText={(height) => this.setState({height})}
              
            />
            <Text>Height (in cm)</Text>
          </View>

          {/* berat */}
          <View style={{flex:1, flexDirection:'column',margin:2, borderColor:'blue', borderWidth:2, alignItems:'center'}}>
            <TextInput
               style={{fontSize:24}}
               placeholder="0"
               onChangeText={(weight) => this.setState({weight})}
                
              />
            <Text>Weight (in kgs)</Text>
          </View>

          {/* umur */}
          <View style={{flex:1, flexDirection:'column',margin:2, borderColor:'blue', borderWidth:2, alignItems:'center'}}>
            <TextInput
              style={{fontSize:24}}
              placeholder="0"
              onChangeText={(age) => this.setState({age})}
                
              />
            <Text>Age (in year)</Text>
          </View>

        

        {/* submit */}
        <View style={{flex:1, flexDirection:'column'}}>
          <Button
            onPress={()=>this.bmr()}
			    title="Submit"
			    color="blue"
          />
        </View>

        {/* hasil */}
        <View style={{flex:1, flexDirection:'column', alignItems:'center'}}>
          <Text style={{fontSize:24}}>{this.state.hasil}</Text>
          <Text>BMR</Text>
        </View>
{/* utama */}

      </View>//utama
    );
    }
  }