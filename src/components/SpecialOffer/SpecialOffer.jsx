
const SpecialOffer = () => {
     return (
          <div className="flex lg:flex-row-reverse justify-between items-center flex-col mt-10 mb-10 lg:max-w-[1200px] md:max-w-[750px]  max-w-[400px] mx-auto">
               <div>
                    <img className="lg:w-[627px] md:w-[600px] w-full lg:h-96 h-80 md:h-96 mt-10 mb-10" src="https://s3-alpha-sig.figma.com/img/f363/3207/a039335aee0a8366f33f4a9cea83d952?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dyQg1aDE8LY0dyCfCSGoPNTW0P8DFdApRsU~8Rzj2bHtqhqauu42Re-m64TCxLbnJB0ZVNdDm0ZqucB0JXsEzodo~uLBPs64WXpF2oHoMI-DuOp8EfuKzJ-zXNZmEDOaA-vqkk2m6U8BZvExJy3r0R-N5O6ABustZJVTyEqDk-iVKfSlmTGvPqR3BN7dNFfHMZRX4Cbxc5Zngkm0AjPuvnE2rlzr2Q6ebh9dC32ZnUPAgPAjmMTDiv7mvMJMgVgVcJfXcKD~J966MCBV2l37QG5jnm054bPYXlbhN7S71NKD5HjOWrMOO3GmLr-kaMwQtcRho3vHvvi0RqrO7SqWcg__" alt="" />
               </div>
               <div className="space-y-6 md:text-center text-center lg:text-start ">
                    <h1 className="text-lg text-[#749B3F] font-medium">SpecialOffer</h1>
                    <h1 className="text-5xl font-medium">Seasonal Fruit Bundle</h1>
                    <h3 className="text-3xl font-medium">Discount up to <span className="text-[#FF6A1A]">80% OFF</span></h3>

                    <div className="flex gap-10 md:justify-center justify-start lg:justify-start">
                         <div className="text-lg font-medium text-center">
                              <h4 >03</h4>
                              <p>Days</p>
                         </div>
                         <div className="text-lg font-medium text-center">
                              <h4 >18</h4>
                              <p>Hour</p>
                         </div>
                         <div className="text-lg font-medium text-center">
                              <h4 >54</h4>
                              <p>Min</p>
                         </div>
                         <div className="text-lg font-medium text-center">
                              <h4 >21</h4>
                              <p>Second</p>
                         </div>
                    </div>
                    <p className="text-xl mt-8  font-medium inline-block rounded-2xl bg-[#176D38] px-3 py-1">CODE : <span className="text-[#FAC714]">FRESH25</span></p>
               </div>
          </div>
     );
};

export default SpecialOffer;