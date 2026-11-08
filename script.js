const produkData = [
    {
        id: 1,
        nama: "Avoboba",
        harga: 15000,
        kategori: "makanan-utama",
        gambar: "./images/alpukat.jpg",
        deskripsi: "Minuman alpukat creamy dipadukan susu lembut dan boba kenyal, menghadirkan sensasi segar, unik, manis, creamy, dan menyenangkan.",
        detail: "Avoboba adalah minuman creamy berbahan dasar alpukat segar. Dipadukan dengan susu lembut dan topping boba kenyal, setiap tegukan menghadirkan rasa unik yang segar dan memanjakan."
    },
    {
        id: 2,
        nama: "Bobacino",
        harga: 10000,
        kategori: "lauk-pauk",
        gambar: "./images/cofie.jpg",
        deskripsi: "Bobacino adalah perpaduan kopi susu segar dengan boba kenyal yang nikmat, cocok untuk pecinta kopi dan boba.",
        detail: "Bobacino adalah minuman kopi susu kekinian yang dipadukan dengan boba kenyal. Kopi pilihan diseduh dengan teknik khusus untuk menghasilkan aroma khas, lalu dicampur dengan susu lembut dan topping boba sehingga setiap tegukan terasa creamy, segar, dan nikmat."
    },
    {
        id: 3,
        nama: "Bobacolate",
        harga: 20000,
        kategori: "makanan-utama",
        gambar: "./images/coklat.jpg",
        deskripsi: "Bobacolate adalah minuman cokelat creamy dengan susu segar dan boba kenyal yang nikmat,dapat memanjakan lidah pecinta cokelat dan boba.",
        detail: "Bobacolate terbuat dari cokelat pilihan yang dipadukan dengan susu segar dan boba kenyal. Minuman ini biasanya disajikan dingin untuk memberikan sensasi creamy, manis, dan menyegarkan."
    },
    {
        id: 4,
        nama: "Bobalicious",
        harga: 20000,
        kategori: "lauk-pauk",
        gambar: "./images/farian.jpg",
        deskripsi: "Bobalicious adalah minuman boba kekinian dengan varian rasa segar, susu lembut, dan boba kenyal yang menghadirkan sensasi creamy menyenangkan.",
        detail: "Bobalicious adalah minuman boba kekinian yang kaya rasa dan tekstur. Susu lembut dipadukan dengan boba kenyal serta varian rasa segar seperti cokelat, kopi, dan buah. Setiap racikan menghadirkan sensasi creamy yang nikmat dan menyenangkan. Disajikan dingin, Bobalicious menjadi pilihan tepat untuk menemani waktu santai dengan cita rasa khas yang bikin ketagihan."
    },
    {
        id: 5,
        nama: "Fruitlicious Boba",
        harga: 15000,
        kategori: "makanan-utama",
        gambar: "./images/fruit.jpg",
        deskripsi: "Fruitlicious Boba adalah minuman boba kekinian dengan perpaduan rasa buah segar, susu lembut, dan boba kenyal.",
        detail: "Fruitlicious Boba dibuat dari perpaduan buah segar pilihan yang dikombinasikan dengan susu lembut dan boba kenyal. Setiap gelas menghadirkan rasa fruity yang menyegarkan dengan sensasi creamy yang memanjakan lidah. Cocok dinikmati kapan saja untuk menambah semangat harimu."
    },
    {
        id: 6,
        nama: "matcha boba",
        harga: 25000,
        kategori: "lauk-pauk",
        gambar: "./images/matcha.jpg",
        deskripsi: "matcha Boba, matcha premium, susu creamy, boba kenyal, segar, lembut,dan nikmat, cocok untuk relaksasi dan menemani aktivitas harian.",
        detail: "matcha Boba lahir dari tradisi teh hijau Jepang yang penuh ketenangan. Dengan matcha premium yang diolah sempurna, susu lembut, dan boba kenyal, minuman ini menghadirkan pengalaman rasa yang istimewa, cocok untuk relaksasi maupun menemani aktivitas harian."
    },
    {
        id: 7,
        nama: "milk boba",
        harga: 12000,
        kategori: "minuman",
        gambar: "./images/ss.jpg",
        deskripsi: "Milk Boba adalah minuman boba klasik dengan perpaduan susu creamy dan boba kenyal, menghadirkan rasa lembut, dan segar yang jadi favorit pecinta boba.",
        detail: "Milk Boba dibuat dari susu segar pilihan yang dipadukan dengan gula dan boba kenyal sehingga menghasilkan rasa creamy lembut dan manis seimbang. Disajikan dingin dengan es atau hangat sesuai selera, minuman ini sangat populer di kalangan pecinta boba karena kesederhanaannya yang timeless dan selalu menyegarkan."
    },
    {
        id: 8,
        nama: "strawberry boba",
        harga: 25000,
        kategori: "minuman",
        gambar: "./images/stroberi.jpg",
        deskripsi: "Strawberry Boba dibuat dari buah stroberi segar yang dipadukan dengan susu creamy dan boba kenyal. menghadirkan sensasi segar, fruity, dan menyenangkan.",
        detail: "Strawberry Boba dibuat dari stroberi segar pilihan yang diolah menjadi sirup manis-asam alami. Sirup ini dipadukan dengan susu creamy lembut dan boba kenyal sehingga menghasilkan minuman dengan rasa fruity segar sekaligus creamy yang memanjakan lidah. Disajikan dingin dengan es, Strawberry Boba sangat cocok diminum saat cuaca panas."
    },
    {
       id: 9,
       nama: "taro boba",
       harga: 18000,
       kategori: "minuman",
       gambar: "./images/taro.jpg",
       deskripsi: "Taro Boba adalah minuman boba dengan rasa manis lembut, dipadukan susu creamy dan boba kenyal dan Warna ungu khas taro membuatnya menarik.",
       detail: "Taro Boba adalah minuman boba yang terbuat dari umbi talas pilihan dengan rasa manis lembut dan sedikit nutty khas taro. Dipadukan dengan susu creamy dan boba kenyal, minuman ini menghadirkan sensasi gurih, segar, sekaligus unik di setiap tegukan. Warna ungu khas taro membuat tampilannya menarik dan elegan, menjadikannya salah satu varian boba favorit yang selalu bikin nagih."   
    }
];



