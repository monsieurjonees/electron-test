// We can hopefully reuse some of these in the final product (hence the docs)

/**
 * Registers the given closure/function as an event listener for 
 * "DOMContentLoaded", thus running it only once all content has loaded.
 * @param {() => Void} closure 
 */
export function onLoad(closure) {
    window.addEventListener(
        "DOMContentLoaded", closure
    )
}

export function print(str) {
    console.log(str)
}

/**
 * Converts string str from camelCase to snake_case.
 * @param {string} str 
 * @returns 
 */
export function camelToSnake(str) {
    return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`)
}

/**
 * Converts string str from camelCase to hyphenated-case.
 * @param {string} str 
 * @returns 
 */
export function camelToHyphenated(str) {
    return str.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`)
}