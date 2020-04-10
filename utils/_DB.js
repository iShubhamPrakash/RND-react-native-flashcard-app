const deck={
  Covid19:{
    title:"Covid19",
    cards:[
      {
        question:'What is Coronavirus?',
        answer:'Coronaviruses are a large family of viruses which may cause illness in animals or humans.  In humans, several coronaviruses are known to cause respiratory infections ranging from the common cold to more severe diseases such as Middle East Respiratory Syndrome (MERS) and Severe Acute Respiratory Syndrome (SARS). The most recently discovered coronavirus causes coronavirus disease COVID-19.'
      },
      {
        question:'What is COVID-19?',
        answer:'COVID-19 is the infectious disease caused by the most recently discovered coronavirus. This new virus and disease were unknown before the outbreak began in Wuhan, China, in December 2019.'
      },
      {
        question:'What are the symptoms of Covid 19',
        answer:"The most common symptoms of COVID-19 are fever, tiredness, and dry cough. Some patients may have aches and pains, nasal congestion, runny nose, sore throat or diarrhea. These symptoms are usually mild and begin gradually. Some people become infected but don’t develop any symptoms and don't feel unwell. Most people (about 80%) recover from the disease without needing special treatment. Around 1 out of every 6 people who gets COVID-19 becomes seriously ill and develops difficulty breathing. Older people, and those with underlying medical problems like high blood pressure, heart problems or diabetes, are more likely to develop serious illness. People with fever, cough and difficulty breathing should seek medical attention."
      },
      {
        question:'How does covid-19 spread?',
        answer:"People can catch COVID-19 from others who have the virus. The disease can spread from person to person through small droplets from the nose or mouth which are spread when a person with COVID-19 coughs or exhales. These droplets land on objects and surfaces around the person. Other people then catch COVID-19 by touching these objects or surfaces, then touching their eyes, nose or mouth. People can also catch COVID-19 if they breathe in droplets from a person with COVID-19 who coughs out or exhales droplets. This is why it is important to stay more than 1 meter (3 feet) away from a person who is sick."
      },
      {
        question:'Can the virus that causes COVID-19 be transmitted through the air?',
        answer:'Studies to date suggest that the virus that causes COVID-19 is mainly transmitted through contact with respiratory droplets rather than through the air.  See previous answer on “How does COVID-19 spread?”'
      },
      {
        question:'Should I worry about covid 19?',
        answer:"Illness due to COVID-19 infection is generally mild, especially for children and young adults. However, it can cause serious illness: about 1 in every 5 people who catch it need hospital care. It is therefore quite normal for people to worry about how the COVID-19 outbreak will affect them and their loved ones."
      },
      {
        question:'Who is at risk of developing severe illness?',
        answer:"While we are still learning about how COVID-2019 affects people, older persons and persons with pre-existing medical conditions (such as high blood pressure, heart disease, lung disease, cancer or diabetes)  appear to develop serious illness more often than others. "
      },
      {
        question:'Is COVID-19 airborne?',
        answer:"No, The virus that causes COVID-19 is mainly transmitted through droplets generated when an infected person coughs, sneezes, or speaks. These droplets are too heavy to hang in the air. They quickly fall on floors or surfaces. "
      },
    ]
  },

  React: {
    title: 'React',
    cards: [
      {
        question: 'What is React?',
        answer: 'React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. '
      },
      {
        question: 'Which programming language is used in React',
        answer: 'React mainly uses JavaScript although you can also write in TypeScript which is a superset language of JavaScript.'
      },
      {
        question:"Why can’t browsers read JSX?",
        answer:"Browsers can only read JavaScript objects but JSX in not a regular JavaScript object. Thus to enable a browser to read JSX, first, we need to transform JSX file into a JavaScript object using JSX transformers like Babel and then pass it to the browser."
      },
      {
        question:'What do you understand from “In React, everything is a component.”',
        answer:"Components are the building blocks of a React application’s UI. These components split up the entire UI into small independent and reusable pieces. Then it renders each of these components independent of each other without affecting the rest of the UI."
      },
      {
        question:"Explain the purpose of render() in React.",
        answer:"Each React component must have a render() mandatorily. It returns a single React element which is the representation of the native DOM component. If more than one HTML element needs to be rendered, then they must be grouped together inside one enclosing tag such as <form>, <group>,<div> etc. This function must be kept pure i.e., it must return the same result each time it is invoked."
      },
      {
        question:"What are synthetic events in React?",
        answer:"Synthetic events are the objects which act as a cross-browser wrapper around the browser’s native event. They combine the behavior of different browsers into one API. This is done to make sure that the events show consistent properties across different browsers."
      },
    ]
  },

  JavaScript: {
    title: 'JavaScript',
    cards: [
      {
        question: 'What is JavaScript?',
        answer:'JavaScript is a client-side as well as server side scripting language that can be inserted into HTML pages and is understood by web browsers. JavaScript is also an Object based Programming language'
      },
      {
        question: 'What are the data types supported by JavaScript?',
        answer:
          'The data types supported by JavaScript are: Undefined, Null, Boolean, String, Symbol, Number, Object'
      },
      {
        question:'What is the use of isNaN function?',
        answer:'isNan function returns true if the argument is not a number otherwise it is false.'
      },
      {
        question:'What is negative infinity?',
        answer:'Negative Infinity is a number in JavaScript which can be derived by dividing negative number by zero.'
      },
      {
        question:'Which company developed JavaScript?',
        answer:'Netscape is the software company who developed JavaScript.'
      },
      {
        question:'What are undeclared and undefined variables?',
        answer:'Undeclared variables are those that do not exist in a program and are not declared. If the program tries to read the value of an undeclared variable, then a runtime error is encountered. Undefined variables are those that are declared in the program but have not been given any value. If the program tries to read the value of an undefined variable, an undefined value is returned.'
      },
      {
        question:"What is 'this' keyword in JavaScript?",
        answer:"'This' keyword refers to the object from where it was called."
      },
      {
        question:'What do mean by NULL in Javascript?',
        answer:'The NULL value is used to represent no value or no object. It implies no object or null string, no valid boolean value, no number and no array object.'
      },
    ]
  },

}

export default deck