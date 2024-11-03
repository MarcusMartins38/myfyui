import { useSelector } from 'react-redux';
import Card from './components/Card';
import Sidebar from './components/Sidebar';
import TransactionTable from './components/TransactionTable';
import { selectTotalIncome, selectTotalOutcome } from './redux/transaction/transaction.selectors';

function App() {
  const totalIncome = useSelector(selectTotalIncome);
  const totalOutcome = useSelector(selectTotalOutcome);

  return (
    <div className="flex flex-row w-full h-full">
      <Sidebar />

      <div className="px-6 pt-4 w-full h-full">
        <header className="flex flex-col items-start mb-4">
          <h2 className="text-2xl font-bold">Welcome User!</h2>
          <p>Here’s what’s happening with your store today.</p>
        </header>

        <main className="flex flex-row w-full h-full">
          {/*Vertical Container*/}
          <div className="flex flex-col h-full w-full">
            <section className="flex flex-col md:flex-row mb-4">
              <Card
                icon="t"
                title="Total Income"
                value={totalIncome}
                tagText="+5.10%"
                tagColor="green"
                iconBgColor="bg-secondary"
              />
              <Card
                icon="t"
                title="Total Income"
                value={totalOutcome}
                tagText="-1.30%"
                tagColor="red"
                iconBgColor="bg-primary"
              />
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
