// ==UserScript==
// @name         DestinyEleven Save Editor
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Edit destinyEleven save state
// @author       Neirda
// @match        https://destinyeleven.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=destinyeleven.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function getCryptedTable() {
        const _0x2d2956 = ['8j+LHYbdAgfTCgLVBIbKzsa', 'zgvYyNLxAw5Z', 'pc9ZCgfUpGOGicaGicaGidXKAxyGy2XHC3m9iMHJlwn0ysi+uMv2AxzYzsbSysbSW6LNzw5KztWVzgL2pGOGicaGica8l2rPDJ4', 'pc9ZCgfUpIbQzxrVBG', 'zMLUywWTBgvNzw5Klw5VDgu', 'rw4Gy29TBwvUy2vYihvUzsbUB3v2zwXSzsbLzMzHy2vYysbKW6LMAw5PDgL2zw1LBNqGDM90CMuGy2fYCMNdQhjLigfJDhvLBgXLlIbwB3vZihbVDxzLEIbSysbYzxbYzw5KCMuGzgvWDwLZigWNywnJDwvPBc4', 'odaWidiWChGGug9WCgLUCYWGj1nLz29LifvjjYWGC2fUCY1ZzxjPzG', 'tgvZigDYyw5KCYbHzgLLDxGGC2uGChldQxbHCMvUDc4GvgvUDgvYihvUzsbZywLZB24GzguGCgX1CYWGB3uGCgfYDgLYigXHihtdQNrLigHHDxrLid8', 'idXZCgfUignSyxnZpsjSB2fUlxrHzYi+uMv0B3vYigrLihbYW6P0pc9ZCgfUpG', 'C2HVCc1IywXHBMnL', 'y2fWCW', 'Bf9KEw5HC3rPzq', 'zMLUywXqzw5KAw5N', 'D2vLA2X5', 'z2fTzs1JyxjK', 'q2HHCxvLihnHAxnVBIbKzsbWBhvZigvZDcb1BIbLEhbSB2L0igvUihnVAs4Gq29TyMLLBIbKzsb0zw1WCYbSzsbJB3jWCYbZDwL2CMeTDc1PBcbLBMnVCMuGpW', 'z29SzgvUqM9VDa', 'CM91BMq', 'pc9KAxy+', 'cIaGicaGicaGphaGy2XHC3m9iNbHBNrOzw9Ulw5HBwuIpG', 'idXZCgfUignSyxnZpsjZzwfZB24Tzg93BIi+4QYhpc9ZCgfUpG', 'yNrUlwjHzgDLCW', 'Dg9vChbLCKnHC2u', 'nxbiCxDNyG', 'phaGy2XHC3m9iNjLy2fWlw1Py3jViJ7WN5kSia', 'cIaGicaGidXKAxyGy2XHC3m9iMnHCMqTDgfNiJ48C3bHBIbJBgfZCZ0Iy2fYzc1Py29UiJ7WN5k8pc9ZCgfUpIbnzxjJyxrVimk3ia', 'phnWyw4Gy2XHC3m9iM9WDc1OAw50iJ7WN5kWiev4B3rPCxvLpc9ZCgfUpG', 'DhjHBNnMzxjxAw5KB3C', 'C2nYzwvUlw5HDgLVBMfSAxr5', 'pc9ZCgfUpJWVzgL2pG', 'Bg9HBLjLDhvYBG', 'zwfYBhLFy2fW', 'ugfZC2vZigtdQwnPC2L2zxm', 'zMLUywWTDgL0Bgu', 'pc9WpGOGicaGicaGidXWignSyxnZpsjYAxzHBc1JB2WTDgLLCIi+', 'pc9WpGOGicaGicaGicaGica8CcbJBgfZCZ0ICMvZDwX0lxrLEhqIpG', 'zgLZCgXHEq', 'igfUCYdcTYa', 'Cg9ZAxrPB25jy29U', 'B3bLBL9XDwvZDhm', 'BgfIzwW', 'z2v0rgf0zq', 'y2XHC3noyw1L', 'zgfPBhLeyxrL', 'AgLKzgvU', 'DhjHAMvJDg9YEq', 'pc9ZCgfUpG', 'igO8l3nWyw4+', 'lZiP', '4PA277IpifjLChjLBMrYzsa', 'y2vUDhvYAw9U', 'y291BNrYEu5HBwu', 'y2X1yKXLDMvSCW', 'CxvLCNLtzwXLy3rVCKfSBa', 'ignHCNjPW6HYzq', 'C2nYzwvUlw9YAwDPBG', 'A2v5zg93BG', 'C2nYzwvUlxn0B3j5', 'lNnLDhvWlwjHy2S', 'yxvJDw4', 'BMv3q2fYzwvY', 'y29TCgfYzvzLCMrPy3q', 'y3vW', 'otG5oteWouvlAffbEG', 'phaGy2XHC3m9iNjLy2fWlw5LD3mIpG', 'AgLZDg9YEq', 'y2HVAwnLtg9N', 'pc9WpGOGicaGicaGicaGphaGy2XHC3m9iNbLCMSTzgvZyYi+', 'cIaGicaGidXKAxyGy2XHC3m9iMHJlwHLywqIpKr1zwWGzw50CMuGyw1PCZWVzgL2pGOGicaGica8zgL2ignSyxnZpsjOyY1IB2r5iJ4kicaGicaGica8CcbJBgfZCZ0IAgmTDgv4Dci+rmoPzMLLihvUigfTAsa6ig3dQM1LihbHCMnVDxjZlcbSzsbTzwLSBgv1CIbNywDUzs48l3a+cIaGicaGicaGpgrPDIbJBgfZCZ0IAgmTy3rHiJ5myw5JzxiGDw4GzhvLBdWVzgL2pGOGicaGica8l2rPDJ4', 'CMfUAW', 'C29YDa', 'CMv2zwfS', 'ie9IAMvJDgLMigr1ignSDwiGoIa', 'phnWyw4Gy2XHC3m9iMXLDMvSlxrHzYbSzxzLBc0', 'pc9WpGOGicaGica8yNv0Dg9UignSyxnZpsjIDg4GyNrUlxbYAw1HCNKIigLKpsjIDg4TzhvLBc1OB21LiJ5szxrVDxiGW6aGBcDHy2n1zwLSpc9IDxr0B24+', 'ChjVyMuUCg5N', 'uefmtufsW4Ht', 'Cv9UB19LBgL0zq', 'C3rVCNLFy29TCgXLDgvK', 'CMvZB2X2zvnLyxnVBK1VBwvUDa', 'qw5VBNLTzq', 'C3rHCNrzzwfY', 'CMvZDg9Yzq', 'zMLUywWTyMfKz2uTBM90zq', 'CgfKu3rHCNq', 'Cv9SB3DFDgL0Bgu', 'lZiGzw4GCSoPC2vYDMuP', 'C3vYChjPC2u', 'pc9KAxy+cIaGicaGidXWignSyxnZpsjYAxzHBc12zxjKAwn0iJ4', '8j+rNYa', 'pc9WpGOGicaGicaGidXWignSyxnZpsjYzxn1BhqTDgv4Dci+', 'pc9ZDhjVBMC+iokaLca', 'pgLTzYbJBgfZCZ0IBMf0lwzSywCTAw1NiIbZCMm9iG', 'ChjVzMLSzs1Wyw5LBa', 'Cg90', 'cIaGicaGicaGica', 'iIbVBMvYCM9Ypsj0AgLZlM91DgvYsfrntd0NphnWyw4Gy2XHC3m9BMf0lwzSywC+', 'C3bSAxq', 'pc9WpGOGicaGicaGidXWignSyxnZpsjZDg9YEs1NB2fSiJ7WN46VieXHigZdQwDLBMrLigeGDgvYBwLUW6KGC2eGy2fYCMNdQhjLimoGidXZDhjVBMC+', 'ihf1zxn0lwnHCMqTzg9Uzq', 'CxvLC3ruB3rHBa', 'ipcFQPKGiq', 'yNrUlxnOB3a', 'zgvZDgLUEuvSzxzLBL9JDxjYzw50', 'pc9ZCgfUpGOGicaGicaGicaGphnWyw4Gy2XHC3m9iNnLyxnVBI1JBhvIiJ4', 'pc9ZDhjVBMC+ihrLigtdQwzPzsaHpc9WpGOGicaGica8CcbJBgfZCZ0IzhvLBc1PBNrYBY1ZDwiIpLbYB2zPBcbPBxbVC8oPidOG', 'zMLUywWTy2fYza', 'zMLUywWTCxvLC3qTBM90zq', 'i2uYzwfMnq', 'uM9J', 'C3bHBG', 'igPVDxjZ', 'zMXHz3m', 'D29YBgrdDxa', 'C3rHDhm', 'DhjHBNnMzxi', 'tM91DMvHDsbIywrNzsbKW6LIBg9XDCoPidOG', 'rmoPyMXVCxxdQsbHDMvJia', 'igPVDCoPzq', 'phnWyw4Gy2XHC3m9iNbLCMSTy29ZDci+8j+QMsa', 'pc9ZDhjVBMC+', 'zMLSBa', 'mZzVuvfNrfy', 'yMvZDfnJB3jL', 'AgvHza', 'C3rYzwfR', 'C2f2zq', 'zgfUz2vY', 'ntu1ndq3tKDcrwL1', 'CM90yxrLka', 'C3jJ', 'C3vJy2vZCW', 'y3vYCMvUDfrHCMDLDa', '4BwjiokaLcdWN5Qaig1VBNtdQwuGyxjYywnOW6LLigvUigjHCNjHz2uGiq', 'C2nVCMu', 'pgj1DhrVBIbJBgfZCZ0IB3b0lwj0BIiGzgf0ys1ZDgf5psiXiJ5gyxv0zsbKj29MzNjLignVBMnYW6H0zsWGCMvZDgvYimoGia', 'pgj1DhrVBIbJBgfZCZ0IB3b0lwj0BIiGzgf0ys1VChq9iG', 'zg93BMXVywrFy2fYza', 'cIaGicaGidXKAxyGy2XHC3m9iMnHCMqTDgfNiJ48C3bHBIbJBgfZCZ0Iy2fYzc1Py29UiJ7WN5sepc9ZCgfUpIbqCSoQDcdcTYa', 'pgrPDIbJBgfZCZ0ICML2ywWTy29SiJ4kicaGicaGica8CcbJBgfZCZ0ICML2ywWTy29Slw5HBwuIpG', 'C3rVCNKTCgfUzwW', 'igfU', 'B2jQzwn0', 'Bf9NCMfUzf9JAgvSzw0', 'idXZCgfUignSyxnZpsjWyxrOlwnVDw50CNKIpIG', 'yNrUlxf1zxn0CY1IywnR', 'Bg9HBK9MzMvYC0zVCG', 'DgLLCG', 'vg9Uig1LAwXSzxvYigf1AM91CMqNAhvPidOG', 'pgrPDIbJBgfZCZ0IzNGTy2HPChmIpG', 'yNvPBgrvBNrHA2vUugf0Aa', 'pc9ZCgfUpGOGicaGicaGidWVzgL2pG', 'phaGy2XHC3m9iNjLy2fWlxDHCM4IpVcFQBKG', 'pc9WpJXWignSyxnZpsjVCMLNAw4TzgvZyYi+', 'zMvL', 'yMfKz2uTAxrLBsbSB2nRzwq', 'i2r1zwW9', 'phaGy2XHC3m9iNn0CMvHAY1UzxH0iJ7WN5grifrVDxmGBgvZihbHBgLLCNmGC29UDcbJB25XDwLZlIbtW6LYAwuGBxL0AgLXDwuUpc9WpG', 'phaGy2XHC3m9iNn0CMvHAY1UzxH0iJ5qCM9JAgfPBIbWywXPzxiGoIa8C3rYB25NpG', 'AgfZvhjHAxq', 'zwzMzwn0', 'Bw92zvrV', 'C3rHCNrtDgf0CW', 'odaWidi0ChGGug9WCgLUCYWGj1nLz29LifvjjYWGC2fUCY1ZzxjPzG', 'zhvLBezYB21mywjLBa', 'y29UDhjHy3q', 'y2fYzwvYrw5KuMvHC29U', 'Cv9KB3vIBgu', 'B3jPz2LU', 'BgvHz3vL', 'ndaWide4ChGGug9WCgLUCYWGj1nLz29LifvjjYWGC2fUCY1ZzxjPzG', 'cIaGicaGidXKAxyGy2XHC3m9iMHJlwHLywqIpK1VzguGsgLZDg9PCMu8l2rPDJ4kicaGicaGpgrPDIbJBgfZCZ0IAgmTyM9KEsi+cIaGicaGicaGphaGy2XHC3m9iMHJlxrLEhqIpG', 'B3bLBG', 'Cg9Z', 'C3rYzwfRx21PBgvZDg9Uzq', 'pc9ZCgfUpGOGicaGicaGidXZCgfUignSyxnZpsjZzI11BML0iJ5QB3vY', 'ChjVzMLSzq', 'Bw9UzxK', 'yMfKz2uTAxrLBsb1BMXVy2TLza', '8j+sScbgB3j0Dw5L', 'qKfmqu5drv9sruy', 'ywnHzgvTEs1ZDwi', 'yMfKz2vFDw5SB2nRzwq', '4PYfieXPzw4Gy29WACoPice', 'W5CGq291CguGzgvZienOyw1WAw9UCW', 'imk3igrLC2LNBIa', 'yxjJAgv0ExbL', 'nJKZmZG4A0DhwgXr', 'zgfPBhKTCMvTAw5Kzxi', 'Dgv4Da', 'y29UDgLUzw50', 'ihb0CYdIGjqGDM91CYbHDMv6igzHAxqGtuLfvvGGCxvLigXHigZdQwDLBMrLicG', 'igPVDxjZidOGkW', 'phnWyw4Gy2XHC3m9iNn0B3j5lwnVC3qIpVcFQPKG', 'jNf1B3q7', 'pgj1DhrVBIbJBgfZCZ0IB3b0lwj0BIiGzgf0ys1RBt0I', 'yMfKz2uTz3jPza', 'yNrUlxnOyxjL', 'BMv3uML2ywW', 'phaGy2XHC3m9iNbHBNrOzw9UlwvTChr5iJ5wB3rYzsbSW6LNzw5KzsbLC3qGzw5JB3jLimoGimoPy3jPCMuUpc9WpG', 'y29Hy2HszwW', 'B2jQzwn0AxzLtgfIzwW', 'y2fYzwvYC1bSyxLLza', 'CgXHDgLUzq', 'l2fUimk3igLUzgvTBML0W6KG', 'q29UzMLYBwvY', 'BgfZDff1zxn0rgf0zq', 'zNjVBq', 'yNrUlxDJ', 'zMLUywWTDhjHAxrZ', 'y29UC2vUDc1Yzwz1C2u', 'D19Syxn0x2nVBNrYywn0', 'cIaGicaGidXKAxyGy2XHC3m9iNn0CMvHAY1MBgfTzsa', 'y2HHBxbPB24', 'yMfKz2uTBwv0yq', 'z2fjza', 'i2i5yZjLma', 'C2nOzwr1BgvK', '8j+oRYa', 'zMLUywWTyxDHCMrZlwXHyMvS', 'pc9ZCgfUpJWVzgL2pGOGicaGicaGidXKAxyGy2XHC3m9iNjLy2fWlwnLBgWIpJXZCgfUignSyxnZpsjYzwnHCc1UDw0IpG', 'igrLihpdQxjPztWVC3bHBJ4kicaGicaGpc9KAxy+cIaGicaGidXKAxyGy2XHC3m9iNn0CMvHAY1KB3rZiJ4', 'vu5fieLdW5rorq', 'zg9Uzq', 'zw50B3vYywDL', 'cIaGicaGidXWignSyxnZpsjYzwnHCc1TB25LEsi+8j+sScaR', 'cGOGicaGica8CcbJBgfZCZ0ICxvLC3qTC2vJDgLVBI1SywjLBci+8j+rKsbeW6LMAsbSW6LNzw5KywLYztWVCd4kicaGicaGpgrPDIbJBgfZCZ0IBgvNzw5KlxDYyxaIpG', 'uMvSzxzLCIbJzsbKW6LMAsbLzMzHy2vYysbKW6LMAw5PDgL2zw1LBNqGDM90CMuGy2fYCMNdQhjLigfJDhvLBgXLlG', 'C3rVCNLFDw5SB2nRzwq', 'nZaWideZChGGug9WCgLUCYWGj1nLz29LifvjjYWGC2fUCY1ZzxjPzG', 'zgvNkq', 'ihb0CYKUifldQCoPy3jPDMv6igWNAgLZDg9PCMuU', 'C29Tzq', 'zM9JDxm', 'y29TCgXLDgu', 'CgXHEwvYlwnHCMqGDgLLCI0', 'phnWyw4Gy2XHC3m9iNrYywL0lwnOAxaIihrPDgXLpsi', 'pc9ZCgfUpGOGicaGicaGidXKAxyGy2XHC3m9iMHJlwn0ysi+', 'lM9WDc1IDg4', 'CxvLC3qTCgfUzwW', 'ywDLtwf4', 'zgfPBhLeB25L', 'C2vHC29UCW', 'DgHYzwvFy291BNrYAwvZ', 'zMLSDgvY', 'Dg90ywXbD2fYzhm', 'qw5UDwXLCG', 'BhzSt2y', 'ChrZ', 'idXZCgfUignSyxnZpsjYzwnHCc1IB251CYi+khbYAw1LicS', 'y29UzMv0DgKTBgf5zxi', 'y2f0', 'zgvZDgLUrgvdAgfTCgLVBL9WCM9NCMvZCW', 'iJ4kicaGicaGica8C3bHBIbJBgfZCZ0IC2yTzw1VAMKIpG', 'AgGTB3zY', 'CgLJA0v2zw50', 'B3zY', 'y3jLyxrLuMfKAwfSr3jHzgLLBNq', 'mtC2ndG3mhPuzMXytq', 'ChjVzMLSzs1IyxjZ', '8j+NIIa3igPVDxjZigrLihbSDxmGoIaRmsbQB2TLCIbKzsbZW6LYAwuGka', 'Bw9KywWTAwnVBG', 'igPLDg9UCYK', 'zgvZDgLUrgvdAgfTCgLVBL9Wyw50AgvVBG', 'pc9WpGOGicaGicaGidXWignSyxnZpsjVCMLNAw4TzgvZyYi+', 'AM9PBG', 'imk3ipcFKzeGBmoPz2vUzguGyMf0DhvL', 'ihbLCMSTzxf1AxbWzwqTy2fYza', 'CxvLC3rFmJa', 'Cv9NB2XKzw5FC2HVzq', 'pc9KAxy+cIaGicaGidXWignSyxnZpsjKDwvSlwLUDhjVlwHPBNqIpK3dQM1LCYddQxbYzxv2zxmGCxvLihrVBIbHzhzLCNnHAxjLlIddGcb0B2KGzguGzMfPCMuGBwLLDxGUpc9WpGOGicaGica8yNv0Dg9UignSyxnZpsjIDg4GyNrUlxbYAw1HCNKIigLKpsjIDg4TzhvLBc1Hy2nLChqIpLjLBgv2zxiGBguGzmoPzMK8l2j1DhrVBJ4kicaGicaGpgj1DhrVBIbJBgfZCZ0IyNrUigj0BI1ZzwnVBMrHCNKIigLKpsjIDg4TzhvLBc1SyxrLCIi+ugX1CYb0yxjKpc9IDxr0B24+', 'yMvZDejHBgXVBLjHBMS', 'zMLUywWTB3zY', 'zxf1AxbWzwrqzxjRCW', '8j+mJsbnzwLSBgv1CMuGy2fYCMNdQhjLihf1zsa', 'nZaWidqWChGGug9WCgLUCYWGj1nLz29LifvjjYWGC2fUCY1ZzxjPzG', 'Ag9Tzq', 'ywnHzgvTEs1SAxn0', '8j+uPsbqywXPzxiGzguGC8oPCMLLia', 'Aw1Hz2uVCg5N', 'zxf1Axa', 'pc9WpGOGicaGicaGidXWignSyxnZpsjXyY1KzxnJiJ4', 'zgfPBhKTCgfUzwW', 'CM90yxrL', 'BgvUz3rO', 'y29VA2LLlxnLDhrPBMDZ', 'y2fYzwvYx3n0yxj0', 'idXZCgfUignSyxnZpsDSB2fUlxrHzYC+uhldQNq8l3nWyw4+', 'pc9KAxy+cIaGica', 'CML2ywXtzwfZB24', 'jsi+pc9KAxy+pc9KAxy+cIaGicaGidXZCgfUignSyxnZpsjYzxrLBNrPB24TDMfSiJ4', 'ihpdQwXLy3rPB25Z', 'yxDHCMrZ', 'C2LU', 'zgvZAwDUzxi', '8j+vR++4JW', 'yMDuB3a', 'pc9ZCgfUpJXZCgfUignSyxnZpsjYzwnHCc1SyMWIpG', 'cIaGicaGidXKAxyGy2XHC3m9iNjLy2fWlwDYAwqIpGOGicaGicaGidXKAxyGy2XHC3m9iNjLy2fWlwnLBgWIpJXZCgfUignSyxnZpsjYzwnHCc1UDw0IpG', 'ywXSvgLTzujLC3q', 'pc9WpGOGicaGica8zgL2ignSyxnZpsjLDMvUDc1VChrPB25ZiJ4', 'i2q5yJq1yW', 'ietdQwzPigrLigXHihnLBwfPBMuGoIa', 'Dg9gAxHLza', 'cIaGicaGidXWignSyxnZpsjKDwvSlwLUDhjVlwXPBMuIpJXZDhjVBMC+', 'Bw9KywWTB3zLCMXHEq', 'zgfPBhK', 'qxvJDw4GDhjVCgJdQwuGBwfQzxvY', 'zMLUywWTywDL', 'ChjVDg9JB2W', 'zwXSAxbZzq', 'phnWyw4Gy2XHC3m9iM9WDc1OAw50iJ4', 'rmoPyMXVCxxdQwu', 'pgj1DhrVBIbJBgfZCZ0IB3b0lwj0BIiGzgf0ys1VzMzLCJ0I', 'pc9ZCgfUpGOGicaGicaGicaGphnWyw4Gy2XHC3m9iMrHAwX5lwnOAxaIpG', 'C2nYzwvUlxbHBNrOzw9U', 'y2fYzwvYuMf0Aw5N', 'Bf9MCM9Tx2r1C3q', 'ifpdQwXLy3rPB25Z', 'igjHzgDLlxbSyxrPBMu', 'BgvHzgvY', 'C3r5Bgu', 'BgvNzw5Kzq', 'pc9ZCgfUpGOGicaGicaGidWVzgL2pGOGicaGicaGidXZCgfUignSyxnZpsjKywLSEs1Izxn0', 'i2m5oge0yG', 'Bw9YywW', '8j+NIIbkB2TLCIbJB25ZB21TW6KGoIb1BIbQB3vYig1HBNf1W6KSihpdQxjPzsbZyxv2W6LLicG', 'y29ZDa', 'ywXSvgLTzujLC3reyxrL', 'C3vYDML2B3i', 'cIaGicaGidXKAxyGy2XHC3m9iMnHCMqTDgfNiJ48C3bHBIbJBgfZCZ0Iy2fYzc1Py29UiJ7WN4+gpc9ZCgfUpIbdB3vWzsbKDsbnB25Kzsa', 'y29UC2vJDxrPDMvsAxzHBfDPBNm', 'phaGy2XHC3m9iNjLy2fWlxrYB3bOAwvZiJ7IRzaGq2XHC3nLBwvUDcbcywXSB24GzcDpCIa6idXZDhjVBMC+', 'pc9ZCgfUpGOGicaGicaGicaGphnWyw4Gy2XHC3m9iNnLyxnVBI1ZDgf0CYi+', 'ipcFQPK8l3n0CM9UzZ4GkgvUy29Yzsa', 'Dg9Uzs0', 'zgf5CW', 'Aw5Uzxjive1m', 'z3rHzW', 'cIaGicaGicaGicaGidXWignSyxnZpsj3yY1ZDgf0CYi+', 'CxvLC3qTAgvYBW', '8j+LHYbdB250Aw4U', '8j+oLU+4J8ox', 'ihb0CW', 'igfUCZWVC3bHBJ48C3bHBIbJBgfZCZ0ICgf0Ac1JBhvIiJ4', 'zw50CMLLCW', 'CML2ywWTy29TCgfYzq', 'yMfKz2vdB250zxH0CW', 'Bwf0y2HLCW', 'iIbKyxrHlwvXDwLWpsi', 'tw95zw4', 'yNrUlwr1zwWTywnJzxb0', 'CgvUzgLUz01VBwvUDhm', 'Cv9HD2fYzhm1', 'Bg9HBG', 'CMvUzxDtywXHCNK', 'yxr0zw1WDhm', 'igfUCW', 'pc9ZCgfUpJXKAxyGy2XHC3m9iNbIyxiIpJXKAxyGy2XHC3m9iNbIyxiTzMLSBciGC3r5Bgu9iNDPzhrOoG', 'idXZCgfUignSyxnZpsDVDNiTzg93BIC+4PA8pc9ZCgfUpG', 'w2rHDgeTyNv5xq', 'Ahr0Chm6lY90D2L0DgvYlMnVBs9PBNrLBNqVDhDLzxq/Dgv4Dd0', 'qwjVCNrfCNjVCG', 'Cv9JBa', 'l2fUpc9IDxr0B24+', 'pc9KAxy+cIaGicaGia', 'Cv9KzwzLBNnPDMu', 'Dg9Uzs10zxjYAwjSzq', 'AMv0B25Zu3bLBNq', 'zxHVDgLJ', '8j+pHIbdre0', 'odaWidCWChGGr2vVCMDPysWGj1rPBwvZie5LDYbsB21HBICSihnLCMLM', 'igrHBNmGBguGDg91CM5VAtWVCd4kicaGicaGica8yNv0Dg9UignSyxnZpsjIDg4GyNrUlxnLy29UzgfYEsiGAwq9iMj0BI1UzxH0iJ5dB250Aw51zxi8l2j1DhrVBJ4kicaGicaG', 'uxxdQNrLigfJy29TCgXPzq', 'zxHVDgLJx2XHDgu', 'Cv9SzwfKzxi', 'CgfUDgHLB24Ty2fYza', 'C2nYzwvUlwHVBwu', 'B2zMzxjZrM9Y', 'pc9KAxy+cIaGicaGicaGphaGy2XHC3m9iNjLC3vSDc10zxH0iJ4', 'y2XLyw5tAgvLDhm', 'odaWidi1ChGGug9WCgLUCYWGj1nLz29LifvjjYWGC2fUCY1ZzxjPzG', 'iokaLca', 'C3rYB2TLu3r5Bgu', 'pc9KAxy+cIaGicaGicaGphaGy2XHC3m9iNDJlxn0ywDLia', 'zMLUywWTDhjHAMvJDg9YEq', 'D2vLA2X5rg9Uzq', 'pc9WpGOGicaGica8CcbJBgfZCZ0ICML2ywWTy29SlxrPzxiIpG', 'tgvZigPHBwjLCYbWW6HZzw50lcbSysbYW6LJDxddQxjHDgLVBIb0CMhdRM5LidOGDM9Zihn0yxrPC3rPCxvLCYbKW6LJBgLUzw50igtdQxnVCM1HAxmGy2HHCxvLihnHAxnVBI4GuMvTCgLSzxiSig91ihjHy2nYB2nOzxiGzw4GCgXLAw5LigDSB2LYzsa/', 'CMvTB3zL', 'igOPpc9WpG', 'CMvWzwf0', 'yMDcB3r0B20', 'pc9KAxy+cGOGicaGica8CcbJBgfZCZ0ICxvLC3qTAgLUDc1UB3rLiJ5uzxjTAw5LEIb1BMuGy2fYCMNdQhjLihbVDxiGDMfSAwrLCIb2B3mGCxxdQNrLCY4GrwXSzxmGC2uGCMvUB3v2zwXSzw50ignOyxf1zsbQB3vYiokaLcbYzxzLBMv6ihbVDxiGzw50CMv0zw5PCIb2B3rYzsbZW6LYAwuG8j+uPtWVCd4kcIaGicaGidXWignSyxnZpsjXDwvZDc1Zzwn0Aw9UlwXHyMvSiJ7WN6ETie9IAMvJDgLMCYbKzsbYW6L0zw50Aw9Upc9WpGOGicaGica', 'D2LKDgG', 'zMLUywW', 'vu5fieZdIuDftKrf', 'zNvUy3rPB24', 'BgLMzxn0EwXL', 'zgfPBhLFy29TCgXLDgvK', 'ywn0AxzL', 'Dgv4DenVBNrLBNq', 'cIaGicaGicaG', 'C2HVCc1SAxn0', 'pc9WpGOGicaGica8zgL2ignSyxnZpsjYAxzHBc1JB21WyxjLiJ4', 'Cv9IywXSB25FDg9WmZa', 'AhjLzG', 'z2v0u2vLzfn0yxrL', 'ihjLDgvUDgLVBI1KB25L', 'phnWyw4Gy2XHC3m9iNrYywL0lw5VBMuIpKf1y3vUihrYywL0igtdQwjSB3f1W6KGCg91CIbSj2LUC3rHBNq8l3nWyw4+', 'yNrUlwjHzgDLCY1IywnR', 'Cv9Zyw1Iyq', 'y29TChv0zunHCMvLCLnJB3jL', 'igvUDhjLigrHBNmGBgeGy29TCmoPDgL0Aw9UlcbLDcb2B3vZimoQDgvZigr1ihzVEwfNzs48l3a+cIaGicaGidXIDxr0B24Gy2XHC3m9iMj0BIbIDg4TC2vJB25Kyxj5iIbPzd0IyNrUlxDJiJ5wAxzYzsbSzsb0B3vYBM9Ppc9IDxr0B24+cIaGica', 'B2zMzxjZ', 'pc9KAxy+cIaGicaGicaGphaGy2XHC3m9iNDJlxn0ywDLiJ4', 'ywnHzgvTEu9MzMvYCW', 'yMfKz2uTy2f0lwDYAwq', 'BgvNzw5Kr3vLC3rvC2vK', 'EwvHCG', 'C3vWCg9YDc1MAw5HBa', 'yxjNzw50', 'igPVDxi', 'ChjVBgLMAwnFC2nVCMvY', 'y291BNrYEuLK', 'z3jHBNrLza', '4Bwjpc9ZDhjVBMC+pc9WpG', 'pc9IDxr0B24+', 'igjHzgDLCYdcTYa', 'ihnLBwfPBMvZigqNAw5MAxjTzxjPzsbJzxr0zsbZywLZB24Upc9WpG', 'yxbWBhLuCMfUC2zLCG', 'y2X1yKLK', 'B3b0Aw9UCW', 'w2rHDgeTzxf1AxbD', 'yMvZDfn0CMvHAW', 'imk3ia', 'yMvNAw5qyxrO', 'Dg9Uzs1NCMvHDa', 'yNrUlxbHBNrOzw9UlwjHy2S', 'B3bLBL9Wyw50AgvVBG', 'y2XLyxjtzwvK', 'y2XHC3nmAxn0', 'B3bLBL9IywrNzxm', '8j+oLU+4JYbuAxrYzxm', 'Bf9RywLZzxi', 'pKtdQwjSB3f1zxi8l2j1DhrVBJ4', 'qMfSyxLLDxi', 'C3rHz2u', 'y3jLyxrLrwXLBwvUDa', 'Cv9MCL9JyxjLzxi', 'pc9KAxy+cIaGicaGidXWignSyxnZpsjLDMvUDc10zxH0iJ4', 'C3rYzwfRtwLSzxn0B25L', 'qYDfu1qGuvvjid8', 'zhvLBf9VCgvUzwq', 'C2HPzNq', 'AxnuB2rHEujLC3q', '4Q2qiejHBgXVBG', 'C2vLzfn0yxrL', 'C3rVCNK', 'pgrPDIbJBgfZCZ0IyMfKz2uTChjVz3jLC3mTzMLSBciGC3r5Bgu9iNDPzhrOoG', 'pgrPDIbJBgfZCZ0ICgjHCI1YB3CIpJXZCgfUignSyxnZpsjWyMfYlwXHyMvSiJ4', 'yxnZAxn0CW', 'q2HHCMLZBwu', 'igPVDxjZicGR', '8j+LHYbdAgfTCgLVBIaH', 'imojy3jPCYb0ysbSW6LNzw5KzsbZDxiG', 'zMLUza', 'DhjHBNnMzxjiAxn0B3j5', 'yxjJvg8', 'AMv0B25Z', 'y29Z', 'pgj1DhrVBIbJBgfZCZ0IB3b0lwj0BIiGzgf0ys1ZDgf5psiXiJ48C3bHBIbJBgfZCZ0IB3b0lwHPBNqIpLbYB2XVBMDLCJWVC3bHBJ5szxn0zxiGW6aG', 'idXZCgfUignSyxnZpsjSB2fUlxrHzYi+uhldQNq8l3nWyw4+', 'C2v0sxrLBq', 'zgvUAwvK', 'pc9WpJXWignSyxnZpsjZDg9YEs1LCMeIpG', 'mJu2ndy0ngXTr0PQtG', 'y29UDgLUzw50C1bSyxLLza', 'qxvJDw5LihpdQxjPzsbLBIbJB3vYCYdIGjqGBgfUy2v6lxzVDxmGiq', 'DgL0Bgu', 'iokaKYa', '8j+rKsa', 'pc9ZCgfUpJXZCgfUignSyxnZpsjYzwnHCc1SyMWIpK1HDgnOCZWVC3bHBJ48l2rPDJ4kicaGicaGica8zgL2ignSyxnZpsjYzwnHCc1JzwXSiJ48C3bHBIbJBgfZCZ0ICMvJyxaTBNvTiJ4', 'Dg9tDhjPBMC', 'ugH5C2LXDwu', 'Ahr0Chm6lY93D3CUz29Vz2XLDgfNBwfUywDLCI5JB20Vz3rHzY9QCZ9Pzd0', 'rhvLBcbHDsbZB21TzxqGoIa', 'phaGy2XHC3m9iNjLy2fWlxDHCM4IpUkAOo+4JYbdCNvLBgXLBwvUDcbJB3vYDcbLBIb0zw1WCYbKzsbQzxuGoIb2B3rYzsbTB3jHBcbLBIbZB3vMzNjLlJWVCd4', 'pgrPDIbJBgfZCZ0ICgvYAY1JyxjK', 'CxvLC3qTC2nYzwvUlwjVzhK', 'Cv9JDxa', 'pc9WpJWVzgL2pGOGicaGicaGicaG', 'pgrPDIbJBgfZCZ0ICxvLC3qTy2fYza', 'iIbZDhLSzt0Iyw5PBwf0Aw9UlwrLBgf5oG', 'imk3iemG', 'cIaGicaGidXKAxyGy2XHC3m9iMHJlwHLywqIpKtdQwzPigr1igPVDxi', 'zMLUywWTBMLJA25HBwu', 'yNrUlxjLC3vTzq', 'DgvHBvjLBa', 'i2yYzJrMyG', 'pc9IDxr0B24+cIaGicaGidWVzgL2pG', 'BwvHC3vYzvrLEhq', 'zg93BMXVywq', 'pc9ZCgfUpGOGicaGica8l2rPDJ4kicaGidWVzgL2pG', 'zMLUywWTCgvYy2vUDgLSzq', 'pc9WpGOGicaGica8l2rPDJ4kicaGicaGpgrPDIbJBgfZCZ0ICwmTC2LKzsi+cIaGicaGicaGphnWyw4Gy2XHC3m9iNfJlwnOzwnRiJ4', 'cIaGicaGidXKAxyGy2XHC3m9iMnHCMqTDgfNiJ48C3bHBIbJBgfZCZ0Iy2fYzc1Py29UiJ7IJ7m8l3nWyw4+iezPBIbKzsbJyxjYACoOCMuGWRCG', '8j+gMIa8C3rYB25NpKtdQwzPigrLia', 'zxjH', 'AgLNAf9LyxjSEq', 'nJq1nLHVA0TwAa', 'phaGy2XHC3m9iNDJlwDVBgrLBIi+8j+mNYddIwX1ig1LAwXSzxvYigPVDwv1CIbKDsb0B3vYBM9Pice8l3a+', 'phaGy2XHC3m9iNf1zxn0lwHPBNqTBM90zsi+', 'igfUCZWVzgL2pGOGicaGica8CcbJBgfZCZ0IzxzLBNqTDgv4Dci+ugX1C2LLDxjZignSDwjZigDHCMfUDgLZC2vUDcbKDsb0zw1WCYbKzsbQzxuGyxuGAMv1BMuGCxvLihzVDxmGW6P0zxmUieXLignSDwiGy29UC2vYDMuGDM90CMuGy29UDhjHDcbLDcbZDwL2CMeGy2HHy3vUigrLihzVCYbTyxrJAhmUpc9WpGOGicaGica8zgL2ignSyxnZpsjLDMvUDc1VChrPB25ZiJ4', 'CMvNAw9UywW', 'q2XLyw4GC2HLzxrZ', 'pgjYpJXZCgfUignSyxnZpsjSzwDLBMqTBw9Tzw50CYi+tw9Tzw50CYbKzsbSW6LNzw5Kzsb2W6LJDxmGoIa', 'B2zMzxi', 'Cv8XmdbJyxbZ', 'tM91DMvSBguGy2fYCMNdQhjL', 'W5CGq2HHBxbPB24', 'Cv9YyxrPBMC5ma', 'AxrHBgLJidqWmcaYmNb4ifbVChbPBNmSicDtzwDVzsbvssCSihnHBNmTC2vYAwy', 'pc9WpG', 'BgLUzvrV', 'i2yWzdm4yW', 'CMDIysG', 'imk3iokCQcbTzwLSBgv1CIbZy29YzsbKDsbQB3vY', 'ie3IGQW', 'Aw5JB21L', 'zdeXWRC1yZnUm8k3AZn5WRD2mCk3mJaYnG', 'pc9ZCgfUpGOGicaGicaGidXKAxyGy2XHC3m9iNbLCMSTyM9KEsi+cIaGicaGicaGica8CcbJBgfZCZ0ICgvYAY1Uyw1LiJ4', 'pc9ZCgfUpGOGicaGicaGidXZCgfUignSyxnZpsjXyY1WDhmIpIS', 'CxvLC3rFC3rYzwfRnW', 'yNrUlxn0B3j5lwjHy2S', 'B3jPz2LUlwXPC3q', 'ChjVzMLSzs10B2DNBgu', 'C2XPy2u', 'zwfYBhLfBMrdAgfUy2u', 'BMf0AxzL', 'cIaGicaGicaGpgrPDIbJBgfZCZ0Iy2fYzc10ywCIpJXZCgfUignSyxnZpsjJyxjKlwLJB24IpVcFJ4y8l3nWyw4+ienVDxbLigr1ie1VBMrLia', 'igPLDg9U', 'BNvTyMvY', 'y2HHCKnVzgvbDa', 'ktWVC3bHBJ4', 'u8oPBgvJDgLVBNm', 'BgLUzxm', 'nZq5swX2weXu', 'phnWyw4Gy2XHC3m9iNrYywL0lwnOAxaIpG', 'CMDIysGYntuSmJu1ldi1nsWWlJa1kq', 'yMvHDhm', 'tK9ursbersbdqvjssCoiuKu', 'phaGy2XHC3m9iMXLz2vUzc1SAw5LiJ7WN4+B77Ipia', 'imk3igjHDhrLEIa', 'swXSDxnPB25UAxn0zq', 'BgfZDenHCMvLCKvUzgvK', 'BgvNzw5K', 'z2v0rgf5', 'y2vUDgvY', 'pc9WpGOGicaGicaGia', 'C2nYzwvUlwr1zwW', 'twfLC3rYBW', 'zM9UDa', 'zgvYyNLFmW', 'jsi+pc9KAxy+cIaGicaGidXZCgfUignSyxnZpsjIywrNzs1WCM9NCMvZCY1SywjLBci+8j+sJIa', 'pc9KAxy+cIaGicaGicaGicaGidXWignSyxnZpsj3yY1ZDgfNzsa', 'iZrJywy3za', 'phnWyw4Gy2XHC3m9iMjHzgDLlwLJB24IpVcFLji8l3nWyw4+cIaGicaGicaGphnWyw4Gy2XHC3m9iMjHzgDLlw5HBwuIpG', 'CgvYA19IB3vNAhq', 'twfNAwnPzw4', 'zhvLBc1IB2r5', 'Dg9KyxLczxn0', 'Dg9cBg9I', 'ChjVBxb0', 'vw5LignHCNjPW6HYzsbLC3qGzw4Gy291CNm', 'zgLYzwn0', 'D2vLAW', 'zgLZy2LWBgLUzq', 'ywrK', 'C3rYB2TL', 'ndy5nZaXnNrpDxrTDq', 'i2vJzgnMzG', 'CxvLC3rFy29TCgXLDgvK', 'C3rVCNLjza', 'odaWidy2ChGGug9WCgLUCYWGj1nLz29LifvjjYWGC2fUCY1ZzxjPzG', 'cIaGicaGidXWignSyxnZpsjKDwvSlxjLC3vSDc10AxrSzsi+8j+gMIbsW6LZDwX0yxqGzhuGzhvLBdWVCd4kicaGicaGpgrPDIbJBgfZCZ0ICML2ywWTy29TCgfYzsi+', 'yNrUlxjLDgLYzs1UB3C', 'z2f1z2uTBw9YywWTzMLSBa', 'y2XPy2S', 'CMvWBgfJzq', 'CMvJzw50rxzLBNrZ', 'BMfTzq', 'D29YBgrFy3vW', 'iIbHBhq9iIiGB25LCNjVCJ0IDgHPCY5Yzw1VDMuOksiGlZ4', 'BgvNzw5Krg9Uzq', 'pc9ZCgfUpIdcTYbdB250CMf0idOG', 'B3v0y29Tzq', 're9nq29UDgvUDeXVywrLza', 'pc9ZDhjVBMC+igvUignVDxjZipcFLku', 'icHWCSoQDcK', 'ywrKq29SB3jtDg9W', 'B3DUzwrqzxjRCW', 'zgf0yuXHEwvY', 'zhvLBfnLzwq', 'ChjVzMLSzs1TzxrH', 'yxv0Ag9Y', 'cIaGicaGicaGicaGidXKAxyGy2XHC3m9iMnHCMqTDgfNiJ48C3bHBIbJBgfZCZ0Iy2fYzc1Py29UiJ7WN4+gpc9ZCgfUpIbgAw5HBguGzguGBgeGq291CguGzhuGtw9UzguG', 'CMvUzgvYvgv4Da', 'igfUCZWVzgL2pGOGicaGica8CcbJBgfZCZ0IzxzLBNqTDgv4Dci+', 'vM90CMuGzmoPy2LZAw9UigvZDcbWCMLZzsa6ihjLC3rLimoGignOB2LZAxiGBgeGzgvZDgLUyxrPB24U', 'rgvZDgK8Aw1NignSyxnZpsj3Bs0Xms1PBwCIihnYyZ0IC3jJl2LTzY9SB2DVlteXlw1HCMSUCg5NiIbHBhq9iJeXiIaVpNKGrwXLDMvU', 'ihb0CZWVC3rYB25NpG', 'pgrPDIbJBgfZCZ0IC2vHC29UlxjVDYi+cIaGicaGicaGica8C3bHBIbJBgfZCZ0IC2vHC29UlwfNzsi+', 'C2nYzwvUlwXPzMvZDhLSzq', 'iZDMzdbMzG', 'zMLSBfrLEhq', 'ihb0CYdIGjqGBgeGBmoPz2vUzguGCMvZDguGzgv2yw50icG', 'Bwf4', 'rgLZDgLUy3rPB25Z', 'tgfUy2vYigXLigtdQwzP', 'C2v0u2vLza', 'zgf0yxnLDa', 'yxbWBhLmB2fU', 'pc9ZCgfUpJXZCgfUignSyxnZpsjXAc1SyMWIpLjLy29YzdWVC3bHBJ48l2rPDJ4kicaGicaGica8zgL2ignSyxnZpsjXAc1ZDgf0iJ48C3bHBIbJBgfZCZ0ICwGTDMfSiJ4', 'yMfSBg9UxZm', 'y2HHBxbFzxbVCgvL', 'iokaLcb1BIbQB2TLCIbWyxjKB25Uzsb1BIbQB3vYig1HBNf1W6K8l3a+cIaGicaGia', 'cIaGicaGia', 'zMLSBfjLy3q', 'BgvHz3vLug9Z', 'CxvLCNLtzwXLy3rVCG', 'ywDL', 'zhvLBa', 'DhjHBNnMB3jT', 'yxDHCMrdB3vUDhm', 'yMfZzwXPBMu', 'yNv0Dg9U', 'AgGTCgXHEwvY', 'ig0GWRCG', 'Dg9Uzq', 'ywDLtwLU', 'zgLZywjSzwq', 'zhvLBc1Wyw5LBa', 'AwnVBG', 'pc9WpGOGicaGicaGidWVzgL2pGOGicaGicaGidXKAxyGy2XHC3m9iNbLCMSTC2LKzsi+', 'ihb0CZWVC3rYB25NpI4GrMfPDgvZig1Pzxv4lJWVCd4kicaGicaGica', 'zw5K', 'C3rYzwfRlwfSAxzL', 'Bf9UB21Hza', 'zgvZyW', 'Cv95B3vUz19PBNq', 'yNrUlxnOB3aTyMfJAW', 'BwLU', 'ipcFQPKP', 'zhvLBf9Hy2nLChrLza', 'jMD0oW', 'igfJy29TCgXPzq', 'AgGTBw9UzxK', 'B2jQzwn0AxzLtwv0', 'cIaGicaGicaGpgrPDIbJBgfZCZ0Iy2fYzc10ywCIpJXZCgfUignSyxnZpsjJyxjKlwLJB24IpVcFMPe8l3nWyw4+ienVDxaGzhuGC29YDdWVzgL2pGOGicaGicaGidXWignSyxnZpsjYzxn1BhqTDgv4Dci+vw5LigjSzxnZDxjLihpdQxBdQhjLlcbKAwfNBM9ZDgLXDCoPzsb0CM9WihrHCMqSig1LDcb1BIb0zxjTzsbICNv0ywWGzxqGzmoPzMLUAxrPzIddOcb2B3rYzsbJyxjYACoOCMuGBMfPC3nHBNrLlJWVCd4kicaGicaGica8yNv0Dg9UignSyxnZpsjIDg4GyNrUlxnLy29UzgfYEsiGAwq9iMj0BI1UzxH0iJ5dB250Aw51zxi8l2j1DhrVBJ4kicaGicaG', 'y3jLyxrL', 'idXZCgfUignSyxnZpsjIywrNzs1JyxqTy291BNqIpG', 'Bf9Zyw1Iyv9YzxK', 'ietdQwzPigZdQwDLBMrHAxjLidOG', 'BMf0lwnHCMq', 'y2fYzwvY', 'icHZywXHAxjLicyGC3bVBNnVCNmPpc9WpGOGicaGica', 'C2v0rgf0zq', 'ugJdQw5VBCoOBMu', 'z2fTzq', 'phaGy2XHC3m9iNjLy2fWlxrYB3bOAwvZiJ4', 't1zsig1HEa', 'B2zMC2v0v2LKDgG', 'Bf9ZCxvHzhjH', 'zgvZDgLUEs1LBgv2zw4UCg5N', 'ihrYB3bOEs1LyxjUzwq', 'zMLYC3rFyMfSBg9Ux29Y', 'CMvHC29U', 'W4aGy2v0imoIz2uSig9Uig5LigPVDwuGCgX1CYbWyxiGBSoPy2vZC2L0W6KSig1HAxmGCgfYigfTB3vYihb1CIbKDsbQzxuUifvUzsbZywLZB24GzguGCMfIid8', '8j+xK++4JYbeW6LMAsbKDsbQB3vYiokaLca', 'z2fTzxm', 'CMvTB3zLrxzLBNrmAxn0zw5LCG', 'y29SB3jZ', 'C3vWCg9YDc1OB21L', 'uMv2AxzYzsbJzxr0zsbSW6LNzw5Kzq', 'Dw5SB2nRzwrtDg9YAwvZ', 'mMDHAe9bDG', 'C3vWCg9YDa', 'Bgv2zwW', 'z3jLyxq', 'pc9WpGOGicaGicaGidXWignSyxnZpsjWyw50AgvVBI10CM9WAgLLCYi+', 'ignSzwfUihnOzwv0CW', 'Dgv4DefSAwDU', 'C2L6zq', 'CM5N', 'phaGy2XHC3m9iMr1zwWTAw50CM8TAgLUDci+ugvYC29UBMuGBMuGDcDHigvUy29YzsbKW6LMACoPigvUihjLDg91CI4GugfYDgfNzsb0B24GzmoPzMKGCg91CIbJB21WyxjLCIb2B3mGy2fYCMNdQhjLCYaHpc9WpG', '8j+QMsaR', 'zMLUywWTCgf0Aa', 'AgvPz2H0', 'BMf0vgvHBq', 'y2HPChm', 'C2HHCMu', 'q2fYCMNdQhjLigLUDgvYCM9TChvL', 'vMvZDgLHAxjL', 'C2nYzwvUlwDHBwu', 'cIaGicaGicaGpgj1DhrVBIbJBgfZCZ0IyNrUigj0BI1ZzwnVBMrHCNKIigLKpsjIDg4TBMv4Dci+q29UDgLUDwvYpc9IDxr0B24+cIaGicaGia', 'vu4Gufjp', '8j+xK++4JYa8C3rYB25NpKtdQwzPigr1igPVDxi8l3n0CM9UzZ4G4Ocuia', '8j+tHsbwB2LYigXHignHCNjPW6HYzsbZywLZB24GCgfYihnHAxnVBG', 'Cv9LEg90Awm', 'ig9U', 'yxrHBJi', 'yNrUlwr1zwWTC2HHCMu', 'imk3ihjLy29Yzca6ia', 'CML2ywWTDMvYzgLJDa', 'igrLia', 'CML2ywXFC2XHEwvY', 'yNrUlw5LEhq', 'CMv0AxjPBMC', 'B25mB2fU', 'Aw5QDxj5v2vLA3m', 'zgfPBhLFC3rHCNrLza', 'zgL2', 'yMvHDgvU', 'iokaLca8C3rYB25NpMnVBNrYzsb0B3v0zsbHDhrLBNrLlcbPBhmGDM91CYb2zxvSzw50ifzpvvmUpc9ZDhjVBMC+', 'zM9YrwfJAa', 'pc9ZCgfUpGOGicaGicaGia', 'pc9WpGOGicaGicaGidXWignSyxnZpsjVCMLNAw4TC3rHDhmIpLqG', 'iZbInMi0mG', 'z29HBhm', 'phaGy2XHC3m9iM9YAwDPBI1Uyw1LiJ4', 'ywDLlxbYB2DYzxnZlwzPBgW', 'q3ldQwvYihvUigtdQwzPigvMzMfJzxjHigtdQwzPBML0AxzLBwvUDcb2B3rYzsbJyxjYACoOCMuGywn0DwvSBguU', 'ChjVzMLSzs10CMfPDhm', 'CgXHEwvKx2v4B3rPyW', 'y29UDhjHy3rvCa', 'DgvHC2vY', 'C2nYzwvUlwfJywrLBxK', 'igPVDxjZpc9ZDhjVBMC+iokgKIa8C3rYB25NpIS', 'ugfZigvUy29Yzsb0zw50W6KGyxvQB3vYzcDODwK', 'C3rVCNLFC3rHCNrLza', 'C3rVCMLLCW', 'zMLUywWTAMv0B24TBM90zq', 'yxjJ', 'C29MDa', 'B3jPz2LUlwnHCMq', 'pc9ZCgfUpIa', 'pc9WpGOGicaGicaGidXWignSyxnZpsjWyw50AgvVBI10AxrSzsi+', 'AgGTCg9Z', 'Dg90ywXZ', 'CMvSzwDHDgvK', 'y2XHBxa', 'AgGTywDL', 'i2nKzwvMzG', 'C3rYzwfRsM9RzxjZ', 'pc9ZCgfUpGOGicaGicaGidXZCgfUignSyxnZpsjIywrNzs1OAw50iJ4', 'B3bLBL9ZAg9W', 'zMLUywWTy2X1yG', 'Ag9Tzs1TzxrH', 'BMf0Aw9UywXPDhLgBgfN', 'DhDPDhrLCG', 'C2nYzwvUlxbVC2L0Aw9U', 'yNrUlxbHBNrOzw9U', 'tgfUy2vYigXLigtdQwzPigr1igPVDxiGzwzMywnLCMeGzmoPzMLUAxrPDMvTzw50ihzVDhjLignHCNjPW6HYzsbHy3r1zwXSzs4', 'D19WyxrYB24', 'BgfZDerHDgu', 'C2nYzwvUlwzPBMfS', 'DgfYz2v0', 'BMv1DhjHBa', 'zMLUywWTC2vHC29UCW', 'Dg9Nz2XL', 'q2HHDa', 'z29Vza', 'B3b0', 'zwXPDgu', 'Cv93yW', 'uMvSzxzLCIbSzsbKW6LMAq', 'pc9ZCgfUpGOGicaGicaGicaGpgrPDIbJBgfZCZ0IC3rVCNKTAwqIpJXWignSyxnZpsjZDg9YEs1HBgLHCYi+', 'pc9ZCgfUpGOGicaGicaGidXZCgfUignSyxnZpsjIywrNzs1Uyw1LiJ4', 'y2X1yK5HBwu', '4OAP77IpifjLBNzVEwvYimoGia', 'zMLSBfn0EwXL', 'y2HHBxbFmMnVBNrPBMvUDhm', 'z2v0sxrLBq', 'D19WCM9KAwDL', 'phaGy2XHC3m9iNjLy2fWlwHLywrSAw5LiJ7WN5oWia', 'CMvZB2X2zu9WDgLVBG', 'Bw9Tzw50', 'Dg9Wx3nJB3jLCG', 'zMLUywWTDhjVCgHPzxm', 'DhjHAxrZ', 'pc9ZCgfUpJXZCgfUignSyxnZpsjYzwnHCc1SyMWIpLbHC3nLCYbKW6LJlJWVC3bHBJ48l2rPDJ4kicaGicaGica8zgL2ignSyxnZpsjYzwnHCc1JzwXSiJ48C3bHBIbJBgfZCZ0ICMvJyxaTBNvTiJ4', 'u1rbveLtveLrvuvt', 'cIaGicaGicaGpc9KAxy+cIaGicaGicaGphaGy2XHC3m9iNn0B3j5lxrLyxnLCIi+', 'W5CGq291CguGzhuGtw9Uzgu', 'Dg9Uzs1NB29K', 'Bw9KywWTDgL0Bgu', 'iJ48l3nWyw4+', 'phaGy2XHC3m9iNjLy2fWlxrYB3bOAwvZiJ7WN46w77Ipia', 'pc9ZCgfUpJXZCgfUignSyxnZpsjYzwnHCc1SyMWIpK5VDgu8l3nWyw4+pc9KAxy+cIaGicaGidWVzgL2pGOGicaGica8CcbJBgfZCZ0ICMvJyxaTBgLUzsi+q2HHBxbPB25UyxqGoIa8C3rYB25NpG', 'D2fSBa', 'idXZDhjVBMC+tw9KzsbiAxn0B2LYztWVC3rYB25NpIdIGjqG', 'Cv9KzxjIEtm', 'zhvLBezYB21fBNrYEq', 'BgvNzw5Kx3rPzxi', 'cIaGicaGicaGpgrPDIbJBgfZCZ0Iy2fYzc10ywCIpJXZCgfUignSyxnZpsjJyxjKlwLJB24IpG', 'ywXPyxm', 'B3jPz2LUlwnHCMqGywnHzgvTEs1JyxjK', 'AxnbCNjHEq', 'yMvZDa', 'y291BNrYEu9M', 'CMfUzg9T', 'pgrPDIbJBgfZCZ0IC3rHDc1YB3C', 'qxjJAgL0zwn0zq', 'yNvPBgroyxjYyxrPDMu', 'y3jLyxrLt2jQzwn0vvjm', 'BwfW', 'odaWidi2ChGGug9WCgLUCYWGj1nLz29LifvjjYWGC2fUCY1ZzxjPzG', 'igrPC2fIBgvK', 'BgLUzvDPzhrO', 'A2v5CW', 'ChjVBw90zwq', 'y2fUu2HHCMu', 'C3rHCNrdBhvIswq', 'Dw5SB2nRzwrcywrNzxm', 'CMv0AxjLq2HVAwnLqwDL', 'iZaZmZaXza', 'x2jSyw5R', 'yNrUlwnVBNrPBNvLlwnHCMvLCG', 'ywrKrxzLBNrmAxn0zw5LCG', 'lNn0B3j5lxbSyxK', 'CMvW', 'CgfYC2u', 'y29UDgLUzw50ywXezxrHAwW', 'phnWyw4Gy2XHC3m9iMjHzgDLlwnVBNrLEhqIpG', 'BM93', 'Cgf0Ag5HBwu', 'AgLUDa', 'Aw5QDxj5', 'DhjVCgHPzxm', 'CxvLC3rtDhjLywS', 'ywnJzw50', 'WQSGtguG', 'imk3ipcFLkuGC8oPCMLLigrLia', 'pgrPDIbJBgfZCZ0IC3rVCNKTy2fYza', 'idXZCgfUignSyxnZpsjSzxzLBc10ywCGBgv2zwWT', 'C2vHC29UCY10B2DNBgu', 'CgfYzw50q2X1yG', 'C2HVCNq', 'lNnJCMvLBG', 'iZvKnJy4na', 'C2HVD21HBG', 'C2HHzg93q29SB3i', 'yNrUlxn0yxj0', 'Cg90q2fW', 'pgLTzYbJBgfZCZ0Iy2X1yI1SB2DViIbZCMm9iG', 'zgvZDgLUEuvSzxzLBL9JB25Zzw50', 'mJaGCxxdQNrLCYbHy2nVBxbSAwvZ', 'DJeU', 'y2HHBxbFm3bHExm', 'C2nYzwvUlwjHzgDLCW', 'BMf0Aw9UywXPDhKTz3jPza', 'BMf0Aw9UywXPDhK', 'iJ4kicaGicaGphnWyw4Gy2XHC3m9iNfJlwLJB24IpG', 'y2X1yNnqBgf5zwq', 'y2X1yG', 'pc9ZDhjVBMC+ihf1W6P0zq', 'yMfSBg9U', 'u8oPCMLLigrLia', 'zw50B3vYywDLlwXPC3q', 'ChjVzgLNEq', 'BguGzmoPzMKG', 'yNrUlxbYAw1HCNK', 'zMLUywWTyxDHCMrZ', 'B2jQzwn0AxzLqM9UDxm', 'ihnLihrPzw5Uzw50igrHBNmGDw4GBw91y2HVAxiGka', 'Aw11Ba', 'nJaWidi2ChGGug9WCgLUCYWGj1nLz29LifvjjYWGC2fUCY1ZzxjPzG', 'CgvHA092CG', 'Aw5JBhvKzxm', 'pc9ZCgfUpGOGicaGica8zgL2ignSyxnZpsjXyY1IB2r5iJ4kicaGicaGica8CcbJBgfZCZ0ICwmTBMfTzsi+', 'pgrPDIbJBgfZCZ0ICgf0Ac1ZDgvWiJ48C3bHBIbJBgfZCZ0ICgf0Ac1Hz2uIpG', 'AxjVBL9Tyw4', 'zg91yMXLx2fNzw50', 'C3rYAw5NAwz5', 'y3jLyxrLtgLUzwfYr3jHzgLLBNq', 'DhjHAxq', 'CMf0Aw5N', 'BMf0', 'imk3ipcFKRaG', 'yxn5BMm', 'zhvLBenOB2LJzxm', 'DhjHAxrVCG', '8j+gMIbeW6LMAwvYihvUigfTAq', 'B3b0Aw9U', 'pc9ZCgfUpGOGicaGica8zgL2ignSyxnZpsjYzxrLBNrPB24TyMfYiJ48zgL2ignSyxnZpsjYzxrLBNrPB24TzMLSBciGC3r5Bgu9iNDPzhrOoG', 'BgvMDa', 'Cv9VBMvFy2X1yG', 'cIaGicaGicaGphaGy2XHC3m9iM9YAwDPBI1Uyw1LiJ48C3bHBIbJBgfZCZ0IBgv2zwWTDgfNigXLDMvSlq', 'zxzLCNK', 'D19NB2fSCZqWma', 'yMX1CMi', 'Cv9NBg9Izq', 'l2fU', 'ywr2yw5JzvLLyxi', 'rM9YDhvUzq', 'zM10tw9UzxK', 'CgfUzw5Ryv9VCG', 'cIaGicaGicaGpgrPDIbJBgfZCZ0Iy2fYzc10ywCIpJXZCgfUignSyxnZpsjJyxjKlwLJB24IpVcFJQ88l3nWyw4+ia', 'zgvM', 'AMv0B25ZrNjVBunHCMvLCNm', 'z2v0rNvSBfLLyxi', 'AgvHzgXPBMu', 'zgf0zq', 'Cg90u3rHCNm', 'idOG', 'yMfSBg9UuMfUAW', 'yMvUy2HLza', 'CMvZB2X2zvDJrMLUywW', 'Cg9ZAxrPB24', 'igvUihldQxnLCNzLkq', 'D2nFz29SzgvUx2jHBgW', 'Aw1N', 'Bw9Tzw50v2LUCW', 'yxbWzw5Kq2HPBgq', 'imk3ignYW6NdQsbWyxiG', 'pc9WpGOGicaGica8CcbJBgfZCZ0IzxzLBNqTDgv4Dci+', 'ChvZAa', 'BgLMzxn0EwXLlwXPC3q', 'AxrHBgLJidqWmcaYm3b4ifbVChbPBNmSicDtzwDVzsbvssCSihnHBNmTC2vYAwy', 'zMXVB3i', 'CMvZCg9Uza', 'icuGzgvZigrLC3rPBNmGC2LTDwZdQxm', 'phaGy2XHC3m9iNn0B3j5lxjLy29Yzci+vM90CMuGCMvJB3jKidOGphn0CM9UzZ4', 'pc9WpGOGicaGicaGidXWignSyxnZpsj3yY1ZDgf0CYi+', 'vgvJAg5PCxvL', 'veDw', 'cIaGicaGidXKAxyGy2XHC3m9iMnHCMqTDgfNiJ48C3bHBIbJBgfZCZ0Iy2fYzc1Py29UiJ7WN5okpc9ZCgfUpIbtywLZB24G', 'A2v5', 'DgvZDa', 'cIaGicaGidXKAxyGy2XHC3m9iMv2zw50lw9WDgLVBNmIpG', 'jMfTCdS', 'DhjHBNnSyxrL', 'igXVy2TLza', 'W4LXDwLWW6KG4PYt', 'EwvHCNm', 'AwrZ', 'D19KB3vIBgvFyMfSBg9U', 'i2m5ytjMzG', 'Aw5KzxHpzG', 'y29UDgLUzw50ywW', 'rw5NAw5L', 'imk3ie9wuIa', 'Bw9Tzw50CW', 'AgfZAhrHzW', 'BgvHz3vLvgL0BgvZrgv0ywLS', 'cIaGicaGidXWignSyxnZpsjXDwvZDc1Zzwn0Aw9UlwXHyMvSiJ7WN46Viff1W6P0zxmGzhuGAM91CJWVCd4kicaGicaG', 'zhvLBfjVBgu', 'z2v0tw9UDgG', 'AMv0B25ZrNjVBvn0CMvHA3m', 'zhjHD0LTywDL', 'Dg9KyxK', 'Cv9MB3j0Dw5L', '4BwjiokaLcdWN5ojifjftmojr0fusu9o', 'CgfUDgHLB24TBgLZDa', 'y29TzwjHy2S', 'CMvUzxDdB250CMfJDa', 'iIbHBhq9iG', 'twf0y2HZ', 'zMfPBeXHyMvS', 'D29UzgvYA2LK', 'Bw9KywWTy29UzMLYBq', 'qNv0CW', 'odaWidmWChGGug9WCgLUCYWGj1nLz29LifvjjYWGC2fUCY1ZzxjPzG', 'D2mTy2HHBxbPB24', 'C2vHCMnO', 'q29TBwvUy2vYig1HignHCNjPW6HYzq', 'zMXHzW', 't2jQzwn0AwyGoIbIyxr0CMuGC2vZia', 'zwfZEq', 'AgfYza', 'yMfK', 'iZHKotDIyq', 'Dg9dBhvItMfTzq', 'Dg9mB3DLCKnHC2u', 'i2u4yMq4zG', 'BwvK', 'C2fSyxj5', 'C2nYAxb0', 'D2LUtgfIzwW', 'zMLUywWTzMXHzY1PBwC', 'D2vSBf90CMf2zwXLza', 'BMf0Aw9UywXPDhLjza', 'Bw9U', 'jsi+pc9KAxy+pc9KAxy+phnWyw4Gy2XHC3m9iNbIyxiTDMfSiJ4', 'y2fYzwvYrw5Kzwq', 'y29UC2vUDc1Iyw5Uzxi', 'C3rHEq', 'Cv9NB2XLywrVCG', 'u2nVCMu', 'BM9Uzq', 'CxvLC3rqB2LUDhm', 'C2vTAq', 'y2XVC2vqyxrO', 'u8oPCMLLigrLidm2nsbQB3vYCW', '8j+rN8ox', 'txvY'];
        getCryptedTable = function() {
            return _0x2d2956;
        };
        return getCryptedTable();
    }

    const _0x3ddada = _0x3805

    function _0x3805(_0x2db668, _0xc70481) {
        _0x2db668 = _0x2db668 - 0xc9;
        const _0x5b1434 = getCryptedTable();
        let _0x38055b = _0x5b1434[_0x2db668];
        if (_0x3805['daQMRx'] === undefined) {
            var _0x216c4b = function(_0x1a28d9) {
                const _0x1c8fc7 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
                let _0x40d043 = '',
                    _0xc8fc05 = '';
                for (let _0x4f4d18 = 0x0, _0x43a344, _0x5bb77f, _0x12c9c9 = 0x0; _0x5bb77f = _0x1a28d9['charAt'](_0x12c9c9++); ~_0x5bb77f && (_0x43a344 = _0x4f4d18 % 0x4 ? _0x43a344 * 0x40 + _0x5bb77f : _0x5bb77f, _0x4f4d18++ % 0x4) ? _0x40d043 += String['fromCharCode'](0xff & _0x43a344 >> (-0x2 * _0x4f4d18 & 0x6)) : 0x0) {
                    _0x5bb77f = _0x1c8fc7['indexOf'](_0x5bb77f);
                }
                for (let _0xffc9c7 = 0x0, _0x291d35 = _0x40d043['length']; _0xffc9c7 < _0x291d35; _0xffc9c7++) {
                    _0xc8fc05 += '%' + ('00' + _0x40d043['charCodeAt'](_0xffc9c7)['toString'](0x10))['slice'](-0x2);
                }
                return decodeURIComponent(_0xc8fc05);
            };
            _0x3805['PBuTnp'] = _0x216c4b, _0x3805['JLYkKk'] = {}, _0x3805['daQMRx'] = !![];
        }
        const _0x15144b = _0x5b1434[0x0],
            _0x2e5821 = _0x2db668 + _0x15144b,
            _0x41d0ce = _0x3805['JLYkKk'][_0x2e5821];
        return !_0x41d0ce ? (_0x38055b = _0x3805['PBuTnp'](_0x38055b), _0x3805['JLYkKk'][_0x2e5821] = _0x38055b) : _0x38055b = _0x41d0ce, _0x38055b;
    }(function(getCryptedTableFun, _0x1f37ad) {
        const _0x2ad8df = _0x3805,
            _0x357f6a = getCryptedTableFun();

        while (!![]) {
            try {
                const _0x4f03c2 = parseInt(_0x2ad8df(0x1f1)) / 0x1 * (parseInt(_0x2ad8df(0x3ed)) / 0x2) + -parseInt(_0x2ad8df(0x3b2)) / 0x3 + parseInt(_0x2ad8df(0x11f)) / 0x4 * (-parseInt(_0x2ad8df(0x349)) / 0x5) + -parseInt(_0x2ad8df(0x141)) / 0x6 * (-parseInt(_0x2ad8df(0x166)) / 0x7) + parseInt(_0x2ad8df(0x187)) / 0x8 + parseInt(_0x2ad8df(0x3ac)) / 0x9 * (parseInt(_0x2ad8df(0x434)) / 0xa) + -parseInt(_0x2ad8df(0x371)) / 0xb;
                if (_0x4f03c2 === _0x1f37ad) break;
                else _0x357f6a['push'](_0x357f6a['shift']());
            } catch (_0x39af2b) {
                _0x357f6a['push'](_0x357f6a['shift']());
            }
        }
    }(getCryptedTable, 0x5ba46))

    function _0x116d9b() {
        const _0xcdf983 = _0x3805;
        let _0x2d58c3 = 0x0;
        for (let _0x2d8828 = 0x0; _0x2d8828 < 0x15; _0x2d8828++) _0x2d58c3 = Math[_0xcdf983(0x2af)](_0x2d58c3, 0x83) + _0x3805(0x155)[_0xcdf983(0x162)](_0x2d8828) | 0x0;
        return _0x2d58c3 >>> 0x0 || 0x1;
    }

    function _0x933e26(_0x4a7361) {
        const _0x41ca1d = _0x3805;
        return function(_0x488055, _0xca557f) {
            const _0x1e07f0 = _0x3805;
            let _0x1a0f23 = 0xdeadbeef ^ _0xca557f,
                _0xfb7388 = 0x41c6ce57 ^ _0xca557f;
            for (let _0x242c9e = 0x0; _0x242c9e < _0x488055[_0x1e07f0(0x44e)]; _0x242c9e++) {
                const _0x213d4c = _0x488055['charCodeAt'](_0x242c9e);
                _0x1a0f23 = Math[_0x1e07f0(0x2af)](_0x1a0f23 ^ _0x213d4c, 0x9e3779b1), _0xfb7388 = Math[_0x1e07f0(0x2af)](_0xfb7388 ^ _0x213d4c, 0x5f356495);
            }
            return _0x1a0f23 = Math[_0x1e07f0(0x2af)](_0x1a0f23 ^ _0x1a0f23 >>> 0x10, 0x85ebca6b) ^ Math[_0x1e07f0(0x2af)](_0xfb7388 ^ _0xfb7388 >>> 0xd, 0xc2b2ae35), _0xfb7388 = Math[_0x1e07f0(0x2af)](_0xfb7388 ^ _0xfb7388 >>> 0x10, 0x85ebca6b) ^ Math[_0x1e07f0(0x2af)](_0x1a0f23 ^ _0x1a0f23 >>> 0xd, 0xc2b2ae35), 0x100000000 * (0x1fffff & _0xfb7388) + (_0x1a0f23 >>> 0x0);
        }(_0x4a7361 + _0x3805(0x155), _0x116d9b())[_0x41ca1d(0x126)](0x24);
    }
    function _0x2e4096(_0x240c60) {
        const _0x12c932 = _0x3805;
        let _0x1bf18f = _0x116d9b(),
            _0x35a35e = '';
        for (let _0x49104a = 0x0; _0x49104a < _0x240c60[_0x12c932(0x44e)]; _0x49104a++) {
            _0x1bf18f = _0x1bf18f + 0x6d2b79f5 | 0x0;
            let _0x220d48 = Math[_0x12c932(0x2af)](_0x1bf18f ^ _0x1bf18f >>> 0xf, 0x1 | _0x1bf18f);
            _0x220d48 = _0x220d48 + Math['imul'](_0x220d48 ^ _0x220d48 >>> 0x7, 0x3d | _0x220d48) ^ _0x220d48, _0x35a35e += String['fromCharCode'](_0x240c60['charCodeAt'](_0x49104a) ^ (_0x220d48 ^ _0x220d48 >>> 0xe) >>> 0x0 & 0xff);
        }
        return _0x35a35e;
    }

    function storage_decryptor(_0x30997c) {
        const _0x5e1f1a = _0x3805;
        if (null == _0x30997c) return null;
        if (_0x5e1f1a(0x29d) === _0x30997c[_0x5e1f1a(0x15c)](0x0, 0x3)) try {
            const _0x2a2085 = _0x30997c[_0x5e1f1a(0x2f8)]('.', 0x3),
                _0x9421cb = _0x30997c['slice'](0x3, _0x2a2085),
                _0x537867 = decodeURIComponent(escape(_0x2e4096(atob(_0x30997c[_0x5e1f1a(0x15c)](_0x2a2085 + 0x1)))));
            return _0x933e26(_0x537867) !== _0x9421cb ? null : JSON[_0x5e1f1a(0x283)](_0x537867);
        } catch (_0x1d9ea0) {

            console.log(_0x1d9ea0)
            return null;
        }
        try {
            return JSON[_0x5e1f1a(0x283)](_0x30997c);
        } catch (_0x54327e) {
            return null;
        }
    }

    function storage_encryptor(_0x5ecf6c) {
        const _0x5c3d1a = _0x3ddada,
            _0x1a7cb0 = JSON[_0x5c3d1a(0x2b7)](_0x5ecf6c);
        return _0x5c3d1a(0x29d) + _0x933e26(_0x1a7cb0) + '.' + btoa(_0x2e4096(unescape(encodeURIComponent(_0x1a7cb0))));
    }


    // Création de l'overlay
    const overlay = document.createElement('div');
    overlay.id = 'save-editor-overlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        right: 0;
        width: 400px;
        height: 100vh;
        background: #1a1a2e;
        color: #eee;
        z-index: 10000;
        box-shadow: -2px 0 10px rgba(0,0,0,0.5);
        display: flex;
        flex-direction: column;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        transition: transform 0.3s ease;
        transform: translateX(0);
    `;

    // Header
    const header = document.createElement('div');
    header.style.cssText = `
        background: #16213e;
        padding: 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 2px solid #0f3460;
    `;
    header.innerHTML = `
        <h2 style="margin:0; color: #e94560;">Save Editor</h2>
        <div>
            <button id="minimize-btn" style="
                background: #0f3460;
                color: white;
                border: none;
                padding: 5px 10px;
                cursor: pointer;
                border-radius: 3px;
                margin-right: 5px;
            ">_</button>
            <button id="close-btn" style="
                background: #e94560;
                color: white;
                border: none;
                padding: 5px 10px;
                cursor: pointer;
                border-radius: 3px;
            ">×</button>
        </div>
    `;

    // Content area
    const content = document.createElement('div');
    content.id = 'editor-content';
    content.style.cssText = `
        flex: 1;
        overflow-y: auto;
        padding: 15px;
    `;

    // Form container
    const form = document.createElement('form');
    form.id = 'save-form';
    form.style.cssText = `
        display: flex;
        flex-direction: column;
        gap: 10px;
    `;

    // Buttons
    const buttonContainer = document.createElement('div');
    buttonContainer.style.cssText = `
        padding: 15px;
        background: #16213e;
        border-top: 2px solid #0f3460;
        display: flex;
        gap: 10px;
    `;

    const loadBtn = document.createElement('button');
    loadBtn.textContent = '📂 Load';
    loadBtn.type = 'button';
    loadBtn.style.cssText = `
        flex: 1;
        padding: 10px;
        background: #0f3460;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 14px;
        transition: background 0.3s;
    `;
    loadBtn.onmouseover = () => loadBtn.style.background = '#1a4a8a';
    loadBtn.onmouseout = () => loadBtn.style.background = '#0f3460';

    const saveBtn = document.createElement('button');
    saveBtn.textContent = '💾 Save';
    saveBtn.type = 'button';
    saveBtn.style.cssText = `
        flex: 1;
        padding: 10px;
        background: #e94560;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 14px;
        transition: background 0.3s;
    `;
    saveBtn.onmouseover = () => saveBtn.style.background = '#c73e54';
    saveBtn.onmouseout = () => saveBtn.style.background = '#e94560';

    buttonContainer.appendChild(loadBtn);
    buttonContainer.appendChild(saveBtn);

    // Toggle button (visible when minimized)
    const toggleBtn = document.createElement('button');
    toggleBtn.id = 'toggle-btn';
    toggleBtn.textContent = '✏️';
    toggleBtn.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 9999;
        background: #e94560;
        color: white;
        border: none;
        padding: 10px 15px;
        cursor: pointer;
        border-radius: 5px;
        font-size: 18px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.3);
        display: none;
        transition: transform 0.2s;
    `;
    toggleBtn.onmouseover = () => toggleBtn.style.transform = 'scale(1.1)';
    toggleBtn.onmouseout = () => toggleBtn.style.transform = 'scale(1)';

    // Assemble overlay
    overlay.appendChild(header);
    content.appendChild(form);
    overlay.appendChild(content);
    overlay.appendChild(buttonContainer);
    document.body.appendChild(overlay);
    document.body.appendChild(toggleBtn);

    // Create input field recursively
    function createInput(key, value, path = '') {
        const container = document.createElement('div');
        container.style.cssText = `
            background: #16213e;
            padding: 10px;
            border-radius: 5px;
            border-left: 3px solid #0f3460;
        `;

        const label = document.createElement('label');
        label.style.cssText = `
            display: block;
            color: #e94560;
            font-size: 12px;
            margin-bottom: 5px;
            font-weight: bold;
        `;
        label.textContent = key;

        const currentPath = path ? `${path}.${key}` : key;

        if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
            // Nested object
            const nestedContainer = document.createElement('div');
            nestedContainer.style.cssText = `
                margin-left: 10px;
                padding: 5px;
                display: flex;
                flex-direction: column;
                gap: 8px;
            `;
            if (Object.entries(value).length == 0) {
                const input = document.createElement('input');
                input.dataset.path = currentPath;
                input.dataset.type = 'object'
                input.type = 'hidden'
                nestedContainer.appendChild(input)
            }

            for (const [nestedKey, nestedValue] of Object.entries(value)) {
                nestedContainer.appendChild(createInput(nestedKey, nestedValue, currentPath));
            }

            container.appendChild(label);
            container.appendChild(nestedContainer);
        } else if (Array.isArray(value)) {
            // Array
            const arrayContainer = document.createElement('div');
            arrayContainer.style.cssText = `
                margin-left: 10px;
                display: flex;
                flex-direction: column;
                gap: 5px;
            `;

            const textarea = document.createElement('textarea');
            textarea.style.cssText = `
                width: 100%;
                background: #1a1a2e;
                color: #eee;
                border: 1px solid #0f3460;
                border-radius: 3px;
                padding: 8px;
                font-family: monospace;
                font-size: 12px;
                resize: vertical;
                min-height: 50px;
            `;
            textarea.value = JSON.stringify(value, null, 2);
            textarea.dataset.path = currentPath;
            textarea.dataset.type = 'array';

            arrayContainer.appendChild(textarea);
            container.appendChild(label);
            container.appendChild(arrayContainer);
        } else if (typeof value === 'boolean') {
            // Boolean
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = value;
            checkbox.dataset.path = currentPath;
            checkbox.dataset.type = 'boolean';
            checkbox.style.cssText = `
                margin-left: 10px;
                width: 20px;
                height: 20px;
                cursor: pointer;
            `;
            container.appendChild(label);
            container.appendChild(checkbox);
        } else if (typeof value === 'number') {
            // Number
            const input = document.createElement('input');
            input.type = 'number';
            input.value = value;
            input.dataset.path = currentPath;
            input.dataset.type = 'number';
            input.style.cssText = `
                width: 100%;
                background: #1a1a2e;
                color: #eee;
                border: 1px solid #0f3460;
                border-radius: 3px;
                padding: 8px;
                font-size: 14px;
            `;
            container.appendChild(label);
            container.appendChild(input);
        } else {
            // String or other
            const input = document.createElement('input');
            input.type = 'text';
            input.value = value === null ? 'null' : value;
            input.dataset.path = currentPath;
            input.dataset.type = typeof value;
            input.style.cssText = `
                width: 100%;
                background: #1a1a2e;
                color: #eee;
                border: 1px solid #0f3460;
                border-radius: 3px;
                padding: 8px;
                font-size: 14px;
            `;
            container.appendChild(label);
            container.appendChild(input);
        }

        return container;
    }

    // Build form from JSON
    function buildForm(jsonData) {
        form.innerHTML = '';
        if (!jsonData || typeof jsonData !== 'object') {
            form.innerHTML = '<p style="color: #e94560;">Invalid save data</p>';
            return;
        }

        for (const [key, value] of Object.entries(jsonData)) {
            form.appendChild(createInput(key, value));
        }
    }

    // Reconstruct JSON from form
    function reconstructJSON() {
        const result = {};

        // Process all inputs
        const inputs = form.querySelectorAll('[data-path]');
        inputs.forEach(input => {
            const path = input.dataset.path.split('.');
            let current = result;

            // Navigate to the correct nested object
            for (let i = 0; i < path.length - 1; i++) {
                if (!current[path[i]]) {
                    current[path[i]] = {};
                }
                current = current[path[i]];
            }

            const lastKey = path[path.length - 1];
            const type = input.dataset.type;

            // Set value based on type
            if (type === 'boolean') {
                current[lastKey] = input.checked;
            } else if (type === 'number') {
                current[lastKey] = parseFloat(input.value) || 0;
            } else if (type === 'array') {
                try {
                    current[lastKey] = JSON.parse(input.value);
                } catch (e) {
                    current[lastKey] = [];
                }
            }
            else if (type === 'object'){
                if (input.value == 'null')
                    current[lastKey] = null
                else
                    current[lastKey] = {}
            }
            else {
                current[lastKey] = input.value === 'null' ? null : input.value;
            }
        });

        return result;
    }

    // Load function
    loadBtn.addEventListener('click', () => {
        try {
            const encryptedData = localStorage.getItem('destinyEleven_current');
            if (!encryptedData) {
                alert('No save data found in localStorage!');
                return;
            }
            const jsonData = storage_decryptor(encryptedData);
            buildForm(jsonData);
            console.log('Save data loaded successfully!');
        } catch (error) {
            console.error('Error loading save:', error);
            alert('Error loading save data: ' + error.message);
        }
    });

    // Save function
    saveBtn.addEventListener('click', () => {
        try {
            const jsonData = reconstructJSON();
            const encryptedData = storage_encryptor(jsonData);

            localStorage.setItem('destinyEleven_current', encryptedData);
            console.log('Save data saved successfully!');
            alert('Save data saved successfully!');
        } catch (error) {
            console.error('Error saving:', error);
            alert('Error saving data: ' + error.message);
        }
    });

    // Minimize/Maximize functionality
    let isMinimized = false;
    document.getElementById('minimize-btn').addEventListener('click', () => {
        isMinimized = !isMinimized;
        if (isMinimized) {
            overlay.style.transform = 'translateX(100%)';
            toggleBtn.style.display = 'block';
        } else {
            overlay.style.transform = 'translateX(0)';
            toggleBtn.style.display = 'none';
        }
    });

    document.getElementById('close-btn').addEventListener('click', () => {
        overlay.style.transform = 'translateX(100%)';
        toggleBtn.style.display = 'block';
        isMinimized = true;
    });

    toggleBtn.addEventListener('click', () => {
        overlay.style.transform = 'translateX(0)';
        toggleBtn.style.display = 'none';
        isMinimized = false;
    });

    // Auto-load on script start
    setTimeout(() => {
        loadBtn.click();
    }, 1000);

    console.log('DestinyEleven Save Editor loaded!');
})();