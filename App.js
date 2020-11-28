import React, { useState, useEffect } from "react";
import {
  Alert,
  Header,
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  TextInputComponent,
  Modal,
  TouchableHighlight,
} from "react-native";

class App2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
    };
  }
  render() {
    return (
      <View style={{ paddingTop: 100 }}>
        <Text style={stylesApp2.heading}>Class Based Component</Text>
      </View>
    );
  }
}

const stylesApp2 = StyleSheet.create({
  heading: {
    fontSize: 20,
    textAlign: "center",
  },
});

export default function App() {
  const [original, setoriginal] = useState(0);
  const [discount, setdiscount] = useState(0);
  const [save, setSave] = useState(0);
  const [price, setprice] = useState(0);
  const [history, sethistory] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  function saveupdater() {
    sethistory(
      history +
        "\n" +
        "Original: " +
        original +
        " | " +
        "Discount: " +
        discount +
        " | " +
        "After Discount: " +
        price +
        "\n" +
        "-------------------"
    );
  }

  function clc() {
    var b = Number(original) * ((100 - Number(discount)) / 100);
    setprice(String(b));
  }

  function savev() {
    var c = Number(original) - Number(price);
    setSave(String(c));
  }

  const updateop = (e) => {
    if (e > 0) {
      setoriginal(e);
      clc();
      savev();
    } else {
      Alert.alert("Postive number only");
    }
  };

  const updateds = (e) => {
    if (e < 100) {
      setdiscount(e);
      clc();
      savev();
    } else {
      Alert.alert("Discount should be less then 100");
    }
  };

  const gameView = (
    <View style={styles.container}>
      <View style={{ flexDirection: "column" }}>
        <View>
          <Text style={{ color: "#d0f0c0" }}>Original Price: </Text>
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Please enter +ve numbers"
            keyboardType="numeric"
            onChangeText={(val) => updateop(val)}
          ></TextInput>
        </View>
      </View>
      <Text>{"\n"}</Text>
      <View style={{ flexDirection: "column" }}>
        <View>
          <Text style={{ color: "#d0f0c0" }}>Disount % : </Text>
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Max discount is 100"
            keyboardType="numeric"
            onChangeText={(val) => updateds(val)}
          ></TextInput>
        </View>
      </View>

      <Text>{"\n"}</Text>

      <Text style={{ textAlign: "center", fontSize: 20, color: "#d8bfd8" }}>
        {" "}
        You Save : {save}
      </Text>
      <Text style={{ textAlign: "center", fontSize: 20, color: "#d8bfd8" }}>
        {" "}
        Final Price : {price}
      </Text>
      <Text>{"\n"}</Text>
      <Button
        borderRadius="100"
        color="#D0F0C0"
        title="Save"
        onPress={saveupdater}
      ></Button>

      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>{history}</Text>

              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}></Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          style={styles.openButton}
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <Text style={styles.textStyle}>Show History</Text>
        </TouchableHighlight>
      </View>
    </View>
  );

  return <View style={styles.container}>{gameView}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#a29ecd",

    padding: 8,
  },
  textView: {
    textAlign: "center",
    fontSize: 40,
  },
  buttonsRowContainer: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonContainer: {
    width: "33%",
    margin: 5,
  },
  input: {
    borderWidth: 1,
    padding: 8,
    width: 200,
    justifyContent: "center",
  },
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    backgroundColor: "#d8bfd8",
    borderRadius: 0,
    padding: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
