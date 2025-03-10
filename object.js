const room  = {height: 3, tv: 'samsung', big: true }
room['furniture'] = ['table', 'chair', 'sofa']
for (const value of Object.values(room)) {
    console.log(value)
}
console.log(typeof room['big'])
console.log(room['tv'].length)
room['tv'] = room['tv'].toUpperCase()
console.log(room['tv'])
delete room.big
