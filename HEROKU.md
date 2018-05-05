# Build and Deploy on Heroku

To deploy on Heroku, use special `heroku-web` branch.

> **Never merge commits from `heroku-web` to `master`!**

Basically process look like this:
  - Pull latest changes from `master` to the `heroku-web`
  - When on the `heroku-web` branch locally create production build using this commands :
    ```sh
    cd client
    npm run build
    ```
  - This will update `/dist` folder on the root level
  - Commit and push latest `/dist` changes to the `heroku-web` on the **Github** and to the `master` on the **Heroku**. How to properly push to the Heroku:
    ```sh
    git push heroku heroku-web:master
    ```
