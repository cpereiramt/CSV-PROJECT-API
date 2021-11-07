# CSV-PROJECT-API
To configure this project,follow the step by step below:

### Configuration
----
* Edit the .env.example file with your enviroment information.
* To execute this APP, install nodeJS and MongoDB in your system and go to root folder and type the follow commands:
*   <code> npm install </code> and <code> npm start </code>
*  To execute as development mode type the command:
*  <code> npm run hotReload </code>
----  

### Endpoints
----
##### user
* POST /user/


#### contact
* POST /contact

#### auth
* POST /auth
    
-----

#### Next steps to implement
* Process CSV file upload by User
* Mapping CSV information into collection fields
* send response to user after finish file processing
* Save history file processing, for show information to users.
* Refactor the code to make the file processing in background, maybe using strams
* Encrypt user password
* Create enumeration of status of imported files.
* Make the Upload of files to AWS s3
* and so on
* Implement unit tests
* deploy project on AWS
-----



