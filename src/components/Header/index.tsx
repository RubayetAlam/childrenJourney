import { AiOutlineLeft } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
export default function Header() {
    const navigate = useNavigate()
    const goBack = () => {
        navigate(-1)
    }
    return (
        <div className="rouded-md flex flex-row justify-between bg-gray-50 w-full p-4 rounded-md items-center">
            <span className="text-indigo-500 font-medium">Create course</span>
            <button className="border-2 rounded-full p-2" onClick={goBack}>
                <AiOutlineLeft />
            </button>
        </div>
    )
}
