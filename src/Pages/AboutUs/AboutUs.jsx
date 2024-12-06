import SpecialOffer from "../../components/SpecialOffer/SpecialOffer";

const logo = "../../../src/assets/icon/Logo.svg";

const AboutUs = () => {
     return (
          <div className="flex lg:flex-row  flex-col lg:max-w-[1200px] md:max-w-[750px]  max-w-[400px] mx-auto mt-10 mb-10 items-center">
               <div className="relative">


                    <img src="https://s3-alpha-sig.figma.com/img/f44b/c32f/df06687fee7e8620f09ced01f58b28c8?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iXzcX5KQ0Qdoy7~JucCjjWWjqa1535c71zfeRbxvbqnb~hCQnzBBYlRpV86vubbe0IdrXITSR8ne0Ou6MVIudqaNl476FZLUlpIXAiGeTVd7yOh5ezSnelS-P2G7z-d-pzOpVB5bU5xj1IMRt3kRFKOlF0s5b9l-3sjtX8ixiFfdV-2DbTB2ov5lwPc6cDlbs52uR14sOAA9Z5n2XnIFW8dbwJhgRMfVamr~jSHE7LhPu1zx3qWZhBv3ElPDh2GIvHQ9PANtsI0wmwFQta0SUMUo9mzX-Tz~ZTR6Cxg8KRIoXHXoyMIgIV37uWzhchuYPYLExeny6RZ402eBYdhnGw__" alt="" />


                    <h1 className="flex items-center gap-2 bg-white p-2 absolute bottom-20 right-32" >
                         <img className="size-8" src={logo} alt="" />
                         <h1 className="  text-lg font-bold text-green-900">Fresh Harvests</h1>
                    </h1>
               </div>
               <div className="space-y-6 lg:text-start text-center">
                    <h1 className="text-xl font-medium text-[#749B3F]">About Us</h1>
                    <h1 className="text-5xl font-medium">About Fresh Harvest</h1>
                    <p className="text-base font-normal">Welcome to Fresh Harvest, your premier destination for high-quality and fresh produce. We are passionate about providing you with the finest fruits, vegetables, and salad ingredients to nourish your body and delight your taste buds. With a commitment to excellence, sustainability, and customer satisfaction, Fresh Harvest is here to revolutionize your grocery shopping experience.</p>
                    <button className="text-[#FF6A1A] border border-[#FF6A1A] px-4 py-2 hover:bg-[#FF6A1A] hover:text-white">Read More</button>
               </div>

               <SpecialOffer></SpecialOffer>
          </div>
     );
};

export default AboutUs;