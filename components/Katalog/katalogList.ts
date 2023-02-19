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
    name: 'An Eye',
    img: '/img/visuals/An_eye.jpeg',
    type: '2D',
    pembuat: 'Zahira Maulidina',
    tanggal: '??',
    panjang: '??',
    lebar: '??'
  },
  {
    name: 'Lazy Girl',
    img: '/img/visuals/Lazy_girl.jpeg',
    type: '2D',
    pembuat: 'Diva Edenia',
    tanggal: '??',
    panjang: '??',
    lebar: '??'
  },
  {
    name: 'Smiley Face',
    img: '/img/visuals/Smiley_face.jpeg',
    type: '3D',
    pembuat: 'Windari Brilliani',
    tanggal: '??',
    panjang: '??',
    lebar: '??',
    tinggi: '??'
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
    name: 'Old Memories',
    img: '/img/pranko_card.jpeg',
    type: '3D',
    pembuat: 'Nayla Atha',
    tanggal: '??',
    panjang: '??',
    lebar: '??',
    tinggi: '??'
  }
]
