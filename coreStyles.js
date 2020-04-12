const coreStyles={

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
  },

  buttonGradient:{
    colors: ['#FF9800', '#F44336'],
    start: { x: 0, y: 0.5 },
    end: { x: 1, y: 0.5 },
  }
}

export default coreStyles