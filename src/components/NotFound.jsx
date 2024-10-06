import {Button, Result} from "antd";
import {useNavigate} from "react-router-dom";

export function NotFound() {
    const navigate = useNavigate()
    return (
        <>
            <div className="min-h-screen w-full justify-center items-center">
                <Result
                    status="404"
                    title="404"
                    subTitle="Sorry, the page you visited does not exist."
                />
                <div className="w-full flex justify-center">
                    <button onClick={() => navigate('/quiz')}
                        className="mt-3 p-4 bg-red-500 hover:bg-red-300 w-1/8 md:w-1/4 sm:w-1/2 flex justify-center align-center text-2xl shadow-sm rounded-2xl text-white cursor-pointer">
                        Back Home
                    </button>
                </div>

            </div>

        </>
    )
}