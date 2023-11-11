import { useState, useEffect, Component } from "react";
import { StyleSheet, Text, View, Pressable, SafeAreaView, ScrollView, TouchableOpacity, Image, Button, Alert } from "react-native";
import { Stack } from "expo-router";
import Header from '../components/Header';
import cgr from "../data/category";
import dress from '../data/product';

export default function Menu({ navigation }) {
    const createAlert = () =>
        Alert.alert(
        '"Shopertino" Would Like To Send You Notifications',
        'Notifications may include alerts, sounds and icon badges.These can be configured in Settings.',
        textAlign='center'
        [
            {
                text: "Don't allow",
                onPress: () => {},
                style:'cancel',
            },
            {
                text: 'OK', 
                onPress: () => {},
            }
        ]
    );
    useEffect(() => { 
        createAlert();
    });
    return (
        <>
            <SafeAreaView>
                <ScrollView>
                    <View style={{ paddingVertical: 40, paddingHorizontal: 10 }}>
                        <Header navigation={navigation}/>
                        <View style={{ marginBottom: 30 }}>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginLeft:10}}>
                                {cgr.slice(0, 10).map((e, i) => (
                                    <TouchableOpacity
                                    style={{ marginRight: 10 }}
                                    key={i}
                                    >
                                        <View>
                                            <Image
                                                style={{
                                                    width: 73,
                                                    height: 91,
                                                    resizeMode:'contain',
                                                    marginRight: 20
                                                }}
                                                source={e.image}
                                            />
                                            <Text>{e.title}</Text>
                                        </View>
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>

                        </View>
                        <View style={styles.section}>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 17, marginBottom: 15, textAlign:'center'}}>New arrivals</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.section}>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{margin: 20}}>
                                {dress.slice(0, 3).map((e, i) => (
                                    <TouchableOpacity key={i} style={{ marginBottom:30 }}>
                                        <Image
                                        style={{
                                            height:200,
                                            resizeMode:'contain'
                                        }}
                                            source={e.image}
                                        />
                                        <View style={{justifyContent:'center',alignItems:'center'}}>
                                            <Text>{e.name}</Text>
                                            <Text>{e.price}</Text>
                                        </View>
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>
                        </View>
                        <View style={styles.section}>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 17, marginBottom: 15}}>Feature</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.section}>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{margin: 20}}>
                                {dress.slice(0,3).map((e,i) => (
                                    <TouchableOpacity key={i} style={{marginBottom: 30}}>
                                        <Image
                                        style={{
                                            height: 200,
                                            resizeMode: 'contain'
                                        }}
                                        source={e.image}
                                        />
                                        <View>
                                            <Text style={{fontWeight:"bold"}}>{e.price}</Text>
                                            <Text>{e.name}</Text>
                                        </View>
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>
                        </View>
                        <View style={styles.section}>
                            <TouchableOpacity>
                                <Text style={{ fontSize:17, marginBottom: 15}}>Best Seller</Text>
                            </TouchableOpacity>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{margin: 20}}>
                                {dress.slice(3, 5).map((e, i) => (
                                    <TouchableOpacity key={i} style={{marginBottom: 30}}>
                                        <Image
                                            style={{
                                                height:200,
                                                resizeMode:'contain'
                                            }}
                                            source={e.image}
                                        />
                                        <View>
                                            <Text style={{fontWeight:"bold"}}>{e.price}</Text>
                                            <Text>{e.name}</Text>
                                        </View>
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{margin: 20}}>
                                {dress.slice(5, 7).map((e, i) => (
                                    <TouchableOpacity key={i} style={{marginBottom: 30}}>
                                        <Image
                                            style={{
                                                height:200,
                                                resizeMode:'contain'
                                            }}
                                            source={e.image}
                                        />
                                        <View>
                                            <Text style={{fontWeight:"bold"}}>{e.price}</Text>
                                            <Text>{e.name}</Text>
                                        </View>
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>
                        </View>
                        <View>
                            <Button 
                            title='Browse all'
                            onPress={() => navigation.navigate('Category')}
                            />
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    section: {
        marginBottom: 10
    }
});