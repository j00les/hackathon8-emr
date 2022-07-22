//bakal dirender di table row
let namaPasienData = [
    {
    namaPasien: "Nina",
    idRN: 1,
    tanggalLahir: "27 Mei 1989",
    jenisKelamin: "perempuan",
    email: "nina123@gmail.com",
    namaPerawatan: "Scaling",
  },
  {
    namaPasien: "Nino",
    idRN: 2,
    tanggalLahir: "27 Juli 1919",
    jenisKelamin: "laki-laki",
    email: "nino123@gmail.com",
    namaPerawatan: "Bleaching",
  },
  {
    namaPasien: "Antoni",
    idRN: 3,
    tanggalLahir: "27 September 1993",
    jenisKelamin: "laki-laki",
    email: "antoniii@gmail.com",
    namaPerawatan: "Tumpatan gigi",
  },
  {
    namaPasien: "Jonathan",
    idRN: 4,
    tanggalLahir: "27 Juli 1919",
    jenisKelamin: "laki-laki",
    email: "jonathandx@gmail.com",
    namaPerawatan: "Veneer",
  },
  {
    namaPasien: "Adinda",
    idRN: 5,
    tanggalLahir: "13 Agustus 2000",
    jenisKelamin: "perempuan",
    email: "adinda92@gmail.com",
    namaPerawatan: "Implan gigi",
  },
];
let namaInput = document.querySelector('#nama')
let namaPerawatanInput = document.querySelector('#nama-perawatan')
let tanggalLahirInput = document.querySelector('#tanggal-lahir')
let jenisKelaminInput = document.querySelector('#jenis-kelamin')
let emailInput = document.querySelector('#email')

let submitButton = document.querySelector('#btn-submit')
submitButton.addEventListener('click', function(e){
    e.preventDefault()
    let inputPasien = {
        namaPasien: namaInput.value,
        idRN: namaPasienData.length + 1,
        namaPerawatan: namaPerawatanInput.value,
        tanggalLahir: tanggalLahirInput.value,
        jenisKelamin: jenisKelaminInput.value,
        email: emailInput.value
    }
    console.log(inputPasien)
    namaPasienData.push(inputPasien)
    adminShow()
})
adminShow()
function adminShow(){
let tableWrapper = document.querySelector(".table_wrapper");
// let createTr = document.createElement("tr");
tableWrapper.innerHTML = ''
for (let i in namaPasienData) {
//   let createTr = document.createElement("tr");
  tableWrapper.innerHTML += `<tr>
                <td>
                    <p>${namaPasienData[i].idRN}</p>
                </td>
                <td>
                    <p>${namaPasienData[i].namaPasien}</p>
                </td>
                <td>
                    <p>${namaPasienData[i].namaPerawatan}</p>
                </td>
                <td>
                    <p>${namaPasienData[i].tanggalLahir}</p>
                </td>
                <td>
                    <p>${namaPasienData[i].jenisKelamin}</p>
                </td>
                <td>
                    <p>${namaPasienData[i].email}</p>
                </td>
                <td>
                    <a id="${namaPasienData[i].idRN}" 
                    data-toggle="tooltip" 
                    title="Delete" 
                    class="btn btn-xs btn-danger"
                     onclick='adminDelete(${namaPasienData[i].idRN})'>
                     <i class="fa fa-times"></i>
                    </a>
                </td>
                </tr>
                
    `;
//   tableWrapper.appendChild(createTr);
}
}

function adminDelete(id){
    for(let i = 0; i < namaPasienData.length; i++){
        if(id === namaPasienData[i].idRN){
            namaPasienData.splice(i, 1)
        }
    }
    adminShow()
}
