import React, {useState}  from 'react';
import {View, Text, TextInput, Button, Alert, TouchableOpacity, ToastAndroid} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

// const MyApp = ()=> {
//
//     // let username = "";
//     // let pw = "";
//     const [username, setUsername] = useState('');
//     const [pw, setPw] = useState('');
//
//     return (
//         <View style={{padding: 20, paddingTop: 50}} >
//
//
//             <Text>User Type:</Text>
//             <RNPickerSelect
//                 onValueChange={(value) => console.log(value)}
//                 items={[
//                     { label: 'Admin', value: 'Admin' },
//                     { label: 'Guest', value: 'Guest' }
//                 ]}
//             />
//
//
//                 <Text>Password:</Text>
//                 <TextInput style={{borderWidth: 1}}
//               onChangeText={(text) => setPw(text)}
//         />
//     <TouchableOpacity onPress={()=>ToastAndroid.show(pw, ToastAndroid.SHORT)}>
//         <Text>LOG IN</Text>
//     </TouchableOpacity>
//
//     <Text>{pw}</Text>
//
// </View>
// );
// };
// const InputBox=({label,onChangeText})=>{
//     return(
//         <View>
//             <Text>{label}</Text>
//             <TextInput style={{borderWidth:1}} onChangeText={onChangeText}/>
//         </View>
// );
// };
// const MyApp = ()=> {
//
//     // let username = "";
//     // let pw = "";
//     const [username, setUsername] = useState('');
//     const [pw, setPw] = useState('');
//     const [type, setType] = useState('');
//     return (
//         <View style={{padding: 20, paddingTop: 50}} >
//
//
//             <Text>User Type:</Text>
//             <RNPickerSelect
//                 onValueChange={(value) => setType(value)}
//                 items={[
//                     { label: 'Admin', value: 'Admin' },
//                     { label: 'Guest', value: 'Guest' }
//                 ]}
//             />
//
//            <InputBox label="User Name:" onChangeText={(text) => setUsername(text)}/>
//             <InputBox label="User Name:" onChangeText={(text) => setPw(text)}/>
//             <TouchableOpacity onPress={()=>ToastAndroid.show('Welcome'+type+' '+username, ToastAndroid.SHORT)}>
//                 <Text>LOG IN</Text>
//             </TouchableOpacity>
//
//             <Text>{pw}</Text>
//
//         </View>
//     );
// };
<InputBox label="User Name:"onChangeTest={(text)=>setUsername(text)}/>
<InputBox label="Password"onChangeTest={(text)=>setPw(text)}/>
<TouchableOpacity onPress={()=>{
    const correctPassword='123';
    let mymessage='Error! Wrong Password!';
    if (pw==correctPassword){
        mymessage='Welcome'+type+' '+username;
}
    ToastAndroid.show(mymessage,ToastAndroid.SHORT);
}}>
<Text>Check Password</Text>
    </TouchableOpacity>
    export default MyApp
