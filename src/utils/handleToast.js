import { toast } from 'react-toastify'


export const handleToast = (message, status) => {
  let toastOptions = {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
  }

  switch (status) {
    case 'success':
      toast.success(message, toastOptions)
      break
    case 'info':
      toast.info(message, toastOptions)
      break
    case 'warning':
      toast.warning(message, toastOptions)
      break
    case 'error':
      toast.error(message, toastOptions)
      break
    default:
      toast(message, toastOptions)
      break
  }
}