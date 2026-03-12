import toast from "react-hot-toast"

export const showSuccess = (message) => {
    toast.success(message, {
        duration: 2500,
        position: "top-right",
    })
}

export const showError = (message) => {
    toast.success(message, {
        duration: 3500,
        position: "top-right",
    })
}

export const showLoading = (message) => {
    return toast.loading(messagesu)
}