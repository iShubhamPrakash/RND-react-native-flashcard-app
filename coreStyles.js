import {StyleSheet} from 'react-native'

const coreStyles=StyleSheet.create({

  container:{
    flex: 1,
    padding:16,
    justifyContent: "center",
    // alignItems:'center',
    backgroundColor:'pink'
  },






  card:{
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
})

export default coreStyles