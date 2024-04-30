import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  product: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
    marginLeft: 16,
  },
  productData: {
    backgroundColor: '#1E1B26',
    padding: 16,
    borderRadius: 8,
    width: '75%',
  },
  productName: {
    color: '#26ACFF',
    fontSize: 16,
    marginBottom: 8,
  },
  productPrice: {
    color: '#fdfcfe',
    fontSize: 14,
  },
  productQtd: {
    color: '#fdfcfe',
    fontSize: 12,
  },
  editButton: {
    borderColor: '#26ACFF',
    borderWidth: 1,
    borderRadius: 8,
    marginLeft: 8,
    padding: 26,
    justifyContent: "center",
  }
});

export default styles;