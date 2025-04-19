import { useNavigate, useRouteError } from "react-router-dom";

type ErrorType = {
  statusText?: string;
  message?: string;
  status?: number;
  action?: () => void;
  actionText?: string;
};

const ErrorPage = () => {
  const error = useRouteError();
  const { statusText, message, status, actionText, action } =
    error as ErrorType;
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 px-4 font-montserrat">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md text-center">
        <h1 className="text-7xl font-extrabold text-red-500">
          {status || "Error"}
        </h1>
        <p className="mt-4 text-2xl font-semibold text-gray-800">
          {statusText || "Algo salió mal"}
        </p>
        <p className="mt-2 text-lg text-gray-600">
          {message ||
            "Ocurrió un error inesperado. Por favor, inténtalo de nuevo más tarde."}
        </p>
        <button
          onClick={() => (action ? action() : navigate("/"))}
          className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105"
        >
          {actionText || "Ir a la página principal"}
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
