{
  "name": "ZEUS-X-MD",
  "description": "Javascript WhatsApp bot made by Dilisha Gimshan",
  "logo": "https://i.ibb.co/jgHkHC2/c7c55c35ef0e51df.jpg",
  "keywords": ["bot"],
  "success_url": "/",

  "env": {
    "SESSION_ID": {
      "description": "Put the session-id here.",
      "required": true
    },  

    "ALIVE_IMG": {
      "description": "Put your alive img here.",
      "required": true
    },
    
    "ALIVE_MSG": {
      "description": "Put your alive msg here.",
      "required": true
    }   
},

     "buildpacks": [
        {
            "url": "https://github.com/heroku/heroku-buildpack-nodejs.git"
        }
     ],
  "stack": "heroku-24"
}
