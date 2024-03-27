import { useState } from 'react';
import { Button } from "../ui/button";
import { createPreference } from './mercadopago';

export function Pricing() {
  // Estado para almacenar el estado de "loading" de cada botón
  const [loading, setLoading] = useState([false, false, false]);

  async function handleChoosePlan(description: string, transaction_amount: number, index: number) {
    try {
      // Actualizar el estado del botón clicado a "loading"
      setLoading(prevLoading => {
        const newLoading = [...prevLoading];
        newLoading[index] = true;
        return newLoading;
      });

      const response = await createPreference(description, transaction_amount);
      const preferenceId = response.id;
      window.location.href = `https://www.mercadopago.com.ar/checkout/v1/redirect?preference-id=${preferenceId}`;
    } catch (error) {
      console.error('Error al crear la preferencia de pago:', error);
    } finally {
      // Restaurar el estado del botón clicado a "no loading" después de completar la solicitud
      setLoading(prevLoading => {
        const newLoading = [...prevLoading];
        newLoading[index] = false;
        return newLoading;
      });
    }
  }

  return (
    <section className="w-full py-20">
      <div className="flex flex-col items-center space-y-4">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-400">Our pricing</h2>
          <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
            Start with a 14-day free trial. No credit card required.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3">
          {['Individual', 'PyMe', 'Company'].map((plan, index) => (
            <div key={plan} className="flex flex-col items-center space-y-2 border border-gray-200 rounded-lg p-4 md:space-y-4 md:p-6 dark:border-gray-850 dark:border-gray-800">
              <h3 className="font-semibold text-xl">{plan}</h3>
              <p className="text-3xl font-bold">{index === 0 ? '$9' : (index === 1 ? '$29' : '$55')}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Per month, per user</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {index === 0
                  ? 'All the basics for teams new to project management.'
                  : 'Advanced features for teams wanting to do more.'
                }
              </p>
              <Button size="sm" variant="outline" onClick={() => handleChoosePlan(`Plan ${plan}`, index === 0 ? 900 : (index === 1 ? 2900 : 5500), index)} disabled={loading[index]}>
                {loading[index] ? 'Processing...' : 'Choose'}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
