## Get the project running

This project uses Node, so you will need to make sure it is installed on your machine.

With Node installed, we will need to install a couple of global libraries via the Node Package Manager (npm).

* `npm i -g grunt-cli`
* `npm i -g karma-cli`

These libraries provide the Grunt and Karma command-line interfaces. Additionally, we will install Bower to handle client side libraries.

With these dependencies install, we will now install the local project dependencies. From the project folder:

`npm install`

Now you should be able to run `grunt autotest` to see the tests in action! To view code coverage, simple open the the corresponding file in the *coverage* sub-folder.



