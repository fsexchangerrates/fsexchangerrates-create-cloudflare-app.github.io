'use strict';
// this import statement tells webpack to include styles.css in the build
import css from "./styles.css"

function init() {
    if (!window.addEventListener) return // Check for IE9+

    let options = INSTALL_OPTIONS
    let product = INSTALL_PRODUCT
    let element
    let appElement

    // updateElement runs every time the options are updated.
    // Most of your code will end up inside this function.
    function updateElement() {
        element = INSTALL.createElement(options.location, element)

        // Set the app attribute to your app's dash-delimited alias.
        element.setAttribute("app", "fsexchangerrates-create-cloudfare-app")
        element.textContent = options.message

        appElement = INSTALL.createElement(options.location, appElement)
        appElement.setAttribute('app', 'product-example')
        if (product && product.id === 'pro') {
            // Pro plan exclusive features.
        }
    }

    // INSTALL_SCOPE is an object that is used to handle option changes without refreshing the page.
    window.INSTALL_SCOPE = {
        setOptions(nextOptions) {
            options = nextOptions

            updateElement()
        },
    }

    window.INSTALL_PRODUCT = {
        setOptions(nextOptions) {
            product = nextOptions
            updateElement()
        }
    }

    // This code ensures that the app doesn't run before the page is loaded.
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", updateElement)
    } else {
        updateElement()
    }
}

init()