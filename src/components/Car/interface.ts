export interface ICar {
    brand: string;
    name: string;
    rent: {
        period: string;
        price: number;
    }
    thumbnail: string;
};

export interface ICarData {
    data: ICar;
};
