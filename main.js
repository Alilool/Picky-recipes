document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById("itemModal");
    var span = document.getElementsByClassName("close")[0];
    var modalImage = document.getElementById("modalImage");
    var modalTitle = document.getElementById("modalTitle");
    var ingredientsTable = document.getElementById("ingredientsTableBody");

    var menuItems = document.querySelectorAll(".menu-item");

    // Updated ingredients data with item names as keys and arrays of cell addresses as values, including unit
    const ingredientsData = {
        Espresso_S: [
            { ingredient: 'N4', quantity: 'N8', unit: 'N5' },
            { ingredient: 'V4', quantity: 'V8', unit: 'V5' },
            { ingredient: 'DA4', quantity: 'DA8', unit: 'DA5' }
        ],
        Espresso_D: [
            { ingredient: 'O4', quantity: 'O9', unit: 'O5' },
            { ingredient: 'V4', quantity: 'V9', unit: 'V5' },
            { ingredient: 'DA4', quantity: 'DA9', unit: 'DA5' }
        ],
        Espresso_Mac_S: [
            { ingredient: 'N4', quantity: 'N10', unit: 'N5' },
            { ingredient: 'U4', quantity: 'U10', unit: 'U5' },
            { ingredient: 'V4', quantity: 'V10', unit: 'V5' },
            { ingredient: 'DA4', quantity: 'DA10', unit: 'DA5' }
        ],
        Espresso_Mac_D: [
            { ingredient: 'O4', quantity: 'O11', unit: 'O5' },
            { ingredient: 'U4', quantity: 'U11', unit: 'U5' },
            { ingredient: 'V4', quantity: 'V11', unit: 'V5' },
            { ingredient: 'DA4', quantity: 'DA11', unit: 'DA5' },
        ],
        Cappuccino_M: [
            { ingredient: 'P4', quantity: 'P12', unit: 'P5' },
            { ingredient: 'U4', quantity: 'U12', unit: 'U5' },
            { ingredient: 'V4', quantity: 'V12', unit: 'V5' },
            { ingredient: 'DA4', quantity: 'DA12', unit: 'DA5' },
        ],
        Cappuccino_L: [
            { ingredient: 'Q4', quantity: 'Q13', unit: 'Q5' },
            { ingredient: 'U4', quantity: 'U13', unit: 'U5' },
            { ingredient: 'V4', quantity: 'V13', unit: 'V5' },
            { ingredient: 'DA4', quantity: 'DA13', unit: 'DA5' },
        ],
        Corto_Shot: [
            { ingredient: 'P4', quantity: 'P14', unit: 'P5' },
            { ingredient: 'U4', quantity: 'U14', unit: 'U5' },
            { ingredient: 'V4', quantity: 'V14', unit: 'V5' },
            { ingredient: 'DA4', quantity: 'DA14', unit: 'DA5' },
        ],
        Flat_White_M: [
            { ingredient: 'P4', quantity: 'P15', unit: 'P5' },
            { ingredient: 'U4', quantity: 'U15', unit: 'U5' },
            { ingredient: 'V4', quantity: 'V15', unit: 'V5' },
            { ingredient: 'DA4', quantity: 'DA15', unit: 'DA5' },
        ],
        Hummer_Head: [
            { ingredient: 'Q4', quantity: 'Q16', unit: 'Q5' },
            { ingredient: 'V4', quantity: 'V16', unit: 'V5' },
            { ingredient: 'DA4', quantity: 'DA16', unit: 'DA5' }
        ],
        Hummer_Head_White_M: [
            { ingredient: 'P4', quantity: 'P17', unit: 'P5' },
            { ingredient: 'U4', quantity: 'U17', unit: 'U5' },
            { ingredient: 'V4', quantity: 'V17', unit: 'V5' },
            { ingredient: 'DA4', quantity: 'DA17', unit: 'DA5' },
        ],
        Hummer_Head_White_L: [
            { ingredient: 'Q4', quantity: 'Q18', unit: 'Q5' },
            { ingredient: 'U4', quantity: 'U18', unit: 'U5' },
            { ingredient: 'V4', quantity: 'V18', unit: 'V5' },
            { ingredient: 'DA4', quantity: 'DA18', unit: 'DA5' },
        ],
        Latte_M: [
            { ingredient: 'P4', quantity: 'P19', unit: 'P5' },
            { ingredient: 'U4', quantity: 'U19', unit: 'U5' },
            { ingredient: 'V4', quantity: 'V19', unit: 'V5' },
            { ingredient: 'DA4', quantity: 'DA19', unit: 'DA5' },
        ],
        Latte_L: [
            { ingredient: 'Q4', quantity: 'Q20', unit: 'Q5' },
            { ingredient: 'U4', quantity: 'U20', unit: 'U5' },
            { ingredient: 'V4', quantity: 'V20', unit: 'V5' },
            { ingredient: 'DA4', quantity: 'DA20', unit: 'DA5' },
        ],
        Mocha_M: [
            { ingredient: 'P4', quantity: 'P21', unit: 'P5' },
            { ingredient: 'U4', quantity: 'U21', unit: 'U5' },
            { ingredient: 'V4', quantity: 'V21', unit: 'V5' },
            { ingredient: 'Z4', quantity: 'Z21', unit: 'Z5' },
            { ingredient: 'DA4', quantity: 'DA21', unit: 'DA5' },
        ],
        Mocha_L: [
            { ingredient: 'Q4', quantity: 'Q22', unit: 'Q5' },
            { ingredient: 'U4', quantity: 'U22', unit: 'U5' },
            { ingredient: 'V4', quantity: 'V22', unit: 'V5' },
            { ingredient: 'Z4', quantity: 'Z22', unit: 'Z5' },
            { ingredient: 'DA4', quantity: 'DA22', unit: 'DA5' },
        ],
        Nescafe_Black_L: [
            { ingredient: 'Q4', quantity: 'Q23', unit: 'Q5' },
            { ingredient: 'Y4', quantity: 'Y23', unit: 'Y5' },
            { ingredient: 'DA4', quantity: 'DA23', unit: 'DA5' },
        ],
        Nescafe_Black_M: [
            { ingredient: 'P4', quantity: 'P24', unit: 'P5' },
            { ingredient: 'Y4', quantity: 'Y24', unit: 'Y5' },
            { ingredient: 'DA4', quantity: 'DA24', unit: 'DA5' },
        ],
        Nescafe_L: [
            { ingredient: 'Q4', quantity: 'Q25', unit: 'Q5' },
            { ingredient: 'U4', quantity: 'U25', unit: 'U5' },
            { ingredient: 'Y4', quantity: 'Y25', unit: 'Y5' },
            { ingredient: 'DA4', quantity: 'DA25', unit: 'DA5' },
        ],
        Nescafe_M: [
            { ingredient: 'P4', quantity: 'P26', unit: 'P5' },
            { ingredient: 'U4', quantity: 'U26', unit: 'U5' },
            { ingredient: 'Y4', quantity: 'Y26', unit: 'Y5' },
            { ingredient: 'DA4', quantity: 'DA26', unit: 'DA5' },
        ],
        French_S: [
            { ingredient: 'O4', quantity: 'O29', unit: 'O5' },
            { ingredient: 'U4', quantity: 'U29', unit: 'U5' },
            { ingredient: 'W4', quantity: 'W29', unit: 'W5' },
            { ingredient: 'AA4', quantity: 'AA29', unit: 'AA5' },
        ],
        French_D: [
            { ingredient: 'P4', quantity: 'P30', unit: 'P5' },
            { ingredient: 'U4', quantity: 'U30', unit: 'U5' },
            { ingredient: 'W4', quantity: 'W30', unit: 'W5' },
            { ingredient: 'AA4', quantity: 'AA30', unit: 'AA5' },
        ],
        Hazelnut_S: [
            { ingredient: 'O4', quantity: 'O31', unit: 'O5' },
            { ingredient: 'U4', quantity: 'U31', unit: 'U5' },
            { ingredient: 'W4', quantity: 'W31', unit: 'W5' },
            { ingredient: 'AA4', quantity: 'AA31', unit: 'AA5' },
            { ingredient: 'BQ4', quantity: 'BQ31', unit: 'BQ5' },
        ],
        Hazelnut_D: [
            { ingredient: 'P4', quantity: 'P32', unit: 'P5' },
            { ingredient: 'U4', quantity: 'U32', unit: 'U5' },
            { ingredient: 'W4', quantity: 'W32', unit: 'W5' },
            { ingredient: 'AA4', quantity: 'AA32', unit: 'AA5' },
            { ingredient: 'BQ4', quantity: 'BQ32', unit: 'BQ5' },
        ],
        Nuttella_S: [
            { ingredient: 'O4', quantity: 'O33', unit: 'O5' },
            { ingredient: 'U4', quantity: 'U33', unit: 'U5' },
            { ingredient: 'W4', quantity: 'W33', unit: 'W5' },
            { ingredient: 'Z4', quantity: 'Z33', unit: 'Z5' },
            { ingredient: 'AA4', quantity: 'AA33', unit: 'AA5' },
        ],
        Nuttella_D: [
            { ingredient: 'P4', quantity: 'P34', unit: 'P5' },
            { ingredient: 'U4', quantity: 'U34', unit: 'U5' },
            { ingredient: 'W4', quantity: 'W34', unit: 'W5' },
            { ingredient: 'Z4', quantity: 'Z34', unit: 'Z5' },
            { ingredient: 'AA4', quantity: 'AA34', unit: 'AA5' },
        ],
        Mega_Nuttella_S: [
            { ingredient: 'P4', quantity: 'P35', unit: 'P5' },
            { ingredient: 'U4', quantity: 'U35', unit: 'U5' },
            { ingredient: 'W4', quantity: 'W35', unit: 'W5' },
            { ingredient: 'Z4', quantity: 'Z35', unit: 'Z5' },
            { ingredient: 'AA4', quantity: 'AA35', unit: 'AA5' },
        ],
        Mega_Nuttella_D: [
            { ingredient: 'Q4', quantity: 'Q36', unit: 'Q5' },
            { ingredient: 'U4', quantity: 'U36', unit: 'U5' },
            { ingredient: 'W4', quantity: 'W36', unit: 'W5' },
            { ingredient: 'Z4', quantity: 'Z36', unit: 'Z5' },
            { ingredient: 'AA4', quantity: 'AA36', unit: 'AA5' },
        ],
        Turkish_S: [
            { ingredient: 'O4', quantity: 'O38', unit: 'O5' },
            { ingredient: 'W4', quantity: 'W38', unit: 'W5' },
            { ingredient: 'AA4', quantity: 'AA38', unit: 'AA5' },
        ],
        Turkish_D: [
            { ingredient: 'P4', quantity: 'P39', unit: 'P5' },
            { ingredient: 'W4', quantity: 'W39', unit: 'W5' },
            { ingredient: 'AA4', quantity: 'AA39', unit: 'AA5' },
        ],
        Turkish_Mehawg_S: [
            { ingredient: 'O4', quantity: 'O40', unit: 'O5' },
            { ingredient: 'X4', quantity: 'X40', unit: 'X5' },
            { ingredient: 'AA4', quantity: 'AA40', unit: 'AA5' },
        ],
        Turkish_Mehawg_D: [
            { ingredient: 'P4', quantity: 'P41', unit: 'P5' },
            { ingredient: 'X4', quantity: 'X41', unit: 'X5' },
            { ingredient: 'AA4', quantity: 'AA41', unit: 'AA5' },
        ],
        Banana_L: [
            { ingredient: 'S4', quantity: 'S44', unit: 'S5' },
            { ingredient: 'AB4', quantity: 'AB44', unit: 'AB5' },
            { ingredient: 'CD4', quantity: 'CD44', unit: 'CD5' },
            { ingredient: 'DH4', quantity: 'DH44', unit: 'DH5' },
        ],
        Guava_L: [
            { ingredient: 'S4', quantity: 'S45', unit: 'S5' },
            { ingredient: 'AB4', quantity: 'AB45', unit: 'AB5' },
            { ingredient: 'CE4', quantity: 'CE45', unit: 'CE5' },
            { ingredient: 'DH4', quantity: 'DH45', unit: 'DH5' },
        ],
        Guava_Milk_L: [
            { ingredient: 'S4', quantity: 'S46', unit: 'S5' },
            { ingredient: 'U4', quantity: 'U46', unit: 'U5' },
            { ingredient: 'AB4', quantity: 'AB46', unit: 'AB5' },
            { ingredient: 'CE4', quantity: 'CE46', unit: 'CE5' },
            { ingredient: 'DH4', quantity: 'DH46', unit: 'DH5' },
        ],
        Kiwi_L: [
            { ingredient: 'S4', quantity: 'S47', unit: 'S5' },
            { ingredient: 'AB4', quantity: 'AB47', unit: 'AB5' },
            { ingredient: 'CF4', quantity: 'CF47', unit: 'CF5' },
            { ingredient: 'DH4', quantity: 'DH47', unit: 'DH5' },
        ],
        Lemon_L: [
            { ingredient: 'S4', quantity: 'S48', unit: 'S5' },
            { ingredient: 'AB4', quantity: 'AB48', unit: 'AB5' },
            { ingredient: 'CG4', quantity: 'CG48', unit: 'CG5' },
            { ingredient: 'DH4', quantity: 'DH48', unit: 'DH5' },
        ],
        Lemon_Mint_L: [
            { ingredient: 'S4', quantity: 'S49', unit: 'S5' },
            { ingredient: 'BK4', quantity: 'BK49', unit: 'BK5' },
            { ingredient: 'AB4', quantity: 'AB49', unit: 'AB5' },
            { ingredient: 'CG4', quantity: 'CG49', unit: 'CG5' },
            { ingredient: 'DH4', quantity: 'DH49', unit: 'DH5' },
        ],
        Mango_L: [
            { ingredient: 'S4', quantity: 'S50', unit: 'S5' },
            { ingredient: 'AB4', quantity: 'AB50', unit: 'AB5' },
            { ingredient: 'CC4', quantity: 'CC50', unit: 'CC5' },
            { ingredient: 'DH4', quantity: 'DH50', unit: 'DH5' },
        ],
        Orange_L: [
            { ingredient: 'S4', quantity: 'S51', unit: 'S5' },
            { ingredient: 'AB4', quantity: 'AB51', unit: 'AB5' },
            { ingredient: 'CH4', quantity: 'CH51', unit: 'CH5' },
            { ingredient: 'DH4', quantity: 'DH51', unit: 'DH5' },
        ],
        Pineapple_L: [
            { ingredient: 'S4', quantity: 'S52', unit: 'S5' },
            { ingredient: 'AB4', quantity: 'AB52', unit: 'AB5' },
            { ingredient: 'AZ4', quantity: 'AZ52', unit: 'AZ5' },
            { ingredient: 'CI4', quantity: 'CI52', unit: 'CI5' },
            { ingredient: 'DH4', quantity: 'DH52', unit: 'DH5' },
        ],
        Pomegranate_L: [
            { ingredient: 'S4', quantity: 'S53', unit: 'S5' },
            { ingredient: 'AB4', quantity: 'AB53', unit: 'AB5' },
            { ingredient: 'CJ4', quantity: 'CJ53', unit: 'CJ5' },
            { ingredient: 'DH4', quantity: 'DH53', unit: 'DH5' },
        ],
        Strawberry_L: [
            { ingredient: 'S4', quantity: 'S54', unit: 'S5' },
            { ingredient: 'AB4', quantity: 'AB54', unit: 'AB5' },
            { ingredient: 'CK4', quantity: 'CK54', unit: 'CK5' },
            { ingredient: 'DH4', quantity: 'DH54', unit: 'DH5' },
        ],
        Strawberry_Milk_L: [
            { ingredient: 'S4', quantity: 'S55', unit: 'S5' },
            { ingredient: 'U4', quantity: 'U55', unit: 'U5' },
            { ingredient: 'AB4', quantity: 'AB55', unit: 'AB5' },
            { ingredient: 'CK4', quantity: 'CK55', unit: 'CK5' },
            { ingredient: 'DH4', quantity: 'DH55', unit: 'DH5' },
        ],
        Date: [
            { ingredient: 'S4', quantity: 'S57', unit: 'S5' },
            { ingredient: 'AB4', quantity: 'AB57', unit: 'AB5' },
            { ingredient: 'DH4', quantity: 'DH57', unit: 'DH5' },
        ],
        Milk_Choco: [
            { ingredient: 'S4', quantity: 'S59', unit: 'S5' },
            { ingredient: 'U4', quantity: 'U59', unit: 'U5' },
            { ingredient: 'AJ4', quantity: 'AJ59', unit: 'AJ5' },
            { ingredient: 'AY4', quantity: 'AY59', unit: 'AY5' },
            { ingredient: 'DH4', quantity: 'DH59', unit: 'DH5' },
        ],
        Milk_Mango: [
            { ingredient: 'S4', quantity: 'S60', unit: 'S5' },
            { ingredient: 'U4', quantity: 'U60', unit: 'U5' },
            { ingredient: 'AK4', quantity: 'AK60', unit: 'AK5' },
            { ingredient: 'DH4', quantity: 'DH60', unit: 'DH5' },
        ],
        Milk_Nuttella: [
            { ingredient: 'S4', quantity: 'S61', unit: 'S5' },
            { ingredient: 'U4', quantity: 'U61', unit: 'U5' },
            { ingredient: 'Z4', quantity: 'Z61', unit: 'Z5' },
            { ingredient: 'AM4', quantity: 'AM61', unit: 'AM5' },
            { ingredient: 'DH4', quantity: 'DH61', unit: 'DH5' },
        ],
        Milk_Oreo: [
            { ingredient: 'S4', quantity: 'S62', unit: 'S5' },
            { ingredient: 'U4', quantity: 'U62', unit: 'U5' },
            { ingredient: 'AM4', quantity: 'AM62', unit: 'AM5' },
            { ingredient: 'AY4', quantity: 'AY62', unit: 'AY5' },
            { ingredient: 'CN4', quantity: 'CN62', unit: 'CN5' },
            { ingredient: 'DH4', quantity: 'DH62', unit: 'DH5' },
        ],
        Milk_Strawberry: [
            { ingredient: 'S4', quantity: 'S63', unit: 'S5' },
            { ingredient: 'U4', quantity: 'U63', unit: 'U5' },
            { ingredient: 'AL4', quantity: 'AL63', unit: 'AL5' },
            { ingredient: 'BF4', quantity: 'BF63', unit: 'BF5' },
            { ingredient: 'DH4', quantity: 'DH63', unit: 'DH5' },
        ],
        Milk_Vanilla: [
            { ingredient: 'S4', quantity: 'S64', unit: 'S5' },
            { ingredient: 'U4', quantity: 'U64', unit: 'U5' },
            { ingredient: 'AM4', quantity: 'AM64', unit: 'AM5' },
            { ingredient: 'DH4', quantity: 'DH64', unit: 'DH5' },
        ],
        Milk_Lotus: [
            { ingredient: 'S4', quantity: 'S65', unit: 'S5' },
            { ingredient: 'U4', quantity: 'U65', unit: 'U5' },
            { ingredient: 'AM4', quantity: 'AM65', unit: 'AM5' },
            { ingredient: 'BA4', quantity: 'BA65', unit: 'BA5' },
            { ingredient: 'DH4', quantity: 'DH65', unit: 'DH5' },
        ],
        Frapp: [
            { ingredient: 'S4', quantity: 'S67', unit: 'S5' },
            { ingredient: 'U4', quantity: 'U67', unit: 'U5' },
            { ingredient: 'AP4', quantity: 'AP67', unit: 'AP5' },
        ],
        Frapp_Caramel: [
            { ingredient: 'S4', quantity: 'S68', unit: 'S5' },
            { ingredient: 'U4', quantity: 'U68', unit: 'U5' },
            { ingredient: 'AP4', quantity: 'AP68', unit: 'AP5' },
            { ingredient: 'AZ4', quantity: 'AZ68', unit: 'AZ5' },
        ],
        Frapp_Hazelnut: [
            { ingredient: 'S4', quantity: 'S69', unit: 'S5' },
            { ingredient: 'U4', quantity: 'U69', unit: 'U5' },
            { ingredient: 'AP4', quantity: 'AP69', unit: 'AP5' },
            { ingredient: 'BQ4', quantity: 'BQ69', unit: 'BQ5' },
        ],
        Frapp_Mocha: [
            { ingredient: 'S4', quantity: 'S70', unit: 'S5' },
            { ingredient: 'U4', quantity: 'U70', unit: 'U5' },
            { ingredient: 'Z4', quantity: 'Z70', unit: 'Z5' },
            { ingredient: 'AP4', quantity: 'AP70', unit: 'AP5' },
            { ingredient: 'DA4', quantity: 'DA70', unit: 'DA5' },
        ],
        Frapp_Berry: [
            { ingredient: 'S4', quantity: 'S71', unit: 'S5' },
            { ingredient: 'U4', quantity: 'U71', unit: 'U5' },
            { ingredient: 'AP4', quantity: 'AP71', unit: 'AP5' },
            { ingredient: 'BB4', quantity: 'BB71', unit: 'BB5' },
            { ingredient: 'BE4', quantity: 'BE71', unit: 'BE5' },
        ],
        Ice_Capp: [
            { ingredient: 'S4', quantity: 'S72', unit: 'S5' },
            { ingredient: 'U4', quantity: 'U72', unit: 'U5' },
            { ingredient: 'V4', quantity: 'V72', unit: 'V5' },
            { ingredient: 'DA4', quantity: 'DA72', unit: 'DA5' },
        ],
        Ice_Choco: [
            { ingredient: 'S4', quantity: 'S73', unit: 'S5' },
            { ingredient: 'U4', quantity: 'U73', unit: 'U5' },
            { ingredient: 'AO4', quantity: 'AO73', unit: 'AO5' },
            { ingredient: 'AY4', quantity: 'AY73', unit: 'AY5' },
        ],
        Ice_Black: [
            { ingredient: 'S4', quantity: 'S74', unit: 'S5' },
            { ingredient: 'V4', quantity: 'V74', unit: 'V5' },       
        ],
        Ice_Latte: [
            { ingredient: 'S4', quantity: 'S75', unit: 'S5' },
            { ingredient: 'U4', quantity: 'U75', unit: 'U5' },
            { ingredient: 'V4', quantity: 'V75', unit: 'V5' },
        ],
        Ice_Mocha: [
            { ingredient: 'S4', quantity: 'S77', unit: 'S5' },
            { ingredient: 'U4', quantity: 'U77', unit: 'U5' },
            { ingredient: 'V4', quantity: 'V77', unit: 'V5' },
            { ingredient: 'AY4', quantity: 'AY77', unit: 'AY5' },
            { ingredient: 'DA4', quantity: 'DA77', unit: 'DA5' },
        ],
        Ice_Nescafe: [
            { ingredient: 'S4', quantity: 'S78', unit: 'S5' },
            { ingredient: 'U4', quantity: 'U78', unit: 'U5' },
            { ingredient: 'Y4', quantity: 'Y78', unit: 'Y5' },
        ],
    };

    // Fetch the static Excel file
    fetch('PICKY.xlsx')
        .then(response => response.arrayBuffer())
        .then(data => {
            // Parse the Excel file using SheetJS
            const workbook = XLSX.read(data, { type: 'array' });

            // Get the first sheet
            const firstSheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[firstSheetName];

            // Update modal content on menu item click
            menuItems.forEach(function (item) {
                item.addEventListener("click", function () {
                    var imgSrc = this.querySelector("img").src;
                    var titleText = this.querySelector("h3").textContent;
                    var itemId = this.getAttribute("data-item-id"); // Assuming each item has a data-item-id attribute

                    modalImage.src = imgSrc;
                    modalTitle.textContent = titleText;

                    // Clear previous table rows
                    ingredientsTable.innerHTML = '';

                    // Check if the ingredients data exists for the clicked item
                    if (ingredientsData[itemId]) {
                        ingredientsData[itemId].forEach(function (cellInfo) {
                            var ingredientCell = worksheet[cellInfo.ingredient];
                            var quantityCell = worksheet[cellInfo.quantity];
                            var unitCell = worksheet[cellInfo.unit];

                            var ingredientValue = ingredientCell ? ingredientCell.v : 'Not found';
                            var quantityValue = quantityCell ? quantityCell.v : 'Not found';
                            var unitValue = unitCell ? unitCell.v : 'Not found';

                            var row = ingredientsTable.insertRow();
                            var ingredientCellElement = row.insertCell();
                            var quantityCellElement = row.insertCell();
                            var unitCellElement = row.insertCell();

                            ingredientCellElement.textContent = ingredientValue;
                            quantityCellElement.textContent = quantityValue;
                            unitCellElement.textContent = unitValue;
                        });
                    }

                    modal.style.display = "flex";
                    document.body.classList.add('no-scroll');
                });
            });
        })
        .catch(error => console.error('Error loading Excel file:', error));

    // Close modal when clicking on the close button or outside the modal
    span.onclick = function () {
        modal.style.display = "none";
        document.body.classList.remove('no-scroll');
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.body.classList.remove('no-scroll');
        }
    }
});
