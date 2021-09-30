# Euclidean Sequencer

## Overview
Euclidean sequencers divide a number of beat subdivisions over a time interval and place notes as evenly as possible into that time. They are based and take the name from the Euclidean algorithm, that computes the greatest common divisor of two given integers.The idea is very simple: repeatedly replace the larger of the two numbers by their difference until both are equal. This final number is then the greatest common divisor. That algorithm, given number *n* of time intervals, and another given number *k* < *n* of pulses, distributes the pulses as evenly as possible among these n intervals. Several traditional musical rhythms from all over the world are based on Euclidean rhythms. If you are looking for more information about it, you can check this paper: https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.72.1340&rep=rep1&type=pdf .\
Our software is a four voice euclidean sequencer implemented using the Javascript library React. It provides the user with the ability to create polymetries, polyrhythms and melodic arpeggios in a very intuitive and effective way. In fact, the user has at his disposal four circle lines, with which he can easily build his own patterns, modifying the number of intervals and pulses and their arrangement. To increase the expressive power and playability, he can also add some effects to the sequencer sounds, or act on the various channels to change the panning or individual volumes. Finally we provide several presets to discover and experience musicality from different parts of the world.

## Description

There are basically two different modes. The first one, called **Custom**, allows you to create your own patterns from scratch, modify the speed of the individual lines, .. 
The main commands for creating your own rhythmic constructs are:
* *steps*: sets the number of intervals of the sequence;
* *pulses*: sets the number of active steps, that are distributed along the sequence according to the Euclidean algorithm;
* *rotations*: shifts steps along the sequence.

As said before, this is a comfortable way to generate and play with polyrhythm and polymetries.
Polyrhythm is the simultaneous combination of contrasting rhythms in music, while polymetries is any of various measuring instruments capable of indicating two or more quantities.


The second one instead offers different presets from some parts of the world (Africa, India, Europe, Central & South America and the rest of the world). 
For each one there are different rhythms taken from traditional music and samples that recall local instruments.

###

## Sound management

We choose to use [Tone js](https://tonejs.github.io/) to develop all the audio features of our application. Events are triggered using a sampler in four different channels. The user has the control on the volume and the panning of each channel. Moreover mute/solo and step time modifier controls are available. 
The channels then flow into the master, on which a low pass filter (whose cutoff frequency can be adjusted by the user) acts in series with a reverb. Dry / wet ratio and decay time can be set too.


The diagram below describes the audio chain:
![schema audio chain](https://user-images.githubusercontent.com/58279476/134890257-ceb31fec-a9ef-4275-b9a2-50eed7b94f90.PNG)

## Graphical User Interface




## Notes

This application was developed as a project for the "Advanced Coding Tools And Methodologies" course at Politecnico di Milano (MSc in Music and Acoustic Engineering).

*Andrea Ravizzotti*

*Lorenzo Brugioni*

*Eugenio Poliuti*


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
