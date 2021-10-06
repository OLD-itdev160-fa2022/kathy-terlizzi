/**
 * Wrap everything in an IFFE
 */
(function() {

    // Package data array
    var data = [
        {
            name: 'emmet',
            description: 'Emmet is the number one code snippet tool.',
            author: 'Author: emmetio.\xA0\xA0 Downloads:',
            url: 'https://atom.io/packages/emmet',
            downloads: 1662209,
            stars: 2534,
            price: 10.50,
            selector: 'p1'

        },
        {
            name: 'atom-beautify',
            description: 'The atom beautify package will clean up your code and make it more readable.',
            author: 'Author: Glavin001.\xA0\xA0 Downloads:',
            url: 'https://atom.io/packages/atom-beautify',
            downloads: 4228040,
            stars: 4541,
            price: 6.75,
            selector: 'p2'
        }
    ];

    // Constructor function
    function Package(data){
        this.name = data.name;
        this.description = data.description;
        this.author = data.author;
        this.url = data.url;
        this.downloads = data.downloads;
        this.stars = data.stars;
        this.selector = data.selector;

        this.getFormattedDownloads = function (){
            return this.downloads.toLocaleString();
        };

        this.getFormattedStars = function (){
            return this.stars.toLocaleString();
        };
    }

    /**
     * Utility functions
     */

    var getTodaysDate = function() {
        var today = new Date();
        return today.toDateString();
    };

    // Returns DOM element by id
    var getEl = function (id) {
        return document.getElementById(id);
    }

    // Write's the pkg object's data to the appropriate
    // DOM elements using the pkg's selector property
    var writePackageInfo = function(package) {
        var selector = package.selector,
            nameEl = getEl(selector + '-name'),
            descEl = getEl(selector + '-description'),
            authEl = getEl(selector +'-author'),
            downloadEl = getEl(selector + '-downloads'),
            starEl = getEl(selector + '-stars');

    // Write package data to DOM elements
    nameEl.textContent = package.name;
    descEl.textContent = package.description;
    authEl.textContent = package.author;
    downloadEl.textContent = package.getFormattedDownloads();
    starEl.textContent = package.getFormattedStars();       

    }

    // Write date
    var dateEl = getEl('date');
    dateEl.textContent = getTodaysDate();

    // Write package data
    var emmet = new Package(data[0]);
    writePackageInfo(emmet);

    var beautify = new Package(data[1]);
    writePackageInfo(beautify);

}());