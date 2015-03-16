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

