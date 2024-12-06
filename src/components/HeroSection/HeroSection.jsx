
const HeroSection = () => {
     return (
          <div>
               <div className="flex justify-between items-center lg:ml-28  ml-4">
                    <div className="space-y-4">
                         <h5 className="text-xl font-medium text-green-800">Welcome to Fresh Harvest</h5>
                         <h1 className="lg:text-7xl text-xl font-medium">Fresh Fruits and <br /> Vegetables</h1>
                         <p className="text-sm font-normal">At Fresh Harvests, we are passionate about providing you with the freshest and most <br />flavorful fruits and vegetables</p>
                         <button className="px-8 py-4 bg-[rgba(255,106,26,1)] text-white rounded-lg mt-8">Shop Now </button>


                         <div className="flex items-center gap-4 justify-end w-full">
                              <div className="">
                                   <h1 className="text-lg mb-2 font-bold text-[#176D38]">Special Offer</h1>
                                   <h2 className="text-2xl mb-2 font-medium">Fresh Salad</h2>
                                   <h1 className="text-base font-medium text-[#176D38]"> Up to <span className="text-2xl  font-medium border-red-600 border-2 rounded-full">70%</span>  off</h1>
                                   <p className="text-xl mt-8  font-medium inline-block rounded-2xl bg-[#176D38] px-3 py-1">CODE : <span className="text-[#FAC714]">FRESH25</span></p>
                              </div>
                              <img src="https://s3-alpha-sig.figma.com/img/a1a9/470d/cc411928dcab6c58340e4d0518dd1595?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RWhXQqsROSIQE6s5barTD2qEqU7B4xtN8Uhf61WXw-7NG~bTfD14nrV9OaT2v1A8Xlv0n9L-YZMQbw7suQG5XPXcfhPt5XxN4rnOOpCdMtCUmYhX2G9zIzXlVZ4XKbEbPdHHiFpdkJjJ8A2lquPjqp7jI14jrHntT6u-HJEjYXwPMK28p~FscGGr5dLrkmGt619-NyrWf7lQBJHNfAj02KpAZQAFUl22VAYgB7HJryb~LEPOsenDU1AOqDBGpTSlaRMMxfYWMvPELyW9cWhmHWzc3nlpwMX2oUEYnw64wNZu8s8y~AdDPAmzH~DDgGg1zpSRzxRKWyAZEY8hfFqCjg__" alt="" />
                         </div>

                         <div>
                              <h1 className="text-sm">Download App:</h1>
                              <div className="flex gap-4 mt-2">
                                   <img src="/src/assets/img/appstore.png" alt="" />
                                   <img src="/src/assets/img/googleplay.png" alt="" />
                              </div>
                         </div>
                    </div>
                    <div className="relative">
                         <div className="bg-[#749B3F]  lg:w-[400px] w-40 h-[700px] flex "></div>
                         <img className="lg:w-[900px] w-36 object-cover h-[600px] absolute lg:right-36 right-1 bottom-0" src="https://s3-alpha-sig.figma.com/img/c652/1eb2/12399b794493c0820ab34cb4e6b433a8?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YqHWaE3gRVFNxcFy-zEQzECfQVIY81HSnVewlbLcuLKago-INVG~~7pbwSIAvsh0qgHCmPDrD8Xnvyn9D1M7x~ovX72An8LsKjz2as60eTEYs1lSPzVXzh9jOQhhvq3orELFJaEulMSEw6wQeQ6aCIl0kS2vBIEVLNDMDElyAHa8oacaB1ge85EpOHrPsB1HEhXnTavH50LHOlNmF5~RBpTvPBWx8SxRqfwb86CPRsxk4bKDJySdLwaIjewrwqRmbkLpoq4e2vJhvdtCv9AdYxm~OlT5phBYsctIMotk1TymODwZnmrT3jRiUpZFRVsr1BsFaekgeFyNOREX2UnGpQ__" alt="" />
                    </div>
               </div>
          </div>
     );
};

export default HeroSection;