import ProgressBar from 'components/progressBar/ProgressBar';

import './App.css';

function App() {
  return (
    <section className="section-padding bg-height">
      <div className="container container-padding">
        <ProgressBar done={100} />
      </div>
    </section>
  );
}

export default App;