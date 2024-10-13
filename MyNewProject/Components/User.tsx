import { View, Text, Image } from 'react-native'
import React from 'react'

type Props = {
    src: string
    username: string
}

const User = ({src, username}: Props) => {
  return (
    <View>
    <Image source={{uri:src}} />
      <Text>{username}</Text>
    </View>
  )
}

export default User