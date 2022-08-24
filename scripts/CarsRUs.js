import { Interiors } from "./Interiors.js"
import { Paints } from "./Paints.js"
import { Technologies } from "./Techs.js"
import { Wheels } from "./Wheels.js"
import { addCustomOrder } from "./database.js"
import { Orders } from "./Orders.js"


document.addEventListener(
    "click",
    (event) => {
        const itemClicked = event.target
        if (itemClicked.id.startsWith("orderButton")) {
            addCustomOrder()
        }
    }
)


export const CarsRUS = () => {
    return `
        <h1>Cars-R-Us</h1>

        <article class="choices">
            <section class="choices__paint options">
                <h2>Paint</h2>
                ${Paints()}
            </section>
            <section class="choices__interior options">
                <h2>Interior</h2>
                ${Interiors()}
            </section>
            <section class="choices__tech options">
                <h2>Technology</h2>
                ${Technologies()}
            </section>
            <section class="choices__wheel options">
                <h2>Wheels</h2>
                ${Wheels()}
            </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Car Orders</h2>
            ${Orders()}
        </article>
    `
}
