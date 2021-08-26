import React, {useState} from 'react';

import {Pressable, SafeAreaView, Text, TouchableHighlight, TouchableOpacity, View} from 'react-native';

function NumberWrapper(props) {
    return (
        <TouchableOpacity onPress={() => props.fonksiyon(props.number)} style={{
            width: 80,
            height: 80,
            backgroundColor: "white",
            margin: 10,
            borderWidth: 1,
            borderColor: '#666565',
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text>
                {props.number}
            </Text>
        </TouchableOpacity>
    )
}

function SummarySection(props: { summary: any }) {
    return <View style={{
        padding: 30,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "#666565",
        borderRadius: 15,
        alignItems: "flex-end"
    }}>
        <Text style={{fontSize: 36}}>
            {props.summary}
        </Text>
    </View>;
}

const CalculatorScreen = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

    const [summary, setSummmary] = useState(123)

    function CalculatorScreendenSelamlar(param) {
        console.log("Bu fonksiyon calculator screenden gelmiştir")
    }

    return (
        <SafeAreaView>
            <View style={{padding: 20, height: "100%"}}>
                <SummarySection summary={summary}/>
                <View style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    {
                        numbers.map((number) => {
                            return (
                                <NumberWrapper fonksiyon={setSummmary} number={number}/>
                            )
                        })
                    }
                </View>
            </View>
        </SafeAreaView>
    );
};

export default CalculatorScreen;
