import { getTechs } from "./database.js";
import { setTech } from "./database.js"

let techs = getTechs()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "tech") {
            setTech(parseInt(event.target.value))
        }
    }
)

export const Technologies = () => {
    let html = ""

    html += '<select id="tech">'
    html += '<option value="0">Select a TECHNOLOGY package</option>'

    for (const tech of techs) {
        html += `<option value="${tech.id}">${tech.type}</option>`
    }

    html += "</select>"
    return html
}
