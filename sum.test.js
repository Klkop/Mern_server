//test cases
const sum=require('./test/sum')
test('1+2=3',()=>{
    expect(sum(1,2)).toBe(3)
})
test('object in array',()=>{
    const data={one:1,two:2}
    expect(data).toEqual({one:1,two:2})
})
//to be null
test('value is null',()=>{
    const n=null
    expect(n).toBeNull()
})
//to be definr
test('value is defined',()=>{
    const a=1
    expect(a).toBeDefined()
})
test('value is truth',()=>{
    const bool=true
    expect(bool).toBeTruthy()
})
test('value is falsy',()=>{
    const bool=false
    expect(bool).toBeFalsy()
})