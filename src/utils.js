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