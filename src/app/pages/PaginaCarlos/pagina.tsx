import { useNavigate } from "react-router-dom"
import '../PaginaCarlos/pagina_button.css'

export const Pagina = () => {
    const navigate = useNavigate();
    
    const handleClick = () => {
         navigate("/pagina-carlos")
    }

    return (
        <div >
            <button onClick={handleClick} className="button">criar Novo</button>
        </div>
    );
}