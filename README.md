# dad-a-base


[dad-a-base](https://dad-a-base.herokuapp.com/) is a website that scrapes dad-related news and articles from the top dad websites. It helps users find parenting tips, activities to do with their kids, and allows them to connect with others with a built-in forum. Users can log in (via e-mail or Facebook), create discussions, and respond to others' posts.

## Getting Started


These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites


Make sure you have [Node](https://nodejs.org/en/download/), [MySQL](https://dev.mysql.com/downloads/), and [Yarn](https://yarnpkg.com/en/) installed. You will also need to [create a Facebook app](https://developers.facebook.com/) and use its ID and secret in order to use the Facebook login.

### Installing


1. Git clone the project repository onto your local machine. Using your preferred console, navigate to your desired folder and run:

```
git clone https://github.com/JSR88431/projectThree.git
```

2. Navigate into the project folder and use Yarn to install all the node modules related to the project.

```
cd projectThree
yarn install
```

3. This is where you need your Facebook app info. Create a .env file and fill it in as below:

```
DB_ID=[Your Facebook app ID here]
DB_SECRET=[Your Facebook app secret here]
```

4. Navigate to `config/config.json` and make sure your development username and password match your MySQL credentials. Failure to do so will result in proxy errors when the server is started.


5. Install the node modules with Yarn.

```
yarn install
```

6. Use yarn to start both the front and back end servers concurrently.

```
yarn start
```


The main page should pop up in your main browser after the server starts running.


### Testing


A test user for log-ins is set up upon app mounting:
```
Email: test@test.com
Password: test
```

## Deployment

We used Heroku and JawsDB MySQL to launch the website. To do so, make the app on Heroku and link the project to it. Install the free JawsDB MySQL add-on.

## Built With

* [React](http://www.dropwizard.io/1.0.2/docs/) - The front-end JavaScript library used.
* [Node.js](https://nodejs.org/en/) - The open source server environment used.
* [MySQL](https://dev.mysql.com/) /w [Sequelize](http://docs.sequelizejs.com/) - The relational database management system used.
* [Express](https://expressjs.com/) - The web application framework used.
* [Passport](http://www.passportjs.org/) - The authentication middleware used for local and Facebook log-ins.

<!-- ## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).  -->

## Authors

* **Josephson Reynoso**  - [GitHub](https://github.com/JSR88431)

* **Johnn Santos** - [GitHub](https://github.com/Caffeineking)

* **Carrie Wiener**  - [GitHub](https://github.com/Carebear8)

* **Anthony Zheng** - [GitHub](https://github.com/ajz003)



<!-- ## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details -->

## Acknowledgments

* [Lynda Chiwetelu](https://twitter.com/lyndachiwetelu) for her wonderful [Passport with Sequelize and MySQL](https://code.tutsplus.com/tutorials/using-passport-with-sequelize-and-mysql--cms-27537) tutorial.