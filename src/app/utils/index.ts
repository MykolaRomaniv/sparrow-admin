export const convertFileToBase64 = (file: any) =>
  new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.responseType = "blob"

    xhr.onload = () => {
      const recoveredBlob = xhr.response

      const reader = new FileReader()

      reader.onload = () => {
        resolve(reader.result)
      }
      reader.onerror = reject

      reader.readAsDataURL(recoveredBlob)
    }
    xhr.onerror = reject

    xhr.open("GET", file.src)
    xhr.send()
  })

export default { convertFileToBase64 }
