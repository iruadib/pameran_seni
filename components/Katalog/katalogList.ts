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
    name: '2B',
    img: '/img/twob.jpg',
    type: '2D',
    pembuat: 'Hayolo',
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
    name: '2Bi',
    img: '/img/twob.jpg',
    type: '2D',
    pembuat: 'Hayolo',
    tanggal: '12-01-2023',
    panjang: '50cm',
    lebar: '30cm'
  }
]
