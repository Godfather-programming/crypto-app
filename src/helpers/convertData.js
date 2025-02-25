const convertData = (data, type) => {
    const convertedData = data[type].map(array => {
        return {
            data: array[0],
            [type]: array[1]
        }
    })
    return convertedData
  console.log(data[type])
}

export default convertData