// Optimizing : dropdown
// bootstrap의 dropdown에 관한 JS파일을 import
import Dropdown from "bootstrap/js/dist/dropdown";

const dropdownElementList = document.querySelectorAll('.dropdown-toggle')


// const dropdownList = [...dropdownElementList].map(dropdownToggleEl => new bootstrap.Dropdown(dropdownToggleEl))
// code 최적화
// 1. bootstrap을 import한것이 아닌 Dropdown만 import하였으므로 callback내부의 "bootstrap." 제거
// 2. dropdownList를 따로 쓸 일이 없으므로 map대신 forEach를 사용하여 다음과 같이 최적화 가능
dropdownElementList.forEach(dropdownToggleEl => new Dropdown(dropdownToggleEl));


// Optimizing : Modal
// modal에 관한 file import
import Modal from "bootstrap/js/dist/modal";

// modal을 초기화 : backdrop: "static"을 주어 배경을 눌러도 꺼지지 않게 함
new Modal(document.getElementById('exampleModal'), {
  backdrop: "static"
});

