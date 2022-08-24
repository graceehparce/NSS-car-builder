const database = {
    orderBuilder: {},

    paints: [{
        id: 1,
        color: "Silver",
        price: 3000,
    },
    {
        id: 2,
        color: "Midnight Blue",
        price: 4000,
    },
    {
        id: 3,
        color: "Firebrick Red",
        price: 3500,
    },
    {
        id: 4,
        color: "Spring Green",
        price: 4250,
    }],


    interiors: [{
        id: 1,
        type: "Beige Fabric",
        price: 2000,

    },
    {
        id: 2,
        type: "Charcoal Fabric",
        price: 2500,

    },
    {
        id: 3,
        type: "White Leather",
        price: 5000,

    },
    {
        id: 4,
        type: "Black Leather",
        price: 6500,

    }],


    techs: [{
        id: 1,
        type: "Basic Package",
        price: 3000,
    },
    {
        id: 2,
        type: "Navigation Package",
        price: 3500,
    },
    {
        id: 3,
        type: "Visibility Package",
        price: 3750,
    },
    {
        id: 4,
        type: "Ultra Package",
        price: 4000,
    }],


    wheels: [{
        id: 1,
        type: "17-inch Pair Radial",
        price: 2000,
    },
    {
        id: 2,
        type: "17-inch Pair Radial Black",
        price: 2500,
    },
    {
        id: 3,
        type: "18-inch Pair Spoke Silver",
        price: 3000,
    },
    {
        id: 4,
        type: "18-inch Pair Spoke Black",
        price: 3250,
    }],

    customOrders: [{
        id: 1,
        paintId: 2,
        interiorId: 3,
        techId: 4,
        wheelsId: 1,
        timestamp: 1200
    }]
}


export const getPaints = () => {
    return database.paints.map(paint => ({ ...paint }))

}

export const getWheels = () => {
    return database.wheels.map(wheel => ({ ...wheel }))

}

export const getInteriors = () => {
    return database.interiors.map(interior => ({ ...interior }))

}

export const getTechs = () => {
    return database.techs.map(tech => ({ ...tech }))

}

export const getOrders = () => {
    return database.customOrders.map(order => ({ ...order }))
}

export const setPaint = (id) => {
    database.orderBuilder.paintId = id

}
export const setWheel = (id) => {
    database.orderBuilder.wheelsId = id

}
export const setInterior = (id) => {
    database.orderBuilder.interiorId = id

}
export const setTech = (id) => {
    database.orderBuilder.techId = id

}

export const addCustomOrder = () => {
    const newOrder = { ...database.orderBuilder }

    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    newOrder.timestamp = Date.now()

    database.customOrders.push(newOrder)

    database.orderBuilder = {}

    document.dispatchEvent(new CustomEvent("stateChanged"))
}

