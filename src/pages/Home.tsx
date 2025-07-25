import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

const Home: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
          Bienvenido a Axon App
        </h2>
        <p className="mt-4 text-xl text-gray-500 dark:text-gray-300">
          Una aplicación moderna construida con React, TypeScript, Vite y Tailwind CSS
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <Card title="React">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Biblioteca JavaScript para construir interfaces de usuario
          </p>
          <Button variant="primary">Aprender más</Button>
        </Card>

        <Card title="TypeScript">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Superset de JavaScript que añade tipado estático
          </p>
          <Button variant="secondary">Explorar</Button>
        </Card>

        <Card title="Tailwind CSS">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Framework CSS utilitario para diseños rápidos y responsivos
          </p>
          <Button variant="outline">Documentación</Button>
        </Card>
      </div>
    </div>
  );
};

export default Home;