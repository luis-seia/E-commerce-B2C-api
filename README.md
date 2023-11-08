
<!-- PROJECT LOGO -->

<br  />

<h1  align="center">

<img  src="https://media.discordapp.net/attachments/912996760589316120/1061248750305157131/My_project-1.png?width=683&height=683"  alt="Logo"  width="300">

</a>



</h1>

  

<h4  align="center">built with NodeJS & MongoDB</h4>



## Key Features

  

* Authentication
    * Login [Public]
    * SignUp [Public]
    * Tokens [User]

* Password Management
    * Change Password [User]
    * Forgot Password [Public]
    * Reset Password [Public]

* Email Management
    * Send Email for forgot password [User]

* User
    * Create New User [Admin]
    * Get All Users [Admin]
    * Get User Data Using It's ID [Public]
    * Update User Details Using It's ID [User]
    * Delete User Using It's ID [Admin]

* Cart Services
    * Add Product To Cart [User]
    * Get Cart [User]
    * Delete Cart Item [User]
    * Delete Cart [User]

* Product Services
    * Search products using Keywords [Public]
    * Query products using Category [Public]
    * filter product Products by price, date, popularity[Public]
    * Query Product Using It's ID [Public]
    * Create new product [Seller]
    * Update Product Details [Seller]
    * Delete Product Using It's ID [User]

* Order Services
    * Create New Order [User]
    * Query Orders [User]
    * Query Order Using It's ID [User]
    * Update Order Status [Admin]
    * get all Orders [Admin]

* Category Services
    * Create New Category [User]
    * Query Categories [Public]
    * Query Category Using It's ID [Public]
    * Update Category Details [Admin]
    * Delete Category [Admin]
    
* Address
    * create Addres[user]
    * update address[user]
    * get address[user]
    
* payment
    * verify Payment

  
  


  

## To-do

* manage Product Quanti

* Add Product Color

* Add Product Size

* Delete Product Color

* Delete Product Size

* Add pagination

* add favorites

* add analytics for products
  

## Installation

You can fork the app or you can git-clone the app into your local machine. Once done that, please install all the

dependencies by running

### install al the dependencies 
```
$ npm install
```
### setup .env
This file contains the configuration for the environment variables used in this project. You will need to set the values for these variables in order to start the application.
```
#server  
PORT: The port on which the server will run.
BASE_FRONTEND_URL: The base URL for the frontend server.
BASE_BACKEND_URL: The base URL for the backend server.

#database
MONGODB_URL: The URL for the MongoDB database. This is used to connect to the

#authentication
JWT_SECRET_EXPIRE: The number of seconds after which JWTs will expire.
JWT_SECRET_KEY: The secret key used for signing and verifying JSON Web Tokens
CRYPTOJS_SECRET_KEY: The secret key used for encrypting and decrypting

#payment 
RAZORPAY_KEY_SECRET: The Key Secret for the Razorpay payment gateway.
RAZORPAY_KEY_ID: The Key ID for the razorpay payment gateway.

email
EMAIL_PASSWORD: The password for the email account being used to send emails.
EMAIL_USERNAME: The username for the email account being used to send emails.
EMAIL_FROM: The email address that the emails will be sent from.
MAIL_SERVICE: The mail service used for sending emails ex. gmail.
```
### Start server
```
$ npm run start
```



# e-commerce-api-pj1
# e-commerce-api-pj1
# E-commerce-B2C-api
