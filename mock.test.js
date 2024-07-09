
//mock test.js
jest.mock('./test/utils',()=>(
    {getData:jest.fn(),
    getRaw:jest.fn()
    }
))
const {getData,getRaw}=require('./test/utils')
const {processData,processRaw}=require('./test/processData')
//mock return value
test('Mocked the process data',()=>{
    getData.mockReturnValue('Mocked data')
    expect(processData()).toBe('processed:Mocked data')
})
test('moked raw',()=>{
    getRaw.mockReturnValue(true);
    expect(processRaw()).toBe(true)
})