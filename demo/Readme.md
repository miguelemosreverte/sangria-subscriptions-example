# Demo

This demo will:
 - [producer] send an HTTP POST every second
    
    This will create authorCreated events
- [subscriber]  listen to authorCreated events via websocket
    
    This will print the events to console 
    
# How to run
First start the server using `sbt run`

Then, after the server have been started, use:
 
`sh demo/demo.sh` 

to start the demo.


![](https://user-images.githubusercontent.com/9152392/95663339-dc683380-0b14-11eb-8831-3907a568fd49.png)
