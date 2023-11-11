import { StyleSheet, Text, View, Pressable, SafeAreaView, ScrollView, TouchableOpacity, Image, Button } from "react-native";
import Header from '../components/Header';
import dress from '../data/product';

export default function Dresses ({ navigation }) { 
    return(
        <>
            <SafeAreaView>
                <ScrollView>
                    <View style={{paddingVertical: 40, paddingHorizontal: 10}}>
                        <Header navigation={navigation}/>
                        <View style={{marginBottom: 20}}>
                            <ScrollView horizontal style={{marginLeft: 10}}>
                                {dress.slice(2,3).map((e,i) => (
                                    <TouchableOpacity key={i} style={{ marginRight: 10}}>
                                        <View>
                                            <Image
                                            style={{
                                                resizeMode:'contain'
                                            }}
                                            source={e.image}
                                            />
                                        </View>
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}
