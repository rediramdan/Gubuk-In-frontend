import React from 'react'
import { View, TextInput, } from 'react-native'
import {Text, Button, Container, Form} from 'native-base'

export default class Verify extends React.Component {
	render() {
		return (
			<View style={{flex: 1, backgroundColor: '#5E94FF', justifyContent: 'center'}}>
				   <View style={{alignItems: 'center', marginBottom: -130, marginTop: -30}}>
		              <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold'}}>
		               Apa kode verifikasi Anda?
		              </Text>
		            </View>
				<View style={{flex: 0.6, justifyContent: 'space-evenly', flexDirection: 'row'}}>
					<TextInput
						style={{backgroundColor: 'white', alignSelf: 'center', padding: 10, paddingLeft: -7, fontWeight: 'bold', height: 55, width: '10%', borderRadius: 10, borderWidth: 1, borderColor: 'grey',  borderStyle: 'dashed'}}
						maxLength={1}
						keyboardType="number-pad"
					/>

					<TextInput
						style={{backgroundColor: 'white', alignSelf: 'center', padding: 10, paddingLeft: -7, fontWeight: 'bold', height: 55, width: '10%', borderRadius: 10, borderWidth: 1, borderColor: 'grey'}}
						maxLength={1}
						keyboardType="number-pad"
					/>

					<TextInput
						style={{backgroundColor: 'white', alignSelf: 'center', padding: 10, paddingLeft: -7, fontWeight: 'bold', height: 55, width: '10%', borderRadius: 10, borderWidth: 1, borderColor: 'grey'}}
						maxLength={1}
						keyboardType="number-pad"
					/>

					<TextInput
						style={{backgroundColor: 'white', alignSelf: 'center', padding: 10, paddingLeft: -7, fontWeight: 'bold', height: 55, width: '10%', borderRadius: 10, borderWidth: 1, borderColor: 'grey'}}
						maxLength={1}
						keyboardType="number-pad"
					/>

					<TextInput
						style={{backgroundColor: 'white', alignSelf: 'center', padding: 10, paddingLeft: -7, fontWeight: 'bold', height: 55, width: '10%', borderRadius: 10, borderWidth: 1, borderColor: 'grey'}}
						maxLength={1}
						keyboardType="number-pad"
					/>

					<TextInput
						style={{backgroundColor: 'white', alignSelf: 'center', padding: 10, paddingLeft: -7, fontWeight: 'bold', height: 55, width: '10%', borderRadius: 10, borderWidth: 1, borderColor: 'grey'}}
						maxLength={1}
						keyboardType="number-pad"
					/>

				 
				</View>
				
					<Button
		                style={{
		                  justifyContent: 'center',
		              	  marginTop: -150,
		                  backgroundColor: '#2469EF',
		                  borderRadius: 12,
		                  width: 300,
		                  marginLeft: 30
		                }}>
		                <Text>verifikasi kode konfirmasi</Text>
		              </Button>


		         

			</View>
		)
	}
}