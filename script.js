const text = document.querySelector("#textmsg")
const password = document.querySelector('#password')
const result = document.querySelector("#result")
var clutter = "";
var parinam = "";
function btnClicking() {
    document.querySelector("button").addEventListener("click", function () {
        document.querySelector("#result").style.display = "block"
        // console.log(localStorage.getItem("password"))
        // console.log(localStorage.getItem("emojis"))
    })
    // document.querySelector("#encrypt-btn").addEventListener("click", function () {
    //     document.querySelector("#result").style.display = "block"
    // })

    document.querySelector("#enc-btn").addEventListener("click", function () {
        document.querySelector("#encryption").style.display = "block";
        document.querySelector("#result").style.display = "none"
        document.querySelector("#decryption").style.display = "none";
        // document.querySelector(' #main > h1 span img ').style.transform = "rotate(0deg)";
        document.querySelector(' #main > h1 span i ').style.transform = "rotate(0deg)";
        document.querySelector('#enc-btn').style.backgroundColor = "#333"
        document.querySelector('#dec-btn').style.backgroundColor = "#222"
        // alert("enc btn")
    })
    document.querySelector("#dec-btn").addEventListener("click", function () {
        document.querySelector("#decryption").style.display = "block";
        document.querySelector("#result").style.display = "none"

        document.querySelector("#encryption").style.display = "none";
        document.querySelector(' #main > h1 span i ').style.transform = "rotate(180deg)";
        document.querySelector('#enc-btn').style.backgroundColor = "#222"
        document.querySelector('#dec-btn').style.backgroundColor = "#333"
        // alert("dec btn")
        document.querySelector("#result").style.display = "none"

    })
}
function encryption() {
    document.querySelector("#encrypt-btn").addEventListener("click", function () {
        // getting text field value
        var input = document.getElementById('txtmsg').value;// console.log(input)
        // getting password value
        var password = document.getElementById("password").value;// console.log(password)
        // splitting the input
        const str = input.split("");// console.log(str)
        //converting it into a set of emojis
        str.forEach(element => {
            clutter += `&#128${element.charCodeAt()}` // they return the emoji character code // they print emoji according to text field length
        });
        // console.log(clutter);
        // storing it in a #result tag


        document.querySelector("#result").style.display = "block"
        document.querySelector("#result").innerHTML = clutter;


        var data_arr = [];


        if (JSON.parse(localStorage.getItem('data1'))) {
            data_arr = JSON.parse(localStorage.getItem('data1'));
            console.log(data_arr)
            data_arr.push({ "pass": password, "input": input, "clutter": clutter })
        }
        else {
            data_arr = [{ "pass": password, "input": input, "clutter": clutter }]
        }
        // console.log(JSON.stringify(data_arr)) // they return object array //[{"pass":"a","input":"s","clutter":"&#128115"}]
        localStorage.setItem(`data1`, JSON.stringify(data_arr)) // store data in array

    })
}
// function decryption() {
//     document.querySelector("#decrypt-btn").addEventListener("click", function () {
//         // console.log("decryption");
//         var clutter2 = "";
//         // getting given emoji message
//         var input2 = document.querySelector("#emojimsg").value;
//         // getting final password
//         var finalpass = document.querySelector("#finalpassword").value;
//         var user = JSON.parse(localStorage.getItem('data1'))
//         // console.log(user)
//         var str2 = input2.split(" ")
//         str2.forEach(element => {
//             clutter2 += `&#${(element.codePointAt(0))} ` // codePointAt() - use for convert emoji into text
//         });
//         // console.log(clutter2)
//         var found;
//         for (let i of user) {
//             if (i.clutter == clutter2) {
//                 found = i;
//                 console.log(i)
//             }
//         }
//         var result_div = document.querySelector("#result");
//         if (found.clutter === clutter2) {
//             console.log("done ho gya");
//             result_div.style.display = "block"
//             result_div.style.color = "#eee"
//             // result_div.style.backgroundColor = ""
//             result_div.innerHTML = found.input
//         } else {
//             result_div.style.display = "block"
//             result_div.style.color = "red"
//             result_div.innerHTML = "Wrong Password !"
//         }
//     })


// }
function decryption() {
    document.querySelector("#decrypt-btn").addEventListener("click", function () {
        // console.log("decryption");
        var clutter2 = "";
        // getting given emoji message
        var input2 = document.querySelector("#emojimsg").value;
        // getting final password
        var finalpass = document.querySelector("#finalpassword").value;
        var user = JSON.parse(localStorage.getItem('data1'))
        // console.log(user)
        var str2 = input2.split(' ')
        str2.forEach(element => {
            clutter2 += `&#${element.codePointAt(0)}` // codePointAt() - use for convert emoji into text
        });
        // console.log(clutter2)
        var found;
        for (let i of user) {
            if (i.clutter == clutter2) {
                found = i;
                console.log(i)
            }
        }

        if (found.clutter === clutter2) {
            document.querySelector("#result").style.display = "block"
            document.querySelector("#result").style.color = "#eee"
            // document.querySelector("#result").style.backgroundColor = ""
            document.querySelector("#result").innerHTML = found.input
        } else {
            document.querySelector("#result").style.display = "block"
            document.querySelector("#result").style.color = "red"
            document.querySelector("#result").innerHTML = "Wrong Password"
        }
    })


}
decryption()
encryption()
btnClicking()


// localStorage.setItem("username", "Sakshi")
// localStorage.setItem("Age", 18)
// var name = localStorage.getItem("username")
// var age = localStorage.getItem("Age")
// console.log("Name is : " + name + " Age  is : " + age)
// localStorage.clear() // clear localstorage



// var arr = ["Sakshi ,3,true,lab"]
// console.log(arr) // print array in console
// localStorage.setItem('array', JSON.stringify(arr)) // array convert into string
// console.log(localStorage.getItem('array')) // they print string so we have to convert it into array
// console.log(JSON.parse(localStorage.getItem('array'))) // string converted into array

