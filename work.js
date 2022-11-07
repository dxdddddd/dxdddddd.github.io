
let myinp1 = document.querySelectorAll(".hotel_input input")
let mytab1 = document.querySelector(".hotel_tbl")
let myinp2 = document.querySelectorAll(".work_input input")
let mytab2 = document.querySelector(".work_tbl")
let myinp3 = document.querySelectorAll(".scene_input input")
let mytab3 = document.querySelector(".scene_tbl")

function reset1() {
    for (let i = 0; i < myinp1.length; i++) {
        myinp1[i].value = ""
    }
}
function reset2() {
    for (let i = 0; i < myinp2.length; i++) {
        myinp2[i].value = ""
    }
}
function reset3() {
    for (let i = 0; i < myinp3.length; i++) {
        myinp3[i].value = ""
    }
}
function add1() {
    let change = true
    let chabtn = document.createElement("input")
    chabtn.setAttribute("type", "button")
    chabtn.setAttribute("value", "修改")

    let delbtn = document.createElement("input")
    delbtn.setAttribute("type", "button")
    delbtn.setAttribute("value", "删除")

    let newtr = document.createElement("tr")
    let newtd1 = document.createElement("td")
    newtd1.innerHTML = myinp1[0].value
    let newtd2 = document.createElement("td")
    newtd2.innerHTML = myinp1[1].value
    let newtd3 = document.createElement("td")
    newtd3.innerHTML = myinp1[2].value
    let newtd5 = document.createElement("td")


    newtd5.appendChild(chabtn)
    newtd5.appendChild(delbtn)
    newtr.appendChild(newtd1)
    newtr.appendChild(newtd2)
    newtr.appendChild(newtd3)
    newtr.appendChild(newtd5)
    mytab1.appendChild(newtr)

    delbtn.onclick = function() {
        this.parentNode.parentNode.remove()
    }

    chabtn.onclick = function() {
        if (change) {
            for (let i = 0; i < this.parentNode.parentNode.children.length - 1; i++) {
                this.parentNode.parentNode.children[i].innerHTML =
                    `<input type="text" value="${this.parentNode.parentNode.children[i].innerHTML}"></input>`
            }
            chabtn.value = "保存"
            change = false
        } else {
            for (let i = 0; i < this.parentNode.parentNode.children.length - 1; i++) {
                this.parentNode.parentNode.children[i].innerHTML = this.parentNode.parentNode.children[i].children[0].value
            }
            chabtn.value = "修改"
            change = true
        }
    }
}

function add2() {
    let change = true
    let chabtn = document.createElement("input")
    chabtn.setAttribute("type", "button")
    chabtn.setAttribute("value", "修改")

    let delbtn = document.createElement("input")
    delbtn.setAttribute("type", "button")
    delbtn.setAttribute("value", "删除")

    let newtr = document.createElement("tr")
    let newtd1 = document.createElement("td")
    newtd1.innerHTML = myinp2[0].value
    let newtd2 = document.createElement("td")
    newtd2.innerHTML = myinp2[1].value
    let newtd3 = document.createElement("td")
    newtd3.innerHTML = myinp2[2].value
    let newtd4 = document.createElement("td")
    newtd4.innerHTML = myinp2[3].value
    let newtd5 = document.createElement("td")


    newtd5.appendChild(chabtn)
    newtd5.appendChild(delbtn)
    newtr.appendChild(newtd1)
    newtr.appendChild(newtd2)
    newtr.appendChild(newtd3)
    newtr.appendChild(newtd4)
    newtr.appendChild(newtd5)
    mytab2.appendChild(newtr)

    delbtn.onclick = function() {
        this.parentNode.parentNode.remove()
    }

    chabtn.onclick = function() {
        if (change) {
            for (let i = 0; i < this.parentNode.parentNode.children.length - 1; i++) {
                this.parentNode.parentNode.children[i].innerHTML =
                    `<input type="text" value="${this.parentNode.parentNode.children[i].innerHTML}"></input>`
            }
            chabtn.value = "保存"
            change = false
        } else {
            for (let i = 0; i < this.parentNode.parentNode.children.length - 1; i++) {
                this.parentNode.parentNode.children[i].innerHTML = this.parentNode.parentNode.children[i].children[0].value
            }
            chabtn.value = "修改"
            change = true
        }
    }
}

function add3() {
    let change = true
    let chabtn = document.createElement("input")
    chabtn.setAttribute("type", "button")
    chabtn.setAttribute("value", "修改")

    let delbtn = document.createElement("input")
    delbtn.setAttribute("type", "button")
    delbtn.setAttribute("value", "删除")

    let newtr = document.createElement("tr")
    let newtd1 = document.createElement("td")
    newtd1.innerHTML = myinp3[0].value
    let newtd2 = document.createElement("td")
    newtd2.innerHTML = myinp3[1].value
    let newtd3 = document.createElement("td")
    newtd3.innerHTML = myinp3[2].value
    let newtd4 = document.createElement("td")
    newtd4.innerHTML = myinp3[3].value
    let newtd5 = document.createElement("td")


    newtd5.appendChild(chabtn)
    newtd5.appendChild(delbtn)
    newtr.appendChild(newtd1)
    newtr.appendChild(newtd2)
    newtr.appendChild(newtd3)
    newtr.appendChild(newtd4)
    newtr.appendChild(newtd5)
    mytab3.appendChild(newtr)

    delbtn.onclick = function() {
        this.parentNode.parentNode.remove()
    }

    chabtn.onclick = function() {
        if (change) {
            for (let i = 0; i < this.parentNode.parentNode.children.length - 1; i++) {
                this.parentNode.parentNode.children[i].innerHTML =
                    `<input type="text" value="${this.parentNode.parentNode.children[i].innerHTML}"></input>`
            }
            chabtn.value = "保存"
            change = false
        } else {
            for (let i = 0; i < this.parentNode.parentNode.children.length - 1; i++) {
                this.parentNode.parentNode.children[i].innerHTML = this.parentNode.parentNode.children[i].children[0].value
            }
            chabtn.value = "修改"
            change = true
        }
    }
}