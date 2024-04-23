import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    alignItems: 'center',
    justifyContent: 'center',
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 16,
  },
  input: {
    backgroundColor: '#1E1B26',
    width: '70%',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    color: '#fdfcfe',
    marginTop: 16,
  },
  button: {
    backgroundColor: '#26ACFF',
    padding: 14,
    borderRadius: 8,
    marginLeft: 8,
  },
  buttonText: {
    color: '#131016',
    fontWeight: 'bold',
    fontSize: 16,
  }
});

export default styles;