import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Tag from './components/Tag';
import TransactionTable from './components/TransactionTable';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-row w-full h-full">
      <Sidebar />

      <div className="px-6 pt-4 w-full h-full">
        <header className="flex flex-col items-start">
          <h1>Welcome User!</h1>
          <p>Here’s what’s happening with your store today.</p>
        </header>

        <main className="flex flex-row w-full h-full">
          {/*Vertical Container*/}
          <div className="flex flex-col h-full w-full">
            <section className="flex flex-col md:flex-row">
              <div className="flex flex-row items-center justify-between w-full max-w-80 py-8 px-6 bg-base-200 rounded-2xl mb-2 mr-2">
                <div className="w-[45px] h-[45px] flex items-center justify-center rounded-lg bg-secondary">
                  t
                </div>
                <div className="flex flex-col items-start justify-between">
                  <span>Total Income</span>
                  <h2 className="font-bold text-2xl">$632.000</h2>
                </div>
                <Tag text="+5.10%" color="green" />
              </div>
              <div className="flex flex-row items-center justify-between w-full max-w-80 py-8 px-6 bg-base-200 rounded-2xl mb-2 mr-2">
                <div className="w-[45px] h-[45px] flex items-center justify-center rounded-lg bg-primary">
                  t
                </div>
                <div className="flex flex-col items-center justify-between">
                  <span>Total Income</span>
                  <h2 className="font-bold text-2xl">$632.000</h2>
                </div>
                <Tag text="-1.30%" color="red" />
              </div>
            </section>

            <TransactionTable />
          </div>

          <div>Qualquer coisa</div>
        </main>
      </div>
    </div>
  );
}

export default App;
