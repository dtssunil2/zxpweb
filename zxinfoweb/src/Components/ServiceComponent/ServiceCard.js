
const ServiceCard = ({ icon, title, details }) => {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="mb-9 rounded-lg bg-white p-10 shadow-md hover:shadow-lg  md:px-7 xl:px-10">
        <div className="bg-blue-500 rounded-full flex items-center mr-96 justify-center mb-3 w-16 h-16 mx-auto">
          {icon}
        </div>
        <h4 className="mb-4 text-xl font-semibold  ">
          {title}
        </h4>
        <p className="">{details}</p>
      </div>
    </div>
  );
};
export default ServiceCard;