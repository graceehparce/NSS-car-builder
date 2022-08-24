import { getInteriors } from "./database.js";
import { setInterior } from "./database.js"

let interiors = getInteriors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "interior") {
            setInterior(parseInt(event.target.value))
        }
    }
)


export const Interiors = () => {
    let html = ""

    html += '<select id="interior">'
    html += '<option value="0">Select an INTERIORS package</option>'

    for (const interior of interiors) {
        html += `<option value="${interior.id}">${interior.type}</option>`
    }

    html += "</select>"
    return html
}
