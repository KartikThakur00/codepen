    export function decodeHtml(str) {
        const element = document.createElement("textarea")
        element.innerHTML = str
        return element.value
    }