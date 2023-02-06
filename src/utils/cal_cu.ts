export default {
    cal_cu: function (g:number, rcr:number, h:number) {
        var solution;
        if (g === 80) {
            if (h === 10) {
                switch (rcr) {
                    case 0: solution = 1.19; break;
                    case 1: solution = 0.97; break;
                    case 2: solution = 0.81; break;
                    case 3: solution = 0.70; break;
                    case 4: solution = 0.60; break;
                    case 5: solution = 0.53; break;
                    case 6: solution = 0.47; break;
                    case 7: solution = 0.43; break;
                    case 8: solution = 0.41; break;
                    case 9: solution = 0.41; break;
                    case 10: solution = 0.40; break;
                }
            }
            if (h === 30) {
                switch (rcr) {
                    case 0: solution = 1.19; break;
                    case 1: solution = 1.00; break;
                    case 2: solution = 0.86; break;
                    case 3: solution = 0.76; break;
                    case 4: solution = 0.67; break;
                    case 5: solution = 0.59; break;
                    case 6: solution = 0.53; break;
                    case 7: solution = 0.49; break;
                    case 8: solution = 0.47; break;
                    case 9: solution = 0.46; break;
                    case 10: solution = 0.45; break;
                }
            }
            if (h === 50) {
                switch (rcr) {
                    case 0: solution = 1.19; break;
                    case 1: solution = 1.05; break;
                    case 2: solution = 0.93; break;
                    case 3: solution = 0.83; break;
                    case 4: solution = 0.76; break;
                    case 5: solution = 0.67; break;
                    case 6: solution = 0.62; break;
                    case 7: solution = 0.57; break;
                    case 8: solution = 0.54; break;
                    case 9: solution = 0.53; break;
                    case 10: solution = 0.52; break;
                }
            }
        }
        else if (g === 50) {
            if (h === 10) {
                switch (rcr) {
                    case 0: solution = 1.11; break;
                    case 1: solution = 0.92; break;
                    case 2: solution = 0.78; break;
                    case 3: solution = 0.68; break;
                    case 4: solution = 0.59; break;
                    case 5: solution = 0.52; break;
                    case 6: solution = 0.47; break;
                    case 7: solution = 0.43; break;
                    case 8: solution = 0.41; break;
                    case 9: solution = 0.40; break;
                    case 10: solution = 0.40; break;
                }
            }
            if (h === 30) {
                switch (rcr) {
                    case 0: solution = 1.19; break;
                    case 1: solution = 0.95; break;
                    case 2: solution = 0.83; break;
                    case 3: solution = 0.73; break;
                    case 4: solution = 0.64; break;
                    case 5: solution = 0.57; break;
                    case 6: solution = 0.52; break;
                    case 7: solution = 0.48; break;
                    case 8: solution = 0.46; break;
                    case 9: solution = 0.45; break;
                    case 10: solution = 0.44; break;
                }
            }
            if (h === 50) {
                switch (rcr) {
                    case 0: solution = 1.11; break;
                    case 1: solution = 0.98; break;
                    case 2: solution = 0.87; break;
                    case 3: solution = 0.79; break;
                    case 4: solution = 0.71; break;
                    case 5: solution = 0.64; break;
                    case 6: solution = 0.59; break;
                    case 7: solution = 0.55; break;
                    case 8: solution = 0.52; break;
                    case 9: solution = 0.51; break;
                    case 10: solution = 0.50; break;
                }
            }
        }
        else if (g === 20) {
            if (h === 10) {
                switch (rcr) {
                    case 0: solution = 1.04; break;
                    case 1: solution = 0.88; break;
                    case 2: solution = 0.75; break;
                    case 3: solution = 0.66; break;
                    case 4: solution = 0.58; break;
                    case 5: solution = 0.51; break;
                    case 6: solution = 0.46; break;
                    case 7: solution = 0.43; break;
                    case 8: solution = 0.41; break;
                    case 9: solution = 0.40; break;
                    case 10: solution = 0.40; break;
                }
            }
            if (h === 30) {
                switch (rcr) {
                    case 0: solution = 1.04; break;
                    case 1: solution = 0.90; break;
                    case 2: solution = 0.79; break;
                    case 3: solution = 0.70; break;
                    case 4: solution = 0.62; break;
                    case 5: solution = 0.56; break;
                    case 6: solution = 0.51; break;
                    case 7: solution = 0.47; break;
                    case 8: solution = 0.45; break;
                    case 9: solution = 0.44; break;
                    case 10: solution = 0.44; break;
                }
            }
            if (h === 50) {
                switch (rcr) {
                    case 0: solution = 1.04; break;
                    case 1: solution = 0.92; break;
                    case 2: solution = 0.83; break;
                    case 3: solution = 0.75; break;
                    case 4: solution = 0.68; break;
                    case 5: solution = 0.61; break;
                    case 6: solution = 0.57; break;
                    case 7: solution = 0.53; break;
                    case 8: solution = 0.51; break;
                    case 9: solution = 0.50; break;
                    case 10: solution = 0.49; break;
                }
            }
        }
        return solution;
    }
}