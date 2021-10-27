import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    header: {
        marginTop: 30,
        marginLeft: 20, 
        marginRight: 20,
        flexDirection: "row",
        justifyContent: "space-between",
      },
      headerTitle: {
        color: "#000",
        fontSize: 40,
        fontWeight: "bold",
        marginBottom: 10,
        backgroundColor:"#fff"
      },
      batterySection: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
        backgroundColor:"lightyellow"
      },
      batteryImage: {
        height: 37,
        width: 100
      },
      batteryText: {
        color: "#000",
        fontSize: 35,
        fontWeight: "bold",
        backgroundColor:"transparent"
      },
      parked: {
        alignItems: "center",
      },
      parkedText: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold",
      },
      Avenger: {
        width: "100%",
        height: "100%",
      },
      backgroundImage: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        position: "absolute",
      },
      icon: {
        color: "white",
        height: 40,
        width: 40,
      },
      iconBorder: {
        borderWidth: 1,
        borderRadius: 50,
      },
      menuItems: {
        marginTop: 15,
      },
      menuRow: {
        marginTop: 10,
        marginBottom: 10,
        flexDirection: "row",
        alignItems: "center",
      },
      menuText: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold",
        textTransform: "uppercase",
        marginLeft: 10,
        flexGrow: 1,
      },
      subText: {
        fontSize: 14, 
        color: 'grey', 
        marginLeft: 10,
        flexGrow: 1,
      },
      threeIcons: {
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "green",
        marginTop: 300,
      },
})

export default styles;