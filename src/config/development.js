const firebaseConfig = {
  apiKey: "AIzaSyDjoAxKT2yWOYH9dRPQdRglPdB1mnofWAQ",
  authDomain: "socialape-8f851.firebaseapp.com",
  databaseURL: "https://socialape-8f851.firebaseio.com",
  projectId: "socialape-8f851",
  storageBucket: "socialape-8f851.appspot.com",
  messagingSenderId: "6531803332",
  appId: "1:6531803332:web:a47e93aee8c97d4b374191",
  measurementId: "G-YMG6BQ5EPH"
};

// Cloud functions
const backendUrl = `https://us-central-${firebaseConfig.projectId}.cloudFunctions.net/api/graphql`;

// App engine

export default {
  firebaseConfig,
  backendUrl
};
