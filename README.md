# Euclidean Sequencer

## Overview
Euclidean sequencers divide a number of beat subdivisions over a time interval and place notes as evenly as possible into that time. They are based and take the name from the Euclidean algorithm, that computes the greatest common divisor of two given integers.The idea is very simple: repeatedly replace the larger of the two numbers by their difference until both are equal. This final number is then the greatest common divisor. That algorithm, given number *n* of time intervals, and another given number *k* < *n* of pulses, distributes the pulses as evenly as possible among these n intervals. Several traditional musical rhythms from all over the world are based on Euclidean rhythms. If you are looking for more information about it, you can check this paper: https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.72.1340&rep=rep1&type=pdf .\
Our software is a four voice euclidean sequencer implemented using the Javascript library React. It provides the user with the ability to create polymetries, polyrhythms and melodic arpeggios in a very intuitive and effective way. In fact, the user has at his disposal four circle lines, with which he can easily build his own patterns, modifying the number of intervals and pulses and their arrangement. To increase the expressive power and playability, he can also add some effects to the sequencer sounds, or act on the various channels to change the panning or individual volumes. Finally we provide several presets to discover and experience musicality from different parts of the world.

## Description

The main commands for creating your own rhythmic constructs are:
* *steps*: sets the number of intervals of the sequence;
* *pulses*: sets the number of active steps, that are distributed along the sequence according to the Euclidean algorithm;
* *rotations*: shifts steps along the sequence.
 
A pattern could be identified using this three parameters, using a standard notation in which we have *(NumberOfSteps, NumberOfPulses, Rotation)*.  For example, a Flamenco Rhythm is (4,3,1), meaning 4 steps, with 3 active pulses and 1 position of shift. 
As said before, combining the different lines is a comfortable way to generate and play with polyrhythms and polymetries.
Polyrhythm is the simultaneous combination of contrasting rhythms in music, while polymetries is any of various measuring instruments capable of indicating two or more quantities.

If you find a pattern you like, just press the save command to store the settings for steps, pulses and rotation of the 4 lines. Then just select it from a dropdown list to upload it again when you want. For greater expressive freedom,  user also has commands to adjust the volumes, panning and pitch of each individual channel.

**Custom** is the default mode of usage and provide typical drum samples. Instead of that, it is also possible to experiment using different pattern presets taken from traditional music of some parts of the world (Africa, India, Europe, Central & South America and the rest of the world) and mix them together. In these options also samples recall local instruments of the country.


###

## Sound management

We choose to use [Tone js](https://tonejs.github.io/) to develop all the audio features of our application. Events are triggered using a sampler in four different channels. The user has the control on the volume and the panning of each channel. Moreover mute/solo and step time modifier controls are available. 
The channels then flow into the master, on which a low pass filter (whose cutoff frequency can be adjusted by the user) acts in series with a reverb. Dry / wet ratio and decay time can be set too.


The diagram below describes the audio chain:
![schema audio chain](https://user-images.githubusercontent.com/58279476/134890257-ceb31fec-a9ef-4275-b9a2-50eed7b94f90.PNG)

## Graphical User Interface


## How to use it

First of all, make sure to have [Node.js](https://github.com/nodejs) installed on your pc.

Then, you have to run:

### `npm install`

command in your shell, in order to install all the packages needed for a correct Euclidean Sequencer functioning.

Now you are ready to use the application, runnig from the terminal:

### `npm run start`

To activate the pattern saving function, go to the server-api folder:

### `cd src\server-api`

Once inside, just run this command again:

### `npm run start`

## Conclusions

This Euclidean Sequencer does not pretend to be a DAW or a program for making professional music productions, but rather an application to have fun and get inspiration for possible projects. Some future developments in this sense could be the addition of effects available to the user. It could also be interesting to add other sounds and rhythmic patterns typical of countries around the world.

## Notes

This application was developed as a project for the "Advanced Coding Tools And Methodologies" course at Politecnico di Milano (MSc in Music and Acoustic Engineering).

*Andrea Ravizzotti*

*Lorenzo Brugioni*

*Eugenio Poliuti*