let keranjang = JSON.parse(localStorage.getItem('keranjang')) || [];

function tampilkanProduk(produkArray, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    
    for (let i = 0; i < produkArray.length; i++) {
        const produk = produkArray[i];
        
        const produkCard = document.createElement('div');
        produkCard.className = 'produk-card';
        produkCard.setAttribute('data-kategori', produk.kategori);
        
        produkCard.innerHTML = `
            <img src="${produk.gambar}" alt="${produk.nama}" class="produk-img">
            <div class="produk-info">
                <h3>${produk.nama}</h3>
                <p>${produk.deskripsi}</p>
                <div class="produk-footer">
                    <div class="produk-harga">Rp ${produk.harga.toLocaleString('id-ID')}</div>
                    <button class="btn-small" onclick="tambahKeKeranjang(${produk.id})">+ Keranjang</button>
                </div>
            </div>
        `;
        
        produkCard.addEventListener('click', function(e) {
            if (!e.target.classList.contains('btn-small')) {
                tampilkanDetailProduk(produk.id);
            }
        });
        
        container.appendChild(produkCard);
    }
}

function tampilkanDetailProduk(id) {
    const produk = produkData.find(item => item.id === id);
    
    if (produk) {
        const modal = document.getElementById('produkModal');
        const produkDetail = document.getElementById('produkDetail');
        
        produkDetail.innerHTML = `
            <div class="produk-detail-img">
                <img src="${produk.gambar}" alt="${produk.nama}">
            </div>
            <div class="produk-detail-info">
                <h2>${produk.nama}</h2>
                <p>${produk.detail}</p>
                <div class="produk-detail-harga">Rp ${produk.harga.toLocaleString('id-ID')}</div>
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="ubahQuantityDetail(-1)">-</button>
                    <span class="quantity-display" id="quantityDisplay">1</span>
                    <button class="quantity-btn" onclick="ubahQuantityDetail(1)">+</button>
                </div>
                <button class="btn-pesan" onclick="tambahKeKeranjangDenganQuantity(${produk.id})">Tambah ke Keranjang</button>
            </div>
        `;
        
        modal.style.display = 'block';
        window.currentQuantity = 1;
    }
}

function ubahQuantityDetail(perubahan) {
    window.currentQuantity = Math.max(1, (window.currentQuantity || 1) + perubahan);
    document.getElementById('quantityDisplay').textContent = window.currentQuantity;
}

function tambahKeKeranjangDenganQuantity(id) {
    const quantity = window.currentQuantity || 1;
    tambahKeKeranjang(id, quantity);
    document.getElementById('produkModal').style.display = 'none';
}

