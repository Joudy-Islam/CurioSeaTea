import History from './pages/History/History';

function App() {
  const path = window.location.pathname;

  if (path === "/history") {
    return <History />;
  }

  return <History />;
}

export default App;
