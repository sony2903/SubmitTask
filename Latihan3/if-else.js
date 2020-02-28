var nama, peran, cekksatria, cektabib, cekpenyihir
nama = 'Sony'
peran = ''
cekksatria = 'ksatria'
cektabib = 'tabib'
cekpenyihir = 'penyihir'

if (nama === ''){
    console.log("Nama harus diisi!")
} else{ if (peran == cekksatria){
            console.log(`Selamat datang di Dunia Proxytia, ${nama}`)
            console.log(`Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`)
        } else if (peran == cektabib){
            console.log(`Selamat datang di Dunia Proxytia, ${nama}`)
            console.log(`Halo tabib ${nama},kamu akan membantu temanmu yang terluka.`)
        } else if (peran == cekpenyihir){
            console.log(`Selamat datang di Dunia Proxytia, ${nama}`)
            console.log(`Halo penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`)
        } else {
            console.log(`Halo ${nama}, Pilih peranmu untuk memulai game!`)
        
    }
}
