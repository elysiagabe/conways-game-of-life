import { acornSmall, acornMed, acornLarge } from '../sampleGrid/acorn';
import { crossSmall, crossMed, crossLarge } from '../sampleGrid/cross';
import { gliderSmall, gliderMed, gliderLarge } from '../sampleGrid/glider';
import { stillSmall, stillMed, stillLarge } from '../sampleGrid/still';

export const getSeedGrid = (numRows, name, setGeneration, setGrid) => {
    setGeneration(0)

    const grid = {
        Acorn: {
            10: acornSmall,
            25: acornMed,
            50: acornLarge
        },
        Cross: {
            10: crossSmall,
            25: crossMed,
            50: crossLarge,
        },
        Glider: {
            10: gliderSmall,
            25: gliderMed,
            50: gliderLarge,
        },
        Still: {
            10: stillSmall,
            25: stillMed,
            50: stillLarge,
        }
    }

    setGrid(grid[name][numRows])
}