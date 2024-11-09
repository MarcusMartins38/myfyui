import { useSelector } from 'react-redux';
import Card from './components/Card';
import Sidebar from './components/Sidebar';
import TransactionTable from './components/TransactionTable';
import {
  selectTotalIncome,
  selectTotalOutcome,
  selectTotal,
} from './redux/transaction/transaction.selectors';
import TimeComparativeChart from './components/TimeComparativeChart';
import { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const totalIncome = useSelector(selectTotalIncome);
  const totalOutcome = useSelector(selectTotalOutcome);
  const total = useSelector(selectTotal);

  return (
    <div className="flex flex-row w-full max-w-[1200px] h-full">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div
        className={`pr-6 pt-4 w-full h-full transition-all duration-300 pl-20 ${isOpen ? 'sm:pl-72' : 'sm:pl-20'}`}
      >
        <header className="flex flex-col items-start mb-4">
          <h2 className="text-2xl font-bold">Welcome User!</h2>
          <p>Here’s what’s happening with your store today.</p>
        </header>

        <main className="flex flex-row w-full h-full">
          {/*Vertical Container*/}
          <div className="flex flex-col items-center h-full w-full">
            <section className="flex flex-col md:flex-row justify-center w-full">
              <Card
                icon="I"
                title="Total Income"
                value={totalIncome}
                tagText=""
                tagColor="green"
                iconBgColor="bg-success"
              />
              <Card
                icon="O"
                title="Total Outcome"
                value={totalOutcome}
                tagText=""
                tagColor="red"
                iconBgColor="bg-error/60"
              />
            </section>
            <div className="mb-4 w-full flex justify-center w-full">
              <Card
                icon="T"
                title="Total"
                value={total}
                tagText=""
                tagColor={total > 0 ? 'green' : 'red'}
                iconBgColor={total > 0 ? 'bg-success' : 'bg-error/60'}
              />
            </div>
            <TransactionTable />
            <TimeComparativeChart />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
