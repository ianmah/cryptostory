
const API = 'https://maplestory.io/api/character'
const options = 'animated?showears=false&showLefEars=false&showHighLefEars=undefined&resize=2&name=&flipX=false'

export const getCharacter = async (items, action) => {

    let itemString = JSON.stringify(items)
    itemString = itemString.substr(1, itemString.length - 2)
    itemString = encodeURIComponent(itemString)
    const url = `${API}/${itemString}/${action}/${options}`
    const response = await fetch(url)
    const blob = await response.blob()    

    return URL.createObjectURL(blob)
}