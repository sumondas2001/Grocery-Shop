import { Link } from "react-router";

const SingUp = () => {
     return (
          <div className="hero min-h-screen">
               <div className="hero-content ">

                    <div className="card bg-base-100 w-96 max-w-lg shrink-0 shadow-2xl">
                         <h1 className="text-5xl font-bold mb-6 text-center mt-6">Sing Up </h1>
                         <form className="card-body">
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Email</span>
                                   </label>
                                   <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                              </div>
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Password</span>
                                   </label>
                                   <input type="password" placeholder="password" className="input input-bordered" name="password" required />

                              </div>
                              <div className="form-control mt-6">

                                   <input className="btn bg-[#FF6A1A] text-base font-medium" type="submit" value="Sing Up" />
                              </div>
                         </form>
                         <div className="text-center mb-10">
                              <p>Or Sign In with</p>

                              <h5>Have an account? <Link to={'/logIn'} className="text-[#FF6A1A]">Log In</Link></h5>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default SingUp;