import { Benefit, Discount } from "./types";

const urlApiLaNacion = process.env.NEXT_PUBLIC_API_LA_NACION_URL; 

export async function getBenefits(): Promise<Benefit[]> {
  const res = await fetch(urlApiLaNacion + '/v1/api/accounts/benefits');

  if (!res.ok) {
      throw new Error('BEN000 - Error al obtener los beneficios');
    }
    return res.json();
  }
  
export async function getDiscounts(): Promise<Discount[]> {
    const res = await fetch(urlApiLaNacion + '/v1/api/accounts/discount-cards');

    if (!res.ok) {
        throw new Error('DIS000 - Error al obtener los descuentos');
    }
    return res.json();
}