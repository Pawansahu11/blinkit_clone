import { useEffect, useState } from "react"
import { Keyboard } from "react-native"


export default function useKeyboardOffsetHight() {

    const [keyboardOffsetHight, setKeyboardOffsetHight] = useState(0)

    useEffect(() => {

        const keyboardWillAndroidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            e => {
                setKeyboardOffsetHight(e.endCoordinates.height)
            }
        )
        const keyboardWillAndroidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            e => {
                setKeyboardOffsetHight(0)
            }
        )
        const keyboardWillShowListener = Keyboard.addListener(
            'keyboardWillShow',
            e => {
                setKeyboardOffsetHight(e.endCoordinates.height)
            }
        )
        const keyboardWillHideListener = Keyboard.addListener(
            'keyboardWillHide',
            e => {
                setKeyboardOffsetHight(e.endCoordinates.height)
            }
        )

        return () => {
            keyboardWillAndroidHideListener.remove()
            keyboardWillAndroidShowListener.remove()
            keyboardWillHideListener.remove()
            keyboardWillShowListener.remove()
        }

    }, [])

    return keyboardOffsetHight
}