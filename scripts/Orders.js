import { getOrders } from "./database.js"
import { getInteriors } from "./database.js"
import { getPaints } from "./database.js"
import { getTechs } from "./database.js"
import { getWheels } from "./database.js"

let orders = getOrders()
let interiors = getInteriors()
let paints = getPaints()
let techs = getTechs()
let wheels = getWheels()

const buildOrderListItem = (order) => {

    const foundPaint = paints.find(
        (paint) => {
            return paint.id === order.paintId
        }
    )

    const foundWheels = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelsId
        }
    )

    const foundInterior = interiors.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )

    const foundTech = techs.find(
        (tech) => {
            return tech.id === order.techId
        }
    )

    const totalCost = (foundPaint.price + foundWheels.price + foundInterior.price + foundTech.price)

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    return `<li>
        Order #${order.id} was placed on ${order.timestamp}. It cost ${costString}
    </li>`
}

export const Orders = () => {
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

