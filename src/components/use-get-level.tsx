import * as React from 'react'

import {MEMO_LEVELS} from "@/app/config/rules"

/**
 * A custom React hook for managing game levels and retrieving the current level.
 *
 * @returns {Object} An object containing the current game level and a function to move to the next level.
 *
 * @example
 * // Import the hook
 * import { useGetLevel } from '@/path/to/useGetLevel';
 *
 * // Use the hook in a functional component
 * function GameComponent() {
 *   const { game, moveToTheNextLevel } = useGetLevel();
 *
 *   // Use the `game` and `moveToTheNextLevel` as needed in the component
 *   // ...
 * }
 */

export function useGetLevel(){

    const [currentGame, setCurrentGame] = React.useState(null)


    React.useEffect(() => {
        const savedLevel = JSON.parse(localStorage.getItem('level'))
        if(!savedLevel){
            setCurrentGame( MEMO_LEVELS[0])
            localStorage.setItem('level', JSON.stringify(1))
        } else {
            setCurrentGame(MEMO_LEVELS[savedLevel])
        }
    }, [])


    /**
     * Move to the next level of the game.
     *
     * @param {string} level - The level identifier to move to.
     * @throws {Error} If the provided `level` is not found in `MEMO_LEVELS`.
     *
     * @example
     * // Assuming MEMO_LEVELS is an array of objects with a `Level` property like [{ Level: 'easy' }, { Level: 'medium' }, { Level: 'hard' }]
     * // Move to the next level when a button is clicked
     * function handleNextLevelButtonClick() {
     *   const nextLevel = 'medium';
     *   moveToTheNextLevel(nextLevel);
     * }
     */
    function moveToTheNextLevel(level: string){
        const levelIndex = MEMO_LEVELS.find((el) => el.Level === level)

        if (!levelIndex) {
          throw new Error(`Invalid level: ${level}`);
        }
    
        localStorage.setItem('level', JSON.stringify(level));
        setCurrentGame(levelIndex);
    }
    

    return {
        game: currentGame,
        moveToTheNextLevel
    }
}
