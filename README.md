# Lyft_App
App contains an API endpoint which accepts a POST request containing a string to be modified, and returns the modified string in JSON format. 

## Running App
To run app, open the project directory in terminal, and run the following commands:

1. ```npm i express cors body-parser```

2. ```node app.js```

After this, you will be able to send a POST request containing a JSON object in this format: ```{"string_to_cut": "stringchars"}```

The endpoint will return a new string made up of every third char of the original string, in this format: ```{"return_string": "returnchars"```
