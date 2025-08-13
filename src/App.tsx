import { NotificationContext, NotificationProvider } from "./contexts/NotificationContext"
import Notification from "./components/Notification";
import NotificationButton from "./components/NotificationButton";

// NotificationContext
function App() {

  return (
    <NotificationProvider>
      <h1>💸 Transaccion casi lista 💸</h1>
      <p>Estas seguro que deseas compietar esta transaccion</p>
      <NotificationButton />
      <Notification />
    </NotificationProvider>
  )
}

export default App
