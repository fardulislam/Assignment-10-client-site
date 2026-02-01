 
 import bannerimg from '../assets/car--v2-removebg-preview.png';
 const Banner3 = () => {
  const service = [
    {
      icon:bannerimg,
      title: "Express & Standard Delivery",
      description:
        "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    },
    {
      icon:bannerimg,
      title: "Nationwide Delivery",
      description:
        "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    },
    {
      icon:bannerimg,
      title: "Fulfillment Solution",
      description:
        "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    },
    {
      icon:bannerimg,
      title: "Cash on Home Delivery",
      description:
        "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    },
    {
      icon:bannerimg,
      title: "Corporate Service / Contract In Logistics",
      description:
        "Customized corporate services which includes warehouse and inventory management support.",
    },
    {
      icon:bannerimg,
      title: "Parcel Return",
      description:
        "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    },
  ];

  return (
    <div className="bg-primary p-10 rounded-2xl  ">
      <div className="text-center max-w-3xl mx-auto text-white">
        <h1 className="font-bold text-2xl  ">Our service</h1>
        <p>
          We offer affordable and reliable car rental services with a wide
          selection of well-maintained vehicles. Enjoy easy booking, flexible
          rental options, and a smooth driving experience for every journey.
        </p>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-3 p-4">
        {service.map(({ title, description,icon },index) => (
          <div className="bg-white text-center space-y-4 p-6 rounded-2xl" key={index}>
            <img className='w-20  p-2 mx-auto bg-amber-100 rounded-full' src={icon} alt="" />
            <h2 className="text-2xl font-semibold ">{title}</h2>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner3;
