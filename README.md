# Sneakerheads

## Description

Sneakerheads is an online forum for shoe collectors to share their collections or to buy/trade shoes from other collectors. Additionally, users are able to chat with their fellow Sneakerheads in the app. A feed page shows all uploads from other users. If you'd like to review a certain user's page, you can click on their name from the feed page. 

## Built with: 
Express, React JS, Node JS, Material UI, React Chat App, React-Bootstrap, MySQL (via MySQL Workbench), JAWSDB, JSON Webtoken
  
## Installation
### View the Project Live <br>
https://sneaker-heads.herokuapp.com/

### Run the Project Locally

* Step 1: Navigate to the directory you want to store the project. Clone this your repository to your local computer using the command below. 
```bash
git clone https://github.com/hugo2211/Sneaker_Head
```

* Step 2: Use the command line to navigate to the directory that you cloned the project.
Example:
```bash
cd directory/projectdirectory
```

* Step 3: Install the npm package dependencies from the package.json file.
```bash
npm install
```

* Step 4: While in the project directory, run the program using node using the command below. Open you browser and navigate to localhost:3000 to view the application.
```bash
npm start
```  
## Usage 

### Login Page

The application brings up the login page. If an account already exists, the user may enter their email and password associated with the account.  

<img src="./readmeImages/Login.jpg" alt="Login Page" width="500px" height="250px">

If not, the user must select Register, which takes them to the Registration page. 

### Register Page

The registration page will ask for a first and last name, email, and a password. 

<img src="./readmeImages/Register.jpg" alt="Registration Page" width="500px" height="250px">

Once this information has been entered, the application will push the user back to the login page to use their new credentials. 

### Profile Page

Once appropriate credentials have been entered, the user is taken to the profile page. This page shows all of the user's personal shoe collection. 

<img src="./readmeImages/Profile.jpg" alt="Profile Page" width="500px" height="250px">

From this page, the user has the ability to edit their post. 

<img src="./readmeImages/EditPost.jpg" alt="Edit Feature" width="500px" height="250px">

As well, the user has the ability to delete their post. A modal will popup to ensure that the user is intentionally deleting their post.

<img src="./readmeImages/DeletePostModal.jpg" alt="Delete Feature" width="500px" height="250px">


### Feed Page

The feed page contains content from other users. The user is able to browse the entire feed. 

<img src="./readmeImages/FeedPage.jpg" alt="Feed Page" width="500px" height="250px">

Should the user wish to browse a certain collection, they can click on the name of a user and be taken to that user's collection. 

<img src="./readmeImages/OtherCollectorPage.jpg" alt="Other Collectors' Pages" width="500px" height="250px">

As well, if the user is searching for a certain brand or style, they may use the search feature to find what they're looking for.

<img src="./readmeImages/SearchFeedPage.jpg" alt="Search Feed Page" width="500px" height="250px">


### Chat Page

The chat feature allows users to converse about their collections as well as make an offer on a pair of shoes they like. 

<img src="./readmeImages/ConvoStart.jpg" alt="Conversation Start" width="500px" height="250px">

Simply select the plus next to new chat.

<img src="./readmeImages/NewChatButton.jpg" alt="New Chat Button" width="200px" height="100px">

Select the user to initiate the conversation.

<img src="./readmeImages/ChooseUser.jpg" alt="Select User" width="500px" height="250px">

Type a message in the chat

<img src="./readmeImages/ChatResult.jpg" alt="Chat Message" width="500px" height="250px">

The other user is also able to respond.

<img src="./readmeImages/ConvoTyping.jpg" alt="Typing response" width="500px" height="250px">
<br>

<img src="./readmeImages/ChatSent.jpg" alt="Complete Response" width="500px" height="250px">


### Upload Page

The upload page provides the user with the ability to upload shoes from their own collection, including photos of the shoes. 

<img src="./readmeImages/UploadPage.jpg" alt="Upload Page" width="500px" height="250px">

Below is an example of a user entering a new shoe into their 

<img src="./readmeImages/UploadData.jpg" alt="Upload Data" width="500px" height="250px">

<img src="./readmeImages/NewShoePosted.jpg" alt="New Post" width="500px" height="250px">

### Questions
Feel free to reach out to any of us if you have any questions/feedback about this project:  
[Stacy Betts](https://github.com/stacyo23), [Jeffrey Davis](https://github.com/kingdonut23), [Harrison Glover](https://github.com/Glove1911), [Victor Mendizabal](https://github.com/hugo2211), [Mark Mulligan](https://github.com/Mark-Mulligan)

## License
MIT License

### Repository
[Repository](https://github.com/hugo2211/Sneaker_Head)

### Heroku
[Heroku](http://sneaker-heads.herokuapp.com/)