# Simple video player

This project was bootstrapped with Create React App

### Pseudocode

```
IF video is not initialized
   print ("Loading")
ELSE
   print ("Video screen")
   Print ("Video controller. play/pause, forward, rewind buttons")

   Get HTMLMediaElement of that video. Which contains the information of that video.
   media: HTMLMediaElement

   IF CLICK on play/pause BUTTON
      IF media.paused
         media.play()
      ELSE media.pause()

  INTERVAL : how many seconds the video will forward or rewind

   IF CLICK on forward BUTTON
      IF media.currentTime is GRETTER than or EQUAL of media.duration MINUS INTERVAL
          IF NOT media.paused
             media.pause()
          ELSE media.play()
      ELSE
          PLUS INTERVAL with media.currentTime

   IF CLICK on rewind BUTTON
      IF media.currentTime is LESS than or EQUAL of INTERVAL
          IF NOT media.paused
             media.pause()
          ELSE media.play()
      ELSE
          MINUS INTERVAL with media.currentTime
```

### How to run:

go to task 3 project directory

`yarn`
`yarn start`

To run the test
`yarn test`
