# Emoji Clicker

A simple full stack application using Typescript, React, Go and Postgres.

Players pick an emoji (their team) to support.

Players click their chosen emoji to collect points, points are shared in
the team.

## Building

This project was bootstrapped with [Create React App].

[Create React App]: https://github.com/facebook/create-react-app

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open <http://localhost:3000> to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

NOTE: you will need a [backend] serving the API on localhost port 5000 for the default settings. You can also deploy it somewhere else and set the environrment variable `REACT_APP_BASEURL` before running `yarn start`.

[backend]: https://github.com/fabjan/mmocg

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment] for more information.

[deployment]: https://facebook.github.io/create-react-app/docs/deployment

## Deploying

You can use the included Dockerfile to build a simple server using nginx to serve the bundled app.

```shell
$ export BASEURL=https://your.backend.example.com/api/v1 # or something
$ docker build -t emoji-clicker:latest --build-arg baseurl="$BASEURL" .
```

To test locally:

```shell
$ docker run -it -p9191:80 emoji-clicker 
```

Tag and push to your favorite registry and deploy it.

## TODO

- [x] React Typescript App skeleton
- [x] API definition v1
- [x] Stubbed [backend]
- [x] Deploy backend (see Dockerfile in server repo)
- [ ] Integrate front and back ends (in progress)
- [ ] Database integration
- [ ] Release
- [ ] Discord integration
- [ ] Improve team selection state
- [ ] Search team by terms in emoji name (e.g. "heart")

## WONTDO (probably)

- [ ] Mobile version
- [ ] Load testing
- [ ] Security
