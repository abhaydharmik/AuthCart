export const formatPrice = (price) => {
    if(!price && price !== 0) return ""

    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
    }).format(price)
}

