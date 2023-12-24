import { Text, TouchableOpacity, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

import { styles } from './styles'

interface TaskCardProps {
  text: string
  done?: boolean
  onDone: () => void
  onRemove: () => void
}

export function TaskCard({
  text,
  done = false,
  onDone,
  onRemove,
}: TaskCardProps) {
  return (
    <View style={styles({}).container}>
      <TouchableOpacity style={styles({}).radioButton} onPress={onDone}>
        {done ? (
          <Ionicons name="checkmark-circle-sharp" size={24} color="#5E60CE" />
        ) : (
          <Ionicons name="ellipse-outline" size={24} color="#4EA8DE" />
        )}
      </TouchableOpacity>

      <Text style={styles({ done }).text}>{text}</Text>

      <TouchableOpacity onPress={onRemove}>
        <Ionicons name="trash-outline" size={20} color="#E25858" />
      </TouchableOpacity>
    </View>
  )
}
