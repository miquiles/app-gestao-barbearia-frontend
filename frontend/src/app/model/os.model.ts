import { Product } from './product.model';
import { CurrencyPipe } from "@angular/common";

export interface Os {

    id?: number;
    paymentType: string;
    paymentsStatus: string;
    clientDocument: string;
    totalValue: number;
    products: Product[];
}

