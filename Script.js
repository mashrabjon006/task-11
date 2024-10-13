// 1. Funksiya yozing, bu funksiya berilgan sonning kvadratini qaytarsin.

// function kvadrat(arg) {
//     for (var i = 0; i < arg.leng; i++) {
//        console.log(arg[i])
        
//     }
    
// } 
// var arr = [1,2,3,4,5,5,8]

// 2. Ikkita sonning yig'indisini qaytaruvchi funksiya

// function yigindi(a, b) {
//     return a + b; 
// }

// let son1 = 5
// let son2 = 10

// console.log(yigindi(son1, son2))


// 3. Foydalanuvchi nomini qabul qilib, salom beruvchi funksiya
// function salom(ism) {
//     return `Salom, ${ism}`}

// let foydalanuvchiIsmi = prompt('ismii kiriting')
// console.log(salomBer(foydalanuvchiIsmi))

// 4. Funksiya yozing, bu funksiya ikki sondan kattasini topib qaytarsin.
// function kattason(a, b) {
//     return a > b ? a : b
// }

// let son1 = 15
// let son2 = 10
// console.log(`Kata son ${kattasiniTop(son1, son2)}`)

// 5. Funksiya yozing, bu funksiya massiv ichidagi barcha sonlarni qo'shib, umumiy yig'indini qaytarsin.function yigindiHisobla(massiv) {

// function calc(massiv) {
//     let yigindi = 0
//     for (let i = 0; i < massiv.length; i++) {
//         yigindi += massiv[i]
//     }
//     return yigindi
// }

// let sonlar = [1, 2, 3, 4, 5]

// console.log(`Masiv yigindisi ${yigindiHisobla(sonlar)}`)

//6. Funksiya yozing, bu funksiya berilgan son musbat yoki manfiy ekanligini aniqlasin va natijani qaytarsin.

// function musbatYokiManfiy(son) {
//     if (son > 0) {
//         return "Musbat"
//     } else if (son < 0) {
//         return "Manfiy"
//     } else {
//         return "Nol"
//     }
// }

// 7. Funksiya yozing, bu funksiya berilgan so'zning uzunligini qaytarsin.

// console.log(musbatYokiManfiy(5))
// console.log(musbatYokiManfiy(-3))
// console.log(musbatYokiManfiy(0))

// function sozniUzunligi(soz) {
//     return soz.length
// }
// console.log(sozniUzunligi("Salom"))
// console.log(sozniUzunligi("Dunyo"))
// console.log(sozniUzunligi("JavaScript"))

// 8. Funksiya yozing, bu funksiya berilgan ikki stringni birlashtirib, bitta string ko'rinishida qaytarsin.

// function sss(string1, string2) {
//     return string1 + string2
// }

// console.log(stringBirlashtir("Salom, ", "Dunyo!"))
// console.log(stringBirlashtir("hello", "world"))
// console.log(stringBirlashtir("anor", " olma"))

// 9. Funksiya yozing, bu funksiya berilgan massivdan eng kichik elementni qaytarsin.

// function abs(arr) {
//     if (arr.length === 0) { 
//         return null
//     }
    
//     let kichikElement = arr[0]
//     for (let i = 1; i < arr.length; i++) { 
//         if (arr[i] < kichikElement) { 
//             kichikElement = arr[i]
//         }
//     }
    
//     return kichikElement
// }

// const massiv = [3, 1, 4, 1, 5, 9, 2, 6, 5]
// const natija = engKichikElement(massiv)
// console.log(natija})


// 10. Funksiya yozing, bu funksiya berilgan stringni teskari holatga keltirib, natijani qaytarsin.

// function abs(str) {
//     return str.split('').reverse().join('')
// }

// const a = "Salom, Dunyo!"
// const natija = teskariString(a)
// console.log(`Teskari string: ${natija})


// ___________________________qiyinlari___________________________________________


// 1. Funksiya yozing, bu funksiya berilgan massivdagi barcha sonlarni ekranga chiqarib bersin.

// function abs(arr) {
//     arr.forEach(function(son) { 
//         console.log(son)
//     })
// }

// const massiv = [1, 2, 3, 4, 5, 6]
// chiqarSonlar(massiv)


// 2. Funksiya yozing, bu funksiya massivdagi eng katta sonni topib qaytarsin.

// function abs(arr) {
//     if (arr.length === 0) { 
//         return null
//     }

//     let kattaSon = arr[0]

//     for (let i = 1; i < arr.length; i++) { 
//         if (arr[i] > kattaSon) { 
//             kattaSon = arr[i]
//         }
//     }

//     return kattaSon
// }

// const massiv = [1, 3, 7, 2, 5, 9, 4]
// const natija = engKattaSon(massiv)
// console.log( natija)

