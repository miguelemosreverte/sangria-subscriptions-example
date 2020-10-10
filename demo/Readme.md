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
