const index = require("./index");

test('adds firstName + lastName to equal fullName' , () => {
    expect(index.getFullName("Ashwini","Gupta")).toBe("Ashwini Gupta")
});
test('adds firstName + lastName to equal fullName', () => {
    expect(index.getFullName("Vandana", "Sah")).toBe("Vandana Sah");
});
test('adds firstName + lastName to equal fullName', () => {
    expect(index.getFullName("Sunny", "Raj")).toBe("Sunny Raj");
});

test('adds firstName + lastName to not equal fullName', () => {
    expect(index.getFullName("Ashwini", 'Gupta')).not.toBe("Ashwini");
});
test('adds firstName + lastName to not equal fullName', () => {
    expect(index.getFullName('Vandana', 'Sah')).not.toBe("Vandana");
});
test('adds firstName + lastName to not equal fullName', () => {
    expect(index.getFullName('Sunny', 'Raj')).not.toBe("Sunny");
});


test('get reverse to equal same', () => {
    expect(index.isPalinDrome("nan")).toBe(true);
});
test('get reverse to equal same', () => {
    expect(index.isPalinDrome("mam")).toBe(true);
});
test('get reverse to equal same', () => {
    expect(index.isPalinDrome("dad")).toBe(true);
});

test('get reverse to equal same', () => {
    expect(index.isPalinDrome("d")).not.toBe(false);
});
test('get reverse to equal same', () => {
    expect(index.isPalinDrome("nan")).not.toBe(false);
});
test('get reverse to equal same', () => {
    expect(index.isPalinDrome("nan")).not.toBe(false);
});


test('get circumference to equal circumference' , () => {
    expect(index.getCircumfrence(7)).toBe('The circumference is 44')
});
test('get circumference to equal circumference' , () => {
    expect(index.getCircumfrence(14)).toBe('The circumference is 88')
});
test('get circumference to equal circumference' , () => {
    expect(index.getCircumfrence(21)).toBe('The circumference is 132')
});

test('get circumference to equal circumference' , () => {
    expect(index.getCircumfrence(7)).not.toBe(44)
});
test('get circumference to equal circumference' , () => {
    expect(index.getCircumfrence(14)).not.toBe(88)
});
test('get circumference to equal circumference' , () => {
    expect(index.getCircumfrence(21)).not.toBe(132)
});


test('get area to equal area' , () => {
    expect(index.getArea(3.5)).toBe('The area is 38.5')
});
test('get area to equal area' , () => {
    expect(index.getArea(7)).toBe('The area is 154')
});
test('get area to equal area' , () => {
    expect(index.getArea(14)).toBe('The area is 616')
});

test('get area to equal area' , () => {
    expect(index.getArea(3.5)).not.toBe(22)
});
test('get area to equal area' , () => {
    expect(index.getArea(3.5)).not.toBe(22)
});
test('get area to equal area' , () => {
    expect(index.getArea(3.5)).not.toBe(22)
});