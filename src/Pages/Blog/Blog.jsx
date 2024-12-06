import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router";

const Blog = () => {
     return (
          <div className="lg:max-w-[1200px] md:max-w-[750px] mb-10  max-w-[400px] mx-auto">
               <div className="text-center space-y-4 mt-14">
                    <h1 className="text-[#749B3F] text-xl font-medium">Our Blog</h1>
                    <h1 className="text-2xl font-medium">Fresh Harvest Blog</h1>
                    <p>Welcome to the Fresh Harvest Blog, your go-to resource for all things related to fresh produce, healthy eating, and culinary <br />inspiration.</p>
               </div>
               <div className="mt-10 grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                    <div className="space-y-3 ">
                         <img src="https://s3-alpha-sig.figma.com/img/96fe/6bfa/481c4299a7107af033eb06c1b8da2aa4?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TIqUjh~AZHB4M-NSjZUkbwypT4o2f3CF7CQjqnYc3XnEN7JUrdh1wv5sBWy3vzMnd9swMNfVRe1ASCmOPcvECnwnm96W5N-U47yHA9jOem3p687wys9HLCfO~K~yc0s76TcumwyrmAjINlOIMwYkVoXmXCR62qRxieIjMlaKruJeuqZg9-yxCSE2yDY6PS67rcxzX8bcqJ6dQxE~iYEFfRcc5iEV5Qvj0zKKIU3hCpEfufNTl76-UDlPwaRfx1sVxSqPdOs1~WIBZhTAs5WHDNE7jpNKa2YGdw9VVfJL3ZKblljZH9fFzQzjD9RIO2hJ8T4Nz3O6iqaE2gXFN8UT1Q__" alt="" />
                         <p className="font-light text-sm">May 23, 2024</p>
                         <h5 className="text-lg font-semibold">Exploring Seasonal Delights: A Guide to What's Fresh Right Now</h5>
                         <Link className=" text-lg flex items-center font-semibold  text-[#FF6A1A]">
                              <span>Read More </span>  <FaArrowRightLong className="ml-2 mt-1" />

                         </Link>
                    </div>
                    <div className="space-y-3 ">
                         <img src="https://s3-alpha-sig.figma.com/img/fdde/0659/73e6e2f07c92c7c9ed02bcf94b09312f?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d4sQryeBFOdHXPJ-YRz4eZ1lK5zFOVB42tCga4x63inuHFEsEYl9JdQ72BPMHcOFxpCgzKnuseoAWlZwFmVXOnNugT-QcwxfCk7nc4IM8UMA~zAIrp3PeEiVW5a7FJOHaTTuB7gPN~D3fk4sjHqaYQQpCM3kj~1OYZns5RppwcZ19yMPdLoCOD5Lmlc1iwzIxL3O-asqvlZE7b6y0ZhAfCJDCAdVTfry-E2LEep2HfiQo6jkTOOYJqv28UZTzExi3l5jMIBwa5v~8MIcRocNrQ-SUWME5vameLpLeEjhkV-ft-4n5iUQhA3M6NDKkju7Q2ywvuRJbSWo~Gc1ljZo3A__" alt="" />
                         <p className="font-light text-sm">May 23, 2024</p>
                         <h5 className="text-lg font-semibold">Mastering Salad Creations: Tips and Tricks for Building Delicious and Nutritious Salads"</h5>
                         <Link className=" text-lg flex items-center font-semibold  text-[#FF6A1A]">
                              <span>Read More </span>  <FaArrowRightLong className="ml-2 mt-1" />

                         </Link>
                    </div>
                    <div className="space-y-3 ">
                         <img src="https://s3-alpha-sig.figma.com/img/e0c4/70ab/021ed043c19eba39f6497cb397f9cfe2?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wogj~5f70XwM3SxEGSDAb0staRHW8Sq1RhzTSROMgpThbI-tHjWEpkr5I~U7z5Oo48PHfkZdx8AHYEAbJEib2VnWlON2R~QyWFXd8Hoxd7ooA4AaZcngcHVEKrAZX8vlO-gomFZCI6ll9-aeZCiitHC-5ed6y3fCtGgcAkiu3mx1loTiHoizEjPrDVeUe1dnAo77W9Lf5CKxpf6ayybgzfUAzFMHaJg3kHl8LtOqTUGtuGGoNOgNREnKsTnHhEIZhiw~dUEZCA5Ibqjt1zRCIcGJL6pbZJx8b-5tckMaHvE7kuIishltHWOMqkhyDA0w2z6kGYT9l1aGy2BtHOi69A__" alt="" />
                         <p className="font-light text-sm">May 23, 2024</p>
                         <h5 className="text-lg font-semibold">The Art of Meal Prepping: How to Save Time and Eat Healthy Throughout the Week</h5>
                         <Link className=" text-lg flex items-center font-semibold  text-[#FF6A1A]">
                              <span>Read More </span>  <FaArrowRightLong className="ml-2 mt-1" />

                         </Link>
                    </div>
               </div>
          </div>
     );
};

export default Blog;