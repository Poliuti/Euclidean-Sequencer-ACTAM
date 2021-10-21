# Euclidean Sequencer

## Overview

An **Euclidean sequencer** is a simultaneous combination of multiple rhythmic lines, called ***Euclidean rhythms***. They distribute a determined number of onsets as evenly as possible across a determined number of time interval subdivisions.. They are based and take the name from the *Euclidean algorithm*, that computes the greatest common divisor of two given integers. The idea is very simple: repeatedly replace the larger of the two numbers by their difference until both are equal. This final number is then the greatest common divisor. That algorithm, given number *n* of time intervals, and another given number *k* < *n* of pulses, distributes the pulses as evenly as possible among these n intervals. Several traditional musical rhythms from all over the world are based on Euclidean rhythms. If you are looking for more information about it, you can check this paper:
https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.72.1340&rep=rep1&type=pdf.

Our application provides the user with the ability to create polymeters and polyrhythms in a very intuitive and effective way. In fact, the user has at his disposal four circle lines, with which he can easily build his own patterns, modifying the number of intervals and pulses and their arrangement. To increase the expressive power and playability, he can also add some effects to the sequencer sounds, or act on the various channels to change the panning or individual volumes. Finally we provide several presets to discover and experience musicality from different parts of the world.

<br> 
<p align="center" width="100%">
    <img width="75%" src="https://user-images.githubusercontent.com/58031495/137636128-9e4ccf7c-588f-4e52-ba1f-bedd5f6a9eb1.jpg">
</p>

## Description

For each channel we define **Euclidean Line** the set of commands for creating the sequence and managing the sound. 
The patterns, called **Euclidean Patterns**, can be described using the representation of the Euclidean algorithm given by Bjorklund. He represents this problem as a binary
sequence of k one’s and n - k zero’s, where each integer represents a time interval, and the one’s represent
the pulses. The problem then reduces to the following: construct a binary sequence of n bits with
k one’s, such that the k one’s are distributed as evenly as possible among the zero’s. For each Euclidean Line an Euclidean Pattern is provided, in which a 1 trigger a sample, while a 0 corresponds to a silence time.

<br> 
<p align="center" width="100%">
    <img width="45%" src="https://user-images.githubusercontent.com/58279476/137896273-fbd224a6-b3db-49ac-b369-5f4c8d745e41.PNG">
</p>



The main commands for creating your own Euclidean Pattern are:
* ***steps***: sets the number of intervals of the sequence;
* ***pulses***: sets the number of active steps, that are distributed along the sequence according to the Euclidean algorithm;
* ***rotations***: shifts circularly the pattern.
 
A pattern is uniquely identified by these three parameters, using a standard notation in which we have *(NumberOfSteps, NumberOfPulses, Rotation)*.  For example, a Flamenco Rhythm is (4,3,1), meaning 4 steps, with 3 active pulses and 1 position of shift. 
As said before, combining the different lines is a comfortable way to generate and play with polyrhythms and polymeters, simultaneously combining contrasting rhythms.

If you find a pattern you like, just press the save command to store the settings for steps, pulses and rotation of the 4 Euclidean lines. Then just select it from a dropdown list to upload it again when you want. For greater expressive freedom,  user also has commands to adjust the volumes, panning and pitch of each individual channel.

**Custom** is the default mode of usage and provide typical drum samples. Instead of that, it is also possible to experiment using different pattern presets taken from traditional music of some parts of the world (**Africa, Asia, Europe and Latin America**) and mix them together. In these options also samples recall local instruments of the country.



## GUI and Commands Overview

We tried to keep the user interface as simple and minimalistic as possible. As previously stated, our Sequencer is made up of 4 Euclidean Lines that play together. A series of controls is provided for each Euclidean Line, called *Line Controls*, as well as more general controls for tempo, transport and master effects.

In order to better visualize the Euclidean Patterns, each one of them is represented next to the Line Controls as a dotted circumference where every dot represents a step and every coloured dot represent a pulse. When the sequencer starts playing a white dot tracks the current position inside the loop.

<br> 
<p align="center" width="100%">
    <img width="33%" src="https://user-images.githubusercontent.com/58031495/135873963-5a0ce6e5-de27-4070-a334-e8f161040690.jpg">
</p>
<br>

