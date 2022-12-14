# Moodster
## Moodster is a Music Suggestion Website made possible through the use of Machine Learning.[^1]

### Description
Moodster is ideal for users that presently feel a certain way and would like to hear music that amplifies those feelings.

To hear music related to a certain mood, use the "Music For Your Mood" feature. Moodster also has a "Song Generator" feature that currently plays a unique, never-before-heard song with the click of a button.

Moodster is deployed using Github's [Pages](https://pages.github.com/) functionality. The website uses the [iTunes API](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/index.html) to pull songs that satisfy different moods. Moodster also uses the [Magenta.js](https://magenta.tensorflow.org/js-announce) JavaScript suite in the development of its Song Generator capabilities.

### Access
#### Website
Visit https://bellavann.github.io/Moodster/ to access the website directly.

#### Download
Download the project code. Extract the *.zip* file.  Open the [home.html](root/index.html) file in a browser (EX. Edge, Chrome, Firefox, etc.) of your choice.

### How-To-Use
Once you navigate to the website, you will be presented with 2 options:

1. You can either click on the different pages in the menu at the top of the website,
2. Or you can navigate to those pages using the buttons on the Home page.

- **Home**
  * The landing page.
  * Use it to navigate the features offered on the Moodster site.

- **Music For Your Mood**
  * Click on any of the mood buttons to hear a song that fits that mood.
  * This page pulls from the [iTunes API](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/index.html).

- **Song Generator**
  * Click one of the buttons on the page to hear a song generated through the use of [Magenta.js](https://magenta.tensorflow.org/js-announce).

[^1]: Changes are still being made to this repository.
