An implementation of Conway's Game of Life built in React over the course of 1 week. 

View the deployed project [here](https://conways-game-of-life.elysiagabe.vercel.app/).

## Conway's Game of Life

The Game of Life, devised by British mathematician John Horton Conway in 1970, is a widely known example of a cellular automaton. This zero-player game takes place on a 2D grid and consists of a simple set of rules that changes the state of each cell to either "alive" or "dead" based on its neighborhood (i.e., the states of the 8 cells surrounding it). 

To “play” the game, simply create an initial configuration (or select one of the preset patterns) and click Start to watch how it evolves.

### The Rules

1. Any live cell with fewer than 2 live neighbors dies, as if by underpopulation
2. Any live cell with 2 or 3 live neighbors lives on to the next generation
3. Any live cell with more than 3 live neighbors dies, as if by overpopulation
4. Any dead cell with exactly 3 live neighbors becomes a live cell, as if by reproduction

#### TODO: 
* The simulation runs slower for larger grids. Given more time, look into other implementation options to improve runtime. 
* Currently, this implementation does not use global state. Because the project is relatively small and simple, passing props is not a huge problem, but setting up global state (perhaps via Context API) could simplify further.
* Polish up UI further, especially in the customize/controls section below the grid. 
* The pattern preset buttons are currently styled as regular buttons; style them like the grid size buttons (i.e., like a radio button that remains selected when active).
* Selecting new cells while the simulation is running has been disabled. May want to look into disabling other controls and features while simulation is running as well. 
* Look into adding additional preset patterns (somewhat limited by small size of 10x10 grid)