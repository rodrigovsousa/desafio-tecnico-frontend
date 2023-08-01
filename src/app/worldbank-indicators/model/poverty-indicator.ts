import { Country } from './country';
import { Indicator } from "./indicator";

export interface PovertyIndicator {
    indicator: Indicator;
    country: Country;
    date: string;
}
