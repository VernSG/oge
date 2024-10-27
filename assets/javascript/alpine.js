document.addEventListener("alpine:init", () => {
  Alpine.data("menuItems", () => ({
    bestSeller: [
      {
        id: 101,
        name: "Case HP",
        img: "best_seller/case.png",
        price: 20.000 - 25.000,
        desk: "Pilihan Case: Hard Case, Soft Case.",
      },
      {
        id: 102,
        name: "Charger HP",
        img: "best_seller/charger.png",
        price: 25.000 - 30.000,
        desk: "Kabel Data",
      },
      {
        id: 103,
        name: "Tempered Glass",
        img: "best_seller/tg.png",
        price: 15.000 - 45.000,
        desk: "Bening, Antiradiasi, Anti Air/Minyak, Privasi.",
      },
    ],
  }));

  Alpine.store("cart", {
    // itemInCart dan inCart kebalik tp mls ubah :)
    itemInCart: [],
    totalPrice: 0,
    totalQuantity: 0,
    addItem(newItem) {
      // Cek apakah ada barang yang sama di cart
      const inCart = this.itemInCart.find(
        (anyItem) => anyItem.id === newItem.id,
      );

      // Jika belum ada atau Cart masih kosong
      if (!inCart) {
        this.itemInCart.push({
          ...newItem,
          quantity: 1,
          totalItemPrice: newItem.price,
        });

        this.totalQuantity++;

        this.totalPrice += newItem.price;
      } else {
        // Jika sudah ada barang di cart, cek apakah barang yang ditambahkan lagi beda atau sama jenis
        this.itemInCart = this.itemInCart.map((anyItemInCart) => {
          // Jika berbeda jenis
          if (anyItemInCart.id !== newItem.id) {
            // Buat Template Baru
            return anyItemInCart;
          } else {
            // Jika barang sama jenis (sudah ada di cart), tambah quantity barang tsb dan totalnya
            anyItemInCart.quantity++;
            anyItemInCart.totalItemPrice =
              anyItemInCart.price * anyItemInCart.quantity;
            this.totalQuantity++;
            this.totalPrice += anyItemInCart.price;
            return anyItemInCart;
          }
        });
      }
    },
    removeItem(getId) {
      // Ambil Item yang akan di remove berdasarkan id nya
      const matchItem = this.itemInCart.find((anyItem) => anyItem.id === getId);

      // Jika quantity suatu item di cart lebih dari 1
      if (matchItem.quantity > 1) {
        this.itemInCart = this.itemInCart.map((thatItem) => {
          // Jika click minus (removeItem) pada Item yang id nya tidak sesuai
          if (thatItem.id !== getId) {
            return thatItem;
          } else {
            // Jika click minus (removeItem) pada Item yang ID nya sesuai
            thatItem.quantity--;
            thatItem.totalItemPrice = thatItem.price * thatItem.quantity;
            this.totalQuantity--;
            this.totalPrice -= thatItem.price;
            return thatItem;
          }
        });
      } else if (matchItem.quantity === 1) {
        // Jika quantity suatu item di cart sisa 1
        // itemInCart akan menjadi array baru yang berisi semua item kecuali item yang kita click minus (hilang)
        this.itemInCart = this.itemInCart.filter(
          (allItem) => allItem.id !== getId,
        );
        this.totalQuantity--;
        this.totalPrice -= matchItem.price;
      }
    },
  });
});

// Konversi ke Rupiah
const toRupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};
