// products.js

// Example product data (this can be loaded from a server or external JSON in a real app)
const products = [
  {
    id: 1,
    name: "iPhone 16 Pro",
    image: "images/product-1.png",
    description: "A powerful phone with the latest features.",
    price: "999€",
  },
  {
    id: 2,
    name: "MacBook Air 15-inch",
    image: "images/product-2.jpg",
    description: "Lightweight, powerful laptop with M3 chip.",
    price: "1299€",
  },
  {
    id: 3,
    name: "PRO X SUPERLIGHT 2 DEX",
    image: "images/product-3.jpg",
    description: "High-end gaming mouse for precision.",
    price: "159€",
  },
  {
    id: 4,
    name: "BOSE QuietComfort Bluetooth Headphones",
    image: "images/product-4.jpg",
    description: "Noise-cancelling Bluetooth headphones.",
    price: "289€",
  },
  {
    id: 5,
    name: "iPad Pro 12.9-inch",
    image: "images/product-5.jpg",
    description: "Powerful tablet with M2 chip and Liquid Retina XDR display.",
    price: "1099€",
  },
  {
    id: 6,
    name: "Samsung Galaxy S24 Ultra",
    image: "images/product-6.jpg",
    description: "Premium Android smartphone with S Pen support.",
    price: "1299€",
  },
  {
    id: 7,
    name: "Sony WH-1000XM5",
    image: "images/product-7.jpg",
    description: "Premium wireless noise-cancelling headphones.",
    price: "399€",
  },
  {
    id: 8,
    name: "Apple Watch Series 9",
    image: "images/product-8.jpg",
    description: "Advanced smartwatch with health monitoring.",
    price: "399€",
  },
  {
    id: 9,
    name: "ASUS ROG Swift Gaming Monitor",
    image: "images/product-9.jpg",
    description: "27-inch 4K gaming monitor with 144Hz refresh rate.",
    price: "799€",
  },
  {
    id: 10,
    name: "DJI Mini 4 Pro",
    image: "images/product-10.jpg",
    description: "Compact drone with 4K camera and obstacle avoidance.",
    price: "759€",
  },
  {
    id: 11,
    name: "Razer Blackwidow V4 Pro",
    image: "images/product-11.jpg",
    description: "Mechanical gaming keyboard with RGB lighting.",
    price: "229€",
  },
  {
    id: 12,
    name: "Amazon Echo Show 10",
    image: "images/product-12.jpg",
    description: "Smart display with motion tracking and Alexa.",
    price: "259€",
  },
  {
    id: 13,
    name: "Canon EOS R6 Mark II",
    image: "images/product-13.jpg",
    description: "Full-frame mirrorless camera for professionals.",
    price: "2499€",
  },
  {
    id: 14,
    name: 'Samsung 49" Odyssey G9',
    image: "images/product-14.jpg",
    description: "Ultra-wide curved gaming monitor, 240Hz.",
    price: "1299€",
  },
  {
    id: 15,
    name: "Philips Hue Starter Kit",
    image: "images/product-15.jpg",
    description: "Smart lighting system with bridge and bulbs.",
    price: "199€",
  },
  {
    id: 16,
    name: "NVIDIA GeForce RTX 4080",
    image: "images/product-16.jpg",
    description: "High-end graphics card for gaming and rendering.",
    price: "1599€",
  },
  {
    id: 17,
    name: "Meta Quest 3",
    image: "images/product-17.jpg",
    description: "Advanced VR headset with mixed reality capabilities.",
    price: "549€",
  },
  {
    id: 18,
    name: "Samsung 990 PRO 4TB SSD",
    image: "images/product-18.jpg",
    description: "Ultra-fast NVMe SSD with PCIe 4.0.",
    price: "399€",
  },
  {
    id: 19,
    name: "PlayStation 5 Pro",
    image: "images/product-19.jpg",
    description: "Next-gen gaming console with 8K support.",
    price: "599€",
  },
  {
    id: 20,
    name: "ASUS ROG Rapture WiFi 7 Router",
    image: "images/product-20.jpg",
    description: "High-performance gaming router with tri-band.",
    price: "699€",
  },
  {
    id: 21,
    name: "Steam Deck OLED",
    image: "images/product-21.jpg",
    description: "Portable gaming PC with OLED display and enhanced battery.",
    price: "549€",
  },
  {
    id: 22,
    name: "Corsair MP700 Pro 4TB",
    image: "images/product-22.jpg",
    description: "PCIe Gen5 NVMe SSD with 12,400MB/s speeds.",
    price: "499€",
  },
  {
    id: 23,
    name: "LG C3 OLED 65-inch",
    image: "images/product-23.jpg",
    description: "4K OLED TV with gaming features and smart capabilities.",
    price: "2299€",
  },
  {
    id: 24,
    name: "Dyson Zone",
    image: "images/product-24.jpg",
    description: "Air-purifying headphones with active noise cancellation.",
    price: "749€",
  },
  {
    id: 25,
    name: "Framework Laptop 16",
    image: "images/product-25.jpg",
    description: "Modular, upgradeable laptop with RTX graphics.",
    price: "1499€",
  },

  {
    id: 26,
    name: "Nothing Phone 2a",
    image: "images/product-26.jpg",
    description:
      "Innovative smartphone with Glyph interface and clean Android.",
    price: "349€",
  },
  {
    id: 27,
    name: "Keychron Q3 Pro",
    image: "images/product-27.jpg",
    description: "Wireless mechanical keyboard with QMK/VIA support.",
    price: "219€",
  },
  {
    id: 28,
    name: "Sonos Era 300",
    image: "images/product-28.jpg",
    description: "Spatial audio smart speaker with Dolby Atmos.",
    price: "499€",
  },
  {
    id: 29,
    name: "GoPro Hero 12 Black",
    image: "images/product-29.jpg",
    description: "Advanced action camera with 5.3K video and HDR.",
    price: "399€",
  },
  {
    id: 30,
    name: "Anker 737 Power Bank",
    image: "images/product-30.jpg",
    description: "24,000mAh portable charger with 140W output.",
    price: "149€",
  },
  {
    id: 31,
    name: "Dell UltraSharp U3224KE",
    image: "images/product-31.jpg",
    description: "32-inch 4K IPS Black monitor with Thunderbolt 4.",
    price: "1099€",
  },
  {
    id: 32,
    name: "Backbone One PlayStation",
    image: "images/product-32.jpg",
    description: "Mobile gaming controller for iPhone with PS Remote Play.",
    price: "119€",
  },
];

// Get the product ID from the URL
const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get("id"));

// Find the product by its ID
const product = products.find((p) => p.id === productId);

// If a valid product is found, update the page with its details
if (product) {
  document.getElementById("product-image").src = product.image;
  document.getElementById("product-name").textContent = product.name;
  document.getElementById("product-description").textContent =
    product.description;
  document.getElementById("product-price").textContent = product.price;
} else {
  // If no product is found, show an error message
  document.body.innerHTML = "<h1>Product not found</h1>";
}
