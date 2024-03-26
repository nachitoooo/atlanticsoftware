// mercadopago.ts

import axios from 'axios';

const ACCESS_TOKEN = 'TEST-6047770759203394-032617-e1238f7731dbce07c21cac9fb954662d-716882574';

export async function createPreference(description: string, transaction_amount: number) {
  try {
    const response = await axios.post(
      'https://api.mercadopago.com/checkout/preferences',
      {
        items: [
          {
            title: description,
            quantity: 1,
            currency_id: 'ARS',
            unit_price: transaction_amount,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
