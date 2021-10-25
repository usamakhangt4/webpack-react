/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable prettier/prettier */
import React from 'react';
import { belts } from '../../mockData';

export default function AllBelts() {
  return (
    <main className="main-container">
      <h1>Bellow are the Belts from competency sheet</h1>
      <section className="belts-container">
        {belts.map(belt => (
          <a href={belt.url} key={belt.id} className="card">
            {belt.title}
          </a>
        ))}
      </section>
    </main>
  );
}
