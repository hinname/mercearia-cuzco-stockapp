import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
    marginLeft: 16,
  },
  userData: {
    backgroundColor: '#1E1B26',
    padding: 16,
    borderRadius: 8,
    width: '75%',
  },
  userName: {
    color: '#26ACFF',
    fontSize: 18,
  },
  userEmail: {
    color: '#fdfcfe',
    fontSize: 14,
  },
  editButton: {
    borderColor: '#26ACFF',
    borderWidth: 1,
    padding: 20,
    borderRadius: 8,
    marginLeft: 8,
  },
});

export default styles;