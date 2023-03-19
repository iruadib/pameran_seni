export interface KatalogProps {
  name: string
  img: string
  type: string
  pembuat: string
  tanggal: string
  panjang: string
  lebar: string
  tinggi?: string
}

export const mainKatalog: KatalogProps = {
  name: 'Melankolia Art (Karya Utama)',
  img: '/img/visuals/Melankolia_Art.jpeg',
  type: '2D',
  pembuat: 'Kelompok Lima',
  tanggal: '12 Januari 2023',
  panjang: '60cm',
  lebar: '40cm'
}

export const katalogList: KatalogProps[] = [
  {
    name: 'Demon Girl',
    img: '/img/visuals/Demon_girl.jpeg',
    type: '2D',
    pembuat: 'Diva Edenia',
    tanggal: '24 Agustus 2023',
    panjang: '42cm',
    lebar: '29.7cm'
  },
  {
    name: 'Light Scyphozoa',
    img: '/img/visuals/Light Scyphozoa.jpeg',
    type: '2D',
    pembuat: 'Nayla Atha',
    tanggal: '12 Agustus 2022',
    panjang: '29.7cm',
    lebar: '42cm'
  },
  {
    name: 'Alley of Silence',
    img: '/img/visuals/Alley_of_silence.jpeg',
    type: '2D',
    pembuat: 'Diva Edenia',
    tanggal: '31 Mei 2023',
    panjang: '21cm',
    lebar: '14.8cm'
  },
  {
    name: 'Chilling',
    img: '/img/visuals/Chill Girl.jpeg',
    type: '2D',
    pembuat: 'Diva Edenia',
    tanggal: '18 Februari 2023',
    panjang: '29.7cm',
    lebar: '21cm'
  },
  {
    name: 'Candy Girl',
    img: '/img/visuals/Candy_girl.jpeg',
    type: '2D',
    pembuat: 'Zahira Maulidina',
    tanggal: '22 Januari 2023',
    panjang: '21cm',
    lebar: '15cm'
  },

  {
    name: 'Starry Night',
    img: '/img/visuals/Starry_night.jpeg',
    type: '2D',
    pembuat: 'Zahira Maulidina',
    tanggal: '03 Maret 2021',
    panjang: '36cm',
    lebar: '23cm'
  },
  {
    name: 'An Eye',
    img: '/img/visuals/An_eye.jpeg',
    type: '2D',
    pembuat: 'Zahira Maulidina',
    tanggal: '05 Desember 2022',
    panjang: '9cm',
    lebar: '9cm'
  },
  // {
  //   name: 'Beautiful Chopstick',
  //   img: '/img/visuals/Beautiful_chopstick.jpeg',
  //   type: '3D',
  //   pembuat: 'Muhammad Maula Khadavi',
  //   tanggal: '09 Oktober 2022',
  //   panjang: '20cm',
  //   lebar: '12cm',
  //   tinggi: '20cm'
  // },
  {
    name: 'Memorable Triangle',
    img: '/img/visuals/Memorable Triangle.jpeg',
    type: '3D',
    pembuat: 'Nayla Atha',
    tanggal: '16 Agustus 2022',
    panjang: '11.5cm',
    lebar: '11.5cm',
    tinggi: '17cm'
  },
  {
    name: 'Beautiful Chopstick',
    img: '/img/visuals/Beautiful_chopstick_t1.jpeg',
    type: '3D',
    pembuat: 'Muhammad Maula Khadavi',
    tanggal: '09 Oktober 2022',
    panjang: '20cm',
    lebar: '12cm',
    tinggi: '20cm'
  },
  // {
  //   name: 'Smiley Face',
  //   img: '/img/visuals/Smiley_face.jpeg',
  //   type: '3D',
  //   pembuat: 'Windari Brilliani',
  //   tanggal: '10 Mei 2022',
  //   panjang: '28cm',
  //   lebar: '22cm',
  //   tinggi: '14cm'
  // },
  {
    name: 'Smiley Face',
    img: '/img/visuals/Smiley_face_t1.jpeg',
    type: '3D',
    pembuat: 'Windari Brilliani',
    tanggal: '10 Mei 2022',
    panjang: '28cm',
    lebar: '22cm',
    tinggi: '14cm'
  },
  // {
  //   name: 'Sand of Life',
  //   img: '/img/visuals/Sand_of_Lifes.jpeg',
  //   type: '3D',
  //   pembuat: 'Muhammad Maula Khadavi',
  //   tanggal: '17 Maret 2021',
  //   panjang: '8cm',
  //   lebar: '6cm',
  //   tinggi: '30cm'
  // },
  // *********************
  {
    name: 'Sand of Life',
    img: '/img/visuals/Sand_of_Lifes_t1.jpeg',
    type: '3D',
    pembuat: 'Muhammad Maula Khadavi',
    tanggal: '17 Maret 2021',
    panjang: '8cm',
    lebar: '6cm',
    tinggi: '30cm'
  }
  // {
  //   name: 'Sand of Life',
  //   img: '/img/visuals/Sand_of_Lifes_t2.jpeg',
  //   type: '3D',
  //   pembuat: 'Muhammad Maula Khadavi',
  //   tanggal: '17 Maret 2021',
  //   panjang: '8cm',
  //   lebar: '6cm',
  //   tinggi: '30cm'
  // },
  // *********************
]
