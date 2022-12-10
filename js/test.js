let myinp = document.querySelectorAll(".work_input input")
let mytab = document.querySelector(".work_tbl")


function reset() {
    for (let i = 0; i < myinp.length; i++) {
        myinp[i].value = ""
    }
}

function add() {
    let change = true
    let chabtn = document.createElement("input")
    chabtn.setAttribute("type", "button")
    chabtn.setAttribute("value", "修改")

    let delbtn = document.createElement("input")
    delbtn.setAttribute("type", "button")
    delbtn.setAttribute("value", "删除")

    let newtr = document.createElement("tr")
    let newtd1 = document.createElement("td")
    newtd1.innerHTML = myinp[0].value
    let newtd2 = document.createElement("td")
    newtd2.innerHTML = myinp[1].value
    let newtd3 = document.createElement("td")
    newtd3.innerHTML = myinp[2].value
    let newtd4 = document.createElement("td")
    newtd4.innerHTML = myinp[3].value
    let newtd5 = document.createElement("td")


    newtd5.appendChild(chabtn)
    newtd5.appendChild(delbtn)
    newtr.appendChild(newtd1)
    newtr.appendChild(newtd2)
    newtr.appendChild(newtd3)
    newtr.appendChild(newtd4)
    newtr.appendChild(newtd5)
    mytab.appendChild(newtr)

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