const eggQuestions = [
  {
    questions: [
      "89 electrons, when neutral: ___",
      "58 protons, always: ___",
      "With 80 electrons, it's charge would be -2: ___",
    ],
    images: ["1.jpg"],
    answers: ["Ac", "Ce", "Pt"],
  },
  {
    questions: [
      "Group 3, Period 7: __",
      "If it had 10 electrons, it would have a charge of -2: __",
      "86 protons: __",
    ],
    images: ["2.png"],
    answers: ["Ac", "O", "Rn"],
  },
  {
    questions: [
      "Exception for Ionic Bonding, always has charge of +1: ___",
      "Wants to gain 2 electrons, in 2nd energy level: ___",
    ],
    images: ["3.jpg"],
    answers: ["Ag", "O"],
  },
  {
    questions: ["95 electrons when neutral: ___"],
    images: ["4.png"],
    answers: ["Am"],
  },
  {
    questions: [
      "#p<sup>+</sup> = (5.00x10<sup>2</sup> - 4.81548x10<sup>2</sup>) to correct sig figs: ____",
      "Lowercase letter in symbol for Tellurium: ___",
    ],
    images: ["5.png"],
    answers: ["Ar", "e"],
  },
  {
    questions: [
      "Charge of +2 for Ionic Bonding, 6th energy level: ___",
      "Lowercase letter in symbol for Sodium: ___",
    ],
    images: ["6.png"],
    answers: ["Ba", "a"],
  },
  {
    questions: [
      "Metalloid with fewest energy levels and protons __",
      "Group 3, Period 7 __",
      "2 energy levels, 6 valence electrons __",
      "Group 15, Period 2 ___",
    ],
    images: ["7.png"],
    answers: ["B", "Ac", "O", "N"],
  },
  {
    questions: [
      "With 60 electrons, it's charge would be -4: ___",
      "With a mass of 23 amu, it would have 12 neutrons: ___",
      "With a mass of 20, it would have 19 neutrons: ___",
    ],
    images: ["8.jpg"],
    answers: ["Ba", "Na", "Na"],
  },
  {
    questions: [
      "Lewis Dot has 2 electrons, 6th energy level: ___",
      "Lewis Dot has 5 electrons, Bohr model has 7 electrons: ___",
      "1 valence electron, 4 rings on Bohr model: ___",
    ],
    images: ["9.png"],
    answers: ["Ba", "N", "K"],
  },
  {
    questions: [
      "[Xe] 6s<sup>2</sup> : ___",
      "Transition metal with 39 protons: ___",
    ],
    images: ["10.jpg"],
    answers: ["Ba", "Y"],
  },
  {
    questions: ["Group 2, with 2 electrons for Ionic Bonding: ___"],
    images: ["11.jpg"],
    answers: ["Be"],
  },
  {
    questions: [
      "Element Symbol with 4 Protons: ___",
      "Group 18, 3 Energy Levels: ___",
      "16 electrons, when neutral: ___",
    ],
    images: ["12.jpg"],
    answers: ["Be", "Ar", "S"],
  },
  {
    questions: [
      "# p<sup>+</sup> = 4.9992x100 + 8x10-4: ___ ",
      "# p<sup>+</sup> = 2.31x10<sup>2</sup> / 3: ___",
      "# e- when neutral = 1.10x10<sup>2</sup>:___",
    ],
    images: ["13.png"],
    answers: ["B", "Ir", "Ds"],
  },
  {
    questions: [
      "16.44 / 3. = (in correct SF) = # p<sup>+</sup>: ___",
      "Lowercase letter in symbol for 17 p<sup>+</sup>: ___",
      "5.32 + 3 = (in correct SF) = # p<sup>+</sup>: ___",
      "4.15 x 2 = (in correct SF) = # p<sup>+</sup>: ___",
      "Uppercase letter in symbol for 218 / 2 = (in correct SF) = # p<sup>+</sup>: ___",
    ],
    images: ["14.png"],
    answers: ["B", "l", "O", "O", "M"],
  },
  {
    questions: [
      "Group 13, Period 2: ___",
      "71 electrons when neutral: ___",
      "Only metalloid in period 2: ___",
    ],
    images: ["15.png"],
    answers: ["B", "Lu", "B"],
  },
  {
    questions: [
      "+3 charge, would like to lose 3 electrons to only have 2 like He: ___",
      "-2 charge, 2nd Energy Level: ___",
      "66 electrons, when neutral: ___",
    ],
    images: ["16a.png", "16b.jpg"],
    answers: ["B", "O", "Dy"],
  },
  {
    questions: [
      "3 valence electrons, 2nd Bohr Energy Level: ___",
      "6 Lewis Dot electrons, 2 rings on Bohr model: ___",
      "With 10 electrons, it has a charge of -2: ___",
    ],
    images: ["17.jpg"],
    answers: ["B", "O", "O"],
  },
  {
    questions: [
      "+3 charge for ionic bonding, with 2 electrons: ___",
      "6 valence electrons, 2nd energy level: ___",
      "150 amu mass, with 76 neutrons: ___",
    ],
    images: ["18a.png", "18b.jpg"],
    answers: ["B", "O", "W"],
  },
  {
    questions: [
      "+3 for ionic bonding yields 2 electrons: ___",
      "With 90 electrons, it's charge would be +2: ___",
      "6th energy level & doesn't care to bond: ___",
    ],
    images: ["19.jpg"],
    answers: ["B", "U", "Rn"],
  },
  {
    questions: [
      "+2 charge for ionic bonding, has 18 total electrons: ___",
      "-3 charge for ionic bonding, has 10 total electrons: ___",
    ],
    images: ["20.png"],
    answers: ["Ca", "N"],
  },
  {
    questions: [
      "With 30 neutrons, this element's mass would be 50: ___",
      "28 electrons when neutral: ___",
      "Full valence shell, 2 energy levels: ___",
    ],
    images: ["21.png"],
    answers: ["Ca", "Ni", "Ne"],
  },
  {
    questions: [
      "# protons = the significant numbers in 0.00020: ___",
      "# protons = 14.8 rounded to 2 SF: ___",
    ],
    images: ["22.png"],
    answers: ["Ca", "P"],
  },
  {
    questions: [
      "Group 2, Period 4: ___",
      "75 protons, and 75 electrons when neutral: ___",
    ],
    images: ["23.png"],
    answers: ["Ca", "Re"],
  },
  {
    questions: [
      "Element with 6 protons (p<sup>+</sup>): ___",
      "86 electrons gives a charge of -1: ___",
    ],
    images: ["24.png"],
    answers: ["C", "At"],
  },
  {
    questions: [
      "Energy level 2, and it would like to gain or lose 4 electrons, to have a full valence shell: ___",
      "Only has 1 energy level, and it is full of electrons: ___",
      "With 70 electrons, it's charge would be -1: ___",
    ],
    images: ["25a.png", "25b.png"],
    answers: ["C", "He", "Er"],
  },
  {
    questions: [
      "27 protons: ___",
      "6 valence electrons, period 2: ___",
      "1 valence electron, 4 rings on Bohr model: ___",
    ],
    images: ["26.png"],
    answers: ["Co", "O", "K"],
  },
  {
    questions: [
      "Element with 4 neutrons, has a mass of 10 amu: ___",
      "Element with 8 electrons when neutral: ___",
      "6th period, 18th group: ___",
    ],
    images: ["27a.png", "27b.jpg"],
    answers: ["C", "O", "Rn"],
  },
  {
    questions: [
      "30 electrons would give a charge of -3: ___",
      "73 electrons would give a charge of +1: ___",
    ],
    images: ["28.jpg"],
    answers: ["Co", "W"],
  },
  {
    questions: [
      "With 33 neutrons, it's mass is 60 amu: ___",
      "With a mass of 50 amu, it has 27 neutrons: ___",
      "With 70 electrons, it would have a charge of -2: ___",
    ],
    images: ["29.png"],
    answers: ["Co", "V", "Er"],
  },
  {
    questions: [
      "Often the center element, can form 4 bonds, central element for life: ___",
      "6 valence electrons, 3rd energy level: ___",
      "-1 charge when it has 54 electrons: ___",
    ],
    images: ["30.jpg"],
    answers: ["C", "S", "I"],
  },
  {
    questions: [
      "# p<sup>+</sup> = # cm in 0.26 m: ___",
      "# e<sup>-</sup> when charge is -1 = # grams in 86000000 &#181;g: ___",
    ],
    images: ["31.png"],
    answers: ["Fe", "At"],
  },
  {
    questions: [
      "# protons = # sig figs in 0.0362750250: ___",
      "# protons = the 2 significant numbers in 0.00053: ___",
      "Lowercase letter in symbol for Seborgium: ___",
    ],
    images: ["32a.jpg", "32b.png"],
    answers: ["F", "I", "G"],
  },
  {
    questions: [
      "10 electrons gives it a charge of -1: ___",
      "7 valence electrons, 5th energy level: ___",
      "75 electrons would make it neutral: ___",
    ],
    images: ["33.png"],
    answers: ["F", "I", "Re"],
  },
  {
    questions: [
      "-1 charge for ionic bonding, 2 energy levels: ___",
      "118 electrons when neutral: ___",
    ],
    images: ["34a.jpg", "34b.jpg"],
    answers: ["F", "Og"],
  },
  {
    questions: [
      "Group 1, Period 7: ___",
      "118 protons: ___ (*use the 1 page periodic table, or a Googled one)",
    ],
    images: ["35a.png", "35b.png", "35c.png"],
    answers: ["Fr", "Og"],
  },
  {
    questions: [
      "Alkali Metal with 7 Energy Levels: ___",
      "Nonmetal with 8 protons = ___",
      "G1, P2= ____",
      "Group 14, 2 energy levels= __",
    ],
    images: ["36.png"],
    answers: ["Fr", "O", "Li", "C"],
  },
  {
    questions: [
      "1 electron on Lewis Dot, 7 Bohr energy levels: ___",
      "39 protons and 39 electrons: ___",
    ],
    images: ["37.png"],
    answers: ["Fr", "Y"],
  },
  {
    questions: [
      "Charge of +4 or -4, 4th energy level: ___",
      "No charge, 3rd energy level: ___",
    ],
    images: ["38a.jpg", "38b.png", "38c.jpg", "38d.jpg", "38e.jpg"],
    answers: ["Ge", "Ar"],
  },
  {
    questions: [
      "Group 14, 4 energy levels: ___",
      "Transition metal with 28 protons: ___",
      "Actinide with Average Atomic Mass of 238.04: ___",
      "Group 16, period 3: ___",
    ],
    images: ["39.jpg"],
    answers: ["Ge", "Ni", "U", "S"],
  },
  {
    questions: [
      "1 Lewis Dot electron, 1 bohr model electron: ___",
      "+3 ionic charge, 3rd energy level: ___",
      "With 74 neutrons, it's mass would be 150 amu: ___",
    ],
    images: ["40.png"],
    answers: ["H", "Al", "Os"],
  },
  {
    questions: [
      "With 2 neutrons, it has a mass of 3 amu: ___",
      "3rd energy level, 8 valence electrons: ___",
      "Wanting 3 electrons in period 3: ___",
    ],
    images: ["41.png"],
    answers: ["H", "Ar", "P"],
  },
  {
    questions: [
      "a proposed name for dubnium, element 105, never officially adopted: ___",
      "+1 charge for Ionic Bonding, 4th energy level: ___",
      "92 electrons when neutral: ___",
      "Gives away 1 electron from 3rd energy level to ionically bond: ___",
    ],
    images: ["42.png"],
    answers: ["Ha", "K", "U", "Na"],
  },
  {
    questions: [
      "Both Lewis Dot and Bohr Models only show 1 electron: ___",
      "Lewis Dot shows 7 electrons, and this would have 5 energy levels in the Bohr Model: ___",
    ],
    images: ["43.png"],
    answers: ["H", "I"],
  },
  {
    questions: [
      "Element that is the only exception to the octet rule: ___",
      "Needs 1 more electron for full octet, located in 5th energy level: ___",
      "Could bond with 4 Hydrogens to get a full octet, filling the 2nd level of the Bohr diagram: ___",
      "Can have a charge of +4 or -4, period 2: ___",
      "92 protons: ___",
      "5 valence electrons, wants to gain 3 more to be stable, like Argon: ___",
    ],
    images: ["44a.png", "44b.jpg", "44c.jpg"],
    answers: ["H", "I", "C", "C", "U", "P"],
  },
  {
    questions: [
      "[Xe] 6s<sup>2</sup> 4f<sup>1</sup><sup>0</sup>: ___",
      "[He] 2s<sup>2</sup> 2p<sup>3</sup>: ___",
      "[Ar] 4s<sup>1</sup>: ___",
    ],
    images: ["45a.jpg", "45b.jpg"],
    answers: ["Ho", "N", "K"],
  },
  {
    questions: [
      "3.2x10<sup>2</sup> - 2.53x10<sup>2</sup> = # p<sup>+</sup> in this element: ___",
      "Only significant numbers in 0.000015 = # p<sup>+</sup> in this element: ___",
      "Lowercase letter in symbol for Neon: ___",
    ],
    images: ["46.png"],
    answers: ["Ho", "P", "e"],
  },
  {
    questions: [
      "7 valence electrons, with 77 neutrons, it's mass would be 130: ___",
    ],
    images: ["47.png"],
    answers: ["I"],
  },
  {
    questions: [
      "-1 charge for ionic bonding, 53 protons: ___",
      "Wants 2 more electrons, 16 protons: ___",
    ],
    images: ["48.png"],
    answers: ["I", "S"],
  },
  {
    questions: [
      "Capital letter in symbol for 57 p<sup>+</sup>: ___ ",
      "# p+ = (2.2x10<sup>3</sup>) x (4.5x10<sup>-</sup><sup>2</sup>): ___",
      "# p+ = (3.36x10<sup>2</sup>) - (3.2x10<sup>2</sup>): ___",
    ],
    images: ["49.png"],
    answers: ["L", "Es", "S"],
  },
  {
    questions: [
      `With 58 neutrons, it's mass is 100 amu: ___", "When covalently bonding, it causes prefixes to lose an "a" or an "o": ___`,
    ],
    images: ["50a.png", "50b.png"],
    answers: ["Mo", "O"],
  },
  {
    questions: [
      "44 electrons would give a charge of -2: ___",
      "6 valence electrons, period 2: ___",
      "Needs 3 electrons to become stable like Ne: ___",
    ],
    images: ["51.jpg"],
    answers: ["Mo", "O", "N"],
  },
  {
    questions: [
      "With 60 neutrons, it's mass is 102 amu: ___",
      "-2 charge for ionic bonding has 10 electrons: ___",
      "36 electrons gives a charge of -2: ___",
    ],
    images: ["52.png"],
    answers: ["Mo", "O", "Se"],
  },
  {
    questions: [
      "Group 6, Period 5: ___",
      "92 electrons, when neutral: ___",
      "36 electrons would give a charge of -2: ___",
    ],
    images: ["53.png"],
    answers: ["Mo", "U", "Se"],
  },
  {
    questions: [
      "45 electrons gives the element a charge of -3: ___",
      "240 amu means there are 148 neutrons: ___",
      "-2 charge for ionic bonding has 18 electrons: ___",
      "-2 for ionic bonding has 36 electrons: ___",
    ],
    images: ["54.jpg"],
    answers: ["Mo", "U", "S", "Se"],
  },
  {
    questions: [
      "Ionic Charge of +1, allows it to get 10 electrons: ___",
      "Lowercase letter in element symbol for sodium: ___ ",
      "Can bond Ionically (charge of -3) or Covalently, 2nd energy level: ___",
    ],
    images: ["55.png"],
    answers: ["Na", "a", "N"],
  },
  {
    questions: [
      "Already has a full octet. Doesn't want to bond covalently or ionically, in period 2: ___",
      "With 26 neutrons, it would have a mass of 100 amu: ___",
    ],
    images: ["56a.png", "56b.png", "56c.png"],
    answers: ["Ne", "W"],
  },
  {
    questions: [
      "1.02x10<sup>2</sup> # of protons: ___",
      "0.000034x10<sup>-</sup><sup>5</sup> electrons when neutral: ___",
    ],
    images: ["57.jpg"],
    answers: ["N", "O", "Se"],
  },
  {
    questions: [
      "#p+ = (4 + 10.76) to correct sig figs: ____",
      "Lowercase letter in symbol for barium: ___",
      "#p<sup>+</sup> = # Hectograms in 4900 g: ___",
    ],
    images: ["58.png"],
    answers: ["P", "a", "In"],
  },
  {
    questions: [
      "Charge of -3 for ionic bonding, 3 rings on Bohr model: ___",
      "Charge of -1 for ionic bonding, 5 energy levels: ___",
      "With 101 neutrons, it's mass would be 200 amu: ___",
    ],
    images: ["59.jpg"],
    answers: ["P", "I", "Es"],
  },
  {
    questions: [
      "# p+ = 1.2x10<sup>1</sup> + 0.03x10<sup>2</sup>: ___",
      "# p+ = Only significant numbers in 53000: ___",
      "# e- when neutral = sig fig in 0.007: ___",
      "# p+ = 5.7x10<sup>7</sup> / 3.0x10<sup>6</sup>: ___",
    ],
    images: ["60.jpg"],
    answers: ["P", "I", "N", "K"],
  },
  {
    questions: [
      "1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>3</sup>: ___",
      "[Kr] 5s<sup>2</sup> 4d<sup>1</sup><sup>0</sup> 5p<sup>5</sup>: __",
      "[Ra] 7s<sup>2</sup>: ___",
      "With 54 electrons, it would have a charge of -2: ___",
    ],
    images: ["61.jpg"],
    answers: ["P", "I", "Ra", "Te"],
  },
  {
    questions: [
      "86 electrons would give it a -2 charge: ___",
      "Wants 2 bonds, in 2nd energy level: ___",
      "18 electrons gives a charge of -3: ___",
    ],
    images: ["62a.png", "62b.png"],
    answers: ["Po", "O", "P"],
  },
  {
    questions: [
      "56 neutrons would give it a mass of 100 amu: ___",
      "In group 15, and it has 10 electrons for ionic bonding: ___",
    ],
    images: ["63.jpg"],
    answers: ["Ru", "N"],
  },
  {
    questions: [
      "64",
      "For Ionic Bonding, it wants to gain 2 electrons. For Covalent Bonding, it wants to bond with 2 elements. 3rd energy level: ___",
      "95 protons: ___",
    ],
    images: ["64.jpg"],
    answers: ["S", "Am"],
  },
  {
    questions: [
      "Has 6 valence electrons, wants to form 2 bonds to gain access to 2 more. 3rd energy level: ___",
      "10 electrons would give a charge of -3: ___",
      "# of protons in <sup>2</sup><sup>0</sup>F: ___",
    ],
    images: ["65.png"],
    answers: ["S", "N", "9"],
  },
  {
    questions: [
      "1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>4</sup>: ___",
      "[He] 2s<sup>2</sup> 2p<sup>3</sup>: ___",
      "2 Bohr Energy levels, 6 valence electrons: ___",
      "Period 6, Group 6: ___",
    ],
    images: ["66.jpg"],
    answers: ["S", "N", "O", "W"],
  },
  {
    questions: [
      "Wants 2 bonds, 3 energy levels: ___",
      "Wants 2 bonds, 2nd valence shell: ___",
      "Wants 4 bonds, 2nd period: ___",
      "+1 ionic charge, 3rd row: ___",
    ],
    images: ["67a.jpg", "67b.jpg"],
    answers: ["S", "O", "C", "K"],
  },
  {
    questions: [
      "With 2 bonds, it can reach a full octet, in period 3: ___",
      "Only capital letter in element symbol for Tellurium: ___",
      "Full valence shell, 3rd energy level: ___",
    ],
    images: ["68.jpg"],
    answers: ["S", "T", "Ar"],
  },
  {
    questions: [
      "G16,P3 = S_",
      "92 protons = ___",
      "G15,P2 = ____",
      "G16,P3 = ____",
      "G1,P1 = _____",
      "G17,P5= _____",
      "G18,P2= _____",
      "(Group #, Period #)",
    ],
    images: ["69.png"],
    answers: ["S", "U", "N", "S", "H", "I", "Ne"],
  },
  {
    questions: [
      "With 127 neutrons, it's mass is 200 amu: ___",
      "Wants 4 bonds, generally middle (central) element: ___",
      "78 electrons would give a charge of -2: ___",
    ],
    images: ["70a.jpg", "70b.png"],
    answers: ["Ta", "C", "Os"],
  },
  {
    questions: [
      "Ionic Charge of -2, allows a full octet with 54 electrons: ___",
      "With 136 neutrons, it's mass would be 225amu: ___ ",
      "Actually a nonmetal, though it's on the left of the PT: ___",
    ],
    images: ["71.png"],
    answers: ["Te", "Ac", "H"],
  },
  {
    questions: [
      "With 54 electrons, it's charge would be -2: ___",
      "With 205 neutrons, it's mass would be 300 amu: ___",
    ],
    images: ["72.png"],
    answers: ["Te", "Am"],
  },
  {
    questions: [
      "With 94 electrons, it's charge would be -2: ___",
      "With 18 electrons, it's charge would be -3: ___",
    ],
    images: ["73.jpg"],
    answers: ["U", "P"],
  },
  {
    questions: [
      "If it had 25 electrons, it's charge would be -2: ___",
      "6 Lewis Dot electrons, 2 Bohr Rings: ___",
      "6 Valence electrons, 5th energy level: ___",
    ],
    images: ["74.jpg"],
    answers: ["V", "O", "Te"],
  },
  {
    questions: [
      "[Xe] 6s<sup>2</sup> 4f<sup>1</sup><sup>4</sup> 5d<sup>4</sup>",
      "5 energy levels, 7 valence electrons: ",
      "[Ar] 4s<sup>2</sup> 3d<sup>1</sup><sup>0</sup> 4p<sup>4</sup>",
    ],
    images: ["75.png"],
    answers: ["W", "I", "Se"],
  },
  {
    questions: [
      "[Kr] 5s<sup>2</sup> 4d<sup>1</sup> : ___",
      "[Rn] 7s<sup>2</sup> 5f<sup>7</sup> : ___",
      "1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>4</sup> : ___",
    ],
    images: ["76.png"],
    answers: ["Y", "Am", "S"],
  },
  {
    questions: [
      "Group 3, Period 5 : ___",
      "1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup>: __",
      "Mass of 15, with 8 neutrons: ___",
    ],
    images: ["77.jpg"],
    answers: ["Y", "Ar", "N"],
  },
];
