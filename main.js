function nationParksInfo() {
    const selectElement = document.querySelector("#parks");

    for (const nationalPark of parkTypesArray) {
        const option = document.createElement("option");
        option.value = nationalPark;
        option.innerText = nationalPark;
        selectElement.appendChild(option);
    }

    selectElement.onchange = selectedPark;
}

function parkStateData() {
    const selectElement = document.querySelector("#state");

    for (const stateData of locationsArray) {
        const option = document.createElement("option");
        option.value = stateData;
        option.innerText = stateData;
        selectElement.appendChild(option);
    }

    selectElement.onchange = selectedState;
}
function populateAlbumDropdown() {

    // The target of a form's "submit" event is the form.
    // The target of a click event is the element clicked.
    // The target of a change event is the element changed. 

    selectElement.onchange = handleAlbumChange

    for (const state of locationsArray) {
        // Example: <option value="album.folder">album.name</option>

        // 1. Create a new empty element by tag name:
        const option = document.createElement("option")

        // 2. Customize the new baby element:
        option.value = state.folder
        option.innerText = state.name

        // 3. Add it to a branch which is already on the page:
        selectElement.append(option)
    }
}