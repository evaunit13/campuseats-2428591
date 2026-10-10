const vendors = [
  {
    id: 'kafe-mahallah-iman',
    name: 'Kafe Mahallah IMAN',
    location: 'Mahallah IMAN, Block IMAN',
    openHours: '7:00 am - 10:00 pm',
    isOpen: true,
    menu: [
      {
        id: 'iman-1',
        name: 'Nasi Lemak Ayam',
        description: 'Coconut rice, spiced fried chicken, sambal, egg, and peanuts',
        price: 7.5,
        category: 'Rice',
        available: true,
      },
      {
        id: 'iman-2',
        name: 'Mee Goreng Mamak',
        description: 'Stir-fried noodles with tofu, egg, bean sprouts, and chili',
        price: 6.0,
        category: 'Noodles',
        available: true,
      },
      {
        id: 'iman-3',
        name: 'Teh Tarik',
        description: 'Frothy pulled milk tea',
        price: 2.5,
        category: 'Drinks',
        available: false,
      },
    ],
  },
  {
    id: 'kafe-aminah',
    name: 'Kafe Mahallah Aminah',
    location: 'Mahallah Aminah, Ground Floor',
    openHours: '8:00 am - 9:00 pm',
    isOpen: true,
    menu: [
      {
        id: 'ami-1',
        name: 'Nasi Ayam Penyet',
        description: 'Smashed fried chicken with sambal and rice',
        price: 9.0,
        category: 'Rice',
        available: true,
      },
      {
        id: 'ami-2',
        name: 'Air Bandung',
        description: 'Rose syrup with milk',
        price: 3.0,
        category: 'Drinks',
        available: true,
      },
    ],
  },
]

export default vendors
