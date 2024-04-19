function activate_script() {
    document.getElementById('iloscCzlonkow').addEventListener('change', function () {
        var iloscCzlonkow = parseInt(this.value);
        var daneCzlonkowDiv = document.getElementById('daneCzlonkow');
        daneCzlonkowDiv.innerHTML = ''; // Wyczyszczenie poprzednich pól
    
        for (var i = 1; i <= iloscCzlonkow; i++) {
            var divCzlonka = document.createElement('div');
    
            // Tytuł członka zarządu
            divCzlonka.innerHTML = '<br><strong>Członek organu ' + i + '</strong>';
    
            // Imię pierwsze
            divCzlonka.innerHTML += '<br><label for="imiona' + i + '">Imię pierwsze:</label>' +
                '<input class="form-input-2 w-input" maxlength="256" type="text" id="imie' + i + '" name="imie' + i + '" required>';
    
            // Imię drugie
            divCzlonka.innerHTML += '<br><label for="drugieImie' + i + '">Imię drugie:</label>' +
                '<input class="form-input-2 w-input" maxlength="256" type="text" id="drugieImie' + i + '" name="drugieImie' + i + '" required>';
    
            // Nazwisko
            divCzlonka.innerHTML += '<br><label for="nazwisko' + i + '">Nazwisko:</label>' +
                '<input class="form-input-2 w-input" maxlength="256" type="text" id="nazwisko' + i + '" name="nazwisko' + i + '" required">';
    
            // Adres
            divCzlonka.innerHTML += '<br><label for="adresDoreczen' + i + '">Adres:</label>' +
                '<input class="form-input-2 w-input" maxlength="256" type="text" id="adresDoreczen' + i + '" name="adresDoreczen' + i + '" required>';
    
            // Adres do doręczeń
            divCzlonka.innerHTML += '<br><label for="adresDoreczen' + i + '">Adres do doręczeń:</label>' +
                '<input class="form-input-2 w-input" maxlength="256" type="text" id="adresDoreczen' + i + '" name="adresDoreczen' + i + '" required>';
    
            // Funkcja w zarządzie
            divCzlonka.innerHTML += '<br><label for="funkcjaZarzadzie' + i + '">Funkcja w zarządzie: </label>' +
                '<input  class="form-input-2 w-input" maxlength="256" type="text" id="funkcjaZarzadzie' + i + '" name="funkcjaZarzadzie' + i + '" required placeholder="Proszę wskazać funkcję (np. prezes zarządu, członek zarządu)">';
    
            // Pole "Czy posiada PESEL?"
            divCzlonka.innerHTML += '<br><label for="czyPosiadaPesel' + i + '">Czy posiada PESEL?</label>' +
                '<select class="select-field w-select" id="czyPosiadaPesel' + i + '" name="czyPosiadaPesel' + i + '" onchange="togglePeselInput(' + i + ')">' +
                '<option value="-">-</option>' +
                '<option value="tak">Tak</option>' +
                '<option value="nie">Nie</option>' +
                '</select>';
    
            divCzlonka.innerHTML += '<div id="daneCzlonka' + i + '"></div>';
            daneCzlonkowDiv.appendChild(divCzlonka);
    
            // Obsługa zmiany odpowiedzi na pytanie o PESEL
            document.getElementById('czyPosiadaPesel' + i).addEventListener('change', function () {
                var czyPosiadaPesel = this.value;
                var indexCzlonka = this.id.slice(-1);
                var daneCzlonkaDiv = document.getElementById('daneCzlonka' + indexCzlonka);
                daneCzlonkaDiv.innerHTML = ''; // Wyczyszczenie poprzednich pól
    
                if (czyPosiadaPesel === 'tak') {
                    // Pole PESEL
                    daneCzlonkaDiv.innerHTML += '<br><label for="peselCzlonka' + indexCzlonka + '">PESEL:</label>' +
                        '<input class="form-input-2 w-input" maxlength="256" type="text" id="peselCzlonka' + indexCzlonka + '" name="peselCzlonka' + indexCzlonka + '" required class="form-input 2">';
                } else {
                    // Data ur.
                    daneCzlonkaDiv.innerHTML += '<br><label for="dataCzlonka' + indexCzlonka + '">Data urodzenia:</label>' +
                        '<input class="select-field w-select" type="date" id="dataCzlonka' + indexCzlonka + '" name="dataCzlonka' + indexCzlonka + '" required>';
                }
            });
        }
    });    
    document.getElementById('czyProkuraCheckbox').addEventListener('change', function () {
        var czyProkura = this.checked;
        var iloscProkurentowDiv = document.getElementById('iloscProkurentowDiv');
        var daneProkurentowDiv = document.getElementById('daneProkurentow');
        iloscProkurentowDiv.innerHTML = ''; // Wyczyszczenie poprzednich pól
        daneProkurentowDiv.innerHTML = ''; // Wyczyszczenie poprzednich pól

        if (czyProkura) {
            // Pytanie 9
            iloscProkurentowDiv.innerHTML += '<label for="iloscProkurentow">Jeśli tak, proszę wskazać ilu:</label>' +
                '<select class="select-field w-select" id="iloscProkurentow" name="iloscProkurentow">' +
                '<option value="-">-</option>' +
                '<option value="1">1</option>' +
                '<option value="2">2</option>' +
                '<option value="3">3</option>' +
                '<option value="4">4</option>' +
                '<option value="5">5</option>' +
                '<option value="6">6</option>' +
                '<option value="7">7</option>' +
                '</select>';

            // Dynamiczne generowanie pól dla każdego prokurenta
            var iloscProkurentowSelect = document.getElementById('iloscProkurentow');
            iloscProkurentowSelect.addEventListener('change', function () {
                var iloscProkurentow = parseInt(this.value);

                daneProkurentowDiv.innerHTML = ''; // Wyczyszczenie poprzednich pól

                for (var i = 1; i <= iloscProkurentow; i++) {
                    var divProkurenta = document.createElement('div');

                    // Tytuł prokurenta
                    divProkurenta.innerHTML = '<br><strong>Prokurent ' + i + '</strong>';

                    // Imię 
                    divProkurenta.innerHTML += '<br><label for="imieProkurent' + i + '">Imię pierwsze:</label>' +
                        '<input class="form-input-2 w-input" maxlength="256" type="text" id="imieProkurent' + i + '" name="imieProkurent' + i + '" required>';

                    // Drugie imię 
                    divProkurenta.innerHTML += '<br><label for="drugieImieProkurent' + i + '">Imię drugie:</label>' +
                        '<input class="form-input-2 w-input" maxlength="256" type="text" id="drugieImieProkurent' + i + '" name="drugieImieProkurent' + i + '" required>';

                    // Nazwisko 
                    divProkurenta.innerHTML += '<br><label for="nazwiskoProkurent' + i + '">Nazwisko:</label>' +
                        '<input class="form-input-2 w-input" maxlength="256" type="text" id="nazwiskoProkurent' + i + '" name="nazwiskoProkurent' + i + '" required>';

                    // Adres
                    divProkurenta.innerHTML += '<br><label for="adresDoreczenProkurent' + i + '">Adres:</label>' +
                        '<input class="form-input-2 w-input" maxlength="256" type="text" id="adresDoreczenProkurent' + i + '" name="adresDoreczenProkurent' + i + '" required>';

                    // Adres do doręczeń
                    divProkurenta.innerHTML += '<br><label for="adresDoreczenProkurent' + i + '">Adres do doręczeń:</label>' +
                        '<input class="form-input-2 w-input" maxlength="256" type="text" id="adresDoreczenProkurent' + i + '" name="adresDoreczenProkurent' + i + '" required>';

                    // Rodzaj prokury
                      divProkurenta.innerHTML += '<br><label for="rodzajProkury' + i + '">Rodzaj prokury:</label>' +
                            '<div>' +
                            '<input type="checkbox" id="samoistna' + i + '" name="rodzajProkury' + i + '" value="samoistna">' +
                            '<label for="samoistna' + i + '">Samoistna</label>' +
                            '</div>' +
                            '<div>' +
                            '<input type="checkbox" id="lacznoscProkury' + i + '" name="rodzajProkury' + i + '" value="lacznosc">' +
                            '<label for="lacznoscProkury' + i + '">Łączna – proszę wskazać z kim/jaki jest oczekiwany sposób funkcjonowania prokury łącznej:</label>' +
                            '<input class="form-input-2 w-input" maxlength="256" type="text" id="lacznoscProkurySposob' + i + '" name="lacznoscProkurySposob' + i + '" placeholder="np. konieczność działania z drugim prokurentem albo członkiem zarządu: ">' +
                            '</div>';    

                    // Pole "Czy posiada PESEL?"
                    divProkurenta.innerHTML += '<br><label for="czyPosiadaPesel' + i + '">Czy posiada PESEL?</label>' +
                        '<select class="select-field w-select" id="czyPosiadaPesel' + i + '" name="czyPosiadaPesel' + i + '" onchange="togglePeselInput(' + i + ')">' +
                        '<option value="-">-</option>' +
                        '<option value="tak">Tak</option>' +
                        '<option value="nie">Nie</option>' +
                        '</select>';

                    divProkurenta.innerHTML += '<div id="daneCzlonka' + i + '"></div>';
                    daneProkurentowDiv.appendChild(divProkurenta);

                    // Obsługa zmiany odpowiedzi na pytanie o osobę prawną
                    document.getElementById('czyPosiadaPesel' + i).addEventListener('change', function () {
                        var czyPosiadaPesel = this.value;
                        var indexCzlonka = this.id.slice(-1);
                        var daneCzlonkaDiv = document.getElementById('daneCzlonka' + indexCzlonka);
                        daneCzlonkaDiv.innerHTML = ''; // Wyczyszczenie poprzednich pól

                        if (czyPosiadaPesel === 'tak') {
                            // Pole PESEL
                            daneCzlonkaDiv.innerHTML += '<br><label for="peselCzlonka' + indexCzlonka + '">PESEL:</label>' +
                                '<input class="form-input-2 w-input" maxlength="256" type="text" id="peselCzlonka' + indexCzlonka + '" name="peselCzlonka' + indexCzlonka + '" required>';
                        } else {
                            // Data ur.
                            daneCzlonkaDiv.innerHTML += '<br><label for="dataCzlonka' + indexCzlonka + '">Data urodzenia:</label>' +
                                '<input class="select-field w-select" type="date" id="dataCzlonka' + indexCzlonka + '" name="dataCzlonka' + indexCzlonka + '" required>';
                        }
                        
                        daneProkurentowDiv.appendChild(divProkurenta);
                    });
                }
            });
        }
    });
    document.getElementById('iloscWspolnikow').addEventListener('change', function () {
        var iloscWspolnikow = parseInt(this.value);
        var daneWspolnikowDiv = document.getElementById('daneWspolnikow');
        daneWspolnikowDiv.innerHTML = ''; // Wyczyszczenie poprzednich pól

        for (var i = 1; i <= iloscWspolnikow; i++) {
            var divWspolnika = document.createElement('div');

            // Tytuł wspólnika
            divWspolnika.innerHTML = '<br><strong>Wspólnik ' + i + '</strong>';

            // Pytanie o osobę fizyczna
            divWspolnika.innerHTML += '<br><label for="czyOsobaFizyczna' + i + '">Czy wspólnik jest osobą fizyczną?</label>' +
                '<select class="select-field w-select" id="czyOsobaFizyczna' + i + '" name="czyOsobaFizyczna' + i + '">' +
                '<option value="-">-</option>' +
                '<option value="tak">Tak</option>' +
                '<option value="nie">Nie</option>' +
                '</select>';

            // Dynamiczne generowanie pól w zależności od odpowiedzi na pytanie
            divWspolnika.innerHTML += '<div id="daneWspolnika' + i + '"></div>';

            daneWspolnikowDiv.appendChild(divWspolnika);

            // Obsługa zmiany odpowiedzi na pytanie o osobę prawną
            document.getElementById('czyOsobaFizyczna' + i).addEventListener('change', function () {
                var czyOsobaFizyczna = this.value;
                var indexWspolnika = this.id.slice(-1);
                var daneWspolnikaDiv = document.getElementById('daneWspolnika' + indexWspolnika);
                daneWspolnikaDiv.innerHTML = ''; // Wyczyszczenie poprzednich pól

                if (czyOsobaFizyczna === 'tak') {
                    // IMIE
                    daneWspolnikaDiv.innerHTML += '<br><label for="imieWspolnika' + indexWspolnika + '">Imię pierwsze:</label>' +
                        '<input class="form-input-2 w-input" maxlength="256" type="text" id="imieWspolnika' + indexWspolnika + '" name="imieWspolnika' + indexWspolnika + '" required>';
                    // drugie IMIE
                    daneWspolnikaDiv.innerHTML += '<br><label for="drugieimieWspolnika' + indexWspolnika + '">Imię drugie:</label>' +
                        '<input class="form-input-2 w-input" maxlength="256" type="text" id="drugieimieWspolnika' + indexWspolnika + '" name="drugieimieWspolnika' + indexWspolnika + '" required>';    
                    // NAZWISKO
                    daneWspolnikaDiv.innerHTML += '<br><label for="nazwiskoWspolnika' + indexWspolnika + '">Nazwisko:</label>' +
                        '<input class="form-input-2 w-input" maxlength="256" type="text" id="nazwiskoWspolnika' + indexWspolnika + '" name="nazwiskoWspolnika' + indexWspolnika + '" required">';
                    // ADRES        
                    daneWspolnikaDiv.innerHTML += '<br><label for="adresWspolnika' + indexWspolnika + '">Adres:</label>' +
                        '<input class="form-input-2 w-input" maxlength="256" type="text" id="adresWspolnika' + indexWspolnika + '" name="adresWspolnika' + indexWspolnika + '" required>';
                    // Adres do doręczeń
                    daneWspolnikaDiv.innerHTML += '<br><label for="adresDorWspolnika' + indexWspolnika + '">Adres do doręczeń:</label>' +
                        '<input class="form-input-2 w-input" maxlength="256" type="text" id="adresDorWspolnika' + indexWspolnika + '" name="adresDorWspolnika' + indexWspolnika + '" required>';
                    
                    // PESEL
                    daneWspolnikaDiv.innerHTML += '<br><label for="peselWspolnika' + indexWspolnika + '">PESEL:</label>' +
                        '<input class="form-input-2 w-input" maxlength="256" type="text" id="peselWspolnika' + indexWspolnika + '" name="peselWspolnika' + indexWspolnika + '" required">';
                    
                    //DATA ur
                    daneWspolnikaDiv.innerHTML += '<br><label for="dataUrodzeniaWspolnika' + indexWspolnika + '">Data urodzenia:</label>' +
                        '<input class="select-field w-select" type="date" id="dataUrodzeniaWspolnika' + indexWspolnika + '" name="dataUrodzeniaWspolnika' + indexWspolnika + '" required class="form-input 2">';
                    
                    // Liczba udziałow
                    daneWspolnikaDiv.innerHTML += '<br><label for="liczbaUdzialowWspolnika' + indexWspolnika + '">Liczba udziałów, jakie wspólnik ma posiadać w kapitale zakładowym zakładanej spółki:</label>' +
                        '<input class="form-input-2 w-input" maxlength="256" type="text" id="liczbaUdzialowWspolnika' + indexWspolnika + '" name="liczbaUdzialowWspolnika' + indexWspolnika + '" required>';
                    
                    // Rodzaj wkładu
                    daneWspolnikaDiv.innerHTML += '<br><label for="rodzajWniesionegoWkladu' + indexWspolnika + '">Rodzaj wkładu wnoszonego do zakładanej spółki:</label>' +
                        '<select class="select-field w-select" id="rodzajWniesionegoWkladu' + indexWspolnika + '" name="rodzajWniesionegoWkladu' + indexWspolnika + '">' +
                        '<option value="-">-</option>' +
                        '<option value="pieniężny">pieniężny</option>' +
                        '<option value="niepieniężny">niepieniężny</option>' +
                        '<option value="mieszany">mieszany (pieniężny i niepieniężny)</option>' +
                        '</select>';
                    
                    // wysokosc wkładu
                    daneWspolnikaDiv.innerHTML += '<br><label for="wysokoscWkladu' + indexWspolnika + '"><b>Wysokość wkładu</b> - w odniesieniu do wkładu pieniężnego albo <b>wartość wkładu</b> - w odniesieniu do wkładu niepieniężnego; w przypadku wkładu <b>mieszanego</b> należy zsumować wysokość i wartość poszczególnych wkładów: </label>' +
                        '<input class="form-input-2 w-input" maxlength="256" type="text" id="wysokoscWkladu' + indexWspolnika + '" name="wysokoscWkladu' + indexWspolnika + '" placeholder="wysokość lub wartość wkładu należy podawać w PLN" required>';
                    
                    // Opis wkladu
                    daneWspolnikaDiv.innerHTML += '<br><label for="opisWkladu' + indexWspolnika + '">W przypadku wkładu <b>niepieniężnego</b> proszę dokładnie opisać przedmiot tego wkładu: </label>' +
                        '<input class="form-input-2 w-input" maxlength="256" type="text" id="opisWkladu' + indexWspolnika + '" name="opisWkladu' + indexWspolnika + '" placeholder="np. samochód marki X, model X, VIN: X - o wartości (PLN) X">';                           
                //NIE jest os fizyczna
                } else {
                    // Firma 
                    daneWspolnikaDiv.innerHTML += '<br><label for="firmaWspolnika' + indexWspolnika + '">Firma (nazwa):</label>' +
                        '<input class="form-input-2 w-input" maxlength="256"  type="text" id="firmaWspolnika' + indexWspolnika + '" name="firmaWspolnika' + indexWspolnika + '" required>';
                    
                    //Siedziba 
                    daneWspolnikaDiv.innerHTML += '<br><label for="siedzibaWspolnika' + indexWspolnika + '">Siedziba (adres):</label>' +
                        '<input class="form-input-2 w-input" maxlength="256" type="text" id="siedzibaWspolnika' + indexWspolnika + '" name="siedzibaWspolnika' + indexWspolnika + '" required>';
                    
                    // nr KRS
                    daneWspolnikaDiv.innerHTML += '<br><label for="krsWspolnika' + indexWspolnika + '">nr KRS:</label>' +
                        '<input class="form-input-2 w-input" maxlength="256" type="text" id="krsWspolnika' + indexWspolnika + '" name="KRSWspolnika' + indexWspolnika + '" required">';
                    
                   // liczba udziałów
                    daneWspolnikaDiv.innerHTML += '<br><label for="liczbaUdzialowWspolnika' + indexWspolnika + '">Liczba udziałów, jakie wspólnik ma posiadać w kapitale zakładowym zakładanej spółki:</label>' +
                        '<input  class="form-input-2 w-input" maxlength="256"type="text" id="liczbaUdzialowWspolnika' + indexWspolnika + '" name="liczbaUdzialowWspolnika' + indexWspolnika + '" required">';
                    // Rodzaj wkładu
                    daneWspolnikaDiv.innerHTML += '<br><label for="rodzajWniesionegoWkladu' + indexWspolnika + '">Rodzaj wkładu wnoszonego do zakładanej spółki:</label>' +
                        '<select class="select-field w-select" id="rodzajWniesionegoWkladu' + indexWspolnika + '" name="rodzajWniesionegoWkladu' + indexWspolnika + '">' +
                        '<option value="-">-</option>' +
                        '<option value="pieniężny">pieniężny</option>' +
                        '<option value="niepieniężny">niepieniężny</option>' +
                        '<option value="mieszany">mieszany (pieniężny i niepieniężny)</option>' +
                        '</select>';
                    
                    // wysokosc wkładu
                    daneWspolnikaDiv.innerHTML += '<br><label for="wysokoscWkladu' + indexWspolnika + '"><b>Wysokość wkładu</b> – w odniesieniu do wkładu pieniężnego albo <b>wartość wkładu</b> – w odniesieniu do wkładu niepieniężnego; w przypadku wkładu <b>mieszanego</b> należy zsumować wysokość i wartość poszczególnych wkładów: </label>' +
                        '<input class="form-input-2 w-input" maxlength="256" type="text" id="wysokoscWkladu' + indexWspolnika + '" name="wysokoscWkladu' + indexWspolnika + '" placeholder="wysokość lub wartość wkładu należy podawać w PLN"required>';
                    
                    // Opis wkladu
                    daneWspolnikaDiv.innerHTML += '<br><label for="opisWkladu' + indexWspolnika + '">W przypadku wkładu <b>niepieniężnego</b> proszę dokładnie opisać przedmiot tego wkładu: </label>' +
                        '<input class="form-input-2 w-input" maxlength="256" type="text" id="opisWkladu' + indexWspolnika + '" name="opisWkladu' + indexWspolnika + '" placeholder="np. samochód marki X, model X, VIN: X - o wartości (PLN) X" >';
                    
                    //spospob reprezentacji
                    daneWspolnikaDiv.innerHTML += '<br><label for="sposobReprezentacji' + indexWspolnika + '">Sposób reprezentacji spółki - wspólnika:</label>' +
                        '<input class="form-input-2 w-input" maxlength="256" type="text" id="sposobReprezentacji' + indexWspolnika + '" name="sposobReprezentacji' + indexWspolnika + '" placeholder="np. zarząd w sp. z o.o., wspólnicy w sp. j.">';

                    // zasady reprezentacji zrobic
                    daneWspolnikaDiv.innerHTML += '<br><label for="ZasadyreprezentacjiSpolki' + indexWspolnika + '">Zasady reprezentacji spółki - wspólnika: </label>' +
                        '<select id="ZasadyreprezentacjiSpolki' + indexWspolnika + '" name="ZasadyreprezentacjiSpolki' + indexWspolnika + '">' +
                        '<option value="-">-</option>' +
                        '<option value="Indywidualna">indywidualna (każda osoba samodzielnie);</option>' +
                        '<option value="Inna">inna</option>' +
                        '</select>';
                        
                    // sposób reprezentacji spólki zrobic
                    daneWspolnikaDiv.innerHTML += '<br><label for="sposobReprezentacji' + indexWspolnika + '">W przypadku poprzedniego wyboru <b>"inna"</b> proszę wskazać zasady reprezentacji: </label>' +
                        '<input type="text" id="sposobReprezentacji' + indexWspolnika + '" name="sposobReprezentacji' + indexWspolnika + '">'; 
                    // Pytanie o ilość osób uprawnionych do reprezentacji
                  daneWspolnikaDiv.innerHTML += '<br><label for="iloscUprawnionych' + indexWspolnika + '">Ile osób uprawnionych jest do reprezentacji?</label>' +
                      '<select id="iloscUprawnionych' + indexWspolnika + '" name="iloscUprawnionych' + indexWspolnika + '">' +
                      '<option value="-">-</option>' +
                      '<option value="1">1</option>' +
                      '<option value="2">2</option>' +
                      '<option value="3">3</option>' +
                      '<option value="4">4</option>' +
                      '<option value="5">5</option>' +
                      '<option value="6">6</option>' +
                      '<option value="7">7</option>' +
                      '</select>' +
                      '<div id="reprezentanci' + indexWspolnika + '"/>'
                      ;

                  // Dynamiczne generowanie pól dla każdej osoby uprawnionej do reprezentacji
                  var iloscUprawnionychSelect = document.getElementById('iloscUprawnionych' + indexWspolnika);
                  iloscUprawnionychSelect.addEventListener('change', function () {
                      var iloscUprawnionych = parseInt(this.value);
                      var reprezentaciDiv=document.getElementById('reprezentanci' + indexWspolnika);
                      reprezentaciDiv.innerHTML='';
                      for (var j = 1; j <= iloscUprawnionych; j++) {
                          var osobaDiv = document.createElement('div');
                          osobaDiv.innerHTML += '<br><strong>Osoba ' + j + ' uprawniona do reprezentacji:</strong>';
                          osobaDiv.innerHTML += '<br><label for="imieOsobaUprawniona' + indexWspolnika + '_' + j + '">1. Imię pierwsze:</label>' +
                              '<input class="form-input-2 w-input" maxlength="256" type="text" id="imieOsobaUprawniona' + indexWspolnika + '' + j + '" name="imieOsobaUprawniona' + indexWspolnika + '' + j + '" required';
                          osobaDiv.innerHTML += '<br><label for="imieDrugieOsobaUprawniona' + indexWspolnika + '_' + j + '">2. Imię drugie:</label>' +
                              '<input  class="form-input-2 w-input" maxlength="256" type="text" id="imieDrugieOsobaUprawniona' + indexWspolnika + '' + j + '" name="imieDrugieOsobaUprawniona' + indexWspolnika + '' + j + '">';
                          osobaDiv.innerHTML += '<br><label for="nazwiskoOsobaUprawniona' + indexWspolnika + '_' + j + '">3. Nazwisko:</label>' +
                              '<input  class="form-input-2 w-input" maxlength="256" type="text" id="nazwiskoOsobaUprawniona' + indexWspolnika + '' + j + '" name="nazwiskoOsobaUprawniona' + indexWspolnika + '' + j + '" required';
                          osobaDiv.innerHTML += '<br><label for="adresOsobaUprawniona' + indexWspolnika + '_' + j + '">4. Adres:</label>' +
                              '<input class="form-input-2 w-input" maxlength="256" type="text" id="adresOsobaUprawniona' + indexWspolnika + '' + j + '" name="adresOsobaUprawniona' + indexWspolnika + '' + j + '" required>';
                          osobaDiv.innerHTML += '<br><label for="adresDoręczeniaOsobaUprawniona' + indexWspolnika + '_' + j + '">5. Adres do doręczeń:</label>' +
                              '<input class="form-input-2 w-input" maxlength="256" type="text" id="adresDoręczeniaOsobaUprawniona' + indexWspolnika + '' + j + '" name="adresDoręczeniaOsobaUprawniona' + indexWspolnika + '' + j + '" required>';
                          osobaDiv.innerHTML += '<br><label for="peselOsobaUprawniona' + indexWspolnika + '_' + j + '">6. PESEL:</label>' +
                              '<input class="form-input-2 w-input" maxlength="256" type="text" id="peselOsobaUprawniona' + indexWspolnika + '' + j + '" name="peselOsobaUprawniona' + indexWspolnika + '' + j + '" required>';
                          

                          reprezentaciDiv.appendChild(osobaDiv);
                       }
                  });}

            });
        }
    });
    }
