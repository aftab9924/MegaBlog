// eslint-disable-next-line react/prop-types
const Loading = ({ isLoading }) => {
    if (isLoading) {
      return (
        <div className="flex justify-center items-center h-screen">
          <img  alt="Loading..." className="bg-[url('https://loading.io/assets/mod/spinner/spinner/lg.gif')] bg-gray-800 bg-blend-overlay bg-opacity-60 min-h-screen w-full bg-cover bg-center" />
        </div>
      );
    }
  
  };
  
  export default Loading;