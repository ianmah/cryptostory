
const API = 'https://maplestory.io/api/character'
const options = 'animated?showears=false&showLefEars=false&showHighLefEars=undefined&resize=2&name=&flipX='

export const getCharacter = async (items, action, flipped) => {
    const filteredItems = Object.keys(items).filter(key => items[key])

    const formattedItems = filteredItems.map(item => ({
            itemId: item,
            version: '220'
        })
    )

    let itemString = JSON.stringify(formattedItems)
    itemString = itemString.substr(1, itemString.length - 2)
    itemString = encodeURIComponent(itemString)
    const url = `${API}/${itemString}/${action}/${options}${flipped}`
    const response = await fetch(url)
    const blob = await response.blob()    

    return URL.createObjectURL(blob)
}