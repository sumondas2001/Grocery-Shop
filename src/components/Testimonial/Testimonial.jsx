
const Testimonial = () => {
     return (
          <div className="lg:max-w-[1200px] md:max-w-[750px] mt-10 mb-10  max-w-[400px] mx-auto">
               <div className="text-center space-y-4 mt-14">
                    <h1 className="text-[#749B3F] text-xl font-medium">Testimonial</h1>
                    <h1 className="text-2xl font-medium">What Our Customers Say</h1>
                    <p>Dent just take our word for there's what some of our customers have to say about <br />
                         their experience with Fresh Harvest:</p>
               </div>

               <div className="flex lg:flex-row items-center mt-10 justify-between  flex-col">
                    <div>
                         <img

                              className="w-[400px] rounded-full h-80 object-cover " src="https://s3-alpha-sig.figma.com/img/4dfe/1696/55e6290c76608260bfa35298a48c4efd?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RsEJsgOSZI4J5QfrUQ3BqFrs5tshKe3T-vBSp3W25i3YTJSlvKXiy9De49gndO5ucjE9gOCY7EsKcsVK2GyrYZZL-cx1OLxkKOxTRmBoUf9xBXAmBUv7RQ9WnXrMh6SckfP8ek6RfuXj9ypi1-yPAtf6zTQfL6oso8Is32UZfS4RC4tDu0lIwPdk1hnAQuuji7vm9Zh7foBVJMIw3JskPd~n-0~927PX6DHlIAK3h5boPxfiZwOEPUwlytTBB2On4ylFWyxfNATlgdPxAjA4KWP582ibC3-MCKfZ8ih20o9l2CEFIy6ICbnqj3BFmV36HayUOIy4SSQcH8LnWRQQMg__" alt="" />
                    </div>
                    <div>
                         <p className="w-[700px] text-base font-normal">"I absolutely love Fresh Harvest! The quality of their produce is outstanding. It's always fresh, flavorful, and delicious. The convenience of ordering online and having it delivered to my doorstep saves me so much time. Fresh Harvest has become my go-to for all my fruit and vegetable needs.</p>
                         <h1 className="text-lg mt-10 font-medium"><span className="font-bold">Jane Doe</span> - Professional chef</h1>
                    </div>
               </div>
          </div>
     );
};

export default Testimonial;