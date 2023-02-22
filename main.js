// BootStrap JS 추가
import bootstrap from "bootstrap/dist/js/bootstrap.bundle"

// Email을 입력받는 요소(id = exampleInputEmail1)를 찾아 emailInputEl에 할당
const emailInputEl = document.querySelector("#exampleInputEmail1")
// modal요소를 찾아 modalEl에 할당
const modalEl = document.querySelector("#exampleModal")

// 찾은 modal요소에 이벤트 추가 : shown.bs.modal(bootstrap에서 제공하는 이벤트, modal이 보여진 경우)
modalEl.addEventListener("shown.bs.modal", ()=>{
    // email 입력부분이 focus
    emailInputEl.focus()
})


// Tooltips 초기화
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))