export interface Benefit {
    id: string;
    name: string;
    image: string;
    url: string;
    highestBenefits: {
      "Club La Nación Black": number;
      "Club La Nación Premium": number;
      "Club La Nación Classic": number;
    };
    distance: string;
}

export interface Discount {
    id: string;
    name: string;
    image: string;
    url: string;
}