In the upper part of the screen, just below the title 'Euclidean Sequencer', we can find the Navigation Bar that includes the Custom mode and the list of the geographic areas that we decided to explore to find how the Euclidean rhythms are exploited in different part of the world to construct ethnic rhythms.
For each area, the user can find the selection of ethnic rhythms, typical of the chosen area, inside the dropdown menu of each Euclidean Line while the Custom section includes 
all the rhythms from every area. Moreover for each geographic area the selection of samples changes accordingly, in order to imitate the characteristic sounds of the chosen culture.

<br>
<p align="center" width="100%">
    <img width="100%" src="https://user-images.githubusercontent.com/58031495/135874143-a65ce0fc-897f-4875-9520-fa535e698b5c.jpg">
</p>

### Line Controls

Each Euclidean Line is controlled by:
* ***Pattern Controls*** that determine the binary sequence inside the Euclidean Array
* ***Channel Controls*** that set the channel parameters 
* ***Pattern Subdivision Control*** that modifies the interval between subsequent steps
* a drop down menu that allows the user to choose from some default patterns.

<br>
<p align="center" width="100%">
    <img width="45%" src="https://user-images.githubusercontent.com/58031495/137636239-6274d665-8306-4738-b905-cc99d5d5f487.jpg">
</p>

#### Pattern Controls

In order to set the rhythm the user can choose the number of *steps* and *pulses* which represents respectively the number of total subdivisions and the number of instances that produce sound, both using the corresponding sliders and in addition the user can rigidly rotate the shape by using the *'Rotations'* slider.

<br>
<p align="center" width="100%">
    <img width="33%" src="https://user-images.githubusercontent.com/58031495/137636542-7035e763-ad0a-4c45-a529-53e6fdd0ebfd.jpg">
</p>

#### Channel Controls

The user can modify channel parameters such as *volume*, *panning* and *pitch* of the sample through the corresponding sliders respectively called 'Vol', 'Pan' and 'Pitch'.

The other Channel Controls available are the *'Mute'* and *'Solo'* buttons, placed below the sliders and are shaped as capital letters M and S.
Their function is self explanatory: 'Mute' makes the corresponding channel silent, 'Solo' makes every other non-solo channel silent.


<br>
<p align="center" width="100%">
    <img width="33%" src="https://user-images.githubusercontent.com/58031495/137637051-7af8b993-4a69-4a96-b79d-660f92ac85a3.jpg">
</p>

#### Pattern Subdivision Controls

The *'Double Tempo'* and *'Half Tempo'* buttons are shaped respectively as 'x2' and ':2' and have the function of doubling or halving the time interval between two subsequent steps. The current measure is written below the dotted circle representation of the Euclidean Line.


<br>
<p align="center" width="100%">
    <img width="48%" src="https://user-images.githubusercontent.com/58031495/137636668-cdc312c9-d77b-4f13-9429-10c9df3d039e.jpg">
</p>

Finally, from the dropdown menu, the user is able to select traditional rhythm patterns typical of the chosen geograhic area, among the selection we provide.
Every rhythm is specified by its own name and contains the information that defines the pattern itself, enclosed in brackets using the previously described standard notation as follows: (Steps, Pulses, Rotations).


<br>
<p align="center" width="100%">
    <img width="48%" src="https://user-images.githubusercontent.com/58031495/137636692-896bee8a-159f-4f65-9668-1814016fe9a4.jpg">
</p>


### Tempo Controls

The *'Tempo Controls'* are located in the upper left part of the screen and they manage the general tempo settings of the Euclidean Sequencer.
These are shaped as sliders and allow the user to control the BPM, the amount of swing, which is a coefficient that drags the pulses slightly to create a pleasing and more natural sound, and the swing subdivision which defines the subdivision of the slightly dragged pulses.

<br>
<p align="center" width="100%">
    <img width="50%" src="https://user-images.githubusercontent.com/58031495/137636722-e05c3d15-566f-4167-9544-33aef0da1c1b.jpg">
</p>

### Macro Controls

*'Macro controls'* are located in the upper right part of the screen, opposite to the 'Tempo Controls' in a mirrored style.
They are made up of 4 sliders that control:
* the *master volume* ('Volume' slider)
* the *reverb decay time* in seconds, that sets the persistance of the sound after it is produced ('Rev Decay' slider)
* the *reverb dry/wet percentage*, that controls the amount of effect with respect to the clean sound ('Rev Wet' slider)
* the *cutoff frequency* of the low pass filter ('Cutoff' slider).

