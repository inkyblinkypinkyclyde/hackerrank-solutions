function processOrderList(orderList, orderId, state) {
    orderList.map((order) => {
        if (order.id == orderId) {
            order.state = state
            return order
        } else {
            return order
        }
    })
    orderList.map((order, index) => {
        if (order.state === 'Delivered') {
            orderList.splice(index, 1)
        }
    })
    return orderList
}