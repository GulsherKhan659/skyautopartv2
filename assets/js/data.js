
document.addEventListener('DOMContentLoaded', function() {
    // Auto Parts Data with descriptions
    const autoPartsData = [
        {
            id: "AP001",
            partName: "Headlight Assembly",
            company: "Toyota Hilux (2015-2020)",
            shortDesc: "OEM headlight for Hilux - Clear lens, perfect condition",
            longDesc: "Genuine Toyota headlight assembly removed from a 2018 Hilux with only 45,000 km. Features crystal-clear polycarbonate lens with no hazing or scratches. Complete with all mounting hardware and wiring connectors. Plug-and-play installation. Perfect beam pattern with no internal condensation.",
            image: "assets/img/parts/toyota_hilux_headlight.jpg",
            detailUrl: "parts.html?id=AP001"
        },
        {
            id: "AP002",
            partName: "Alternator",
            company: "Honda Accord (2010-2015)",
            shortDesc: "High-output alternator - 6-month warranty",
            longDesc: "Remanufactured alternator for 2012-2015 Honda Accord models. Produces 110 amps at 2000 RPM, meeting OEM specifications. Features new bearings, brushes, and voltage regulator. Bench-tested to ensure 14.2-14.8V output across RPM range. Includes mounting hardware and pulley.",
            image: "assets/img/parts/honda_accord_alternator.jpg",
            detailUrl: "parts.html?id=AP002"
        },
        {
            id: "AP003",
            partName: "Brake Pads",
            company: "Ford Ranger (2015-2020)",
            shortDesc: "Semi-metallic pads - 70% life remaining",
            longDesc: "Semi-metallic brake pad set for 2016-2020 Ford Ranger PXII models. Features 8.5mm friction material thickness (70% life remaining) with even wear pattern. Includes all shims, clips, and hardware. Low-dust formulation provides smooth stopping power without squeal. Direct fit for both 2WD and 4WD models.",
            image: "assets/img/parts/brake_pad_ford_2025.jpg",
            detailUrl: "parts.html?id=AP003"
        },
        {
            id: "AP004",
            partName: "Taillight Assembly",
            company: "Toyota Camry (2012-2017)",
            shortDesc: "LED taillight - No cracks or moisture",
            longDesc: "OEM Toyota Camry LED taillight assembly (2015-2017 models). Features bright LED arrays for brake, running, turn signal, and reverse lights. Housing is completely sealed with no cracks, chips, or moisture intrusion. Plug-and-play connector with no wiring modifications needed.",
            image: "assets/img/parts/toyota_camry_taillight.jpg",
            detailUrl: "parts.html?id=AP004"
        },
        {
            id: "AP005",
            partName: "Radiator",
            company: "Mazda 3 (2014-2018)",
            shortDesc: "Aluminum radiator - Pressure tested, no leaks",
            longDesc: "OEM-style aluminum radiator for 2014-2018 Mazda 3 (both 1.5L and 2.0L engines). Features dual-core construction for efficient cooling. Pressure tested to 22 PSI with no leaks. All mounting tabs intact, with undamaged inlet/outlet ports. Includes transmission cooler lines.",
            image: "assets/img/parts/mazda_3_radiator.jpg",
            detailUrl: "parts.html?id=AP005"
        },
        {
            id: "AP006",
            partName: "Side Mirror",
            company: "Nissan Navara (2015-2020)",
            shortDesc: "Power-adjustable mirror - Complete with harness",
            longDesc: "Complete side mirror assembly for 2015-2020 Nissan Navara NP300. Features power adjustment, heating element, and integrated turn signal. Includes complete wiring harness and mounting bracket. Glass is undamaged with no scratches or delamination. Housing in excellent condition.",
            image: "assets/img/parts/nissan_navara_side_mirror.jpg",
            detailUrl: "parts.html?id=AP006"
        }
    ];

    // Function to generate HTML for a single part card
    function createPartCard(part) {
        return `
        <div class="col">
            <div class="team-card ak-bg" 
                 data-id="${part.id}"
                 data-short-desc="${part.shortDesc}"
                 data-long-desc="${part.longDesc}">
                <div class="team-style-1">
                    <div class="team-info">
                        <div class="team-title">
                            <a href="${part.detailUrl}">${part.partName}</a>
                            <p class="desp">${part.company}</p>
                        </div>
                        <div class="team-info-social">
                            <a href="${part.detailUrl}">
                                <i class="fa fa-info-circle" aria-hidden="true"></i>
                            </a>
                            <a href="tel:0800149419">
                                <i class="fa-solid fa-phone px-1"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    }

    // Function to render all parts into the catalog container
    function renderPartsCatalog() {
        const container = document.getElementById('parts-catalog');
        if (!container) {
            console.error('Parts catalog container not found!');
            return;
        }
        
        // Generate HTML for all parts
        let partsHTML = '';
        autoPartsData.forEach(part => {
            partsHTML += createPartCard(part);
        });
        
        // Insert into container
        container.innerHTML = partsHTML;
        
        // Add background images
        const cards = container.querySelectorAll('.team-card');
        cards.forEach(card => {
            const partId = card.getAttribute('data-id');
            const part = autoPartsData.find(p => p.id === partId);
            if (part) {
                card.style.backgroundImage = `url('${part.image}')`;
                card.style.backgroundSize = 'cover';
                card.style.backgroundPosition = 'center';
            }
        });
    }

    // Initialize the parts catalog
    renderPartsCatalog();
});