import Swal from 'sweetalert2'

export const formControl = (values) => {
    if (values.name.length < 4) {
        Swal.fire({
            icon: 'error',
            title: 'invalid name'
        })
        return false
    }

    if (values.lastName.length  < 3) {
        Swal.fire({
            icon: 'error',
            title: 'invalid last name'
        })
        return false
    }
    if (values.email !== values.emailConfirm) {
    Swal.fire({
        icon: 'error',
        title: 'invalid mail'
    })
    return false
}
   return true
}