function tambahKeKeranjang(id, quantity = 1) {
    const produk = produkData.find(item => item.id === id);
    
    if (produk) {
        const existingItem = keranjang.find(item => item.id === id);
        
        if (existingItem) {
            existingItem.kuantitas += quantity;
        } else {
            keranjang.push({
                id: produk.id,
                nama: produk.nama,
                harga: produk.harga,
                kuantitas: quantity,
                gambar: produk.gambar
            });
        }
        
        simpanKeranjang();
        updateCartCount();
        
        showNotification(`${produk.nama} (${quantity}x) ditambahkan ke keranjang!`);
    }
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #E9A5F1;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: 0 3px 10px rgba(0,0,0,0.2);
        z-index: 1000;
        transition: transform 0.3s;
        transform: translateX(100%);
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

function simpanKeranjang() {
    localStorage.setItem('keranjang', JSON.stringify(keranjang));
}

function updateCartCount() {
    const totalItems = keranjang.reduce((total, item) => total + item.kuantitas, 0);
    
    const cartCountElements = document.querySelectorAll('#cartCountNav, .cart-count');
    cartCountElements.forEach(element => {
        element.textContent = totalItems;
    });
}

function initFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            const container = document.getElementById('produkContainer');
            
            if (filter === 'all') {
                tampilkanProduk(produkData, 'produkContainer');
            } else {
                const filteredProduk = produkData.filter(produk => produk.kategori === filter);
                tampilkanProduk(filteredProduk, 'produkContainer');
            }
        });
    });
}

function tampilkanKeranjang() {
    const container = document.getElementById('keranjangContainer');
    const totalHargaElement = document.getElementById('totalHarga');
    const jumlahItemElement = document.getElementById('jumlahItem');
    
    if (keranjang.length === 0) {
        container.innerHTML = `
            <div class="keranjang-kosong">
                <h3>Keranjang Belanja Kosong</h3>
                <p>Silakan tambahkan produk dari menu kami.</p>
                <a href="menu.html" class="btn">Lihat Menu</a>
            </div>
        `;
        totalHargaElement.textContent = 'Rp 0';
        jumlahItemElement.textContent = '0 item';
        return;
    }
    
    let totalHarga = 0;
    let totalItems = 0;
    let html = '';
    
    for (let i = 0; i < keranjang.length; i++) {
        const item = keranjang[i];
        const itemTotal = item.harga * item.kuantitas;
        totalHarga += itemTotal;
        totalItems += item.kuantitas;
        
        html += `
            <div class="keranjang-item">
                <div class="keranjang-item-info">
                    <h3>${item.nama}</h3>
                    <p class="keranjang-item-harga">Rp ${item.harga.toLocaleString('id-ID')} per item</p>
                </div>
                <div class="keranjang-item-controls">
                    <button class="quantity-btn" onclick="ubahKuantitas(${item.id}, -1)">-</button>
                    <span class="quantity-display">${item.kuantitas}</span>
                    <button class="quantity-btn" onclick="ubahKuantitas(${item.id}, 1)">+</button>
                    <span class="keranjang-item-total">Rp ${itemTotal.toLocaleString('id-ID')}</span>
                    <button class="btn-remove" onclick="hapusDariKeranjang(${item.id})">Hapus</button>
                </div>
            </div>
        `;
    }
    
    container.innerHTML = html;
    totalHargaElement.textContent = `Rp ${totalHarga.toLocaleString('id-ID')}`;
    jumlahItemElement.textContent = `${totalItems} item`;
}

function ubahKuantitas(id, perubahan) {
    const item = keranjang.find(item => item.id === id);
    
    if (item) {
        item.kuantitas += perubahan;
        
        if (item.kuantitas <= 0) {
            hapusDariKeranjang(id);
        } else {
            simpanKeranjang();
            tampilkanKeranjang();
            updateCartCount();
        }
    }
}

function hapusDariKeranjang(id) {
    keranjang = keranjang.filter(item => item.id !== id);
    simpanKeranjang();
    tampilkanKeranjang();
    updateCartCount();
}


function checkout() {
    if (keranjang.length === 0) {
        alert('Keranjang belanja Anda masih kosong.');
        return;
    }
    
    const totalHarga = keranjang.reduce((total, item) => total + (item.harga * item.kuantitas), 0);
    let pesan = 'RINCIAN PESANAN:\n\n';
    
    for (let i = 0; i < keranjang.length; i++) {
        const item = keranjang[i];
        const itemTotal = item.harga * item.kuantitas;
        pesan += `${item.nama} - ${item.kuantitas} x Rp ${item.harga.toLocaleString('id-ID')} = Rp ${itemTotal.toLocaleString('id-ID')}\n`;
    }
    
    pesan += `\nTOTAL: Rp ${totalHarga.toLocaleString('id-ID')}`;
    pesan += '\n\nTerima kasih telah berbelanja di Warung Nusa!';
    pesan += '\n\nPesanan Anda akan segera diproses.';
    
    alert(pesan);
    
    keranjang = [];
    simpanKeranjang();
    tampilkanKeranjang();
    updateCartCount();
}

document.addEventListener('DOMContentLoaded', function() {
    const closeModal = document.getElementById('closeModal');
    const produkModal = document.getElementById('produkModal');
    
    if (closeModal && produkModal) {
        closeModal.addEventListener('click', function() {
            produkModal.style.display = 'none';
        });
        
        window.addEventListener('click', function(event) {
            if (event.target === produkModal) {
                produkModal.style.display = 'none';
            }
        });
    }
});