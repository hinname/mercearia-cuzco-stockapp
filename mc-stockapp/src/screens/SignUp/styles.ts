import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    marginBottom: 60,
    alignItems: 'center',
  },
  titleCompany: {
    fontSize: 32,
    color: '#FF7926',
    marginBottom: 12,
  },
  titleApp: {
    fontSize: 24,
    color: '#FF7926',
    marginBottom: 24,
  },
  form: {
    width: '80%',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#1E1B26',
    width: '100%',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    color: '#fdfcfe',
  },
  inputText: {
    color: '#fdfcfe',
    width: '100%',
    fontSize: 16,
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#FF7926',
    width: '100%',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#131016',
    fontWeight: 'bold',
    fontSize: 16,
  },
  link: {
    marginTop: 24,
  },
  linkText: {
    color: '#FF7926',
    fontWeight: 'bold',
    fontSize: 16,
    alignSelf: 'center',
  }
});

export default styles;