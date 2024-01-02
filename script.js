// Contoh data resep (sebagai pengganti data dari database)
const recipes = [
    { name: "Nasi Goreng", image: "./src/image/nasi_goreng.jpg", description: "Deskripsi singkat mengenai resep nasi goreng..." },
    { name: "Ayam Bakar", image: "./src/image/ayam_bakar.jpg", description: "Deskripsi singkat mengenai resep ayam bakar..." },
    // Tambahkan resep lainnya sesuai kebutuhan
];

// Function untuk menampilkan resep pada halaman
function displayRecipes() {
    const recipeList = document.getElementById("recipeList");
    recipeList.innerHTML = ""; // Kosongkan konten sebelum menambahkan resep baru

    recipes.forEach(recipe => {
        const article = document.createElement("article");
        article.innerHTML = `
            <h2>${recipe.name}</h2>
            <img src="${recipe.image}" alt="${recipe.name}">
            <p>${recipe.description}</p>
            <a href="#">Lihat Resep</a>
        `;
        recipeList.appendChild(article);
    });
}

// Function untuk mencari resep berdasarkan input pengguna
function searchRecipes() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe => recipe.name.toLowerCase().includes(searchInput));

    // Menampilkan resep yang sesuai dengan hasil pencarian
    const recipeList = document.getElementById("recipeList");
    recipeList.innerHTML = "";

    filteredRecipes.forEach(recipe => {
        const article = document.createElement("article");
        article.innerHTML = `
            <h2>${recipe.name}</h2>
            <img src="${recipe.image}" alt="${recipe.name}">
            <p>${recipe.description}</p>
            <a href="#">Lihat Resep</a>
        `;
        recipeList.appendChild(article);
    });
}

// Menampilkan semua resep saat halaman dimuat
displayRecipes();