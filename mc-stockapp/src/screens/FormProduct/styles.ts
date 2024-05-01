import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    marginBottom: 36,
  },
  title: {
    color: '#26ACFF',
    fontSize: 20,
  },
  form: {
    width: '90%',
  },
  inputText: {
    color: '#26ACFF',
    fontSize: 16,
    marginBottom: 4,
  },
  input: {
    backgroundColor: '#1E1A24',
    color: '#fff',
    borderRadius: 4,
    padding: 12,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#26ACFF',
    padding: 16,
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default styles;