const {palindromo} = require('../utils/for_testing')

test('Palindromo de Ethiem', () => { 
    let name = 'Ethiem'
    const result = palindromo(name)


    expect(result).toBe('no es un palindromo')
})

test('Palindrome of empty string', () =>{
    const result = palindromo('')

    expect(result).toBe('')
})

test('a real palindrome', () => { 
    let palabra = 'reconocer'
    const result = palindromo(palabra)

    expect(result).toBe(palabra)
 })

 test('empty and null', () => { 
    const result = palindromo()

    expect(result).toBe('tiene que ser una palabra')
 })