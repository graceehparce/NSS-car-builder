import { getWheels } from "./database.js";
import { setWheel } from "./database.js"

let wheels = getWheels()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "wheel") {
            setWheel(parseInt(event.target.value))
        }
    }
)


export const Wheels = () => {
    let html = ""

    html += '<select id="wheel">'
    html += '<option value="0">Select a WHEELS package</option>'

    for (const wheel of wheels) {
        html += `<option value="${wheel.id}">${wheel.type}</option>`
    }

    html += "</select>"
    return html
}
