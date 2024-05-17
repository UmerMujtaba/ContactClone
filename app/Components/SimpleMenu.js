/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import {
    Menu,
    MenuProvider,
    MenuOptions,
    MenuOption,
    MenuTrigger,
   } from "react-native-popup-menu";

   import  Icon from 'react-native-vector-icons/Entypo';
import { StyleSheet } from "react-native";   
   const SimpleMenu = () => {
    return (
      <MenuProvider style={styles.container}>
        <Menu>
          <MenuTrigger
            customStyles={{
              triggerWrapper: {
                top: -20,
              },
            }}
          >
   

          </MenuTrigger>
          <MenuOptions>
            <MenuOption onSelect={() => alert(`Save`)} text="Save" />
            <MenuOption onSelect={() => alert(`Delete`)} text="Delete" />
          </MenuOptions>
        </Menu>
      </MenuProvider>
    );
   };
   
   export default SimpleMenu;
   const styles = StyleSheet.create({
    container: {
      flex: 1,
      
      justifyContent: "center",
      alignItems: "center",
      padding: 50,
      flexDirection: "column",
    },
   });