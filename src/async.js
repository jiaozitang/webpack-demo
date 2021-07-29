export async function getData () {
    const res = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('success')
        }, 2000)
    })

    return res
}