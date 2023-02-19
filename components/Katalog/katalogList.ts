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
  tanggal: '27-2-2023',
  panjang: '30cm',
  lebar: '50cm',
  tinggi: '50cm'
}

export const katalogList: KatalogProps[] = [
  {
    name: 'Gojo Satoru',
    img: '/img/Gojou.webp',
    type: '2D',
    pembuat: 'Mengiru',
    tanggal: '01-1-2022',
    panjang: '30cm',
    lebar: '50cm'
  },
  {
    name: 'Lawliet',
    img: '/img/lawlietjpg.jpg',
    type: '2D',
    pembuat: 'Hihihi',
    tanggal: '12-01-2023',
    panjang: '50cm',
    lebar: '30cm'
  },
  {
    name: 'Old Memories',
    img: '/img/pranko_card.jpeg',
    type: '3D',
    pembuat: 'Nayla Atha',
    tanggal: '29-03-2022',
    panjang: '100cm',
    lebar: '10cm',
    tinggi: '50cm'
  },
  {
    name: 'Levi',
    img: '/img/levi.webp',
    type: '2D',
    pembuat: 'Hayolo',
    tanggal: '12-01-2023',
    panjang: '50cm',
    lebar: '30cm'
  }
]
