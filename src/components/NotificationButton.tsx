import { useNotification } from "../hooks/useNotification";

const NotificationButton: React.FC = () => {
  const { showNotification } = useNotification();

  return(

    <button onClick={() => showNotification("✅ Transaccion completada con exito!")}>
      Confirmar transaccion
    </button>
  )
}


export default NotificationButton;