<br>
<p align="center" width="100%">
    <img width="50%" src="https://user-images.githubusercontent.com/58031495/137636729-d7b50968-941c-4c2b-aea6-cd61fb1ec5a0.jpg">
</p>

### Reproduction Buttons

Finally the most important buttons are placed between the *'Tempo Controls'* and the *'Macro Controls'* and they are the 'Play', 'Pause' and 'Save' buttons.
'Play' and 'Pause' function is self explanatory and they controls the reproduction, while the 'Save' button allows the user to save the currently used patterns for later reproductions. The saved pattern is shown on a dropdown menu below the reproduction buttons alongside with all the other previously saved patterns.

<br>
<p align="center" width="100%">
    <img width="35%" src="https://user-images.githubusercontent.com/58031495/135874722-62190b23-07f3-4e0b-b04a-da500dc283f5.jpg">
</p>


## Code Details

We used **React** as framework to develop our application, while for the audio synthesis and routing part as well as for the clock and time handling, we used the Javascript audio library [Tone js](https://tonejs.github.io/).
Our App allows to explore different geographic areas, that we will call Environments.
For each one of these, we dynamically create an Euclidean Sequencer, starting from data contained or generated inside the Context called *EnvironmentContext*.
The main subscriber of the EnvironmentContext is the EuclideanSequencer react component, that then will use the data to render and make our application work.
We want the context to run whenever some sensible data is changed, so we stored here some very important state variables.

### Main State Variables

The main object that contains all the information related to the pattern defined by the user is called **EuclideanUnit**, while the object that stores all the useful info about the different environments is the **defaultUnits**. 
For every environment we have an array of traditional Euclidean Patterns of that region, that we can then choose from the dropdown menus,  and an array of the  default 4 Euclidean Units that will be used when we first access the specific environment.

The two most important state variables are **unitList** and **tempo**.
unitList is a list of 4 Euclidean Unit that is needed to generate the 4 sequences and to render many components of the application. Every time we change environment unitList is set to the default 4 units of the specific environment.
Since the 2 state variables are very important to the sequencing part, we run the function that creates the sequences, called **creaSequenceList**, in the context script.
Every time through DOM interaction we change either tempo or unitList, the context re-runs and creaSequenceList is called.
creaSequenceList return a list of 4 *Tone.Sequence objects*.

Tone.Sequence constructor requires:
*	the array of the events, called *Euclidean Array*, contained in unitList
*	the sequence subdivision (or step duration): *stepDurationArray[ n ]*,  contained in tempo
*	A callback function that runs every sequence subdivision: in this function we say that if the current event is 1, we trigger a sampler associated with that Euclidean Sequence, otherwise if it’s a zero we don’t.



### Sound management

As said before, we choose to use *Tone.js* to develop all the audio features of our application. Four independent Euclidean Lines are provided, each one corresponding to a different channel. Each of them is associated with a sampler that trigger all the events of the pattern, corresponding to the pulses of the sequence. The user has the control on the volume and the panning of each channel as well as on the pitch of the sample. Moreover mute/solo controls are available. 
The channels then flow into the master channel, on which a low pass filter (whose cutoff frequency can be adjusted by the user) acts in series with a reverb, whose dry/wet ratio and decay time can be modified.
the management of the Clock, event handling and transport commands, is realized through Tone.Transport.


The diagram below describes the audio chain:

<br> 
<p align="center" width="100%">
    <img width="85%" src="https://user-images.githubusercontent.com/58279476/134890257-ceb31fec-a9ef-4275-b9a2-50eed7b94f90.PNG">
</p>

### Save & Load function

The Save & Load function is implemented using json-server, a node module that allows to create a rest API.
When we save, we POST request on a db.json file the JSONification of unitList and tempo state variables.
When we want to load, we GET request from the db.json file the JSON object literal representing the saved preset, we convert it into a Javascript object, and we set the state variables to their corresponding values.


## How to use it

First of all, clone the repo and make sure to have [Node.js](https://github.com/nodejs) installed on your pc.

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

Here a video tutorial to see how the Euclidean Sequencer works:
https://youtu.be/cF6LMqtsbRo.

## Notes

This application was developed as a project for the "Advanced Coding Tools And Methodologies" course at Politecnico di Milano (MSc in Music and Acoustic Engineering).

*Andrea Ravizzotti*

*Lorenzo Brugioni*

*Eugenio Poliuti*


