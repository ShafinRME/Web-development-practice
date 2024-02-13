const loadPhone = async (searchText = '13', isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data
    getAllPhones(phones, isShowAll);
}

const getAllPhones = (phones, isShowAll) => {
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';

    // Show all button Logic

    const showAllButton = document.getElementById('show-all-button');
    if (phones.length > 12 && !isShowAll) {
        showAllButton.classList.remove('hidden');
    }
    else {
        showAllButton.classList.add('hidden');
    }

    if (!isShowAll) {
        phones = phones.slice(0, 12);
    }


    phones.forEach(phone => {
        console.log(phone)
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card w-96 bg-slate-100 shadow-lg`;
        phoneCard.innerHTML = `
    <figure class="px-10 pt-10">
        <img src="${phone.image}" alt="Shoes"
            class="rounded-xl" />
    </figure>
    <div class="card-body items-center text-center">
        <h2 class="card-title text-black font-bold">${phone.phone_name}</h2>
        <p class="text-black">There are many variations of passages of available, but the majority have suffered</p>
        <h2 class="text-xl font-bold text-black">Price : $999</h2>
        <div class="card-actions">
            <button onclick = "handleShowDetails('${phone.slug}')" class="btn btn-primary text-lg font-semibold text-white">Show Details</button>
        </div>
    </div>
    `
        phoneContainer.appendChild(phoneCard);
    });

    loadingSpinner(false);

}


const handleShowDetails = async (id) => {

    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);

    const data = await res.json();
    console.log(data);
    showDetails(data.data);
}

const showDetails = (phones) => {

    const modalElement = document.getElementById('show_details');
    const modalCard = document.createElement('div');
    modalCard.classList = `modal-box`;
    modalCard.innerHTML = `

    <img class="ms-36 pb-4" src="${phones.image}"
    <h1 class="font-bold text-3xl">${phones?.name}</h1>
    <h3 class="font-bold text-lg">${phones?.releaseDate}</h3>
    <h3 class="font-bold text-lg">${phones?.mainFeatures?.storage}</h3>

    <p class="py-4">Press ESC key or click the button below to close</p>
    <div class="modal-action">
        <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
            <button class="btn">Close</button>
        </form>
    </div>
    `

    modalElement.appendChild(modalCard);


    show_details.showModal();

}


// Search Phones

const handleSearch = (isShowAll) => {
    loadingSpinner(true);
    const searchField = document.getElementById('search-button');
    const searchText = searchField.value;
    loadPhone(searchText, isShowAll);
}

const loadingSpinner = (isLoading) => {
    const loadingSpin = document.getElementById('loading-spinner');
    if (isLoading) {
        loadingSpin.classList.remove('hidden');
    }
    else {
        loadingSpin.classList.add('hidden');
    }

}

const showAllButton = () => {
    handleSearch(true)
}


loadPhone();