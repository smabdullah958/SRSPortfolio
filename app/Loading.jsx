const Loading = () => {
  return (
     <div className="flex items-center justify-center min-h-screen bg-[#111]">
      <div className="relative flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

        <div className="absolute w-20 h-20 rounded-full border-2 border-blue-500/30 animate-ping"></div>
      </div>
    </div>

  );
};
export default Loading;