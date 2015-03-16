# repl-hang-reduced-case
Node.js REPL interface hangs http requests sometimes

## Problems
1. http requests ran with repl interface hangs.
2. Running multiple repl requests after a failed one, hanged http requests stops hanging and reaches to server.

## Prerequisite
1. Node.js v0.12.0

## How to reproduce
1. Run server `node server.js` on a window
2. Run client `node index.js` on another window, preferably side by side with the server
3. Keep pressing `enter` on client window.
4. Listen for beep sound or check for `Timed out` logs on client.
5. Compare logs and timings with server logs.

## Logs
##### Client
```
>


Timed out: 0


Timed out: 1

Timed out: 2
Done: 0 { number: '0' }
process_time_0: 1706ms
Done: 1 { number: '1' }
process_time_1: 739ms
Done: 2 { number: '2' }
process_time_2: 28ms

Done: 3 { number: '3' }
process_time_3: 4ms

Done: 4 { number: '4' }
process_time_4: 3ms
```

##### Server
```
{ number: '0' }
process_time: 9ms
{ number: '1' }
process_time: 2ms
{ number: '2' }
process_time: 0ms
{ number: '3' }
process_time: 0ms
{ number: '4' }
process_time: 0ms
{ number: '5' }
process_time: 1ms
```

