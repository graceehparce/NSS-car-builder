import { getPaints } from "./database.js";
import { setPaint } from "./database.js";
let paints = getPaints()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "paint") {
            setPaint(parseInt(event.target.value))
        }
    }
)

export const Paints = () => {
    let html = ""

    html += '<select id="paint">'
    html += '<option value="0">Select a PAINT package</option>'

    for (const paint of paints) {
        html += `<option value="${paint.id}">${paint.color}</option>`
    }

    html += "</select>"
    return html
}
