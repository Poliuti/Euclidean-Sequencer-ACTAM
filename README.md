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

## GUI Overview

We tried to keep the user interface as simple and minimalistic as possible. The sequencer is made up of 4 channels, each one of them has its own controls to modify the characteristics of the rhythm and all of them are managed all together by 'Tempo Controls' and 'Mactro controls', as well as 'Play', 'Pause' and 'Save' buttons. 

In order to make every channel easier to control, the rhythm of each one of them is represented next to the channel controls as a dotted circumference where every dot represents a step and every coloured dot represent a pulse. When the sequencer starts playing a white dot tracks the current position inside the loop.

<br> 
<p align="center" width="100%">
    <img width="33%" src="https://user-images.githubusercontent.com/58031495/135873963-5a0ce6e5-de27-4070-a334-e8f161040690.jpg">
</p>

In the upper part of the screen, just below the title 'Euclidean Sequencer' we find the list of the geographic areas that we decided to explore to find how the Euclidean rhythms are exploited in different part of the world to construct etnic rhythms.
Alongside these areas there is the 'Custom' mode that can be used to create new rhythms, following the Euclidean rules.

<br>
<p align="center" width="100%">
    <img width="100%" src="https://user-images.githubusercontent.com/58031495/135874143-a65ce0fc-897f-4875-9520-fa535e698b5c.jpg">
</p>

## Channel Controls

Each channel is controlled by 3 sliders that set the rhythm, 3 sliders that adjust the output, 'Mute' and 'Solo' buttons, 'Double Tempo' and 'Half Tempo' buttons and, with the exeption of the 'Custom' section, a drop down menu to choose from pre-existing Euclidean Pattern belonging to the specific region the user is currently selecting.

<br>
<p align="center" width="100%">
    <img width="33%" src="https://user-images.githubusercontent.com/58031495/135874441-fb80bcc9-a058-46ec-90c7-26b68b76f544.jpg">
</p>

In order to set the rhythm the user can choose the number of steps and pulses which represents respectively the number of total subdivisions and the number of instances that produce sound, both using the corresponding sliders and in addition the user can rigidly rotate the shape by using the 'Rotations' slider.

To adjust the output the user can modify the volume using the 'Vol' slider, the panning using the 'Pan' slider and the pitch shift using the 'Note' slider.

The 'Mute' button and the 'Solo' button are placed below the channel control sliders and are shaped as capital letters M and S.
Their function is self explenatory: 'Mute' makes the corresponding channel silent, 'Solo' makes every other non-solo channel silent.

The 'Double Tempo' and 'Half Tempo' buttons are shaped respectively as 'x2' and ':2' and have the function of modify the measure of the period of each channel. The current measure is written below the dotted circle representation of the channel.

<br>
<p align="center" width="100%">
    <img width="48%" src="https://user-images.githubusercontent.com/58031495/135874551-470881b8-0250-497d-ae8d-9a7a3ab5938b.jpg">
</p>

Finally if the user has selected a geographic area, hence it is not in the 'Custom' section, there is an additional dropdown menu that allows to choose between several pre-existing rhythm, typical of the selected geograhic area.
Every rhythm is specified by its regional name and contains the information that defines the rhythm itself, enclosed in brackets in the following format: (Steps, Pulses, Rotations).

## Tempo Controls

In the upper left part of the screen, just below the 'Custom' menu selection, there are the 'Tempo Controls' that affects the channels all together.
These are shaped as sliders and allows the user to control the BPM, the amount of swing which is a coefficient that drags the pulses slightly to create a pleasing and more natural sound, and the swing subdivision which defines the subdivision of the slightly dragged pulses.

<br>
<p align="center" width="100%">
    <img width="50%" src="https://user-images.githubusercontent.com/58031495/135874618-8f59695e-79e9-4ed4-809d-946116eee760.jpg">
</p>

## Macro Controls

'Macro controls' are located in the upper right part of the screen, oppostite to the 'Tempo Controls' in a mirrored style.
They are made up of 4 sliders that controls the master volume, the reverberation that sets the persistance of the sound after the sound is produced, the wet/dry slider that controls the amount of effect with respect to the pure sound and a lowpass filter that controls the cutoff of the signal.

<br>
<p align="center" width="100%">
    <img width="50%" src="https://user-images.githubusercontent.com/58031495/135874667-182fee3c-e288-4718-8612-c7fed86d28c2.jpg">
</p>

## Reproduction Buttons

Finally the most important buttons are placed between the 'Tempo Controls' and the 'Macro Controls' and they are the 'Play', 'Pause' and 'Save' buttons.
'Play' and 'Pause' function is self explanatory and they controls the reproduction, while the 'Save' button allows the user to save the currently used patterns for later reproductions. The saved pattern is shown on a dropdown menu below the reproduction buttons alongside with all the other previously saved patterns.

<br>
<p align="center" width="100%">
    <img width="35%" src="https://user-images.githubusercontent.com/58031495/135874722-62190b23-07f3-4e0b-b04a-da500dc283f5.jpg">
</p>

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


