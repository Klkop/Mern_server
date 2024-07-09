let dataSets=[];
//execute my env before all
beforeAll(()=>{
    dataSets=['raju','ram'];
})
beforeEach(()=>{
    console.log('before each setup called')
})
afterEach(()=>{
    console.log("after each is setup called")
})
afterAll(()=>{
    dataSets=[];
})
test('test case',()=>{
    expect(dataSets.length).toBe(2);
})
test('datasets contains',()=>{
    expect(dataSets).toContain('ram')
})
test('datasets contains',()=>{
    expect(dataSets).toContain('raju')
})