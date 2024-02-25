# Calculator Take Home Exercise (Frontend)

## Running
Use
```bash
npm run dev
```
to run the dev environment

## Included packages
All packages used were standard out-of-the-box for Next.js apps. This could have been built with just built-in functions, and there was no need for external packages.

## Improvements
- Keyboard accessibility/navigation beyond tab & shift-tab. Though I implemented basic keyboard shortcuts, it would've been even more helpful to allow users to navigate the keys easily.
- Use a stack to implement more extensive calculator history
- Encode the current equation into the url for sharability (ie. sending a friend a link to your equation)
- Implementing more standard functionality (ie. exponents, sqrt, trig functions)
- Responsive design
- Adding a pointer so they can edit the equation anywhere
  - I'd explore using an input as the display so they can also type the equation into the bar itself, and just verifying the values being inputted (this would allow for keyboard navigation & editing of the equation)
- Better styling that would give it a more 3d look & add microinteractions
- Handling errors from MathJS to go through a secondary call to Newton