// 3. Funksiya yozing, bu funksiya berilgan massivning uzunligini qaytarsin.

// function massivUzunligi(arr) {
//     return arr.length
// }

// const massiv = [1, 2, 3, 4, 5]
// const uzunlik = massivUzunligi(massiv)
// console.log(uzunlik)

// 4. Funksiya yozing, bu funksiya berilgan massivdagi barcha elementlarning yig'indisini hisoblasin va qaytarsin.

// function abs(arr) {
//     let yigindi = 0
//     arr.forEach(function(element) {
//         yigindi += element
//     })

//     return yigindi
// }

// const massiv = [1, 2, 3, 4, 5]
// const natija = abs(massiv)
// console.log(natija)

// 5. Funksiya yozing, bu funksiya massiv ichida berilgan element necha marta uchrashganini qaytarsin.

// function New(arr, element) {
//     let hisob = 0
//     arr.forEach(function(item) {
//         if (item === element) { 
//             hisob++
//         }
//     })

//     return hisob
// }

// const massiv = [1, 2, 3, 2, 4, 2, 5]
// const a = 2
// const natija = New(massiv, a)
// console.log( natija)


// 6. Funksiya yozing, bu funksiya massivdagi toq sonlarni yangi massivga ajratib qaytarsin.

// function ass(arr) {
//     const toqSonlar = []
//     arr.forEach(function(son) {
//         if (son % 2 !== 0) { 
//             toqSonlar.push(son)
//         }
//     })

//     return toqSonlar
// }

// const massiv = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const natija = ass(massiv)
// console.log(natija)


// 7. Funksiya yozing, bu funksiya massiv ichidagi elementlarni teskari tartibda qaytarsin.

// function rev(arr) {
//     return arr.reverse();
// }

// const massiv = [1, 2, 3, 4, 5]
// const natija = rev(massiv)
// console.log(natija)

// 8. Funksiya yozing, bu funksiya berilgan massiv ichidan faqat manfiy sonlarni ajratib olsin va yangi massivda qaytarsin.


// function odd(arr) {
//     const manfiySonlar = arr.filter(son => son < 0)
//     return manfiySonlar
// }

// const massiv = [1, -2, 3, -4, 5, -6]
// const rs = odd(massiv)
// console.log(rs)

// 9. Funksiya yozing, bu funksiya berilgan massivning oxirgi elementini olib tashlasin va yangilangan massivni qaytarsin.

// function remov(arr) {
//     arr.pop()
//     return arr
// }

// const massiv = [1, 2, 3, 4, 5]
// const res = remov(massiv)
// console.log(res)

// 10. Funksiya yozing, bu funksiya berilgan massivga yangi element qo'shish funksiyasini amalga oshirsin.

// function add(arr, element) {
//     arr.push(element)
//     return arr
// }

// const massiv = [1, 2, 3, 4, 5]
// const res = add(massiv, 6)
// console.log(res)

// 11. Funksiya yozing, bu funksiya berilgan ikki massivni birlashtirib, yangi massiv qaytarsin.

// function mm(arr1, arr2) {
//     return arr1.concat(arr2)
// }

// const massiv1 = [1, 2, 3]
// const massiv2 = [4, 5, 6]
// const res = mm(massiv1, massiv2)
// console.log(res)


// 12. Funksiya yozing, bu funksiya massiv ichidagi sonlarning kvadratlarini hisoblab, yangi massivda qaytarsin.

// function kvadrt(arr) {
//     return arr.map(son => son * son)
// }

// 13. Funksiya yozing, bu funksiya berilgan massiv ichidagi juft sonlarni o'chirib, yangi massiv qaytarsin.

// const massiv = [1, 2, 3, 4, 5]
// const res = kvadrt(massiv)
// console.log(res)


// function remov(arr) {
//     return arr.filter(son => son % 2 !== 0)
// }

// const massiv = [1, 2, 3, 4, 5, 6]
// const res = remov(massiv)
// console.log(res)


// 14. Funksiya yozing, bu funksiya berilgan massiv ichidagi stringlarni katta harfga o'zgartirib qaytarsin.

// function big(arr) {
//     return arr.map(element => {
//         if (typeof element === 'string') {
//             return element.toUpperCase()
//         }
//         return element
//     })
// }

// const massiv = ['salom', 'dunyo', 123, 'javascript']
// const natij = big(massiv)
// console.log(natij)

// 15. Funksiya yozing, bu funksiya massivdagi har bir elementning uzunligini hisoblab, natijalarni yangi massivda qaytarsin (agar element string bo'lsa).

// function dd(arr) {
//     return arr.map(element => {
//         if (typeof element === 'string') {
//             return element.length
//         }
//         return 0
//     })
// }

// const massiv = ['salom', 'dunyo', 123, 'javascript']
// const rs = dd(massiv)
// console.log(rs)
