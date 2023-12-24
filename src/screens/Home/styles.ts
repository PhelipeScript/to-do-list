import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#1A1A1A',
  },
  header: {
    width: '100%',
    height: 176,
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {},
  form: {
    flexDirection: 'row',
    gap: 5,
    paddingHorizontal: 24,
    marginTop: -30,
    height: 52,
  },
  input: {
    flex: 1,
    backgroundColor: '#262626',
    color: '#F2F2F2',
    padding: 16,
    borderRadius: 6,
    fontSize: 16,
  },
  addButton: {
    width: 52,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1E6F9F',
    borderRadius: 6,
  },
  summary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 24,
    marginHorizontal: 24,
  },
  taskInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  taskCreatedText: {
    color: '#4EA8DE',
    fontSize: 16,
    fontWeight: 'bold',
  },
  taskDoneText: {
    color: '#8284FA',
    fontSize: 16,
    fontWeight: 'bold',
  },
  counterText: {
    backgroundColor: '#333333',
    color: '#D9D9D9',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    paddingHorizontal: 8,
    minWidth: 25,
    borderRadius: 999,
  },
  containerEmpty: {
    alignItems: 'center',
    gap: 16,
    marginHorizontal: 24,
    paddingVertical: 48,
    borderTopWidth: 1,
    borderTopColor: '#333333',
  },
  textBold: {
    color: '#808080',
    fontSize: 16,
    fontWeight: '700',
  },
})
