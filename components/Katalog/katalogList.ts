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
  name: 'Spooky House (Karya Utama)',
  img: '/img/Gojou.webp',
  type: '3D',
  pembuat: 'Kelompok Lima',
  tanggal: '??',
  panjang: '??',
  lebar: '??',
  tinggi: '??'
}

export const katalogList: KatalogProps[] = [
  {
    name: 'Melankolia Art',
    img: '/img/visuals/Melankolia_Art.jpeg',
    type: '2D',
    pembuat: 'Kelompok Lima',
    tanggal: '12 Januari 2023',
    panjang: '60cm',
    lebar: '40cm'
  },
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
    name: 'An Eye',
    img: '/img/visuals/An_eye.jpeg',
    type: '2D',
    pembuat: 'Zahira Maulidina',
    tanggal: '??',
    panjang: '21cm',
    lebar: '14.8cm'
  },
  {
    name: 'Lazy Girl',
    img: '/img/visuals/Lazy_girl (2).jpeg',
    type: '2D',
    pembuat: 'Diva Edenia',
    tanggal: '18 Februari 2023',
    panjang: '29.7cm',
    lebar: '21cm'
  },
  {
    name: 'Smiley Face',
    img: '/img/visuals/Smiley_face.jpeg',
    type: '3D',
    pembuat: 'Windari Brilliani',
    tanggal: '10 Mei 2022',
    panjang: '28cm',
    lebar: '22cm',
    tinggi: '14cm'
  },
  {
    name: 'Staryy Night',
    img: '/img/visuals/Starry_night.jpeg',
    type: '2D',
    pembuat: 'Zahira Maulidina',
    tanggal: '??',
    panjang: '??',
    lebar: '??'
  },
  {
    name: 'Alley of Silence',
    img: '/img/visuals/Alley_of_silence.jpeg',
    type: '2D',
    pembuat: 'Diva Edenia',
    tanggal: '31 Mei 2023',
    panjang: '21cm',
    lebar: '14.8cm'
  }
]
