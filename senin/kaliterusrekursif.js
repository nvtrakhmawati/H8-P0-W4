function kaliTerusRekursif(angka) {
  if(`${angka}`.length == 1){
    return angka
  }else if(`${angka}`.length > 2){
    return angka % 10 * kaliTerusRekursif(Math.floor(angka/10))
  } else{
    return kaliTerusRekursif(angka % 10 * Math.floor(angka/10))
  }
}
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6