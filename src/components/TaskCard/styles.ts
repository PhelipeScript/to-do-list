import { StyleSheet } from 'react-native'

interface StylesProps {
  done?: boolean
}

export const styles = ({ done }: StylesProps) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      marginHorizontal: 24,
      marginBottom: 8,
      padding: 12,
      backgroundColor: '#262626',
      minHeight: 64,
      borderWidth: 1,
      borderColor: '#333333',
      borderRadius: 8,
    },
    radioButton: {
      borderRadius: 9999,
    },
    text: {
      color: done ? '#808080' : '#F2F2F2',
      flex: 1,
      textDecorationLine: done ? 'line-through' : 'none',
    },
  })
