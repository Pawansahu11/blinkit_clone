import { View, StyleSheet, Animated, Image } from 'react-native'
import React, { FC, useEffect, useRef, useState } from 'react'
import { GestureHandlerRootView, PanGestureHandler, State } from 'react-native-gesture-handler'
import CustomSafeAreaView from '@components/global/CustomSafeAreaView'
import ProductSlider from '@components/login/ProductSlider'
import { resetAndNavigate } from '@utils/NavigationUtils'
import CustomText from '@components/ui/CustomText'
import { Fonts } from '@utils/Constants'
import CustomInput from '@components/ui/Custominput'
import CustomButton from '@components/ui/CustomButton'
import useKeyboardOffsetHight from '@utils/useKeyboardOffsetHeight'

const CustomerLogin: FC = () => {
    const [phoneNumber, setPhoneNumber] = useState('')
    const [loading, setLoading] = useState(false)
    const [gestureSequence, setGestureSequence] = useState<string[]>([])
    const keyboardOffsetHight = useKeyboardOffsetHight()
    const animatedValue = useRef(new Animated.Value(0)).current

    useEffect(() => {
        if (keyboardOffsetHight == 0) {
            Animated.timing(animatedValue, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true
            }).start
        } else {
            Animated.timing(animatedValue, {
                toValue: -keyboardOffsetHight * 0.84,
                duration: 1000,
                useNativeDriver: true
            }).start

        }
    })

    const handleAuth = async () => {

    }


    const handleGesture = ({ nativeEvent }: any) => {
        if (nativeEvent.state === State.END) {
            const { translationX, translationY } = nativeEvent;
            let direction = ''
            if (Math.abs(translationX) > Math.abs(translationY)) {
                direction = translationX > 0 ? 'right' : 'left'
            } else {
                direction = translationY > 0 ? 'down' : 'up'
            }

            const newSequence = [...gestureSequence, direction].slice(-5)
            setGestureSequence(newSequence)
            console.log(newSequence);


            if (newSequence.join(' ') === 'up up down left right') {
                setGestureSequence([])
                resetAndNavigate('DeliveryLogin')
            }

        }
    }


    return (
        <GestureHandlerRootView style={styles.container}>
            <View style={styles.container}>
                <CustomSafeAreaView>
                    <ProductSlider />
                    <PanGestureHandler onHandlerStateChange={handleGesture}>
                        <Animated.ScrollView
                            bounces={false}
                            keyboardDismissMode='on-drag'
                            keyboardShouldPersistTaps='handled'
                            contentContainerStyle={styles.subContainer}
                            style={{ transform: [{ translateY: animatedValue }] }}
                        >
                            <View style={styles.content}>
                                <Image source={require('@assets/images/logo.png')} style={styles.logo} />
                                <CustomText variant='h2' fontFamily={Fonts.Bold}>
                                    India's last minute app
                                </CustomText>
                                <CustomText variant='h5' fontFamily={Fonts.SemiBold} style={styles.text}>
                                    Login in or sign up
                                </CustomText>
                                <CustomInput
                                    onChangeText={(text) => { setPhoneNumber(text.slice(0, 10)) }}
                                    onClear={() => { setPhoneNumber('') }}
                                    value={phoneNumber}
                                    left={<CustomText
                                        style={styles.phoneText}
                                        variant='h6'
                                        fontFamily={Fonts.SemiBold}>
                                        +91
                                    </CustomText>}
                                    placeholder='Enter mobile number'
                                    inputMode='numeric'
                                />
                                <CustomButton
                                    disabled={phoneNumber?.length != 10}
                                    onPress={() => handleAuth()}
                                    loading={loading}
                                    title='Continue' />
                            </View>
                        </Animated.ScrollView>
                    </PanGestureHandler>
                </CustomSafeAreaView>
            </View>
        </GestureHandlerRootView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    subContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 20
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingBottom: 20
    },
    logo: {
        height: 50,
        width: 50,
        borderRadius: 20,
        marginVertical: 10
    },
    text: {
        marginTop: 2,
        marginBottom: 25,
        opacity: 0.8
    },
    phoneText: {
        marginLeft: 10
    }

})

export default CustomerLogin