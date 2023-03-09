import { Component } from '@angular/core';

@Component({
  selector: 'app-odds-converter',
  templateUrl: './odds-converter.component.html',
  styleUrls: ['./odds-converter.component.css']
})
export class OddsConverterComponent {

  americanOdds = '';
  decimalOdds = '';
  fractionalOdds = '';

  convertOdds(): void {
    if (this.americanOdds !== '') {
      const decimal = this.convertAmericanToDecimal(+this.americanOdds);
      this.decimalOdds = decimal.toString();
      this.fractionalOdds = this.convertDecimalToFractional(decimal);
    } else if (this.decimalOdds !== '') {
      const american = this.convertDecimalToAmerican(+this.decimalOdds);
      this.americanOdds = american.toString();
      this.fractionalOdds = this.convertDecimalToFractional(+this.decimalOdds);
    } else if (this.fractionalOdds !== '') {
      const decimal = this.convertFractionalToDecimal(this.fractionalOdds);
      this.decimalOdds = decimal.toString();
      this.americanOdds = this.convertDecimalToAmerican(decimal).toString();
    } else {
      this.clearFields();
    }
  }

  convertAmericanToDecimal(americanOdds: number): number {
    if (americanOdds >= 100) {
      return (americanOdds / 100) + 1;
    } else {
      return (Math.abs(100 / americanOdds) + 1);
    }
  }

  convertDecimalToAmerican(decimalOdds: number): number {
    if (decimalOdds <= 1) {
      return -100 / decimalOdds;
    } else {
      return decimalOdds - 1 * 100;
    }
  }
  
  convertDecimalToFractional(decimalOdds: number): string {
    let numerator = decimalOdds - 1;
    let denominator = 1;
  
    // Find the greatest common divisor of the numerator and denominator
    const gcd = (a: number, b: number): number => {
      if (b === 0) {
        return a;
      }
      return gcd(b, a % b);
    };
  
    // Simplify the fraction by dividing numerator and denominator by their gcd
    const simplifyFraction = (numerator: number, denominator: number): [number, number] => {
      const divisor = gcd(numerator, denominator);
      return [numerator / divisor, denominator / divisor];
    };
  
    while (!Number.isInteger(numerator) && !Number.isInteger(denominator)) {
      numerator *= 10;
      denominator *= 10;
    }
  
    const [simpleNumerator, simpleDenominator] = simplifyFraction(numerator, denominator);
    return `${simpleNumerator}/${simpleDenominator}`;
  }
  
    
      convertFractionalToDecimal(fractionalOdds: string): number {
        const [numerator, denominator] = fractionalOdds.split('/');
        return (+numerator / +denominator) + 1;
      }
    
      clearFields(): void {
        this.americanOdds = '';
        this.decimalOdds = '';
        this.fractionalOdds = '';
      }
    
    }