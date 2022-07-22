//bakal dirender di table row
let namaPasienData = [
  {
    namaPasien: "Nina",
    idRN: "001",
    tempatLahir: "Jakarta",
    tanggalLahir: "27 Mei 1989",
    jenisKelamin: "perempuan",
    noTelepon: "0812343210",
    email: "nina123@gmail.com",
    namaDokter: "Dr Frans",
    namaKlinik: "Hackti Bunda Sejahtera",
    tanggalPerawatan: "20 Juli 2022",
    namaPerawatan: "rabies",
  },
  {
    namaPasien: "Nino",
    idRN: "002",
    tempatLahir: "Medan",
    tanggalLahir: "27 Juli 1919",
    jenisKelamin: "laki-laki",
    noTelepon: "08123432102",
    email: "nino123@gmail.com",
    namaDokter: "Dr Feri",
    namaKlinik: "Hackti Bunda Sejahtera",
    tanggalPerawatan: "19 Juli 2022",
    namaPerawatan: "kanker",
  },
  {
    namaPasien: "Antoni",
    idRN: "003",
    tempatLahir: "Palembang",
    tanggalLahir: "27 September 1993",
    jenisKelamin: "laki-laki",
    noTelepon: "0818213582102",
    email: "antoniii@gmail.com",
    namaDokter: "Dr Feri",
    namaKlinik: "Hackti Bunda Sejahtera",
    tanggalPerawatan: "28 Juni 2022",
    namaPerawatan: "flu burung",
  },
  {
    namaPasien: "Jonathan",
    idRN: "004",
    tempatLahir: "Medan",
    tanggalLahir: "27 Juli 1919",
    jenisKelamin: "laki-laki",
    noTelepon: "081237273602",
    email: "jonathandx@gmail.com",
    namaDokter: "Dr Frans",
    namaKlinik: "Hackti Bunda Sejahtera",
    tanggalPerawatan: "29 Mei 2022",
    namaPerawatan: "batuk berdahak",
  },
  {
    namaPasien: "Adinda",
    idRN: "005",
    tempatLahir: "Yogyakarta",
    tanggalLahir: "13 Agustus 2000",
    jenisKelamin: "perempuan",
    noTelepon: "08184573204",
    email: "adinda92@gmail.com",
    namaDokter: "Dr Frans",
    namaKlinik: "Hackti Bunda Sejahtera",
    tanggalPerawatan: "17 Juli 2022",
    namaPerawatan: "antrax",
  },
];

//output object
let tableWrapper = document.querySelector(".table_wrapper");
for (let i in namaPasienData) {
  let createTr = document.createElement("tr");
  createTr.innerHTML = `
                <td>
                    <p>${namaPasienData[i].idRN}</p>
                </td>
                <td>
                    <p>${namaPasienData[i].namaPasien}</p>
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
                
    `;
  tableWrapper.appendChild(createTr);
}
