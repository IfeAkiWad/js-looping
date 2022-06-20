// Code your solutions in this file

let messages = []

const writeCards = (array, event) => {
    for (let i = 0; i < array.length; i++) {
        messages.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
    }

    return messages
}
