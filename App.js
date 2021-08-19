import React from 'react';
import type {Node} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text, TextComponent,
    useColorScheme,
    View,
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {getDividerColor} from "react-native/Libraries/LogBox/UI/LogBoxStyle";

function DersKartı(props: { ders: string }) {
    return <View style={{borderStyle: "solid", borderWidth: 1, padding: 30, margin: 30, borderRadius: 30}}>
        <Text style={{fontSize: 30}}>
            {props.ders}
        </Text>
    </View>;
}

const App: () => Node = () => {
    const degisken = "Staj OKULU 2021"
    const objemiz = {
        "fontSize": 40,
        "color": "#d40000"
    }

    const dersler = ["Matematik", "Türkçe", "Sosyal"]


    return (
        <SafeAreaView style={{justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize: objemiz.fontSize, color: objemiz.color}}>
                {degisken}
            </Text>
            <StaticPropToplamaIslemi sayi={10}/>
            <StaticPropToplamaIslemi />
            {
                dersler.map((ders) => {
                    return(
                        <DersKartı ders={ders}/>
                    )
                })
            }
        </SafeAreaView>
    );
};


const EnesAbiComponent = ({isim}) => {
    return (
        <Text>
            Enes abi seni selamlıyor {isim}
        </Text>
    )
}

const StaticPropToplamaIslemi = ({sayi = 25}) => {
    return (
        <View>
            <Text>
                Gönderilen sayi : {sayi}
            </Text>
        </View>
    )
}


export default App;
